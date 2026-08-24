# Kartenstapel

Lernkarten mit Leitner-Boxen, mehreren Decks und Karteneditor. Läuft als einzelne HTML-Datei oder als kleiner Server für mehrere Leute.

## Zwei Betriebsarten

**Allein, ohne Server.** `public/index.html` im Browser öffnen. Der Fortschritt liegt im `localStorage` dieses Browsers.

**Für die Lerngruppe.** Ordner auf den Server legen, dann:

```bash
python3 server.py                      # http://0.0.0.0:8000
python3 server.py --port 9000 --host 127.0.0.1
```

Nur Standardbibliothek, kein `pip install`. Jeder Besucher bekommt beim ersten Aufruf ein Cookie mit einer zufälligen Sitzungs-ID; der Fortschritt landet in `data/<sid>.json`. Zwei Leute sehen sich gegenseitig nicht. Die App erkennt den Server selbst — oben links steht dann „Sitzung auf dem Server".

Hinter nginx oder Caddy mit TLS betreiben. Setzt der Reverse Proxy `X-Forwarded-Proto: https`, hängt der Server automatisch `Secure` an das Cookie.

### Was der Server nicht ist

Keine Benutzerverwaltung, kein Passwort. Wer die Sitzungs-ID hat, hat den Fortschritt; wer sein Cookie verliert, verliert ihn. Für Lernkarten unter Kommilitonen ist das die angemessene Menge Technik — für alles Vertrauliche nicht. Ein zweites Gerät bekommt eine eigene Sitzung; um den Stand mitzunehmen, exportiere und importiere die Sicherungsdatei.

## Aussehen

Zweifarbiger Risodruck auf Papier: **Ultramarin heißt richtig, Leuchtorange heißt falsch.** Kein Grün/Rot, weil Blau-Orange die zuverlässigste Paarung bei Farbfehlsichtigkeit ist. Fragen stehen in Monospace, Antworten und Erklärungen in Grotesk.

Das Papier ist nicht nur Farbe: eine Kornfolie aus `feTurbulence` liegt als data-URI über der ganzen Fläche, der Kopf endet in einer gerissenen Blattkante (SVG-Maske, damit die Farbe aus dem Theme kommt), und die aktuelle Karte liegt als Blatt sichtbar auf zwei weiteren — umgesetzt über versetzte harte Schatten, ohne Zusatz-Markup. Antwortzettel heben sich beim Überfahren leicht an.

Hell und dunkel über den Schalter oben rechts; beim ersten Start richtet sich die App nach der Systemeinstellung.

Animationen sind kurz und funktional: Karte blendet ein, richtig wischt nach rechts, falsch stößt einmal an und fällt nach unten, die Stufenpunkte und der Fortschrittsbalken unter dem Kopf laufen mit. Bei `prefers-reduced-motion: reduce` wird alles auf 0,01 ms gesetzt.

## Bedienung

| Taste | Wirkung |
|---|---|
| `1`–`4` | Antwort im Quizmodus wählen |
| `Leertaste` | Antwort aufdecken (Kartenmodus) |
| `1` / `2` | nach dem Aufdecken: falsch / richtig |

**Quiz** stellt Multiple Choice mit gemischten Optionen, **Karte** deckst du selbst auf und bewertest dich selbst.

## Der Algorithmus

Drei Leitner-Stufen. Die Abstände skalieren mit der Größe des Stapels, damit sie nie kleiner sind als das Deck:

| Stufe | Abstand | bei 92 Karten |
|---|---|---|
| 0 → 1 | 6 % des Stapels, mindestens 3 | 6 Karten |
| 1 → 2 | 35 % | 32 Karten |
| 2 → 3 | 110 % | 101 Karten |
| 3 | sitzt, verlässt die Runde | — |

- **richtig** → eine Stufe hoch, Abstand wächst
- **falsch** → eine Stufe runter, Karte kommt nach ~6 Karten wieder

**Neue Karten haben immer Vorrang.** Das ist der entscheidende Punkt: Solange noch eine Karte nie dran war, kommt sie vor jeder Wiederholung. Deshalb ist nach genau einem Durchgang jede Karte einmal gezeigt worden.

Simuliert mit dem Code aus `public/index.html`, 200 Durchläufe, 12 von 92 Karten schwer:

| | alle einmal gesehen nach | Züge gesamt | Reps schwer | Reps leicht | Verhältnis |
|---|---|---|---|---|---|
| v1, feste Mitte | nie — 50 Karten blieben ungezeigt | endlos | 10,1 | 8,5 | 1,19 |
| v2, feste Abstände | Zug 316 | 376 | 5,9 | 3,3 | 1,75 |
| **v3, neue zuerst** | **Zug 92** | **340** | 5,8 | 3,4 | **1,74** |

Der Fehler in v1 und v2: Abstände von 3/8/20/45 sind kleiner als ein Deck mit 92 Karten, also rotierte nur der Kopf des Stapels in sich, und der Schwanz kam nie dran. Genau das hattest du beobachtet.

Die Leiste unter der Kopfzeile ist der Stapel: Strichhöhe = Stufe, dunkle flache Striche = noch nie gezeigt, links die aktuelle Karte.

## Decks

Reiter oben. `+` legt ein neues an. Unter **Deck** kannst du umbenennen, löschen, eine Runde neu starten oder die Statistik zurücksetzen. Jedes Deck hat eigene Stufen, eigene Statistik und einen eigenen Filter.

**Runde neu starten** setzt die Stufen zurück und behält die Fehlerzähler; Karten ohne einen einzigen Fehler starten auf Stufe 1 statt 0.

## Karten anlegen

Unter **Karten**: Formular oben, Liste mit Suche unten. Kürzel (`L5`) steuert den Filter. Lässt du die falschen Antworten leer, wird die Karte eine reine Karteikarte und erscheint auch im Quizmodus als Aufdeckkarte.

## Import

Unter **Sichern**. Ziel-Deck wählbar, `als neues Deck` legt eines an.

```json
{
  "name": "Mein Deck",
  "cards": [
    {
      "id": "stat-001",
      "tag": "L5",
      "prompt": "Definiere den p-Wert.",
      "answer": "P(Statistik so extrem | H0 wahr)",
      "distractors": ["P(H0 | Daten)", "P(Zufall)", "P(Fehler 2. Art)"],
      "explanation": "Konditioniert auf H0, nicht auf die Daten."
    }
  ]
}
```

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `prompt` | ja | Die Frage |
| `answer` | ja | Die richtige Antwort |
| `id` | nein | Gleiche `id` überschreibt den Inhalt und behält Stufe und Statistik |
| `tag` | nein | Gruppierung für den Filter |
| `distractors` | nein | Falsche Antworten; ohne sie wird es eine reine Karteikarte |
| `explanation` | nein | Wird nach dem Aufdecken gezeigt |

Ein blankes Array `[{…}]` geht auch.

## Sichern

- **Alles sichern** — alle Decks samt Fortschritt, direkt wieder importierbar
- **Nur dieses Deck** — ein Deck mit Fortschritt
- **Deck ohne Fortschritt** — zum Weitergeben an Kommilitonen

## Sicherheit

Importierte Decks sind fremder Input, und Decks weiterzugeben ist der vorgesehene Verteilungsweg — ein bösartiges Deck vom Kommilitonen ist also ein realistisches Szenario.

**JS abschalten geht nicht**, die App besteht daraus. Stattdessen vier Riegel:

1. **Escaping.** Jede Ausgabe von Nutzerdaten läuft durch `esc()`, das `& < > " ' \` / =` ersetzt — Text- und Attributkontext.
2. **ID-Whitelist.** Karten- und Deck-IDs müssen `^[A-Za-z0-9._:-]{1,64}$` erfüllen, sonst wird eine neue erzeugt. Das schließt den Attributausbruch, den Escaping allein früher offen ließ.
3. **Feldbegrenzung.** Steuerzeichen werden ersetzt, Längen gedeckelt (Frage 600, Antwort 400, Erklärung 2000 Zeichen).
4. **Content-Security-Policy.** CSS und JS liegen in eigenen Dateien, `index.html` enthält weder Inline-Skript noch Inline-Style. Der Server sendet:

```
default-src 'none'; script-src 'self'; style-src 'self';
img-src 'self' data:; connect-src 'self'; font-src 'self';
base-uri 'none'; form-action 'none'; frame-ancestors 'none'
```

Ein eingeschleuster Event-Handler würde damit auch dann nicht ausgeführt, wenn Escaping oder Validierung eine Lücke hätten.

Dazu am Server: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: same-origin`, `SameSite=Lax` am Sitzungscookie und eine Origin-Prüfung bei `PUT /api/state`.

### Was ungeschützt bleibt

- **Beim Öffnen per `file://` gibt es keine CSP.** Header kommen nur vom Server. Ein `<meta>`-CSP würde `script-src 'self'` unter `file://` je nach Browser die eigene `app.js` blockieren und den Offline-Betrieb brechen — deshalb bewusst weggelassen. Escaping, ID-Whitelist und Feldbegrenzung greifen dort trotzdem.
- **Kein Passwort.** Wer das Sitzungscookie hat, hat den Fortschritt.
- **Kein Rate-Limit.** Wer die URL kennt, kann Sitzungen anlegen, bis die Platte voll ist. Hinter einem Reverse Proxy mit Limit betreiben, wenn der Dienst öffentlich erreichbar ist.
- Der Schaden bei erfolgreichem XSS bliebe auf die eigene Sitzung begrenzt — es gibt keine geteilten Daten zwischen Nutzern.

## Dateien

```
public/index.html       Grundgerüst, ohne Inline-Skript und Inline-Style
public/app.js           die App samt eingebettetem Deck
public/app.css          das Designsystem
public/osint-deck.json  92 OSINT-Karten (L3–L12) als Importbeispiel
server.py               optionaler Server mit Sitzungen und CSP
app.template.html       Quelle für den Build
build.py                erzeugt public/ aus Vorlage und Deck
data/                   Sitzungsdateien, entsteht beim ersten Start
```

Nach Änderungen an `app.template.html`: `python3 build.py`.

Das eingebettete Deck wird nur beim allerersten Start gelesen. Danach gewinnt der gespeicherte Stand — eine aktualisierte `index.html` überschreibt deine Decks also nicht.
