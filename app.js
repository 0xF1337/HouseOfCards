
"use strict";
/* Mitgelieferte Decks. "key" ist stabil und verbindet ein Deck im Speicher
   mit seiner Quelle, damit neue Karten aus dem Repo nachgeliefert werden,
   ohne den Fortschritt anzufassen. */
const SEEDS = [
  {
    "key": "osint",
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
  },
  {
    "key": "es",
    "name": "Español",
    "cards": [
      {
        "id": "es-pe-3fbdb724-d",
        "tag": "PE · DE→ES",
        "prompt": "um zu beginnen",
        "answer": "para empezar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-3fbdb724-s",
        "tag": "PE · ES→DE",
        "prompt": "para empezar",
        "answer": "um zu beginnen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-f258483c-d",
        "tag": "PE · DE→ES",
        "prompt": "Wie heißt du?",
        "answer": "¿Cómo te llamas?",
        "distractors": [],
        "explanation": "Infinitiv: llamarse"
      },
      {
        "id": "es-pe-f258483c-s",
        "tag": "PE · ES→DE",
        "prompt": "¿Cómo te llamas?",
        "answer": "Wie heißt du?",
        "distractors": [],
        "explanation": "Infinitiv: llamarse"
      },
      {
        "id": "es-pe-f5da5746-d",
        "tag": "PE · DE→ES",
        "prompt": "Guten Morgen. Guten Tag.",
        "answer": "Buenos días.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-f5da5746-s",
        "tag": "PE · ES→DE",
        "prompt": "Buenos días.",
        "answer": "Guten Morgen. Guten Tag.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-bb656f7d-d",
        "tag": "PE · DE→ES",
        "prompt": "ich heiße (wörtlich: ich nenne mich)",
        "answer": "me llamo",
        "distractors": [],
        "explanation": "Infinitiv: llamarse"
      },
      {
        "id": "es-pe-bb656f7d-s",
        "tag": "PE · ES→DE",
        "prompt": "me llamo",
        "answer": "ich heiße (wörtlich: ich nenne mich)",
        "distractors": [],
        "explanation": "Infinitiv: llamarse"
      },
      {
        "id": "es-pe-13710896-d",
        "tag": "PE · DE→ES",
        "prompt": "ich bin",
        "answer": "soy",
        "distractors": [],
        "explanation": "Infinitiv: ser"
      },
      {
        "id": "es-pe-13710896-s",
        "tag": "PE · ES→DE",
        "prompt": "soy",
        "answer": "ich bin",
        "distractors": [],
        "explanation": "Infinitiv: ser"
      },
      {
        "id": "es-pe-4dc50edd-d",
        "tag": "PE · DE→ES",
        "prompt": "Spanischlehrer/in",
        "answer": "el / la profesor/a de español",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-4dc50edd-s",
        "tag": "PE · ES→DE",
        "prompt": "el / la profesor/a de español",
        "answer": "Spanischlehrer/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-88e94cc9-d",
        "tag": "PE · DE→ES",
        "prompt": "Spanisch",
        "answer": "el español",
        "distractors": [],
        "explanation": "Auch: español/a"
      },
      {
        "id": "es-pe-88e94cc9-s",
        "tag": "PE · ES→DE",
        "prompt": "el español",
        "answer": "Spanisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-7d579efe-d",
        "tag": "PE · DE→ES",
        "prompt": "Hallo.",
        "answer": "Hola.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-7d579efe-s",
        "tag": "PE · ES→DE",
        "prompt": "Hola.",
        "answer": "Hallo.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-860e6577-d",
        "tag": "PE · DE→ES",
        "prompt": "Guten Tag. Guten Abend.",
        "answer": "Buenas tardes.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-860e6577-s",
        "tag": "PE · ES→DE",
        "prompt": "Buenas tardes.",
        "answer": "Guten Tag. Guten Abend.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-80384cf0-d",
        "tag": "PE · DE→ES",
        "prompt": "Nachmittag",
        "answer": "la tarde",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-80384cf0-s",
        "tag": "PE · ES→DE",
        "prompt": "la tarde",
        "answer": "Nachmittag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-5d7a03c4-d",
        "tag": "PE · DE→ES",
        "prompt": "und Sie?",
        "answer": "¿y usted?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-5d7a03c4-s",
        "tag": "PE · ES→DE",
        "prompt": "¿y usted?",
        "answer": "und Sie?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-cb045b2b-d",
        "tag": "PE · DE→ES",
        "prompt": "und",
        "answer": "y",
        "distractors": [],
        "explanation": "Auch: e"
      },
      {
        "id": "es-pe-cb045b2b-s",
        "tag": "PE · ES→DE",
        "prompt": "y",
        "answer": "und",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-60182243-d",
        "tag": "PE · DE→ES",
        "prompt": "Wie geht es Ihnen?",
        "answer": "¿Cómo está?",
        "distractors": [],
        "explanation": "Infinitiv: estar"
      },
      {
        "id": "es-pe-60182243-s",
        "tag": "PE · ES→DE",
        "prompt": "¿Cómo está?",
        "answer": "Wie geht es Ihnen?",
        "distractors": [],
        "explanation": "Infinitiv: estar"
      },
      {
        "id": "es-pe-90ac293b-d",
        "tag": "PE · DE→ES",
        "prompt": "gut",
        "answer": "bien",
        "distractors": [],
        "explanation": "Auch: bueno/-a"
      },
      {
        "id": "es-pe-90ac293b-s",
        "tag": "PE · ES→DE",
        "prompt": "bien",
        "answer": "gut",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-8afbfd02-d",
        "tag": "PE · DE→ES",
        "prompt": "danke",
        "answer": "gracias",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-8afbfd02-s",
        "tag": "PE · ES→DE",
        "prompt": "gracias",
        "answer": "danke",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-8913a02d-d",
        "tag": "PE · DE→ES",
        "prompt": "Wie geht's?",
        "answer": "¿Qué tal?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-8913a02d-s",
        "tag": "PE · ES→DE",
        "prompt": "¿Qué tal?",
        "answer": "Wie geht's?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-29aa961e-d",
        "tag": "PE · DE→ES",
        "prompt": "du",
        "answer": "tú",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-29aa961e-s",
        "tag": "PE · ES→DE",
        "prompt": "tú",
        "answer": "du",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-73a74630-d",
        "tag": "PE · DE→ES",
        "prompt": "Guten Abend. Gute Nacht.",
        "answer": "Buenas noches.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-73a74630-s",
        "tag": "PE · ES→DE",
        "prompt": "Buenas noches.",
        "answer": "Guten Abend. Gute Nacht.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-70111416-d",
        "tag": "PE · DE→ES",
        "prompt": "Nacht",
        "answer": "la noche",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-70111416-s",
        "tag": "PE · ES→DE",
        "prompt": "la noche",
        "answer": "Nacht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-3d1a0f58-d",
        "tag": "PE · DE→ES",
        "prompt": "Wie heißen Sie?",
        "answer": "¿Cómo se llama usted?",
        "distractors": [],
        "explanation": "Infinitiv: llamarse"
      },
      {
        "id": "es-pe-3d1a0f58-s",
        "tag": "PE · ES→DE",
        "prompt": "¿Cómo se llama usted?",
        "answer": "Wie heißen Sie?",
        "distractors": [],
        "explanation": "Infinitiv: llamarse"
      },
      {
        "id": "es-pe-cd54980a-d",
        "tag": "PE · DE→ES",
        "prompt": "mittelmäßig; hier: es geht so",
        "answer": "regular",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-cd54980a-s",
        "tag": "PE · ES→DE",
        "prompt": "regular",
        "answer": "mittelmäßig; hier: es geht so",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-c3e400d5-d",
        "tag": "PE · DE→ES",
        "prompt": "Universitätslaufbahn, Studium",
        "answer": "carreras universitarias",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-c3e400d5-s",
        "tag": "PE · ES→DE",
        "prompt": "carreras universitarias",
        "answer": "Universitätslaufbahn, Studium",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-0d5da2f9-d",
        "tag": "PE · DE→ES",
        "prompt": "Sozialwissenschaften",
        "answer": "las ciencias sociales",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-0d5da2f9-s",
        "tag": "PE · ES→DE",
        "prompt": "las ciencias sociales",
        "answer": "Sozialwissenschaften",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-266af176-d",
        "tag": "PE · DE→ES",
        "prompt": "Wissenschaft",
        "answer": "la ciencia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-266af176-s",
        "tag": "PE · ES→DE",
        "prompt": "la ciencia",
        "answer": "Wissenschaft",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-9cf343f0-d",
        "tag": "PE · DE→ES",
        "prompt": "Rechtswissenschaften",
        "answer": "las ciencias jurídicas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-9cf343f0-s",
        "tag": "PE · ES→DE",
        "prompt": "las ciencias jurídicas",
        "answer": "Rechtswissenschaften",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-c13f4b69-d",
        "tag": "PE · DE→ES",
        "prompt": "Recht, Jura",
        "answer": "el derecho",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-c13f4b69-s",
        "tag": "PE · ES→DE",
        "prompt": "el derecho",
        "answer": "Recht, Jura",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-d21eff34-d",
        "tag": "PE · DE→ES",
        "prompt": "Sozialarbeit",
        "answer": "el trabajo social",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-d21eff34-s",
        "tag": "PE · ES→DE",
        "prompt": "el trabajo social",
        "answer": "Sozialarbeit",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-008e5a27-d",
        "tag": "PE · DE→ES",
        "prompt": "Unternehmensorganisation, Personalwesen",
        "answer": "las relaciones laborales",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-008e5a27-s",
        "tag": "PE · ES→DE",
        "prompt": "las relaciones laborales",
        "answer": "Unternehmensorganisation, Personalwesen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-47cbf161-d",
        "tag": "PE · DE→ES",
        "prompt": "Bezug, Beziehung",
        "answer": "la relación",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-47cbf161-s",
        "tag": "PE · ES→DE",
        "prompt": "la relación",
        "answer": "Bezug, Beziehung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-455b1420-d",
        "tag": "PE · DE→ES",
        "prompt": "Finanzen, Finanzwesen, Finanzwirtschaft",
        "answer": "las finanzas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-455b1420-s",
        "tag": "PE · ES→DE",
        "prompt": "las finanzas",
        "answer": "Finanzen, Finanzwesen, Finanzwirtschaft",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-3a6bd96a-d",
        "tag": "PE · DE→ES",
        "prompt": "Politikwissenschaften",
        "answer": "las ciencias políticas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-3a6bd96a-s",
        "tag": "PE · ES→DE",
        "prompt": "las ciencias políticas",
        "answer": "Politikwissenschaften",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-5cf2cf35-d",
        "tag": "PE · DE→ES",
        "prompt": "Wirtschaft",
        "answer": "la economía",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-5cf2cf35-s",
        "tag": "PE · ES→DE",
        "prompt": "la economía",
        "answer": "Wirtschaft",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-3b5adc3f-d",
        "tag": "PE · DE→ES",
        "prompt": "Kunst",
        "answer": "el arte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-3b5adc3f-s",
        "tag": "PE · ES→DE",
        "prompt": "el arte",
        "answer": "Kunst",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-2c8572df-d",
        "tag": "PE · DE→ES",
        "prompt": "Geisteswissenschaften",
        "answer": "las humanidades",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-2c8572df-s",
        "tag": "PE · ES→DE",
        "prompt": "las humanidades",
        "answer": "Geisteswissenschaften",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-02c275c2-d",
        "tag": "PE · DE→ES",
        "prompt": "Schöne Künste",
        "answer": "las bellas artes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-02c275c2-s",
        "tag": "PE · ES→DE",
        "prompt": "las bellas artes",
        "answer": "Schöne Künste",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-168d859d-d",
        "tag": "PE · DE→ES",
        "prompt": "Geschichte",
        "answer": "la historia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-168d859d-s",
        "tag": "PE · ES→DE",
        "prompt": "la historia",
        "answer": "Geschichte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-9c6d0d95-d",
        "tag": "PE · DE→ES",
        "prompt": "Journalismus, Publizistik, Journalistik",
        "answer": "el periodismo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-9c6d0d95-s",
        "tag": "PE · ES→DE",
        "prompt": "el periodismo",
        "answer": "Journalismus, Publizistik, Journalistik",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-ef506fbe-d",
        "tag": "PE · DE→ES",
        "prompt": "Philologie, Sprachwissenschaft",
        "answer": "la filología",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-ef506fbe-s",
        "tag": "PE · ES→DE",
        "prompt": "la filología",
        "answer": "Philologie, Sprachwissenschaft",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-5e744fdd-d",
        "tag": "PE · DE→ES",
        "prompt": "portugiesisch",
        "answer": "portugués/-esa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-5e744fdd-s",
        "tag": "PE · ES→DE",
        "prompt": "portugués/-esa",
        "answer": "portugiesisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-ded2e7ca-d",
        "tag": "PE · DE→ES",
        "prompt": "moderne Sprachen",
        "answer": "las lenguas modernas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-ded2e7ca-s",
        "tag": "PE · ES→DE",
        "prompt": "las lenguas modernas",
        "answer": "moderne Sprachen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-b6e4795b-d",
        "tag": "PE · DE→ES",
        "prompt": "Naturwissenschaften",
        "answer": "las ciencias",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-b6e4795b-s",
        "tag": "PE · ES→DE",
        "prompt": "las ciencias",
        "answer": "Naturwissenschaften",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-0bd17258-d",
        "tag": "PE · DE→ES",
        "prompt": "Chemie",
        "answer": "la química",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-0bd17258-s",
        "tag": "PE · ES→DE",
        "prompt": "la química",
        "answer": "Chemie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-9aebfaa9-d",
        "tag": "PE · DE→ES",
        "prompt": "Mathematik",
        "answer": "las matemáticas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-9aebfaa9-s",
        "tag": "PE · ES→DE",
        "prompt": "las matemáticas",
        "answer": "Mathematik",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-f5059784-d",
        "tag": "PE · DE→ES",
        "prompt": "Physik",
        "answer": "la física",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-f5059784-s",
        "tag": "PE · ES→DE",
        "prompt": "la física",
        "answer": "Physik",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-2d4d42be-d",
        "tag": "PE · DE→ES",
        "prompt": "Biologie",
        "answer": "la biología",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-2d4d42be-s",
        "tag": "PE · ES→DE",
        "prompt": "la biología",
        "answer": "Biologie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-e22bac6e-d",
        "tag": "PE · DE→ES",
        "prompt": "Gesundheitswissenschaften",
        "answer": "las ciencias de la salud",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-e22bac6e-s",
        "tag": "PE · ES→DE",
        "prompt": "las ciencias de la salud",
        "answer": "Gesundheitswissenschaften",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-681b4f54-d",
        "tag": "PE · DE→ES",
        "prompt": "Pharmazie",
        "answer": "la farmacia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-681b4f54-s",
        "tag": "PE · ES→DE",
        "prompt": "la farmacia",
        "answer": "Pharmazie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-dc6d3639-d",
        "tag": "PE · DE→ES",
        "prompt": "Medizin",
        "answer": "la medicina",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-dc6d3639-s",
        "tag": "PE · ES→DE",
        "prompt": "la medicina",
        "answer": "Medizin",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-41cd806a-d",
        "tag": "PE · DE→ES",
        "prompt": "Tiermedizin",
        "answer": "la veterinaria",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-41cd806a-s",
        "tag": "PE · ES→DE",
        "prompt": "la veterinaria",
        "answer": "Tiermedizin",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-7f333c4d-d",
        "tag": "PE · DE→ES",
        "prompt": "Krankenpflege",
        "answer": "la enfermería",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-7f333c4d-s",
        "tag": "PE · ES→DE",
        "prompt": "la enfermería",
        "answer": "Krankenpflege",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-34a3d0fb-d",
        "tag": "PE · DE→ES",
        "prompt": "Architektur",
        "answer": "la arquitectura",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-34a3d0fb-s",
        "tag": "PE · ES→DE",
        "prompt": "la arquitectura",
        "answer": "Architektur",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-f375e1b0-d",
        "tag": "PE · DE→ES",
        "prompt": "und",
        "answer": "e",
        "distractors": [],
        "explanation": "vor i-, hi-; Auch: y"
      },
      {
        "id": "es-pe-f375e1b0-s",
        "tag": "PE · ES→DE",
        "prompt": "e",
        "answer": "und",
        "distractors": [],
        "explanation": "vor i-, hi-"
      },
      {
        "id": "es-pe-3e19aeff-d",
        "tag": "PE · DE→ES",
        "prompt": "Ingenieurwesen, Maschinenbau",
        "answer": "la ingeniería",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-3e19aeff-s",
        "tag": "PE · ES→DE",
        "prompt": "la ingeniería",
        "answer": "Ingenieurwesen, Maschinenbau",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-fde31b15-d",
        "tag": "PE · DE→ES",
        "prompt": "Wirtschaftsingenieurwesen, Industrietechnik",
        "answer": "la ingeniería industrial",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-fde31b15-s",
        "tag": "PE · ES→DE",
        "prompt": "la ingeniería industrial",
        "answer": "Wirtschaftsingenieurwesen, Industrietechnik",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-fbd597b8-d",
        "tag": "PE · DE→ES",
        "prompt": "Bauingenieurwesen",
        "answer": "la ingeniería civil",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-fbd597b8-s",
        "tag": "PE · ES→DE",
        "prompt": "la ingeniería civil",
        "answer": "Bauingenieurwesen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-28c7e95e-d",
        "tag": "PE · DE→ES",
        "prompt": "Industriedesign",
        "answer": "el diseño industrial",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-28c7e95e-s",
        "tag": "PE · ES→DE",
        "prompt": "el diseño industrial",
        "answer": "Industriedesign",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-65ba7a51-d",
        "tag": "PE · DE→ES",
        "prompt": "Ingenieurinformatik",
        "answer": "la ingeniería informática",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-65ba7a51-s",
        "tag": "PE · ES→DE",
        "prompt": "la ingeniería informática",
        "answer": "Ingenieurinformatik",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-78054626-d",
        "tag": "PE · DE→ES",
        "prompt": "Projektmanagement",
        "answer": "la gestión de proyectos",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-78054626-s",
        "tag": "PE · ES→DE",
        "prompt": "la gestión de proyectos",
        "answer": "Projektmanagement",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-68086cce-d",
        "tag": "PE · DE→ES",
        "prompt": "Was bedeutet …?",
        "answer": "¿Qué significa …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-68086cce-s",
        "tag": "PE · ES→DE",
        "prompt": "¿Qué significa …?",
        "answer": "Was bedeutet …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-2871848c-d",
        "tag": "PE · DE→ES",
        "prompt": "mehr, weitere",
        "answer": "más",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-2871848c-s",
        "tag": "PE · ES→DE",
        "prompt": "más",
        "answer": "mehr, weitere",
        "distractors": [],
        "explanation": "Auch: am meisten"
      },
      {
        "id": "es-pe-ce14f05c-d",
        "tag": "PE · DE→ES",
        "prompt": "Wie spricht man … aus?",
        "answer": "¿Cómo se pronuncia …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-ce14f05c-s",
        "tag": "PE · ES→DE",
        "prompt": "¿Cómo se pronuncia …?",
        "answer": "Wie spricht man … aus?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-b99ee669-d",
        "tag": "PE · DE→ES",
        "prompt": "Schreibt man Paella mit „ll“ oder mit „y“?",
        "answer": "¿Paella se escribe con elle o con ye?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-b99ee669-s",
        "tag": "PE · ES→DE",
        "prompt": "¿Paella se escribe con elle o con ye?",
        "answer": "Schreibt man Paella mit „ll“ oder mit „y“?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-8dc3789e-d",
        "tag": "PE · DE→ES",
        "prompt": "Was bedeutet „quiero quedarme aquí“?",
        "answer": "¿Qué significa quiero quedarme aquí?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-8dc3789e-s",
        "tag": "PE · ES→DE",
        "prompt": "¿Qué significa quiero quedarme aquí?",
        "answer": "Was bedeutet „quiero quedarme aquí“?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-f269a91f-d",
        "tag": "PE · DE→ES",
        "prompt": "Sagt man niño oder ñino mit „ñ“ am Wortanfang?",
        "answer": "¿Se dice niño o ñino con eñe al principio?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-f269a91f-s",
        "tag": "PE · ES→DE",
        "prompt": "¿Se dice niño o ñino con eñe al principio?",
        "answer": "Sagt man niño oder ñino mit „ñ“ am Wortanfang?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-3a138642-d",
        "tag": "PE · DE→ES",
        "prompt": "Auf welcher Seite ist die Übung mit dem „j“?",
        "answer": "¿En qué página está el ejercicio de la jota?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-3a138642-s",
        "tag": "PE · ES→DE",
        "prompt": "¿En qué página está el ejercicio de la jota?",
        "answer": "Auf welcher Seite ist die Übung mit dem „j“?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-bb1cb240-d",
        "tag": "PE · DE→ES",
        "prompt": "Wie spricht man das „c“ in Cicerón aus?",
        "answer": "¿Cómo se pronuncia la ce en Cicerón?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-bb1cb240-s",
        "tag": "PE · ES→DE",
        "prompt": "¿Cómo se pronuncia la ce en Cicerón?",
        "answer": "Wie spricht man das „c“ in Cicerón aus?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-09156599-d",
        "tag": "PE · DE→ES",
        "prompt": "Ramiro, ist die Antwort richtig?",
        "answer": "Ramiro, ¿es correcta la respuesta?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-09156599-s",
        "tag": "PE · ES→DE",
        "prompt": "Ramiro, ¿es correcta la respuesta?",
        "answer": "Ramiro, ist die Antwort richtig?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-4c731270-d",
        "tag": "PE · DE→ES",
        "prompt": "nützliche Sätze für den Unterricht",
        "answer": "frases útiles para la clase",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-4c731270-s",
        "tag": "PE · ES→DE",
        "prompt": "frases útiles para la clase",
        "answer": "nützliche Sätze für den Unterricht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-38276a8e-d",
        "tag": "PE · DE→ES",
        "prompt": "die spanischsprachige Welt",
        "answer": "el mundo hispanohablante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-38276a8e-s",
        "tag": "PE · ES→DE",
        "prompt": "el mundo hispanohablante",
        "answer": "die spanischsprachige Welt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-d61f9d12-d",
        "tag": "PE · DE→ES",
        "prompt": "Stadt",
        "answer": "la ciudad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-d61f9d12-s",
        "tag": "PE · ES→DE",
        "prompt": "la ciudad",
        "answer": "Stadt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-1578164f-d",
        "tag": "PE · DE→ES",
        "prompt": "Person",
        "answer": "la persona",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-1578164f-s",
        "tag": "PE · ES→DE",
        "prompt": "la persona",
        "answer": "Person",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-9ca06eb7-d",
        "tag": "PE · DE→ES",
        "prompt": "Gastronomie",
        "answer": "la gastronomía",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-9ca06eb7-s",
        "tag": "PE · ES→DE",
        "prompt": "la gastronomía",
        "answer": "Gastronomie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-9c05460c-d",
        "tag": "PE · DE→ES",
        "prompt": "Musik",
        "answer": "la música",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-9c05460c-s",
        "tag": "PE · ES→DE",
        "prompt": "la música",
        "answer": "Musik",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-91ef99c8-d",
        "tag": "PE · DE→ES",
        "prompt": "Monument",
        "answer": "el monumento",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-91ef99c8-s",
        "tag": "PE · ES→DE",
        "prompt": "el monumento",
        "answer": "Monument",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-f569c365-d",
        "tag": "PE · DE→ES",
        "prompt": "Natur",
        "answer": "la naturaleza",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-f569c365-s",
        "tag": "PE · ES→DE",
        "prompt": "la naturaleza",
        "answer": "Natur",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-246fcb45-d",
        "tag": "PE · DE→ES",
        "prompt": "Wie schreibt man das?",
        "answer": "¿Cómo se escribe?",
        "distractors": [],
        "explanation": "Infinitiv: escribir"
      },
      {
        "id": "es-pe-246fcb45-s",
        "tag": "PE · ES→DE",
        "prompt": "¿Cómo se escribe?",
        "answer": "Wie schreibt man das?",
        "distractors": [],
        "explanation": "Infinitiv: escribir"
      },
      {
        "id": "es-pe-69ee7cd2-d",
        "tag": "PE · DE→ES",
        "prompt": "mit",
        "answer": "con",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-69ee7cd2-s",
        "tag": "PE · ES→DE",
        "prompt": "con",
        "answer": "mit",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-0cedb2b4-d",
        "tag": "PE · DE→ES",
        "prompt": "ohne",
        "answer": "sin",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-0cedb2b4-s",
        "tag": "PE · ES→DE",
        "prompt": "sin",
        "answer": "ohne",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-5b2893a8-d",
        "tag": "PE · DE→ES",
        "prompt": "Akzent",
        "answer": "el acento",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-5b2893a8-s",
        "tag": "PE · ES→DE",
        "prompt": "el acento",
        "answer": "Akzent",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-16174c82-d",
        "tag": "PE · DE→ES",
        "prompt": "Umlaut",
        "answer": "la diéresis",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-16174c82-s",
        "tag": "PE · ES→DE",
        "prompt": "la diéresis",
        "answer": "Umlaut",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-679834df-d",
        "tag": "PE · DE→ES",
        "prompt": "großes M",
        "answer": "m mayúscula",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-679834df-s",
        "tag": "PE · ES→DE",
        "prompt": "m mayúscula",
        "answer": "großes M",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-4cfb5f66-d",
        "tag": "PE · DE→ES",
        "prompt": "kleines M",
        "answer": "m minúscula",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-4cfb5f66-s",
        "tag": "PE · ES→DE",
        "prompt": "m minúscula",
        "answer": "kleines M",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-09b02f88-d",
        "tag": "PE · DE→ES",
        "prompt": "meine Wörter",
        "answer": "mis palabras",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-pe-09b02f88-s",
        "tag": "PE · ES→DE",
        "prompt": "mis palabras",
        "answer": "meine Wörter",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6989d1b6-d",
        "tag": "L1 · DE→ES",
        "prompt": "in",
        "answer": "en",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6989d1b6-s",
        "tag": "L1 · ES→DE",
        "prompt": "en",
        "answer": "in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b0a31828-d",
        "tag": "L1 · DE→ES",
        "prompt": "Universität",
        "answer": "la universidad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b0a31828-s",
        "tag": "L1 · ES→DE",
        "prompt": "la universidad",
        "answer": "Universität",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-aa321a79-d",
        "tag": "L1 · DE→ES",
        "prompt": "Was ist die Universität?",
        "answer": "¿Qué es la universidad?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-aa321a79-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿Qué es la universidad?",
        "answer": "Was ist die Universität?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-81ba3b59-d",
        "tag": "L1 · DE→ES",
        "prompt": "ist",
        "answer": "es",
        "distractors": [],
        "explanation": "Infinitiv: ser"
      },
      {
        "id": "es-l1-81ba3b59-s",
        "tag": "L1 · ES→DE",
        "prompt": "es",
        "answer": "ist",
        "distractors": [],
        "explanation": "Infinitiv: ser; Auch: er / sie ist, Sie sind"
      },
      {
        "id": "es-l1-dce120ef-d",
        "tag": "L1 · DE→ES",
        "prompt": "Freund/in",
        "answer": "el / la amigo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-dce120ef-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la amigo/-a",
        "answer": "Freund/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9f333668-d",
        "tag": "L1 · DE→ES",
        "prompt": "Hörsaal, Klassenzimmer, Kursraum",
        "answer": "el aula",
        "distractors": [],
        "explanation": "feminines Substantiv (trotz el)"
      },
      {
        "id": "es-l1-9f333668-s",
        "tag": "L1 · ES→DE",
        "prompt": "el aula",
        "answer": "Hörsaal, Klassenzimmer, Kursraum",
        "distractors": [],
        "explanation": "feminines Substantiv (trotz el)"
      },
      {
        "id": "es-l1-5533764a-d",
        "tag": "L1 · DE→ES",
        "prompt": "Kultur",
        "answer": "la cultura",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5533764a-s",
        "tag": "L1 · ES→DE",
        "prompt": "la cultura",
        "answer": "Kultur",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-440e2bcf-d",
        "tag": "L1 · DE→ES",
        "prompt": "Stundenplan",
        "answer": "el horario",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-440e2bcf-s",
        "tag": "L1 · ES→DE",
        "prompt": "el horario",
        "answer": "Stundenplan",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-3d653e50-d",
        "tag": "L1 · DE→ES",
        "prompt": "Titel",
        "answer": "el título",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-3d653e50-s",
        "tag": "L1 · ES→DE",
        "prompt": "el título",
        "answer": "Titel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9c98b7e7-d",
        "tag": "L1 · DE→ES",
        "prompt": "Sport",
        "answer": "el deporte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9c98b7e7-s",
        "tag": "L1 · ES→DE",
        "prompt": "el deporte",
        "answer": "Sport",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6fa0723e-d",
        "tag": "L1 · DE→ES",
        "prompt": "Fest, Feier",
        "answer": "la fiesta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6fa0723e-s",
        "tag": "L1 · ES→DE",
        "prompt": "la fiesta",
        "answer": "Fest, Feier",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-80a30140-d",
        "tag": "L1 · DE→ES",
        "prompt": "Verbindung, Verein, Verband",
        "answer": "la asociación",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-80a30140-s",
        "tag": "L1 · ES→DE",
        "prompt": "la asociación",
        "answer": "Verbindung, Verein, Verband",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6283b5df-d",
        "tag": "L1 · DE→ES",
        "prompt": "Bibliothek",
        "answer": "la biblioteca",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6283b5df-s",
        "tag": "L1 · ES→DE",
        "prompt": "la biblioteca",
        "answer": "Bibliothek",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-fc75dc40-d",
        "tag": "L1 · DE→ES",
        "prompt": "Prüfung",
        "answer": "el examen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-fc75dc40-s",
        "tag": "L1 · ES→DE",
        "prompt": "el examen",
        "answer": "Prüfung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-40947063-d",
        "tag": "L1 · DE→ES",
        "prompt": "Ausflug, Exkursion",
        "answer": "la excursión",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-40947063-s",
        "tag": "L1 · ES→DE",
        "prompt": "la excursión",
        "answer": "Ausflug, Exkursion",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8b02464a-d",
        "tag": "L1 · DE→ES",
        "prompt": "Untersuchung, Forschung",
        "answer": "la investigación",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8b02464a-s",
        "tag": "L1 · ES→DE",
        "prompt": "la investigación",
        "answer": "Untersuchung, Forschung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-809e55b4-d",
        "tag": "L1 · DE→ES",
        "prompt": "für mich",
        "answer": "para mí",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-809e55b4-s",
        "tag": "L1 · ES→DE",
        "prompt": "para mí",
        "answer": "für mich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6e272150-d",
        "tag": "L1 · DE→ES",
        "prompt": "willkommen in",
        "answer": "bienvenido/-a (a)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6e272150-s",
        "tag": "L1 · ES→DE",
        "prompt": "bienvenido/-a (a)",
        "answer": "willkommen in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5bc3f544-d",
        "tag": "L1 · DE→ES",
        "prompt": "Abteilung, Fachbereich",
        "answer": "el departamento",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5bc3f544-s",
        "tag": "L1 · ES→DE",
        "prompt": "el departamento",
        "answer": "Abteilung, Fachbereich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-87e2bff9-d",
        "tag": "L1 · DE→ES",
        "prompt": "Service, Dienst, Dienstleistung",
        "answer": "el servicio",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-87e2bff9-s",
        "tag": "L1 · ES→DE",
        "prompt": "el servicio",
        "answer": "Service, Dienst, Dienstleistung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-61985115-d",
        "tag": "L1 · DE→ES",
        "prompt": "Schüler/in; Student/in",
        "answer": "el / la alumno/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-61985115-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la alumno/-a",
        "answer": "Schüler/in; Student/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-3076b27d-d",
        "tag": "L1 · DE→ES",
        "prompt": "Schwarzes Brett",
        "answer": "el tablón de anuncios",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-3076b27d-s",
        "tag": "L1 · ES→DE",
        "prompt": "el tablón de anuncios",
        "answer": "Schwarzes Brett",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-340304ea-d",
        "tag": "L1 · DE→ES",
        "prompt": "Ankündigung, Bekanntgabe, Anzeige",
        "answer": "el anuncio",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-340304ea-s",
        "tag": "L1 · ES→DE",
        "prompt": "el anuncio",
        "answer": "Ankündigung, Bekanntgabe, Anzeige",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-923e4b24-d",
        "tag": "L1 · DE→ES",
        "prompt": "Studium",
        "answer": "los estudios",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-923e4b24-s",
        "tag": "L1 · ES→DE",
        "prompt": "los estudios",
        "answer": "Studium",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-aec6e11d-d",
        "tag": "L1 · DE→ES",
        "prompt": "Rektor/in",
        "answer": "el / la rector/a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-aec6e11d-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la rector/a",
        "answer": "Rektor/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0493967b-d",
        "tag": "L1 · DE→ES",
        "prompt": "Auftaktveranstaltung des Studienjahres",
        "answer": "la inauguración del curso académico",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0493967b-s",
        "tag": "L1 · ES→DE",
        "prompt": "la inauguración del curso académico",
        "answer": "Auftaktveranstaltung des Studienjahres",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-fbf30a65-d",
        "tag": "L1 · DE→ES",
        "prompt": "Restaurierung, Restauration",
        "answer": "la restauración",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-fbf30a65-s",
        "tag": "L1 · ES→DE",
        "prompt": "la restauración",
        "answer": "Restaurierung, Restauration",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8a34e400-d",
        "tag": "L1 · DE→ES",
        "prompt": "von",
        "answer": "de",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8a34e400-s",
        "tag": "L1 · ES→DE",
        "prompt": "de",
        "answer": "von",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-47304c9d-d",
        "tag": "L1 · DE→ES",
        "prompt": "Fassade",
        "answer": "la fachada",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-47304c9d-s",
        "tag": "L1 · ES→DE",
        "prompt": "la fachada",
        "answer": "Fassade",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7bb31c4c-d",
        "tag": "L1 · DE→ES",
        "prompt": "Angebot",
        "answer": "la oferta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7bb31c4c-s",
        "tag": "L1 · ES→DE",
        "prompt": "la oferta",
        "answer": "Angebot",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9bf35fab-d",
        "tag": "L1 · DE→ES",
        "prompt": "Sportaktivitäten",
        "answer": "las actividades de deporte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9bf35fab-s",
        "tag": "L1 · ES→DE",
        "prompt": "las actividades de deporte",
        "answer": "Sportaktivitäten",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a33867d1-d",
        "tag": "L1 · DE→ES",
        "prompt": "neu",
        "answer": "nuevo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a33867d1-s",
        "tag": "L1 · ES→DE",
        "prompt": "nuevo/-a",
        "answer": "neu",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-529092ce-d",
        "tag": "L1 · DE→ES",
        "prompt": "Tausende Studierende",
        "answer": "miles de estudiantes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-529092ce-s",
        "tag": "L1 · ES→DE",
        "prompt": "miles de estudiantes",
        "answer": "Tausende Studierende",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d150f63e-d",
        "tag": "L1 · DE→ES",
        "prompt": "Willkommensfeier (für Erstsemester)",
        "answer": "la feria de bienvenida",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d150f63e-s",
        "tag": "L1 · ES→DE",
        "prompt": "la feria de bienvenida",
        "answer": "Willkommensfeier (für Erstsemester)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5baa9f1a-d",
        "tag": "L1 · DE→ES",
        "prompt": "Frist",
        "answer": "el plazo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5baa9f1a-s",
        "tag": "L1 · ES→DE",
        "prompt": "el plazo",
        "answer": "Frist",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e0b47605-d",
        "tag": "L1 · DE→ES",
        "prompt": "beantragen, sich bewerben um",
        "answer": "solicitar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e0b47605-s",
        "tag": "L1 · ES→DE",
        "prompt": "solicitar",
        "answer": "beantragen, sich bewerben um",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8e9a998b-d",
        "tag": "L1 · DE→ES",
        "prompt": "Stipendium",
        "answer": "la beca",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8e9a998b-s",
        "tag": "L1 · ES→DE",
        "prompt": "la beca",
        "answer": "Stipendium",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d8e4f94f-d",
        "tag": "L1 · DE→ES",
        "prompt": "Mobilität; Beweglichkeit",
        "answer": "la movilidad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d8e4f94f-s",
        "tag": "L1 · ES→DE",
        "prompt": "la movilidad",
        "answer": "Mobilität; Beweglichkeit",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-da76f622-d",
        "tag": "L1 · DE→ES",
        "prompt": "Programm",
        "answer": "el programa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-da76f622-s",
        "tag": "L1 · ES→DE",
        "prompt": "el programa",
        "answer": "Programm",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7cbca821-d",
        "tag": "L1 · DE→ES",
        "prompt": "(akademischer) Grad",
        "answer": "el grado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7cbca821-s",
        "tag": "L1 · ES→DE",
        "prompt": "el grado",
        "answer": "(akademischer) Grad",
        "distractors": [],
        "explanation": "Auch: Grad"
      },
      {
        "id": "es-l1-b8a3401c-d",
        "tag": "L1 · DE→ES",
        "prompt": "Master (akademischer Grad)",
        "answer": "el máster universitario",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b8a3401c-s",
        "tag": "L1 · ES→DE",
        "prompt": "el máster universitario",
        "answer": "Master (akademischer Grad)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-05200e1e-d",
        "tag": "L1 · DE→ES",
        "prompt": "Doktortitel, Promotion",
        "answer": "el doctorado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-05200e1e-s",
        "tag": "L1 · ES→DE",
        "prompt": "el doctorado",
        "answer": "Doktortitel, Promotion",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-980ff748-d",
        "tag": "L1 · DE→ES",
        "prompt": "eigene/r/s",
        "answer": "propio/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-980ff748-s",
        "tag": "L1 · ES→DE",
        "prompt": "propio/-a",
        "answer": "eigene/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-48a12dc6-d",
        "tag": "L1 · DE→ES",
        "prompt": "Studierendenservice",
        "answer": "los servicios al estudiante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-48a12dc6-s",
        "tag": "L1 · ES→DE",
        "prompt": "los servicios al estudiante",
        "answer": "Studierendenservice",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-34934ad5-d",
        "tag": "L1 · DE→ES",
        "prompt": "Ehrenamt, freiwilliger Dienst",
        "answer": "el voluntariado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-34934ad5-s",
        "tag": "L1 · ES→DE",
        "prompt": "el voluntariado",
        "answer": "Ehrenamt, freiwilliger Dienst",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b28493e7-d",
        "tag": "L1 · DE→ES",
        "prompt": "Labor",
        "answer": "el laboratorio",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b28493e7-s",
        "tag": "L1 · ES→DE",
        "prompt": "el laboratorio",
        "answer": "Labor",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8ce875b9-d",
        "tag": "L1 · DE→ES",
        "prompt": "Informatik",
        "answer": "la informática",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8ce875b9-s",
        "tag": "L1 · ES→DE",
        "prompt": "la informática",
        "answer": "Informatik",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4d893fdb-d",
        "tag": "L1 · DE→ES",
        "prompt": "Praktikum",
        "answer": "las prácticas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4d893fdb-s",
        "tag": "L1 · ES→DE",
        "prompt": "las prácticas",
        "answer": "Praktikum",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-76a2ded1-d",
        "tag": "L1 · DE→ES",
        "prompt": "Information",
        "answer": "la información",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-76a2ded1-s",
        "tag": "L1 · ES→DE",
        "prompt": "la información",
        "answer": "Information",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7ea46b8c-d",
        "tag": "L1 · DE→ES",
        "prompt": "Ort, Platz, Stelle",
        "answer": "el lugar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7ea46b8c-s",
        "tag": "L1 · ES→DE",
        "prompt": "el lugar",
        "answer": "Ort, Platz, Stelle",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-cf09ee1c-d",
        "tag": "L1 · DE→ES",
        "prompt": "männlich",
        "answer": "masculino/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-cf09ee1c-s",
        "tag": "L1 · ES→DE",
        "prompt": "masculino/-a",
        "answer": "männlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ba9b83da-d",
        "tag": "L1 · DE→ES",
        "prompt": "weiblich",
        "answer": "femenino/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ba9b83da-s",
        "tag": "L1 · ES→DE",
        "prompt": "femenino/-a",
        "answer": "weiblich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-05b3221c-d",
        "tag": "L1 · DE→ES",
        "prompt": "Einzahl",
        "answer": "el singular",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-05b3221c-s",
        "tag": "L1 · ES→DE",
        "prompt": "el singular",
        "answer": "Einzahl",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-21096960-d",
        "tag": "L1 · DE→ES",
        "prompt": "Mehrzahl",
        "answer": "el plural",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-21096960-s",
        "tag": "L1 · ES→DE",
        "prompt": "el plural",
        "answer": "Mehrzahl",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-c4fa1306-d",
        "tag": "L1 · DE→ES",
        "prompt": "der / die / das (bestimmter Artikel)",
        "answer": "el / la",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-c4fa1306-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la",
        "answer": "der / die / das (bestimmter Artikel)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f7f3ae4e-d",
        "tag": "L1 · DE→ES",
        "prompt": "ein / eine (unbestimmter Artikel)",
        "answer": "un / una",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f7f3ae4e-s",
        "tag": "L1 · ES→DE",
        "prompt": "un / una",
        "answer": "ein / eine (unbestimmter Artikel)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2655950d-d",
        "tag": "L1 · DE→ES",
        "prompt": "einige Titel",
        "answer": "unos títulos",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2655950d-s",
        "tag": "L1 · ES→DE",
        "prompt": "unos títulos",
        "answer": "einige Titel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ad15487b-d",
        "tag": "L1 · DE→ES",
        "prompt": "Auge; hier: Achtung",
        "answer": "el ojo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ad15487b-s",
        "tag": "L1 · ES→DE",
        "prompt": "el ojo",
        "answer": "Auge; hier: Achtung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0e012731-d",
        "tag": "L1 · DE→ES",
        "prompt": "Ziffer, Zahl",
        "answer": "la cifra",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0e012731-s",
        "tag": "L1 · ES→DE",
        "prompt": "la cifra",
        "answer": "Ziffer, Zahl",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-57d7568b-d",
        "tag": "L1 · DE→ES",
        "prompt": "sie ist … Jahre alt",
        "answer": "tiene … años",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-57d7568b-s",
        "tag": "L1 · ES→DE",
        "prompt": "tiene … años",
        "answer": "sie ist … Jahre alt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-621c268e-d",
        "tag": "L1 · DE→ES",
        "prompt": "haben",
        "answer": "tener",
        "distractors": [],
        "explanation": "unregelmäßig (g, ie)"
      },
      {
        "id": "es-l1-621c268e-s",
        "tag": "L1 · ES→DE",
        "prompt": "tener",
        "answer": "haben",
        "distractors": [],
        "explanation": "unregelmäßig (g, ie)"
      },
      {
        "id": "es-l1-41f2d188-d",
        "tag": "L1 · DE→ES",
        "prompt": "fast",
        "answer": "casi",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-41f2d188-s",
        "tag": "L1 · ES→DE",
        "prompt": "casi",
        "answer": "fast",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d23541a7-d",
        "tag": "L1 · DE→ES",
        "prompt": "insgesamt",
        "answer": "en total",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d23541a7-s",
        "tag": "L1 · ES→DE",
        "prompt": "en total",
        "answer": "insgesamt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f500bd2e-d",
        "tag": "L1 · DE→ES",
        "prompt": "wir haben",
        "answer": "tenemos",
        "distractors": [],
        "explanation": "Infinitiv: tener"
      },
      {
        "id": "es-l1-f500bd2e-s",
        "tag": "L1 · ES→DE",
        "prompt": "tenemos",
        "answer": "wir haben",
        "distractors": [],
        "explanation": "Infinitiv: tener"
      },
      {
        "id": "es-l1-3a16fbc8-d",
        "tag": "L1 · DE→ES",
        "prompt": "Fakultät",
        "answer": "la facultad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-3a16fbc8-s",
        "tag": "L1 · ES→DE",
        "prompt": "la facultad",
        "answer": "Fakultät",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ff6341b3-d",
        "tag": "L1 · DE→ES",
        "prompt": "Hochschule",
        "answer": "la escuela universitaria",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ff6341b3-s",
        "tag": "L1 · ES→DE",
        "prompt": "la escuela universitaria",
        "answer": "Hochschule",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-238ea0fc-d",
        "tag": "L1 · DE→ES",
        "prompt": "etwa, ungefähr",
        "answer": "aproximadamente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-238ea0fc-s",
        "tag": "L1 · ES→DE",
        "prompt": "aproximadamente",
        "answer": "etwa, ungefähr",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8556e504-d",
        "tag": "L1 · DE→ES",
        "prompt": "Campus, Universitätsgelände",
        "answer": "el campus",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8556e504-s",
        "tag": "L1 · ES→DE",
        "prompt": "el campus",
        "answer": "Campus, Universitätsgelände",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e2b079e5-d",
        "tag": "L1 · DE→ES",
        "prompt": "sie haben",
        "answer": "tienen",
        "distractors": [],
        "explanation": "Infinitiv: tener"
      },
      {
        "id": "es-l1-e2b079e5-s",
        "tag": "L1 · ES→DE",
        "prompt": "tienen",
        "answer": "sie haben",
        "distractors": [],
        "explanation": "Infinitiv: tener"
      },
      {
        "id": "es-l1-c16ed8c6-d",
        "tag": "L1 · DE→ES",
        "prompt": "Möglichkeit",
        "answer": "la posibilidad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-c16ed8c6-s",
        "tag": "L1 · ES→DE",
        "prompt": "la posibilidad",
        "answer": "Möglichkeit",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f4924108-d",
        "tag": "L1 · DE→ES",
        "prompt": "(aus)wählen",
        "answer": "elegir",
        "distractors": [],
        "explanation": "unregelmäßig (i)"
      },
      {
        "id": "es-l1-f4924108-s",
        "tag": "L1 · ES→DE",
        "prompt": "elegir",
        "answer": "(aus)wählen",
        "distractors": [],
        "explanation": "unregelmäßig (i)"
      },
      {
        "id": "es-l1-439907b1-d",
        "tag": "L1 · DE→ES",
        "prompt": "unter",
        "answer": "entre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-439907b1-s",
        "tag": "L1 · ES→DE",
        "prompt": "entre",
        "answer": "unter",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e873a844-d",
        "tag": "L1 · DE→ES",
        "prompt": "Nationalität",
        "answer": "la nacionalidad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e873a844-s",
        "tag": "L1 · ES→DE",
        "prompt": "la nacionalidad",
        "answer": "Nationalität",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-29625c7b-d",
        "tag": "L1 · DE→ES",
        "prompt": "verschieden, unterschiedlich",
        "answer": "diferente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-29625c7b-s",
        "tag": "L1 · ES→DE",
        "prompt": "diferente",
        "answer": "verschieden, unterschiedlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f3f06630-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich",
        "answer": "yo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f3f06630-s",
        "tag": "L1 · ES→DE",
        "prompt": "yo",
        "answer": "ich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5c89dffa-d",
        "tag": "L1 · DE→ES",
        "prompt": "er / sie",
        "answer": "él / ella",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5c89dffa-s",
        "tag": "L1 · ES→DE",
        "prompt": "él / ella",
        "answer": "er / sie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-70736329-d",
        "tag": "L1 · DE→ES",
        "prompt": "Sie (Singular)",
        "answer": "usted",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-70736329-s",
        "tag": "L1 · ES→DE",
        "prompt": "usted",
        "answer": "Sie (Singular)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-42c1f3c4-d",
        "tag": "L1 · DE→ES",
        "prompt": "wir",
        "answer": "nosotros / nosotras",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-42c1f3c4-s",
        "tag": "L1 · ES→DE",
        "prompt": "nosotros / nosotras",
        "answer": "wir",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-427a3931-d",
        "tag": "L1 · DE→ES",
        "prompt": "ihr",
        "answer": "vosotros / vosotras",
        "distractors": [],
        "explanation": "Auch: (a ella) le"
      },
      {
        "id": "es-l1-427a3931-s",
        "tag": "L1 · ES→DE",
        "prompt": "vosotros / vosotras",
        "answer": "ihr",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-eeb513b2-d",
        "tag": "L1 · DE→ES",
        "prompt": "sie (Plural)",
        "answer": "ellos / ellas",
        "distractors": [],
        "explanation": "Auch: ustedes"
      },
      {
        "id": "es-l1-eeb513b2-s",
        "tag": "L1 · ES→DE",
        "prompt": "ellos / ellas",
        "answer": "sie (Plural)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6e474313-d",
        "tag": "L1 · DE→ES",
        "prompt": "Sie (Plural)",
        "answer": "ustedes",
        "distractors": [],
        "explanation": "Auch: ellos / ellas"
      },
      {
        "id": "es-l1-6e474313-s",
        "tag": "L1 · ES→DE",
        "prompt": "ustedes",
        "answer": "Sie (Plural)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-944fafd6-d",
        "tag": "L1 · DE→ES",
        "prompt": "(Sprach-)Tandem; Tandempartner",
        "answer": "el tándem",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-944fafd6-s",
        "tag": "L1 · ES→DE",
        "prompt": "el tándem",
        "answer": "(Sprach-)Tandem; Tandempartner",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-21d96ee6-d",
        "tag": "L1 · DE→ES",
        "prompt": "Telefonnummer",
        "answer": "el número de teléfono",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-21d96ee6-s",
        "tag": "L1 · ES→DE",
        "prompt": "el número de teléfono",
        "answer": "Telefonnummer",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0be78837-d",
        "tag": "L1 · DE→ES",
        "prompt": "Null",
        "answer": "el cero",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0be78837-s",
        "tag": "L1 · ES→DE",
        "prompt": "el cero",
        "answer": "Null",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-26ba3781-d",
        "tag": "L1 · DE→ES",
        "prompt": "Klasse",
        "answer": "la clase",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-26ba3781-s",
        "tag": "L1 · ES→DE",
        "prompt": "la clase",
        "answer": "Klasse",
        "distractors": [],
        "explanation": "Auch: Sorte, Art"
      },
      {
        "id": "es-l1-6c73bb24-d",
        "tag": "L1 · DE→ES",
        "prompt": "nein; kein/e",
        "answer": "no",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6c73bb24-s",
        "tag": "L1 · ES→DE",
        "prompt": "no",
        "answer": "nein; kein/e",
        "distractors": [],
        "explanation": "Auch: nein · nicht"
      },
      {
        "id": "es-l1-e000dce1-d",
        "tag": "L1 · DE→ES",
        "prompt": "Konto",
        "answer": "la cuenta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e000dce1-s",
        "tag": "L1 · ES→DE",
        "prompt": "la cuenta",
        "answer": "Konto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4de70a99-d",
        "tag": "L1 · DE→ES",
        "prompt": "Lateinamerika",
        "answer": "Latinoamérica",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4de70a99-s",
        "tag": "L1 · ES→DE",
        "prompt": "Latinoamérica",
        "answer": "Lateinamerika",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-1183c138-d",
        "tag": "L1 · DE→ES",
        "prompt": "mein/e",
        "answer": "mi",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-1183c138-s",
        "tag": "L1 · ES→DE",
        "prompt": "mi",
        "answer": "mein/e",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6b5c0e0a-d",
        "tag": "L1 · DE→ES",
        "prompt": "Alter; Altertum",
        "answer": "la antigüedad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6b5c0e0a-s",
        "tag": "L1 · ES→DE",
        "prompt": "la antigüedad",
        "answer": "Alter; Altertum",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d7e82923-d",
        "tag": "L1 · DE→ES",
        "prompt": "der erste Tag",
        "answer": "el primer día",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d7e82923-s",
        "tag": "L1 · ES→DE",
        "prompt": "el primer día",
        "answer": "der erste Tag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a370720f-d",
        "tag": "L1 · DE→ES",
        "prompt": "erste/r/s",
        "answer": "primero/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a370720f-s",
        "tag": "L1 · ES→DE",
        "prompt": "primero/-a",
        "answer": "erste/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-661d698f-d",
        "tag": "L1 · DE→ES",
        "prompt": "Kontakt",
        "answer": "el contacto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-661d698f-s",
        "tag": "L1 · ES→DE",
        "prompt": "el contacto",
        "answer": "Kontakt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e15db87b-d",
        "tag": "L1 · DE→ES",
        "prompt": "Sind Sie Herr Ríos?",
        "answer": "¿Es usted el señor Ríos?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e15db87b-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿Es usted el señor Ríos?",
        "answer": "Sind Sie Herr Ríos?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a36c7d04-d",
        "tag": "L1 · DE→ES",
        "prompt": "er / sie ist, Sie sind",
        "answer": "es",
        "distractors": [],
        "explanation": "Infinitiv: ser"
      },
      {
        "id": "es-l1-a36c7d04-s",
        "tag": "L1 · ES→DE",
        "prompt": "es",
        "answer": "er / sie ist, Sie sind",
        "distractors": [],
        "explanation": "Infinitiv: ser; Auch: ist"
      },
      {
        "id": "es-l1-780904ec-d",
        "tag": "L1 · DE→ES",
        "prompt": "sein",
        "answer": "ser",
        "distractors": [],
        "explanation": "Auch: estar"
      },
      {
        "id": "es-l1-780904ec-s",
        "tag": "L1 · ES→DE",
        "prompt": "ser",
        "answer": "sein",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-185a0f5b-d",
        "tag": "L1 · DE→ES",
        "prompt": "Herr / Frau",
        "answer": "el / la señor/a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-185a0f5b-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la señor/a",
        "answer": "Herr / Frau",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-bc16d7f6-d",
        "tag": "L1 · DE→ES",
        "prompt": "ja, doch",
        "answer": "sí",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-bc16d7f6-s",
        "tag": "L1 · ES→DE",
        "prompt": "sí",
        "answer": "ja, doch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e60ca4c4-d",
        "tag": "L1 · DE→ES",
        "prompt": "das bin ich",
        "answer": "soy yo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e60ca4c4-s",
        "tag": "L1 · ES→DE",
        "prompt": "soy yo",
        "answer": "das bin ich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7ebc4714-d",
        "tag": "L1 · DE→ES",
        "prompt": "Austauschschüler/-student",
        "answer": "el / la estudiante de intercambio",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7ebc4714-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la estudiante de intercambio",
        "answer": "Austauschschüler/-student",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8c8decd1-d",
        "tag": "L1 · DE→ES",
        "prompt": "klar, natürlich",
        "answer": "claro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8c8decd1-s",
        "tag": "L1 · ES→DE",
        "prompt": "claro",
        "answer": "klar, natürlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d55ffb32-d",
        "tag": "L1 · DE→ES",
        "prompt": "Wie geht es dir?",
        "answer": "¿Qué tal estás?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d55ffb32-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿Qué tal estás?",
        "answer": "Wie geht es dir?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-38e07626-d",
        "tag": "L1 · DE→ES",
        "prompt": "Woher …?",
        "answer": "¿De dónde …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-38e07626-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿De dónde …?",
        "answer": "Woher …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9af47bfd-d",
        "tag": "L1 · DE→ES",
        "prompt": "du bist",
        "answer": "eres",
        "distractors": [],
        "explanation": "Infinitiv: ser"
      },
      {
        "id": "es-l1-9af47bfd-s",
        "tag": "L1 · ES→DE",
        "prompt": "eres",
        "answer": "du bist",
        "distractors": [],
        "explanation": "Infinitiv: ser"
      },
      {
        "id": "es-l1-ed19e2db-d",
        "tag": "L1 · DE→ES",
        "prompt": "Frankreich",
        "answer": "Francia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ed19e2db-s",
        "tag": "L1 · ES→DE",
        "prompt": "Francia",
        "answer": "Frankreich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0986afad-d",
        "tag": "L1 · DE→ES",
        "prompt": "schau",
        "answer": "mira",
        "distractors": [],
        "explanation": "Infinitiv: mirar"
      },
      {
        "id": "es-l1-0986afad-s",
        "tag": "L1 · ES→DE",
        "prompt": "mira",
        "answer": "schau",
        "distractors": [],
        "explanation": "Infinitiv: mirar"
      },
      {
        "id": "es-l1-e9b0f95a-d",
        "tag": "L1 · DE→ES",
        "prompt": "diese/r/s",
        "answer": "este/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e9b0f95a-s",
        "tag": "L1 · ES→DE",
        "prompt": "este/-a",
        "answer": "diese/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2d07448b-d",
        "tag": "L1 · DE→ES",
        "prompt": "Koordinator/in",
        "answer": "el / la coordinador/a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2d07448b-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la coordinador/a",
        "answer": "Koordinator/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-75a0cb76-d",
        "tag": "L1 · DE→ES",
        "prompt": "sehr erfreut",
        "answer": "encantado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-75a0cb76-s",
        "tag": "L1 · ES→DE",
        "prompt": "encantado/-a",
        "answer": "sehr erfreut",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-76b67142-d",
        "tag": "L1 · DE→ES",
        "prompt": "das sind",
        "answer": "estos/-as son",
        "distractors": [],
        "explanation": "Infinitiv: ser"
      },
      {
        "id": "es-l1-76b67142-s",
        "tag": "L1 · ES→DE",
        "prompt": "estos/-as son",
        "answer": "das sind",
        "distractors": [],
        "explanation": "Infinitiv: ser"
      },
      {
        "id": "es-l1-d5becbed-d",
        "tag": "L1 · DE→ES",
        "prompt": "ihr seid",
        "answer": "sois",
        "distractors": [],
        "explanation": "Infinitiv: ser"
      },
      {
        "id": "es-l1-d5becbed-s",
        "tag": "L1 · ES→DE",
        "prompt": "sois",
        "answer": "ihr seid",
        "distractors": [],
        "explanation": "Infinitiv: ser"
      },
      {
        "id": "es-l1-c3dfff82-d",
        "tag": "L1 · DE→ES",
        "prompt": "auch",
        "answer": "también",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-c3dfff82-s",
        "tag": "L1 · ES→DE",
        "prompt": "también",
        "answer": "auch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b3d13484-d",
        "tag": "L1 · DE→ES",
        "prompt": "nein",
        "answer": "no",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b3d13484-s",
        "tag": "L1 · ES→DE",
        "prompt": "no",
        "answer": "nein",
        "distractors": [],
        "explanation": "Auch: nein; kein/e · nicht"
      },
      {
        "id": "es-l1-93a2545b-d",
        "tag": "L1 · DE→ES",
        "prompt": "wir sind",
        "answer": "somos",
        "distractors": [],
        "explanation": "Infinitiv: ser"
      },
      {
        "id": "es-l1-93a2545b-s",
        "tag": "L1 · ES→DE",
        "prompt": "somos",
        "answer": "wir sind",
        "distractors": [],
        "explanation": "Infinitiv: ser"
      },
      {
        "id": "es-l1-4710f753-d",
        "tag": "L1 · DE→ES",
        "prompt": "aber",
        "answer": "pero",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4710f753-s",
        "tag": "L1 · ES→DE",
        "prompt": "pero",
        "answer": "aber",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-89530d05-d",
        "tag": "L1 · DE→ES",
        "prompt": "heute",
        "answer": "hoy",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-89530d05-s",
        "tag": "L1 · ES→DE",
        "prompt": "hoy",
        "answer": "heute",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-fdefdcc3-d",
        "tag": "L1 · DE→ES",
        "prompt": "Englisch",
        "answer": "el inglés",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-fdefdcc3-s",
        "tag": "L1 · ES→DE",
        "prompt": "el inglés",
        "answer": "Englisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a0a1f630-d",
        "tag": "L1 · DE→ES",
        "prompt": "(Hochschul-)Professor/in",
        "answer": "el / la catedrático/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a0a1f630-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la catedrático/-a",
        "answer": "(Hochschul-)Professor/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-61dd0af3-d",
        "tag": "L1 · DE→ES",
        "prompt": "angenehm",
        "answer": "mucho gusto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-61dd0af3-s",
        "tag": "L1 · ES→DE",
        "prompt": "mucho gusto",
        "answer": "angenehm",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e2f61617-d",
        "tag": "L1 · DE→ES",
        "prompt": "sehr",
        "answer": "muy",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e2f61617-s",
        "tag": "L1 · ES→DE",
        "prompt": "muy",
        "answer": "sehr",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-97a5c0d2-d",
        "tag": "L1 · DE→ES",
        "prompt": "Gastdozent/in",
        "answer": "el / la profesor/a invitado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-97a5c0d2-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la profesor/a invitado/-a",
        "answer": "Gastdozent/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-537c4c66-d",
        "tag": "L1 · DE→ES",
        "prompt": "eingeladen",
        "answer": "invitado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-537c4c66-s",
        "tag": "L1 · ES→DE",
        "prompt": "invitado/-a",
        "answer": "eingeladen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-66ed8884-d",
        "tag": "L1 · DE→ES",
        "prompt": "Semester",
        "answer": "el semestre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-66ed8884-s",
        "tag": "L1 · ES→DE",
        "prompt": "el semestre",
        "answer": "Semester",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-65d1bee9-d",
        "tag": "L1 · DE→ES",
        "prompt": "nicht",
        "answer": "no",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-65d1bee9-s",
        "tag": "L1 · ES→DE",
        "prompt": "no",
        "answer": "nicht",
        "distractors": [],
        "explanation": "Auch: nein; kein/e · nein"
      },
      {
        "id": "es-l1-78bb5a61-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich schon",
        "answer": "yo sí",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-78bb5a61-s",
        "tag": "L1 · ES→DE",
        "prompt": "yo sí",
        "answer": "ich schon",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-311f42d0-d",
        "tag": "L1 · DE→ES",
        "prompt": "Profil",
        "answer": "el perfil",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-311f42d0-s",
        "tag": "L1 · ES→DE",
        "prompt": "el perfil",
        "answer": "Profil",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-539b9316-d",
        "tag": "L1 · DE→ES",
        "prompt": "Informatiker/in",
        "answer": "el / la informático/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-539b9316-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la informático/-a",
        "answer": "Informatiker/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-567c0e96-d",
        "tag": "L1 · DE→ES",
        "prompt": "Bibliothekar/in",
        "answer": "el / la bibliotecario/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-567c0e96-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la bibliotecario/-a",
        "answer": "Bibliothekar/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7683a067-d",
        "tag": "L1 · DE→ES",
        "prompt": "Studentenvertreter/in",
        "answer": "el / la representante de alumnos",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7683a067-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la representante de alumnos",
        "answer": "Studentenvertreter/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4b7b84f9-d",
        "tag": "L1 · DE→ES",
        "prompt": "Stipendiat/in",
        "answer": "el / la becario/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4b7b84f9-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la becario/-a",
        "answer": "Stipendiat/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-04631939-d",
        "tag": "L1 · DE→ES",
        "prompt": "medizinische Hilfskraft, Arzthelferin",
        "answer": "el / la auxiliar médico/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-04631939-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la auxiliar médico/-a",
        "answer": "medizinische Hilfskraft, Arzthelferin",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-57e8acd9-d",
        "tag": "L1 · DE→ES",
        "prompt": "Verwaltungsangestellte/r, Sachbearbeiter/in",
        "answer": "el / la administrativo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-57e8acd9-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la administrativo/-a",
        "answer": "Verwaltungsangestellte/r, Sachbearbeiter/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8833915d-d",
        "tag": "L1 · DE→ES",
        "prompt": "Forscher/in, Wissenschaftler/in",
        "answer": "el / la investigador/a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8833915d-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la investigador/a",
        "answer": "Forscher/in, Wissenschaftler/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-99714cb2-d",
        "tag": "L1 · DE→ES",
        "prompt": "Verwaltungspersonal",
        "answer": "el personal de administración",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-99714cb2-s",
        "tag": "L1 · ES→DE",
        "prompt": "el personal de administración",
        "answer": "Verwaltungspersonal",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d4d6f1c5-d",
        "tag": "L1 · DE→ES",
        "prompt": "(Vor-)Name",
        "answer": "el nombre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d4d6f1c5-s",
        "tag": "L1 · ES→DE",
        "prompt": "el nombre",
        "answer": "(Vor-)Name",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7d2e51b0-d",
        "tag": "L1 · DE→ES",
        "prompt": "Nachname",
        "answer": "el apellido",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7d2e51b0-s",
        "tag": "L1 · ES→DE",
        "prompt": "el apellido",
        "answer": "Nachname",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-bf2d6dd2-d",
        "tag": "L1 · DE→ES",
        "prompt": "Alter",
        "answer": "la edad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-bf2d6dd2-s",
        "tag": "L1 · ES→DE",
        "prompt": "la edad",
        "answer": "Alter",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-788b8429-d",
        "tag": "L1 · DE→ES",
        "prompt": "Adresse",
        "answer": "la dirección",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-788b8429-s",
        "tag": "L1 · ES→DE",
        "prompt": "la dirección",
        "answer": "Adresse",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5e066295-d",
        "tag": "L1 · DE→ES",
        "prompt": "Wohnort",
        "answer": "el lugar de residencia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5e066295-s",
        "tag": "L1 · ES→DE",
        "prompt": "el lugar de residencia",
        "answer": "Wohnort",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4444a11a-d",
        "tag": "L1 · DE→ES",
        "prompt": "E-Mail(-Adresse)",
        "answer": "el correo electrónico",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4444a11a-s",
        "tag": "L1 · ES→DE",
        "prompt": "el correo electrónico",
        "answer": "E-Mail(-Adresse)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6aa6fd01-d",
        "tag": "L1 · DE→ES",
        "prompt": "Geburtsort",
        "answer": "el lugar de nacimiento",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6aa6fd01-s",
        "tag": "L1 · ES→DE",
        "prompt": "el lugar de nacimiento",
        "answer": "Geburtsort",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-fd67026e-d",
        "tag": "L1 · DE→ES",
        "prompt": "mit Nachnamen",
        "answer": "de apellido",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-fd67026e-s",
        "tag": "L1 · ES→DE",
        "prompt": "de apellido",
        "answer": "mit Nachnamen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-47e78f49-d",
        "tag": "L1 · DE→ES",
        "prompt": "Was machst du (beruflich)?",
        "answer": "¿Qué haces?",
        "distractors": [],
        "explanation": "Infinitiv: hacer"
      },
      {
        "id": "es-l1-47e78f49-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿Qué haces?",
        "answer": "Was machst du (beruflich)?",
        "distractors": [],
        "explanation": "Infinitiv: hacer"
      },
      {
        "id": "es-l1-2939a9ef-d",
        "tag": "L1 · DE→ES",
        "prompt": "machen",
        "answer": "hacer",
        "distractors": [],
        "explanation": "unregelmäßig (g)"
      },
      {
        "id": "es-l1-2939a9ef-s",
        "tag": "L1 · ES→DE",
        "prompt": "hacer",
        "answer": "machen",
        "distractors": [],
        "explanation": "unregelmäßig (g)"
      },
      {
        "id": "es-l1-a2af629d-d",
        "tag": "L1 · DE→ES",
        "prompt": "An welcher Fakultät bist du?",
        "answer": "¿De qué facultad eres?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a2af629d-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿De qué facultad eres?",
        "answer": "An welcher Fakultät bist du?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4ebc5071-d",
        "tag": "L1 · DE→ES",
        "prompt": "Wie lautet deine Telefonnummer?",
        "answer": "¿Cuál es tu número de teléfono?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4ebc5071-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿Cuál es tu número de teléfono?",
        "answer": "Wie lautet deine Telefonnummer?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b631ec4c-d",
        "tag": "L1 · DE→ES",
        "prompt": "Handy",
        "answer": "el móvil",
        "distractors": [],
        "explanation": "Auch: el celular"
      },
      {
        "id": "es-l1-b631ec4c-s",
        "tag": "L1 · ES→DE",
        "prompt": "el móvil",
        "answer": "Handy",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e01a645b-d",
        "tag": "L1 · DE→ES",
        "prompt": "Handy",
        "answer": "el celular",
        "distractors": [],
        "explanation": "lateinamerikanisch; Auch: el móvil"
      },
      {
        "id": "es-l1-e01a645b-s",
        "tag": "L1 · ES→DE",
        "prompt": "el celular",
        "answer": "Handy",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l1-d96d3ee7-d",
        "tag": "L1 · DE→ES",
        "prompt": "Matrikelnummer",
        "answer": "el número de matrícula",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d96d3ee7-s",
        "tag": "L1 · ES→DE",
        "prompt": "el número de matrícula",
        "answer": "Matrikelnummer",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-95981c21-d",
        "tag": "L1 · DE→ES",
        "prompt": "At-Zeichen, Klammeraffe",
        "answer": "la arroba (@)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-95981c21-s",
        "tag": "L1 · ES→DE",
        "prompt": "la arroba (@)",
        "answer": "At-Zeichen, Klammeraffe",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e2ce33c4-d",
        "tag": "L1 · DE→ES",
        "prompt": "Punkt",
        "answer": "el punto (.)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e2ce33c4-s",
        "tag": "L1 · ES→DE",
        "prompt": "el punto (.)",
        "answer": "Punkt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2ead3871-d",
        "tag": "L1 · DE→ES",
        "prompt": "Bindestrich",
        "answer": "el guion (-)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2ead3871-s",
        "tag": "L1 · ES→DE",
        "prompt": "el guion (-)",
        "answer": "Bindestrich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-25aa0ffa-d",
        "tag": "L1 · DE→ES",
        "prompt": "Unterstrich",
        "answer": "el guion bajo (_)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-25aa0ffa-s",
        "tag": "L1 · ES→DE",
        "prompt": "el guion bajo (_)",
        "answer": "Unterstrich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e5642013-d",
        "tag": "L1 · DE→ES",
        "prompt": "zusammen",
        "answer": "junto/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e5642013-s",
        "tag": "L1 · ES→DE",
        "prompt": "junto/-a",
        "answer": "zusammen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-fb720519-d",
        "tag": "L1 · DE→ES",
        "prompt": "oder",
        "answer": "o",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-fb720519-s",
        "tag": "L1 · ES→DE",
        "prompt": "o",
        "answer": "oder",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9fe5a65d-d",
        "tag": "L1 · DE→ES",
        "prompt": "getrennt",
        "answer": "separado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9fe5a65d-s",
        "tag": "L1 · ES→DE",
        "prompt": "separado/-a",
        "answer": "getrennt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2a036c31-d",
        "tag": "L1 · DE→ES",
        "prompt": "elektronischer Studentenausweis",
        "answer": "el carnet electrónico",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2a036c31-s",
        "tag": "L1 · ES→DE",
        "prompt": "el carnet electrónico",
        "answer": "elektronischer Studentenausweis",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b837bd4b-d",
        "tag": "L1 · DE→ES",
        "prompt": "Wozu?",
        "answer": "¿Para qué?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b837bd4b-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿Para qué?",
        "answer": "Wozu?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2e5084a5-d",
        "tag": "L1 · DE→ES",
        "prompt": "du benutzt",
        "answer": "usas",
        "distractors": [],
        "explanation": "Infinitiv: usar"
      },
      {
        "id": "es-l1-2e5084a5-s",
        "tag": "L1 · ES→DE",
        "prompt": "usas",
        "answer": "du benutzt",
        "distractors": [],
        "explanation": "Infinitiv: usar"
      },
      {
        "id": "es-l1-a5a41736-d",
        "tag": "L1 · DE→ES",
        "prompt": "Sprache",
        "answer": "el idioma",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a5a41736-s",
        "tag": "L1 · ES→DE",
        "prompt": "el idioma",
        "answer": "Sprache",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-1b94e1a0-d",
        "tag": "L1 · DE→ES",
        "prompt": "Neigung, Vorliebe",
        "answer": "la afición",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-1b94e1a0-s",
        "tag": "L1 · ES→DE",
        "prompt": "la afición",
        "answer": "Neigung, Vorliebe",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-803b5477-d",
        "tag": "L1 · DE→ES",
        "prompt": "Italien",
        "answer": "Italia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-803b5477-s",
        "tag": "L1 · ES→DE",
        "prompt": "Italia",
        "answer": "Italien",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4c8074ca-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich wohne",
        "answer": "vivo",
        "distractors": [],
        "explanation": "Infinitiv: vivir"
      },
      {
        "id": "es-l1-4c8074ca-s",
        "tag": "L1 · ES→DE",
        "prompt": "vivo",
        "answer": "ich wohne",
        "distractors": [],
        "explanation": "Infinitiv: vivir"
      },
      {
        "id": "es-l1-615fb98c-d",
        "tag": "L1 · DE→ES",
        "prompt": "junge/r Mann / Frau",
        "answer": "el / la chico/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-615fb98c-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la chico/-a",
        "answer": "junge/r Mann / Frau",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b08b56fc-d",
        "tag": "L1 · DE→ES",
        "prompt": "Russland",
        "answer": "Rusia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b08b56fc-s",
        "tag": "L1 · ES→DE",
        "prompt": "Rusia",
        "answer": "Russland",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-cabcbf51-d",
        "tag": "L1 · DE→ES",
        "prompt": "Brasilien",
        "answer": "Brasil",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-cabcbf51-s",
        "tag": "L1 · ES→DE",
        "prompt": "Brasil",
        "answer": "Brasilien",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-27334795-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich spreche",
        "answer": "hablo",
        "distractors": [],
        "explanation": "Infinitiv: hablar"
      },
      {
        "id": "es-l1-27334795-s",
        "tag": "L1 · ES→DE",
        "prompt": "hablo",
        "answer": "ich spreche",
        "distractors": [],
        "explanation": "Infinitiv: hablar"
      },
      {
        "id": "es-l1-b9749545-d",
        "tag": "L1 · DE→ES",
        "prompt": "Französisch",
        "answer": "el francés",
        "distractors": [],
        "explanation": "Auch: francés/-esa"
      },
      {
        "id": "es-l1-b9749545-s",
        "tag": "L1 · ES→DE",
        "prompt": "el francés",
        "answer": "Französisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f28a4bfc-d",
        "tag": "L1 · DE→ES",
        "prompt": "jetzt",
        "answer": "ahora",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f28a4bfc-s",
        "tag": "L1 · ES→DE",
        "prompt": "ahora",
        "answer": "jetzt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7625035f-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich lerne",
        "answer": "aprendo",
        "distractors": [],
        "explanation": "Infinitiv: aprender"
      },
      {
        "id": "es-l1-7625035f-s",
        "tag": "L1 · ES→DE",
        "prompt": "aprendo",
        "answer": "ich lerne",
        "distractors": [],
        "explanation": "Infinitiv: aprender"
      },
      {
        "id": "es-l1-c70c412c-d",
        "tag": "L1 · DE→ES",
        "prompt": "studieren; lernen",
        "answer": "estudiar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-c70c412c-s",
        "tag": "L1 · ES→DE",
        "prompt": "estudiar",
        "answer": "studieren; lernen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-68786004-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich suche",
        "answer": "busco",
        "distractors": [],
        "explanation": "Infinitiv: buscar"
      },
      {
        "id": "es-l1-68786004-s",
        "tag": "L1 · ES→DE",
        "prompt": "busco",
        "answer": "ich suche",
        "distractors": [],
        "explanation": "Infinitiv: buscar"
      },
      {
        "id": "es-l1-1c7181f4-d",
        "tag": "L1 · DE→ES",
        "prompt": "üben, praktizieren",
        "answer": "practicar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-1c7181f4-s",
        "tag": "L1 · ES→DE",
        "prompt": "practicar",
        "answer": "üben, praktizieren",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f4663804-d",
        "tag": "L1 · DE→ES",
        "prompt": "du kochst",
        "answer": "cocinas",
        "distractors": [],
        "explanation": "Infinitiv: cocinar"
      },
      {
        "id": "es-l1-f4663804-s",
        "tag": "L1 · ES→DE",
        "prompt": "cocinas",
        "answer": "du kochst",
        "distractors": [],
        "explanation": "Infinitiv: cocinar"
      },
      {
        "id": "es-l1-aab1b548-d",
        "tag": "L1 · DE→ES",
        "prompt": "Wie wäre es, wenn …?",
        "answer": "¿Qué tal si …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-aab1b548-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿Qué tal si …?",
        "answer": "Wie wäre es, wenn …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e10d6a34-d",
        "tag": "L1 · DE→ES",
        "prompt": "zusammen, gemeinsam",
        "answer": "juntos/-as",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e10d6a34-s",
        "tag": "L1 · ES→DE",
        "prompt": "juntos/-as",
        "answer": "zusammen, gemeinsam",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f4758de0-d",
        "tag": "L1 · DE→ES",
        "prompt": "wir sprechen",
        "answer": "hablamos",
        "distractors": [],
        "explanation": "Infinitiv: hablar"
      },
      {
        "id": "es-l1-f4758de0-s",
        "tag": "L1 · ES→DE",
        "prompt": "hablamos",
        "answer": "wir sprechen",
        "distractors": [],
        "explanation": "Infinitiv: hablar"
      },
      {
        "id": "es-l1-93bf8143-d",
        "tag": "L1 · DE→ES",
        "prompt": "Familie",
        "answer": "la familia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-93bf8143-s",
        "tag": "L1 · ES→DE",
        "prompt": "la familia",
        "answer": "Familie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f868e289-d",
        "tag": "L1 · DE→ES",
        "prompt": "Türkei",
        "answer": "Turquía",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f868e289-s",
        "tag": "L1 · ES→DE",
        "prompt": "Turquía",
        "answer": "Türkei",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-cef735f2-d",
        "tag": "L1 · DE→ES",
        "prompt": "wir wohnen",
        "answer": "vivimos",
        "distractors": [],
        "explanation": "Infinitiv: vivir"
      },
      {
        "id": "es-l1-cef735f2-s",
        "tag": "L1 · ES→DE",
        "prompt": "vivimos",
        "answer": "wir wohnen",
        "distractors": [],
        "explanation": "Infinitiv: vivir"
      },
      {
        "id": "es-l1-9f38085e-d",
        "tag": "L1 · DE→ES",
        "prompt": "als",
        "answer": "como",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9f38085e-s",
        "tag": "L1 · ES→DE",
        "prompt": "como",
        "answer": "als",
        "distractors": [],
        "explanation": "Auch: wie"
      },
      {
        "id": "es-l1-978ce833-d",
        "tag": "L1 · DE→ES",
        "prompt": "Wahl(pflicht)fach",
        "answer": "la asignatura optativa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-978ce833-s",
        "tag": "L1 · ES→DE",
        "prompt": "la asignatura optativa",
        "answer": "Wahl(pflicht)fach",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4781e2de-d",
        "tag": "L1 · DE→ES",
        "prompt": "fakultativ, wahlfrei",
        "answer": "optativo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4781e2de-s",
        "tag": "L1 · ES→DE",
        "prompt": "optativo/-a",
        "answer": "fakultativ, wahlfrei",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6d750a28-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich verstehe",
        "answer": "comprendo",
        "distractors": [],
        "explanation": "Infinitiv: comprender"
      },
      {
        "id": "es-l1-6d750a28-s",
        "tag": "L1 · ES→DE",
        "prompt": "comprendo",
        "answer": "ich verstehe",
        "distractors": [],
        "explanation": "Infinitiv: comprender"
      },
      {
        "id": "es-l1-d46b4d22-d",
        "tag": "L1 · DE→ES",
        "prompt": "schwierig",
        "answer": "difícil",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d46b4d22-s",
        "tag": "L1 · ES→DE",
        "prompt": "difícil",
        "answer": "schwierig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9af559ea-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich lese",
        "answer": "leo",
        "distractors": [],
        "explanation": "Infinitiv: leer"
      },
      {
        "id": "es-l1-9af559ea-s",
        "tag": "L1 · ES→DE",
        "prompt": "leo",
        "answer": "ich lese",
        "distractors": [],
        "explanation": "Infinitiv: leer"
      },
      {
        "id": "es-l1-100b14cb-d",
        "tag": "L1 · DE→ES",
        "prompt": "viel",
        "answer": "mucho",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-100b14cb-s",
        "tag": "L1 · ES→DE",
        "prompt": "mucho",
        "answer": "viel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-98d645a9-d",
        "tag": "L1 · DE→ES",
        "prompt": "Leidenschaft",
        "answer": "la pasión",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-98d645a9-s",
        "tag": "L1 · ES→DE",
        "prompt": "la pasión",
        "answer": "Leidenschaft",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b338a4a8-d",
        "tag": "L1 · DE→ES",
        "prompt": "du tanzt",
        "answer": "bailas",
        "distractors": [],
        "explanation": "Infinitiv: bailar"
      },
      {
        "id": "es-l1-b338a4a8-s",
        "tag": "L1 · ES→DE",
        "prompt": "bailas",
        "answer": "du tanzt",
        "distractors": [],
        "explanation": "Infinitiv: bailar"
      },
      {
        "id": "es-l1-e0aaa702-d",
        "tag": "L1 · DE→ES",
        "prompt": "Salsa (Musikform und Tanz)",
        "answer": "la salsa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-e0aaa702-s",
        "tag": "L1 · ES→DE",
        "prompt": "la salsa",
        "answer": "Salsa (Musikform und Tanz)",
        "distractors": [],
        "explanation": "Auch: Soße"
      },
      {
        "id": "es-l1-57ad00ac-d",
        "tag": "L1 · DE→ES",
        "prompt": "Tango (Musikform und Tanz)",
        "answer": "el tango",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-57ad00ac-s",
        "tag": "L1 · ES→DE",
        "prompt": "el tango",
        "answer": "Tango (Musikform und Tanz)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-cb709112-d",
        "tag": "L1 · DE→ES",
        "prompt": "du spielst",
        "answer": "tocas",
        "distractors": [],
        "explanation": "Infinitiv: tocar"
      },
      {
        "id": "es-l1-cb709112-s",
        "tag": "L1 · ES→DE",
        "prompt": "tocas",
        "answer": "du spielst",
        "distractors": [],
        "explanation": "Infinitiv: tocar"
      },
      {
        "id": "es-l1-27c15bce-d",
        "tag": "L1 · DE→ES",
        "prompt": "dann",
        "answer": "entonces",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-27c15bce-s",
        "tag": "L1 · ES→DE",
        "prompt": "entonces",
        "answer": "dann",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d40abd5f-d",
        "tag": "L1 · DE→ES",
        "prompt": "etwas gemeinsam haben",
        "answer": "tener algo en común",
        "distractors": [],
        "explanation": "unregelmäßig (g, ie)"
      },
      {
        "id": "es-l1-d40abd5f-s",
        "tag": "L1 · ES→DE",
        "prompt": "tener algo en común",
        "answer": "etwas gemeinsam haben",
        "distractors": [],
        "explanation": "unregelmäßig (g, ie)"
      },
      {
        "id": "es-l1-6ee4f48a-d",
        "tag": "L1 · DE→ES",
        "prompt": "etwas",
        "answer": "algo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6ee4f48a-s",
        "tag": "L1 · ES→DE",
        "prompt": "algo",
        "answer": "etwas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-c90b84a4-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich studiere",
        "answer": "estudio",
        "distractors": [],
        "explanation": "Infinitiv: estudiar"
      },
      {
        "id": "es-l1-c90b84a4-s",
        "tag": "L1 · ES→DE",
        "prompt": "estudio",
        "answer": "ich studiere",
        "distractors": [],
        "explanation": "Infinitiv: estudiar"
      },
      {
        "id": "es-l1-3b90fe56-d",
        "tag": "L1 · DE→ES",
        "prompt": "Niveau, Stufe",
        "answer": "el nivel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-3b90fe56-s",
        "tag": "L1 · ES→DE",
        "prompt": "el nivel",
        "answer": "Niveau, Stufe",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-054c6882-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich muss, ich brauche",
        "answer": "necesito",
        "distractors": [],
        "explanation": "Infinitiv: necesitar"
      },
      {
        "id": "es-l1-054c6882-s",
        "tag": "L1 · ES→DE",
        "prompt": "necesito",
        "answer": "ich muss, ich brauche",
        "distractors": [],
        "explanation": "Infinitiv: necesitar"
      },
      {
        "id": "es-l1-6965f182-d",
        "tag": "L1 · DE→ES",
        "prompt": "weil",
        "answer": "porque",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6965f182-s",
        "tag": "L1 · ES→DE",
        "prompt": "porque",
        "answer": "weil",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2b6f06be-d",
        "tag": "L1 · DE→ES",
        "prompt": "wichtig",
        "answer": "importante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2b6f06be-s",
        "tag": "L1 · ES→DE",
        "prompt": "importante",
        "answer": "wichtig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d651d276-d",
        "tag": "L1 · DE→ES",
        "prompt": "Deutsch",
        "answer": "el alemán",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d651d276-s",
        "tag": "L1 · ES→DE",
        "prompt": "el alemán",
        "answer": "Deutsch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a20ecfce-d",
        "tag": "L1 · DE→ES",
        "prompt": "Russisch",
        "answer": "el ruso",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a20ecfce-s",
        "tag": "L1 · ES→DE",
        "prompt": "el ruso",
        "answer": "Russisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-634d54a5-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich schreibe",
        "answer": "escribo",
        "distractors": [],
        "explanation": "Infinitiv: escribir"
      },
      {
        "id": "es-l1-634d54a5-s",
        "tag": "L1 · ES→DE",
        "prompt": "escribo",
        "answer": "ich schreibe",
        "distractors": [],
        "explanation": "Infinitiv: escribir"
      },
      {
        "id": "es-l1-f329ed44-d",
        "tag": "L1 · DE→ES",
        "prompt": "Artikel",
        "answer": "el artículo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f329ed44-s",
        "tag": "L1 · ES→DE",
        "prompt": "el artículo",
        "answer": "Artikel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-29a394a2-d",
        "tag": "L1 · DE→ES",
        "prompt": "Blog",
        "answer": "el blog",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-29a394a2-s",
        "tag": "L1 · ES→DE",
        "prompt": "el blog",
        "answer": "Blog",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-3b042504-d",
        "tag": "L1 · DE→ES",
        "prompt": "Spanischsprachige/r",
        "answer": "el / la hablante de español",
        "distractors": [],
        "explanation": "Auch: el / la hispanohablante"
      },
      {
        "id": "es-l1-3b042504-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la hablante de español",
        "answer": "Spanischsprachige/r",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-1101df11-d",
        "tag": "L1 · DE→ES",
        "prompt": "trinken, essen",
        "answer": "tomar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-1101df11-s",
        "tag": "L1 · ES→DE",
        "prompt": "tomar",
        "answer": "trinken, essen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-094bc858-d",
        "tag": "L1 · DE→ES",
        "prompt": "Griechenland",
        "answer": "Grecia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-094bc858-s",
        "tag": "L1 · ES→DE",
        "prompt": "Grecia",
        "answer": "Griechenland",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ed3173f0-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich arbeite",
        "answer": "trabajo",
        "distractors": [],
        "explanation": "Infinitiv: trabajar"
      },
      {
        "id": "es-l1-ed3173f0-s",
        "tag": "L1 · ES→DE",
        "prompt": "trabajo",
        "answer": "ich arbeite",
        "distractors": [],
        "explanation": "Infinitiv: trabajar"
      },
      {
        "id": "es-l1-1b87fbd8-d",
        "tag": "L1 · DE→ES",
        "prompt": "Unternehmen",
        "answer": "la empresa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-1b87fbd8-s",
        "tag": "L1 · ES→DE",
        "prompt": "la empresa",
        "answer": "Unternehmen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-09511b33-d",
        "tag": "L1 · DE→ES",
        "prompt": "Tourismus",
        "answer": "el turismo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-09511b33-s",
        "tag": "L1 · ES→DE",
        "prompt": "el turismo",
        "answer": "Tourismus",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-18b16e5d-d",
        "tag": "L1 · DE→ES",
        "prompt": "teilnehmen (an)",
        "answer": "participo (en)",
        "distractors": [],
        "explanation": "Infinitiv: participar"
      },
      {
        "id": "es-l1-18b16e5d-s",
        "tag": "L1 · ES→DE",
        "prompt": "participo (en)",
        "answer": "teilnehmen (an)",
        "distractors": [],
        "explanation": "Infinitiv: participar"
      },
      {
        "id": "es-l1-643a818d-d",
        "tag": "L1 · DE→ES",
        "prompt": "Kongress",
        "answer": "el congreso",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-643a818d-s",
        "tag": "L1 · ES→DE",
        "prompt": "el congreso",
        "answer": "Kongress",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-70b338bf-d",
        "tag": "L1 · DE→ES",
        "prompt": "international",
        "answer": "internacional",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-70b338bf-s",
        "tag": "L1 · ES→DE",
        "prompt": "internacional",
        "answer": "international",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-1ee15af9-d",
        "tag": "L1 · DE→ES",
        "prompt": "meine",
        "answer": "mis",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-1ee15af9-s",
        "tag": "L1 · ES→DE",
        "prompt": "mis",
        "answer": "meine",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-795e2d06-d",
        "tag": "L1 · DE→ES",
        "prompt": "Kollege/-in",
        "answer": "el / la colega",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-795e2d06-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la colega",
        "answer": "Kollege/-in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6c2d9dec-d",
        "tag": "L1 · DE→ES",
        "prompt": "Spanien",
        "answer": "España",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6c2d9dec-s",
        "tag": "L1 · ES→DE",
        "prompt": "España",
        "answer": "Spanien",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d126675e-d",
        "tag": "L1 · DE→ES",
        "prompt": "Konversationsunterricht",
        "answer": "la clase de conversación",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d126675e-s",
        "tag": "L1 · ES→DE",
        "prompt": "la clase de conversación",
        "answer": "Konversationsunterricht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-78f9a9f0-d",
        "tag": "L1 · DE→ES",
        "prompt": "reisen",
        "answer": "viajar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-78f9a9f0-s",
        "tag": "L1 · ES→DE",
        "prompt": "viajar",
        "answer": "reisen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-31c6294b-d",
        "tag": "L1 · DE→ES",
        "prompt": "Theater",
        "answer": "el teatro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-31c6294b-s",
        "tag": "L1 · ES→DE",
        "prompt": "el teatro",
        "answer": "Theater",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5f137a78-d",
        "tag": "L1 · DE→ES",
        "prompt": "Land",
        "answer": "el país",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5f137a78-s",
        "tag": "L1 · ES→DE",
        "prompt": "el país",
        "answer": "Land",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f7e6ed96-d",
        "tag": "L1 · DE→ES",
        "prompt": "Wo?",
        "answer": "¿Dónde?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f7e6ed96-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿Dónde?",
        "answer": "Wo?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9bf797aa-d",
        "tag": "L1 · DE→ES",
        "prompt": "Wer?",
        "answer": "¿Quién?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9bf797aa-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿Quién?",
        "answer": "Wer?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6a58758c-d",
        "tag": "L1 · DE→ES",
        "prompt": "aus Liebe",
        "answer": "por amor",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6a58758c-s",
        "tag": "L1 · ES→DE",
        "prompt": "por amor",
        "answer": "aus Liebe",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-c8b758cb-d",
        "tag": "L1 · DE→ES",
        "prompt": "pro; durch; für, wegen",
        "answer": "por",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-c8b758cb-s",
        "tag": "L1 · ES→DE",
        "prompt": "por",
        "answer": "pro; durch; für, wegen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d9da3b39-d",
        "tag": "L1 · DE→ES",
        "prompt": "Liebe",
        "answer": "el amor",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d9da3b39-s",
        "tag": "L1 · ES→DE",
        "prompt": "el amor",
        "answer": "Liebe",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-bc8fb352-d",
        "tag": "L1 · DE→ES",
        "prompt": "Spanischsprachige/r",
        "answer": "el / la hispanohablante",
        "distractors": [],
        "explanation": "Auch: el / la hablante de español"
      },
      {
        "id": "es-l1-bc8fb352-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la hispanohablante",
        "answer": "Spanischsprachige/r",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7080e7b9-d",
        "tag": "L1 · DE→ES",
        "prompt": "(zu)hören",
        "answer": "escuchar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7080e7b9-s",
        "tag": "L1 · ES→DE",
        "prompt": "escuchar",
        "answer": "(zu)hören",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2512b095-d",
        "tag": "L1 · DE→ES",
        "prompt": "spanisch",
        "answer": "español/a",
        "distractors": [],
        "explanation": "Auch: el español"
      },
      {
        "id": "es-l1-2512b095-s",
        "tag": "L1 · ES→DE",
        "prompt": "español/a",
        "answer": "spanisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-21fb9ce5-d",
        "tag": "L1 · DE→ES",
        "prompt": "Kaffee",
        "answer": "el café",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-21fb9ce5-s",
        "tag": "L1 · ES→DE",
        "prompt": "el café",
        "answer": "Kaffee",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-dd9a761e-d",
        "tag": "L1 · DE→ES",
        "prompt": "Gitarre",
        "answer": "la guitarra",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-dd9a761e-s",
        "tag": "L1 · ES→DE",
        "prompt": "la guitarra",
        "answer": "Gitarre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-edbd66d2-d",
        "tag": "L1 · DE→ES",
        "prompt": "Buch",
        "answer": "el libro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-edbd66d2-s",
        "tag": "L1 · ES→DE",
        "prompt": "el libro",
        "answer": "Buch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-93f78100-d",
        "tag": "L1 · DE→ES",
        "prompt": "Chili con carne (scharfer Hackfleischeintopf)",
        "answer": "el chile con carne",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-93f78100-s",
        "tag": "L1 · ES→DE",
        "prompt": "el chile con carne",
        "answer": "Chili con carne (scharfer Hackfleischeintopf)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ddd47519-d",
        "tag": "L1 · DE→ES",
        "prompt": "ich nicht",
        "answer": "yo no",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ddd47519-s",
        "tag": "L1 · ES→DE",
        "prompt": "yo no",
        "answer": "ich nicht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ec254783-d",
        "tag": "L1 · DE→ES",
        "prompt": "auch nicht",
        "answer": "tampoco",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ec254783-s",
        "tag": "L1 · ES→DE",
        "prompt": "tampoco",
        "answer": "auch nicht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b6b6e378-d",
        "tag": "L1 · DE→ES",
        "prompt": "dir",
        "answer": "te",
        "distractors": [],
        "explanation": "Auch: (a ti) te"
      },
      {
        "id": "es-l1-b6b6e378-s",
        "tag": "L1 · ES→DE",
        "prompt": "te",
        "answer": "dir",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-08de1f36-d",
        "tag": "L1 · DE→ES",
        "prompt": "vorstellen",
        "answer": "presentar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-08de1f36-s",
        "tag": "L1 · ES→DE",
        "prompt": "presentar",
        "answer": "vorstellen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ef1833a1-d",
        "tag": "L1 · DE→ES",
        "prompt": "erzählen",
        "answer": "contar",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l1-ef1833a1-s",
        "tag": "L1 · ES→DE",
        "prompt": "contar",
        "answer": "erzählen",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l1-16e9434e-d",
        "tag": "L1 · DE→ES",
        "prompt": "Musikgruppe, Band",
        "answer": "el grupo de música",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-16e9434e-s",
        "tag": "L1 · ES→DE",
        "prompt": "el grupo de música",
        "answer": "Musikgruppe, Band",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-15e36569-d",
        "tag": "L1 · DE→ES",
        "prompt": "allein",
        "answer": "solo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-15e36569-s",
        "tag": "L1 · ES→DE",
        "prompt": "solo/-a",
        "answer": "allein",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8c45106d-d",
        "tag": "L1 · DE→ES",
        "prompt": "Freizeit",
        "answer": "el tiempo libre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8c45106d-s",
        "tag": "L1 · ES→DE",
        "prompt": "el tiempo libre",
        "answer": "Freizeit",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-555695d4-d",
        "tag": "L1 · DE→ES",
        "prompt": "Café",
        "answer": "la cafetería",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-555695d4-s",
        "tag": "L1 · ES→DE",
        "prompt": "la cafetería",
        "answer": "Café",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-bb78a7a6-d",
        "tag": "L1 · DE→ES",
        "prompt": "Klavier",
        "answer": "el piano",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-bb78a7a6-s",
        "tag": "L1 · ES→DE",
        "prompt": "el piano",
        "answer": "Klavier",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2544b889-d",
        "tag": "L1 · DE→ES",
        "prompt": "Soziologie",
        "answer": "la sociología",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-2544b889-s",
        "tag": "L1 · ES→DE",
        "prompt": "la sociología",
        "answer": "Soziologie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ab8aa1fa-d",
        "tag": "L1 · DE→ES",
        "prompt": "autonom",
        "answer": "autónomo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ab8aa1fa-s",
        "tag": "L1 · ES→DE",
        "prompt": "autónomo/-a",
        "answer": "autonom",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-56857df9-d",
        "tag": "L1 · DE→ES",
        "prompt": "Präsentation, Vorstellung",
        "answer": "la presentación",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-56857df9-s",
        "tag": "L1 · ES→DE",
        "prompt": "la presentación",
        "answer": "Präsentation, Vorstellung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-12de6a8c-d",
        "tag": "L1 · DE→ES",
        "prompt": "Wer bin ich?",
        "answer": "¿Quién soy?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-12de6a8c-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿Quién soy?",
        "answer": "Wer bin ich?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-284ff9d0-d",
        "tag": "L1 · DE→ES",
        "prompt": "Strategie",
        "answer": "la estrategia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-284ff9d0-s",
        "tag": "L1 · ES→DE",
        "prompt": "la estrategia",
        "answer": "Strategie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-de2bc323-d",
        "tag": "L1 · DE→ES",
        "prompt": "zweite/r/s",
        "answer": "segundo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-de2bc323-s",
        "tag": "L1 · ES→DE",
        "prompt": "segundo/-a",
        "answer": "zweite/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9213faaf-d",
        "tag": "L1 · DE→ES",
        "prompt": "beste/r/s",
        "answer": "mejor",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9213faaf-s",
        "tag": "L1 · ES→DE",
        "prompt": "mejor",
        "answer": "beste/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-209e0398-d",
        "tag": "L1 · DE→ES",
        "prompt": "Lebensqualität",
        "answer": "la calidad de vida",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-209e0398-s",
        "tag": "L1 · ES→DE",
        "prompt": "la calidad de vida",
        "answer": "Lebensqualität",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-3898e330-d",
        "tag": "L1 · DE→ES",
        "prompt": "Südamerika",
        "answer": "Sudamérica",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-3898e330-s",
        "tag": "L1 · ES→DE",
        "prompt": "Sudamérica",
        "answer": "Südamerika",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f100e07d-d",
        "tag": "L1 · DE→ES",
        "prompt": "Zielort",
        "answer": "el destino",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f100e07d-s",
        "tag": "L1 · ES→DE",
        "prompt": "el destino",
        "answer": "Zielort",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-95f87aa9-d",
        "tag": "L1 · DE→ES",
        "prompt": "Lieblings-",
        "answer": "favorito/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-95f87aa9-s",
        "tag": "L1 · ES→DE",
        "prompt": "favorito/-a",
        "answer": "Lieblings-",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-c49d9579-d",
        "tag": "L1 · DE→ES",
        "prompt": "ungefähr",
        "answer": "unos/-as",
        "distractors": [],
        "explanation": "vor Zahlenangaben"
      },
      {
        "id": "es-l1-c49d9579-s",
        "tag": "L1 · ES→DE",
        "prompt": "unos/-as",
        "answer": "ungefähr",
        "distractors": [],
        "explanation": "vor Zahlenangaben"
      },
      {
        "id": "es-l1-8f01b031-d",
        "tag": "L1 · DE→ES",
        "prompt": "Million",
        "answer": "el millón",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8f01b031-s",
        "tag": "L1 · ES→DE",
        "prompt": "el millón",
        "answer": "Million",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-35f8a57d-d",
        "tag": "L1 · DE→ES",
        "prompt": "Tourist/in",
        "answer": "el / la turista",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-35f8a57d-s",
        "tag": "L1 · ES→DE",
        "prompt": "el / la turista",
        "answer": "Tourist/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9e7b2161-d",
        "tag": "L1 · DE→ES",
        "prompt": "pro Jahr, jährlich",
        "answer": "al año",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9e7b2161-s",
        "tag": "L1 · ES→DE",
        "prompt": "al año",
        "answer": "pro Jahr, jährlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-cf8de7ef-d",
        "tag": "L1 · DE→ES",
        "prompt": "kulturelle Identität",
        "answer": "la identidad cultural",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-cf8de7ef-s",
        "tag": "L1 · ES→DE",
        "prompt": "la identidad cultural",
        "answer": "kulturelle Identität",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-45fbd90d-d",
        "tag": "L1 · DE→ES",
        "prompt": "kulturell",
        "answer": "cultural",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-45fbd90d-s",
        "tag": "L1 · ES→DE",
        "prompt": "cultural",
        "answer": "kulturell",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ce396d26-d",
        "tag": "L1 · DE→ES",
        "prompt": "Varietät des Spanischen aus Buenos Aires",
        "answer": "el lunfardo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-ce396d26-s",
        "tag": "L1 · ES→DE",
        "prompt": "el lunfardo",
        "answer": "Varietät des Spanischen aus Buenos Aires",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5351dd11-d",
        "tag": "L1 · DE→ES",
        "prompt": "U-Bahn, Metro",
        "answer": "el subte(rráneo)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5351dd11-s",
        "tag": "L1 · ES→DE",
        "prompt": "el subte(rráneo)",
        "answer": "U-Bahn, Metro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9c750b59-d",
        "tag": "L1 · DE→ES",
        "prompt": "U-Bahn",
        "answer": "el metro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-9c750b59-s",
        "tag": "L1 · ES→DE",
        "prompt": "el metro",
        "answer": "U-Bahn",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d85ea580-d",
        "tag": "L1 · DE→ES",
        "prompt": "die älteste U-Bahn",
        "answer": "el metro más antiguo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d85ea580-s",
        "tag": "L1 · ES→DE",
        "prompt": "el metro más antiguo",
        "answer": "die älteste U-Bahn",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0e835e1d-d",
        "tag": "L1 · DE→ES",
        "prompt": "alt",
        "answer": "antiguo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0e835e1d-s",
        "tag": "L1 · ES→DE",
        "prompt": "antiguo/-a",
        "answer": "alt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-c0084dd3-d",
        "tag": "L1 · DE→ES",
        "prompt": "gegründet",
        "answer": "fundado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-c0084dd3-s",
        "tag": "L1 · ES→DE",
        "prompt": "fundado/-a",
        "answer": "gegründet",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-bc2d8579-d",
        "tag": "L1 · DE→ES",
        "prompt": "Krankenhaus",
        "answer": "el hospital",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-bc2d8579-s",
        "tag": "L1 · ES→DE",
        "prompt": "el hospital",
        "answer": "Krankenhaus",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b782b43c-d",
        "tag": "L1 · DE→ES",
        "prompt": "Museum",
        "answer": "el museo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-b782b43c-s",
        "tag": "L1 · ES→DE",
        "prompt": "el museo",
        "answer": "Museum",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4a19cff3-d",
        "tag": "L1 · DE→ES",
        "prompt": "März",
        "answer": "(el) marzo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4a19cff3-s",
        "tag": "L1 · ES→DE",
        "prompt": "(el) marzo",
        "answer": "März",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4338a359-d",
        "tag": "L1 · DE→ES",
        "prompt": "Juli",
        "answer": "(el) julio",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4338a359-s",
        "tag": "L1 · ES→DE",
        "prompt": "(el) julio",
        "answer": "Juli",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f3b1f02b-d",
        "tag": "L1 · DE→ES",
        "prompt": "August",
        "answer": "(el) agosto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f3b1f02b-s",
        "tag": "L1 · ES→DE",
        "prompt": "(el) agosto",
        "answer": "August",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-290d70f3-d",
        "tag": "L1 · DE→ES",
        "prompt": "Dezember",
        "answer": "(el) diciembre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-290d70f3-s",
        "tag": "L1 · ES→DE",
        "prompt": "(el) diciembre",
        "answer": "Dezember",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-90b0bdac-d",
        "tag": "L1 · DE→ES",
        "prompt": "Argentinien",
        "answer": "Argentina",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-90b0bdac-s",
        "tag": "L1 · ES→DE",
        "prompt": "Argentina",
        "answer": "Argentinien",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0e7a4679-d",
        "tag": "L1 · DE→ES",
        "prompt": "lernst du? (argentinische Verbform)",
        "answer": "¿estudiás?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0e7a4679-s",
        "tag": "L1 · ES→DE",
        "prompt": "¿estudiás?",
        "answer": "lernst du? (argentinische Verbform)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-52cbeccc-d",
        "tag": "L1 · DE→ES",
        "prompt": "lateinamerikanisch",
        "answer": "latinoamericano/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-52cbeccc-s",
        "tag": "L1 · ES→DE",
        "prompt": "latinoamericano/-a",
        "answer": "lateinamerikanisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0be43eff-d",
        "tag": "L1 · DE→ES",
        "prompt": "Fremdsprache",
        "answer": "la lengua extranjera",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-0be43eff-s",
        "tag": "L1 · ES→DE",
        "prompt": "la lengua extranjera",
        "answer": "Fremdsprache",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-1c5c412d-d",
        "tag": "L1 · DE→ES",
        "prompt": "ausländisch",
        "answer": "extranjero/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-1c5c412d-s",
        "tag": "L1 · ES→DE",
        "prompt": "extranjero/-a",
        "answer": "ausländisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4d46eeb1-d",
        "tag": "L1 · DE→ES",
        "prompt": "(an)kommen",
        "answer": "llegar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-4d46eeb1-s",
        "tag": "L1 · ES→DE",
        "prompt": "llegar",
        "answer": "(an)kommen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-09c1b5a0-d",
        "tag": "L1 · DE→ES",
        "prompt": "besonders, überwiegend",
        "answer": "especialmente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-09c1b5a0-s",
        "tag": "L1 · ES→DE",
        "prompt": "especialmente",
        "answer": "besonders, überwiegend",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5fba4208-d",
        "tag": "L1 · DE→ES",
        "prompt": "Monat",
        "answer": "el mes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-5fba4208-s",
        "tag": "L1 · ES→DE",
        "prompt": "el mes",
        "answer": "Monat",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-05b4d7af-d",
        "tag": "L1 · DE→ES",
        "prompt": "Februar",
        "answer": "(el) febrero",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-05b4d7af-s",
        "tag": "L1 · ES→DE",
        "prompt": "(el) febrero",
        "answer": "Februar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-480093a1-d",
        "tag": "L1 · DE→ES",
        "prompt": "vervollkommnen",
        "answer": "perfeccionar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-480093a1-s",
        "tag": "L1 · ES→DE",
        "prompt": "perfeccionar",
        "answer": "vervollkommnen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-28334fa5-d",
        "tag": "L1 · DE→ES",
        "prompt": "Hochschulstudium",
        "answer": "la carrera de grado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-28334fa5-s",
        "tag": "L1 · ES→DE",
        "prompt": "la carrera de grado",
        "answer": "Hochschulstudium",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a5982c40-d",
        "tag": "L1 · DE→ES",
        "prompt": "Aufbaustudium",
        "answer": "la carrera de posgrado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-a5982c40-s",
        "tag": "L1 · ES→DE",
        "prompt": "la carrera de posgrado",
        "answer": "Aufbaustudium",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7d846782-d",
        "tag": "L1 · DE→ES",
        "prompt": "normalerweise",
        "answer": "normalmente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-7d846782-s",
        "tag": "L1 · ES→DE",
        "prompt": "normalmente",
        "answer": "normalerweise",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-dc55868d-d",
        "tag": "L1 · DE→ES",
        "prompt": "sein/e, ihr/e, Ihr/e",
        "answer": "su",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-dc55868d-s",
        "tag": "L1 · ES→DE",
        "prompt": "su",
        "answer": "sein/e, ihr/e, Ihr/e",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-41b4f6b7-d",
        "tag": "L1 · DE→ES",
        "prompt": "seine, ihre, Ihre",
        "answer": "sus",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-41b4f6b7-s",
        "tag": "L1 · ES→DE",
        "prompt": "sus",
        "answer": "seine, ihre, Ihre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-21ccee7d-d",
        "tag": "L1 · DE→ES",
        "prompt": "Bildung",
        "answer": "la educación",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-21ccee7d-s",
        "tag": "L1 · ES→DE",
        "prompt": "la educación",
        "answer": "Bildung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-53529c1c-d",
        "tag": "L1 · DE→ES",
        "prompt": "kostenlos",
        "answer": "gratuito/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-53529c1c-s",
        "tag": "L1 · ES→DE",
        "prompt": "gratuito/-a",
        "answer": "kostenlos",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-cb0321b0-d",
        "tag": "L1 · DE→ES",
        "prompt": "obwohl; selbst wenn",
        "answer": "aunque",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-cb0321b0-s",
        "tag": "L1 · ES→DE",
        "prompt": "aunque",
        "answer": "obwohl; selbst wenn",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-8645cddd-d",
        "tag": "L1 · DE→ES",
        "prompt": "es gibt",
        "answer": "hay",
        "distractors": [],
        "explanation": "Infinitiv: haber"
      },
      {
        "id": "es-l1-8645cddd-s",
        "tag": "L1 · ES→DE",
        "prompt": "hay",
        "answer": "es gibt",
        "distractors": [],
        "explanation": "Infinitiv: haber"
      },
      {
        "id": "es-l1-882b7c5f-d",
        "tag": "L1 · DE→ES",
        "prompt": "ein/e andere/r/s",
        "answer": "otro/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-882b7c5f-s",
        "tag": "L1 · ES→DE",
        "prompt": "otro/-a",
        "answer": "ein/e andere/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-09b27e20-d",
        "tag": "L1 · DE→ES",
        "prompt": "der / die / das (Relativpronomen)",
        "answer": "que",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-09b27e20-s",
        "tag": "L1 · ES→DE",
        "prompt": "que",
        "answer": "der / die / das (Relativpronomen)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-824854eb-d",
        "tag": "L1 · DE→ES",
        "prompt": "beliebt",
        "answer": "popular",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-824854eb-s",
        "tag": "L1 · ES→DE",
        "prompt": "popular",
        "answer": "beliebt",
        "distractors": [],
        "explanation": "Auch: volkstümlich"
      },
      {
        "id": "es-l1-3286f709-d",
        "tag": "L1 · DE→ES",
        "prompt": "Vereinigte Staaten, USA",
        "answer": "Estados Unidos",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-3286f709-s",
        "tag": "L1 · ES→DE",
        "prompt": "Estados Unidos",
        "answer": "Vereinigte Staaten, USA",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-103fbc97-d",
        "tag": "L1 · DE→ES",
        "prompt": "Kanada",
        "answer": "Canadá",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-103fbc97-s",
        "tag": "L1 · ES→DE",
        "prompt": "Canadá",
        "answer": "Kanada",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-539e308c-d",
        "tag": "L1 · DE→ES",
        "prompt": "nordeuropäisch",
        "answer": "del norte de Europa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-539e308c-s",
        "tag": "L1 · ES→DE",
        "prompt": "del norte de Europa",
        "answer": "nordeuropäisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-75c44821-d",
        "tag": "L1 · DE→ES",
        "prompt": "Großbritannien",
        "answer": "Gran Bretaña",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-75c44821-s",
        "tag": "L1 · ES→DE",
        "prompt": "Gran Bretaña",
        "answer": "Großbritannien",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-f65801a1-d",
        "tag": "L1 · DE→ES",
        "prompt": "groß",
        "answer": "gran(de)",
        "distractors": [],
        "explanation": "Auch: alto/-a · grande"
      },
      {
        "id": "es-l1-f65801a1-s",
        "tag": "L1 · ES→DE",
        "prompt": "gran(de)",
        "answer": "groß",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-295a9dca-d",
        "tag": "L1 · DE→ES",
        "prompt": "Fußball",
        "answer": "el fútbol",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-295a9dca-s",
        "tag": "L1 · ES→DE",
        "prompt": "el fútbol",
        "answer": "Fußball",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6b85669d-d",
        "tag": "L1 · DE→ES",
        "prompt": "Mate(-Tee)",
        "answer": "el mate",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-6b85669d-s",
        "tag": "L1 · ES→DE",
        "prompt": "el mate",
        "answer": "Mate(-Tee)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d7038438-d",
        "tag": "L1 · DE→ES",
        "prompt": "Braten",
        "answer": "el asado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-d7038438-s",
        "tag": "L1 · ES→DE",
        "prompt": "el asado",
        "answer": "Braten",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-bf2d1e08-d",
        "tag": "L1 · DE→ES",
        "prompt": "Iguazú-Wasserfälle",
        "answer": "las Cataratas de Iguazú",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-bf2d1e08-s",
        "tag": "L1 · ES→DE",
        "prompt": "las Cataratas de Iguazú",
        "answer": "Iguazú-Wasserfälle",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-dcea22c5-d",
        "tag": "L1 · DE→ES",
        "prompt": "assoziieren, verbinden",
        "answer": "asociar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l1-dcea22c5-s",
        "tag": "L1 · ES→DE",
        "prompt": "asociar",
        "answer": "assoziieren, verbinden",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ac2e2d71-d",
        "tag": "L2 · DE→ES",
        "prompt": "persönlich",
        "answer": "personal",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ac2e2d71-s",
        "tag": "L2 · ES→DE",
        "prompt": "personal",
        "answer": "persönlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6516a21a-d",
        "tag": "L2 · DE→ES",
        "prompt": "Das sind meine Freunde und Familie.",
        "answer": "Esta es mi gente.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6516a21a-s",
        "tag": "L2 · ES→DE",
        "prompt": "Esta es mi gente.",
        "answer": "Das sind meine Freunde und Familie.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ee68e946-d",
        "tag": "L2 · DE→ES",
        "prompt": "Leute",
        "answer": "la gente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ee68e946-s",
        "tag": "L2 · ES→DE",
        "prompt": "la gente",
        "answer": "Leute",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-23268b67-d",
        "tag": "L2 · DE→ES",
        "prompt": "Klassenkamerad/in",
        "answer": "el / la compañero/-a de clase",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-23268b67-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la compañero/-a de clase",
        "answer": "Klassenkamerad/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-85502ad1-d",
        "tag": "L2 · DE→ES",
        "prompt": "beste/r/s",
        "answer": "mejor",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-85502ad1-s",
        "tag": "L2 · ES→DE",
        "prompt": "mejor",
        "answer": "beste/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3a7b3ed2-d",
        "tag": "L2 · DE→ES",
        "prompt": "Wir sind die Besten!",
        "answer": "¡Somos los mejores!",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3a7b3ed2-s",
        "tag": "L2 · ES→DE",
        "prompt": "¡Somos los mejores!",
        "answer": "Wir sind die Besten!",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ea53852c-d",
        "tag": "L2 · DE→ES",
        "prompt": "unterwegs",
        "answer": "de viaje",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ea53852c-s",
        "tag": "L2 · ES→DE",
        "prompt": "de viaje",
        "answer": "unterwegs",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-135a2a20-d",
        "tag": "L2 · DE→ES",
        "prompt": "Reise, Fahrt",
        "answer": "el viaje",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-135a2a20-s",
        "tag": "L2 · ES→DE",
        "prompt": "el viaje",
        "answer": "Reise, Fahrt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-99b9b5e0-d",
        "tag": "L2 · DE→ES",
        "prompt": "Mutter",
        "answer": "la madre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-99b9b5e0-s",
        "tag": "L2 · ES→DE",
        "prompt": "la madre",
        "answer": "Mutter",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e3cc354c-d",
        "tag": "L2 · DE→ES",
        "prompt": "Bruder / Schwester",
        "answer": "el / la hermano/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e3cc354c-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la hermano/-a",
        "answer": "Bruder / Schwester",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-593981e4-d",
        "tag": "L2 · DE→ES",
        "prompt": "Foto",
        "answer": "la foto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-593981e4-s",
        "tag": "L2 · ES→DE",
        "prompt": "la foto",
        "answer": "Foto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6f022aa1-d",
        "tag": "L2 · DE→ES",
        "prompt": "Leben",
        "answer": "la vida",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6f022aa1-s",
        "tag": "L2 · ES→DE",
        "prompt": "la vida",
        "answer": "Leben",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9158c5fc-d",
        "tag": "L2 · DE→ES",
        "prompt": "Frage",
        "answer": "la pregunta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9158c5fc-s",
        "tag": "L2 · ES→DE",
        "prompt": "la pregunta",
        "answer": "Frage",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7a98fcdf-d",
        "tag": "L2 · DE→ES",
        "prompt": "normalerweise",
        "answer": "normalmente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7a98fcdf-s",
        "tag": "L2 · ES→DE",
        "prompt": "normalmente",
        "answer": "normalerweise",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-323fc8e4-d",
        "tag": "L2 · DE→ES",
        "prompt": "Ihr/e Partner/in",
        "answer": "su pareja",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-323fc8e4-s",
        "tag": "L2 · ES→DE",
        "prompt": "su pareja",
        "answer": "Ihr/e Partner/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a28f0dea-d",
        "tag": "L2 · DE→ES",
        "prompt": "sein/e, ihr/e, Ihr/e",
        "answer": "su",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a28f0dea-s",
        "tag": "L2 · ES→DE",
        "prompt": "su",
        "answer": "sein/e, ihr/e, Ihr/e",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c08894cd-d",
        "tag": "L2 · DE→ES",
        "prompt": "verheiratet",
        "answer": "casado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c08894cd-s",
        "tag": "L2 · ES→DE",
        "prompt": "casado/-a",
        "answer": "verheiratet",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f9a6396f-d",
        "tag": "L2 · DE→ES",
        "prompt": "Vater",
        "answer": "el padre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f9a6396f-s",
        "tag": "L2 · ES→DE",
        "prompt": "el padre",
        "answer": "Vater",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3dc07da4-d",
        "tag": "L2 · DE→ES",
        "prompt": "seine, ihre, Ihre",
        "answer": "sus",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3dc07da4-s",
        "tag": "L2 · ES→DE",
        "prompt": "sus",
        "answer": "seine, ihre, Ihre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2f24eed4-d",
        "tag": "L2 · DE→ES",
        "prompt": "Sohn / Tochter; Kind",
        "answer": "el / la hijo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2f24eed4-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la hijo/-a",
        "answer": "Sohn / Tochter; Kind",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0a09a865-d",
        "tag": "L2 · DE→ES",
        "prompt": "Geschwister; Brüder / Schwestern",
        "answer": "los / las hermanos/-as",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0a09a865-s",
        "tag": "L2 · ES→DE",
        "prompt": "los / las hermanos/-as",
        "answer": "Geschwister; Brüder / Schwestern",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a4f97d5b-d",
        "tag": "L2 · DE→ES",
        "prompt": "Arbeitskollege",
        "answer": "el / la compañero/-a de trabajo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a4f97d5b-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la compañero/-a de trabajo",
        "answer": "Arbeitskollege",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-5415c709-d",
        "tag": "L2 · DE→ES",
        "prompt": "im Allgemeinen",
        "answer": "en general",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-5415c709-s",
        "tag": "L2 · ES→DE",
        "prompt": "en general",
        "answer": "im Allgemeinen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c4ab5d31-d",
        "tag": "L2 · DE→ES",
        "prompt": "Wie?",
        "answer": "¿Cómo?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c4ab5d31-s",
        "tag": "L2 · ES→DE",
        "prompt": "¿Cómo?",
        "answer": "Wie?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-67d2a8ef-d",
        "tag": "L2 · DE→ES",
        "prompt": "gut",
        "answer": "bueno/-a",
        "distractors": [],
        "explanation": "Auch: bien"
      },
      {
        "id": "es-l2-67d2a8ef-s",
        "tag": "L2 · ES→DE",
        "prompt": "bueno/-a",
        "answer": "gut",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-69503711-d",
        "tag": "L2 · DE→ES",
        "prompt": "ziemlich",
        "answer": "bastante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-69503711-s",
        "tag": "L2 · ES→DE",
        "prompt": "bastante",
        "answer": "ziemlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-069168cb-d",
        "tag": "L2 · DE→ES",
        "prompt": "schlecht",
        "answer": "malo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-069168cb-s",
        "tag": "L2 · ES→DE",
        "prompt": "malo/-a",
        "answer": "schlecht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-95fab8f8-d",
        "tag": "L2 · DE→ES",
        "prompt": "Großvater/-mutter; Plural: Großeltern",
        "answer": "el / la abuelo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-95fab8f8-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la abuelo/-a",
        "answer": "Großvater/-mutter; Plural: Großeltern",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2b46f3b4-d",
        "tag": "L2 · DE→ES",
        "prompt": "Onkel / Tante",
        "answer": "el / la tío/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2b46f3b4-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la tío/-a",
        "answer": "Onkel / Tante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-94be5025-d",
        "tag": "L2 · DE→ES",
        "prompt": "Cousin/e",
        "answer": "el / la primo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-94be5025-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la primo/-a",
        "answer": "Cousin/e",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b9b65ce6-d",
        "tag": "L2 · DE→ES",
        "prompt": "Verwandtschaftsbeziehung",
        "answer": "la relación familiar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b9b65ce6-s",
        "tag": "L2 · ES→DE",
        "prompt": "la relación familiar",
        "answer": "Verwandtschaftsbeziehung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-28405262-d",
        "tag": "L2 · DE→ES",
        "prompt": "(feste/r) Freund/in",
        "answer": "el / la novio/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-28405262-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la novio/-a",
        "answer": "(feste/r) Freund/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0c21f466-d",
        "tag": "L2 · DE→ES",
        "prompt": "Mitbewohner/in",
        "answer": "el / la compañero/-a de piso",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0c21f466-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la compañero/-a de piso",
        "answer": "Mitbewohner/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9c9bb603-d",
        "tag": "L2 · DE→ES",
        "prompt": "unser/e",
        "answer": "nuestro/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9c9bb603-s",
        "tag": "L2 · ES→DE",
        "prompt": "nuestro/-a",
        "answer": "unser/e",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b2384648-d",
        "tag": "L2 · DE→ES",
        "prompt": "euer/e",
        "answer": "vuestro/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b2384648-s",
        "tag": "L2 · ES→DE",
        "prompt": "vuestro/-a",
        "answer": "euer/e",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-86c92752-d",
        "tag": "L2 · DE→ES",
        "prompt": "Einzelkind",
        "answer": "el / la hijo/-a único/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-86c92752-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la hijo/-a único/-a",
        "answer": "Einzelkind",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b6f57316-d",
        "tag": "L2 · DE→ES",
        "prompt": "Problem",
        "answer": "el problema",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b6f57316-s",
        "tag": "L2 · ES→DE",
        "prompt": "el problema",
        "answer": "Problem",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f7e69b50-d",
        "tag": "L2 · DE→ES",
        "prompt": "(Studenten-)Wohnheim",
        "answer": "la residencia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f7e69b50-s",
        "tag": "L2 · ES→DE",
        "prompt": "la residencia",
        "answer": "(Studenten-)Wohnheim",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-75cc417f-d",
        "tag": "L2 · DE→ES",
        "prompt": "immer",
        "answer": "siempre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-75cc417f-s",
        "tag": "L2 · ES→DE",
        "prompt": "siempre",
        "answer": "immer",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-cc0d8e31-d",
        "tag": "L2 · DE→ES",
        "prompt": "mehr als",
        "answer": "más de",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-cc0d8e31-s",
        "tag": "L2 · ES→DE",
        "prompt": "más de",
        "answer": "mehr als",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-bff0f0d7-d",
        "tag": "L2 · DE→ES",
        "prompt": "Neffe / Nichte",
        "answer": "el / la sobrino/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-bff0f0d7-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la sobrino/-a",
        "answer": "Neffe / Nichte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-db1c285f-d",
        "tag": "L2 · DE→ES",
        "prompt": "Situation, Lage",
        "answer": "la situación",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-db1c285f-s",
        "tag": "L2 · ES→DE",
        "prompt": "la situación",
        "answer": "Situation, Lage",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-4c4182fe-d",
        "tag": "L2 · DE→ES",
        "prompt": "unabhängig",
        "answer": "independiente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-4c4182fe-s",
        "tag": "L2 · ES→DE",
        "prompt": "independiente",
        "answer": "unabhängig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1d6956ce-d",
        "tag": "L2 · DE→ES",
        "prompt": "pflegen, betreuen",
        "answer": "cuidar (de)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1d6956ce-s",
        "tag": "L2 · ES→DE",
        "prompt": "cuidar (de)",
        "answer": "pflegen, betreuen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2973dbff-d",
        "tag": "L2 · DE→ES",
        "prompt": "Zukunft",
        "answer": "el futuro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2973dbff-s",
        "tag": "L2 · ES→DE",
        "prompt": "el futuro",
        "answer": "Zukunft",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3dc9d800-d",
        "tag": "L2 · DE→ES",
        "prompt": "erhalten, bewahren, beibehalten",
        "answer": "conservar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3dc9d800-s",
        "tag": "L2 · ES→DE",
        "prompt": "conservar",
        "answer": "erhalten, bewahren, beibehalten",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-69042bce-d",
        "tag": "L2 · DE→ES",
        "prompt": "alte Freunde",
        "answer": "los amigos de toda la vida",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-69042bce-s",
        "tag": "L2 · ES→DE",
        "prompt": "los amigos de toda la vida",
        "answer": "alte Freunde",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1838e41a-d",
        "tag": "L2 · DE→ES",
        "prompt": "ganz",
        "answer": "todo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1838e41a-s",
        "tag": "L2 · ES→DE",
        "prompt": "todo/-a",
        "answer": "ganz",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-39b8b5aa-d",
        "tag": "L2 · DE→ES",
        "prompt": "verbringen",
        "answer": "pasar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-39b8b5aa-s",
        "tag": "L2 · ES→DE",
        "prompt": "pasar",
        "answer": "verbringen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3baaf74a-d",
        "tag": "L2 · DE→ES",
        "prompt": "Familienstand",
        "answer": "el estado civil",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3baaf74a-s",
        "tag": "L2 · ES→DE",
        "prompt": "el estado civil",
        "answer": "Familienstand",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-cff0fa84-d",
        "tag": "L2 · DE→ES",
        "prompt": "Mit wem?",
        "answer": "¿Con quién?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-cff0fa84-s",
        "tag": "L2 · ES→DE",
        "prompt": "¿Con quién?",
        "answer": "Mit wem?",
        "distractors": [],
        "explanation": "Auch: mit wem?"
      },
      {
        "id": "es-l2-97fb597f-d",
        "tag": "L2 · DE→ES",
        "prompt": "Aspekt",
        "answer": "el aspecto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-97fb597f-s",
        "tag": "L2 · ES→DE",
        "prompt": "el aspecto",
        "answer": "Aspekt",
        "distractors": [],
        "explanation": "Auch: Aussehen"
      },
      {
        "id": "es-l2-9b68c420-d",
        "tag": "L2 · DE→ES",
        "prompt": "sein",
        "answer": "estar",
        "distractors": [],
        "explanation": "1. Person: yo estoy; Auch: ser"
      },
      {
        "id": "es-l2-9b68c420-s",
        "tag": "L2 · ES→DE",
        "prompt": "estar",
        "answer": "sein",
        "distractors": [],
        "explanation": "1. Person: yo estoy; Auch: sein, sich befinden"
      },
      {
        "id": "es-l2-2b23a8b1-d",
        "tag": "L2 · DE→ES",
        "prompt": "ledig",
        "answer": "soltero/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2b23a8b1-s",
        "tag": "L2 · ES→DE",
        "prompt": "soltero/-a",
        "answer": "ledig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d14958af-d",
        "tag": "L2 · DE→ES",
        "prompt": "geschieden",
        "answer": "divorciado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d14958af-s",
        "tag": "L2 · ES→DE",
        "prompt": "divorciado/-a",
        "answer": "geschieden",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-809955c7-d",
        "tag": "L2 · DE→ES",
        "prompt": "erinnere dich; denke daran",
        "answer": "recuerda",
        "distractors": [],
        "explanation": "Infinitiv: recordar"
      },
      {
        "id": "es-l2-809955c7-s",
        "tag": "L2 · ES→DE",
        "prompt": "recuerda",
        "answer": "erinnere dich; denke daran",
        "distractors": [],
        "explanation": "Infinitiv: recordar"
      },
      {
        "id": "es-l2-fb36aed4-d",
        "tag": "L2 · DE→ES",
        "prompt": "hier",
        "answer": "aquí",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-fb36aed4-s",
        "tag": "L2 · ES→DE",
        "prompt": "aquí",
        "answer": "hier",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c3c893a5-d",
        "tag": "L2 · DE→ES",
        "prompt": "Mathematiker/in",
        "answer": "el / la matemático/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c3c893a5-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la matemático/-a",
        "answer": "Mathematiker/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d56a1596-d",
        "tag": "L2 · DE→ES",
        "prompt": "jung",
        "answer": "joven",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d56a1596-s",
        "tag": "L2 · ES→DE",
        "prompt": "joven",
        "answer": "jung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-73506ccd-d",
        "tag": "L2 · DE→ES",
        "prompt": "nette Leute",
        "answer": "buena gente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-73506ccd-s",
        "tag": "L2 · ES→DE",
        "prompt": "buena gente",
        "answer": "nette Leute",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-66d7650e-d",
        "tag": "L2 · DE→ES",
        "prompt": "Was?",
        "answer": "¿Eh?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-66d7650e-s",
        "tag": "L2 · ES→DE",
        "prompt": "¿Eh?",
        "answer": "Was?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6373e0b3-d",
        "tag": "L2 · DE→ES",
        "prompt": "klein",
        "answer": "bajo/-a",
        "distractors": [],
        "explanation": "Auch: pequeño/-a"
      },
      {
        "id": "es-l2-6373e0b3-s",
        "tag": "L2 · ES→DE",
        "prompt": "bajo/-a",
        "answer": "klein",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2bb6fa30-d",
        "tag": "L2 · DE→ES",
        "prompt": "schlank",
        "answer": "delgado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2bb6fa30-s",
        "tag": "L2 · ES→DE",
        "prompt": "delgado/-a",
        "answer": "schlank",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1d684799-d",
        "tag": "L2 · DE→ES",
        "prompt": "dunkle Haare haben",
        "answer": "tener el pelo moreno",
        "distractors": [],
        "explanation": "unregelmäßig (g, ie)"
      },
      {
        "id": "es-l2-1d684799-s",
        "tag": "L2 · ES→DE",
        "prompt": "tener el pelo moreno",
        "answer": "dunkle Haare haben",
        "distractors": [],
        "explanation": "unregelmäßig (g, ie)"
      },
      {
        "id": "es-l2-719e23b6-d",
        "tag": "L2 · DE→ES",
        "prompt": "Haar",
        "answer": "el pelo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-719e23b6-s",
        "tag": "L2 · ES→DE",
        "prompt": "el pelo",
        "answer": "Haar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-cdd2158d-d",
        "tag": "L2 · DE→ES",
        "prompt": "dunkel(haarig)",
        "answer": "moreno/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-cdd2158d-s",
        "tag": "L2 · ES→DE",
        "prompt": "moreno/-a",
        "answer": "dunkel(haarig)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3ec5ae11-d",
        "tag": "L2 · DE→ES",
        "prompt": "kurz",
        "answer": "corto/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3ec5ae11-s",
        "tag": "L2 · ES→DE",
        "prompt": "corto/-a",
        "answer": "kurz",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e67e8b21-d",
        "tag": "L2 · DE→ES",
        "prompt": "Phase",
        "answer": "la fase",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e67e8b21-s",
        "tag": "L2 · ES→DE",
        "prompt": "la fase",
        "answer": "Phase",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f138f745-d",
        "tag": "L2 · DE→ES",
        "prompt": "tragen",
        "answer": "llevar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f138f745-s",
        "tag": "L2 · ES→DE",
        "prompt": "llevar",
        "answer": "tragen",
        "distractors": [],
        "explanation": "Auch: enthalten"
      },
      {
        "id": "es-l2-583dfd46-d",
        "tag": "L2 · DE→ES",
        "prompt": "Bart",
        "answer": "la barba",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-583dfd46-s",
        "tag": "L2 · ES→DE",
        "prompt": "la barba",
        "answer": "Bart",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e0f053f3-d",
        "tag": "L2 · DE→ES",
        "prompt": "sympathisch",
        "answer": "simpático/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e0f053f3-s",
        "tag": "L2 · ES→DE",
        "prompt": "simpático/-a",
        "answer": "sympathisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ceb89fa4-d",
        "tag": "L2 · DE→ES",
        "prompt": "fröhlich",
        "answer": "alegre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ceb89fa4-s",
        "tag": "L2 · ES→DE",
        "prompt": "alegre",
        "answer": "fröhlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0d464f32-d",
        "tag": "L2 · DE→ES",
        "prompt": "optimistisch",
        "answer": "optimista",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0d464f32-s",
        "tag": "L2 · ES→DE",
        "prompt": "optimista",
        "answer": "optimistisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-051e6b14-d",
        "tag": "L2 · DE→ES",
        "prompt": "zu (sehr)",
        "answer": "demasiado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-051e6b14-s",
        "tag": "L2 · ES→DE",
        "prompt": "demasiado",
        "answer": "zu (sehr)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-4adf4e7c-d",
        "tag": "L2 · DE→ES",
        "prompt": "verantwortungsvoll; verantwortlich",
        "answer": "responsable",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-4adf4e7c-s",
        "tag": "L2 · ES→DE",
        "prompt": "responsable",
        "answer": "verantwortungsvoll; verantwortlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0a85ca06-d",
        "tag": "L2 · DE→ES",
        "prompt": "großer / älterer Bruder",
        "answer": "el hermano mayor",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0a85ca06-s",
        "tag": "L2 · ES→DE",
        "prompt": "el hermano mayor",
        "answer": "großer / älterer Bruder",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-979392fa-d",
        "tag": "L2 · DE→ES",
        "prompt": "älter, älteste/r/s, größer, größte/r/s",
        "answer": "mayor",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-979392fa-s",
        "tag": "L2 · ES→DE",
        "prompt": "mayor",
        "answer": "älter, älteste/r/s, größer, größte/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-10a02c39-d",
        "tag": "L2 · DE→ES",
        "prompt": "Comic",
        "answer": "el cómic",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-10a02c39-s",
        "tag": "L2 · ES→DE",
        "prompt": "el cómic",
        "answer": "Comic",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-53b3fecd-d",
        "tag": "L2 · DE→ES",
        "prompt": "elektronische Musik, Elektro-Musik",
        "answer": "la música electrónica",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-53b3fecd-s",
        "tag": "L2 · ES→DE",
        "prompt": "la música electrónica",
        "answer": "elektronische Musik, Elektro-Musik",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e9d4a242-d",
        "tag": "L2 · DE→ES",
        "prompt": "nur",
        "answer": "solo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e9d4a242-s",
        "tag": "L2 · ES→DE",
        "prompt": "solo",
        "answer": "nur",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0f590f32-d",
        "tag": "L2 · DE→ES",
        "prompt": "Fehler; Defekt",
        "answer": "el defecto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0f590f32-s",
        "tag": "L2 · ES→DE",
        "prompt": "el defecto",
        "answer": "Fehler; Defekt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6004e0e0-d",
        "tag": "L2 · DE→ES",
        "prompt": "in einer Wohngemeinschaft leben",
        "answer": "compartir piso",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6004e0e0-s",
        "tag": "L2 · ES→DE",
        "prompt": "compartir piso",
        "answer": "in einer Wohngemeinschaft leben",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-746d15f6-d",
        "tag": "L2 · DE→ES",
        "prompt": "überhaupt nicht",
        "answer": "no … nada",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-746d15f6-s",
        "tag": "L2 · ES→DE",
        "prompt": "no … nada",
        "answer": "überhaupt nicht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a67d6c0a-d",
        "tag": "L2 · DE→ES",
        "prompt": "nicht einmal",
        "answer": "ni",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a67d6c0a-s",
        "tag": "L2 · ES→DE",
        "prompt": "ni",
        "answer": "nicht einmal",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-84205492-d",
        "tag": "L2 · DE→ES",
        "prompt": "(Sandwich), belegtes Brot",
        "answer": "el sándwich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-84205492-s",
        "tag": "L2 · ES→DE",
        "prompt": "el sándwich",
        "answer": "(Sandwich), belegtes Brot",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6ff1466c-d",
        "tag": "L2 · DE→ES",
        "prompt": "groß",
        "answer": "alto/-a",
        "distractors": [],
        "explanation": "Auch: gran(de) · grande"
      },
      {
        "id": "es-l2-6ff1466c-s",
        "tag": "L2 · ES→DE",
        "prompt": "alto/-a",
        "answer": "groß",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1f3b20fd-d",
        "tag": "L2 · DE→ES",
        "prompt": "blond",
        "answer": "rubio/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1f3b20fd-s",
        "tag": "L2 · ES→DE",
        "prompt": "rubio/-a",
        "answer": "blond",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-18765c6c-d",
        "tag": "L2 · DE→ES",
        "prompt": "lang",
        "answer": "largo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-18765c6c-s",
        "tag": "L2 · ES→DE",
        "prompt": "largo/-a",
        "answer": "lang",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-5bad614d-d",
        "tag": "L2 · DE→ES",
        "prompt": "Brille",
        "answer": "las gafas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-5bad614d-s",
        "tag": "L2 · ES→DE",
        "prompt": "las gafas",
        "answer": "Brille",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-17f5c937-d",
        "tag": "L2 · DE→ES",
        "prompt": "(Kontakt)linse",
        "answer": "la lentilla",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-17f5c937-s",
        "tag": "L2 · ES→DE",
        "prompt": "la lentilla",
        "answer": "(Kontakt)linse",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b3ac4b5a-d",
        "tag": "L2 · DE→ES",
        "prompt": "normal",
        "answer": "normal",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b3ac4b5a-s",
        "tag": "L2 · ES→DE",
        "prompt": "normal",
        "answer": "normal",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-420c0dea-d",
        "tag": "L2 · DE→ES",
        "prompt": "lustig",
        "answer": "divertido/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-420c0dea-s",
        "tag": "L2 · ES→DE",
        "prompt": "divertido/-a",
        "answer": "lustig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-29fb4fa5-d",
        "tag": "L2 · DE→ES",
        "prompt": "fleißig",
        "answer": "trabajador/a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-29fb4fa5-s",
        "tag": "L2 · ES→DE",
        "prompt": "trabajador/a",
        "answer": "fleißig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-46241226-d",
        "tag": "L2 · DE→ES",
        "prompt": "ausdauernd, beständig",
        "answer": "constante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-46241226-s",
        "tag": "L2 · ES→DE",
        "prompt": "constante",
        "answer": "ausdauernd, beständig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e7178cb8-d",
        "tag": "L2 · DE→ES",
        "prompt": "Aufschrieb",
        "answer": "el apunte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e7178cb8-s",
        "tag": "L2 · ES→DE",
        "prompt": "el apunte",
        "answer": "Aufschrieb",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-92e4f719-d",
        "tag": "L2 · DE→ES",
        "prompt": "perfekt",
        "answer": "perfecto/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-92e4f719-s",
        "tag": "L2 · ES→DE",
        "prompt": "perfecto/-a",
        "answer": "perfekt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ecc57434-d",
        "tag": "L2 · DE→ES",
        "prompt": "ordentlich, strukturiert, systematisch",
        "answer": "organizado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ecc57434-s",
        "tag": "L2 · ES→DE",
        "prompt": "organizado/-a",
        "answer": "ordentlich, strukturiert, systematisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-56c8726b-d",
        "tag": "L2 · DE→ES",
        "prompt": "Aussehen",
        "answer": "el aspecto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-56c8726b-s",
        "tag": "L2 · ES→DE",
        "prompt": "el aspecto",
        "answer": "Aussehen",
        "distractors": [],
        "explanation": "Auch: Aspekt"
      },
      {
        "id": "es-l2-d3d4be5f-d",
        "tag": "L2 · DE→ES",
        "prompt": "Charakter",
        "answer": "el carácter",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d3d4be5f-s",
        "tag": "L2 · ES→DE",
        "prompt": "el carácter",
        "answer": "Charakter",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d0a79e54-d",
        "tag": "L2 · DE→ES",
        "prompt": "dick",
        "answer": "gordo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d0a79e54-s",
        "tag": "L2 · ES→DE",
        "prompt": "gordo/-a",
        "answer": "dick",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b9f8c85d-d",
        "tag": "L2 · DE→ES",
        "prompt": "Adjektiv",
        "answer": "el adjetivo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b9f8c85d-s",
        "tag": "L2 · ES→DE",
        "prompt": "el adjetivo",
        "answer": "Adjektiv",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b391a456-d",
        "tag": "L2 · DE→ES",
        "prompt": "beide",
        "answer": "los dos",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b391a456-s",
        "tag": "L2 · ES→DE",
        "prompt": "los dos",
        "answer": "beide",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-cc31bb24-d",
        "tag": "L2 · DE→ES",
        "prompt": "ein wenig",
        "answer": "un poco",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-cc31bb24-s",
        "tag": "L2 · ES→DE",
        "prompt": "un poco",
        "answer": "ein wenig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ceeba22b-d",
        "tag": "L2 · DE→ES",
        "prompt": "es gefällt mir sehr",
        "answer": "me encanta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ceeba22b-s",
        "tag": "L2 · ES→DE",
        "prompt": "me encanta",
        "answer": "es gefällt mir sehr",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-8403402d-d",
        "tag": "L2 · DE→ES",
        "prompt": "begeistern",
        "answer": "encantar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-8403402d-s",
        "tag": "L2 · ES→DE",
        "prompt": "encantar",
        "answer": "begeistern",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a83ec39c-d",
        "tag": "L2 · DE→ES",
        "prompt": "mir gefällt, ich mag",
        "answer": "me gusta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a83ec39c-s",
        "tag": "L2 · ES→DE",
        "prompt": "me gusta",
        "answer": "mir gefällt, ich mag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b2ff4fe3-d",
        "tag": "L2 · DE→ES",
        "prompt": "gefallen",
        "answer": "gustar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b2ff4fe3-s",
        "tag": "L2 · ES→DE",
        "prompt": "gustar",
        "answer": "gefallen",
        "distractors": [],
        "explanation": "Auch: schmecken"
      },
      {
        "id": "es-l2-9752a747-d",
        "tag": "L2 · DE→ES",
        "prompt": "mich langweilt",
        "answer": "me aburre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9752a747-s",
        "tag": "L2 · ES→DE",
        "prompt": "me aburre",
        "answer": "mich langweilt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6fd3730f-d",
        "tag": "L2 · DE→ES",
        "prompt": "langweilen",
        "answer": "aburrir",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6fd3730f-s",
        "tag": "L2 · ES→DE",
        "prompt": "aburrir",
        "answer": "langweilen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-283938c0-d",
        "tag": "L2 · DE→ES",
        "prompt": "öffentlich",
        "answer": "público/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-283938c0-s",
        "tag": "L2 · ES→DE",
        "prompt": "público/-a",
        "answer": "öffentlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-99ab1f44-d",
        "tag": "L2 · DE→ES",
        "prompt": "Sprichst du gerne …?",
        "answer": "¿Te gusta hablar …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-99ab1f44-s",
        "tag": "L2 · ES→DE",
        "prompt": "¿Te gusta hablar …?",
        "answer": "Sprichst du gerne …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b7a0cb54-d",
        "tag": "L2 · DE→ES",
        "prompt": "Interessieren dich …?",
        "answer": "¿Te interesan …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b7a0cb54-s",
        "tag": "L2 · ES→DE",
        "prompt": "¿Te interesan …?",
        "answer": "Interessieren dich …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-fa60db0e-d",
        "tag": "L2 · DE→ES",
        "prompt": "interessieren",
        "answer": "interesar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-fa60db0e-s",
        "tag": "L2 · ES→DE",
        "prompt": "interesar",
        "answer": "interessieren",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-288eaa19-d",
        "tag": "L2 · DE→ES",
        "prompt": "Erklärung",
        "answer": "la explicación",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-288eaa19-s",
        "tag": "L2 · ES→DE",
        "prompt": "la explicación",
        "answer": "Erklärung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-14b284ce-d",
        "tag": "L2 · DE→ES",
        "prompt": "Experte/-in",
        "answer": "el / la experto/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-14b284ce-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la experto/-a",
        "answer": "Experte/-in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7499fe06-d",
        "tag": "L2 · DE→ES",
        "prompt": "einmal in der Woche",
        "answer": "una vez a la semana",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7499fe06-s",
        "tag": "L2 · ES→DE",
        "prompt": "una vez a la semana",
        "answer": "einmal in der Woche",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-aa2da5d5-d",
        "tag": "L2 · DE→ES",
        "prompt": "Mal",
        "answer": "la vez",
        "distractors": [],
        "explanation": "Plural: veces"
      },
      {
        "id": "es-l2-aa2da5d5-s",
        "tag": "L2 · ES→DE",
        "prompt": "la vez",
        "answer": "Mal",
        "distractors": [],
        "explanation": "Plural: veces"
      },
      {
        "id": "es-l2-2f50dc80-d",
        "tag": "L2 · DE→ES",
        "prompt": "besuchen, besichtigen",
        "answer": "visitar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2f50dc80-s",
        "tag": "L2 · ES→DE",
        "prompt": "visitar",
        "answer": "besuchen, besichtigen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-fe5e45cb-d",
        "tag": "L2 · DE→ES",
        "prompt": "Museum",
        "answer": "el museo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-fe5e45cb-s",
        "tag": "L2 · ES→DE",
        "prompt": "el museo",
        "answer": "Museum",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7b5c11af-d",
        "tag": "L2 · DE→ES",
        "prompt": "Künstler/in",
        "answer": "el / la artista",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7b5c11af-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la artista",
        "answer": "Künstler/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b55f469e-d",
        "tag": "L2 · DE→ES",
        "prompt": "der / die / das (Relativpronomen)",
        "answer": "que",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b55f469e-s",
        "tag": "L2 · ES→DE",
        "prompt": "que",
        "answer": "der / die / das (Relativpronomen)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ef1fdf4a-d",
        "tag": "L2 · DE→ES",
        "prompt": "uns",
        "answer": "nos",
        "distractors": [],
        "explanation": "Auch: (a nosotros/-as) nos"
      },
      {
        "id": "es-l2-ef1fdf4a-s",
        "tag": "L2 · ES→DE",
        "prompt": "nos",
        "answer": "uns",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-60787718-d",
        "tag": "L2 · DE→ES",
        "prompt": "besonders, eigene/r/s",
        "answer": "particular",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-60787718-s",
        "tag": "L2 · ES→DE",
        "prompt": "particular",
        "answer": "besonders, eigene/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e3b821f7-d",
        "tag": "L2 · DE→ES",
        "prompt": "Betrachtungsweise, Standpunkt",
        "answer": "el punto de vista",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e3b821f7-s",
        "tag": "L2 · ES→DE",
        "prompt": "el punto de vista",
        "answer": "Betrachtungsweise, Standpunkt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-554e2e4b-d",
        "tag": "L2 · DE→ES",
        "prompt": "dich langweilen",
        "answer": "te aburren",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-554e2e4b-s",
        "tag": "L2 · ES→DE",
        "prompt": "te aburren",
        "answer": "dich langweilen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d96ad301-d",
        "tag": "L2 · DE→ES",
        "prompt": "derselbe / dieselbe / dasselbe",
        "answer": "mismo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d96ad301-s",
        "tag": "L2 · ES→DE",
        "prompt": "mismo/-a",
        "answer": "derselbe / dieselbe / dasselbe",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c57afcb2-d",
        "tag": "L2 · DE→ES",
        "prompt": "Route, Weg",
        "answer": "la ruta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c57afcb2-s",
        "tag": "L2 · ES→DE",
        "prompt": "la ruta",
        "answer": "Route, Weg",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-20cdcc11-d",
        "tag": "L2 · DE→ES",
        "prompt": "Antwort",
        "answer": "la respuesta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-20cdcc11-s",
        "tag": "L2 · ES→DE",
        "prompt": "la respuesta",
        "answer": "Antwort",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c78d5f78-d",
        "tag": "L2 · DE→ES",
        "prompt": "und zwar sehr",
        "answer": "y mucho",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c78d5f78-s",
        "tag": "L2 · ES→DE",
        "prompt": "y mucho",
        "answer": "und zwar sehr",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c2530ea7-d",
        "tag": "L2 · DE→ES",
        "prompt": "entdecken",
        "answer": "descubrir",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c2530ea7-s",
        "tag": "L2 · ES→DE",
        "prompt": "descubrir",
        "answer": "entdecken",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9be20de1-d",
        "tag": "L2 · DE→ES",
        "prompt": "Bild",
        "answer": "la imagen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9be20de1-s",
        "tag": "L2 · ES→DE",
        "prompt": "la imagen",
        "answer": "Bild",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c96ed464-d",
        "tag": "L2 · DE→ES",
        "prompt": "beeindruckend, umwerfend",
        "answer": "impactante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c96ed464-s",
        "tag": "L2 · ES→DE",
        "prompt": "impactante",
        "answer": "beeindruckend, umwerfend",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c4564bb8-d",
        "tag": "L2 · DE→ES",
        "prompt": "fotografieren",
        "answer": "fotografiar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c4564bb8-s",
        "tag": "L2 · ES→DE",
        "prompt": "fotografiar",
        "answer": "fotografieren",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-da70a574-d",
        "tag": "L2 · DE→ES",
        "prompt": "Wirkung, Effekt",
        "answer": "el efecto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-da70a574-s",
        "tag": "L2 · ES→DE",
        "prompt": "el efecto",
        "answer": "Wirkung, Effekt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2fcdafd4-d",
        "tag": "L2 · DE→ES",
        "prompt": "Kamera",
        "answer": "la cámara",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2fcdafd4-s",
        "tag": "L2 · ES→DE",
        "prompt": "la cámara",
        "answer": "Kamera",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c07d4607-d",
        "tag": "L2 · DE→ES",
        "prompt": "außerdem",
        "answer": "además",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c07d4607-s",
        "tag": "L2 · ES→DE",
        "prompt": "además",
        "answer": "außerdem",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7cb3bfeb-d",
        "tag": "L2 · DE→ES",
        "prompt": "Appetithäppchen",
        "answer": "la tapa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7cb3bfeb-s",
        "tag": "L2 · ES→DE",
        "prompt": "la tapa",
        "answer": "Appetithäppchen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1b4e6cb3-d",
        "tag": "L2 · DE→ES",
        "prompt": "mich interessiert",
        "answer": "me interesa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1b4e6cb3-s",
        "tag": "L2 · ES→DE",
        "prompt": "me interesa",
        "answer": "mich interessiert",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7108b3d5-d",
        "tag": "L2 · DE→ES",
        "prompt": "ihm",
        "answer": "(a él) le",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7108b3d5-s",
        "tag": "L2 · ES→DE",
        "prompt": "(a él) le",
        "answer": "ihm",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-50e00305-d",
        "tag": "L2 · DE→ES",
        "prompt": "ihr",
        "answer": "(a ella) le",
        "distractors": [],
        "explanation": "Auch: vosotros / vosotras"
      },
      {
        "id": "es-l2-50e00305-s",
        "tag": "L2 · ES→DE",
        "prompt": "(a ella) le",
        "answer": "ihr",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-020764fe-d",
        "tag": "L2 · DE→ES",
        "prompt": "Kino",
        "answer": "el cine",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-020764fe-s",
        "tag": "L2 · ES→DE",
        "prompt": "el cine",
        "answer": "Kino",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-32a2cb52-d",
        "tag": "L2 · DE→ES",
        "prompt": "französisch",
        "answer": "francés/-esa",
        "distractors": [],
        "explanation": "Auch: el francés"
      },
      {
        "id": "es-l2-32a2cb52-s",
        "tag": "L2 · ES→DE",
        "prompt": "francés/-esa",
        "answer": "französisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-10774ed7-d",
        "tag": "L2 · DE→ES",
        "prompt": "Fotografie",
        "answer": "la fotografía",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-10774ed7-s",
        "tag": "L2 · ES→DE",
        "prompt": "la fotografía",
        "answer": "Fotografie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-12b1e2f1-d",
        "tag": "L2 · DE→ES",
        "prompt": "Sache",
        "answer": "la cosa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-12b1e2f1-s",
        "tag": "L2 · ES→DE",
        "prompt": "la cosa",
        "answer": "Sache",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-4a4d37b3-d",
        "tag": "L2 · DE→ES",
        "prompt": "mir",
        "answer": "(a mí) me",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-4a4d37b3-s",
        "tag": "L2 · ES→DE",
        "prompt": "(a mí) me",
        "answer": "mir",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e66a542d-d",
        "tag": "L2 · DE→ES",
        "prompt": "dir",
        "answer": "(a ti) te",
        "distractors": [],
        "explanation": "Auch: te"
      },
      {
        "id": "es-l2-e66a542d-s",
        "tag": "L2 · ES→DE",
        "prompt": "(a ti) te",
        "answer": "dir",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7ec020b2-d",
        "tag": "L2 · DE→ES",
        "prompt": "Ihnen (Singular)",
        "answer": "(a usted) le",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7ec020b2-s",
        "tag": "L2 · ES→DE",
        "prompt": "(a usted) le",
        "answer": "Ihnen (Singular)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d3458cff-d",
        "tag": "L2 · DE→ES",
        "prompt": "uns",
        "answer": "(a nosotros/-as) nos",
        "distractors": [],
        "explanation": "Auch: nos"
      },
      {
        "id": "es-l2-d3458cff-s",
        "tag": "L2 · ES→DE",
        "prompt": "(a nosotros/-as) nos",
        "answer": "uns",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-22893ab7-d",
        "tag": "L2 · DE→ES",
        "prompt": "euch",
        "answer": "(a vosotros/-as) os",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-22893ab7-s",
        "tag": "L2 · ES→DE",
        "prompt": "(a vosotros/-as) os",
        "answer": "euch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d812e7b7-d",
        "tag": "L2 · DE→ES",
        "prompt": "ihnen, Ihnen",
        "answer": "(a ellos / ellas / ustedes) les",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d812e7b7-s",
        "tag": "L2 · ES→DE",
        "prompt": "(a ellos / ellas / ustedes) les",
        "answer": "ihnen, Ihnen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-331ea1bc-d",
        "tag": "L2 · DE→ES",
        "prompt": "Peru",
        "answer": "Perú",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-331ea1bc-s",
        "tag": "L2 · ES→DE",
        "prompt": "Perú",
        "answer": "Peru",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f42f5535-d",
        "tag": "L2 · DE→ES",
        "prompt": "Kuba",
        "answer": "Cuba",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f42f5535-s",
        "tag": "L2 · ES→DE",
        "prompt": "Cuba",
        "answer": "Kuba",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-76a56621-d",
        "tag": "L2 · DE→ES",
        "prompt": "Mode",
        "answer": "la moda",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-76a56621-s",
        "tag": "L2 · ES→DE",
        "prompt": "la moda",
        "answer": "Mode",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-eb084189-d",
        "tag": "L2 · DE→ES",
        "prompt": "asiatisches Essen",
        "answer": "la comida asiática",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-eb084189-s",
        "tag": "L2 · ES→DE",
        "prompt": "la comida asiática",
        "answer": "asiatisches Essen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-636ad955-d",
        "tag": "L2 · DE→ES",
        "prompt": "Videospiel, Computerspiel",
        "answer": "el videojuego",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-636ad955-s",
        "tag": "L2 · ES→DE",
        "prompt": "el videojuego",
        "answer": "Videospiel, Computerspiel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-30f942a8-d",
        "tag": "L2 · DE→ES",
        "prompt": "Fußball",
        "answer": "el fútbol",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-30f942a8-s",
        "tag": "L2 · ES→DE",
        "prompt": "el fútbol",
        "answer": "Fußball",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-82b9359e-d",
        "tag": "L2 · DE→ES",
        "prompt": "moderne Kunst",
        "answer": "el arte moderno",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-82b9359e-s",
        "tag": "L2 · ES→DE",
        "prompt": "el arte moderno",
        "answer": "moderne Kunst",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-bda2bb14-d",
        "tag": "L2 · DE→ES",
        "prompt": "kaum",
        "answer": "casi nada",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-bda2bb14-s",
        "tag": "L2 · ES→DE",
        "prompt": "casi nada",
        "answer": "kaum",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3228ca4e-d",
        "tag": "L2 · DE→ES",
        "prompt": "(an)sehen",
        "answer": "ver",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3228ca4e-s",
        "tag": "L2 · ES→DE",
        "prompt": "ver",
        "answer": "(an)sehen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-8ffa8a25-d",
        "tag": "L2 · DE→ES",
        "prompt": "Film",
        "answer": "la película",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-8ffa8a25-s",
        "tag": "L2 · ES→DE",
        "prompt": "la película",
        "answer": "Film",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1b352c7e-d",
        "tag": "L2 · DE→ES",
        "prompt": "in Originalversion",
        "answer": "en versión original",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1b352c7e-s",
        "tag": "L2 · ES→DE",
        "prompt": "en versión original",
        "answer": "in Originalversion",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c113d5b7-d",
        "tag": "L2 · DE→ES",
        "prompt": "Muttersprachler/in",
        "answer": "el / la nativo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c113d5b7-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la nativo/-a",
        "answer": "Muttersprachler/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-662e3bb5-d",
        "tag": "L2 · DE→ES",
        "prompt": "Radio",
        "answer": "la radio",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-662e3bb5-s",
        "tag": "L2 · ES→DE",
        "prompt": "la radio",
        "answer": "Radio",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-129fdbc3-d",
        "tag": "L2 · DE→ES",
        "prompt": "Grammatik",
        "answer": "la gramática",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-129fdbc3-s",
        "tag": "L2 · ES→DE",
        "prompt": "la gramática",
        "answer": "Grammatik",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0d0787e1-d",
        "tag": "L2 · DE→ES",
        "prompt": "Übung",
        "answer": "el ejercicio",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0d0787e1-s",
        "tag": "L2 · ES→DE",
        "prompt": "el ejercicio",
        "answer": "Übung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b5bc32ce-d",
        "tag": "L2 · DE→ES",
        "prompt": "Internet",
        "answer": "el / la Internet",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b5bc32ce-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la Internet",
        "answer": "Internet",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-055468b5-d",
        "tag": "L2 · DE→ES",
        "prompt": "mit wem?",
        "answer": "¿Con quién?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-055468b5-s",
        "tag": "L2 · ES→DE",
        "prompt": "¿Con quién?",
        "answer": "mit wem?",
        "distractors": [],
        "explanation": "Auch: Mit wem?"
      },
      {
        "id": "es-l2-83bc7364-d",
        "tag": "L2 · DE→ES",
        "prompt": "Warum?",
        "answer": "¿Por qué?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-83bc7364-s",
        "tag": "L2 · ES→DE",
        "prompt": "¿Por qué?",
        "answer": "Warum?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3b95dc37-d",
        "tag": "L2 · DE→ES",
        "prompt": "Schwierigkeit",
        "answer": "la dificultad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3b95dc37-s",
        "tag": "L2 · ES→DE",
        "prompt": "la dificultad",
        "answer": "Schwierigkeit",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-28807d23-d",
        "tag": "L2 · DE→ES",
        "prompt": "Muttersprache",
        "answer": "la lengua materna",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-28807d23-s",
        "tag": "L2 · ES→DE",
        "prompt": "la lengua materna",
        "answer": "Muttersprache",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-5aa5ce99-d",
        "tag": "L2 · DE→ES",
        "prompt": "Lernmethode, Art und Weise zu lernen",
        "answer": "la forma de aprender",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-5aa5ce99-s",
        "tag": "L2 · ES→DE",
        "prompt": "la forma de aprender",
        "answer": "Lernmethode, Art und Weise zu lernen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-bad61b8e-d",
        "tag": "L2 · DE→ES",
        "prompt": "leicht, einfach",
        "answer": "fácil",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-bad61b8e-s",
        "tag": "L2 · ES→DE",
        "prompt": "fácil",
        "answer": "leicht, einfach",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-84facaea-d",
        "tag": "L2 · DE→ES",
        "prompt": "Erstsemester-Studenten",
        "answer": "mechón/-ona",
        "distractors": [],
        "explanation": "chilenisch"
      },
      {
        "id": "es-l2-84facaea-s",
        "tag": "L2 · ES→DE",
        "prompt": "mechón/-ona",
        "answer": "Erstsemester-Studenten",
        "distractors": [],
        "explanation": "chilenisch"
      },
      {
        "id": "es-l2-a45dd0ec-d",
        "tag": "L2 · DE→ES",
        "prompt": "Montag",
        "answer": "el lunes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a45dd0ec-s",
        "tag": "L2 · ES→DE",
        "prompt": "el lunes",
        "answer": "Montag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ab610541-d",
        "tag": "L2 · DE→ES",
        "prompt": "Karnevalstruppe",
        "answer": "la comparsa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ab610541-s",
        "tag": "L2 · ES→DE",
        "prompt": "la comparsa",
        "answer": "Karnevalstruppe",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-98b9f047-d",
        "tag": "L2 · DE→ES",
        "prompt": "Organisation",
        "answer": "la organización",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-98b9f047-s",
        "tag": "L2 · ES→DE",
        "prompt": "la organización",
        "answer": "Organisation",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-06d3764f-d",
        "tag": "L2 · DE→ES",
        "prompt": "geöffnet, offen",
        "answer": "abierto/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-06d3764f-s",
        "tag": "L2 · ES→DE",
        "prompt": "abierto/-a",
        "answer": "geöffnet, offen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e1a23700-d",
        "tag": "L2 · DE→ES",
        "prompt": "gratis, umsonst",
        "answer": "gratis",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e1a23700-s",
        "tag": "L2 · ES→DE",
        "prompt": "gratis",
        "answer": "gratis, umsonst",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a17e3a2b-d",
        "tag": "L2 · DE→ES",
        "prompt": "Konzert",
        "answer": "el concierto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a17e3a2b-s",
        "tag": "L2 · ES→DE",
        "prompt": "el concierto",
        "answer": "Konzert",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f734a550-d",
        "tag": "L2 · DE→ES",
        "prompt": "Dienstag",
        "answer": "el martes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f734a550-s",
        "tag": "L2 · ES→DE",
        "prompt": "el martes",
        "answer": "Dienstag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-eb10de77-d",
        "tag": "L2 · DE→ES",
        "prompt": "Amphitheater, Hörsaal",
        "answer": "el anfiteatro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-eb10de77-s",
        "tag": "L2 · ES→DE",
        "prompt": "el anfiteatro",
        "answer": "Amphitheater, Hörsaal",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7df4c373-d",
        "tag": "L2 · DE→ES",
        "prompt": "Tanz",
        "answer": "la danza",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-7df4c373-s",
        "tag": "L2 · ES→DE",
        "prompt": "la danza",
        "answer": "Tanz",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-983bd34b-d",
        "tag": "L2 · DE→ES",
        "prompt": "Ensemble, Truppe",
        "answer": "la compañía",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-983bd34b-s",
        "tag": "L2 · ES→DE",
        "prompt": "la compañía",
        "answer": "Ensemble, Truppe",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1f43d1db-d",
        "tag": "L2 · DE→ES",
        "prompt": "Forum",
        "answer": "el foro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1f43d1db-s",
        "tag": "L2 · ES→DE",
        "prompt": "el foro",
        "answer": "Forum",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-46c2c0ba-d",
        "tag": "L2 · DE→ES",
        "prompt": "Zusammenleben",
        "answer": "la convivencia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-46c2c0ba-s",
        "tag": "L2 · ES→DE",
        "prompt": "la convivencia",
        "answer": "Zusammenleben",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-50ded45e-d",
        "tag": "L2 · DE→ES",
        "prompt": "gemäß, nach",
        "answer": "según",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-50ded45e-s",
        "tag": "L2 · ES→DE",
        "prompt": "según",
        "answer": "gemäß, nach",
        "distractors": [],
        "explanation": "Auch: laut seiner / ihrer Aussage"
      },
      {
        "id": "es-l2-0dbce9c7-d",
        "tag": "L2 · DE→ES",
        "prompt": "Regierung, Herrschaft",
        "answer": "el gobierno",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-0dbce9c7-s",
        "tag": "L2 · ES→DE",
        "prompt": "el gobierno",
        "answer": "Regierung, Herrschaft",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a1042458-d",
        "tag": "L2 · DE→ES",
        "prompt": "Rundfahrt, Kreislauf",
        "answer": "el circuito",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a1042458-s",
        "tag": "L2 · ES→DE",
        "prompt": "el circuito",
        "answer": "Rundfahrt, Kreislauf",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-62f056c4-d",
        "tag": "L2 · DE→ES",
        "prompt": "Gedächtnis, Erinnerung",
        "answer": "la memoria",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-62f056c4-s",
        "tag": "L2 · ES→DE",
        "prompt": "la memoria",
        "answer": "Gedächtnis, Erinnerung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9af3ed9b-d",
        "tag": "L2 · DE→ES",
        "prompt": "Anmeldung, Einschreibung",
        "answer": "la inscripción",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9af3ed9b-s",
        "tag": "L2 · ES→DE",
        "prompt": "la inscripción",
        "answer": "Anmeldung, Einschreibung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6ee2c6e5-d",
        "tag": "L2 · DE→ES",
        "prompt": "(zwanglose) Unterhaltung, Vortrag",
        "answer": "la charla",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6ee2c6e5-s",
        "tag": "L2 · ES→DE",
        "prompt": "la charla",
        "answer": "(zwanglose) Unterhaltung, Vortrag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-aa7834a0-d",
        "tag": "L2 · DE→ES",
        "prompt": "Mechanik",
        "answer": "la mecánica",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-aa7834a0-s",
        "tag": "L2 · ES→DE",
        "prompt": "la mecánica",
        "answer": "Mechanik",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-80a05176-d",
        "tag": "L2 · DE→ES",
        "prompt": "grundlegend",
        "answer": "básico/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-80a05176-s",
        "tag": "L2 · ES→DE",
        "prompt": "básico/-a",
        "answer": "grundlegend",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-8bf5e693-d",
        "tag": "L2 · DE→ES",
        "prompt": "lerne",
        "answer": "aprende",
        "distractors": [],
        "explanation": "Infinitiv: aprender"
      },
      {
        "id": "es-l2-8bf5e693-s",
        "tag": "L2 · ES→DE",
        "prompt": "aprende",
        "answer": "lerne",
        "distractors": [],
        "explanation": "Infinitiv: aprender"
      },
      {
        "id": "es-l2-997cedc4-d",
        "tag": "L2 · DE→ES",
        "prompt": "reparieren",
        "answer": "reparar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-997cedc4-s",
        "tag": "L2 · ES→DE",
        "prompt": "reparar",
        "answer": "reparieren",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6cc4aec5-d",
        "tag": "L2 · DE→ES",
        "prompt": "Instandhaltung, Erhalt",
        "answer": "la mantención",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-6cc4aec5-s",
        "tag": "L2 · ES→DE",
        "prompt": "la mantención",
        "answer": "Instandhaltung, Erhalt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-39b7bf22-d",
        "tag": "L2 · DE→ES",
        "prompt": "hochwertig",
        "answer": "de calidad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-39b7bf22-s",
        "tag": "L2 · ES→DE",
        "prompt": "de calidad",
        "answer": "hochwertig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d6f44e2c-d",
        "tag": "L2 · DE→ES",
        "prompt": "bring",
        "answer": "trae",
        "distractors": [],
        "explanation": "Infinitiv: traer"
      },
      {
        "id": "es-l2-d6f44e2c-s",
        "tag": "L2 · ES→DE",
        "prompt": "trae",
        "answer": "bring",
        "distractors": [],
        "explanation": "Infinitiv: traer"
      },
      {
        "id": "es-l2-7a1e2707-d",
        "tag": "L2 · DE→ES",
        "prompt": "bringen",
        "answer": "traer",
        "distractors": [],
        "explanation": "1. Person: yo traigo"
      },
      {
        "id": "es-l2-7a1e2707-s",
        "tag": "L2 · ES→DE",
        "prompt": "traer",
        "answer": "bringen",
        "distractors": [],
        "explanation": "1. Person: yo traigo"
      },
      {
        "id": "es-l2-76984a9a-d",
        "tag": "L2 · DE→ES",
        "prompt": "Fahrrad",
        "answer": "la cleta",
        "distractors": [],
        "explanation": "chilenisch; Auch: la bici(cleta)"
      },
      {
        "id": "es-l2-76984a9a-s",
        "tag": "L2 · ES→DE",
        "prompt": "la cleta",
        "answer": "Fahrrad",
        "distractors": [],
        "explanation": "chilenisch"
      },
      {
        "id": "es-l2-d00e1fa6-d",
        "tag": "L2 · DE→ES",
        "prompt": "Kiosk",
        "answer": "el kiosko",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d00e1fa6-s",
        "tag": "L2 · ES→DE",
        "prompt": "el kiosko",
        "answer": "Kiosk",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-93fb60a7-d",
        "tag": "L2 · DE→ES",
        "prompt": "rot",
        "answer": "rojo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-93fb60a7-s",
        "tag": "L2 · ES→DE",
        "prompt": "rojo/-a",
        "answer": "rot",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-e51ddb6f-d",
        "tag": "L2 · DE→ES",
        "prompt": "(Eingangs-)Halle",
        "answer": "el hall",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l2-e51ddb6f-s",
        "tag": "L2 · ES→DE",
        "prompt": "el hall",
        "answer": "(Eingangs-)Halle",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l2-3d7f2b61-d",
        "tag": "L2 · DE→ES",
        "prompt": "Spiel",
        "answer": "el juego",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-3d7f2b61-s",
        "tag": "L2 · ES→DE",
        "prompt": "el juego",
        "answer": "Spiel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-66533480-d",
        "tag": "L2 · DE→ES",
        "prompt": "Sport-",
        "answer": "deportivo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-66533480-s",
        "tag": "L2 · ES→DE",
        "prompt": "deportivo/-a",
        "answer": "Sport-",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a62f8f2c-d",
        "tag": "L2 · DE→ES",
        "prompt": "Feier, Party",
        "answer": "el carrete",
        "distractors": [],
        "explanation": "chilenisch"
      },
      {
        "id": "es-l2-a62f8f2c-s",
        "tag": "L2 · ES→DE",
        "prompt": "el carrete",
        "answer": "Feier, Party",
        "distractors": [],
        "explanation": "chilenisch"
      },
      {
        "id": "es-l2-a38ef393-d",
        "tag": "L2 · DE→ES",
        "prompt": "am Fuße von … liegen",
        "answer": "estar a los pies de …",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a38ef393-s",
        "tag": "L2 · ES→DE",
        "prompt": "estar a los pies de …",
        "answer": "am Fuße von … liegen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-00979606-d",
        "tag": "L2 · DE→ES",
        "prompt": "sein, sich befinden",
        "answer": "estar",
        "distractors": [],
        "explanation": "1. Person: yo estoy"
      },
      {
        "id": "es-l2-00979606-s",
        "tag": "L2 · ES→DE",
        "prompt": "estar",
        "answer": "sein, sich befinden",
        "distractors": [],
        "explanation": "1. Person: yo estoy; Auch: sein"
      },
      {
        "id": "es-l2-d5d8ca38-d",
        "tag": "L2 · DE→ES",
        "prompt": "Fuß",
        "answer": "el pie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-d5d8ca38-s",
        "tag": "L2 · ES→DE",
        "prompt": "el pie",
        "answer": "Fuß",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9b24705e-d",
        "tag": "L2 · DE→ES",
        "prompt": "Anden",
        "answer": "los Andes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9b24705e-s",
        "tag": "L2 · ES→DE",
        "prompt": "los Andes",
        "answer": "Anden",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-dc4f7111-d",
        "tag": "L2 · DE→ES",
        "prompt": "(Haupt-)Stadtgebiet",
        "answer": "el área metropolitana",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-dc4f7111-s",
        "tag": "L2 · ES→DE",
        "prompt": "el área metropolitana",
        "answer": "(Haupt-)Stadtgebiet",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ef429c5b-d",
        "tag": "L2 · DE→ES",
        "prompt": "Großraum von Santiago",
        "answer": "el Gran Santiago",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ef429c5b-s",
        "tag": "L2 · ES→DE",
        "prompt": "el Gran Santiago",
        "answer": "Großraum von Santiago",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-47647b97-d",
        "tag": "L2 · DE→ES",
        "prompt": "groß",
        "answer": "gran(de)",
        "distractors": [],
        "explanation": "Auch: alto/-a · grande"
      },
      {
        "id": "es-l2-47647b97-s",
        "tag": "L2 · ES→DE",
        "prompt": "gran(de)",
        "answer": "groß",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f2d4f643-d",
        "tag": "L2 · DE→ES",
        "prompt": "Einwohner",
        "answer": "el / la habitante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f2d4f643-s",
        "tag": "L2 · ES→DE",
        "prompt": "el / la habitante",
        "answer": "Einwohner",
        "distractors": [],
        "explanation": "Auch: Einwohner/in"
      },
      {
        "id": "es-l2-677099b7-d",
        "tag": "L2 · DE→ES",
        "prompt": "dritte/r/s",
        "answer": "tercero/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-677099b7-s",
        "tag": "L2 · ES→DE",
        "prompt": "tercero/-a",
        "answer": "dritte/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-41beb6b8-d",
        "tag": "L2 · DE→ES",
        "prompt": "die sicherste Stadt",
        "answer": "la ciudad más segura",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-41beb6b8-s",
        "tag": "L2 · ES→DE",
        "prompt": "la ciudad más segura",
        "answer": "die sicherste Stadt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-707ee6c6-d",
        "tag": "L2 · DE→ES",
        "prompt": "Ski fahren",
        "answer": "esquiar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-707ee6c6-s",
        "tag": "L2 · ES→DE",
        "prompt": "esquiar",
        "answer": "Ski fahren",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b3238f9b-d",
        "tag": "L2 · DE→ES",
        "prompt": "Institut",
        "answer": "el instituto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-b3238f9b-s",
        "tag": "L2 · ES→DE",
        "prompt": "el instituto",
        "answer": "Institut",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2aed5d7a-d",
        "tag": "L2 · DE→ES",
        "prompt": "(be)grüßen",
        "answer": "saludar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2aed5d7a-s",
        "tag": "L2 · ES→DE",
        "prompt": "saludar",
        "answer": "(be)grüßen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ab023360-d",
        "tag": "L2 · DE→ES",
        "prompt": "einladen",
        "answer": "invitar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-ab023360-s",
        "tag": "L2 · ES→DE",
        "prompt": "invitar",
        "answer": "einladen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-69e33ae2-d",
        "tag": "L2 · DE→ES",
        "prompt": "Teil sein von, zu etw. gehören",
        "answer": "ser parte de",
        "distractors": [],
        "explanation": "1. Person: yo soy"
      },
      {
        "id": "es-l2-69e33ae2-s",
        "tag": "L2 · ES→DE",
        "prompt": "ser parte de",
        "answer": "Teil sein von, zu etw. gehören",
        "distractors": [],
        "explanation": "1. Person: yo soy"
      },
      {
        "id": "es-l2-053aeed5-d",
        "tag": "L2 · DE→ES",
        "prompt": "Hochschulgemeinschaft",
        "answer": "la comunidad universitaria",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-053aeed5-s",
        "tag": "L2 · ES→DE",
        "prompt": "la comunidad universitaria",
        "answer": "Hochschulgemeinschaft",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-88fb4d97-d",
        "tag": "L2 · DE→ES",
        "prompt": "während",
        "answer": "durante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-88fb4d97-s",
        "tag": "L2 · ES→DE",
        "prompt": "durante",
        "answer": "während",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c5f6cc23-d",
        "tag": "L2 · DE→ES",
        "prompt": "soeben, neu, frisch",
        "answer": "recién",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c5f6cc23-s",
        "tag": "L2 · ES→DE",
        "prompt": "recién",
        "answer": "soeben, neu, frisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-032eaac9-d",
        "tag": "L2 · DE→ES",
        "prompt": "eintreten",
        "answer": "ingresado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-032eaac9-s",
        "tag": "L2 · ES→DE",
        "prompt": "ingresado/-a",
        "answer": "eintreten",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a3678707-d",
        "tag": "L2 · DE→ES",
        "prompt": "Gelegenheit",
        "answer": "la oportunidad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a3678707-s",
        "tag": "L2 · ES→DE",
        "prompt": "la oportunidad",
        "answer": "Gelegenheit",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-5d593843-d",
        "tag": "L2 · DE→ES",
        "prompt": "kennen lernen",
        "answer": "conocer",
        "distractors": [],
        "explanation": "unregelmäßig (zc)"
      },
      {
        "id": "es-l2-5d593843-s",
        "tag": "L2 · ES→DE",
        "prompt": "conocer",
        "answer": "kennen lernen",
        "distractors": [],
        "explanation": "unregelmäßig (zc)"
      },
      {
        "id": "es-l2-93c50f3d-d",
        "tag": "L2 · DE→ES",
        "prompt": "kulturell",
        "answer": "cultural",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-93c50f3d-s",
        "tag": "L2 · ES→DE",
        "prompt": "cultural",
        "answer": "kulturell",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-65b6d327-d",
        "tag": "L2 · DE→ES",
        "prompt": "(an)bieten",
        "answer": "ofrecer",
        "distractors": [],
        "explanation": "unregelmäßig (zc)"
      },
      {
        "id": "es-l2-65b6d327-s",
        "tag": "L2 · ES→DE",
        "prompt": "ofrecer",
        "answer": "(an)bieten",
        "distractors": [],
        "explanation": "unregelmäßig (zc)"
      },
      {
        "id": "es-l2-f9087d6b-d",
        "tag": "L2 · DE→ES",
        "prompt": "Führung",
        "answer": "la visita guiada",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-f9087d6b-s",
        "tag": "L2 · ES→DE",
        "prompt": "la visita guiada",
        "answer": "Führung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2a8397e2-d",
        "tag": "L2 · DE→ES",
        "prompt": "Thema",
        "answer": "el tema",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-2a8397e2-s",
        "tag": "L2 · ES→DE",
        "prompt": "el tema",
        "answer": "Thema",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-21429256-d",
        "tag": "L2 · DE→ES",
        "prompt": "interessant",
        "answer": "interesante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-21429256-s",
        "tag": "L2 · ES→DE",
        "prompt": "interesante",
        "answer": "interessant",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1b3bd71f-d",
        "tag": "L2 · DE→ES",
        "prompt": "Universitätsleben",
        "answer": "la vida universitaria",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-1b3bd71f-s",
        "tag": "L2 · ES→DE",
        "prompt": "la vida universitaria",
        "answer": "Universitätsleben",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-60fa3e86-d",
        "tag": "L2 · DE→ES",
        "prompt": "Trainingskurs, Schulung, Ausbildungslehrgang",
        "answer": "el curso de formación",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-60fa3e86-s",
        "tag": "L2 · ES→DE",
        "prompt": "el curso de formación",
        "answer": "Trainingskurs, Schulung, Ausbildungslehrgang",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a7e18467-d",
        "tag": "L2 · DE→ES",
        "prompt": "Aus-, Fortbildung",
        "answer": "la formación",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-a7e18467-s",
        "tag": "L2 · ES→DE",
        "prompt": "la formación",
        "answer": "Aus-, Fortbildung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-eb6c6414-d",
        "tag": "L2 · DE→ES",
        "prompt": "außerschulisch",
        "answer": "extraescolar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-eb6c6414-s",
        "tag": "L2 · ES→DE",
        "prompt": "extraescolar",
        "answer": "außerschulisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9a5106ab-d",
        "tag": "L2 · DE→ES",
        "prompt": "Studentenwerk",
        "answer": "el centro de estudiantes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-9a5106ab-s",
        "tag": "L2 · ES→DE",
        "prompt": "el centro de estudiantes",
        "answer": "Studentenwerk",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c3d8bf0f-d",
        "tag": "L2 · DE→ES",
        "prompt": "unterhaltsam, entspannend",
        "answer": "recreativo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l2-c3d8bf0f-s",
        "tag": "L2 · ES→DE",
        "prompt": "recreativo/-a",
        "answer": "unterhaltsam, entspannend",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c78307fb-d",
        "tag": "L3 · DE→ES",
        "prompt": "essen",
        "answer": "comer",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c78307fb-s",
        "tag": "L3 · ES→DE",
        "prompt": "comer",
        "answer": "essen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-576a024b-d",
        "tag": "L3 · DE→ES",
        "prompt": "Abendessen",
        "answer": "la cena",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-576a024b-s",
        "tag": "L3 · ES→DE",
        "prompt": "la cena",
        "answer": "Abendessen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-30b2dff4-d",
        "tag": "L3 · DE→ES",
        "prompt": "Pizza",
        "answer": "la pizza",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-30b2dff4-s",
        "tag": "L3 · ES→DE",
        "prompt": "la pizza",
        "answer": "Pizza",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0fa069a9-d",
        "tag": "L3 · DE→ES",
        "prompt": "italienisch",
        "answer": "italiano/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0fa069a9-s",
        "tag": "L3 · ES→DE",
        "prompt": "italiano/-a",
        "answer": "italienisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c995f8ee-d",
        "tag": "L3 · DE→ES",
        "prompt": "(tief-)gefroren, tiefgekühlt",
        "answer": "congelado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c995f8ee-s",
        "tag": "L3 · ES→DE",
        "prompt": "congelado/-a",
        "answer": "(tief-)gefroren, tiefgekühlt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9fcd67cd-d",
        "tag": "L3 · DE→ES",
        "prompt": "wahrscheinlich",
        "answer": "probablemente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9fcd67cd-s",
        "tag": "L3 · ES→DE",
        "prompt": "probablemente",
        "answer": "wahrscheinlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2fda84ea-d",
        "tag": "L3 · DE→ES",
        "prompt": "Eisbergsalat",
        "answer": "la lechuga iceberg",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2fda84ea-s",
        "tag": "L3 · ES→DE",
        "prompt": "la lechuga iceberg",
        "answer": "Eisbergsalat",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ee3a49bb-d",
        "tag": "L3 · DE→ES",
        "prompt": "Aperitiv",
        "answer": "el aperitivo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ee3a49bb-s",
        "tag": "L3 · ES→DE",
        "prompt": "el aperitivo",
        "answer": "Aperitiv",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b3393a8d-d",
        "tag": "L3 · DE→ES",
        "prompt": "gesalzen, salzig",
        "answer": "salado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b3393a8d-s",
        "tag": "L3 · ES→DE",
        "prompt": "salado/-a",
        "answer": "gesalzen, salzig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-85606210-d",
        "tag": "L3 · DE→ES",
        "prompt": "Art, Sorte",
        "answer": "la especie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-85606210-s",
        "tag": "L3 · ES→DE",
        "prompt": "la especie",
        "answer": "Art, Sorte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-abebc770-d",
        "tag": "L3 · DE→ES",
        "prompt": "Kuchen, Gebäck",
        "answer": "el pastel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-abebc770-s",
        "tag": "L3 · ES→DE",
        "prompt": "el pastel",
        "answer": "Kuchen, Gebäck",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-32c851c3-d",
        "tag": "L3 · DE→ES",
        "prompt": "süß",
        "answer": "dulce",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-32c851c3-s",
        "tag": "L3 · ES→DE",
        "prompt": "dulce",
        "answer": "süß",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ce6a8c15-d",
        "tag": "L3 · DE→ES",
        "prompt": "Kartoffelomelett",
        "answer": "la tortilla de patatas",
        "distractors": [],
        "explanation": "Auch: la tortilla española"
      },
      {
        "id": "es-l3-ce6a8c15-s",
        "tag": "L3 · ES→DE",
        "prompt": "la tortilla de patatas",
        "answer": "Kartoffelomelett",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-844e8595-d",
        "tag": "L3 · DE→ES",
        "prompt": "Serviette",
        "answer": "la servilleta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-844e8595-s",
        "tag": "L3 · ES→DE",
        "prompt": "la servilleta",
        "answer": "Serviette",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6ca2b499-d",
        "tag": "L3 · DE→ES",
        "prompt": "Toilettenpapier",
        "answer": "el papel de W.C.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6ca2b499-s",
        "tag": "L3 · ES→DE",
        "prompt": "el papel de W.C.",
        "answer": "Toilettenpapier",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4e573857-d",
        "tag": "L3 · DE→ES",
        "prompt": "Käse",
        "answer": "el queso",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4e573857-s",
        "tag": "L3 · ES→DE",
        "prompt": "el queso",
        "answer": "Käse",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c0c4db13-d",
        "tag": "L3 · DE→ES",
        "prompt": "kalte Gemüsesuppe",
        "answer": "el gazpacho",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c0c4db13-s",
        "tag": "L3 · ES→DE",
        "prompt": "el gazpacho",
        "answer": "kalte Gemüsesuppe",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bf569c77-d",
        "tag": "L3 · DE→ES",
        "prompt": "Bravo! Weiter so!",
        "answer": "¡Olé!",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bf569c77-s",
        "tag": "L3 · ES→DE",
        "prompt": "¡Olé!",
        "answer": "Bravo! Weiter so!",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b25f0831-d",
        "tag": "L3 · DE→ES",
        "prompt": "wissen",
        "answer": "saber",
        "distractors": [],
        "explanation": "1. Person: yo sé"
      },
      {
        "id": "es-l3-b25f0831-s",
        "tag": "L3 · ES→DE",
        "prompt": "saber",
        "answer": "wissen",
        "distractors": [],
        "explanation": "1. Person: yo sé"
      },
      {
        "id": "es-l3-4c752359-d",
        "tag": "L3 · DE→ES",
        "prompt": "du isst es auf",
        "answer": "te lo comes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4c752359-s",
        "tag": "L3 · ES→DE",
        "prompt": "te lo comes",
        "answer": "du isst es auf",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c4baa798-d",
        "tag": "L3 · DE→ES",
        "prompt": "Sorte, Art",
        "answer": "la clase",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c4baa798-s",
        "tag": "L3 · ES→DE",
        "prompt": "la clase",
        "answer": "Sorte, Art",
        "distractors": [],
        "explanation": "Auch: Klasse"
      },
      {
        "id": "es-l3-8d289993-d",
        "tag": "L3 · DE→ES",
        "prompt": "Digestif, Verdauungstrunk",
        "answer": "el digestivo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8d289993-s",
        "tag": "L3 · ES→DE",
        "prompt": "el digestivo",
        "answer": "Digestif, Verdauungstrunk",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8f44a47a-d",
        "tag": "L3 · DE→ES",
        "prompt": "Absinth",
        "answer": "la absenta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8f44a47a-s",
        "tag": "L3 · ES→DE",
        "prompt": "la absenta",
        "answer": "Absinth",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-200f9da7-d",
        "tag": "L3 · DE→ES",
        "prompt": "Anis-Schlehen-Likör",
        "answer": "el patxaran (pacharán)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-200f9da7-s",
        "tag": "L3 · ES→DE",
        "prompt": "el patxaran (pacharán)",
        "answer": "Anis-Schlehen-Likör",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6bb806a7-d",
        "tag": "L3 · DE→ES",
        "prompt": "Jägermeister",
        "answer": "el jager",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6bb806a7-s",
        "tag": "L3 · ES→DE",
        "prompt": "el jager",
        "answer": "Jägermeister",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fc624294-d",
        "tag": "L3 · DE→ES",
        "prompt": "Mischgetränk aus Rotwein und Cola",
        "answer": "el kalimotxo (calimocho)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fc624294-s",
        "tag": "L3 · ES→DE",
        "prompt": "el kalimotxo (calimocho)",
        "answer": "Mischgetränk aus Rotwein und Cola",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ec1b0fa3-d",
        "tag": "L3 · DE→ES",
        "prompt": "Avocado-Dip",
        "answer": "el guacamole",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ec1b0fa3-s",
        "tag": "L3 · ES→DE",
        "prompt": "el guacamole",
        "answer": "Avocado-Dip",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-131a5b7b-d",
        "tag": "L3 · DE→ES",
        "prompt": "orientalischer Kichererbsendip",
        "answer": "el hummus",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-131a5b7b-s",
        "tag": "L3 · ES→DE",
        "prompt": "el hummus",
        "answer": "orientalischer Kichererbsendip",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-581e857d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Wasser",
        "answer": "el agua",
        "distractors": [],
        "explanation": "feminines Substantiv (trotz el)"
      },
      {
        "id": "es-l3-581e857d-s",
        "tag": "L3 · ES→DE",
        "prompt": "el agua",
        "answer": "Wasser",
        "distractors": [],
        "explanation": "feminines Substantiv (trotz el)"
      },
      {
        "id": "es-l3-05738e59-d",
        "tag": "L3 · DE→ES",
        "prompt": "luftgetrocknete, salamiartige Hartwurst",
        "answer": "el salchichón",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-05738e59-s",
        "tag": "L3 · ES→DE",
        "prompt": "el salchichón",
        "answer": "luftgetrocknete, salamiartige Hartwurst",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4a1ab85e-d",
        "tag": "L3 · DE→ES",
        "prompt": "Hartwurst mit Edelschimmel-Haut",
        "answer": "el fuet",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4a1ab85e-s",
        "tag": "L3 · ES→DE",
        "prompt": "el fuet",
        "answer": "Hartwurst mit Edelschimmel-Haut",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e6b56f6e-d",
        "tag": "L3 · DE→ES",
        "prompt": "Paprikawurst",
        "answer": "el chorizo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e6b56f6e-s",
        "tag": "L3 · ES→DE",
        "prompt": "el chorizo",
        "answer": "Paprikawurst",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-de3d9941-d",
        "tag": "L3 · DE→ES",
        "prompt": "ein wahrer Mythos, legendär",
        "answer": "mitiquérrimo/-a",
        "distractors": [],
        "explanation": "umgangssprachlich"
      },
      {
        "id": "es-l3-de3d9941-s",
        "tag": "L3 · ES→DE",
        "prompt": "mitiquérrimo/-a",
        "answer": "ein wahrer Mythos, legendär",
        "distractors": [],
        "explanation": "umgangssprachlich"
      },
      {
        "id": "es-l3-a0fca0b6-d",
        "tag": "L3 · DE→ES",
        "prompt": "Baguette",
        "answer": "la baguette (baguete)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a0fca0b6-s",
        "tag": "L3 · ES→DE",
        "prompt": "la baguette (baguete)",
        "answer": "Baguette",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-dc659093-d",
        "tag": "L3 · DE→ES",
        "prompt": "Soße",
        "answer": "la salsa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-dc659093-s",
        "tag": "L3 · ES→DE",
        "prompt": "la salsa",
        "answer": "Soße",
        "distractors": [],
        "explanation": "Auch: Salsa (Musikform und Tanz)"
      },
      {
        "id": "es-l3-7f3ed142-d",
        "tag": "L3 · DE→ES",
        "prompt": "Avocado",
        "answer": "el aguacate",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7f3ed142-s",
        "tag": "L3 · ES→DE",
        "prompt": "el aguacate",
        "answer": "Avocado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f56b5ce8-d",
        "tag": "L3 · DE→ES",
        "prompt": "Tomate",
        "answer": "el tomate",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f56b5ce8-s",
        "tag": "L3 · ES→DE",
        "prompt": "el tomate",
        "answer": "Tomate",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c868c22b-d",
        "tag": "L3 · DE→ES",
        "prompt": "Zwiebel",
        "answer": "la cebolla",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c868c22b-s",
        "tag": "L3 · ES→DE",
        "prompt": "la cebolla",
        "answer": "Zwiebel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f236e334-d",
        "tag": "L3 · DE→ES",
        "prompt": "Chili",
        "answer": "el chile",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f236e334-s",
        "tag": "L3 · ES→DE",
        "prompt": "el chile",
        "answer": "Chili",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-33cd9e9f-d",
        "tag": "L3 · DE→ES",
        "prompt": "Suppe",
        "answer": "la sopa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-33cd9e9f-s",
        "tag": "L3 · ES→DE",
        "prompt": "la sopa",
        "answer": "Suppe",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-13a03256-d",
        "tag": "L3 · DE→ES",
        "prompt": "kalt",
        "answer": "frío/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-13a03256-s",
        "tag": "L3 · ES→DE",
        "prompt": "frío/-a",
        "answer": "kalt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0b8cf937-d",
        "tag": "L3 · DE→ES",
        "prompt": "Gurke",
        "answer": "el pepino",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0b8cf937-s",
        "tag": "L3 · ES→DE",
        "prompt": "el pepino",
        "answer": "Gurke",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-73ad57f3-d",
        "tag": "L3 · DE→ES",
        "prompt": "Spezialität",
        "answer": "la especialidad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-73ad57f3-s",
        "tag": "L3 · ES→DE",
        "prompt": "la especialidad",
        "answer": "Spezialität",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e36f91b5-d",
        "tag": "L3 · DE→ES",
        "prompt": "Kartoffel",
        "answer": "la patata",
        "distractors": [],
        "explanation": "Auch: la papa"
      },
      {
        "id": "es-l3-e36f91b5-s",
        "tag": "L3 · ES→DE",
        "prompt": "la patata",
        "answer": "Kartoffel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7b51fb0a-d",
        "tag": "L3 · DE→ES",
        "prompt": "Ei",
        "answer": "el huevo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7b51fb0a-s",
        "tag": "L3 · ES→DE",
        "prompt": "el huevo",
        "answer": "Ei",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9178fff6-d",
        "tag": "L3 · DE→ES",
        "prompt": "Getränk",
        "answer": "la bebida",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9178fff6-s",
        "tag": "L3 · ES→DE",
        "prompt": "la bebida",
        "answer": "Getränk",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b622e412-d",
        "tag": "L3 · DE→ES",
        "prompt": "Rotwein",
        "answer": "el vino tinto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b622e412-s",
        "tag": "L3 · ES→DE",
        "prompt": "el vino tinto",
        "answer": "Rotwein",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-26d5ce66-d",
        "tag": "L3 · DE→ES",
        "prompt": "(koffeinhaltige) Limonade",
        "answer": "la cola",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-26d5ce66-s",
        "tag": "L3 · ES→DE",
        "prompt": "la cola",
        "answer": "(koffeinhaltige) Limonade",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2ef464b1-d",
        "tag": "L3 · DE→ES",
        "prompt": "Zucker",
        "answer": "el azúcar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2ef464b1-s",
        "tag": "L3 · ES→DE",
        "prompt": "el azúcar",
        "answer": "Zucker",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ce514f69-d",
        "tag": "L3 · DE→ES",
        "prompt": "Wie oft?",
        "answer": "¿Con qué frecuencia?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ce514f69-s",
        "tag": "L3 · ES→DE",
        "prompt": "¿Con qué frecuencia?",
        "answer": "Wie oft?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8dc99e83-d",
        "tag": "L3 · DE→ES",
        "prompt": "jede Woche",
        "answer": "todas las semanas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8dc99e83-s",
        "tag": "L3 · ES→DE",
        "prompt": "todas las semanas",
        "answer": "jede Woche",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-567fa0e1-d",
        "tag": "L3 · DE→ES",
        "prompt": "einmal im Monat",
        "answer": "una vez al mes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-567fa0e1-s",
        "tag": "L3 · ES→DE",
        "prompt": "una vez al mes",
        "answer": "einmal im Monat",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-52cc10d8-d",
        "tag": "L3 · DE→ES",
        "prompt": "zweimal im Monat",
        "answer": "dos veces al mes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-52cc10d8-s",
        "tag": "L3 · ES→DE",
        "prompt": "dos veces al mes",
        "answer": "zweimal im Monat",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f9677319-d",
        "tag": "L3 · DE→ES",
        "prompt": "Restaurant",
        "answer": "el restaurante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f9677319-s",
        "tag": "L3 · ES→DE",
        "prompt": "el restaurante",
        "answer": "Restaurant",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-86bf1f3a-d",
        "tag": "L3 · DE→ES",
        "prompt": "reservieren",
        "answer": "reservar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-86bf1f3a-s",
        "tag": "L3 · ES→DE",
        "prompt": "reservar",
        "answer": "reservieren",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7815bf8a-d",
        "tag": "L3 · DE→ES",
        "prompt": "Tisch",
        "answer": "la mesa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7815bf8a-s",
        "tag": "L3 · ES→DE",
        "prompt": "la mesa",
        "answer": "Tisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4a18c24b-d",
        "tag": "L3 · DE→ES",
        "prompt": "kaufen",
        "answer": "comprar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4a18c24b-s",
        "tag": "L3 · ES→DE",
        "prompt": "comprar",
        "answer": "kaufen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2efff2bb-d",
        "tag": "L3 · DE→ES",
        "prompt": "Fertigprodukt, Fertiggericht",
        "answer": "algo preparado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2efff2bb-s",
        "tag": "L3 · ES→DE",
        "prompt": "algo preparado",
        "answer": "Fertigprodukt, Fertiggericht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e0e8fa76-d",
        "tag": "L3 · DE→ES",
        "prompt": "jede/r/s",
        "answer": "cada (uno/-a)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e0e8fa76-s",
        "tag": "L3 · ES→DE",
        "prompt": "cada (uno/-a)",
        "answer": "jede/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5457ffa1-d",
        "tag": "L3 · DE→ES",
        "prompt": "Speise, Gericht",
        "answer": "el plato",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5457ffa1-s",
        "tag": "L3 · ES→DE",
        "prompt": "el plato",
        "answer": "Speise, Gericht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-543f0c75-d",
        "tag": "L3 · DE→ES",
        "prompt": "Ordnung, Reihenfolge",
        "answer": "el orden",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-543f0c75-s",
        "tag": "L3 · ES→DE",
        "prompt": "el orden",
        "answer": "Ordnung, Reihenfolge",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-283f1852-d",
        "tag": "L3 · DE→ES",
        "prompt": "Kühlschrank",
        "answer": "la nevera",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-283f1852-s",
        "tag": "L3 · ES→DE",
        "prompt": "la nevera",
        "answer": "Kühlschrank",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9df09180-d",
        "tag": "L3 · DE→ES",
        "prompt": "ordnen, aufräumen",
        "answer": "ordenar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9df09180-s",
        "tag": "L3 · ES→DE",
        "prompt": "ordenar",
        "answer": "ordnen, aufräumen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7b6c06b6-d",
        "tag": "L3 · DE→ES",
        "prompt": "Trick, Kniff",
        "answer": "el truco",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7b6c06b6-s",
        "tag": "L3 · ES→DE",
        "prompt": "el truco",
        "answer": "Trick, Kniff",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a82c3a3a-d",
        "tag": "L3 · DE→ES",
        "prompt": "Emanzipierte/r",
        "answer": "el / la emancipado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a82c3a3a-s",
        "tag": "L3 · ES→DE",
        "prompt": "el / la emancipado/-a",
        "answer": "Emanzipierte/r",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b4361426-d",
        "tag": "L3 · DE→ES",
        "prompt": "Einmachglas",
        "answer": "el tarro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b4361426-s",
        "tag": "L3 · ES→DE",
        "prompt": "el tarro",
        "answer": "Einmachglas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0c76dd02-d",
        "tag": "L3 · DE→ES",
        "prompt": "klein",
        "answer": "pequeño/-a",
        "distractors": [],
        "explanation": "Auch: bajo/-a"
      },
      {
        "id": "es-l3-0c76dd02-s",
        "tag": "L3 · ES→DE",
        "prompt": "pequeño/-a",
        "answer": "klein",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9afd73c5-d",
        "tag": "L3 · DE→ES",
        "prompt": "Fertiggericht",
        "answer": "la comida preparada",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9afd73c5-s",
        "tag": "L3 · ES→DE",
        "prompt": "la comida preparada",
        "answer": "Fertiggericht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0c92c1b9-d",
        "tag": "L3 · DE→ES",
        "prompt": "Milchprodukt",
        "answer": "el (producto) lácteo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0c92c1b9-s",
        "tag": "L3 · ES→DE",
        "prompt": "el (producto) lácteo",
        "answer": "Milchprodukt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3b8bfa76-d",
        "tag": "L3 · DE→ES",
        "prompt": "Wurstwaren",
        "answer": "los embutidos",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3b8bfa76-s",
        "tag": "L3 · ES→DE",
        "prompt": "los embutidos",
        "answer": "Wurstwaren",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bdc45026-d",
        "tag": "L3 · DE→ES",
        "prompt": "Fisch",
        "answer": "el pescado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bdc45026-s",
        "tag": "L3 · ES→DE",
        "prompt": "el pescado",
        "answer": "Fisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-38b44982-d",
        "tag": "L3 · DE→ES",
        "prompt": "Obst, Frucht",
        "answer": "la fruta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-38b44982-s",
        "tag": "L3 · ES→DE",
        "prompt": "la fruta",
        "answer": "Obst, Frucht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9e18197d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Gemüse",
        "answer": "la verdura",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9e18197d-s",
        "tag": "L3 · ES→DE",
        "prompt": "la verdura",
        "answer": "Gemüse",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a50f5f4c-d",
        "tag": "L3 · DE→ES",
        "prompt": "innere/r/s",
        "answer": "interior",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a50f5f4c-s",
        "tag": "L3 · ES→DE",
        "prompt": "interior",
        "answer": "innere/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fe06f7d1-d",
        "tag": "L3 · DE→ES",
        "prompt": "Marmelade",
        "answer": "la mermelada",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fe06f7d1-s",
        "tag": "L3 · ES→DE",
        "prompt": "la mermelada",
        "answer": "Marmelade",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fa136062-d",
        "tag": "L3 · DE→ES",
        "prompt": "Butter",
        "answer": "la mantequilla",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fa136062-s",
        "tag": "L3 · ES→DE",
        "prompt": "la mantequilla",
        "answer": "Butter",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f28c00c0-d",
        "tag": "L3 · DE→ES",
        "prompt": "Erfrischungsgetränk",
        "answer": "el refresco",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f28c00c0-s",
        "tag": "L3 · ES→DE",
        "prompt": "el refresco",
        "answer": "Erfrischungsgetränk",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a30cf605-d",
        "tag": "L3 · DE→ES",
        "prompt": "Milch",
        "answer": "la leche",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a30cf605-s",
        "tag": "L3 · ES→DE",
        "prompt": "la leche",
        "answer": "Milch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-46d2bb23-d",
        "tag": "L3 · DE→ES",
        "prompt": "Tür",
        "answer": "la puerta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-46d2bb23-s",
        "tag": "L3 · ES→DE",
        "prompt": "la puerta",
        "answer": "Tür",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fee01bb3-d",
        "tag": "L3 · DE→ES",
        "prompt": "Thunfisch",
        "answer": "el atún",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fee01bb3-s",
        "tag": "L3 · ES→DE",
        "prompt": "el atún",
        "answer": "Thunfisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d1d0c81c-d",
        "tag": "L3 · DE→ES",
        "prompt": "Kopfsalat",
        "answer": "la lechuga",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d1d0c81c-s",
        "tag": "L3 · ES→DE",
        "prompt": "la lechuga",
        "answer": "Kopfsalat",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-dec068a5-d",
        "tag": "L3 · DE→ES",
        "prompt": "Krabbe, Garnele",
        "answer": "la gamba",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-dec068a5-s",
        "tag": "L3 · ES→DE",
        "prompt": "la gamba",
        "answer": "Krabbe, Garnele",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-43f63339-d",
        "tag": "L3 · DE→ES",
        "prompt": "Brot",
        "answer": "el pan",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-43f63339-s",
        "tag": "L3 · ES→DE",
        "prompt": "el pan",
        "answer": "Brot",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-92e0be2b-d",
        "tag": "L3 · DE→ES",
        "prompt": "Orange",
        "answer": "la naranja",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-92e0be2b-s",
        "tag": "L3 · ES→DE",
        "prompt": "la naranja",
        "answer": "Orange",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-dcd6e5e1-d",
        "tag": "L3 · DE→ES",
        "prompt": "Banane",
        "answer": "el plátano",
        "distractors": [],
        "explanation": "Auch: el banano"
      },
      {
        "id": "es-l3-dcd6e5e1-s",
        "tag": "L3 · ES→DE",
        "prompt": "el plátano",
        "answer": "Banane",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-448042c8-d",
        "tag": "L3 · DE→ES",
        "prompt": "Hähnchen",
        "answer": "el pollo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-448042c8-s",
        "tag": "L3 · ES→DE",
        "prompt": "el pollo",
        "answer": "Hähnchen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2d4809cf-d",
        "tag": "L3 · DE→ES",
        "prompt": "Schwein",
        "answer": "el cerdo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2d4809cf-s",
        "tag": "L3 · ES→DE",
        "prompt": "el cerdo",
        "answer": "Schwein",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-55dac1ab-d",
        "tag": "L3 · DE→ES",
        "prompt": "Joghurt",
        "answer": "el yogur",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-55dac1ab-s",
        "tag": "L3 · ES→DE",
        "prompt": "el yogur",
        "answer": "Joghurt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3b710520-d",
        "tag": "L3 · DE→ES",
        "prompt": "Apfel",
        "answer": "la manzana",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3b710520-s",
        "tag": "L3 · ES→DE",
        "prompt": "la manzana",
        "answer": "Apfel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b3241243-d",
        "tag": "L3 · DE→ES",
        "prompt": "Schinken",
        "answer": "el jamón",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b3241243-s",
        "tag": "L3 · ES→DE",
        "prompt": "el jamón",
        "answer": "Schinken",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-70014323-d",
        "tag": "L3 · DE→ES",
        "prompt": "(Frucht-)Saft",
        "answer": "el zumo (de fruta)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-70014323-s",
        "tag": "L3 · ES→DE",
        "prompt": "el zumo (de fruta)",
        "answer": "(Frucht-)Saft",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ee91a804-d",
        "tag": "L3 · DE→ES",
        "prompt": "Nudeln, Teigwaren",
        "answer": "la pasta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ee91a804-s",
        "tag": "L3 · ES→DE",
        "prompt": "la pasta",
        "answer": "Nudeln, Teigwaren",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-135c5e0e-d",
        "tag": "L3 · DE→ES",
        "prompt": "Getreide(flocken), Müsli",
        "answer": "los cereales",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-135c5e0e-s",
        "tag": "L3 · ES→DE",
        "prompt": "los cereales",
        "answer": "Getreide(flocken), Müsli",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-edccc07d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Bier",
        "answer": "la cerveza",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-edccc07d-s",
        "tag": "L3 · ES→DE",
        "prompt": "la cerveza",
        "answer": "Bier",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5aeadd91-d",
        "tag": "L3 · DE→ES",
        "prompt": "Produkt",
        "answer": "el producto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5aeadd91-s",
        "tag": "L3 · ES→DE",
        "prompt": "el producto",
        "answer": "Produkt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-21aa74ac-d",
        "tag": "L3 · DE→ES",
        "prompt": "ihn / es / sie",
        "answer": "lo / la / los / las",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-21aa74ac-s",
        "tag": "L3 · ES→DE",
        "prompt": "lo / la / los / las",
        "answer": "ihn / es / sie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-916db9fc-d",
        "tag": "L3 · DE→ES",
        "prompt": "Knoblauch",
        "answer": "el ajo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-916db9fc-s",
        "tag": "L3 · ES→DE",
        "prompt": "el ajo",
        "answer": "Knoblauch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3d16e6a6-d",
        "tag": "L3 · DE→ES",
        "prompt": "trinken, essen",
        "answer": "tomar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3d16e6a6-s",
        "tag": "L3 · ES→DE",
        "prompt": "tomar",
        "answer": "trinken, essen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-039d1d23-d",
        "tag": "L3 · DE→ES",
        "prompt": "reif",
        "answer": "maduro/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-039d1d23-s",
        "tag": "L3 · ES→DE",
        "prompt": "maduro/-a",
        "answer": "reif",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6b3fdb2d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Alkohol",
        "answer": "el alcohol",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6b3fdb2d-s",
        "tag": "L3 · ES→DE",
        "prompt": "el alcohol",
        "answer": "Alkohol",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ccaad087-d",
        "tag": "L3 · DE→ES",
        "prompt": "jeden Tag",
        "answer": "todos los días",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ccaad087-s",
        "tag": "L3 · ES→DE",
        "prompt": "todos los días",
        "answer": "jeden Tag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c8868cc4-d",
        "tag": "L3 · DE→ES",
        "prompt": "einmal am Tag",
        "answer": "una vez al día",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c8868cc4-s",
        "tag": "L3 · ES→DE",
        "prompt": "una vez al día",
        "answer": "einmal am Tag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c9161145-d",
        "tag": "L3 · DE→ES",
        "prompt": "zwei- bis dreimal pro Woche",
        "answer": "2–3 veces a la semana",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c9161145-s",
        "tag": "L3 · ES→DE",
        "prompt": "2–3 veces a la semana",
        "answer": "zwei- bis dreimal pro Woche",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-527ce6b6-d",
        "tag": "L3 · DE→ES",
        "prompt": "selten",
        "answer": "pocas veces",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-527ce6b6-s",
        "tag": "L3 · ES→DE",
        "prompt": "pocas veces",
        "answer": "selten",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-777a967c-d",
        "tag": "L3 · DE→ES",
        "prompt": "nie",
        "answer": "nunca",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-777a967c-s",
        "tag": "L3 · ES→DE",
        "prompt": "nunca",
        "answer": "nie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ab8ed7c3-d",
        "tag": "L3 · DE→ES",
        "prompt": "frühstücken",
        "answer": "desayunar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ab8ed7c3-s",
        "tag": "L3 · ES→DE",
        "prompt": "desayunar",
        "answer": "frühstücken",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f3f068b8-d",
        "tag": "L3 · DE→ES",
        "prompt": "trinken",
        "answer": "beber",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f3f068b8-s",
        "tag": "L3 · ES→DE",
        "prompt": "beber",
        "answer": "trinken",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3300bf8a-d",
        "tag": "L3 · DE→ES",
        "prompt": "zu Abend essen",
        "answer": "cenar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3300bf8a-s",
        "tag": "L3 · ES→DE",
        "prompt": "cenar",
        "answer": "zu Abend essen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-85bedaa4-d",
        "tag": "L3 · DE→ES",
        "prompt": "vor dem Computer / dem Fernseher",
        "answer": "delante del ordenador / de la tele",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-85bedaa4-s",
        "tag": "L3 · ES→DE",
        "prompt": "delante del ordenador / de la tele",
        "answer": "vor dem Computer / dem Fernseher",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-33eed1ec-d",
        "tag": "L3 · DE→ES",
        "prompt": "Tiefkühlkost",
        "answer": "la comida congelada",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-33eed1ec-s",
        "tag": "L3 · ES→DE",
        "prompt": "la comida congelada",
        "answer": "Tiefkühlkost",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5c023cd0-d",
        "tag": "L3 · DE→ES",
        "prompt": "bevorzugen",
        "answer": "preferir",
        "distractors": [],
        "explanation": "unregelmäßig (ie)"
      },
      {
        "id": "es-l3-5c023cd0-s",
        "tag": "L3 · ES→DE",
        "prompt": "preferir",
        "answer": "bevorzugen",
        "distractors": [],
        "explanation": "unregelmäßig (ie)"
      },
      {
        "id": "es-l3-3585924f-d",
        "tag": "L3 · DE→ES",
        "prompt": "können, dürfen",
        "answer": "poder",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l3-3585924f-s",
        "tag": "L3 · ES→DE",
        "prompt": "poder",
        "answer": "können, dürfen",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l3-16571afd-d",
        "tag": "L3 · DE→ES",
        "prompt": "vegetarisch",
        "answer": "vegetariano/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-16571afd-s",
        "tag": "L3 · ES→DE",
        "prompt": "vegetariano/-a",
        "answer": "vegetarisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2004e0eb-d",
        "tag": "L3 · DE→ES",
        "prompt": "vegan",
        "answer": "vegano/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2004e0eb-s",
        "tag": "L3 · ES→DE",
        "prompt": "vegano/-a",
        "answer": "vegan",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b8a77c97-d",
        "tag": "L3 · DE→ES",
        "prompt": "etw. zu tun pflegen",
        "answer": "soler + inf",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l3-b8a77c97-s",
        "tag": "L3 · ES→DE",
        "prompt": "soler + inf",
        "answer": "etw. zu tun pflegen",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l3-654f2b9a-d",
        "tag": "L3 · DE→ES",
        "prompt": "Euro",
        "answer": "el euro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-654f2b9a-s",
        "tag": "L3 · ES→DE",
        "prompt": "el euro",
        "answer": "Euro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-776e9b0c-d",
        "tag": "L3 · DE→ES",
        "prompt": "morgens, am Morgen",
        "answer": "por la mañana",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-776e9b0c-s",
        "tag": "L3 · ES→DE",
        "prompt": "por la mañana",
        "answer": "morgens, am Morgen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-acbd6b79-d",
        "tag": "L3 · DE→ES",
        "prompt": "Essgewohnheiten",
        "answer": "los hábitos de comida",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-acbd6b79-s",
        "tag": "L3 · ES→DE",
        "prompt": "los hábitos de comida",
        "answer": "Essgewohnheiten",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d001106f-d",
        "tag": "L3 · DE→ES",
        "prompt": "Art",
        "answer": "el tipo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d001106f-s",
        "tag": "L3 · ES→DE",
        "prompt": "el tipo",
        "answer": "Art",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c874d94c-d",
        "tag": "L3 · DE→ES",
        "prompt": "Geld",
        "answer": "el dinero",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c874d94c-s",
        "tag": "L3 · ES→DE",
        "prompt": "el dinero",
        "answer": "Geld",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-98612fc5-d",
        "tag": "L3 · DE→ES",
        "prompt": "ausgeben",
        "answer": "gastar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-98612fc5-s",
        "tag": "L3 · ES→DE",
        "prompt": "gastar",
        "answer": "ausgeben",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e75bf043-d",
        "tag": "L3 · DE→ES",
        "prompt": "helfen",
        "answer": "ayudar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e75bf043-s",
        "tag": "L3 · ES→DE",
        "prompt": "ayudar",
        "answer": "helfen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e0e73cd0-d",
        "tag": "L3 · DE→ES",
        "prompt": "belegtes Brötchen",
        "answer": "el bocadillo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e0e73cd0-s",
        "tag": "L3 · ES→DE",
        "prompt": "el bocadillo",
        "answer": "belegtes Brötchen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b6a279a0-d",
        "tag": "L3 · DE→ES",
        "prompt": "Hackfleischbällchen",
        "answer": "la albóndiga",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b6a279a0-s",
        "tag": "L3 · ES→DE",
        "prompt": "la albóndiga",
        "answer": "Hackfleischbällchen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bcf9dd9d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Apfelkuchen",
        "answer": "la tarta de manzana",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bcf9dd9d-s",
        "tag": "L3 · ES→DE",
        "prompt": "la tarta de manzana",
        "answer": "Apfelkuchen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b5b90492-d",
        "tag": "L3 · DE→ES",
        "prompt": "gemischter Salat",
        "answer": "la ensalada mixta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b5b90492-s",
        "tag": "L3 · ES→DE",
        "prompt": "la ensalada mixta",
        "answer": "gemischter Salat",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-51e25b36-d",
        "tag": "L3 · DE→ES",
        "prompt": "paniertes Schnitzel",
        "answer": "el filete empanado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-51e25b36-s",
        "tag": "L3 · ES→DE",
        "prompt": "el filete empanado",
        "answer": "paniertes Schnitzel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6aa1e108-d",
        "tag": "L3 · DE→ES",
        "prompt": "Kichererbsen",
        "answer": "el garbanzo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6aa1e108-s",
        "tag": "L3 · ES→DE",
        "prompt": "el garbanzo",
        "answer": "Kichererbsen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f18ef1b8-d",
        "tag": "L3 · DE→ES",
        "prompt": "Spinat",
        "answer": "la espinaca",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f18ef1b8-s",
        "tag": "L3 · ES→DE",
        "prompt": "la espinaca",
        "answer": "Spinat",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0ed496ab-d",
        "tag": "L3 · DE→ES",
        "prompt": "Seehecht",
        "answer": "la merluza",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0ed496ab-s",
        "tag": "L3 · ES→DE",
        "prompt": "la merluza",
        "answer": "Seehecht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ac78b340-d",
        "tag": "L3 · DE→ES",
        "prompt": "spanisches Reisgericht",
        "answer": "la paella",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ac78b340-s",
        "tag": "L3 · ES→DE",
        "prompt": "la paella",
        "answer": "spanisches Reisgericht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e3bddde6-d",
        "tag": "L3 · DE→ES",
        "prompt": "Art Karamellpudding",
        "answer": "el flan",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e3bddde6-s",
        "tag": "L3 · ES→DE",
        "prompt": "el flan",
        "answer": "Art Karamellpudding",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-599b6521-d",
        "tag": "L3 · DE→ES",
        "prompt": "warm, heiß",
        "answer": "caliente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-599b6521-s",
        "tag": "L3 · ES→DE",
        "prompt": "caliente",
        "answer": "warm, heiß",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-1dd2a0ce-d",
        "tag": "L3 · DE→ES",
        "prompt": "Nachtisch",
        "answer": "el postre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-1dd2a0ce-s",
        "tag": "L3 · ES→DE",
        "prompt": "el postre",
        "answer": "Nachtisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-77f1fbb1-d",
        "tag": "L3 · DE→ES",
        "prompt": "zubereiten",
        "answer": "preparar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-77f1fbb1-s",
        "tag": "L3 · ES→DE",
        "prompt": "preparar",
        "answer": "zubereiten",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-32eb336f-d",
        "tag": "L3 · DE→ES",
        "prompt": "Das ist mit Obst.",
        "answer": "Lleva fruta.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-32eb336f-s",
        "tag": "L3 · ES→DE",
        "prompt": "Lleva fruta.",
        "answer": "Das ist mit Obst.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-1fda5f6d-d",
        "tag": "L3 · DE→ES",
        "prompt": "enthalten",
        "answer": "llevar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-1fda5f6d-s",
        "tag": "L3 · ES→DE",
        "prompt": "llevar",
        "answer": "enthalten",
        "distractors": [],
        "explanation": "Auch: tragen"
      },
      {
        "id": "es-l3-7fb3ed85-d",
        "tag": "L3 · DE→ES",
        "prompt": "Hauptspeise, zweiter Gang",
        "answer": "el segundo (plato)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7fb3ed85-s",
        "tag": "L3 · ES→DE",
        "prompt": "el segundo (plato)",
        "answer": "Hauptspeise, zweiter Gang",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4735e593-d",
        "tag": "L3 · DE→ES",
        "prompt": "Reis",
        "answer": "el arroz",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4735e593-s",
        "tag": "L3 · ES→DE",
        "prompt": "el arroz",
        "answer": "Reis",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-773bb8b2-d",
        "tag": "L3 · DE→ES",
        "prompt": "ein/e andere/r/s",
        "answer": "otro/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-773bb8b2-s",
        "tag": "L3 · ES→DE",
        "prompt": "otro/-a",
        "answer": "ein/e andere/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fc8b84f1-d",
        "tag": "L3 · DE→ES",
        "prompt": "Zutat",
        "answer": "el ingrediente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fc8b84f1-s",
        "tag": "L3 · ES→DE",
        "prompt": "el ingrediente",
        "answer": "Zutat",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d1758de6-d",
        "tag": "L3 · DE→ES",
        "prompt": "Schmorgericht; Eintopf",
        "answer": "el guiso",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d1758de6-s",
        "tag": "L3 · ES→DE",
        "prompt": "el guiso",
        "answer": "Schmorgericht; Eintopf",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d9e0a504-d",
        "tag": "L3 · DE→ES",
        "prompt": "Ursprung, Herkunft",
        "answer": "el origen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d9e0a504-s",
        "tag": "L3 · ES→DE",
        "prompt": "el origen",
        "answer": "Ursprung, Herkunft",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0256759c-d",
        "tag": "L3 · DE→ES",
        "prompt": "Einnahmeweise",
        "answer": "el modo de tomarlo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0256759c-s",
        "tag": "L3 · ES→DE",
        "prompt": "el modo de tomarlo",
        "answer": "Einnahmeweise",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bd694038-d",
        "tag": "L3 · DE→ES",
        "prompt": "scharf",
        "answer": "picante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bd694038-s",
        "tag": "L3 · ES→DE",
        "prompt": "picante",
        "answer": "scharf",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c939a001-d",
        "tag": "L3 · DE→ES",
        "prompt": "Landkarte",
        "answer": "el mapa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c939a001-s",
        "tag": "L3 · ES→DE",
        "prompt": "el mapa",
        "answer": "Landkarte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-79bb907c-d",
        "tag": "L3 · DE→ES",
        "prompt": "oft",
        "answer": "muchas veces",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-79bb907c-s",
        "tag": "L3 · ES→DE",
        "prompt": "muchas veces",
        "answer": "oft",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-39b46a55-d",
        "tag": "L3 · DE→ES",
        "prompt": "viel/e",
        "answer": "mucho/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-39b46a55-s",
        "tag": "L3 · ES→DE",
        "prompt": "mucho/-a",
        "answer": "viel/e",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-96879f93-d",
        "tag": "L3 · DE→ES",
        "prompt": "schmecken",
        "answer": "gustar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-96879f93-s",
        "tag": "L3 · ES→DE",
        "prompt": "gustar",
        "answer": "schmecken",
        "distractors": [],
        "explanation": "Auch: gefallen"
      },
      {
        "id": "es-l3-94a2c27a-d",
        "tag": "L3 · DE→ES",
        "prompt": "teuer",
        "answer": "caro/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-94a2c27a-s",
        "tag": "L3 · ES→DE",
        "prompt": "caro/-a",
        "answer": "teuer",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-09946313-d",
        "tag": "L3 · DE→ES",
        "prompt": "Das ist gesund.",
        "answer": "Es bueno/-a para la salud.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-09946313-s",
        "tag": "L3 · ES→DE",
        "prompt": "Es bueno/-a para la salud.",
        "answer": "Das ist gesund.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-68f87754-d",
        "tag": "L3 · DE→ES",
        "prompt": "(Universitäts-)Mensa",
        "answer": "el comedor universitario",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-68f87754-s",
        "tag": "L3 · ES→DE",
        "prompt": "el comedor universitario",
        "answer": "(Universitäts-)Mensa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e9a268ca-d",
        "tag": "L3 · DE→ES",
        "prompt": "Hunger",
        "answer": "el hambre",
        "distractors": [],
        "explanation": "feminines Substantiv (trotz el)"
      },
      {
        "id": "es-l3-e9a268ca-s",
        "tag": "L3 · ES→DE",
        "prompt": "el hambre",
        "answer": "Hunger",
        "distractors": [],
        "explanation": "feminines Substantiv (trotz el)"
      },
      {
        "id": "es-l3-c06cf12b-d",
        "tag": "L3 · DE→ES",
        "prompt": "Vegetarier/in",
        "answer": "el / la vegetariano/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c06cf12b-s",
        "tag": "L3 · ES→DE",
        "prompt": "el / la vegetariano/-a",
        "answer": "Vegetarier/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4262474d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Dienstag",
        "answer": "el martes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4262474d-s",
        "tag": "L3 · ES→DE",
        "prompt": "el martes",
        "answer": "Dienstag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ff3171e7-d",
        "tag": "L3 · DE→ES",
        "prompt": "September",
        "answer": "(el) septiembre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ff3171e7-s",
        "tag": "L3 · ES→DE",
        "prompt": "(el) septiembre",
        "answer": "September",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-39198bb7-d",
        "tag": "L3 · DE→ES",
        "prompt": "Speisekarte; Menü",
        "answer": "el menú",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-39198bb7-s",
        "tag": "L3 · ES→DE",
        "prompt": "el menú",
        "answer": "Speisekarte; Menü",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8b9d2874-d",
        "tag": "L3 · DE→ES",
        "prompt": "Vorspeise, erster Gang",
        "answer": "el primero",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8b9d2874-s",
        "tag": "L3 · ES→DE",
        "prompt": "el primero",
        "answer": "Vorspeise, erster Gang",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-29b126a8-d",
        "tag": "L3 · DE→ES",
        "prompt": "Tagesessen, -gericht",
        "answer": "el plato del día",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-29b126a8-s",
        "tag": "L3 · ES→DE",
        "prompt": "el plato del día",
        "answer": "Tagesessen, -gericht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5e090378-d",
        "tag": "L3 · DE→ES",
        "prompt": "Brot, Getränk und Nachtisch inbegriffen.",
        "answer": "Incluye pan, bebida y postre.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5e090378-s",
        "tag": "L3 · ES→DE",
        "prompt": "Incluye pan, bebida y postre.",
        "answer": "Brot, Getränk und Nachtisch inbegriffen.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3e2dcf60-d",
        "tag": "L3 · DE→ES",
        "prompt": "Spaghetti",
        "answer": "los espaguetis",
        "distractors": [],
        "explanation": "nur Plural"
      },
      {
        "id": "es-l3-3e2dcf60-s",
        "tag": "L3 · ES→DE",
        "prompt": "los espaguetis",
        "answer": "Spaghetti",
        "distractors": [],
        "explanation": "nur Plural"
      },
      {
        "id": "es-l3-7e4a2de4-d",
        "tag": "L3 · DE→ES",
        "prompt": "in Cidre",
        "answer": "a la sidra",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7e4a2de4-s",
        "tag": "L3 · ES→DE",
        "prompt": "a la sidra",
        "answer": "in Cidre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5784a539-d",
        "tag": "L3 · DE→ES",
        "prompt": "Brat-",
        "answer": "al horno",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5784a539-s",
        "tag": "L3 · ES→DE",
        "prompt": "al horno",
        "answer": "Brat-",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9ec7431d-d",
        "tag": "L3 · DE→ES",
        "prompt": "(Speise-)Öl",
        "answer": "el aceite",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9ec7431d-s",
        "tag": "L3 · ES→DE",
        "prompt": "el aceite",
        "answer": "(Speise-)Öl",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e54560e9-d",
        "tag": "L3 · DE→ES",
        "prompt": "Kartoffelomelett",
        "answer": "la tortilla española",
        "distractors": [],
        "explanation": "Auch: la tortilla de patatas"
      },
      {
        "id": "es-l3-e54560e9-s",
        "tag": "L3 · ES→DE",
        "prompt": "la tortilla española",
        "answer": "Kartoffelomelett",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-cf3b7674-d",
        "tag": "L3 · DE→ES",
        "prompt": "Pflanzen-, pflanzlich",
        "answer": "vegetal",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-cf3b7674-s",
        "tag": "L3 · ES→DE",
        "prompt": "vegetal",
        "answer": "Pflanzen-, pflanzlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ffa35729-d",
        "tag": "L3 · DE→ES",
        "prompt": "ab",
        "answer": "desde",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ffa35729-s",
        "tag": "L3 · ES→DE",
        "prompt": "desde",
        "answer": "ab",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ce0b93a6-d",
        "tag": "L3 · DE→ES",
        "prompt": "als Vorspeise",
        "answer": "de primero",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ce0b93a6-s",
        "tag": "L3 · ES→DE",
        "prompt": "de primero",
        "answer": "als Vorspeise",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7c51b627-d",
        "tag": "L3 · DE→ES",
        "prompt": "als Hauptspeise",
        "answer": "de segundo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7c51b627-s",
        "tag": "L3 · ES→DE",
        "prompt": "de segundo",
        "answer": "als Hauptspeise",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5ce5d3af-d",
        "tag": "L3 · DE→ES",
        "prompt": "als Nachtisch",
        "answer": "de postre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5ce5d3af-s",
        "tag": "L3 · ES→DE",
        "prompt": "de postre",
        "answer": "als Nachtisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-cf97abca-d",
        "tag": "L3 · DE→ES",
        "prompt": "wollen, mögen",
        "answer": "querer",
        "distractors": [],
        "explanation": "unregelmäßig (ie)"
      },
      {
        "id": "es-l3-cf97abca-s",
        "tag": "L3 · ES→DE",
        "prompt": "querer",
        "answer": "wollen, mögen",
        "distractors": [],
        "explanation": "unregelmäßig (ie)"
      },
      {
        "id": "es-l3-de59cd5d-d",
        "tag": "L3 · DE→ES",
        "prompt": "bestellen, erbitten",
        "answer": "pedir",
        "distractors": [],
        "explanation": "unregelmäßig (i)"
      },
      {
        "id": "es-l3-de59cd5d-s",
        "tag": "L3 · ES→DE",
        "prompt": "pedir",
        "answer": "bestellen, erbitten",
        "distractors": [],
        "explanation": "unregelmäßig (i)"
      },
      {
        "id": "es-l3-5f3f0a0a-d",
        "tag": "L3 · DE→ES",
        "prompt": "zu trinken",
        "answer": "para beber",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5f3f0a0a-s",
        "tag": "L3 · ES→DE",
        "prompt": "para beber",
        "answer": "zu trinken",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a3cf16c6-d",
        "tag": "L3 · DE→ES",
        "prompt": "Kellner/in",
        "answer": "el / la camarero/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a3cf16c6-s",
        "tag": "L3 · ES→DE",
        "prompt": "el / la camarero/-a",
        "answer": "Kellner/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-34a0e21d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Kunde/-in",
        "answer": "el / la cliente/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-34a0e21d-s",
        "tag": "L3 · ES→DE",
        "prompt": "el / la cliente/-a",
        "answer": "Kunde/-in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bb892efc-d",
        "tag": "L3 · DE→ES",
        "prompt": "Was möchtet ihr essen / trinken?",
        "answer": "¿Qué tomáis?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bb892efc-s",
        "tag": "L3 · ES→DE",
        "prompt": "¿Qué tomáis?",
        "answer": "Was möchtet ihr essen / trinken?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f446cf9b-d",
        "tag": "L3 · DE→ES",
        "prompt": "Was darf ich euch bringen?",
        "answer": "¿Qué os pongo?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f446cf9b-s",
        "tag": "L3 · ES→DE",
        "prompt": "¿Qué os pongo?",
        "answer": "Was darf ich euch bringen?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0d32dff4-d",
        "tag": "L3 · DE→ES",
        "prompt": "Das macht 3,50 €.",
        "answer": "Son 3,50 €.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0d32dff4-s",
        "tag": "L3 · ES→DE",
        "prompt": "Son 3,50 €.",
        "answer": "Das macht 3,50 €.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-73460bf1-d",
        "tag": "L3 · DE→ES",
        "prompt": "Bitte zahlen!",
        "answer": "¿Me cobra/s?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-73460bf1-s",
        "tag": "L3 · ES→DE",
        "prompt": "¿Me cobra/s?",
        "answer": "Bitte zahlen!",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-cd5ccb8b-d",
        "tag": "L3 · DE→ES",
        "prompt": "kassieren",
        "answer": "cobrar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-cd5ccb8b-s",
        "tag": "L3 · ES→DE",
        "prompt": "cobrar",
        "answer": "kassieren",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2cce4105-d",
        "tag": "L3 · DE→ES",
        "prompt": "billig",
        "answer": "barato/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2cce4105-s",
        "tag": "L3 · ES→DE",
        "prompt": "barato/-a",
        "answer": "billig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ef90ad0f-d",
        "tag": "L3 · DE→ES",
        "prompt": "Küche, Kochkunst",
        "answer": "la cocina",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ef90ad0f-s",
        "tag": "L3 · ES→DE",
        "prompt": "la cocina",
        "answer": "Küche, Kochkunst",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d940277a-d",
        "tag": "L3 · DE→ES",
        "prompt": "Latin-",
        "answer": "latino/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d940277a-s",
        "tag": "L3 · ES→DE",
        "prompt": "latino/-a",
        "answer": "Latin-",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f8f58953-d",
        "tag": "L3 · DE→ES",
        "prompt": "Schließtag",
        "answer": "el día de cierre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f8f58953-s",
        "tag": "L3 · ES→DE",
        "prompt": "el día de cierre",
        "answer": "Schließtag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e7ee2fb6-d",
        "tag": "L3 · DE→ES",
        "prompt": "schließen",
        "answer": "cerrar",
        "distractors": [],
        "explanation": "unregelmäßig (ie)"
      },
      {
        "id": "es-l3-e7ee2fb6-s",
        "tag": "L3 · ES→DE",
        "prompt": "cerrar",
        "answer": "schließen",
        "distractors": [],
        "explanation": "unregelmäßig (ie)"
      },
      {
        "id": "es-l3-c4d834c4-d",
        "tag": "L3 · DE→ES",
        "prompt": "Sonntags geöffnet",
        "answer": "Abierto el domingo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c4d834c4-s",
        "tag": "L3 · ES→DE",
        "prompt": "Abierto el domingo",
        "answer": "Sonntags geöffnet",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-48ccf797-d",
        "tag": "L3 · DE→ES",
        "prompt": "geöffnet, offen",
        "answer": "abierto/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-48ccf797-s",
        "tag": "L3 · ES→DE",
        "prompt": "abierto/-a",
        "answer": "geöffnet, offen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-52e3cd8b-d",
        "tag": "L3 · DE→ES",
        "prompt": "Sonntag",
        "answer": "el domingo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-52e3cd8b-s",
        "tag": "L3 · ES→DE",
        "prompt": "el domingo",
        "answer": "Sonntag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-938e9724-d",
        "tag": "L3 · DE→ES",
        "prompt": "Preis",
        "answer": "el precio",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-938e9724-s",
        "tag": "L3 · ES→DE",
        "prompt": "el precio",
        "answer": "Preis",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7aac16be-d",
        "tag": "L3 · DE→ES",
        "prompt": "von … bis",
        "answer": "de … a",
        "distractors": [],
        "explanation": "Auch: desde … a"
      },
      {
        "id": "es-l3-7aac16be-s",
        "tag": "L3 · ES→DE",
        "prompt": "de … a",
        "answer": "von … bis",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fd49dc6f-d",
        "tag": "L3 · DE→ES",
        "prompt": "Beschreibung",
        "answer": "la descripción",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fd49dc6f-s",
        "tag": "L3 · ES→DE",
        "prompt": "la descripción",
        "answer": "Beschreibung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5014f39b-d",
        "tag": "L3 · DE→ES",
        "prompt": "liegen (geografisch)",
        "answer": "estar situado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5014f39b-s",
        "tag": "L3 · ES→DE",
        "prompt": "estar situado/-a",
        "answer": "liegen (geografisch)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-18625ddc-d",
        "tag": "L3 · DE→ES",
        "prompt": "Strand",
        "answer": "la playa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-18625ddc-s",
        "tag": "L3 · ES→DE",
        "prompt": "la playa",
        "answer": "Strand",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-93376366-d",
        "tag": "L3 · DE→ES",
        "prompt": "verfügen über",
        "answer": "contar con",
        "distractors": [],
        "explanation": "unregelmäßig (ue); Auch: disponer de"
      },
      {
        "id": "es-l3-93376366-s",
        "tag": "L3 · ES→DE",
        "prompt": "contar con",
        "answer": "verfügen über",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l3-dfd986e5-d",
        "tag": "L3 · DE→ES",
        "prompt": "Terrasse",
        "answer": "la terraza",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-dfd986e5-s",
        "tag": "L3 · ES→DE",
        "prompt": "la terraza",
        "answer": "Terrasse",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-40272187-d",
        "tag": "L3 · DE→ES",
        "prompt": "äußere/r/s",
        "answer": "exterior",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-40272187-s",
        "tag": "L3 · ES→DE",
        "prompt": "exterior",
        "answer": "äußere/r/s",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-641039e9-d",
        "tag": "L3 · DE→ES",
        "prompt": "kolumbianisch",
        "answer": "colombiano/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-641039e9-s",
        "tag": "L3 · ES→DE",
        "prompt": "colombiano/-a",
        "answer": "kolumbianisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9d61cce8-d",
        "tag": "L3 · DE→ES",
        "prompt": "peruanisch",
        "answer": "peruano/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-9d61cce8-s",
        "tag": "L3 · ES→DE",
        "prompt": "peruano/-a",
        "answer": "peruanisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ee8d199e-d",
        "tag": "L3 · DE→ES",
        "prompt": "verfügen über",
        "answer": "disponer de",
        "distractors": [],
        "explanation": "unregelmäßig (g); Auch: contar con"
      },
      {
        "id": "es-l3-ee8d199e-s",
        "tag": "L3 · ES→DE",
        "prompt": "disponer de",
        "answer": "verfügen über",
        "distractors": [],
        "explanation": "unregelmäßig (g)"
      },
      {
        "id": "es-l3-a0d8317f-d",
        "tag": "L3 · DE→ES",
        "prompt": "herausragen",
        "answer": "destacar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a0d8317f-s",
        "tag": "L3 · ES→DE",
        "prompt": "destacar",
        "answer": "herausragen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7049c5a0-d",
        "tag": "L3 · DE→ES",
        "prompt": "wunderbar",
        "answer": "maravilloso/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7049c5a0-s",
        "tag": "L3 · ES→DE",
        "prompt": "maravilloso/-a",
        "answer": "wunderbar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6d53b16f-d",
        "tag": "L3 · DE→ES",
        "prompt": "Gericht aus rohem Fisch",
        "answer": "el cebiche",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l3-6d53b16f-s",
        "tag": "L3 · ES→DE",
        "prompt": "el cebiche",
        "answer": "Gericht aus rohem Fisch",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l3-b787c1af-d",
        "tag": "L3 · DE→ES",
        "prompt": "ausgezeichnet",
        "answer": "excelente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b787c1af-s",
        "tag": "L3 · ES→DE",
        "prompt": "excelente",
        "answer": "ausgezeichnet",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-39cf7825-d",
        "tag": "L3 · DE→ES",
        "prompt": "Saft",
        "answer": "el jugo",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l3-39cf7825-s",
        "tag": "L3 · ES→DE",
        "prompt": "el jugo",
        "answer": "Saft",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l3-6bcf4ea8-d",
        "tag": "L3 · DE→ES",
        "prompt": "Fass",
        "answer": "el tonel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6bcf4ea8-s",
        "tag": "L3 · ES→DE",
        "prompt": "el tonel",
        "answer": "Fass",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-200bd1fe-d",
        "tag": "L3 · DE→ES",
        "prompt": "Snack, Häppchen",
        "answer": "el pincho",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-200bd1fe-s",
        "tag": "L3 · ES→DE",
        "prompt": "el pincho",
        "answer": "Snack, Häppchen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2953bec9-d",
        "tag": "L3 · DE→ES",
        "prompt": "Tintenfisch",
        "answer": "el calamar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2953bec9-s",
        "tag": "L3 · ES→DE",
        "prompt": "el calamar",
        "answer": "Tintenfisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4c51d9ae-d",
        "tag": "L3 · DE→ES",
        "prompt": "wilde Kartoffeln mit scharf gewürzter Soße",
        "answer": "las patatas bravas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4c51d9ae-s",
        "tag": "L3 · ES→DE",
        "prompt": "las patatas bravas",
        "answer": "wilde Kartoffeln mit scharf gewürzter Soße",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f532782d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Krokette",
        "answer": "la croqueta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f532782d-s",
        "tag": "L3 · ES→DE",
        "prompt": "la croqueta",
        "answer": "Krokette",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7c557e88-d",
        "tag": "L3 · DE→ES",
        "prompt": "hausgemacht",
        "answer": "casero/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7c557e88-s",
        "tag": "L3 · ES→DE",
        "prompt": "casero/-a",
        "answer": "hausgemacht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3c85fc57-d",
        "tag": "L3 · DE→ES",
        "prompt": "Montag",
        "answer": "el lunes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3c85fc57-s",
        "tag": "L3 · ES→DE",
        "prompt": "el lunes",
        "answer": "Montag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-009f1e16-d",
        "tag": "L3 · DE→ES",
        "prompt": "weniger als",
        "answer": "menos de",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-009f1e16-s",
        "tag": "L3 · ES→DE",
        "prompt": "menos de",
        "answer": "weniger als",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-dc356c55-d",
        "tag": "L3 · DE→ES",
        "prompt": "Bar, Kneipe",
        "answer": "el bar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-dc356c55-s",
        "tag": "L3 · ES→DE",
        "prompt": "el bar",
        "answer": "Bar, Kneipe",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-57e4e1fb-d",
        "tag": "L3 · DE→ES",
        "prompt": "Portion",
        "answer": "la ración",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-57e4e1fb-s",
        "tag": "L3 · ES→DE",
        "prompt": "la ración",
        "answer": "Portion",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-952f2b81-d",
        "tag": "L3 · DE→ES",
        "prompt": "von … bis",
        "answer": "desde … a",
        "distractors": [],
        "explanation": "Auch: de … a"
      },
      {
        "id": "es-l3-952f2b81-s",
        "tag": "L3 · ES→DE",
        "prompt": "desde … a",
        "answer": "von … bis",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3e126307-d",
        "tag": "L3 · DE→ES",
        "prompt": "in Knoblauchsoße",
        "answer": "al ajillo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3e126307-s",
        "tag": "L3 · ES→DE",
        "prompt": "al ajillo",
        "answer": "in Knoblauchsoße",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8aa4ebf9-d",
        "tag": "L3 · DE→ES",
        "prompt": "Zentrum, Stadtmitte",
        "answer": "el centro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8aa4ebf9-s",
        "tag": "L3 · ES→DE",
        "prompt": "el centro",
        "answer": "Zentrum, Stadtmitte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-677865a9-d",
        "tag": "L3 · DE→ES",
        "prompt": "ideal",
        "answer": "ideal",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-677865a9-s",
        "tag": "L3 · ES→DE",
        "prompt": "ideal",
        "answer": "ideal",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8454ea0b-d",
        "tag": "L3 · DE→ES",
        "prompt": "Reservierung",
        "answer": "la reserva",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8454ea0b-s",
        "tag": "L3 · ES→DE",
        "prompt": "la reserva",
        "answer": "Reservierung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b23d1d93-d",
        "tag": "L3 · DE→ES",
        "prompt": "(Kredit-)Karte",
        "answer": "la tarjeta (de crédito)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b23d1d93-s",
        "tag": "L3 · ES→DE",
        "prompt": "la tarjeta (de crédito)",
        "answer": "(Kredit-)Karte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a1d434a1-d",
        "tag": "L3 · DE→ES",
        "prompt": "zugänglich, hier: barrierefrei",
        "answer": "accesible",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a1d434a1-s",
        "tag": "L3 · ES→DE",
        "prompt": "accesible",
        "answer": "zugänglich, hier: barrierefrei",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4b2044aa-d",
        "tag": "L3 · DE→ES",
        "prompt": "Spezial-Menü",
        "answer": "el menú especial",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4b2044aa-s",
        "tag": "L3 · ES→DE",
        "prompt": "el menú especial",
        "answer": "Spezial-Menü",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3846712b-d",
        "tag": "L3 · DE→ES",
        "prompt": "Parkplatz",
        "answer": "el parking",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3846712b-s",
        "tag": "L3 · ES→DE",
        "prompt": "el parking",
        "answer": "Parkplatz",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-04675161-d",
        "tag": "L3 · DE→ES",
        "prompt": "Speisesaal für Raucher",
        "answer": "el salón (para) fumadores",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-04675161-s",
        "tag": "L3 · ES→DE",
        "prompt": "el salón (para) fumadores",
        "answer": "Speisesaal für Raucher",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-40f344a8-d",
        "tag": "L3 · DE→ES",
        "prompt": "Lieferung nach Hause",
        "answer": "la entrega a domicilio",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-40f344a8-s",
        "tag": "L3 · ES→DE",
        "prompt": "la entrega a domicilio",
        "answer": "Lieferung nach Hause",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-256625c0-d",
        "tag": "L3 · DE→ES",
        "prompt": "Mittwoch",
        "answer": "el miércoles",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-256625c0-s",
        "tag": "L3 · ES→DE",
        "prompt": "el miércoles",
        "answer": "Mittwoch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-291c2fd0-d",
        "tag": "L3 · DE→ES",
        "prompt": "Donnerstag",
        "answer": "el jueves",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-291c2fd0-s",
        "tag": "L3 · ES→DE",
        "prompt": "el jueves",
        "answer": "Donnerstag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8e00921e-d",
        "tag": "L3 · DE→ES",
        "prompt": "Freitag",
        "answer": "el viernes",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8e00921e-s",
        "tag": "L3 · ES→DE",
        "prompt": "el viernes",
        "answer": "Freitag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-cabd8ba5-d",
        "tag": "L3 · DE→ES",
        "prompt": "Samstag",
        "answer": "el sábado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-cabd8ba5-s",
        "tag": "L3 · ES→DE",
        "prompt": "el sábado",
        "answer": "Samstag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2d6e740b-d",
        "tag": "L3 · DE→ES",
        "prompt": "gemäßigt, maßvoll",
        "answer": "moderado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2d6e740b-s",
        "tag": "L3 · ES→DE",
        "prompt": "moderado/-a",
        "answer": "gemäßigt, maßvoll",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-037c7fec-d",
        "tag": "L3 · DE→ES",
        "prompt": "parken",
        "answer": "aparcar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-037c7fec-s",
        "tag": "L3 · ES→DE",
        "prompt": "aparcar",
        "answer": "parken",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2657eff3-d",
        "tag": "L3 · DE→ES",
        "prompt": "öffnen",
        "answer": "abrir",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2657eff3-s",
        "tag": "L3 · ES→DE",
        "prompt": "abrir",
        "answer": "öffnen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2f056915-d",
        "tag": "L3 · DE→ES",
        "prompt": "biologisch",
        "answer": "biológico/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2f056915-s",
        "tag": "L3 · ES→DE",
        "prompt": "biológico/-a",
        "answer": "biologisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f47564b4-d",
        "tag": "L3 · DE→ES",
        "prompt": "Es ist geeignet für …",
        "answer": "Es apto para …",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f47564b4-s",
        "tag": "L3 · ES→DE",
        "prompt": "Es apto para …",
        "answer": "Es ist geeignet für …",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-03ead163-d",
        "tag": "L3 · DE→ES",
        "prompt": "Ernährungsweise",
        "answer": "la dieta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-03ead163-s",
        "tag": "L3 · ES→DE",
        "prompt": "la dieta",
        "answer": "Ernährungsweise",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3d302028-d",
        "tag": "L3 · DE→ES",
        "prompt": "Wo ist …?",
        "answer": "¿Dónde está …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3d302028-s",
        "tag": "L3 · ES→DE",
        "prompt": "¿Dónde está …?",
        "answer": "Wo ist …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ed27fecf-d",
        "tag": "L3 · DE→ES",
        "prompt": "sein, sich befinden",
        "answer": "estar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-ed27fecf-s",
        "tag": "L3 · ES→DE",
        "prompt": "estar",
        "answer": "sein, sich befinden",
        "distractors": [],
        "explanation": "Auch: sein"
      },
      {
        "id": "es-l3-7e970b30-d",
        "tag": "L3 · DE→ES",
        "prompt": "in der Nähe (von)",
        "answer": "cerca (de)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7e970b30-s",
        "tag": "L3 · ES→DE",
        "prompt": "cerca (de)",
        "answer": "in der Nähe (von)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6507186c-d",
        "tag": "L3 · DE→ES",
        "prompt": "Wie ist es?",
        "answer": "¿Cómo es?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6507186c-s",
        "tag": "L3 · ES→DE",
        "prompt": "¿Cómo es?",
        "answer": "Wie ist es?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8b4a8e54-d",
        "tag": "L3 · DE→ES",
        "prompt": "ruhig",
        "answer": "tranquilo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8b4a8e54-s",
        "tag": "L3 · ES→DE",
        "prompt": "tranquilo/-a",
        "answer": "ruhig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2074a2c4-d",
        "tag": "L3 · DE→ES",
        "prompt": "Fastfood",
        "answer": "la (comida) rápida",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2074a2c4-s",
        "tag": "L3 · ES→DE",
        "prompt": "la (comida) rápida",
        "answer": "Fastfood",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c4208e90-d",
        "tag": "L3 · DE→ES",
        "prompt": "An welchen Tagen ist geöffnet?",
        "answer": "¿Qué días abre?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c4208e90-s",
        "tag": "L3 · ES→DE",
        "prompt": "¿Qué días abre?",
        "answer": "An welchen Tagen ist geöffnet?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-49d78af5-d",
        "tag": "L3 · DE→ES",
        "prompt": "Uhrzeit",
        "answer": "la hora",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-49d78af5-s",
        "tag": "L3 · ES→DE",
        "prompt": "la hora",
        "answer": "Uhrzeit",
        "distractors": [],
        "explanation": "Auch: Stunde"
      },
      {
        "id": "es-l3-687e8885-d",
        "tag": "L3 · DE→ES",
        "prompt": "Personenanzahl",
        "answer": "el número de personas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-687e8885-s",
        "tag": "L3 · ES→DE",
        "prompt": "el número de personas",
        "answer": "Personenanzahl",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bb8239be-d",
        "tag": "L3 · DE→ES",
        "prompt": "Kommentar",
        "answer": "el comentario",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bb8239be-s",
        "tag": "L3 · ES→DE",
        "prompt": "el comentario",
        "answer": "Kommentar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6a2a65a9-d",
        "tag": "L3 · DE→ES",
        "prompt": "Wie viel Uhr ist es?",
        "answer": "¿Qué hora es?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6a2a65a9-s",
        "tag": "L3 · ES→DE",
        "prompt": "¿Qué hora es?",
        "answer": "Wie viel Uhr ist es?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e802012e-d",
        "tag": "L3 · DE→ES",
        "prompt": "Es ist halb zwei am Nachmittag.",
        "answer": "Es la una y media de la tarde.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e802012e-s",
        "tag": "L3 · ES→DE",
        "prompt": "Es la una y media de la tarde.",
        "answer": "Es ist halb zwei am Nachmittag.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7e78d246-d",
        "tag": "L3 · DE→ES",
        "prompt": "nachmittags, am Nachmittag",
        "answer": "de la tarde",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7e78d246-s",
        "tag": "L3 · ES→DE",
        "prompt": "de la tarde",
        "answer": "nachmittags, am Nachmittag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-60158045-d",
        "tag": "L3 · DE→ES",
        "prompt": "Es ist Viertel vor zwei.",
        "answer": "Son las dos menos cuarto.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-60158045-s",
        "tag": "L3 · ES→DE",
        "prompt": "Son las dos menos cuarto.",
        "answer": "Es ist Viertel vor zwei.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4dd93fa4-d",
        "tag": "L3 · DE→ES",
        "prompt": "Um wie viel Uhr …?",
        "answer": "¿A qué hora …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4dd93fa4-s",
        "tag": "L3 · ES→DE",
        "prompt": "¿A qué hora …?",
        "answer": "Um wie viel Uhr …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0c9d367d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Um zehn Uhr abends.",
        "answer": "A las diez de la noche.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0c9d367d-s",
        "tag": "L3 · ES→DE",
        "prompt": "A las diez de la noche.",
        "answer": "Um zehn Uhr abends.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-dfcd270f-d",
        "tag": "L3 · DE→ES",
        "prompt": "Viertel vor …",
        "answer": "… menos cuarto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-dfcd270f-s",
        "tag": "L3 · ES→DE",
        "prompt": "… menos cuarto",
        "answer": "Viertel vor …",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0705bc61-d",
        "tag": "L3 · DE→ES",
        "prompt": "genau / Punkt …",
        "answer": "… en punto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0705bc61-s",
        "tag": "L3 · ES→DE",
        "prompt": "… en punto",
        "answer": "genau / Punkt …",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a3e6419a-d",
        "tag": "L3 · DE→ES",
        "prompt": "Viertel nach …",
        "answer": "… y cuarto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a3e6419a-s",
        "tag": "L3 · ES→DE",
        "prompt": "… y cuarto",
        "answer": "Viertel nach …",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-55c58307-d",
        "tag": "L3 · DE→ES",
        "prompt": "halb …",
        "answer": "… y media",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-55c58307-s",
        "tag": "L3 · ES→DE",
        "prompt": "… y media",
        "answer": "halb …",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-adead6ca-d",
        "tag": "L3 · DE→ES",
        "prompt": "Meinung",
        "answer": "la opinión",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-adead6ca-s",
        "tag": "L3 · ES→DE",
        "prompt": "la opinión",
        "answer": "Meinung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bb93a8e9-d",
        "tag": "L3 · DE→ES",
        "prompt": "riesig",
        "answer": "enorme",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bb93a8e9-s",
        "tag": "L3 · ES→DE",
        "prompt": "enorme",
        "answer": "riesig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-313e064b-d",
        "tag": "L3 · DE→ES",
        "prompt": "zu einem sehr guten Preis",
        "answer": "a muy buen precio",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-313e064b-s",
        "tag": "L3 · ES→DE",
        "prompt": "a muy buen precio",
        "answer": "zu einem sehr guten Preis",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4b12d33d-d",
        "tag": "L3 · DE→ES",
        "prompt": "außer, mit Ausnahme von",
        "answer": "excepto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4b12d33d-s",
        "tag": "L3 · ES→DE",
        "prompt": "excepto",
        "answer": "außer, mit Ausnahme von",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f0b8069d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Atmosphäre, Stimmung",
        "answer": "el ambiente",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f0b8069d-s",
        "tag": "L3 · ES→DE",
        "prompt": "el ambiente",
        "answer": "Atmosphäre, Stimmung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-54687d41-d",
        "tag": "L3 · DE→ES",
        "prompt": "mittags",
        "answer": "al mediodía",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-54687d41-s",
        "tag": "L3 · ES→DE",
        "prompt": "al mediodía",
        "answer": "mittags",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bad8bb81-d",
        "tag": "L3 · DE→ES",
        "prompt": "Straße",
        "answer": "la calle",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bad8bb81-s",
        "tag": "L3 · ES→DE",
        "prompt": "la calle",
        "answer": "Straße",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5a4bd0ad-d",
        "tag": "L3 · DE→ES",
        "prompt": "angenehm, freundlich",
        "answer": "agradable",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5a4bd0ad-s",
        "tag": "L3 · ES→DE",
        "prompt": "agradable",
        "answer": "angenehm, freundlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5525041e-d",
        "tag": "L3 · DE→ES",
        "prompt": "hauseigen; des Hauses",
        "answer": "de la casa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5525041e-s",
        "tag": "L3 · ES→DE",
        "prompt": "de la casa",
        "answer": "hauseigen; des Hauses",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-953c1367-d",
        "tag": "L3 · DE→ES",
        "prompt": "groß",
        "answer": "grande",
        "distractors": [],
        "explanation": "Auch: gran(de) · alto/-a"
      },
      {
        "id": "es-l3-953c1367-s",
        "tag": "L3 · ES→DE",
        "prompt": "grande",
        "answer": "groß",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b09a00a2-d",
        "tag": "L3 · DE→ES",
        "prompt": "Es schmeckt sehr gut.",
        "answer": "Está muy rico/-a.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b09a00a2-s",
        "tag": "L3 · ES→DE",
        "prompt": "Está muy rico/-a.",
        "answer": "Es schmeckt sehr gut.",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-83dbece3-d",
        "tag": "L3 · DE→ES",
        "prompt": "Pommes frites",
        "answer": "las patatas fritas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-83dbece3-s",
        "tag": "L3 · ES→DE",
        "prompt": "las patatas fritas",
        "answer": "Pommes frites",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-1829b908-d",
        "tag": "L3 · DE→ES",
        "prompt": "danach",
        "answer": "después",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-1829b908-s",
        "tag": "L3 · ES→DE",
        "prompt": "después",
        "answer": "danach",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e39fe07f-d",
        "tag": "L3 · DE→ES",
        "prompt": "typisch",
        "answer": "de los de siempre",
        "distractors": [],
        "explanation": "Auch: típico/-a"
      },
      {
        "id": "es-l3-e39fe07f-s",
        "tag": "L3 · ES→DE",
        "prompt": "de los de siempre",
        "answer": "typisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f05a29fd-d",
        "tag": "L3 · DE→ES",
        "prompt": "langsam",
        "answer": "lento/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f05a29fd-s",
        "tag": "L3 · ES→DE",
        "prompt": "lento/-a",
        "answer": "langsam",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8c048e95-d",
        "tag": "L3 · DE→ES",
        "prompt": "warten",
        "answer": "esperar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8c048e95-s",
        "tag": "L3 · ES→DE",
        "prompt": "esperar",
        "answer": "warten",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-68a49e48-d",
        "tag": "L3 · DE→ES",
        "prompt": "Video(film)",
        "answer": "el vídeo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-68a49e48-s",
        "tag": "L3 · ES→DE",
        "prompt": "el vídeo",
        "answer": "Video(film)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-beb56a27-d",
        "tag": "L3 · DE→ES",
        "prompt": "über",
        "answer": "sobre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-beb56a27-s",
        "tag": "L3 · ES→DE",
        "prompt": "sobre",
        "answer": "über",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-dfd18326-d",
        "tag": "L3 · DE→ES",
        "prompt": "vermissen",
        "answer": "echar de menos",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-dfd18326-s",
        "tag": "L3 · ES→DE",
        "prompt": "echar de menos",
        "answer": "vermissen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-00322574-d",
        "tag": "L3 · DE→ES",
        "prompt": "am meisten",
        "answer": "más",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-00322574-s",
        "tag": "L3 · ES→DE",
        "prompt": "más",
        "answer": "am meisten",
        "distractors": [],
        "explanation": "Auch: mehr, weitere"
      },
      {
        "id": "es-l3-a00ecd5a-d",
        "tag": "L3 · DE→ES",
        "prompt": "Maniok",
        "answer": "la yuca",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a00ecd5a-s",
        "tag": "L3 · ES→DE",
        "prompt": "la yuca",
        "answer": "Maniok",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5993d42e-d",
        "tag": "L3 · DE→ES",
        "prompt": "Bohne",
        "answer": "el frijol",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l3-5993d42e-s",
        "tag": "L3 · ES→DE",
        "prompt": "el frijol",
        "answer": "Bohne",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l3-4d56a239-d",
        "tag": "L3 · DE→ES",
        "prompt": "Languste",
        "answer": "la langosta",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4d56a239-s",
        "tag": "L3 · ES→DE",
        "prompt": "la langosta",
        "answer": "Languste",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f321bab1-d",
        "tag": "L3 · DE→ES",
        "prompt": "schwarzer Kaffee",
        "answer": "el tinto",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l3-f321bab1-s",
        "tag": "L3 · ES→DE",
        "prompt": "el tinto",
        "answer": "schwarzer Kaffee",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l3-c6bd6650-d",
        "tag": "L3 · DE→ES",
        "prompt": "Kolumbien",
        "answer": "Colombia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c6bd6650-s",
        "tag": "L3 · ES→DE",
        "prompt": "Colombia",
        "answer": "Kolumbien",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e36a604e-d",
        "tag": "L3 · DE→ES",
        "prompt": "Kartoffel",
        "answer": "la papa",
        "distractors": [],
        "explanation": "lateinamerikanisch; Auch: la patata"
      },
      {
        "id": "es-l3-e36a604e-s",
        "tag": "L3 · ES→DE",
        "prompt": "la papa",
        "answer": "Kartoffel",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l3-c769dbe3-d",
        "tag": "L3 · DE→ES",
        "prompt": "nennen",
        "answer": "llamar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c769dbe3-s",
        "tag": "L3 · ES→DE",
        "prompt": "llamar",
        "answer": "nennen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6943acf1-d",
        "tag": "L3 · DE→ES",
        "prompt": "Banane",
        "answer": "el banano",
        "distractors": [],
        "explanation": "lateinamerikanisch; Auch: el plátano"
      },
      {
        "id": "es-l3-6943acf1-s",
        "tag": "L3 · ES→DE",
        "prompt": "el banano",
        "answer": "Banane",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l3-3b1e0d2f-d",
        "tag": "L3 · DE→ES",
        "prompt": "Gericht aus Reis und Bohnen",
        "answer": "el congrí",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l3-3b1e0d2f-s",
        "tag": "L3 · ES→DE",
        "prompt": "el congrí",
        "answer": "Gericht aus Reis und Bohnen",
        "distractors": [],
        "explanation": "lateinamerikanisch"
      },
      {
        "id": "es-l3-d0f49f0d-d",
        "tag": "L3 · DE→ES",
        "prompt": "kubanisch",
        "answer": "cubano/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d0f49f0d-s",
        "tag": "L3 · ES→DE",
        "prompt": "cubano/-a",
        "answer": "kubanisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d3b16923-d",
        "tag": "L3 · DE→ES",
        "prompt": "vor allem, vor allen Dingen",
        "answer": "sobre todo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d3b16923-s",
        "tag": "L3 · ES→DE",
        "prompt": "sobre todo",
        "answer": "vor allem, vor allen Dingen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-1e915cb7-d",
        "tag": "L3 · DE→ES",
        "prompt": "laut seiner / ihrer Aussage",
        "answer": "según",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-1e915cb7-s",
        "tag": "L3 · ES→DE",
        "prompt": "según",
        "answer": "laut seiner / ihrer Aussage",
        "distractors": [],
        "explanation": "Auch: gemäß, nach"
      },
      {
        "id": "es-l3-3ce61c8b-d",
        "tag": "L3 · DE→ES",
        "prompt": "typisch",
        "answer": "típico/-a",
        "distractors": [],
        "explanation": "Auch: de los de siempre"
      },
      {
        "id": "es-l3-3ce61c8b-s",
        "tag": "L3 · ES→DE",
        "prompt": "típico/-a",
        "answer": "typisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fe63c777-d",
        "tag": "L3 · DE→ES",
        "prompt": "Essenszeiten",
        "answer": "el horario de comidas",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fe63c777-s",
        "tag": "L3 · ES→DE",
        "prompt": "el horario de comidas",
        "answer": "Essenszeiten",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d48a9438-d",
        "tag": "L3 · DE→ES",
        "prompt": "inmitten",
        "answer": "en medio de",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-d48a9438-s",
        "tag": "L3 · ES→DE",
        "prompt": "en medio de",
        "answer": "inmitten",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3cff335d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Höhe",
        "answer": "la altura",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3cff335d-s",
        "tag": "L3 · ES→DE",
        "prompt": "la altura",
        "answer": "Höhe",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4eadb447-d",
        "tag": "L3 · DE→ES",
        "prompt": "Klima",
        "answer": "el clima",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-4eadb447-s",
        "tag": "L3 · ES→DE",
        "prompt": "el clima",
        "answer": "Klima",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-1c884a49-d",
        "tag": "L3 · DE→ES",
        "prompt": "trocken",
        "answer": "seco/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-1c884a49-s",
        "tag": "L3 · ES→DE",
        "prompt": "seco/-a",
        "answer": "trocken",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-faf91894-d",
        "tag": "L3 · DE→ES",
        "prompt": "mild, gemäßigt",
        "answer": "templado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-faf91894-s",
        "tag": "L3 · ES→DE",
        "prompt": "templado/-a",
        "answer": "mild, gemäßigt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-983450e0-d",
        "tag": "L3 · DE→ES",
        "prompt": "Statue",
        "answer": "la estatua",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-983450e0-s",
        "tag": "L3 · ES→DE",
        "prompt": "la estatua",
        "answer": "Statue",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-1f1f94dd-d",
        "tag": "L3 · DE→ES",
        "prompt": "(Jesus) Christus",
        "answer": "el Cristo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-1f1f94dd-s",
        "tag": "L3 · ES→DE",
        "prompt": "el Cristo",
        "answer": "(Jesus) Christus",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-533283be-d",
        "tag": "L3 · DE→ES",
        "prompt": "Eintracht",
        "answer": "la concordia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-533283be-s",
        "tag": "L3 · ES→DE",
        "prompt": "la concordia",
        "answer": "Eintracht",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-96fe4a6b-d",
        "tag": "L3 · DE→ES",
        "prompt": "Bolivien",
        "answer": "Bolivia",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-96fe4a6b-s",
        "tag": "L3 · ES→DE",
        "prompt": "Bolivia",
        "answer": "Bolivien",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-50c975cc-d",
        "tag": "L3 · DE→ES",
        "prompt": "Bolivianer/in",
        "answer": "el / la boliviano/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-50c975cc-s",
        "tag": "L3 · ES→DE",
        "prompt": "el / la boliviano/-a",
        "answer": "Bolivianer/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-598e252a-d",
        "tag": "L3 · DE→ES",
        "prompt": "Hamburger",
        "answer": "la hamburguesa",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-598e252a-s",
        "tag": "L3 · ES→DE",
        "prompt": "la hamburguesa",
        "answer": "Hamburger",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fa61d49c-d",
        "tag": "L3 · DE→ES",
        "prompt": "Fastfood-Kette",
        "answer": "la cadena de comida rápida",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-fa61d49c-s",
        "tag": "L3 · ES→DE",
        "prompt": "la cadena de comida rápida",
        "answer": "Fastfood-Kette",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5c424da9-d",
        "tag": "L3 · DE→ES",
        "prompt": "gefüllte Teigpastete",
        "answer": "la empanada",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5c424da9-s",
        "tag": "L3 · ES→DE",
        "prompt": "la empanada",
        "answer": "gefüllte Teigpastete",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6f8371be-d",
        "tag": "L3 · DE→ES",
        "prompt": "Erfolg",
        "answer": "el éxito",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-6f8371be-s",
        "tag": "L3 · ES→DE",
        "prompt": "el éxito",
        "answer": "Erfolg",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-96883055-d",
        "tag": "L3 · DE→ES",
        "prompt": "Dokumentarfilm",
        "answer": "el documental",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-96883055-s",
        "tag": "L3 · ES→DE",
        "prompt": "el documental",
        "answer": "Dokumentarfilm",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bf2da73e-d",
        "tag": "L3 · DE→ES",
        "prompt": "Warum ging McDonald's … in Konkurs?",
        "answer": "¿Por qué quebró McDonald's …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bf2da73e-s",
        "tag": "L3 · ES→DE",
        "prompt": "¿Por qué quebró McDonald's …?",
        "answer": "Warum ging McDonald's … in Konkurs?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b66a137f-d",
        "tag": "L3 · DE→ES",
        "prompt": "gastronomisch, kulinarisch",
        "answer": "gastronómico/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-b66a137f-s",
        "tag": "L3 · ES→DE",
        "prompt": "gastronómico/-a",
        "answer": "gastronomisch, kulinarisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-11d92199-d",
        "tag": "L3 · DE→ES",
        "prompt": "Zubereitung",
        "answer": "la preparación",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-11d92199-s",
        "tag": "L3 · ES→DE",
        "prompt": "la preparación",
        "answer": "Zubereitung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f554cff3-d",
        "tag": "L3 · DE→ES",
        "prompt": "Mais",
        "answer": "el maíz",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-f554cff3-s",
        "tag": "L3 · ES→DE",
        "prompt": "el maíz",
        "answer": "Mais",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-af5015d5-d",
        "tag": "L3 · DE→ES",
        "prompt": "wo (Relativpronomen)",
        "answer": "donde",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-af5015d5-s",
        "tag": "L3 · ES→DE",
        "prompt": "donde",
        "answer": "wo (Relativpronomen)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e223cac3-d",
        "tag": "L3 · DE→ES",
        "prompt": "nach den Gründen fragen",
        "answer": "preguntar por las razones",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-e223cac3-s",
        "tag": "L3 · ES→DE",
        "prompt": "preguntar por las razones",
        "answer": "nach den Gründen fragen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-344ec0a0-d",
        "tag": "L3 · DE→ES",
        "prompt": "Koch/Köchin",
        "answer": "el / la cocinero/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-344ec0a0-s",
        "tag": "L3 · ES→DE",
        "prompt": "el / la cocinero/-a",
        "answer": "Koch/Köchin",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2e96dc11-d",
        "tag": "L3 · DE→ES",
        "prompt": "Historiker/in",
        "answer": "el / la historiador/a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-2e96dc11-s",
        "tag": "L3 · ES→DE",
        "prompt": "el / la historiador/a",
        "answer": "Historiker/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a44c353c-d",
        "tag": "L3 · DE→ES",
        "prompt": "Ernährungswissenschaftler/in",
        "answer": "el / la nutricionista",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a44c353c-s",
        "tag": "L3 · ES→DE",
        "prompt": "el / la nutricionista",
        "answer": "Ernährungswissenschaftler/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a14d6f7f-d",
        "tag": "L3 · DE→ES",
        "prompt": "Psychologe/-in",
        "answer": "el / la psicólogo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a14d6f7f-s",
        "tag": "L3 · ES→DE",
        "prompt": "el / la psicólogo/-a",
        "answer": "Psychologe/-in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c1c4967d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Mentalität, Geisteshaltung",
        "answer": "la mentalidad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-c1c4967d-s",
        "tag": "L3 · ES→DE",
        "prompt": "la mentalidad",
        "answer": "Mentalität, Geisteshaltung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-cd8e6019-d",
        "tag": "L3 · DE→ES",
        "prompt": "Erde; Land; Heimat",
        "answer": "la tierra",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-cd8e6019-s",
        "tag": "L3 · ES→DE",
        "prompt": "la tierra",
        "answer": "Erde; Land; Heimat",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-49320a7e-d",
        "tag": "L3 · DE→ES",
        "prompt": "Geschmack",
        "answer": "el sabor",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-49320a7e-s",
        "tag": "L3 · ES→DE",
        "prompt": "el sabor",
        "answer": "Geschmack",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5238ad9f-d",
        "tag": "L3 · DE→ES",
        "prompt": "intensiv, eindringlich",
        "answer": "intenso/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-5238ad9f-s",
        "tag": "L3 · ES→DE",
        "prompt": "intenso/-a",
        "answer": "intensiv, eindringlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-10ac54f2-d",
        "tag": "L3 · DE→ES",
        "prompt": "stark",
        "answer": "fuerte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-10ac54f2-s",
        "tag": "L3 · ES→DE",
        "prompt": "fuerte",
        "answer": "stark",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7b3da02f-d",
        "tag": "L3 · DE→ES",
        "prompt": "viele Stunden zur Zubereitung",
        "answer": "muchas horas de cocina",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-7b3da02f-s",
        "tag": "L3 · ES→DE",
        "prompt": "muchas horas de cocina",
        "answer": "viele Stunden zur Zubereitung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-25c5bb3d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Stunde",
        "answer": "la hora",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-25c5bb3d-s",
        "tag": "L3 · ES→DE",
        "prompt": "la hora",
        "answer": "Stunde",
        "distractors": [],
        "explanation": "Auch: Uhrzeit"
      },
      {
        "id": "es-l3-40772df1-d",
        "tag": "L3 · DE→ES",
        "prompt": "Lebensmittel",
        "answer": "el alimento",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-40772df1-s",
        "tag": "L3 · ES→DE",
        "prompt": "el alimento",
        "answer": "Lebensmittel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3c29056a-d",
        "tag": "L3 · DE→ES",
        "prompt": "deshalb",
        "answer": "por eso",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-3c29056a-s",
        "tag": "L3 · ES→DE",
        "prompt": "por eso",
        "answer": "deshalb",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8811b154-d",
        "tag": "L3 · DE→ES",
        "prompt": "misstrauen",
        "answer": "desconfiar de",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-8811b154-s",
        "tag": "L3 · ES→DE",
        "prompt": "desconfiar de",
        "answer": "misstrauen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-764c8ea9-d",
        "tag": "L3 · DE→ES",
        "prompt": "Minute",
        "answer": "el minuto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-764c8ea9-s",
        "tag": "L3 · ES→DE",
        "prompt": "el minuto",
        "answer": "Minute",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-608e3a18-d",
        "tag": "L3 · DE→ES",
        "prompt": "kosten",
        "answer": "costar",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l3-608e3a18-s",
        "tag": "L3 · ES→DE",
        "prompt": "costar",
        "answer": "kosten",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l3-0b28ec3f-d",
        "tag": "L3 · DE→ES",
        "prompt": "bolivianische Währung",
        "answer": "el peso (boliviano)",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-0b28ec3f-s",
        "tag": "L3 · ES→DE",
        "prompt": "el peso (boliviano)",
        "answer": "bolivianische Währung",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-92934d1f-d",
        "tag": "L3 · DE→ES",
        "prompt": "Dollar",
        "answer": "el dólar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-92934d1f-s",
        "tag": "L3 · ES→DE",
        "prompt": "el dólar",
        "answer": "Dollar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a1e4add4-d",
        "tag": "L3 · DE→ES",
        "prompt": "jedoch, trotzdem",
        "answer": "sin embargo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a1e4add4-s",
        "tag": "L3 · ES→DE",
        "prompt": "sin embargo",
        "answer": "jedoch, trotzdem",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a19d3030-d",
        "tag": "L3 · DE→ES",
        "prompt": "zum Beispiel",
        "answer": "por ejemplo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a19d3030-s",
        "tag": "L3 · ES→DE",
        "prompt": "por ejemplo",
        "answer": "zum Beispiel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-81a16978-d",
        "tag": "L3 · DE→ES",
        "prompt": "Mittagessen",
        "answer": "el almuerzo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-81a16978-s",
        "tag": "L3 · ES→DE",
        "prompt": "el almuerzo",
        "answer": "Mittagessen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a12efe2e-d",
        "tag": "L3 · DE→ES",
        "prompt": "vollständig, komplett",
        "answer": "completo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-a12efe2e-s",
        "tag": "L3 · ES→DE",
        "prompt": "completo/-a",
        "answer": "vollständig, komplett",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-52bfa91d-d",
        "tag": "L3 · DE→ES",
        "prompt": "Markt",
        "answer": "el mercado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-52bfa91d-s",
        "tag": "L3 · ES→DE",
        "prompt": "el mercado",
        "answer": "Markt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bc40c8af-d",
        "tag": "L3 · DE→ES",
        "prompt": "volkstümlich",
        "answer": "popular",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l3-bc40c8af-s",
        "tag": "L3 · ES→DE",
        "prompt": "popular",
        "answer": "volkstümlich",
        "distractors": [],
        "explanation": "Auch: beliebt"
      },
      {
        "id": "es-l4-4ef80605-d",
        "tag": "L4 · DE→ES",
        "prompt": "glauben",
        "answer": "creer",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-4ef80605-s",
        "tag": "L4 · ES→DE",
        "prompt": "creer",
        "answer": "glauben",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-455e6618-d",
        "tag": "L4 · DE→ES",
        "prompt": "vervollständige",
        "answer": "completa",
        "distractors": [],
        "explanation": "Infinitiv: completar"
      },
      {
        "id": "es-l4-455e6618-s",
        "tag": "L4 · ES→DE",
        "prompt": "completa",
        "answer": "vervollständige",
        "distractors": [],
        "explanation": "Infinitiv: completar"
      },
      {
        "id": "es-l4-ced3a58a-d",
        "tag": "L4 · DE→ES",
        "prompt": "Karteikarte",
        "answer": "la ficha",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-ced3a58a-s",
        "tag": "L4 · ES→DE",
        "prompt": "la ficha",
        "answer": "Karteikarte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-c2f5c90b-d",
        "tag": "L4 · DE→ES",
        "prompt": "vergleiche",
        "answer": "compara",
        "distractors": [],
        "explanation": "Infinitiv: comparar"
      },
      {
        "id": "es-l4-c2f5c90b-s",
        "tag": "L4 · ES→DE",
        "prompt": "compara",
        "answer": "vergleiche",
        "distractors": [],
        "explanation": "Infinitiv: comparar"
      },
      {
        "id": "es-l4-9f5364d1-d",
        "tag": "L4 · DE→ES",
        "prompt": "Einwohner/in",
        "answer": "el / la habitante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-9f5364d1-s",
        "tag": "L4 · ES→DE",
        "prompt": "el / la habitante",
        "answer": "Einwohner/in",
        "distractors": [],
        "explanation": "Auch: Einwohner"
      },
      {
        "id": "es-l4-a04a49bf-d",
        "tag": "L4 · DE→ES",
        "prompt": "Bürger/in",
        "answer": "el / la ciudadano/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-a04a49bf-s",
        "tag": "L4 · ES→DE",
        "prompt": "el / la ciudadano/-a",
        "answer": "Bürger/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-bacf529e-d",
        "tag": "L4 · DE→ES",
        "prompt": "ausländisch",
        "answer": "extranjero/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-bacf529e-s",
        "tag": "L4 · ES→DE",
        "prompt": "extranjero/-a",
        "answer": "ausländisch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-9487b4c6-d",
        "tag": "L4 · DE→ES",
        "prompt": "Durchschnittstemperatur",
        "answer": "la temperatura media",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-9487b4c6-s",
        "tag": "L4 · ES→DE",
        "prompt": "la temperatura media",
        "answer": "Durchschnittstemperatur",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-8657340c-d",
        "tag": "L4 · DE→ES",
        "prompt": "offiziell",
        "answer": "oficial",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-8657340c-s",
        "tag": "L4 · ES→DE",
        "prompt": "oficial",
        "answer": "offiziell",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-21938b0d-d",
        "tag": "L4 · DE→ES",
        "prompt": "Kilometer",
        "answer": "el kilómetro",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-21938b0d-s",
        "tag": "L4 · ES→DE",
        "prompt": "el kilómetro",
        "answer": "Kilometer",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-198068b3-d",
        "tag": "L4 · DE→ES",
        "prompt": "Fahrradweg",
        "answer": "el carril bici",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-198068b3-s",
        "tag": "L4 · ES→DE",
        "prompt": "el carril bici",
        "answer": "Fahrradweg",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-25c2fccc-d",
        "tag": "L4 · DE→ES",
        "prompt": "Fahrrad",
        "answer": "la bici(cleta)",
        "distractors": [],
        "explanation": "Auch: la cleta"
      },
      {
        "id": "es-l4-25c2fccc-s",
        "tag": "L4 · ES→DE",
        "prompt": "la bici(cleta)",
        "answer": "Fahrrad",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-bf01b1e8-d",
        "tag": "L4 · DE→ES",
        "prompt": "Grund",
        "answer": "la razón",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-bf01b1e8-s",
        "tag": "L4 · ES→DE",
        "prompt": "la razón",
        "answer": "Grund",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-ce6f31dc-d",
        "tag": "L4 · DE→ES",
        "prompt": "alt",
        "answer": "antiguo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-ce6f31dc-s",
        "tag": "L4 · ES→DE",
        "prompt": "antiguo/-a",
        "answer": "alt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-11b6645b-d",
        "tag": "L4 · DE→ES",
        "prompt": "langweilig",
        "answer": "aburrido/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-11b6645b-s",
        "tag": "L4 · ES→DE",
        "prompt": "aburrido/-a",
        "answer": "langweilig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-1fc0ceea-d",
        "tag": "L4 · DE→ES",
        "prompt": "grün",
        "answer": "verde",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-1fc0ceea-s",
        "tag": "L4 · ES→DE",
        "prompt": "verde",
        "answer": "grün",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-cd6ca85c-d",
        "tag": "L4 · DE→ES",
        "prompt": "Klima",
        "answer": "el clima",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-cd6ca85c-s",
        "tag": "L4 · ES→DE",
        "prompt": "el clima",
        "answer": "Klima",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-c1d92b45-d",
        "tag": "L4 · DE→ES",
        "prompt": "Winter",
        "answer": "el invierno",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-c1d92b45-s",
        "tag": "L4 · ES→DE",
        "prompt": "el invierno",
        "answer": "Winter",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-bf0f0f1f-d",
        "tag": "L4 · DE→ES",
        "prompt": "mild",
        "answer": "suave",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-bf0f0f1f-s",
        "tag": "L4 · ES→DE",
        "prompt": "suave",
        "answer": "mild",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-eac695c1-d",
        "tag": "L4 · DE→ES",
        "prompt": "Durchschnitt, Mittelwert",
        "answer": "la media",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-eac695c1-s",
        "tag": "L4 · ES→DE",
        "prompt": "la media",
        "answer": "Durchschnitt, Mittelwert",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-31d1c902-d",
        "tag": "L4 · DE→ES",
        "prompt": "Grad",
        "answer": "el grado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-31d1c902-s",
        "tag": "L4 · ES→DE",
        "prompt": "el grado",
        "answer": "Grad",
        "distractors": [],
        "explanation": "Auch: (akademischer) Grad"
      },
      {
        "id": "es-l4-7e53aa9f-d",
        "tag": "L4 · DE→ES",
        "prompt": "es gibt",
        "answer": "hay",
        "distractors": [],
        "explanation": "Infinitiv: haber"
      },
      {
        "id": "es-l4-7e53aa9f-s",
        "tag": "L4 · ES→DE",
        "prompt": "hay",
        "answer": "es gibt",
        "distractors": [],
        "explanation": "Infinitiv: haber"
      },
      {
        "id": "es-l4-e4f8377d-d",
        "tag": "L4 · DE→ES",
        "prompt": "Sonnenstunde",
        "answer": "la hora de sol",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-e4f8377d-s",
        "tag": "L4 · ES→DE",
        "prompt": "la hora de sol",
        "answer": "Sonnenstunde",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-1b6f8094-d",
        "tag": "L4 · DE→ES",
        "prompt": "Stunde",
        "answer": "la hora",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-1b6f8094-s",
        "tag": "L4 · ES→DE",
        "prompt": "la hora",
        "answer": "Stunde",
        "distractors": [],
        "explanation": "Auch: Uhrzeit"
      },
      {
        "id": "es-l4-a8f3e10b-d",
        "tag": "L4 · DE→ES",
        "prompt": "Sonnentag",
        "answer": "el día de luz",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-a8f3e10b-s",
        "tag": "L4 · ES→DE",
        "prompt": "el día de luz",
        "answer": "Sonnentag",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-843020dc-d",
        "tag": "L4 · DE→ES",
        "prompt": "pro Jahr, jährlich",
        "answer": "al año",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-843020dc-s",
        "tag": "L4 · ES→DE",
        "prompt": "al año",
        "answer": "pro Jahr, jährlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-621f4f29-d",
        "tag": "L4 · DE→ES",
        "prompt": "obwohl; selbst wenn",
        "answer": "aunque",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-621f4f29-s",
        "tag": "L4 · ES→DE",
        "prompt": "aunque",
        "answer": "obwohl; selbst wenn",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-7b786c2d-d",
        "tag": "L4 · DE→ES",
        "prompt": "sich bewegen",
        "answer": "moverse",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l4-7b786c2d-s",
        "tag": "L4 · ES→DE",
        "prompt": "moverse",
        "answer": "sich bewegen",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l4-e38a404a-d",
        "tag": "L4 · DE→ES",
        "prompt": "Verkehr",
        "answer": "el tráfico",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-e38a404a-s",
        "tag": "L4 · ES→DE",
        "prompt": "el tráfico",
        "answer": "Verkehr",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-a9a6b3a4-d",
        "tag": "L4 · DE→ES",
        "prompt": "ein gut funktionierendes System",
        "answer": "un buen sistema",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-a9a6b3a4-s",
        "tag": "L4 · ES→DE",
        "prompt": "un buen sistema",
        "answer": "ein gut funktionierendes System",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-6dd16dc1-d",
        "tag": "L4 · DE→ES",
        "prompt": "öffentlicher Nahverkehr",
        "answer": "el transporte público",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-6dd16dc1-s",
        "tag": "L4 · ES→DE",
        "prompt": "el transporte público",
        "answer": "öffentlicher Nahverkehr",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-63151fcb-d",
        "tag": "L4 · DE→ES",
        "prompt": "verbunden, angeschlossen",
        "answer": "conectado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-63151fcb-s",
        "tag": "L4 · ES→DE",
        "prompt": "conectado/-a",
        "answer": "verbunden, angeschlossen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-eac7d53b-d",
        "tag": "L4 · DE→ES",
        "prompt": "Zug",
        "answer": "el tren",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-eac7d53b-s",
        "tag": "L4 · ES→DE",
        "prompt": "el tren",
        "answer": "Zug",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-75328f2b-d",
        "tag": "L4 · DE→ES",
        "prompt": "zum Beispiel",
        "answer": "por ejemplo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-75328f2b-s",
        "tag": "L4 · ES→DE",
        "prompt": "por ejemplo",
        "answer": "zum Beispiel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-9dec23d7-d",
        "tag": "L4 · DE→ES",
        "prompt": "wenn",
        "answer": "si",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-9dec23d7-s",
        "tag": "L4 · ES→DE",
        "prompt": "si",
        "answer": "wenn",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-656d71d5-d",
        "tag": "L4 · DE→ES",
        "prompt": "Gebäude",
        "answer": "el edificio",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-656d71d5-s",
        "tag": "L4 · ES→DE",
        "prompt": "el edificio",
        "answer": "Gebäude",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-0bc35830-d",
        "tag": "L4 · DE→ES",
        "prompt": "emblematisch, sinnbildlich, prägend",
        "answer": "emblemático/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-0bc35830-s",
        "tag": "L4 · ES→DE",
        "prompt": "emblemático/-a",
        "answer": "emblematisch, sinnbildlich, prägend",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-7c0483ee-d",
        "tag": "L4 · DE→ES",
        "prompt": "Auktionshaus, Warenbörse",
        "answer": "la lonja",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-7c0483ee-s",
        "tag": "L4 · ES→DE",
        "prompt": "la lonja",
        "answer": "Auktionshaus, Warenbörse",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-2e9f7e76-d",
        "tag": "L4 · DE→ES",
        "prompt": "Markt",
        "answer": "el mercado",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-2e9f7e76-s",
        "tag": "L4 · ES→DE",
        "prompt": "el mercado",
        "answer": "Markt",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-0011e973-d",
        "tag": "L4 · DE→ES",
        "prompt": "selbstverständlich",
        "answer": "por supuesto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-0011e973-s",
        "tag": "L4 · ES→DE",
        "prompt": "por supuesto",
        "answer": "selbstverständlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-10586c4c-d",
        "tag": "L4 · DE→ES",
        "prompt": "ein Symbol schlechthin",
        "answer": "todo un símbolo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-10586c4c-s",
        "tag": "L4 · ES→DE",
        "prompt": "todo un símbolo",
        "answer": "ein Symbol schlechthin",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-65d7d9aa-d",
        "tag": "L4 · DE→ES",
        "prompt": "weit, breit",
        "answer": "amplio/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-65d7d9aa-s",
        "tag": "L4 · ES→DE",
        "prompt": "amplio/-a",
        "answer": "weit, breit",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-d894b2a1-d",
        "tag": "L4 · DE→ES",
        "prompt": "kulturell",
        "answer": "cultural",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-d894b2a1-s",
        "tag": "L4 · ES→DE",
        "prompt": "cultural",
        "answer": "kulturell",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-118233bb-d",
        "tag": "L4 · DE→ES",
        "prompt": "Option, Möglichkeit",
        "answer": "la opción",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-118233bb-s",
        "tag": "L4 · ES→DE",
        "prompt": "la opción",
        "answer": "Option, Möglichkeit",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-2cd61ab7-d",
        "tag": "L4 · DE→ES",
        "prompt": "Freizeit",
        "answer": "el tiempo libre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-2cd61ab7-s",
        "tag": "L4 · ES→DE",
        "prompt": "el tiempo libre",
        "answer": "Freizeit",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-0cefe78e-d",
        "tag": "L4 · DE→ES",
        "prompt": "Vorstellung, Schauspiel",
        "answer": "el espectáculo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-0cefe78e-s",
        "tag": "L4 · ES→DE",
        "prompt": "el espectáculo",
        "answer": "Vorstellung, Schauspiel",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-26af3d5b-d",
        "tag": "L4 · DE→ES",
        "prompt": "jeglicher Art",
        "answer": "de todo tipo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-26af3d5b-s",
        "tag": "L4 · ES→DE",
        "prompt": "de todo tipo",
        "answer": "jeglicher Art",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-0a80dd08-d",
        "tag": "L4 · DE→ES",
        "prompt": "Lokal",
        "answer": "el local",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-0a80dd08-s",
        "tag": "L4 · ES→DE",
        "prompt": "el local",
        "answer": "Lokal",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-aa5358d3-d",
        "tag": "L4 · DE→ES",
        "prompt": "abends ausgehen",
        "answer": "salir por la noche",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-aa5358d3-s",
        "tag": "L4 · ES→DE",
        "prompt": "salir por la noche",
        "answer": "abends ausgehen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-1d8339f7-d",
        "tag": "L4 · DE→ES",
        "prompt": "(hinaus)gehen",
        "answer": "salir",
        "distractors": [],
        "explanation": "unregelmäßig (g)"
      },
      {
        "id": "es-l4-1d8339f7-s",
        "tag": "L4 · ES→DE",
        "prompt": "salir",
        "answer": "(hinaus)gehen",
        "distractors": [],
        "explanation": "unregelmäßig (g)"
      },
      {
        "id": "es-l4-ca3e0109-d",
        "tag": "L4 · DE→ES",
        "prompt": "Liebhaber/in",
        "answer": "el / la amante",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-ca3e0109-s",
        "tag": "L4 · ES→DE",
        "prompt": "el / la amante",
        "answer": "Liebhaber/in",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-e99d72dc-d",
        "tag": "L4 · DE→ES",
        "prompt": "Sport treiben",
        "answer": "practicar deporte",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-e99d72dc-s",
        "tag": "L4 · ES→DE",
        "prompt": "practicar deporte",
        "answer": "Sport treiben",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-b5ac512f-d",
        "tag": "L4 · DE→ES",
        "prompt": "an der frischen Luft",
        "answer": "al aire libre",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-b5ac512f-s",
        "tag": "L4 · ES→DE",
        "prompt": "al aire libre",
        "answer": "an der frischen Luft",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-861b5db9-d",
        "tag": "L4 · DE→ES",
        "prompt": "(aus)probieren",
        "answer": "probar",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l4-861b5db9-s",
        "tag": "L4 · ES→DE",
        "prompt": "probar",
        "answer": "(aus)probieren",
        "distractors": [],
        "explanation": "unregelmäßig (ue)"
      },
      {
        "id": "es-l4-e79166f5-d",
        "tag": "L4 · DE→ES",
        "prompt": "Erdmandelmilch",
        "answer": "la horchata",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-e79166f5-s",
        "tag": "L4 · ES→DE",
        "prompt": "la horchata",
        "answer": "Erdmandelmilch",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-70b8339e-d",
        "tag": "L4 · DE→ES",
        "prompt": "traditionell",
        "answer": "tradicional",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-70b8339e-s",
        "tag": "L4 · ES→DE",
        "prompt": "tradicional",
        "answer": "traditionell",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-d8ecfb05-d",
        "tag": "L4 · DE→ES",
        "prompt": "Mittelmeer-",
        "answer": "mediterráneo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-d8ecfb05-s",
        "tag": "L4 · ES→DE",
        "prompt": "mediterráneo/-a",
        "answer": "Mittelmeer-",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-389adc83-d",
        "tag": "L4 · DE→ES",
        "prompt": "gelegen",
        "answer": "situado/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-389adc83-s",
        "tag": "L4 · ES→DE",
        "prompt": "situado/-a",
        "answer": "gelegen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-67a697c0-d",
        "tag": "L4 · DE→ES",
        "prompt": "außergewöhnlich",
        "answer": "excepcional",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-67a697c0-s",
        "tag": "L4 · ES→DE",
        "prompt": "excepcional",
        "answer": "außergewöhnlich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-7f7b26db-d",
        "tag": "L4 · DE→ES",
        "prompt": "Meer",
        "answer": "el mar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-7f7b26db-s",
        "tag": "L4 · ES→DE",
        "prompt": "el mar",
        "answer": "Meer",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-2179c111-d",
        "tag": "L4 · DE→ES",
        "prompt": "Berg, Gebirge",
        "answer": "la montaña",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-2179c111-s",
        "tag": "L4 · ES→DE",
        "prompt": "la montaña",
        "answer": "Berg, Gebirge",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-28ddddf6-d",
        "tag": "L4 · DE→ES",
        "prompt": "Sand",
        "answer": "la arena",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-28ddddf6-s",
        "tag": "L4 · ES→DE",
        "prompt": "la arena",
        "answer": "Sand",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-96a06a10-d",
        "tag": "L4 · DE→ES",
        "prompt": "weiß",
        "answer": "blanco/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-96a06a10-s",
        "tag": "L4 · ES→DE",
        "prompt": "blanco/-a",
        "answer": "weiß",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-2d1d0588-d",
        "tag": "L4 · DE→ES",
        "prompt": "Naturraum, naturbelassene Gegend",
        "answer": "la zona natural",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-2d1d0588-s",
        "tag": "L4 · ES→DE",
        "prompt": "la zona natural",
        "answer": "Naturraum, naturbelassene Gegend",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-91247351-d",
        "tag": "L4 · DE→ES",
        "prompt": "Zone, Gegend",
        "answer": "la zona",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-91247351-s",
        "tag": "L4 · ES→DE",
        "prompt": "la zona",
        "answer": "Zone, Gegend",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-76ba74f3-d",
        "tag": "L4 · DE→ES",
        "prompt": "wie",
        "answer": "como",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-76ba74f3-s",
        "tag": "L4 · ES→DE",
        "prompt": "como",
        "answer": "wie",
        "distractors": [],
        "explanation": "Auch: als"
      },
      {
        "id": "es-l4-5af91d26-d",
        "tag": "L4 · DE→ES",
        "prompt": "Naturpark, Naturschutzpark, Naturschutzgebiet",
        "answer": "el parque natural",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-5af91d26-s",
        "tag": "L4 · ES→DE",
        "prompt": "el parque natural",
        "answer": "Naturpark, Naturschutzpark, Naturschutzgebiet",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-8bb1dac0-d",
        "tag": "L4 · DE→ES",
        "prompt": "See",
        "answer": "el lago",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-8bb1dac0-s",
        "tag": "L4 · ES→DE",
        "prompt": "el lago",
        "answer": "See",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-367bf447-d",
        "tag": "L4 · DE→ES",
        "prompt": "Und was lässt sich nicht alles zu … sagen?",
        "answer": "¿Y qué decir de …?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-367bf447-s",
        "tag": "L4 · ES→DE",
        "prompt": "¿Y qué decir de …?",
        "answer": "Und was lässt sich nicht alles zu … sagen?",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-aa1de957-d",
        "tag": "L4 · DE→ES",
        "prompt": "sagen",
        "answer": "decir",
        "distractors": [],
        "explanation": "unregelmäßig (i, g)"
      },
      {
        "id": "es-l4-aa1de957-s",
        "tag": "L4 · ES→DE",
        "prompt": "decir",
        "answer": "sagen",
        "distractors": [],
        "explanation": "unregelmäßig (i, g)"
      },
      {
        "id": "es-l4-b00bb1c3-d",
        "tag": "L4 · DE→ES",
        "prompt": "Garten",
        "answer": "el jardín",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-b00bb1c3-s",
        "tag": "L4 · ES→DE",
        "prompt": "el jardín",
        "answer": "Garten",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-2e3b99a6-d",
        "tag": "L4 · DE→ES",
        "prompt": "spazieren gehen",
        "answer": "pasear",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-2e3b99a6-s",
        "tag": "L4 · ES→DE",
        "prompt": "pasear",
        "answer": "spazieren gehen",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-52f34fe9-d",
        "tag": "L4 · DE→ES",
        "prompt": "suche",
        "answer": "busca",
        "distractors": [],
        "explanation": "Infinitiv: buscar"
      },
      {
        "id": "es-l4-52f34fe9-s",
        "tag": "L4 · ES→DE",
        "prompt": "busca",
        "answer": "suche",
        "distractors": [],
        "explanation": "Infinitiv: buscar"
      },
      {
        "id": "es-l4-88c4e5fa-d",
        "tag": "L4 · DE→ES",
        "prompt": "Text",
        "answer": "el texto",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-88c4e5fa-s",
        "tag": "L4 · ES→DE",
        "prompt": "el texto",
        "answer": "Text",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-0cefba6f-d",
        "tag": "L4 · DE→ES",
        "prompt": "Bereich, Kategorie",
        "answer": "la categoría",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-0cefba6f-s",
        "tag": "L4 · ES→DE",
        "prompt": "la categoría",
        "answer": "Bereich, Kategorie",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-209d071b-d",
        "tag": "L4 · DE→ES",
        "prompt": "wähle",
        "answer": "elige",
        "distractors": [],
        "explanation": "Infinitiv: elegir"
      },
      {
        "id": "es-l4-209d071b-s",
        "tag": "L4 · ES→DE",
        "prompt": "elige",
        "answer": "wähle",
        "distractors": [],
        "explanation": "Infinitiv: elegir"
      },
      {
        "id": "es-l4-1a46d6ed-d",
        "tag": "L4 · DE→ES",
        "prompt": "Grund, Beweggrund",
        "answer": "el motivo",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-1a46d6ed-s",
        "tag": "L4 · ES→DE",
        "prompt": "el motivo",
        "answer": "Grund, Beweggrund",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-4a7f04f0-d",
        "tag": "L4 · DE→ES",
        "prompt": "Zielort",
        "answer": "el destino",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-4a7f04f0-s",
        "tag": "L4 · ES→DE",
        "prompt": "el destino",
        "answer": "Zielort",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-265d4635-d",
        "tag": "L4 · DE→ES",
        "prompt": "markiere",
        "answer": "marca",
        "distractors": [],
        "explanation": "Infinitiv: marcar"
      },
      {
        "id": "es-l4-265d4635-s",
        "tag": "L4 · ES→DE",
        "prompt": "marca",
        "answer": "markiere",
        "distractors": [],
        "explanation": "Infinitiv: marcar"
      },
      {
        "id": "es-l4-9e737c7b-d",
        "tag": "L4 · DE→ES",
        "prompt": "für dich",
        "answer": "para ti",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-9e737c7b-s",
        "tag": "L4 · ES→DE",
        "prompt": "para ti",
        "answer": "für dich",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-38d49682-d",
        "tag": "L4 · DE→ES",
        "prompt": "Grünfläche, Grünanlage",
        "answer": "la zona verde",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-38d49682-s",
        "tag": "L4 · ES→DE",
        "prompt": "la zona verde",
        "answer": "Grünfläche, Grünanlage",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-a20e71dd-d",
        "tag": "L4 · DE→ES",
        "prompt": "liebenswürdig",
        "answer": "amable",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-a20e71dd-s",
        "tag": "L4 · ES→DE",
        "prompt": "amable",
        "answer": "liebenswürdig",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-31a4a49c-d",
        "tag": "L4 · DE→ES",
        "prompt": "lies",
        "answer": "lee",
        "distractors": [],
        "explanation": "Infinitiv: leer"
      },
      {
        "id": "es-l4-31a4a49c-s",
        "tag": "L4 · ES→DE",
        "prompt": "lee",
        "answer": "lies",
        "distractors": [],
        "explanation": "Infinitiv: leer"
      },
      {
        "id": "es-l4-633bf78a-d",
        "tag": "L4 · DE→ES",
        "prompt": "nochmals",
        "answer": "otra vez",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-633bf78a-s",
        "tag": "L4 · ES→DE",
        "prompt": "otra vez",
        "answer": "nochmals",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-a23f91ec-d",
        "tag": "L4 · DE→ES",
        "prompt": "Tabelle",
        "answer": "la tabla",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-a23f91ec-s",
        "tag": "L4 · ES→DE",
        "prompt": "la tabla",
        "answer": "Tabelle",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-bd0a6ba0-d",
        "tag": "L4 · DE→ES",
        "prompt": "irgendein/e/r",
        "answer": "alguno/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-bd0a6ba0-s",
        "tag": "L4 · ES→DE",
        "prompt": "alguno/-a",
        "answer": "irgendein/e/r",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-67f9b840-d",
        "tag": "L4 · DE→ES",
        "prompt": "verschiedene, mehrere",
        "answer": "varios/-as",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-67f9b840-s",
        "tag": "L4 · ES→DE",
        "prompt": "varios/-as",
        "answer": "verschiedene, mehrere",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-3acc5855-d",
        "tag": "L4 · DE→ES",
        "prompt": "verbinden",
        "answer": "relacionar",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-3acc5855-s",
        "tag": "L4 · ES→DE",
        "prompt": "relacionar",
        "answer": "verbinden",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-ea54e3dc-d",
        "tag": "L4 · DE→ES",
        "prompt": "attraktiv",
        "answer": "atractivo/-a",
        "distractors": [],
        "explanation": ""
      },
      {
        "id": "es-l4-ea54e3dc-s",
        "tag": "L4 · ES→DE",
        "prompt": "atractivo/-a",
        "answer": "attraktiv",
        "distractors": [],
        "explanation": ""
      }
    ]
  }
];
const SEED = SEEDS[0];
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
/* Mitgelieferte Decks einspielen.
   - Ein Seed, der noch nie angelegt wurde, wird als neuer Tab angelegt.
   - Ein Seed, dessen Tab der Nutzer geloescht hat, kommt nicht zurueck.
   - Karten, die neu in der Quelle stehen, werden ergaenzt; vorhandene
     Karten samt Fortschritt und eigenen Aenderungen bleiben unberuehrt.
   Altbestand vor dieser Logik kennt nur das OSINT-Deck und hat es immer
   beim ersten Start bekommen — daher gilt es dort als bereits eingespielt. */
function syncSeeds(){
  if(!Array.isArray(DB.seeded)){
    DB.seeded = [];
    const legacy = Object.values(DB.decks).find(d => !d.seed &&
      listCards(d).some(c => /^osint-\d+$/.test(c.id)));
    if(SEEDS[0]){
      DB.seeded.push(SEEDS[0].key);
      if(legacy){ legacy.seed = SEEDS[0].key;
        legacy.seedIds = (SEEDS[0].cards||[]).map(c=>c.id); }   // geloeschte Karten bleiben weg
    }
  }
  SEEDS.forEach(s => {
    const src = (s.cards||[]).filter(c => c && ID_OK.test(c.id||""));
    let d = Object.values(DB.decks).find(x => x.seed === s.key);
    if(!d){
      if(DB.seeded.includes(s.key)) return;                 // bewusst geloescht
      d = newDeck(s.name, []); d.seed = s.key; d.seedIds = [];
      DB.decks[d.id] = d; DB.seeded.push(s.key);
      if(!DB.active) DB.active = d.id;
    }
    if(!Array.isArray(d.seedIds)) d.seedIds = [];
    const known = new Set(d.seedIds);
    src.forEach(raw => {
      if(known.has(raw.id)) return;
      d.seedIds.push(raw.id);
      if(d.cards[raw.id]) return;
      const c = newCard(raw, 0);
      if(c.prompt && c.answer) d.cards[c.id] = c;
    });
  });
  if(!DB.seeded.length && !Object.keys(DB.decks).length){   // leerer Notfall
    const d = newDeck("Deck", []); DB.decks[d.id] = d;
  }
}
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
    if(!DB.decks[DB.active]) DB.active = Object.keys(DB.decks)[0];
  } else {
    DB = {v:2, active:null, mode:"quiz", decks:{}, seeded:[]};
  }
  syncSeeds();
  if(!DB.decks[DB.active]) DB.active = Object.keys(DB.decks)[0];
  DB.mode = DB.mode || "quiz";
  DB.theme = DB.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme();
  $("#mode-btn").textContent = DB.mode === "quiz" ? "Quiz" : "Karte";
  $("#mode-btn").setAttribute("aria-pressed", DB.mode === "karte");
  if(!deck().current || !deck().cards[deck().current]) advance();
  Store.save(); render();
})();
