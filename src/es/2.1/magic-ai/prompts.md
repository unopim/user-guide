# Magic AI — Prompts

> **Barra lateral:** Magic AI → **Prompts**
> **URL:** `/admin/magic-ai/prompts`

La página **Prompts** es donde gestiona las **plantillas de instrucción** que Magic AI envía al modelo con cada solicitud. Un prompt bien escrito es lo que marca la diferencia entre relleno de IA genérico y contenido que se ajusta a su marca y catálogo.

## ¿Qué es un Prompt?

Un *Prompt* es una instrucción que le dice a la IA *qué* producir para un campo específico. Es un fragmento corto de texto con **marcadores** opcionales — tokens como `@name`, `@color`, `@material` — que Magic AI reemplaza con valores reales de la entidad en el momento de la generación.

Prompt de ejemplo:

> `Write a detailed product description for @name highlighting its features, benefits, and @color variant.`

Cuando este prompt se ejecuta contra un producto llamado *Air Max 90* con `color = Blue`, se convierte en:

> `Write a detailed product description for Air Max 90 highlighting its features, benefits, and Blue variant.`

Cada prompt está vinculado a dos ejes:

- **Entity Type** — qué tipo de registro se aplica: `product` o `category`.
- **Purpose** — qué produce: `Text Generation` o `Image Generation`.

Magic AI elige el prompt coincidente automáticamente cuando hace clic en un icono de varita, ejecuta auto-enriquecimiento o pide al AI Agent que genere contenido.

## ¿Qué hace esta página?

- Lista cada plantilla de prompt disponible en el sistema.
- Le permite **crear**, **editar** y **eliminar** prompts.
- Muestra qué entidad y propósito sirve cada prompt, para que pueda ver la cobertura de un vistazo.

<ImagePopup src="/assets/2.1/images/magic-ai/prompts.png" alt="Prompts" />

## Cómo se utilizan los prompts en el momento de la generación

```
El usuario hace clic en el icono de varita en un campo
           │
           ▼
Magic AI elige el prompt que coincide
   tipo de entidad (product/category) + propósito (text/image)
           │
           ▼
Los marcadores `@attribute_code` se reemplazan
   con los valores reales de atributo de la entidad
           │
           ▼
Se antepone el System Prompt activo (tono + temperatura)
           │
           ▼
Solicitud enviada a la Plataforma + Modelo
   configurados en Magic AI → Ajustes
           │
           ▼
El contenido generado aparece en el campo
```

## Datagrid de Prompts

| Columna | Descripción |
|--------|-------------|
| **Title** | El nombre del prompt. |
| **Prompt** | El texto del prompt con marcadores. |
| **Entity Type** | La entidad a la que se aplica el prompt (`product` o `category`). |
| **Purpose** | Si el prompt es para `Text Generation` o `Image Generation`. |
| **Created At** | Fecha en que se creó el prompt. |
| **Updated At** | Fecha en que se modificó el prompt por última vez. |
| **Actions** | Editar (icono de lápiz), Eliminar (icono de papelera). |

## Crear un Prompt

Haga clic en el botón **Create Prompt**. Rellene:

- **Title** — Cómo aparece en la lista. Use algo reconocible como *"Product Description — Long Form"*.
- **Prompt** — El texto de instrucción. Use marcadores `@attribute_code` para cualquier valor que quiera extraer de la entidad. Puede referenciar cualquier código de atributo definido en la familia de atributos de la entidad.
- **Entity Type** — `product` o `category`.
- **Purpose** — `Text Generation` o `Image Generation`.

### Reglas de los marcadores

- Los marcadores están prefijados con `@` y usan el **código de atributo**, no la etiqueta. Por ejemplo, un atributo "Product Color" con código `color` se referencia como `@color`.
- Si el atributo no tiene valor en la entidad, el marcador se reemplaza con una cadena vacía — por lo que escriba prompts defensivamente (p. ej., `highlighting its @color variant if specified`).
- Puede encadenar varios marcadores en un solo prompt; Magic AI los expande todos en una sola pasada.

## Prompts de Ejemplo

Aquí hay ejemplos de prompts que vienen con UnoPim:

| Título | Prompt | Tipo de entidad | Propósito |
|-------|--------|-------------|---------|
| AI Product Description | Write a detailed product description for @name highlighting its features, benefits and @color variant. | product | Text Generation |
| AI Product Image | Generate a professional product photo of @name on a clean white background with studio lighting. | product | Image Generation |
| AI Category Description | Write a compelling category description for @name that helps customers browse products. | category | Text Generation |

::: tip
Use códigos de atributo como marcadores (prefijados con `@`) en sus prompts. Magic AI los reemplaza con valores reales del producto o categoría que se está procesando.
:::

## Prompts vs. Prompts del sistema — ¿cuál es la diferencia?

- Un **Prompt** dice *qué* escribir para un campo específico ("escribe una descripción de producto que mencione `@name` y `@color`").
- Un **System Prompt** dice *cómo* escribir — voz, tono, creatividad, longitud. Se aplica globalmente, delante de cada prompt.

Consulte la página **[Prompts del sistema](./system-prompts.md)** para la capa de personalidad que se sitúa debajo de cada prompt.
