# Export 

Der Export von Daten zur Speicherung von Informationen in Dateien ist eine gängige Praxis für Datenmanagement, Analyse und Austausch. Dabei werden Daten von einem Quellsystem in ein Dateiformat übertragen, das für die Speicherung, zukünftige Verwendung oder den Austausch mit anderen geeignet ist. 

### Schritte zum Hinzufügen eines Bulk-Exports in UnoPim

**Schritt 1:** Gehen Sie zum Admin-Panel von UnoPim und klicken Sie in der Seitenleiste auf **Datentransfer → Exporte**, klicken Sie dann auf die Schaltfläche **Export erstellen**.

 <ImagePopup src="/assets/2.0/images/data-transfer/export-listing.png" alt="Export-Auflistung" />

**Schritt 2:** Fügen Sie unter den allgemeinen Konfigurationen die unten stehenden Felder hinzu.

1) **Code -** Geben Sie den Code Ihres Export-Prozesses ein.

2) **Type -** Wählen Sie den Typ (Products, Categories), den Sie exportieren möchten.

3) **Filters -** Wählen Sie das Format der Datei **(CSV, XLS, XLSX)** gemäß Ihren Anforderungen aus dem Dropdown.

4) **With Media -** Aktivieren oder deaktivieren Sie diese Option, wenn Sie die Exportdaten mit oder ohne Medien benötigen. 

Klicken Sie nun auf die Schaltfläche **Save Export**. Das Profil wird gespeichert und Sie kehren zur Exportauflistung zurück.

 <ImagePopup src="/assets/2.0/images/data-transfer/create-export-form.png" alt="Export-Erstellungsformular" />

Das Export-Erstellungsformular hat ein zweispaltiges Layout:
- **Allgemein-Panel (links)** — Code, Typ (Products/Categories)
- **Filter-Panel (rechts)** — Dateiformat (CSV/XLS/XLSX-Dropdown), Mit Medien (Umschalter)

**Schritt 3:** Klicken Sie aus der Exportauflistung auf das **Export**-Aktionssymbol (Play-Symbol) in der Zeile, die Sie ausführen möchten. Dies öffnet die Ausführungsseite, die eine Zusammenfassung der Exportkonfiguration anzeigt:

- **Export Profile** — Der Export-Code
- **File Format** — CSV, XLS oder XLSX
- **With Media** — Ja oder Nein

Klicken Sie auf die Schaltfläche **Jetzt exportieren**. UnoPim stellt den Job in die Warteschlange und leitet Sie zur **Job-Tracker**-Detailansicht für diesen Job weiter.

## Export-Tracker

**Schritt 4:** Die Job-Tracker-Detailseite zeigt die Schritt-Pipeline in Echtzeit an. Jeder Schritt leuchtet mit einem grünen Häkchen auf, wenn er abgeschlossen ist, und wenn der Job fertig ist, erhalten Sie ein Erfolgsbanner sowie Datensatzzählungen und Download-Links:

 <ImagePopup src="/assets/2.0/images/data-transfer/export-progress.png" alt="Export-Detailseite — Schritt-Pipeline" />

Der Tracker zeigt eine **Schritt-Pipeline** mit visuellen Fortschrittsanzeigen:

| Schritt | Beschreibung |
|------|-------------|
| **Queued** | Der Job ist in der Warteschlange und wartet auf die Verarbeitung |
| **Validating** | Die Exportkonfiguration wird validiert |
| **Exporting** | Datensätze werden in die Exportdatei geschrieben |
| **Complete** | Export erfolgreich abgeschlossen |

Jeder Schritt zeigt ein grünes Häkchen, wenn er abgeschlossen ist. Unterhalb der Pipeline sehen Sie:
- **Erfolgsmeldung** — „Job completed successfully" mit der Gesamtdauer
- **Records Created / Updated / Deleted** — Genaue Zählungen der exportierten Datensätze
- **Gesamtdauer** — Wie lange der Export gedauert hat
- **Download log** — Laden Sie die vollständige Export-Logdatei herunter
- **Download Exported Files**-Schaltfläche — Klicken Sie, um die generierte Datei herunterzuladen

### Pause-, Resume- und Cancel-Steuerungen

Während eines aktiven Exports erscheinen **Job-Steuerungsschaltflächen** im Tracker:

- **Pause** — Stoppt einen laufenden Export vorübergehend. Der Job-Zustand bleibt erhalten.
- **Resume** — Setzt einen pausierten Export von dem Punkt fort, an dem er aufgehört hat.
- **Cancel** — Stoppt einen Export vollständig. Abgebrochene Jobs können nicht fortgesetzt werden.

::: tip
Die Pause- und Resume-Funktion ist besonders nützlich für große Exporte. Sie können einen Job zu Spitzenzeiten pausieren und ihn zu Nebenzeiten fortsetzen.
:::

## Schneller Produkt-Export

UnoPim unterstützt die **dynamische Verwaltung von Quick-Product-Export-Jobs**. Sie können ausgewählte Produkte schnell direkt aus der Produktauflistung exportieren:

1. Navigieren Sie zu **Katalog → Produkte**
2. Wählen Sie die Produkte aus, die Sie exportieren möchten (oder exportieren Sie alle)
3. Klicken Sie auf die Schaltfläche **Quick Export** oben rechts
4. Wählen Sie das Format (CSV, XLS, XLSX)
5. Der Export wird verarbeitet und heruntergeladen

::: tip
Für große Exporte verwendet das System eine **optimierte Export-Pipeline** mit Eager Loading und einer erhöhten Batch-Größe (bis zu 200) für bessere Leistung. Kategorie-Exporte wurden optimiert, um Speicherüberlastung zu vermeiden.
:::

Mit den obigen Schritten können Sie ganz einfach Exportdaten in UnoPim erstellen.
