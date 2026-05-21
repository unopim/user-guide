# Configurable Product

Een **Configurable Product** is één catalogusvermelding die meerdere varianten — elk met zijn eigen SKU — onder één ouder groepeert. Het is wat u gebruikt wanneer één product in verschillende *opties* (maat, kleur, materiaal) wordt geleverd en u al die opties samen wilt beheren in plaats van als losgekoppelde Simple Products.

## Wat is een Configurable Product?

| | Configurable Product |
|---|---|
| **Structuur** | Eén parent-SKU + N child-varianten (elk met zijn eigen SKU). |
| **Wanneer te gebruiken** | Het item heeft variaties — T-shirts in S/M/L × Rood/Blauw/Groen, schoenen in verschillende maten, telefoonhoesjes in verschillende kleuren. |
| **Typische voorbeelden** | Een T-shirt verkocht in 3 maten × 4 kleuren, een bank in 3 stofopties, een laptop in meerdere opslagniveaus. |
| **Vergelijk met** | [Simple Product](./simple.md) — gebruik dat wanneer er geen varianten zijn of elke variant werkelijk een apart product is. |

De attributen die de varianten definiëren, worden **super attributes** (of *configurable attributes*) genoemd — dit zijn de assen waarlangs het product varieert (bijv. `size`, `color`). Elk ander attribuut (beschrijving, categorie, afbeeldingen, associaties) wordt op de ouder bewerkt en geërfd door varianten tenzij u dit overschrijft.

## Hoe werkt het?

Een Configurable Product wordt in drie fasen aangemaakt:

1. **Maak de ouder aan** — stel het producttype in op `Configurable`, kies een family, voer een SKU in en kies de **super attributes** die varianten zullen definiëren.
2. **Vul de parent-attributen in** — beschrijving, categorieën, afbeeldingen, prijzen, associaties. Alles wat over varianten moet worden gedeeld, gaat hier.
3. **Voeg varianten toe** — in de sectie **Variations** maakt u één child per combinatie aan (bijv. `Size=M, Color=Red`). Elke child heeft zijn eigen SKU en kan variant-specifieke waarden overschrijven.

Op runtime fungeert de ouder als het publiek-gerichte record en houden de varianten de optie-specifieke gegevens vast (en vaak hun eigen voorraad, prijs, afbeelding).

## Hoe een Configurable Product te Maken

### Stap 1 — Start aanmaak

1. Klik op **Catalogus → Producten**.
2. Klik op **Create Product** in de rechterbovenhoek. Het dialoogvenster **"Create New Product"** opent.
3. Vul in:
   - **Type** — `Configurable`.
   - **Family** — de attribuutfamilie die bepaalt welke velden op de ouder verschijnen.
   - **SKU** — de parent-SKU (moet uniek zijn).
4. Klik op **Save Product**.

<ImagePopup src="/assets/2.0/images/configurable-product/configurable.png" alt="Create Configurable Product modal" />

UnoPim leidt u door naar de bewerkpagina en vraagt u super attributes te selecteren.

### Stap 2 — Kies super attributes

Super attributes zijn de assen waarlangs het product varieert — meestal die met Select- of Multiselect-datatypen (bijv. `size`, `color`). Alleen attributen die zijn gemarkeerd als *bruikbaar voor varianten* op de family verschijnen hier.

<ImagePopup src="/assets/2.0/images/configurable-product/configurableAttributes.png" alt="Configurable Super Attributes" />

v2.0 ondersteunt ook:

- **Flexibele super attribute-selectie** tijdens productaanmaak.
- **`variants_json`**-formaat voor programmatische / bulk-variantdefinitie.
- **Op grootte gebaseerde variant-seeder** voor het snel genereren van maatrasters.

::: warning
Super attributes zijn **vergrendeld nadat varianten zijn aangemaakt**. Plan de variant-assen vooraf — ze later wijzigen vereist het verwijderen en opnieuw aanmaken van varianten.
:::

### Stap 3 — Vul de parent-attributen in

Net als bij een Simple Product groepeert de parent-bewerkpagina attributen per **Attribuutgroep** (General, Descriptions, Categories, Associations, …). Welke groepen precies verschijnen, hangt af van de set.

De `default`-family vereist minimaal:

| Veld | Betekenis |
|---|---|
| **SKU** | Parent-SKU — de identifier voor het configurable-record. |
| **Name** | Weergavenaam gedeeld door alle varianten. |
| **URL Key** | URL-veilige slug voor storefront-linking. |

Andere secties om in te vullen op de ouder:

| Sectie | Doel |
|---|---|
| **Short Description** | Variant-onafhankelijke samenvatting. |
| **Description** | Volledige tekst — meestal gedeeld over varianten. |
| **Technical** | Status-toggle — schakelt de hele configurable-set in/uit. |
| **Categories** | Categorietoewijzing voor de configurable (geldt voor alle varianten). |
| **Associations** | Related / Up-sell / Cross-sell-producten (zie hieronder). |

Elke sectie wordt weergegeven als een eigen kaart op de bewerkpagina. De **Description**-kaarten dragen een WYSIWYG-editor. De **Technical**-kaart bevat de groene **Status**-toggle — als u deze uitgeschakeld laat, gaat de hele configurable (parent **en** alle varianten) offline. De **Categories**-kaart opent een tree-picker; alles wat u hier selecteert, geldt voor elke variant.

<ImagePopup src="/assets/2.0/images/configurable-product/editProduct.png" alt="Configurable Product Edit Page" />

### Stap 4 — Voeg varianten toe

Scroll naar de sectie **Variations** en klik op **Add Product** om een child-variant aan te maken. Een modal opent met één invoer per super attribute plus een **SKU**-veld voor de variant zelf.

Voor elke variant:

1. Voer de waarden in voor de super attributes (bijv. `Size = M`, `Color = Red`).
2. Voer de variant-SKU in.
3. Overschrijf optioneel variant-specifieke velden (prijs, afbeelding, voorraad).
4. Klik op **Add** om de variant op te slaan. Deze verschijnt in een tabel onder de Variations-sectie naast eventuele siblings die u al hebt aangemaakt.

<ImagePopup src="/assets/2.0/images/configurable-product/addVariant.png" alt="Add Variant-formulier" />

U kunt zoveel varianten toevoegen als het product nodig heeft. Een T-shirt met Size × Color = 3 × 4 heeft 12 varianten nodig; de op grootte gebaseerde seeder kan dit versnellen.

### Stap 5 — Voeg associaties toe

Onderaan de parent-bewerkpagina koppelt u dit configurable aan andere producten:

| Associatie | Wanneer te gebruiken |
|---|---|
| **Related Products** | Vergelijkbare alternatieven die klanten ook leuk kunnen vinden. |
| **Up-Sell Products** | Hoger gepositioneerde versies — een premium jasje, een snellere laptop. |
| **Cross-Sell Products** | Aanvullende items — sokken bij schoenen, kabels bij elektronica. |

Voor elke sectie klikt u op **Add**, zoekt u op SKU, selecteert u en bevestigt u. Alle drie de associatiekaarten accepteren zoveel producten als u nodig heeft.

### Stap 6 — Opslaan

Klik op **Save Product** rechtsboven op de bewerkpagina. U wordt teruggeleid naar de **Products Data Grid**, waar de configurable verschijnt met *Configurable* in de kolom **Type**. De varianten worden niet als aparte rijen getoond — ze zijn alleen toegankelijk via de sectie **Variations** van de parent.

<ImagePopup src="/assets/2.0/images/configurable-product/datagrid.png" alt="Configurable Product in Datagrid" />

::: tip
Attributen met een **channel-badge** houden waarden per channel; met een **locale-badge**, per locale; met beide, per channel **en** per locale. Dit geldt voor de parent en voor varianten.
:::

## Werken met een Configurable Product na aanmaak

Configurable products ondersteunen dezelfde levenscyclusfuncties als Simple Products — completeness, vertaling, bulk edit, history, export, copy. Een paar gedragingen zijn specifiek voor configurables:

### Volledigheid

De volledigheidsengine evalueert **zowel de parent als zijn varianten**. De geaggregeerde score houdt rekening met ontbrekende verplichte attributen op beide niveaus, dus zelfs een goed gevulde parent met een lege variant kan de score omlaag halen.

- Volledigheid wordt berekend per channel **en** per locale.
- De **Completeness**-widget van het Dashboard telt alle producten op, inclusief configurables.
- Varianten met lage volledigheid worden gemarkeerd voor aandacht naast de parent.

::: tip
Vul eerst de parent-attributen in (beschrijving, afbeeldingen, categorieën). Loop dan door de varianten om de variant-specifieke waarden in te stellen (SKU, prijs, per-variant-afbeelding). Top-down werken is sneller dan tussen varianten springen.
:::

### Vertaling

Locale-specifieke velden op de parent en op elke variant kunnen handmatig worden vertaald (locale switcher bovenaan de bewerkpagina) of automatisch via de **[Magic AI — Instellingen](../magic-ai/settings.md)** Translation. Dezelfde workflow geldt voor beide producttypen — zie [Simple Product → Vertaal waarden over locales](./simple.md#translate-values-across-locales).

### Bulk edit

Gebruik **Bulk Edit** op de Products-lijst om attributen over veel configurable products tegelijk bij te werken. Selecteer de rijen, kies het attribuut, voer de waarde in, pas toe. Zie [Simple Product → Bulk edit](./simple.md#bulk-edit).

### Geschiedenis

Klik op het tabblad **History** op de parent-bewerkpagina voor een audit trail van elke wijziging — attribuutbewerkingen, status-omschakelingen, categoriewijzigingen, associatie-wijzigingen. Elke vermelding toont de datum, de gebruiker en de specifieke velden die zijn gewijzigd met voor- en na-waarden. Elke variant heeft zijn eigen geschiedenis toegankelijk via zijn individuele bewerkweergave.

### Quick Export

Selecteer de configurable(s) in **Catalogus → Producten** en gebruik **Quick Export** (rechtsboven, naast Create Product) om te downloaden in CSV, XLS of XLSX. De export bundelt het parent-record met zijn varianten in één bestand, dus het importeren van het resultaat recreëert de volledige configurable-structuur. Voor geplande of gefilterde exports, gebruik de volledige **[Export](../data-transfer/export.md)**-workflow.

## Gerelateerde lectuur

- **[Simple Product](./simple.md)** — voor standalone SKU's zonder varianten.
- **[Attribuutset](../attribute/attribute-family.md)** — bepaalt welke attributen (inclusief kandidaat super attributes) een configurable kan gebruiken.
- **[Product Attribute](../attribute/product-attribute.md)** — hoe een attribuut te markeren als bruikbaar voor varianten.
- **[Magic AI — Instellingen](../magic-ai/settings.md)** — automatisch vertaalde variant-content over locales.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — v2.0-beta.1 introduceerde AI Agent-ondersteuning voor het aanmaken en beheren van configurable products via chat.
