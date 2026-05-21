# Introducción

[UnoPim](https://unopim.com/) es un sistema de Gestión de Información de Producto (PIM) de código abierto construido sobre el framework **Laravel 12** y requiere **PHP 8.3**. Ayuda a las empresas a organizar, gestionar y enriquecer la información de sus productos en un repositorio central.

::: tip Versión actual — v2.1.0
Esta guía cubre UnoPim **v2.1.0**, lanzada el 13 de mayo de 2026. v2.1.0 incorpora un stack Docker listo para producción, sembrado de Datos de Demostración con un solo clic, la herramienta de Agente IA `ManageAssociations`, Proveedores Personalizados de MagicAI, webhooks de productos asíncronos, estadísticas del panel clicables y una pasada dedicada de refuerzo de seguridad. Consulte **[Novedades](../releases/)** para ver la lista completa.
:::

## Características

**1) Gestión Centralizada de Productos-**
Gestione todos los datos de sus productos en un solo lugar con soporte para tipos de producto Simple y Configurable.

**2) Enriquecimiento de Datos-**
Mejore la información de sus productos con atributos detallados, incluyendo soporte para 12 tipos de datos y tipos de muestras para opciones visuales de atributos.

**3) Gestión de Categorías-**
Organice los productos en categorías para una navegación más sencilla, con campos de categoría personalizables.

**4) Gestión de Usuarios-**
Controle el acceso y los permisos de los usuarios con control de acceso basado en roles.

**5) Integración API-**
Integre sin problemas con otros sistemas mediante APIs RESTful con autenticación OAuth 2.0.

**6) Localización-**
Soporte para múltiples idiomas y locales con traducción automática impulsada por IA.

**7) Funcionalidad de Importación/Exportación-**
Importe y exporte fácilmente datos de productos utilizando formatos CSV, XLS y XLSX, con carga de archivos mediante arrastrar y soltar, seguimiento de trabajos en tiempo real y controles de pausa/reanudación/cancelación.

**8) Magic AI para la Generación de Contenido de Productos-**
Genere automáticamente contenido atractivo de productos utilizando tecnología LLM avanzada con soporte para más de 10 proveedores de IA, incluidos OpenAI, Gemini, Anthropic, Ollama y Groq.

**9) Soporte Multicanal-**
Gestione y distribuya los datos de sus productos a través de múltiples canales de venta desde una única plataforma.

**10) Chat con Agente IA-**
Interactúe con su PIM usando lenguaje natural a través de la interfaz de Chat con Agente IA con más de 30 herramientas PIM integradas para la gestión de productos, calidad de datos y operaciones masivas.

**11) Completitud del Producto-**
Supervise la calidad de los datos con la puntuación de completitud del producto que rastrea cuánta información requerida se ha rellenado por canal y locale.

**12) Notificaciones-**
Manténgase informado con notificaciones en la aplicación y por correo electrónico sobre trabajos de importación/exportación, cambios de productos y eventos del sistema.

**13) Webhooks-**
Automatice flujos de trabajo con webhooks de actualización de productos que activan callbacks HTTP cuando los datos del producto cambian.

**14) Panel Mejorado-**
Obtenga una visión general completa de su catálogo con widgets para estadísticas de productos, gráficos de actividad, puntuaciones de completitud, preparación de canales y operaciones recientes.

**15) Edición Masiva de Productos-**
Edite varios productos a la vez seleccionándolos desde el datagrid y aplicando cambios masivos a los atributos compartidos.

**16) Soporte para PostgreSQL-**
Soporte completo para bases de datos PostgreSQL además de MySQL para mejorar la compatibilidad entre bases de datos.

**17) Configuración Docker Lista para Producción**  -
Levante el stack completo con un solo comando utilizando las imágenes oficiales de Docker Hub. Configuración multi-contenedor con Nginx + PHP-FPM (Apache como alternativa disponible), Redis, Elasticsearch y Mailpit — todo con healthchecks, `php.ini` afinado con OPcache y un flujo de auto-publicación.

**18) Sembrado de Datos de Demostración**  -
Evalúe UnoPim de inmediato con datos de muestra realistas. Active los datos de demostración desde el asistente de instalación, pase `--with-demo-data` a `php artisan unopim:install`, o ejecute el comando independiente `php artisan unopim:install:demo-data` en cualquier momento después de la instalación.

**19) Proveedores Personalizados de MagicAI**  -
Conecte cualquier servicio compatible con OpenAI — gateways autoalojados, proxies o endpoints alternativos — seleccionando el proveedor *Custom* en la página Magic AI Platforms y proporcionando su propia URL base.

**20) Webhooks de Producto Asíncronos**  -
Los webhooks de creación/actualización de productos se despachan en segundo plano como un trabajo `SendProductWebhook` en cola, de modo que las acciones de administración devuelvan inmediatamente incluso cuando el endpoint receptor sea lento.

**21) Estadísticas del Panel Clicables**  -
Los mosaicos de estadísticas de productos en el Panel (Activos, Inactivos, Enriquecidos, Con Variantes, …) ahora actúan como chips de filtro — haga clic en uno para enlazar directamente a la cuadrícula de productos prefiltrada a ese conjunto.

**22) Refuerzo de Seguridad**  -
Limitación de tasa de inicio de sesión del administrador, validación de contraseña del lado del servidor, protección contra enumeración de usuarios en olvido de contraseña, bloqueo de redireccionamientos abiertos, salvaguarda contra escalada de privilegios en edición de usuario, helper de saneamiento XSS `clean_content()` y debugbar restringido por IP mediante `APP_DEBUG_ALLOWED_IPS`.
