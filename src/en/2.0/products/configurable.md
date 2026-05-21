# Configurable Product

A **Configurable Product** is a single catalog entry that groups multiple variants — each with its own SKU — under one parent. It's what you use when one product comes in several *options* (size, colour, material) and you want all those options managed together instead of as disconnected Simple Products.

## What is a Configurable Product?

| | Configurable Product |
|---|---|
| **Structure** | One parent SKU + N child variants (each with its own SKU). |
| **When to use it** | The item has variations — T-shirts in S/M/L × Red/Blue/Green, shoes in different sizes, phone cases in different colours. |
| **Typical examples** | A T-shirt sold in 3 sizes × 4 colours, a sofa in 3 fabric options, a laptop in multiple storage tiers. |
| **Compare with** | [Simple Product](./simple.md) — use that when there are no variants or each variant is genuinely a separate product. |

The attributes that define the variants are called **super attributes** (or *configurable attributes*) — these are the axes along which the product varies (e.g., `size`, `color`). Every other attribute (description, category, images, associations) is edited on the parent and inherited by variants unless you override it.

## How does it work?

A Configurable Product is created in three phases:

1. **Create the parent** — set product type to `Configurable`, pick a family, enter a SKU, and choose the **super attributes** that will define variants.
2. **Fill in parent attributes** — description, categories, images, pricing, associations. Everything that should be shared across variants goes here.
3. **Add variants** — in the **Variations** section, create one child per combination (e.g., `Size=M, Color=Red`). Each child has its own SKU and can override variant-specific values.

At runtime, the parent acts as the public-facing record and the variants hold the option-specific data (and often their own stock, price, image).

## How to Create a Configurable Product

### Step 1 — Start creation

1. Click **Catalog → Products**.
2. Click **Create Product** in the top-right corner. The **"Create New Product"** dialog opens.
3. Fill in:
   - **Type** — `Configurable`.
   - **Family** — the attribute family that controls which fields appear on the parent.
   - **SKU** — the parent SKU (must be unique).
4. Click **Save Product**.

<ImagePopup src="/assets/2.0/images/configurable-product/configurable.png" alt="Create Configurable Product modal" />

UnoPim redirects you to the edit page and prompts you to select super attributes.

### Step 2 — Pick super attributes

Super attributes are the axes the product varies along — typically ones with Select or Multiselect data types (e.g., `size`, `color`). Only attributes flagged as *usable for variants* on the family appear here.

<ImagePopup src="/assets/2.0/images/configurable-product/configurableAttributes.png" alt="Configurable Super Attributes" />

v2.0 also supports:

- **Flexible super attribute selection** during product creation.
- **`variants_json`** format for programmatic / bulk variant definition.
- **Size-based variant seeder** for generating size grids quickly.

::: warning
Super attributes are **locked after variants are created**. Plan the variant axes up front — changing them later requires deleting and recreating variants.
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

<ImagePopup src="/assets/2.0/images/configurable-product/editProduct.png" alt="Configurable Product Edit Page" />

### Step 4 — Add variants

Scroll to the **Variations** section and click **Add Product** to create a child variant. A modal opens with one input per super attribute plus a **SKU** field for the variant itself.

For each variant:

1. Enter the values for the super attributes (e.g., `Size = M`, `Color = Red`).
2. Enter the variant SKU.
3. Optionally override any variant-specific fields (price, image, stock).
4. Click **Add** to save the variant. It appears in a table under the Variations section alongside any siblings you've already created.

<ImagePopup src="/assets/2.0/images/configurable-product/addVariant.png" alt="Add Variant form" />

You can add as many variants as the product needs. A T-shirt with Size × Color = 3 × 4 needs 12 variants; the size-based seeder can speed this up.

### Step 5 — Add associations

At the bottom of the parent edit page, link this configurable to other products:

| Association | When to use it |
|---|---|
| **Related Products** | Similar alternatives customers may also like. |
| **Up-Sell Products** | Higher-end versions — a premium jacket line, a faster laptop. |
| **Cross-Sell Products** | Complementary items — socks with shoes, cables with electronics. |

For each section, click **Add**, search by SKU, select, and confirm. All three association cards accept as many products as you need.

### Step 6 — Save

Click **Save Product** in the top-right of the edit page. You're redirected back to the **Products Data Grid**, where the configurable appears with *Configurable* in the **Type** column. The variants don't show as separate rows — they're accessible only through the parent's **Variations** section.

<ImagePopup src="/assets/2.0/images/configurable-product/datagrid.png" alt="Configurable Product in Datagrid" />

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
- **[Attribute Family](../attribute/attribute-family.md)** — controls which attributes (including candidate super attributes) a configurable can use.
- **[Product Attribute](../attribute/product-attribute.md)** — how to mark an attribute as usable for variants.
- **[Magic AI — Settings](../magic-ai/settings.md)** — auto-translate variant content across locales.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — v2.0-beta.1 introduced AI Agent support for creating and managing configurable products via chat.
