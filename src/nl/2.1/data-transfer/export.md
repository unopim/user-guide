# Exporteren 

Het exporteren van gegevens om informatie in bestanden op te slaan is een gebruikelijke praktijk voor databeheer, -analyse en -deling. Dit omvat het overdragen van gegevens vanuit een bronsysteem naar een bestandsindeling die geschikt is voor opslag, toekomstig gebruik of delen met anderen. 

### Stappen om Bulk Exporteren toe te voegen in UnoPim

**Stap 1:** Ga naar het Admin-paneel van UnoPim en klik op **Gegevensoverdracht → Exporteren** in de zijbalk, klik vervolgens op de knop **Export aanmaken**.

 <ImagePopup src="/assets/2.1/images/data-transfer/export-listing.png" alt="Exportlijst" />

**Stap 2:** Voeg onder algemene configuraties de onderstaande velden toe.

1) **Code -** Voer de code van uw Export-proces in.

2) **Type -** Selecteer het type, dus (Products, Categories) dat u wilt exporteren.

3) **Filters -** Selecteer het bestandsformaat **(CSV, XLS, XLSX)** volgens uw vereisten uit de dropdown.

4) **With Media -** Schakel in of uit als u de exportgegevens met of zonder media nodig heeft. 

Klik nu op de knop **Export opslaan**. Het profiel wordt opgeslagen en u keert terug naar de Exporteren-lijst.

 <ImagePopup src="/assets/2.1/images/data-transfer/create-export-form.png" alt="Formulier export aanmaken" />

Het formulier voor het aanmaken van een export heeft een lay-out met twee panelen:
- **General-paneel (links)** — Code, Type (Products/Categories)
- **Filters-paneel (rechts)** — Bestandsformaat (CSV/XLS/XLSX-dropdown), With Media (toggle)

**Stap 3:** Klik in de exportlijst op het **Exporteren**-actie-icoon (play-icoon) op de rij die u wilt uitvoeren. Dit opent de uitvoeringspagina, die een samenvatting toont van de exportconfiguratie:

- **Export Profile** — De export-code
- **File Format** — CSV, XLS of XLSX
- **With Media** — Ja of Nee

Klik op de knop **Nu exporteren**. UnoPim zet de job in de wachtrij en stuurt u door naar de **Taakvolger**-detailweergave voor die job.

## Exporteren Tracker

**Stap 4:** De Taakvolger-detailpagina toont de stap-pipeline in realtime. Elke stap licht op met een groen vinkje wanneer deze is voltooid, en wanneer de job is voltooid, krijgt u een succes-banner plus recordtellingen en downloadlinks:

 <ImagePopup src="/assets/2.1/images/data-transfer/export-progress.png" alt="Exporteren-detailpagina — stap-pipeline" />

De tracker toont een **stap-pipeline** met visuele voortgangsindicatoren:

| Stap | Beschrijving |
|------|-------------|
| **Queued** | Job staat in de wachtrij om te worden verwerkt |
| **Validating** | Exportconfiguratie wordt gevalideerd |
| **Exporting** | Records worden naar het exportbestand geschreven |
| **Complete** | Export succesvol voltooid |

Elke stap toont een groen vinkje wanneer voltooid. Onder de pipeline kunt u zien:
- **Succesbericht** — "Job completed successfully" met de totale duur
- **Records Created / Updated / Deleted** — Exacte tellingen van geëxporteerde records
- **Total Duration** — Hoe lang de export duurde
- **Download log** — Download het volledige exportlogbestand
- **Download Exported Files**-knop — Klik om het gegenereerde bestand te downloaden

### Pauzeren, Hervatten en Annuleren-besturingselementen

Tijdens een actieve export verschijnen **jobbesturingsknoppen** in de tracker:

- **Pause** — Stop een lopende export tijdelijk. De job-staat blijft behouden.
- **Resume** — Ga verder met een gepauzeerde export vanaf waar deze was gebleven.
- **Cancel** — Stop een export volledig. Geannuleerde jobs kunnen niet worden hervat.

::: tip
De pauze- en hervat-functie is vooral nuttig voor grote exports. U kunt een job pauzeren tijdens piekuren en hervatten tijdens daluren.
:::

## Quick Product Export

UnoPim ondersteunt **dynamisch beheer van quick product export-jobs**. U kunt geselecteerde producten snel exporteren direct vanuit de productlijst:

1. Navigeer naar **Catalogus → Producten**
2. Selecteer de producten die u wilt exporteren (of exporteer alle)
3. Klik op de knop **Quick Export** rechtsboven
4. Kies de indeling (CSV, XLS, XLSX)
5. De export wordt verwerkt en gedownload

::: tip
Voor grote exports gebruikt het systeem een **geoptimaliseerde export-pipeline** met eager loading en verhoogde batch-grootte (tot 200) voor betere prestaties. Categorie-exports zijn geoptimaliseerd om geheugenoverbelasting te voorkomen.
:::

Door de bovenstaande stappen kunt u eenvoudig Gegevens exporteren aanmaken in UnoPim.
