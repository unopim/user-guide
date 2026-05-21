# AI Agent (Agentic PIM)

De **AI Agent** — ook wel **Agentic PIM** genoemd — is een conversationele assistent die direct in UnoPim is ingebouwd. In plaats van door menu's en formulieren te klikken, vertelt u de agent in begrijpelijke taal wat u wilt ("maak een T-shirt SKU aan met deze attributen", "vind elk product dat een beschrijving mist", "spiegel de up-sells van SKU A naar SKU B"), en hij voert de taak voor u uit door echte PIM-bewerkingen op de achtergrond aan te roepen.

## Wat is de AI Agent?

De AI Agent is **anders dan de toverstaf-iconen van Magic AI**. Hier is het onderscheid:

| | Magic AI (toverstaf-iconen) | AI Agent (Agentic PIM) |
|---|---|---|
| **Waar u het triggert** | Klik op de toverstaf op een specifiek veld | Chatknop rechtsonder op elke pagina |
| **Interactie** | Eenmalig: klik, genereer, accepteer | Conversatie: multi-turn, met geheugen |
| **Scope** | Eén veld op één entiteit | Alles in de catalogus — producten, categorieën, attributen, gebruikers, rollen, kanalen |
| **Hoe het handelt** | Produceert content voor het veld | Roept echte PIM-tools aan (create, update, search, import, export, delete, bulk-edit, …) |
| **Output** | Tekst of een afbeelding | Resultaten van tool-aanroepen, terug gestreamd in de chat |

Kort gezegd: **Magic AI schrijft content. De AI Agent onderneemt acties.**

## Hoe werkt de AI Agent?

Elk chatbericht stroomt door deze lus:

1. **U verzendt een bericht** in het paneel AI Agent Chat.
2. **De agent interpreteert uw intentie** met behulp van het Platform/Model dat is geconfigureerd onder **Magic AI → Instellingen → Agentic PIM**, plus de actieve Systeemprompt-persoonlijkheid en eventuele feiten die hij over u heeft onthouden.
3. **De agent kiest tools om aan te roepen** uit een bibliotheek van 30+ PIM-tools (zie de pagina [AI Agent Chat](./ai-agent-chat.md) voor de volledige lijst). Voor complexe verzoeken ketent hij meerdere tools samen in een plan.
4. **Elke tool wordt uitgevoerd tegen echte UnoPim-gegevens** — maar **alleen binnen uw ACL-machtigingen**. Een tool waarvoor u geen toestemming heeft, weigert stilzwijgend te worden uitgevoerd.
5. **Destructieve of onzekere wijzigingen gaan naar de Goedkeuringswachtrij** (als uw Change Approval Mode zo is ingesteld) zodat u ze kunt beoordelen voordat ze worden toegepast.
6. **Het antwoord stroomt terug in de chat** in realtime via Server-Sent Events (SSE), zodat u voortgang ziet terwijl de agent denkt en handelt.

Omdat de agent echte tools en echte gegevens heeft, is hij krachtiger dan een gewone LLM-chat — maar ook ingrijpender. De Goedkeuringswachtrij, het token-budget, de confidence threshold en de ACL-controles bestaan om die kracht onder uw controle te houden.

## Belangrijkste Mogelijkheden

### Productbeheer
Maak, update, zoek, kopieer, verwijder en bulk-bewerk producten zonder de chat te verlaten. De agent handelt zowel single-product-tweaks als catalogus-brede sweeps even goed af.

### Datakwaliteit & Volledigheid
Vraag de agent om de catalogus te scannen op gaten — ontbrekende beschrijvingen, dunne SEO-velden, producten onder een volledigheidsdrempel — en hij produceert een gestructureerd rapport plus voorgestelde oplossingen.

### Auto-Enrichment
Vertel de agent om ontbrekende beschrijvingen, meta-titels of een ander tekstveld in te vullen, en hij genereert content die past bij uw merkstem (via de actieve Systeemprompt) en uw prompt-sjablonen.

### Bulkoperaties
Bulk-update attributen, herwijs categorieën toe, schakel status om of pas transformaties toe (append/prepend/replace) over veel SKU's tegelijk — allemaal vanuit één conversationele instructie.

### Taakplanning
Voor multi-step werk ("ruim de Summer-collectie op: update prijzen, voeg een promotionele beschrijving toe en wijs de Sale-categorie toe"), bouwt de agent een plan, toont u de stappen en voert ze in volgorde uit.

### Associatiebeheer *(Nieuw in v2.0.x)*
Voeg gerelateerde producten, up-sells en cross-sells toe, verwijder, toon of spiegel ze via conversatie — geen noodzaak om elke productbewerk-pagina te openen.

### Cataloguinzichten
Vraag om tellingen, statistieken, recente activiteit of de staat van kanalen, gebruikers en rollen. De agent retourneert gestructureerde samenvattingen zonder dat u naar elke pagina hoeft te navigeren.

## Realtime Streaming (SSE)

De AI Agent streamt output via **Server-Sent Events**. Terwijl de agent beslist wat te doen en elke tool aanroept, ziet u het redeneren en de resultaten progressief in de chat verschijnen — u hoeft niet te wachten tot het hele antwoord klaar is. Dit maakt lange operaties responsief.

## Conversatiebehoud

Chatsessies worden **opgeslagen in de database**. Dat betekent:

- De pagina vernieuwen wist de conversatie niet.
- De browser sluiten en opnieuw openen bewaart deze.
- Binnen een enkele sessie herinnert de agent zich wat u al heeft besproken, zodat u kunt terugverwijzen ("pas diezelfde wijziging ook toe op SKU B").
- Tussen sessies door dragen feiten die u expliciet aan de agent vraagt te **onthouden** (via de interne `RememberFact`-tool) over.

Zie het tabblad **Sessions** in het chatpaneel om eerdere conversaties te hervatten, hernoemen of verwijderen.

## ACL-autorisatie

Elk van de 30+ tools respecteert uw **ACL-machtigingen**. Als uw admin-rol geen producten kan verwijderen, kan de agent namens u geen producten verwijderen — de bijbehorende tool wordt eenvoudigweg niet uitgevoerd. Dit betekent dat het verlenen van AI Agent-toegang niet uitbreidt wat een gebruiker kan doen; het verandert alleen *hoe* ze het doen.

## Rate Limiting

Om het systeem stabiel en de kosten voorspelbaar te houden, dwingt de AI Agent **30 verzoeken per minuut per gebruiker** af. Als u de limiet overschrijdt, antwoordt de agent met een retry-melding en deblokkeert automatisch nadat het venster is verstreken.

## Veiligheidsmaatregelen

Drie besturingen houden de autonomie van de agent in toom — alle geconfigureerd vanuit **Magic AI → Instellingen → Agentic PIM**:

- **Daily Token Budget** — beperkt hoeveel de agent kan uitgeven in een venster van 24 uur.
- **Max Agent Steps Per Turn** — beperkt hoeveel tools het kan aaneenschakelen voor één gebruikersbericht.
- **Change Approval Mode** — routeert risicovolle of onzekere wijzigingen via de [Goedkeuringswachtrij](./approval-queue.md) voordat ze uw gegevens bereiken.

En nog een signaal dat het waard is te kennen: de **Confidence Threshold**. Als de interne confidence-score van de agent voor een voorgestelde wijziging onder de drempel valt, wordt de wijziging vastgehouden voor handmatige goedkeuring, ongeacht de goedkeuringsmodus.

::: tip
De AI Agent is het meest effectief wanneer u duidelijke, specifieke instructies geeft. In plaats van "los mijn producten op", probeer "update alle producten in de Electronics-categorie die een meta-beschrijving missen". Specifieke intentie → specifieke tool-aanroepen → snellere, goedkopere, nauwkeurigere resultaten.
:::

## Waar nu naartoe

- **[AI Agent Chat](./ai-agent-chat.md)** — Hoe chatsessies te openen, ermee te interageren en te beheren; volledige lijst van 30+ tools.
- **[Goedkeuringswachtrij](./approval-queue.md)** — Hoe door AI voorgestelde wijzigingen worden beoordeeld, goedgekeurd of afgewezen.
- **[Analytics](./analytics.md)** — Tokengebruik-, kosten- en activiteitendashboards voor de agent.
- **[Magic AI Configuratie](../configuration/magic-ai.md)** — Platforms, Instellingen, Prompts en Systeemprompts die de agent aandrijven.
