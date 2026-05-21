# Webhooks

Webhooks stellen externe systemen in staat om te reageren op realtime updates binnen UnoPim. Door webhooks te configureren, kunt u gegevens naar andere applicaties pushen (bijv. E-commerce-platforms, ERP's) zodra er een wijziging plaatsvindt.

## Product Update Webhook

De **Product Update Webhook** wordt geactiveerd wanneer een product wordt aangemaakt, bijgewerkt of verwijderd.

## Webhooks configureren

1. Ga naar **Configurations >> Webhooks**.
2. Klik op het tabblad **General**, vul de details in en sla op.
3. Voer de volgende details in:
    - In General: **Active Webhook**  Schakel de webhook in of uit.

    - In Settings: **Webhook URL** Voer de endpoint-URL in waar de webhook-payload naartoe wordt verzonden.

![Webhook Configuration](/assets/1.0/images/configuration/webhooks.png)

4. Klik op het tabblad **Logs** om de webhook-leveringslogs te bekijken.
   Het tabblad Logs toont de webhook-leveringsgeschiedenis, inclusief datum, SKU, ontvanger en status, waarmee u successen kunt monitoren, fouten kunt oplossen en verifiëren dat gebeurtenissen correct zijn verzonden, met doorzoekbare gedetailleerde records beschikbaar.

![Webhook Configuration](/assets/1.0/images/configuration/webhooks-logs.png)

## Data-indeling

Het systeem verstuurt een POST-verzoek met een JSON-payload met de bijgewerkte productgegevens. Voorbeeld-payload:

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
