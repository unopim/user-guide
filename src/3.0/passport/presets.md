# Ready-made Templates

UnoPim ships two passport templates so you start from a regulation's field list instead of a blank page. They are installed on demand, and once installed they are ordinary templates — rename them, drop fields, add your own.

| Preset | Covers | Fields |
|---|---|---|
| **EU Battery Passport** | EU Battery Regulation 2023/1542, Annex XIII — mandatory from **18 February 2027** for EV, LMT and industrial batteries above 2 kWh | 26, of which 13 required |
| **EU ESPR (general)** | The general ESPR field list — a sensible starting point for textiles, electronics and other categories awaiting their delegated act | 23, of which 5 required |

## Install a preset

Ask your developer or hosting team to run:

```bash
php artisan unopim:passport:install-preset
```

Or one at a time — the codes are `battery` and `espr_general`:

```bash
php artisan unopim:passport:install-preset --preset=battery
```

The command is safe to re-run: a template that already exists is left untouched, so your edits are never overwritten.

## What arrives, and what you still do

An installed preset is deliberately **inert**:

- it is bound to **no attribute family**, so no product publishes because you installed it;
- every field is **unsourced**, so nothing has been guessed about where your data lives.

Your job is the mapping:

1. Open **Catalog → Passports → Templates** and edit the preset.
2. Under **Applies To**, pick the families it covers.
3. For each field, choose the attribute that holds the value — or switch the field to a **fixed value** where the text is the same for every product.
4. Watch the readiness counter until every required field is sourced.
5. Publish from the product.

::: tip Nothing to map a field to?
Create the attribute the normal way (**Catalog → Attributes**), add it to the family, then point the field at it. Passport fields never store product data themselves — that stays in your attributes, where imports, history and translations already work.
:::

## The battery preset in detail

Sections follow Annex XIII rather than the general list:

| Section | Contains |
|---|---|
| **Battery Identity** | Unique battery identifier (GTIN role), manufacturer, category, date and place of manufacture, batch and model |
| **Performance and Durability** | Rated capacity, nominal voltage, weight, expected lifetime, cycle life, state of health *(operator)* |
| **Materials and Footprint** | Chemistry, hazardous substances, carbon footprint, recycled cobalt / lithium / nickel / lead shares |
| **Safety and Circularity** | Safety measures, collection and recycling, dismantling information *(operator)*, supply-chain due diligence *(operator)* |
| **Compliance Evidence** | EU declaration of conformity *(authority)*, test reports *(authority)* |

Fields marked *(operator)* or *(authority)* never appear on the consumer page — they are reachable only through the signed links on the product's passport card. That mirrors the regulation: a recycler needs the dismantling sequence, a shopper does not.

## Your own product group

Presets are configuration, so a developer can add a preset for your category — textiles, tyres, construction products — and it appears in the same install command. See the developer documentation for the shape of a preset definition.
