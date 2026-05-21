# Einfaches Produkt

Ein **einfaches Produkt** ist eine einzelne, eigenständige SKU — ein physischer Artikel mit einem Satz von Attributen und ohne Variationen. Es ist der häufigste Produkttyp in UnoPim und die richtige Wahl, wann immer ein Produkt *keine* Größen, Farben oder andere Varianten benötigt.

## Was ist ein einfaches Produkt?

| | Einfaches Produkt |
|---|---|
| **Struktur** | Eine SKU, ein Satz von Attributwerten, eine Zeile im Produktraster. |
| **Wann verwenden** | Der Artikel hat keine Varianten oder jede Variante sollte als eigener separater Datensatz verwaltet werden. |
| **Typische Beispiele** | Ein Buch, eine einzelne Lackfarbe, eine bestimmte Schraubenpackung, ein ringgebundenes Notizbuch. |
| **Vergleich mit** | [Konfigurierbares Produkt](./configurable.md) — verwenden Sie dieses, wenn ein Katalogeintrag mehrere Größen-/Farben-/Materialvarianten unter einem einzigen Elternteil gruppieren muss. |

## Wie funktioniert es?

Ein einfaches Produkt wird in zwei Phasen erstellt:

1. **Erstellen** — Sie setzen den Produkttyp auf `Simple`, wählen eine Attributfamilie und geben eine SKU ein. Damit wird ein minimaler Datensatz erstellt.
2. **Bearbeiten** — UnoPim leitet Sie zur Produkt-Bearbeitungsseite weiter, wo Sie die von der Familie definierten Attribute (Name, Beschreibung, Preis, Kategorien, Bilder, Verknüpfungen, …) ausfüllen und speichern.

Da die Attributverfügbarkeit durch die **Attributfamilie** gesteuert wird, hat ein einfaches Produkt in der `default`-Familie einen anderen Satz von bearbeitbaren Feldern als eines in beispielsweise einer `books`-Familie. Die Form eines einfachen Produkts zu verwalten bedeutet, seine Familie zu verwalten — siehe [Attributfamilie](../attribute/attribute-family.md).

## So erstellen Sie ein einfaches Produkt

### Schritt 1 — Erstellung starten

1. Klicken Sie auf **Catalog → Products**.
2. Klicken Sie oben rechts auf **Create Product**. Ein Dialog mit dem Titel **„Create New Product"** wird geöffnet.
3. Füllen Sie die drei Felder aus:
   - **Type** — `Simple`.
   - **Family** — die Attributfamilie, die steuert, welche Felder auf der Bearbeitungsseite erscheinen werden.
   - **SKU** — eine eindeutige Kennung für das Produkt.
4. Klicken Sie auf **Save Product**.

<ImagePopup src="/assets/2.1/images/simple-product/simple.png" alt="Modal zum Erstellen eines einfachen Produkts" />

UnoPim schließt den Dialog und leitet Sie zur Bearbeitungsseite weiter, wo jedes verbleibende Feld ausgefüllt werden kann.

<ImagePopup src="/assets/2.1/images/simple-product/editProduct.png" alt="Einfaches Produkt bearbeiten" />

### Schritt 2 — Produktdetails ausfüllen

Die Bearbeitungsseite gruppiert Attribute nach **Attributgruppe** (General, Short Description, Description, Price, Technical, Categories, Associations, …). Welche Gruppen genau erscheinen, hängt von der bei der Erstellung gewählten Familie ab.

Die `default`-Familie erfordert mindestens:

| Feld | Bedeutung |
|---|---|
| **SKU** | Eindeutige Produktkennung. Kann nicht dupliziert werden. |
| **Name** | Anzeigename, der den Kunden angezeigt wird. |
| **URL Key** | URL-sicherer Slug für Storefront-Links. |

Zusätzliche integrierte Abschnitte für die `default`-Familie:

| Abschnitt | Zweck |
|---|---|
| **Short Description** | Zusammenfassung in ein oder zwei Zeilen. Erscheint auf Listingkarten und SEO-Vorschauen. |
| **Description** | Vollständiger Produkttext — kann den WYSIWYG-Editor verwenden. |
| **Price** | Verkaufspreis plus Einkaufspreis pro Währung. |
| **Technical** | Status-Schalter — aktiviert/deaktiviert das Produkt. |
| **Categories** | Weisen Sie das Produkt einer oder mehreren Kategorien zu (einschließlich einer Stammkategorie). |
| **Associations** | Related / Up-Sell / Cross-Sell-Produktlinks (siehe unten). |

Jeder Abschnitt erscheint als eigene Karte auf der Bearbeitungsseite. Die **Short Description**- und **Description**-Karten enthalten einen WYSIWYG-Editor für Rich Text. Die **Price**-Karte zeigt eine Zeile pro konfigurierter Währung. Die **Technical**-Karte enthält den grünen **Status**-Schalter — lassen Sie ihn *Enabled*, damit das Produkt als aktiv gilt. Die **Categories**-Karte öffnet einen Baum-Picker; kreuzen Sie jeden Knoten an, zu dem das Produkt gehört. Alle Karten teilen sich die gleiche *Save Product*-Schaltfläche oben rechts auf der Seite.

### Schritt 3 — Verknüpfungen hinzufügen

Unten auf der Bearbeitungsseite können Sie dieses Produkt mit anderen verknüpfen. Alle drei Abschnitte funktionieren gleich: Klicken Sie auf **Add**, suchen Sie nach SKU und klicken Sie dann auf **Add Selected Product**.

| Verknüpfung | Wann verwenden |
|---|---|
| **Related Products** | Ähnliche Alternativen — hilft Kunden, Ersatzprodukte zu entdecken, die ihnen auch gefallen könnten. |
| **Up-Sell Products** | Höherwertige Versionen — ein besserer Fernseher, ein schnellerer Laptop, ein robusteres Tablet. |
| **Cross-Sell Products** | Ergänzende Artikel — Schutzhülle + Laptop, Adapter + Telefon. |

Jede der drei Verknüpfungskarten hat das gleiche Layout: Eine **Add**-Schaltfläche öffnet einen SKU-Such-Picker, angekreuzte Produkte erscheinen darunter als Liste mit einer ✕-Schaltfläche zum Entfernen, und es gibt keine Begrenzung, wie viele Sie hinzufügen können.

### Schritt 4 — Speichern

Klicken Sie oben rechts auf der Bearbeitungsseite auf **Save Product**. Sie werden zurück zum **Produkte-Datagrid** weitergeleitet, wo das neue Produkt als Zeile mit seiner SKU, dem Bild-Thumbnail, dem Namen, der Attributfamilie, dem Status-Chip, dem Typ (*Simple*) und dem Vollständigkeitsprozentsatz erscheint.

<ImagePopup src="/assets/2.1/images/simple-product/datagrid.png" alt="Produkte-Datagrid" />

::: tip
Attribute, die Werte pro Kanal unterstützen, zeigen einen **Kanal-Badge**. Attribute, die Werte pro Locale unterstützen, zeigen einen **Locale-Badge**. Attribute, die beides unterstützen, zeigen beide Badges — dies sind die Felder, die Sie erneut besuchen werden, wenn Sie Kanäle oder Locales auf der Bearbeitungsseite wechseln.
:::

## Arbeiten mit einem einfachen Produkt nach der Erstellung

Nach der Erstellung unterstützt ein einfaches Produkt den vollen Satz von UnoPim-Produktfunktionen. Der Rest dieser Seite gruppiert sie nach dem, was Sie erreichen wollen.

### Werte über Locales hinweg übersetzen

UnoPim unterstützt **Product Values Translation** — Werte pro Locale für jedes als locale-spezifisch markierte Attribut.

<ImagePopup src="/assets/2.1/images/simple-product/product-edit-locale.png" alt="Produktbearbeitung mit Locale-Switcher" />

#### Manuelle Übersetzung

1. Öffnen Sie das Produkt in **Catalog → Products**.
2. Verwenden Sie oben auf der Bearbeitungsseite die beiden Schalter:
   - **Channel Switcher** (z. B. *Default*) — wählt aus, welche Kanalwerte Sie bearbeiten.
   - **Locale Switcher** (z. B. *English (United States)*) — wählt die Locale.
3. Wechseln Sie zur Ziel-Locale. Das Formular lädt mit den Werten dieser Locale neu. Locale-spezifische Felder zeigen einen Locale-Badge (z. B. `EN_US`).
4. Geben Sie die übersetzten Werte ein (Name, Description, URL Key, …).
5. Klicken Sie auf **Save Product**.
6. Wiederholen Sie dies pro Locale.

::: tip
Ein **DEFAULT**-Badge bedeutet kanal-spezifisch. Ein Locale-Badge (z. B. `EN_US`) bedeutet locale-spezifisch. Beide Badges zusammen bedeutet, dass das Attribut Werte pro Kanal **und** pro Locale unterstützt.
:::

#### Automatische Übersetzung mit Magic AI

Aktivieren Sie **Magic AI → Settings → Translation**, und jeder Produkt-Speichervorgang übersetzt automatisch locale-spezifische Felder in die Ziel-Locales:

1. Schalten Sie **Enabled** ein.
2. Setzen Sie den **Source Channel** und die **Source Locale** (die Sprache, in der Sie schreiben).
3. Setzen Sie den **Target Channel** und die **Target Locales**.
4. Wählen Sie ein **Translation Model** — Sie können hierfür einen günstigeren/schnelleren Anbieter verwenden.
5. Schalten Sie optional **Replace Existing Value** ein, um vorhandene Übersetzungen bei einem erneuten Lauf zu überschreiben.

Siehe [Magic AI — Settings](../magic-ai/settings.md) für die vollständige Feldreferenz.

### Vollständigkeit prüfen

UnoPim berechnet einen **Product Completeness**-Score pro Produkt, pro Kanal, pro Locale:

- Der Score wird als Prozentsatz angezeigt (z. B. 89 %).
- Produkte mit geringer Vollständigkeit zeigen *„Low completeness, add details to improve"*.
- Fast vollständige Produkte zeigen *„Almost complete, just a few details left"*.
- Das Dashboard aggregiert die Vollständigkeit pro Kanal im **Completeness**-Widget.

::: tip
Kombinieren Sie die Vollständigkeit mit **Magic AI Auto-Enrichment** (Magic AI → Settings → Agentic PIM), um fehlende Felder automatisch auszufüllen und den Score zu erhöhen.
:::

### Änderungsverlauf überprüfen

Klicken Sie auf den Tab **History** auf der Produkt-Bearbeitungsseite, um jede Änderung zu sehen. Jeder Eintrag zeichnet auf:

- Datum/Uhrzeit der Änderung.
- Der Benutzer, der sie vorgenommen hat.
- Genaue Felder, die geändert wurden, mit Vorher-/Nachher-Werten.

Klicken Sie auf das **Augen-Symbol** in einem beliebigen Eintrag, um eine Detailansicht zu öffnen, die die Vorher- und Nachher-Werte nebeneinander anzeigt. UnoPim verfolgt den Verlauf für **Produkte, Kategorien, Attribute, Attributfamilien und Kanäle** mit derselben Benutzeroberfläche.

### Ein Produkt duplizieren

So erstellen Sie ein neues Produkt aus einem vorhandenen:

1. Suchen Sie in **Catalog → Products** die zu kopierende Zeile.
2. Klicken Sie auf das **Copy-Symbol** (Zwischenablage) in der Aktionsspalte.
3. UnoPim erstellt ein Duplikat mit einer neuen SKU.
4. Bearbeiten Sie die Kopie, um sie anzupassen.

## Arbeiten mit der Produktauflistung

Die Auflistung unter **Catalog → Products** ist der Ort, an dem Sie Produkte finden, filtern, in Bulk bearbeiten und exportieren.

### Spalten verwalten

Klicken Sie auf die Schaltfläche **Columns**, um das Modal **Manage columns** zu öffnen.

<ImagePopup src="/assets/2.1/images/simple-product/columns-selector.png" alt="Spaltenauswahl" />

| Panel | Inhalt |
|---|---|
| **Available Columns** (links) | Jedes Attribut, das als Spalte angezeigt werden kann — ID, Parent, Created/Updated At, URL Key, Tax Category, Short Description, Description, Price, Cost, Meta Title, Meta Keywords, Meta Description plus jedes benutzerdefinierte Attribut. Suche + Paginierung. |
| **Selected Columns** (rechts) | Derzeit sichtbare Spalten. Standard: SKU, Image, Name, Attributfamilie, Status, Type, Complete. |

So passen Sie an:

1. Ziehen Sie von Available zu Selected, um eine Spalte hinzuzufügen.
2. Ziehen Sie innerhalb von Selected, um neu anzuordnen.
3. Ziehen Sie aus Selected heraus (oder klicken Sie auf entfernen), um auszublenden.
4. Klicken Sie auf **Apply**.

### Produkte filtern

Klicken Sie über dem Datagrid auf **Filter**, um den **Apply Filters**-Drawer von der rechten Seite des Bildschirms zu öffnen. Der Drawer enthält einen festen Satz von integrierten Filterfeldern plus einer **Add Filter**-Schaltfläche für benutzerdefinierte Attribute.

**Integrierte Filter** (immer angezeigt):

- **SKU** — Textübereinstimmung.
- **Name** — Textübereinstimmung.
- **Attributfamilie** — Dropdown aller konfigurierten Familien.
- **Status** — Enabled / Disabled-Dropdown.
- **Type** — Simple / Configurable-Dropdown.

**Add Filter (benutzerdefinierte Attribute)**

Klicken Sie unten im Drawer auf **Add Filter**, um einen Filter für jedes Attribut anzuhängen, bei dem **Is Filterable** auf der Konfigurations-Karte angekreuzt ist (siehe [Produktattribut → Konfiguration](../attribute/product-attribute.md#add-attributes)). So filtern Sie die Auflistung nach `color`, `size`, `brand` oder einem anderen für Ihren Katalog relevanten Attribut:

1. Klicken Sie im Drawer auf **Add Filter**.
2. Wählen Sie ein Attribut aus dem Dropdown — es werden nur Attribute mit **Is Filterable = on** aufgelistet.
3. Geben Sie den/die Wert(e) ein oder wählen Sie ihn/sie aus, nach denen gefiltert werden soll. Die Eingabeform hängt vom Datentyp des Attributs ab (Texteingabe, Select-Dropdown, Datumsbereich, Checkbox usw.).
4. Wiederholen Sie **Add Filter**, um weitere Filter zu stapeln — sie werden mit UND-Logik kombiniert.

Klicken Sie unten im Drawer auf **Save**, um den Filtersatz anzuwenden. Das Datagrid wird neu geladen und zeigt nur die übereinstimmenden Zeilen an. Um zu löschen, öffnen Sie den Drawer erneut und entfernen Sie einzelne Filter-Chips, oder laden Sie die Seite neu, um zurückzusetzen.

::: tip
Wenn ein Attribut, nach dem Sie filtern möchten, nicht im Add Filter-Dropdown enthalten ist, gehen Sie zu **Katalog → Attribute**, bearbeiten Sie das Attribut, kreuzen Sie **Is Filterable** in der Konfigurations-Karte an und speichern Sie. Es erscheint sofort im Dropdown.
:::

### Massenbearbeitung

UnoPim unterstützt **Massenbearbeitung** auf jedem Attribut, das von den ausgewählten Produkten geteilt wird:

1. Gehen Sie zu **Katalog → Produkte**.
2. Kreuzen Sie die Zeilen an, die Sie bearbeiten möchten.
3. Öffnen Sie das Dropdown **Bulk Actions**.
4. Wählen Sie **Edit** und wählen Sie das Attribut aus.
5. Geben Sie den neuen Wert ein und wenden Sie an.

#### Massen-Aktivieren / -Deaktivieren

1. Wählen Sie mehrere Produkte aus.
2. Wählen Sie in der Massenaktionsleiste **Enable** oder **Disable**.

#### Massen-Löschen

1. Wählen Sie die Produkte aus.
2. Klicken Sie auf **Delete**.
3. Bestätigen Sie — das Löschen ist dauerhaft.

### Quick Export

Exportieren Sie ausgewählte (oder alle) Produkte direkt aus der Auflistung:

1. Wählen Sie die Produkte aus.
2. Klicken Sie oben rechts auf **Quick Export**, neben **Create Product**.
3. Wählen Sie **CSV**, **XLS** oder **XLSX** aus der Formatauswahl.
4. UnoPim generiert die Datei im Hintergrund und lädt sie nach Abschluss der Verarbeitung in Ihren Browser herunter. Sie können den Job-Fortschritt auf der **Job-Tracker**-Seite verfolgen, während Sie warten.

Für geplante oder gefilterte Exporte verwenden Sie den vollständigen **[Export](../data-transfer/export.md)**-Workflow in Datentransfer.

## Verwandte Lektüre

- **[Konfigurierbares Produkt](./configurable.md)** — wann Sie Varianten anstelle einer einzelnen einfachen SKU verwenden sollten.
- **[Attributfamilie](../attribute/attribute-family.md)** — steuert, welche Felder auf einem einfachen Produkt erscheinen.
- **[Magic AI — Settings](../magic-ai/settings.md)** — konfigurieren Sie die automatische Übersetzung und Anreicherung für Produkte.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — Erstellen, Aktualisieren und Massenbearbeiten von einfachen Produkten über natürliche Sprache.
