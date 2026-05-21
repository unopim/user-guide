# AI Agent Chat

El **AI Agent Chat** es la interfaz conversacional para Agentic PIM. Desde una sola ventana de chat puede gestionar productos, categorías, atributos, calidad de datos y operaciones masivas — simplemente describiendo lo que necesita.

## ¿Qué hace el AI Agent Chat?

El panel de chat es un único punto de entrada para **más de 30 herramientas PIM**. Cuando escribe un mensaje, el agente:

- Interpreta su intención.
- Elige una o más herramientas a llamar (crear producto, buscar, edición masiva, generar contenido, gestionar asociaciones, etc.).
- Ejecuta las herramientas contra los datos reales de UnoPim, dentro de sus permisos ACL.
- Transmite los resultados de vuelta al chat en tiempo real.

Cualquier cosa que pueda hacer desde la UI de administración, puede hacerla pidiéndola en el chat — y el agente puede encadenar varios pasos en una sola petición, por lo que las tareas que requerirían muchos clics colapsan en una sola instrucción.

## ¿Cómo funciona?

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Pipeline de Agentic PIM — Flujo de trabajo de 5 pasos" />

La Platform y el Model utilizados para este bucle de razonamiento se configuran bajo **Magic AI → Ajustes → Agentic PIM**. La personalidad (tono, temperatura, máximo de tokens) proviene del **System Prompt** activo.


## Apertura del AI Agent Chat

Haga clic en el **icono de estrella** flotante en la esquina inferior derecha de cualquier página de administración. El panel de chat se desliza desde el borde derecho con el encabezado **"Agenting PIM — AI-powered operations"**.

 <ImagePopup src="/assets/2.1/images/ai-agent/ai-agent-chat.png" alt="AI Agent Chat" />

Un engranaje de configuración en el encabezado del panel salta a `/admin/ai-agent/settings` (que se resuelve en **Magic AI → Ajustes**), donde puede configurar plataformas, modelos y presupuestos.

El panel tiene tres pestañas:
- **Capabilities** — Examine las más de 30 herramientas que el agente puede llamar.
- **Chat** — Interfaz conversacional. Cuando está vacía, muestra *"How can I help with your catalog?"* bajo un icono de estrella y el encabezado **General Chat**.
- **Sessions** — Sus conversaciones pasadas. Una insignia numérica en la pestaña muestra cuántas sesiones no han sido leídas.

 <ImagePopup src="/assets/2.1/images/ai-agent/ai-agent-chat-tab.png" alt="Pestaña de AI Agent Chat" />

Una vez abierto, el panel de chat se desliza desde el lado derecho de la pantalla. Puede empezar a escribir su petición inmediatamente.

## Pestaña Capabilities

La pestaña Capabilities lista cada herramienta que el agente puede invocar. Cada herramienta representa una operación PIM específica que puede activar mediante lenguaje natural — no llama a las herramientas por nombre, describe lo que quiere y el agente elige la correcta.

| # | Herramienta | Qué hace |
|---|------|-------------|
| 1 | **Create from Image** | Suba fotos para autocrear productos |
| 2 | **Update Products** | Actualice atributos/estado por SKU |
| 3 | **Search Products** | Encuentre productos por SKU, nombre o estado |
| 4 | **Find Similar** | Encuentre productos similares usando IA |
| 5 | **Generate Content** | Nombre, descripción y SEO generados por IA |
| 6 | **Generate Image** | Cree imágenes de producto a partir de texto |
| 7 | **Edit Product Image** | Eliminación de fondo, mejorar y retocar |
| 8 | **Assign Categories** | Asigne rutas de categoría a productos |
| 9 | **List Attributes** | Vea atributos y opciones de familia |
| 10 | **Export Products** | Genere exportación CSV/XLSX |
| 11 | **Bulk Import CSV** | Suba CSV/XLSX para actualización por lotes — se ejecuta como un trabajo en cola en segundo plano |
| 12 | **Delete Products** | Elimine productos por lista de SKU |
| 13 | **Create Category** | Añada nuevas categorías al catálogo |
| 14 | **Category Tree** | Vea la jerarquía completa de categorías |
| 15 | **Create Attribute** | Añada nuevos atributos de producto |
| 16 | **Manage Options** | Añada o liste opciones de atributo |
| 17 | **Attribute Families** | Liste, cree o inspeccione familias |
| 18 | **Edición masiva** | Actualización masiva de productos por reglas |
| 19 | **Catalog Summary** | Estadísticas, recuentos y actividad reciente |
| 20 | **Channels** | Vea canales, locales y monedas |
| 21 | **Users** | Vea usuarios administradores y detalles |
| 22 | **Roles** | Vea roles y permisos |
| 23 | **Ask Anything** | Asistente PIM de forma libre |
| 24 | **Manage Associations** | Añada, elimine o liste productos relacionados/up-sell/cross-sell mediante lenguaje natural |

::: tip
Cada herramienta respeta sus permisos ACL. Si su rol de administrador no permite una operación particular, la herramienta correspondiente silenciosamente no se ejecuta — el agente nunca puede saltarse su rol.
:::

## Importación masiva CSV — ahora en cola

La herramienta **Bulk Import CSV** previamente procesaba el archivo entero en línea, dentro de la solicitud HTTP. Eso funcionaba para unos pocos cientos de filas, pero agotaba el tiempo en cargas mayores. En v2.1.0 la herramienta extrae el trabajo pesado a un trabajo dedicado en cola — **`ImportProductsJob`** — para que pueda enviar de forma fiable **más de 10 000 productos** en un solo mensaje del AI Agent.

### Cómo funciona

1. Pida al agente algo como *"importa estos productos"* y adjunte un CSV/XLSX.
2. El agente valida el archivo, abre un registro **Job Track** (visible desde la página **Seguimiento de trabajos**), y despacha un `ImportProductsJob` a la cola.
3. El trabajo procesa cada fila, registrando los resultados en un `JobTrackBatch`. La solicitud HTTP original retorna inmediatamente con un ID de trabajo — puede seguir conversando mientras la importación se ejecuta.
4. El agente reporta el progreso en el chat a medida que el trabajo avanza. Cuando termina, obtiene un resumen (`created`, `updated`, errores).

### Modos de importación

El agente puede ejecutar la importación en uno de tres modos — los elige según su redacción, pero puede ser explícito:

| Modo | Comportamiento | Cuándo usar |
|---|---|---|
| **`create_or_update`** *(por defecto)* | Actualiza SKUs existentes, crea los nuevos. | Importaciones de lote mixto. |
| **`create_only`** | Solo crea nuevos SKUs — las filas existentes son **omitidas**. | Cargas iniciales donde quiere evitar tocar los datos existentes. |
| **`update_only`** | Solo actualiza SKUs existentes — los SKUs nuevos son **omitidos**. | Correcciones masivas sobre un conjunto conocido de SKUs. |

### Comportamiento del trabajo

| Ajuste | Valor | Notas |
|---|---|---|
| **Timeout** | `3600` segundos (1 hora) | Techo generoso para importaciones muy grandes. |
| **Tries** | `1` | El trabajo **no** se reintenta en caso de fallo — los resultados parciales se registran y el trabajo se marca como `failed`. Vuelva a ejecutar la importación desde el AI Agent después de corregir el archivo fuente. |
| **Queue** | `default` | Asegúrese de que su lista `queue:work --queue=` incluye `default` (lo hace en el [comando worker documentado](../configuration/webhooks#running-the-queue-worker)). |

### Qué se registra

Cada importación se despacha en el pipeline estándar **Transferencia de datos** de UnoPim, por lo que puede monitorizarla de la misma manera que monitoriza una importación CSV normal:

- **Seguimiento de trabajos** → vea esta importación en la lista con estado `processing` → `completed`.
- **Resumen por lote** → `processed_rows`, `created`, `updated`, errores.
- **Errores** → los primeros 10 errores a nivel de fila se guardan con el formato `Row N (SKU: X): <message>` para que pueda corregir el archivo fuente.

::: tip ¿Por qué `$tries = 1`?
Las importaciones masivas no son reintentables de forma segura desde el inicio — volver a ejecutar una importación a medio terminar volvería a procesar las filas que ya tuvieron éxito, además de duplicar el procesamiento de todo lo que falló a mitad de fila. UnoPim deliberadamente desiste tras un intento para que usted pueda decidir cómo recuperarse. Use la lista de errores en el Seguimiento de trabajos para corregir las filas fuente y volver a importar.
:::

## Disposición de la Interfaz de Chat

La interfaz de chat consta de las siguientes áreas:

- **Área de mensajes** — Muestra el historial de conversación entre usted y el AI Agent, incluyendo respuestas, salidas de herramientas y actualizaciones de estado.
- **Campo de entrada** — Una entrada de texto en la parte inferior donde escribe sus comandos o preguntas. Pista de teclado: **Enter** para enviar, **Shift+Enter** para una nueva línea.
- **Icono de adjunto (clip)** — Adjunte un archivo (imagen, CSV) al mensaje.
- **Desplegable de Platform** — Elija qué AI Platform configurada maneja este mensaje específico (ver más abajo).
- **Desplegable de Model** — Elija qué modelo en esa plataforma maneja este mensaje específico.
- **Botón Send** — Envía su mensaje al AI Agent para procesar.

### Elegir una Platform o Model para un solo mensaje

La barra de entrada del chat le permite anular la plataforma y el modelo por defecto **por mensaje**, sin cambiar los predeterminados globales bajo **Magic AI → Ajustes**.

| Desplegable | Lo que muestra | Origen |
|---|---|---|
| **Platform** | Cada plataforma habilitada (p. ej., *OpenAI (Openai)*). | **Magic AI → Platforms** |
| **Model** | Modelos habilitados en la plataforma seleccionada (p. ej., *gpt-5.4*). | Modelos marcados en esa plataforma |

La anulación dura un mensaje; el siguiente mensaje revierte a lo que muestran actualmente los desplegables.

**Cuándo es útil esto:**

- **Control de costes** — enrute una consulta sencilla a un modelo rápido y barato mientras mantiene un modelo premium para enriquecimiento.
- **Experimentos de calidad** — envíe el mismo prompt dos veces con modelos diferentes y compare.
- **Aislamiento de proveedor** — enrute prompts sensibles a una plataforma Ollama autoalojada sin tocar el ajuste global.

Si quiere que un cambio sea permanente para cada usuario y cada característica, edite en su lugar **Magic AI → Ajustes → Agentic PIM**.

## Tipos de Comandos

A continuación se muestran las principales categorías de cosas que puede pedirle al agente que haga. Como el agente elige las herramientas a partir de su intención, no necesita recordar los nombres de las herramientas — solo describa el resultado que desea.

### Operaciones de Producto

Crear, actualizar, buscar y editar masivamente productos.

**Ejemplos de prompts:**
- "Crea un producto simple con SKU TSHIRT-001 y nombre Blue T-Shirt"
- "Actualiza el precio del producto SKU LAPTOP-PRO a 999.99"
- "Busca todos los productos en la categoría Footwear"
- "Actualiza masivamente el estado a habilitado para todos los productos con SKU que comience por SHOE"

### Gestión de Categorías

Gestione el árbol de categorías.

**Ejemplos de prompts:**
- "Muéstrame todas las categorías raíz"
- "Lista los productos asignados a la categoría Electronics"

### Informes de Calidad de Datos

Recorra su catálogo en busca de datos faltantes o incompletos y reciba informes estructurados sobre los que actuar.

**Ejemplos de prompts:**
- "Ejecuta un escaneo de calidad de datos en todos los productos en la categoría Clothing"
- "¿Qué productos no tienen descripción?"
- "Muéstrame los productos con puntuación de completitud por debajo del 50%"

### Verificación de Producto y Puntuación de Calidad

Verifique productos individuales contra criterios de calidad.

**Ejemplos de prompts:**
- "Comprueba la completitud del producto SKU JACKET-100"
- "Verifica la calidad de datos para todos los productos en la familia Default"

### Auto-Enriquecimiento

Haga que el agente rellene contenido faltante — descripciones, campos SEO, etc. El agente usa lo que el producto ya tiene (nombre, categoría, atributos) para producir contenido que encaje.

**Ejemplos de prompts:**
- "Genera una descripción corta para el producto SKU SNEAKER-200"
- "Autorrellena las meta descripciones faltantes para todos los productos en la categoría Accessories"
- "Enriquece los campos SEO para el producto SKU WATCH-050"

::: tip
El auto-enriquecimiento funciona mejor cuando el producto ya tiene información básica como un nombre y una categoría. El agente se apoya en ese contexto para producir contenido coherente y acorde a la marca.
:::

### Planificación de Tareas

Para trabajo de varios pasos, el agente construye un plan, se lo muestra y lo ejecuta paso a paso.

**Ejemplos de prompts:**
- "Planifica y ejecuta: actualiza todos los productos en la colección Summer para que tengan un 20% de descuento y una nueva descripción promocional"
- "Crea un plan de tareas para revisar y enriquecer todos los productos con imágenes faltantes"

### Transformaciones Masivas

Aplique transformaciones (añadir, anteponer, reemplazar) a través de muchos SKUs de una vez.

**Ejemplos de prompts:**
- "Actualiza masivamente todos los productos con estado deshabilitado a habilitado"
- "Cambia la categoría de todos los productos con prefijo SKU LEGACY a la categoría Archive"

### Gestión de Asociaciones

Introducida en **v2.0.x**, la herramienta **Manage Associations** le permite añadir, eliminar o listar productos relacionados, up-sells y cross-sells a través de la conversación — sin necesidad de abrir cada producto individualmente.

**Ejemplos de prompts:**
- "Añade SKU BELT-100 como cross-sell en SKU JEANS-200"
- "Elimina todos los productos up-sell de SKU PHONE-CASE-BLACK"
- "Lista los productos cross-sell vinculados al SKU LAPTOP-PRO"
- "Refleja los productos relacionados del SKU SHIRT-001 sobre el SKU SHIRT-002"

### Sistema de Memoria del Agente

El agente tiene una pequeña memoria a largo plazo que persiste entre sesiones. Usa dos herramientas internas:

- **RememberFact** — Almacena un hecho o preferencia que le dice que recuerde.
- **RecallMemory** — Recupera hechos recordados cuando son relevantes para la solicitud actual.

**Ejemplos de prompts:**
- "Recuerda que nuestro formato estándar de descripción de producto comienza con el nombre de la marca"
- "Recuerda lo que te dije sobre nuestra convención de nomenclatura"

### Bucle de Retroalimentación de Contenido

Cuando el agente genera contenido, puede ajustarlo con retroalimentación y ajustará las salidas futuras en la misma sesión — y, si es suficientemente fuerte, recordará la preferencia para la próxima vez.

**Ejemplos de prompts:**
- "Esa descripción es demasiado larga, hazla más corta y más directa"
- "Prefiero un tono formal para las descripciones de productos"
- "Reescribe eso pero céntrate más en el material y la durabilidad"

## Respuestas de Streaming en Tiempo Real

Las respuestas se transmiten al chat en tiempo real usando **Server-Sent Events (SSE)**. Ve el razonamiento, las llamadas a herramientas y los resultados del agente aparecer progresivamente en lugar de esperar a la respuesta completa. Para operaciones largas (una actualización masiva de 200 productos, por ejemplo) esto le permite ver el progreso a medida que sucede.

## Pestaña Sessions

La pestaña Sessions lista cada chat pasado. Cada entrada muestra el título de la sesión, número de mensajes y fecha de última actividad.

 <ImagePopup src="/assets/2.1/images/ai-agent/ai-agent-sessions.png" alt="Sesiones de AI Agent" />

### Gestión de Sesiones

- **+ New Session** — Comience una conversación limpia sin contexto previo. Útil cuando cambia a una tarea diferente.
- **Delete session** — El botón de icono de papelera elimina permanentemente una sesión. Irreversible.
- **Resume a session** — Haga clic en cualquier entrada para reabrirla. El historial completo y el contexto se restauran, por lo que el agente continúa exactamente donde lo dejó.

### Persistencia de Sesiones

Las sesiones están respaldadas por base de datos, lo que significa:

- **Las recargas de página** no borran su conversación.
- **Las sesiones del navegador** se conservan — cierre la pestaña, vuelva más tarde, reanude.
- **El contexto se conserva dentro de una sesión**, por lo que el agente recuerda lo que discutieron antes en el mismo hilo ("aplica el mismo cambio al SKU B").
- Las sesiones persisten **entre inicios de sesión**, por lo que su historial siempre está disponible cuando vuelve a iniciar sesión.

::: tip
Comience una nueva sesión cuando cambie a una tarea diferente. Las sesiones enfocadas producen mejores elecciones de herramientas porque el agente no está malabareando contexto no relacionado.
:::
