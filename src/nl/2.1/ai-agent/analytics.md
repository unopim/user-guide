# AI Agent Analytics

Het **AI Agent Analytics**-dashboard toont u hoe de agent wordt gebruikt en wat het kost. Omdat elk AI-verzoek tokens verbruikt (en tokens kosten geld), is dit dashboard de manier om de rekening voorspelbaar te houden, ongebruikelijke gebruikspatronen op te sporen en het dagelijkse budget af te stellen.

## Wat doet het Analytics-dashboard?

Het toont drie dingen op één plek:

1. **Wat er nu gebeurt** — vandaag's tokenverbruik vs. het dagelijkse budget en hoeveel budget er nog over is.
2. **Wat er historisch is gebeurd** — conversatietellingen, tool-aanroepen en tokenuitgaven per dag, per gebruiker en per bewerkingstype.
3. **Wat het heeft gekost** — tokenverbruik vertaald naar een geschat dollarbedrag op basis van de prijzen van uw provider.

Gebruik het om vragen te beantwoorden zoals *"Wie gebruikt de agent deze week het zwaarst?"*, *"Welke operatietypes zijn de grootste token-slurpers?"* en *"Sta ik op het punt mijn dagelijkse limiet te bereiken?"*

## Hoe werkt het?

Telkens wanneer een gebruiker een bericht stuurt naar de AI Agent Chat, registreert UnoPim:

- **Wie** het bericht heeft verzonden (de admin-gebruiker).
- **Welke tools** de agent heeft aangeroepen om te reageren.
- **Hoeveel tokens** er werden verbruikt (prompt + completion, voor elke tool-aanroep).
- **Wanneer** de beurt plaatsvond.

Het dashboard aggregeert deze records om de tellers, grafieken en gebruikersniveau-uitsplitsingen te produceren. Records blijven bestaan zolang uw sessie/log-retentiebeleid toestaat, zodat historische trendanalyse out-of-the-box beschikbaar is.

### Waar het dagelijkse budget vandaan komt

Het **Daily Token Budget** is een enkel globaal nummer ingesteld onder **Magic AI → Instellingen → Agentic PIM → Daily Token Budget** (bijv. `500000`). Elke tool-aanroep die de agent doet, verlaagt het lopende totaal voor de dag. Wanneer het totaal nul bereikt, antwoordt de agent met een budget-uitgeput-melding aan elke gebruiker die een bericht probeert te verzenden. Om middernacht (servertijd) wordt de teller gereset.

Het dashboard toont **drie afgeleide cijfers** bovenop die ruwe teller: vandaag's gebruik, resterend budget en het utilisatiepercentage.

## Overzicht Analytics-dashboard

Het dashboard geeft u een gecentraliseerd overzicht van alle AI Agent-activiteit. Van hieruit kunt u monitoren:

- **Totaal verbruikte tokens** over een geselecteerde tijdsperiode.
- **Aantal conversaties** gestart door elke admin-gebruiker.
- **Aantal tool-aanroepen** uitgevoerd door de agent.
- **Dagelijkse en wekelijkse gebruikstrends** weergegeven in visuele grafieken.

<!-- TODO: Add screenshot -->

Het dashboard is toegankelijk vanuit het admin-paneel en beschikbaar voor gebruikers met de juiste machtigingen.

## Token Budget Tracking

De AI Agent werkt met een **dagelijks token-budget** — één globale limiet gedeeld over alle admin-gebruikers. Het dashboard toont:

- **Dagelijks tokengebruik** — Hoeveel tokens vandaag zijn verbruikt door alle gebruikers.
- **Resterend budget** — Tokens die nog beschikbaar zijn voor de huidige dag.
- **Budget-utilisatiepercentage** — Visuele indicator (bijv. een voortgangsbalk) van hoeveel van het dagelijkse budget is gebruikt.

Wanneer het dagelijkse token-budget is uitgeput, pauzeert de AI Agent voor de rest van de dag. Het meldt gebruikers dat de limiet is bereikt en hervat de normale werking de volgende dag wanneer het budget wordt gereset.

::: tip
Houd de dagelijkse utilisatie in de gaten als uw team leunt op auto-enrichment of bulkoperaties. Die taken verbruiken meer tokens per beurt dan eenvoudige lookup-queries.
:::

## AI-gebruik en kosten monitoren

Het dashboard helpt u de kostenimplicaties van de agent te begrijpen. Belangrijke metrieken zijn:

- **Tokenverbruik per gebruiker** — Welke teamleden gebruiken de agent het zwaarst.
- **Tokenverbruik per bewerkingstype** — Welke types operaties (productaanmaak, auto-enrichment, datakwaliteitsscans, beeldgeneratie, enz.) verbruiken de meeste tokens.
- **Kostenschatting** — Tokens vertaald naar een dollarschatting op basis van de prijzen van uw geselecteerde provider/model.

<!-- TODO: Add screenshot -->

Deze informatie is nuttig voor budgettering, voor het opsporen van uit de hand lopend gebruik en voor het beslissen of u een goedkoper model wilt toewijzen aan een bepaalde capaciteit (bijv. een lichter model gebruiken voor vertaling en het premium-model behouden voor contentgeneratie).

## Dagelijkse Token-budgetten configureren

Om het dagelijkse token-budget in te stellen of aan te passen:

1. Navigeer naar **Magic AI → Instellingen** in het admin-paneel.
2. Open de sectie **Agentic PIM**.
3. Stel het veld **Daily Token Budget** in (bijv. `500000`).
4. Klik op **Configuratie opslaan** om toe te passen.

<!-- TODO: Add screenshot -->

Het budget geldt globaal voor alle admin-gebruikers. Zodra het gecombineerde gebruik de dagelijkse limiet bereikt, pauzeert de agent tot middernacht.

::: tip
Start met een conservatief dagelijks budget en verhoog het geleidelijk naarmate u de gebruikspatronen van uw team leert kennen. Dit voorkomt verrassingspieken tijdens de uitrol.
:::

## Gebruiksgeschiedenis en trends bekijken

De sectie **Usage History** laat u eerdere activiteit beoordelen over aanpasbare datumbereiken. Het biedt:

- **Dagelijkse gebruiksuitsplitsing** — Dag-voor-dag-overzicht van tokenverbruik en conversatietellingen.
- **Wekelijkse en maandelijkse samenvattingen** — Geaggregeerde weergaven voor langetermijntrendanalyse.
- **Identificatie van piekgebruik** — Markeert dagen of perioden met ongebruikelijk hoog gebruik zodat u kunt onderzoeken voordat het een probleem wordt.

<!-- TODO: Add screenshot -->

Gebruik deze historische gegevens om budgettoewijzing te informeren, power-users te identificeren en operaties te identificeren die baat kunnen hebben bij een goedkoper model.

## Hoe analytics zich verhoudt tot de andere agent-besturing
Het analytics-dashboard is de observability-laag die bovenop de besturing zit die u hebt geconfigureerd onder **Magic AI → Instellingen → Agentic PIM**. Samen vormen ze een continue feedback-loop:

<ImagePopup src="/assets/2.1/images/ai-agent/analytics-feedback-loop.png" alt="AI Agent Management Feedback Loop" />

Een typische uitrol is: begin met een conservatief Daily Token Budget en Manual Review-goedkeuring, observeer de analytics een week lang, verhoog het budget waar het veilig is en verplaats vertrouwde workflows naar Auto-Approve op basis van wat het dashboard u vertelt.

