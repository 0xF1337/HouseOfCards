#!/usr/bin/env python3
"""Erzeugt spanish-deck.json aus vocab/es-vocab.txt.

Jede Vokabel wird zu zwei reinen Karteikarten (keine Distraktoren):
  DE→ES  Frage deutsch,  Antwort spanisch
  ES→DE  Frage spanisch, Antwort deutsch

Tag = "<Lektion> · <Richtung>", damit der Filter Lektion und Richtung trennt.

IDs leiten sich aus Lektion + Spanisch + Deutsch ab (Hash), nicht aus der
Position. Neue Zeilen irgendwo einfuegen verschiebt also keine bestehenden IDs,
und der Lernfortschritt bleibt erhalten. Wer einen Tippfehler korrigiert,
erzeugt eine neue Karte; die alte bleibt im gespeicherten Stand liegen.
"""
import hashlib
import json
import os
import re
import sys
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "es-vocab.txt")
OUT = os.path.join(HERE, "..", "spanish-deck.json")

LABEL = {"LA": "lateinamerikanisch", "Chile": "chilenisch", "f": "feminines Substantiv (trotz el)",
         "m": "maskulin", "pl": "nur Plural", "fam": "umgangssprachlich"}
IRREG = re.compile(r"^(?:[a-z]{1,2})(?:,\s*[a-z]{1,2})*$")      # g / ie / i, g / zc …


def explain(note):
    if not note:
        return ""
    if note.startswith("inf:"):
        return "Infinitiv: " + note[4:].strip()
    if note.startswith("pl:"):
        return "Plural: " + note[3:].strip()
    if note.startswith("yo "):
        return "1. Person: " + note
    if note in LABEL:
        return LABEL[note]
    if IRREG.match(note) and note not in LABEL:
        return "unregelmäßig (%s)" % note
    return note


def parse():
    rows, lesson = [], None
    for n, line in enumerate(open(SRC, encoding="utf-8"), 1):
        line = line.strip()
        if not line:
            continue
        if line.startswith("#"):
            m = re.match(r"#\s*(PE|L\d+)\s*$", line)
            if m:
                lesson = m.group(1)
            continue
        parts = [p.strip() for p in line.split("|")]
        if len(parts) not in (2, 3) or not parts[0] or not parts[1] or not lesson:
            sys.exit("Zeile %d kaputt: %r" % (n, line))
        rows.append((lesson, parts[0], parts[1], parts[2] if len(parts) == 3 else ""))
    return rows


def key(s):
    return re.sub(r"\s+", " ", s.lower()).strip(" .")


def main():
    rows, seen, uniq = parse(), set(), []
    for r in rows:                                   # exakte Dubletten je Lektion raus
        k = (r[0], r[1], r[2])
        if k not in seen:
            seen.add(k)
            uniq.append(r)

    by_de, by_es = defaultdict(list), defaultdict(list)
    for _, es, de, _ in uniq:
        if es not in by_de[key(de)]:
            by_de[key(de)].append(es)
        if de not in by_es[key(es)]:
            by_es[key(es)].append(de)

    cards = []
    for lesson, es, de, note in uniq:
        h = hashlib.sha1(("%s|%s|%s" % (lesson, es, de)).encode()).hexdigest()[:8]
        base = explain(note)
        for direction, prompt, answer, pool in (
                ("DE→ES", de, es, by_de[key(de)]),
                ("ES→DE", es, de, by_es[key(es)])):
            other = [x for x in pool if x != answer][:4]
            expl = "; ".join(x for x in (base, ("Auch: " + " · ".join(other)) if other else "") if x)
            cards.append({
                "id": "es-%s-%s-%s" % (lesson.lower(), h, "d" if direction == "DE→ES" else "s"),
                "tag": "%s · %s" % (lesson, direction),
                "prompt": prompt, "answer": answer, "distractors": [],
                "explanation": expl,
            })

    ids = [c["id"] for c in cards]
    if len(ids) != len(set(ids)):
        sys.exit("ID-Kollision")
    json.dump({"name": "Español", "cards": cards},
              open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    per = defaultdict(int)
    for lesson, *_ in uniq:
        per[lesson] += 1
    print("%d Vokabeln, %d Karten  %s" % (len(uniq), len(cards), dict(per)))


if __name__ == "__main__":
    main()
