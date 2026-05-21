# Producto Configurable

Un **Producto Configurable** es una sola entrada de catálogo que agrupa varias variantes — cada una con su propio SKU — bajo un padre. Es lo que utiliza cuando un producto viene en varias *opciones* (tamaño, color, material) y desea que todas esas opciones se gestionen juntas en lugar de como Productos Simples desconectados.

## ¿Qué es un Producto Configurable?

| | Producto Configurable |
|---|---|
| **Estructura** | Un SKU padre + N variantes hijas (cada una con su propio SKU). |
| **Cuándo usarlo** | El artículo tiene variaciones — camisetas en S/M/L × Rojo/Azul/Verde, zapatos en diferentes tamaños, fundas de teléfono en diferentes colores. |
| **Ejemplos típicos** | Una camiseta vendida en 3 tamaños × 4 colores, un sofá en 3 opciones de tela, un portátil en múltiples niveles de almacenamiento. |
| **Comparar con** | [Producto Simple](./simple.md) — úselo cuando no hay variantes o cada variante es genuinamente un producto separado. |

Los atributos que definen las variantes se llaman **super atributos** (o *atributos configurables*) — estos son los ejes a lo largo de los cuales varía el producto (p. ej., `size`, `color`). Cada otro atributo (descripción, categoría, imágenes, asociaciones) se edita en el padre y se hereda por las variantes a menos que lo anule.

## ¿Cómo funciona?

Un Producto Configurable se crea en tres fases:

1. **Crear el padre** — establezca el tipo de producto en `Configurable`, elija una familia, introduzca un SKU y elija los **super atributos** que definirán las variantes.
2. **Rellenar atributos del padre** — descripción, categorías, imágenes, precios, asociaciones. Todo lo que deba compartirse entre las variantes va aquí.
3. **Añadir variantes** — en la sección **Variations**, cree un hijo por combinación (p. ej., `Size=M, Color=Red`). Cada hijo tiene su propio SKU y puede anular valores específicos de la variante.

En tiempo de ejecución, el padre actúa como el registro orientado al público y las variantes contienen los datos específicos de la opción (y a menudo su propio stock, precio, imagen).

## Cómo Crear un Producto Configurable

### Paso 1 — Iniciar la creación

1. Haga clic en **Catálogo → Productos**.
2. Haga clic en **Crear producto** en la esquina superior derecha. Se abre el diálogo **"Crear nuevo producto"**.
3. Rellene:
   - **Tipo** — `Configurable`.
   - **Familia** — la familia de atributos que controla qué campos aparecen en el padre.
   - **SKU** — el SKU padre (debe ser único).
4. Haga clic en **Guardar producto**.

<ImagePopup src="/assets/2.1/images/configurable-product/configurable.png" alt="Modal Create Configurable Product" />

UnoPim le redirige a la página de edición y le solicita que seleccione los super atributos.

### Paso 2 — Elegir super atributos

Los super atributos son los ejes a lo largo de los cuales varía el producto — típicamente unos con tipos de datos Select o Multiselect (p. ej., `size`, `color`). Solo aparecen aquí los atributos marcados como *usable for variants* en la familia.

<ImagePopup src="/assets/2.1/images/configurable-product/configurableAttributes.png" alt="Super Atributos Configurables" />

v2.0 también admite:

- **Selección flexible de super atributos** durante la creación del producto.
- Formato **`variants_json`** para definición programática / masiva de variantes.
- **Sembrador de variantes basado en tamaño** para generar rápidamente cuadrículas de tamaños.

::: warning
Los super atributos se **bloquean después de crear las variantes**. Planifique los ejes de la variante de antemano — cambiarlos después requiere eliminar y recrear las variantes.
:::

### Paso 3 — Rellenar los atributos del padre

Al igual que un Producto Simple, la página de edición del padre agrupa los atributos por **Grupo de atributos** (General, Descriptions, Categories, Associations, …). Qué grupos aparecen exactamente depende de la familia.

La familia `default` requiere como mínimo:

| Campo | Significado |
|---|---|
| **SKU** | SKU padre — el identificador para el registro configurable. |
| **Name** | Nombre de visualización compartido por todas las variantes. |
| **URL Key** | Slug seguro para URL para enlazar en la tienda. |

Otras secciones a rellenar en el padre:

| Sección | Propósito |
|---|---|
| **Short Description** | Resumen agnóstico a la variante. |
| **Description** | Texto completo — generalmente compartido entre las variantes. |
| **Technical** | Alternador de estado — habilita/deshabilita todo el conjunto configurable. |
| **Categories** | Asignación de categoría para el configurable (se aplica a todas las variantes). |
| **Associations** | Productos Related / Up-sell / Cross-sell (ver más abajo). |

Cada sección se renderiza como su propia tarjeta en la página de edición. Las tarjetas de **Description** llevan un editor WYSIWYG. La tarjeta **Technical** contiene el alternador verde **Status** — dejarlo deshabilitado pone fuera de línea todo el configurable (padre **y** todas las variantes). La tarjeta **Categories** abre un selector de árbol; cualquier cosa que seleccione aquí se aplica a cada variante.

<ImagePopup src="/assets/2.1/images/configurable-product/editProduct.png" alt="Página de Edición de Producto Configurable" />

### Paso 4 — Añadir variantes

Desplácese a la sección **Variations** y haga clic en **Add Product** para crear una variante hija. Se abre un modal con una entrada por super atributo más un campo **SKU** para la propia variante.

Para cada variante:

1. Introduzca los valores para los super atributos (p. ej., `Size = M`, `Color = Red`).
2. Introduzca el SKU de la variante.
3. Opcionalmente, anule cualquier campo específico de la variante (precio, imagen, stock).
4. Haga clic en **Add** para guardar la variante. Aparece en una tabla bajo la sección Variations junto a cualquier hermano que ya haya creado.

<ImagePopup src="/assets/2.1/images/configurable-product/addVariant.png" alt="Formulario Add Variant" />

Puede añadir tantas variantes como el producto necesite. Una camiseta con Tamaño × Color = 3 × 4 necesita 12 variantes; el sembrador basado en tamaño puede acelerar esto.

### Paso 5 — Añadir asociaciones

En la parte inferior de la página de edición del padre, vincule este configurable a otros productos:

| Asociación | Cuándo usarla |
|---|---|
| **Related Products** | Alternativas similares que los clientes también pueden gustar. |
| **Up-Sell Products** | Versiones de gama alta — una línea de chaquetas premium, un portátil más rápido. |
| **Cross-Sell Products** | Artículos complementarios — calcetines con zapatos, cables con electrónica. |

Para cada sección, haga clic en **Add**, busque por SKU, seleccione y confirme. Las tres tarjetas de asociación aceptan tantos productos como necesite.

### Paso 6 — Guardar

Haga clic en **Guardar producto** en la esquina superior derecha de la página de edición. Es redirigido de vuelta al **Datagrid de productos**, donde el configurable aparece con *Configurable* en la columna **Type**. Las variantes no se muestran como filas separadas — son accesibles solo a través de la sección **Variations** del padre.

<ImagePopup src="/assets/2.1/images/configurable-product/datagrid.png" alt="Producto Configurable en Datagrid" />

::: tip
Los atributos con una **insignia de canal** mantienen valores por canal; con una **insignia de locale**, por locale; con ambas, por canal **y** por locale. Esto se aplica al padre y a las variantes.
:::

## Trabajar con un Producto Configurable después de la creación

Los productos configurables admiten las mismas características de ciclo de vida que los Productos Simples — completitud, traducción, edición masiva, historial, exportación, copia. Algunos comportamientos son específicos de los configurables:

### Completitud

El motor de completitud evalúa **tanto el padre como sus variantes**. La puntuación agregada tiene en cuenta los atributos requeridos faltantes en cualquiera de los niveles, por lo que incluso un padre bien rellenado con una variante vacía puede arrastrar la puntuación hacia abajo.

- La completitud se calcula por canal **y** por locale.
- El widget **Completeness** del Panel acumula todos los productos, incluyendo los configurables.
- Las variantes de baja completitud se marcan para atención junto al padre.

::: tip
Rellene primero los atributos del padre (descripción, imágenes, categorías). Luego recorra las variantes para establecer los valores específicos de la variante (SKU, precio, imagen por variante). Trabajar de arriba abajo es más rápido que saltar entre variantes.
:::

### Traducción

Los campos específicos de locale en el padre y en cada variante pueden traducirse manualmente (conmutador de locale en la parte superior de la página de edición) o automáticamente vía **[Magic AI — Ajustes](../magic-ai/settings.md)** Translation. El mismo flujo de trabajo se aplica a ambos tipos de producto — consulte [Producto Simple → Traducir valores entre locales](./simple.md#translate-values-across-locales).

### Edición masiva

Use **Edición masiva** en el listado de Productos para actualizar atributos a través de muchos productos configurables a la vez. Seleccione las filas, elija el atributo, introduzca el valor, aplique. Consulte [Producto Simple → Edición masiva](./simple.md#bulk-edit).

### Historial

Haga clic en la pestaña **Historial** en la página de edición del padre para una pista de auditoría de cada cambio — ediciones de atributos, cambios de estado, cambios de categoría, cambios de asociación. Cada entrada lista la fecha, el usuario y los campos específicos que cambiaron con valores antes y después. Cada variante tiene su propio historial accesible desde su vista de edición individual.

### Exportación rápida

Seleccione el/los configurable(s) en **Catálogo → Productos** y use **Exportación rápida** (arriba a la derecha, junto a Crear producto) para descargar en CSV, XLS o XLSX. La exportación agrupa el registro padre con sus variantes en un solo archivo, por lo que importar el resultado de vuelta recrea la estructura configurable completa. Para exportaciones programadas o filtradas, use el flujo de trabajo completo **[Exportar](../data-transfer/export.md)**.

## Lectura relacionada

- **[Producto Simple](./simple.md)** — para SKUs independientes sin variantes.
- **[Familia de atributos](../attribute/attribute-family.md)** — controla qué atributos (incluyendo super atributos candidatos) un configurable puede usar.
- **[Atributo de Producto](../attribute/product-attribute.md)** — cómo marcar un atributo como usable para variantes.
- **[Magic AI — Ajustes](../magic-ai/settings.md)** — auto-traducir contenido de variante a través de los locales.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — v2.0-beta.1 introdujo soporte del AI Agent para crear y gestionar productos configurables vía chat.
