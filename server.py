#!/usr/bin/env python3
"""
Kartenstapel-Server. Nur Standardbibliothek, keine Installation nötig.

    python3 server.py                      # http://0.0.0.0:8000
    python3 server.py --port 9000 --host 127.0.0.1

Jeder Besucher bekommt beim ersten Aufruf ein Cookie mit einer zufälligen
Sitzungs-ID. Der Fortschritt liegt in data/<sid>.json. Zwei Leute auf demselben
Server sehen sich gegenseitig nicht.

Was das ausdruecklich NICHT ist: eine Benutzerverwaltung. Es gibt kein Passwort.
Wer die Sitzungs-ID hat, hat den Fortschritt; wer sein Cookie verliert, verliert
ihn. Fuer Lernkarten unter Kommilitonen ist das angemessen. Leg dort nichts ab,
was nicht oeffentlich werden darf, und stell den Dienst hinter TLS, wenn er
ueber das offene Netz erreichbar ist.
"""
import argparse
import http.cookies
import json
import os
import re
import secrets
import sys
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

SID_RE = re.compile(r"^[a-f0-9]{32}$")
MAX_BODY = 4 * 1024 * 1024          # 4 MB pro Sitzung; reicht fuer sehr viele Decks
LOCK = threading.Lock()
DATA_DIR = "data"


def path_for(sid):
    return os.path.join(DATA_DIR, sid + ".json")


class Handler(SimpleHTTPRequestHandler):

    # ---------------------------------------------------------- Sitzung
    def read_sid(self):
        raw = self.headers.get("Cookie")
        if not raw:
            return None
        try:
            jar = http.cookies.SimpleCookie(raw)
        except http.cookies.CookieError:
            return None
        m = jar.get("ks_sid")
        return m.value if m and SID_RE.match(m.value) else None

    def ensure_sid(self):
        sid = self.read_sid()
        return (sid, False) if sid else (secrets.token_hex(16), True)

    def set_cookie(self, sid):
        secure = "; Secure" if self.headers.get("X-Forwarded-Proto") == "https" else ""
        self.send_header(
            "Set-Cookie",
            "ks_sid=%s; Path=/; Max-Age=31536000; SameSite=Lax; HttpOnly%s" % (sid, secure),
        )

    def json_out(self, obj, sid=None, fresh=False, code=200):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("X-Kartenstapel", "1")
        self.send_header("Cache-Control", "no-store")
        if fresh and sid:
            self.set_cookie(sid)
        self.end_headers()
        self.wfile.write(body)

    # ---------------------------------------------------------- Routen
    def do_GET(self):
        if self.path.split("?")[0] == "/api/state":
            sid, fresh = self.ensure_sid()
            with LOCK:
                try:
                    with open(path_for(sid), encoding="utf-8") as f:
                        state = json.load(f)
                except (FileNotFoundError, ValueError):
                    state = {}
            return self.json_out(state, sid, fresh)
        return SimpleHTTPRequestHandler.do_GET(self)

    def do_PUT(self):
        if self.path.split("?")[0] != "/api/state":
            return self.send_error(405, "Nur /api/state nimmt PUT entgegen")
        if not self.same_origin():
            return self.json_out({"error": "Fremder Origin"}, code=403)
        sid, fresh = self.ensure_sid()
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            return self.json_out({"error": "Content-Length fehlt oder ist ungueltig"}, code=411)
        if length <= 0 or length > MAX_BODY:
            return self.json_out(
                {"error": "Koerper muss zwischen 1 und %d Bytes liegen" % MAX_BODY}, code=413
            )
        try:
            state = json.loads(self.rfile.read(length))
        except ValueError as e:
            return self.json_out({"error": "Kein gueltiges JSON: %s" % e}, code=400)
        if not isinstance(state, dict) or "decks" not in state:
            return self.json_out({"error": 'Erwartet wird ein Objekt mit "decks"'}, code=400)

        tmp = path_for(sid) + ".tmp"
        with LOCK:                                    # atomar ersetzen
            with open(tmp, "w", encoding="utf-8") as f:
                json.dump(state, f, ensure_ascii=False)
            os.replace(tmp, path_for(sid))

        decks = state.get("decks", {})
        cards = sum(len(d.get("cards", {})) for d in decks.values() if isinstance(d, dict))
        return self.json_out({"ok": True, "decks": len(decks), "cards": cards}, sid, fresh)

    # Strikte Policy: keine Inline-Skripte, keine externen Quellen, kein Einbetten.
    # Faengt Fehler ab, die Escaping allein nicht faengt.
    CSP = ("default-src 'none'; script-src 'self'; style-src 'self'; "
           "img-src 'self' data:; connect-src 'self'; font-src 'self'; "
           "base-uri 'none'; form-action 'none'; frame-ancestors 'none'")

    def end_headers(self):
        self.send_header("Content-Security-Policy", self.CSP)
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "same-origin")
        self.send_header("X-Frame-Options", "DENY")
        SimpleHTTPRequestHandler.end_headers(self)

    def same_origin(self):
        """Schreibzugriffe nur von der eigenen Seite. Zweiter Riegel neben SameSite."""
        origin = self.headers.get("Origin")
        if not origin:
            return True                      # Origin fehlt bei gleichseitigen Werkzeugen
        host = self.headers.get("Host", "")
        return origin.split("//", 1)[-1] == host

    def log_message(self, fmt, *args):
        sys.stderr.write("%s  %s\n" % (self.log_date_time_string(), fmt % args))


def main():
    global DATA_DIR
    ap = argparse.ArgumentParser(description="Kartenstapel-Server")
    ap.add_argument("--port", type=int, default=8000)
    ap.add_argument("--host", default="0.0.0.0")
    ap.add_argument("--dir", default="public", help="Ordner mit index.html")
    ap.add_argument("--data", default="data", help="Ordner fuer die Sitzungsdateien")
    a = ap.parse_args()

    DATA_DIR = os.path.abspath(a.data)
    os.makedirs(DATA_DIR, exist_ok=True)
    web = os.path.abspath(a.dir)
    if not os.path.isfile(os.path.join(web, "index.html")):
        sys.exit("index.html fehlt in %s" % web)

    def make(*args, **kw):
        return Handler(*args, directory=web, **kw)

    srv = ThreadingHTTPServer((a.host, a.port), make)
    print("Kartenstapel laeuft auf http://%s:%d" % (a.host, a.port))
    print("  Web:       %s" % web)
    print("  Sitzungen: %s" % DATA_DIR)
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nBeendet.")


if __name__ == "__main__":
    main()
