# Webhooks

Webhooks ermöglichen es externen Systemen, auf Echtzeit-Updates innerhalb von UnoPim zu reagieren. Durch die Konfiguration von Webhooks können Sie Daten an andere Anwendungen (z. B. E-Commerce-Plattformen, ERPs) senden, sobald eine Änderung auftritt.

## Produkt-Update-Webhook

Der **Produkt-Update-Webhook** wird ausgelöst, wann immer ein Produkt erstellt, aktualisiert oder gelöscht wird.

## Webhooks konfigurieren

1. Gehen Sie zu **Configurations >> Webhooks**.
2. Klicken Sie auf den Tab **General**, füllen Sie die Details aus und speichern Sie.
3. Geben Sie die folgenden Details ein:
    - Unter General: **Active Webhook** Aktiviert oder deaktiviert den Webhook.

    - Unter Settings: **Webhook URL** Geben Sie die Endpunkt-URL ein, an die der Webhook-Payload gesendet werden soll.

![Webhook-Konfiguration](/assets/1.0/images/configuration/webhooks.png)

4. Klicken Sie auf den Tab **Logs**, um die Webhook-Zustellungslogs anzuzeigen.
   Der Logs-Tab zeigt den Verlauf der Webhook-Zustellungen an, einschließlich Datum, SKU, Empfänger und Status, und hilft Ihnen, Erfolge zu überwachen, Fehler zu beheben und zu überprüfen, ob Ereignisse korrekt gesendet wurden, mit durchsuchbaren detaillierten Datensätzen.

![Webhook-Konfiguration](/assets/1.0/images/configuration/webhooks-logs.png)

## Datenformat

Das System sendet eine POST-Anfrage mit einem JSON-Payload, das die aktualisierten Produktdaten enthält. Beispiel-Payload:

```json
{
  "event": "product.updated",
  "timestamp": "2026-01-15 18:26:57",
  "user_timezone": "Asia/Kolkata",
  "data": [
    {
      "id": 1,
      "status": true,
      "sku": "sunglasses021",
      "type": "simple",
      "changes": {
        "added": [],
        "removed": [],
        "changed": {
          "common": {
            "name": {
              "old": "Sunglasses",
              "new": "Sunglasses Black"
            }
          },
          "locale_specific": {
            "en_US": {
              "colorlocalewise": {
                "old": "white",
                "new": "pink"
              }
            }
          }
        }
      }
    }
  ]
}
```
