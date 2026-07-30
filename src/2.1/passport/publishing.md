# Publishing a Passport

Publishing turns the current product data into a **permanent, public passport version**. Versions are never overwritten: each publish adds one, so you can always show what a passport said on a given date.

## Check a product first

Open the product and look at the **Digital Product Passport** card. Per language it shows:

- the published version and when it went live,
- how many **required fields are still empty** for that language,
- **Preview**, and the signed **Operator** and **Authority** links once a version exists.

**Preview** renders the passport from the product's current data without publishing anything. Nothing public exists yet and no file is written.

## Publish

From the product's passport card, publish the languages you need. Publishing is queued, so the version appears once the queue processes it.

You can also publish in bulk from **Catalog → Products** (select products → *Publish Digital Product Passport*) or from **Catalog → Passports**.

### Why a language may refuse to publish

A language publishes only when every **required** field on its template resolves to a value **in that language**. The passport card names the fields that are missing, so a German passport can be live while Polish waits for two translations.

::: warning
This is deliberate. An incomplete passport in a market is a non-compliant passport in that market, and it is cheaper to catch here than at a border.
:::

## What the public sees

Each published passport has a permanent address per language, and:

| Surface | What it is |
|---|---|
| **Passport page** | The human-readable page: identification block, then your template's sections in order. |
| **QR code** | An SVG for print or packaging, encoding the passport address (or its GS1 Digital Link when a GTIN is set). |
| **Machine-readable data** | The same passport as structured data for systems that consume it, both embedded in the page and served on request. |
| **GS1 Digital Link** | When a field carries the **GTIN** role, scanning a standard GS1 barcode resolves to the passport. |

### Access tiers

Only **Consumer** fields appear on the public page. **Operator** and **Authority** fields are served solely through the signed links from the product's passport card, which expire. A tampered or hand-made link reveals nothing.

## Version history, withdrawal and erasure

From **Catalog → Passports**:

- **Version history** — every version per language, who published it and when, and **Re-publish** to make an older version current again (it is copied forward, never edited).
- **Withdraw** — takes the passport off the public web and shows a withdrawal notice instead. Reversible.
- **Redact** — erases the stored content of a version for a GDPR request, keeping the record that it existed.

## Settings that affect publishing

**Configuration → Digital Product Passport**:

| Setting | Effect |
|---|---|
| **Product Passport → Enabled** | Turns the whole feature, its menu and the product card on or off. |
| **Product Passport → Publish automatically on save** | Publishes on every product save. Off by default — publishing is a legal commitment, not a save side effect. |
| **Product Passport → Economic operator name / address / EU representative** | Shown on every passport; the ESPR requires the responsible operator to be identifiable. |
| **Publication → Enabled** | Serves the public pages for a channel. Off means passports exist but nothing is served. |
| **Publication → Base URL** | The host printed into QR codes and GS1 links. |
| **Publication → GS1 passport channel** | Which channel a scanned GS1 barcode resolves to when one product is published on several channels. |
