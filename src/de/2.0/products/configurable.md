# Konfigurierbares Produkt

Ein **konfigurierbares Produkt** ist ein einzelner Katalogeintrag, der mehrere Varianten — jede mit ihrer eigenen SKU — unter einem Elternteil gruppiert. Es ist das, was Sie verwenden, wenn ein Produkt in mehreren *Optionen* (Größe, Farbe, Material) angeboten wird und Sie alle diese Optionen zusammen verwalten möchten, anstatt sie als unverbundene einfache Produkte zu führen.

## Was ist ein konfigurierbares Produkt?

| | Konfigurierbares Produkt |
|---|---|
| **Struktur** | Ein Eltern-SKU + N Kind-Varianten (jede mit eigener SKU). |
| **Wann verwenden** | Der Artikel hat Variationen — T-Shirts in S/M/L × Rot/Blau/Grün, Schuhe in verschiedenen Größen, Telefonhüllen in verschiedenen Farben. |
| **Typische Beispiele** | Ein T-Shirt in 3 Größen × 4 Farben, ein Sofa in 3 Stoffoptionen, ein Laptop in mehreren Speicherstufen. |
| **Vergleich mit** | [Einfaches Produkt](./simple.md) — verwenden Sie dieses, wenn es keine Varianten gibt oder jede Variante wirklich ein separates Produkt ist. |

Die Attribute, die die Varianten definieren, heißen **Super-Attribute** (oder *konfigurierbare Attribute*) — dies sind die Achsen, entlang derer das Produkt variiert (z. B. `size`, `color`). Jedes andere Attribut (Beschreibung, Kategorie, Bilder, Verknüpfungen) wird am Elternteil bearbeitet und von den Varianten geerbt, sofern Sie es nicht überschreiben.

## Wie funktioniert es?

Ein konfigurierbares Produkt wird in drei Phasen erstellt:

1. **Eltern erstellen** — setzen Sie den Produkttyp auf `Configurable`, wählen Sie eine Familie, geben Sie eine SKU ein und wählen Sie die **Super-Attribute**, die die Varianten definieren werden.
2. **Eltern-Attribute ausfüllen** — Beschreibung, Kategorien, Bilder, Preisgestaltung, Verknüpfungen. Alles, was über die Varianten hinweg geteilt werden soll, kommt hierher.
3. **Varianten hinzufügen** — Erstellen Sie im Abschnitt **Variationen** ein Kind pro Kombination (z. B. `Size=M, Color=Red`). Jedes Kind hat seine eigene SKU und kann variantenspezifische Werte überschreiben.

Zur Laufzeit fungiert der Elternteil als öffentlich zugänglicher Datensatz und die Varianten halten die optionsspezifischen Daten (und oft auch eigenen Bestand, Preis, Bild).

## So erstellen Sie ein konfigurierbares Produkt

### Schritt 1 — Erstellung starten

1. Klicken Sie auf **Catalog → Products**.
2. Klicken Sie oben rechts auf **Create Product**. Der Dialog **„Create New Product"** wird geöffnet.
3. Füllen Sie aus:
   - **Type** — `Configurable`.
   - **Family** — die Attributfamilie, die steuert, welche Felder auf dem Elternteil erscheinen.
   - **SKU** — die Eltern-SKU (muss eindeutig sein).
4. Klicken Sie auf **Save Product**.

<ImagePopup src="/assets/2.0/images/configurable-product/configurable.png" alt="Modal zum Erstellen eines konfigurierbaren Produkts" />

UnoPim leitet Sie auf die Bearbeitungsseite weiter und fordert Sie auf, Super-Attribute auszuwählen.

### Schritt 2 — Super-Attribute auswählen

Super-Attribute sind die Achsen, entlang derer das Produkt variiert — typischerweise solche mit Select- oder Multiselect-Datentypen (z. B. `size`, `color`). Es erscheinen hier nur Attribute, die in der Familie als *für Varianten verwendbar* markiert sind.

<ImagePopup src="/assets/2.0/images/configurable-product/configurableAttributes.png" alt="Konfigurierbare Super-Attribute" />

v2.0 unterstützt außerdem:

- **Flexible Super-Attribut-Auswahl** während der Produkterstellung.
- **`variants_json`**-Format für die programmatische / Bulk-Variantendefinition.
- **Größenbasierter Varianten-Seeder** zum schnellen Generieren von Größenrastern.

::: warning
Super-Attribute sind **gesperrt, nachdem Varianten erstellt wurden**. Planen Sie die Variantenachsen im Voraus — sie später zu ändern erfordert das Löschen und erneute Erstellen von Varianten.
:::

### Schritt 3 — Eltern-Attribute ausfüllen

Wie ein einfaches Produkt gruppiert die Eltern-Bearbeitungsseite die Attribute nach **Attributgruppe** (General, Descriptions, Categories, Associations, …). Welche Gruppen genau erscheinen, hängt von der Familie ab.

Die `default`-Familie erfordert mindestens:

| Feld | Bedeutung |
|---|---|
| **SKU** | Eltern-SKU — die Kennung für den konfigurierbaren Datensatz. |
| **Name** | Anzeigename, der von allen Varianten geteilt wird. |
| **URL Key** | URL-sicherer Slug für die Storefront-Verlinkung. |

Andere auf dem Elternteil auszufüllende Abschnitte:

| Abschnitt | Zweck |
|---|---|
| **Short Description** | Variantenunabhängige Zusammenfassung. |
| **Description** | Vollständiger Text — meist über Varianten hinweg geteilt. |
| **Technical** | Status-Schalter — aktiviert/deaktiviert das gesamte konfigurierbare Set. |
| **Categories** | Kategoriezuweisung für die Konfigurierbare (gilt für alle Varianten). |
| **Associations** | Related / Up-Sell / Cross-Sell-Produkte (siehe unten). |

Jeder Abschnitt wird als eigene Karte auf der Bearbeitungsseite gerendert. Die **Description**-Karten enthalten einen WYSIWYG-Editor. Die **Technical**-Karte enthält den grünen **Status**-Schalter — wenn er deaktiviert bleibt, geht die gesamte Konfigurierbare (Eltern **und** alle Varianten) offline. Die **Categories**-Karte öffnet einen Baum-Picker; alles, was Sie hier auswählen, gilt für jede Variante.

<ImagePopup src="/assets/2.0/images/configurable-product/editProduct.png" alt="Bearbeitungsseite des konfigurierbaren Produkts" />

### Schritt 4 — Varianten hinzufügen

Scrollen Sie zum Abschnitt **Variations** und klicken Sie auf **Add Product**, um eine Kindvariante zu erstellen. Ein Modal wird mit einer Eingabe pro Super-Attribut plus einem **SKU**-Feld für die Variante selbst geöffnet.

Für jede Variante:

1. Geben Sie die Werte für die Super-Attribute ein (z. B. `Size = M`, `Color = Red`).
2. Geben Sie die Varianten-SKU ein.
3. Überschreiben Sie optional alle variantenspezifischen Felder (Preis, Bild, Bestand).
4. Klicken Sie auf **Add**, um die Variante zu speichern. Sie erscheint in einer Tabelle unter dem Abschnitt Variations zusammen mit allen bereits erstellten Geschwistern.

<ImagePopup src="/assets/2.0/images/configurable-product/addVariant.png" alt="Formular zum Hinzufügen einer Variante" />

Sie können so viele Varianten hinzufügen, wie das Produkt benötigt. Ein T-Shirt mit Size × Color = 3 × 4 benötigt 12 Varianten; der größenbasierte Seeder kann dies beschleunigen.

### Schritt 5 — Verknüpfungen hinzufügen

Verknüpfen Sie unten auf der Eltern-Bearbeitungsseite dieses konfigurierbare Produkt mit anderen Produkten:

| Verknüpfung | Wann verwenden |
|---|---|
| **Related Products** | Ähnliche Alternativen, die Kunden auch gefallen könnten. |
| **Up-Sell Products** | Höherwertige Versionen — eine Premium-Jackenserie, ein schnellerer Laptop. |
| **Cross-Sell Products** | Ergänzende Artikel — Socken zu Schuhen, Kabel zu Elektronik. |

Klicken Sie für jeden Abschnitt auf **Add**, suchen Sie nach SKU, wählen Sie aus und bestätigen Sie. Alle drei Verknüpfungskarten akzeptieren so viele Produkte, wie Sie benötigen.

### Schritt 6 — Speichern

Klicken Sie oben rechts auf der Bearbeitungsseite auf **Save Product**. Sie werden zurück zum **Produkte-Datagrid** weitergeleitet, wo das Konfigurierbare mit *Configurable* in der Spalte **Type** erscheint. Die Varianten werden nicht als separate Zeilen angezeigt — sie sind nur über den Abschnitt **Variations** des Elternteils zugänglich.

<ImagePopup src="/assets/2.0/images/configurable-product/datagrid.png" alt="Konfigurierbares Produkt im Datagrid" />

::: tip
Attribute mit einem **Kanal-Badge** halten Werte pro Kanal; mit einem **Locale-Badge**, pro Locale; mit beiden, pro Kanal **und** pro Locale. Dies gilt für den Elternteil und für Varianten.
:::

## Arbeiten mit einem konfigurierbaren Produkt nach der Erstellung

Konfigurierbare Produkte unterstützen dieselben Lebenszyklusfunktionen wie einfache Produkte — Vollständigkeit, Übersetzung, Massenbearbeitung, Verlauf, Export, Kopieren. Einige Verhaltensweisen sind spezifisch für konfigurierbare:

### Vollständigkeit

Die Vollständigkeits-Engine wertet **sowohl den Elternteil als auch seine Varianten** aus. Der aggregierte Score berücksichtigt fehlende erforderliche Attribute auf jeder Ebene, sodass selbst ein gut ausgefüllter Elternteil mit einer leeren Variante den Score nach unten ziehen kann.

- Die Vollständigkeit wird pro Kanal **und** pro Locale berechnet.
- Das **Completeness**-Widget des Dashboards rollt alle Produkte einschließlich konfigurierbarer zusammen.
- Varianten mit geringer Vollständigkeit werden neben dem Elternteil zur Aufmerksamkeit markiert.

::: tip
Füllen Sie zuerst die Eltern-Attribute aus (Beschreibung, Bilder, Kategorien). Gehen Sie dann durch die Varianten, um die variantenspezifischen Werte (SKU, Preis, pro-Varianten-Bild) zu setzen. Top-down zu arbeiten ist schneller als zwischen Varianten zu springen.
:::

### Übersetzung

Locale-spezifische Felder auf dem Elternteil und auf jeder Variante können manuell übersetzt werden (Locale-Switcher oben auf der Bearbeitungsseite) oder automatisch über die **[Magic AI — Settings](../magic-ai/settings.md)** Translation. Derselbe Workflow gilt für beide Produkttypen — siehe [Einfaches Produkt → Werte über Locales hinweg übersetzen](./simple.md#translate-values-across-locales).

### Massenbearbeitung

Verwenden Sie **Massenbearbeitung** in der Produktauflistung, um Attribute über viele konfigurierbare Produkte gleichzeitig zu aktualisieren. Wählen Sie die Zeilen aus, wählen Sie das Attribut, geben Sie den Wert ein und wenden Sie an. Siehe [Einfaches Produkt → Massenbearbeitung](./simple.md#bulk-edit).

### Verlauf

Klicken Sie auf den Tab **History** auf der Eltern-Bearbeitungsseite für einen Audit-Trail jeder Änderung — Attributbearbeitungen, Statusumschaltungen, Kategorieänderungen, Verknüpfungsänderungen. Jeder Eintrag listet das Datum, den Benutzer und die spezifischen Felder, die sich geändert haben, mit Vorher- und Nachher-Werten auf. Jede Variante hat ihren eigenen Verlauf, der über ihre individuelle Bearbeitungsansicht zugänglich ist.

### Quick Export

Wählen Sie die konfigurierbare(n) in **Catalog → Products** aus und verwenden Sie **Quick Export** (oben rechts, neben Create Product), um im CSV-, XLS- oder XLSX-Format herunterzuladen. Der Export bündelt den Eltern-Datensatz mit seinen Varianten in einer einzigen Datei, sodass der erneute Import des Ergebnisses die vollständige konfigurierbare Struktur wiederherstellt. Für geplante oder gefilterte Exporte verwenden Sie den vollständigen **[Export](../data-transfer/export.md)**-Workflow.

## Verwandte Lektüre

- **[Einfaches Produkt](./simple.md)** — für eigenständige SKUs ohne Varianten.
- **[Attributfamilie](../attribute/attribute-family.md)** — steuert, welche Attribute (einschließlich Kandidat-Super-Attribute) eine Konfigurierbare verwenden kann.
- **[Produktattribut](../attribute/product-attribute.md)** — wie man ein Attribut als für Varianten verwendbar markiert.
- **[Magic AI — Settings](../magic-ai/settings.md)** — Variantinhalte über Locales hinweg automatisch übersetzen.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — v2.0-beta.1 führte AI-Agent-Unterstützung zum Erstellen und Verwalten konfigurierbarer Produkte per Chat ein.
