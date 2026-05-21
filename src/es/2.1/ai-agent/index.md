# AI Agent (Agentic PIM)

El **AI Agent** — también llamado **Agentic PIM** — es un asistente conversacional integrado directamente en UnoPim. En lugar de hacer clic a través de menús y formularios, usted le indica al agente en lenguaje natural lo que desea ("crea un SKU de camiseta con estos atributos", "encuentra cada producto sin descripción", "refleja los up-sells del SKU A en el SKU B"), y este realiza la tarea por usted llamando a operaciones PIM reales bajo el capó.

## ¿Qué es el AI Agent?

El AI Agent es **diferente de los iconos de varita de Magic AI**. Esta es la distinción:

| | Magic AI (iconos de varita) | AI Agent (Agentic PIM) |
|---|---|---|
| **Dónde lo activa** | Haga clic en la varita sobre un campo específico | Botón de chat en la esquina inferior derecha de cualquier página |
| **Interacción** | Una sola toma: clic, generar, aceptar | Conversación: multi-turno, con memoria |
| **Alcance** | Un campo en una entidad | Cualquier cosa en el catálogo — productos, categorías, atributos, usuarios, roles, canales |
| **Cómo actúa** | Produce contenido para el campo | Llama a herramientas PIM reales (crear, actualizar, buscar, importar, exportar, eliminar, edición masiva, …) |
| **Salida** | Texto o una imagen | Resultados de llamadas a herramientas, transmitidos de vuelta al chat |

En resumen: **Magic AI escribe contenido. El AI Agent realiza acciones.**

## ¿Cómo funciona el AI Agent?
Cada mensaje de chat fluye a través del **Agentic PIM Pipeline**, un bucle de 5 pasos que garantiza seguridad, precisión y transparencia:

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Pipeline de Agentic PIM — Flujo de trabajo de 5 pasos" />

Debido a que el agente dispone de herramientas reales y datos reales, es más potente que un chat LLM simple — pero también más consecuente. La Cola de Aprobación, el presupuesto de tokens, el umbral de confianza y las comprobaciones ACL existen para mantener ese poder bajo su control.


## Capacidades Clave

### Gestión de Productos
Cree, actualice, busque, copie, elimine y realice ediciones masivas de productos sin salir del chat. El agente maneja igual de bien los ajustes de un solo producto como las exploraciones a lo largo del catálogo.

### Calidad de Datos y Completitud
Pídale al agente que recorra el catálogo en busca de vacíos — descripciones faltantes, campos SEO pobres, productos por debajo de un umbral de completitud — y produce un informe estructurado más correcciones sugeridas.

### Auto-Enriquecimiento
Indíquele al agente que rellene descripciones faltantes, meta títulos o cualquier otro campo de texto, y genera contenido que se ajusta a la voz de su marca (a través del Prompt del sistema activo) y a sus plantillas de prompts.

### Operaciones Masivas
Actualice atributos en masa, reasigne categorías, alterne el estado o aplique transformaciones (añadir/anteponer/reemplazar) en muchos SKUs a la vez — todo desde una única instrucción conversacional.

### Planificación de Tareas
Para trabajo de varios pasos ("limpia la colección Verano: actualiza precios, añade una descripción promocional y asigna la categoría Oferta"), el agente construye un plan, le muestra los pasos y los ejecuta en secuencia.

### Gestión de Asociaciones *(Nuevo en v2.1.0)*
Añada, elimine, liste o refleje productos relacionados, up-sells y cross-sells a través de la conversación — sin necesidad de abrir cada página de edición de producto. Los resultados de búsqueda de productos en el chat ahora se muestran como **enlaces clicables** para que pueda saltar directamente a la página de edición del producto.

### Insights del Catálogo
Pida recuentos, estadísticas, actividad reciente o el estado de canales, usuarios y roles. El agente devuelve resúmenes estructurados sin que usted tenga que navegar a cada página.

## Streaming en Tiempo Real (SSE)

El AI Agent transmite la salida mediante **Server-Sent Events**. A medida que el agente decide qué hacer y llama a cada herramienta, usted ve el razonamiento y los resultados aparecer progresivamente en el chat — no tiene que esperar a que toda la respuesta termine. Esto hace que las operaciones largas se sientan responsivas.

## Persistencia de Conversaciones

Las sesiones de chat están **respaldadas por base de datos**. Eso significa:

- Recargar la página no borra la conversación.
- Cerrar y reabrir el navegador la conserva.
- Dentro de una misma sesión, el agente recuerda lo que ya han discutido, por lo que puede referirse de nuevo ("aplica ese mismo cambio también al SKU B").
- Entre sesiones, los hechos que pida explícitamente al agente que **recuerde** (a través de la herramienta interna `RememberFact`) se transfieren.

Consulte la pestaña **Sessions** en el panel de chat para reanudar, renombrar o eliminar conversaciones pasadas.

## Autorización ACL

Cada una de las más de 30 herramientas respeta sus **permisos ACL**. Si su rol de administrador no puede eliminar productos, el agente no puede eliminar productos en su nombre — la herramienta correspondiente simplemente no se ejecuta. Esto significa que conceder acceso al AI Agent no amplía lo que cualquier usuario puede hacer; solo cambia *cómo* lo hacen.

## Limitación de Tasa

Para mantener el sistema estable y los costes predecibles, el AI Agent aplica **30 solicitudes por minuto por usuario**. Si excede el límite, el agente responde con un aviso de reintento y se desbloquea automáticamente cuando pasa la ventana.

## Controles de Seguridad

Tres controles mantienen la autonomía del agente bajo control — todos configurados desde **Magic AI → Ajustes → Agentic PIM**:

- **Daily Token Budget** — limita cuánto puede gastar el agente en una ventana de 24 horas.
- **Max Agent Steps Per Turn** — limita cuántas herramientas puede encadenar para un solo mensaje del usuario.
- **Change Approval Mode** — enruta los cambios arriesgados o de baja confianza a través de la [Cola de Aprobación](./approval-queue.md) antes de que lleguen a sus datos.

Y una señal más que vale la pena conocer: el **Confidence Threshold**. Si la puntuación de confianza interna del agente para un cambio propuesto cae por debajo del umbral, el cambio se retiene para aprobación manual, independientemente del modo de aprobación.

::: tip
El AI Agent es más eficaz cuando proporciona instrucciones claras y específicas. En lugar de "arregla mis productos", pruebe "actualiza todos los productos en la categoría Electrónica que no tengan meta descripción". Intención específica → llamadas a herramientas específicas → resultados más rápidos, más baratos y más precisos.
:::

## Dónde ir a continuación

- **[AI Agent Chat](./ai-agent-chat.md)** — Cómo abrir, interactuar y gestionar sesiones de chat; lista completa de más de 30 herramientas.
- **[Cola de aprobación](./approval-queue.md)** — Cómo se revisan, aprueban o rechazan los cambios propuestos por la IA.
- **[Analytics](./analytics.md)** — Paneles de uso de tokens, costes y actividad para el agente.
- **[Configuración de Magic AI](../configuration/magic-ai.md)** — Platforms, Ajustes, Prompts y Prompts del sistema que impulsan el agente.
