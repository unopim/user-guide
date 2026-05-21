# Dashboard

Het **Dashboard** is de landingspagina die u direct ziet na het inloggen op [UnoPim](https://unopim.com/). Het is ontworpen als een single-screen commandocentrum: binnen een seconde moet u kunnen zien *hoe groot* uw catalogus is, *hoe gezond* deze is, *waar uw team aan heeft gewerkt* en *wat als volgende aandacht nodig heeft* — zonder naar enige andere pagina te klikken.

<ImagePopup src="/assets/2.0/images/dashboard/dashboard-overview.png" alt="Dashboard-overzicht" />

## Waarvoor is het Dashboard bedoeld?

Het Dashboard bestaat om vier vragen te beantwoorden op het moment dat u inlogt:

| Vraag | Waar het antwoord staat |
|---|---|
| **Hoe groot is mijn catalogus?** | Catalogusoverzicht + Catalogusstructuurkaarten |
| **Hoe gezond zijn mijn gegevens?** | Vereist aandacht, Volledigheid, Kanaalgereedheid |
| **Waar heeft het team aan gewerkt?** | Productstatistieken, Productactiviteitsgrafiek, Recente activiteit |
| **Wat doe ik nu?** | Welkomstbanner snelle acties, waarschuwingen voor 'Vereist aandacht', Gegevensoverdracht-paneel |

Het is bewust leeszwaar — het Dashboard rapporteert de status en wijst u vervolgens naar de juiste pagina om actie te ondernemen. Elke kaart en elk paneel is ofwel klikbaar (om naar de relevante lijst te springen) ofwel gekoppeld aan een quick-action-knop.

## Hoe het Dashboard werkt

De pagina bestaat uit onafhankelijke **widgets**, elk afkomstig uit een ander deel van UnoPim:

```
┌───────────────────────────────────────────────────┐
│ Welcome Banner   (user greeting + quick actions)  │
├───────────────────────────────────────────────────┤
│ Catalog Overview   ← products + categories tables │
│ Catalog Structure  ← attributes, locales, channels│
├───────────────────────────────────────────────────┤
│ Needs Attention    ← completeness engine          │
├───────────────────────────────────────────────────┤
│ Analytics          ← product stats + 7-day chart  │
│ Completeness       ← per-channel completeness     │
│ Channel Readiness  ← per-channel ready counts     │
├───────────────────────────────────────────────────┤
│ Operations         ← activity log + Job Tracker   │
├───────────────────────────────────────────────────┤
│ AI Agent button (floating, bottom-right)          │
│ Theme toggle (top-right, next to bell)            │
└───────────────────────────────────────────────────┘
```

Tellers en grafieken worden berekend bij het laden van de pagina (geen geplande jobs), zodat het Dashboard altijd de huidige staat van de database weergeeft.

## Widgets

### Welkomstbanner

Een gepersonaliseerde begroeting — **"Welkom terug, [Uw naam]"** — vastgezet aan de bovenkant van de pagina. Het fungeert tevens als startpunt voor de drie meest voorkomende acties:

- **Product aanmaken** — gaat direct naar de pagina voor productaanmaak.
- **Gegevens importeren** — opent de import-workflow.
- **Gegevens exporteren** — opent de export-workflow.

::: tip
Gebruik deze quick-action-knoppen in plaats van te navigeren via de zijbalk — het Dashboard is geoptimaliseerd om u in één klik aan het werk te zetten.
:::

### Catalogusoverzicht

Twee **klikbare samenvattingskaarten** die de omvang van uw catalogus tonen:

| Kaart | Toont | Klikken brengt u naar |
|---|---|---|
| **Totale Producten** | Aantal producten over alle statussen en typen. | Productlijstpagina. |
| **Totale Categorieën** | Aantal categorieën in de hele boom. | Categorieënlijstpagina. |

### Catalogusstructuur

Een rij met kleine kaarten die een structurele momentopname geven van hoe de catalogus is opgezet. Handig voor het opsporen van configuratiehiaten — bijvoorbeeld een nieuw kanaal zonder toegewezen locale.

| Kaart | Wat het telt |
|---|---|
| **Totale Attributen** | Productattributen gedefinieerd in het systeem. |
| **Totale Groepen** | Attribuutgroepen. |
| **Totale Families** | Attribuutfamilies. |
| **Totale Locales** | Locales geconfigureerd over kanalen. |
| **Totale Valuta's** | Valuta's ingesteld voor gebruik in kanalen. |
| **Totale Kanalen** | Geconfigureerde verkoopkanalen. |

### Vereist aandacht

Toont items die **direct** beheerderactie vereisen. De meest voorkomende waarschuwing is **niet-verrijkte producten** — producten waar gegevens ontbreken die nodig zijn om kanaal-klaar te zijn. Wanneer de catalogus gezond is, klapt deze sectie samen en blijft stil.

::: warning
Niet-verrijkte producten zijn mogelijk niet klaar voor distributie naar uw verkoopkanalen. Bekijk deze sectie regelmatig om de catalogus verzendklaar te houden.
:::

### Analytics

#### Productstatistieken

Een numerieke uitsplitsing van de catalogus — de snelste manier om de gezondheid in de loop van de tijd te beoordelen.

| Metriek | Betekenis |
|---|---|
| **Totale Producten** | Totaal aantal producten. |
| **Actief / Inactief** | Hoeveel producten zijn momenteel ingeschakeld vs. uitgeschakeld. |
| **Verdeling Producttypen** | Procentuele verdeling tussen simple- en configurable-producten. |
| **Nieuw deze week** | Producten die deze week zijn aangemaakt. |
| **Met Varianten** | Producten met variantconfiguraties. |
| **Gem. Volledigheid** | Gemiddelde volledigheidsscore over alle producten. |
| **Verrijkt** | Aantal producten dat is gemarkeerd als volledig verrijkt. |

#### Productactiviteit (laatste 7 dagen)

Een grafiek met twee lijnen die **Aangemaakte** vs. **Bijgewerkte** producten per dag uitzet voor de afgelopen zeven dagen. Vlakke lijnen op nul geven aan dat de catalogus stil is geworden; pieken betekenen meestal dat een bulkimport- of verrijkingsronde zojuist is voltooid.

### Volledigheid

Toont hoe goed uw productgegevens voldoen aan de vereisten van elk **kanaal**, met **uitsplitsingen per locale naast elkaar zichtbaar**. Voor elk geconfigureerd kanaal (bijv. *Default*, *Amazon*, *Flipkart*), geeft de kaart het volgende weer:

- Een **algemeen kanaalpercentage** als een cirkelvormige meter.
- **Rijen per locale** — één rij per locale toegewezen aan dat kanaal (bijv. Duits, Engels, Frans), elk met een eigen meter.
- Een **korte beoordeling** onder de hoofdmeter:

| Bericht | Betekenis |
|---|---|
| **Bijna compleet** | Bijna klaar — slechts kleine aanvullingen nodig. |
| **Lage volledigheid, voeg details toe om te verbeteren** | Aanzienlijke productinformatie ontbreekt nog. |

Deze lay-out maakt het eenvoudig om de exacte combinatie van kanaal + locale te identificeren die ervoor zorgt dat een product niet verzendklaar is.

::: tip
Werk eerst aan het laagstscorende kanaal-locale-paar. Een product kan klaar zijn voor *Default*, maar nog steeds geblokkeerd worden op *Amazon → Frans* als een verplicht attribuut ontbreekt in die specifieke combinatie.
:::

### Kanaalgereedheid

Een horizontale **voortgangsbalk per kanaal** met de tekst *"X van Y producten klaar"* met een percentage (bijv. *"2 van 3 producten klaar — 67%"*). Waar de Volledigheid-widget *gemiddelde kwaliteit* toont, toont Kanaalgereedheid *verzendbaar aantal* — het aantal producten dat voldoet aan de verplichte-velden-lat van dat kanaal.

### Operaties

#### Recente activiteit

Een chronologische feed van wijzigingen in het systeem. Elke vermelding bevat:

| Veld | Betekenis |
|---|---|
| **Actietype** | Aangemaakt, bijgewerkt of verwijderd. |
| **Entiteitstype** | Familie, Attribuut, Product, Categorie, Kanaal, enz. |
| **Gebruikersnaam** | Wie de actie heeft uitgevoerd. |
| **Tijdstempel** | Wanneer het is gebeurd. |

Dit is de snelste manier om de vraag *"heeft iemand recent X gewijzigd?"* te beantwoorden zonder het historie-tabblad op elke entiteit te openen.

#### Gegevensoverdracht

Statuspaneel voor uw meest recente import- en exportjobs. Elke job toont een van vijf staten:

| Status | Betekenis |
|---|---|
| **Voltooid** | De job is succesvol voltooid. |
| **Bezig** | De job draait momenteel. |
| **In afwachting** | De job staat in de wachtrij en wacht om te starten. |
| **Mislukt** | De job ondervond fouten. |
| **Geannuleerd** | De job is handmatig geannuleerd. |

Klik op **"Alle jobs bekijken"** om de volledige **Taakvolger** te openen met voortgangsbalken per stap en pauze/hervat/annuleer-besturingselementen.

### AI Agent

Een zwevende knop **"Open Agenting PIM"** bevindt zich in de rechteronderhoek van het Dashboard (en elke andere admin-pagina). Door erop te klikken opent u de conversationele AI Agent — typ wat u nodig hebt in begrijpelijk Nederlands en hij roept namens u de juiste PIM-tool aan.

::: tip
De AI Agent kan producten aanmaken, content verrijken, datakwaliteitsscans uitvoeren en vragen over uw catalogus beantwoorden zonder dat u door de zijbalk hoeft te navigeren. Zie **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** voor de volledige lijst van 30+ tools.
:::

### Donker / Licht Thema

UnoPim ondersteunt een **Donker / Licht Thema**-schakelaar. Klik op het zon/maan-icoon in de rechterbovenhoek van de headerbalk (naast de notificatiebel) om te wisselen tussen lichte en donkere modus. Uw voorkeur blijft behouden tussen sessies, zodat elke pagina — het Dashboard, productlijst, editors en de AI Agent Chat — het door u gekozen thema behoudt.

<ImagePopup src="/assets/2.0/images/settings/dark-theme.png" alt="Donker Thema" />

::: tip
De themaschakelaar is globaal. Welke modus u ook kiest, deze geldt overal in de admin, niet alleen op het Dashboard.
:::

## Typische Dashboard-workflow

Een veel voorkomende manier waarop beheerders het Dashboard aan het begin van een dienst gebruiken:

1. **Controleer Vereist aandacht** — wis dringende waarschuwingen (bijv. niet-verrijkte producten).
2. **Scan Volledigheid en Kanaalgereedheid** — kies het zwakste kanaal/locale en plan een opschoning.
3. **Doorblader Recente activiteit** — bevestig dat nachtelijke jobs zijn voltooid en dat wijzigingen van teamgenoten logisch zijn.
4. **Open Gegevensoverdracht** — bekijk lopende imports/exports, of klik door naar de Taakvolger voor details.
5. **Start werk** — gebruik een Welkomstbanner quick-action of de AI Agent-knop om de taken van de dag te beginnen.

Door deze workflow te volgen, wordt het Dashboard een dagelijks triagescherm in plaats van slechts een landingspagina.
