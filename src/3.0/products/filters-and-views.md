# Filters & Saved Views

Large catalogs are only useful if you can find things fast. UnoPim 3.0 turns the product grid into a workbench: filter by category, completeness, dates, product properties, or any attribute value — then save the whole setup as a named view and come back to it with one click.

Typical uses: *"Enabled products in the Winter category below 80% completeness"*, *"Everything updated this week"*, or *"All shirts with no brand filled in"*.

## Filter the product grid

1. Go to **Catalog → Products**.
2. Click **Filter** above the grid. The **Apply Filters** drawer opens.
3. Set the filters you need. Common ones — such as SKU, Name, Attribute Family, Status, Type, and Categories — are shown by default.
4. Click **Apply**. The grid reloads with only the matching products.

Each active filter appears as a **chip** above the grid, so you always see exactly what is narrowing the list. Remove a single chip to drop that filter, or use **Clear all filters** to start fresh.

<ImagePopup src="/assets/3.0/images/products/filter-drawer.png" alt="Apply Filters drawer with active filter chips above the product grid" />

## Add more filters

Click **Add Filter** in the drawer to pick from everything else that is filterable:

| Filter | What it does |
|---|---|
| **Categories** | Products in (or not in) the categories you pick from the category tree. |
| **Completeness** | Products above, below, equal to, or between completeness percentages. |
| **Created / Updated dates** | Products created or updated before, after, or between dates. |
| **Product properties** | Status (Enabled/Disabled), Attribute Family, Type (Simple/Configurable). |
| **Attribute values** | Any attribute marked *filterable* — colour, brand, price, launch date, and so on. |

## Operators match the data type

Every filter offers operators that fit its type of data, so conditions read the way you would say them:

| Data type | Operators |
|---|---|
| Text | Contains, Equals, Is empty, Is not empty |
| Numbers, price, completeness | Equals, Less than, Greater than, Between, Is empty, Is not empty |
| Dates | Before, After, Between, Is empty, Is not empty |
| Select / multiselect / categories | In list, Not in list, Is empty, Is not empty |
| Yes/No | Equals |

The *Is empty* operator is a quiet workhorse: it finds every product where a value is still missing — perfect for enrichment to-do lists.

::: tip
If an attribute does not appear in **Add Filter**, it is not marked as filterable yet. Edit the attribute under **Catalog → Attributes** and switch **Is Filterable** on.
:::

## Save a view and reuse it

Once a filter and column combination works for you, keep it:

1. Set up your filters, and arrange the grid columns the way you like (via **Columns**).
2. Open the **Saved Filters** menu in the grid toolbar.
3. Enter a name — for example *Winter enrichment backlog*.
4. Optionally switch on **Share with all admins** so your whole team can use it.
5. Click **Save filter**.

A saved view remembers your filters, columns, sorting, page size, and the channel and locale you were working in. Selecting it later restores the grid exactly as you left it. When you change something while a view is applied, the toolbar shows *Unsaved changes* so you know the grid no longer matches the stored view.

<ImagePopup src="/assets/3.0/images/products/saved-views.png" alt="Saved Filters menu with named views and the share option" />

::: tip
Create one shared view per recurring team task — *Missing images*, *New this week*, *Ready to publish*. It replaces re-explaining filter recipes in chat.
:::

## Act on everything that matches

Filters and mass actions work together across pages:

1. Filter the grid down to the products you want to change.
2. Tick the select-all box. UnoPim offers **Select all** matching records — not just the rows on the current page.
3. Choose the mass action: bulk edit, enable/disable, or delete.

For large selections, the work runs **in the background** — you can keep working while UnoPim processes the change, and follow progress on the Job Tracker.

## Related reading

- **[Simple Product — Working with the Products listing](./simple.md#working-with-the-products-listing)** — columns, bulk edit, and quick export basics.
- **[Product Attribute](../attribute/product-attribute.md)** — how to make an attribute filterable.
- **[Product Variants](./variants.md)** — structure catalogs that vary by colour, size, and more.
