# Magic AI

**Magic AI** is de AI-contentlaag van UnoPim. Het genereert product- en categoriecontent (tekst + afbeeldingen), vertaalt waarden over locales en drijft de Agentic PIM-assistent aan — allemaal met behulp van een van 10+ ondersteunde AI-providers op de achtergrond.

## Wat doet Magic AI?

Zodra u Magic AI hebt geconfigureerd (zie [Magic AI Configuratie](../configuration/magic-ai.md)), verschijnt het op vijf plaatsen in de admin-UI:

| Plek | Wat het produceert | Hoe u het activeert |
|---|---|---|
| **Toverstaf-icoon op tekstvelden** | Namen, beschrijvingen, SEO-metavelden, categorie-tekst | Klik op de toverstaf naast een ondersteund veld |
| **Toverstaf-icoon op image/gallery-velden** | Productafbeeldingen gegenereerd uit een tekstbeschrijving | Klik op de toverstaf naast een image-attribuut |
| **Auto-vertaling bij productopslag** | Vertaalde waarden voor elke doel-locale | Automatisch indien ingeschakeld; ook via een bulk-commando |
| **AI-gestuurd zoeken** | Semantische zoekresultaten gerangschikt op betekenis, niet alleen trefwoorden | Gewoon zoekvak |
| **AI Agent Chat (Agentic PIM)** | Resultaten van 30+ tool-aanroepen | Chatknop rechtsonder |

Alle vijf delen dezelfde providerverbindingen, dezelfde prompt-bibliotheek en dezelfde system-persoonlijkheid — dus u configureert Magic AI één keer en elke functie pakt het op.

## Hoe werkt Magic AI?

Elke Magic AI-actie volgt dezelfde pipeline:

1. **Trigger** — klik op een toverstaf-icoon, sla een product op, voer een vertaalcommando uit of stuur een chatbericht.
2. **Context-assemblage** — UnoPim combineert de huidige gegevens van de doelentiteit, de relevante **Prompt**-sjabloon (met `@attribute`-placeholders uitgevouwen) en de actieve **Systeemprompt**-persoonlijkheid.
3. **Dispatch** — het geassembleerde verzoek gaat via de unified `LaravelAiAdapter` naar het Platform en Model dat u voor die capability heeft geselecteerd onder **Magic AI → Instellingen**.
4. **Antwoord** — de provider retourneert tekst, een afbeelding of een vertaling.
5. **Toepassen** — het resultaat wordt in het veld ingevoegd (tekst/afbeelding), naar locale-kolommen geschreven (vertaling) of in de chat gestreamd (agent).

De unified adapter betekent dat u **providers kunt wisselen zonder uw workflow aan te raken** — wissel het standaard-Platform onder Magic AI → Instellingen en elke functie gebruikt het nieuwe bij het volgende verzoek.

## Contentgeneratie

Met Magic AI kunt u moeiteloos boeiende **product- en categorie**-content genereren — namen, beschrijvingen, SEO-metadata en meer.

<ImagePopup src="/assets/2.1/images/magic-ai/content.png" alt="Magic AI contentgeneratie" />

In plaats van elke beschrijving handmatig te schrijven, stelt Magic AI ze voor u samen uit de gegevens die het product al heeft (naam, categorie, sleutel-attributen), de prompt-sjabloon die u hebt geconfigureerd en de actieve systeem-persoonlijkheid.

### Ondersteunde AI-providers

UnoPim biedt native ondersteuning voor meerdere AI-providers via zijn **Multi-Platform MagicAI**-systeem. U kunt een of meer providers configureren met encrypted credential storage voor veilig API-sleutelbeheer.

**A) Voor Content — UnoPim ondersteunt deze AI-providers:**

* **OpenAI** – gpt-4o, gpt-4o-mini, gpt-3.5-turbo, dall-e-2, dall-e-3
* **Anthropic** – Claude-modelfamilie (Opus, Sonnet, Haiku) voor tekstgeneratie en redeneren
* **Ollama** – llama2, llama3, mistral, qwen, deepseek-coder, phi, llava
* **Gemini** – gemini-2.5-pro, gemini-2.5-flash, gemini-2.0-flash, gemini-1.5-flash-latest, gemini-1.5-pro
* **Groq (xAI)** – deepseek-r1-distill-llama-70b, llama-3.1-8b-instant, openai/gpt-oss-120b, openai/gpt-oss-20b, groq/compound, qwen/qwen3-32b, moonshotai/kimi-k2-instruct-0905

::: tip
Alle providers worden beheerd via een unified **LaravelAiAdapter**-implementatie. U kunt providers wisselen zonder uw workflow te wijzigen.
:::

## Hoe Tekst Content Genereren met AI

Volg deze stappen om tekstcontent voor uw producten te genereren met Magic AI:

1. Navigeer naar **Catalogus → Producten** en klik op **Bewerken** op een product.
2. Zoek een tekstveld dat AI-generatie ondersteunt (Name, Short Description, Description, Meta Title, Meta Description, enz.).
3. Klik op het **Magic AI-icoon** (sparkle/wand-icoon) naast het veld.
4. De AI genereert content op basis van:
   - De geconfigureerde **Prompt** voor dat veldtype (uit **Magic AI → Prompts**).
   - De bestaande gegevens van het product (naam, categorie, attributen) — die worden vervangen waar de prompt `@attribute_code`-placeholders gebruikt.
   - De actieve **Systeemprompt**-persoonlijkheid (toon, temperature, max tokens).
5. De gegenereerde content verschijnt in het veld.
6. Bekijk en bewerk de gegenereerde content indien nodig.
7. Klik op **Save Product** om de wijzigingen te behouden.

U kunt ook content voor categorieën genereren door een categoriebewerk-pagina te openen en het toverstaf-icoon te gebruiken op ondersteunde velden.

::: tip
Configureer uw voorkeurs-AI-provider en -model in **Magic AI → Instellingen → Text Generation** voordat u deze functie gebruikt. Kies een model dat kwaliteit en kosten in balans brengt voor uw behoeften.
:::

## Hoe Afbeeldingen Genereren met AI

Volg deze stappen om productafbeeldingen te genereren met Magic AI:

1. Navigeer naar **Catalogus → Producten** en klik op **Bewerken** op een product.
2. Zoek een **Image**- of **Gallery**-attribuut.
3. Klik op het **Magic AI-icoon** naast het beeldveld.
4. Voer een beschrijving in van de afbeelding die u wilt (of accepteer de standaard Image-prompt uit **Magic AI → Prompts**).
5. De AI genereert een productafbeelding die overeenkomt met de beschrijving.
6. Bekijk de gegenereerde afbeelding.
7. Accepteer deze om ze aan het product te koppelen.
8. Klik op **Save Product**.

::: tip
Beeldgeneratie vereist een Platform waarvan de provider afbeeldingen ondersteunt (OpenAI met DALL-E, Gemini of xAI). Configureer het onder **Magic AI → Instellingen → Image Generation**.
:::

## Custom Prompts

Magic AI ondersteunt **Custom Prompts** voor contentgeneratie. Een prompt is een instructiesjabloon dat het model vertelt *wat* te produceren — bijvoorbeeld, `Write a detailed product description for @name highlighting its features, benefits, and @color variant.` Elke placeholder (`@name`, `@color`, …) wordt vervangen door de echte waarde uit de entiteit op het moment van genereren.

U kunt prompts aanmaken voor specifieke use cases zoals:
- "Genereer een professionele productbeschrijving voor een elektronicawinkel"
- "Schrijf SEO-geoptimaliseerde content met keywords voor mode-producten"
- "Maak een korte samenvatting van 50 woorden die geschikt is voor mobiele weergaven"

Beheer prompts vanuit **Magic AI → Prompts**. Elke prompt behoort tot een **entity type** (product / category) en een **purpose** (text / image).

<!-- TODO: Add screenshot of custom prompts configuration -->

## Systeemprompt Management

**Systeemprompts** configureren de algehele **persoonlijkheid** van de AI — stem, toon en generatieparameters (temperature, max tokens) — en zijn van toepassing op elke Magic AI-functie. Slechts **één** system prompt is op enig moment actief, zodat uw hele catalogus een consistente stem behoudt.

Beheer ze vanuit **Magic AI → Systeemprompts**. Zie de [Systeemprompts-sectie van Magic AI Configuratie](../configuration/magic-ai.md#system-prompts) voor de volledige lijst van 10 vooraf ingestelde persoonlijkheden die worden meegeleverd met UnoPim.

<!-- TODO: Add screenshot of system prompt management -->

## Magic Image

Magic AI bevat een **beeldgeneratie**-functie aangedreven door DALL-E (OpenAI) en andere image-capable providers. U kunt productafbeeldingen direct vanuit een tekstbeschrijving maken:

1. Navigeer naar een productbewerk-pagina.
2. Klik op het **Magic AI**-icoon naast het image / gallery-veld.
3. Voer een beschrijving in van de afbeelding die u wilt genereren.
4. Selecteer het model (bijv. `dall-e-2` of `dall-e-3`).
5. Klik op **Generate**.

<!-- TODO: Add screenshot of Magic Image generation -->

## Auto-Vertaling

Magic AI biedt **automatische vertaling** van productgegevens. Indien ingeschakeld, activeert het opslaan van een product de vertaling van alle locale-specifieke velden (naam, beschrijvingen, metavelden, …) in elke geconfigureerde doel-locale. Uw catalogus blijft meertalig zonder handmatige copy-paste.

### Translation Settings UI

De Translation-sectie bevindt zich op de Magic AI Settings-pagina op **Magic AI → Instellingen**. De velden:

| Veld | Wat het doet |
|---|---|
| **Enabled** | Hoofdschakelaar voor AI-gestuurde vertaling. |
| **Default Platform** | Het AI-platform dat wordt gebruikt voor vertalingen. U kunt een andere provider kiezen dan uw contentgeneratie-platform — nuttig voor het optimaliseren van kosten of snelheid. |
| **Translation Model** | Het specifieke model dat wordt gebruikt voor vertaaltaken. Onafhankelijk van het tekstgeneratiemodel. |
| **Replace Existing Value** | Aan: bestaande locale-waarden overschrijven. Uit: alleen lege locales vullen, handmatige vertalingen behouden. |
| **Source Channel** | Het channel waarvan de waarden de bron-van-waarheid voor vertaling zijn. |
| **Target Channel** | Het channel dat de vertaalde waarden ontvangt. |
| **Source Locale** | De locale om vanuit te vertalen (bijv. `en_US`). |
| **Target Locales** | Multi-select — elke locale om automatisch te vullen. |

::: tip
Gebruik **Replace Existing Value** voorzichtig. Uit behoudt eventuele handmatige vertalingen die u al hebt gemaakt; aan regenereert alles vanaf nul.
:::

### Hoe Auto-Vertaling Werkt

Wanneer auto-vertaling is ingeschakeld en een product wordt aangemaakt of bijgewerkt:

1. UnoPim leest de source-locale-waarden voor elk locale-specifiek veld.
2. Voor elke doel-locale roept het de vertaal-Platform/Model aan met de bronwaarde en doeltaal.
3. Het schrijft de vertaalde waarden in de doel-locale-kolommen, met respect voor de channel/locale-toewijzingen, zodat alleen locales die aan het doel-channel zijn gebonden worden gevuld.

Als **Replace Existing Value** uit staat, slaat de vertaalstap velden over die al een locale-waarde hebben — uw handmatige bewerkingen blijven behouden.

### Handmatige Vertaling via Locale Switcher

U kunt ook handmatig vertalen: open een product, wissel naar een doel-locale in de **locale switcher** bovenaan het bewerkformulier en typ ofwel vertalingen of roep het toverstaf-icoon aan op elk veld. Attributen die per-locale-waarden ondersteunen, tonen een locale-badge (bijv. `EN_US`) zodat u weet welke locale u bewerkt.

### AI-gestuurd Vertaalcommando

Voor bulkvertaling van bestaande gegevens, biedt UnoPim v2.0 een **AI-gestuurd vertaalcommando** dat Magic AI gebruikt om ontbrekende locale-sleutels in alle 32 niet-Engelse locales in te vullen. Het heeft tijdens de v2.0-release zelf ongeveer **18.000 eerder onvertaalde sleutels** in 7 pakketten automatisch vertaald — hetzelfde commando is beschikbaar voor uw catalogus.

::: tip
Voor high-volume vertaalwerklasten, wijs een snellere/goedkopere provider toe aan vertaling en behoud een premium-provider voor contentgeneratie. Magic AI laat u ze per capability splitsen.
:::

## AI-gestuurd Zoeken

UnoPim v2.0 introduceert **AI-gestuurd Zoeken** dat embedding-overeenkomst en semantische ranking gebruikt om intelligentere resultaten te leveren. In plaats van trefwoorden teken voor teken te matchen, begrijpt het de betekenis achter de query.

Onder de motorkap:
- **Embedding Similarity Service** — converteert productgegevens naar vector-embeddings, zodat queries en producten semantisch kunnen worden vergeleken.
- **Semantic Ranking Service** — herordent resultaten naar hoe nauw ze overeenkomen met de intentie van de query, niet alleen met de woorden.

<!-- TODO: Add screenshot of AI-powered search results -->

## Auto-Enrichment

**Auto-Enrichment** vult automatisch ontbrekende productinformatie in — beschrijvingen, meta-titels, meta-beschrijvingen en andere tekstvelden gemarkeerd als onvolledig. Indien ingeschakeld onder **Magic AI → Instellingen → Agentic PIM**, analyseert Magic AI elk product en genereert waarden voor de lege velden.

Dit is bijzonder nuttig voor:
- Bulk-geïmporteerde producten die beschrijvingen missen.
- Producten die SEO-metadata missen.
- Onvolledige records gemarkeerd door het volledigheidssysteem.

<!-- TODO: Add screenshot of auto-enrichment in action -->

Verrijkte waarden kunnen via de [Goedkeuringswachtrij](../ai-agent/approval-queue.md) worden gerouteerd als u ze wilt beoordelen voordat ze live gaan.

## AI in Agentic PIM Chat

De AI Agent Chat hergebruikt de **Generate Content**- en **Generate Image**-capabilities van Magic AI als tools. U kunt om contentgeneratie vragen in begrijpelijke taal zonder de chat te verlaten — en de agent gebruikt dezelfde Platforms, Prompts en Systeemprompt die u hebt geconfigureerd, zodat resultaten overeenkomen met de rest van de catalogus.

Voorbeelden van chat-prompts:

- "Genereer een productbeschrijving voor SKU SHOE-100"
- "Maak een afbeelding voor product Nike Air Max"

Zie de pagina [AI Agent Chat](../ai-agent/ai-agent-chat.md) voor de volledige tool-lijst en interactiepatronen.

## Magic AI vs. de AI Agent — in één oogopslag

| | Magic AI toverstaf-iconen | AI Agent (Agentic PIM) |
|---|---|---|
| **Trigger** | Klik op een toverstaf naast een veld | Chatknop; conversationeel |
| **Scope** | Eén veld op één entiteit tegelijk | Alles in de catalogus |
| **Output** | Tekst / afbeelding voor het veld | Tool-resultaten gestreamd in chat |
| **Multi-step** | Nee — één verzoek, één antwoord | Ja — kan tool-aanroepen plannen en aaneenschakelen |
| **Gebruikt Platforms/Prompts/Systeemprompts?** | Ja | Ja |
| **Heeft een eigen veiligheidslaag?** | Veldniveau-voorbeeld vóór opslag | Goedkeuringswachtrij, Confidence Threshold, Token Budget, Max Steps |

Het zijn twee interfaces over dezelfde **Magic AI-kern** — configureer Magic AI eenmaal onder **Magic AI → Platforms / Settings / Prompts / Systeemprompts**, en beide sets functies lichten op.
