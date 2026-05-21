# Magic AI — Prompts

> **Zijbalk:** Magic AI → **Prompts**
> **URL:** `/admin/magic-ai/prompts`

De **Prompts**-pagina is waar u de **instructiesjablonen** beheert die Magic AI bij elk verzoek naar het model stuurt. Een goed geschreven prompt is wat het verschil maakt tussen generieke AI-vulling en content die past bij uw merk en catalogus.

## Wat is een Prompt?

Een *Prompt* is een instructie die de AI vertelt *wat* te produceren voor een specifiek veld. Het is een kort stukje tekst met optionele **placeholders** — tokens zoals `@name`, `@color`, `@material` — die Magic AI op het moment van genereren vervangt door echte waarden uit de entiteit.

Voorbeeld-prompt:

> `Write a detailed product description for @name highlighting its features, benefits, and @color variant.`

Wanneer deze prompt wordt uitgevoerd tegen een product genaamd *Air Max 90* met `color = Blue`, wordt het:

> `Write a detailed product description for Air Max 90 highlighting its features, benefits, and Blue variant.`

Elke prompt is gekoppeld aan twee assen:

- **Entity Type** — welk type record het van toepassing is: `product` of `category`.
- **Purpose** — wat het produceert: `Text Generation` of `Image Generation`.

Magic AI kiest automatisch de overeenkomstige prompt wanneer u op een toverstaf-icoon klikt, auto-enrichment uitvoert of de AI Agent vraagt om content te genereren.

## Wat doet deze pagina?

- Toont elke prompt-sjabloon die beschikbaar is in het systeem.
- Laat u prompts **aanmaken**, **bewerken** en **verwijderen**.
- Toont welke entiteit en welk doel elke prompt bedient, zodat u in één oogopslag de dekking kunt zien.

<ImagePopup src="/assets/2.0/images/magic-ai/prompts.png" alt="Prompts" />

## Hoe prompts worden gebruikt op het moment van genereren

```
User clicks wand icon on a field
           │
           ▼
Magic AI picks the prompt that matches
   entity type (product/category) + purpose (text/image)
           │
           ▼
`@attribute_code` placeholders are replaced
   with the entity's real attribute values
           │
           ▼
Active System Prompt (tone + temperature) is prepended
           │
           ▼
Request sent to the Platform + Model
   configured on Magic AI → Settings
           │
           ▼
Generated content appears in the field
```

## Prompts-datagrid

| Kolom | Beschrijving |
|--------|-------------|
| **Title** | De naam van de prompt. |
| **Prompt** | De prompttekst met placeholders. |
| **Entity Type** | De entiteit waarop de prompt van toepassing is (`product` of `category`). |
| **Purpose** | Of de prompt voor `Text Generation` of `Image Generation` is. |
| **Created At** | Datum waarop de prompt is aangemaakt. |
| **Updated At** | Datum waarop de prompt voor het laatst is gewijzigd. |
| **Actions** | Bewerken (potloodicoon), Verwijderen (prullenbakicoon). |

## Een Prompt aanmaken

Klik op de knop **Create Prompt**. Vul in:

- **Title** — Hoe het in de lijst verschijnt. Gebruik iets herkenbaars zoals *"Product Description — Long Form"*.
- **Prompt** — De instructietekst. Gebruik `@attribute_code`-placeholders voor elke waarde die u uit de entiteit wilt halen. U kunt verwijzen naar elke attribuutcode die is gedefinieerd in de attribuutfamilie van de entiteit.
- **Entity Type** — `product` of `category`.
- **Purpose** — `Text Generation` of `Image Generation`.

### Placeholder-regels

- Placeholders worden voorafgegaan door `@` en gebruiken de **attribuutcode**, niet het label. Bijvoorbeeld, een "Product Color"-attribuut met code `color` wordt verwezen als `@color`.
- Als het attribuut geen waarde heeft op de entiteit, wordt de placeholder vervangen door een lege string — schrijf prompts dus defensief (bijv. `highlighting its @color variant if specified`).
- U kunt meerdere placeholders in één prompt aaneenschakelen; Magic AI vouwt ze allemaal in één keer uit.

## Voorbeeld-prompts

Hier zijn voorbeelden van prompts die worden meegeleverd met UnoPim:

| Titel | Prompt | Entiteitstype | Doel |
|-------|--------|-------------|---------|
| AI Product Description | Write a detailed product description for @name highlighting its features, benefits and @color variant. | product | Text Generation |
| AI Product Image | Generate a professional product photo of @name on a clean white background with studio lighting. | product | Image Generation |
| AI Category Description | Write a compelling category description for @name that helps customers browse products. | category | Text Generation |

::: tip
Gebruik attribuutcodes als placeholders (voorafgegaan door `@`) in uw prompts. Magic AI vervangt ze door werkelijke waarden uit het product of de categorie die wordt verwerkt.
:::

## Prompts vs. Systeemprompts — wat is het verschil?

- Een **Prompt** zegt *wat* er moet worden geschreven voor een specifiek veld ("schrijf een productbeschrijving die `@name` en `@color` vermeldt").
- Een **Systeemprompt** zegt *hoe* er moet worden geschreven — stem, toon, creativiteit, lengte. Het is globaal van toepassing, vóór elke prompt.

Zie de pagina **[Systeemprompts](./system-prompts.md)** voor de persoonlijkheidslaag die onder elke prompt zit.
