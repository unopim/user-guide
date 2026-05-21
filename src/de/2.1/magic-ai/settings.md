# Magic AI — Settings

> **Seitenleiste:** Magic AI → **Settings**
> **URL:** `/admin/configuration/general/magic_ai`

Die **Settings**-Seite ist der Ort, an dem Sie jede KI-Fähigkeit in UnoPim an eine spezifische **Plattform** und ein **Modell** weiterleiten. Dies ist auch die Heimat der **Agentic PIM**-Steuerungen — das Token-Budget, der Approval Mode, der Auto-Enrichment-Schalter und der Catalog Quality Monitor.

## Was macht diese Seite?

Sie enthält vier unabhängige Abschnitte, einen pro Fähigkeit:

1. **Agentic PIM** — konfiguriert den AI Agent Chat (Open Agenting PIM) und seine Sicherheitskontrollen.
2. **Text Generation** — treibt die Zauberstab-Symbole auf Produkt-/Kategorie-Textfeldern an.
3. **Image Generation** — treibt die Zauberstab-Symbole auf Bild- und Galerie-Attributen an.
4. **Translation** — konfiguriert die automatische Übersetzung beim Speichern eines Produkts plus den Bulk-Übersetzungsbefehl.

Da jeder Abschnitt sein eigenes Plattform- und Modell-Dropdown hat, können Sie **verschiedene Anbieter für verschiedene Fähigkeiten** verwenden — zum Beispiel OpenAI für die Inhaltsgenerierung und Gemini für die Übersetzung.

<ImagePopup src="/assets/2.1/images/magic-ai/magic-ai-settings.png" alt="Magic AI Settings" />

## 1. Agentic PIM

Steuert den konversationellen AI Agent und die Hintergrund-Workflows, die er antreibt (Auto-Enrichment bei Produkterstellung, Catalog Quality Monitor, Genehmigungs-Warteschlange).

| Feld | Was es bewirkt |
|-------|---|
| **Enable AI Agent Chat** | Hauptschalter für die „Open Agenting PIM"-Schaltfläche. Bei „Aus" wird die Chat-Schaltfläche ausgeblendet und niemand kann mit dem Agenten kommunizieren. |
| **Max Agent Steps Per Turn** | Wie viele Tool-Aufrufe der Agent für eine einzelne Benutzernachricht verketten darf. Das Dropdown bietet beschriftete Voreinstellungen statt Rohzahlen — z. B. **`3 (Fast)`** für knappe, günstige Antworten und höhere Voreinstellungen für mehr Autonomie. Höher = mehr Autonomie pro Zug; niedriger = strengere Kontrolle und günstigere Tokens. |
| **Daily Token Budget** | Globale tägliche Obergrenze für die Token-Ausgaben des AI Agent (z. B. `500000`). Wenn die Obergrenze erreicht ist, antwortet der Agent bis Mitternacht mit einer „Budget erschöpft"-Nachricht. |
| **Auto-Enrichment on Product Create** | Wenn aktiviert, wird jedes neue Produkt zur KI-Anreicherung in die Warteschlange gestellt — fehlende Beschreibungen, SEO-Felder usw. werden automatisch ausgefüllt. |
| **Catalog Quality Monitor** | Führt einen geplanten KI-Scan aus, der über fehlende, dünne oder inkonsistente Katalogdaten berichtet. |
| **Confidence Threshold** | Minimale Konfidenz (Standard 0.7 — „Balanced"), die erforderlich ist, bevor eine vorgeschlagene Änderung angewendet wird. Unterhalb des Schwellenwerts wird die Änderung zur Überprüfung zurückgehalten. |
| **Change Approval Mode** | Wie KI-vorgeschlagene Änderungen landen: *Auto-apply*, *Confirm & apply* (Standard) oder *Manual review* (alles wird an die Genehmigungs-Warteschlange weitergeleitet). |

::: tip
Beginnen Sie mit **Manual review**, während Sie lernen, wie sich der Agent in Ihrem Katalog verhält. Verschieben Sie vertrauenswürdige Workflows auf Auto-apply, sobald das Analytics-Dashboard konsistente, hochkonfidente Ausgaben zeigt.
:::

## 2. Text Generation

Steuert die Zauberstab-Symbole neben Produkt- und Kategorie-Textfeldern (Name, Short Description, Description, Meta Title, Meta Description, URL Key usw.).

| Feld | Was es bewirkt |
|-------|---|
| **Enabled** | Schaltet die Textgenerierung im gesamten Admin ein oder aus. |
| **Default Platform** | Welche Plattform Textanfragen bedient. Wählen Sie **`-- Use Default Platform --`**, um dem mit dem Stern markierten Standard zu folgen, oder überschreiben Sie mit einer bestimmten Plattform. Mit `*` markierte Plattformen im Dropdown sind der aktuelle Standard. |
| **Default Model** | Das für Text verwendete Modell, ausgewählt aus den auf der gewählten Plattform aktivierten Modellen. |

## 3. Image Generation

Steuert die Zauberstab-Symbole auf Image- und Gallery-Attributen. Es erscheinen hier nur Plattformen, deren Anbieter die Bilderzeugung unterstützen (OpenAI / DALL-E, Gemini, xAI).

| Feld | Was es bewirkt |
|-------|---|
| **Enabled** | Schaltet die Bilderzeugung ein oder aus. |
| **Default Platform** | Eine bildfähige Plattform. Wählen Sie **`-- Use Default Platform --`**, um dem mit dem Stern markierten Standard zu folgen; `*` im Dropdown markiert den aktuellen Standard. |
| **Default Model** | Das spezifische Bildmodell (z. B. `dall-e-3`). |

## 4. Translation

Steuert die automatische Übersetzung beim Speichern eines Produkts und den KI-gestützten Bulk-Übersetzungsbefehl. Da Übersetzungen in der Regel sehr umfangreich sind, können Sie ihr eine andere (oft günstigere/schnellere) Plattform zuweisen.

| Feld | Was es bewirkt |
|-------|---|
| **Enabled** | Schaltet die KI-gestützte Übersetzung ein oder aus. |
| **Default Platform** | Die für Übersetzungsanfragen verwendete Plattform. Wählen Sie **`-- Use Default Platform --`**, um dem mit dem Stern markierten Standard zu folgen; `*` im Dropdown markiert den aktuellen Standard. |
| **Translation Model** | Das spezifische Modell, das für die Übersetzung verwendet wird — unabhängig vom Text-Generierungs-Modell. |
| **Replace Existing Value** | Ein: Neuübersetzungen überschreiben vorhandene Locale-Werte. Aus: Nur leere Locale-Felder werden gefüllt, wobei manuelle Übersetzungen erhalten bleiben. |
| **Source Channel** | Der Kanal, dessen Werte als Source-of-Truth dienen. |
| **Target Channel** | Der Kanal, der die übersetzten Werte erhält. |
| **Source Locale** | Die Locale, aus der übersetzt werden soll (z. B. `en_US`). |
| **Target Locales** | Multi-Select — jede Locale, die automatisch befüllt werden soll. |

::: tip
Sie können einen anderen (potenziell günstigeren oder schnelleren) KI-Anbieter speziell für Übersetzungen zuweisen und Ihren Premium-Anbieter für die Inhaltsgenerierung behalten.
:::

Klicken Sie unten auf der Seite auf **Save Configuration**, um alle Änderungen zu übernehmen. Die Einstellungen werden sofort wirksam — kein Neustart erforderlich.

## Woher die Werte kommen

Die Plattform-/Modell-Dropdowns auf dieser Seite werden vollständig von der Seite **[Platforms](./platforms.md)** befüllt. Wenn eine Plattform nicht aufgeführt ist, ist entweder (a) sie deaktiviert, (b) ihr Anbieter unterstützt die Fähigkeit nicht (z. B. erscheint Ollama nicht bei Image Generation) oder (c) Sie haben sie noch nicht registriert.

Ebenso werden die Source-/Target-Channel- und Locale-Dropdowns des **Translation**-Abschnitts aus Ihrer Kanal- und Locale-Konfiguration befüllt (siehe **Settings → Channels** und **Settings → Locales**).
