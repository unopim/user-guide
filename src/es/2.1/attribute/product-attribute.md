# Atributo de Producto

Un Atributo es una especificación o característica de un producto — Color, Talla y Patrón son todos atributos de una camiseta. Puede crear tantos atributos por producto como necesite; el conjunto completo de atributos es lo que da a cada producto su forma y capacidad de búsqueda.

### Cómo Crear un Atributo de Producto en UnoPim

Abra el Panel de Administración y siga los pasos a continuación.

### Añadir Atributos

**Paso 1** — Haga clic en **Catálogo → Atributos → Crear atributos**.

<ImagePopup src="/assets/2.1/images/attributes/createAttribute.png" alt="Crear Atributo" />

**Paso 2** — Introduzca el **Código** y el **Tipo de dato** en la sección general.

<ImagePopup src="/assets/2.1/images/attributes/general.png" alt="Sección general" />

**Nota** — La validación **Is Unique** solo está disponible para los tipos **Text, Datetime & Date**.

**Paso 3** — Introduzca el **Label** de su Atributo.

<ImagePopup src="/assets/2.1/images/attributes/label.png" alt="Sección de etiqueta" />

**Paso 4** — Seleccione **Validation** si quiere que el Atributo sea requerido o único.

**Nota** — La validación **Is Unique** solo está disponible para los tipos **Text, Datetime & Date**.

<ImagePopup src="/assets/2.1/images/attributes/validation.png" alt="Sección de validación" />

**Paso 5** — Abra la tarjeta **Configuration** a la derecha del formulario y marque las opciones que apliquen:

| Opción | Qué hace |
|---|---|
| **Value Per Locale** | El atributo almacena un valor separado por locale. Cambie el locale en la página de edición del producto para introducir cada traducción. |
| **Value Per Channel** | El atributo almacena un valor separado por canal. Útil cuando el mismo campo difiere entre tiendas (p. ej., precio o descripción por canal). |
| **Is Filterable** | Hace que el atributo esté disponible en el cajón **Apply Filters** en el listado de Productos (consulte [Filtrar productos](../products/simple.md#filter-products)). Marque esto para cualquier atributo que desee usar como filtro — `size`, `color`, `brand`, etc. |

<ImagePopup src="/assets/2.1/images/attributes/configuration.png" alt="Sección de configuración" />

::: tip
Alternar **Is Filterable** en un atributo existente habilita inmediatamente la opción **Add Filter** para él en el listado de Productos — no se necesita paso de reindexación.
:::

Haga clic en **Guardar atributo**. El nuevo atributo aparece en el Datagrid.

<ImagePopup src="/assets/2.1/images/attributes/output.png" alt="Datagrid de Atributos" />

A continuación, vaya a **Catálogo → Familia de atributos**, abra la familia en la que quiere el atributo y arrastre el atributo desde la lista sin asignar al grupo deseado.

<ImagePopup src="/assets/2.1/images/attributes/family.png" alt="Asignación de Familia de Atributos" />

Guarde la familia, luego abra cualquier producto en esa familia — el atributo ahora aparece en el formulario de edición.

<ImagePopup src="/assets/2.1/images/attributes/product.png" alt="Atributo mostrado en la página de edición del producto" />

### Desglose Visual de los Tipos de Datos de Producto de UnoPim

**1) Text** — Un campo para una sola línea de texto. Típico para entradas cortas como nombres o claves URL.

<ImagePopup src="/assets/2.1/images/attributes/text.png" alt="Atributo Text" />

**2) Textarea** — Un campo de texto multilínea. Se usa para contenido más largo como descripciones de productos o comentarios. Puede habilitar/deshabilitar el editor WYSIWYG.

<ImagePopup src="/assets/2.1/images/attributes/textarea.png" alt="Atributo Textarea" />

**3) Boolean** — Alternancia verdadero / falso. Se usa para selecciones sí/no u on/off.

<ImagePopup src="/assets/2.1/images/attributes/boolean.png" alt="Atributo Boolean" />

**4) Select** — Un desplegable que permite una elección de una lista predefinida.

<ImagePopup src="/assets/2.1/images/attributes/select.png" alt="Atributo Select" />

**5) Multiselect** — Como Select pero permite múltiples elecciones de la lista.

<ImagePopup src="/assets/2.1/images/attributes/multiselect.png" alt="Atributo Multiselect" />

**6) Datetime** — Elija una fecha y hora específicas. Se usa para programación y marcas de tiempo.

<ImagePopup src="/assets/2.1/images/attributes/datetime.png" alt="Atributo Datetime" />

**7) Date** — Elija solo una fecha (sin componente horario).

<ImagePopup src="/assets/2.1/images/attributes/date.png" alt="Atributo Date" />

**8) Gallery** — Gestiona múltiples imágenes **y vídeos** por producto. En v1.0.0 UnoPim añadió soporte de vídeo a las galerías:

1) Editar las imágenes de la galería sin cambiar su posición.
2) Arrastrar y soltar para reordenar imágenes.
3) **Soporte de Vídeo** — sube y gestiona archivos de vídeo junto con imágenes.

<ImagePopup src="/assets/2.1/images/attributes/gallery.png" alt="Atributo Gallery con vídeo" />

::: tip
El soporte de vídeo en el atributo galería se introdujo en v1.0.0. Puede subir formatos de vídeo comunes directamente a la galería del producto.
:::

**9) Image** — Sube o muestra una sola imagen.

<ImagePopup src="/assets/2.1/images/attributes/image.png" alt="Atributo Image" />

**10) File** — Sube archivos arbitrarios (documentos, imágenes, etc.).

<ImagePopup src="/assets/2.1/images/attributes/file.png" alt="Atributo File" />

**11) Checkbox** — Una casilla alternable para selecciones binarias (acuerdos, preferencias).

<ImagePopup src="/assets/2.1/images/attributes/checkbox.png" alt="Atributo Checkbox" />

**12) Price** — Un campo de precio adicional al atributo predefinido **Prices**.

<ImagePopup src="/assets/2.1/images/attributes/price.png" alt="Atributo Price" />

## Swatch Types

UnoPim v2.0 introduce **Swatch Types** para los atributos **Select** y **Multiselect**. Los swatches dan a las opciones una representación visual, facilitando su identificación y selección.

### Tipos de Swatches

| Swatch Type | Descripción |
|-------------|-------------|
| **Dropdown** | Selección desplegable estándar (por defecto) |
| **Color** | Muestra muestras de color para cada opción |
| **Image** | Muestra miniaturas de imagen para cada opción |
| **Text** | Muestra etiquetas de texto como muestras visuales |

### Cómo Habilitar Swatch Types

1. Cree o edite un atributo **Select** o **Multiselect**.
2. En la configuración del atributo, seleccione el **Swatch Type** del desplegable.
3. Para cada opción de atributo, configure el valor del swatch:
   - **Color swatch** — introduzca un código de color hexadecimal (p. ej., `#FF0000` para rojo).
   - **Image swatch** — suba una imagen pequeña para cada opción.
   - **Text swatch** — introduzca texto de visualización para cada opción.
4. Haga clic en **Save Attribute**.

::: tip
Los tipos de swatch son especialmente útiles para atributos como Color, Material o Patrón donde una representación visual ayuda a los usuarios a elegir opciones rápidamente.
:::

Siguiendo los pasos anteriores, puede crear fácilmente un **Atributo de Producto** en UnoPim.
