# Producto Simple

Un **Producto Simple** es un SKU único e independiente — un artículo físico con un conjunto de atributos y sin variaciones. Es el tipo de producto más común en UnoPim y la elección correcta siempre que un producto *no* necesite tamaño, color u otras variantes.

## ¿Qué es un Producto Simple?

| | Producto Simple |
|---|---|
| **Estructura** | Un SKU, un conjunto de valores de atributo, una fila en la cuadrícula de productos. |
| **Cuándo usarlo** | El artículo no tiene variantes, o cada variante debe gestionarse como su propio registro separado. |
| **Ejemplos típicos** | Un libro, un único color de pintura, una caja específica de tornillos, un cuaderno de anillas. |
| **Comparar con** | [Producto Configurable](./configurable.md) — úselo cuando una entrada de catálogo necesita agrupar múltiples variantes de tamaño/color/material bajo un solo padre. |

## ¿Cómo funciona?

Un Producto Simple se crea en dos fases:

1. **Crear** — establezca el tipo de producto en `Simple`, elija una familia de atributos y dele un SKU. Eso crea un registro mínimo.
2. **Editar** — UnoPim le redirige a la página de edición del producto, donde rellena los atributos definidos por la familia (nombre, descripción, precio, categorías, imágenes, asociaciones, …) y guarda.

Como la disponibilidad de atributos se rige por la **familia de atributos**, un Producto Simple en la familia `default` tiene un conjunto diferente de campos editables que uno en, digamos, una familia `books`. Gestionar la forma de un Producto Simple significa gestionar su familia — consulte [Familia de atributos](../attribute/attribute-family.md).

## Cómo Crear un Producto Simple

### Paso 1 — Iniciar la creación

1. Haga clic en **Catálogo → Productos**.
2. En la esquina superior derecha, haga clic en **Crear producto**. Se abre un diálogo titulado **"Crear nuevo producto"**.
3. Rellene los tres campos:
   - **Tipo** — `Simple`.
   - **Familia** — la familia de atributos que controla qué campos aparecerán en la página de edición.
   - **SKU** — un identificador único para el producto.
4. Haga clic en **Guardar producto**.

<ImagePopup src="/assets/2.1/images/simple-product/simple.png" alt="Modal Crear Producto Simple" />

UnoPim cierra el diálogo y le redirige a la página de edición, donde puede rellenarse cada campo restante.

<ImagePopup src="/assets/2.1/images/simple-product/editProduct.png" alt="Editar Producto Simple" />

### Paso 2 — Rellenar los detalles del producto

La página de edición agrupa los atributos por **Grupo de atributos** (General, Short Description, Description, Price, Technical, Categories, Associations, …). Qué grupos aparecen exactamente depende de la familia que eligió en la creación.

La familia `default` requiere como mínimo:

| Campo | Significado |
|---|---|
| **SKU** | Identificador único del producto. No puede duplicarse. |
| **Name** | Nombre de visualización mostrado a los clientes. |
| **URL Key** | Slug seguro para URL para enlaces de tienda. |

Secciones integradas adicionales para la familia `default`:

| Sección | Propósito |
|---|---|
| **Short Description** | Resumen de una o dos líneas. Aparece en las tarjetas de listado y vistas previas SEO. |
| **Description** | Texto completo del producto — puede usar el editor WYSIWYG. |
| **Price** | Precio de venta más precio de coste por moneda. |
| **Technical** | Alternador de estado — habilita/deshabilita el producto. |
| **Categories** | Asigne el producto a una o más categorías (incluyendo una categoría raíz). |
| **Associations** | Enlaces de producto Related / Up-sell / Cross-sell (ver más abajo). |

Cada sección aparece como su propia tarjeta en la página de edición. Las tarjetas **Short Description** y **Description** incluyen un editor WYSIWYG para texto enriquecido. La tarjeta **Price** muestra una fila por cada moneda configurada. La tarjeta **Technical** contiene el alternador verde **Status** — déjelo en *Enabled* para que el producto se considere activo. La tarjeta **Categories** abre un selector de árbol; marque cada nodo al que pertenezca el producto. Todas las tarjetas comparten el mismo botón *Save Product* en la esquina superior derecha de la página.

### Paso 3 — Añadir asociaciones

En la parte inferior de la página de edición puede enlazar este producto a otros. Las tres secciones funcionan de la misma manera: haga clic en **Add**, busque por SKU, luego haga clic en **Add Selected Product**.

| Asociación | Cuándo usarla |
|---|---|
| **Related Products** | Alternativas similares — ayuda a los clientes a descubrir sustitutos que también podrían gustarles. |
| **Up-Sell Products** | Versiones de gama alta — una TV mejor, un portátil más rápido, una tableta más duradera. |
| **Cross-Sell Products** | Artículos complementarios — funda protectora + portátil, adaptador + teléfono. |

Cada una de las tres tarjetas de asociación tiene la misma disposición: un botón **Add** abre un selector de búsqueda por SKU, los productos marcados aparecen como una lista debajo con un botón ✕ para eliminarlos, y no hay límite en cuántos puede añadir.

### Paso 4 — Guardar

Haga clic en **Guardar producto** en la esquina superior derecha de la página de edición. Es redirigido de vuelta al **Datagrid de productos**, donde el nuevo producto aparece como una fila con su SKU, miniatura de imagen, nombre, familia de atributos, chip de estado, tipo (*Simple*) y porcentaje de completitud.

<ImagePopup src="/assets/2.1/images/simple-product/datagrid.png" alt="Datagrid de Productos" />

::: tip
Los atributos que admiten valores por canal muestran una **insignia de canal**. Los atributos que admiten valores por locale muestran una **insignia de locale**. Los atributos que admiten ambos muestran ambas insignias — estos son los campos que revisará cuando cambie de canal o locale en la página de edición.
:::

## Trabajar con un Producto Simple después de la creación

Una vez creado, un Producto Simple admite el conjunto completo de características de producto de UnoPim. El resto de esta página las agrupa por lo que está tratando de hacer.

### Traducir valores entre locales

UnoPim admite **Traducción de Valores de Producto** — valores por locale para cualquier atributo marcado como específico de locale.

<ImagePopup src="/assets/2.1/images/simple-product/product-edit-locale.png" alt="Edición de Producto con Conmutador de Locale" />

#### Traducción manual

1. Abra el producto en **Catálogo → Productos**.
2. En la parte superior de la página de edición, use los dos conmutadores:
   - **Channel Switcher** (p. ej., *Default*) — elige los valores de qué canal está editando.
   - **Locale Switcher** (p. ej., *English (United States)*) — elige el locale.
3. Cambie al locale objetivo. El formulario se recarga con los valores de ese locale. Los campos específicos de locale muestran una insignia de locale (p. ej., `EN_US`).
4. Introduzca los valores traducidos (Name, Description, URL Key, …).
5. Haga clic en **Save Product**.
6. Repita por locale.

::: tip
Una insignia **DEFAULT** significa específico de canal. Una insignia de locale (p. ej., `EN_US`) significa específico de locale. Ambas insignias juntas significan que el atributo admite valores por canal **y** por locale.
:::

#### Auto-traducción con Magic AI

Habilite **Magic AI → Ajustes → Translation** y cada guardado de producto auto-traduce los campos específicos de locale a los locales objetivo:

1. Active **Enabled** on.
2. Establezca el **Source Channel** y **Source Locale** (el idioma en el que escribe).
3. Establezca el **Target Channel** y los **Target Locales**.
4. Elija un **Translation Model** — puede usar un proveedor más barato/rápido para esto.
5. Opcionalmente, active **Replace Existing Value** para sobrescribir traducciones existentes en la re-ejecución.

Consulte [Magic AI — Ajustes](../magic-ai/settings.md) para la referencia completa de campos.

### Comprobar la completitud

UnoPim calcula una puntuación de **Completitud del Producto** por producto, por canal, por locale:

- La puntuación se muestra como un porcentaje (p. ej., 89%).
- Los productos de baja completitud muestran *"Low completeness, add details to improve"*.
- Los productos casi completos muestran *"Almost complete, just a few details left"*.
- El Panel agrega la completitud por canal en el widget **Completeness**.

::: tip
Combine la completitud con **Auto-Enriquecimiento de Magic AI** (Magic AI → Ajustes → Agentic PIM) para rellenar automáticamente los campos faltantes y aumentar la puntuación.
:::

### Revisar el historial de cambios

Haga clic en la pestaña **Historial** en la página de edición del producto para ver cada cambio. Cada entrada registra:

- Fecha/hora del cambio.
- El usuario que lo realizó.
- Campos exactos que fueron modificados, con valores antes/después.

Haga clic en el **icono de ojo** en cualquier entrada para abrir una vista de detalle que muestra los valores antes y después uno al lado del otro. UnoPim rastrea el historial para **productos, categorías, atributos, familias de atributos y canales** con la misma UI.

### Duplicar un producto

Para crear un nuevo producto sembrado a partir de uno existente:

1. En **Catálogo → Productos**, encuentre la fila a copiar.
2. Haga clic en el **icono de Copia** (portapapeles) en la columna Actions.
3. UnoPim crea un duplicado con un nuevo SKU.
4. Edite la copia para personalizarla.

## Trabajar con el listado de Productos

El listado en **Catálogo → Productos** es donde encuentra, filtra, edita masivamente y exporta productos.

### Gestionar columnas

Haga clic en el botón **Columns** para abrir el modal **Manage columns**.

<ImagePopup src="/assets/2.1/images/simple-product/columns-selector.png" alt="Selector de Columnas" />

| Panel | Contenido |
|---|---|
| **Available Columns** (izquierda) | Cada atributo que puede mostrarse como una columna — ID, Parent, Created/Updated At, URL Key, Tax Category, Short Description, Description, Price, Cost, Meta Title, Meta Keywords, Meta Description, más cada atributo personalizado. Búsqueda + paginación. |
| **Selected Columns** (derecha) | Columnas actualmente visibles. Por defecto: SKU, Image, Name, Attribute Family, Status, Type, Complete. |

Para personalizar:

1. Arrastre desde Available a Selected para añadir una columna.
2. Arrastre dentro de Selected para reordenar.
3. Arrastre fuera de Selected (o haga clic en eliminar) para ocultar.
4. Haga clic en **Apply**.

### Filtrar productos

Haga clic en **Filter** sobre el datagrid para deslizar el cajón **Apply Filters** desde el lado derecho de la pantalla. El cajón lleva un conjunto fijo de campos de filtro integrados más un botón **Add Filter** para atributos personalizados.

**Filtros integrados** (siempre mostrados):

- **SKU** — coincidencia de texto.
- **Name** — coincidencia de texto.
- **Familia de atributos** — desplegable de todas las familias configuradas.
- **Status** — desplegable Enabled / Disabled.
- **Type** — desplegable Simple / Configurable.

**Add Filter (atributos personalizados)**

Haga clic en **Add Filter** en la parte inferior del cajón para añadir un filtro para cualquier atributo que tenga **Is Filterable** marcado en su tarjeta Configuration (consulte [Atributo de Producto → Configuration](../attribute/product-attribute.md#add-attributes)). Así es como filtra el listado por `color`, `size`, `brand` o cualquier otro atributo relevante para su catálogo:

1. En el cajón, haga clic en **Add Filter**.
2. Elija un atributo del desplegable — solo se listan los atributos con **Is Filterable = on**.
3. Introduzca o seleccione el/los valor(es) por los que filtrar. La forma de entrada depende del tipo de datos del atributo (entrada de texto, desplegable select, rango de fechas, casilla, etc.).
4. Repita **Add Filter** para apilar más filtros — se combinan con lógica AND.

Haga clic en **Save** en la parte inferior del cajón para aplicar el conjunto de filtros. El datagrid se recarga mostrando solo las filas coincidentes. Para limpiar, abra el cajón de nuevo y elimine los chips de filtro individuales, o recargue la página para restablecer.

::: tip
Si un atributo por el que desea filtrar no está en el desplegable Add Filter, vaya a **Catálogo → Atributos**, edite el atributo, marque **Is Filterable** en la tarjeta Configuration y guarde. Aparece en el desplegable inmediatamente.
:::

### Edición masiva

UnoPim admite **Edición masiva** en cualquier atributo compartido por los productos seleccionados:

1. Vaya a **Catálogo → Productos**.
2. Marque las filas que quiere editar.
3. Abra el desplegable **Bulk Actions**.
4. Seleccione **Edit** y elija el atributo.
5. Introduzca el nuevo valor y aplique.

#### Habilitar / Deshabilitar Masivo

1. Seleccione varios productos.
2. En la barra de acciones masivas, elija **Enable** o **Disable**.

#### Eliminar Masivo

1. Seleccione los productos.
2. Haga clic en **Delete**.
3. Confirme — la eliminación es permanente.

### Exportación rápida

Exporte los productos seleccionados (o todos) directamente desde el listado:

1. Seleccione los productos.
2. Haga clic en **Exportación rápida** en la esquina superior derecha, junto a **Crear producto**.
3. Elija **CSV**, **XLS** o **XLSX** desde el selector de formato.
4. UnoPim genera el archivo en segundo plano y lo descarga en su navegador una vez que el procesamiento termina. Puede ver el progreso del trabajo en la página **Seguimiento de trabajos** mientras espera.

Para exportaciones programadas o filtradas, use el flujo de trabajo completo **[Exportar](../data-transfer/export.md)** en Transferencia de datos.

## Lectura relacionada

- **[Producto Configurable](./configurable.md)** — cuándo usar variantes en lugar de un solo SKU Simple.
- **[Familia de atributos](../attribute/attribute-family.md)** — controla qué campos aparecen en un Producto Simple.
- **[Magic AI — Ajustes](../magic-ai/settings.md)** — configure la auto-traducción y el auto-enriquecimiento para los productos.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — cree, actualice y edite masivamente Productos Simples vía lenguaje natural.
