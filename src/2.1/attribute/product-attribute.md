# Product Attribute

An Attribute is a specification or characteristic of a product — Color, Size, and Pattern are all attributes of a T-Shirt. You can create as many attributes per product as you need; the full set of attributes is what gives each product its shape and searchability.

### How to Create a Product Attribute in UnoPim

Open the Admin Panel and follow the steps below.

### Add Attributes

**Step 1** — Click **Catalog → Attributes → Create Attributes**.

<ImagePopup src="/assets/2.1/images/attributes/createAttribute.png" alt="Create Attribute" />

**Step 2** — Enter the **Code** and **Data Type** in the general section.

<ImagePopup src="/assets/2.1/images/attributes/general.png" alt="General section" />

**Note** — The **Is Unique** validation is only available for types **Text, Datetime & Date**.

**Step 3** — Enter the **Label** of your Attribute.

<ImagePopup src="/assets/2.1/images/attributes/label.png" alt="Label section" />

**Step 4** — Select **Validation** if you want the Attribute to be required or unique.

**Note** — The **Is Unique** validation is only available for types **Text, Datetime & Date**.

<ImagePopup src="/assets/2.1/images/attributes/validation.png" alt="Validation section" />

**Step 5** — Open the **Configuration** card on the right of the form and tick the options that apply:

| Option | What it does |
|---|---|
| **Value Per Locale** | The attribute stores a separate value per locale. Switch the locale on the product edit page to enter each translation. |
| **Value Per Channel** | The attribute stores a separate value per channel. Useful when the same field differs across storefronts (e.g., per-channel price or description). |
| **Is Filterable** | Makes the attribute available in the **Apply Filters** drawer on the Products listing (see [Filter products](../products/simple.md#filter-products)). Tick this for any attribute you want to use as a filter — `size`, `color`, `brand`, etc. |

<ImagePopup src="/assets/2.1/images/attributes/configuration.png" alt="Configuration section" />

::: tip
Toggling **Is Filterable** on an existing attribute immediately enables the **Add Filter** option for it on the Products listing — no reindex step needed.
:::

Click **Save Attribute**. The new attribute appears in the Datagrid.

<ImagePopup src="/assets/2.1/images/attributes/output.png" alt="Attribute Datagrid" />

Next, go to **Catalog → Attribute Families**, open the family you want the attribute in, and drag the attribute from the unassigned list into the desired group.

<ImagePopup src="/assets/2.1/images/attributes/family.png" alt="Attribute Family assignment" />

Save the family, then open any product in that family — the attribute now appears on the edit form.

<ImagePopup src="/assets/2.1/images/attributes/product.png" alt="Attribute shown on product edit page" />

### A Visual Breakdown of UnoPim Product Data Types

**1) Text** — A field for a single line of text. Typical for short inputs like names or URL keys.

<ImagePopup src="/assets/2.1/images/attributes/text.png" alt="Text attribute" />

**2) Textarea** — A multi-line text field. Used for longer content like product descriptions or comments. You can enable/disable the WYSIWYG editor.

<ImagePopup src="/assets/2.1/images/attributes/textarea.png" alt="Textarea attribute" />

**3) Boolean** — True / false toggle. Used for yes/no or on/off selections.

<ImagePopup src="/assets/2.1/images/attributes/boolean.png" alt="Boolean attribute" />

**4) Select** — A dropdown allowing one choice from a predefined list.

<ImagePopup src="/assets/2.1/images/attributes/select.png" alt="Select attribute" />

**5) Multiselect** — Like Select but allows multiple choices from the list.

<ImagePopup src="/assets/2.1/images/attributes/multiselect.png" alt="Multiselect attribute" />

**6) Datetime** — Pick a specific date and time. Used for scheduling and timestamps.

<ImagePopup src="/assets/2.1/images/attributes/datetime.png" alt="Datetime attribute" />

**7) Date** — Pick a date only (no time component).

<ImagePopup src="/assets/2.1/images/attributes/date.png" alt="Date attribute" />

**8) Gallery** — Manages multiple images **and videos** per product. In v1.0.0 UnoPim added video support to galleries:

1) Edit gallery images without changing their position.
2) Drag-and-drop to reorder images.
3) **Video Support** — upload and manage video files alongside images.

<ImagePopup src="/assets/2.1/images/attributes/gallery.png" alt="Gallery attribute with video" />

::: tip
Video support in the gallery attribute was introduced in v1.0.0. You can upload common video formats directly to the product gallery.
:::

**9) Image** — Upload or display a single image.

<ImagePopup src="/assets/2.1/images/attributes/image.png" alt="Image attribute" />

**10) File** — Upload arbitrary files (documents, images, etc.).

<ImagePopup src="/assets/2.1/images/attributes/file.png" alt="File attribute" />

**11) Checkbox** — A toggleable checkbox for binary selections (agreements, preferences).

<ImagePopup src="/assets/2.1/images/attributes/checkbox.png" alt="Checkbox attribute" />

**12) Price** — A price field in addition to the predefined **Prices** attribute.

<ImagePopup src="/assets/2.1/images/attributes/price.png" alt="Price attribute" />

## Swatch Types

UnoPim v2.0 introduces **Swatch Types** for **Select** and **Multiselect** attributes. Swatches give options a visual representation, making them easier to identify and pick.

### Types of Swatches

| Swatch Type | Description |
|-------------|-------------|
| **Dropdown** | Standard dropdown selection (default) |
| **Color** | Displays color swatches for each option |
| **Image** | Displays image thumbnails for each option |
| **Text** | Displays text labels as visual swatches |

### How to Enable Swatch Types

1. Create or edit a **Select** or **Multiselect** attribute.
2. In the attribute configuration, select the **Swatch Type** from the dropdown.
3. For each attribute option, configure the swatch value:
   - **Color swatch** — enter a hex color code (e.g., `#FF0000` for red).
   - **Image swatch** — upload a small image for each option.
   - **Text swatch** — enter display text for each option.
4. Click **Save Attribute**.

::: tip
Swatch types are especially useful for attributes like Color, Material, or Pattern where a visual representation helps users pick options quickly.
:::

By following the above steps, you can easily create a **Product Attribute** in UnoPim.
