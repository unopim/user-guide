# Webhooks

Los Webhooks en [UnoPim](https://unopim.com/) le permiten enviar notificaciones de actualización de producto en tiempo real a una URL externa siempre que los datos del producto cambien. En lugar de hacer polling a la API, sus sistemas conectados (tiendas de comercio electrónico, ERPs, marketplaces) reciben una solicitud HTTP en el momento en que un producto se crea, actualiza o elimina.

La página Webhook Settings se encuentra en **Configuration → Webhooks** en la barra lateral de administración.

## Pestaña General

La pestaña **General** es donde habilita el webhook y configura la URL de destino. Utiliza un diseño de dos paneles.

<ImagePopup src="/assets/2.0/images/settings/webhook-settings.png" alt="Webhook Settings" />

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

<ImagePopup src="/assets/2.0/images/settings/webhook-logs.png" alt="Webhook Logs" />

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

<ImagePopup src="/assets/2.0/images/settings/webhook-history.png" alt="Webhook History" />

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
