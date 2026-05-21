# Importar

La importación masiva es una característica que permite a los usuarios importar grandes cantidades de datos a un sistema rápida y eficientemente. Simplifica el proceso y ahorra tiempo al no tener que añadir cada pieza de información una por una.

La característica funciona de manera diferente para cada sistema y tiene una gran variedad de casos de uso en muchas industrias, así como en [UnoPim](https://unopim.com/).

### Pasos para añadir Importación Masiva en UnoPim

**Paso 1:** Vaya al panel de administración de UnoPim, haga clic en **Transferencia de datos >> Importar >> Crear importación**.

   <ImagePopup src="/assets/1.0/images/data-transfer/createImport.png" alt="Crear importación" />

**Paso 2:** En las configuraciones generales añada los siguientes campos:

1) **Code -** Introduzca el código de su proceso de Importación.

2) **Type -** Seleccione el tipo, es decir (Productos, Categorías) que quiere importar.

3) **File –** Elija el archivo en su formato deseado **(CSV, XLS, XLSX)** y asegúrese de tener todos los campos requeridos en el archivo.

4) **Download Sample –** También puede descargar los archivos de muestra de los tipos (Productos, Categorías). Asegúrese de que el archivo que está subiendo sea similar a este archivo de muestra.

5) **Image Directory Path –** Para los archivos de imágenes de producto deben colocarse en la carpeta **/project-root/storage/app/import/product-images**.

6) **Action –** Seleccione desde la configuración de ajustes que quiere Crear/Actualizar o Eliminar los registros.

7) **Validation Strategy –** Esta característica única le permite Omitir los Errores o Detenerse en Errores al Importar los datos.

8) **Allowed Errors –** Esta característica le permite indicar cuánta cantidad de errores se ignorarán al importar los datos.

9) **Field Separator –** Esta característica le permite establecer los campos. Por ejemplo, si usa **","** como separador de campo, entonces los datos dentro del archivo se separan con esto.

Ahora, haga clic en el botón **Guardar importación**.  

   <ImagePopup src="/assets/1.0/images/data-transfer/saveImport.png" alt="Guardar importación" />

**Paso 3:** Ahora haga clic en el botón **Importar ahora** como se muestra en la imagen siguiente.

   <ImagePopup src="/assets/1.0/images/data-transfer/importNow.png" alt="Importar ahora" />

**Paso 4:** Ahora haga clic en **Transferencia de datos >> Seguimiento de trabajos** donde ve el estado de su proceso de importación. Después de que el estado se haya completado, entonces el proceso de importación se ha realizado correctamente.

También puede ejecutar el siguiente comando en la raíz de su UnoPim.

**php artisan queue:listen**


   <ImagePopup src="/assets/1.0/images/data-transfer/importOutput.png" alt="Salida de importación" />

Así, mediante los pasos anteriores puede crear fácilmente Datos de Importación en UnoPim.
