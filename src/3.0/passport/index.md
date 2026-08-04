# Digital Product Passport

A **Digital Product Passport (DPP)** is a public page for one of your products, reachable by scanning a QR code, that shows the data a regulator, recycler or customer is entitled to see. UnoPim builds it from the product data you already maintain — you do not re-enter anything.

## What UnoPim gives you

| | |
|---|---|
| **Passport Templates** | Decide *what* a passport contains: sections, fields, which attribute each field reads, who may see it, and what is mandatory. |
| **Public passport page** | A permanent address per product and language, plus a QR code and a machine-readable version for systems that consume it. |
| **Publish control** | A passport cannot go live in a language while a mandatory field is empty in that language. |
| **Version history** | Every publish is kept. You can see what a passport said on any date, and withdraw or restore it. |

## The three pieces

1. **A passport template** — the definition. Lives in **Catalog → Passports → Templates**.
2. **An attribute family** — the products the template applies to. A family belongs to exactly one template.
3. **Your attributes** — where the values actually live. A template field points at one of them.

::: tip
If your data is already in UnoPim, building a passport is mapping work, not data entry. If a value is missing, it is missing from your catalogue — the passport just makes that visible.
:::

## Before you start

Turn the feature on in [System Settings](../configuration/system-settings.md): go to **Configuration → System Settings**, open the **Digital Product Passport** section, and enable **Product Passport**. To serve the public pages, also enable **Publication** in the same section.

## Where to go next

- [Passport Templates](./templates.md) — build or adapt the definition.
- [Publishing a Passport](./publishing.md) — publish, preview, withdraw, and read the public page.
- [Ready-made Templates](./presets.md) — the EU battery and general ESPR templates that ship with UnoPim.
