# UnoPim User Guide

Source for the official UnoPim documentation, served at [https://docs.unopim.com](https://docs.unopim.com).

## Versions

- **v3.0** — Current. Digital Product Passports, configurable associations, product variants, measurements, filters & saved views, Microsoft SSO, multi-webhooks, dark mode, System Settings hub.
- **v2.1** — Previous stable release. AI Agent, Magic AI, Dashboard, Notifications, Webhooks, Swatch Attributes, Product Completeness, etc.
- **v2.0** — Older release.
- **v1.0** — Legacy.

## Project Structure

```
user-guide/
├── .vitepress/
│   ├── config.mts                # VitePress site config (single locale: English)
│   ├── sidebars/
│   │   ├── v1.0.ts               # Per-version sidebar definitions
│   │   ├── v2.0.ts
│   │   ├── v2.1.ts
│   │   └── v3.0.ts
│   └── theme/
│       ├── Layout.vue            # Wraps the default theme; adds nav extras
│       ├── custom.css            # Brand colours, dividers, dropdown styling
│       ├── index.ts              # Registers theme + custom components
│       └── components/
│           ├── GoogleTranslate.vue   # Globe icon → 7-language dropdown
│           ├── VersionSelect.vue     # v3.0 / v2.1 / v2.0 / v1.0 picker
│           ├── ImagePopup.vue        # Click-to-zoom image viewer
│           ├── FeatureCard.vue       # Home-page feature card
│           ├── FeatureGrid.vue       # Home-page feature grid
│           ├── Steps.vue             # Numbered steps block
│           └── VideoEmbed.vue        # Responsive video embed
│
├── src/
│   ├── index.md                  # Home page (hero + features)
│   ├── 1.0/                      # v1.0 documentation
│   │   ├── introduction/
│   │   ├── products/
│   │   ├── category/
│   │   ├── categoryField/
│   │   ├── attribute/
│   │   ├── magic/
│   │   ├── data-transfer/
│   │   ├── settings/
│   │   └── configuration/
│   ├── 2.0/                      # v2.0 documentation
│   │   └── ...                   # adds: dashboard, releases, notifications, ai-agent, magic-ai, agenticPim
│   ├── 2.1/                      # v2.1 documentation (same shape as v2.0)
│   ├── 3.0/                      # v3.0 documentation
│   │   └── ...                   # adds: associations, measurements, passport, variants, system settings
│   └── public/
│       ├── assets/{1.0,2.0,2.1,3.0}/ # Screenshots, grouped by version
│       ├── home-logo.png         # Hero illustration
│       ├── logo.svg              # Light-mode logo
│       ├── dark_logo.svg         # Dark-mode logo
│       └── favicon.ico
│
├── deploy.sh                     # Production deploy script
├── package.json
└── README.md                     # this file
```

## Translation

The user guide source is maintained in English. Runtime translation into other languages is provided by an embedded **Google Translate** widget — click the globe icon in the top nav. Currently exposed: English, Español, Français, Deutsch, Nederlands, 中文, 日本語.

> Note: Google Translate translates page text only. Screenshots stay in English. To localize a specific screenshot, drop a same-named PNG at `src/public/assets/<lang>/<version>/images/...` — wire-up of per-locale image swap is not currently enabled but the path is reserved.

## Contribution Guide

1. Fork the repository.
2. Clone your fork.
3. Run [`npm install`](#install-dependencies).
4. Make your changes on a feature branch.
5. Open a pull request.

**Conventions**
- Before writing new docs, check if the topic is already covered.
- Filenames use `kebab-case` (e.g. `attribute-family.md`).
- Images go in `src/public/assets/{version}/images/{section}/<file>.png`.
- Reference images in markdown via `<ImagePopup src="/assets/2.1/images/section/foo.png" alt="..." />`.
- Use VitePress containers for callouts: `::: tip`, `::: warning`, `::: info`, `::: danger`.

## Install Dependencies

```sh
npm install
```

## Development

```sh
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

## Build

```sh
npm run build
npm run preview     # serve the built site
```

## Tech Stack

- [VitePress](https://vitepress.dev/) v1.6.4
- [Vue.js](https://vuejs.org/) v3.5
- Node.js v18+
