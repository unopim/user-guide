# Job-Tracker

> **Seitenleiste:** Datentransfer → **Job-Tracker**
> **URL:** `/admin/data-transfer/job-tracker`

Der **Job-Tracker** ist die zentrale Überwachungsseite für jeden Import- und Export-Job, den UnoPim ausführt. Wenn Sie *Import Now* oder *Export Now* aus einem Profil klicken oder einen Hintergrundjob ausgelöst beobachten, ist dies der Bildschirm, der Ihnen zeigt, was gerade passiert, was abgeschlossen ist und was — falls überhaupt — schief gelaufen ist.

## Was ist der Job-Tracker?

Eine einzelne Echtzeit-Ansicht jedes Datenübertragungs-Jobs im System. Anstatt Import- und Export-Auflistungen separat zu durchsuchen, öffnen Sie eine Seite und sehen:

- **Status jedes Jobs** — in der Warteschlange, verarbeitend, vollständig, fehlgeschlagen, abgebrochen, pausiert.
- **Live-Fortschritt** — aktueller Schritt in der Pipeline, Anzahl der bisher erstellten / aktualisierten / gelöschten Datensätze.
- **Steuerungen** — pausieren, fortsetzen oder einen laufenden Job abbrechen.
- **Logs und Artefakte** — laden Sie das Job-Log oder die exportierte Datei herunter, sobald der Lauf beendet ist.

<ImagePopup src="/assets/2.0/images/data-transfer/tracker.png" alt="Job-Tracker" />

## Wie funktioniert es?

Jeder Import und Export läuft als in die Warteschlange eingereihter Job. In dem Moment, in dem Sie einen starten, geht UnoPim wie folgt vor:

1. Erstellt einen **Job-Datensatz** mit einer eindeutigen ID, dem Status `Queued` und der eingereichten Konfiguration.
2. Sobald der Queue-Worker ihn aufgreift, durchläuft der Job eine feste **Schritt-Pipeline** — jeder Schritt aktualisiert den Datensatz.
3. Die Job-Tracker-Seite abonniert diese Aktualisierungen und zeichnet die Fortschritts-Benutzeroberfläche live neu (keine Aktualisierung erforderlich).
4. Wenn der Job in einem Endzustand landet (`Complete`, `Failed`, `Cancelled`), werden die Logdatei und alle erzeugten Artefakte über den Tracker herunterladbar.

Da jeder Schritt in denselben Datensatz schreibt, können Sie mitten im Lauf vom Tracker weg navigieren und später zurückkommen — die Seite stellt den aktuellen Zustand aus der Datenbank wieder her.

## Job-Status

Jede Zeile im Tracker zeigt den aktuellen Status des Jobs als farbigen Chip an:

| Status | Bedeutung |
|---|---|
| **Queued** | Der Job ist in der Warteschlange und wartet auf einen Worker. |
| **Validating** / **Validated** | Die Datei wird validiert oder die Validierung wurde erfolgreich abgeschlossen und der Import ist bereit zur Ausführung. |
| **Processing** | Ein Worker hat ihn aufgegriffen und die Pipeline schreitet voran. |
| **Paused** | Sie haben ihn mitten im Lauf gestoppt; der Zustand bleibt erhalten und er kann fortgesetzt werden. |
| **Completed** | Alle Schritte wurden erfolgreich beendet. |
| **Failed** | Ein Schritt hat einen Fehler ausgelöst; siehe das Log für Details. |
| **Cancelled** | Sie haben ihn dauerhaft gestoppt; kann nicht fortgesetzt werden. |

## Tracker-Auflistungsspalten

Der Tracker ist ein Datagrid; eine Zeile pro Job:

| Spalte | Beschreibung |
|---|---|
| **ID** | Auto-inkrementierte Job-ID. Stimmt mit dem `#n`-Suffix in Benachrichtigungen überein (z. B. *Import #15*). |
| **Job** | Der Profilcode (z. B. `product_export`, `category_import`). |
| **Type** | Was übertragen wird — `Products` oder `Categories`. |
| **Job Type** | Wie der Job ausgelöst wurde — `import`, `export` oder `system` (geplant, Bulk oder vom AI Agent initiiert). |
| **Status** | Aktueller Zustand (siehe Tabelle oben). |
| **User** | Der Admin, der den Job gestartet hat. |
| **Started at** / **Completed at** | Zeitstempel. |
| **Actions** | **Augen-Symbol** — öffnet die Job-Detailseite, auf der die Schritt-Pipeline, der Live-Fortschritt und die Pause-/Resume-/Cancel-Steuerungen angezeigt werden. |

<ImagePopup src="/assets/2.0/images/data-transfer/tracker.png" alt="Job-Tracker-Auflistung" />

## Systemjobs und vom AI Agent ausgelöste Jobs

Nicht jeder Eintrag im Tracker stammt aus einem manuellen Import / Export. Jobs fallen in drei Kategorien, die in der Spalte **Job Type** angezeigt werden:

| Job-Typ | Woher er kommt |
|---|---|
| `import` | Ein manueller Lauf aus **Datentransfer → Imports**. |
| `export` | Ein manueller Lauf aus **Datentransfer → Exports** oder ein **Quick Export** aus der Produktauflistung. |
| `system` | Ein Hintergrundjob — Bulk-Produktupdates, geplante Katalogqualitätsscans, Auto-Enrichment-Läufe oder Exports, die der AI Agent in Ihrem Auftrag erstellt hat. Vom AI Agent initiierte Jobs erscheinen mit Namen wie `ai-agent-export-…`. |

Alle drei teilen denselben Lebenszyklus, dieselben Status-Chips, Logs und Pause-/Resume-/Cancel-Steuerungen — der einzige Unterschied besteht darin, wie sie gestartet wurden.

::: tip
Wenn Sie einen `system`-Job sehen, den Sie nicht erkennen, klicken Sie auf das Augen-Symbol, um die Detailseite zu öffnen. Die Detailansicht zeigt den Benutzer, der die Kette ausgelöst hat, und bei AI-Agent-Jobs die Chat-Nachricht, die ihn erzeugt hat.
:::

## Schritt-Pipelines (auf der Job-Detailseite)

Klicken Sie auf das **Augen-Symbol** in einer Zeile im Tracker, um die Job-Detailseite zu öffnen. Die Detailseite visualisiert den Job als horizontale Schritt-Pipeline. Die genauen Schritte hängen vom Job-Typ ab:

### Import-Pipeline

| Schritt | Beschreibung |
|------|-------------|
| **Queued** | Der Job wartet auf einen Worker. |
| **Validating** | Die Datei wird gegen die Importregeln validiert. |
| **Importing** | Datensätze werden in der Datenbank erstellt / aktualisiert / gelöscht. |
| **Indexing** | Elasticsearch-Indizes werden aktualisiert, damit Produkte durchsuchbar sind. |
| **Complete** | Import erfolgreich abgeschlossen. |

<ImagePopup src="/assets/2.0/images/data-transfer/import-progress.png" alt="Import-Fortschritt" />

### Export-Pipeline

| Schritt | Beschreibung |
|------|-------------|
| **Queued** | Der Job wartet auf einen Worker. |
| **Validating** | Die Exportkonfiguration wird validiert. |
| **Exporting** | Datensätze werden in die Ausgabedatei geschrieben. |
| **Complete** | Export erfolgreich abgeschlossen. |

<ImagePopup src="/assets/2.0/images/data-transfer/export-progress.png" alt="Export-Fortschritt" />

Jeder abgeschlossene Schritt wird mit einem grünen Häkchen gerendert. Ein fehlgeschlagener Schritt wird rot gerendert und die Pipeline stoppt dort — nachfolgende Schritte werden übersprungen.

## Für jeden Job angezeigte Details

Unterhalb der Pipeline zeigt der Tracker:

- **Erfolgs-/Fehlermeldung** — *„Job completed successfully"* plus Gesamtdauer oder den spezifischen Fehler, der den Lauf gestoppt hat (z. B. *„Required columns not found: code"*).
- **Records Created / Updated / Deleted** — exakte Zählungen dessen, was sich geändert hat.
- **Gesamtdauer** — wie lange der Job vom Einstellen in die Warteschlange bis zum Endzustand gedauert hat.
- **Download log** — vollständiges Import-/Export-Log zur Offline-Überprüfung.
- **Download Exported Files** *(nur Exports)* — die vom Lauf erzeugte CSV/XLS/XLSX-Datei.

## Steuerungen

### Pause

Klicken Sie während eines `Processing`-Laufs auf **Pause**, um den Job vorübergehend zu stoppen. UnoPim friert den Job-Zustand im aktuellen Batch ein — keine Datensätze gehen verloren, nichts wird zurückgerollt, und der Queue-Worker geht zu anderer Arbeit über.

### Resume

Klicken Sie bei einem `Paused`-Job auf **Resume**, um vom nächsten Batch fortzufahren. Der Job nimmt genau dort wieder auf, wo er aufgehört hat — bereits verarbeitete Datensätze werden nicht erneut verarbeitet.

### Cancel

Klicken Sie auf **Cancel**, um einen Job dauerhaft zu stoppen. Der Job wechselt in den `Cancelled`-Zustand und kann nicht fortgesetzt werden. Datensätze, die von früheren Schritten bereits geschrieben wurden, werden **nicht** zurückgerollt — wenn Sie sie rückgängig machen müssen, führen Sie einen Cleanup-Import aus.

::: tip
Pause ist die richtige Wahl während Spitzenzeiten bei einem großen Job. Cancel ist für *„dieser Import hatte die falsche Datei"*-Situationen — sobald Sie abbrechen, beginnen Sie wieder auf der Auflistungsseite.
:::

## Den Job-Tracker öffnen

Drei gängige Einstiegspunkte:

1. **Aus der Admin-Seitenleiste** — klicken Sie auf **Datentransfer → Job-Tracker**.
2. **Nach dem Starten eines Jobs** — die Schaltfläche *Import Now* / *Export Now* leitet Sie direkt zum Tracker für den gerade gestarteten Job weiter.
3. **Vom Dashboard** — das **Datentransfer**-Widget listet kürzliche Jobs und ein *„View All Jobs"*-Link führt zum Tracker.

## Wie der Tracker mit Imports und Exports zusammenhängt

| Seite | Rolle |
|---|---|
| **[Import](./import.md)** | Definieren Sie ein Importprofil (Code, Typ, Datei, Validierungsstrategie, Aktionsmodus). |
| **[Export](./export.md)** | Definieren Sie ein Exportprofil (Code, Typ, Dateiformat, Medien). |
| **Job-Tracker** (diese Seite) | Überwachen Sie die Läufe, die diese Profile erzeugen — Status, Fortschritt, Logs, Artefakte. |

Profile sind *wiederverwendbare Konfigurationen*. Jedes Mal, wenn Sie auf einem Profil *Import Now* oder *Export Now* drücken, wird ein neuer Job erstellt und im Job-Tracker angezeigt.

## Hintergrundverarbeitung

Jobs laufen auf dem Laravel-Queue-Worker. Wenn Sie keine Fortschritte bei eingereihten Jobs sehen, stellen Sie sicher, dass ein Worker läuft:

```bash
php artisan queue:listen
```

Führen Sie den Worker in der Produktion als verwalteten Dienst aus (systemd, Supervisor, …), damit er über Neustarts hinweg aktiv bleibt.
