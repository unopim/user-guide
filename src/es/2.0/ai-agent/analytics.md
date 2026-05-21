# AI Agent Analytics

El panel **AI Agent Analytics** le muestra cómo se está utilizando el agente y cuánto está costando. Como cada solicitud de IA consume tokens (y los tokens cuestan dinero), este panel es la forma de mantener la factura predecible, detectar patrones de uso inusuales y ajustar el presupuesto diario.

## ¿Qué hace el panel de Analytics?

Expone tres cosas en un solo lugar:

1. **Qué está sucediendo ahora mismo** — consumo de tokens de hoy vs. el presupuesto diario, y cuánto presupuesto queda.
2. **Qué ha sucedido históricamente** — recuentos de conversaciones, llamadas a herramientas y gasto de tokens por día, por usuario y por tipo de operación.
3. **Cuánto ha costado** — uso de tokens traducido a una cifra estimada en dólares basada en los precios de su proveedor.

Úselo para responder preguntas como *"¿Quién está usando el agente más intensamente esta semana?"*, *"¿Qué tipos de operación son los mayores sumideros de tokens?"*, y *"¿Estoy a punto de alcanzar mi tope diario?"*

## ¿Cómo funciona?

Cada vez que un usuario envía un mensaje al AI Agent Chat, UnoPim registra:

- **Quién** envió el mensaje (el usuario administrador).
- **Qué herramientas** llamó el agente para responder.
- **Cuántos tokens** se consumieron (prompt + completion, para cada llamada a herramienta).
- **Cuándo** sucedió el turno.

El panel agrega estos registros para producir los contadores, gráficos y desgloses a nivel de usuario. Los registros persisten mientras lo permita su política de retención de sesión/log, por lo que el análisis de tendencias históricas está disponible desde el primer momento.

### De dónde viene el presupuesto diario

El **Daily Token Budget** es un único número global establecido bajo **Magic AI → Ajustes → Agentic PIM → Daily Token Budget** (p. ej., `500000`). Cada llamada a herramienta que hace el agente decrementa el total acumulado del día. Cuando el total llega a cero, el agente responde con un aviso de presupuesto agotado a cualquier usuario que intente enviar un mensaje. A medianoche (hora del servidor), el contador se reinicia.

El panel muestra **tres cifras derivadas** sobre ese contador en bruto: uso de hoy, presupuesto restante y porcentaje de utilización.

## Visión General del Panel de Analytics

El panel le da una vista centralizada de toda la actividad del AI Agent. Desde él, puede monitorizar:

- **Total de tokens consumidos** durante un período de tiempo seleccionado.
- **Número de conversaciones** iniciadas por cada usuario administrador.
- **Número de llamadas a herramientas** ejecutadas por el agente.
- **Tendencias de uso diarias y semanales** mostradas en gráficos visuales.

<!-- TODO: Add screenshot -->

El panel es accesible desde el panel de administración y está disponible para usuarios con los permisos apropiados.

## Seguimiento del Presupuesto de Tokens

El AI Agent opera con un **presupuesto diario de tokens** — un único tope global compartido entre todos los usuarios administradores. El panel muestra:

- **Uso diario de tokens** — Cuántos tokens se han consumido hoy entre todos los usuarios.
- **Presupuesto restante** — Tokens aún disponibles para el día actual.
- **Porcentaje de utilización del presupuesto** — Indicador visual (p. ej., una barra de progreso) de cuánto del presupuesto diario se ha utilizado.

Cuando el presupuesto diario de tokens se agota, el AI Agent se pausa por el resto del día. Notifica a los usuarios que se ha alcanzado el límite y reanuda la operación normal al día siguiente cuando el presupuesto se restablece.

::: tip
Mantenga un ojo en la utilización diaria si su equipo se apoya en auto-enriquecimiento u operaciones masivas. Esas tareas consumen más tokens por turno que las consultas de búsqueda simples.
:::

## Monitorización del Uso y los Costes de IA

El panel le ayuda a entender las implicaciones de coste del agente. Las métricas clave incluyen:

- **Consumo de tokens por usuario** — Qué miembros del equipo están usando el agente más intensamente.
- **Consumo de tokens por tipo de operación** — Qué tipos de operaciones (creación de producto, auto-enriquecimiento, escaneos de calidad de datos, generación de imágenes, etc.) consumen más tokens.
- **Estimación de costes** — Tokens traducidos a una estimación en dólares basada en el precio de su proveedor/modelo seleccionado.

<!-- TODO: Add screenshot -->

Esta información es útil para presupuestar, para detectar uso descontrolado y para decidir si asignar un modelo más barato a una capacidad particular (p. ej., usar un modelo más ligero para traducción y mantener el modelo premium para generación de contenido).

## Configurar Presupuestos Diarios de Tokens

Para establecer o ajustar el presupuesto diario de tokens:

1. Navegue a **Magic AI → Ajustes** en el panel de administración.
2. Abra la sección **Agentic PIM**.
3. Establezca el campo **Daily Token Budget** (p. ej., `500000`).
4. Haga clic en **Save Configuration** para aplicar.

<!-- TODO: Add screenshot -->

El presupuesto se aplica globalmente entre todos los usuarios administradores. Una vez que el uso combinado alcanza el límite diario, el agente se pausa hasta la medianoche.

::: tip
Comience con un presupuesto diario conservador y elévelo gradualmente a medida que aprenda los patrones de uso de su equipo. Esto evita picos sorpresa durante el despliegue.
:::

## Visualización del Historial de Uso y Tendencias

La sección **Usage History** le permite revisar la actividad pasada sobre rangos de fechas personalizables. Proporciona:

- **Desglose de uso diario** — Vista día a día del consumo de tokens y los recuentos de conversaciones.
- **Resúmenes semanales y mensuales** — Vistas agregadas para análisis de tendencias a más largo plazo.
- **Identificación de picos de uso** — Resalta los días o períodos con uso inusualmente alto para que pueda investigar antes de que se conviertan en un problema.

<!-- TODO: Add screenshot -->

Use estos datos históricos para informar la asignación del presupuesto, detectar usuarios avanzados e identificar operaciones que podrían beneficiarse de un modelo más barato.

## Cómo se vincula analytics con los otros controles del agente

El panel de analytics es la capa de observabilidad que se sitúa sobre los controles que configuró bajo **Magic AI → Ajustes → Agentic PIM**. Juntos forman un bucle de retroalimentación:

```
Configure budget + approval mode    ←──┐
             │                         │
             ▼                         │
   Users chat with the agent           │
             │                         │
             ▼                         │
   Analytics records usage             │
             │                         │
             ▼                         │
   You review trends and costs    ────┘
```

Un despliegue típico es: comenzar con un Daily Token Budget conservador y aprobación Manual Review, observar las analíticas durante una semana, elevar el presupuesto donde sea seguro y mover los flujos de trabajo de confianza a Auto-Approve basándose en lo que el panel le dice.

