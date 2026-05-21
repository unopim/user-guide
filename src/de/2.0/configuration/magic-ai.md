# Magic AI-Konfiguration

**Magic AI** ist die in UnoPim integrierte Schicht zum Generieren, Anreichern und Übersetzen von Produkt- und Kategorieinhalten mit Large Language Models (LLMs). Bevor Sie eine KI-Funktion nutzen können — die Magic AI-Zauberstab-Symbole auf Produktfeldern, den AI Agent Chat, die automatische Übersetzung oder die automatische Anreicherung — müssen Sie zunächst Magic AI über die Admin-Seitenleiste konfigurieren.

<ImagePopup src="/assets/2.0/images/configuration/AiConfiguration.png" alt="Magic AI-Konfigurationsübersicht" />

## Was macht Magic AI?

Magic AI verbindet Ihre UnoPim-Instanz mit einem oder mehreren externen KI-Anbietern (OpenAI, Anthropic, Gemini, Ollama, Groq usw.) und stellt diese Leistung im PIM auf vier Arten bereit:

| Fähigkeit | Wo sie in der Benutzeroberfläche erscheint | Was sie tut |
|---|---|---|
| **Textgenerierung** | Zauberstab-Symbol neben Produkt-/Kategorie-Textfeldern | Schreibt Namen, Beschreibungen, SEO-Metafelder, Kategorietexte |
| **Bilderzeugung** | Zauberstab-Symbol neben Bild-/Galerie-Attributen | Erstellt Produktbilder aus einer Textbeschreibung |
| **Übersetzung** | Automatisch beim Speichern eines Produkts, plus ein Bulk-Befehl | Übersetzt locale-spezifische Werte über alle konfigurierten Locales hinweg |
| **Agentic PIM (AI Agent Chat)** | „Open Agenting PIM"-Schaltfläche, unten rechts | Konversationeller Assistent, der über 30 PIM-Tools in Ihrem Auftrag aufruft |

Alle vier teilen sich dieselben Provider-Verbindungen, dieselbe Prompt-Bibliothek und dieselbe Systempersönlichkeit — wenn Sie also die Magic-AI-Einstellungen ändern, übernimmt jede KI-Funktion in UnoPim die Änderung.

## Wie funktioniert Magic AI?

Die Pipeline ist für jede KI-Funktion dieselbe:

1. **Sie lösen eine Anfrage aus** — klicken Sie auf ein Zauberstab-Symbol, speichern Sie ein Produkt mit aktivierter Auto-Übersetzung oder senden Sie eine Chat-Nachricht an den AI Agent.
2. **UnoPim stellt die Eingabe zusammen** — es kombiniert:
   - Die Daten der Zielentität (z. B. den Namen, die Attribute, die Kategorie des Produkts)
   - Den passenden **Prompt** aus Magic AI → Prompts (mit erweiterten `@attribute`-Platzhaltern)
   - Die aktive **System-Prompt**-Persönlichkeit (Tonalität, Temperatur, max. Tokens)
3. **UnoPim leitet die Anfrage** über den einheitlichen **LaravelAiAdapter** an die Plattform/das Modell weiter, die Sie in Magic AI → Settings ausgewählt haben.
4. **Der Anbieter antwortet** mit generiertem Text, einem Bild oder einer Übersetzung.
5. **UnoPim wendet das Ergebnis an** — entweder direkt im Feld, in der Datenbank (nach optionaler Genehmigung) oder zurück in den Chat gestreamt.

Alles zwischen Schritt 2 und Schritt 5 wird über die vier unten beschriebenen Unterseiten konfiguriert: **Platforms**, **Settings**, **Prompts** und **System-Prompts**.

::: tip
API-Schlüssel erscheinen nie im Klartext. Alle Provider-Anmeldedaten werden in der Datenbank mit **verschlüsselter Credential-Speicherung** gespeichert, und der Schlüssel wird in der Benutzeroberfläche maskiert, nachdem Sie ihn gespeichert haben.
:::

## Das Magic-AI-Menü

Klappen Sie **Magic AI** in der Admin-Seitenleiste auf, und Sie sehen vier Untermenüpunkte. Jeder besitzt einen bestimmten Teil der KI-Konfiguration — zusammen geben sie Ihnen die volle Kontrolle darüber, *welcher Anbieter läuft, welche Modelle er verwendet, welchen Anweisungen er folgt und mit welcher Persönlichkeit er spricht*.

| Menüpunkt | URL | Was Sie hier konfigurieren | Wann besuchen |
|---|---|---|---|
| **Platforms** | `/admin/magic-ai/platforms` | Provider-Verbindungen — fügen Sie ein OpenAI- / Anthropic- / Gemini- / Ollama- / Groq-Konto hinzu, fügen Sie dessen API-Schlüssel ein und wählen Sie, welche seiner Modelle aktiviert werden sollen. | Erstmalige Einrichtung, Rotieren von API-Schlüsseln, Hinzufügen eines neuen Anbieters, Aktivieren neuer Modelle. |
| **Settings** | `/admin/configuration/general/magic_ai` | Pro-Fähigkeit-Routing — wählen Sie, welche Plattform + Modell die Textgenerierung, Bilderzeugung, Übersetzung und Agentic PIM bedient. Auch der Ort für das tägliche Token-Budget, den Genehmigungsmodus und die Auto-Enrichment-Schalter. | Jedes Mal, wenn Sie ändern möchten, welcher Anbieter eine bestimmte Funktion betreibt, Sicherheitsgrenzen abstimmen oder Funktionen ein-/ausschalten möchten. |
| **Prompts** | `/admin/magic-ai/prompts` | Prompt-Vorlagen — der Anweisungstext, den Magic AI bei jeder Anfrage sendet, mit `@attribute_code`-Platzhaltern, die durch echte Entitätswerte ersetzt werden. | Anpassen der KI-Ausgabe an Ihre Markenstimme, Hinzufügen von Prompts für neue Attribute oder Kategorien, Anpassen der Standard-Prompts. |
| **System-Prompts** | `/admin/magic-ai/system-prompts` | Globale KI-Persönlichkeit — Tonalität, Temperatur, max. Tokens. Es ist immer nur einer aktiv, sodass Ihr gesamter Katalog eine konsistente Stimme behält. | Ändern der Gesamt-Tonalität (formell vs. lässig, prägnant vs. beschreibend), Abstimmen der Kreativität, Begrenzen der Antwortlänge. |

### Wie die vier Menüpunkte verbunden sind

```
        ┌────────────────────────┐
        │   1. Platforms         │   ← add providers + models
        │   Provider + API key   │
        │   + enabled models     │
        └────────┬───────────────┘
                 │ feeds the dropdowns in
                 ▼
        ┌────────────────────────┐
        │   2. Settings          │   ← route each capability to a platform+model
        │   Text / Image /       │
        │   Translation /        │
        │   Agentic PIM          │
        └───┬──────┬──────┬──────┘
            │      │      │
            │      │      └── uses ──► 4. System-Prompts  (global personality)
            │      │                    — one active at a time
            │      │
            │      └── uses ──► 3. Prompts  (per-entity, per-purpose templates)
            │                    — `@placeholders` filled from entity data
            │
            └── keeps everything within ACL, budget, and approval-mode limits
```

**Von oben nach unten lesen, einmal konfigurieren, dann überall verwenden.** Ein Zauberstab-Klick auf eine Produktbeschreibung, ein automatisch übersetztes Feld oder eine Chat-Nachricht an den AI Agent folgen alle dem gleichen Pfad durch diese vier Menüpunkte.

### Mindesteinrichtungsreihenfolge

Wenn Sie Magic AI zum ersten Mal konfigurieren, besuchen Sie die Menüpunkte in dieser Reihenfolge:

1. **Platforms** — fügen Sie mindestens einen Anbieter hinzu, fügen Sie den API-Schlüssel ein, aktivieren Sie die Modelle, die Sie verwenden möchten, und **markieren Sie eines als Standard mit einem Stern**.
2. **Settings** — aktivieren Sie die benötigten Fähigkeiten (Text / Image / Translation / Agentic PIM) und wählen Sie für jede eine Plattform + ein Modell. Setzen Sie das Daily Token Budget und den Change Approval Mode, während Sie hier sind.
3. **Prompts** — überprüfen Sie die mitgelieferten Prompts; passen Sie sie an oder fügen Sie eigene hinzu, damit die KI in der Stimme schreibt, die Ihr Katalog erwartet.
4. **System-Prompts** — bestätigen Sie, dass die aktive Persönlichkeit dem Ton entspricht, den Sie über den gesamten Katalog hinweg möchten. Aktivieren Sie bei Bedarf einen anderen.

Sobald diese vier Seiten gespeichert sind, ist jede Magic-AI-Funktion im Admin — Zauberstab-Symbole, Auto-Übersetzung, Auto-Enrichment und der AI Agent Chat — einsatzbereit.

## Platforms

Navigieren Sie zu **Magic AI → Platforms**, um die KI-Provider-Verbindungen zu verwalten, die jede Magic-AI-Funktion verwendet.

<ImagePopup src="/assets/2.0/images/magic-ai/ai-platforms.png" alt="KI-Plattformen" />

### Was eine „Plattform" ist

Eine *Plattform* ist eine konfigurierte Provider-Verbindung: ein Anbieter (OpenAI, Anthropic, Gemini, Ollama, Groq, …), ein API-Schlüssel und die Liste der Modelle, die Sie von diesem Anbieter aktiviert haben. Sie können so viele Plattformen konfigurieren, wie Sie möchten — zum Beispiel eine OpenAI-Plattform zum Schreiben, eine Gemini-Plattform für Übersetzungen und eine Ollama-Plattform für On-Premises-Workloads — und UnoPim leitet jede KI-Funktion an die von Ihnen zugewiesene Plattform weiter.

### Plattformen-Datagrid

| Spalte | Beschreibung |
|--------|-------------|
| **Label** | Der Name, den Sie der Plattformkonfiguration zugewiesen haben |
| **Provider** | Der KI-Anbieter (OpenAI, Anthropic, Gemini, Ollama, Groq usw.) |
| **Models** | Die für diese Plattform aktivierten Modelle |
| **Default** | Ob diese Plattform die Standardplattform ist (Ja/Nein) |
| **Status** | Aktiviert oder Deaktiviert |
| **Created At** | Datum, an dem die Plattform hinzugefügt wurde |
| **Actions** | Stern (als Standard festlegen), Bearbeiten (Stift-Symbol), Löschen (Papierkorb-Symbol) |

### Hinzufügen einer Plattform

Klicken Sie oben rechts auf **Add Platform**. Ein zweistufiges Modal mit dem Titel **"Add AI Platform"** öffnet sich.

**Schritt 1 — wählen Sie den Anbieter.**

Der erste Bildschirm des Modals hat nur ein Feld:

- **Provider *** — Dropdown, das jeden unterstützten Anbieter auflistet (OpenAI, Anthropic, Gemini, Ollama, Groq usw.).

Wählen Sie einen Anbieter aus und klicken Sie auf **Save**. Das Modal erweitert sich, um den Rest der Felder anzuzeigen.

<ImagePopup src="/assets/2.0/images/magic-ai/add-platform.png" alt="KI-Plattform hinzufügen — Schritt 1" />

**Schritt 2 — geben Sie die anbieterspezifischen Details ein.**

- **Label** — Geben Sie einen beschreibenden Namen für diese Plattformkonfiguration ein (z. B. *"OpenAI Production"*, *"Gemini Translation"*). Dieser Name erscheint in den nachgelagerten Dropdowns auf Magic AI → Settings.
- **API Key** — Fügen Sie den API-Schlüssel aus Ihrem Provider-Konto ein. Er wird beim Speichern verschlüsselt und danach in der Benutzeroberfläche maskiert.
- **Models** — Eine Multiselect-Auflistung der Modelle, die vom ausgewählten Anbieter verfügbar sind. Nur die hier angekreuzten Modelle erscheinen in den Settings-Dropdowns.
- **Status** — Umschalten, um die Plattform zu aktivieren oder zu deaktivieren.

Klicken Sie auf **Save**, um den Vorgang abzuschließen. Die Plattform erscheint im Datagrid.

::: tip
API-Anmeldedaten werden zur Sicherheit mit verschlüsselter Credential-Speicherung gespeichert. Ihre API-Schlüssel werden nie im Klartext gespeichert.
:::

### Plattform-Aktionen

- **Stern-Symbol** — Setzt die Plattform als **Standard**. Der Standard ist das, was das System verwendet, wenn eine Funktion auf *"Use Default Platform"* gesetzt ist. Es kann immer nur eine Plattform die Standardplattform sein.
- **Stift-Symbol** — Öffnet das Bearbeitungsmodal zum Aktualisieren des Plattform-Labels, des API-Schlüssels, der Modelle oder des Status.
- **Papierkorb-Symbol** — Löscht die Plattformkonfiguration. Diese Aktion kann nicht rückgängig gemacht werden.

### Wie die Plattformauswahl in die Funktionen fließt

```
Platforms (provider + key + models)
        │
        ▼
Settings (pick platform + model per feature)
        │
        ├─► Text Generation ──► Wand icons on text fields
        ├─► Image Generation ──► Wand icons on image/gallery fields
        ├─► Translation ──────► Auto-translate on save + bulk command
        └─► Agentic PIM ──────► AI Agent Chat
```

## Settings

Navigieren Sie zu **Magic AI → Settings** in der Seitenleiste. Dies öffnet die Konfigurationsseite unter `/admin/configuration/general/magic_ai` mit vier Abschnitten — einer pro Fähigkeit. Für jede Fähigkeit wählen Sie **welche Plattform** und **welches Modell** sie bedienen sollen. Die Verwendung unterschiedlicher Plattformen für unterschiedliche Fähigkeiten ermöglicht es Ihnen, Kosten, Geschwindigkeit und Qualität unabhängig voneinander zu optimieren.

<ImagePopup src="/assets/2.0/images/magic-ai/magic-ai-settings.png" alt="Magic AI Settings" />

### 1. Agentic PIM

Dieser Abschnitt steuert den **AI Agent Chat** (den konversationellen Assistenten) und die autonomen Workflows, die er antreibt: Auto-Enrichment bei der Produkterstellung, Katalogqualitätsüberwachung und die Genehmigungs-Warteschlange, die vor KI-vorgeschlagenen Änderungen sitzt.

| Feld | Was es bewirkt |
|-------|---|
| **Enable AI Agent Chat** | Hauptschalter für die „Open Agenting PIM"-Chat-Schaltfläche. Bei „Aus" wird die schwebende Schaltfläche ausgeblendet und niemand kann mit dem Agenten kommunizieren. |
| **Max Agent Steps Per Turn** | Wie viele Tool-Aufrufe der Agent für eine einzelne Benutzernachricht verketten darf (Standard: 5). Höher = mehr Autonomie pro Zug; niedriger = strengere Kontrolle und günstigere Tokens. |
| **Daily Token Budget** | Harte tägliche Obergrenze der vom Agenten ausgegebenen Tokens (z. B. 500 000). Wenn die Obergrenze erreicht ist, antwortet der Agent bis zum nächsten Tag mit einer „Budget erschöpft"-Nachricht. |
| **Auto-Enrichment on Product Create** | Wenn aktiviert, wird jedes neu erstellte Produkt zur KI-Anreicherung in die Warteschlange gestellt — fehlende Beschreibungen, SEO-Felder usw. werden automatisch ausgefüllt. |
| **Catalog Quality Monitor** | Führt einen geplanten KI-Scan aus, der über fehlende, dünne oder inkonsistente Daten im gesamten Katalog berichtet. |
| **Confidence Threshold** | Minimaler Konfidenzwert (Standard: 0.7 — „Balanced"), den die KI erreichen muss, bevor eine vorgeschlagene Änderung angewendet wird. Unterhalb des Schwellenwerts werden Änderungen zur Überprüfung zurückgehalten. |
| **Change Approval Mode** | Wie KI-vorgeschlagene Änderungen in Ihren Daten landen: *Auto-apply*, *Confirm & apply* (Standard — die KI schlägt Werte vor, fragt Sie und führt dann aus) oder *Manual review* (alles geht an die Genehmigungs-Warteschlange). |

### 2. Text Generation

Dieser Abschnitt steuert die Zauberstab-Symbole neben Textfeldern (Produktname, Beschreibungen, SEO-Metafelder, Kategorietext). Wenn ein Benutzer auf ein Zauberstab-Symbol klickt, sendet UnoPim den Prompt des Felds an die hier konfigurierte Plattform und das Modell.

| Feld | Was es bewirkt |
|-------|---|
| **Enabled** | Umschalten, um die Textgenerierung im gesamten Admin zu aktivieren oder zu deaktivieren. |
| **Default Platform** | Wählen Sie, welche Plattform Textanfragen bedient. Wählen Sie *"Use Default Platform"*, um der mit dem Stern markierten Plattform zu folgen, oder überschreiben Sie mit einer bestimmten Plattform. |
| **Default Model** | Das für die Textgenerierung verwendete Modell, ausgewählt aus den auf der gewählten Plattform aktivierten Modellen. |

### 3. Image Generation

Dieser Abschnitt steuert die Zauberstab-Symbole auf Image- und Gallery-Attributen. Es werden nur Plattformen aufgelistet, deren Anbieter die Bilderzeugung unterstützt (OpenAI / DALL-E, Gemini, xAI).

| Feld | Was es bewirkt |
|-------|---|
| **Enabled** | Umschalten, um die Bilderzeugung zu aktivieren oder zu deaktivieren. |
| **Default Platform** | Die zu verwendende bildfähige Plattform. |
| **Default Model** | Das spezifische Bildmodell (z. B. `dall-e-3`). |

### 4. Translation

Übersetzung kann automatisch ausgeführt werden, wann immer ein Produkt gespeichert wird, und kann auch in Massen über den Übersetzungsbefehl ausgelöst werden. Da Übersetzungen in der Regel sehr umfangreich sind, ermöglicht Magic AI es Ihnen, eine **andere Plattform** zuzuweisen — typischerweise eine günstigere oder schnellere — speziell für diesen Job.

| Feld | Was es bewirkt |
|-------|---|
| **Enabled** | Umschalten, um die KI-gestützte Übersetzung zu aktivieren oder zu deaktivieren. |
| **Default Platform** | Die für Übersetzungsanfragen verwendete Plattform. |
| **Translation Model** | Das spezifische Modell, das für die Übersetzung verwendet wird — unabhängig vom Text-Generierungs-Modell. |
| **Replace Existing Value** | Ein: Neuübersetzungen überschreiben vorhandene Locale-Werte. Aus: Nur leere Locale-Felder werden gefüllt, wobei manuelle Übersetzungen erhalten bleiben. |
| **Source Channel** | Der Kanal, dessen Werte als Source-of-Truth dienen. |
| **Target Channel** | Der Kanal, der die übersetzten Werte erhält. |
| **Source Locale** | Die Locale, aus der übersetzt werden soll (z. B. `en_US`). |
| **Target Locales** | Multi-Select; wählen Sie jede Locale, die Sie automatisch befüllen möchten. |

::: tip
Sie können einen anderen (potenziell günstigeren oder schnelleren) KI-Anbieter speziell für Übersetzungen zuweisen und Ihren Premium-Anbieter für die Inhaltsgenerierung behalten.
:::

Klicken Sie unten auf der Seite auf **Save Configuration**, um alle Änderungen zu übernehmen. Die Einstellungen werden sofort wirksam — kein Neustart erforderlich.

## Prompts

Navigieren Sie zu **Magic AI → Prompts**, um die **Prompt-Vorlagen** zu verwalten, die der KI sagen, was sie produzieren soll. Ein Prompt ist die Anweisung, die mit jeder Generierungsanfrage gesendet wird; hier verankern Sie Ihre Markenstimme, die erforderliche Struktur oder katalogspezifische Regeln.

<ImagePopup src="/assets/2.0/images/magic-ai/prompts.png" alt="Prompts" />

### Wie Prompts funktionieren

Jeder Prompt ist an einen **Entity Type** (Produkt oder Kategorie) und einen **Purpose** (Text Generation oder Image Generation) gebunden. Zur Generierungszeit geht UnoPim wie folgt vor:

1. Wählt den Prompt aus, der zur Entität und zum Zweck passt.
2. Ersetzt jeden `@attribute_code`-Platzhalter durch den tatsächlichen Wert aus der Entität.
3. Fügt die aktive System-Prompt-Persönlichkeit obendrauf.
4. Sendet die kombinierten Anweisungen an die für diese Fähigkeit konfigurierte Plattform/das Modell.

Aus einem Prompt von `Write a product description for @name in the @color variant` wird also zur Generierungszeit etwas wie `Write a product description for Air Max 90 in the Blue variant`.

### Prompts-Datagrid

| Spalte | Beschreibung |
|--------|-------------|
| **Title** | Der Name des Prompts |
| **Prompt** | Der Prompt-Text mit Platzhaltern |
| **Entity Type** | Die Entität, auf die der Prompt zutrifft (Produkt oder Kategorie) |
| **Purpose** | Ob der Prompt für die Text- oder Bilderzeugung gedacht ist |
| **Created At** | Datum, an dem der Prompt erstellt wurde |
| **Updated At** | Datum, an dem der Prompt zuletzt geändert wurde |
| **Actions** | Bearbeiten (Stift-Symbol), Löschen (Papierkorb-Symbol) |

### Erstellen eines Prompts

Klicken Sie auf die Schaltfläche **Create Prompt**, um einen neuen Prompt hinzuzufügen. Füllen Sie aus:

- **Title** — wie er in der Liste erscheint.
- **Prompt** — der Anweisungstext. Verwenden Sie `@attribute_code`-Platzhalter für jeden Wert, den Sie aus der Entität einfüllen lassen möchten.
- **Entity Type** — Produkt oder Kategorie.
- **Purpose** — Text- oder Bilderzeugung.

### Mitgelieferte Prompts

UnoPim wird mit **18 voreingestellten Prompts** ausgeliefert. Die meisten zielen auf Bilderzeugung (Produktfotografie-Stile) und einige wenige auf Textgenerierung. Alle zielen auf `product` als Entity Type. Beispiele, die Sie in der Liste sehen:

| Title | Purpose |
|---|---|
| Packaging Mockup | Image Generation |
| Hero Banner Image | Image Generation |
| Multi-Angle Product | Image Generation |
| Flat Lay Composition | Image Generation |
| Product with Size Reference | Image Generation |
| Close-Up Detail Shot | Image Generation |
| Lifestyle Product Image | Image Generation |
| White Background Product Shot | Image Generation |
| Product Elevator Pitch | Text Generation |
| Product Brief | Text Generation |

Öffnen Sie **Magic AI → Prompts**, um die vollständige Liste anzuzeigen, einen Preset zu bearbeiten oder neue zu erstellen.

::: tip
Verwenden Sie Attribut-Codes als Platzhalter (mit `@` vorangestellt) in Ihren Prompts. Die KI ersetzt sie durch die tatsächlichen Werte des verarbeiteten Produkts oder der Kategorie.
:::

## System-Prompts

Navigieren Sie zu **Magic AI → System-Prompts**, um die **Persönlichkeit** der KI zu konfigurieren — die Tonalität, den Stil und die Generierungsparameter, die unter jedem Prompt sitzen.

<ImagePopup src="/assets/2.0/images/magic-ai/system-prompts.png" alt="System-Prompts" />

### Wie sich ein System-Prompt von einem Prompt unterscheidet

- Ein **Prompt** sagt, *was* für ein bestimmtes Feld zu schreiben ist („Schreibe eine Produktbeschreibung …").
- Ein **System-Prompt** sagt, *wie* zu schreiben ist — Stimme, Tonalität, Kreativität, Länge. Er wird vor jedem Prompt global angewendet.

Es ist **immer nur ein System-Prompt zur gleichen Zeit aktiv**. Das Aktivieren eines neuen deaktiviert automatisch den vorherigen, sodass der gesamte Katalog eine konsistente Stimme behält.

### System-Prompts-Datagrid

| Spalte | Beschreibung |
|--------|-------------|
| **Title** | Der Name des System-Prompts |
| **Tone** | Die konversationelle Tonalität (z. B. Confident, Vivid, Brief) |
| **Max Tokens** | Die maximale Anzahl von Tokens für KI-Antworten |
| **Temperature** | Das Kreativitätsniveau (niedriger = fokussierter, höher = kreativer) |
| **Status** | Aktiviert oder Deaktiviert |
| **Created At** | Datum, an dem der System-Prompt erstellt wurde |
| **Updated At** | Datum, an dem der System-Prompt zuletzt geändert wurde |
| **Actions** | Bearbeiten (Stift-Symbol), Löschen (Papierkorb-Symbol) |

### Voreingestellte System-Prompts

UnoPim wird mit 10 voreingestellten System-Prompts ausgeliefert. Alle haben **Max Tokens = 1024**; nur die Temperatur unterscheidet sich. Es kann immer nur ein System-Prompt aktiviert sein.

| Title | Tone | Temperature | Hinweise |
|-------|------|-------------|-------|
| Authoritative Guide | Confident, assertive, instructional | 0.65 | |
| Descriptive Storyteller | Vivid, rich, engaging | 0.9 | |
| Concise Responder | Brief, to-the-point | 0.5 | |
| Technical Expert | Precise, analytical | 0.6 | |
| Casual Conversationalist | Informal, relaxed | 0.75 | |
| Motivational Coach | Energetic, encouraging | 0.85 | |
| Empathetic Listener | Warm, understanding | 0.6 | |
| Witty Commentator | Clever, humorous | 0.9 | |
| Professional Advisor | Formal, respectful | 0.65 | |
| Friendly Assistant | Friendly, helpful, casual | 0.7 | Standardmäßig aktiviert |

### Erstellen eines System-Prompts

Klicken Sie auf die Schaltfläche **System-Prompt erstellen**, um eine neue KI-Persönlichkeit zu definieren. Konfigurieren Sie:

- **Title** — erscheint im Datagrid.
- **Tone description** — Beschreibung in Klartextsprache der Stimme (das Modell liest dies).
- **Max Tokens** — begrenzt die Antwortlänge. Niedrigere Werte = kürzere Ausgabe und geringere Kosten.
- **Temperature** — 0,0–1,0. Niedrige Werte halten Antworten kompakt und wiederholbar; hohe Werte fügen Abwechslung und Flair hinzu.
- **Status** — das Aktivieren dieses deaktiviert den derzeit aktiven Prompt.

::: tip
Es kann immer nur ein System-Prompt aktiv sein. Das Aktivieren eines neuen System-Prompts deaktiviert automatisch den zuvor aktiven. Wählen Sie einen System-Prompt, der dem Ton entspricht, den Sie über alle KI-generierten Inhalte hinweg wünschen.
:::

## Konfigurations-Checkliste

Bevor Sie mit der Nutzung von Magic AI-Funktionen beginnen, stellen Sie sicher, dass Sie alle vier Punkte erledigt haben:

1. **Magic AI → Platforms** — Fügen Sie mindestens eine Plattform hinzu, fügen Sie einen API-Schlüssel ein, aktivieren Sie die gewünschten Modelle und **markieren Sie eines als Standard**.
2. **Magic AI → Settings** — Aktivieren Sie die benötigten Fähigkeiten (Text / Image / Translation / Agentic PIM) und wählen Sie für jede eine Plattform + ein Modell.
3. **Magic AI → Prompts** — Überprüfen Sie die mitgelieferten Prompts oder erstellen Sie eigene, die zu Ihrer Markenstimme passen.
4. **Magic AI → System-Prompts** — Bestätigen Sie, dass die aktive Persönlichkeit dem Ton entspricht, den Sie über den Katalog hinweg wünschen.

Sobald diese vier Seiten konfiguriert sind, funktioniert jede Magic-AI-Funktion — Zauberstab-Symbole, der AI Agent Chat, die automatische Übersetzung und die automatische Anreicherung — ohne weitere Einrichtung.
