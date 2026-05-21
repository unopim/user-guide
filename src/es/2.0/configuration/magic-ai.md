# Configuración de Magic AI

**Magic AI** es la capa integrada de UnoPim para generar, enriquecer y traducir contenido de productos y categorías con Large Language Models (LLMs). Antes de que pueda utilizar cualquier característica de IA — los iconos de varita de Magic AI en los campos de producto, el AI Agent Chat, la traducción automática o el auto-enriquecimiento — primero debe configurar Magic AI desde la barra lateral de administración.

<ImagePopup src="/assets/2.0/images/configuration/AiConfiguration.png" alt="Visión general de Configuración de Magic AI" />

## ¿Qué hace Magic AI?

Magic AI conecta su instancia de UnoPim a uno o más proveedores externos de IA (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.) y expone ese poder dentro del PIM de cuatro maneras:

| Capacidad | Dónde aparece en la UI | Qué hace |
|---|---|---|
| **Text generation** | Icono de varita junto a los campos de texto de producto/categoría | Escribe nombres, descripciones, metacampos SEO, texto de categoría |
| **Image generation** | Icono de varita junto a los atributos de imagen/galería | Crea imágenes de producto a partir de una descripción textual |
| **Translation** | Automática al guardar el producto, más un comando masivo | Traduce los valores específicos de locale a través de todos los locales configurados |
| **Agentic PIM (AI Agent Chat)** | Botón "Open Agenting PIM", abajo a la derecha | Asistente conversacional que llama a más de 30 herramientas PIM en su nombre |

Las cuatro comparten las mismas conexiones de proveedor, biblioteca de prompts y personalidad de sistema — por lo que cuando cambia los ajustes de Magic AI, cada característica de IA en UnoPim recoge el cambio.

## ¿Cómo funciona Magic AI?

El pipeline es el mismo para cada característica de IA:

1. **Usted activa una solicitud** — hace clic en un icono de varita, guarda un producto con auto-traducción activada o envía un mensaje de chat al AI Agent.
2. **UnoPim ensambla la entrada** — combina:
   - Los datos de la entidad objetivo (p. ej., el nombre, atributos, categoría del producto)
   - El **Prompt** correspondiente de Magic AI → Prompts (con los marcadores `@attribute` expandidos)
   - La personalidad activa del **System Prompt** (tono, temperatura, máximo de tokens)
3. **UnoPim reenvía la solicitud** a través del **LaravelAiAdapter** unificado a la plataforma/modelo que seleccionó en Magic AI → Ajustes.
4. **El proveedor responde** con texto generado, una imagen o una traducción.
5. **UnoPim aplica el resultado** — ya sea directamente en el campo, en la base de datos (tras aprobación opcional), o transmitido de vuelta al chat.


Todo entre el paso 2 y el paso 5 se configura desde las cuatro subpáginas descritas a continuación: **Platforms**, **Ajustes**, **Prompts** y **Prompts del sistema**.

::: tip
Las claves API nunca aparecen en texto plano. Todas las credenciales del proveedor se almacenan en la base de datos con **almacenamiento cifrado de credenciales**, y la clave se enmascara en la UI después de guardarla.
:::

## El Menú de Magic AI

Expanda **Magic AI** en la barra lateral de administración y verá cuatro elementos de submenú. Cada uno posee una porción específica de la configuración de IA — juntos le dan control completo sobre *qué proveedor se ejecuta, qué modelos usa, qué instrucciones sigue y con qué personalidad habla*.

| Elemento del menú | URL | Lo que configura aquí | Cuándo visitar |
|---|---|---|---|
| **Platforms** | `/admin/magic-ai/platforms` | Conexiones de proveedor — añada una cuenta de OpenAI / Anthropic / Gemini / Ollama / Groq, pegue su clave API y elija qué modelos habilitar. | Configuración inicial, rotación de claves API, añadir un nuevo proveedor, habilitar nuevos modelos. |
| **Ajustes** | `/admin/configuration/general/magic_ai` | Enrutamiento por capacidad — elija qué Platform + Model maneja Text Generation, Image Generation, Translation y Agentic PIM. También el hogar del presupuesto diario de tokens, modo de aprobación e interruptores de auto-enriquecimiento. | Cada vez que quiera cambiar qué proveedor ejecuta una característica dada, ajustar los límites de seguridad o activar/desactivar características. |
| **Prompts** | `/admin/magic-ai/prompts` | Plantillas de prompt — el texto de instrucción que Magic AI envía con cada solicitud, usando marcadores `@attribute_code` que se reemplazan con valores reales de la entidad. | Adaptación de la salida de IA a la voz de su marca, añadir prompts para nuevos atributos o categorías, ajustar los prompts por defecto. |
| **Prompts del sistema** | `/admin/magic-ai/system-prompts` | Personalidad global de la IA — tono, temperatura, máximo de tokens. Solo uno está activo a la vez, por lo que todo su catálogo mantiene una voz consistente. | Cambiar el tono general (formal vs. casual, conciso vs. descriptivo), ajustar la creatividad, limitar la longitud de respuesta. |

### Cómo se conectan los cuatro elementos del menú

```
        ┌────────────────────────┐
        │   1. Platforms         │   ← add providers + models
        │   Provider + API key   │
        │   + enabled models     │
        └────────┬───────────────┘
                 │ feeds the dropdowns in
                 ▼
        ┌────────────────────────┐
        │   2. Settings          │   ← route each capability to a platform+model
        │   Text / Image /       │
        │   Translation /        │
        │   Agentic PIM          │
        └───┬──────┬──────┬──────┘
            │      │      │
            │      │      └── uses ──► 4. System Prompts  (global personality)
            │      │                    — one active at a time
            │      │
            │      └── uses ──► 3. Prompts  (per-entity, per-purpose templates)
            │                    — `@placeholders` filled from entity data
            │
            └── keeps everything within ACL, budget, and approval-mode limits
```

**Lea de arriba abajo, configura una vez, luego usa en todas partes.** Un clic de varita en una descripción de producto, un campo auto-traducido o un mensaje de chat al AI Agent siguen todos el mismo camino a través de estos cuatro elementos del menú.


### Orden mínimo de configuración

Si está configurando Magic AI por primera vez, visite los elementos del menú en este orden:

1. **Platforms** — añada al menos un proveedor, pegue la clave API, habilite los modelos que planea usar y **marque uno con estrella como el predeterminado**.
2. **Ajustes** — habilite las capacidades que necesita (Text / Image / Translation / Agentic PIM) y elija una Platform + Model para cada una. Establezca el Daily Token Budget y el Change Approval Mode mientras está aquí.
3. **Prompts** — revise los prompts incluidos; ajuste o añada los suyos para que la IA escriba en la voz que su catálogo espera.
4. **Prompts del sistema** — confirme que la personalidad activa coincide con el tono que desea en todo el catálogo. Habilite una diferente si es necesario.

Una vez que esas cuatro páginas estén guardadas, cada característica de Magic AI en la administración — iconos de varita, auto-traducción, auto-enriquecimiento y el AI Agent Chat — está lista para usar.

## Platforms

Navegue a **Magic AI → Platforms** para gestionar las conexiones de proveedor de IA que cada característica de Magic AI utiliza.

<ImagePopup src="/assets/2.0/images/magic-ai/ai-platforms.png" alt="AI Platforms" />

### Qué es una "Platform"

Una *Platform* es una conexión de proveedor configurada: un proveedor (OpenAI, Anthropic, Gemini, Ollama, Groq, …), una clave API y la lista de modelos que ha habilitado de ese proveedor. Puede configurar tantas Platforms como desee — por ejemplo, una plataforma OpenAI para escritura, una plataforma Gemini para traducción y una plataforma Ollama para cargas locales — y UnoPim enrutará cada característica de IA a la plataforma que le asigne.

### Datagrid de Platforms

| Columna | Descripción |
|--------|-------------|
| **Label** | El nombre que asignó a la configuración de la plataforma |
| **Provider** | El proveedor de IA (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.) |
| **Models** | Los modelos habilitados para esta plataforma |
| **Default** | Si esta plataforma es la predeterminada (Sí/No) |
| **Status** | Habilitada o Deshabilitada |
| **Created At** | Fecha en que se añadió la plataforma |
| **Actions** | Estrella (establecer como predeterminada), Editar (icono de lápiz), Eliminar (icono de papelera) |

### Añadir una Platform

Haga clic en **Add Platform** en la esquina superior derecha. Se abre un modal de dos pasos titulado **"Add AI Platform"**.

**Paso 1 — elegir el proveedor.**

La primera pantalla del modal solo tiene un campo:

- **Provider *** — desplegable que lista cada proveedor soportado (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.).

Seleccione un proveedor y haga clic en **Save**. El modal se expande para mostrar el resto de los campos.

<ImagePopup src="/assets/2.0/images/magic-ai/add-platform.png" alt="Añadir AI Platform — Paso 1" />

**Paso 2 — rellenar los detalles específicos del proveedor.**

- **Label** — Introduzca un nombre descriptivo para esta configuración de plataforma (p. ej., *"OpenAI Production"*, *"Gemini Translation"*). Este nombre aparece en los desplegables descendentes en Magic AI → Ajustes.
- **API Key** — Pegue la clave API de su cuenta de proveedor. Se cifra al guardar y se enmascara en la UI después.
- **Models** — Un multiselect que lista los modelos disponibles del proveedor seleccionado. Solo los modelos que marque aquí aparecen en los desplegables de Ajustes.
- **Status** — Alterne para habilitar o deshabilitar la plataforma.

Haga clic en **Save** para terminar. La plataforma aparece en el datagrid.

::: tip
Las credenciales API se almacenan con almacenamiento cifrado de credenciales por seguridad. Sus claves API nunca se almacenan en texto plano.
:::

### Acciones de Platform

- **Icono de estrella** — Establece la plataforma como **predeterminada**. El predeterminado es lo que el sistema usa cuando una característica está configurada en *"Use Default Platform"*. Solo una plataforma puede ser la predeterminada a la vez.
- **Icono de lápiz** — Abre el modal de edición para actualizar la etiqueta de la plataforma, clave API, modelos o estado.
- **Icono de papelera** — Elimina la configuración de la plataforma. Esta acción no puede deshacerse.

### Cómo fluye la selección de plataforma hacia las características

```
Platforms (provider + key + models)
        │
        ▼
Settings (pick platform + model per feature)
        │
        ├─► Text Generation ──► Wand icons on text fields
        ├─► Image Generation ──► Wand icons on image/gallery fields
        ├─► Translation ──────► Auto-translate on save + bulk command
        └─► Agentic PIM ──────► AI Agent Chat
```

## Ajustes

Navegue a **Magic AI → Ajustes** en la barra lateral. Esto abre la página de configuración en `/admin/configuration/general/magic_ai` con cuatro secciones — una por capacidad. Para cada capacidad elige **qué Platform** y **qué Model** debe manejarla. Usar Platforms diferentes para capacidades diferentes le permite optimizar coste, velocidad y calidad de forma independiente.

<ImagePopup src="/assets/2.0/images/magic-ai/magic-ai-settings.png" alt="Ajustes de Magic AI" />

### 1. Agentic PIM

Esta sección controla el **AI Agent Chat** (el asistente conversacional) y los flujos de trabajo autónomos que impulsa: auto-enriquecimiento en la creación del producto, monitorización de calidad del catálogo y la cola de aprobación que se sitúa delante de los cambios propuestos por la IA.

| Campo | Qué hace |
|-------|---|
| **Enable AI Agent Chat** | Interruptor maestro para el botón de chat "Open Agenting PIM". Cuando está desactivado, el botón flotante queda oculto y nadie puede conversar con el agente. |
| **Max Agent Steps Per Turn** | Cuántas llamadas a herramientas puede encadenar el agente para un solo mensaje de usuario (por defecto: 5). Mayor = más autonomía por turno; menor = control más estricto y tokens más baratos. |
| **Daily Token Budget** | Tope diario rígido sobre los tokens gastados por el agente (p. ej., 500 000). Cuando se alcanza el tope, el agente responde con un aviso de presupuesto agotado hasta el día siguiente. |
| **Auto-Enrichment on Product Create** | Cuando está habilitado, cada producto recién creado se pone en cola para enriquecimiento por IA — descripciones faltantes, campos SEO, etc. se rellenan automáticamente. |
| **Catalog Quality Monitor** | Ejecuta un barrido de IA programado que reporta sobre datos faltantes, pobres o inconsistentes a través del catálogo. |
| **Confidence Threshold** | Puntuación mínima de confianza (por defecto: 0.7 — "Balanced") que la IA debe alcanzar antes de aplicar un cambio propuesto. Por debajo del umbral, los cambios se retienen para revisión. |
| **Change Approval Mode** | Cómo aterrizan los cambios propuestos por la IA en sus datos: *Auto-apply*, *Confirm & apply* (por defecto — la IA propone valores, le pregunta, luego ejecuta), o *Manual review* (todo va a la Approval Queue). |

### 2. Text Generation

Esta sección controla los iconos de varita junto a los campos de texto (nombre del producto, descripciones, metacampos SEO, texto de categoría). Cuando un usuario hace clic en un icono de varita, UnoPim envía el prompt del campo a la Platform y Model configurados aquí.

| Campo | Qué hace |
|-------|---|
| **Enabled** | Alterne para habilitar o deshabilitar la generación de texto en toda la administración. |
| **Default Platform** | Elija qué Platform sirve las solicitudes de texto. Elija *"Use Default Platform"* para seguir la plataforma con estrella, o anule con una específica. |
| **Default Model** | El modelo usado para la generación de texto, extraído de los modelos habilitados en la Platform elegida. |

### 3. Image Generation

Esta sección controla los iconos de varita en los atributos de Image y Gallery. Solo se listan Platforms cuyo proveedor soporte la generación de imágenes (OpenAI / DALL-E, Gemini, xAI).

| Campo | Qué hace |
|-------|---|
| **Enabled** | Alterne para habilitar o deshabilitar la generación de imágenes. |
| **Default Platform** | La Platform capaz de generar imágenes a usar. |
| **Default Model** | El modelo de imagen específico (p. ej., `dall-e-3`). |

### 4. Translation

La traducción puede ejecutarse automáticamente cada vez que se guarda un producto, y también puede activarse en masa mediante el comando de traducción. Como la traducción tiende a ser de alto volumen, Magic AI le permite asignar una **Platform diferente** — típicamente una más barata o rápida — solo para este trabajo.

| Campo | Qué hace |
|-------|---|
| **Enabled** | Alterne para habilitar o deshabilitar la traducción impulsada por IA. |
| **Default Platform** | La Platform utilizada para las solicitudes de traducción. |
| **Translation Model** | El modelo específico usado para la traducción — independiente del modelo de generación de texto. |
| **Replace Existing Value** | Activado: retraducir sobrescribe los valores de locale existentes. Desactivado: solo se rellenan los campos de locale vacíos, conservando las traducciones manuales. |
| **Source Channel** | El canal cuyos valores sirven como fuente de verdad. |
| **Target Channel** | El canal que recibe los valores traducidos. |
| **Source Locale** | El locale desde el que traducir (p. ej., `en_US`). |
| **Target Locales** | Multiselect; elija cada locale que desee autocompletar. |

::: tip
Puede asignar un proveedor de IA diferente (potencialmente más barato o más rápido) específicamente para traducciones, manteniendo su proveedor premium para la generación de contenido.
:::

Haga clic en **Save Configuration** en la parte inferior de la página para aplicar todos los cambios. Los ajustes surten efecto inmediatamente — no se requiere reinicio.

## Prompts

Navegue a **Magic AI → Prompts** para gestionar las **plantillas de prompt** que le dicen a la IA qué producir. Un prompt es la instrucción enviada con cada solicitud de generación; es donde incorpora la voz de su marca, la estructura requerida o las reglas específicas del catálogo.

<ImagePopup src="/assets/2.0/images/magic-ai/prompts.png" alt="Prompts" />

### Cómo funcionan los prompts

Cada prompt está vinculado a un **Entity Type** (producto o categoría) y un **Purpose** (Text Generation o Image Generation). En el momento de la generación, UnoPim:

1. Elige el prompt que coincide con la entidad y el propósito.
2. Reemplaza cada marcador `@attribute_code` con el valor real de la entidad.
3. Añade la personalidad activa del System Prompt encima.
4. Envía las instrucciones combinadas a la Platform/Model configurada para esa capacidad.

Así, un prompt de `Write a product description for @name in the @color variant` se convierte, en el momento de generación, en algo como `Write a product description for Air Max 90 in the Blue variant`.

### Datagrid de Prompts

| Columna | Descripción |
|--------|-------------|
| **Title** | El nombre del prompt |
| **Prompt** | El texto del prompt con marcadores |
| **Entity Type** | La entidad a la que se aplica el prompt (producto o categoría) |
| **Purpose** | Si el prompt es para Text Generation o Image Generation |
| **Created At** | Fecha en que se creó el prompt |
| **Updated At** | Fecha en que se modificó el prompt por última vez |
| **Actions** | Editar (icono de lápiz), Eliminar (icono de papelera) |

### Crear un Prompt

Haga clic en el botón **Create Prompt** para añadir un nuevo prompt. Rellene:

- **Title** — cómo aparece en la lista.
- **Prompt** — el texto de instrucción. Use marcadores `@attribute_code` para cualquier valor que quiera rellenar desde la entidad.
- **Entity Type** — producto o categoría.
- **Purpose** — Text Generation o Image Generation.

### Prompts incluidos

UnoPim viene con **18 prompts preestablecidos**. La mayoría apuntan a la generación de imágenes (estilos de fotografía de producto) y un puñado apuntan a la generación de texto. Todos apuntan a `product` como Entity Type. Ejemplos que verá en la lista:

| Title | Purpose |
|---|---|
| Packaging Mockup | Image Generation |
| Hero Banner Image | Image Generation |
| Multi-Angle Product | Image Generation |
| Flat Lay Composition | Image Generation |
| Product with Size Reference | Image Generation |
| Close-Up Detail Shot | Image Generation |
| Lifestyle Product Image | Image Generation |
| White Background Product Shot | Image Generation |
| Product Elevator Pitch | Text Generation |
| Product Brief | Text Generation |

Abra **Magic AI → Prompts** para ver la lista completa, editar cualquier preset o crear nuevos.

::: tip
Use códigos de atributo como marcadores (prefijados con `@`) en sus prompts. La IA los reemplazará con valores reales del producto o categoría que se está procesando.
:::

## Prompts del sistema

Navegue a **Magic AI → Prompts del sistema** para configurar la **personalidad** de la IA — el tono, estilo y parámetros de generación que se sitúan debajo de cada prompt.

<ImagePopup src="/assets/2.0/images/magic-ai/system-prompts.png" alt="Prompts del sistema" />

### Cómo difiere un System Prompt de un Prompt

- Un **Prompt** dice *qué* escribir para un campo específico ("escribe una descripción de producto …").
- Un **System Prompt** dice *cómo* escribir — voz, tono, creatividad, longitud. Se aplica delante de cada prompt, globalmente.

Solo **un System Prompt está activo en cualquier momento**. Habilitar uno nuevo deshabilita automáticamente el anterior, por lo que todo el catálogo mantiene una voz consistente.

### Datagrid de Prompts del sistema

| Columna | Descripción |
|--------|-------------|
| **Title** | El nombre del system prompt |
| **Tone** | El tono conversacional (p. ej., Confident, Vivid, Brief) |
| **Max Tokens** | El número máximo de tokens para las respuestas de IA |
| **Temperature** | El nivel de creatividad (menor = más enfocado, mayor = más creativo) |
| **Status** | Habilitado o Deshabilitado |
| **Created At** | Fecha en que se creó el system prompt |
| **Updated At** | Fecha en que se modificó el system prompt por última vez |
| **Actions** | Editar (icono de lápiz), Eliminar (icono de papelera) |

### Prompts del sistema predefinidos

UnoPim viene con 10 System Prompts preestablecidos. Todos vienen con **Max Tokens = 1024**; solo difiere la Temperature. Solo un System Prompt puede estar habilitado a la vez.

| Title | Tone | Temperature | Notas |
|-------|------|-------------|-------|
| Authoritative Guide | Confident, assertive, instructional | 0.65 | |
| Descriptive Storyteller | Vivid, rich, engaging | 0.9 | |
| Concise Responder | Brief, to-the-point | 0.5 | |
| Technical Expert | Precise, analytical | 0.6 | |
| Casual Conversationalist | Informal, relaxed | 0.75 | |
| Motivational Coach | Energetic, encouraging | 0.85 | |
| Empathetic Listener | Warm, understanding | 0.6 | |
| Witty Commentator | Clever, humorous | 0.9 | |
| Professional Advisor | Formal, respectful | 0.65 | |
| Friendly Assistant | Friendly, helpful, casual | 0.7 | Habilitado por defecto |

### Crear un System Prompt

Haga clic en el botón **Create System Prompt** para definir una nueva personalidad de IA. Configure:

- **Title** — se muestra en el datagrid.
- **Tone description** — descripción en lenguaje natural de la voz (el modelo lee esto).
- **Max Tokens** — limita la longitud de respuesta. Valores menores = salida más corta y coste más bajo.
- **Temperature** — 0.0–1.0. Valores bajos mantienen las respuestas concisas y repetibles; valores altos añaden variedad y estilo.
- **Status** — habilitar este deshabilita el prompt actualmente activo.

::: tip
Solo un system prompt puede estar activo a la vez. Habilitar un nuevo system prompt deshabilita automáticamente el anteriormente activo. Elija un system prompt que coincida con el tono que desea en todo el contenido generado por IA.
:::

## Lista de comprobación de la configuración

Antes de empezar a usar las características de Magic AI, asegúrese de haber hecho las cuatro siguientes:

1. **Magic AI → Platforms** — Añada al menos una plataforma, pegue una clave API, habilite los modelos que desea y **marque uno con estrella como predeterminado**.
2. **Magic AI → Ajustes** — Habilite las capacidades que necesita (Text / Image / Translation / Agentic PIM) y elija una Platform + Model para cada una.
3. **Magic AI → Prompts** — Revise los prompts incluidos o cree los suyos para que coincidan con la voz de su marca.
4. **Magic AI → Prompts del sistema** — Confirme que la personalidad activa coincide con el tono que desea en todo el catálogo.

Una vez que estas cuatro páginas estén configuradas, cada característica de Magic AI — iconos de varita, AI Agent Chat, auto-traducción y auto-enriquecimiento — funcionará sin configuración adicional.
