# Magic AI

**Magic AI** ist die KI-Inhaltsschicht von UnoPim. Sie generiert Produkt- und Kategorieinhalte (Text + Bilder), übersetzt Werte über Locales hinweg und treibt den Agentic PIM-Assistenten an — alles mit einem von über 10 unterstützten KI-Anbietern im Hintergrund.

## Was macht Magic AI?

Sobald Sie Magic AI konfiguriert haben (siehe [Magic AI-Konfiguration](../configuration/magic-ai.md)), erscheint es in der Admin-Benutzeroberfläche an fünf Stellen:

| Oberfläche | Was sie produziert | Wie Sie sie auslösen |
|---|---|---|
| **Zauberstab-Symbol auf Textfeldern** | Namen, Beschreibungen, SEO-Metafelder, Kategorietext | Klicken Sie auf den Zauberstab neben einem unterstützten Feld |
| **Zauberstab-Symbol auf Bild-/Galerie-Feldern** | Produktbilder, generiert aus einer Textbeschreibung | Klicken Sie auf den Zauberstab neben einem Bildattribut |
| **Automatische Übersetzung beim Produkt-Speichern** | Übersetzte Werte für jede Ziel-Locale | Automatisch, wenn aktiviert; auch über einen Bulk-Befehl |
| **KI-gestützte Suche** | Semantische Suchergebnisse nach Bedeutung sortiert, nicht nur nach Stichworten | Gewöhnliches Suchfeld |
| **AI Agent Chat (Agentic PIM)** | Ergebnisse von über 30 Tool-Aufrufen | Chat-Schaltfläche unten rechts |

Alle fünf teilen sich dieselben Provider-Verbindungen, dieselbe Prompt-Bibliothek und dieselbe Systempersönlichkeit — Sie konfigurieren also Magic AI einmal und jede Funktion übernimmt es.

## Wie funktioniert Magic AI?

Jede Magic-AI-Aktion folgt derselben Pipeline:

1. **Auslöser** — klicken Sie auf ein Zauberstab-Symbol, speichern Sie ein Produkt, führen Sie einen Übersetzungsbefehl aus oder senden Sie eine Chat-Nachricht.
2. **Kontextzusammenstellung** — UnoPim kombiniert die aktuellen Daten der Zielentität, die relevante **Prompt**-Vorlage (mit erweiterten `@attribute`-Platzhaltern) und die aktive **System-Prompt**-Persönlichkeit.
3. **Dispatch** — die zusammengestellte Anfrage geht über den einheitlichen `LaravelAiAdapter` an die Plattform und das Modell, die Sie für diese Fähigkeit unter **Magic AI → Settings** ausgewählt haben.
4. **Antwort** — der Anbieter gibt Text, ein Bild oder eine Übersetzung zurück.
5. **Anwenden** — das Ergebnis wird in das Feld eingefügt (Text/Bild), in Locale-Spalten geschrieben (Übersetzung) oder in den Chat gestreamt (Agent).

Der einheitliche Adapter bedeutet, dass Sie **Anbieter wechseln können, ohne Ihren Workflow zu berühren** — wechseln Sie die Standardplattform unter Magic AI → Settings und jede Funktion verwendet bei der nächsten Anfrage die neue.

## Inhaltsgenerierung

Mit Magic AI können Sie mühelos ansprechende **Produkt- und Kategorie**-Inhalte generieren — Namen, Beschreibungen, SEO-Metadaten und mehr.

<ImagePopup src="/assets/2.1/images/magic-ai/content.png" alt="Magic AI-Inhaltsgenerierung" />

Statt jede Beschreibung von Hand zu schreiben, komponiert Magic AI sie für Sie aus den Daten, die das Produkt bereits hat (Name, Kategorie, Schlüsselattribute), der von Ihnen konfigurierten Prompt-Vorlage und der aktiven Systempersönlichkeit.

### Unterstützte KI-Anbieter

UnoPim bietet native Unterstützung für mehrere KI-Anbieter über sein **Multi-Platform MagicAI**-System. Sie können einen oder mehrere Anbieter mit verschlüsselter Credential-Speicherung für sichere API-Schlüsselverwaltung konfigurieren.

**A) Für Inhalt — UnoPim unterstützt diese KI-Anbieter:**

* **OpenAI** – gpt-4o, gpt-4o-mini, gpt-3.5-turbo, dall-e-2, dall-e-3
* **Anthropic** – Claude-Modellfamilie (Opus, Sonnet, Haiku) für Textgenerierung und Reasoning
* **Ollama** – llama2, llama3, mistral, qwen, deepseek-coder, phi, llava
* **Gemini** – gemini-2.5-pro, gemini-2.5-flash, gemini-2.0-flash, gemini-1.5-flash-latest, gemini-1.5-pro
* **Groq (xAI)** – deepseek-r1-distill-llama-70b, llama-3.1-8b-instant, openai/gpt-oss-120b, openai/gpt-oss-20b, groq/compound, qwen/qwen3-32b, moonshotai/kimi-k2-instruct-0905

::: tip
Alle Anbieter werden über eine einheitliche **LaravelAiAdapter**-Implementierung verwaltet. Sie können Anbieter wechseln, ohne Ihren Workflow zu ändern.
:::

## So generieren Sie Textinhalte mit KI

Folgen Sie diesen Schritten, um Textinhalte für Ihre Produkte mit Magic AI zu generieren:

1. Navigieren Sie zu **Catalog → Products** und klicken Sie bei einem Produkt auf **Edit**.
2. Finden Sie ein Textfeld, das KI-Generierung unterstützt (Name, Short Description, Description, Meta Title, Meta Description usw.).
3. Klicken Sie auf das **Magic AI-Symbol** (Funkeln/Zauberstab-Symbol) neben dem Feld.
4. Die KI generiert Inhalte basierend auf:
   - Dem konfigurierten **Prompt** für diesen Feldtyp (aus **Magic AI → Prompts**).
   - Den vorhandenen Daten des Produkts (Name, Kategorie, Attribute) — die dort eingesetzt werden, wo der Prompt `@attribute_code`-Platzhalter verwendet.
   - Der aktiven **System-Prompt**-Persönlichkeit (Tonalität, Temperatur, max. Tokens).
5. Der generierte Inhalt erscheint im Feld.
6. Überprüfen und bearbeiten Sie den generierten Inhalt nach Bedarf.
7. Klicken Sie auf **Save Product**, um die Änderungen zu behalten.

Sie können auch Inhalte für Kategorien generieren, indem Sie eine Kategorie-Bearbeitungsseite öffnen und das Zauberstab-Symbol auf unterstützten Feldern verwenden.

::: tip
Konfigurieren Sie Ihren bevorzugten KI-Anbieter und das Modell in **Magic AI → Settings → Text Generation**, bevor Sie diese Funktion verwenden. Wählen Sie ein Modell, das Qualität und Kosten für Ihre Bedürfnisse ausbalanciert.
:::

## So generieren Sie Bilder mit KI

Folgen Sie diesen Schritten, um Produktbilder mit Magic AI zu generieren:

1. Navigieren Sie zu **Catalog → Products** und klicken Sie bei einem Produkt auf **Edit**.
2. Finden Sie ein **Image**- oder **Gallery**-Attribut.
3. Klicken Sie auf das **Magic AI-Symbol** neben dem Bildfeld.
4. Geben Sie eine Beschreibung des gewünschten Bildes ein (oder akzeptieren Sie den Standard-Image-Prompt aus **Magic AI → Prompts**).
5. Die KI generiert ein Produktbild, das der Beschreibung entspricht.
6. Überprüfen Sie das generierte Bild.
7. Akzeptieren Sie es, um es an das Produkt anzuhängen.
8. Klicken Sie auf **Save Product**.

::: tip
Die Bilderzeugung erfordert eine Plattform, deren Anbieter Bilder unterstützt (OpenAI mit DALL-E, Gemini oder xAI). Konfigurieren Sie sie unter **Magic AI → Settings → Image Generation**.
:::

## Benutzerdefinierte Prompts

Magic AI unterstützt **benutzerdefinierte Prompts** für die Inhaltsgenerierung. Ein Prompt ist eine Anweisungsvorlage, die dem Modell sagt, *was* es produzieren soll — zum Beispiel `Write a detailed product description for @name highlighting its features, benefits, and @color variant.` Jeder Platzhalter (`@name`, `@color`, …) wird zur Generierungszeit durch den echten Wert aus der Entität ersetzt.

Sie können Prompts für bestimmte Anwendungsfälle erstellen, wie z. B.:
- „Generate a professional product description for an electronics store"
- „Write SEO-optimized content with keywords for fashion products"
- „Create a brief 50-word summary suitable for mobile displays"

Verwalten Sie Prompts unter **Magic AI → Prompts**. Jeder Prompt gehört zu einem **Entity-Type** (Produkt / Kategorie) und einem **Purpose** (Text / Bild).

<!-- TODO: Add screenshot of custom prompts configuration -->

## System-Prompt-Verwaltung

**System-Prompts** konfigurieren die Gesamt-**Persönlichkeit** der KI — Stimme, Tonalität und Generierungsparameter (Temperatur, max. Tokens) — und gelten für jede Magic-AI-Funktion. Es ist immer nur **ein** System-Prompt aktiv, sodass Ihr gesamter Katalog eine konsistente Stimme behält.

Verwalten Sie sie unter **Magic AI → System-Prompts**. Siehe den [System-Prompts-Abschnitt der Magic-AI-Konfiguration](../configuration/magic-ai.md#system-prompts) für die vollständige Liste der 10 voreingestellten Persönlichkeiten, die mit UnoPim ausgeliefert werden.

<!-- TODO: Add screenshot of system prompt management -->

## Magic Image

Magic AI enthält eine **Bilderzeugungs**-Funktion, die von DALL-E (OpenAI) und anderen bildfähigen Anbietern angetrieben wird. Sie können Produktbilder direkt aus einer Textbeschreibung erstellen:

1. Navigieren Sie zu einer Produkt-Bearbeitungsseite.
2. Klicken Sie auf das **Magic AI**-Symbol in der Nähe des Bild-/Galerie-Felds.
3. Geben Sie eine Beschreibung des Bildes ein, das Sie generieren möchten.
4. Wählen Sie das Modell (z. B. `dall-e-2` oder `dall-e-3`).
5. Klicken Sie auf **Generate**.

<!-- TODO: Add screenshot of Magic Image generation -->

## Automatische Übersetzung

Magic AI bietet **automatische Übersetzung** von Produktdaten. Wenn aktiviert, löst das Speichern eines Produkts die Übersetzung aller locale-spezifischen Felder (Name, Beschreibungen, Metafelder, …) in jede konfigurierte Ziel-Locale aus. Ihr Katalog bleibt mehrsprachig ohne manuelles Kopieren und Einfügen.

### Übersetzungs-Einstellungs-UI

Der Translation-Abschnitt befindet sich auf der Magic AI Settings-Seite unter **Magic AI → Settings**. Die Felder:

| Feld | Was es bewirkt |
|---|---|
| **Enabled** | Hauptschalter für KI-gestützte Übersetzung. |
| **Default Platform** | Die für Übersetzungen verwendete KI-Plattform. Sie können einen anderen Anbieter wählen als Ihre Plattform für die Inhaltsgenerierung — nützlich zur Optimierung von Kosten oder Geschwindigkeit. |
| **Translation Model** | Das spezifische Modell, das für Übersetzungsaufgaben verwendet wird. Unabhängig vom Text-Generierungs-Modell. |
| **Replace Existing Value** | Ein: vorhandene Locale-Werte überschreiben. Aus: nur leere Locales füllen, manuelle Übersetzungen erhalten. |
| **Source Channel** | Der Kanal, dessen Werte die Übersetzungs-Source-of-Truth sind. |
| **Target Channel** | Der Kanal, der die übersetzten Werte erhält. |
| **Source Locale** | Die Locale, aus der übersetzt werden soll (z. B. `en_US`). |
| **Target Locales** | Multi-Select — jede Locale, die automatisch befüllt werden soll. |

::: tip
Verwenden Sie **Replace Existing Value** vorsichtig. Aus bewahrt alle manuellen Übersetzungen, die Sie bereits gemacht haben; ein regeneriert alles von Grund auf neu.
:::

### So funktioniert die automatische Übersetzung

Wenn die automatische Übersetzung aktiviert ist und ein Produkt erstellt oder aktualisiert wird:

1. UnoPim liest die Source-Locale-Werte für jedes locale-spezifische Feld.
2. Für jede Ziel-Locale ruft es die Übersetzungs-Plattform/das Modell mit dem Quellwert und der Zielsprache auf.
3. Es schreibt die übersetzten Werte in die Ziel-Locale-Spalten, wobei die Kanal-/Locale-Zuweisungen respektiert werden, sodass nur Locales, die mit dem Zielkanal verknüpft sind, befüllt werden.

Wenn **Replace Existing Value** aus ist, überspringt der Übersetzungsschritt Felder, die bereits einen Locale-Wert haben — wodurch Ihre manuellen Bearbeitungen erhalten bleiben.

### Manuelle Übersetzung über den Locale-Switcher

Sie können auch manuell übersetzen: Öffnen Sie ein Produkt, wechseln Sie zu einer Ziel-Locale im **Locale-Switcher** oben im Bearbeitungsformular und tippen Sie entweder Übersetzungen ein oder rufen Sie das Zauberstab-Symbol auf jedem Feld auf. Attribute, die per-Locale-Werte unterstützen, zeigen einen Locale-Badge (z. B. `EN_US`), damit Sie wissen, welche Locale Sie bearbeiten.

### KI-gestützter Übersetzungsbefehl

Für die Massenübersetzung vorhandener Daten liefert UnoPim v2.0 einen **KI-gestützten Übersetzungsbefehl**, der Magic AI verwendet, um fehlende Locale-Schlüssel in allen 32 nicht-englischen Locales aufzufüllen. Er hat während der v2.0-Veröffentlichung selbst etwa **18.000 zuvor unübersetzte Schlüssel** in 7 Paketen automatisch übersetzt — derselbe Befehl ist für Ihren Katalog verfügbar.

::: tip
Bei hochvolumigen Übersetzungs-Workloads weisen Sie der Übersetzung einen schnelleren/günstigeren Anbieter zu und behalten einen Premium-Anbieter für die Inhaltsgenerierung. Magic AI lässt Sie sie pro Fähigkeit aufteilen.
:::

## KI-gestützte Suche

UnoPim v2.0 führt **KI-gestützte Suche** ein, die Embedding-Ähnlichkeit und semantisches Ranking verwendet, um intelligentere Ergebnisse zu liefern. Statt Stichwörter Zeichen für Zeichen abzugleichen, versteht sie die Bedeutung hinter der Anfrage.

Im Hintergrund:
- **Embedding-Ähnlichkeitsdienst** — wandelt Produktdaten in Vektor-Embeddings um, sodass Anfragen und Produkte semantisch verglichen werden können.
- **Semantic Ranking Service** — ordnet Ergebnisse nach ihrer Übereinstimmung mit der Absicht der Anfrage neu, nicht nur nach ihren Wörtern.

<!-- TODO: Add screenshot of AI-powered search results -->

## Auto-Enrichment

**Auto-Enrichment** füllt automatisch fehlende Produktinformationen aus — Beschreibungen, Meta-Titel, Meta-Beschreibungen und andere als unvollständig markierte Textfelder. Wenn aktiviert unter **Magic AI → Settings → Agentic PIM**, analysiert Magic AI jedes Produkt und generiert Werte für die leeren Felder.

Dies ist besonders nützlich für:
- Bulk-importierte Produkte, denen Beschreibungen fehlen.
- Produkte, denen SEO-Metadaten fehlen.
- Unvollständige Datensätze, die vom Vollständigkeitssystem markiert wurden.

<!-- TODO: Add screenshot of auto-enrichment in action -->

Angereicherte Werte können durch die [Genehmigungs-Warteschlange](../ai-agent/approval-queue.md) geleitet werden, wenn Sie sie überprüfen möchten, bevor sie live gehen.

## KI im Agentic PIM Chat

Der AI Agent Chat verwendet die **Generate Content**- und **Generate Image**-Fähigkeiten von Magic AI als Tools wieder. Sie können die Inhaltsgenerierung in einfacher Sprache anfordern, ohne den Chat zu verlassen — und der Agent verwendet dieselben Plattformen, Prompts und denselben System-Prompt, den Sie konfiguriert haben, sodass die Ergebnisse dem Rest des Katalogs entsprechen.

Beispiel-Chat-Prompts:

- „Generate a product description for SKU SHOE-100"
- „Create an image for product Nike Air Max"

Siehe die Seite [AI Agent Chat](../ai-agent/ai-agent-chat.md) für die vollständige Tool-Liste und Interaktionsmuster.

## Magic AI vs. AI Agent — auf einen Blick

| | Magic AI Zauberstab-Symbole | AI Agent (Agentic PIM) |
|---|---|---|
| **Auslöser** | Klicken Sie auf einen Zauberstab neben einem Feld | Chat-Schaltfläche; konversationell |
| **Geltungsbereich** | Ein Feld in einer Entität auf einmal | Alles im Katalog |
| **Ausgabe** | Text / Bild für das Feld | Tool-Ergebnisse in den Chat gestreamt |
| **Multi-Step** | Nein — eine Anfrage, eine Antwort | Ja — kann Tool-Aufrufe planen und verketten |
| **Verwendet Platforms/Prompts/System-Prompts?** | Ja | Ja |
| **Hat eigene Sicherheitsschicht?** | Vorschau auf Feldebene vor dem Speichern | Genehmigungs-Warteschlange, Confidence Threshold, Token Budget, Max Steps |

Sie sind zwei Oberflächen über demselben **Magic AI-Kern** — konfigurieren Sie Magic AI einmal unter **Magic AI → Platforms / Settings / Prompts / System-Prompts**, und beide Funktionssätze leuchten auf.
