# Linking Products

You attach associated products on the **product edit page**. Open a product and find the **Associations** card — it shows how many products are already linked. Click it and the Associations panel slides open as a drawer over the page.

<ImagePopup src="/assets/3.0/images/associations/associations-drawer.png" alt="Associations drawer on the product edit page" />

## Add links

1. Open the product and click the **Associations** card.
2. If the type you want is not shown yet, click **Add Association Type** and search for it by name or code. Only enabled types are offered.
3. Each type is a tab, with a badge showing how many products it holds. Select the tab you want to work in.
4. Click **Add**. The product picker opens — the full product grid, with the same search, filters and sorting you know from the catalog. Products already linked under this type are not offered again.
5. Tick the products to link and confirm.
6. Click **Add Selected** to close the drawer, then save the product.

<ImagePopup src="/assets/3.0/images/associations/associations-product-picker.png" alt="Product picker for selecting associated products" />

## Fill the link fields

If the association type defines [custom fields](./association-types.md#custom-fields-on-each-link), they appear next to every linked product — text boxes and Yes/No switches. Fields marked *per locale* show a badge with the current catalog language: the value you type belongs to that language, and you switch the language at the top of the page to fill another one.

## Remove a link

Click **Remove Product** under the product you want to unlink, then save. Removing a link never touches the product itself.

## Saving

The drawer feeds the normal product form. As soon as you change anything — add, remove, or edit a field value — the **Save / Discard** bar appears at the bottom of the page. Nothing is stored until you click **Save**, and **Discard** puts everything back the way it was. Leaving the page with unsaved changes triggers a warning first.

::: tip
Disabling an association type hides its tab from the drawer, but the links it holds are kept and continue to export. Re-enable the type and they reappear.
:::

## Beyond the edit page

- **Import and export** — associations travel inside the normal product [import](../data-transfer/import.md) and [export](../data-transfer/export.md), and dedicated association jobs exist for moving links in bulk on their own.
- **Integrations** — every linked product, including custom field values, is part of the product data your connected systems receive through the API.
