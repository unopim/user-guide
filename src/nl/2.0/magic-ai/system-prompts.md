# Magic AI — Systeemprompts

> **Zijbalk:** Magic AI → **Systeemprompts**
> **URL:** `/admin/magic-ai/system-prompts`

De **Systeemprompts**-pagina regelt de **persoonlijkheid** van de AI — de stem, toon en generatieparameters die onder elk content-verzoek in UnoPim zitten. Slechts één Systeemprompt is tegelijk actief, zodat uw hele catalogus een consistente stem behoudt.

## Wat is een Systeemprompt?

Een *Systeemprompt* is een preamble dat Magic AI vóór elke user-facing prompt plaatst voordat het verzoek naar het model wordt verzonden. Het stelt in:

- **Toon** — vriendelijk vs. formeel, beknopt vs. levendig, autoritair vs. casual.
- **Temperature** — hoe creatief of deterministisch de output is (0.0 = strak en herhaalbaar, 1.0 = gevarieerd en inventief).
- **Max Tokens** — hoe lang het antwoord kan zijn.

Als een [**Prompt**](./prompts.md) zegt *wat* er moet worden geschreven voor een specifiek veld (*"schrijf een productbeschrijving die `@name` en `@color` vermeldt"*), dan zegt een **Systeemprompt** *hoe* het moet klinken — en die "hoe" geldt voor elk stuk content dat het systeem produceert.

## Wat doet deze pagina?

- Toont de 10 vooraf ingestelde Systeemprompts die worden meegeleverd met UnoPim, plus eventuele aangepaste die u aanmaakt.
- Laat u Systeemprompts **aanmaken**, **bewerken**, **in-/uitschakelen** en **verwijderen**.
- Dwingt af dat slechts één Systeemprompt tegelijk actief is — het inschakelen van een nieuwe deactiveert automatisch de vorige.

<ImagePopup src="/assets/2.0/images/magic-ai/system-prompts.png" alt="Systeemprompts" />

## Waar de actieve Systeemprompt wordt toegepast

```
Any Magic AI request (wand icon, auto-translate, agent chat, auto-enrichment)
           │
           ▼
Magic AI picks the matching Prompt        ← from Magic AI → Prompts
           │
           ▼
Active System Prompt is prepended          ← from Magic AI → System Prompts
   (tone + temperature + max tokens)
           │
           ▼
Combined request sent to Platform + Model  ← from Magic AI → Settings
```

Omdat de actieve Systeemprompt van toepassing is op **elke** AI-functie — toverstaf-iconen, auto-vertaling, auto-enrichment en de AI Agent — verandert het wisselen ervan direct de stem van elke AI-output in de hele catalogus.

## Systeemprompts-datagrid

| Kolom | Beschrijving |
|--------|-------------|
| **Title** | De naam van de system prompt. |
| **Tone** | De conversationele toon (bijv. Confident, Vivid, Brief). |
| **Max Tokens** | Het maximumaantal tokens voor AI-antwoorden. |
| **Temperature** | Het creativiteitsniveau (lager = meer gefocust, hoger = creatiever). |
| **Status** | Ingeschakeld of Uitgeschakeld. |
| **Created At** | Datum waarop de system prompt is aangemaakt. |
| **Updated At** | Datum waarop de system prompt voor het laatst is gewijzigd. |
| **Actions** | Bewerken (potloodicoon), Verwijderen (prullenbakicoon). |

## Vooraf ingestelde Systeemprompts

UnoPim wordt geleverd met 10 vooraf ingestelde Systeemprompts. Slechts één kan tegelijk worden ingeschakeld.

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

## Een Systeemprompt aanmaken

Klik op de knop **Create Systeemprompt**. Configureer:

- **Title** — De naam die in de datagrid verschijnt (bijv. *"Luxury Brand Voice"*).
- **Tone description** — Een beschrijving in begrijpelijke taal van de stem. Het model leest dit op het moment van verzoeken, dus wees specifiek: *"Schrijf in een ingetogen, elegante toon. Gebruik beknopte zinnen. Vermijd marketing-hyperbool."*
- **Max Tokens** — Beperkt de antwoordlengte. Lagere waarden produceren kortere, goedkopere output; hogere waarden geven het model meer ruimte.
- **Temperature** — 0.0 tot 1.0. Lage waarden (0.3–0.5) zijn het beste voor betrouwbare, herhaalbare output; hoge waarden (0.8–1.0) voegen variatie en flair toe.
- **Status** — Het inschakelen van deze deactiveert automatisch de momenteel actieve Systeemprompt.

## Een temperature kiezen

| Temperature | Het beste voor |
|---|---|
| **0.0 – 0.4** | Technische specs, SEO-metavelden, referentiecontent — waar herhaalbaarheid belangrijk is. |
| **0.5 – 0.7** | Algemene productbeschrijvingen, categorie-tekst, alledaagse marketingcontent. |
| **0.8 – 1.0** | Lifestyle-content, storytelling, blog-stijl tekst — waar variatie en creativiteit schitteren. |

::: tip
Slechts één Systeemprompt kan tegelijk actief zijn. Het inschakelen van een nieuwe Systeemprompt deactiveert automatisch de eerder actieve. Kies een persoonlijkheid die overeenkomt met de toon die u in de hele catalogus wilt — wisselen tijdens de vlucht zal oudere en nieuwere content inconsistent doen aanvoelen.
:::

## Prompts vs. Systeemprompts

| | Prompt | Systeemprompt |
|---|---|---|
| **Scope** | Per veld / per doel | Globaal in het hele systeem |
| **Zegt** | *Wat* er geschreven moet worden | *Hoe* er geschreven moet worden |
| **Hoeveel actief** | Zoveel als u hebt aangemaakt | Precies één |
| **Placeholders** | Ja (`@attribute_code`) | Nee — geschreven als platte instructies |
| **Typische wijzigingsfrequentie** | Vaak — afgestemd per attribuut, per use case | Zelden — gebonden aan merkstem |

Zie **[Prompts](./prompts.md)** voor de instructielaag per veld die op het moment van genereren wordt gecombineerd met de actieve Systeemprompt.
