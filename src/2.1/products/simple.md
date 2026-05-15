# Simple Product

A **Simple Product** is a single, standalone SKU — one physical item with one set of attributes and no variations. It's the most common product type in UnoPim and the right choice whenever a product *doesn't* need size, colour, or other variants.

## What is a Simple Product?

| | Simple Product |
|---|---|
| **Structure** | One SKU, one set of attribute values, one row in the product grid. |
| **When to use it** | The item has no variants, or each variant should be managed as its own separate record. |
| **Typical examples** | A book, a single paint colour, a specific box of screws, a ring-bound notebook. |
| **Compare with** | [Configurable Product](./configurable.md) — use that when one catalog entry needs to group multiple size/colour/material variants under a single parent. |

## How does it work?

A Simple Product is created in two phases:

1. **Create** — you set the product type to `Simple`, pick an attribute family, and give it a SKU. That creates a minimal record.
2. **Edit** — UnoPim redirects you to the product edit page, where you fill in the attributes defined by the family (name, description, price, categories, images, associations, …) and save.

Because attribute availability is driven by the **attribute family**, a Simple Product in the `default` family has a different set of editable fields than one in, say, a `books` family. Managing the shape of a Simple Product means managing its family — see [Attribute Family](../attribute/attribute-family.md).

## How to Create a Simple Product

### Step 1 — Start creation

1. Click **Catalog → Products**.
2. In the top-right corner, click **Create Product**. A dialog titled **"Create New Product"** opens.
3. Fill in the three fields:
   - **Type** — `Simple`.
   - **Family** — the attribute family that controls which fields will appear on the edit page.
   - **SKU** — a unique identifier for the product.
4. Click **Save Product**.

<ImagePopup src="/assets/2.1/images/simple-product/simple.png" alt="Create Simple Product modal" />

UnoPim closes the dialog and redirects you to the edit page, where every remaining field can be filled in.

<ImagePopup src="/assets/2.1/images/simple-product/editProduct.png" alt="Edit Simple Product" />

### Step 2 — Fill in the product details

The edit page groups attributes by **Attribute Group** (General, Short Description, Description, Price, Technical, Categories, Associations, …). Exactly which groups appear depends on the family you chose at creation.

The `default` family requires at minimum:

| Field | Meaning |
|---|---|
| **SKU** | Unique product identifier. Cannot be duplicated. |
| **Name** | Display name shown to customers. |
| **URL Key** | URL-safe slug for storefront links. |

Additional built-in sections for the `default` family:

| Section | Purpose |
|---|---|
| **Short Description** | One- or two-line summary. Appears on listing cards and SEO previews. |
| **Description** | Full product copy — can use the WYSIWYG editor. |
| **Price** | Selling price plus cost price per currency. |
| **Technical** | Status toggle — enables/disables the product. |
| **Categories** | Assign the product to one or more categories (including a root category). |
| **Associations** | Related / Up-sell / Cross-sell product links (see below). |

Each section appears as its own card on the edit page. The **Short Description** and **Description** cards include a WYSIWYG editor for rich text. The **Price** card shows one row per configured currency. The **Technical** card holds the green **Status** toggle — leave it *Enabled* for the product to be considered active. The **Categories** card opens a tree picker; tick every node the product belongs to. All cards share the same *Save Product* button in the top-right of the page.

### Step 3 — Add associations

At the bottom of the edit page you can link this product to others. All three sections work the same way: click **Add**, search by SKU, then click **Add Selected Product**.

| Association | When to use it |
|---|---|
| **Related Products** | Similar alternatives — helps customers discover substitutes they might also like. |
| **Up-Sell Products** | Higher-end versions — a better TV, a faster laptop, a more durable tablet. |
| **Cross-Sell Products** | Complementary items — protective case + laptop, adapter + phone. |

Each of the three association cards has the same layout: an **Add** button opens a search-by-SKU picker, ticked products appear as a list underneath with a ✕ button to remove them, and there's no limit on how many you can add.

### Step 4 — Save

Click **Save Product** in the top-right of the edit page. You're redirected back to the **Products Data Grid**, where the new product appears as a row with its SKU, image thumbnail, name, attribute family, status chip, type (*Simple*), and completeness percentage.

<ImagePopup src="/assets/2.1/images/simple-product/datagrid.png" alt="Products Datagrid" />

::: tip
Attributes that support values per channel show a **channel badge**. Attributes that support values per locale show a **locale badge**. Attributes that support both show both badges — these are the fields you'll revisit when you switch channels or locales on the edit page.
:::

## Working with a Simple Product after creation

Once created, a Simple Product supports the full set of UnoPim product features. The rest of this page groups them by what you're trying to do.

### Translate values across locales

UnoPim supports **Product Values Translation** — per-locale values for any attribute flagged as locale-specific.

<ImagePopup src="/assets/2.1/images/simple-product/product-edit-locale.png" alt="Product Edit with Locale Switcher" />

#### Manual translation

1. Open the product in **Catalog → Products**.
2. At the top of the edit page, use the two switchers:
   - **Channel Switcher** (e.g., *Default*) — picks which channel's values you're editing.
   - **Locale Switcher** (e.g., *English (United States)*) — picks the locale.
3. Switch to the target locale. The form reloads with that locale's values. Locale-specific fields show a locale badge (e.g., `EN_US`).
4. Enter the translated values (Name, Description, URL Key, …).
5. Click **Save Product**.
6. Repeat per locale.

::: tip
A **DEFAULT** badge means channel-specific. A locale badge (e.g., `EN_US`) means locale-specific. Both badges together means the attribute supports values per channel **and** per locale.
:::

#### Auto-translation with Magic AI

Enable **Magic AI → Settings → Translation** and every product save auto-translates locale-specific fields into the target locales:

1. Toggle **Enabled** on.
2. Set the **Source Channel** and **Source Locale** (the language you write in).
3. Set the **Target Channel** and **Target Locales**.
4. Pick a **Translation Model** — you can use a cheaper/faster provider for this.
5. Optionally toggle **Replace Existing Value** to overwrite existing translations on re-run.

See [Magic AI — Settings](../magic-ai/settings.md) for the full field reference.

### Check completeness

UnoPim computes a **Product Completeness** score per product, per channel, per locale:

- Score is displayed as a percentage (e.g., 89%).
- Low-completeness products show *"Low completeness, add details to improve"*.
- Nearly-complete products show *"Almost complete, just a few details left"*.
- The Dashboard aggregates completeness per channel in the **Completeness** widget.

::: tip
Pair completeness with **Magic AI Auto-Enrichment** (Magic AI → Settings → Agentic PIM) to automatically fill in missing fields and bump the score.
:::

### Review change history

Click the **History** tab on the product edit page to see every change. Each entry records:

- Date/time of the change.
- The user who made it.
- Exact fields that were modified, with before/after values.

Click the **eye icon** on any entry to open a detail view that shows the before and after values side by side. UnoPim tracks history for **products, categories, attributes, attribute families, and channels** with the same UI.

### Duplicate a product

To create a new product seeded from an existing one:

1. In **Catalog → Products**, find the row to copy.
2. Click the **Copy icon** (clipboard) in the Actions column.
3. UnoPim creates a duplicate with a new SKU.
4. Edit the copy to customise it.

## Working with the Products listing

The listing at **Catalog → Products** is where you find, filter, bulk-edit, and export products.

### Manage columns

Click the **Columns** button to open the **Manage columns** modal.

<ImagePopup src="/assets/2.1/images/simple-product/columns-selector.png" alt="Columns Selector" />

| Panel | Contents |
|---|---|
| **Available Columns** (left) | Every attribute that can be shown as a column — ID, Parent, Created/Updated At, URL Key, Tax Category, Short Description, Description, Price, Cost, Meta Title, Meta Keywords, Meta Description, plus every custom attribute. Search + pagination. |
| **Selected Columns** (right) | Currently visible columns. Default: SKU, Image, Name, Attribute Family, Status, Type, Complete. |

To customise:

1. Drag from Available to Selected to add a column.
2. Drag within Selected to reorder.
3. Drag out of Selected (or click remove) to hide.
4. Click **Apply**.

### Filter products

Click **Filter** above the datagrid to slide open the **Apply Filters** drawer from the right side of the screen. The drawer carries a fixed set of built-in filter fields plus an **Add Filter** button for custom attributes.

**Built-in filters** (always shown):

- **SKU** — text match.
- **Name** — text match.
- **Attribute Family** — dropdown of all configured families.
- **Status** — Enabled / Disabled dropdown.
- **Type** — Simple / Configurable dropdown.

**Add Filter (custom attributes)**

Click **Add Filter** at the bottom of the drawer to append a filter for any attribute that has **Is Filterable** ticked on its Configuration card (see [Product Attribute → Configuration](../attribute/product-attribute.md#add-attributes)). This is how you filter the listing by `color`, `size`, `brand`, or any other attribute relevant to your catalog:

1. In the drawer, click **Add Filter**.
2. Pick an attribute from the dropdown — only attributes with **Is Filterable = on** are listed.
3. Enter or select the value(s) to filter on. Input shape depends on the attribute's data type (text input, select dropdown, date range, checkbox, etc.).
4. Repeat **Add Filter** to stack more filters — they combine with AND logic.

Click **Save** at the bottom of the drawer to apply the filter set. The datagrid reloads showing only the matching rows. To clear, open the drawer again and remove individual filter chips, or reload the page to reset.

::: tip
If an attribute you want to filter by isn't in the Add Filter dropdown, head to **Catalog → Attributes**, edit the attribute, tick **Is Filterable** in the Configuration card, and save. It appears in the dropdown immediately.
:::

### Bulk edit

UnoPim supports **Bulk Edit** on any attribute shared by the selected products:

1. Go to **Catalog → Products**.
2. Tick the rows you want to edit.
3. Open the **Bulk Actions** dropdown.
4. Select **Edit** and choose the attribute.
5. Enter the new value and apply.

#### Bulk Enable / Disable

1. Select multiple products.
2. In the bulk action bar, choose **Enable** or **Disable**.

#### Bulk Delete

1. Select the products.
2. Click **Delete**.
3. Confirm — the deletion is permanent.

### Quick Export

Export selected (or all) products directly from the listing:

1. Select the products.
2. Click **Quick Export** in the top-right, next to **Create Product**.
3. Choose **CSV**, **XLS**, or **XLSX** from the format picker.
4. UnoPim generates the file in the background and downloads it to your browser once processing finishes. You can watch the job progress on the **Job Tracker** page while you wait.

For scheduled or filtered exports, use the full **[Export](../data-transfer/export.md)** workflow in Data Transfer.

## Related reading

- **[Configurable Product](./configurable.md)** — when to use variants instead of a single Simple SKU.
- **[Attribute Family](../attribute/attribute-family.md)** — controls which fields appear on a Simple Product.
- **[Magic AI — Settings](../magic-ai/settings.md)** — configure auto-translation and auto-enrichment for products.
- **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** — create, update, and bulk-edit Simple Products via natural language.
