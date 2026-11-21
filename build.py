#!/usr/bin/env python3
"""Baut public/ aus app.template.html + den Deck-Dateien in DECKS.

Trennt CSS und JS in eigene Dateien. Damit kommt die Auslieferung ohne
'unsafe-inline' aus und der Server kann eine strikte Content-Security-Policy
setzen: script-src 'self'; style-src 'self'.
"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
TPL = os.path.join(HERE, "app.template.html")
OUT = os.path.join(HERE, "public")

# (stabiler Schluessel, Datei). Der Schluessel verbindet ein gespeichertes Deck
# mit seiner Quelle; nie umbenennen, sonst entsteht beim Nutzer ein zweiter Tab.
# Die Reihenfolge bestimmt die Reiter beim ersten Start.
DECKS = [
    ("osint", "osint-deck.json"),
    ("es", "spanish-deck.json"),
]


def find(name):
    for d in (OUT, HERE):
        p = os.path.join(d, name)
        if os.path.isfile(p):
            return p
    sys.exit("Deck-Datei fehlt: %s" % name)


def load_seeds():
    seeds, seen = [], set()
    for key, name in DECKS:
        data = json.load(open(find(name), encoding="utf-8"))   # frueh scheitern
        cards = data if isinstance(data, list) else data.get("cards", [])
        ids = [c.get("id") for c in cards]
        if None in ids or len(ids) != len(set(ids)):
            sys.exit("%s: jede Karte braucht eine eindeutige id" % name)
        clash = seen & set(ids)
        if clash:
            sys.exit("%s: ids doppelt ueber Decks hinweg: %s" % (name, sorted(clash)[:5]))
        seen |= set(ids)
        seeds.append({"key": key, "name": data.get("name", key) if isinstance(data, dict) else key,
                      "cards": cards})
    return json.dumps(seeds, ensure_ascii=False, indent=2)


def main():
    html = open(TPL, encoding="utf-8").read()
    seeds = load_seeds()

    if "__SEEDS_JSON__" not in html:
        sys.exit("Platzhalter __SEEDS_JSON__ fehlt in der Vorlage")

    css = re.search(r"<style>([\s\S]*?)</style>", html).group(1)
    js = re.search(r"<script>([\s\S]*?)</script>", html).group(1)
    js = js.replace("__SEEDS_JSON__", seeds)

    html = re.sub(r"<style>[\s\S]*?</style>",
                  '<link rel="stylesheet" href="app.css">', html, count=1)
    html = re.sub(r"<script>[\s\S]*?</script>",
                  '<script src="app.js"></script>', html, count=1)

    for name, body in (("app.css", css), ("app.js", js), ("index.html", html)):
        with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
            f.write(body)
        print("  %-12s %7d B" % (name, len(body.encode("utf-8"))))

    leftovers = [n for n in ("index.html", "app.js", "app.css")
                 if "__SEEDS_JSON__" in open(os.path.join(OUT, n), encoding="utf-8").read()]
    if leftovers:
        sys.exit("Platzhalter nicht ersetzt in: %s" % leftovers)
    if "<script>" in open(os.path.join(OUT, "index.html"), encoding="utf-8").read():
        sys.exit("index.html enthaelt noch ein Inline-Skript")
    print("Fertig. Keine Inline-Skripte, keine Inline-Styles.")


if __name__ == "__main__":
    main()
