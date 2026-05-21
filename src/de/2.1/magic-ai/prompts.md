# Magic AI — Prompts

> **Seitenleiste:** Magic AI → **Prompts**
> **URL:** `/admin/magic-ai/prompts`

Die Seite **Prompts** ist der Ort, an dem Sie die **Anweisungsvorlagen** verwalten, die Magic AI bei jeder Anfrage an das Modell sendet. Ein gut geschriebener Prompt ist das, was den Unterschied zwischen generischem KI-Füllmaterial und Inhalten ausmacht, die zu Ihrer Marke und Ihrem Katalog passen.

## Was ist ein Prompt?

Ein *Prompt* ist eine Anweisung, die der KI mitteilt, *was* für ein bestimmtes Feld zu produzieren ist. Es ist ein kurzer Text mit optionalen **Platzhaltern** — Tokens wie `@name`, `@color`, `@material` — die Magic AI zur Generierungszeit durch echte Werte aus der Entität ersetzt.

Beispiel-Prompt:

> `Write a detailed product description for @name highlighting its features, benefits, and @color variant.`

Wenn dieser Prompt für ein Produkt mit dem Namen *Air Max 90* mit `color = Blue` ausgeführt wird, wird er zu:

> `Write a detailed product description for Air Max 90 highlighting its features, benefits, and Blue variant.`

Jeder Prompt ist an zwei Achsen gebunden:

- **Entity Type** — welche Art von Datensatz er betrifft: `product` oder `category`.
- **Purpose** — was er produziert: `Text Generation` oder `Image Generation`.

Magic AI wählt den passenden Prompt automatisch aus, wenn Sie auf ein Zauberstab-Symbol klicken, Auto-Enrichment ausführen oder den AI Agent bitten, Inhalte zu generieren.

## Was macht diese Seite?

- Listet jede Prompt-Vorlage auf, die im System verfügbar ist.
- Lässt Sie Prompts **erstellen**, **bearbeiten** und **löschen**.
- Zeigt, welcher Entität und welchem Zweck jeder Prompt dient, damit Sie die Abdeckung auf einen Blick sehen können.

<ImagePopup src="/assets/2.1/images/magic-ai/prompts.png" alt="Prompts" />

## Wie Prompts zur Generierungszeit verwendet werden

```
Benutzer klickt auf das Zauberstab-Symbol an einem Feld
           │
           ▼
Magic AI wählt den passenden Prompt
   Entitätstyp (Produkt/Kategorie) + Zweck (Text/Bild)
           │
           ▼
`@attribute_code`-Platzhalter werden ersetzt
   durch die tatsächlichen Attributwerte der Entität
           │
           ▼
Aktiver System Prompt (Ton + Temperatur) wird vorangestellt
           │
           ▼
Anfrage an Plattform + Modell gesendet
   konfiguriert unter Magic AI → Settings
           │
           ▼
Generierter Inhalt erscheint im Feld
```

## Prompts-Datagrid

| Spalte | Beschreibung |
|--------|-------------|
| **Title** | Der Name des Prompts. |
| **Prompt** | Der Prompt-Text mit Platzhaltern. |
| **Entity Type** | Die Entität, auf die der Prompt zutrifft (`product` oder `category`). |
| **Purpose** | Ob der Prompt für `Text Generation` oder `Image Generation` gedacht ist. |
| **Created At** | Datum, an dem der Prompt erstellt wurde. |
| **Updated At** | Datum, an dem der Prompt zuletzt geändert wurde. |
| **Actions** | Bearbeiten (Stift-Symbol), Löschen (Papierkorb-Symbol). |

## Erstellen eines Prompts

Klicken Sie auf die Schaltfläche **Create Prompt**. Füllen Sie aus:

- **Title** — Wie er in der Liste erscheint. Verwenden Sie etwas Wiedererkennbares wie *„Product Description — Long Form"*.
- **Prompt** — Der Anweisungstext. Verwenden Sie `@attribute_code`-Platzhalter für jeden Wert, den Sie aus der Entität abrufen möchten. Sie können jeden in der Attributfamilie der Entität definierten Attribut-Code referenzieren.
- **Entity Type** — `product` oder `category`.
- **Purpose** — `Text Generation` oder `Image Generation`.

### Platzhalter-Regeln

- Platzhalter werden mit `@` vorangestellt und verwenden den **Attribut-Code**, nicht das Label. Zum Beispiel wird ein „Product Color"-Attribut mit dem Code `color` als `@color` referenziert.
- Wenn das Attribut keinen Wert auf der Entität hat, wird der Platzhalter durch einen leeren String ersetzt — schreiben Sie Prompts also defensiv (z. B. `highlighting its @color variant if specified`).
- Sie können mehrere Platzhalter in einem Prompt verketten; Magic AI erweitert sie alle in einem einzigen Durchgang.

## Beispiel-Prompts

Hier sind Beispiele für Prompts, die mit UnoPim ausgeliefert werden:

| Titel | Prompt | Entitätstyp | Zweck |
|-------|--------|-------------|---------|
| AI Product Description | Write a detailed product description for @name highlighting its features, benefits and @color variant. | product | Text Generation |
| AI Product Image | Generate a professional product photo of @name on a clean white background with studio lighting. | product | Image Generation |
| AI Category Description | Write a compelling category description for @name that helps customers browse products. | category | Text Generation |

::: tip
Verwenden Sie Attribut-Codes als Platzhalter (mit `@` vorangestellt) in Ihren Prompts. Magic AI ersetzt sie durch die tatsächlichen Werte des verarbeiteten Produkts oder der Kategorie.
:::

## Prompts vs. System-Prompts — was ist der Unterschied?

- Ein **Prompt** sagt, *was* für ein bestimmtes Feld zu schreiben ist („Schreibe eine Produktbeschreibung, die `@name` und `@color` erwähnt").
- Ein **System-Prompt** sagt, *wie* zu schreiben ist — Stimme, Tonalität, Kreativität, Länge. Er gilt global, vor jedem Prompt.

Siehe die Seite **[System-Prompts](./system-prompts.md)** für die Persönlichkeitsschicht, die unter jedem Prompt sitzt.
