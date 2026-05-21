# Import

Der Bulk-Import ist eine Funktion, mit der Benutzer schnell und effizient große Datenmengen in ein System importieren können. Er vereinfacht den Prozess und spart Zeit, da nicht jede einzelne Information einzeln hinzugefügt werden muss.

Die Funktion arbeitet bei jedem System anders und hat eine breite Palette von Anwendungsfällen in vielen Branchen sowie in [UnoPim](https://unopim.com/).

### Schritte zum Hinzufügen eines Bulk-Imports in UnoPim

**Schritt 1:** Gehen Sie zum Admin-Panel von UnoPim und klicken Sie in der Seitenleiste auf **Datentransfer → Importe** und klicken Sie dann auf die Schaltfläche **Import erstellen**.

 <ImagePopup src="/assets/2.0/images/data-transfer/import-listing.png" alt="Import-Auflistung" />

**Schritt 2:** Fügen Sie unter den allgemeinen Konfigurationen die unten stehenden Felder hinzu:

1) **Code -** Geben Sie den Code Ihres Import-Prozesses ein.

2) **Type -** Wählen Sie den Typ (Products, Categories), den Sie importieren möchten.

3) **File / Images –** ein kombiniertes Panel, das sowohl die Datendatei als auch alle vom Datei referenzierten Produktbilder abdeckt:
   - **File \*** – ziehen Sie eine **CSV / XLSX / XLS**-Datei auf den Upload-Bereich (*"Click to upload or drag and drop"*) oder klicken Sie zum Durchsuchen. Die zulässigen Dateitypen werden unter dem Label angezeigt.
   - **Download {Type} Sample CSV** – Link, der die Beispieldatei für den ausgewählten Typ herunterlädt (z. B. *"Download Categories Sample CSV"*, wenn Typ Categories ist). Verwenden Sie ihn, um das erwartete Spaltenlayout zu bestätigen, bevor Sie Ihre eigene Datei hochladen.
   - **Images → Path** – der zweiteilige Pfad, den UnoPim zum Auffinden von Produktbildern verwendet:
     - Das Präfix ist auf `storage/app/public/` festgelegt.
     - Der bearbeitbare Suffix ist standardmäßig etwas wie `import-images/my-products`.
     - Klicken Sie auf **Upload Images to set Path**, um einen Bilderordner hochzuladen; UnoPim speichert ihn unter dem Präfix und füllt den Suffix automatisch für Sie aus.
   - Hilfetext unter dem Feld: *"Place images in `storage/app/public/`. For images at `storage/app/public/import-images`, include `import-images/` in the path and use only the file name in the import file."*

4) **Action –** Wählen Sie Create/Update oder Delete aus dem Settings-Panel, um zu steuern, ob übereinstimmende Zeilen upserted oder entfernt werden.

5) **Validation Strategy –** Wählen Sie **Skip Errors** oder **Stop on Errors**, um zu entscheiden, wie der Importer reagiert, wenn eine Zeile die Validierung nicht besteht.

6) **Allowed Errors –** Maximale Anzahl von Zeilenfehlern, die der Import toleriert, bevor er anhält. Standard: **`10`**.

7) **Field Separator –** Das Zeichen, das Spalten in der CSV-Datei trennt. Standard: **`;`** (Semikolon). Wird nur für CSV-Dateien verwendet.

Klicken Sie nun auf die Schaltfläche **Save Import**.  

 <ImagePopup src="/assets/2.0/images/data-transfer/create-import-form.png" alt="Import-Erstellungsformular" />

Das Import-Erstellungsformular hat ein zweispaltiges Layout:
- **Allgemein-Panel (links)** — Code, Typ (Products/Categories), plus einen kombinierten **File / Images**-Block mit dem Datei-Upload-Bereich, dem Link *Download {Type} Sample CSV* und dem Feld **Images → Path** mit seiner Schaltfläche *Upload Images to set Path*.
- **Settings-Panel (rechts)** — Action (Create/Update), Validation Strategy (Stop on Errors / Skip Errors), Allowed Errors (Standard `10`), Field Separator (Standard `;`).

### Drag-and-Drop-Datei-Upload

UnoPim v2.0 unterstützt **Drag-and-Drop-Datei-Upload** für Importdateien. Der Upload-Bereich zeigt **"Click to upload or drag and drop"** mit unterstützten Dateitypen (CSV, XLSX, XLS) an. Sie können eine Datei direkt aus Ihrem Dateimanager auf den gestrichelten Upload-Bereich ziehen.

### Dynamische Import-Job-Filter

Import-Jobs unterstützen **dynamische Filter**, die es Ihnen ermöglichen, erweiterte Filterbedingungen für Ihre Importdaten zu konfigurieren. Dies hilft Ihnen, genau zu steuern, welche Datensätze basierend auf spezifischen Kriterien importiert werden.

**Schritt 3:** Klicken Sie aus der Import-Auflistung auf das **Import**-Aktionssymbol (Play-Symbol) in der Zeile des Imports, den Sie ausführen möchten. Dies öffnet die Ausführungsseite, die eine Zusammenfassung der Importkonfiguration anzeigt:

- **Import Profile** — Der Import-Code
- **File Path** — Der hochgeladene Dateispeicherort
- **Action Mode** — Create/Update oder Delete

Klicken Sie auf die Schaltfläche **Jetzt importieren**, um die Verarbeitung zu starten. UnoPim stellt den Job in die Warteschlange und leitet Sie zur **Job-Tracker**-Detailansicht für diesen Job weiter.

## Import-/Export-Tracker

**Schritt 4:** Die Job-Tracker-Detailseite zeigt die Schritt-Pipeline in Echtzeit an. Wenn die Validierung Fehler erkennt, zeigt die Seite sie mit Zeilennummern und dem genauen Feld, das fehlgeschlagen ist, plus einer Schaltfläche **Vollständigen Bericht herunterladen**:

 <ImagePopup src="/assets/2.0/images/data-transfer/import-progress.png" alt="Import-Detailseite — Validierungsfehler" />

Der Tracker zeigt eine **Schritt-Pipeline** mit visuellen Fortschrittsanzeigen:

| Schritt | Beschreibung |
|------|-------------|
| **Queued** | Der Job ist in der Warteschlange und wartet auf die Verarbeitung |
| **Validating** | Die Datei wird gegen Importregeln validiert |
| **Importing** | Datensätze werden in der Datenbank erstellt/aktualisiert |
| **Indexing** | Elasticsearch-Indizes werden aktualisiert |
| **Complete** | Import erfolgreich abgeschlossen |

Jeder Schritt zeigt ein grünes Häkchen, wenn er abgeschlossen ist. Unterhalb der Pipeline sehen Sie:
- **Erfolgs-/Fehlermeldung** — Ob der Job abgeschlossen oder fehlgeschlagen ist, mit Details
- **Records Created / Updated / Deleted** — Genaue Zählungen dessen, was sich geändert hat
- **Gesamtdauer** — Wie lange der Import gedauert hat
- **Download log** — Laden Sie die vollständige Import-Logdatei herunter
- **Fehlerdetails** — Wenn die Validierung fehlschlägt, sehen Sie die spezifischen Fehler (z. B. „Required columns not found: code")

### Pause-, Resume- und Cancel-Steuerungen

Während eines aktiven Imports erscheinen **Job-Steuerungsschaltflächen** im Tracker:

- **Pause** — Stoppt einen laufenden Import vorübergehend. Der Job-Zustand bleibt erhalten und kann später fortgesetzt werden.
- **Resume** — Setzt einen pausierten Import von dem Punkt fort, an dem er aufgehört hat.
- **Cancel** — Stoppt einen Import vollständig. Abgebrochene Jobs können nicht fortgesetzt werden.

::: tip
Die Pause- und Resume-Funktion ist besonders nützlich für große Importe. Sie können einen Job zu Spitzenzeiten pausieren und ihn zu Nebenzeiten fortsetzen.
:::

Sie können auch den unten stehenden Befehl im Stammverzeichnis Ihres UnoPim ausführen, um die Importwarteschlange zu verarbeiten:

```bash
php artisan queue:listen
```

Mit den obigen Schritten können Sie ganz einfach Importdaten in UnoPim erstellen.
