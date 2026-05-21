# Webhooks

Met Webhooks in [UnoPim](https://unopim.com/) kunt u realtime productupdate-notificaties naar een externe URL pushen wanneer productgegevens wijzigen. In plaats van de API te pollen, ontvangen uw verbonden systemen (e-commerce-storefronts, ERP's, marktplaatsen) een HTTP-verzoek op het moment dat een product wordt aangemaakt, bijgewerkt of verwijderd.

De Webhook-instellingenpagina bevindt zich op **Configuratie → Webhooks** in de admin-zijbalk.

::: tip Asynchrone dispatch
Webhook-leveringen draaien nu op de achtergrond als een wachtrij-**`SendProductWebhook`**-job. Bij productaanmaak en -update verzendt de `Product`-listener de job naar de **`webhooks`**-wachtrij (`->onQueue('webhooks')`). Admin-opslagacties keren onmiddellijk terug — een traag ontvangend endpoint kan de UI niet langer blokkeren. Webhook-logvermeldingen worden nog steeds vastgelegd zodra de job is voltooid; de kolom `webhook_logs.user_id` is nu nullable om systeem-verzonden leveringen te ondersteunen.
:::

## De queue worker draaien

Omdat webhook-leveringen op de **`webhooks`**-wachtrij staan, zal een gewone `php artisan queue:work` deze **niet** legen — u moet `webhooks` opnemen in de `--queue`-lijst. De meeste UnoPim-installaties draaien één worker die uit elke wachtrij trekt die het platform gebruikt:

```sh
php artisan queue:work --queue=webhooks,system,default,completeness
```

| Queue | Gebruikt door |
|---|---|
| **`webhooks`** | `SendProductWebhook`-job — productaanmaak/-update-notificaties. |
| **`system`** | Systeemniveau-jobs zoals vertaalwachtrijen en indexering. |
| **`default`** | Laravel's standaard-wachtrij — alles wat zonder expliciete wachtrij wordt verzonden. |
| **`completeness`** | `BulkProductCompletenessJob` en opnieuw berekenen van productvolledigheid per product. |

::: warning
Als u `php artisan queue:work` uitvoert zonder `--queue=webhooks,...`, zullen webhook-leveringen voor eeuwig in de wachtrij blijven staan en lijkt het tabblad **Logs** leeg, ook al lijken admin-opslagacties succesvol. Neem `webhooks` altijd op in de wachtrijlijst (of draai een speciale worker alleen voor `webhooks`).
:::

::: tip Supervisor / systemd
Laat dit commando in productie bewaken door Supervisor of systemd zodat de worker automatisch herstart bij falen. Voer `php artisan queue:restart` uit na elke deploy zodat workers uw nieuwste code oppakken.
:::

## Retry-beleid

Als uw ontvangende endpoint uit de lucht is of een fout retourneert, geeft UnoPim het **niet** op na de eerste poging. De `SendProductWebhook`-job heeft een ingebouwd retry-beleid:

| Instelling | Waarde | Wat het betekent |
|---|---|---|
| **Tries** | `3` | UnoPim probeert elke webhook tot **drie keer** voordat het als mislukt wordt gemarkeerd. |
| **Backoff** | `30 seconden` | Na een mislukte poging wacht UnoPim **30 seconden** voordat het opnieuw probeert. |

Dus in het slechtste geval kan één productopslag tot **drie** leveringspogingen produceren, verspreid over ongeveer een minuut. Elke poging registreert een rij in het tabblad **Logs** zodat u precies kunt zien wat er is gebeurd — succes bij poging 1 is één logrij, twee fouten plus een succes bij poging 3 is drie logrijen.

::: tip Maak uw endpoint idempotent
Omdat dezelfde payload meer dan eens kan aankomen (bijv. poging #1 raakte time-out maar slaagde aan de server-side), bouw uw ontvangende endpoint zo dat het verwerken van **dezelfde gebeurtenis twee keer hetzelfde resultaat oplevert**. Een veelvoorkomend patroon is dedupen op het veld `event_id` van de inkomende JSON.
:::

::: warning Worker moet draaien voor retries
De retry-logica wordt alleen geactiveerd wanneer een queue worker actief uit de `webhooks`-wachtrij trekt. Als u de worker stopt, pauzeren retries totdat u deze opnieuw start — ze verlopen niet.
:::

## General-tabblad

Het tabblad **General** is waar u de webhook inschakelt en de bestemmings-URL configureert. Het gebruikt een twee-paneel-lay-out.

<ImagePopup src="/assets/2.1/images/settings/webhook-settings.png" alt="Webhook-instellingen" />

### De Webhook Inschakelen en de URL Instellen

**Stap 1:** Navigeer naar **Configuratie → Webhooks** in de admin-zijbalk. Het tabblad **General** is standaard geselecteerd.

**Stap 2:** Schakel in het paneel **General** aan de linkerkant **Active Webhook** in om webhook-levering in te schakelen.

**Stap 3:** Voer in het paneel **Instellingen** aan de rechterkant uw **Webhook URL** in (bijv. `https://example.com/webhook`). Dit is het endpoint dat POST-verzoeken ontvangt wanneer productgegevens wijzigen.

**Stap 4:** Klik op de knop **Save** rechtsboven op de pagina om uw configuratie toe te passen.

::: tip
Gebruik tijdens de ontwikkeling een service zoals [webhook.site](https://webhook.site) om de payloads die UnoPim verzendt te inspecteren voordat u uw verwerkingslogica bouwt.
:::

## Logs-tabblad

Het tabblad **Logs** toont een record van elk webhook-verzoek dat UnoPim heeft verzonden. Gebruik het om leveringsstatus te monitoren en problemen op te lossen.

<ImagePopup src="/assets/2.1/images/settings/webhook-logs.png" alt="Webhook Logs" />

De log-datagrid bevat de volgende kolommen:

| Kolom | Beschrijving |
|---|---|
| **Id** | Unieke identifier voor de log-vermelding |
| **Date/Time** | Wanneer het webhook-verzoek is verzonden |
| **SKU** | De product-SKU die de webhook heeft geactiveerd |
| **User** | De admin-gebruiker wiens actie de wijziging heeft geactiveerd |
| **Status** | De HTTP-responsstatuscode die door uw endpoint is geretourneerd |
| **Actions** | Bekijk details van de individuele log-vermelding |

U kunt de **zoekbalk** gebruiken om te zoeken op code, de knop **Filter** om resultaten te beperken en de **paginering**-besturingselementen om door vermeldingen te bladeren.

::: tip
Als u niet-200-statuscodes in de logs ziet, controleer dan of uw endpoint bereikbaar is, een 200 OK-antwoord retourneert en de inkomende JSON-payload correct kan verwerken.
:::

## History-tabblad

Het tabblad **History** volgt elke wijziging die in de webhook-configuratie zelf is aangebracht. Gebruik het om te auditen wanneer instellingen werden gewijzigd en door wie.

<ImagePopup src="/assets/2.1/images/settings/webhook-history.png" alt="Webhook History" />

De history-datagrid bevat de volgende kolommen:

| Kolom | Beschrijving |
|---|---|
| **Date/Time** | Wanneer de configuratiewijziging is aangebracht |
| **Version** | Het versienummer van de configuratiemomentopname |
| **User** | De admin-gebruiker die de wijziging heeft aangebracht |
| **Actions** | Klik op het oog-icoon om de volledige details te zien van wat er is gewijzigd |

Dit is nuttig voor het volgen wanneer de webhook-URL is bijgewerkt, wanneer de webhook is in- of uitgeschakeld en welke gebruiker de wijziging heeft aangebracht.

## Quick Setup-samenvatting

1. Ga naar **Configuratie → Webhooks**.
2. Schakel op het tabblad **General** **Active Webhook** in.
3. Voer uw **Webhook URL** in het Instellingen-paneel in.
4. Klik op **Save**.
5. Schakel naar het tabblad **Logs** om uitgaande webhook-leveringen te monitoren en succesvolle antwoorden te verifiëren.
6. Schakel naar het tabblad **History** om eventuele eerdere configuratiewijzigingen te bekijken.

::: tip
Als uw ontvangende endpoint tijdelijk uit de lucht is, schakel dan de Active Webhook uit om leveringen te pauzeren. Uw configuratie blijft behouden en u kunt deze op elk gewenst moment opnieuw inschakelen zonder de URL opnieuw in te voeren.
:::
