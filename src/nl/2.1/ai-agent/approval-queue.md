# Goedkeuringswachtrij

De **Goedkeuringswachtrij** is het vangnet dat tussen de door de AI Agent voorgestelde wijzigingen en uw live catalogus zit. Wanneer de agent productgegevens wil wijzigen — een beschrijving wijzigen, een prijs bijwerken, een categorie toewijzen, enz. — kan de wijziging worden vastgehouden zodat u deze kunt beoordelen voordat ze van kracht wordt. U keurt goed wat er goed uitziet, wijst af wat niet goed is, en niets bereikt de catalogus tenzij u dat zegt.

## Wat doet de Goedkeuringswachtrij?

- **Onderschept** door AI voorgestelde schrijfacties voordat ze naar de database worden gecommit.
- **Toont u een side-by-side diff** van de huidige waarde vs. wat de agent wil wijzigen.
- **Laat u individuele wijzigingen** of batches goedkeuren of afwijzen, één-voor-één of allemaal tegelijk.
- **Registreert** elke beslissing voor auditing.

De Goedkeuringswachtrij geldt alleen voor **schrijfacties afkomstig van de AI Agent**. Wijzigingen die rechtstreeks door beheerders worden aangebracht via de normale UI worden niet via de wachtrij gerouteerd.

## Hoe werkt de Goedkeuringswachtrij?

1. **De AI Agent stelt een wijziging voor** — gegenereerd vanuit een chat-instructie, een auto-enrichment-run of de Catalog Quality Monitor.
2. **UnoPim controleert de Change Approval Mode** (geconfigureerd in **Magic AI → Instellingen → Agentic PIM**):
   - **Auto-apply** — veilige / hoge-confidence-wijzigingen gaan direct naar de database.
   - **Confirm & apply** (standaard) — de agent stelt waarden voor, vraagt om bevestiging in de chat en voert vervolgens uit.
   - **Manual review** — elke wijziging wordt gerouteerd naar de Goedkeuringswachtrij, geen uitzonderingen.
3. **UnoPim controleert de Confidence Threshold** — als het vertrouwen van de agent in de voorgestelde wijziging onder de drempel ligt (standaard 0.7, "Balanced"), wordt de wijziging vastgehouden voor beoordeling, ongeacht de goedkeuringsmodus.
4. **Vastgehouden wijzigingen belanden in de Goedkeuringswachtrij** met een side-by-side diff, tijdstempel en de chat-beurt die ze heeft geproduceerd.
5. **U keurt elke vermelding goed of af.** Goedgekeurde wijzigingen worden onmiddellijk gecommit; afgewezen wijzigingen worden weggegooid.
6. **De beslissing wordt gelogd** zodat u later kunt auditen.

## Configureerbare Modi

De Goedkeuringswachtrij ondersteunt twee brede werkmodi, geselecteerd onder **Magic AI → Instellingen → Agentic PIM**:

### Auto-Approve-modus

Wijzigingen gaan direct naar de database zonder handmatige beoordeling. Het beste voor routinematige, vertrouwde operaties — bijvoorbeeld een goed afgestelde auto-enrichment-workflow waarbij u de prompt en persoonlijkheid al hebt gevalideerd. Sneller, maar geen tweede paar ogen.

### Manual Review-modus

Elke voorgestelde wijziging wordt vastgehouden voor expliciete goedkeuring. Dit is het aanbevolen startpunt bij het uitrollen van de AI Agent, vooral voor bulkoperaties of contentgeneratie. U ruilt een beetje snelheid in voor volledige supervisie.

::: tip
Begin in manual review terwijl u leert hoe de agent zich gedraagt op uw catalogus. Zodra u een specifieke workflow vertrouwt (bijvoorbeeld het invullen van meta-beschrijvingen voor een specifieke familie), kunt u overschakelen naar auto-approve voor die klasse van operaties.
:::

## Lopende Wijzigingen Beoordelen

Wanneer wijzigingen wachten op uw beoordeling, verschijnen ze in de Goedkeuringswachtrij. Elke openstaande wijziging toont:

- **Het betrokken product of de entiteit** — op welk product, categorie of record de wijziging van toepassing is.
- **Het veld dat wordt gewijzigd** — het specifieke attribuut of veld dat zal worden bijgewerkt.
- **De huidige waarde** — wat het veld momenteel bevat.
- **De voorgestelde waarde** — waarnaar de AI Agent het wil wijzigen.
- **De tijdstempel** — wanneer de agent het voorstel heeft gegenereerd.

Deze side-by-side lay-out maakt het eenvoudig om te zien of de voorgestelde waarde accuraat en on-brand is voordat deze wordt toegepast.

## Wijzigingen Goedkeuren

Klik op de knop **Approve** op een openstaande vermelding om die wijziging te committen. De wijziging bereikt onmiddellijk de database en de vermelding wordt uit de wachtrij verwijderd.

U kunt ook meerdere vermeldingen selecteren en ze in bulk goedkeuren — nuttig wanneer u een batch vergelijkbare bewerkingen hebt beoordeeld (bijvoorbeeld 20 meta-beschrijvingen die allemaal hetzelfde patroon volgen).

## Wijzigingen Afwijzen

Klik op **Reject** om een voorstel weg te gooien. De wijziging wordt verwijderd en bereikt nooit uw catalogus. Afwijzen heeft geen invloed op het gedrag van de agent bij toekomstige verzoeken — u kunt vrijelijk afwijzen zonder u zorgen te maken over training-bijwerkingen.

## Wanneer Bevestiging Vereist Is

Bepaalde klassen van wijzigingen vragen altijd om expliciete bevestiging, ongeacht de goedkeuringsmodus die u hebt gekozen:

- **Afbeeldingswijzigingen tussen verzoeken** — als de agent wijzigingen voorstelt aan productafbeeldingen of media-assets, wordt u om bevestiging gevraagd.
- **Bulkwijzigingen** — grootschalige wijzigingen die veel producten beïnvloeden, triggeren een bevestigingsstap om onbedoelde massa-updates te voorkomen.
- **Destructieve operaties** — alles wat een aanzienlijke hoeveelheid gegevens verwijdert of overschrijft, vraagt om expliciete bevestiging.

Deze beschermingen draaien zelfs in Auto-Approve-modus. Ze zijn er om te voorkomen dat "één afdwalende prompt" catalogus-brede schade aanricht.

::: tip
De Goedkeuringswachtrij gaat bijzonder goed samen met auto-enrichment. Laat de agent beschrijvingen en SEO-content op de achtergrond genereren en beoordeel vervolgens alles vanuit één plek voordat het wordt gepubliceerd.
:::

## Hoe de wachtrij interacteert met andere veiligheidsmaatregelen

De Goedkeuringswachtrij is een van vier beveiligingsmaatregelen op de AI Agent. Samen vormen ze een defence-in-depth-model:

| Beveiliging | Geconfigureerd bij | Wat het beschermt |
|---|---|---|
| **ACL-machtigingen** | Instellingen → Roles | Voorkomt dat de agent dingen doet die uw rol niet kan. |
| **Daily Token Budget** | Magic AI → Instellingen → Agentic PIM | Beperkt totale AI-uitgaven per dag. |
| **Max Agent Steps Per Turn** | Magic AI → Instellingen → Agentic PIM | Beperkt hoeveel tools één bericht kan aaneenschakelen. |
| **Change Approval Mode + Confidence Threshold + Goedkeuringswachtrij** | Magic AI → Instellingen → Agentic PIM | Houdt risicovolle of onzekere schrijfacties vast voor beoordeling. |

De wachtrij gaat specifiek over **schrijftijd-supervisie** — zodra een wijziging is goedgekeurd en geschreven, gedraagt deze zich als elke andere catalogusbewerking en volgt het normale audit/history-spoor.
