# Importeren

Bulk importeren is een functie waarmee gebruikers grote hoeveelheden gegevens snel en efficiënt in een systeem kunnen importeren. Het vereenvoudigt het proces en bespaart tijd door niet elk stukje informatie één voor één toe te hoeven voegen.

De functie werkt anders voor elk systeem en heeft een breed scala aan use cases in vele industrieën, waaronder [UnoPim](https://unopim.com/).

### Stappen om Bulk Importeren toe te voegen in UnoPim

**Stap 1:** Ga naar het Admin-paneel van UnoPim en klik op **Gegevensoverdracht → Importeren** in de zijbalk, klik vervolgens op de knop **Import aanmaken**.

 <ImagePopup src="/assets/2.1/images/data-transfer/import-listing.png" alt="Importlijst" />

**Stap 2:** Voeg onder algemene configuraties de onderstaande velden toe:

1) **Code -** Voer de code van uw Import-proces in.

2) **Type -** Selecteer het type, dus (Products, Categories) dat u wilt importeren.

3) **File / Images –** een gecombineerd paneel dat zowel het gegevensbestand als alle productafbeeldingen dekt waarnaar het bestand verwijst:
   - **File \*** – sleep een **CSV / XLSX / XLS**-bestand naar het uploadgebied (*"Click to upload or drag and drop"*) of klik om te bladeren. Toegestane bestandstypen worden onder het label weergegeven.
   - **Download {Type} Sample CSV** – link die het voorbeeldbestand downloadt voor het Type dat u hebt geselecteerd (bijv. *"Download Categories Sample CSV"* wanneer Type Categories is). Gebruik het om de verwachte kolom-lay-out te bevestigen voordat u uw eigen bestand uploadt.
   - **Images → Path** – het tweedelige pad dat UnoPim gebruikt om productafbeeldingen te lokaliseren:
     - De prefix is vergrendeld op `storage/app/public/`.
     - De bewerkbare suffix is standaard iets als `import-images/my-products`.
     - Klik op **Upload Images to set Path** om een afbeeldingenmap te uploaden; UnoPim slaat deze op onder de prefix en vult automatisch de suffix voor u in.
   - Helper-tekst onder het veld: *"Place images in `storage/app/public/`. For images at `storage/app/public/import-images`, include `import-images/` in the path and use only the file name in the import file."*

4) **Action –** Selecteer Create/Update of Delete in het Settings-paneel om te bepalen of overeenkomende rijen worden geüpsert of verwijderd.

5) **Validation Strategy –** Kies **Skip Errors** of **Stop on Errors** om te beslissen hoe de importer reageert wanneer een rij de validatie niet doorstaat.

6) **Allowed Errors –** Maximum aantal fouten op rijniveau dat de import tolereert voordat deze stopt. Standaard: **`10`**.

7) **Field Separator –** Het teken dat kolommen in het CSV-bestand scheidt. Standaard: **`;`** (puntkomma). Alleen gebruikt voor CSV-bestanden.

Klik nu op de knop **Import opslaan**.  

 <ImagePopup src="/assets/2.1/images/data-transfer/create-import-form.png" alt="Formulier import aanmaken" />

Het formulier voor het aanmaken van een import heeft een lay-out met twee panelen:
- **General-paneel (links)** — Code, Type (Products/Categories), plus een gecombineerd **File / Images**-blok met het bestand-uploadgebied, de link *Download {Type} Sample CSV* en het **Images → Path**-veld met de bijbehorende *Upload Images to set Path*-knop.
- **Settings-paneel (rechts)** — Action (Create/Update), Validation Strategy (Stop on Errors / Skip Errors), Allowed Errors (standaard `10`), Field Separator (standaard `;`).

### Drag-and-Drop bestand uploaden

UnoPim v2.0 ondersteunt **Drag-and-Drop bestand uploaden** voor importbestanden. Het uploadgebied toont **"Click to upload or drag and drop"** met ondersteunde bestandstypen (CSV, XLSX, XLS). U kunt een bestand direct vanuit uw bestandsbeheerder naar het gestippelde uploadgebied slepen.

### Dynamische import-job-filters

Import-jobs ondersteunen **dynamische filters** waarmee u geavanceerde filtervoorwaarden voor uw importgegevens kunt configureren. Dit helpt u precies te bepalen welke records worden geïmporteerd op basis van specifieke criteria.

**Stap 3:** Klik in de importlijst op het **Importeren**-actie-icoon (play-icoon) op de rij van de import die u wilt uitvoeren. Dit opent de uitvoeringspagina, die een samenvatting toont van de importconfiguratie:

- **Import Profile** — De import-code
- **File Path** — De locatie van het geüploade bestand
- **Action Mode** — Create/Update of Delete

Klik op de knop **Nu importeren** om met verwerken te beginnen. UnoPim zet de job in de wachtrij en stuurt u door naar de **Taakvolger**-detailweergave voor die job.

## Importeren/Exporteren Tracker

**Stap 4:** De Taakvolger-detailpagina toont de stap-pipeline in realtime. Als validatie fouten vangt, toont de pagina deze met rijnummers en het exacte veld dat is mislukt, plus een knop **Volledig rapport downloaden**:

 <ImagePopup src="/assets/2.1/images/data-transfer/import-progress.png" alt="Importeren-detailpagina — validatiefouten" />

De tracker toont een **stap-pipeline** met visuele voortgangsindicatoren:

| Stap | Beschrijving |
|------|-------------|
| **Queued** | Job staat in de wachtrij om te worden verwerkt |
| **Validating** | Bestand wordt gevalideerd tegen importregels |
| **Importing** | Records worden in de database aangemaakt/bijgewerkt |
| **Indexing** | Elasticsearch-indexen worden bijgewerkt |
| **Complete** | Import succesvol voltooid |

Elke stap toont een groen vinkje wanneer voltooid. Onder de pipeline kunt u zien:
- **Succes-/foutmelding** — Of de job is voltooid of mislukt, met details
- **Records Created / Updated / Deleted** — Exacte tellingen van wat er is gewijzigd
- **Total Duration** — Hoe lang de import duurde
- **Download log** — Download het volledige importlogbestand
- **Foutdetails** — Als validatie faalt, ziet u de specifieke fouten (bijv. "Required columns not found: code")

### Pauzeren, Hervatten en Annuleren-besturingselementen

Tijdens een actieve import verschijnen **jobbesturingsknoppen** in de tracker:

- **Pause** — Stop een lopende import tijdelijk. De job-staat blijft behouden en kan later worden hervat.
- **Resume** — Ga verder met een gepauzeerde import vanaf waar deze was gebleven.
- **Cancel** — Stop een import volledig. Geannuleerde jobs kunnen niet worden hervat.

::: tip
De pauze- en hervat-functie is vooral nuttig voor grote imports. U kunt een job pauzeren tijdens piekuren en hervatten tijdens daluren.
:::

U kunt ook het onderstaande commando uitvoeren in de root van uw UnoPim om de importwachtrij te verwerken:

```bash
php artisan queue:listen
```

Door de bovenstaande stappen kunt u eenvoudig Gegevens importeren aanmaken in UnoPim.
