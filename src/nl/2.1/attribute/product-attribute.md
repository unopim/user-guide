# Product Attribute

Een Attribute is een specificatie of kenmerk van een product — Color, Size en Pattern zijn allemaal attributen van een T-Shirt. U kunt zoveel attributen per product aanmaken als u nodig hebt; de volledige set van attributen is wat elk product zijn vorm en doorzoekbaarheid geeft.

### Hoe maakt u een Product Attribute aan in UnoPim

Open het Admin Panel en volg de onderstaande stappen.

### Attributen Toevoegen

**Stap 1** — Klik op **Catalogus → Attributen → Attributen aanmaken**.

<ImagePopup src="/assets/2.1/images/attributes/createAttribute.png" alt="Create Attribute" />

**Stap 2** — Voer de **Code** en **Data Type** in de algemene sectie in.

<ImagePopup src="/assets/2.1/images/attributes/general.png" alt="Algemene sectie" />

**Opmerking** — De **Is Unique**-validatie is alleen beschikbaar voor typen **Text, Datetime & Date**.

**Stap 3** — Voer het **Label** van uw Attribute in.

<ImagePopup src="/assets/2.1/images/attributes/label.png" alt="Label-sectie" />

**Stap 4** — Selecteer **Validation** als u wilt dat het Attribute verplicht of uniek is.

**Opmerking** — De **Is Unique**-validatie is alleen beschikbaar voor typen **Text, Datetime & Date**.

<ImagePopup src="/assets/2.1/images/attributes/validation.png" alt="Validatie-sectie" />

**Stap 5** — Open de **Configuration**-kaart rechts van het formulier en vink de opties aan die van toepassing zijn:

| Optie | Wat het doet |
|---|---|
| **Value Per Locale** | Het attribuut slaat een aparte waarde op per locale. Wissel de locale op de productbewerk-pagina om elke vertaling in te voeren. |
| **Value Per Channel** | Het attribuut slaat een aparte waarde op per channel. Handig wanneer hetzelfde veld verschilt tussen storefronts (bijv. prijs of beschrijving per channel). |
| **Is Filterable** | Maakt het attribuut beschikbaar in de **Apply Filters**-drawer in de Products-lijst (zie [Filter products](../products/simple.md#filter-products)). Vink dit aan voor elk attribuut dat u als filter wilt gebruiken — `size`, `color`, `brand`, enz. |

<ImagePopup src="/assets/2.1/images/attributes/configuration.png" alt="Configuratiesectie" />

::: tip
Het inschakelen van **Is Filterable** op een bestaand attribuut maakt direct de optie **Add Filter** ervoor mogelijk in de Products-lijst — geen reindex-stap nodig.
:::

Klik op **Save Attribute**. Het nieuwe attribuut verschijnt in het Datagrid.

<ImagePopup src="/assets/2.1/images/attributes/output.png" alt="Attribute Datagrid" />

Ga vervolgens naar **Catalogus → Attribuutsets**, open de set waarin u het attribuut wilt en sleep het attribuut van de niet-toegewezen lijst naar de gewenste groep.

<ImagePopup src="/assets/2.1/images/attributes/family.png" alt="Attribuutset-toewijzing" />

Sla de family op, open vervolgens een willekeurig product in die family — het attribuut verschijnt nu op het bewerkformulier.

<ImagePopup src="/assets/2.1/images/attributes/product.png" alt="Attribuut weergegeven op productbewerk-pagina" />

### Een Visuele Uitsplitsing van UnoPim Product Data Types

**1) Text** — Een veld voor een enkele regel tekst. Typisch voor korte invoer zoals namen of URL-keys.

<ImagePopup src="/assets/2.1/images/attributes/text.png" alt="Text-attribuut" />

**2) Textarea** — Een meerregelig tekstveld. Gebruikt voor langere content zoals productbeschrijvingen of opmerkingen. U kunt de WYSIWYG-editor in-/uitschakelen.

<ImagePopup src="/assets/2.1/images/attributes/textarea.png" alt="Textarea-attribuut" />

**3) Boolean** — Waar / onwaar-schakelaar. Gebruikt voor ja/nee- of aan/uit-selecties.

<ImagePopup src="/assets/2.1/images/attributes/boolean.png" alt="Boolean-attribuut" />

**4) Select** — Een dropdown waarmee u één keuze uit een vooraf gedefinieerde lijst kunt maken.

<ImagePopup src="/assets/2.1/images/attributes/select.png" alt="Select-attribuut" />

**5) Multiselect** — Net als Select, maar staat meerdere keuzes uit de lijst toe.

<ImagePopup src="/assets/2.1/images/attributes/multiselect.png" alt="Multiselect-attribuut" />

**6) Datetime** — Kies een specifieke datum en tijd. Gebruikt voor planning en tijdstempels.

<ImagePopup src="/assets/2.1/images/attributes/datetime.png" alt="Datetime-attribuut" />

**7) Date** — Kies alleen een datum (geen tijdcomponent).

<ImagePopup src="/assets/2.1/images/attributes/date.png" alt="Date-attribuut" />

**8) Gallery** — Beheert meerdere afbeeldingen **en video's** per product. In v1.0.0 heeft UnoPim video-ondersteuning toegevoegd aan galleries:

1) Bewerk gallery-afbeeldingen zonder hun positie te wijzigen.
2) Drag-and-drop om afbeeldingen te herordenen.
3) **Video-ondersteuning** — upload en beheer videobestanden naast afbeeldingen.

<ImagePopup src="/assets/2.1/images/attributes/gallery.png" alt="Gallery-attribuut met video" />

::: tip
Video-ondersteuning in het gallery-attribuut werd geïntroduceerd in v1.0.0. U kunt veel voorkomende videoformaten direct uploaden naar de productgalerij.
:::

**9) Image** — Upload of toon één afbeelding.

<ImagePopup src="/assets/2.1/images/attributes/image.png" alt="Image-attribuut" />

**10) File** — Upload willekeurige bestanden (documenten, afbeeldingen, enz.).

<ImagePopup src="/assets/2.1/images/attributes/file.png" alt="File-attribuut" />

**11) Checkbox** — Een aan/uit-schakelbaar selectievakje voor binaire selecties (overeenkomsten, voorkeuren).

<ImagePopup src="/assets/2.1/images/attributes/checkbox.png" alt="Checkbox-attribuut" />

**12) Price** — Een prijsveld naast het vooraf gedefinieerde **Prices**-attribuut.

<ImagePopup src="/assets/2.1/images/attributes/price.png" alt="Price-attribuut" />

## Swatch Types

UnoPim v2.0 introduceert **Swatch Types** voor **Select**- en **Multiselect**-attributen. Swatches geven opties een visuele weergave, waardoor ze makkelijker te identificeren en kiezen zijn.

### Types Swatches

| Swatch Type | Beschrijving |
|-------------|-------------|
| **Dropdown** | Standaard dropdown-selectie (standaard) |
| **Color** | Toont kleurstalen voor elke optie |
| **Image** | Toont afbeeldingsminiaturen voor elke optie |
| **Text** | Toont tekstlabels als visuele swatches |

### Hoe Swatch Types inschakelen

1. Maak of bewerk een **Select**- of **Multiselect**-attribuut.
2. Selecteer in de attribuutconfiguratie de **Swatch Type** uit de dropdown.
3. Configureer voor elke attribuutoptie de swatch-waarde:
   - **Color swatch** — voer een hexkleurcode in (bijv. `#FF0000` voor rood).
   - **Image swatch** — upload een kleine afbeelding voor elke optie.
   - **Text swatch** — voer weergavetekst in voor elke optie.
4. Klik op **Save Attribute**.

::: tip
Swatch-typen zijn vooral nuttig voor attributen zoals Color, Material of Pattern, waar een visuele weergave gebruikers helpt opties snel te kiezen.
:::

Door de bovenstaande stappen te volgen, kunt u eenvoudig een **Product Attribute** aanmaken in UnoPim.
