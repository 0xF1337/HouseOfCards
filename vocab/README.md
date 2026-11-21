# Spanisch-Deck

`es-vocab.txt` ist die Quelle, `spanish-deck.json` wird daraus erzeugt.

```
spanisch | deutsch | hinweis
```

Neue Seiten unten an die passende `# L<n>`-Sektion anhängen, dann:

```bash
python3 vocab/gen_spanish.py   # schreibt spanish-deck.json
python3 build.py               # bettet beide Decks in app.js ein
```

Jede Vokabel wird zu zwei Karteikarten (DE→ES, ES→DE), Tag `L1 · DE→ES` usw.
IDs sind ein Hash aus Lektion + Spanisch + Deutsch: Einfügen verschiebt nichts,
Korrigieren erzeugt eine neue Karte.

Beim nächsten Laden ergänzt die App neue Karten im bestehenden Tab, ohne den
Fortschritt anzufassen. Ein gelöschter Tab oder eine gelöschte Karte kommt nicht zurück.
