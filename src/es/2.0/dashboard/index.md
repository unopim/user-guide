# Panel

El **Panel** es la página de aterrizaje que ve inmediatamente después de iniciar sesión en [UnoPim](https://unopim.com/). Está diseñado como un centro de mando de una sola pantalla: en menos de un segundo debería poder saber *qué tan grande* es su catálogo, *qué tan saludable* está, *qué ha estado haciendo su equipo*, y *qué necesita atención a continuación* — sin hacer clic en ninguna otra página.

<ImagePopup src="/assets/2.0/images/dashboard/dashboard-overview.png" alt="Visión general del Panel" />

## ¿Para qué sirve el Panel?

El Panel existe para responder cuatro preguntas en el momento en que inicia sesión:

| Pregunta | Dónde se encuentra la respuesta |
|---|---|
| **¿Qué tan grande es mi catálogo?** | Tarjetas Resumen del catálogo + Estructura del catálogo |
| **¿Qué tan saludables son mis datos?** | Requiere atención, Completeness, Preparación del canal |
| **¿Qué ha estado haciendo el equipo?** | Estadísticas de producto, gráfico Actividad de producto, Actividad reciente |
| **¿Qué hago a continuación?** | Acciones rápidas del Banner de bienvenida, alertas Requiere atención, panel Transferencia de datos |

Está pensado deliberadamente para la consulta — el Panel reporta el estado, luego le señala a la página correcta para actuar. Cada tarjeta y panel es pulsable (para saltar al listado relevante) o emparejado con un botón de acción rápida.

## Cómo funciona el Panel

La página está compuesta de **widgets** independientes, cada uno con origen en una parte diferente de UnoPim:

```
┌─────────────────────────────────────────────────────────┐
│ Banner de bienvenida   (saludo + acciones rápidas)      │
├─────────────────────────────────────────────────────────┤
│ Resumen del catálogo   ← tablas de productos + categorías│
│ Estructura del catálogo  ← atributos, locales, canales  │
├─────────────────────────────────────────────────────────┤
│ Requiere atención    ← motor de completitud             │
├─────────────────────────────────────────────────────────┤
│ Analytics          ← estadísticas + gráfico 7 días      │
│ Completeness       ← completitud por canal              │
│ Preparación del canal  ← recuentos listos por canal     │
├─────────────────────────────────────────────────────────┤
│ Operaciones        ← registro de actividad + Seguimiento de trabajos│
├─────────────────────────────────────────────────────────┤
│ AI Agent button (floating, bottom-right)                │
│ Selector de tema (top-right, next to bell)              │
└─────────────────────────────────────────────────────────┘
```

Los recuentos y gráficos se calculan al cargar la página (sin trabajos programados), por lo que el Panel siempre refleja el estado actual de la base de datos.

## Widgets

### Banner de bienvenida

Un saludo personalizado — **"¡Hola! [Su Nombre]"** — fijado en la parte superior de la página. Funciona también como rampa de lanzamiento para las tres acciones más comunes:

- **Crear producto** — va directamente a la página de creación de producto.
- **Importar datos** — abre el flujo de importación.
- **Exportar datos** — abre el flujo de exportación.

::: tip
Use estos botones de acción rápida en lugar de navegar por la barra lateral — el Panel está optimizado para llevarle al trabajo en un clic.
:::

### Resumen del catálogo

Dos **tarjetas de resumen pulsables** que muestran el tamaño de su catálogo:

| Tarjeta | Muestra | Al hacer clic le lleva a |
|---|---|---|
| **Total de productos** | Conteo de productos en todos los estados y tipos. | Página de listado de productos. |
| **Total de categorías** | Conteo de categorías en todo el árbol. | Página de listado de categorías. |

### Estructura del catálogo

Una fila de tarjetas pequeñas que dan una instantánea estructural de cómo está configurado el catálogo. Útil para detectar lagunas de configuración — por ejemplo, un nuevo canal sin un locale asignado.

| Tarjeta | Lo que cuenta |
|---|---|
| **Total de atributos** | Atributos de producto definidos en el sistema. |
| **Total de grupos** | Grupos de atributos. |
| **Total de familias** | Familias de atributos. |
| **Total de locales** | Locales configurados a través de los canales. |
| **Total de divisas** | Divisas configuradas para uso en los canales. |
| **Total de canales** | Canales de venta configurados. |

### Requiere atención

Expone elementos que necesitan acción del administrador **ahora mismo**. La alerta más común son los **productos no enriquecidos** — productos a los que les faltan los datos requeridos para estar listos para el canal. Cuando el catálogo está saludable, esta sección se colapsa y permanece silenciosa.

::: warning
Los productos no enriquecidos pueden no estar listos para distribución a sus canales de venta. Revise esta sección regularmente para mantener el catálogo listo para envío.
:::

### Analytics

#### Estadísticas de producto

Un desglose numérico del catálogo — la forma más rápida de juzgar la salud a lo largo del tiempo.

| Métrica | Significado |
|---|---|
| **Total de productos** | Recuento global de productos. |
| **Activos / Inactivos** | Cuántos productos están actualmente habilitados vs. deshabilitados. |
| **Distribución de tipos de producto** | División porcentual entre productos simples y configurables. |
| **Nuevos esta semana** | Productos creados en la semana actual. |
| **Con variantes** | Productos que tienen configuraciones de variantes. |
| **Completitud media** | Puntuación media de completitud a través de todos los productos. |
| **Enriquecidos** | Número de productos marcados como totalmente enriquecidos. |

#### Actividad de producto (Últimos 7 Días)

Un gráfico de dos líneas que traza los productos **Creados** vs. **Actualizados** por día durante los últimos siete días. Las líneas planas en cero son una señal de que el catálogo ha quedado en silencio; los picos suelen significar que una importación masiva o una ejecución de enriquecimiento acaba de terminar.

### Completeness

Muestra qué tan bien sus datos de producto cumplen con los requisitos de cada **canal**, con **desgloses por locale visibles lado a lado**. Para cada canal configurado (p. ej., *Default*, *Amazon*, *Flipkart*), la tarjeta muestra:

- Un **porcentaje general del canal** como un indicador circular.
- **Filas por locale** — una fila por locale asignado a ese canal (p. ej., Alemán, Inglés, Francés), cada una con su propio indicador.
- Un **breve veredicto** bajo el indicador principal:

| Mensaje | Significado |
|---|---|
| **Almost complete** | Casi listo — solo se necesitan adiciones menores. |
| **Low completeness, add details to improve** | Aún falta información significativa del producto. |

Esta disposición facilita detectar la combinación exacta de canal + locale que está bloqueando que un producto esté listo para envío.

::: tip
Trabaje primero en el par canal-locale con la puntuación más baja. Un producto puede estar listo para *Default* pero todavía bloqueado en *Amazon → French* si falta algún atributo requerido en esa combinación específica.
:::

### Preparación del canal

Una **barra de progreso horizontal por canal** que muestra *"X de Y productos listos"* con un porcentaje (p. ej., *"2 de 3 productos listos — 67%"*). Donde el widget Completeness muestra la *calidad promedio*, Preparación del canal muestra el *recuento listo para envío* — el número de productos que pasan el listón de los campos requeridos por ese canal.

### Operaciones

#### Actividad reciente

Un feed cronológico de cambios a través del sistema. Cada entrada captura:

| Campo | Significado |
|---|---|
| **Tipo de acción** | Creado, actualizado o eliminado. |
| **Tipo de entidad** | Familia, Atributo, Producto, Categoría, Canal, etc. |
| **Nombre de usuario** | Quién realizó la acción. |
| **Marca de tiempo** | Cuándo ocurrió. |

Esta es la forma más rápida de responder *"¿alguien cambió X recientemente?"* sin abrir la pestaña history en cada entidad.

#### Transferencia de datos

Panel de estado para sus trabajos de importación y exportación más recientes. Cada trabajo muestra uno de cinco estados:

| Estado | Significado |
|---|---|
| **Completado** | El trabajo terminó con éxito. |
| **Procesando** | El trabajo está ejecutándose actualmente. |
| **Pendiente** | El trabajo está en cola esperando a comenzar. |
| **Fallido** | El trabajo encontró errores. |
| **Cancelado** | El trabajo fue cancelado manualmente. |

Haga clic en **"Ver todos los trabajos"** para abrir el **Seguimiento de trabajos** completo con barras de progreso por paso y controles pausar/reanudar/cancelar.

### AI Agent

Un botón flotante **"Open Agenting PIM"** se sitúa en la esquina inferior derecha del Panel (y en cada otra página de administración). Hacer clic en él abre el AI Agent conversacional — escriba lo que necesita en lenguaje natural y llama a la herramienta PIM correcta en su nombre.

::: tip
El AI Agent puede crear productos, enriquecer contenido, ejecutar escaneos de calidad de datos y responder preguntas sobre su catálogo sin que usted navegue por la barra lateral. Consulte **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** para la lista completa de más de 30 herramientas.
:::

### Tema Oscuro / Claro

UnoPim admite un alternador de **Tema Oscuro / Claro**. Haga clic en el icono de sol/luna en la esquina superior derecha de la barra de cabecera (junto a la campana de notificación) para cambiar entre modo claro y oscuro. Su preferencia persiste entre sesiones, por lo que cada página — el Panel, listado de productos, editores y el AI Agent Chat — mantiene el tema que eligió.

<ImagePopup src="/assets/2.0/images/settings/dark-theme.png" alt="Tema Oscuro" />

::: tip
El alternador de tema es global. El modo que elija se aplica en todas partes en la administración, no solo en el Panel.
:::

## Flujo de trabajo típico del Panel

Una forma común en que los administradores utilizan el Panel al inicio de un turno:

1. **Comprobar Requiere atención** — despejar cualquier alerta urgente (p. ej., productos no enriquecidos).
2. **Examinar Completeness y Preparación del canal** — elija el canal/locale más débil y planifique una limpieza.
3. **Echar un vistazo a Actividad reciente** — confirme que los trabajos nocturnos terminaron y que los cambios de los compañeros tienen sentido.
4. **Abrir Transferencia de datos** — observe cualquier importación/exportación en curso, o haga clic para ir al Seguimiento de trabajos para más detalle.
5. **Iniciar el trabajo** — use una acción rápida del Banner de bienvenida o el botón AI Agent para comenzar las tareas del día.

Seguir este flujo convierte el Panel en una pantalla de triaje diaria en lugar de simplemente una página de aterrizaje.
