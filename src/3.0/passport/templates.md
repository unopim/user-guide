# Passport Templates

A **passport template** defines what a Digital Product Passport contains. It is ordinary data you edit in the admin — when a regulation adds a field, you add a row, not a migration.

Find them under **Catalog → Passports → Templates**.

## Anatomy of a template

| Part | What it does |
|---|---|
| **Code** | Identifies the template in published data. Set once at creation and read-only afterwards. |
| **Applies To** | The attribute families whose products publish this passport. A family belongs to **one** template only, so families already taken by another template are not offered. |
| **Sections** | Groups of fields on the public page — *Materials*, *Circularity*, *Compliance*. |
| **Fields** | One row on the passport each. |

## What a field carries

| Setting | Meaning |
|---|---|
| **Label** | What the public page shows. Translatable — use the locale switcher to fill each market's language. |
| **Code** | Identifies the field in published data. Generated from the label, editable while creating, fixed once saved. |
| **Section** | Which group it appears under. |
| **Source** | *Product attribute* — read the value per product; or *Fixed value* — the same localized text for every product (a take-back scheme, a warranty statement). |
| **Access tier** | **Consumer** (public), **Operator** (repairers and recyclers, via a signed link) or **Authority** (market surveillance, via a signed link). |
| **Identifier role** | Marks a field as the **GTIN**, **Model identifier** or **Batch identifier**. These feed the identification block and the QR code rather than appearing as an ordinary row. Any attribute can play the role — if your GTIN lives in `ean`, point the role at `ean`. |
| **Required** | A passport will not publish in a language while this field is empty there. |

## Create a template

1. Go to **Catalog → Passports → Templates** and click **Create Template**.
2. Enter a **Name**. The **Code** fills itself in — edit it now if you want something different.
3. Click **Save Template**. You land on the editor.

## Configure it

### 1. Choose the families

Under **Applies To**, pick the attribute families this passport covers. Products in those families — and only those — publish through this template.

### 2. Add sections

**Add Section** → type the section name → **Done**. Drag the rows to reorder; the public page follows that order.

### 3. Add fields

**Add Field**, then:

1. Type the **Label**; the **Code** is generated and stays editable.
2. Choose the **Section**.
3. Choose the **Source**:
   - *Product attribute* → pick the attribute. Only attributes belonging to the bound families are offered.
   - *Fixed value* → type the text.
4. Set the **Access tier**, an **Identifier role** if the field is an identifier, and switch **Required** on for anything a regulator mandates.
5. **Done**.

### 4. Save

Use **Save changes** in the bar at the bottom.

::: tip Readiness counter
The Fields header shows *"N of M required fields sourced"*. Leaving a field without a source is fine — it is a draft: the field publishes nothing and the counter tells you what is still open.
:::

## Translate a template

Edit any section or field row (the pencil icon) and use the locale switcher next to the label. The badge shows how many locales are filled. A label with no translation for a market falls back to the source language.

## Reorder, edit, delete

- **Reorder** — drag rows by the handle. Order is the publish order.
- **Edit** — the pencil icon. Codes stay read-only, because published passports refer to them.
- **Delete** — the bin icon, then **Save changes**. The field stops publishing; passports already published keep their history.
