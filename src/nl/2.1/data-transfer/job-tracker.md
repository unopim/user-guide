# Taakvolger

> **Zijbalk:** Gegevensoverdracht → **Taakvolger**
> **URL:** `/admin/data-transfer/job-tracker`

De **Taakvolger** is de centrale monitorpagina voor elke import- en exportjob die UnoPim uitvoert. Wanneer u op *Importeren* of *Exporteren* klikt vanuit een profiel, of een achtergrondjob ziet afgaan, is dit het scherm dat u laat zien wat er nu gebeurt, wat is voltooid en wat — indien iets — is misgegaan.

## Wat is de Taakvolger?

Eén realtime weergave van elke data-transfer-job in het systeem. In plaats van apart door import- en exportlijsten te zoeken, opent u één pagina en ziet u:

- **De status van elke job** — queued, processing, complete, failed, cancelled, paused.
- **Live voortgang** — huidige stap in de pipeline, telling van aangemaakte / bijgewerkte / verwijderde records tot nu toe.
- **Besturingselementen** — pauzeer, hervat of annuleer een lopende job.
- **Logs en artefacten** — download het joblog of het geëxporteerde bestand zodra de run is voltooid.

<ImagePopup src="/assets/2.1/images/data-transfer/tracker.png" alt="Taakvolger" />

## Hoe werkt het?

Elke import en export draait als een wachtrij-job. Op het moment dat u er een start, doet UnoPim:

1. Maakt een **job-record** met een unieke ID, status `Queued` en de configuratie die is ingediend.
2. Wanneer de queue worker deze oppakt, beweegt de job door een vaste **stap-pipeline** — elke stap werkt het record bij.
3. De Taakvolger-pagina abonneert zich op die updates en hertekent de voortgangs-UI live (geen verversing nodig).
4. Wanneer de job in een terminale staat belandt (`Complete`, `Failed`, `Cancelled`), worden het logbestand en eventuele geproduceerde artefacten downloadbaar vanuit de tracker.

Omdat elke stap naar hetzelfde record schrijft, kunt u midden in de run wegnavigeren van de tracker en later terugkomen — de pagina herstelt de huidige staat vanuit de database.

## Job-statussen

Elke rij in de tracker toont de huidige status van de job als een gekleurde chip:

| Status | Betekenis |
|---|---|
| **Queued** | Job staat in de wachtrij, wacht op een worker. |
| **Validating** / **Validated** | Bestand wordt gevalideerd, of validatie is succesvol voltooid en de import is klaar om te draaien. |
| **Processing** | Een worker heeft deze opgepakt en de pipeline vordert. |
| **Paused** | U hebt deze tijdens de run gestopt; staat blijft behouden en kan worden hervat. |
| **Completed** | Alle stappen zijn succesvol voltooid. |
| **Failed** | Een stap heeft een fout gegeven; zie het log voor details. |
| **Cancelled** | U hebt deze permanent gestopt; kan niet worden hervat. |

## Tracker-lijst-kolommen

De tracker is een datagrid; één rij per job:

| Kolom | Beschrijving |
|---|---|
| **ID** | Automatisch oplopende job-ID. Komt overeen met het `#n`-suffix op notificaties (bijv. *Import #15*). |
| **Job** | De profielcode (bijv. `product_export`, `category_import`). |
| **Type** | Wat wordt overgedragen — `Products` of `Categories`. |
| **Job Type** | Hoe de job is geactiveerd — `import`, `export` of `system` (gepland, bulk, of geïnitieerd door de AI Agent). |
| **Status** | Huidige staat (zie tabel hierboven). |
| **User** | De admin die de job heeft gestart. |
| **Started at** / **Completed at** | Tijdstempels. |
| **Actions** | **Oog-icoon** — opent de job-detailpagina waar de stap-pipeline, live voortgang en Pause / Resume / Cancel-besturingselementen worden getoond. |

<ImagePopup src="/assets/2.1/images/data-transfer/tracker.png" alt="Taakvolger-lijst" />

## Systeemjobs en door AI-Agent geactiveerde jobs

Niet elke vermelding in de tracker komt van een handmatige import / export. Jobs vallen in drie categorieën, getoond in de kolom **Job Type**:

| Job Type | Waar het vandaan komt |
|---|---|
| `import` | Een handmatige run vanuit **Gegevensoverdracht → Importeren**. |
| `export` | Een handmatige run vanuit **Gegevensoverdracht → Exporteren**, of een **Quick Export** vanuit de Producten-lijst. |
| `system` | Een achtergrondjob — bulkproduct-updates, geplande catalogus-kwaliteitsscans, auto-enrichment-runs of exports die de AI Agent namens u heeft geproduceerd. Door AI-Agent geïnitieerde jobs verschijnen met namen zoals `ai-agent-export-…`. |

Alle drie delen dezelfde levenscyclus, statuschips, logs en Pause / Resume / Cancel-besturingselementen — het enige verschil is hoe ze zijn gestart.

::: tip
Als u een `system`-job ziet die u niet herkent, klik dan op het oog-icoon om de detailpagina te openen. De detailweergave toont de gebruiker die de keten heeft geactiveerd en, voor AI-Agent-jobs, het chatbericht dat het heeft geproduceerd.
:::

## Stap-pipelines (op de job-detailpagina)

Klik op het **oog-icoon** op een rij in de tracker om de job-detailpagina te openen. De detailpagina visualiseert de job als een horizontale stap-pipeline. De exacte stappen zijn afhankelijk van het job-type:

### Import-pipeline

| Stap | Beschrijving |
|------|-------------|
| **Queued** | Job wacht op een worker. |
| **Validating** | Bestand wordt gevalideerd tegen de importregels. |
| **Importing** | Records worden in de database aangemaakt / bijgewerkt / verwijderd. |
| **Indexing** | Elasticsearch-indexen worden bijgewerkt zodat producten doorzoekbaar zijn. |
| **Complete** | Import succesvol voltooid. |

<ImagePopup src="/assets/2.1/images/data-transfer/import-progress.png" alt="Import Progress" />

### Export-pipeline

| Stap | Beschrijving |
|------|-------------|
| **Queued** | Job wacht op een worker. |
| **Validating** | Exportconfiguratie wordt gevalideerd. |
| **Exporting** | Records worden naar het uitvoerbestand geschreven. |
| **Complete** | Export succesvol voltooid. |

<ImagePopup src="/assets/2.1/images/data-transfer/export-progress.png" alt="Export Progress" />

Elke voltooide stap wordt weergegeven met een groen vinkje. Een mislukte stap wordt rood weergegeven en de pipeline stopt daar — volgende stappen worden overgeslagen.

## Details die voor elke job worden getoond

Onder de pipeline toont de tracker:

- **Succes- / foutmelding** — *"Job completed successfully"* plus totale duur, of de specifieke fout die de run heeft gestopt (bijv. *"Required columns not found: code"*).
- **Records Created / Updated / Deleted** — exacte tellingen van wat er is gewijzigd.
- **Total Duration** — hoe lang de job duurde van wachtrij tot terminale staat.
- **Download log** — volledige import/export-log voor offline-review.
- **Download Exported Files** *(alleen exports)* — de CSV/XLS/XLSX geproduceerd door de run.

## Besturingselementen

### Pauzeren

Tijdens een `Processing`-run, klik op **Pause** om de job tijdelijk te stoppen. UnoPim bevriest de job-staat bij de huidige batch — geen records gaan verloren, niets wordt teruggedraaid en de queue worker gaat verder met ander werk.

### Hervatten

Voor een `Paused`-job, klik op **Resume** om verder te gaan vanaf de volgende batch. De job pakt precies op waar het was gebleven — reeds verwerkte records worden niet opnieuw verwerkt.

### Annuleren

Klik op **Cancel** om een job permanent te stoppen. De job gaat naar de `Cancelled`-staat en kan niet worden hervat. Records die reeds door eerdere stappen zijn geschreven, worden **niet** teruggedraaid — als u ze ongedaan wilt maken, voer dan een opschoning-import uit.

::: tip
Pause is de juiste keuze tijdens piekuren op een grote job. Cancel is voor *"deze import had het verkeerde bestand"*-situaties — zodra u annuleert, begint u opnieuw vanaf de listing-pagina.
:::

## De Taakvolger openen

Drie veelvoorkomende ingangspunten:

1. **Vanuit de admin-zijbalk** — klik op **Gegevensoverdracht → Taakvolger**.
2. **Na het starten van een job** — de knop *Importeren* / *Exporteren* stuurt u direct door naar de tracker voor de job die u zojuist hebt gestart.
3. **Vanuit het Dashboard** — de **Gegevensoverdracht**-widget toont recente jobs en een link *"Alle jobs bekijken"* gaat naar de tracker.

## Hoe de tracker zich verhoudt tot imports en exports

| Pagina | Rol |
|---|---|
| **[Importeren](./import.md)** | Definieer een import-profiel (code, type, bestand, validatiestrategie, action mode). |
| **[Exporteren](./export.md)** | Definieer een export-profiel (code, type, bestandsformaat, media). |
| **Taakvolger** (deze pagina) | Monitor de runs die die profielen produceren — status, voortgang, logs, artefacten. |

Profielen zijn *herbruikbare configuraties*. Telkens wanneer u *Importeren* of *Exporteren* op een profiel raakt, wordt een nieuwe job aangemaakt en getoond in de Taakvolger.

## Achtergrondverwerking

Jobs draaien op de Laravel queue worker. Als u geen voortgang ziet van queued-jobs, zorg er dan voor dat er een worker draait:

```bash
php artisan queue:listen
```

Voor productie, voer de worker uit als een beheerde service (systemd, Supervisor, …) zodat deze actief blijft tijdens reboots.
