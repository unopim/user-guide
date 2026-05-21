# Webhooks

Met Webhooks in [UnoPim](https://unopim.com/) kunt u realtime productupdate-notificaties naar een externe URL pushen wanneer productgegevens wijzigen. In plaats van de API te pollen, ontvangen uw verbonden systemen (e-commerce-storefronts, ERP's, marktplaatsen) een HTTP-verzoek op het moment dat een product wordt aangemaakt, bijgewerkt of verwijderd.

De Webhook-instellingenpagina bevindt zich op **Configuratie → Webhooks** in de admin-zijbalk.

## General-tabblad

Het tabblad **General** is waar u de webhook inschakelt en de bestemmings-URL configureert. Het gebruikt een twee-paneel-lay-out.

<ImagePopup src="/assets/2.0/images/settings/webhook-settings.png" alt="Webhook-instellingen" />

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

<ImagePopup src="/assets/2.0/images/settings/webhook-logs.png" alt="Webhook Logs" />

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

<ImagePopup src="/assets/2.0/images/settings/webhook-history.png" alt="Webhook History" />

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
