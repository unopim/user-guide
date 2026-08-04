# PIM Concepts & Glossary

New to product information management? This page explains every core UnoPim concept in plain business language. Each entry links to the guide page where you can go deeper.

## Attribute

An attribute is a single piece of information about a product — its name, color, price, or description. You define attributes once and reuse them across the whole catalog, so "Color" always means the same thing everywhere. Learn more in [Attributes](../attribute/product-attribute.md).

## Attribute Family

A family is the complete template for one kind of product. A "Sofa" family lists different attributes than a "Smartphone" family, and every product must belong to exactly one family. The family decides which fields appear on a product's edit page and which count toward completeness. Learn more in [Attribute Families](../attribute/attribute-family.md).

## Attribute Group

An attribute group bundles related attributes — General, Pricing, SEO — into a labeled section. Groups keep long product forms organized so editors find fields quickly. Learn more in [Attribute Groups](../attribute/attribute-groups.md).

## Association / Association Type

An association is a link between two products, such as "related", "cross-sell", or "up-sell". Association types define which kinds of links exist, and in UnoPim 3.0 you can create your own — "spare parts", "accessories", anything your business needs. Learn more in [Associations](../associations/index.md) and [Association Types](../associations/association-types.md).

## Category

A category is a folder in the tree that organizes your catalog — Clothing → Men → Shirts. Products can sit in several categories at once, and each sales channel reads from a category tree. Learn more in [Categories](../category/categories.md).

## Category Field

A category field is extra information you attach to categories themselves — a banner image, a description, an SEO title. Just like product attributes, but for categories. Learn more in [Category Fields](../categoryField/category-fields.md).

## Channel

A channel is a destination for your product data: a webshop, a mobile app, a marketplace, a print catalog. Each channel combines locales, currencies, and a category tree, so you can tailor what each destination receives. Learn more in [Channels](../settings/channels.md).

## Completeness

Completeness is a score that shows how ready a product is for publication — the share of required attributes that are actually filled in, per channel and per locale. It turns "is this product done?" into a number your team can act on. Learn more in [Products](../products/index.md).

## Configurable Product / Variant

A configurable product is a parent that comes in several versions — a T-shirt in sizes and colors. Each concrete version (Red / M) is a variant with its own SKU. Shared data lives on the parent; only the differences live on the variants. Learn more in [Configurable Products](../products/configurable.md) and [Variants](../products/variants.md).

## Currency

A currency (EUR, USD, INR) gives meaning to price attributes. Enable the currencies you sell in, and every price field lets you enter a value per currency. Learn more in [Currencies](../settings/currencies.md).

## Digital Product Passport

A Digital Product Passport (DPP) is a public web page that proves what a product is made of, how it complies with regulations, and how to repair or recycle it — increasingly required by EU law. UnoPim builds these pages from your existing product data and publishes them with a QR code. Learn more in [Product Passports](../passport/index.md).

## Import / Export Job

An import or export job is a saved profile that moves data in or out of UnoPim — a CSV of products in, an Excel of enriched data out. Jobs run in the background, can be tracked live, and can be reused as often as you like. Learn more in [Import](../data-transfer/import.md) and [Export](../data-transfer/export.md).

## Integration (robot user)

An integration is a machine account — a "robot user" — that lets another system talk to the UnoPim API with its own credentials and permissions. Your ERP or webshop connects as an integration, never with a person's login. Learn more in [Integrations](../configuration/integration.md).

## Locale

A locale is a language-and-region combination such as `en_US` or `de_DE`. Product content is stored per locale, so one product can carry an English and a German description side by side. Learn more in [Locales](../settings/locale.md).

## Measurement Family / Unit

A measurement family groups units that convert into each other — Weight holds kg, g, and lb. Attach a family to a numeric attribute and editors can enter a value in any unit, with conversion handled for them. Learn more in [Measurements](../measurements/index.md).

## Product

A product is the central record in the PIM: one item you sell or manage, identified by its SKU and shaped by its family. Everything else — attributes, categories, channels, associations — exists to describe, organize, and distribute products. Learn more in [Products](../products/index.md).

## Saved View

A saved view remembers a product grid setup — filters, columns, sorting — under a name, so you can return to "Incomplete winter items" with one click and share it with colleagues. Learn more in [Filters & Saved Views](../products/filters-and-views.md).

## SKU

The SKU (Stock Keeping Unit) is a product's unique code — its identity across UnoPim, your ERP, and your shops. Every product has exactly one, and no two products share it. Learn more in [Simple Products](../products/simple.md).

## Variant Axis

A variant axis is the attribute a configurable product varies by — size, color, or both. The axes decide how many variants exist and guarantee no two variants share the same combination. Learn more in [Variants](../products/variants.md).

## Webhook

A webhook is an automatic notification UnoPim sends to another system when something changes — a product is updated, so your webshop hears about it within seconds. No polling, no manual exports. Learn more in [Webhooks](../configuration/webhooks.md).
