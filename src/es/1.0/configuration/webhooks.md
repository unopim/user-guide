# Webhooks

Los Webhooks permiten que sistemas externos reaccionen a las actualizaciones en tiempo real dentro de UnoPim. Al configurar webhooks, puede enviar datos a otras aplicaciones (p. ej., plataformas de comercio electrónico, ERPs) tan pronto como ocurra un cambio.

## Webhook de Actualización de Producto

El **Product Update Webhook** se activa cuando un producto se crea, actualiza o elimina.

## Configuración de Webhooks

1. Vaya a **Configurations >> Webhooks**.
2. Haga clic en la pestaña **General**, rellene los detalles y guarde.
3. Introduzca los siguientes detalles:
    - En General: **Active Webhook** habilita o deshabilita el webhook.

    - En Settings: **Webhook URL** introduzca la URL del endpoint donde se enviará la carga útil del webhook.

![Webhook Configuration](/assets/1.0/images/configuration/webhooks.png)

4. Haga clic en la pestaña **Logs** para ver los logs de entrega del webhook.
   La pestaña Logs muestra el historial de entrega del webhook, incluyendo fecha, SKU, destinatario y estado, ayudándole a monitorizar éxitos, solucionar fallos y verificar que los eventos se enviaron correctamente con registros detallados buscables disponibles.

![Webhook Configuration](/assets/1.0/images/configuration/webhooks-logs.png)

## Formato de Datos

El sistema envía una solicitud POST con una carga útil JSON que contiene los datos actualizados del producto. Carga útil de ejemplo:

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
