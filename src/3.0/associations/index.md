# Product Associations

A **product association** links one product to another to tell a story your channels can use: *"customers who look at this also want that"*, *"this is the premium alternative"*, *"these go together in the cart"*. You maintain the links once in UnoPim, and every connected shop, marketplace or app receives them with the product.

UnoPim ships with three association types:

| Type | What it is for |
|---|---|
| **Related Products** | Products shown alongside the one the customer is viewing. |
| **Up Sells** | A premium or higher-quality alternative to the current product. |
| **Cross Sells** | Complementary "add this too" products, typically shown near the cart. |

## New in 3.0: your own association types

The three built-in types used to be the whole list. From UnoPim 3.0 they are just the starting point — you can create as many association types as your business needs: *Spare Parts*, *Accessories*, *Successor Model*, *Bundle Contents*, and so on.

Each type you create can carry:

- A **localized label** per catalog language, so every team sees it in their own words.
- A **status** and a **position**, so you control which types are offered and in what order.
- Optional **custom fields** on every product link — a quantity note, a "featured" flag — with per-language values where you need them.

<ImagePopup src="/assets/3.0/images/associations/associations-overview.png" alt="Association types listing in the UnoPim admin" />

## Why associations matter

- **Merchandising** — related, up-sell and cross-sell links drive the recommendation blocks on your storefronts.
- **One source of truth** — links are product data like any other: they travel through [imports and exports](../data-transfer/import.md) and are available to every integration.
- **Structure, not free text** — a link always points at a real product in your catalog, so it can never go stale silently.

::: tip
Associations are directional. Linking a phone to a case does not link the case back to the phone — add the reverse link if both directions matter to you.
:::

## Where to go next

- [Association Types](./association-types.md) — create and manage the types themselves, including custom link fields.
- [Linking Products](./linking-products.md) — attach associated products on the product edit page.
