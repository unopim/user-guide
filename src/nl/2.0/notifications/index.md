# Notificaties

Notificaties in [UnoPim](https://unopim.com/) bieden een realtime, in-app waarschuwingssysteem dat beheerders op de hoogte houdt van belangrijke gebeurtenissen en achtergrondprocessen. Geïntroduceerd in **v0.2.0**, werkt het notificatiesysteem naast optionele e-mailnotificaties om ervoor te zorgen dat u nooit kritieke updates mist.

Of het nu gaat om het voltooien van een bulkimport, een mislukte exportjob of een productwijziging, notificaties helpen u op de hoogte te blijven van alles wat er in uw PIM gebeurt zonder dat u elk gedeelte handmatig hoeft te controleren.

### Toegang tot Notificaties

Om toegang te krijgen tot uw notificaties, klikt u op het **belicoon** in de bovenste navigatiebalk van het Admin-paneel. Dit opent het notificatiepaneel waar u alle recente waarschuwingen kunt bekijken.

 <ImagePopup src="/assets/2.0/images/notifications/notification-panel.png" alt="Notificatiepaneel" />

### Types Notificaties

UnoPim verstuurt notificaties voor verschillende systeemgebeurtenissen. Hieronder staan de belangrijkste categorieën:

**1) Importeren/Exporteren Job-statusupdates**

Wanneer u een bulkimport of -export uitvoert, stuurt UnoPim automatisch een notificatie wanneer de job is voltooid, mislukt of aandacht vereist. Dit stelt u in staat langdurige data-transfer-operaties te monitoren zonder op de job-trackerpagina te blijven.

- **Voltooid** — De import- of exportjob is succesvol voltooid.
- **Mislukt** — De job heeft fouten ondervonden en kon niet worden voltooid.
- **Voltooid met fouten** — De job is voltooid, maar sommige records werden overgeslagen vanwege validatieproblemen.

**2) Productwijzigingen**

Notificaties kunnen u waarschuwen wanneer significante productgegevenswijzigingen plaatsvinden, zoals bulkupdates of wijzigingen via de API. Dit is nuttig wanneer meerdere teamleden tegelijkertijd aan de productcatalogus werken.

**3) Systeem-notificaties**

Algemene systeemniveau-waarschuwingen, zoals geplande onderhoudsherinneringen of belangrijke configuratiewijzigingen, worden ook via het notificatiepaneel afgeleverd.

### Functies van het Notificatiepaneel

Klik op het **belicoon** rechtsboven in de header om het paneel te openen. Een **groene stip** op de bel geeft ongelezen notificaties aan.

<ImagePopup src="/assets/2.0/images/notifications/notification-panel.png" alt="Notificatiepaneel" />

Het paneel toont recente notificaties. Elke vermelding toont:

- **Title** — jobtype + opeenvolgend nummer, bijv. `Import #15`, `Export #1`. Het nummer komt overeen met de kolom **ID** in de [Taakvolger](../data-transfer/job-tracker.md), zodat u kunt doorklikken en de exacte run kunt vinden.
- **Body** — de profielcode + terminale staat, bijv. *"Import 'Test' completed"* — nuttig om meerdere runs van hetzelfde profiel uit elkaar te houden.
- **Relatieve tijdstempel** — bijv. *"4 days ago"*.

Twee acties bevinden zich onderaan het paneel:

- **View All** — opent de volledige notificatiespagina, waar u individuele vermeldingen kunt doorbladeren, filteren en beheren.
- **Mark as Read** — een enkele bulkactie die de ongelezen-staat wist voor elke notificatie die in het paneel zichtbaar is.

::: tip
Besturingselementen per notificatie *Mark as Read / Unread* en *Clear Notifications* bevinden zich nu op de volledige notificatiespagina (via **View All**). Het paneel zelf behoudt alleen de bulk *Mark as Read* en *View All*-acties zodat het scanbaar blijft.
:::

### E-mailnotificaties

Naast in-app notificaties ondersteunt UnoPim e-mailnotificaties voor kritieke gebeurtenissen. Indien ingeschakeld, verzendt het systeem een e-mail naar het geregistreerde e-mailadres van de beheerder naast de in-app notificatie.

**Hoe E-mailnotificaties Werken**

E-mailnotificaties worden automatisch verzonden voor belangrijke gebeurtenissen zoals voltooiing en falen van import-/exportjobs. Dit zorgt ervoor dat zelfs als u niet actief bent ingelogd in het Admin-paneel, u nog steeds tijdige updates ontvangt.

**Configuratie**

E-mailbezorging wordt geconfigureerd op infrastructuurniveau via uw UnoPim `.env`-bestand — stel `MAIL_MAILER`, `MAIL_HOST`, `MAIL_USERNAME`, `MAIL_PASSWORD` en `MAIL_FROM_ADDRESS` in om overeen te komen met uw mailprovider (SMTP, Mailgun, Postmark, enz.). UnoPim gebruikt standaard Laravel mail-drivers en pakt de instellingen automatisch op bij het opstarten van de applicatie.

::: tip
Test uw mailconfiguratie end-to-end voordat u op notificatie-e-mails vertrouwt. Activeer een low-stakes-gebeurtenis (bijv. een kleine import) en bevestig dat de e-mail aankomt; als dat niet zo is, controleer dan uw Laravel-log (`storage/logs/laravel.log`) op mailer-fouten.
:::

Door zowel in-app als e-mailnotificaties samen te gebruiken, kunt u volledige zichtbaarheid garanderen in alle belangrijke gebeurtenissen die binnen uw UnoPim-installatie plaatsvinden.
