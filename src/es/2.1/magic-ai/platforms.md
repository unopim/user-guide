# Magic AI — Platforms

> **Barra lateral:** Magic AI → **Platforms**
> **URL:** `/admin/magic-ai/platforms`

La página **Platforms** es donde registra los proveedores de IA con los que UnoPim tiene permitido comunicarse. Sin al menos una plataforma activa, cualquier otra característica de Magic AI — iconos de varita, auto-traducción, auto-enriquecimiento y el AI Agent Chat — permanece desactivada.

## ¿Qué es una Platform?

Una *Platform* es una conexión de proveedor configurada. Tiene tres partes:

1. **Provider** — la empresa cuya IA desea utilizar (OpenAI, Anthropic, Gemini, Ollama, Groq, **Custom**, etc.).
2. **API key** — el secreto que autoriza a UnoPim a llamar a la API de ese proveedor.
3. **Enabled models** — qué modelos del proveedor deben estar disponibles dentro de UnoPim.

Puede registrar **tantas Platforms como desee**. Una configuración común es un proveedor premium para contenido (p. ej., OpenAI `gpt-4o`) y uno más barato o más rápido para traducción (p. ej., Gemini `gemini-1.5-flash`). La página Platforms las mantiene lado a lado; la página **Ajustes** decide qué Platform maneja qué capacidad.

::: tip Proveedor Custom
¿Necesita llamar a un servicio compatible con OpenAI que no esté en la lista preestablecida — por ejemplo un gateway autoalojado, un proxy corporativo o un proveedor de inferencia alternativo? Elija el proveedor **Custom** y proporcione su propia **Base URL**. UnoPim enrutará las solicitudes a través del mismo pipeline `LaravelAiAdapter` usado para los proveedores integrados.
:::

## ¿Qué hace esta página?

- Lista cada Platform que ha registrado, junto con su estado y modelos.
- Le permite **añadir**, **editar**, **habilitar/deshabilitar**, **eliminar** y **establecer una Platform predeterminada**.
- Cifra cada clave API al guardar — las claves nunca se almacenan en texto plano y se enmascaran en la UI.

<ImagePopup src="/assets/2.1/images/magic-ai/ai-platforms.png" alt="AI Platforms" />

## Datagrid de Platforms

| Columna | Descripción |
|--------|-------------|
| **Label** | El nombre que asignó a la configuración de la plataforma. |
| **Provider** | El proveedor de IA (OpenAI, Anthropic, Gemini, Ollama, Groq, etc.). |
| **Models** | Los modelos habilitados para esta plataforma. |
| **Default** | Si esta plataforma es la predeterminada (Sí/No). |
| **Status** | Habilitada o Deshabilitada. |
| **Created At** | Fecha en que se añadió la plataforma. |
| **Actions** | Estrella (establecer como predeterminada), Editar (icono de lápiz), Eliminar (icono de papelera). |

## Añadir una Platform

Haga clic en el botón **Add Platform** en la esquina superior derecha. Se abre un modal con los siguientes campos:

1. **Provider** — Seleccione del desplegable (OpenAI, Anthropic, Gemini, Ollama, Groq, **Custom**, etc.).
2. **Label** — Un nombre descriptivo como *"OpenAI Production"* o *"Gemini Translation"*. Esto es lo que verá en los desplegables de Ajustes.
3. **Base URL** *(solo proveedor Custom)* — El endpoint compatible con OpenAI a llamar (p. ej., `https://gateway.example.com/v1`). Solo se muestra cuando **Provider = Custom**.
4. **API Key** — Pegue la clave de su cuenta de proveedor. Se cifra antes de llegar a la base de datos.
5. **Models** — Multi-select de los modelos que desea exponer. Solo los modelos que marque aquí aparecen en los desplegables descendentes Text / Image / Translation / Agentic PIM en la página Ajustes.
6. **Status** — Alterne para habilitar o deshabilitar la plataforma.

<ImagePopup src="/assets/2.1/images/magic-ai/add-platform.png" alt="Añadir Platform" />

::: tip
Las credenciales API se almacenan con almacenamiento cifrado de credenciales por seguridad. Sus claves API nunca se almacenan en texto plano.
:::

### Test Connection

Tras guardar, use la acción **Test Connection** en la fila de la plataforma para verificar las credenciales antes de depender de ella. La prueba está impulsada por el nuevo **ModelRecommender**, que:

- Elige un modelo capaz de texto de su lista habilitada (los modelos solo de imagen se omiten, para que no devuelvan un falso negativo).
- Envía una pequeña solicitud de sondeo contra el proveedor.
- Reporta un pase/fallo claro. Si falla, el [PrismErrorResolver](../ai-agent/index.md) traduce el error subyacente del proveedor en un mensaje amigable para el usuario (clave inválida, límite de tasa, modelo no disponible, etc.).

::: tip
Ejecute Test Connection cada vez que rote una clave API, cambie la Base URL de un proveedor Custom o marque un nuevo modelo — es la forma más rápida de confirmar que la plataforma está saludable sin abrir el AI Agent Chat.
:::

## Acciones de Platform

- **Icono de estrella** — Establece la plataforma como **predeterminada**. Donde sea que la página Ajustes muestre *"Use Default Platform"*, se resuelve a la plataforma con estrella. Solo una puede ser la predeterminada a la vez.
- **Test Connection** — Valida las credenciales, la Base URL (para proveedores Custom) y al menos un modelo de texto utilizable. Los modelos solo de imagen se omiten automáticamente.
- **Icono de lápiz** — Abre el modal de edición para que pueda actualizar la etiqueta, rotar la clave API, ajustar la lista de modelos o cambiar el estado.
- **Icono de papelera** — Elimina la configuración de la plataforma. Cualquier característica que aún apunte a esta plataforma en Ajustes vuelve a la predeterminada. Irreversible.

## Cómo fluye la selección de Platform hacia las características

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

Cada solicitud — desde la generación de un solo campo hasta un plan complejo del AI Agent — sigue el **Agentic PIM Pipeline**:

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Pipeline de Agentic PIM — Flujo de trabajo de 5 pasos" />


## Configuración mínima

Para que cualquier característica de Magic AI funcione:

1. Registre al menos **una** Platform.
2. Asegúrese de que tenga al menos **un** Model habilitado.
3. Establezca su Status en **Enabled**.
4. **Marque con estrella** una Platform como predeterminada.

Una vez hecho eso, diríjase a **Magic AI → Ajustes** para enrutar cada capacidad (Text / Image / Translation / Agentic PIM) a una Platform y Model de su elección.
