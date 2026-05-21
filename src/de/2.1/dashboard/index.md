# Dashboard

Das **Dashboard** ist die Startseite, die Sie unmittelbar nach der Anmeldung bei [UnoPim](https://unopim.com/) sehen. Es ist als Single-Screen-Kommandozentrale konzipiert: In weniger als einer Sekunde sollten Sie erkennen können, *wie groß* Ihr Katalog ist, *wie gesund* er ist, *was Ihr Team gemacht hat* und *was als nächstes Aufmerksamkeit benötigt* — ohne auf eine andere Seite klicken zu müssen.

<ImagePopup src="/assets/2.1/images/dashboard/dashboard-overview.png" alt="Dashboard-Übersicht" />

## Wofür ist das Dashboard?

Das Dashboard existiert, um vier Fragen sofort nach der Anmeldung zu beantworten:

| Frage | Wo die Antwort zu finden ist |
|---|---|
| **Wie groß ist mein Katalog?** | Katalogübersicht + Katalogstruktur-Karten |
| **Wie gesund sind meine Daten?** | Aufmerksamkeit erforderlich, Vollständigkeit, Kanalbereitschaft |
| **Was hat das Team gemacht?** | Produktstatistiken, Produktaktivitätsdiagramm, Letzte Aktivität |
| **Was tue ich als nächstes?** | Schnellaktionen im Willkommens-Banner, Aufmerksamkeit-Warnungen, Datenübertragungs-Panel |

Es ist bewusst leselastig — das Dashboard meldet den Zustand und leitet Sie dann zur richtigen Seite zum Handeln. Jede Karte und jedes Panel ist entweder anklickbar (um zur entsprechenden Auflistung zu springen) oder mit einer Schnellaktionsschaltfläche gekoppelt.

## So funktioniert das Dashboard

Die Seite besteht aus unabhängigen **Widgets**, die jeweils aus einem anderen Teil von UnoPim stammen:

```
┌───────────────────────────────────────────────────┐
│ Willkommens-Banner  (Begrüßung + Schnellaktionen) │
├───────────────────────────────────────────────────┤
│ Katalog-Übersicht  ← Produkt- und Kategorietabellen│
│ Katalog-Struktur   ← Attribute, Sprachen, Kanäle  │
├───────────────────────────────────────────────────┤
│ Benötigt Aufmerksamkeit ← Vollständigkeits-Engine │
├───────────────────────────────────────────────────┤
│ Analytik           ← Produktstatistik + 7-Tage-Diagramm │
│ Vollständigkeit    ← Vollständigkeit pro Kanal    │
│ Kanal-Bereitschaft ← Bereitschaftszahlen pro Kanal│
├───────────────────────────────────────────────────┤
│ Operationen        ← Aktivitätsprotokoll + Job-Tracker │
├───────────────────────────────────────────────────┤
│ AI Agent Schaltfläche (schwebend, unten rechts)   │
│ Themenumschalter (oben rechts, neben Glocke)      │
└───────────────────────────────────────────────────┘
```

Zählungen und Diagramme werden beim Laden der Seite berechnet (keine geplanten Jobs), sodass das Dashboard immer den aktuellen Stand der Datenbank widerspiegelt.

## Widgets

### Willkommens-Banner

Eine personalisierte Begrüßung — **"Willkommen zurück, [Ihr Name]"** — oben auf der Seite angeheftet. Es dient gleichzeitig als Startrampe für die drei häufigsten Aktionen:

- **Produkt erstellen** — führt direkt zur Produkterstellungsseite.
- **Daten importieren** — öffnet den Import-Workflow.
- **Daten exportieren** — öffnet den Export-Workflow.

::: tip
Verwenden Sie diese Schnellaktions-Schaltflächen, anstatt durch die Seitenleiste zu navigieren — das Dashboard ist darauf optimiert, Sie mit einem Klick zur Arbeit zu bringen.
:::

### Katalogübersicht

Zwei **anklickbare Zusammenfassungskarten**, die die Größe Ihres Katalogs anzeigen:

| Karte | Zeigt | Klick führt zu |
|---|---|---|
| **Produkte gesamt** | Anzahl der Produkte über alle Status und Typen hinweg. | Produktauflistungsseite. |
| **Kategorien gesamt** | Anzahl der Kategorien über den gesamten Baum hinweg. | Kategorieauflistungsseite. |

### Katalogstruktur

Eine Reihe kleiner Karten, die eine strukturelle Momentaufnahme der Kataloggestaltung liefern. Nützlich, um Konfigurationslücken zu erkennen — zum Beispiel einen neuen Kanal ohne zugewiesene Locale.

| Karte | Was sie zählt |
|---|---|
| **Attribute gesamt** | Im System definierte Produktattribute. |
| **Gruppen gesamt** | Attributgruppen. |
| **Familien gesamt** | Attributfamilien. |
| **Locales gesamt** | In den Kanälen konfigurierte Locales. |
| **Währungen gesamt** | Für die Verwendung in Kanälen eingerichtete Währungen. |
| **Kanäle gesamt** | Konfigurierte Vertriebskanäle. |

### Aufmerksamkeit erforderlich

Hebt Elemente hervor, die **sofortiges** Admin-Handeln erfordern. Die häufigste Warnung sind **nicht angereicherte Produkte** — Produkte, denen die für die Kanalbereitschaft erforderlichen Daten fehlen. Wenn der Katalog gesund ist, wird dieser Abschnitt zugeklappt und bleibt ruhig.

::: warning
Nicht angereicherte Produkte sind möglicherweise nicht bereit für die Verteilung an Ihre Vertriebskanäle. Überprüfen Sie diesen Abschnitt regelmäßig, um den Katalog versandfähig zu halten.
:::

### Analytik

#### Produktstatistiken

Eine numerische Aufschlüsselung des Katalogs — der schnellste Weg, die Gesundheit im Zeitverlauf zu beurteilen.

| Metrik | Bedeutung |
|---|---|
| **Produkte gesamt** | Gesamtanzahl der Produkte. |
| **Aktiv / Inaktiv** | Wie viele Produkte derzeit aktiviert bzw. deaktiviert sind. |
| **Produkttyp-Verteilung** | Prozentuale Aufteilung zwischen einfachen und konfigurierbaren Produkten. |
| **Neu diese Woche** | In der aktuellen Woche erstellte Produkte. |
| **Mit Varianten** | Produkte mit Variantenkonfigurationen. |
| **Durchschnittliche Vollständigkeit** | Durchschnittlicher Vollständigkeitswert über alle Produkte hinweg. |
| **Angereichert** | Anzahl der als vollständig angereichert markierten Produkte. |

::: tip Anklickbare Statistik-Kacheln
Jede Produktstatistik-Kachel fungiert nun als **Filter-Chip** — klicken Sie auf *Aktiv*, *Inaktiv*, *Mit Varianten*, *Angereichert* oder *Neu diese Woche*, und das Dashboard leitet Sie direkt in die Produktauflistung weiter, vorgefiltert nach dieser Gruppe. Sie müssen den Filter nicht manuell neu erstellen.
:::

#### Produktaktivität (Letzte 7 Tage)

Ein zweizeiliges Diagramm, das **Erstellte** vs. **Aktualisierte** Produkte pro Tag der letzten sieben Tage darstellt. Flache Linien bei Null sind ein Hinweis darauf, dass es im Katalog ruhig geworden ist; Spitzen bedeuten meist, dass gerade ein Massenimport oder Anreicherungslauf abgeschlossen wurde.

### Vollständigkeit

Zeigt, wie gut Ihre Produktdaten die Anforderungen jedes **Kanals** erfüllen, mit **nebeneinander sichtbaren Aufschlüsselungen pro Locale**. Für jeden konfigurierten Kanal (z. B. *Default*, *Amazon*, *Flipkart*) zeigt die Karte:

- Einen **Gesamt-Kanalprozentsatz** als kreisförmiges Messgerät.
- **Zeilen pro Locale** — eine Zeile pro dem Kanal zugewiesener Locale (z. B. Deutsch, Englisch, Französisch), jede mit ihrem eigenen Messgerät.
- Ein **kurzes Urteil** unter dem Hauptmessgerät:

| Nachricht | Bedeutung |
|---|---|
| **Fast vollständig** | Beinahe bereit — nur kleinere Ergänzungen erforderlich. |
| **Geringe Vollständigkeit, fügen Sie Details hinzu, um sie zu verbessern** | Erhebliche Produktinformationen fehlen noch. |

Dieses Layout macht es einfach, die genaue Kanal-+-Locale-Kombination zu identifizieren, die verhindert, dass ein Produkt versandfähig ist.

::: tip
Arbeiten Sie zuerst an der Kanal-Locale-Paarung mit der niedrigsten Bewertung. Ein Produkt kann für *Default* bereit sein, aber bei *Amazon → Französisch* immer noch blockiert sein, wenn in dieser spezifischen Kombination ein erforderliches Attribut fehlt.
:::

### Kanalbereitschaft

Eine horizontale **Fortschrittsleiste pro Kanal**, die *"X von Y Produkten bereit"* mit einem Prozentsatz anzeigt (z. B. *"2 von 3 Produkten bereit — 67 %"*). Während das Vollständigkeits-Widget die *durchschnittliche Qualität* anzeigt, zeigt die Kanalbereitschaft die *versandfähige Anzahl* — die Anzahl der Produkte, die die Pflichtfeldgrenze dieses Kanals überschreiten.

### Operationen

#### Letzte Aktivität

Ein chronologischer Feed der Änderungen im gesamten System. Jeder Eintrag erfasst:

| Feld | Bedeutung |
|---|---|
| **Aktionstyp** | Erstellt, aktualisiert oder gelöscht. |
| **Entitätstyp** | Familie, Attribut, Produkt, Kategorie, Kanal usw. |
| **Benutzername** | Wer die Aktion ausgeführt hat. |
| **Zeitstempel** | Wann sie passiert ist. |

Dies ist der schnellste Weg, um die Frage *"Hat jemand kürzlich X geändert?"* zu beantworten, ohne den Verlaufstab jeder Entität öffnen zu müssen.

#### Datenübertragung

Statuspanel für Ihre letzten Import- und Export-Aufträge. Jeder Auftrag zeigt einen von fünf Zuständen:

| Status | Bedeutung |
|---|---|
| **Abgeschlossen** | Der Auftrag wurde erfolgreich beendet. |
| **In Bearbeitung** | Der Auftrag läuft derzeit. |
| **Ausstehend** | Der Auftrag steht in der Warteschlange und wartet auf den Start. |
| **Fehlgeschlagen** | Der Auftrag ist auf Fehler gestoßen. |
| **Abgebrochen** | Der Auftrag wurde manuell abgebrochen. |

Klicken Sie auf **"Alle Aufträge anzeigen"**, um den vollständigen **Job-Tracker** mit Fortschrittsleisten für jeden Schritt sowie Pause-/Wiederaufnahme-/Abbruchsteuerung zu öffnen.

### AI Agent

Eine schwebende **"Open Agenting PIM"**-Schaltfläche befindet sich in der unteren rechten Ecke des Dashboards (und auf jeder anderen Admin-Seite). Ein Klick darauf öffnet den konversationellen AI Agent — geben Sie ein, was Sie benötigen, in einfachem Englisch, und er ruft in Ihrem Auftrag das richtige PIM-Tool auf.

::: tip
Der AI Agent kann Produkte erstellen, Inhalte anreichern, Datenqualitäts-Scans durchführen und Fragen zu Ihrem Katalog beantworten, ohne dass Sie durch die Seitenleiste navigieren müssen. Die vollständige Liste der über 30 Tools finden Sie unter **[AI Agent Chat](../ai-agent/ai-agent-chat.md)**.
:::

### Dunkles / Helles Theme

UnoPim unterstützt einen **Dunkel-/Hell-Theme**-Schalter. Klicken Sie auf das Sonnen-/Mond-Symbol in der oberen rechten Ecke der Kopfleiste (neben der Benachrichtigungsglocke), um zwischen hellem und dunklem Modus zu wechseln. Ihre Präferenz bleibt über Sitzungen hinweg erhalten, sodass jede Seite — das Dashboard, die Produktauflistung, Editoren und der AI Agent Chat — das von Ihnen gewählte Theme beibehält.

<ImagePopup src="/assets/2.1/images/settings/dark-theme.png" alt="Dunkles Theme" />

::: tip
Der Theme-Schalter ist global. Der von Ihnen gewählte Modus gilt überall im Admin, nicht nur im Dashboard.
:::

## Typischer Dashboard-Workflow

Eine gängige Art, wie Admins das Dashboard zu Beginn einer Schicht nutzen:

1. **Prüfen Sie Aufmerksamkeit erforderlich** — beseitigen Sie dringende Warnungen (z. B. nicht angereicherte Produkte).
2. **Scannen Sie Vollständigkeit und Kanalbereitschaft** — wählen Sie den schwächsten Kanal/die schwächste Locale aus und planen Sie eine Bereinigung.
3. **Überfliegen Sie Letzte Aktivität** — bestätigen Sie, dass nächtliche Jobs beendet wurden und die Änderungen der Teamkollegen sinnvoll sind.
4. **Öffnen Sie Datentransfer** — beobachten Sie laufende Importe/Exporte oder klicken Sie sich für Details durch zum Job-Tracker.
5. **Starten Sie die Arbeit** — verwenden Sie eine Schnellaktion im Willkommens-Banner oder die AI-Agent-Schaltfläche, um die Aufgaben des Tages zu beginnen.

Wenn Sie diesem Ablauf folgen, wird das Dashboard eher zu einem täglichen Triage-Bildschirm als nur zu einer Landing Page.

## Aktualisierung des Dashboard-Caches

Die schwereren Widgets des Dashboards — Gesamtzählungen, Produktstatistiken, Kanalbereitschaft und die Liste „Aufmerksamkeit erforderlich" — werden zwischengespeichert, sodass die Seite auch bei großen Katalogen sofort lädt. Cache-Einträge werden bei Schreibvorgängen automatisch invalidiert (das Erstellen eines Produkts leert `dashboard.product_stats` usw.), sodass Sie unter normaler Nutzung immer aktuelle Daten sehen sollten.

Wenn Sie jemals einen **Neuladevorgang erzwingen** müssen — zum Beispiel nach einem Massendatenbankimport, der außerhalb der normalen Repository-Schicht geschrieben hat, oder um zu bestätigen, dass eine Statistik wirklich veraltet ist und nicht nur zwischengespeichert — führen Sie aus:

```sh
php artisan unopim:dashboard:refresh
```

Der Befehl leert diese fünf Cache-Schlüssel:

- `dashboard.total_catalogs`
- `dashboard.total_configurations`
- `dashboard.product_stats`
- `dashboard.needs_attention`
- `dashboard.channel_readiness`

Die nächste Anfrage, die das Dashboard erreicht, wird sie aus der Datenbank neu berechnen.

::: tip Wann sollte er ausgeführt werden?
Im normalen Betrieb fast nie — UnoPim invalidiert den Cache für Sie. Greifen Sie zu diesem Befehl, wenn Sie:

- Daten direkt mit SQL importiert haben (Umgehung der Import-Pipeline).
- Ein Datenbank-Backup wiederhergestellt haben und das Dashboard Zahlen vor der Wiederherstellung anzeigt.
- Eine benutzerdefinierte Integration erstellt haben, die über `DB::table()` schreibt, anstatt über UnoPim-Repositories.
:::

::: tip Zeitplanung
Sie können `unopim:dashboard:refresh` von Ihrem Scheduler aus aufrufen (z. B. einmal pro Stunde), wenn externe Systeme in die Datenbank schreiben. Fügen Sie ihn in `app/Console/Kernel.php` neben den anderen UnoPim-Zeitplänen hinzu.
:::
