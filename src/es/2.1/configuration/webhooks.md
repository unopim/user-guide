# Webhooks

Los Webhooks en [UnoPim](https://unopim.com/) le permiten enviar notificaciones de actualización de producto en tiempo real a una URL externa siempre que los datos del producto cambien. En lugar de hacer polling a la API, sus sistemas conectados (tiendas de comercio electrónico, ERPs, marketplaces) reciben una solicitud HTTP en el momento en que un producto se crea, actualiza o elimina.

La página Webhook Settings se encuentra en **Configuration → Webhooks** en la barra lateral de administración.

::: tip Despacho asíncrono
Las entregas de webhook ahora se ejecutan en segundo plano como un trabajo en cola **`SendProductWebhook`**. En la creación y actualización del producto, el listener `Product` despacha el trabajo a la cola **`webhooks`** (`->onQueue('webhooks')`). Las acciones de guardado del administrador retornan inmediatamente — un endpoint receptor lento ya no puede bloquear la UI. Las entradas de log del webhook aún se registran una vez que el trabajo se completa; la columna `webhook_logs.user_id` ahora es nullable para soportar las entregas despachadas por el sistema.
:::

## Ejecutar el queue worker

Como las entregas de webhook se ponen en cola en la cola **`webhooks`**, un simple `php artisan queue:work` **no** las drenará — tiene que incluir `webhooks` en la lista `--queue`. La mayoría de las instalaciones de UnoPim ejecutan un único worker que extrae de cada cola que la plataforma usa:

```sh
php artisan queue:work --queue=webhooks,system,default,completeness
```

| Cola | Usada por |
|---|---|
| **`webhooks`** | Trabajo `SendProductWebhook` — notificaciones de creación/actualización de producto. |
| **`system`** | Trabajos a nivel de sistema como las colas de traducción y la indexación. |
| **`default`** | La cola por defecto de Laravel — cualquier cosa despachada sin una cola explícita. |
| **`completeness`** | `BulkProductCompletenessJob` y el recálculo de completitud por producto. |

::: warning
Si ejecuta `php artisan queue:work` sin `--queue=webhooks,...`, las entregas de webhook permanecerán en la cola para siempre y la pestaña **Logs** aparecerá vacía aunque los guardados del administrador parezcan exitosos. Incluya siempre `webhooks` en la lista de colas (o ejecute un worker dedicado solo para `webhooks`).
:::

::: tip Supervisor / systemd
En producción, supervise este comando con Supervisor o systemd para que el worker se reinicie automáticamente en caso de fallo. Ejecute `php artisan queue:restart` después de cada despliegue para que los workers recojan su último código.
:::

## Política de reintentos

Si su endpoint receptor está caído o devuelve un error, UnoPim **no** se rinde después del primer intento. El trabajo `SendProductWebhook` tiene una política de reintentos incorporada:

| Ajuste | Valor | Qué significa |
|---|---|---|
| **Tries** | `3` | UnoPim intenta cada webhook hasta **tres veces** antes de marcarlo como fallido. |
| **Backoff** | `30 seconds` | Tras un intento fallido, UnoPim espera **30 segundos** antes de reintentar. |

Así, en el peor caso, una sola operación de guardado de producto puede producir hasta **tres** intentos de entrega repartidos en aproximadamente un minuto. Cada intento registra una fila en la pestaña **Logs** para que pueda ver exactamente lo que ocurrió — éxito en el intento 1 es una fila de log, dos fallos más un éxito en el intento 3 son tres filas de log.

::: tip Haga que su endpoint sea idempotente
Como la misma carga útil puede llegar más de una vez (p. ej., el intento #1 expiró pero realmente tuvo éxito del lado del servidor), construya su endpoint receptor de modo que procesar el **mismo evento dos veces produzca el mismo resultado**. Un patrón común es deduplicar por el campo `event_id` del JSON entrante.
:::

::: warning El worker debe estar ejecutándose para los reintentos
La lógica de reintento solo se dispara cuando un queue worker está activamente extrayendo de la cola `webhooks`. Si detiene el worker, los reintentos se pausan hasta que lo reinicie — no expiran.
:::

## Pestaña General

La pestaña **General** es donde habilita el webhook y configura la URL de destino. Utiliza un diseño de dos paneles.

<ImagePopup src="/assets/2.1/images/settings/webhook-settings.png" alt="Webhook Settings" />

### Habilitar el Webhook y Establecer la URL

**Paso 1:** Navegue a **Configuration → Webhooks** en la barra lateral de administración. La pestaña **General** está seleccionada por defecto.

**Paso 2:** En el panel **General** de la izquierda, active **Active Webhook** para habilitar la entrega de webhooks.

**Paso 3:** En el panel **Ajustes** de la derecha, introduzca su **Webhook URL** (p. ej., `https://example.com/webhook`). Este es el endpoint que recibirá solicitudes POST cada vez que cambien los datos del producto.

**Paso 4:** Haga clic en el botón **Save** en la esquina superior derecha de la página para aplicar su configuración.

::: tip
Use un servicio como [webhook.site](https://webhook.site) durante el desarrollo para inspeccionar las cargas útiles que UnoPim envía antes de construir su lógica de procesamiento.
:::

## Pestaña Logs

La pestaña **Logs** muestra un registro de cada solicitud de webhook que UnoPim ha enviado. Úsela para monitorizar el estado de entrega y solucionar fallos.

<ImagePopup src="/assets/2.1/images/settings/webhook-logs.png" alt="Webhook Logs" />

El datagrid de logs incluye las siguientes columnas:

| Columna | Descripción |
|---|---|
| **Id** | Identificador único para la entrada de log |
| **Date/Time** | Cuándo se envió la solicitud de webhook |
| **SKU** | El SKU del producto que activó el webhook |
| **User** | El usuario administrador cuya acción activó el cambio |
| **Status** | El código de estado de respuesta HTTP devuelto por su endpoint |
| **Actions** | Vea los detalles de la entrada de log individual |

Puede usar la **barra de búsqueda** para buscar por código, el botón **Filter** para acotar los resultados y los controles de **paginación** para navegar por las entradas.

::: tip
Si ve códigos de estado distintos de 200 en los logs, compruebe que su endpoint es accesible, devuelve una respuesta 200 OK y puede manejar correctamente la carga útil JSON entrante.
:::

## Pestaña History

La pestaña **History** rastrea cada cambio realizado en la configuración del webhook en sí. Úsela para auditar cuándo se modificaron los ajustes y por quién.

<ImagePopup src="/assets/2.1/images/settings/webhook-history.png" alt="Webhook History" />

El datagrid de historial incluye las siguientes columnas:

| Columna | Descripción |
|---|---|
| **Date/Time** | Cuándo se realizó el cambio de configuración |
| **Version** | El número de versión de la instantánea de configuración |
| **User** | El usuario administrador que realizó el cambio |
| **Actions** | Haga clic en el icono de ojo para ver los detalles completos de lo que cambió |

Esto es útil para rastrear cuándo se actualizó la URL del webhook, cuándo se habilitó o deshabilitó el webhook y qué usuario realizó el cambio.

## Resumen de Configuración Rápida

1. Vaya a **Configuration → Webhooks**.
2. En la pestaña **General**, active **Active Webhook**.
3. Introduzca su **Webhook URL** en el panel Settings.
4. Haga clic en **Save**.
5. Cambie a la pestaña **Logs** para monitorizar las entregas salientes de webhook y verificar las respuestas exitosas.
6. Cambie a la pestaña **History** para revisar cualquier cambio de configuración pasado.

::: tip
Si su endpoint receptor está temporalmente caído, desactive Active Webhook para pausar las entregas. Su configuración se conserva y puede volver a habilitarla en cualquier momento sin volver a introducir la URL.
:::
