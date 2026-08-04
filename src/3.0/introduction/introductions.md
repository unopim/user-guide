# Introduction

[UnoPim](https://unopim.com/) is an open-source Product Information Management (PIM) system built on the **Laravel 13** framework and requires **PHP 8.4**. It runs on MySQL 8.0.32+ or PostgreSQL 16, with optional Elasticsearch 8.19 for faster search. It helps businesses organize, manage, and enrich their product information in one central repository.

## Features

**1) Centralized Product Management-**
Manage all your product data in one place with support for Simple and Configurable product types.

**2) Data Enrichment-**
Enhance your product information with detailed attributes, including support for 12 data types and swatch types for visual attribute options.

**3) Category Management-**
Organize products into categories for easier navigation, with customizable category fields.

**4) Digital Product Passports-**
Create and publish Digital Product Passports that share regulation-ready product information on public, QR-code-friendly pages. Templates, version history, and ESPR and EU Battery Regulation presets help you meet compliance requirements. See **[Product Passports](../passport/index.md)**.

**5) Configurable Product Associations-**
Define your own association types with custom labels and link fields, instead of being limited to fixed relations. Link products the way your business works — bundles, spare parts, accessories, and more. See **[Associations](../associations/index.md)**.

**6) Product Variants with Inheritance-**
Build variant structures with configurable axes where variants automatically inherit shared values from their parent. Enrich common data once and let every variant stay in sync. See **[Product Variants](../products/variants.md)**.

**7) Measurements-**
Manage measurement families, units, and automatic conversions so product dimensions and weights stay consistent across your catalog. See **[Measurements](../measurements/index.md)**.

**8) Filters & Saved Views-**
Filter the product grid by categories, completeness, dates, properties, and attribute values, then save your favorite column and filter combinations as reusable views. See **[Filters & Saved Views](../products/filters-and-views.md)**.

**9) Modernized Admin Experience-**
Work in a refreshed admin panel with a dark theme, no-reload page navigation, and a global Save bar that tracks unsaved changes. See **[Admin Essentials](./admin-essentials.md)**.

**10) User Management-**
Control user access and permissions with role-based access control.

**11) Microsoft SSO-**
Let your team sign in to the admin panel with their Microsoft work accounts for simpler, more secure access. See **[Microsoft SSO](../configuration/microsoft-sso.md)**.

**12) API Integration-**
Seamlessly integrate with other systems via RESTful APIs with OAuth 2.0 authentication.

**13) Localization-**
Support for multiple languages and locales with automatic AI-powered translation.

**14) Import/Export Functionality-**
Easily import and export product data using CSV, XLS, and XLSX formats, with drag-and-drop file upload, real-time job tracking, and pause/resume/cancel controls.

**15) Magic AI for Product Content Generation-**
Automatically generate engaging product content using advanced LLM technology with support for 10+ AI providers including OpenAI, Gemini, Anthropic, Ollama, and Groq.

**16) Multi-Channel Support-**
Manage and distribute your product data across multiple sales channels from a single platform.

**17) AI Agent Chat-**
Interact with your PIM using natural language through the AI Agent Chat interface with 30+ built-in PIM tools for product management, data quality, and bulk operations.

**18) Product Completeness-**
Monitor data quality with product completeness scoring that tracks how much required information has been filled in per channel and locale.

**19) Notifications-**
Stay informed with in-app and email notifications for import/export jobs, product changes, and system events.

**20) Multiple Webhooks-**
Set up as many webhooks as you need, each with its own URL and event subscriptions, secure signed delivery, and per-webhook delivery logs. See **[Webhooks](../configuration/webhooks.md)**.

**21) System Settings Hub-**
Manage appearance, email, sign-in options, measurements, publications, and Product Passport configuration from one searchable settings area. See **[System Settings](../configuration/system-settings.md)**.

**22) Enhanced Dashboard-**
Get a comprehensive overview of your catalog with widgets for product statistics, activity charts, completeness scores, channel readiness, and recent operations.

**23) Product Bulk Edit-**
Edit multiple products at once by selecting them from the datagrid and applying bulk changes to shared attributes.

**24) PostgreSQL Support-**
Full support for PostgreSQL databases in addition to MySQL for improved cross-database compatibility.

**25) Production-Ready Docker Setup-**
Spin up the full stack with one command using the official Docker Hub images. Multi-container setup with Nginx + PHP-FPM (Apache fallback available), Redis, Elasticsearch, and Mailpit.

## Agentic PIM Pipeline
Every AI-powered action in UnoPim — from chat messages to background enrichment — follows a structured 5-step loop to ensure safety, precision, and transparency:

<ImagePopup src="/assets/3.0/images/ai-agent/agentic-pim-pipeline.png" alt="Agentic PIM Pipeline — 5-Step Workflow" />
