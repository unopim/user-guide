# Introduction

[UnoPim](https://unopim.com/) is an open-source Product Information Management (PIM) system built on the **Laravel 12** framework and requires **PHP 8.3**. It helps businesses organize, manage, and enrich their product information in one central repository.

::: tip Current Version — v2.1.0
This guide covers UnoPim **v2.1.0**, released 13 May 2026. v2.1.0 brings a production-ready Docker stack, one-click Demo Data seeding, the `ManageAssociations` AI Agent tool, MagicAI Custom Providers, async product webhooks, clickable dashboard stats, and a dedicated security hardening pass. See **[What's New](../releases/)** for the full list.
:::

## Features

**1) Centralized Product Management-**
Manage all your product data in one place with support for Simple and Configurable product types.

**2) Data Enrichment-**
Enhance your product information with detailed attributes, including support for 12 data types and swatch types for visual attribute options.

**3) Category Management-**
Organize products into categories for easier navigation, with customizable category fields.

**4) User Management-**
Control user access and permissions with role-based access control.

**5) API Integration-**
Seamlessly integrate with other systems via RESTful APIs with OAuth 2.0 authentication.

**6) Localization-**
Support for multiple languages and locales with automatic AI-powered translation.

**7) Import/Export Functionality-**
Easily import and export product data using CSV, XLS, and XLSX formats, with drag-and-drop file upload, real-time job tracking, and pause/resume/cancel controls.

**8) Magic AI for Product Content Generation-**
Automatically generate engaging product content using advanced LLM technology with support for 10+ AI providers including OpenAI, Gemini, Anthropic, Ollama, and Groq.

**9) Multi-Channel Support-**
Manage and distribute your product data across multiple sales channels from a single platform.

**10) AI Agent Chat-**
Interact with your PIM using natural language through the AI Agent Chat interface with 30+ built-in PIM tools for product management, data quality, and bulk operations.

**11) Product Completeness-**
Monitor data quality with product completeness scoring that tracks how much required information has been filled in per channel and locale.

**12) Notifications-**
Stay informed with in-app and email notifications for import/export jobs, product changes, and system events.

**13) Webhooks-**
Automate workflows with product update webhooks that trigger HTTP callbacks when product data changes.

**14) Enhanced Dashboard-**
Get a comprehensive overview of your catalog with widgets for product statistics, activity charts, completeness scores, channel readiness, and recent operations.

**15) Product Bulk Edit-**
Edit multiple products at once by selecting them from the datagrid and applying bulk changes to shared attributes.

**16) PostgreSQL Support-**
Full support for PostgreSQL databases in addition to MySQL for improved cross-database compatibility.

**17) Production-Ready Docker Setup**  -
Spin up the full stack with one command using the official Docker Hub images. Multi-container setup with Nginx + PHP-FPM (Apache fallback available), Redis, Elasticsearch, and Mailpit — all with healthchecks, OPcache-tuned `php.ini`, and an auto-publish workflow.

**18) Demo Data Seeding**  -
Evaluate UnoPim immediately with realistic sample data. Toggle demo data from the installer wizard, pass `--with-demo-data` to `php artisan unopim:install`, or run the standalone `php artisan unopim:install:demo-data` command at any time after install.

**19) MagicAI Custom Providers**  -
Plug in any OpenAI-compatible service — self-hosted gateways, proxies, or alternative endpoints — by selecting the *Custom* provider on the Magic AI Platforms page and supplying your own base URL.

**20) Async Product Webhooks**  -
Product create/update webhooks are dispatched in the background as a queued `SendProductWebhook` job, so admin actions return immediately even when the receiving endpoint is slow.

**21) Clickable Dashboard Stats**  -
Product-stats tiles on the Dashboard (Active, Inactive, Enriched, With Variants, …) now act as filter chips — click one to deep-link into the product grid pre-filtered to that set.

**22) Security Hardening**  -
Admin login rate limiting, server-side password validation, forgot-password user-enumeration protection, open-redirect blocking, user-edit privilege-escalation guard, `clean_content()` XSS sanitization helper, and `APP_DEBUG_ALLOWED_IPS` IP-restricted debugbar.
