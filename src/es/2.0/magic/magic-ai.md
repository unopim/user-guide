# Magic AI

**Magic AI** es la capa de contenido IA de UnoPim. Genera contenido de producto y categoría (texto + imágenes), traduce valores a través de locales e impulsa el asistente Agentic PIM — todo utilizando cualquiera de los más de 10 proveedores de IA soportados detrás de escena.

## ¿Qué hace Magic AI?

Una vez que ha configurado Magic AI (consulte [Configuración de Magic AI](../configuration/magic-ai.md)), aparece a través de la UI de administración en cinco lugares:

| Superficie | Lo que produce | Cómo lo activa |
|---|---|---|
| **Icono de varita en campos de texto** | Nombres, descripciones, metacampos SEO, texto de categoría | Haga clic en la varita junto a un campo soportado |
| **Icono de varita en campos de imagen/galería** | Imágenes de producto generadas a partir de una descripción textual | Haga clic en la varita junto a un atributo de imagen |
| **Auto-traducción al guardar el producto** | Valores traducidos para cada locale objetivo | Automático cuando está habilitado; también vía un comando masivo |
| **Búsqueda impulsada por IA** | Resultados de búsqueda semántica clasificados por significado, no solo por palabras clave | Caja de búsqueda ordinaria |
| **AI Agent Chat (Agentic PIM)** | Resultados de más de 30 llamadas a herramientas | Botón de chat abajo a la derecha |

Las cinco comparten las mismas conexiones de proveedor, la misma biblioteca de prompts y la misma personalidad de sistema — por lo que configura Magic AI una vez y cada característica lo recoge.

## ¿Cómo funciona Magic AI?

Cada acción de Magic AI sigue el mismo pipeline:

1. **Trigger** — haga clic en un icono de varita, guarde un producto, ejecute un comando de traducción o envíe un mensaje de chat.
2. **Ensamblaje del contexto** — UnoPim combina los datos actuales de la entidad objetivo, la plantilla **Prompt** relevante (con los marcadores `@attribute` expandidos) y la personalidad activa del **System Prompt**.
3. **Despacho** — la solicitud ensamblada va a través del `LaravelAiAdapter` unificado a la Platform y Model que seleccionó para esa capacidad bajo **Magic AI → Ajustes**.
4. **Respuesta** — el proveedor devuelve texto, una imagen o una traducción.
5. **Aplicar** — el resultado se inserta en el campo (texto/imagen), se escribe en las columnas de locale (traducción) o se transmite al chat (agente).

El adaptador unificado significa que puede **cambiar de proveedor sin tocar su flujo de trabajo** — cambie la Platform predeterminada bajo Magic AI → Ajustes y cada característica usa la nueva en la próxima solicitud.

## Generación de Contenido

Con Magic AI, puede generar sin esfuerzo contenido atractivo de **producto y categoría** — nombres, descripciones, metadatos SEO y más.

<ImagePopup src="/assets/2.0/images/magic-ai/content.png" alt="Generación de contenido de Magic AI" />

En lugar de escribir cada descripción a mano, Magic AI las compone por usted a partir de los datos que el producto ya tiene (nombre, categoría, atributos clave), la plantilla de prompt que ha configurado y la personalidad de sistema activa.

### Proveedores de IA Soportados

UnoPim proporciona soporte nativo para múltiples proveedores de IA a través de su sistema **Multi-Platform MagicAI**. Puede configurar uno o más proveedores con almacenamiento cifrado de credenciales para una gestión segura de las claves API.

**A) Para Contenido — UnoPim soporta estos proveedores de IA:**

* **OpenAI** – gpt-4o, gpt-4o-mini, gpt-3.5-turbo, dall-e-2, dall-e-3
* **Anthropic** – Familia de modelos Claude (Opus, Sonnet, Haiku) para generación de texto y razonamiento
* **Ollama** – llama2, llama3, mistral, qwen, deepseek-coder, phi, llava
* **Gemini** – gemini-2.5-pro, gemini-2.5-flash, gemini-2.0-flash, gemini-1.5-flash-latest, gemini-1.5-pro
* **Groq (xAI)** – deepseek-r1-distill-llama-70b, llama-3.1-8b-instant, openai/gpt-oss-120b, openai/gpt-oss-20b, groq/compound, qwen/qwen3-32b, moonshotai/kimi-k2-instruct-0905

::: tip
Todos los proveedores se gestionan a través de una implementación unificada **LaravelAiAdapter**. Puede cambiar de proveedor sin cambiar su flujo de trabajo.
:::

## Cómo Generar Contenido de Texto con IA

Siga estos pasos para generar contenido de texto para sus productos utilizando Magic AI:

1. Navegue a **Catálogo → Productos** y haga clic en **Editar** en un producto.
2. Encuentre un campo de texto que soporte la generación por IA (Name, Short Description, Description, Meta Title, Meta Description, etc.).
3. Haga clic en el **icono de Magic AI** (icono de chispa/varita) junto al campo.
4. La IA genera contenido basado en:
   - El **Prompt** configurado para ese tipo de campo (desde **Magic AI → Prompts**).
   - Los datos existentes del producto (nombre, categoría, atributos) — que se sustituyen donde el prompt usa marcadores `@attribute_code`.
   - La personalidad del **System Prompt** activo (tono, temperatura, máximo de tokens).
5. El contenido generado aparece en el campo.
6. Revise y edite el contenido generado según sea necesario.
7. Haga clic en **Guardar producto** para mantener los cambios.

También puede generar contenido para categorías abriendo una página de edición de categoría y usando el icono de varita en los campos soportados.

::: tip
Configure su proveedor y modelo de IA preferidos en **Magic AI → Ajustes → Text Generation** antes de usar esta característica. Elija un modelo que equilibre calidad y coste para sus necesidades.
:::

## Cómo Generar Imágenes con IA

Siga estos pasos para generar imágenes de producto utilizando Magic AI:

1. Navegue a **Catálogo → Productos** y haga clic en **Editar** en un producto.
2. Encuentre un atributo **Image** o **Gallery**.
3. Haga clic en el **icono de Magic AI** junto al campo de imagen.
4. Introduzca una descripción de la imagen que desea (o acepte el prompt de Imagen por defecto desde **Magic AI → Prompts**).
5. La IA genera una imagen de producto que coincide con la descripción.
6. Revise la imagen generada.
7. Acéptela para adjuntarla al producto.
8. Haga clic en **Guardar producto**.

::: tip
La generación de imágenes requiere una Platform cuyo proveedor soporte imágenes (OpenAI con DALL-E, Gemini, o xAI). Configúrela bajo **Magic AI → Ajustes → Image Generation**.
:::

## Prompts Personalizados

Magic AI soporta **Prompts Personalizados** para la generación de contenido. Un prompt es una plantilla de instrucción que le dice al modelo *qué* producir — por ejemplo, `Write a detailed product description for @name highlighting its features, benefits, and @color variant.` Cada marcador (`@name`, `@color`, …) se reemplaza con el valor real de la entidad en el momento de la generación.

Puede crear prompts para casos de uso específicos como:
- "Generate a professional product description for an electronics store"
- "Write SEO-optimized content with keywords for fashion products"
- "Create a brief 50-word summary suitable for mobile displays"

Gestione los prompts desde **Magic AI → Prompts**. Cada prompt pertenece a un **entity type** (producto / categoría) y un **purpose** (texto / imagen).

<!-- TODO: Add screenshot of custom prompts configuration -->

## Gestión de Prompts del sistema

Los **Prompts del sistema** configuran la **personalidad** general de la IA — voz, tono y parámetros de generación (temperatura, max tokens) — y se aplican a cada característica de Magic AI. Solo **un** system prompt está activo en cualquier momento, por lo que todo su catálogo mantiene una voz consistente.

Gestione desde **Magic AI → Prompts del sistema**. Consulte la [sección Prompts del sistema de Configuración de Magic AI](../configuration/magic-ai.md#system-prompts) para la lista completa de las 10 personalidades preestablecidas que vienen con UnoPim.

<!-- TODO: Add screenshot of system prompt management -->

## Magic Image

Magic AI incluye una característica de **generación de imágenes** impulsada por DALL-E (OpenAI) y otros proveedores capaces de imágenes. Puede crear imágenes de producto directamente desde una descripción textual:

1. Navegue a una página de edición de producto.
2. Haga clic en el icono de **Magic AI** cerca del campo de imagen / galería.
3. Introduzca una descripción de la imagen que desea generar.
4. Seleccione el modelo (p. ej., `dall-e-2` o `dall-e-3`).
5. Haga clic en **Generate**.

<!-- TODO: Add screenshot of Magic Image generation -->

## Auto-Traducción

Magic AI proporciona **traducción automática** de los datos del producto. Cuando está habilitada, guardar un producto activa la traducción de todos los campos específicos de locale (nombre, descripciones, metacampos, …) a cada locale objetivo configurado. Su catálogo se mantiene multilingüe sin copiar-pegar manualmente.

### UI de Configuración de Traducción

La sección Translation vive en la página Ajustes de Magic AI en **Magic AI → Ajustes**. Los campos:

| Campo | Qué hace |
|---|---|
| **Enabled** | Interruptor maestro para la traducción impulsada por IA. |
| **Default Platform** | La plataforma de IA usada para traducciones. Puede elegir un proveedor diferente a su plataforma de generación de contenido — útil para optimizar coste o velocidad. |
| **Translation Model** | El modelo específico usado para las tareas de traducción. Independiente del modelo de generación de texto. |
| **Replace Existing Value** | Activado: sobrescribir los valores de locale existentes. Desactivado: rellenar solo locales vacíos, conservando las traducciones manuales. |
| **Source Channel** | El canal cuyos valores son la fuente de verdad de la traducción. |
| **Target Channel** | El canal que recibe los valores traducidos. |
| **Source Locale** | El locale desde el que traducir (p. ej., `en_US`). |
| **Target Locales** | Multi-select — cada locale a autocompletar. |

::: tip
Use **Replace Existing Value** con cuidado. Desactivado conserva cualquier traducción manual que ya haya hecho; activado regenera todo desde cero.
:::

### Cómo Funciona la Auto-Traducción

Cuando la auto-traducción está habilitada y un producto se crea o actualiza:

1. UnoPim lee los valores del locale fuente para cada campo específico de locale.
2. Para cada locale objetivo, llama a la Platform/Model de traducción con el valor fuente y el idioma objetivo.
3. Escribe los valores traducidos en las columnas del locale objetivo, respetando las asignaciones de canal/locale para que solo se rellenen los locales vinculados al canal objetivo.

Si **Replace Existing Value** está desactivado, el paso de traducción omite los campos que ya tienen un valor de locale — conservando sus ediciones manuales.

### Traducción Manual vía Conmutador de Locale

También puede traducir manualmente: abra un producto, cambie a un locale objetivo en el **conmutador de locale** en la parte superior del formulario de edición y o bien escriba traducciones o invoque el icono de varita en cada campo. Los atributos que soportan valores por locale muestran una insignia de locale (p. ej., `EN_US`) para que sepa qué locale está editando.

### Comando de Traducción Impulsado por IA

Para la traducción masiva de datos existentes, UnoPim v2.0 viene con un **Comando de Traducción Impulsado por IA** que utiliza Magic AI para rellenar las claves de locale faltantes en los 32 locales no ingleses. Auto-tradujo aproximadamente **18 000 claves previamente no traducidas** a través de 7 paquetes durante el propio lanzamiento de v2.0 — el mismo comando está disponible para su catálogo.

::: tip
Para cargas de trabajo de traducción de alto volumen, asigne un proveedor más rápido/barato a la traducción y mantenga un proveedor premium para la generación de contenido. Magic AI le permite separarlos por capacidad.
:::

## Búsqueda Impulsada por IA

UnoPim v2.0 introduce **Búsqueda Impulsada por IA** que utiliza la similitud de embeddings y la clasificación semántica para ofrecer resultados más inteligentes. En lugar de coincidir palabras clave carácter por carácter, comprende el significado detrás de la consulta.

Bajo el capó:
- **Embedding Similarity Service** — convierte los datos del producto en embeddings vectoriales para que las consultas y los productos puedan compararse semánticamente.
- **Semantic Ranking Service** — reordena los resultados según qué tan cercanamente coinciden con la intención de la consulta, no solo sus palabras.

<!-- TODO: Add screenshot of AI-powered search results -->

## Auto-Enriquecimiento

**Auto-Enriquecimiento** rellena automáticamente la información de producto faltante — descripciones, meta títulos, meta descripciones y otros campos de texto marcados como incompletos. Cuando está habilitado bajo **Magic AI → Ajustes → Agentic PIM**, Magic AI analiza cada producto y genera valores para los campos vacíos.

Esto es particularmente útil para:
- Productos importados en masa que carecen de descripciones.
- Productos sin metadatos SEO.
- Registros incompletos marcados por el sistema de completitud.

<!-- TODO: Add screenshot of auto-enrichment in action -->

Los valores enriquecidos pueden enrutarse a través de la [Approval Queue](../ai-agent/approval-queue.md) si desea revisarlos antes de que se publiquen.

## IA en Agentic PIM Chat

El AI Agent Chat reutiliza las capacidades de **Generate Content** y **Generate Image** de Magic AI como herramientas. Puede pedir generación de contenido en lenguaje natural sin salir del chat — y el agente usa las mismas Platforms, Prompts y System Prompt que configuró, por lo que los resultados coinciden con el resto del catálogo.

Ejemplos de prompts de chat:

- "Generate a product description for SKU SHOE-100"
- "Create an image for product Nike Air Max"

Consulte la página [AI Agent Chat](../ai-agent/ai-agent-chat.md) para la lista completa de herramientas y patrones de interacción.

## Magic AI vs. el AI Agent — de un vistazo

| | Iconos de varita de Magic AI | AI Agent (Agentic PIM) |
|---|---|---|
| **Trigger** | Haga clic en una varita junto a un campo | Botón de chat; conversacional |
| **Alcance** | Un campo en una entidad a la vez | Cualquier cosa en el catálogo |
| **Salida** | Texto / imagen para el campo | Resultados de herramientas transmitidos al chat |
| **Multi-paso** | No — una solicitud, una respuesta | Sí — puede planificar y encadenar llamadas a herramientas |
| **¿Usa Platforms/Prompts/System Prompts?** | Sí | Sí |
| **¿Tiene su propia capa de seguridad?** | Vista previa a nivel de campo antes de guardar | Approval Queue, Confidence Threshold, Token Budget, Max Steps |

Son dos interfaces sobre el **mismo núcleo de Magic AI** — configure Magic AI una vez bajo **Magic AI → Platforms / Settings / Prompts / System Prompts**, y ambos conjuntos de características se iluminan.
