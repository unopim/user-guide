# Notificaciones

Las notificaciones en [UnoPim](https://unopim.com/) proporcionan un sistema de alertas en tiempo real dentro de la aplicación que mantiene informados a los administradores sobre eventos importantes y procesos en segundo plano. Introducido en **v0.2.0**, el sistema de notificaciones funciona junto con notificaciones de correo electrónico opcionales para garantizar que nunca pierda actualizaciones críticas.

Ya sea la finalización de una importación masiva, un trabajo de exportación fallido o un cambio de producto, las notificaciones le ayudan a mantenerse al tanto de todo lo que ocurre en su PIM sin necesidad de comprobar constantemente cada sección manualmente.

### Acceso a las Notificaciones

Para acceder a sus notificaciones, haga clic en el **Icono de Campana** en la barra de navegación superior del panel de Administración. Esto abre el panel de notificaciones donde puede ver todas las alertas recientes.

 <ImagePopup src="/assets/2.0/images/notifications/notification-panel.png" alt="Panel de Notificaciones" />

### Tipos de Notificaciones

UnoPim envía notificaciones para varios eventos del sistema. A continuación se muestran las principales categorías:

**1) Actualizaciones de Estado de Trabajos de Importación/Exportación**

Siempre que ejecute un trabajo de importación o exportación masiva, UnoPim envía automáticamente una notificación cuando el trabajo se completa, falla o requiere atención. Esto le permite monitorizar las operaciones de transferencia de datos de larga duración sin permanecer en la página del job tracker.

- **Completed** — El trabajo de importación o exportación finalizó con éxito.
- **Failed** — El trabajo encontró errores y no pudo completarse.
- **Completed with Errors** — El trabajo terminó pero algunos registros se omitieron debido a problemas de validación.

**2) Cambios de Producto**

Las notificaciones pueden alertarle cuando ocurren modificaciones significativas de los datos del producto, como actualizaciones masivas o cambios realizados a través de la API. Esto es útil cuando varios miembros del equipo trabajan en el catálogo de productos simultáneamente.

**3) Notificaciones del Sistema**

Las alertas generales a nivel del sistema, como recordatorios de mantenimiento programado o cambios importantes de configuración, también se entregan a través del panel de notificaciones.

### Características del Panel de Notificaciones

Haga clic en el **icono de campana** en la esquina superior derecha de la cabecera para abrir el panel. Un **punto verde** en la campana indica notificaciones no leídas.

<ImagePopup src="/assets/2.0/images/notifications/notification-panel.png" alt="Panel de notificaciones" />

El panel lista las notificaciones recientes. Cada entrada muestra:

- **Title** — tipo de trabajo + número secuencial, p. ej., `Import #15`, `Export #1`. El número coincide con la columna **ID** en el [Seguimiento de trabajos](../data-transfer/job-tracker.md), por lo que puede hacer clic para encontrar la ejecución exacta.
- **Body** — el código del perfil + estado terminal, p. ej., *"Import 'Test' completed"* — útil para distinguir varias ejecuciones del mismo perfil.
- **Marca de tiempo relativa** — p. ej., *"4 days ago"*.

Dos acciones se sitúan en la parte inferior del panel:

- **View All** — abre la página completa de notificaciones, donde puede navegar, filtrar y gestionar entradas individuales.
- **Mark as Read** — una única acción masiva que limpia el estado no leído para cada notificación visible en el panel.

::: tip
Los controles *Mark as Read / Unread* y *Clear Notifications* por notificación viven ahora en la página completa de notificaciones (vía **View All**). El panel en sí mantiene solo las acciones masivas *Mark as Read* y *View All* para que se mantenga escaneable.
:::

### Notificaciones por Correo Electrónico

Además de las notificaciones en la aplicación, UnoPim soporta notificaciones por correo electrónico para eventos críticos. Cuando están habilitadas, el sistema envía un correo electrónico a la dirección de correo registrada del administrador junto con la notificación en la aplicación.

**Cómo Funcionan las Notificaciones por Correo Electrónico**

Las notificaciones por correo electrónico se envían automáticamente para eventos clave como finalizaciones y fallos de trabajos de importación/exportación. Esto garantiza que incluso si no ha iniciado sesión activamente en el panel de Administración, todavía reciba actualizaciones oportunas.

**Configuración**

La entrega de correo se configura a nivel de infraestructura a través de su archivo `.env` de UnoPim — establezca `MAIL_MAILER`, `MAIL_HOST`, `MAIL_USERNAME`, `MAIL_PASSWORD` y `MAIL_FROM_ADDRESS` para que coincidan con su proveedor de correo (SMTP, Mailgun, Postmark, etc.). UnoPim usa drivers de correo estándar de Laravel y recoge los ajustes automáticamente al arrancar la aplicación.

::: tip
Pruebe su configuración de correo de extremo a extremo antes de depender de los correos electrónicos de notificación. Active un evento de bajo riesgo (p. ej., una pequeña importación) y confirme que el correo llega; si no, compruebe su log de Laravel (`storage/logs/laravel.log`) para errores del mailer.
:::

Al usar juntas las notificaciones en la aplicación y por correo electrónico, puede garantizar visibilidad completa de todos los eventos importantes que ocurren dentro de su instancia de UnoPim.
