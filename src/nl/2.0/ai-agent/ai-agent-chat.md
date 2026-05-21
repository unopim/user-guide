# AI Agent Chat

De **AI Agent Chat** is de conversationele UI voor Agentic PIM. Vanuit één chatvenster kunt u producten, categorieën, attributen, datakwaliteit en bulkoperaties beheren — gewoon door te beschrijven wat u nodig heeft.

## Wat doet de AI Agent Chat?

Het chatpaneel is één toegangspunt voor **30+ PIM-tools**. Wanneer u een bericht typt, doet de agent het volgende:

- Interpreteert uw intentie.
- Kiest een of meer tools om aan te roepen (product aanmaken, zoeken, bulk-bewerken, content genereren, associaties beheren, enz.).
- Voert de tools uit op echte UnoPim-gegevens, binnen uw ACL-machtigingen.
- Streamt de resultaten in realtime terug in de chat.

Alles wat u kunt doen vanuit de admin-UI, kunt u doen door erom te vragen in de chat — en de agent kan meerdere stappen aan elkaar koppelen tot één verzoek, zodat taken die anders veel klikken zouden vergen, samenvallen tot één instructie.

## Hoe werkt het?

```
You type a message
        │
        ▼
Agent reads: message + session history + remembered facts + active System Prompt
        │
        ▼
Agent picks a tool (or plans a chain of tools)
        │
        ▼
Each tool runs against UnoPim data (gated by your ACL permissions)
        │
        ▼
Risky / low-confidence changes → Approval Queue
Safe changes → applied immediately
        │
        ▼
Response streams back into chat over SSE
```

Het Platform en Model dat voor deze redeneerlus wordt gebruikt, worden geconfigureerd onder **Magic AI → Instellingen → Agentic PIM**. De persoonlijkheid (toon, temperatuur, max. tokens) komt uit de actieve **Systeemprompt**.

## De AI Agent Chat openen

Klik op het zwevende **ster-icoon** rechtsonder op elke admin-pagina. Het chatpaneel schuift in vanaf de rechterrand met de kop **"Agenting PIM — AI-powered operations"**.

 <ImagePopup src="/assets/2.0/images/ai-agent/ai-agent-chat.png" alt="AI Agent Chat" />

Een instellingen-tandwiel ⚙ in de paneelheader gaat naar `/admin/ai-agent/settings` (dat oplost naar **Magic AI → Instellingen**), waar u platforms, modellen en budgetten kunt configureren.

Het paneel heeft drie tabbladen:
- **Capabilities** — Blader door de 30+ tools die de agent kan aanroepen.
- **Chat** — Conversationele interface. Wanneer leeg, toont het *"How can I help with your catalog?"* onder een ster-icoon en de kop **General Chat**.
- **Sessions** — Uw eerdere conversaties. Een numerieke badge op het tabblad toont hoeveel sessies ongelezen zijn.

 <ImagePopup src="/assets/2.0/images/ai-agent/ai-agent-chat-tab.png" alt="AI Agent Chat tabblad" />

Na het openen schuift het chatpaneel in vanaf de rechterkant van het scherm. U kunt direct beginnen met het typen van uw verzoek.

## Capabilities-tabblad

Het Capabilities-tabblad somt elke tool op die de agent kan aanroepen. Elke tool vertegenwoordigt een specifieke PIM-bewerking die u kunt triggeren via natuurlijke taal — u roept tools niet bij naam aan, u beschrijft wat u wilt en de agent kiest de juiste.

| # | Tool | Wat het doet |
|---|------|-------------|
| 1 | **Create from Image** | Upload foto's om automatisch producten aan te maken |
| 2 | **Update Products** | Update attributen/status per SKU |
| 3 | **Search Products** | Vind producten op SKU, naam of status |
| 4 | **Find Similar** | Vind vergelijkbare producten met AI |
| 5 | **Generate Content** | AI-gegenereerde naam, beschrijving & SEO |
| 6 | **Generate Image** | Maak productafbeeldingen vanuit tekst |
| 7 | **Edit Product Image** | Achtergrondverwijdering, verbeteren & retoucheren |
| 8 | **Assign Categories** | Wijs categoriepaden toe aan producten |
| 9 | **List Attributes** | Bekijk familie-attributen & opties |
| 10 | **Export Products** | Genereer CSV/XLSX-export |
| 11 | **Bulk Import CSV** | Upload CSV/XLSX voor batch-update |
| 12 | **Delete Products** | Verwijder producten via SKU-lijst |
| 13 | **Create Category** | Voeg nieuwe categorieën toe aan de catalogus |
| 14 | **Category Tree** | Bekijk volledige categoriehiërarchie |
| 15 | **Create Attribute** | Voeg nieuwe productattributen toe |
| 16 | **Manage Options** | Voeg attribuutopties toe of toon ze |
| 17 | **Attribute Families** | Toon, maak of inspecteer families |
| 18 | **Bulkbewerking** | Massa-update van producten op basis van regels |
| 19 | **Catalog Summary** | Statistieken, tellingen & recente activiteit |
| 20 | **Channels** | Bekijk kanalen, locales & valuta's |
| 21 | **Users** | Bekijk admin-gebruikers & details |
| 22 | **Roles** | Bekijk rollen & machtigingen |
| 23 | **Ask Anything** | Vrije-vorm PIM-assistent |
| 24 | **Manage Associations** | Voeg gerelateerde/up-sell/cross-sell-producten toe, verwijder of toon ze via natuurlijke taal *(v2.0.x)* |

::: tip
Elke tool respecteert uw ACL-machtigingen. Als uw admin-rol een bepaalde bewerking niet toestaat, wordt de bijbehorende tool stilzwijgend niet uitgevoerd — de agent kan uw rol nooit omzeilen.
:::

## Indeling chatinterface

De chatinterface bestaat uit de volgende gebieden:

- **Berichtgebied** — Toont de conversatiegeschiedenis tussen u en de AI Agent, inclusief antwoorden, tool-uitvoer en statusupdates.
- **Invoerveld** — Een tekstinvoer onderaan waar u uw commando's of vragen typt. Sneltoetsen: **Enter** om te verzenden, **Shift+Enter** voor een nieuwe regel.
- **Bijlage-icoon (paperclip)** — Voeg een bestand toe (afbeelding, CSV) aan het bericht.
- **Platform-dropdown** — Kies welk geconfigureerd AI Platform dit specifieke bericht afhandelt (zie hieronder).
- **Model-dropdown** — Kies welk model op dat platform dit specifieke bericht afhandelt.
- **Verzendknop** — Verstuurt uw bericht naar de AI Agent voor verwerking.

### Een Platform of Model kiezen voor een enkel bericht

De chatinvoerbalk laat u de standaard-platform en -model **per bericht** overschrijven, zonder de globale standaarden onder **Magic AI → Instellingen** te wijzigen.

| Dropdown | Wat het toont | Bron |
|---|---|---|
| **Platform** | Elk ingeschakeld platform (bijv. *OpenAI (Openai)*). | **Magic AI → Platforms** |
| **Model** | Modellen ingeschakeld op het geselecteerde platform (bijv. *gpt-5.4*). | Modellen aangevinkt op dat platform |

De override duurt voor één bericht; het volgende bericht keert terug naar wat de dropdowns momenteel tonen.

**Wanneer dit nuttig is:**

- **Kostenbeheersing** — stuur een eenvoudige lookup naar een goedkoop, snel model en houd een premium model voor verrijking.
- **Kwaliteitsexperimenten** — stuur dezelfde prompt twee keer met verschillende modellen en vergelijk.
- **Provider-isolatie** — stuur gevoelige prompts naar een zelf-gehoste Ollama-platform zonder de globale instelling aan te raken.

Als u een wijziging permanent wilt maken voor elke gebruiker en elke functie, bewerk dan in plaats daarvan **Magic AI → Instellingen → Agentic PIM**.

## Types Commando's

Hieronder staan de hoofdcategorieën van dingen die u de agent kunt vragen te doen. Omdat de agent tools kiest op basis van uw intentie, hoeft u geen tool-namen te onthouden — beschrijf gewoon het gewenste resultaat.

### Productoperaties

Producten aanmaken, bijwerken, zoeken en bulk-bewerken.

**Voorbeelden van prompts:**
- "Maak een simple product aan met SKU TSHIRT-001 en naam Blue T-Shirt"
- "Update de prijs van product SKU LAPTOP-PRO naar 999.99"
- "Zoek alle producten in de categorie Schoeisel"
- "Bulk update status naar enabled voor alle producten met SKU beginnend met SHOE"

### Categoriebeheer

Beheer de categorieboom.

**Voorbeelden van prompts:**
- "Toon alle root-categorieën"
- "Toon producten toegewezen aan de Electronics-categorie"

### Datakwaliteitsrapporten

Scan uw catalogus op ontbrekende of onvolledige gegevens en ontvang gestructureerde rapporten waarop u actie kunt ondernemen.

**Voorbeelden van prompts:**
- "Voer een datakwaliteitsscan uit op alle producten in de Clothing-categorie"
- "Welke producten missen een beschrijving?"
- "Toon producten met een volledigheidsscore onder 50%"

### Productverificatie & Kwaliteitsscoring

Verifieer individuele producten tegen kwaliteitscriteria.

**Voorbeelden van prompts:**
- "Controleer de volledigheid van product SKU JACKET-100"
- "Verifieer datakwaliteit voor alle producten in de Default-familie"

### Auto-Enrichment

Laat de agent ontbrekende content invullen — beschrijvingen, SEO-velden, enz. De agent gebruikt wat het product al heeft (naam, categorie, attributen) om content te produceren die past.

**Voorbeelden van prompts:**
- "Genereer een korte beschrijving voor product SKU SNEAKER-200"
- "Vul automatisch ontbrekende meta-beschrijvingen in voor alle producten in de Accessories-categorie"
- "Verrijk de SEO-velden voor product SKU WATCH-050"

::: tip
Auto-enrichment werkt het beste wanneer het product al basisinformatie heeft zoals een naam en categorie. De agent leunt op die context om coherente, on-brand content te produceren.
:::

### Taakplanning

Voor multi-step werk bouwt de agent een plan, toont het aan u en voert het stap voor stap uit.

**Voorbeelden van prompts:**
- "Plan en voer uit: update alle producten in de Summer-collectie met 20% korting en een nieuwe promotionele beschrijving"
- "Maak een taakplan om alle producten met ontbrekende afbeeldingen te beoordelen en verrijken"

### Bulktransformaties

Pas transformaties (append, prepend, replace) toe op vele SKU's in één keer.

**Voorbeelden van prompts:**
- "Bulk update alle producten met status disabled naar enabled"
- "Wijzig de categorie van alle producten met SKU-prefix LEGACY naar de Archive-categorie"

### Manage Associations

Geïntroduceerd in **v2.0.x**, laat de **Manage Associations**-tool u gerelateerde producten, up-sells en cross-sells toevoegen, verwijderen of tonen via conversatie — geen noodzaak om elk product afzonderlijk te openen.

**Voorbeelden van prompts:**
- "Voeg SKU BELT-100 toe als cross-sell op SKU JEANS-200"
- "Verwijder alle up-sell-producten van SKU PHONE-CASE-BLACK"
- "Toon cross-sell-producten gekoppeld aan SKU LAPTOP-PRO"
- "Spiegel de gerelateerde producten van SKU SHIRT-001 naar SKU SHIRT-002"

### Agent Memory System

De agent heeft een klein langetermijngeheugen dat over sessies blijft bestaan. Het gebruikt twee interne tools:

- **RememberFact** — Slaat een feit of voorkeur op waarvan u zegt dat hij die moet onthouden.
- **RecallMemory** — Haalt onthouden feiten op wanneer ze relevant zijn voor het huidige verzoek.

**Voorbeelden van prompts:**
- "Onthoud dat onze standaard productbeschrijvingsindeling begint met de merknaam"
- "Roep op wat ik je heb verteld over onze naamgevingsconventie"

### Content Feedback-loop

Wanneer de agent content genereert, kunt u hem nudgen met feedback en hij zal toekomstige output in dezelfde sessie aanpassen — en, indien sterk genoeg, de voorkeur onthouden voor de volgende keer.

**Voorbeelden van prompts:**
- "Die beschrijving is te lang, maak hem korter en directer"
- "Ik geef de voorkeur aan een formele toon voor productbeschrijvingen"
- "Herschrijf dat maar focus meer op het materiaal en de duurzaamheid"

## Realtime Streaming-antwoorden

Antwoorden streamen in realtime de chat in via **Server-Sent Events (SSE)**. U ziet het redeneren van de agent, tool-aanroepen en resultaten progressief verschijnen in plaats van te wachten op het hele antwoord. Voor lange operaties (bijvoorbeeld een bulkupdate van 200 producten) kunt u zo de voortgang volgen terwijl deze gebeurt.

## Sessions-tabblad

Het Sessions-tabblad somt elke eerdere chat op. Elke vermelding toont de sessietitel, het aantal berichten en de datum van laatste activiteit.

 <ImagePopup src="/assets/2.0/images/ai-agent/ai-agent-sessions.png" alt="AI Agent Sessions" />

### Sessies beheren

- **+ New Session** — Start een schone conversatie zonder eerdere context. Nuttig wanneer u overschakelt naar een andere taak.
- **Sessie verwijderen** — De prullenbak-knop verwijdert een sessie permanent. Onomkeerbaar.
- **Een sessie hervatten** — Klik op een willekeurige vermelding om deze opnieuw te openen. Volledige geschiedenis en context worden hersteld, zodat de agent oppakt waar u bent gebleven.

### Sessiebehoud

Sessies worden in de database opgeslagen, wat betekent:

- **Pagina-vernieuwingen** wissen uw conversatie niet.
- **Browser-sessies** worden bewaard — sluit het tabblad, kom later terug, hervat.
- **Context wordt behouden binnen een sessie**, zodat de agent zich herinnert wat u eerder in dezelfde thread besprak ("pas dezelfde wijziging toe op SKU B").
- Sessies blijven bestaan **over logins heen**, dus uw geschiedenis is altijd beschikbaar wanneer u zich opnieuw aanmeldt.

::: tip
Start een nieuwe sessie wanneer u overschakelt naar een andere taak. Gefocuste sessies leveren betere tool-keuzes op omdat de agent geen niet-gerelateerde context hoeft te jongleren.
:::
