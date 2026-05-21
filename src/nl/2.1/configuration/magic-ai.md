# Magic AI-configuratie

**Magic AI** is de ingebouwde laag van UnoPim voor het genereren, verrijken en vertalen van product- en categoriecontent met Large Language Models (LLM's). Voordat u een AI-functie kunt gebruiken — de Magic AI-toverstaf-iconen op productvelden, de AI Agent Chat, automatische vertaling of auto-enrichment — moet u eerst Magic AI configureren vanuit de admin-zijbalk.

<ImagePopup src="/assets/2.1/images/configuration/AiConfiguration.png" alt="Magic AI-configuratieoverzicht" />

## Wat doet Magic AI?

Magic AI verbindt uw UnoPim-installatie met een of meer externe AI-providers (OpenAI, Anthropic, Gemini, Ollama, Groq, enz.) en stelt die kracht op vier manieren beschikbaar binnen het PIM:

| Capability | Waar het in de UI verschijnt | Wat het doet |
|---|---|---|
| **Tekstgeneratie** | Toverstaf-icoon naast product-/categorie-tekstvelden | Schrijft namen, beschrijvingen, SEO-metavelden, categorie-tekst |
| **Beeldgeneratie** | Toverstaf-icoon naast image-/gallery-attributen | Maakt productafbeeldingen op basis van een tekstbeschrijving |
| **Vertaling** | Automatisch bij productopslag, plus een bulkcommando | Vertaalt locale-specifieke waarden over alle geconfigureerde locales |
| **Agentic PIM (AI Agent Chat)** | Knop "Open Agenting PIM", rechtsonder | Conversationele assistent die namens u 30+ PIM-tools aanroept |

Alle vier delen dezelfde providerverbindingen, prompt-bibliotheek en system-persoonlijkheid — dus wanneer u Magic AI-instellingen wijzigt, neemt elke AI-functie in UnoPim de wijziging over.

## Hoe werkt Magic AI?

De pipeline is hetzelfde voor elke AI-functie — van veldgeneratie tot de AI Agent:

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Agentic PIM Pipeline — 5-staps workflow" />

1. **U activeert een verzoek** — klik op een toverstaf-icoon, sla een product op met auto-translate aan, of stuur een chatbericht naar de AI Agent.
2. **UnoPim stelt de invoer samen** — het combineert:
   - De gegevens van de doelentiteit (bijv. naam, attributen, categorie van het product)
   - De bijbehorende **Prompt** uit Magic AI → Prompts (met `@attribute`-placeholders uitgevouwen)
   - De actieve **Systeemprompt**-persoonlijkheid (tone, temperature, max tokens)
3. **UnoPim stuurt het verzoek door** via de unified **LaravelAiAdapter** naar het platform/model dat u hebt geselecteerd in Magic AI → Instellingen.
4. **De provider reageert** met gegenereerde tekst, een afbeelding of een vertaling.
5. **UnoPim past het resultaat toe** — ofwel direct in het veld, in de database (na optionele goedkeuring), of terug gestreamd in de chat.


Alles tussen stap 2 en stap 5 wordt geconfigureerd vanuit de vier subpagina's die hieronder worden beschreven: **Platforms**, **Settings**, **Prompts** en **Systeemprompts**.

::: tip
API-sleutels verschijnen nooit in platte tekst. Alle provider-credentials worden in de database opgeslagen met **encrypted credential storage**, en de sleutel wordt gemaskeerd in de UI nadat u deze hebt opgeslagen.
:::

## Het Magic AI-menu

Vouw **Magic AI** uit in de admin-zijbalk en u ziet vier submenu-items. Elk bezit een specifiek deel van de AI-configuratie — samen geven ze u volledige controle over *welke provider draait, welke modellen het gebruikt, welke instructies het volgt en welke persoonlijkheid het spreekt*.

| Menu-item | URL | Wat u hier configureert | Wanneer te bezoeken |
|---|---|---|---|
| **Platforms** | `/admin/magic-ai/platforms` | Provider-verbindingen — voeg een OpenAI / Anthropic / Gemini / Ollama / Groq-account toe, plak de API-sleutel en kies welke van zijn modellen u wilt inschakelen. | Eerste setup, API-sleutels roteren, een nieuwe provider toevoegen, nieuwe modellen inschakelen. |
| **Settings** | `/admin/configuration/general/magic_ai` | Routing per capability — kies welk Platform + Model de Text Generation, Image Generation, Translation en Agentic PIM afhandelt. Ook de plek voor het dagelijkse token-budget, goedkeuringsmodus en auto-enrichment-schakelaars. | Wanneer u wilt wijzigen welke provider een bepaalde functie uitvoert, veiligheidslimieten wilt afstemmen of functies wilt in-/uitschakelen. |
| **Prompts** | `/admin/magic-ai/prompts` | Prompt-sjablonen — de instructietekst die Magic AI met elk verzoek meestuurt, met `@attribute_code`-placeholders die vervangen worden door echte entiteitswaarden. | Het afstemmen van AI-output op uw merkstem, prompts toevoegen voor nieuwe attributen of categorieën, de standaardprompts aanpassen. |
| **Systeemprompts** | `/admin/magic-ai/system-prompts` | Globale AI-persoonlijkheid — tone, temperature, max tokens. Slechts één is tegelijk actief, zodat uw hele catalogus een consistente stem behoudt. | De algehele tone wijzigen (formeel vs. casual, beknopt vs. beschrijvend), creativiteit afstemmen, antwoordlengte beperken. |

### Hoe de vier menu-items met elkaar verbonden zijn

<ImagePopup src="/assets/2.1/images/magic-ai/magic-ai-config-flow.png" alt="Magic AI-configuratiehiërarchie" />

**Lees van boven naar beneden, u configureert één keer en gebruikt het vervolgens overal.** Een toverstaf-klik op een productbeschrijving, een automatisch vertaald veld of een chatbericht naar de AI Agent volgen allemaal hetzelfde pad door deze vier menu-items.


### Minimum setup-volgorde

Als u Magic AI voor het eerst configureert, bezoek dan de menu-items in deze volgorde:

1. **Platforms** — voeg ten minste één provider toe, plak de API-sleutel, schakel de modellen in die u van plan bent te gebruiken en **markeer er één als standaard met een ster**.
2. **Settings** — schakel de capabilities in die u nodig heeft (Text / Image / Translation / Agentic PIM) en kies een Platform + Model voor elk. Stel ondertussen het Daily Token Budget en Change Approval Mode in.
3. **Prompts** — bekijk de meegeleverde prompts; pas ze aan of voeg uw eigen prompts toe zodat de AI schrijft in de stem die uw catalogus verwacht.
4. **Systeemprompts** — bevestig dat de actieve persoonlijkheid overeenkomt met de tone die u in de hele catalogus wilt. Schakel zo nodig een andere in.

Zodra deze vier pagina's zijn opgeslagen, is elke Magic AI-functie in de admin — toverstaf-iconen, automatische vertaling, auto-enrichment en de AI Agent Chat — klaar voor gebruik.

## Platforms

Navigeer naar **Magic AI → Platforms** om de AI-providerverbindingen te beheren die elke Magic AI-functie gebruikt.

<ImagePopup src="/assets/2.1/images/magic-ai/ai-platforms.png" alt="AI Platforms" />

### Wat een "Platform" is

Een *Platform* is één geconfigureerde providerverbinding: een provider (OpenAI, Anthropic, Gemini, Ollama, Groq, …), een API-sleutel en de lijst van modellen die u van die provider hebt ingeschakeld. U kunt zoveel Platforms configureren als u wilt — bijvoorbeeld één OpenAI-platform voor schrijven, één Gemini-platform voor vertaling en één Ollama-platform voor on-prem workloads — en UnoPim zal elke AI-functie routeren naar het platform dat u toewijst.

### Platforms-datagrid

| Kolom | Beschrijving |
|--------|-------------|
| **Label** | De naam die u aan de platformconfiguratie hebt toegewezen |
| **Provider** | De AI-provider (OpenAI, Anthropic, Gemini, Ollama, Groq, enz.) |
| **Models** | De modellen die zijn ingeschakeld voor dit platform |
| **Default** | Of dit platform de standaard is (Ja/Nee) |
| **Status** | Ingeschakeld of Uitgeschakeld |
| **Created At** | Datum waarop het platform is toegevoegd |
| **Actions** | Ster (instellen als standaard), Bewerken (potloodicoon), Verwijderen (prullenbakicoon) |

### Een Platform toevoegen

Klik rechtsboven op **Add Platform**. Een tweeledige modal getiteld **"Add AI Platform"** wordt geopend.

**Stap 1 — kies de provider.**

Het eerste scherm van de modal heeft slechts één veld:

- **Provider *** — dropdown met alle ondersteunde providers (OpenAI, Anthropic, Gemini, Ollama, Groq, enz.).

Selecteer een provider en klik op **Save**. De modal vouwt uit om de rest van de velden te tonen.

<ImagePopup src="/assets/2.1/images/magic-ai/add-platform.png" alt="Add AI Platform — Stap 1" />

**Stap 2 — vul de provider-specifieke details in.**

- **Label** — Voer een beschrijvende naam in voor deze platformconfiguratie (bijv. *"OpenAI Production"*, *"Gemini Translation"*). Deze naam verschijnt in de downstream-dropdowns op Magic AI → Instellingen.
- **API Key** — Plak de API-sleutel van uw provideraccount. Deze wordt bij opslaan versleuteld en in de UI gemaskeerd weergegeven.
- **Models** — Een multiselect met de modellen die beschikbaar zijn van de geselecteerde provider. Alleen de modellen die u hier aanvinkt, verschijnen in de Settings-dropdowns.
- **Status** — Schakel om het platform in of uit te schakelen.

Klik op **Save** om te voltooien. Het platform verschijnt in de datagrid.

::: tip
API-credentials worden voor de veiligheid opgeslagen met encrypted credential storage. Uw API-sleutels worden nooit in platte tekst opgeslagen.
:::

### Platform-acties

- **Ster-icoon** — Stelt het platform in als de **standaard**. De standaard is wat het systeem gebruikt wanneer een functie is ingesteld op *"Use Default Platform"*. Slechts één platform kan tegelijk de standaard zijn.
- **Potlood-icoon** — Opent de bewerk-modal om het platform-label, de API-sleutel, modellen of status bij te werken.
- **Prullenbak-icoon** — Verwijdert de platformconfiguratie. Deze actie kan niet ongedaan worden gemaakt.

### Hoe platformselectie naar functies stroomt

```
Platforms (provider + key + models)
        │
        ▼
Settings (pick platform + model per feature)
        │
        ├─► Text Generation ──► Wand icons on text fields
        ├─► Image Generation ──► Wand icons on image/gallery fields
        ├─► Translation ──────► Auto-translate on save + bulk command
        └─► Agentic PIM ──────► AI Agent Chat
```

## Settings

Navigeer naar **Magic AI → Instellingen** in de zijbalk. Dit opent de configuratiepagina op `/admin/configuration/general/magic_ai` met vier secties — één per capability. Voor elke capability kiest u **welk Platform** en **welk Model** deze moet afhandelen. Door verschillende Platforms voor verschillende capabilities te gebruiken, kunt u kosten, snelheid en kwaliteit onafhankelijk optimaliseren.

<ImagePopup src="/assets/2.1/images/magic-ai/magic-ai-settings.png" alt="Magic AI Settings" />

### 1. Agentic PIM

Deze sectie regelt de **AI Agent Chat** (de conversationele assistent) en de autonome workflows die het aandrijft: auto-enrichment bij productaanmaak, monitoring van cataloguskwaliteit en de goedkeuringswachtrij die voor door AI voorgestelde wijzigingen staat.

| Veld | Wat het doet |
|-------|---|
| **Enable AI Agent Chat** | Hoofdschakelaar voor de chatknop "Open Agenting PIM". Wanneer uit, is de zwevende knop verborgen en kan niemand met de agent converseren. |
| **Max Agent Steps Per Turn** | Hoeveel tool-aanroepen de agent mag aaneenschakelen voor één gebruikersbericht (standaard: 5). Hoger = meer autonomie per beurt; lager = strakker beheer en goedkopere tokens. |
| **Daily Token Budget** | Harde dagelijkse limiet op tokens uitgegeven door de agent (bijv. 500 000). Wanneer de limiet is bereikt, antwoordt de agent met een budget-uitgeput-melding tot de volgende dag. |
| **Auto-Enrichment on Product Create** | Indien ingeschakeld, wordt elk nieuw aangemaakt product in de wachtrij gezet voor AI-verrijking — ontbrekende beschrijvingen, SEO-velden, enz. worden automatisch ingevuld. |
| **Catalog Quality Monitor** | Voert een geplande AI-scan uit die rapporteert over ontbrekende, dunne of inconsistente gegevens in de catalogus. |
| **Confidence Threshold** | Minimum confidence-score (standaard: 0.7 — "Balanced") die de AI moet behalen voordat een voorgestelde wijziging wordt toegepast. Onder de drempel worden wijzigingen vastgehouden voor beoordeling. |
| **Change Approval Mode** | Hoe door AI voorgestelde wijzigingen in uw gegevens belanden: *Auto-apply*, *Confirm & apply* (standaard — de AI stelt waarden voor, vraagt het u en voert vervolgens uit), of *Manual review* (alles gaat naar de Goedkeuringswachtrij). |

### 2. Text Generation

Deze sectie regelt de toverstaf-iconen naast tekstvelden (productnaam, beschrijvingen, SEO-metavelden, categorie-tekst). Wanneer een gebruiker op een toverstaf-icoon klikt, stuurt UnoPim de prompt van het veld naar het hier geconfigureerde Platform en Model.

| Veld | Wat het doet |
|-------|---|
| **Enabled** | Schakel om tekstgeneratie in de hele admin in of uit te schakelen. |
| **Default Platform** | Kies welk Platform tekstverzoeken bedient. Kies *"Use Default Platform"* om het ster-platform te volgen, of overschrijf met een specifiek platform. |
| **Default Model** | Het model dat wordt gebruikt voor tekstgeneratie, geselecteerd uit de modellen die zijn ingeschakeld op het gekozen Platform. |

### 3. Image Generation

Deze sectie regelt de toverstaf-iconen op Image- en Gallery-attributen. Alleen Platforms waarvan de provider beeldgeneratie ondersteunt (OpenAI / DALL-E, Gemini, xAI) worden vermeld.

| Veld | Wat het doet |
|-------|---|
| **Enabled** | Schakel om beeldgeneratie in of uit te schakelen. |
| **Default Platform** | Het beeld-capabele Platform om te gebruiken. |
| **Default Model** | Het specifieke beeldmodel (bijv. `dall-e-3`). |

### 4. Translation

Vertaling kan automatisch lopen wanneer een product wordt opgeslagen, en kan ook in bulk worden geactiveerd via het vertalingscommando. Omdat vertaling vaak high-volume is, laat Magic AI u een **ander Platform** toewijzen — typisch een goedkoper of sneller platform — alleen voor deze taak.

| Veld | Wat het doet |
|-------|---|
| **Enabled** | Schakel om AI-gestuurde vertaling in of uit te schakelen. |
| **Default Platform** | Het Platform dat wordt gebruikt voor vertaalverzoeken. |
| **Translation Model** | Het specifieke model dat wordt gebruikt voor vertaling — onafhankelijk van het tekstgeneratiemodel. |
| **Replace Existing Value** | Aan: hervertaling overschrijft bestaande locale-waarden. Uit: alleen lege locale-velden worden ingevuld, handmatige vertalingen blijven behouden. |
| **Source Channel** | Het channel waarvan de waarden dienen als bron-van-waarheid. |
| **Target Channel** | Het channel dat de vertaalde waarden ontvangt. |
| **Source Locale** | De locale om vanuit te vertalen (bijv. `en_US`). |
| **Target Locales** | Multi-select; kies elke locale die u automatisch wilt vullen. |

::: tip
U kunt een andere (mogelijk goedkopere of snellere) AI-provider specifiek toewijzen voor vertalingen, terwijl u uw premium-provider behoudt voor contentgeneratie.
:::

Klik op **Save Configuration** onderaan de pagina om alle wijzigingen toe te passen. Instellingen gaan onmiddellijk van kracht — geen herstart vereist.

## Prompts

Navigeer naar **Magic AI → Prompts** om de **prompt-sjablonen** te beheren die de AI vertellen wat te produceren. Een prompt is de instructie die met elk generatieverzoek wordt verzonden; het is waar u uw merkstem, vereiste structuur of catalogus-specifieke regels in bakt.

<ImagePopup src="/assets/2.1/images/magic-ai/prompts.png" alt="Prompts" />

### Hoe prompts werken

Elke prompt is gekoppeld aan een **Entity Type** (product of categorie) en een **Purpose** (Text Generation of Image Generation). Op het moment van genereren doet UnoPim:

1. Kiest de prompt die overeenkomt met de entiteit en het doel.
2. Vervangt elke `@attribute_code`-placeholder door de werkelijke waarde uit de entiteit.
3. Voegt de actieve Systeemprompt-persoonlijkheid bovenop toe.
4. Stuurt de gecombineerde instructies naar het Platform/Model dat voor die capability is geconfigureerd.

Zo wordt een prompt van `Write a product description for @name in the @color variant` op het moment van genereren iets als `Write a product description for Air Max 90 in the Blue variant`.

### Prompts-datagrid

| Kolom | Beschrijving |
|--------|-------------|
| **Title** | De naam van de prompt |
| **Prompt** | De prompttekst met placeholders |
| **Entity Type** | De entiteit waarop de prompt van toepassing is (product of categorie) |
| **Purpose** | Of de prompt voor Text Generation of Image Generation is |
| **Created At** | Datum waarop de prompt is aangemaakt |
| **Updated At** | Datum waarop de prompt voor het laatst is gewijzigd |
| **Actions** | Bewerken (potloodicoon), Verwijderen (prullenbakicoon) |

### Een Prompt aanmaken

Klik op de knop **Create Prompt** om een nieuwe prompt toe te voegen. Vul in:

- **Title** — hoe het in de lijst verschijnt.
- **Prompt** — de instructietekst. Gebruik `@attribute_code`-placeholders voor elke waarde die u uit de entiteit wilt invullen.
- **Entity Type** — product of categorie.
- **Purpose** — Text Generation of Image Generation.

### Meegeleverde prompts

UnoPim wordt geleverd met **18 vooraf ingestelde prompts**. De meeste richten zich op beeldgeneratie (productfotografiestijlen) en een handvol richt zich op tekstgeneratie. Ze richten zich allemaal op `product` als het Entity Type. Voorbeelden die u in de lijst zult zien:

| Title | Purpose |
|---|---|
| Packaging Mockup | Image Generation |
| Hero Banner Image | Image Generation |
| Multi-Angle Product | Image Generation |
| Flat Lay Composition | Image Generation |
| Product with Size Reference | Image Generation |
| Close-Up Detail Shot | Image Generation |
| Lifestyle Product Image | Image Generation |
| White Background Product Shot | Image Generation |
| Product Elevator Pitch | Text Generation |
| Product Brief | Text Generation |

Open **Magic AI → Prompts** om de volledige lijst te zien, een preset te bewerken of nieuwe te maken.

::: tip
Gebruik attribuutcodes als placeholders (voorafgegaan door `@`) in uw prompts. De AI vervangt ze door werkelijke waarden uit het product of de categorie die wordt verwerkt.
:::

## Systeemprompts

Navigeer naar **Magic AI → Systeemprompts** om de **persoonlijkheid** van de AI te configureren — de toon, stijl en generatieparameters die onder elke prompt liggen.

<ImagePopup src="/assets/2.1/images/magic-ai/system-prompts.png" alt="Systeemprompts" />

### Hoe een Systeemprompt verschilt van een Prompt

- Een **Prompt** zegt *wat* er moet worden geschreven voor een specifiek veld ("schrijf een productbeschrijving …").
- Een **Systeemprompt** zegt *hoe* er moet worden geschreven — stem, toon, creativiteit, lengte. Het wordt globaal voor elke prompt toegepast.

Slechts **één Systeemprompt is op enig moment actief**. Het inschakelen van een nieuwe deactiveert automatisch de vorige, zodat de hele catalogus een consistente stem behoudt.

### Systeemprompts-datagrid

| Kolom | Beschrijving |
|--------|-------------|
| **Title** | De naam van de system prompt |
| **Tone** | De conversationele toon (bijv. Confident, Vivid, Brief) |
| **Max Tokens** | Het maximumaantal tokens voor AI-antwoorden |
| **Temperature** | Het creativiteitsniveau (lager = meer gefocust, hoger = creatiever) |
| **Status** | Ingeschakeld of Uitgeschakeld |
| **Created At** | Datum waarop de system prompt is aangemaakt |
| **Updated At** | Datum waarop de system prompt voor het laatst is gewijzigd |
| **Actions** | Bewerken (potloodicoon), Verwijderen (prullenbakicoon) |

### Vooraf ingestelde Systeemprompts

UnoPim wordt geleverd met 10 vooraf ingestelde Systeemprompts. Ze worden allemaal geleverd met **Max Tokens = 1024**; alleen de Temperature verschilt. Slechts één Systeemprompt kan tegelijk worden ingeschakeld.

| Title | Tone | Temperature | Opmerkingen |
|-------|------|-------------|-------|
| Authoritative Guide | Confident, assertive, instructional | 0.65 | |
| Descriptive Storyteller | Vivid, rich, engaging | 0.9 | |
| Concise Responder | Brief, to-the-point | 0.5 | |
| Technical Expert | Precise, analytical | 0.6 | |
| Casual Conversationalist | Informal, relaxed | 0.75 | |
| Motivational Coach | Energetic, encouraging | 0.85 | |
| Empathetic Listener | Warm, understanding | 0.6 | |
| Witty Commentator | Clever, humorous | 0.9 | |
| Professional Advisor | Formal, respectful | 0.65 | |
| Friendly Assistant | Friendly, helpful, casual | 0.7 | Standaard ingeschakeld |

### Een Systeemprompt aanmaken

Klik op de knop **Create Systeemprompt** om een nieuwe AI-persoonlijkheid te definiëren. Configureer:

- **Title** — wordt getoond in de datagrid.
- **Tone description** — beschrijving in begrijpelijke taal van de stem (het model leest dit).
- **Max Tokens** — beperkt de antwoordlengte. Lagere waarden = kortere output en lagere kosten.
- **Temperature** — 0.0–1.0. Lage waarden houden antwoorden strak en herhaalbaar; hoge waarden voegen variatie en flair toe.
- **Status** — het inschakelen van deze deactiveert de momenteel actieve prompt.

::: tip
Slechts één system prompt kan tegelijk actief zijn. Het inschakelen van een nieuwe system prompt deactiveert automatisch de eerder actieve. Kies een system prompt die overeenkomt met de toon die u in alle door AI gegenereerde content wilt.
:::

## Configuratie-checklist

Voordat u Magic AI-functies gaat gebruiken, zorg ervoor dat u alle vier deze stappen heeft gedaan:

1. **Magic AI → Platforms** — Voeg ten minste één platform toe, plak een API-sleutel, schakel de modellen in die u wilt en **markeer er één als standaard met een ster**.
2. **Magic AI → Instellingen** — Schakel de capabilities in die u nodig heeft (Text / Image / Translation / Agentic PIM) en kies een Platform + Model voor elk.
3. **Magic AI → Prompts** — Bekijk de meegeleverde prompts of maak uw eigen om overeen te komen met uw merkstem.
4. **Magic AI → Systeemprompts** — Bevestig dat de actieve persoonlijkheid overeenkomt met de toon die u in de catalogus wilt.

Zodra deze vier pagina's zijn geconfigureerd, werkt elke Magic AI-functie — toverstaf-iconen, de AI Agent Chat, automatische vertaling en auto-enrichment — zonder verdere setup.
