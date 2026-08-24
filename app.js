
"use strict";
const SEED = {
  "name": "OSINT-Klausur L3-L12",
  "cards": [
    {
      "id": "osint-001",
      "tag": "L3",
      "prompt": "Nenne die Stufen der OSINT-Pipeline in der richtigen Reihenfolge.",
      "answer": "Direction → Collection → Processing → Analysis → Dissemination",
      "distractors": [
        "Collection → Direction → Analysis → Processing → Dissemination",
        "Direction → Processing → Collection → Dissemination → Analysis",
        "Collection → Processing → Visualisation → Analysis → Direction"
      ],
      "explanation": "Kein linearer Prozess, sondern Zyklus/Netz — Schritte können verschoben oder wiederholt werden."
    },
    {
      "id": "osint-002",
      "tag": "L3",
      "prompt": "Puzzle vs. Mystery: Was unterscheidet die beiden?",
      "answer": "Ein Puzzle ist mit mehr Daten beantwortbar; ein Mystery erfordert Judgement",
      "distractors": [
        "Ein Puzzle ist quantitativ, ein Mystery qualitativ",
        "Ein Puzzle betrifft Personen, ein Mystery Organisationen",
        "Ein Mystery ist mit genug Rechenleistung lösbar, ein Puzzle nicht"
      ],
      "explanation": "Puzzle: Wo ist bin Laden? Mystery: Was passiert mit dem Regime nach seinem Tod? Merksatz: Behandle Mysteries nicht wie Puzzles."
    },
    {
      "id": "osint-003",
      "tag": "L3",
      "prompt": "\"Find out what the CleanOceans protest movement is doing online.\" Kernfehler?",
      "answer": "Kein abgegrenztes Konstrukt, keine Plattform, kein Zeitraum, keine messbaren Proxies",
      "distractors": [
        "Er verletzt die DSGVO, weil personenbezogene Daten betroffen sind",
        "Er ist zu eng gefasst und lässt keine explorative Analyse zu",
        "Er nennt keine konkreten API-Endpunkte"
      ],
      "explanation": "Umformuliert: \"Wie koordiniert CleanOceans zwischen Januar und Juni 2026 Mobilisierungsaufrufe auf X und Telegram?\" — Konstrukt, Population, Plattform, Zeitfenster. Danach erst Operationalisierung."
    },
    {
      "id": "osint-004",
      "tag": "L3",
      "prompt": "Was ist Operationalisierung im OSINT-Kontext?",
      "answer": "Übersetzung der RQ in konkrete, messbare Datenanforderungen (Proxies)",
      "distractors": [
        "Auswahl der Programmiersprache und Speicherarchitektur",
        "Die Umsetzung der Analyse in einen automatisierten Scraper",
        "Die Aufbereitung der Ergebnisse für unterschiedliche Zielgruppen"
      ],
      "explanation": "Proxies für Koordination: Account-Alter, Muster in Account-Namen, Aktivitätsverteilung, Herkunft, Copy-Paste-Inhalte, Post-Syntax, Namensänderungen, Verbindungen zwischen Accounts. Ein Proxy ist Feld plus Zeitraum plus Population — kein Analyseergebnis."
    },
    {
      "id": "osint-005",
      "tag": "L3",
      "prompt": "JSON, XML und Log-Files sind …",
      "answer": "semi-strukturiert — flexibles Schema, relativ leicht zu parsen",
      "distractors": [
        "strukturiert — festes Schema in Zeilen und Spalten",
        "unstrukturiert — kein definiertes Format",
        "strukturiert, sobald sie in einer SQL-DB liegen"
      ],
      "explanation": "Strukturiert: CSV, Excel, SQL, OSN-Metadaten. Unstrukturiert: Web-Crawls, Social-Media-Text/Bilder, Audio — braucht Tools oder Menschen zum Parsen."
    },
    {
      "id": "osint-006",
      "tag": "L3",
      "prompt": "Die drei Ebenen der Datenerhebung — welche liefert den reichsten Datensatz?",
      "answer": "Manuell, Web-Scraping, API — manuell liefert den reichsten Datensatz",
      "distractors": [
        "API, Scraping, manuell — API liefert den reichsten Datensatz",
        "Scraping, API, Kauf — Scraping liefert den reichsten Datensatz",
        "Manuell, API, Datenbank-Dump — der Dump liefert den reichsten Datensatz"
      ],
      "explanation": "Manuell: reich, skaliert nicht. Scraping (bs4): robots.txt und Rate-Limits, dynamische Inhalte per GET nicht erreichbar, fragil. API: Rate-Limits, aber stabil."
    },
    {
      "id": "osint-007",
      "tag": "L3",
      "prompt": "Was ist Data Provenance?",
      "answer": "Herkunft und Chain of Custody der Daten — Grundlage der Vertrauenswürdigkeit",
      "distractors": [
        "Die Refresh-Rate einer Datenquelle",
        "Die rechtliche Grundlage der Verarbeitung nach DSGVO",
        "Das Schema, in dem Rohdaten gespeichert werden"
      ],
      "explanation": "Ohne beides ist die Vertrauenswürdigkeit des Datensatzes nicht bewertbar."
    },
    {
      "id": "osint-008",
      "tag": "L3",
      "prompt": "Welche Pipeline-Stufe erfordert explizit Judgement?",
      "answer": "Analysis — Automation, Kreativität und Judgement",
      "distractors": [
        "Direction — Kreativität und Domain-Knowledge",
        "Collection — Automation und Kreativität",
        "Dissemination — Kommunikation und Technik"
      ],
      "explanation": "Direction: Kreativität, Domain-Knowledge. Collection: Automation, Kreativität. Dissemination: Kommunikation, Technik."
    },
    {
      "id": "osint-009",
      "tag": "L3",
      "prompt": "Telegram-Propaganda-Beispiel: Was passierte nach dem manuellen Labeling?",
      "answer": "Zurück zur Collection — von einem auf 13 Kanäle",
      "distractors": [
        "Vorwärts zur Analysis — der Graph wurde direkt gebaut",
        "Zurück zur Direction — die RQ wurde verworfen",
        "Zur Dissemination — Zwischenergebnisse wurden publiziert"
      ],
      "explanation": "Direction: RQ zu Propaganda auf Telegram. Collection: ein Kanal. Processing: Handlabeling, dabei fallen Duplikate auf. Zurück zur Collection. Analysis: Social Network Graph. Dissemination: Paper."
    },
    {
      "id": "osint-010",
      "tag": "L3",
      "prompt": "Data Source Risks: Welche Risiken haben Online Social Networks?",
      "answer": "Bots, unsafe Content, Moderation, Bias, Privacy",
      "distractors": [
        "Manipulation, Lag, Rauschen, fehlende Werte",
        "Veraltet, Vertrauenswürdigkeit, einmalige Snapshots",
        "Bias und wechselnde Inhalte"
      ],
      "explanation": "Zugriff per API oder Scrape, Shape aus Text/Bildern/Metadaten/Videos, Refresh im Millisekundenbereich — höchste Refresh-Rate aller Quelltypen."
    },
    {
      "id": "osint-011",
      "tag": "L3",
      "prompt": "Data Source Risks: Government Records?",
      "answer": "Manipulation, Lag, verrauschte Daten, fehlende Werte durch Zensur",
      "distractors": [
        "Bots, Moderation, Privacy",
        "Rate-Limits und dynamische Inhalte",
        "Fehlende Schemata und Parsing-Aufwand"
      ],
      "explanation": "Zugriff per API, Download oder Portal, strukturiert, Refresh jährlich bis One-Off. \"Offiziell\" heißt nicht \"neutral\"."
    },
    {
      "id": "osint-012",
      "tag": "L3",
      "prompt": "Data Source Risks: Webnews vs. Public Datasets?",
      "answer": "Webnews: Bias und veränderte Inhalte. Public Datasets: veraltet und fragliche Vertrauenswürdigkeit",
      "distractors": [
        "Webnews: veraltet. Public Datasets: Bias und Moderation",
        "Beide: Bots und Privacy",
        "Webnews: Rate-Limits. Public Datasets: Manipulation"
      ],
      "explanation": "Webnews: manuell, RSS oder API, Refresh alle paar Stunden, stille Edits. Public Datasets: Downloads und Portale, Tabellen/CSV, meist One-Offs."
    },
    {
      "id": "osint-013",
      "tag": "L3",
      "prompt": "Wozu dient die Spalte \"Refresh Rate\"?",
      "answer": "Sie bestimmt, ob man einen Snapshot oder eine Zeitreihe erhält — und was zwischen zwei Abrufen verloren geht",
      "distractors": [
        "Sie legt fest, wie oft man den Scraper laufen lassen darf",
        "Sie entspricht dem Rate-Limit der API",
        "Sie beschreibt, wie schnell die Daten geparst werden können"
      ],
      "explanation": "Das Internet ist ephemer. Millisekunden bei OSN, Stunden bei Webnews, jährlich oder One-Off bei Govt Records und Public Datasets."
    },
    {
      "id": "osint-014",
      "tag": "L3",
      "prompt": "Scraping mit bs4: Welche Grenze ist technisch, nicht höflichkeitsbedingt?",
      "answer": "Dynamische Inhalte lassen sich nicht per GET-Request holen — Webdriver nötig",
      "distractors": [
        "bs4 kann keine verschachtelten Tags parsen",
        "robots.txt blockiert den Zugriff technisch",
        "Die Rate-Limits der Seite verhindern vollständige Abrufe"
      ],
      "explanation": "bs4 arbeitet auf dem HTML der GET-Antwort. Per JavaScript nachgeladene Inhalte stehen dort nicht. Weitere Punkte: robots.txt, Rate-Limits, generelle Fragilität."
    },
    {
      "id": "osint-015",
      "tag": "L3",
      "prompt": "Wie formuliert man eine OSINT-Forschungsfrage richtig?",
      "answer": "Erst die Frage, dann die Datenanforderung — nie umgekehrt",
      "distractors": [
        "Erst prüfen, welche Daten zugänglich sind, dann die Frage zuschneiden",
        "Die größtmögliche Datenmenge sammeln und explorativ vorgehen",
        "Mehrere Plattformen parallel abfragen, um Bias auszugleichen"
      ],
      "explanation": "Falsch: \"Ich habe Twitter-Daten — was kann ich untersuchen?\" Beispiel: Reddit-Daten für eine RQ über Anonymität sind verzerrt, weil dort fast alle Pseudonyme nutzen. Datengetriebene Fragestellung führt direkt zu HARKing."
    },
    {
      "id": "osint-016",
      "tag": "L4",
      "prompt": "HARKing steht für …",
      "answer": "Hypothesizing After Results are Known",
      "distractors": [
        "Hypothesis Adjustment for Robust Knowledge",
        "Hierarchical Analysis of Random Knowledge",
        "Hypothesizing Ahead of Results and Knowledge"
      ],
      "explanation": "Studie laufen lassen → Daten explorieren → etwas Interessantes finden → als vorab formulierte Hypothese publizieren. Lösungen: Prä-Registrierung; Post-hoc-Analysen erlaubt, aber gekennzeichnet."
    },
    {
      "id": "osint-017",
      "tag": "L4",
      "prompt": "P-Hacking: Mechanismus und Gegenmaßnahme?",
      "answer": "Viele Tests erzeugen Falsch-Positive; Gegenmaßnahme: Multiple-Comparisons-Korrektur",
      "distractors": [
        "Zu kleine Stichprobe erzeugt Rauschen; Gegenmaßnahme: mehr Daten",
        "Falsches Signifikanzniveau; Gegenmaßnahme: Alpha auf 0.10 anheben",
        "Fehlende Kontrollgruppe; Gegenmaßnahme: Randomisierung"
      ],
      "explanation": "Die beiden Begriffe, die die Klausur sehen will: Prä-Registrierung gegen HARKing, Multiple-Comparisons-Korrektur gegen P-Hacking. Sauber trennen."
    },
    {
      "id": "osint-018",
      "tag": "L4",
      "prompt": "Traces vs. Reality: die drei Filterebenen?",
      "answer": "Content Moderation (was ist beobachtbar) → Zugriffsmethode → Query",
      "distractors": [
        "Zensur → Flooding → Deduplizierung",
        "Plattform-Blocking → Content-Filtering → Selbstzensur",
        "Erhebung → Bereinigung → Analyse"
      ],
      "explanation": "Reality → Source → Collection → dein Datensatz. Du untersuchst die Spur des Phänomens, nie das Phänomen selbst."
    },
    {
      "id": "osint-019",
      "tag": "L4",
      "prompt": "Was unterscheidet die beobachtbare Spur von der sammelbaren Quelle?",
      "answer": "DMs und Gespräche sind beobachtbare Spuren, aber nicht sammelbar",
      "distractors": [
        "Alle beobachtbaren Spuren sind auch sammelbar, nur unterschiedlich aufwändig",
        "Accounts sind beobachtbar, Posts nicht",
        "Der Unterschied betrifft nur die Rechtslage"
      ],
      "explanation": "Phänomen ≠ beobachtbare Spur ≠ sammelbare Quelle. Sammelbar: nur Posts, Gruppen, Accounts. Wenn deine RQ Koordination betrifft, fehlt genau der Kanal, über den koordiniert wird. Lücke benennen, nicht wegdefinieren."
    },
    {
      "id": "osint-020",
      "tag": "L4",
      "prompt": "Warum enthält ein gescrapter Datensatz Duplikate?",
      "answer": "Paging-Überlappungen, Bot-Aktivität, Crossposts, identische Spam-Inhalte",
      "distractors": [
        "Fehlerhafte Timestamp-Normalisierung",
        "NULL-Werte in optionalen Feldern",
        "Fehlende Deduplizierung im Schema der Datenbank"
      ],
      "explanation": "Auch Phishing-URLs und Call-Spoofing. Nicht blind dropduplicates() aufrufen."
    },
    {
      "id": "osint-021",
      "tag": "L4",
      "prompt": "Welche Speichermodelle gibt es?",
      "answer": "Flat (CSV, Logs, Timeline-Daten), relational (SQL), Document (JSON, XML)",
      "distractors": [
        "Strukturiert, semi-strukturiert, unstrukturiert",
        "Raster, Vektor, Graph",
        "Hot, warm, cold storage"
      ],
      "explanation": "Timeline-Daten sind Timestamp plus Event in Sequenz. Nicht mit der L3-Datentyp-Taxonomie verwechseln — andere Achse."
    },
    {
      "id": "osint-022",
      "tag": "L4",
      "prompt": "Was ist EDA ausdrücklich NICHT?",
      "answer": "Datensatz öffnen, nach etwas Analysierbarem suchen, der Spur folgen",
      "distractors": [
        "Mit einer Frage starten und zyklisch zwischen Exploration und Wrangling wechseln",
        "Verteilungen und fehlende Werte inspizieren, bevor man modelliert",
        "Daten plotten, statt sich auf Kennzahlen zu verlassen"
      ],
      "explanation": "Richtig: Frage plus Datensatz gehen zyklisch in Exploration und Wrangling. Vergiss deine Frage nicht — sonst landest du bei HARKing."
    },
    {
      "id": "osint-023",
      "tag": "L4",
      "prompt": "Zensur: die drei Ebenen?",
      "answer": "Plattform-Level-Blocking, Content Filtering (inkl. Shadowbanning), Selbstzensur",
      "distractors": [
        "Content Moderation, Zugriffsmethode, Query",
        "Geoblocking, Deplatforming, Rate-Limiting",
        "Flooding, Shadowbanning, Deduplizierung"
      ],
      "explanation": "Plattform-Blocking (Wikipedia in der Türkei) am breitesten. Selbstzensur ist unsichtbar in den Daten und deshalb am schwersten zu korrigieren."
    },
    {
      "id": "osint-024",
      "tag": "L4",
      "prompt": "Was ist Flooding?",
      "answer": "Inverse Zensur — der Kanal wird geflutet, bis die eigene Botschaft dominiert",
      "distractors": [
        "Massenhaftes Melden von Inhalten, bis die Plattform sie entfernt",
        "Überlastung der API durch zu viele Requests",
        "Automatisiertes Crossposting zur Reichweitensteigerung"
      ],
      "explanation": "Verwandter Begriff: coordinated amplification — Bots und echte Accounts zusammen, typisches Muster einer Influence Campaign."
    },
    {
      "id": "osint-025",
      "tag": "L4",
      "prompt": "Auf welcher Plattform ist der Moderationseingriff im Datensatz markiert?",
      "answer": "X/Twitter — das \"withheld\"-Feld dokumentiert Geoblocking",
      "distractors": [
        "Telegram — Kanalstatistiken weisen entfernte Nachrichten aus",
        "Reddit — entfernte Posts bleiben als Platzhalter erhalten",
        "WhatsApp — Gruppenmetadaten enthalten Moderationsflags"
      ],
      "explanation": "Reddit/Facebook: Mischform. Telegram und WhatsApp: praktisch keine Top-Level-Moderation, nur lokale. Der First-Level-Filter unterscheidet sich massiv je Plattform."
    },
    {
      "id": "osint-026",
      "tag": "L4",
      "prompt": "Best Practice bei dropduplicates() und dropna()?",
      "answer": "Erst fragen, warum die Duplikate oder NULLs da sind — das Muster ist selbst ein Befund",
      "distractors": [
        "Immer zuerst dropna(), dann dropduplicates()",
        "Zeilen mit NULLs vollständig verwerfen",
        "Duplikate behalten, weil sie die Häufigkeit korrekt abbilden"
      ],
      "explanation": "Duplikate durch Paging, Bots, Crossposts. NULLs, weil das Feld optional ist — andere Felder der Zeile können trotzdem nützlich sein."
    },
    {
      "id": "osint-027",
      "tag": "L4",
      "prompt": "Timestamp-Normalisierung: Was ist die Regel?",
      "answer": "Alles nach UTC — im Wissen, dass Zeitstempel manipuliert sein können",
      "distractors": [
        "Alles in die Lokalzeit des Accounts",
        "Zeitstempel als Strings belassen",
        "Nur Datum behalten, Uhrzeit verwerfen"
      ],
      "explanation": "Ortsangaben ebenfalls vereinheitlichen: \"Bochum DE\" → DE."
    },
    {
      "id": "osint-028",
      "tag": "L5",
      "prompt": "Unterschied zwischen Parameter und Statistik?",
      "answer": "Parameter beschreibt die Population (meist unbekannt); Statistik ist der Schätzer aus der Stichprobe",
      "distractors": [
        "Parameter ist ein Eingabewert des Modells; Statistik die Ausgabe",
        "Parameter ist stetig, Statistik diskret",
        "Beide bezeichnen dasselbe"
      ],
      "explanation": "Zweck der Inferenzstatistik: von der Stichprobe auf die Population schließen, mit quantifiziertem Fehler."
    },
    {
      "id": "osint-029",
      "tag": "L5",
      "prompt": "Dein Scraper hat nur öffentliche Profile erfasst. Löst eine größere Stichprobe das Problem?",
      "answer": "Nein — Selection Bias ist systematisch; mehr n schrumpft nur den Zufallsfehler",
      "distractors": [
        "Ja — ab hinreichend großem n greift das Gesetz der großen Zahlen",
        "Ja, sofern zufällig aus den öffentlichen Profilen gezogen wird",
        "Nein, aber eine Bonferroni-Korrektur kompensiert den Effekt"
      ],
      "explanation": "Die drei Biases: Selection, Survivorship (nur Systeme, die nicht abgestürzt sind), Non-Response. Keiner verschwindet durch mehr Daten."
    },
    {
      "id": "osint-030",
      "tag": "L5",
      "prompt": "Definiere den p-Wert präzise.",
      "answer": "P(Teststatistik mindestens so extrem | H0 wahr)",
      "distractors": [
        "P(H0 wahr | beobachtete Daten)",
        "Die Wahrscheinlichkeit, dass das Ergebnis Zufall ist",
        "Die Wahrscheinlichkeit, H0 fälschlich beizubehalten"
      ],
      "explanation": "Konditioniert auf H0, nicht auf die Daten. Die zweite Option ist die klassische Fehlinterpretation. Bei p < alpha (typisch 0.05) H0 verwerfen."
    },
    {
      "id": "osint-031",
      "tag": "L5",
      "prompt": "Hypothesentest: Schritte in der richtigen Reihenfolge?",
      "answer": "H0 → H1 → Teststatistik → p-Wert → bei p < alpha H0 verwerfen",
      "distractors": [
        "H1 → Daten sammeln → p-Wert → H1 annehmen",
        "Teststatistik → alpha passend wählen → Hypothese formulieren",
        "Effektstärke → Konfidenzintervall → H0 bestätigen"
      ],
      "explanation": "H0 ist der langweilige Default: kein Effekt, Beobachtung ist Zufall. Man akzeptiert H0 nie — man verwirft sie nur oder nicht."
    },
    {
      "id": "osint-032",
      "tag": "L5",
      "prompt": "Rechtsschiefe Verteilung: Wie liegen Mean und Median?",
      "answer": "Mean > Median",
      "distractors": [
        "Mean < Median",
        "Mean = Median",
        "Hängt vom Modus ab"
      ],
      "explanation": "Linksschief: Mean < Median. Symmetrisch: gleich. Der Mean wird vom Tail gezogen. Relevant bei OSINT-Daten, die fast immer Power-Law-artig sind."
    },
    {
      "id": "osint-033",
      "tag": "L5",
      "prompt": "Ein Bot mit 40 Mio. Followern liegt im Datensatz. Welches Lagemaß ist robust?",
      "answer": "Median",
      "distractors": [
        "Mean",
        "Varianz",
        "Mode"
      ],
      "explanation": "Mode: häufigster Wert, einzige Kennzahl für kategoriale Daten. Varianz: mittlere quadrierte Abweichung — durch die Quadrierung ebenfalls ausreißerempfindlich."
    },
    {
      "id": "osint-034",
      "tag": "L5",
      "prompt": "Test mit 99 % Trefferquote schlägt an, Basisrate 1:10.000. Was folgt?",
      "answer": "Die meisten Treffer sind Falsch-Positive — die Basisrate dominiert",
      "distractors": [
        "Der Account ist mit 99 % Wahrscheinlichkeit bösartig",
        "Der Test ist unbrauchbar und muss verworfen werden",
        "Ohne Signifikanzniveau nicht entscheidbar"
      ],
      "explanation": "Bei 10.000 Accounts rund 100 Fehlalarme gegenüber einem echten Treffer. P(bösartig | Alarm) ungefähr 1 %. Ohne Prior ist die Trefferquote bedeutungslos."
    },
    {
      "id": "osint-035",
      "tag": "L5",
      "prompt": "Zentraler Grenzwertsatz — präzise Formulierung?",
      "answer": "Die Verteilung des Stichproben-MITTELWERTS nähert sich mit wachsendem n der Normalverteilung",
      "distractors": [
        "Die Rohdaten selbst werden bei großem n normalverteilt",
        "Der Mittelwert konvergiert gegen den Median",
        "Die Varianz verschwindet, wenn n gegen unendlich geht"
      ],
      "explanation": "Nahezu unabhängig von der zugrundeliegenden Verteilung. Aussage über die Kennzahl, nicht über die Rohdaten."
    },
    {
      "id": "osint-036",
      "tag": "L5",
      "prompt": "Was beschreibt eine Verteilung?",
      "answer": "Welche Werte eine Variable annimmt und wie häufig",
      "distractors": [
        "Wie stark zwei Variablen zusammenhängen",
        "Wie sich der Stichprobenmittelwert mit n verändert",
        "Die Spannweite zwischen Minimum und Maximum"
      ],
      "explanation": "[ungeprüft — in deinen Notizen nur Bilder] Vermutlich behandelt: Normal, Uniform, Binomial/Poisson, Power Law. Power Law ist der OSINT-relevante Fall."
    },
    {
      "id": "osint-037",
      "tag": "L6",
      "prompt": "Zwei Eigenschaften natürlicher Sprache, die formale nicht hat?",
      "answer": "Ambiguität (\"I saw the man with the telescope\") und Polysemie (\"fine\", \"bank\")",
      "distractors": [
        "Rekursion und Kontextfreiheit",
        "Determinismus und Parsebarkeit",
        "Tokenisierbarkeit und Normalisierbarkeit"
      ],
      "explanation": "Formale Sprachen (Python, SQL, mathematische Notation) sind eindeutig parsbar. NLP-Definition: computergestützte Methoden zur Arbeit mit Textdaten."
    },
    {
      "id": "osint-038",
      "tag": "L6",
      "prompt": "Stemming vs. Lemmatisation — und ein Wort, das unterschiedlich behandelt wird.",
      "answer": "Stemming schneidet regelbasiert ab (\"universally\" → \"univers\"); Lemmatisation führt auf die Grundform (\"ran\" → \"run\")",
      "distractors": [
        "Stemming nutzt ein Wörterbuch, Lemmatisation Regeln",
        "Stemming ist kontextsensitiv, Lemmatisation nicht",
        "Beide erzeugen identische Ergebnisse"
      ],
      "explanation": "Stemming kollabiert universe/universally/university auf \"univers\" (Over-Stemming) und lässt \"ran\" stehen (Under-Stemming). Beste Prüfungsbeispiele: \"ran\" oder \"university\"."
    },
    {
      "id": "osint-039",
      "tag": "L6",
      "prompt": "Was geht bei Bag of Words verloren?",
      "answer": "Struktur, Position, Kontext — und damit auch Negation",
      "distractors": [
        "Worthäufigkeit",
        "Die Dokumentgrenzen",
        "Der Wortschatz seltener Terme"
      ],
      "explanation": "BoW erfasst nur Frequenz: jede Spalte ein Wort, der Wert die Anzahl. Vorteil: sehr schnell, lineare Zeit."
    },
    {
      "id": "osint-040",
      "tag": "L6",
      "prompt": "TF-IDF: Was macht der IDF-Faktor?",
      "answer": "Er gewichtet Terme ab, die über alle Dokumente hinweg häufig sind",
      "distractors": [
        "Er normalisiert auf die Dokumentlänge",
        "Er ergänzt den fehlenden Kontext von BoW",
        "Er glättet Nullhäufigkeiten seltener Terme"
      ],
      "explanation": "TF = Termanzahl im Dokument / alle Terme im Dokument. TF-IDF = TF mal IDF. Ergebnis: Wichtigkeit statt Häufigkeit. Kontext fehlt weiterhin."
    },
    {
      "id": "osint-041",
      "tag": "L6",
      "prompt": "Embeddings: Kernprinzip und Ähnlichkeitsmaß?",
      "answer": "Semantische Ähnlichkeit = geometrische Nähe; gemessen per Kosinus-Ähnlichkeit (1 ähnlich, 0 unähnlich)",
      "distractors": [
        "Worthäufigkeit = Vektorlänge; euklidische Distanz",
        "One-Hot-Vektoren; Hamming-Distanz",
        "Dokumente auf Themen projiziert; KL-Divergenz"
      ],
      "explanation": "Neuronales Netz mit einer versteckten Schicht sagt das Zielwort aus den Nachbarn voraus; die Gewichte der versteckten Schicht sind das Embedding. cat und kitten liegen näher als cat und democracy."
    },
    {
      "id": "osint-042",
      "tag": "L6",
      "prompt": "Welches Problem klassischer Embeddings adressiert BERT?",
      "answer": "Ein Wort mit mehreren Bedeutungen hat nur ein Embedding; BERT nutzt den ganzen Satz",
      "distractors": [
        "Embeddings sind zu langsam; BERT parallelisiert",
        "Embeddings brauchen zu viele Daten; BERT lernt few-shot",
        "Embeddings sind nicht interpretierbar; BERT liefert Attributionen"
      ],
      "explanation": "word2vec-artige Embeddings scheitern an Polysemie (\"bank\"), weil jedem Token genau ein Vektor zugewiesen wird. BERT bildet kontextabhängige Repräsentationen statt über ein lokales Fenster."
    },
    {
      "id": "osint-043",
      "tag": "L6",
      "prompt": "Vergleich der NLP-Ansätze: Welche Aussage stimmt?",
      "answer": "LLMs sind nicht-deterministisch, nicht interpretierbar, halluzinieren, sind langsam",
      "distractors": [
        "Regelbasierte Methoden halluzinieren gelegentlich",
        "Statistische Methoden sind nicht-deterministisch und sprachunabhängig",
        "LLMs sind sprachabhängig und brauchen sauberen Text"
      ],
      "explanation": "RegEx: deterministisch, lokal, interpretierbar, schnell, keine Trainingsdaten, sprachabhängig. Statistisch: deterministisch, teils interpretierbar, mittlerer Datenbedarf. LLM dafür sprachunabhängig und robust gegen messy Text."
    },
    {
      "id": "osint-044",
      "tag": "L6",
      "prompt": "NLP-Pipeline: Reihenfolge?",
      "answer": "Raw text → Tokenize → Normalize → Representation → Analysis",
      "distractors": [
        "Raw text → Normalize → Tokenize → Analysis → Representation",
        "Raw text → Tokenize → Representation → Normalize → Analysis",
        "Raw text → Embedding → Tokenize → Normalize → Analysis"
      ],
      "explanation": "Wie die OSINT-Pipeline nicht linear: Schritte lassen sich verschieben oder überspringen."
    },
    {
      "id": "osint-045",
      "tag": "L6",
      "prompt": "Warum reicht sentence.split(whitespace) nicht?",
      "answer": "Satzzeichen kleben am Wort (\"hat\" vs. \"hat.\") und Kontraktionen brechen (\"haven't\")",
      "distractors": [
        "Groß- und Kleinschreibung wird nicht vereinheitlicht",
        "Stoppwörter bleiben erhalten",
        "Flexionsformen werden nicht zusammengeführt"
      ],
      "explanation": "Deshalb NLTK. Merksatz: Bei Tokenisierung will man immer Kontext. Einheiten können Wörter, Subwörter, Sätze oder Zeichen sein."
    },
    {
      "id": "osint-046",
      "tag": "L6",
      "prompt": "Welches Problem hat Lowercasing?",
      "answer": "Großschreibung kann Bedeutung tragen — \"Trump\" vs. \"trump\"",
      "distractors": [
        "Es verlangsamt die Pipeline bei großen Korpora",
        "Es macht Stemming unmöglich",
        "Es zerstört die Tokenisierung"
      ],
      "explanation": "Großbuchstaben können Emphase oder Eigennamen markieren. Standard-Normalisierung, die Signal vernichtet."
    },
    {
      "id": "osint-047",
      "tag": "L6",
      "prompt": "Stop-Word-Removal: Wann ja, wann nein?",
      "answer": "Entfernen beim Topic Modelling; behalten bei linguistischer Forschung und Sprachidentifikation",
      "distractors": [
        "Immer entfernen — sie tragen keine Bedeutung",
        "Nur bei TF-IDF entfernen, bei BoW behalten",
        "Nur bei LLM-Eingaben entfernen, um Tokens zu sparen"
      ],
      "explanation": "Stoppwörter: if, the, she, a, am, to, though. Bei den beiden Ausnahmen sind die Funktionswörter selbst das Signal."
    },
    {
      "id": "osint-048",
      "tag": "L6",
      "prompt": "Topic Modelling: In welche Kategorie der NLP-Tabelle fällt es?",
      "answer": "Statistische Methoden — deterministisch, teils interpretierbar, mittlerer Trainingsdatenbedarf",
      "distractors": [
        "Regelbasiert — deterministisch und voll interpretierbar",
        "Transformer/LLM — nicht-deterministisch",
        "Keine NLP-Methode, sondern ein Clustering-Verfahren"
      ],
      "explanation": "Schnell, sprachabhängig, keine Halluzination. Hier ist Stop-Word-Removal Pflicht, sonst dominieren Funktionswörter die Themen."
    },
    {
      "id": "osint-049",
      "tag": "L6",
      "prompt": "Welches praktische Problem haben LLMs bei sensiblen Untersuchungsdaten?",
      "answer": "Sie laufen häufig nicht lokal — sensible Daten verlassen die eigene Maschine",
      "distractors": [
        "Sie benötigen zu viel Rechenleistung",
        "Sie unterstützen keine Low-Resource-Sprachen",
        "Sie liefern keine Wahrscheinlichkeiten für ihre Ausgaben"
      ],
      "explanation": "Die Vergleichstabelle listet \"local\" als eigene Zeile: RegEx und statistische Methoden lokal, LLMs nur teilweise. Dazu Halluzination und Geschwindigkeit."
    },
    {
      "id": "osint-050",
      "tag": "L7",
      "prompt": "Cyber-enabled vs. cyber-dependent — Beispiel für cyber-dependent?",
      "answer": "Ransomware und DDoS — ohne Computer nicht existent",
      "distractors": [
        "Betrug und Stalking — durch Technik nur verstärkt",
        "Geldwäsche über Krypto-Börsen",
        "Urheberrechtsverletzung durch Filesharing"
      ],
      "explanation": "Cyber-dependent auch: Account Compromise, Password Cracking. Cyber-enabled: klassisches Delikt, durch Technik skaliert."
    },
    {
      "id": "osint-051",
      "tag": "L7",
      "prompt": "Malware-Taxonomie: Virus, Wurm, Trojaner, Rootkit?",
      "answer": "Virus: einzelner Rechner. Wurm: über das Netz. Trojaner: tarnt sich. Rootkit: verbirgt seine Präsenz",
      "distractors": [
        "Alle vier sind Verbreitungswege; der Unterschied liegt in der Payload",
        "Virus und Wurm sind Payloads, Trojaner und Rootkit Verbreitungswege",
        "Der Unterschied liegt in der Zielplattform"
      ],
      "explanation": "Davon getrennt die Payload: Ransomware, Keylogger, Spyware, Remote Access / Botnet-Einbindung. Nicht vermischen — genau die Art Bündelung, die Punkte kostet."
    },
    {
      "id": "osint-052",
      "tag": "L7",
      "prompt": "Warum ist Ransomware als \"Ransomware as a Service\" organisiert?",
      "answer": "Der Betrieb erfordert Entwicklung, Distribution und Kundensupport — arbeitsteilig (z. B. LockBit)",
      "distractors": [
        "Weil Cloud-Infrastruktur die Verschlüsselung beschleunigt",
        "Weil die Strafverfolgung rechtlich ins Leere läuft",
        "Weil Opfer eher zahlen, wenn ein Unternehmen dahintersteht"
      ],
      "explanation": "Analoges Muster: Stresser als DDoS-as-a-Service."
    },
    {
      "id": "osint-053",
      "tag": "L7",
      "prompt": "Warum ist Rate-Limiting beim Scraping keine Höflichkeitsfrage?",
      "answer": "Genug legitime Anfragen haben denselben Effekt wie ein DDoS",
      "distractors": [
        "Weil die API-Kosten unkalkulierbar werden",
        "Weil robots.txt rechtlich bindend ist",
        "Weil dynamische Inhalte sonst nicht laden"
      ],
      "explanation": "Verbindet L3 (Scraping-Praxis) mit L7 (DDoS). Effekt, nicht Absicht."
    },
    {
      "id": "osint-054",
      "tag": "L7",
      "prompt": "Welche vier Täterkategorien nennt die Vorlesung?",
      "answer": "Script Kiddies, Hacker, Malicious Insiders, Regular People",
      "distractors": [
        "Script Kiddies, Hacktivisten, Nationalstaaten, Insider",
        "Black Hat, White Hat, Grey Hat, Insider",
        "Einzeltäter, organisierte Kriminalität, Nachrichtendienste"
      ],
      "explanation": "Script Kiddies: fertige Tools, Spaß oder Geld. Hacker: neuartige Angriffe, Geld oder Reputation. Insiders: legitimer Zugang. Regular People: Stalker, Trolle — brauchen keinerlei technische Fähigkeit."
    },
    {
      "id": "osint-055",
      "tag": "L7",
      "prompt": "Wofür steht OPSEC — und was ist der Bezug zu OSINT?",
      "answer": "Operations Security — schlechte OPSEC macht OSINT leichter",
      "distractors": [
        "Open Perimeter Security",
        "Operational Secrecy — Geheimhaltung laufender Ermittlungen",
        "Ein Synonym für Threat Modeling"
      ],
      "explanation": "Identifiziere die persönlichen Informationen, die du schützen willst, und halte sie sicher. Merksatz: Bad OPSEC == easier OSINT. Die Fehler des Täters sind deine Datenquelle."
    },
    {
      "id": "osint-056",
      "tag": "L7",
      "prompt": "OPSEC gegen Durchschnittshacker vs. gegen den Staat?",
      "answer": "Durchschnittshacker: Passwortmanager, Phishing-Hygiene. Staat: Vollverschlüsselung, Tor/VPN, Tails, Burner",
      "distractors": [
        "Hacker: technische Maßnahmen. Staat: juristische Maßnahmen",
        "Kein Unterschied — dieselben Maßnahmen skalieren",
        "Hacker: Anonymität. Staat: Verschlüsselung"
      ],
      "explanation": "Gegen den Staat zusätzlich: nur sichere Messenger, keine dauerhafte Datenspeicherung, keine Social Media, niemandem trauen. Im Alltag nicht durchhaltbar — daran scheitern Täter."
    },
    {
      "id": "osint-057",
      "tag": "L7",
      "prompt": "Social Engineering: Varianten nach Kanal?",
      "answer": "E-Mail = Phishing, SMS = Smishing, Anruf = Vishing",
      "distractors": [
        "E-Mail = Phishing, SMS = Vishing, Anruf = Smishing",
        "E-Mail = Spoofing, SMS = Smishing, Anruf = Pretexting",
        "Alle drei heißen Phishing"
      ],
      "explanation": "Ziel ist immer eines von dreien: sensible Informationen erlangen, Geld erhalten, Malware zum Download bringen."
    },
    {
      "id": "osint-058",
      "tag": "L7",
      "prompt": "Was ist 419 Advanced Fee Fraud — und woher kommt der Name?",
      "answer": "Vorschussbetrug — benannt nach Section 419 des nigerianischen Strafgesetzbuchs",
      "distractors": [
        "Ein Botnetz-Typ, benannt nach Port 419",
        "Ein HTTP-Statuscode-Scam",
        "Ein Ponzi-Schema, benannt nach der Opferzahl"
      ],
      "explanation": "Zahl mir eine kleine Summe, ich zahle dir eine große. Verwandt: Impersonation, Relationship Scams, Drohungen, Investment Scams, Pyramiden- und Ponzi-Systeme."
    },
    {
      "id": "osint-059",
      "tag": "L7",
      "prompt": "Credential Stuffing vs. Password Cracking?",
      "answer": "Stuffing nutzt Zugangsdaten aus fremden Breaches auf anderen Diensten; Cracking berechnet das Passwort aus einem Hash",
      "distractors": [
        "Stuffing pröbelt alle Kombinationen; Cracking nutzt Wörterbücher",
        "Stuffing ist ein Server-, Cracking ein Client-Angriff",
        "Beide bezeichnen dasselbe"
      ],
      "explanation": "Stuffing nutzt Passwort-Wiederverwendung, kein Rechenaufwand pro Konto. Weitere Wege: Raten/Bruteforce, Data Breach, OSINT. Ohne Passwort: Phishing oder die Website hacken."
    },
    {
      "id": "osint-060",
      "tag": "L7",
      "prompt": "Wofür steht NCII?",
      "answer": "Non-Consensual Intimate Imagery — auch NCIM",
      "distractors": [
        "Network Credential Injection Incident",
        "Non-Compliant Information Infrastructure",
        "Ein Unterfall des Doxxing ohne eigenen Begriff"
      ],
      "explanation": "Steht unter Cyber-Dependent Crimes, weil die Bilder häufig über kompromittierte Accounts oder Geräte beschafft werden. Überschneidet sich mit den Interpersonal Harms."
    },
    {
      "id": "osint-061",
      "tag": "L7",
      "prompt": "Cyberstalking: definierende Merkmale?",
      "answer": "Wiederholung und fehlende Einwilligung",
      "distractors": [
        "Der Einsatz von Spyware auf dem Gerät des Opfers",
        "Die Veröffentlichung personenbezogener Daten",
        "Ein Angriff über mindestens drei Plattformen"
      ],
      "explanation": "Wiederholte, unerwünschte Nutzung von Kommunikationsmitteln zur Belästigung oder Überwachung. Nicht die technische Raffinesse ist konstitutiv."
    },
    {
      "id": "osint-062",
      "tag": "L7",
      "prompt": "Technologiegestützter häuslicher Missbrauch: welche fünf Formen?",
      "answer": "Belästigung, Geräte-/Account-Zugriff, Restriktionen, Manipulation, Überwachung",
      "distractors": [
        "Belästigung, Doxxing, SWATing, Trolling, Stalking",
        "Phishing, Spyware, Keylogging, Standortverfolgung",
        "Isolation, Kontrolle, Drohung"
      ],
      "explanation": "Der Angreifer hat physischen Zugang und kennt die Sicherheitsfragen — klassische OPSEC greift kaum. Einzeln nennen, nicht bündeln."
    },
    {
      "id": "osint-063",
      "tag": "L7",
      "prompt": "Doxxing und SWATing — wie hängen sie zusammen?",
      "answer": "Doxxing ist das Auffinden und Veröffentlichen; SWATing nutzt die Adresse für einen vorgetäuschten Polizeieinsatz",
      "distractors": [
        "Doxxing zielt auf Firmen, SWATing auf Privatpersonen",
        "SWATing ist die Veröffentlichung, Doxxing die Drohung",
        "Dieselbe Handlung in unterschiedlichen Jurisdiktionen"
      ],
      "explanation": "Doxxing ist methodisch dasselbe wie OSINT, nur mit schädigender Absicht. Trolling steht in derselben Kategorie der Interpersonal Harms."
    },
    {
      "id": "osint-064",
      "tag": "L7",
      "prompt": "DDoS: Wie funktioniert es und was wird benötigt?",
      "answer": "Ein Botnetz überlastet den Server, bis er keinen Traffic mehr verarbeiten kann",
      "distractors": [
        "Root-Zugriff und Herunterfahren des Dienstes",
        "Umleitung der DNS-Einträge",
        "Verschlüsselung der Datenbank gegen Lösegeld"
      ],
      "explanation": "Voraussetzung: Malware auf vielen verwundbaren Geräten. Als Dienstleistung: Stresser, ab etwa 10 Euro, beworben als Test der eigenen Server — eindeutig strafbar."
    },
    {
      "id": "osint-065",
      "tag": "L7",
      "prompt": "Carding: Welches Problem löst der Dienst?",
      "answer": "Verkauf gestohlener Kartendaten und Einkauf mit fremden Karten — Risikoauslagerung; Beispiel CardersMarket",
      "distractors": [
        "Klonen physischer Karten mit Skimming-Geräten",
        "Weiterverkauf legitim erworbener Geschenkkarten",
        "Ein Ponzi-Schema auf Basis von Kreditkartenlimits"
      ],
      "explanation": "Problem des Täters: gestohlene Kartendaten, die er nicht selbst einsetzen will. Optional mit Weiterverkauf der gekauften Waren."
    },
    {
      "id": "osint-066",
      "tag": "L7",
      "prompt": "TL;DR: Warum ist OSINT gegen Täter so wirksam?",
      "answer": "Täter bräuchten sehr gute OPSEC, halten sie aber nicht durch",
      "distractors": [
        "Weil Behörden ohnehin Zugriff auf Plattformdaten haben",
        "Weil Cyberkriminalität überwiegend auf offenen Foren stattfindet",
        "Weil Malware-Analyse Teil des OSINT-Werkzeugkastens ist"
      ],
      "explanation": "Die Brücke, die den ganzen Kurs zusammenhält."
    },
    {
      "id": "osint-067",
      "tag": "L7",
      "prompt": "WannaCry: Was war die Rolle von Marcus Hutchins?",
      "answer": "Er registrierte eine im Malware-Code hinterlegte Domain und löste einen Killswitch aus",
      "distractors": [
        "Er veröffentlichte den Entschlüsselungsschlüssel",
        "Er übernahm das Command-and-Control-Botnetz",
        "Er patchte die SMB-Schwachstelle vor dem Hersteller"
      ],
      "explanation": "WannaCry (Mai 2017): Ransomware mit wurmartiger Verbreitung über eine SMB-Schwachstelle. [Deine Notizen enthalten nur den Stichwortverweis; Details aus allgemeinem Wissen.]"
    },
    {
      "id": "osint-068",
      "tag": "L8",
      "prompt": "Raster vs. Vektor: SVG, PDF, Fonts, OpenStreetMap?",
      "answer": "Vektor — Primitive und Attribute; Text bleibt Text",
      "distractors": [
        "Raster — Gitter aus Samples; Text ist Pixel",
        "PDF ist Raster, die übrigen Vektor",
        "Alle vier sind Hybridformate"
      ],
      "explanation": "Raster: Fotos, Screenshots, Satellitenbilder; JPEG, PNG, TIFF; Text ist Pixel, also OCR nötig. Die forensisch relevante Konsequenz ist die Textextrahierbarkeit."
    },
    {
      "id": "osint-069",
      "tag": "L8",
      "prompt": "Welche Evidenz zur Geolokalisierung ist belastbarer?",
      "answer": "Schatten und Pixelgeometrie — schwer zu fälschen; EXIF ist trivial manipulierbar",
      "distractors": [
        "EXIF-GPS-Tags — direkt aus dem Sensor",
        "Der Zeitstempel, weil serverseitig gesetzt",
        "Die Software-Angabe im Header"
      ],
      "explanation": "Schatten müssen geometrisch konsistent sein. EXIF ist Hinweis, nie Beweis."
    },
    {
      "id": "osint-070",
      "tag": "L8",
      "prompt": "Welche Felder liefert EXIF?",
      "answer": "Geolocation, Timestamp, Device Info, Belichtungszeit, Software",
      "distractors": [
        "Geolocation, Auflösung, Dateigröße, Farbraum, Autor",
        "Timestamp, Upload-Server, IP-Adresse, Nutzername",
        "Geolocation, Timestamp, Hashwert, Kompressionsrate"
      ],
      "explanation": "Alles trivial editierbar. Fehlendes EXIF ist ebenfalls informativ: die meisten Plattformen strippen es beim Upload."
    },
    {
      "id": "osint-071",
      "tag": "L8",
      "prompt": "2D-Projektion: Was bedeutet sie für die Bildforensik?",
      "answer": "Tiefeninformation geht verloren; Projektionsgeometrie erlaubt aber Rückschlüsse auf Kamerastandort und Objektgrößen",
      "distractors": [
        "Farbinformation wird auf drei Kanäle reduziert",
        "Die Auflösung sinkt proportional zur Distanz",
        "Metadaten werden beim Rendering verworfen"
      ],
      "explanation": "[teilweise ungeprüft — in deinen Notizen nur ein Bild] Parallele Linien konvergieren in Fluchtpunkten, Objektgröße skaliert mit der Distanz. Grundlage der Schattenanalyse."
    },
    {
      "id": "osint-072",
      "tag": "L8",
      "prompt": "Geolokalisierung ohne Metadaten: welche Clues?",
      "answer": "Linksverkehr, Steckdosen, Infrastruktur, Vegetation, Landmarken, Kennzeichen, Sprache, Domains, Telefonnummern",
      "distractors": [
        "EXIF-GPS, Zeitstempel, Gerätemodell, Software",
        "Auflösung, Farbraum, Kompressionsartefakte, Dateigröße",
        "IP-Adresse des Uploads, Server-Standort, CDN-Region"
      ],
      "explanation": "Prinzip: unabhängige, schwer fälschbare Umgebungsdetails kombinieren — Anwendung des Bayes-Gedankens aus L10, sofern die Clues nicht dieselbe Tatsache doppeln."
    },
    {
      "id": "osint-073",
      "tag": "L8",
      "prompt": "Satellitendaten: Trade-off zwischen MODIS und Sentinel-2?",
      "answer": "MODIS täglich bei 250 m; Sentinel-2 alle 5 Tage bei 10-60 m — Revisit gegen Auflösung",
      "distractors": [
        "MODIS liefert Vektordaten, Sentinel-2 Rasterdaten",
        "MODIS ist multispektral, Sentinel-2 panchromatisch",
        "Sentinel-2 täglich, MODIS nur auf Anfrage"
      ],
      "explanation": "VIIRS: 1 Tag, 375-750 m. Sentinel-3: 1-2 Tage, 300 m bis 1 km. Für ein kurzlebiges Ereignis brauchst du Revisit, für ein Objekt Auflösung."
    },
    {
      "id": "osint-074",
      "tag": "L8",
      "prompt": "Was hat ein Satellitenbild zusätzlich zu einem gewöhnlichen Rasterbild?",
      "answer": "Kanäle — mehrere Spektralbänder pro Pixel, auch außerhalb des sichtbaren Lichts",
      "distractors": [
        "Vektor-Overlays mit Straßen- und Grenzdaten",
        "Eine höhere Farbtiefe pro RGB-Kanal",
        "Eingebettete EXIF-Metadaten"
      ],
      "explanation": "Raster mit Georeferenz plus Kanäle. Daraus lassen sich Vegetation, Feuchtigkeit, Wärme oder Brandspuren ableiten, die im normalen Foto unsichtbar sind."
    },
    {
      "id": "osint-075",
      "tag": "L9",
      "prompt": "Niedrige Degree-, sehr hohe Betweenness-Centrality. Was ist dieser Account?",
      "answer": "Ein Broker/Bridge — wenige Kontakte, die sonst getrennte Communities verbinden",
      "distractors": [
        "Ein Hub — zentraler Akteur mit vielen direkten Kontakten",
        "Ein Bot — hohe Aktivität ohne echte Beziehungen",
        "Ein Peripherieknoten ohne strukturelle Bedeutung"
      ],
      "explanation": "Betweenness = Anteil der kürzesten Pfade durch den Knoten. Interpretation: Kurier, Vermittler, Gatekeeper. Entfernen zerlegt das Netz, obwohl der Knoten unauffällig aussieht."
    },
    {
      "id": "osint-076",
      "tag": "L9",
      "prompt": "Definiere Closeness-Centrality korrekt.",
      "answer": "Kehrwert der mittleren Distanz zu allen anderen Knoten",
      "distractors": [
        "Anteil der kürzesten Pfade, die durch den Knoten laufen",
        "Zahl der direkten Nachbarn",
        "Anteil der Nachbarn, die untereinander verbunden sind"
      ],
      "explanation": "C(u) = (n-1) / Summe der Distanzen d(u,v). Option 2 ist Betweenness, 3 ist Degree, 4 der Clustering-Koeffizient. In deinen Notizen ist Betweenness fälschlich unter Closeness abgelegt."
    },
    {
      "id": "osint-077",
      "tag": "L9",
      "prompt": "Kantentypen: Wohin gehören Text-Embeddings und Username-Ähnlichkeit?",
      "answer": "Computed — sie stammen aus einem Modell, nicht aus einer beobachteten Relation",
      "distractors": [
        "Explizit — direkt aus den Daten ablesbar",
        "Fuzzy — beruhen auf gemeinsamen Merkmalen",
        "Keine Kanten, sondern Knotenattribute"
      ],
      "explanation": "Explizit: Co-Autorenschaft, Follower, Straßen, Familie. Fuzzy: gemeinsame Hashtags, gleiche URL, temporale oder physische Nähe. Computed edges tragen die Unsicherheit des Modells in den Graphen."
    },
    {
      "id": "osint-078",
      "tag": "L9",
      "prompt": "Adjazenzmatrix vs. Adjazenzliste: Wann welche?",
      "answer": "Matrix bei dichten Graphen (n² Speicher, O(1) Kantenabfrage); Liste bei dünnen",
      "distractors": [
        "Matrix bei gerichteten, Liste bei ungerichteten Graphen",
        "Matrix bei gewichteten, Liste bei ungewichteten Kanten",
        "Rein stilistisch, beide äquivalent effizient"
      ],
      "explanation": "Reale Social Graphs sind extrem dünn, also Liste. Bei Millionen Accounts ist die Matrix unbrauchbar."
    },
    {
      "id": "osint-079",
      "tag": "L9",
      "prompt": "Graph aus Direktnachrichten: gerichtet oder ungerichtet?",
      "answer": "Gerichtet — daraus folgen indeg und outdeg als getrennte Maße",
      "distractors": [
        "Ungerichtet — eine Konversation ist wechselseitig",
        "Ungerichtet, aber gewichtet nach Nachrichtenzahl",
        "Hängt von Lesebestätigungen ab"
      ],
      "explanation": "Ungerichtet: edge(u,v) = edge(v,u). Gerichtet: nicht. Viele eingehende, kaum ausgehende Nachrichten ist ein anderes Verhaltensmuster als umgekehrt."
    },
    {
      "id": "osint-080",
      "tag": "L9",
      "prompt": "Community Detection: Was ist das Ziel?",
      "answer": "Gruppen finden, die intern dichter verbunden sind als nach außen",
      "distractors": [
        "Die zentralsten Knoten identifizieren",
        "Den kürzesten Pfad zwischen zwei Knoten bestimmen",
        "Kanten entfernen, bis der Graph azyklisch ist"
      ],
      "explanation": "[ungeprüft — in deinen Notizen nur ein Bild] Modularity als Gütemaß, Louvain als Verfahren, Connected Components als trivialster Fall. Ein Broker sitzt genau zwischen zwei Communities."
    },
    {
      "id": "osint-081",
      "tag": "L9",
      "prompt": "Graph-Topologie: Was beschreibt sie?",
      "answer": "Die Gesamtstruktur des Netzes — Star, Chain, Clique, Mesh, Small-World, Scale-Free",
      "distractors": [
        "Die Zentralitätswerte aller Knoten aggregiert",
        "Die Wahl zwischen Adjazenzmatrix und -liste",
        "Die Zuordnung von Knoten zu Communities"
      ],
      "explanation": "[ungeprüft — in deinen Notizen nur ein Bild] Reale Social Graphs sind scale-free. Brücke zu L5: die Gradverteilung ist rechtsschief, der mittlere Grad sagt kaum etwas."
    },
    {
      "id": "osint-082",
      "tag": "L10",
      "prompt": "Prior 5 %, ein schwaches Indiz. Welche zwei Größen brauchst du zum Update?",
      "answer": "P(Indiz | Match) und P(Indiz | kein Match)",
      "distractors": [
        "Stichprobengröße und Signifikanzniveau",
        "Prior und Falsch-Positiv-Rate des Tests",
        "Sensitivität und Prävalenz"
      ],
      "explanation": "Der Likelihood-Ratio ist der Faktor. Beim Zeitzonenfenster teilen Millionen Menschen dasselbe Merkmal, also Verhältnis nahe 1 — Gewicht 1 heißt: das Indiz sagt nichts. Ratio unter 1 spricht für Unschuld."
    },
    {
      "id": "osint-083",
      "tag": "L10",
      "prompt": "Zwei Fehlerquellen beim Kombinieren schwacher Signale nach Bayes?",
      "answer": "Überlappende Indizien und Vergessen der Basisrate",
      "distractors": [
        "Zu kleiner Prior und zu großes Signifikanzniveau",
        "Nicht-normalverteilte Daten und fehlende Varianzhomogenität",
        "Zu wenige Indizien und geringe Datenqualität"
      ],
      "explanation": "Wenn drei Signale alle nur bedeuten \"der Account ist neu\", hast du dieselbe Tatsache dreifach gezählt. Praktisches Hindernis: P(Indiz | Insider) verlangt bekannte Positivfälle, die im OSINT-Kontext meist nicht existieren."
    },
    {
      "id": "osint-084",
      "tag": "L10",
      "prompt": "@RiverWatch postet stets 3 h vor @TownNewsAlert. Vier Erklärungen außer Kausalität?",
      "answer": "Confounder, Reverse Causation, Collider/Selection Bias, Zufall bei Multiple Testing",
      "distractors": [
        "Bot-Aktivität, Crossposting, Paging-Duplikate, Shadowbanning",
        "Zeitzonenversatz, API-Latenz, Caching, Rate-Limiting",
        "Selection, Survivorship, Non-Response, Recall Bias"
      ],
      "explanation": "Confounder: gemeinsame Drittquelle, etwa dieselbe Pegelmess-Website. Collider: dein Datensatz ist eine Selektion (Berksons Paradox). Merksatz: Für Verdachtsgewinnung reicht ein Muster; für eine Anschuldigung musst du zeigen, dass es nicht harmlos erklärbar ist."
    },
    {
      "id": "osint-085",
      "tag": "L10",
      "prompt": "Was macht einen Hedge gut statt nutzlos?",
      "answer": "Wahrscheinlichkeit, Solidität der Basis, und was die Einschätzung ändern würde",
      "distractors": [
        "Konsequente Verwendung von Konjunktiven",
        "Nennung aller Datenquellen und Limitationen",
        "Verzicht auf Zahlenangaben"
      ],
      "explanation": "Schlechter Hedge: \"dieser Account könnte möglicherweise beteiligt sein\" — nichts könnte das widerlegen. Test: Wenn kein zukünftiger Fakt deinen Satz falsch machen kann, streich ihn."
    },
    {
      "id": "osint-086",
      "tag": "L11",
      "prompt": "Was zeigt Anscombes Quartett (1973)?",
      "answer": "Summary Statistics verwerfen konstruktionsbedingt Information — verschiedene Formen ergeben identische Kennzahlen",
      "distractors": [
        "Korrelation impliziert keine Kausalität",
        "Ausreißer müssen vor der Analyse entfernt werden",
        "Vier Stichproben derselben Population konvergieren"
      ],
      "explanation": "Mean, Varianz und r komprimieren jeweils 11 Zahlen auf 1. Jede Pipeline, die auf Aggregatstatistiken filtert oder rankt, behandelt alle vier Datensätze identisch. Plotten ist die Kontrolle, ob die Kennzahl lügt."
    },
    {
      "id": "osint-087",
      "tag": "L11",
      "prompt": "Data-Ink-Ratio: Was fordert das Prinzip?",
      "answer": "Maximiere den Tinte-Anteil, der Daten kodiert; entferne Dekoratives",
      "distractors": [
        "Nutze möglichst viele Farbkanäle",
        "Halte die Variablenzahl unter vier",
        "Verwende nur Graustufen"
      ],
      "explanation": "Gitterlinien, 3D-Effekte, Rahmen und Schattierungen kodieren keine Daten."
    },
    {
      "id": "osint-088",
      "tag": "L11",
      "prompt": "Wozu dient Datenvisualisierung laut Vorlesung?",
      "answer": "Analyse, Kommunikation, Entscheidungsfindung",
      "distractors": [
        "Exploration, Modellierung, Validierung",
        "Deskription, Inferenz, Prognose",
        "Rohdaten, Aggregation, Publikation"
      ],
      "explanation": "Der Zweck bestimmt die Gestaltung. Analyse ist für dich selbst — siehe Anscombe."
    },
    {
      "id": "osint-089",
      "tag": "L11",
      "prompt": "Wie kodiert man eine dritte Variable in einem 2D-Plot?",
      "answer": "Ein zusätzlicher visueller Kanal — Farbe, Größe oder Facettierung",
      "distractors": [
        "Ein 3D-Plot mit rotierbarer Achse",
        "Aggregation der dritten Variable auf einen Mittelwert",
        "Eine zweite y-Achse"
      ],
      "explanation": "[teilweise ungeprüft] 1 Variable: Histogramm, Boxplot, Dichte. 2: Scatter, Linie, Heatmap. N: Small Multiples, Parallelkoordinaten, Korrelationsmatrix. Jede Variable braucht einen eigenen Kanal, und Kanäle sind knapp."
    },
    {
      "id": "osint-090",
      "tag": "L11",
      "prompt": "Nightingale's Rose: Was ist der Lernpunkt?",
      "answer": "Die Kodierung verändert die Wahrnehmung — Fläche wächst quadratisch, das Auge liest linear",
      "distractors": [
        "Historische Daten brauchen Fehlerbalken",
        "Radialdiagramme sind die effizienteste Zeitdarstellung",
        "Farbwahl ist wichtiger als Achsenwahl"
      ],
      "explanation": "Dieselben Daten (April 1854 bis März 1855) unter zwei Kodierungen. Verwandt: Reuters-Diagramm zu Waffentoten in Florida (2014) mit invertierter y-Achse."
    },
    {
      "id": "osint-091",
      "tag": "L11",
      "prompt": "Warum ist eine Default-Farbskala ein Risiko?",
      "answer": "Sie ist wahrnehmungspsychologisch nicht gleichabständig und erzeugt Grenzen, wo keine sind",
      "distractors": [
        "Sie benötigt zu viele Farbkanäle beim Druck",
        "Sie lässt sich nicht auf kategoriale Daten anwenden",
        "Sie senkt die Data-Ink-Ratio"
      ],
      "explanation": "Klassisch der Regenbogen/Jet-Verlauf, der in Graustufen und bei Farbfehlsichtigkeit zusammenbricht. Achse und Farbe sind Manipulationsflächen, nicht Dekoration."
    },
    {
      "id": "osint-092",
      "tag": "L12",
      "prompt": "Dissemination: Visualisierung fürs Team vs. für die Öffentlichkeit?",
      "answer": "Team: dichte explorative Plots (Plotly, NetworkX, Sankey). Öffentlichkeit: weniger Variablen, mehr Erklärung",
      "distractors": [
        "Team: statische Bilder. Öffentlichkeit: interaktive Dashboards",
        "Kein Unterschied",
        "Team: aggregierte Kennzahlen. Öffentlichkeit: Rohdaten"
      ],
      "explanation": "Im Team darf viel Information auf wenig Raum, weil der Kontext bekannt ist. Das ist die Technik-Seite der Dissemination-Stufe aus L3."
    }
  ]
};
const LS = "kartenstapel.v2";

/* Leitner: drei Stufen, Intervalle skalieren mit der Deckgröße.
   Neue Karten haben immer Vorrang — deshalb ist jede Karte nach
   genau einem Durchgang einmal dran gewesen. */
const MASTER = 3;
function gapsFor(n){
  const N = Math.max(6, n);
  return [Math.max(3, Math.round(N*0.06)), Math.round(N*0.35), Math.round(N*1.1)];
}

let DB = null;
const UI = {revealed:false, picked:null, shuffled:null, editing:null, enter:true, busy:false};
const $ = s => document.querySelector(s);
const ESCMAP = {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;","/":"&#47;","=":"&#61;"};
const esc = s => String(s).replace(/[&<>"'`\/=]/g, m => ESCMAP[m]);
const uid = p => p + "-" + Math.random().toString(36).slice(2,9);

/* ================= Speicher: Server, sonst localStorage ================= */
const Store = {
  remote:false, timer:null,
  async init(){
    try{
      const r = await fetch("api/state", {credentials:"same-origin"});
      if(r.ok && r.headers.get("x-kartenstapel")){
        this.remote = true;
        const d = await r.json();
        return (d && d.decks) ? d : null;
      }
    }catch(e){ /* kein Server: lokal weiter */ }
    try{ return JSON.parse(localStorage.getItem(LS) || "null"); }catch(e){ return null; }
  },
  save(){
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if(this.remote){
        fetch("api/state", {method:"PUT", credentials:"same-origin",
          headers:{"Content-Type":"application/json"}, body:JSON.stringify(DB)})
          .catch(e => flagOffline());
      } else {
        try{ localStorage.setItem(LS, JSON.stringify(DB)); }
        catch(e){ console.warn("Speichern fehlgeschlagen", e); }
      }
    }, 350);
  }
};
function flagOffline(){
  $("#where").innerHTML = 'Server nicht erreichbar — Änderungen sind <b style="color:var(--wrong)">ungesichert</b>';
}
function renderWhere(){
  $("#where").innerHTML = Store.remote
    ? 'Sitzung auf dem Server — <b>eigener Fortschritt</b>'
    : 'Fortschritt in diesem Browser';
}

/* ================= Modell ================= */
const ID_OK = /^[A-Za-z0-9._:-]{1,64}$/;
// Steuerzeichen raus, Laenge deckeln. Verhindert, dass ein importiertes Deck
// die Oberflaeche sprengt oder Zeilenumbrueche in Attribute schmuggelt.
function clean(v, max){
  return String(v == null ? "" : v).replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, max);
}
function newCard(raw, i){
  raw = raw && typeof raw === "object" ? raw : {};
  return {
    id: ID_OK.test(raw.id || "") ? raw.id : uid("c"),
    tag: clean(raw.tag, 24) || "—",
    prompt: clean(raw.prompt, 600),
    answer: clean(raw.answer, 400),
    distractors: (Array.isArray(raw.distractors)?raw.distractors:[])
      .slice(0,8).map(s=>clean(s,400)).filter(Boolean),
    explanation: clean(raw.explanation, 2000),
    box: Math.min(MASTER, raw.box|0), due: raw.due|0, intro: !!raw.intro,
    mastered: !!raw.mastered, right: raw.right|0, wrong: raw.wrong|0, lapses: raw.lapses|0
  };
}
function newDeck(name, cards){
  const d = {id:uid("d"), name:clean(name,60)||"Deck", tags:null, step:0, current:null,
             stats:{right:0,wrong:0,mastered:0}, cards:{}};
  (cards||[]).forEach((c,i)=>{ const n=newCard(c,i); if(n.prompt&&n.answer) d.cards[n.id]=n; });
  return d;
}
const deck = () => DB.decks[DB.active];
const listCards = d => Object.values(d.cards);
const inScope = (d,c) => !d.tags || d.tags.includes(c.tag);
const pool = d => listCards(d).filter(c => inScope(d,c) && !c.mastered);
function tagsOf(d){
  return [...new Set(listCards(d).map(c=>c.tag))].sort((a,b)=>a.localeCompare(b,"de",{numeric:true}));
}

/* ================= Scheduler ================= */
function pickNext(d){
  const p = pool(d);
  if(!p.length) return null;
  const fresh = p.filter(c => !c.intro);
  if(fresh.length) return fresh[Math.floor(Math.random()*fresh.length)];  // Vorrang
  const due = p.filter(c => c.due <= d.step).sort((a,b)=>a.due-b.due);
  if(due.length) return due[0];
  const up = p.slice().sort((a,b)=>a.due-b.due);                          // vorspulen
  d.step = up[0].due;
  return up[0];
}
function advance(){
  const d = deck();
  const c = pickNext(d);
  d.current = c ? c.id : null;
  if(c) c.intro = true;
  UI.revealed = false; UI.picked = null; UI.shuffled = null;
}
function grade(ok){
  if(UI.busy) return;                       // Doppelklick während der Animation
  const card = $("#card");
  const motion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(card && motion){
    UI.busy = true;
    card.classList.remove("in");
    card.classList.add(ok ? "out-ok" : "out-no");
    setTimeout(() => { UI.busy = false; applyGrade(ok); }, ok ? 190 : 330);
    return;
  }
  applyGrade(ok);
}
function applyGrade(ok){
  const d = deck(), c = d.cards[d.current];
  if(!c) return;
  const G = gapsFor(pool(d).length);
  d.step++;
  if(ok){
    c.right++; d.stats.right++;
    c.box = Math.min(MASTER, c.box+1);
    if(c.box >= MASTER){ c.mastered = true; d.stats.mastered++; }
    else c.due = d.step + G[c.box-1];
  } else {
    c.wrong++; c.lapses++; d.stats.wrong++;
    c.box = Math.max(0, c.box-1);
    c.due = d.step + G[0];
  }
  advance(); UI.enter = true; Store.save(); render();
}
function newRound(d){
  listCards(d).forEach(c => {
    c.box = (c.mastered && c.lapses === 0) ? 1 : 0;
    c.mastered = false; c.intro = false; c.due = 0;
  });
  d.step = 0; d.stats = {right:0,wrong:0,mastered:0};
  advance();
}

/* ================= Rendering ================= */
function renderTabs(){
  const t = $("#tabs");
  t.innerHTML = Object.values(DB.decks).map(d => {
    const left = listCards(d).filter(c => inScope(d,c) && !c.mastered).length;
    return `<button class="tab" role="tab" data-deck="${esc(d.id)}"
      aria-selected="${d.id===DB.active}">${esc(d.name)}<span class="n">${left}</span></button>`;
  }).join("") + `<button class="tab add" id="tab-add" title="Neues Deck">+</button>`;
}
function renderCounts(){
  const d = deck(), all = listCards(d).filter(c=>inScope(d,c)).length;
  const left = pool(d).length;
  const bar = $("#progress");
  if(bar) bar.style.width = all ? Math.round((all-left)/all*100) + "%" : "0%";
  $("#counts").innerHTML = `<b>${all-left}</b>/${all} sitzt · `
    + `<span class="ok">${d.stats.right} richtig</span> · `
    + `<span class="no">${d.stats.wrong} falsch</span>`;
}
function renderQueue(){
  const d = deck(), q = $("#queue");
  const p = pool(d);
  const fresh = p.filter(c=>!c.intro), rest = p.filter(c=>c.intro).sort((a,b)=>a.due-b.due);
  const order = (d.current && d.cards[d.current] ? [d.cards[d.current]] : [])
    .concat(rest.filter(c=>c.id!==d.current), fresh.filter(c=>c.id!==d.current))
    .slice(0, 140);
  q.innerHTML = order.map((c,i) =>
    `<div class="tick ${c.intro ? "b"+Math.min(2,c.box) : "fresh"}${i===0?" cur":""}"></div>`).join("");
}
function render(){
  renderTabs(); renderCounts(); renderQueue(); renderWhere();
  const d = deck(), stage = $("#stage");
  if(!d.current || !d.cards[d.current]){ renderDone(stage, d); return; }
  const enter = UI.enter; UI.enter = false;
  const c = d.cards[d.current];
  const quiz = DB.mode === "quiz" && c.distractors.length > 0;

  if(quiz && !UI.shuffled){
    const o = [c.answer, ...c.distractors];
    for(let i=o.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [o[i],o[j]]=[o[j],o[i]]; }
    UI.shuffled = o;
  }
  const pips = Array.from({length:MASTER}, (_,i)=>`<i class="${i<c.box?"on":""}"></i>`).join("");
  let h = `<div class="tag"><span>${esc(c.tag)}</span>
    <span class="box" title="Stufe ${c.box} von ${MASTER}">${pips}</span>
    <span class="seen">${c.right} richtig / ${c.wrong} falsch</span></div>
    <h1 class="prompt">${esc(c.prompt)}</h1>`;

  if(quiz){
    h += `<div class="opts">` + UI.shuffled.map((o,i)=>{
      let cls = "opt";
      if(UI.revealed){
        if(o===c.answer) cls += " is-right";
        else if(o===UI.picked) cls += " is-wrong";
      }
      return `<button class="${cls}" data-opt="${i}" ${UI.revealed?"disabled":""}>
        <span class="key">${i+1}</span><span>${esc(o)}</span></button>`;
    }).join("") + `</div>`;
  } else {
    h += UI.revealed ? `<div class="face">${esc(c.answer)}</div>`
                     : `<button class="face veiled" data-reveal>Antwort zeigen</button>`;
  }
  if(UI.revealed && c.explanation)
    h += `<div class="explain"><span class="lbl">Warum</span>${esc(c.explanation)}</div>`;
  if(UI.revealed){
    h += `<div class="grade">
      <button class="gbtn no" data-grade="0">Falsch<span class="k">1</span></button>
      <button class="gbtn ok" data-grade="1">Richtig<span class="k">2</span></button></div>`;
    const G = gapsFor(pool(d).length), nb = Math.min(MASTER, c.box+1);
    h += `<p class="hintbar">richtig → ${nb>=MASTER?"sitzt, raus aus der Runde":`in ~${G[nb-1]} Karten wieder`}`
       + ` · falsch → in ~${G[0]} Karten wieder</p>`;
  } else if(quiz){
    h += `<p class="hintbar">antippen · oder Ziffern 1–${UI.shuffled.length}</p>`;
  }
  stage.innerHTML = `<div id="card" class="${enter ? "in" : ""}"><div class="sheet">${h}</div></div>`;
}
function renderDone(stage, d){
  const all = listCards(d).filter(c=>inScope(d,c));
  const trouble = all.filter(c=>c.lapses>0).sort((a,b)=>b.lapses-a.lapses).slice(0,6);
  const empty = all.length === 0;
  stage.innerHTML = `<div class="done">
    <h2>${empty ? "Noch keine Karten" : "Runde geschafft"}</h2>
    <p>${empty ? "Karten anlegen oder importieren."
      : `${d.stats.mastered} Karten sitzen. ${d.stats.wrong} Fehler unterwegs.`}</p>
    ${trouble.length ? `<div class="leader"><h3>Häufigste Fehler</h3><ol>`
      + trouble.map(c=>`<li><span class="n">${c.lapses}×</span><span class="t">${esc(c.tag)}</span>
         <span>${esc(c.prompt)}</span></li>`).join("") + `</ol></div>` : ""}
    <div class="center">
      ${empty ? `<button class="tbtn ghost" id="go-cards">Karte anlegen</button>
                 <button class="tbtn" id="go-io">Importieren</button>`
              : `<button class="tbtn ghost" id="go-round">Neue Runde</button>`}
      ${trouble.length ? `<button class="tbtn" id="go-hard">Nur die Fehlerkarten</button>` : ""}
    </div></div>`;
  const on = (id,fn) => { const el = $("#"+id); if(el) el.onclick = fn; };
  on("go-round", () => { newRound(d); Store.save(); render(); });
  on("go-cards", () => openPanel("#p-cards"));
  on("go-io",    () => openPanel("#p-io"));
  on("go-hard",  () => {
    listCards(d).forEach(c => { c.mastered = c.lapses === 0; c.box = 0; c.intro = false; c.due = 0; });
    d.step = 0; d.stats = {right:0,wrong:0,mastered:0};
    advance(); Store.save(); render();
  });
}

/* ================= Eingaben ================= */
document.addEventListener("click", e => {
  const tab = e.target.closest("[data-deck]");
  if(tab){ DB.active = tab.dataset.deck; if(!deck().current) advance(); Store.save(); render(); return; }
  if(e.target.closest("#tab-add")){ createDeck(); return; }
  if(e.target.closest("[data-reveal]") && !UI.revealed){ UI.revealed = true; render(); return; }
  const opt = e.target.closest("[data-opt]");
  if(opt && !UI.revealed){
    UI.picked = UI.shuffled[+opt.dataset.opt]; UI.revealed = true; render(); return;
  }
  const g = e.target.closest("[data-grade]");
  if(g){ grade(g.dataset.grade === "1"); return; }
});
document.addEventListener("keydown", e => {
  if(e.target.matches("input,textarea,select")) return;
  const d = deck(), c = d && d.current ? d.cards[d.current] : null;
  if(!c) return;
  const quiz = DB.mode === "quiz" && c.distractors.length > 0;
  if(e.code === "Space"){ e.preventDefault(); if(!UI.revealed && !quiz){ UI.revealed = true; render(); } return; }
  if(UI.revealed && (e.key === "1" || e.key === "2")){ grade(e.key === "2"); return; }
  if(!UI.revealed && quiz){
    const n = parseInt(e.key,10);
    if(n>=1 && n<=UI.shuffled.length){ UI.picked = UI.shuffled[n-1]; UI.revealed = true; render(); }
  }
});

/* ================= Panels ================= */
const PANELS = ["#p-filter","#p-cards","#p-deck","#p-io"];
function openPanel(sel){
  const was = $(sel).hidden;
  PANELS.forEach(s => $(s).hidden = true);
  $(sel).hidden = !was;
  if($(sel).hidden) return;
  if(sel === "#p-filter") renderTagList();
  if(sel === "#p-cards")  renderCardList();
  if(sel === "#p-deck")   $("#deck-name").value = deck().name;
  if(sel === "#p-io")     renderIoTargets();
  $(sel).scrollIntoView({behavior:"smooth", block:"nearest"});
}
$("#filter-btn").onclick = () => openPanel("#p-filter");
$("#cards-btn").onclick  = () => openPanel("#p-cards");
$("#deck-btn").onclick   = () => openPanel("#p-deck");
$("#io-btn").onclick     = () => openPanel("#p-io");
function applyTheme(){
  const dark = DB.theme === "dark";
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  $("#theme-btn").textContent = dark ? "Hell" : "Dunkel";
}
$("#theme-btn").onclick = () => {
  DB.theme = DB.theme === "dark" ? "light" : "dark";
  applyTheme(); Store.save();
};
$("#mode-btn").onclick = e => {
  DB.mode = DB.mode === "quiz" ? "karte" : "quiz";
  e.currentTarget.textContent = DB.mode === "quiz" ? "Quiz" : "Karte";
  e.currentTarget.setAttribute("aria-pressed", DB.mode === "karte");
  UI.revealed = false; UI.shuffled = null; Store.save(); render();
};

/* --- Filter --- */
function renderTagList(){
  const d = deck(), tags = tagsOf(d), active = d.tags || tags;
  $("#tag-list").innerHTML = tags.map(t => {
    const n = listCards(d).filter(c=>c.tag===t).length;
    return `<button class="tbtn" data-tag="${esc(t)}" aria-pressed="${active.includes(t)}">${esc(t)} · ${n}</button>`;
  }).join("") || `<span class="msg">Dieses Deck hat noch keine Karten.</span>`;
}
$("#tag-list").addEventListener("click", e => {
  const b = e.target.closest("[data-tag]"); if(!b) return;
  b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true");
});
$("#tag-all").onclick  = () => [...$("#tag-list").children].forEach(b=>b.setAttribute("aria-pressed","true"));
$("#tag-none").onclick = () => [...$("#tag-list").children].forEach(b=>b.setAttribute("aria-pressed","false"));
$("#tag-apply").onclick = () => {
  const d = deck();
  const on = [...$("#tag-list").querySelectorAll("[data-tag]")]
    .filter(b=>b.getAttribute("aria-pressed")==="true").map(b=>b.dataset.tag);
  d.tags = on.length === tagsOf(d).length ? null : on;
  advance(); Store.save(); render(); $("#p-filter").hidden = true;
};

/* --- Karteneditor --- */
function cardForm(){
  return {tag:$("#f-tag").value.trim() || "—", prompt:$("#f-prompt").value.trim(),
    answer:$("#f-answer").value.trim(),
    distractors:[$("#f-d1").value,$("#f-d2").value,$("#f-d3").value].map(s=>s.trim()).filter(Boolean),
    explanation:$("#f-expl").value.trim()};
}
function fillForm(c){
  $("#f-tag").value = c ? c.tag : "";
  $("#f-prompt").value = c ? c.prompt : "";
  $("#f-answer").value = c ? c.answer : "";
  $("#f-d1").value = c && c.distractors[0] || "";
  $("#f-d2").value = c && c.distractors[1] || "";
  $("#f-d3").value = c && c.distractors[2] || "";
  $("#f-expl").value = c ? c.explanation : "";
  UI.editing = c ? c.id : null;
  $("#card-head").textContent = c ? "Karte bearbeiten" : "Neue Karte";
}
$("#card-clear").onclick = () => { fillForm(null); $("#card-msg").textContent = ""; };
$("#card-save").onclick = () => {
  const f = cardForm(), m = $("#card-msg"), d = deck();
  if(!f.prompt || !f.answer){ m.className="msg err"; m.textContent="Frage und richtige Antwort sind Pflicht."; return; }
  if(UI.editing && d.cards[UI.editing]) Object.assign(d.cards[UI.editing], f);
  else { const c = newCard(f,0); d.cards[c.id] = c; }
  m.className="msg ok"; m.textContent = UI.editing ? "Gespeichert." : "Karte angelegt.";
  fillForm(null); if(!d.current) advance();
  Store.save(); render(); renderCardList();
};
function renderCardList(){
  const d = deck(), q = ($("#card-search").value||"").toLowerCase();
  const rows = listCards(d)
    .filter(c => !q || (c.prompt+" "+c.answer+" "+c.tag).toLowerCase().includes(q))
    .sort((a,b)=>a.tag.localeCompare(b.tag,"de",{numeric:true}));
  $("#card-list").innerHTML = rows.length ? rows.map(c =>
    `<div class="crow"><span class="t">${esc(c.tag)}</span>
      <span class="p">${esc(c.prompt)}</span>
      <span class="m">${c.right}/${c.wrong}</span>
      <button class="tbtn" data-edit="${esc(c.id)}">Bearbeiten</button>
      <button class="tbtn danger" data-del="${esc(c.id)}">Löschen</button></div>`).join("")
    : `<div class="crow"><span class="m">Keine Karten.</span></div>`;
}
$("#card-search").oninput = renderCardList;
$("#card-list").addEventListener("click", e => {
  const ed = e.target.closest("[data-edit]"), del = e.target.closest("[data-del]");
  const d = deck();
  if(ed){ fillForm(d.cards[ed.dataset.edit]); $("#p-cards").scrollIntoView({behavior:"smooth",block:"start"}); }
  if(del){
    const c = d.cards[del.dataset.del];
    if(!confirm(`Karte löschen?\n\n${c.prompt}`)) return;
    delete d.cards[c.id];
    if(d.current === c.id) advance();
    Store.save(); render(); renderCardList();
  }
});

/* --- Decks --- */
function createDeck(){
  const name = prompt("Name des neuen Decks:", "Neues Deck");
  if(!name) return;
  const d = newDeck(name.trim(), []);
  DB.decks[d.id] = d; DB.active = d.id;
  Store.save(); render(); openPanel("#p-cards");
}
$("#deck-new").onclick = createDeck;
$("#deck-rename").onclick = () => {
  const n = $("#deck-name").value.trim();
  if(!n) return;
  deck().name = n; Store.save(); render();
  $("#deck-msg").className="msg ok"; $("#deck-msg").textContent="Umbenannt.";
};
$("#deck-del").onclick = () => {
  if(Object.keys(DB.decks).length < 2){
    $("#deck-msg").className="msg err"; $("#deck-msg").textContent="Das letzte Deck lässt sich nicht löschen.";
    return;
  }
  const d = deck();
  if(!confirm(`Deck "${d.name}" mit ${listCards(d).length} Karten endgültig löschen?`)) return;
  delete DB.decks[d.id];
  DB.active = Object.keys(DB.decks)[0];
  if(!deck().current) advance();
  Store.save(); render(); $("#p-deck").hidden = true;
};
$("#round-new").onclick = () => {
  newRound(deck()); Store.save(); render();
  $("#deck-msg").className="msg ok"; $("#deck-msg").textContent="Neue Runde steht.";
};
$("#deck-reset").onclick = () => {
  const d = deck();
  if(!confirm("Alle Stufen und Fehlerzähler dieses Decks zurücksetzen?")) return;
  listCards(d).forEach(c => Object.assign(c,{box:0,due:0,intro:false,mastered:false,right:0,wrong:0,lapses:0}));
  d.step = 0; d.stats = {right:0,wrong:0,mastered:0};
  advance(); Store.save(); render();
  $("#deck-msg").className="msg ok"; $("#deck-msg").textContent="Zurückgesetzt.";
};

/* --- Import / Export --- */
function renderIoTargets(){
  $("#io-target").innerHTML = Object.values(DB.decks)
    .map(d=>`<option value="${esc(d.id)}" ${d.id===DB.active?"selected":""}>nach: ${esc(d.name)}</option>`)
    .join("") + `<option value="__new__">als neues Deck</option>`;
  $("#io-where").textContent = Store.remote
    ? "Dein Fortschritt liegt in deiner Sitzung auf dem Server. Die Sicherung ist trotzdem sinnvoll, falls das Sitzungs-Cookie verloren geht."
    : "Dein Fortschritt liegt im localStorage dieses Browsers. Sichere ihn, bevor du Browserdaten löschst oder das Gerät wechselst.";
}
function runImport(text){
  const m = $("#io-msg");
  let data;
  try{ data = JSON.parse(text); }
  catch(err){ m.className="msg err"; m.textContent="Kein gültiges JSON: "+err.message; return; }
  const list = Array.isArray(data) ? data : (data && data.cards);
  if(!Array.isArray(list)){
    m.className="msg err"; m.textContent='Erwartet wird ein Array oder ein Objekt mit dem Schlüssel "cards".'; return;
  }
  let target;
  if($("#io-target").value === "__new__"){
    target = newDeck((data && data.name) || "Importiertes Deck", []);
    DB.decks[target.id] = target; DB.active = target.id;
  } else target = DB.decks[$("#io-target").value];

  let added = 0, updated = 0;
  list.forEach((raw,i) => {
    const c = newCard(raw,i);
    if(!c.prompt || !c.answer) return;
    const old = target.cards[c.id];
    if(old){ Object.assign(c,{box:old.box,due:old.due,intro:old.intro,mastered:old.mastered,
      right:old.right,wrong:old.wrong,lapses:old.lapses}); updated++; }
    else added++;
    target.cards[c.id] = c;
  });
  if(!added && !updated){ m.className="msg err"; m.textContent="Nichts importiert — jede Karte braucht prompt und answer."; return; }
  if(!target.current || DB.active === target.id) { DB.active = target.id; advance(); }
  Store.save(); render(); renderIoTargets();
  m.className="msg ok"; m.textContent = `${added} neu, ${updated} aktualisiert in "${target.name}".`;
}
$("#io-run").onclick = () => runImport($("#io-text").value);
$("#io-file").onchange = e => {
  const f = e.target.files[0]; if(!f) return;
  const r = new FileReader();
  r.onload = () => { $("#io-text").value = r.result; runImport(r.result); };
  r.readAsText(f);
};
function download(name, obj){
  const b = new Blob([JSON.stringify(obj,null,2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(b); a.download = name; a.click(); URL.revokeObjectURL(a.href);
  $("#io-msg2").className="msg ok"; $("#io-msg2").textContent = name + " heruntergeladen.";
}
const stamp = () => new Date().toISOString().slice(0,10);
const plain = c => ({id:c.id, tag:c.tag, prompt:c.prompt, answer:c.answer,
  distractors:c.distractors, explanation:c.explanation});
$("#dl-all").onclick   = () => download(`kartenstapel-${stamp()}.json`, DB);
$("#dl-deck").onclick  = () => download(`${deck().name.replace(/\W+/g,"-").toLowerCase()}-${stamp()}.json`,
  {name:deck().name, cards:listCards(deck())});
$("#dl-clean").onclick = () => download(`${deck().name.replace(/\W+/g,"-").toLowerCase()}.json`,
  {name:deck().name, cards:listCards(deck()).map(plain)});

/* ================= Start ================= */
function migrate(old){
  // v1 kannte nur ein Deck und speicherte cards als Objekt
  const d = newDeck("OSINT-Klausur", Object.values(old.cards||{}));
  return {v:2, active:d.id, mode:old.mode||"quiz", decks:{[d.id]:d}};
}
(async function boot(){
  let saved = await Store.init();
  if(saved && !saved.decks && saved.cards) saved = migrate(saved);
  if(saved && saved.decks && Object.keys(saved.decks).length){
    DB = saved;
    Object.values(DB.decks).forEach(d => {
      d.stats = Object.assign({right:0,wrong:0,mastered:0}, d.stats||{});
      d.step = d.step|0;
      Object.values(d.cards).forEach(c => Object.assign(c, newCard(c,0), {id:c.id}));
    });
    Object.keys(DB.decks).forEach(k => {                 // Deck-IDs aus fremder Sicherung
      if(!ID_OK.test(k)){ delete DB.decks[k]; }
      else DB.decks[k].name = clean(DB.decks[k].name, 60) || "Deck";
    });
    if(!Object.keys(DB.decks).length){
      const d = newDeck(SEED.name || "OSINT-Klausur", SEED.cards || []);
      DB.decks[d.id] = d;
    }
    if(!DB.decks[DB.active]) DB.active = Object.keys(DB.decks)[0];
  } else {
    const d = newDeck(SEED.name || "OSINT-Klausur", SEED.cards || []);
    DB = {v:2, active:d.id, mode:"quiz", decks:{[d.id]:d}};
  }
  DB.mode = DB.mode || "quiz";
  DB.theme = DB.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme();
  $("#mode-btn").textContent = DB.mode === "quiz" ? "Quiz" : "Karte";
  $("#mode-btn").setAttribute("aria-pressed", DB.mode === "karte");
  if(!deck().current || !deck().cards[deck().current]) advance();
  Store.save(); render();
})();
