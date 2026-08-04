# What's New in UnoPim 3.0

UnoPim 3.0 was released on July 31, 2026. It is the biggest release so far, and most of it is aimed squarely at the people who work in the catalog every day: Digital Product Passports for EU compliance, association types you define yourself, two-level product variants with inherited values, measurement attributes, powerful product grid filters with saved views, and a faster, modernized admin with dark mode.

This page walks through each major change and points you to the guide chapter where you can learn more.

## At a glance

| Area | What's new |
|---|---|
| Compliance | [Digital Product Passports](../passport/index.md) with ready-made EU templates |
| Catalog modeling | [Configurable associations](../associations/index.md), [two-level variants](../products/variants.md), [measurements](../measurements/index.md) |
| Daily work | [Product grid filters and saved views](../products/filters-and-views.md), a [modernized admin](../introduction/admin-essentials.md) with dark mode |
| Team access | [Microsoft sign-in](../configuration/microsoft-sso.md), per-user catalog locale and default channel |
| Connectivity | [Multiple webhooks](../configuration/webhooks.md), new [import](../data-transfer/import.md) and [export](../data-transfer/export.md) job types |
| Administration | A new [System Settings](../configuration/system-settings.md) hub, security and performance upgrades |

## Stay compliance-ready with Digital Product Passports

A Digital Product Passport is a public page for one of your products, reachable by scanning a QR code, that shows the data a regulator, recycler, or customer is entitled to see. UnoPim now builds these pages from the product data you already maintain — you design a passport template, bind it to a product family, and publish. Ready-made templates for the EU Battery Regulation and ESPR are included, and every publish is kept in a version history you can look back on.

Learn more in [Digital Product Passport](../passport/index.md).

<ImagePopup src="/assets/3.0/images/releases/digital-product-passport.png" alt="A published Digital Product Passport page with its QR code" />

## Model any product relationship with configurable associations

Until now, products could only be linked as related, cross-sell, or up-sell. In 3.0 you create your own association types — spare parts, accessories, replacements, bundles, or whatever your business needs — each with its own label in every catalog language. You can even add extra fields to each link, such as a quantity or a note, and fill them per language. The new types appear in the product editor, in imports and exports, and in the product grid.

Learn more in [Product Associations](../associations/index.md).

<ImagePopup src="/assets/3.0/images/releases/association-types.png" alt="The Association Types settings page with custom types" />

## Enrich once with two-level product variants

Variant management grew up in this release. A product family can now define up to two variant levels — for example style, then color, then size — and child products inherit shared values from their parent automatically. You enrich the description once on the parent, and every variant carries it. Variant groups and a redesigned family editor make large variant trees easy to browse and maintain.

Learn more in [Product Variants](../products/variants.md).

<ImagePopup src="/assets/3.0/images/releases/variant-tree.png" alt="A two-level variant tree with inherited values highlighted" />

## End unit confusion with measurements

Sell in inches, store in centimeters, and export in whatever unit your channel demands. Measurements are now a first-class part of the catalog: you define measurement families with units and automatic conversions, set the precision you want, and use measurement attributes on your products like any other attribute.

Learn more in [Measurements](../measurements/index.md).

## Find products faster with filters and saved views

The product grid now filters by category, completeness, creation and update dates, product properties, and any attribute value — each with operators that fit the attribute type. Once you have the columns and filters you like, save the combination as a view and return to it with one click. Your "German descriptions missing" view is always one click away.

Learn more in [Filters & Saved Views](../products/filters-and-views.md).

<ImagePopup src="/assets/3.0/images/releases/filters-saved-views.png" alt="The product grid with attribute filters applied and a saved view selected" />

## Work faster in a modernized admin

The whole admin was rebuilt for speed and comfort:

- **Dark mode** — choose light or dark, or let UnoPim follow your browser.
- **No more full-page reloads** — moving between pages and saving changes happens instantly, and your browser history still works.
- **A Save/Discard bar** — it appears only when something changed, tells you which sections are unsaved, and warns you before you navigate away.
- **Quick-create everywhere** — create attributes, groups, families, category fields, and association types from a small modal without leaving your current page.
- **A category tree browser** — browse, search, and reorganize large category trees, with lazy loading for big branches.

Learn more in [Admin Essentials](../introduction/admin-essentials.md).

<ImagePopup src="/assets/3.0/images/releases/admin-dark-mode.png" alt="The UnoPim admin dashboard in dark mode" />

## Sign in with Microsoft

Teams that live in Microsoft 365 can now sign in to UnoPim with their Microsoft work accounts. An administrator connects the organization once; from then on, colleagues use the **Sign in with Microsoft** button and never manage a separate UnoPim password. Access stays restricted to the tenants you allow.

Learn more in [Microsoft SSO](../configuration/microsoft-sso.md).

## Keep every system in sync with multiple webhooks

One webhook was never enough. You can now register as many webhook endpoints as you need — one for your ERP, one for your shop, one for a marketplace — each subscribed to exactly the events it cares about. Every delivery is signed and recorded in its own log, so you can see what was sent, when, and whether it arrived.

Learn more in [Webhooks](../configuration/webhooks.md).

## Move more data with import and export

Data transfer covers far more of the catalog now. New job types let you import and export attributes, attribute groups, attribute families, attribute options, category fields, association links, locales, channels, currencies, roles, and users — with sample files for each. Product exports gain rich filters (status, completeness, categories, date ranges such as "since the last export", and attribute-value conditions), and a **quick export** sends exactly the products you selected in the grid.

Learn more in [Import](../data-transfer/import.md) and [Export](../data-transfer/export.md).

<ImagePopup src="/assets/3.0/images/releases/export-filters.png" alt="Product export job with filter conditions configured" />

## Make UnoPim yours: per-user settings and the System Settings hub

Each user can now pick a personal catalog locale and a default channel, and UnoPim uses them consistently — in product editing, in account settings, and in background jobs. Administration also has a new home: the **System Settings** hub gathers appearance (including your own logo and favicon), email, sign-in, measurements, passports, and more into one searchable page, alongside a System Information page that shows the health of your installation at a glance.

Learn more in [Users](../settings/users.md) and [System Settings](../configuration/system-settings.md).

## Safer and faster, out of the box

Security and speed both received their largest upgrade yet. Every installation now uses its own unique signing keys, stored content is sanitized against script injection, and passwords follow a central policy across the whole application. At the same time, the platform was tuned for very large catalogs: exports, mass actions, and product screens stay responsive even with millions of products, and heavy operations run in the background instead of making you wait.

::: tip For your integration team
The REST API grew substantially in 3.0: full management of catalog structure (attributes, families, locales, channels, currencies), media endpoints, passport publishing, and delta synchronization that fetches only what changed. Point your developers to the developer documentation for details.
:::

## Before you upgrade

::: warning UnoPim 3.0 is a major release
Existing API connections must authenticate again after the upgrade, and a few admin page addresses changed. Review the upgrade guide shipped with the release and test the upgrade on a copy of your installation before updating production.
:::

Enjoy UnoPim 3.0 — and if something in this guide does not answer your question, the community on GitHub is happy to help.
