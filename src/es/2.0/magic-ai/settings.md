# Magic AI — Ajustes

> **Barra lateral:** Magic AI → **Ajustes**
> **URL:** `/admin/configuration/general/magic_ai`

La página **Ajustes** es donde enruta cada capacidad de IA en UnoPim a una **Platform** y **Model** específicos. Este es también el hogar de los controles de **Agentic PIM** — el presupuesto de tokens, modo de aprobación, alternador de auto-enriquecimiento y el Catalog Quality Monitor.

## ¿Qué hace esta página?

Contiene cuatro secciones independientes, una por capacidad:

1. **Agentic PIM** — configura el AI Agent Chat (Open Agenting PIM) y sus controles de seguridad.
2. **Text Generation** — impulsa los iconos de varita en los campos de texto de producto/categoría.
3. **Image Generation** — impulsa los iconos de varita en los atributos de imagen y galería.
4. **Translation** — configura la auto-traducción al guardar el producto, más el comando de traducción masiva.

Como cada sección tiene su propio desplegable de Platform y Model, puede usar **proveedores diferentes para capacidades diferentes** — por ejemplo, OpenAI para generación de contenido y Gemini para traducción.

<ImagePopup src="/assets/2.0/images/magic-ai/magic-ai-settings.png" alt="Ajustes de Magic AI" />

## 1. Agentic PIM

Controla el AI Agent conversacional y los flujos de trabajo en segundo plano que impulsa (auto-enriquecimiento en la creación del producto, Catalog Quality Monitor, cola de aprobación).

| Campo | Qué hace |
|-------|---|
| **Enable AI Agent Chat** | Interruptor maestro para el botón "Open Agenting PIM". Cuando está desactivado, el botón de chat queda oculto y nadie puede conversar con el agente. |
| **Max Agent Steps Per Turn** | Cuántas llamadas a herramientas puede encadenar el agente por un solo mensaje del usuario. El desplegable ofrece presets etiquetados en lugar de números brutos — p. ej., **`3 (Fast)`** para respuestas ajustadas y baratas, y presets más altos para más autonomía. Mayor = más autonomía por turno; menor = control más estricto y tokens más baratos. |
| **Daily Token Budget** | Tope diario global sobre el gasto de tokens del AI Agent (p. ej., `500000`). Cuando se alcanza el tope, el agente responde con un aviso de presupuesto agotado hasta la medianoche. |
| **Auto-Enrichment on Product Create** | Cuando está habilitado, cada producto nuevo se pone en cola para enriquecimiento por IA — descripciones faltantes, campos SEO, etc. se rellenan automáticamente. |
| **Catalog Quality Monitor** | Ejecuta un barrido de IA programado que reporta sobre datos del catálogo faltantes, pobres o inconsistentes. |
| **Confidence Threshold** | Confianza mínima (por defecto 0.7 — "Balanced") requerida antes de aplicar un cambio propuesto. Por debajo del umbral, el cambio se retiene para revisión. |
| **Change Approval Mode** | Cómo aterrizan los cambios propuestos por la IA: *Auto-apply*, *Confirm & apply* (por defecto), o *Manual review* (todo se enruta a la Approval Queue). |

::: tip
Comience con **Manual review** mientras aprende cómo se comporta el agente en su catálogo. Mueva los flujos de trabajo de confianza a Auto-apply una vez que el panel de analytics muestre una salida consistente y de alta confianza.
:::

## 2. Text Generation

Controla los iconos de varita junto a los campos de texto de producto y categoría (Name, Short Description, Description, Meta Title, Meta Description, URL Key, etc.).

| Campo | Qué hace |
|-------|---|
| **Enabled** | Alterne la generación de texto on u off en toda la administración. |
| **Default Platform** | Qué Platform sirve las solicitudes de texto. Elija **`-- Use Default Platform --`** para seguir la predeterminada con estrella, o anule con una plataforma específica. Las plataformas marcadas con `*` en el desplegable son la predeterminada actual. |
| **Default Model** | El modelo usado para texto, extraído de los modelos habilitados en la Platform elegida. |

## 3. Image Generation

Controla los iconos de varita en los atributos Image y Gallery. Solo aparecen aquí Platforms cuyo proveedor soporta la generación de imágenes (OpenAI / DALL-E, Gemini, xAI).

| Campo | Qué hace |
|-------|---|
| **Enabled** | Alterne la generación de imágenes on u off. |
| **Default Platform** | Una Platform capaz de imágenes. Elija **`-- Use Default Platform --`** para seguir la predeterminada con estrella; `*` en el desplegable marca la predeterminada actual. |
| **Default Model** | El modelo de imagen específico (p. ej., `dall-e-3`). |

## 4. Translation

Controla la auto-traducción al guardar el producto y el comando de traducción masiva impulsado por IA. Como la traducción tiende a ser de alto volumen, puede asignarle una Platform diferente (a menudo más barata/rápida).

| Campo | Qué hace |
|-------|---|
| **Enabled** | Encienda o apague la traducción impulsada por IA. |
| **Default Platform** | La Platform usada para las solicitudes de traducción. Elija **`-- Use Default Platform --`** para seguir la predeterminada con estrella; `*` en el desplegable marca la predeterminada actual. |
| **Translation Model** | El modelo específico usado para la traducción — independiente del modelo de generación de texto. |
| **Replace Existing Value** | Activado: retraducir sobrescribe los valores de locale existentes. Desactivado: solo se rellenan los campos de locale vacíos, conservando las traducciones manuales. |
| **Source Channel** | El canal cuyos valores sirven como fuente de verdad. |
| **Target Channel** | El canal que recibe los valores traducidos. |
| **Source Locale** | El locale desde el que traducir (p. ej., `en_US`). |
| **Target Locales** | Multi-select — cada locale a autocompletar. |

::: tip
Puede asignar un proveedor de IA diferente (potencialmente más barato o más rápido) específicamente para traducciones, manteniendo su proveedor premium para la generación de contenido.
:::

Haga clic en **Save Configuration** en la parte inferior de la página para aplicar todos los cambios. Los ajustes surten efecto inmediatamente — no se requiere reinicio.

## De dónde vienen los valores

Los desplegables Platform / Model en esta página se rellenan enteramente desde la página **[Platforms](./platforms.md)**. Si una Platform no está listada, o (a) está deshabilitada, (b) su proveedor no soporta la capacidad (p. ej., Ollama no aparece en Image Generation), o (c) aún no la ha registrado.

De manera similar, los desplegables Source / Target Channel y Locale de la sección **Translation** se rellenan desde su configuración de canal y locale (consulte **Settings → Channels** y **Settings → Locales**).
