# Dashboard

The **Dashboard** is the landing page you see immediately after logging in to [UnoPim](https://unopim.com/). It's designed as a single-screen command center: in under a second you should be able to tell *how big* your catalog is, *how healthy* it is, *what your team has been doing*, and *what needs attention next* — without clicking into any other page.

<ImagePopup src="/assets/2.0/images/dashboard/dashboard-overview.png" alt="Dashboard Overview" />

## What is the Dashboard for?

The Dashboard exists to answer four questions the moment you log in:

| Question | Where the answer lives |
|---|---|
| **How big is my catalog?** | Catalog Overview + Catalog Structure cards |
| **How healthy is my data?** | Needs Attention, Completeness, Channel Readiness |
| **What has the team been doing?** | Product Statistics, Product Activity chart, Recent Activity |
| **What do I do next?** | Welcome Banner quick actions, Needs Attention alerts, Data Transfer panel |

It's deliberately read-heavy — the Dashboard reports state, then points you at the right page to act. Every card and panel is either clickable (to jump to the relevant listing) or paired with a quick-action button.

## How the Dashboard works

The page is composed of independent **widgets**, each sourced from a different part of UnoPim:

```
┌───────────────────────────────────────────────────┐
│ Welcome Banner   (user greeting + quick actions)  │
├───────────────────────────────────────────────────┤
│ Catalog Overview   ← products + categories tables │
│ Catalog Structure  ← attributes, locales, channels│
├───────────────────────────────────────────────────┤
│ Needs Attention    ← completeness engine          │
├───────────────────────────────────────────────────┤
│ Analytics          ← product stats + 7-day chart  │
│ Completeness       ← per-channel completeness     │
│ Channel Readiness  ← per-channel ready counts     │
├───────────────────────────────────────────────────┤
│ Operations         ← activity log + Job Tracker   │
├───────────────────────────────────────────────────┤
│ AI Agent button (floating, bottom-right)          │
│ Theme toggle (top-right, next to bell)            │
└───────────────────────────────────────────────────┘
```

Counts and charts are computed on page load (no scheduled jobs), so the Dashboard always reflects the current state of the database.

## Widgets

### Welcome Banner

A personalised greeting — **"Welcome back, [Your Name]"** — pinned to the top of the page. It doubles as a launchpad for the three most common actions:

- **Create Product** — goes straight to the product creation page.
- **Import Data** — opens the import workflow.
- **Export Data** — opens the export workflow.

::: tip
Use these quick-action buttons instead of navigating through the sidebar — the Dashboard is optimised to get you to work in one click.
:::

### Catalog Overview

Two **clickable summary cards** showing the size of your catalog:

| Card | Shows | Clicking takes you to |
|---|---|---|
| **Total Products** | Count of products across all statuses and types. | Products listing page. |
| **Total Categories** | Count of categories across the whole tree. | Categories listing page. |

### Catalog Structure

A row of small cards giving a structural snapshot of how the catalog is set up. Useful for spotting configuration gaps — for example, a new channel without an assigned locale.

| Card | What it counts |
|---|---|
| **Total Attributes** | Product attributes defined in the system. |
| **Total Groups** | Attribute groups. |
| **Total Families** | Attribute families. |
| **Total Locales** | Locales configured across channels. |
| **Total Currencies** | Currencies set up for use in channels. |
| **Total Channels** | Sales channels configured. |

### Needs Attention

Surfaces items that need admin action **right now**. The most common alert is **unenriched products** — products missing the data required to be channel-ready. When the catalog is healthy, this section collapses and stays quiet.

::: warning
Unenriched products may not be ready for distribution to your sales channels. Review this section regularly to keep the catalog shippable.
:::

### Analytics

#### Product Statistics

A numerical breakdown of the catalog — the quickest way to judge health over time.

| Metric | Meaning |
|---|---|
| **Total Products** | Overall product count. |
| **Active / Inactive** | How many products are currently enabled vs. disabled. |
| **Product Type Distribution** | Percentage split between simple and configurable products. |
| **New This Week** | Products created in the current week. |
| **With Variants** | Products that have variant configurations. |
| **Avg Completeness** | Average completeness score across all products. |
| **Enriched** | Number of products flagged as fully enriched. |

#### Product Activity (Last 7 Days)

A two-line chart plotting **Created** vs. **Updated** products per day for the last seven days. Flat lines at zero are a cue that the catalog has gone quiet; spikes usually mean a bulk import or enrichment run just finished.

### Completeness

Shows how well your product data meets each **channel's** requirements, with **per-locale breakdowns visible side by side**. For every configured channel (e.g., *Default*, *Amazon*, *Flipkart*), the card displays:

- An **overall channel percentage** as a circular gauge.
- **Per-locale rows** — one row per locale assigned to that channel (e.g., German, English, French), each with its own gauge.
- A **short verdict** under the headline gauge:

| Message | Meaning |
|---|---|
| **Almost complete** | Nearly ready — only minor additions needed. |
| **Low completeness, add details to improve** | Significant product information is still missing. |

This layout makes it easy to spot the exact channel + locale combination that is blocking a product from being shippable.

::: tip
Work on the lowest-scoring channel-locale pair first. A product can be ready for *Default* but still blocked on *Amazon → French* if any required attribute is missing in that specific combination.
:::

### Channel Readiness

A horizontal **progress bar per channel** reading *"X of Y products ready"* with a percentage (e.g., *"2 of 3 products ready — 67%"*). Where the Completeness widget shows *average quality*, Channel Readiness shows *shippable count* — the number of products that clear that channel's required-field bar.

### Operations

#### Recent Activity

A chronological feed of changes across the system. Every entry captures:

| Field | Meaning |
|---|---|
| **Action type** | Created, updated, or deleted. |
| **Entity type** | Family, Attribute, Product, Category, Channel, etc. |
| **User name** | Who performed the action. |
| **Timestamp** | When it happened. |

This is the fastest way to answer *"did someone change X recently?"* without opening the history tab on each entity.

#### Data Transfer

Status panel for your most recent import and export jobs. Each job shows one of five states:

| Status | Meaning |
|---|---|
| **Completed** | The job finished successfully. |
| **Processing** | The job is currently running. |
| **Pending** | The job is queued and waiting to start. |
| **Failed** | The job encountered errors. |
| **Cancelled** | The job was manually cancelled. |

Click **"View All Jobs"** to open the full **Job Tracker** with per-step progress bars and pause/resume/cancel controls.

### AI Agent

A floating **"Open Agenting PIM"** button sits in the bottom-right corner of the Dashboard (and every other admin page). Clicking it opens the conversational AI Agent — type what you need in plain English and it calls the right PIM tool on your behalf.

::: tip
The AI Agent can create products, enrich content, run data-quality scans, and answer questions about your catalog without you navigating the sidebar. See **[AI Agent Chat](../ai-agent/ai-agent-chat.md)** for the full list of 30+ tools.
:::

### Dark / Light Theme

UnoPim supports a **Dark / Light Theme** toggle. Click the sun/moon icon in the top-right corner of the header bar (next to the notification bell) to switch between light and dark mode. Your preference persists across sessions, so every page — the Dashboard, product listing, editors, and the AI Agent Chat — keeps the theme you picked.

<ImagePopup src="/assets/2.0/images/settings/dark-theme.png" alt="Dark Theme" />

::: tip
The theme toggle is global. Whichever mode you choose applies everywhere in the admin, not just the Dashboard.
:::

## Typical Dashboard workflow

A common way admins use the Dashboard at the start of a shift:

1. **Check Needs Attention** — clear any urgent alerts (e.g., unenriched products).
2. **Scan Completeness and Channel Readiness** — pick the weakest channel/locale and plan a cleanup.
3. **Skim Recent Activity** — confirm overnight jobs finished and teammates' changes make sense.
4. **Open Data Transfer** — watch any running imports/exports, or click through to the Job Tracker for detail.
5. **Launch work** — use a Welcome Banner quick action or the AI Agent button to start the day's tasks.

Following this flow turns the Dashboard into a daily triage screen rather than just a landing page.
