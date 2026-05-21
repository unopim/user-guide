# Magic AI — Prompts del sistema

> **Barra lateral:** Magic AI → **Prompts del sistema**
> **URL:** `/admin/magic-ai/system-prompts`

La página **Prompts del sistema** controla la **personalidad** de la IA — la voz, tono y parámetros de generación que se sitúan debajo de cada solicitud de contenido en UnoPim. Solo un System Prompt está activo a la vez, por lo que todo su catálogo mantiene una voz consistente.

## ¿Qué es un System Prompt?

Un *System Prompt* es un preámbulo que Magic AI antepone a cada prompt orientado al usuario antes de enviar la solicitud al modelo. Establece:

- **Tono** — amistoso vs. formal, conciso vs. vívido, autoritativo vs. casual.
- **Temperatura** — qué tan creativa o determinista es la salida (0.0 = ajustada y repetible, 1.0 = variada e inventiva).
- **Max Tokens** — qué tan larga puede ser la respuesta.

Si un [**Prompt**](./prompts.md) dice *qué* escribir para un campo específico (*"escribe una descripción de producto que mencione `@name` y `@color`"*), un **System Prompt** dice *cómo* debería sonar — y ese "cómo" se aplica a cada pieza de contenido que el sistema produce.

## ¿Qué hace esta página?

- Lista los 10 System Prompts preestablecidos que vienen con UnoPim más cualquier personalizado que cree.
- Le permite **crear**, **editar**, **habilitar/deshabilitar** y **eliminar** System Prompts.
- Hace cumplir que solo un System Prompt está activo a la vez — habilitar uno nuevo deshabilita automáticamente el anterior.

<ImagePopup src="/assets/2.1/images/magic-ai/system-prompts.png" alt="Prompts del sistema" />

## Dónde se aplica el System Prompt activo
Cada solicitud de IA en UnoPim fluye a través de un pipeline unificado donde el System Prompt activo se antepone como la capa de personalidad.

Como el System Prompt activo se aplica a **cada** característica de IA — iconos de varita, auto-traducción, auto-enriquecimiento y el AI Agent — cambiarlo cambia instantáneamente la voz de cada salida de IA a través del catálogo.

## Datagrid de Prompts del sistema

| Columna | Descripción |
|--------|-------------|
| **Title** | El nombre del system prompt. |
| **Tone** | El tono conversacional (p. ej., Confident, Vivid, Brief). |
| **Max Tokens** | El número máximo de tokens para las respuestas de IA. |
| **Temperature** | El nivel de creatividad (menor = más enfocado, mayor = más creativo). |
| **Status** | Habilitado o Deshabilitado. |
| **Created At** | Fecha en que se creó el system prompt. |
| **Updated At** | Fecha en que se modificó el system prompt por última vez. |
| **Actions** | Editar (icono de lápiz), Eliminar (icono de papelera). |

## Prompts del sistema Preestablecidos

UnoPim viene con 10 System Prompts preestablecidos. Solo uno puede estar habilitado a la vez.

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

## Crear un System Prompt

Haga clic en el botón **Create System Prompt**. Configure:

- **Title** — El nombre que aparece en el datagrid (p. ej., *"Luxury Brand Voice"*).
- **Tone description** — Una descripción en lenguaje natural de la voz. El modelo lee esto en el momento de la solicitud, así que sea específico: *"Write in an understated, elegant tone. Use concise sentences. Avoid marketing hyperbole."*
- **Max Tokens** — Limita la longitud de la respuesta. Valores menores producen salida más corta y barata; valores mayores le dan al modelo más espacio.
- **Temperature** — 0.0 a 1.0. Valores bajos (0.3–0.5) son mejores para salida confiable y repetible; valores altos (0.8–1.0) añaden variedad y estilo.
- **Status** — Habilitar este deshabilita automáticamente el System Prompt actualmente activo.

## Elegir una temperatura

| Temperatura | Mejor para |
|---|---|
| **0.0 – 0.4** | Especificaciones técnicas, metacampos SEO, contenido de referencia — donde importa la repetibilidad. |
| **0.5 – 0.7** | Descripciones generales de producto, texto de categoría, contenido de marketing cotidiano. |
| **0.8 – 1.0** | Contenido de estilo de vida, narrativa, texto estilo blog — donde brillan la variedad y la creatividad. |

::: tip
Solo un System Prompt puede estar activo a la vez. Habilitar un nuevo System Prompt deshabilita automáticamente el anteriormente activo. Elija una personalidad que coincida con el tono que desea en todo el catálogo — cambiar a mitad de vuelo hará que el contenido antiguo y nuevo se sienta inconsistente.
:::

## Prompts vs. Prompts del sistema

| | Prompt | System Prompt |
|---|---|---|
| **Alcance** | Por campo / por propósito | Global a través de todo el sistema |
| **Dice** | *Qué* escribir | *Cómo* escribir |
| **Cuántos activos** | Tantos como haya creado | Exactamente uno |
| **Marcadores** | Sí (`@attribute_code`) | No — escrito como instrucciones planas |
| **Cadencia típica de cambio** | A menudo — ajustado por atributo, por caso de uso | Raramente — vinculado a la voz de la marca |

Consulte **[Prompts](./prompts.md)** para la capa de instrucción por campo que se combina con el System Prompt activo en el momento de la generación.
