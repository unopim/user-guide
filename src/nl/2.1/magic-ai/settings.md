# Magic AI — Instellingen

> **Zijbalk:** Magic AI → **Instellingen**
> **URL:** `/admin/configuration/general/magic_ai`

De **Instellingen**-pagina is waar u elke AI-capability in UnoPim routeert naar een specifiek **Platform** en **Model**. Dit is ook de plek van de **Agentic PIM**-besturingen — het token-budget, de goedkeuringsmodus, de auto-enrichment-schakelaar en de Catalog Quality Monitor.

## Wat doet deze pagina?

Deze pagina bevat vier onafhankelijke secties, één per capability:

1. **Agentic PIM** — configureert de AI Agent Chat (Open Agenting PIM) en zijn veiligheidsmaatregelen.
2. **Text Generation** — drijft de toverstaf-iconen op product-/categorie-tekstvelden aan.
3. **Image Generation** — drijft de toverstaf-iconen op image- en gallery-attributen aan.
4. **Translation** — configureert auto-vertaling bij productopslag, plus het bulk-vertaalcommando.

Omdat elke sectie zijn eigen Platform- en Model-dropdown heeft, kunt u **verschillende providers gebruiken voor verschillende capabilities** — bijvoorbeeld OpenAI voor contentgeneratie en Gemini voor vertaling.

<ImagePopup src="/assets/2.1/images/magic-ai/magic-ai-settings.png" alt="Magic AI-instellingen" />

## 1. Agentic PIM

Regelt de conversationele AI Agent en de achtergrondworkflows die deze aandrijft (auto-enrichment bij productaanmaak, Catalog Quality Monitor, goedkeuringswachtrij).

| Veld | Wat het doet |
|-------|---|
| **Enable AI Agent Chat** | Hoofdschakelaar voor de knop "Open Agenting PIM". Wanneer uit, is de chatknop verborgen en kan niemand met de agent converseren. |
| **Max Agent Steps Per Turn** | Hoeveel tool-aanroepen de agent mag aaneenschakelen voor één gebruikersbericht. De dropdown biedt gelabelde presets in plaats van ruwe getallen — bijv. **`3 (Fast)`** voor strakke, goedkope antwoorden, en hogere presets voor meer autonomie. Hoger = meer autonomie per beurt; lager = strakker beheer en goedkopere tokens. |
| **Daily Token Budget** | Globale dagelijkse limiet op AI Agent-tokenuitgaven (bijv. `500000`). Wanneer de limiet is bereikt, antwoordt de agent met een budget-uitgeput-melding tot middernacht. |
| **Auto-Enrichment on Product Create** | Indien ingeschakeld, wordt elk nieuw product in de wachtrij gezet voor AI-verrijking — ontbrekende beschrijvingen, SEO-velden, enz. worden automatisch ingevuld. |
| **Catalog Quality Monitor** | Voert een geplande AI-scan uit die rapporteert over ontbrekende, dunne of inconsistente catalogusgegevens. |
| **Confidence Threshold** | Minimum confidence (standaard 0.7 — "Balanced") vereist voordat een voorgestelde wijziging wordt toegepast. Onder de drempel wordt de wijziging vastgehouden voor beoordeling. |
| **Change Approval Mode** | Hoe door AI voorgestelde wijzigingen belanden: *Auto-apply*, *Confirm & apply* (standaard) of *Manual review* (alles routeert naar de Goedkeuringswachtrij). |

::: tip
Begin met **Manual review** terwijl u leert hoe de agent zich gedraagt op uw catalogus. Verplaats vertrouwde workflows naar Auto-apply zodra het analytics-dashboard consistente, high-confidence-output toont.
:::

## 2. Text Generation

Regelt de toverstaf-iconen naast product- en categorie-tekstvelden (Name, Short Description, Description, Meta Title, Meta Description, URL Key, enz.).

| Veld | Wat het doet |
|-------|---|
| **Enabled** | Schakel tekstgeneratie in of uit in de hele admin. |
| **Default Platform** | Welk Platform tekstverzoeken bedient. Kies **`-- Use Default Platform --`** om de gemarkeerde standaard te volgen, of overschrijf met een specifiek platform. Platforms gemarkeerd met `*` in de dropdown zijn de huidige standaard. |
| **Default Model** | Het model dat wordt gebruikt voor tekst, geselecteerd uit de modellen die zijn ingeschakeld op het gekozen Platform. |

## 3. Image Generation

Regelt de toverstaf-iconen op Image- en Gallery-attributen. Alleen Platforms waarvan de provider beeldgeneratie ondersteunt (OpenAI / DALL-E, Gemini, xAI) verschijnen hier.

| Veld | Wat het doet |
|-------|---|
| **Enabled** | Schakel beeldgeneratie in of uit. |
| **Default Platform** | Een image-capable Platform. Kies **`-- Use Default Platform --`** om de gemarkeerde standaard te volgen; `*` in de dropdown markeert de huidige standaard. |
| **Default Model** | Het specifieke beeldmodel (bijv. `dall-e-3`). |

## 4. Translation

Regelt auto-vertaling bij productopslag en het AI-gestuurde bulkvertaalcommando. Omdat vertaling vaak high-volume is, kunt u er een ander (vaak goedkoper/sneller) Platform aan toewijzen.

| Veld | Wat het doet |
|-------|---|
| **Enabled** | Schakel AI-gestuurde vertaling in of uit. |
| **Default Platform** | Het Platform dat wordt gebruikt voor vertaalverzoeken. Kies **`-- Use Default Platform --`** om de gemarkeerde standaard te volgen; `*` in de dropdown markeert de huidige standaard. |
| **Translation Model** | Het specifieke model dat wordt gebruikt voor vertaling — onafhankelijk van het tekstgeneratiemodel. |
| **Replace Existing Value** | Aan: hervertaling overschrijft bestaande locale-waarden. Uit: alleen lege locale-velden worden ingevuld, handmatige vertalingen blijven behouden. |
| **Source Channel** | Het channel waarvan de waarden dienen als bron-van-waarheid. |
| **Target Channel** | Het channel dat de vertaalde waarden ontvangt. |
| **Source Locale** | De locale om vanuit te vertalen (bijv. `en_US`). |
| **Target Locales** | Multi-select — elke locale om automatisch te vullen. |

::: tip
U kunt een andere (mogelijk goedkopere of snellere) AI-provider specifiek toewijzen voor vertalingen, terwijl u uw premium-provider behoudt voor contentgeneratie.
:::

Klik op **Configuratie opslaan** onderaan de pagina om alle wijzigingen toe te passen. Instellingen gaan onmiddellijk van kracht — geen herstart vereist.

## Waar de waarden vandaan komen

De Platform / Model-dropdowns op deze pagina worden volledig gevuld vanaf de **[Platforms](./platforms.md)**-pagina. Als een Platform niet wordt vermeld, is het ofwel (a) uitgeschakeld, (b) de provider ondersteunt de capability niet (bijv. Ollama verschijnt niet in Image Generation), of (c) u hebt het nog niet geregistreerd.

Evenzo worden de Source / Target Channel- en Locale-dropdowns van de **Translation**-sectie gevuld vanaf uw channel- en locale-configuratie (zie **Instellingen → Kanalen** en **Instellingen → Locales**).
