# Importar

La importación masiva es una característica que permite a los usuarios importar grandes cantidades de datos a un sistema rápida y eficientemente. Simplifica el proceso y ahorra tiempo al no tener que añadir cada pieza de información una por una.

La característica funciona de manera diferente para cada sistema y tiene una gran variedad de casos de uso en muchas industrias, así como en [UnoPim](https://unopim.com/).

### Pasos para añadir Importación Masiva en UnoPim

**Paso 1:** Vaya al panel de administración de UnoPim y haga clic en **Transferencia de datos → Importar** en la barra lateral, luego haga clic en el botón **Crear importación**.

 <ImagePopup src="/assets/2.1/images/data-transfer/import-listing.png" alt="Listado de Importación" />

**Paso 2:** En las configuraciones generales añada los siguientes campos:

1) **Code -** Introduzca el código de su proceso de Importación.

2) **Type -** Seleccione el tipo, es decir (Productos, Categorías) que quiere importar.

3) **File / Images –** un panel combinado que cubre tanto el archivo de datos como cualquier imagen de producto a la que el archivo haga referencia:
   - **File \*** – arrastre un archivo **CSV / XLSX / XLS** al área de subida (*"Click to upload or drag and drop"*) o haga clic para navegar. Los tipos de archivo permitidos se muestran bajo la etiqueta.
   - **Download {Type} Sample CSV** – enlace que descarga el archivo de muestra para el Tipo que seleccionó (p. ej., *"Download Categories Sample CSV"* cuando Type es Categories). Úselo para confirmar la disposición de columnas esperada antes de subir su propio archivo.
   - **Images → Path** – la ruta de dos partes que UnoPim utiliza para localizar las imágenes del producto:
     - El prefijo está bloqueado en `storage/app/public/`.
     - El sufijo editable por defecto es algo como `import-images/my-products`.
     - Haga clic en **Upload Images to set Path** para subir una carpeta de imágenes; UnoPim la guarda bajo el prefijo y rellena el sufijo automáticamente por usted.
   - Texto de ayuda bajo el campo: *"Place images in `storage/app/public/`. For images at `storage/app/public/import-images`, include `import-images/` in the path and use only the file name in the import file."*

4) **Action –** Seleccione Create/Update o Delete desde el panel Settings para controlar si las filas coincidentes se actualizan/insertan o se eliminan.

5) **Validation Strategy –** Elija **Skip Errors** o **Stop on Errors** para decidir cómo reacciona el importador cuando una fila falla la validación.

6) **Allowed Errors –** Número máximo de errores a nivel de fila que la importación tolera antes de detenerse. Por defecto: **`10`**.

7) **Field Separator –** El carácter que separa las columnas en el archivo CSV. Por defecto: **`;`** (punto y coma). Solo se usa para archivos CSV.

Ahora, haga clic en el botón **Save Import**.  

 <ImagePopup src="/assets/2.1/images/data-transfer/create-import-form.png" alt="Formulario de Crear Importación" />

El formulario de crear importación tiene un diseño de dos paneles:
- **Panel General (izquierda)** — Code, Type (Productos/Categorías), más un bloque **File / Images** combinado con el área de subida de archivo, el enlace *Download {Type} Sample CSV* y el campo **Images → Path** con su botón *Upload Images to set Path*.
- **Panel Settings (derecha)** — Action (Create/Update), Validation Strategy (Stop on Errors / Skip Errors), Allowed Errors (por defecto `10`), Field Separator (por defecto `;`).

### Subida de Archivo Arrastrar y Soltar

UnoPim v2.0 admite **Subida de Archivo Arrastrar y Soltar** para los archivos de importación. El área de subida muestra **"Click to upload or drag and drop"** con los tipos de archivo admitidos (CSV, XLSX, XLS). Puede arrastrar un archivo directamente desde su gestor de archivos al área de subida con borde discontinuo.

### Filtros Dinámicos de Trabajo de Importación

Los trabajos de importación admiten **filtros dinámicos** que le permiten configurar condiciones avanzadas de filtrado para sus datos de importación. Esto le ayuda a controlar exactamente qué registros se importan basándose en criterios específicos.

**Paso 3:** Desde el listado de importación, haga clic en el icono de acción **Import** (icono de reproducción) en la fila de la importación que quiere ejecutar. Esto abre la página de ejecución, que muestra un resumen de la configuración de la importación:

- **Import Profile** — El código de importación
- **File Path** — La ubicación del archivo subido
- **Action Mode** — Create/Update o Delete

Haga clic en el botón **Importar ahora** para empezar el procesamiento. UnoPim pone el trabajo en cola y le redirige a la vista de detalle del **Seguimiento de trabajos** para ese trabajo.

## Tracker de Importación/Exportación

**Paso 4:** La página de detalle del Seguimiento de trabajos muestra el pipeline de pasos en tiempo real. Si la validación detecta errores, la página los expone con los números de fila y el campo exacto que falló, además de un botón **Download Full Report**:

 <ImagePopup src="/assets/2.1/images/data-transfer/import-progress.png" alt="Página de detalle de importación — errores de validación" />

El tracker muestra un **pipeline de pasos** con indicadores visuales de progreso:

| Paso | Descripción |
|------|-------------|
| **Queued** | El trabajo está en la cola esperando ser procesado |
| **Validating** | El archivo se está validando contra las reglas de importación |
| **Importing** | Los registros se están creando/actualizando en la base de datos |
| **Indexing** | Los índices Elasticsearch se están actualizando |
| **Complete** | La importación finalizó con éxito |

Cada paso muestra una marca verde cuando se completa. Debajo del pipeline puede ver:
- **Mensaje de éxito/error** — Si el trabajo se completó o falló, con detalles
- **Records Created / Updated / Deleted** — Recuentos exactos de lo que cambió
- **Total Duration** — Cuánto tiempo tomó la importación
- **Download log** — Descargue el archivo de log completo de la importación
- **Detalles del error** — Si la validación falla, ve los errores específicos (p. ej., "Required columns not found: code")

### Controles de Pausar, Reanudar y Cancelar

Durante una importación activa, aparecen los **botones de control de trabajo** en el tracker:

- **Pause** — Detenga temporalmente una importación en progreso. El estado del trabajo se conserva y puede reanudarse más tarde.
- **Resume** — Continúe una importación pausada desde donde se dejó.
- **Cancel** — Detenga una importación por completo. Los trabajos cancelados no pueden reanudarse.

::: tip
La función de pausa y reanudación es especialmente útil para importaciones grandes. Puede pausar un trabajo durante las horas pico y reanudarlo durante las horas valle.
:::

También puede ejecutar el siguiente comando en la raíz de su UnoPim para procesar la cola de importación:

```bash
php artisan queue:listen
```

Así, mediante los pasos anteriores puede crear fácilmente Datos de Importación en UnoPim.
