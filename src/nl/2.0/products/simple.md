# Simple Product

Een **Simple Product** is één, standalone SKU — één fysiek item met één set van attributen en geen variaties. Het is het meest voorkomende producttype in UnoPim en de juiste keuze wanneer een product *geen* maat, kleur of andere varianten nodig heeft.

## Wat is een Simple Product?

| | Simple Product |
|---|---|
| **Structuur** | Eén SKU, één set attribuutwaarden, één rij in het productenraster. |
| **Wanneer te gebruiken** | Het item heeft geen varianten, of elke variant moet als een eigen apart record worden beheerd. |
| **Typische voorbeelden** | Een boek, één verfkleur, een specifieke doos schroeven, een notitieboek met ringband. |
| **Vergelijk met** | [Configurable Product](./configurable.md) — gebruik dat wanneer één catalogusvermelding meerdere maat/kleur/materiaal-varianten onder één ouder moet groeperen. |

## Hoe werkt het?

Een Simple Product wordt in twee fasen aangemaakt:

1. **Aanmaken** — u stelt het producttype in op `Simple`, kiest een attribuutfamilie en geeft het een SKU. Dat maakt een minimaal record aan.
2. **Bewerken** — UnoPim leidt u door naar de productbewerk-pagina, waar u de attributen invult die door de familie zijn gedefinieerd (naam, beschrijving, prijs, categorieën, afbeeldingen, associaties, …) en opslaat.

Omdat attribuutbeschikbaarheid wordt gedreven door de **attribuutset**, heeft een Simple Product in de `default`-set een andere set bewerkbare velden dan een in bijvoorbeeld een `books`-set. Het beheren van de vorm van een Simple Product betekent het beheren van zijn set — zie [Attribuutset](../attribute/attribute-family.md).

## Hoe een Simple Product te Maken

### Stap 1 — Start aanmaak

1. Klik op **Catalogus → Producten**.
2. Klik in de rechterbovenhoek op **Create Product**. Een dialoogvenster getiteld **"Create New Product"** opent.
3. Vul de drie velden in:
   - **Type** — `Simple`.
   - **Family** — de attribuutfamilie die bepaalt welke velden op de bewerkpagina zullen verschijnen.
   - **SKU** — een unieke identifier voor het product.
4. Klik op **Save Product**.

<ImagePopup src="/assets/2.0/images/simple-product/simple.png" alt="Create Simple Product modal" />

UnoPim sluit het dialoogvenster en leidt u door naar de bewerkpagina, waar elk resterend veld kan worden ingevuld.

<ImagePopup src="/assets/2.0/images/simple-product/editProduct.png" alt="Edit Simple Product" />

### Stap 2 — Vul de productdetails in

De bewerkpagina groepeert attributen per **Attribuutgroep** (General, Short Description, Description, Price, Technical, Categories, Associations, …). Welke groepen precies verschijnen, hangt af van de set die u bij aanmaak hebt gekozen.

De `default`-family vereist minimaal:

| Veld | Betekenis |
|---|---|
| **SKU** | Unieke productidentifier. Kan niet worden gedupliceerd. |
| **Name** | Weergavenaam getoond aan klanten. |
| **URL Key** | URL-veilige slug voor storefront-links. |

Aanvullende ingebouwde secties voor de `default`-family:

| Sectie | Doel |
|---|---|
| **Short Description** | Samenvatting van één of twee regels. Verschijnt op listing-kaarten en SEO-previews. |
| **Description** | Volledige producttekst — kan de WYSIWYG-editor gebruiken. |
| **Price** | Verkoopprijs plus kostprijs per valuta. |
| **Technical** | Status-toggle — schakelt het product in/uit. |
| **Categories** | Wijs het product toe aan een of meer categorieën (inclusief een root-categorie). |
| **Associations** | Related / Up-sell / Cross-sell product-links (zie hieronder). |

Elke sectie verschijnt als een eigen kaart op de bewerkpagina. De kaarten **Short Description** en **Description** bevatten een WYSIWYG-editor voor rich text. De **Price**-kaart toont één rij per geconfigureerde valuta. De **Technical**-kaart bevat de groene **Status**-toggle — laat deze op *Enabled* om het product als actief te beschouwen. De **Categories**-kaart opent een tree-picker; vink elke node aan waartoe het product behoort. Alle kaarten delen dezelfde *Save Product*-knop rechtsboven op de pagina.

### Stap 3 — Voeg associaties toe

Onderaan de bewerkpagina kunt u dit product koppelen aan andere. Alle drie de secties werken op dezelfde manier: klik op **Add**, zoek op SKU, klik vervolgens op **Add Selected Product**.

| Associatie | Wanneer te gebruiken |
|---|---|
| **Related Products** | Vergelijkbare alternatieven — helpt klanten substituten te ontdekken die ze mogelijk ook leuk vinden. |
| **Up-Sell Products** | Hoger gepositioneerde versies — een betere TV, een snellere laptop, een duurzamere tablet. |
| **Cross-Sell Products** | Aanvullende items — beschermhoes + laptop, adapter + telefoon. |

Elk van de drie associatiekaarten heeft dezelfde lay-out: een **Add**-knop opent een zoek-op-SKU-picker, aangevinkte producten verschijnen als een lijst eronder met een ✕-knop om ze te verwijderen, en er is geen limiet op hoeveel u kunt toevoegen.

### Stap 4 — Opslaan

Klik op **Save Product** rechtsboven op de bewerkpagina. U wordt teruggeleid naar de **Products Data Grid**, waar het nieuwe product verschijnt als een rij met zijn SKU, afbeeldingsminiatuur, naam, attribuutfamilie, statuschip, type (*Simple*) en volledigheidspercentage.

<ImagePopup src="/assets/2.0/images/simple-product/datagrid.png" alt="Products Datagrid" />

::: tip
Attributen die waarden per channel ondersteunen, tonen een **channel-badge**. Attributen die waarden per locale ondersteunen, tonen een **locale-badge**. Attributen die beide ondersteunen, tonen beide badges — dit zijn de velden die u opnieuw zult bezoeken wanneer u channels of locales op de bewerkpagina wisselt.
:::

## Werken met een Simple Product na aanmaak

Eenmaal aangemaakt, ondersteunt een Simple Product de volledige set van UnoPim-productfuncties. De rest van deze pagina groepeert ze op basis van wat u probeert te doen.

### Vertaal waarden over locales

UnoPim ondersteunt **Product Values Translation** — waarden per locale voor elk attribuut dat is gemarkeerd als locale-specifiek.

<ImagePopup src="/assets/2.0/images/simple-product/product-edit-locale.png" alt="Product Edit met Locale Switcher" />

#### Handmatige vertaling

1. Open het product in **Catalogus → Producten**.
2. Gebruik bovenaan de bewerkpagina de twee switchers:
   - **Channel Switcher** (bijv. *Default*) — kiest welke channel-waarden u bewerkt.
   - **Locale Switcher** (bijv. *English (United States)*) — kiest de locale.
3. Wissel naar de doel-locale. Het formulier herlaadt met de waarden van die locale. Locale-specifieke velden tonen een locale-badge (bijv. `EN_US`).
4. Voer de vertaalde waarden in (Name, Description, URL Key, …).
5. Klik op **Save Product**.
6. Herhaal per locale.

::: tip
Een **DEFAULT**-badge betekent channel-specifiek. Een locale-badge (bijv. `EN_US`) betekent locale-specifiek. Beide badges samen betekent dat het attribuut waarden per channel **en** per locale ondersteunt.
:::

#### Auto-vertaling met Magic AI

Schakel **Magic AI → Instellingen → Translation** in en elke productopslag vertaalt automatisch locale-specifieke velden in de doel-locales:

1. Schakel **Enabled** in.
2. Stel het **Source Channel** en **Source Locale** in (de taal waarin u schrijft).
3. Stel het **Target Channel** en **Target Locales** in.
4. Kies een **Translation Model** — u kunt hiervoor een goedkopere/snellere provider gebruiken.
5. Schakel optioneel **Replace Existing Value** in om bestaande vertalingen bij opnieuw uitvoeren te overschrijven.

Zie [Magic AI — Instellingen](../magic-ai/settings.md) voor de volledige veldreferentie.

### Volledigheid controleren

UnoPim berekent een **Product Completeness**-score per product, per channel, per locale:

- De score wordt weergegeven als een percentage (bijv. 89%).
- Producten met lage volledigheid tonen *"Low completeness, add details to improve"*.
- Bijna-volledige producten tonen *"Almost complete, just a few details left"*.
- Het Dashboard aggregeert volledigheid per channel in de **Completeness**-widget.

::: tip
Combineer volledigheid met **Magic AI Auto-Enrichment** (Magic AI → Instellingen → Agentic PIM) om automatisch ontbrekende velden in te vullen en de score te verhogen.
:::

### Wijzigingsgeschiedenis bekijken

Klik op het tabblad **History** op de productbewerk-pagina om elke wijziging te zien. Elke vermelding registreert:

- Datum/tijd van de wijziging.
- De gebruiker die deze heeft aangebracht.
- Exacte velden die zijn gewijzigd, met voor-/na-waarden.

Klik op het **oog-icoon** op een willekeurige vermelding om een detailweergave te openen die de voor- en na-waarden naast elkaar toont. UnoPim volgt geschiedenis voor **producten, categorieën, attributen, attribuutfamilies en channels** met dezelfde UI.

### Een product dupliceren

Om een nieuw product aan te maken op basis van een bestaand:

1. Zoek in **Catalogus → Producten** de rij die u wilt kopiëren.
2. Klik op het **Copy-icoon** (klembord) in de Actions-kolom.
3. UnoPim maakt een duplicaat met een nieuwe SKU.
4. Bewerk de kopie om deze aan te passen.

## Werken met de Products-lijst

De lijst op **Catalogus → Producten** is waar u producten vindt, filtert, bulk-bewerkt en exporteert.

### Kolommen beheren

Klik op de knop **Columns** om de modal **Manage columns** te openen.

<ImagePopup src="/assets/2.0/images/simple-product/columns-selector.png" alt="Columns Selector" />

| Paneel | Inhoud |
|---|---|
| **Available Columns** (links) | Elk attribuut dat als kolom kan worden weergegeven — ID, Parent, Created/Updated At, URL Key, Tax Category, Short Description, Description, Price, Cost, Meta Title, Meta Keywords, Meta Description, plus elk aangepast attribuut. Zoeken + paginering. |
| **Geselecteerde kolommen** (rechts) | Momenteel zichtbare kolommen. Standaard: SKU, Image, Name, Attribuutset, Status, Type, Complete. |

Om aan te passen:

1. Sleep van Available naar Selected om een kolom toe te voegen.
2. Sleep binnen Selected om te herordenen.
3. Sleep uit Selected (of klik op verwijderen) om te verbergen.
4. Klik op **Apply**.

### Producten filteren

Klik op **Filter** boven de datagrid om de drawer **Apply Filters** vanuit de rechterkant van het scherm open te schuiven. De drawer draagt een vaste set ingebouwde filtervelden plus een knop **Add Filter** voor aangepaste attributen.

**Ingebouwde filters** (altijd getoond):

- **SKU** — tekst-match.
- **Name** — tekst-match.
- **Attribuutset** — dropdown van alle geconfigureerde sets.
- **Status** — Enabled / Disabled-dropdown.
- **Type** — Simple / Configurable-dropdown.

**Add Filter (aangepaste attributen)**

Klik op **Add Filter** onderaan de drawer om een filter toe te voegen voor elk attribuut waarvoor **Is Filterable** is aangevinkt op zijn Configuratiekaart (zie [Product Attribute → Configuration](../attribute/product-attribute.md#add-attributes)). Zo filtert u de lijst op `color`, `size`, `brand` of een ander attribuut dat relevant is voor uw catalogus:

1. Klik in de drawer op **Add Filter**.
2. Kies een attribuut uit de dropdown — alleen attributen met **Is Filterable = on** worden vermeld.
3. Voer de waarde(n) in of selecteer ze om op te filteren. Invoervorm hangt af van het datatype van het attribuut (tekstinvoer, select-dropdown, datumbereik, checkbox, enz.).
4. Herhaal **Add Filter** om meer filters op te stapelen — ze worden gecombineerd met AND-logica.

Klik op **Save** onderaan de drawer om de filterset toe te passen. De datagrid wordt herladen en toont alleen de overeenkomende rijen. Om te wissen, opent u de drawer opnieuw en verwijdert u individuele filterchips, of herlaadt u de pagina om te resetten.

::: tip
Als een attribuut waarop u wilt filteren niet in de Add Filter-dropdown staat, ga dan naar **Catalogus → Attributen**, bewerk het attribuut, vink **Is Filterable** aan in de Configuratiekaart en sla op. Het verschijnt direct in de dropdown.
:::

### Bulk edit

UnoPim ondersteunt **Bulkbewerking** op elk attribuut dat door de geselecteerde producten wordt gedeeld:

1. Ga naar **Catalogus → Producten**.
2. Vink de rijen aan die u wilt bewerken.
3. Open de dropdown **Bulk Actions**.
4. Selecteer **Edit** en kies het attribuut.
5. Voer de nieuwe waarde in en pas toe.

#### Bulk Enable / Disable

1. Selecteer meerdere producten.
2. Kies in de bulkactie-balk **Enable** of **Disable**.

#### Bulk Delete

1. Selecteer de producten.
2. Klik op **Delete**.
3. Bevestig — de verwijdering is permanent.

### Quick Export

Exporteer geselecteerde (of alle) producten direct vanuit de lijst:

1. Selecteer de producten.
2. Klik op **Quick Export** rechtsboven, naast **Create Product**.
3. Kies **CSV**, **XLS** of **XLSX** uit de formaat-picker.
4. UnoPim genereert het bestand op de achtergrond en downloadt het naar uw browser zodra de verwerking is voltooid. U kunt de job-voortgang bekijken op de pagina **Taakvolger** terwijl u wacht.

Voor geplande of gefilterde exports, gebruik de volledige **[Exporteren](../data-transfer/export.md)**-workflow in Gegevensoverdracht.

## Gerelateerde lectuur

- **[Configurable Product](./configurable.md)** — wanneer varianten te gebruiken in plaats van één Simple SKU.
- **[Attribuutset](../attribute/attribute-family.md)** — bepaalt welke velden op een Simple Product verschijnen.
- **[Magic AI — Instellingen](../magic-ai/settings.md)** — configureer auto-vertaling en auto-enrichment voor producten.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — Simple Products aanmaken, bijwerken en bulk-bewerken via natuurlijke taal.
