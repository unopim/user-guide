# Produktattribut

Ein Attribut ist eine Spezifikation oder ein Merkmal eines Produkts — Color, Size und Pattern sind alle Attribute eines T-Shirts. Sie können beliebig viele Attribute pro Produkt erstellen; die Gesamtheit der Attribute verleiht jedem Produkt seine Form und Durchsuchbarkeit.

### So erstellen Sie ein Produktattribut in UnoPim

Öffnen Sie das Admin-Panel und folgen Sie den unten stehenden Schritten.

### Attribute hinzufügen

**Schritt 1** — Klicken Sie auf **Catalog → Attributes → Create Attributes**.

<ImagePopup src="/assets/2.0/images/attributes/createAttribute.png" alt="Attribut erstellen" />

**Schritt 2** — Geben Sie den **Code** und den **Data Type** im allgemeinen Abschnitt ein.

<ImagePopup src="/assets/2.0/images/attributes/general.png" alt="Allgemeiner Abschnitt" />

**Hinweis** — Die **Is Unique**-Validierung ist nur für die Typen **Text, Datetime & Date** verfügbar.

**Schritt 3** — Geben Sie das **Label** Ihres Attributs ein.

<ImagePopup src="/assets/2.0/images/attributes/label.png" alt="Label-Abschnitt" />

**Schritt 4** — Wählen Sie **Validation** aus, wenn das Attribut erforderlich oder eindeutig sein soll.

**Hinweis** — Die **Is Unique**-Validierung ist nur für die Typen **Text, Datetime & Date** verfügbar.

<ImagePopup src="/assets/2.0/images/attributes/validation.png" alt="Validierungsabschnitt" />

**Schritt 5** — Öffnen Sie die **Configuration**-Karte rechts vom Formular und kreuzen Sie die zutreffenden Optionen an:

| Option | Was sie bewirkt |
|---|---|
| **Value Per Locale** | Das Attribut speichert einen separaten Wert pro Locale. Wechseln Sie die Locale auf der Produktbearbeitungsseite, um jede Übersetzung einzugeben. |
| **Value Per Channel** | Das Attribut speichert einen separaten Wert pro Kanal. Nützlich, wenn sich dasselbe Feld zwischen Storefronts unterscheidet (z. B. ein kanalspezifischer Preis oder eine kanalspezifische Beschreibung). |
| **Is Filterable** | Macht das Attribut im **Apply Filters**-Drawer auf der Produktauflistung verfügbar (siehe [Produkte filtern](../products/simple.md#filter-products)). Kreuzen Sie dies für jedes Attribut an, das Sie als Filter verwenden möchten — `size`, `color`, `brand` usw. |

<ImagePopup src="/assets/2.0/images/attributes/configuration.png" alt="Konfigurationsabschnitt" />

::: tip
Das Umschalten von **Is Filterable** auf einem bestehenden Attribut aktiviert sofort die **Add Filter**-Option für dieses Attribut auf der Produktauflistung — kein Neuindexierungsschritt erforderlich.
:::

Klicken Sie auf **Save Attribute**. Das neue Attribut erscheint im Datagrid.

<ImagePopup src="/assets/2.0/images/attributes/output.png" alt="Attribut-Datagrid" />

Gehen Sie als Nächstes zu **Katalog → Attributfamilien**, öffnen Sie die Familie, in der Sie das Attribut haben möchten, und ziehen Sie das Attribut aus der nicht zugewiesenen Liste in die gewünschte Gruppe.

<ImagePopup src="/assets/2.0/images/attributes/family.png" alt="Attributfamilien-Zuweisung" />

Speichern Sie die Familie, und öffnen Sie dann ein beliebiges Produkt in dieser Familie — das Attribut erscheint nun im Bearbeitungsformular.

<ImagePopup src="/assets/2.0/images/attributes/product.png" alt="Attribut auf der Produktbearbeitungsseite angezeigt" />

### Eine visuelle Aufschlüsselung der UnoPim-Produktdatentypen

**1) Text** — Ein Feld für eine einzelne Textzeile. Typisch für kurze Eingaben wie Namen oder URL-Schlüssel.

<ImagePopup src="/assets/2.0/images/attributes/text.png" alt="Text-Attribut" />

**2) Textarea** — Ein mehrzeiliges Textfeld. Wird für längere Inhalte wie Produktbeschreibungen oder Kommentare verwendet. Sie können den WYSIWYG-Editor aktivieren/deaktivieren.

<ImagePopup src="/assets/2.0/images/attributes/textarea.png" alt="Textarea-Attribut" />

**3) Boolean** — Wahr/Falsch-Schalter. Wird für Ja/Nein- oder Ein/Aus-Auswahlen verwendet.

<ImagePopup src="/assets/2.0/images/attributes/boolean.png" alt="Boolean-Attribut" />

**4) Select** — Ein Dropdown, das eine Auswahl aus einer vordefinierten Liste ermöglicht.

<ImagePopup src="/assets/2.0/images/attributes/select.png" alt="Select-Attribut" />

**5) Multiselect** — Wie Select, erlaubt aber mehrere Auswahlen aus der Liste.

<ImagePopup src="/assets/2.0/images/attributes/multiselect.png" alt="Multiselect-Attribut" />

**6) Datetime** — Wählen Sie ein bestimmtes Datum und eine bestimmte Uhrzeit. Wird für Zeitplanung und Zeitstempel verwendet.

<ImagePopup src="/assets/2.0/images/attributes/datetime.png" alt="Datetime-Attribut" />

**7) Date** — Wählen Sie nur ein Datum (keine Uhrzeit).

<ImagePopup src="/assets/2.0/images/attributes/date.png" alt="Date-Attribut" />

**8) Gallery** — Verwaltet mehrere Bilder **und Videos** pro Produkt. In v1.0.0 fügte UnoPim Galerien Video-Unterstützung hinzu:

1) Bearbeiten Sie Galeriebilder, ohne ihre Position zu ändern.
2) Drag-and-Drop zum Neuanordnen von Bildern.
3) **Video-Unterstützung** — Videodateien neben Bildern hochladen und verwalten.

<ImagePopup src="/assets/2.0/images/attributes/gallery.png" alt="Gallery-Attribut mit Video" />

::: tip
Video-Unterstützung im Gallery-Attribut wurde in v1.0.0 eingeführt. Sie können gängige Videoformate direkt in die Produktgalerie hochladen.
:::

**9) Image** — Hochladen oder Anzeigen eines einzelnen Bildes.

<ImagePopup src="/assets/2.0/images/attributes/image.png" alt="Image-Attribut" />

**10) File** — Hochladen beliebiger Dateien (Dokumente, Bilder usw.).

<ImagePopup src="/assets/2.0/images/attributes/file.png" alt="File-Attribut" />

**11) Checkbox** — Eine umschaltbare Checkbox für binäre Auswahlen (Zustimmungen, Präferenzen).

<ImagePopup src="/assets/2.0/images/attributes/checkbox.png" alt="Checkbox-Attribut" />

**12) Price** — Ein Preisfeld zusätzlich zum vordefinierten **Prices**-Attribut.

<ImagePopup src="/assets/2.0/images/attributes/price.png" alt="Price-Attribut" />

## Swatch-Typen

UnoPim v2.0 führt **Swatch-Typen** für **Select**- und **Multiselect**-Attribute ein. Swatches geben Optionen eine visuelle Darstellung, die sie leichter identifizierbar und auswählbar macht.

### Arten von Swatches

| Swatch-Typ | Beschreibung |
|-------------|-------------|
| **Dropdown** | Standard-Dropdown-Auswahl (Standard) |
| **Color** | Zeigt Farbmuster für jede Option an |
| **Image** | Zeigt Bild-Thumbnails für jede Option an |
| **Text** | Zeigt Textbeschriftungen als visuelle Swatches an |

### So aktivieren Sie Swatch-Typen

1. Erstellen oder bearbeiten Sie ein **Select**- oder **Multiselect**-Attribut.
2. Wählen Sie in der Attributkonfiguration den **Swatch Type** aus dem Dropdown aus.
3. Konfigurieren Sie für jede Attributoption den Swatch-Wert:
   - **Color-Swatch** — geben Sie einen Hex-Farbcode ein (z. B. `#FF0000` für Rot).
   - **Image-Swatch** — laden Sie ein kleines Bild für jede Option hoch.
   - **Text-Swatch** — geben Sie Anzeigetext für jede Option ein.
4. Klicken Sie auf **Save Attribute**.

::: tip
Swatch-Typen sind besonders nützlich für Attribute wie Color, Material oder Pattern, bei denen eine visuelle Darstellung den Benutzern hilft, Optionen schnell auszuwählen.
:::

Indem Sie die obigen Schritte befolgen, können Sie ganz einfach ein **Produktattribut** in UnoPim erstellen.
