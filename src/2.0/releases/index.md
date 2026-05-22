<script setup>
import { ref, computed } from 'vue'

const selectedVersions = ref(['v2.0.x', 'v2.0.0', 'v2.0.0-beta.1', 'v1.0.0', 'v0.3.0', 'v0.2.0'])
const selectedDomains = ref(['ai', 'productivity', 'data-quality', 'connectivity', 'automation', 'scalability', 'reporting', 'governance'])

const versions = [
  { id: 'v2.0.x', label: 'v2.0.x' },
  { id: 'v2.0.0', label: 'v2.0.0' },
  { id: 'v2.0.0-beta.1', label: 'v2.0.0-beta.1' },
  { id: 'v1.0.0', label: 'v1.0.0' },
  { id: 'v0.3.0', label: 'v0.3.0' },
  { id: 'v0.2.0', label: 'v0.2.0' },
  { id: 'v0.1.x', label: 'v0.1.x' },
]

const domains = [
  { id: 'ai', label: 'AI & Agents', color: '#7c3aed' },
  { id: 'productivity', label: 'Productivity', color: '#2563eb' },
  { id: 'data-quality', label: 'Data Quality', color: '#059669' },
  { id: 'connectivity', label: 'Connectivity', color: '#dc2626' },
  { id: 'automation', label: 'Automation', color: '#d97706' },
  { id: 'scalability', label: 'Scalability', color: '#be185d' },
  { id: 'reporting', label: 'Reporting', color: '#6366f1' },
  { id: 'governance', label: 'Governance', color: '#0d9488' },
]

const features = [
  // v2.0.x
  { title: 'Manage Associations Tool', desc: 'New AI Agent tool that adds, removes, or lists related/up-sell/cross-sell products via natural language — no need to open each product manually.', version: 'v2.0.x', domains: ['ai', 'productivity'] },
  { title: '--with-demo-data Installer Option', desc: 'New installer flag that seeds sample products, categories, and attributes at install time so you can evaluate UnoPim with realistic data immediately.', version: 'v2.0.x', domains: ['productivity', 'governance'] },
  { title: 'Admin Login Rate Limiting', desc: 'Named rate limiters with per-email + per-IP segmentation protect the admin login from brute-force attacks.', version: 'v2.0.x', domains: ['governance', 'scalability'] },
  { title: 'Server-Side Password Validation', desc: 'Minimum password length enforced server-side, closing a gap where clients could bypass password rules.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'User-Enumeration Hardening', desc: 'Forgot-password endpoint now returns a generic message regardless of whether the email exists, preventing account enumeration.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Open-Redirect Protection', desc: 'Referer-based redirects now validate the host via parse_url() to block open-redirect abuse.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'User-Edit Privilege Escalation Fix', desc: 'Added missing ACL entries and controller-level guards on the user edit endpoint to prevent privilege escalation.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'No-Cache Middleware for Admin Pages', desc: 'Admin responses include cache-control headers that prevent browsers from caching sensitive pages after sign-out.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Enhanced Secure Headers', desc: 'Permissions-Policy and X-Permitted-Cross-Domain-Policies headers are now sent on all admin responses for stronger browser-level protections.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'XSS Sanitization Helper', desc: 'clean_content() helper backed by HTMLPurifier standardizes safe HTML rendering across the admin UI.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'IP-Based Debug Filtering', desc: 'APP_DEBUG_ALLOWED_IPS env variable restricts debug output to specific IPs so production debugging is safer.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Vite 6.3 Upgrade', desc: 'Frontend build upgraded from Vite 4.0 to 6.3 with manual chunk splitting and CSS code splitting for faster admin loads.', version: 'v2.0.x', domains: ['productivity', 'scalability'] },
  { title: 'Dark-Mode Polish in Job Tracker', desc: 'Progress bars and configuration buttons now render correctly in dark mode inside the import/export job tracker.', version: 'v2.0.x', domains: ['productivity'] },
  { title: 'PostgreSQL CI Workflow', desc: 'Dedicated Pest test run against PostgreSQL on every change keeps cross-database compatibility stable.', version: 'v2.0.x', domains: ['scalability', 'governance'] },

  // v2.0.0
  { title: 'AI-Powered Translation Command', desc: 'Bulk translate missing locale keys across 32 non-English locales using MagicAI. Auto-translated approximately 18,000 previously untranslated keys across 7 packages.', version: 'v2.0.0', domains: ['ai', 'automation', 'productivity'] },
  { title: 'Enhanced German Translations', desc: 'Corrected column terminology and improved de_DE locale quality.', version: 'v2.0.0', domains: ['productivity'] },
  { title: 'Elasticsearch Auto-Reindex After Seeding', desc: 'Products are immediately searchable after database seeding without manual reindexing.', version: 'v2.0.0', domains: ['scalability'] },
  { title: 'Cross-Database JSON Grammar', desc: 'Supporting PostgreSQL compatibility with improved JSON query handling.', version: 'v2.0.0', domains: ['connectivity', 'scalability'] },

  // v2.0.0-beta.1
  { title: 'AI Agent Chat Interface', desc: '30+ built-in PIM tools accessible via natural language. Create products, search, bulk edit, generate content, manage categories — all through conversation.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Multi-Platform MagicAI', desc: 'Support for 10+ AI providers (OpenAI, Anthropic, Gemini, Ollama, Groq, and more) with encrypted credential storage and per-feature platform selection.', version: 'v2.0.0-beta.1', domains: ['ai', 'connectivity'] },
  { title: 'AI-Powered Semantic Search', desc: 'EmbeddingSimilarityService and SemanticRankingService deliver intelligent search results based on meaning, not just keywords.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Auto-Translation on Product Create/Update', desc: 'Automatically translate product data to all configured locales when products are created or updated.', version: 'v2.0.0-beta.1', domains: ['ai', 'automation'] },
  { title: 'Approval Queue for AI Changes', desc: 'Configurable modes for AI changes — auto-approve or manual review before applying.', version: 'v2.0.0-beta.1', domains: ['ai', 'governance'] },
  { title: 'Agent Memory System', desc: 'RememberFact and RecallMemory tools allow the AI to store and retrieve context across interactions.', version: 'v2.0.0-beta.1', domains: ['ai'] },
  { title: 'Catalog Quality Monitor', desc: 'Scheduled command that monitors and reports on catalog data quality.', version: 'v2.0.0-beta.1', domains: ['data-quality', 'automation'] },
  { title: 'Auto-Enrichment', desc: 'Automatically fill in missing product descriptions and SEO fields using AI.', version: 'v2.0.0-beta.1', domains: ['ai', 'data-quality', 'automation'] },
  { title: 'Content Feedback Loop', desc: 'Capture user preferences on AI-generated content to refine future outputs.', version: 'v2.0.0-beta.1', domains: ['ai', 'data-quality'] },
  { title: 'Data Quality Report Tool', desc: 'Scan your catalog for missing data and receive structured quality reports.', version: 'v2.0.0-beta.1', domains: ['data-quality', 'reporting'] },
  { title: 'Product Verification Tool', desc: 'Verify individual products against quality criteria with completeness scoring.', version: 'v2.0.0-beta.1', domains: ['data-quality'] },
  { title: 'Task Planning Tool', desc: 'Plan and execute complex multi-step PIM operations through the AI Agent.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'SSE Streaming for AI Agent Chat', desc: 'Real-time streaming responses in the chat interface using Server-Sent Events.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Token Budget Tracking', desc: 'Daily usage limits and monitoring for AI token consumption.', version: 'v2.0.0-beta.1', domains: ['ai', 'reporting', 'governance'] },
  { title: 'Conversation Persistence', desc: 'Database-backed chat sessions that persist across browser refreshes and logins.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'AI Agent Analytics Dashboard', desc: 'Monitor AI usage, costs, and performance from a centralized dashboard.', version: 'v2.0.0-beta.1', domains: ['ai', 'reporting'] },
  { title: 'Swatch Types for Attributes', desc: 'Color, Image, and Text swatch types for Select and Multiselect attributes — visual option display.', version: 'v2.0.0-beta.1', domains: ['productivity', 'data-quality'] },
  { title: 'Enhanced Dashboard', desc: 'Product Statistics, Activity Charts, Completeness Scores, Channel Readiness, Recent Activity, and Data Transfer widgets.', version: 'v2.0.0-beta.1', domains: ['reporting', 'productivity'] },
  { title: 'Import/Export Tracker UI', desc: 'Real-time visualization of import and export jobs with progress bars, status indicators, and step pipeline labels.', version: 'v2.0.0-beta.1', domains: ['productivity', 'reporting'] },
  { title: 'Drag-and-Drop File Upload', desc: 'Drag files directly onto the import upload area instead of using the file browser.', version: 'v2.0.0-beta.1', domains: ['productivity'] },
  { title: 'Pause, Resume, and Cancel Controls', desc: 'Job control capabilities for import and export jobs — pause during peak hours, resume later.', version: 'v2.0.0-beta.1', domains: ['productivity', 'scalability'] },
  { title: 'Configurable Product Support in AI Agent', desc: 'Create and manage configurable products with super_attributes and variants through the AI Agent.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Laravel 12 Framework Upgrade', desc: 'Upgraded from Laravel 10 to Laravel 12 with PHP 8.3 minimum. Modernized bootstrap, Pest 3.0 tests, Sanctum 4.0.', version: 'v2.0.0-beta.1', domains: ['scalability'] },
  { title: 'ACL Authorization on All AI Agent Tools', desc: 'Role-based access control enforced on all 30+ AI Agent tools and 15 previously unprotected API routes.', version: 'v2.0.0-beta.1', domains: ['governance'] },
  { title: 'Rate Limiting on AI Endpoints', desc: 'Throttle:30,1 rate limiting on AI Agent endpoints to prevent abuse.', version: 'v2.0.0-beta.1', domains: ['governance', 'scalability'] },
  { title: 'Optimized Export Pipeline', desc: 'Eager loading and increased batch size (up to 200) for better export performance. Category exports avoid memory overload.', version: 'v2.0.0-beta.1', domains: ['scalability'] },

  // v1.0.0
  { title: 'PostgreSQL Support', desc: 'Full cross-database compatibility — use PostgreSQL alongside MySQL.', version: 'v1.0.0', domains: ['connectivity', 'scalability'] },
  { title: 'System Prompt Management', desc: 'Configure AI behavior and personality with preset and custom system prompts.', version: 'v1.0.0', domains: ['ai', 'governance'] },
  { title: 'Custom Prompts for Magic AI', desc: 'Define specific prompt templates for AI content generation with dynamic placeholders.', version: 'v1.0.0', domains: ['ai', 'productivity'] },
  { title: 'Product Values Translation', desc: 'Translate product attribute values across all configured locales.', version: 'v1.0.0', domains: ['productivity', 'automation'] },
  { title: 'Product Completeness', desc: 'Quality scoring that tracks required product information per channel and locale.', version: 'v1.0.0', domains: ['data-quality', 'reporting'] },
  { title: 'Product Bulk Edit', desc: 'Edit multiple products at once — bulk update shared attributes from the datagrid.', version: 'v1.0.0', domains: ['productivity'] },
  { title: 'Product Update Webhook', desc: 'Automated HTTP callbacks when product data is modified, with Logs and History tabs.', version: 'v1.0.0', domains: ['connectivity', 'automation'] },
  { title: 'Video Support in Gallery', desc: 'Upload and manage video files in the gallery attribute alongside images.', version: 'v1.0.0', domains: ['productivity'] },

  // v0.3.0
  { title: 'Dynamic Product Datagrid Columns', desc: 'Customize which columns are visible in the product listing with a drag-and-drop column manager.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Dynamic Product Datagrid Filters', desc: 'Advanced filtering by any visible column — text search, dropdowns, date ranges.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Quick Product Export Jobs', desc: 'Dynamically manage quick export jobs directly from the product listing.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Improved Magic AI Functionality', desc: 'Enhanced AI content generation with better prompts and model support.', version: 'v0.3.0', domains: ['ai'] },
  { title: 'Enhanced Elasticsearch Filters', desc: 'Improved product search indexing and filter handling for large catalogs.', version: 'v0.3.0', domains: ['scalability'] },
  { title: 'Playwright End-to-End Tests', desc: 'Comprehensive E2E test suite for automated UI testing.', version: 'v0.3.0', domains: ['governance'] },

  // v0.2.0
  { title: 'In-App & Email Notifications', desc: 'Real-time notification system for import/export jobs, product changes, and system events.', version: 'v0.2.0', domains: ['productivity', 'reporting'] },
  { title: 'GUI Installer', desc: 'Web-based installation wizard for easier UnoPim setup.', version: 'v0.2.0', domains: ['productivity'] },
  { title: 'Magic Image Generation', desc: 'Generate product images from text descriptions using DALL-E.', version: 'v0.2.0', domains: ['ai', 'productivity'] },
  { title: 'API PATCH & DELETE Endpoints', desc: 'New API endpoints for patching and deleting products and categories.', version: 'v0.2.0', domains: ['connectivity'] },
  { title: 'Dynamic Import Job Filters', desc: 'Configure advanced filtering conditions for import data.', version: 'v0.2.0', domains: ['productivity'] },

  // v0.1.x
  { title: 'Core PIM System', desc: 'Centralized product management with Simple and Configurable product types, categories, attributes, and families.', version: 'v0.1.x', domains: ['productivity', 'governance'] },
  { title: 'Import/Export Pipeline', desc: 'Bulk import and export of product and category data in CSV, XLS, XLSX formats.', version: 'v0.1.x', domains: ['connectivity', 'productivity'] },
  { title: 'REST API with OAuth 2.0', desc: 'Full RESTful API with Passport OAuth 2.0 authentication for third-party integrations.', version: 'v0.1.x', domains: ['connectivity'] },
  { title: 'Multi-Channel & Multi-Locale', desc: 'Manage product data across multiple channels, locales, and currencies.', version: 'v0.1.x', domains: ['scalability', 'productivity'] },
  { title: 'User & Role Management', desc: 'Admin users with role-based access control and custom permissions.', version: 'v0.1.x', domains: ['governance'] },
  { title: 'Dark / Light Theme', desc: 'Switch between dark and light mode with a single click. Preference persists across sessions.', version: 'v0.1.x', domains: ['productivity'] },
]

function toggleVersion(id) {
  const idx = selectedVersions.value.indexOf(id)
  if (idx > -1) selectedVersions.value.splice(idx, 1)
  else selectedVersions.value.push(id)
}

function toggleDomain(id) {
  const idx = selectedDomains.value.indexOf(id)
  if (idx > -1) selectedDomains.value.splice(idx, 1)
  else selectedDomains.value.push(id)
}

const filteredFeatures = computed(() => {
  return features.filter(f =>
    selectedVersions.value.includes(f.version) &&
    f.domains.some(d => selectedDomains.value.includes(d))
  )
})

function getDomainColor(id) {
  return domains.find(d => d.id === id)?.color || '#666'
}

function getDomainLabel(id) {
  return domains.find(d => d.id === id)?.label || id
}
</script>

# What's New

Discover all the key features released across UnoPim versions. Use the filters below to explore features by version and domain area.

<div class="releases-page">

<div class="filter-section">
  <div class="filter-group">
    <h4>VERSIONS</h4>
    <div class="filter-chips">
      <button
        v-for="v in versions"
        :key="v.id"
        :class="['chip', { active: selectedVersions.includes(v.id) }]"
        @click="toggleVersion(v.id)"
      >
        <span v-if="selectedVersions.includes(v.id)" class="check">✓</span>
        {{ v.label }}
      </button>
    </div>
  </div>

  <div class="filter-group">
    <h4>DOMAIN AREAS</h4>
    <div class="filter-chips">
      <button
        v-for="d in domains"
        :key="d.id"
        :class="['chip', 'domain-chip', { active: selectedDomains.includes(d.id) }]"
        :style="selectedDomains.includes(d.id) ? { borderColor: d.color, backgroundColor: d.color + '15' } : {}"
        @click="toggleDomain(d.id)"
      >
        <span v-if="selectedDomains.includes(d.id)" class="check" :style="{ color: d.color }">✓</span>
        {{ d.label }}
      </button>
    </div>
  </div>
</div>

<p class="results-count">
  Here are the <strong>{{ filteredFeatures.length }}</strong> key features delivered in the PIM for the versions and areas you selected.
</p>

<div class="features-grid">
  <div v-for="f in filteredFeatures" :key="f.title" class="feature-card">
    <h3>{{ f.title }}</h3>
    <p class="feature-desc">{{ f.desc }}</p>
    <p class="feature-version">Available since <strong>{{ f.version }}</strong></p>
    <div class="domain-tags">
      <span
        v-for="d in f.domains"
        :key="d"
        class="domain-tag"
        :style="{ borderColor: getDomainColor(d), color: getDomainColor(d) }"
      >
        {{ getDomainLabel(d) }}
      </span>
    </div>
  </div>
</div>

</div>

<style scoped>
.releases-page {
  margin-top: 1rem;
}

.filter-section {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.filter-group {
  margin-bottom: 1rem;
}

.filter-group:last-child {
  margin-bottom: 0;
}

.filter-group h4 {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.35rem 0.75rem;
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.chip:hover {
  border-color: var(--vp-c-brand-1);
}

.chip.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.chip .check {
  font-size: 0.75rem;
  font-weight: 700;
}

.results-count {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.feature-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1.25rem;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.feature-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.feature-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
}

.feature-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.feature-version {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.75rem;
}

.domain-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.domain-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border: 1.5px solid;
  border-radius: 4px;
  background: transparent;
}
</style>
