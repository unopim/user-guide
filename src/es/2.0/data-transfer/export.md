# Exportar 

Exportar datos para guardar información en archivos es una práctica común para la gestión, análisis y compartición de datos. Esto implica transferir datos desde un sistema fuente a un formato de archivo adecuado para almacenamiento, uso futuro o compartición con otros. 

### Pasos para añadir Exportación Masiva en UnoPim

**Paso 1:** Vaya al panel de administración de UnoPim y haga clic en **Transferencia de datos → Exportar** en la barra lateral, luego haga clic en el botón **Crear exportación**.

 <ImagePopup src="/assets/2.0/images/data-transfer/export-listing.png" alt="Listado de Exportación" />

**Paso 2:** En las configuraciones generales añada los siguientes campos.

1) **Code -** Introduzca el código de su proceso de Exportación.

2) **Type -** Seleccione el tipo, es decir (Productos, Categorías) que quiere Exportar.

3) **Filters -** Seleccione el formato del archivo **(CSV, XLS, XLSX)** según sus necesidades del desplegable.

4) **With Media -** Habilite o Deshabilite si necesita los datos de exportación con o sin Media. 

Ahora, haga clic en el botón **Save Export**. El perfil se guarda y regresa al listado de Exportaciones.

 <ImagePopup src="/assets/2.0/images/data-transfer/create-export-form.png" alt="Formulario de Crear Exportación" />

El formulario de crear exportación tiene un diseño de dos paneles:
- **Panel General (izquierda)** — Code, Type (Productos/Categorías)
- **Panel Filters (derecha)** — File Format (desplegable CSV/XLS/XLSX), With Media (alternador)

**Paso 3:** Desde el listado de exportación, haga clic en el icono de acción **Export** (icono de reproducción) en la fila que quiere ejecutar. Esto abre la página de ejecución, que muestra un resumen de la configuración de la exportación:

- **Export Profile** — El código de exportación
- **File Format** — CSV, XLS o XLSX
- **With Media** — Sí o No

Haga clic en el botón **Exportar ahora**. UnoPim pone el trabajo en cola y le redirige a la vista de detalle del **Seguimiento de trabajos** para ese trabajo.

## Seguimiento de exportaciones

**Paso 4:** La página de detalle del Seguimiento de trabajos muestra el pipeline de pasos en tiempo real. Cada paso se ilumina con una marca verde a medida que se completa, y cuando el trabajo termina obtiene un banner de éxito más recuentos de registros y enlaces de descarga:

 <ImagePopup src="/assets/2.0/images/data-transfer/export-progress.png" alt="Página de detalle de exportación — pipeline de pasos" />

El tracker muestra un **pipeline de pasos** con indicadores visuales de progreso:

| Paso | Descripción |
|------|-------------|
| **Queued** | El trabajo está en la cola esperando ser procesado |
| **Validating** | La configuración de la exportación se está validando |
| **Exporting** | Los registros se están escribiendo en el archivo de exportación |
| **Complete** | La exportación finalizó con éxito |

Cada paso muestra una marca verde cuando se completa. Debajo del pipeline puede ver:
- **Mensaje de éxito** — "Job completed successfully" con la duración total
- **Records Created / Updated / Deleted** — Recuentos exactos de los registros exportados
- **Total Duration** — Cuánto tiempo tomó la exportación
- **Download log** — Descargue el archivo de log completo de la exportación
- **Botón Download Exported Files** — Haga clic para descargar el archivo generado

### Controles de Pausar, Reanudar y Cancelar

Durante una exportación activa, aparecen los **botones de control de trabajo** en el tracker:

- **Pause** — Detenga temporalmente una exportación en progreso. El estado del trabajo se conserva.
- **Resume** — Continúe una exportación pausada desde donde se dejó.
- **Cancel** — Detenga una exportación por completo. Los trabajos cancelados no pueden reanudarse.

::: tip
La función de pausa y reanudación es especialmente útil para exportaciones grandes. Puede pausar un trabajo durante las horas pico y reanudarlo durante las horas valle.
:::

## Exportación Rápida de Producto

UnoPim soporta la **gestión dinámica de trabajos de exportación rápida de productos**. Puede exportar rápidamente los productos seleccionados directamente desde el listado de productos:

1. Navegue a **Catálogo → Productos**
2. Seleccione los productos que quiere exportar (o exporte todos)
3. Haga clic en el botón **Exportación rápida** en la esquina superior derecha
4. Elija el formato (CSV, XLS, XLSX)
5. La exportación será procesada y descargada

::: tip
Para exportaciones grandes, el sistema utiliza un **pipeline de exportación optimizado** con eager loading y mayor tamaño de lote (hasta 200) para un mejor rendimiento. Las exportaciones de categorías han sido optimizadas para evitar la sobrecarga de memoria.
:::

Así, mediante los pasos anteriores puede crear fácilmente Datos de Exportación en UnoPim.
