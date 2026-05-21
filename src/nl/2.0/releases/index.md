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
  { id: 'productivity', label: 'Productiviteit', color: '#2563eb' },
  { id: 'data-quality', label: 'Datakwaliteit', color: '#059669' },
  { id: 'connectivity', label: 'Connectiviteit', color: '#dc2626' },
  { id: 'automation', label: 'Automatisering', color: '#d97706' },
  { id: 'scalability', label: 'Schaalbaarheid', color: '#be185d' },
  { id: 'reporting', label: 'Rapportage', color: '#6366f1' },
  { id: 'governance', label: 'Governance', color: '#0d9488' },
]

const features = [
  // v2.0.x
  { title: 'Manage Associations Tool', desc: 'Nieuwe AI Agent-tool die gerelateerde/up-sell/cross-sell-producten toevoegt, verwijdert of toont via natuurlijke taal — niet langer nodig om elk product handmatig te openen.', version: 'v2.0.x', domains: ['ai', 'productivity'] },
  { title: '--with-demo-data Installer-optie', desc: 'Nieuwe installer-vlag die voorbeeldproducten, categorieën en attributen seedt tijdens de installatie zodat u UnoPim direct kunt evalueren met realistische data.', version: 'v2.0.x', domains: ['productivity', 'governance'] },
  { title: 'Admin Login Rate Limiting', desc: 'Genaamde rate limiters met per-e-mail + per-IP-segmentatie beschermen de admin-login tegen brute-force-aanvallen.', version: 'v2.0.x', domains: ['governance', 'scalability'] },
  { title: 'Server-Side Wachtwoordvalidatie', desc: 'Minimum wachtwoordlengte server-side afgedwongen, sluit een gat waar clients wachtwoordregels konden omzeilen.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'User-Enumeration Hardening', desc: 'Forgot-password-endpoint retourneert nu een generiek bericht ongeacht of de e-mail bestaat, ter voorkoming van account-enumeratie.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Open-Redirect-bescherming', desc: 'Referer-gebaseerde redirects valideren nu de host via parse_url() om open-redirect-misbruik te blokkeren.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'User-Edit Privilege Escalation Fix', desc: 'Ontbrekende ACL-entries en controller-niveau-guards toegevoegd op het user-edit-endpoint om privilege-escalatie te voorkomen.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'No-Cache Middleware voor Admin-pagina\'s', desc: 'Admin-responsen bevatten cache-control-headers die voorkomen dat browsers gevoelige pagina\'s cachen na uitloggen.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Verbeterde Secure Headers', desc: 'Permissions-Policy- en X-Permitted-Cross-Domain-Policies-headers worden nu op alle admin-responsen verzonden voor sterkere bescherming op browserniveau.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'XSS-saneringshelper', desc: 'clean_content()-helper, ondersteund door HTMLPurifier, standaardiseert veilige HTML-rendering in de admin-UI.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'IP-gebaseerde Debug-filtering', desc: 'APP_DEBUG_ALLOWED_IPS env-variabele beperkt debug-output tot specifieke IPs zodat productie-debugging veiliger is.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Vite 6.3 Upgrade', desc: 'Frontend-build geüpgraded van Vite 4.0 naar 6.3 met handmatige chunk-splitting en CSS-codesplitting voor snellere admin-laadtijden.', version: 'v2.0.x', domains: ['productivity', 'scalability'] },
  { title: 'Dark-Mode-polijst in Taakvolger', desc: 'Voortgangsbalken en configuratieknoppen renderen nu correct in dark mode in de import-/exportjob-tracker.', version: 'v2.0.x', domains: ['productivity'] },
  { title: 'PostgreSQL CI-workflow', desc: 'Dedicated Pest-testrun tegen PostgreSQL bij elke wijziging houdt cross-database-compatibiliteit stabiel.', version: 'v2.0.x', domains: ['scalability', 'governance'] },

  // v2.0.0
  { title: 'AI-gestuurd vertaalcommando', desc: 'Bulk-vertaal ontbrekende locale-sleutels in 32 niet-Engelse locales met MagicAI. Vertaalde automatisch ongeveer 18.000 eerder onvertaalde sleutels in 7 pakketten.', version: 'v2.0.0', domains: ['ai', 'automation', 'productivity'] },
  { title: 'Verbeterde Duitse vertalingen', desc: 'Gecorrigeerde kolomterminologie en verbeterde de_DE-localekwaliteit.', version: 'v2.0.0', domains: ['productivity'] },
  { title: 'Elasticsearch Auto-Reindex na Seeding', desc: 'Producten zijn direct doorzoekbaar na database-seeding zonder handmatig opnieuw te indexeren.', version: 'v2.0.0', domains: ['scalability'] },
  { title: 'Cross-Database JSON-grammar', desc: 'Ondersteunt PostgreSQL-compatibiliteit met verbeterde JSON-queryverwerking.', version: 'v2.0.0', domains: ['connectivity', 'scalability'] },

  // v2.0.0-beta.1
  { title: 'AI Agent Chat-interface', desc: '30+ ingebouwde PIM-tools toegankelijk via natuurlijke taal. Maak producten aan, zoek, bulk-bewerk, genereer content, beheer categorieën — allemaal via conversatie.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Multi-Platform MagicAI', desc: 'Ondersteuning voor 10+ AI-providers (OpenAI, Anthropic, Gemini, Ollama, Groq en meer) met encrypted credential storage en platform-selectie per functie.', version: 'v2.0.0-beta.1', domains: ['ai', 'connectivity'] },
  { title: 'AI-gestuurd Semantisch Zoeken', desc: 'EmbeddingSimilarityService en SemanticRankingService leveren intelligente zoekresultaten op basis van betekenis, niet alleen trefwoorden.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Auto-vertaling bij Productaanmaak/-update', desc: 'Vertaal automatisch productgegevens naar alle geconfigureerde locales wanneer producten worden aangemaakt of bijgewerkt.', version: 'v2.0.0-beta.1', domains: ['ai', 'automation'] },
  { title: 'Goedkeuringswachtrij voor AI-wijzigingen', desc: 'Configureerbare modi voor AI-wijzigingen — auto-approve of manual review vóór toepassing.', version: 'v2.0.0-beta.1', domains: ['ai', 'governance'] },
  { title: 'Agent Memory System', desc: 'RememberFact- en RecallMemory-tools stellen de AI in staat om context op te slaan en op te halen tussen interacties.', version: 'v2.0.0-beta.1', domains: ['ai'] },
  { title: 'Catalog Quality Monitor', desc: 'Gepland commando dat de datakwaliteit van de catalogus monitort en erover rapporteert.', version: 'v2.0.0-beta.1', domains: ['data-quality', 'automation'] },
  { title: 'Auto-Enrichment', desc: 'Vul automatisch ontbrekende productbeschrijvingen en SEO-velden in met AI.', version: 'v2.0.0-beta.1', domains: ['ai', 'data-quality', 'automation'] },
  { title: 'Content Feedback-loop', desc: 'Vang gebruikersvoorkeuren op over door AI gegenereerde content om toekomstige output te verfijnen.', version: 'v2.0.0-beta.1', domains: ['ai', 'data-quality'] },
  { title: 'Datakwaliteitsrapport-tool', desc: 'Scan uw catalogus op ontbrekende gegevens en ontvang gestructureerde kwaliteitsrapporten.', version: 'v2.0.0-beta.1', domains: ['data-quality', 'reporting'] },
  { title: 'Productverificatie-tool', desc: 'Verifieer individuele producten tegen kwaliteitscriteria met volledigheidsscoring.', version: 'v2.0.0-beta.1', domains: ['data-quality'] },
  { title: 'Taakplanning-tool', desc: 'Plan en voer complexe multi-step PIM-operaties uit via de AI Agent.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'SSE Streaming voor AI Agent Chat', desc: 'Realtime streaming-antwoorden in de chatinterface met Server-Sent Events.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Token Budget Tracking', desc: 'Dagelijkse gebruikslimieten en monitoring voor AI-tokenverbruik.', version: 'v2.0.0-beta.1', domains: ['ai', 'reporting', 'governance'] },
  { title: 'Conversatiebehoud', desc: 'In de database opgeslagen chatsessies die behouden blijven over browser-verversingen en logins.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'AI Agent Analytics-dashboard', desc: 'Monitor AI-gebruik, kosten en prestaties vanuit een gecentraliseerd dashboard.', version: 'v2.0.0-beta.1', domains: ['ai', 'reporting'] },
  { title: 'Swatch Types voor Attributen', desc: 'Color-, Image- en Text-swatch-types voor Select- en Multiselect-attributen — visuele optieweergave.', version: 'v2.0.0-beta.1', domains: ['productivity', 'data-quality'] },
  { title: 'Verbeterd Dashboard', desc: 'Productstatistieken, activiteitsgrafieken, volledigheidsscores, kanaalgereedheid, recente activiteit en Gegevensoverdracht-widgets.', version: 'v2.0.0-beta.1', domains: ['reporting', 'productivity'] },
  { title: 'Import/Export Tracker UI', desc: 'Realtime visualisatie van import- en exportjobs met voortgangsbalken, statusindicatoren en stap-pipeline-labels.', version: 'v2.0.0-beta.1', domains: ['productivity', 'reporting'] },
  { title: 'Drag-and-Drop bestand uploaden', desc: 'Sleep bestanden direct naar het import-uploadgebied in plaats van de bestandsbrowser te gebruiken.', version: 'v2.0.0-beta.1', domains: ['productivity'] },
  { title: 'Pauzeren, Hervatten en Annuleren-besturingselementen', desc: 'Jobbesturing voor import- en exportjobs — pauzeer tijdens piekuren, hervat later.', version: 'v2.0.0-beta.1', domains: ['productivity', 'scalability'] },
  { title: 'Configurable Product-ondersteuning in AI Agent', desc: 'Maak en beheer configurable products met super_attributes en varianten via de AI Agent.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Laravel 12 Framework Upgrade', desc: 'Geüpgraded van Laravel 10 naar Laravel 12 met minimum PHP 8.3. Gemoderniseerde bootstrap, Pest 3.0 tests, Sanctum 4.0.', version: 'v2.0.0-beta.1', domains: ['scalability'] },
  { title: 'ACL-autorisatie op alle AI Agent-tools', desc: 'Op rollen gebaseerde toegangscontrole afgedwongen op alle 30+ AI Agent-tools en 15 eerder onbeschermde API-routes.', version: 'v2.0.0-beta.1', domains: ['governance'] },
  { title: 'Rate Limiting op AI-endpoints', desc: 'Throttle:30,1 rate limiting op AI Agent-endpoints om misbruik te voorkomen.', version: 'v2.0.0-beta.1', domains: ['governance', 'scalability'] },
  { title: 'Geoptimaliseerde Export-pipeline', desc: 'Eager loading en verhoogde batch-grootte (tot 200) voor betere exportprestaties. Categorie-exports voorkomen geheugenoverbelasting.', version: 'v2.0.0-beta.1', domains: ['scalability'] },

  // v1.0.0
  { title: 'PostgreSQL-ondersteuning', desc: 'Volledige cross-database-compatibiliteit — gebruik PostgreSQL naast MySQL.', version: 'v1.0.0', domains: ['connectivity', 'scalability'] },
  { title: 'System Prompt Management', desc: 'Configureer AI-gedrag en persoonlijkheid met preset- en custom system prompts.', version: 'v1.0.0', domains: ['ai', 'governance'] },
  { title: 'Custom Prompts voor Magic AI', desc: 'Definieer specifieke prompt-sjablonen voor AI-contentgeneratie met dynamische placeholders.', version: 'v1.0.0', domains: ['ai', 'productivity'] },
  { title: 'Productwaarden-vertaling', desc: 'Vertaal productattribuutwaarden in alle geconfigureerde locales.', version: 'v1.0.0', domains: ['productivity', 'automation'] },
  { title: 'Productvolledigheid', desc: 'Kwaliteitsscoring die de vereiste productinformatie per channel en locale bijhoudt.', version: 'v1.0.0', domains: ['data-quality', 'reporting'] },
  { title: 'Product Bulk Edit', desc: 'Bewerk meerdere producten tegelijk — bulkupdate gedeelde attributen vanuit de datagrid.', version: 'v1.0.0', domains: ['productivity'] },
  { title: 'Product Update Webhook', desc: 'Geautomatiseerde HTTP-callbacks wanneer productgegevens worden gewijzigd, met Logs- en History-tabs.', version: 'v1.0.0', domains: ['connectivity', 'automation'] },
  { title: 'Video-ondersteuning in Gallery', desc: 'Upload en beheer videobestanden in het gallery-attribuut naast afbeeldingen.', version: 'v1.0.0', domains: ['productivity'] },

  // v0.3.0
  { title: 'Dynamische Product Datagrid-kolommen', desc: 'Pas aan welke kolommen zichtbaar zijn in de productlijst met een drag-and-drop-kolombeheerder.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Dynamische Product Datagrid-filters', desc: 'Geavanceerde filtering op elke zichtbare kolom — tekstzoekopdracht, dropdowns, datumbereiken.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Quick Product Export-jobs', desc: 'Beheer dynamisch quick export-jobs direct vanuit de productlijst.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Verbeterde Magic AI-functionaliteit', desc: 'Verbeterde AI-contentgeneratie met betere prompts en model-ondersteuning.', version: 'v0.3.0', domains: ['ai'] },
  { title: 'Verbeterde Elasticsearch-filters', desc: 'Verbeterde productzoek-indexering en filterverwerking voor grote catalogi.', version: 'v0.3.0', domains: ['scalability'] },
  { title: 'Playwright End-to-End-tests', desc: 'Uitgebreide E2E-testsuite voor geautomatiseerd UI-testen.', version: 'v0.3.0', domains: ['governance'] },

  // v0.2.0
  { title: 'In-App & E-mailnotificaties', desc: 'Realtime notificatiesysteem voor import-/exportjobs, productwijzigingen en systeemgebeurtenissen.', version: 'v0.2.0', domains: ['productivity', 'reporting'] },
  { title: 'GUI Installer', desc: 'Web-gebaseerde installatiewizard voor eenvoudigere UnoPim-setup.', version: 'v0.2.0', domains: ['productivity'] },
  { title: 'Magic Image Generation', desc: 'Genereer productafbeeldingen van tekstbeschrijvingen met DALL-E.', version: 'v0.2.0', domains: ['ai', 'productivity'] },
  { title: 'API PATCH & DELETE-endpoints', desc: 'Nieuwe API-endpoints voor het patchen en verwijderen van producten en categorieën.', version: 'v0.2.0', domains: ['connectivity'] },
  { title: 'Dynamische Import-job-filters', desc: 'Configureer geavanceerde filtervoorwaarden voor importgegevens.', version: 'v0.2.0', domains: ['productivity'] },

  // v0.1.x
  { title: 'Core PIM-systeem', desc: 'Gecentraliseerd productbeheer met Simple- en Configurable-producttypen, categorieën, attributen en families.', version: 'v0.1.x', domains: ['productivity', 'governance'] },
  { title: 'Import/Export-pipeline', desc: 'Bulkimport en -export van product- en categoriegegevens in CSV-, XLS-, XLSX-indelingen.', version: 'v0.1.x', domains: ['connectivity', 'productivity'] },
  { title: 'REST API met OAuth 2.0', desc: 'Volledige RESTful API met Passport OAuth 2.0-authenticatie voor integraties met derden.', version: 'v0.1.x', domains: ['connectivity'] },
  { title: 'Multi-Channel & Multi-Locale', desc: 'Beheer productgegevens over meerdere channels, locales en currencies.', version: 'v0.1.x', domains: ['scalability', 'productivity'] },
  { title: 'Gebruikers- & Rolbeheer', desc: 'Admin-gebruikers met op rollen gebaseerde toegangscontrole en aangepaste machtigingen.', version: 'v0.1.x', domains: ['governance'] },
  { title: 'Donker / Licht Thema', desc: 'Wissel tussen donkere en lichte modus met één klik. Voorkeur blijft behouden tussen sessies.', version: 'v0.1.x', domains: ['productivity'] },
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

# Wat is er nieuw

Ontdek alle belangrijke functies die zijn uitgebracht in de verschillende UnoPim-versies. Gebruik de onderstaande filters om functies te verkennen per versie en domeingebied.

<div class="releases-page">

<div class="filter-section">
  <div class="filter-group">
    <h4>VERSIES</h4>
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
    <h4>DOMEINGEBIEDEN</h4>
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
  Hier zijn de <strong>{{ filteredFeatures.length }}</strong> belangrijke functies die in het PIM zijn opgeleverd voor de versies en gebieden die u hebt geselecteerd.
</p>

<div class="features-grid">
  <div v-for="f in filteredFeatures" :key="f.title" class="feature-card">
    <h3>{{ f.title }}</h3>
    <p class="feature-desc">{{ f.desc }}</p>
    <p class="feature-version">Beschikbaar sinds <strong>{{ f.version }}</strong></p>
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
