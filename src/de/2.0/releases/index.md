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
  { id: 'ai', label: 'KI & Agenten', color: '#7c3aed' },
  { id: 'productivity', label: 'Produktivität', color: '#2563eb' },
  { id: 'data-quality', label: 'Datenqualität', color: '#059669' },
  { id: 'connectivity', label: 'Konnektivität', color: '#dc2626' },
  { id: 'automation', label: 'Automatisierung', color: '#d97706' },
  { id: 'scalability', label: 'Skalierbarkeit', color: '#be185d' },
  { id: 'reporting', label: 'Reporting', color: '#6366f1' },
  { id: 'governance', label: 'Governance', color: '#0d9488' },
]

const features = [
  // v2.0.x
  { title: 'Manage Associations Tool', desc: 'Neues AI-Agent-Tool, das verwandte/Up-Sell-/Cross-Sell-Produkte über natürliche Sprache hinzufügt, entfernt oder auflistet — kein manuelles Öffnen jedes Produkts mehr erforderlich.', version: 'v2.0.x', domains: ['ai', 'productivity'] },
  { title: '--with-demo-data-Installer-Option', desc: 'Neues Installer-Flag, das beim Installationszeitpunkt Beispielprodukte, -kategorien und -attribute seedet, damit Sie UnoPim sofort mit realistischen Daten bewerten können.', version: 'v2.0.x', domains: ['productivity', 'governance'] },
  { title: 'Rate-Limiting für Admin-Login', desc: 'Benannte Rate-Limiter mit Segmentierung pro E-Mail + pro IP schützen den Admin-Login vor Brute-Force-Angriffen.', version: 'v2.0.x', domains: ['governance', 'scalability'] },
  { title: 'Serverseitige Passwortvalidierung', desc: 'Eine Mindestpasswortlänge wird serverseitig erzwungen und schließt eine Lücke, in der Clients Passwortregeln umgehen konnten.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Benutzerenumeration-Härtung', desc: 'Der Endpunkt für die Passwort-Wiederherstellung gibt nun unabhängig davon, ob die E-Mail existiert, eine generische Nachricht zurück, was Account-Enumeration verhindert.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Open-Redirect-Schutz', desc: 'Referer-basierte Weiterleitungen validieren nun den Host über parse_url(), um Open-Redirect-Missbrauch zu blockieren.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Fix für Berechtigungsausweitung beim Benutzer-Edit', desc: 'Fehlende ACL-Einträge und Controller-Level-Schutzmaßnahmen wurden zum Benutzer-Edit-Endpunkt hinzugefügt, um Berechtigungsausweitung zu verhindern.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'No-Cache-Middleware für Admin-Seiten', desc: 'Admin-Antworten enthalten Cache-Control-Header, die verhindern, dass Browser sensible Seiten nach der Abmeldung zwischenspeichern.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Erweiterte Secure Headers', desc: 'Permissions-Policy- und X-Permitted-Cross-Domain-Policies-Header werden nun bei allen Admin-Antworten gesendet, für stärkere Schutzmaßnahmen auf Browserebene.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'XSS-Sanitization-Helper', desc: 'clean_content()-Helper, unterstützt von HTMLPurifier, standardisiert sicheres HTML-Rendering in der gesamten Admin-Benutzeroberfläche.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'IP-basierte Debug-Filterung', desc: 'Die Umgebungsvariable APP_DEBUG_ALLOWED_IPS beschränkt die Debug-Ausgabe auf bestimmte IPs, sodass das Produktions-Debugging sicherer ist.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Vite 6.3-Upgrade', desc: 'Frontend-Build wurde von Vite 4.0 auf 6.3 aktualisiert mit manuellem Chunk-Splitting und CSS-Code-Splitting für schnellere Admin-Ladezeiten.', version: 'v2.0.x', domains: ['productivity', 'scalability'] },
  { title: 'Dark-Mode-Politur im Job-Tracker', desc: 'Fortschrittsbalken und Konfigurationsschaltflächen werden nun im Dark-Mode innerhalb des Import-/Export-Job-Trackers korrekt gerendert.', version: 'v2.0.x', domains: ['productivity'] },
  { title: 'PostgreSQL-CI-Workflow', desc: 'Ein dedizierter Pest-Testlauf gegen PostgreSQL bei jeder Änderung hält die datenbankübergreifende Kompatibilität stabil.', version: 'v2.0.x', domains: ['scalability', 'governance'] },

  // v2.0.0
  { title: 'KI-gestützter Übersetzungsbefehl', desc: 'Massenübersetzung fehlender Locale-Schlüssel in 32 nicht-englischen Locales mit MagicAI. Es wurden ca. 18.000 zuvor unübersetzte Schlüssel über 7 Pakete automatisch übersetzt.', version: 'v2.0.0', domains: ['ai', 'automation', 'productivity'] },
  { title: 'Verbesserte deutsche Übersetzungen', desc: 'Korrigierte Spaltenterminologie und verbesserte de_DE-Locale-Qualität.', version: 'v2.0.0', domains: ['productivity'] },
  { title: 'Elasticsearch Auto-Reindex nach Seeding', desc: 'Produkte sind unmittelbar nach dem Datenbank-Seeding ohne manuelle Neuindexierung durchsuchbar.', version: 'v2.0.0', domains: ['scalability'] },
  { title: 'Datenbankübergreifende JSON-Grammatik', desc: 'Unterstützung der PostgreSQL-Kompatibilität mit verbesserter JSON-Query-Verarbeitung.', version: 'v2.0.0', domains: ['connectivity', 'scalability'] },

  // v2.0.0-beta.1
  { title: 'AI Agent Chat-Oberfläche', desc: 'Mehr als 30 integrierte PIM-Tools, zugänglich über natürliche Sprache. Produkte erstellen, suchen, Massenbearbeitung, Inhalte generieren, Kategorien verwalten — alles über Konversation.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Multi-Plattform MagicAI', desc: 'Unterstützung für mehr als 10 KI-Anbieter (OpenAI, Anthropic, Gemini, Ollama, Groq und mehr) mit verschlüsselter Credential-Speicherung und Plattformauswahl pro Funktion.', version: 'v2.0.0-beta.1', domains: ['ai', 'connectivity'] },
  { title: 'KI-gestützte semantische Suche', desc: 'EmbeddingSimilarityService und SemanticRankingService liefern intelligente Suchergebnisse basierend auf der Bedeutung, nicht nur auf Stichwörtern.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Automatische Übersetzung bei Produkt-Erstellung/-Aktualisierung', desc: 'Automatische Übersetzung von Produktdaten in alle konfigurierten Locales, wenn Produkte erstellt oder aktualisiert werden.', version: 'v2.0.0-beta.1', domains: ['ai', 'automation'] },
  { title: 'Genehmigungs-Warteschlange für KI-Änderungen', desc: 'Konfigurierbare Modi für KI-Änderungen — automatische Genehmigung oder manuelle Überprüfung vor der Anwendung.', version: 'v2.0.0-beta.1', domains: ['ai', 'governance'] },
  { title: 'Agent-Memory-System', desc: 'RememberFact- und RecallMemory-Tools ermöglichen es der KI, Kontext über Interaktionen hinweg zu speichern und abzurufen.', version: 'v2.0.0-beta.1', domains: ['ai'] },
  { title: 'Catalog Quality Monitor', desc: 'Geplanter Befehl, der die Qualität von Katalogdaten überwacht und darüber berichtet.', version: 'v2.0.0-beta.1', domains: ['data-quality', 'automation'] },
  { title: 'Auto-Enrichment', desc: 'Automatisches Ausfüllen fehlender Produktbeschreibungen und SEO-Felder mit KI.', version: 'v2.0.0-beta.1', domains: ['ai', 'data-quality', 'automation'] },
  { title: 'Content-Feedback-Schleife', desc: 'Erfassen Sie Benutzerpräferenzen zu KI-generierten Inhalten, um zukünftige Ausgaben zu verfeinern.', version: 'v2.0.0-beta.1', domains: ['ai', 'data-quality'] },
  { title: 'Datenqualitätsbericht-Tool', desc: 'Scannen Sie Ihren Katalog auf fehlende Daten und erhalten Sie strukturierte Qualitätsberichte.', version: 'v2.0.0-beta.1', domains: ['data-quality', 'reporting'] },
  { title: 'Produktverifizierungs-Tool', desc: 'Verifizieren Sie einzelne Produkte gegen Qualitätskriterien mit Vollständigkeits-Scoring.', version: 'v2.0.0-beta.1', domains: ['data-quality'] },
  { title: 'Aufgabenplanungs-Tool', desc: 'Planen und führen Sie komplexe mehrstufige PIM-Operationen über den AI Agent aus.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'SSE-Streaming für AI Agent Chat', desc: 'Echtzeit-Streaming-Antworten in der Chat-Oberfläche mit Server-Sent Events.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Token-Budget-Tracking', desc: 'Tägliche Nutzungsgrenzen und Überwachung des KI-Token-Verbrauchs.', version: 'v2.0.0-beta.1', domains: ['ai', 'reporting', 'governance'] },
  { title: 'Konversations-Persistenz', desc: 'Datenbankgestützte Chat-Sitzungen, die über Browser-Aktualisierungen und Anmeldungen hinweg bestehen bleiben.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'AI Agent Analytics-Dashboard', desc: 'Überwachen Sie KI-Nutzung, -Kosten und -Leistung über ein zentralisiertes Dashboard.', version: 'v2.0.0-beta.1', domains: ['ai', 'reporting'] },
  { title: 'Swatch-Typen für Attribute', desc: 'Color-, Image- und Text-Swatch-Typen für Select- und Multiselect-Attribute — visuelle Optionsdarstellung.', version: 'v2.0.0-beta.1', domains: ['productivity', 'data-quality'] },
  { title: 'Verbessertes Dashboard', desc: 'Produktstatistiken, Aktivitätsdiagramme, Vollständigkeitswerte, Kanalbereitschaft, kürzliche Aktivitäten und Datenübertragungs-Widgets.', version: 'v2.0.0-beta.1', domains: ['reporting', 'productivity'] },
  { title: 'Import-/Export-Tracker-UI', desc: 'Echtzeit-Visualisierung von Import- und Export-Jobs mit Fortschrittsbalken, Statusanzeigen und Schritt-Pipeline-Labels.', version: 'v2.0.0-beta.1', domains: ['productivity', 'reporting'] },
  { title: 'Drag-and-Drop-Datei-Upload', desc: 'Ziehen Sie Dateien direkt auf den Import-Upload-Bereich, anstatt den Datei-Browser zu verwenden.', version: 'v2.0.0-beta.1', domains: ['productivity'] },
  { title: 'Pause-, Resume- und Cancel-Steuerungen', desc: 'Job-Steuerungsfunktionen für Import- und Export-Jobs — Pause während Spitzenzeiten, später fortsetzen.', version: 'v2.0.0-beta.1', domains: ['productivity', 'scalability'] },
  { title: 'Unterstützung konfigurierbarer Produkte im AI Agent', desc: 'Erstellen und verwalten Sie konfigurierbare Produkte mit super_attributes und Varianten über den AI Agent.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Laravel 12 Framework-Upgrade', desc: 'Upgrade von Laravel 10 auf Laravel 12 mit PHP 8.3 Mindestversion. Modernisierter Bootstrap, Pest 3.0-Tests, Sanctum 4.0.', version: 'v2.0.0-beta.1', domains: ['scalability'] },
  { title: 'ACL-Autorisierung für alle AI Agent-Tools', desc: 'Rollenbasierte Zugriffskontrolle wird auf allen mehr als 30 AI-Agent-Tools und 15 zuvor ungeschützten API-Routen erzwungen.', version: 'v2.0.0-beta.1', domains: ['governance'] },
  { title: 'Rate Limiting auf KI-Endpunkten', desc: 'Throttle:30,1-Rate-Limiting auf AI-Agent-Endpunkten, um Missbrauch zu verhindern.', version: 'v2.0.0-beta.1', domains: ['governance', 'scalability'] },
  { title: 'Optimierte Export-Pipeline', desc: 'Eager Loading und erhöhte Batch-Größe (bis zu 200) für bessere Export-Leistung. Kategorie-Exporte vermeiden Speicherüberlastung.', version: 'v2.0.0-beta.1', domains: ['scalability'] },

  // v1.0.0
  { title: 'PostgreSQL-Unterstützung', desc: 'Vollständige datenbankübergreifende Kompatibilität — verwenden Sie PostgreSQL neben MySQL.', version: 'v1.0.0', domains: ['connectivity', 'scalability'] },
  { title: 'System-Prompt-Verwaltung', desc: 'Konfigurieren Sie KI-Verhalten und -Persönlichkeit mit voreingestellten und benutzerdefinierten System-Prompts.', version: 'v1.0.0', domains: ['ai', 'governance'] },
  { title: 'Benutzerdefinierte Prompts für Magic AI', desc: 'Definieren Sie spezifische Prompt-Vorlagen für die KI-Inhaltsgenerierung mit dynamischen Platzhaltern.', version: 'v1.0.0', domains: ['ai', 'productivity'] },
  { title: 'Produktwert-Übersetzung', desc: 'Übersetzen Sie Produktattributwerte über alle konfigurierten Locales hinweg.', version: 'v1.0.0', domains: ['productivity', 'automation'] },
  { title: 'Produktvollständigkeit', desc: 'Qualitäts-Scoring, das erforderliche Produktinformationen pro Kanal und Locale verfolgt.', version: 'v1.0.0', domains: ['data-quality', 'reporting'] },
  { title: 'Produkt-Massenbearbeitung', desc: 'Bearbeiten Sie mehrere Produkte gleichzeitig — Massenaktualisierung gemeinsamer Attribute aus dem Datagrid.', version: 'v1.0.0', domains: ['productivity'] },
  { title: 'Produkt-Update-Webhook', desc: 'Automatisierte HTTP-Callbacks bei Änderungen der Produktdaten, mit Logs- und History-Tabs.', version: 'v1.0.0', domains: ['connectivity', 'automation'] },
  { title: 'Video-Unterstützung in der Galerie', desc: 'Videodateien neben Bildern im Gallery-Attribut hochladen und verwalten.', version: 'v1.0.0', domains: ['productivity'] },

  // v0.3.0
  { title: 'Dynamische Produkt-Datagrid-Spalten', desc: 'Passen Sie an, welche Spalten in der Produktauflistung sichtbar sind, mit einem Drag-and-Drop-Spaltenmanager.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Dynamische Produkt-Datagrid-Filter', desc: 'Erweiterte Filterung nach jeder sichtbaren Spalte — Textsuche, Dropdowns, Datumsbereiche.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Quick Product Export Jobs', desc: 'Verwalten Sie Quick-Export-Jobs dynamisch direkt aus der Produktauflistung.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Verbesserte Magic AI-Funktionalität', desc: 'Verbesserte KI-Inhaltsgenerierung mit besseren Prompts und Modellunterstützung.', version: 'v0.3.0', domains: ['ai'] },
  { title: 'Erweiterte Elasticsearch-Filter', desc: 'Verbesserte Produkt-Suchindexierung und Filter-Handhabung für große Kataloge.', version: 'v0.3.0', domains: ['scalability'] },
  { title: 'Playwright End-to-End-Tests', desc: 'Umfassende E2E-Test-Suite für automatisierte UI-Tests.', version: 'v0.3.0', domains: ['governance'] },

  // v0.2.0
  { title: 'In-App- & E-Mail-Benachrichtigungen', desc: 'Echtzeit-Benachrichtigungssystem für Import-/Export-Jobs, Produktänderungen und Systemereignisse.', version: 'v0.2.0', domains: ['productivity', 'reporting'] },
  { title: 'GUI-Installer', desc: 'Webbasierter Installationsassistent für eine einfachere UnoPim-Einrichtung.', version: 'v0.2.0', domains: ['productivity'] },
  { title: 'Magic Image-Generierung', desc: 'Generieren Sie Produktbilder aus Textbeschreibungen mit DALL-E.', version: 'v0.2.0', domains: ['ai', 'productivity'] },
  { title: 'API PATCH- & DELETE-Endpunkte', desc: 'Neue API-Endpunkte zum Patchen und Löschen von Produkten und Kategorien.', version: 'v0.2.0', domains: ['connectivity'] },
  { title: 'Dynamische Import-Job-Filter', desc: 'Konfigurieren Sie erweiterte Filterbedingungen für Importdaten.', version: 'v0.2.0', domains: ['productivity'] },

  // v0.1.x
  { title: 'Kern-PIM-System', desc: 'Zentralisierte Produktverwaltung mit einfachen und konfigurierbaren Produkttypen, Kategorien, Attributen und Familien.', version: 'v0.1.x', domains: ['productivity', 'governance'] },
  { title: 'Import-/Export-Pipeline', desc: 'Massenimport und -export von Produkt- und Kategoriedaten in den Formaten CSV, XLS, XLSX.', version: 'v0.1.x', domains: ['connectivity', 'productivity'] },
  { title: 'REST-API mit OAuth 2.0', desc: 'Vollständige RESTful-API mit Passport OAuth 2.0-Authentifizierung für Drittanbieter-Integrationen.', version: 'v0.1.x', domains: ['connectivity'] },
  { title: 'Multi-Channel & Multi-Locale', desc: 'Verwalten Sie Produktdaten über mehrere Kanäle, Locales und Währungen hinweg.', version: 'v0.1.x', domains: ['scalability', 'productivity'] },
  { title: 'Benutzer- & Rollenverwaltung', desc: 'Admin-Benutzer mit rollenbasierter Zugriffskontrolle und benutzerdefinierten Berechtigungen.', version: 'v0.1.x', domains: ['governance'] },
  { title: 'Dunkles / Helles Theme', desc: 'Wechseln Sie mit einem Klick zwischen Dunkel- und Hell-Modus. Die Präferenz bleibt über Sitzungen hinweg erhalten.', version: 'v0.1.x', domains: ['productivity'] },
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

# Was ist neu

Entdecken Sie alle wichtigen Funktionen, die in den UnoPim-Versionen veröffentlicht wurden. Verwenden Sie die untenstehenden Filter, um Funktionen nach Version und Themenbereich zu erkunden.

<div class="releases-page">

<div class="filter-section">
  <div class="filter-group">
    <h4>VERSIONEN</h4>
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
    <h4>THEMENBEREICHE</h4>
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
  Hier sind die <strong>{{ filteredFeatures.length }}</strong> wichtigsten Funktionen, die im PIM für die ausgewählten Versionen und Bereiche bereitgestellt wurden.
</p>

<div class="features-grid">
  <div v-for="f in filteredFeatures" :key="f.title" class="feature-card">
    <h3>{{ f.title }}</h3>
    <p class="feature-desc">{{ f.desc }}</p>
    <p class="feature-version">Verfügbar seit <strong>{{ f.version }}</strong></p>
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
