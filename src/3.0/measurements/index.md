# Measurements

Products carry physical values — a width in centimeters, a weight in kilograms, a capacity in liters. **Measurements** let you store these values with their unit, so "12 in" and "30.48 cm" mean the same thing everywhere: in the PIM, in your exports, and on every sales channel.

Without a shared unit system, the same product ends up listed as "2 kg" on one channel and "2000" (grams? pounds?) on another. Measurements keep the number and the unit together, and UnoPim converts between units for you.

## Measurement families

A **measurement family** represents one physical quantity — Length, Weight, Area, Volume, Duration, Temperature, and so on. Each family groups the units that measure that quantity: the Length family contains Millimeter, Centimeter, Meter, Inch, Feet, Yard, Mile, and more.

UnoPim ships with a ready-made set of families covering the common quantities (Length, Weight, Area, Volume, Speed, Pressure, Energy, Power, Temperature, Duration, Frequency, Binary, Packaging, and others), each pre-loaded with its units and conversions. You can use them as they are, extend them, or create your own.

<ImagePopup src="/assets/3.0/images/measurements/measurement-families-grid.png" alt="Measurement Families grid in the UnoPim admin" />

### The standard unit

Every family has one **standard unit** — the reference all other units convert to. For Length it is Meter; for Weight it is Kilogram. When a user enters "12 in", UnoPim also stores the converted value in the standard unit. That converted value is what makes comparing, filtering and exporting products consistent, even when different users entered values in different units.

### Units and conversions

Each unit in a family carries a **conversion operation** that turns a value in that unit into the standard unit. A conversion is one or more simple steps — **Multiply**, **Divide**, **Add** or **Subtract** by a value. Inch converts to Meter by multiplying by 0.0254; Fahrenheit converts to Kelvin with a subtract-then-divide chain.

Because every unit knows its way to the standard unit, UnoPim can express any value in any unit of the same family. Enter a value in inches, and it can come out in centimeters in an export or on a channel.

## Managing families and units

You find measurements under **Catalog → Measurement** in the admin panel. What you can see and change here depends on your role — see [Permissions](#permissions) below.

### Create a measurement family

1. Go to **Catalog → Measurement**.
2. Click **Create Measurements**.
3. Fill in the family and its first unit:

| Field | Description |
|---|---|
| **Code** | Unique identifier of the family (letters, numbers and underscores). Used in imports, exports and the API. |
| **Standard Unit Code** | The code of the unit that becomes the family's reference unit. |
| **Symbol** | The short symbol shown next to values, e.g. `km`, `m`. |
| **Conversion operation** | The Multiply / Divide / Add / Subtract steps that convert this unit to the standard unit. |

4. Click **Save**.

<ImagePopup src="/assets/3.0/images/measurements/create-measurement-family.png" alt="Create Measurements form" />

After saving, open the family to set its **Label** per locale on the **General** tab. Labels are what users see; codes are what systems use.

### Add or edit a unit

1. Open the family from **Catalog → Measurement**.
2. Switch to the **Units** tab and click **Create Units**.
3. Enter the unit's **Code**, **Symbol**, its translated labels, and its **Conversion operation** (an **Operator** and a **Value** per step; click **Add New Operation** for multi-step conversions).
4. Click **Save**.

The units grid shows each unit's name, code and symbol, and marks which one is the **Standard** unit.

::: tip A family in use is protected
Once a measurement family is used by an attribute, its standard unit, unit codes and conversion operations are locked, and the standard unit can never be deleted. This protects product values that were already converted. Add new units at any time — just design codes and conversions carefully before you start using the family on products.
:::

## Precision and decimals

You control how many decimals UnoPim keeps for measurement values under **Configuration → System Settings → Measurement**:

| Setting | Description |
|---|---|
| **Decimal strategy** | **Round** keeps the nearest value; **Trim** truncates the extra decimals. |
| **Amount decimals** | Decimal places kept for the value entered by the user (default 4). |
| **Base value decimals** | Decimal places kept for the value converted to the standard unit (default 6). |

These settings apply to all measurement values across the catalog.

## Measurement attributes

To store a measurement on your products, create an [attribute](../attribute/attribute-input.md) of type **Measurement**. When you create it, you bind it to a **Measurement Family** and pick a default **Measurement Unit**.

On the product edit page, the attribute shows a value field with a unit selector next to it. Users type the number and pick any unit of the family — one enters "30 in", another "76.2 cm" — and UnoPim stores both the entered value and its standard-unit equivalent, so the data stays comparable.

<ImagePopup src="/assets/3.0/images/measurements/measurement-attribute.png" alt="Measurement attribute on the product edit page" />

Measurement attributes also work in product grid filters (equal to, greater than, between, and more) and in bulk editing.

## Permissions

Access to measurements is controlled by roles, under **Settings → Roles**. A role can be granted or denied:

- **Measurement Families** — view, create, edit, delete
- **Measurement Units** — view, create, edit, delete
- **Measurement** configuration — the precision settings above

A user without these permissions can still use measurement attributes on products; the permissions only govern who may change the unit system itself.

## Measurements in imports, exports and integrations

Measurement values travel with their unit through the whole data pipeline:

- **Imports** accept a value with a unit code and validate that the unit belongs to the attribute's family.
- **Exports** include the value and unit, and can deliver values converted to the unit a channel expects.
- **Integrations and the API** exchange measurement values the same way, so connected systems always receive an unambiguous number-plus-unit pair.
