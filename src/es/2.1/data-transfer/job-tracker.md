# Seguimiento de trabajos

> **Barra lateral:** Transferencia de datos → **Seguimiento de trabajos**
> **URL:** `/admin/data-transfer/job-tracker`

El **Seguimiento de trabajos** es la página central de monitorización para cada trabajo de importación y exportación que UnoPim ejecuta. Cuando hace clic en *Importar ahora* o *Exportar ahora* desde un perfil, o observa cómo se dispara un trabajo en segundo plano, esta es la pantalla que le muestra lo que está sucediendo en este momento, lo que ha terminado y lo que — si hay algo — salió mal.

## ¿Qué es el Seguimiento de trabajos?

Una única vista en tiempo real de cada trabajo de transferencia de datos en el sistema. En lugar de buscar por separado en los listados de importación y exportación, abre una página y ve:

- **El estado de cada trabajo** — en cola, procesando, completo, fallido, cancelado, pausado.
- **Progreso en vivo** — paso actual en el pipeline, recuento de registros creados / actualizados / eliminados hasta el momento.
- **Controles** — pausar, reanudar o cancelar un trabajo en curso.
- **Logs y artefactos** — descargue el log del trabajo o el archivo exportado una vez que la ejecución termine.

<ImagePopup src="/assets/2.1/images/data-transfer/tracker.png" alt="Seguimiento de trabajos" />

## ¿Cómo funciona?

Cada importación y exportación se ejecuta como un trabajo en cola. El momento en que lanza uno, UnoPim:

1. Crea un **registro de trabajo** con un ID único, estado `Queued` y la configuración que se envió.
2. A medida que el queue worker lo recoge, el trabajo pasa por un **pipeline de pasos** fijo — cada paso actualiza el registro.
3. La página Seguimiento de trabajos se suscribe a esas actualizaciones y repinta la UI de progreso en vivo (sin necesidad de refrescar).
4. Cuando el trabajo aterriza en un estado terminal (`Complete`, `Failed`, `Cancelled`), el archivo de log y cualquier artefacto producido se vuelven descargables desde el tracker.

Como cada paso escribe en el mismo registro, puede navegar fuera del tracker a mitad de ejecución y volver más tarde — la página restaura el estado actual desde la base de datos.

## Estados del trabajo

Cada fila en el tracker muestra el estado actual del trabajo como un chip coloreado:

| Estado | Significado |
|---|---|
| **Queued** | El trabajo está en la cola, esperando a un worker. |
| **Validating** / **Validated** | El archivo se está validando, o la validación terminó con éxito y la importación está lista para ejecutarse. |
| **Processing** | Un worker lo ha recogido y el pipeline está avanzando. |
| **Paused** | Lo detuvo a mitad de ejecución; el estado se conserva y puede reanudarse. |
| **Completed** | Todos los pasos terminaron con éxito. |
| **Failed** | Un paso dio error; consulte el log para detalles. |
| **Cancelled** | Lo detuvo permanentemente; no puede reanudarse. |

## Columnas del listado del tracker

El tracker es un datagrid; una fila por trabajo:

| Columna | Descripción |
|---|---|
| **ID** | ID de trabajo autoincrementado. Coincide con el sufijo `#n` en las notificaciones (p. ej., *Import #15*). |
| **Job** | El código del perfil (p. ej., `product_export`, `category_import`). |
| **Type** | Lo que se está transfiriendo — `Products` o `Categories`. |
| **Job Type** | Cómo se activó el trabajo — `import`, `export` o `system` (programado, masivo o iniciado por el AI Agent). |
| **Status** | Estado actual (consulte la tabla anterior). |
| **User** | El administrador que inició el trabajo. |
| **Started at** / **Completed at** | Marcas de tiempo. |
| **Actions** | **Icono de ojo** — abre la página de detalle del trabajo donde se muestran el pipeline de pasos, progreso en vivo y los controles Pause / Resume / Cancel. |

<ImagePopup src="/assets/2.1/images/data-transfer/tracker.png" alt="Listado del Seguimiento de trabajos" />

## Trabajos del sistema y trabajos activados por el AI Agent

No todas las entradas en el tracker provienen de una importación / exportación manual. Los trabajos caen en tres categorías, mostradas en la columna **Job Type**:

| Tipo de trabajo | De dónde viene |
|---|---|
| `import` | Una ejecución manual desde **Transferencia de datos → Importar**. |
| `export` | Una ejecución manual desde **Transferencia de datos → Exportar**, o una **Exportación rápida** desde el listado de Productos. |
| `system` | Un trabajo en segundo plano — actualizaciones masivas de productos, escaneos programados de calidad de catálogo, ejecuciones de auto-enriquecimiento o exportaciones que el AI Agent produjo en su nombre. Los trabajos iniciados por el AI Agent aparecen con nombres como `ai-agent-export-…`. |

Los tres comparten el mismo ciclo de vida, chips de estado, logs y controles Pause / Resume / Cancel — la única diferencia es cómo se iniciaron.

::: tip
Si ve un trabajo `system` que no reconoce, haga clic en el icono de ojo para abrir la página de detalle. La vista de detalle muestra el usuario que activó la cadena y, para los trabajos del AI Agent, el mensaje de chat que lo produjo.
:::

## Pipelines de pasos (en la página de detalle del trabajo)

Haga clic en el **icono de ojo** en una fila del tracker para abrir la página de detalle del trabajo. La página de detalle visualiza el trabajo como un pipeline de pasos horizontal. Los pasos exactos dependen del tipo de trabajo:

### Pipeline de importación

| Paso | Descripción |
|------|-------------|
| **Queued** | El trabajo está esperando a un worker. |
| **Validating** | El archivo se está validando contra las reglas de importación. |
| **Importing** | Los registros se están creando / actualizando / eliminando en la base de datos. |
| **Indexing** | Los índices Elasticsearch se están actualizando para que los productos sean buscables. |
| **Complete** | La importación finalizó con éxito. |

<ImagePopup src="/assets/2.1/images/data-transfer/import-progress.png" alt="Progreso de Importación" />

### Pipeline de exportación

| Paso | Descripción |
|------|-------------|
| **Queued** | El trabajo está esperando a un worker. |
| **Validating** | La configuración de exportación se está validando. |
| **Exporting** | Los registros se están escribiendo en el archivo de salida. |
| **Complete** | La exportación finalizó con éxito. |

<ImagePopup src="/assets/2.1/images/data-transfer/export-progress.png" alt="Progreso de Exportación" />

Cada paso completado se renderiza con una marca verde. Un paso fallido se renderiza en rojo y el pipeline se detiene allí — los pasos posteriores se omiten.

## Detalles mostrados para cada trabajo

Debajo del pipeline, el tracker muestra:

- **Mensaje de éxito / error** — *"Job completed successfully"* más la duración total, o el error específico que detuvo la ejecución (p. ej., *"Required columns not found: code"*).
- **Records Created / Updated / Deleted** — recuentos exactos de lo que cambió.
- **Total Duration** — cuánto tiempo tomó el trabajo desde en cola hasta el estado terminal.
- **Download log** — log completo de importación/exportación para revisión sin conexión.
- **Download Exported Files** *(solo exportaciones)* — el CSV/XLS/XLSX producido por la ejecución.

## Controles

### Pause

Durante una ejecución `Processing`, haga clic en **Pause** para detener temporalmente el trabajo. UnoPim congela el estado del trabajo en el lote actual — no se pierden registros, nada se revierte y el queue worker pasa a otro trabajo.

### Resume

Para un trabajo `Paused`, haga clic en **Resume** para continuar desde el siguiente lote. El trabajo se reanuda exactamente donde lo dejó — los registros ya procesados no se vuelven a procesar.

### Cancel

Haga clic en **Cancel** para detener un trabajo permanentemente. El trabajo se mueve al estado `Cancelled` y no puede reanudarse. Los registros ya escritos por los pasos anteriores **no** se revierten — si necesita deshacerlos, ejecute una importación de limpieza.

::: tip
Pause es la elección correcta durante las horas pico en un trabajo grande. Cancel es para situaciones de *"esta importación tenía el archivo incorrecto"* — una vez que cancela, empieza de nuevo desde la página de listado.
:::

## Abrir el Seguimiento de trabajos

Tres puntos de entrada comunes:

1. **Desde la barra lateral de administración** — haga clic en **Transferencia de datos → Seguimiento de trabajos**.
2. **Tras lanzar un trabajo** — el botón *Importar ahora* / *Exportar ahora* le redirige directamente al tracker para el trabajo que acaba de iniciar.
3. **Desde el Panel** — el widget **Transferencia de datos** lista los trabajos recientes y un enlace *"Ver todos los trabajos"* lleva al tracker.

## Cómo se relaciona el tracker con importaciones y exportaciones

| Página | Rol |
|---|---|
| **[Importar](./import.md)** | Definir un perfil de importación (código, tipo, archivo, estrategia de validación, modo de acción). |
| **[Exportar](./export.md)** | Definir un perfil de exportación (código, tipo, formato de archivo, media). |
| **Seguimiento de trabajos** (esta página) | Monitorizar las ejecuciones que esos perfiles producen — estado, progreso, logs, artefactos. |

Los perfiles son *configuraciones reutilizables*. Cada vez que pulse *Importar ahora* o *Exportar ahora* en un perfil, se crea un nuevo trabajo y se expone en el Seguimiento de trabajos.

## Procesamiento en segundo plano

Los trabajos se ejecutan en el queue worker de Laravel. Si no ve los trabajos en cola progresando, asegúrese de que un worker está ejecutándose:

```bash
php artisan queue:listen
```

Para producción, ejecute el worker como un servicio gestionado (systemd, Supervisor, …) para que se mantenga activo a través de los reinicios.
