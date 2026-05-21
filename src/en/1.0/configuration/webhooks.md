# Webhooks

Webhooks allow external systems to react to real-time updates within UnoPim. By configuring webhooks, you can push data to other applications (e.g., E-commerce platforms, ERPs) as soon as a change occurs.

## Product Update Webhook

The **Product Update Webhook** is triggered whenever a product is created, updated, or deleted.

## Configuring Webhooks

1. Go to **Configurations >> Webhooks**.
2. Click on **General** tab  Fill Details and save.
3. Enter the following details:
    - In General : **Active Webhook**  Enable or disable the webhook.

    - In Settings: **Webhook URL** Enter the endpoint URL where the webhook payload will be sent.

![Webhook Configuration](/assets/1.0/images/configuration/webhooks.png)

4. Click **Logs** tab to view the webhook delivery logs.
   The Logs tab displays webhook delivery history, including date, SKU, recipient, and status, helping you monitor successes, troubleshoot failures, and verify events were sent correctly with searchable detailed records available.

![Webhook Configuration](/assets/1.0/images/configuration/webhooks-logs.png)

## Data Format

The system sends a POST request with a JSON payload containing the updated product data Example payload:

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
