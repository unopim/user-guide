# Configurable Product

A **Configurable Product** is a single catalog entry that groups multiple variants — each with its own SKU — under one parent. It's what you use when one product comes in several *options* (size, colour, material) and you want all those options managed together instead of as disconnected Simple Products.

## What is a Configurable Product?

| | Configurable Product |
|---|---|
| **Structure** | One parent SKU + N child variants (each with its own SKU). |
| **When to use it** | The item has variations — T-shirts in S/M/L × Red/Blue/Green, shoes in different sizes, phone cases in different colours. |
| **Typical examples** | A T-shirt sold in 3 sizes × 4 colours, a sofa in 3 fabric options, a laptop in multiple storage tiers. |
| **Compare with** | [Simple Product](./simple.md) — use that when there are no variants or each variant is genuinely a separate product. |

The attributes that define the variants are called **axes** — the dimensions along which the product varies (e.g., `size`, `color`). In UnoPim 3.0 the axes come from a **variant structure** defined on the attribute family, which can split products across **one or two levels** (e.g., style → colour → size). Every attribute the structure keeps *common* is edited once on the parent and inherited by all variants automatically. See **[Product Variants](./variants.md)** for the full model — levels, variant groups, and inheritance.

## How does it work?

A Configurable Product is created in three phases:

1. **Create the parent** — set product type to `Configurable`, pick a family, enter a SKU, and select the **variant structure** that defines the variant axes.
2. **Fill in parent attributes** — description, categories, images, pricing, associations. Everything that should be shared across variants goes here and is inherited automatically.
3. **Add variants** — in the **Variations** section, create one child per combination (e.g., `Size=M, Color=Red`). Each child has its own SKU and holds only the values the structure assigns to the variant level.

At runtime, the parent acts as the public-facing record and the variants hold the option-specific data (and often their own stock, price, image).

## How to Create a Configurable Product

### Step 1 — Start creation

1. Click **Catalog → Products**.
2. Click **Create Product** in the top-right corner. The **"Create New Product"** dialog opens.
3. Fill in:
   - **Type** — `Configurable`.
   - **Family** — the attribute family that controls which fields appear on the parent.
   - **SKU** — the parent SKU (must be unique).
4. Click **Next**.

<ImagePopup src="/assets/3.0/images/configurable-product/configurable.png" alt="Create Configurable Product modal" />

### Step 2 — Pick the variant structure

The dialog now asks for the **Variant Structure** — the family-level definition of how this product splits into variants (its axes, and whether it uses one or two levels). Pick the structure that matches how the product varies and click **Save Product**.

<ImagePopup src="/assets/3.0/images/configurable-product/configurableAttributes.png" alt="Variant Structure selection" />

If the family has no variant structure yet, create one first on the family's **Variants** tab — see **[Product Variants](./variants.md#set-up-a-variant-structure-on-the-family)**.

::: warning
A variant structure is **locked once variants exist**. Plan the variant axes up front — changing them later requires deleting and recreating variants.
:::

### Step 3 — Fill in parent attributes

Like a Simple Product, the parent edit page groups attributes by **Attribute Group** (General, Descriptions, Categories, Associations, …). Exactly which groups appear depends on the family.

The `default` family requires at minimum:

| Field | Meaning |
|---|---|
| **SKU** | Parent SKU — the identifier for the configurable record. |
| **Name** | Display name shared by all variants. |
| **URL Key** | URL-safe slug for storefront linking. |

Other sections to fill on the parent:

| Section | Purpose |
|---|---|
| **Short Description** | Variant-agnostic summary. |
| **Description** | Full copy — usually shared across variants. |
| **Technical** | Status toggle — enables/disables the whole configurable set. |
| **Categories** | Category assignment for the configurable (applies to all variants). |
| **Associations** | Related / Up-sell / Cross-sell products (see below). |

Each section renders as its own card on the edit page. The **Description** cards carry a WYSIWYG editor. The **Technical** card holds the green **Status** toggle — leaving it disabled takes the whole configurable (parent **and** all variants) offline. The **Categories** card opens a tree picker; anything you select here applies to every variant.

<ImagePopup src="/assets/3.0/images/configurable-product/editProduct.png" alt="Configurable Product Edit Page" />

### Step 4 — Add variants

Open the **Variations** section and click **Add New** to create a variant. Pick the axis value(s) (e.g., `Size = M`) and enter the variant's **SKU**, then click **Create**.

In a **two-level structure**, add the first-axis option first (e.g., the colour `Blue`) — UnoPim creates a **variant group** for it automatically — then add the final variants inside that group, one per second-axis option. Values shared per group (like a colour image) are enriched once on the group; each variant only holds its own level's values. Inherited fields appear read-only on the variant with a hint pointing to the level that owns them — see **[Product Variants](./variants.md#inherited-values-in-the-editor)**.

<ImagePopup src="/assets/3.0/images/configurable-product/addVariant.png" alt="Add Variant form" />

You can add as many variants as the product needs, and the Variations panel shows a per-group completeness count so you can see which ones still need enrichment.

### Step 5 — Add associations

At the bottom of the parent edit page, link this configurable to other products:

| Association | When to use it |
|---|---|
| **Related Products** | Similar alternatives customers may also like. |
| **Up-Sell Products** | Higher-end versions — a premium jacket line, a faster laptop. |
| **Cross-Sell Products** | Complementary items — socks with shoes, cables with electronics. |

For each section, click **Add**, search by SKU, select, and confirm. Each association card accepts as many products as you need — and in 3.0 your team can define additional association types (spare parts, accessories, …) that appear here alongside the built-in three.

### Step 6 — Save

Click **Save Product** in the top-right of the edit page. You're redirected back to the **Products Data Grid**, where the configurable appears with *Configurable* in the **Type** column. The variants don't show as separate rows — they're accessible only through the parent's **Variations** section.

<ImagePopup src="/assets/3.0/images/configurable-product/datagrid.png" alt="Configurable Product in Datagrid" />

::: tip
Attributes with a **channel badge** hold values per channel; with a **locale badge**, per locale; with both, per channel **and** per locale. This applies to the parent and to variants.
:::

## Working with a Configurable Product after creation

Configurable products support the same lifecycle features as Simple Products — completeness, translation, bulk edit, history, export, copy. A few behaviours are specific to configurables:

### Completeness

The completeness engine evaluates **both the parent and its variants**. The aggregated score accounts for missing required attributes at either level, so even a well-filled parent with an empty variant can drag the score down.

- Completeness is calculated per channel **and** per locale.
- The Dashboard's **Completeness** widget rolls up all products, including configurables.
- Low-completeness variants are flagged for attention alongside the parent.

::: tip
Fill in the parent attributes first (description, images, categories). Then sweep through variants to set the variant-specific values (SKU, price, per-variant image). Working top-down is faster than jumping between variants.
:::

### Translation

Locale-specific fields on the parent and on each variant can be translated manually (locale switcher at the top of the edit page) or automatically via **[Magic AI — Settings](../magic-ai/settings.md)** Translation. The same workflow applies to both product types — see [Simple Product → Translate values across locales](./simple.md#translate-values-across-locales).

### Bulk edit

Use **Bulk Edit** on the Products listing to update attributes across many configurable products at once. Select the rows, pick the attribute, enter the value, apply. See [Simple Product → Bulk edit](./simple.md#bulk-edit).

### History

Click the **History** tab on the parent edit page for an audit trail of every change — attribute edits, status flips, category changes, association changes. Each entry lists the date, the user, and the specific fields that changed with before-and-after values. Each variant has its own history accessible from its individual edit view.

### Quick Export

Select the configurable(s) in **Catalog → Products** and use **Quick Export** (top-right, next to Create Product) to download in CSV, XLS, or XLSX. The export bundles the parent record with its variants in a single file, so importing the result back recreates the full configurable structure. For scheduled or filtered exports, use the full **[Export](../data-transfer/export.md)** workflow.

## Related reading

- **[Simple Product](./simple.md)** — for standalone SKUs with no variants.
- **[Product Variants](./variants.md)** — the full 3.0 variant model: levels, axes, variant groups, and inheritance.
- **[Filters & Saved Views](./filters-and-views.md)** — slice large variant catalogs in the product grid and save the views you reuse.
- **[Attribute Family](../attribute/attribute-family.md)** — where variant structures and their axes are defined.
- **[Magic AI — Settings](../magic-ai/settings.md)** — auto-translate variant content across locales.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — v2.0-beta.1 introduced AI Agent support for creating and managing configurable products via chat.
