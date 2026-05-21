# Webhooks

Webhooks umożliwiają systemom zewnętrznym reagowanie na aktualizacje w czasie rzeczywistym w UnoPim. Konfigurując webhooki, można przesyłać dane do innych aplikacji (np. platform e-commerce, systemów ERP) natychmiast po wystąpieniu zmiany.

## Product Update Webhook

Webhook **Product Update Webhook** jest wyzwalany za każdym razem, gdy produkt zostanie utworzony, zaktualizowany lub usunięty.

## Konfigurowanie webhooków

1. Przejdź do **Configurations >> Webhooks**.
2. Kliknij zakładkę **General**, wypełnij szczegóły i zapisz.
3. Wprowadź następujące dane:
    - W General: **Active Webhook** — włącz lub wyłącz webhook.

    - W Ustawieniach: **Webhook URL** — wprowadź adres URL endpointu, na który zostanie wysłany payload webhooka.

![Konfiguracja webhooka](/assets/1.0/images/configuration/webhooks.png)

4. Kliknij zakładkę **Logs**, aby wyświetlić logi dostarczenia webhooków.
   Zakładka Logs wyświetla historię dostarczania webhooków, w tym datę, SKU, odbiorcę i status, co pomaga monitorować sukcesy, diagnozować awarie oraz weryfikować poprawność wysłanych zdarzeń dzięki przeszukiwalnym, szczegółowym rekordom.

![Konfiguracja webhooka](/assets/1.0/images/configuration/webhooks-logs.png)

## Format danych

System wysyła żądanie POST z payloadem JSON zawierającym zaktualizowane dane produktu. Przykładowy payload:

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
