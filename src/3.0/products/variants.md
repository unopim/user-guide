# Product Variants

Many products exist in more than one version — a jacket in several colours and sizes, a phone in several storage capacities. **Product Variants** in UnoPim 3.0 let you manage all of those versions under one parent product: you enrich the shared information **once** on the parent, and every variant inherits it automatically. Your team only fills in what actually differs — like the SKU, the size, or a colour-specific photo.

This page explains how variants are structured, how to set up a variant structure on an attribute family, and how to create and enrich variants from the product page.

## How variants are organized

A variant catalog has up to three layers:

| Layer | What it holds | Example (fashion) |
|---|---|---|
| **Parent product** | Values maintained once and inherited by every variant — name, description, brand, care instructions. | The "Classic Denim Jacket" style. |
| **Variant group** *(two-level structures only)* | Values shared by all variants inside one group — for example a photo shared by every size of the same colour. | The "Blue" version of the jacket. |
| **Variant** | Values maintained separately for each final, sellable product — SKU, size, price, stock-level data. | Blue jacket, size M. |

The attributes that split a product into variants are called **axes**. An axis is a select-type attribute such as `color` or `size`. A one-level structure has one set of axes (Parent → Variant); a two-level structure has axes on each level (Parent → Variant group → Variant).

<ImagePopup src="/assets/3.0/images/products/variant-structure.png" alt="Variant structure editor showing parent, sub-parent, and variant levels" />

## One level or two?

| Choose | When | Examples |
|---|---|---|
| **1 level · Parent → Variant** | Products vary along a single dimension, or the combinations are few and nothing is shared per option. | A notebook in 4 colours; a cable in 3 lengths. |
| **2 levels · Parent → Sub-parent → Variant** | Products vary along two dimensions **and** the first dimension carries its own shared data — like a colour-specific image or colour name. | Fashion: style → colour → size. Electronics: model → colour → storage capacity. |

::: tip
If you are unsure, start with one level. Two levels earn their keep when the middle layer genuinely shares data — enriching a photo once per colour instead of once per size is where the time savings come from.
:::

## Set up a variant structure on the family

Variant structures belong to the **attribute family**, so every product in the family splits into variants the same way.

1. Go to **Catalog → Attribute Families** and open the family.
2. Open the **Variants** tab.
3. Click **Add Variant** to create a variant structure. Give it a name (for example *Color + Size*).
4. Choose the structure: **Parent → Child** (one level) or **Parent → Sub-parent → Child** (two levels).
5. Pick the **axis** attribute for each level — for example `color` for level 1 and `size` for level 2. Axes must be select attributes without channel or locale scope.
6. Decide where each remaining attribute is maintained. Every attribute is **common** (parent level) by default; drag only the ones that differ into the level that owns them — for example the image to the sub-parent level, and price and EAN to the variant level.
7. Save the structure.

<ImagePopup src="/assets/3.0/images/products/variant-family-setup.png" alt="Assigning attributes to variant levels on the attribute family" />

A family can hold several variant structures — one per way its products vary. You choose which structure a product uses when you create it.

::: warning
Once products use a variant structure, its axes and levels are **locked**. You can no longer change them without deleting the existing variants first, so plan the axes before your team starts creating products.
:::

## Create a product with variants

1. Go to **Catalog → Products** and click **Create Product**.
2. In the **Create New Product** dialog, set **Type** to `Configurable`, pick the **Family**, enter the parent **SKU**, and click **Next**.
3. Select the **Variant Structure** the product should use and click **Save Product**.

UnoPim opens the product edit page. Fill in the shared values here — name, description, categories, brand. Everything you enter on the parent is inherited by every variant you add later.

## Add variants from the product page

On the parent product's edit page, open the **Variations** section:

1. Click **Add New** and pick (or create) the first-axis option — for example the colour `Blue`.
2. In a two-level structure, UnoPim creates the **variant group** for that option automatically. Select the group, then add the final variants inside it — one per second-axis option (for example each size).
3. For each variant, enter its **SKU** and pick the axis value, then click **Create**.
4. Open any variant to fill in its own values — the ones your structure assigns to the variant level, such as price or stock data.

The Variations panel shows a completeness counter per group (for example *3 of 5 complete*), so you can see at a glance which variants still need enrichment.

<ImagePopup src="/assets/3.0/images/products/variant-variations-panel.png" alt="Variations section on the product edit page with variant groups and completeness counts" />

## Inherited values in the editor

When you open a variant, inherited fields are shown but not editable at that level. A hint tells you where the value lives — for example *"This attribute can be updated in the common attributes"*. To change an inherited value, edit it once on the parent (or on the variant group), and the change flows down to every product that inherits it.

This keeps your data consistent by design: a corrected description or an updated brand name never has to be repeated across dozens of size/colour combinations.

## Related reading

- **[Configurable Product](./configurable.md)** — the step-by-step guide to creating a configurable product.
- **[Attribute Family](../attribute/attribute-family.md)** — where variant structures are defined.
- **[Filters & Saved Views](./filters-and-views.md)** — find and slice variant catalogs in the product grid.
