# First Steps with UnoPim

Welcome! This page walks you through your first days in UnoPim, in the order that makes each step easier than the last. Every PIM expert started exactly where you are now — with an empty catalog and a login screen.

Pick the path that matches your role. Many people do both: set up the system first, then build the catalog.

## If you administer UnoPim

Your job is to prepare the workspace so catalog work can start. Do these steps in order — each one unlocks the next.

1. **Set up your locales** — [Locales](../settings/locale.md)

   Locales define the languages your product content will be written in. Do this first, because almost everything you create later — attribute labels, category names, product descriptions — is stored per locale.

2. **Add your currencies** — [Currencies](../settings/currencies.md)

   Currencies power every price attribute in the catalog. Adding them now means price fields work correctly from the very first product.

3. **Create your channels** — [Channels](../settings/channels.md)

   A channel is a destination for your product data — a webshop, a marketplace, a print catalog. Channels combine the locales and currencies you just set up, which is why they come third.

4. **Invite your team** — [Users](../settings/users.md) and [Roles](../settings/roles.md)

   Create a role for each kind of work (catalog manager, viewer, integrator), then invite users into those roles. Setting roles before users means nobody ever has more access than they need.

5. **Choose how people sign in** — [Microsoft SSO](../configuration/microsoft-sso.md)

   If your company uses Microsoft accounts, connect single sign-on so your team signs in with the account they already have — no extra passwords to manage or reset.

6. **Make it yours** — [System Settings](../configuration/system-settings.md)

   Upload your logo, set the admin name, and pick sensible defaults. A branded workspace tells your team this is the official home of product data.

::: tip
Once these six steps are done, the system is ready. Everything after this point is catalog work.
:::

## If you manage the catalog

Product data in UnoPim is built from a few blocks that stack on top of each other. Build them bottom-up and everything fits on the first try.

1. **Create your attributes** — [Attributes](../attribute/product-attribute.md)

   Attributes are the individual fields a product can have: name, color, weight, description. They are the smallest building block, so they come first.

2. **Organize them into attribute groups** — [Attribute Groups](../attribute/attribute-groups.md)

   Groups bundle related attributes (General, Pricing, SEO) so product forms stay tidy. Grouping now saves you from a wall of unsorted fields later.

3. **Combine groups into families** — [Attribute Families](../attribute/attribute-family.md)

   A family is the full template for one kind of product — a "T-shirt" family carries different fields than a "Laptop" family. Every product you create must belong to a family, which is why families come before products.

4. **Build your category tree** — [Categories](../category/categories.md)

   Categories organize the catalog the way your shop or team thinks about it. Having the tree ready means each new product can be filed as soon as it is created.

5. **Create your first product** — [Simple Products](../products/simple.md)

   Now the rewarding part. Pick a family, give the product an SKU, and save. The family you built decides exactly which fields appear on the edit page.

6. **Enrich it and watch completeness** — [Completeness](../products/index.md)

   Fill in the attributes, add images, and assign categories. The completeness score shows how close the product is to being ready for each channel and locale — your built-in to-do list.

7. **Link related products** — [Associations](../associations/index.md)

   Connect cross-sells, up-sells, and related items so every sales channel can show "you may also like". You can even define your own association types.

8. **Get data in and out** — [Import](../data-transfer/import.md) and [Export](../data-transfer/export.md)

   One product by hand teaches you the model; imports do the volume. Bring in your existing spreadsheet, then export enriched data to wherever it needs to go.

## Go further

With the basics in place, explore what makes UnoPim 3.0 shine:

- **Product variants** — [Configurable Products](../products/configurable.md) and [Variants](../products/variants.md) for products that come in sizes and colors.
- **Measurements** — [Measurement Families](../measurements/index.md) give units (kg, cm, liters) to your numeric attributes with automatic conversion.
- **Digital Product Passports** — [Passports](../passport/index.md) publish a public compliance page for every product.
- **Magic AI** — [AI Enrichment](../magic-ai/settings.md) writes and translates product content for you.
- **AI Agent** — [AI Agent Chat](../ai-agent/ai-agent-chat.md) lets you manage the catalog in plain language.
- **Filters & saved views** — [Filters and Views](../products/filters-and-views.md) save your favorite grid setups and share them with the team.
- **Webhooks & integrations** — [Webhooks](../configuration/webhooks.md) and [Integrations](../configuration/integration.md) keep other systems in sync automatically.

Take it one step at a time — the order above is the whole secret.
