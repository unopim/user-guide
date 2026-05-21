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
  { id: 'ai', label: 'IA & Agents', color: '#7c3aed' },
  { id: 'productivity', label: 'Productivité', color: '#2563eb' },
  { id: 'data-quality', label: 'Qualité des données', color: '#059669' },
  { id: 'connectivity', label: 'Connectivité', color: '#dc2626' },
  { id: 'automation', label: 'Automatisation', color: '#d97706' },
  { id: 'scalability', label: 'Scalabilité', color: '#be185d' },
  { id: 'reporting', label: 'Reporting', color: '#6366f1' },
  { id: 'governance', label: 'Gouvernance', color: '#0d9488' },
]

const features = [
  // v2.0.x
  { title: 'Outil Manage Associations', desc: 'Nouvel outil AI Agent qui ajoute, supprime ou liste les produits related/up-sell/cross-sell via le langage naturel — pas besoin d\'ouvrir chaque produit manuellement.', version: 'v2.0.x', domains: ['ai', 'productivity'] },
  { title: 'Option d\'installeur --with-demo-data', desc: 'Nouveau flag d\'installeur qui amorce des produits, catégories et attributs d\'exemple au moment de l\'installation afin que vous puissiez évaluer UnoPim avec des données réalistes immédiatement.', version: 'v2.0.x', domains: ['productivity', 'governance'] },
  { title: 'Limitation de débit pour la connexion admin', desc: 'Des limiteurs de débit nommés avec segmentation par email + par IP protègent la connexion admin contre les attaques par force brute.', version: 'v2.0.x', domains: ['governance', 'scalability'] },
  { title: 'Validation de mot de passe côté serveur', desc: 'Longueur minimale de mot de passe imposée côté serveur, comblant une lacune où les clients pouvaient contourner les règles de mot de passe.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Durcissement contre l\'énumération d\'utilisateurs', desc: 'L\'endpoint de mot de passe oublié renvoie désormais un message générique, que l\'email existe ou non, empêchant l\'énumération de comptes.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Protection contre l\'open-redirect', desc: 'Les redirections basées sur le Referer valident désormais l\'hôte via parse_url() pour bloquer l\'abus d\'open-redirect.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Correctif d\'élévation de privilèges sur l\'édition d\'utilisateur', desc: 'Ajout d\'entrées ACL manquantes et de gardes au niveau du contrôleur sur l\'endpoint d\'édition d\'utilisateur pour empêcher l\'élévation de privilèges.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Middleware No-Cache pour les pages d\'administration', desc: 'Les réponses d\'administration incluent des en-têtes cache-control qui empêchent les navigateurs de mettre en cache les pages sensibles après la déconnexion.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'En-têtes sécurisés améliorés', desc: 'Les en-têtes Permissions-Policy et X-Permitted-Cross-Domain-Policies sont désormais envoyés sur toutes les réponses d\'administration pour des protections plus fortes au niveau du navigateur.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Helper de nettoyage XSS', desc: 'Helper clean_content() supporté par HTMLPurifier qui standardise le rendu HTML sûr dans l\'UI d\'administration.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Filtrage de debug basé sur l\'IP', desc: 'La variable d\'environnement APP_DEBUG_ALLOWED_IPS restreint la sortie de debug à des IPs spécifiques afin que le debug en production soit plus sûr.', version: 'v2.0.x', domains: ['governance'] },
  { title: 'Mise à niveau Vite 6.3', desc: 'Build frontend mis à niveau de Vite 4.0 à 6.3 avec découpage manuel de chunks et découpage de code CSS pour des chargements admin plus rapides.', version: 'v2.0.x', domains: ['productivity', 'scalability'] },
  { title: 'Polish du mode sombre dans Suivi de tâches', desc: 'Les barres de progression et les boutons de configuration s\'affichent désormais correctement en mode sombre à l\'intérieur du suivi de tâches d\'import/export.', version: 'v2.0.x', domains: ['productivity'] },
  { title: 'Workflow CI PostgreSQL', desc: 'Exécution de tests Pest dédiée sur PostgreSQL à chaque changement maintient la compatibilité multi-bases stable.', version: 'v2.0.x', domains: ['scalability', 'governance'] },

  // v2.0.0
  { title: 'Commande de traduction alimentée par l\'IA', desc: 'Traduire en masse les clés de locale manquantes dans 32 locales non anglaises à l\'aide de MagicAI. Auto-traduit environ 18 000 clés précédemment non traduites sur 7 packages.', version: 'v2.0.0', domains: ['ai', 'automation', 'productivity'] },
  { title: 'Améliorations des traductions allemandes', desc: 'Terminologie des colonnes corrigée et qualité de la locale de_DE améliorée.', version: 'v2.0.0', domains: ['productivity'] },
  { title: 'Auto-réindexation Elasticsearch après le seeding', desc: 'Les produits sont immédiatement recherchables après le seeding de la base de données sans réindexation manuelle.', version: 'v2.0.0', domains: ['scalability'] },
  { title: 'Grammaire JSON multi-bases', desc: 'Prise en charge de la compatibilité PostgreSQL avec une gestion améliorée des requêtes JSON.', version: 'v2.0.0', domains: ['connectivity', 'scalability'] },

  // v2.0.0-beta.1
  { title: 'Interface AI Agent Chat', desc: '30+ outils PIM intégrés accessibles via le langage naturel. Créez des produits, recherchez, éditez en masse, générez du contenu, gérez les catégories — le tout via la conversation.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Multi-Platform MagicAI', desc: 'Prise en charge de 10+ fournisseurs IA (OpenAI, Anthropic, Gemini, Ollama, Groq, et plus) avec stockage chiffré des identifiants et sélection de plateforme par fonctionnalité.', version: 'v2.0.0-beta.1', domains: ['ai', 'connectivity'] },
  { title: 'Recherche sémantique alimentée par l\'IA', desc: 'EmbeddingSimilarityService et SemanticRankingService offrent des résultats de recherche intelligents basés sur le sens, pas seulement les mots-clés.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Auto-traduction à la création/mise à jour de produit', desc: 'Traduisez automatiquement les données produit dans toutes les locales configurées lors de la création ou de la mise à jour de produits.', version: 'v2.0.0-beta.1', domains: ['ai', 'automation'] },
  { title: 'File d\'attente d\'approbation pour les changements IA', desc: 'Modes configurables pour les changements IA — auto-approuver ou examen manuel avant application.', version: 'v2.0.0-beta.1', domains: ['ai', 'governance'] },
  { title: 'Système de mémoire de l\'agent', desc: 'Les outils RememberFact et RecallMemory permettent à l\'IA de stocker et de récupérer le contexte entre les interactions.', version: 'v2.0.0-beta.1', domains: ['ai'] },
  { title: 'Catalog Quality Monitor', desc: 'Commande planifiée qui surveille et rapporte la qualité des données du catalogue.', version: 'v2.0.0-beta.1', domains: ['data-quality', 'automation'] },
  { title: 'Auto-Enrichissement', desc: 'Remplir automatiquement les descriptions de produit et champs SEO manquants à l\'aide de l\'IA.', version: 'v2.0.0-beta.1', domains: ['ai', 'data-quality', 'automation'] },
  { title: 'Boucle de feedback de contenu', desc: 'Capturez les préférences utilisateur sur le contenu généré par IA pour affiner les sorties futures.', version: 'v2.0.0-beta.1', domains: ['ai', 'data-quality'] },
  { title: 'Outil de rapport de qualité des données', desc: 'Scannez votre catalogue à la recherche de données manquantes et recevez des rapports de qualité structurés.', version: 'v2.0.0-beta.1', domains: ['data-quality', 'reporting'] },
  { title: 'Outil de vérification de produit', desc: 'Vérifiez les produits individuels par rapport aux critères de qualité avec score de complétude.', version: 'v2.0.0-beta.1', domains: ['data-quality'] },
  { title: 'Outil de planification de tâches', desc: 'Planifiez et exécutez des opérations PIM complexes multi-étapes via l\'AI Agent.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Streaming SSE pour AI Agent Chat', desc: 'Réponses en streaming en temps réel dans l\'interface de chat à l\'aide de Server-Sent Events.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Suivi du budget de tokens', desc: 'Limites d\'utilisation quotidiennes et surveillance pour la consommation de tokens IA.', version: 'v2.0.0-beta.1', domains: ['ai', 'reporting', 'governance'] },
  { title: 'Persistance des conversations', desc: 'Sessions de chat stockées en base de données qui persistent à travers les rafraîchissements de navigateur et les connexions.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Tableau de bord AI Agent Analytics', desc: 'Surveillez l\'utilisation, les coûts et les performances de l\'IA depuis un tableau de bord centralisé.', version: 'v2.0.0-beta.1', domains: ['ai', 'reporting'] },
  { title: 'Swatch Types pour les attributs', desc: 'Types de pastilles Color, Image et Text pour les attributs Select et Multiselect — affichage visuel des options.', version: 'v2.0.0-beta.1', domains: ['productivity', 'data-quality'] },
  { title: 'Tableau de bord enrichi', desc: 'Widgets Statistiques de produit, Activity Charts, Completeness Scores, Préparation du canal, Activité récente et Transfert de données.', version: 'v2.0.0-beta.1', domains: ['reporting', 'productivity'] },
  { title: 'UI Import/Export Tracker', desc: 'Visualisation en temps réel des jobs d\'import et d\'export avec des barres de progression, indicateurs de statut et étiquettes de pipeline d\'étapes.', version: 'v2.0.0-beta.1', domains: ['productivity', 'reporting'] },
  { title: 'Téléversement de fichier par glisser-déposer', desc: 'Glissez les fichiers directement sur la zone de téléversement d\'import au lieu d\'utiliser le navigateur de fichiers.', version: 'v2.0.0-beta.1', domains: ['productivity'] },
  { title: 'Contrôles Pause, Resume et Cancel', desc: 'Capacités de contrôle de job pour les jobs d\'import et d\'export — mise en pause pendant les heures de pointe, reprise plus tard.', version: 'v2.0.0-beta.1', domains: ['productivity', 'scalability'] },
  { title: 'Prise en charge des produits configurables dans l\'AI Agent', desc: 'Créez et gérez les produits configurables avec super_attributes et variantes via l\'AI Agent.', version: 'v2.0.0-beta.1', domains: ['ai', 'productivity'] },
  { title: 'Mise à niveau du framework Laravel 12', desc: 'Mise à niveau de Laravel 10 à Laravel 12 avec PHP 8.3 minimum. Bootstrap modernisé, tests Pest 3.0, Sanctum 4.0.', version: 'v2.0.0-beta.1', domains: ['scalability'] },
  { title: 'Autorisation ACL sur tous les outils AI Agent', desc: 'Contrôle d\'accès basé sur les rôles appliqué à tous les 30+ outils AI Agent et 15 routes API précédemment non protégées.', version: 'v2.0.0-beta.1', domains: ['governance'] },
  { title: 'Limitation de débit sur les endpoints IA', desc: 'Limitation de débit Throttle:30,1 sur les endpoints AI Agent pour prévenir les abus.', version: 'v2.0.0-beta.1', domains: ['governance', 'scalability'] },
  { title: 'Pipeline d\'export optimisé', desc: 'Eager loading et taille de lot augmentée (jusqu\'à 200) pour de meilleures performances d\'export. Les exports de catégories évitent la surcharge de mémoire.', version: 'v2.0.0-beta.1', domains: ['scalability'] },

  // v1.0.0
  { title: 'Prise en charge de PostgreSQL', desc: 'Compatibilité multi-bases complète — utilisez PostgreSQL aux côtés de MySQL.', version: 'v1.0.0', domains: ['connectivity', 'scalability'] },
  { title: 'Gestion des Prompts système', desc: 'Configurez le comportement et la personnalité de l\'IA avec des system prompts préréglés et personnalisés.', version: 'v1.0.0', domains: ['ai', 'governance'] },
  { title: 'Prompts personnalisés pour Magic AI', desc: 'Définissez des modèles de prompt spécifiques pour la génération de contenu IA avec des espaces réservés dynamiques.', version: 'v1.0.0', domains: ['ai', 'productivity'] },
  { title: 'Traduction des valeurs de produit', desc: 'Traduisez les valeurs d\'attribut de produit dans toutes les locales configurées.', version: 'v1.0.0', domains: ['productivity', 'automation'] },
  { title: 'Complétude du produit', desc: 'Score de qualité qui suit les informations produit requises par canal et locale.', version: 'v1.0.0', domains: ['data-quality', 'reporting'] },
  { title: 'Édition en masse des produits', desc: 'Modifier plusieurs produits à la fois — mise à jour groupée des attributs partagés depuis le datagrid.', version: 'v1.0.0', domains: ['productivity'] },
  { title: 'Webhook de mise à jour de produit', desc: 'Rappels HTTP automatisés lors de la modification des données produit, avec onglets Logs et History.', version: 'v1.0.0', domains: ['connectivity', 'automation'] },
  { title: 'Prise en charge vidéo dans la galerie', desc: 'Téléversez et gérez des fichiers vidéo dans l\'attribut galerie aux côtés des images.', version: 'v1.0.0', domains: ['productivity'] },

  // v0.3.0
  { title: 'Colonnes Datagrid produit dynamiques', desc: 'Personnalisez quelles colonnes sont visibles dans la liste des produits avec un gestionnaire de colonnes par glisser-déposer.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Filtres Datagrid produit dynamiques', desc: 'Filtrage avancé par n\'importe quelle colonne visible — recherche de texte, listes déroulantes, plages de dates.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Jobs d\'export rapide de produits', desc: 'Gérez dynamiquement les jobs d\'export rapide directement depuis la liste des produits.', version: 'v0.3.0', domains: ['productivity'] },
  { title: 'Fonctionnalité Magic AI améliorée', desc: 'Génération de contenu IA améliorée avec de meilleurs prompts et une meilleure prise en charge des modèles.', version: 'v0.3.0', domains: ['ai'] },
  { title: 'Filtres Elasticsearch améliorés', desc: 'Indexation de recherche produit améliorée et gestion des filtres pour les grands catalogues.', version: 'v0.3.0', domains: ['scalability'] },
  { title: 'Tests end-to-end Playwright', desc: 'Suite de tests E2E complète pour les tests UI automatisés.', version: 'v0.3.0', domains: ['governance'] },

  // v0.2.0
  { title: 'Notifications in-app et email', desc: 'Système de notification en temps réel pour les jobs d\'import/export, les modifications de produit et les événements système.', version: 'v0.2.0', domains: ['productivity', 'reporting'] },
  { title: 'Installeur GUI', desc: 'Assistant d\'installation basé sur le web pour une configuration plus facile d\'UnoPim.', version: 'v0.2.0', domains: ['productivity'] },
  { title: 'Génération Magic Image', desc: 'Générer des images de produit à partir de descriptions textuelles à l\'aide de DALL-E.', version: 'v0.2.0', domains: ['ai', 'productivity'] },
  { title: 'Endpoints API PATCH & DELETE', desc: 'Nouveaux endpoints API pour patcher et supprimer les produits et catégories.', version: 'v0.2.0', domains: ['connectivity'] },
  { title: 'Filtres de job d\'import dynamiques', desc: 'Configurez des conditions de filtrage avancées pour les données d\'import.', version: 'v0.2.0', domains: ['productivity'] },

  // v0.1.x
  { title: 'Système PIM principal', desc: 'Gestion centralisée des produits avec types de produits Simple et Configurable, catégories, attributs et familles.', version: 'v0.1.x', domains: ['productivity', 'governance'] },
  { title: 'Pipeline Import/Export', desc: 'Import et export en masse de données produit et catégorie aux formats CSV, XLS, XLSX.', version: 'v0.1.x', domains: ['connectivity', 'productivity'] },
  { title: 'API REST avec OAuth 2.0', desc: 'API RESTful complète avec authentification Passport OAuth 2.0 pour les intégrations tierces.', version: 'v0.1.x', domains: ['connectivity'] },
  { title: 'Multi-Canal et Multi-Locale', desc: 'Gérez les données produit sur plusieurs canaux, locales et devises.', version: 'v0.1.x', domains: ['scalability', 'productivity'] },
  { title: 'Gestion des utilisateurs et rôles', desc: 'Utilisateurs administrateurs avec contrôle d\'accès basé sur les rôles et autorisations personnalisées.', version: 'v0.1.x', domains: ['governance'] },
  { title: 'Thème sombre / clair', desc: 'Basculez entre le mode sombre et clair en un seul clic. La préférence persiste entre les sessions.', version: 'v0.1.x', domains: ['productivity'] },
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

# Nouveautés

Découvrez toutes les fonctionnalités clés publiées dans les différentes versions d'UnoPim. Utilisez les filtres ci-dessous pour explorer les fonctionnalités par version et par domaine.

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
    <h4>DOMAINES</h4>
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
  Voici les <strong>{{ filteredFeatures.length }}</strong> fonctionnalités clés livrées dans le PIM pour les versions et les domaines que vous avez sélectionnés.
</p>

<div class="features-grid">
  <div v-for="f in filteredFeatures" :key="f.title" class="feature-card">
    <h3>{{ f.title }}</h3>
    <p class="feature-desc">{{ f.desc }}</p>
    <p class="feature-version">Disponible depuis <strong>{{ f.version }}</strong></p>
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
