# Agentic PIM

> **Zijbalk:** **Agentic PIM**
> **Instellingen bevinden zich op:** Magic AI → Instellingen → sectie *Agentic PIM* (`/admin/configuration/general/magic_ai`)

**Agentic PIM** is de vlaggenschip AI-functionaliteit van UnoPim — de paraplu die elke autonome of semi-autonome AI-workflow omvat die het product namens u uitvoert. Vanuit één instellingskaart onder **Magic AI → Instellingen** beheert u:

- Het paneel **AI Agent Chat** (het zwevende ster-icoon rechtsonder op elke admin-pagina).
- De achtergrondjob **Auto-Enrichment** die ontbrekende productvelden invult na aanmaak.
- De geplande scan **Catalog Quality Monitor**.
- De **Confidence Threshold** en **Change Approval Mode** die bepalen wanneer door AI voorgestelde wijzigingen uw gegevens bereiken of in de Goedkeuringswachtrij belanden.
- Het **Daily Token Budget** dat de gecombineerde uitgaven over alle bovenstaande beperkt.

## Wat doet Agentic PIM?

Beschouw Agentic PIM als een klein team AI-werkers dat uw catalogus bewaakt:

| Werker | Trigger | Resultaat |
|---|---|---|
| **AI Agent Chat** | U typt een instructie in het chatpaneel. | Roept een of meer van 30+ PIM-tools aan om uw verzoek uit te voeren. |
| **Auto-Enrichment** | Er wordt een nieuw product aangemaakt (handmatig of via import). | Vult ontbrekende beschrijvingen, SEO-metadata, enz. in. |
| **Catalog Quality Monitor** | Gepland (achtergrond). | Doorzoekt de catalogus op dunne of inconsistente gegevens en toont deze in 'Heeft aandacht nodig'. |
| **Goedkeuringswachtrij** | Elke AI-werker stelt een wijziging voor. | Houdt de wijziging vast of past deze toe op basis van uw goedkeuringsmodus + confidence threshold. |

Alle vier delen hetzelfde Platform, Model, Prompt, Systeemprompt en token-budget — eenmalig geconfigureerd vanuit **Magic AI → Instellingen**.

## Hoe werkt Agentic PIM?
Elke Agentic PIM-actie volgt dezelfde vijfstapsketen:

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Agentic PIM Pipeline — 5-staps workflow" />

Deze pipeline draait bovenop de unified **LaravelAiAdapter**, dus het wisselen van Platforms of Models onder Magic AI Settings verandert direct het gedrag van elke Agentic PIM-werker.


## Configuratie — de Agentic PIM-instellingen

Open **Magic AI → Instellingen** en vouw de kaart **Agentic PIM** uit. De velden zijn:

| Veld | Wat het doet |
|---|---|
| **Enable AI Agent Chat** | Hoofdschakelaar voor het zwevende chatpaneel. Wanneer uit, is het ster-icoon rechtsonder verborgen en kan geen enkele gebruiker met de agent converseren. Auto-Enrichment en de Catalog Quality Monitor blijven draaien. |
| **Max Agent Steps Per Turn** | Hoeveel tool-aanroepen de agent mag aaneenschakelen voor één trigger. Dropdown met presets in plaats van ruwe getallen (bijv. **`3 (Fast)`**). Hoger = meer autonomie per beurt; lager = strakker beheer en goedkopere tokens. |
| **Daily Token Budget** | Globale dagelijkse limiet op tokens uitgegeven door Agentic PIM (bijv. `500000`). Gedeeld over chat, verrijking en monitoring. Wanneer de limiet is bereikt, pauzeert elke AI-werker tot de volgende dag. |
| **Auto-Enrichment on Product Create** | Indien ingeschakeld, wordt elk nieuw aangemaakt product in de wachtrij gezet voor achtergrondverrijking — ontbrekende beschrijvingen, SEO-velden, enz. worden automatisch ingevuld. |
| **Catalog Quality Monitor** | Voert een geplande AI-scan uit die dunne, ontbrekende of inconsistente catalogusgegevens rapporteert in de sectie **Heeft aandacht nodig** van het Dashboard. |
| **Confidence Threshold** | Minimum confidence-score (standaard **0.7 — Balanced**) vereist voordat een voorgestelde wijziging zonder beoordeling wordt toegepast. Onder de drempel wordt de wijziging vastgehouden in de Goedkeuringswachtrij, ongeacht de goedkeuringsmodus. |
| **Change Approval Mode** | *Auto-apply* / *Confirm & apply* / *Manual review*. Bepaalt hoe door AI voorgestelde wijzigingen in uw gegevens belanden. Standaard *"Confirm & apply (propose values, ask to confirm, then execute)"*. |

<ImagePopup src="/assets/2.1/images/magic-ai/magic-ai-settings.png" alt="Magic AI-instellingen — Agentic PIM-sectie" />

## Aanbevolen installatievolgorde

Agentic PIM heeft veel knoppen. Een typische uitrol ziet er als volgt uit:

1. **Dag 0 — voorzichtige start.** Schakel alleen AI Agent Chat in. Stel *Max Agent Steps Per Turn* in op de laagste preset, Daily Token Budget op een conservatief aantal en Change Approval Mode op **Manual review**.
2. **Dag 1-3 — observeer in Analytics.** Bekijk tokengebruik en welke tools de agent daadwerkelijk aanroept. Beoordeel elke wijziging in de Goedkeuringswachtrij.
3. **Dag 4+ — verruim selectief.** Verhoog het token-budget zodra u de uitgaven begrijpt. Verplaats vertrouwde workflows (bijv. het invullen van meta-beschrijvingen in een specifieke familie) naar **Confirm & apply** of **Auto-apply**. Laat risicovolle workflows in Manual review.
4. **Week 2 — schakel achtergrondwerkers in.** Schakel eerst **Auto-Enrichment on Product Create** in (single-entity, voorspelbare kosten). Schakel **Catalog Quality Monitor** in zodra u tevreden bent met de verrijkingskwaliteit.

## Hoe Agentic PIM zich verhoudt tot andere documenten

| Als u wilt… | Lees |
|---|---|
| De chat-UI in detail leren | **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** |
| Voorgestelde wijzigingen beoordelen, goedkeuren of afwijzen | **[Goedkeuringswachtrij](../ai-agent/approval-queue.md)** |
| Tokengebruik, kosten en activiteit bekijken | **[Analytics](../ai-agent/analytics.md)** |
| Platforms, Prompts, Systeemprompts configureren | **[Magic AI Configuratie](../configuration/magic-ai.md)** |
| Fijnafstemming per capaciteit (Text / Image / Translation) | **[Magic AI → Instellingen](../magic-ai/settings.md)** |

## Veiligheidsmaatregelen in één oogopslag

Vier lagen stapelen zich op om de autonomie van Agentic PIM in toom te houden:

| Laag | Geconfigureerd bij | Wat het beschermt |
|---|---|---|
| **ACL-machtigingen** | Instellingen → Roles | Voorkomt dat de agent iets doet wat de rol van de aanroeper niet mag. |
| **Daily Token Budget** | Magic AI → Instellingen → Agentic PIM | Beperkt totale uitgaven over alle Agentic PIM-werkers per dag. |
| **Max Agent Steps Per Turn** | Magic AI → Instellingen → Agentic PIM | Beperkt hoeveel tools één trigger kan aaneenschakelen. |
| **Confidence Threshold + Change Approval Mode + Goedkeuringswachtrij** | Magic AI → Instellingen → Agentic PIM | Houdt risicovolle of onzekere schrijfbewerkingen vast voor beoordeling. |

Geen van deze vereist opnieuw uitrollen of herstarten — sla de Magic AI-instellingenpagina op en elke Agentic PIM-werker neemt de nieuwe waarden over bij zijn volgende run.
