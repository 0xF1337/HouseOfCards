#!/usr/bin/env python3
"""Baut public/ aus app.template.html + osint-deck.json.

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
DECK = os.path.join(HERE, "public", "osint-deck.json")
OUT = os.path.join(HERE, "public")


def main():
    html = open(TPL, encoding="utf-8").read()
    deck = open(DECK, encoding="utf-8").read()
    json.loads(deck)                                   # frueh scheitern, wenn kaputt

    if "__DECK_JSON__" not in html:
        sys.exit("Platzhalter __DECK_JSON__ fehlt in der Vorlage")

    css = re.search(r"<style>([\s\S]*?)</style>", html).group(1)
    js = re.search(r"<script>([\s\S]*?)</script>", html).group(1)
    js = js.replace("__DECK_JSON__", deck)

    html = re.sub(r"<style>[\s\S]*?</style>",
                  '<link rel="stylesheet" href="app.css">', html, count=1)
    html = re.sub(r"<script>[\s\S]*?</script>",
                  '<script src="app.js"></script>', html, count=1)

    for name, body in (("app.css", css), ("app.js", js), ("index.html", html)):
        with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
            f.write(body)
        print("  %-12s %7d B" % (name, len(body.encode("utf-8"))))

    leftovers = [n for n in ("index.html", "app.js", "app.css")
                 if "__DECK_JSON__" in open(os.path.join(OUT, n), encoding="utf-8").read()]
    if leftovers:
        sys.exit("Platzhalter nicht ersetzt in: %s" % leftovers)
    if "<script>" in open(os.path.join(OUT, "index.html"), encoding="utf-8").read():
        sys.exit("index.html enthaelt noch ein Inline-Skript")
    print("Fertig. Keine Inline-Skripte, keine Inline-Styles.")


if __name__ == "__main__":
    main()
