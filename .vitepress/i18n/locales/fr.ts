// Français
import build10 from '../sidebars/v1.0'
import build20 from '../sidebars/v2.0'
import build21 from '../sidebars/v2.1'

const prefix = 'fr'

const v21Labels = {
  introduction: 'Introduction',
  whatsNew: 'Nouveautés',
  agenticPim: 'PIM Agentique',
  dashboard: 'Tableau de bord',
  productTypes: 'Types de produit',
  simpleProduct: 'Produit simple',
  configurableProduct: 'Produit configurable',
  categories: 'Catégories',
  categoryFields: 'Champs de catégorie',
  attributes: 'Attributs',
  attributeInputType: "Type d'entrée d'attribut",
  productAttribute: 'Attribut de produit',
  attributeFamily: "Famille d'attributs",
  attributeGroups: "Groupes d'attributs",
  magicAI: 'Magic AI',
  platforms: 'Plateformes',
  settingsLabel: 'Paramètres',
  prompts: 'Prompts',
  systemPrompts: 'Prompts système',
  dataTransfer: 'Transfert de données',
  jobTracker: 'Suivi des tâches',
  import: 'Importer',
  export: 'Exporter',
  settings: 'Paramètres',
  locales: 'Langues',
  currencies: 'Devises',
  channels: 'Canaux',
  users: 'Utilisateurs',
  roles: 'Rôles',
  configurations: 'Configurations',
  integration: 'Intégration',
  webhooks: 'Webhooks',
  notifications: 'Notifications',
  aiAgent: 'Agent IA',
  aiAgentChat: 'Chat Agent IA',
  approvalQueue: "File d'approbation",
  analytics: 'Analytique'
}

const v10Labels = {
  introduction: 'Introduction',
  productTypes: 'Types de produit',
  simpleProduct: 'Produit simple',
  configurableProduct: 'Produit configurable',
  categories: 'Catégories',
  categoryFields: 'Champs de catégorie',
  attributes: 'Attributs',
  attributeInputType: "Type d'entrée d'attribut",
  productAttribute: "Créer un attribut de produit",
  attributeFamily: "Famille d'attributs",
  attributeGroups: "Groupes d'attributs",
  dataTransfer: 'Transfert de données',
  import: 'Importer',
  export: 'Exporter',
  settings: 'Paramètres',
  locales: 'Langues',
  currencies: 'Devises',
  channels: 'Canaux',
  users: 'Utilisateurs',
  roles: 'Rôles',
  configurations: 'Configurations',
  integration: 'Intégration',
  magicAI: 'Magic AI',
  webhooks: 'Webhooks'
}

export const fr = {
  themeConfig: {
    nav: [
      { text: 'Accueil', link: `/${prefix}/` },
      { text: 'Doc Développeur', link: 'https://devdocs.unopim.com/' },
      { text: 'Doc Extensions', link: 'https://docs-extensions.unopim.com/' }
    ],
    sidebar: {
      [`/${prefix}/1.0/`]: build10(prefix, v10Labels),
      [`/${prefix}/2.0/`]: build20(prefix, v21Labels),
      [`/${prefix}/2.1/`]: build21(prefix, v21Labels)
    },
    editLink: {
      pattern: 'https://github.com/unopim/user-guide/edit/main/src/:path',
      text: 'Aidez-nous à améliorer cette page sur GitHub.'
    },
    lastUpdated: { text: 'Dernière mise à jour' },
    docFooter: { prev: 'Page précédente', next: 'Page suivante' },
    outline: { level: 'deep' as const, label: 'Sur cette page' },
    darkModeSwitchLabel: 'Apparence',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Passer au thème sombre',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Retour en haut',
    langMenuLabel: 'Changer de langue'
  }
}
