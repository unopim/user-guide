# Product Types

## Simple Product

A simple product is the most basic and common product type. It's a physical, unique, standalone product without any other variations. 

Simple products offer customizable options within a single SKU.

See **[Simple Product](./simple.md)** for the full guide.

## Configurable Product

It refers to a type of product that offers various options or variations, such as size, color, or features, which can be selected by the customer. 

In UnoPim 3.0, these options are defined by a **variant structure** on the attribute family — with up to **two variant levels** (e.g., style → colour → size). Shared information is enriched once on the parent and inherited by every variant automatically, so your team only maintains what actually differs.

See **[Configurable Product](./configurable.md)** for the step-by-step guide, and **[Product Variants](./variants.md)** for the variant model — levels, axes, variant groups, and inheritance.

## New in v3.0

- **[Product Variants](./variants.md)** — two-level variant structures with configurable axes per attribute family, inherited values, and variant groups. Enrich shared data once on the parent; child products inherit it automatically.
- **[Filters & Saved Views](./filters-and-views.md)** — filter the product grid by category, completeness, dates, properties, and attribute values with type-specific operators, then save filter + column combinations as reusable views. Mass actions can target all matching products across pages and run in the background for large selections.
