# Association Types

An **association type** is a named kind of product-to-product link — *Related Products*, *Cross Sells*, or anything you define yourself. Manage them under **Catalog → Association Types**.

## The listing

The grid shows every type with its **Code**, **Name**, **Status** (Enabled / Disabled) and **Position**, sorted by position. You can search, filter and sort on every column. Each row offers **Edit** and **Delete**, and you can select several rows to delete them or change their status in one go.

<ImagePopup src="/assets/3.0/images/associations/association-types-grid.png" alt="Association types grid with code, name, status and position" />

## Create an association type

1. Go to **Catalog → Association Types** and click **Create Association Type**.
2. Type a **Name**. You are typing it in your current catalog language — the small badge next to the label shows which one.
3. The **Code** fills itself in from the name. Edit it now if you want something different; once saved it can never change.
4. Click **Save Association Type**. You land on the edit page to finish the setup.

A new type starts **Enabled** and is placed at the end of the ordering.

<ImagePopup src="/assets/3.0/images/associations/association-type-create-modal.png" alt="Create Association Type modal with name and auto-generated code" />

## Edit an association type

The edit page has two sides: the **Fields** panel on the left, and the general settings on the right.

| Setting | Meaning |
|---|---|
| **Code** | Read-only. Identifies the type in imports, exports and the API. |
| **Status** | Switch the type off to hide it from the product edit page without deleting anything. Links already made are kept. |
| **Position** | Controls the order in which types are listed everywhere they appear. |
| **Label** | The display name, one per catalog language — use the locale switcher to fill each language. Where a translation is missing, the code is shown instead. |

Click **Update Association Type** at the top to save.

## Custom fields on each link

A type can carry extra fields that appear on **every product link** of that type — for example a *Quantity* note on *Bundle Contents*, or a *Featured* flag on *Cross Sells*.

To add one, open the type and click **Add Field**:

1. Type the field **Name** in your catalog language. The **Code** is generated and stays editable until you save.
2. Choose the **Type**: **Text** or **Yes/No**.
3. Click **Save Field**, then click the field again to fine-tune it.

| Field setting | Meaning |
|---|---|
| **Label** | One per catalog language, editable when you reopen the field. |
| **Input validation** | Text fields only — restrict entries to a number, an email, a URL, or your own pattern. |
| **Value per locale** | When on, each catalog language gets its own value on every link. |
| **Required** | The value must be filled when the link is saved. |

Drag fields by the handle to reorder them; the product edit page follows that order. Save the page with **Update Association Type** when you are done.

<ImagePopup src="/assets/3.0/images/associations/association-type-fields.png" alt="Custom fields panel on the association type edit page" />

## Delete a type

Use the bin icon in the grid. Deleting a type removes its product links as well, so check the type is genuinely unused first — disabling it is the reversible alternative.

The three built-in types — **Related Products**, **Up Sells** and **Cross Sells** — are system types. They can be edited, reordered and even disabled, but they cannot be deleted.

## Permissions

Access is controlled by roles. Under **Settings → Users → Roles**, the *Association Types* permission group lets you grant viewing, creating, editing and deleting separately, so you can let a team use association types without letting them change the setup.
