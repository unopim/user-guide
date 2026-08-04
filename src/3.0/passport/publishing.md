# Publishing a Passport

Publishing turns the current product data into a **permanent, public passport version**. Versions are never overwritten: each publish adds one, so you can always show what a passport said on a given date.

## Check a product first

Open the product and click the **Digital Product Passport** card — it opens as a panel over the page. Per language it shows:

- the published version and when it went live,
- how many **required fields are still empty** for that language,
- **Preview**, and once a version exists: **Download QR code** and the signed **Operator** and **Authority** links.

**Preview** renders the passport from the product's current data without publishing anything. Nothing public exists yet and no file is written.

## Publish

From the product's passport card, publish the languages you need. Publishing is queued, so the version appears once the queue processes it.

You can also publish in bulk from **Catalog → Products** (select products → *Publish Digital Product Passport*), or refresh already-published passports in bulk from **Catalog → Passports** (*Republish selected*).

### Why a language may refuse to publish

A language publishes only when every **required** field on its template resolves to a value **in that language**. The passport card names the fields that are missing, so a German passport can be live while Polish waits for two translations.

::: warning
This is deliberate. An incomplete passport in a market is a non-compliant passport in that market, and it is cheaper to catch here than at a border.
:::

## What the public sees

Each published passport has a permanent address per language, and:

| Surface | What it is |
|---|---|
| **Passport page** | The human-readable page: identification block, then your template's sections in order. It sets no cookies and runs no trackers. |
| **QR code** | An SVG for print or packaging, encoding the passport address (or its GS1 Digital Link when a GTIN is set). |
| **Machine-readable data** | The same passport as structured data for systems that consume it, both embedded in the page and served on request. |
| **GS1 Digital Link** | When a field carries the **GTIN** role, scanning a standard GS1 barcode resolves to the passport. UnoPim also checks the GTIN when the product is saved — a value with the wrong length or check digit is rejected, so a bad barcode never reaches print. |

### Access tiers

Only **Consumer** fields appear on the public page. **Operator** and **Authority** fields are served solely through the signed links from the product's passport card, which expire. A tampered or hand-made link reveals nothing.

## Version history, withdrawal and erasure

From **Catalog → Passports**:

- **Version history** — every version per language, who published it and when, and **Re-publish** to make an older version current again (it is copied forward, never edited).
- **Withdraw** — takes the passport off the public web and shows a withdrawal notice instead. **Reinstate** puts it back; both are also available as bulk actions on the grid.
- **Views** — the grid counts how often each passport has been opened by the public.
- **Redact** — erases the stored content of a version for a GDPR request, keeping the record that it existed. Redaction is one-way and is done through the REST API — ask your technical team.

## Settings that affect publishing

In [System Settings](../configuration/system-settings.md) (**Configuration → System Settings**), the **Digital Product Passport** section has two rows:

| Setting | Effect |
|---|---|
| **Product Passport → Enabled** | Turns the whole feature, its menu and the product card on or off. |
| **Product Passport → Publish automatically on save** | Publishes a version whenever a saved product is complete enough. Off by default — publishing is a legal commitment, not a save side effect. |
| **Product Passport → Economic Operator Name / Address / EU Authorised Representative** | Shown on every passport; the ESPR requires the responsible operator to be identifiable. |
| **Publication → Enabled** | Serves the public pages. Off means passports exist but every public address returns "not found". |
| **Publication → Base URL** | The public address passports are served from, printed into QR codes and shareable links. Blank means your site's own domain. |
| **Publication → Allow search engine indexing** | Off by default — passports are reachable by link and QR code but stay out of search results until you turn this on. |
| **Publication → Cache TTL / Rate Limit** | How long a shared cache may reuse a page, and how many requests a visitor may make per minute. |
| **Publication → GS1 Digital Link passport channel** | Which channel a scanned GS1 barcode resolves to when one product is published on several channels. |
