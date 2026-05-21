# PIM Agéntico

> **Barra lateral:** **Agentic PIM**
> **Configuración disponible en:** Magic AI → Ajustes → sección *Agentic PIM* (`/admin/configuration/general/magic_ai`)

**Agentic PIM** es la capacidad de IA estrella de UnoPim — el paraguas que cubre cada flujo de trabajo de IA autónomo o semi-autónomo que el producto ejecuta en su nombre. Desde una tarjeta de configuración bajo **Magic AI → Ajustes**, usted controla:

- El panel de **AI Agent Chat** (el icono de estrella flotante en la esquina inferior derecha de cada página de administración).
- El trabajo en segundo plano de **Auto-Enrichment** que rellena los campos faltantes del producto tras la creación.
- La exploración programada del **Catalog Quality Monitor**.
- El **Confidence Threshold** y el **Change Approval Mode** que deciden cuándo los cambios propuestos por la IA llegan a sus datos o entran en la Cola de Aprobación.
- El **Daily Token Budget** que limita el gasto combinado en todo lo anterior.

## ¿Qué hace Agentic PIM?

Piense en Agentic PIM como un pequeño equipo de trabajadores de IA observando su catálogo:

| Trabajador | Disparador | Resultado |
|---|---|---|
| **AI Agent Chat** | Usted escribe una instrucción en el panel de chat. | Llama a una o más de más de 30 herramientas PIM para llevar a cabo su solicitud. |
| **Auto-Enrichment** | Se crea un nuevo producto (manualmente o vía importación). | Rellena descripciones faltantes, metadatos SEO, etc. |
| **Catalog Quality Monitor** | Programado (en segundo plano). | Recorre el catálogo en busca de datos pobres o inconsistentes y los expone en Needs Attention. |
| **Cola de aprobación** | Cualquier trabajador de IA propone un cambio. | Retiene o aplica el cambio en función del modo de aprobación + umbral de confianza. |

Los cuatro comparten la misma Platform, Model, Prompt, System Prompt y presupuesto de tokens — configurados una sola vez desde **Magic AI → Ajustes**.

## ¿Cómo funciona Agentic PIM?
Cada acción de Agentic PIM sigue el mismo pipeline de cinco pasos:

<ImagePopup src="/assets/2.1/images/ai-agent/agentic-pim-pipeline.png" alt="Pipeline de Agentic PIM — Flujo de trabajo de 5 pasos" />

Este pipeline se ejecuta sobre el **LaravelAiAdapter** unificado, por lo que cambiar las Platforms o los Models en Ajustes de Magic AI cambia inmediatamente el comportamiento de cada trabajador de Agentic PIM.


## Configuración — los ajustes de Agentic PIM

Abra **Magic AI → Ajustes** y expanda la tarjeta **Agentic PIM**. Los campos son:

| Campo | Qué hace |
|---|---|
| **Enable AI Agent Chat** | Interruptor maestro para el panel de chat flotante. Cuando está desactivado, el icono de estrella en la esquina inferior derecha queda oculto y ningún usuario puede conversar con el agente. Auto-Enrichment y Catalog Quality Monitor siguen ejecutándose. |
| **Max Agent Steps Per Turn** | Cuántas llamadas a herramientas puede encadenar el agente por un solo disparador. Preselecciones desplegables en lugar de números brutos (p. ej., **`3 (Fast)`**). Mayor = más autonomía por turno; menor = control más estricto y tokens más baratos. |
| **Daily Token Budget** | Límite diario global sobre los tokens gastados por Agentic PIM (p. ej., `500000`). Compartido entre chat, enriquecimiento y monitorización. Cuando se alcanza el límite, cada trabajador de IA se pausa hasta el día siguiente. |
| **Auto-Enrichment on Product Create** | Cuando está habilitado, cada producto recién creado se pone en cola para enriquecimiento en segundo plano — descripciones faltantes, campos SEO, etc. se rellenan automáticamente. |
| **Catalog Quality Monitor** | Ejecuta un barrido de IA programado que reporta datos del catálogo pobres, faltantes o inconsistentes en la sección **Requiere atención** del Panel. |
| **Confidence Threshold** | Puntuación mínima de confianza (por defecto **0.7 — Balanced**) requerida antes de aplicar un cambio propuesto sin revisión. Por debajo del umbral, el cambio se retiene en la Cola de Aprobación independientemente del modo de aprobación. |
| **Change Approval Mode** | *Auto-apply* / *Confirm & apply* / *Manual review*. Gobierna cómo los cambios propuestos por la IA llegan a sus datos. Por defecto *"Confirm & apply (propose values, ask to confirm, then execute)"*. |

<ImagePopup src="/assets/2.1/images/magic-ai/magic-ai-settings.png" alt="Ajustes de Magic AI — sección Agentic PIM" />

## Secuencia de configuración recomendada

Agentic PIM tiene muchos parámetros. Un despliegue típico se ve así:

1. **Día 0 — comienzo cauteloso.** Habilite solo AI Agent Chat. Establezca *Max Agent Steps Per Turn* en el preset más bajo, Daily Token Budget en un número conservador y Change Approval Mode en **Manual review**.
2. **Días 1-3 — observe en Analytics.** Vigile el uso de tokens y qué herramientas llama realmente el agente. Revise cada cambio en la Cola de Aprobación.
3. **Día 4+ — afloje selectivamente.** Eleve el presupuesto de tokens una vez que comprenda el gasto. Mueva los flujos de trabajo de confianza (p. ej., rellenar meta descripciones en una familia específica) a **Confirm & apply** o **Auto-apply**. Mantenga los flujos de trabajo arriesgados en Manual review.
4. **Semana 2 — active los trabajadores en segundo plano.** Habilite primero **Auto-Enrichment on Product Create** (entidad única, coste predecible). Habilite **Catalog Quality Monitor** una vez que esté satisfecho con la calidad del enriquecimiento.

## Cómo se relaciona Agentic PIM con otra documentación

| Si desea… | Lea |
|---|---|
| Aprender la UI del chat en detalle | **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** |
| Revisar, aprobar o rechazar cambios propuestos | **[Cola de aprobación](../ai-agent/approval-queue.md)** |
| Ver el uso de tokens, costes y actividad | **[Analytics](../ai-agent/analytics.md)** |
| Configurar Platforms, Prompts, Prompts del sistema | **[Configuración de Magic AI](../configuration/magic-ai.md)** |
| Afinar el enrutamiento por capacidad (Text / Image / Translation) | **[Magic AI → Ajustes](../magic-ai/settings.md)** |

## Controles de seguridad de un vistazo

Cuatro capas se apilan para mantener la autonomía de Agentic PIM bajo control:

| Capa | Configurada en | Qué protege |
|---|---|---|
| **Permisos ACL** | Ajustes → Roles | Impide que el agente haga cualquier cosa que el rol del llamador no pueda hacer. |
| **Daily Token Budget** | Magic AI → Ajustes → Agentic PIM | Limita el gasto total entre todos los trabajadores de Agentic PIM por día. |
| **Max Agent Steps Per Turn** | Magic AI → Ajustes → Agentic PIM | Limita cuántas herramientas puede encadenar un disparador. |
| **Confidence Threshold + Change Approval Mode + Cola de aprobación** | Magic AI → Ajustes → Agentic PIM | Retiene las escrituras arriesgadas o de baja confianza para revisión. |

Ninguno de estos requiere volver a desplegar o reiniciar — guarde la página de configuración de Magic AI y cada trabajador de Agentic PIM recoge los nuevos valores en su próxima ejecución.
