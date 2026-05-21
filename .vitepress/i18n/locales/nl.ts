// Nederlands
import build10 from '../sidebars/v1.0'
import build20 from '../sidebars/v2.0'
import build21 from '../sidebars/v2.1'

const prefix = 'nl'

const v21Labels = {
  introduction: 'Introductie',
  whatsNew: 'Wat is nieuw',
  agenticPim: 'Agentic PIM',
  dashboard: 'Dashboard',
  productTypes: 'Producttypen',
  simpleProduct: 'Eenvoudig product',
  configurableProduct: 'Configureerbaar product',
  categories: 'Categorieën',
  categoryFields: 'Categorievelden',
  attributes: 'Attributen',
  attributeInputType: 'Attribuut-invoertype',
  productAttribute: 'Productattribuut',
  attributeFamily: 'Attribuutfamilie',
  attributeGroups: 'Attribuutgroepen',
  magicAI: 'Magic AI',
  platforms: 'Platforms',
  settingsLabel: 'Instellingen',
  prompts: 'Prompts',
  systemPrompts: 'Systeemprompts',
  dataTransfer: 'Gegevensoverdracht',
  jobTracker: 'Taakvolger',
  import: 'Importeren',
  export: 'Exporteren',
  settings: 'Instellingen',
  locales: 'Talen',
  currencies: 'Valuta\'s',
  channels: 'Kanalen',
  users: 'Gebruikers',
  roles: 'Rollen',
  configurations: 'Configuraties',
  integration: 'Integratie',
  webhooks: 'Webhooks',
  notifications: 'Meldingen',
  aiAgent: 'AI-agent',
  aiAgentChat: 'AI-agent-chat',
  approvalQueue: 'Goedkeuringswachtrij',
  analytics: 'Analyse'
}

const v10Labels = {
  introduction: 'Introductie',
  productTypes: 'Producttypen',
  simpleProduct: 'Eenvoudig product',
  configurableProduct: 'Configureerbaar product',
  categories: 'Categorieën',
  categoryFields: 'Categorievelden',
  attributes: 'Attributen',
  attributeInputType: 'Attribuut-invoertype',
  productAttribute: 'Productattribuut aanmaken',
  attributeFamily: 'Attribuutfamilie',
  attributeGroups: 'Attribuutgroepen',
  dataTransfer: 'Gegevensoverdracht',
  import: 'Importeren',
  export: 'Exporteren',
  settings: 'Instellingen',
  locales: 'Talen',
  currencies: 'Valuta\'s',
  channels: 'Kanalen',
  users: 'Gebruikers',
  roles: 'Rollen',
  configurations: 'Configuraties',
  integration: 'Integratie',
  magicAI: 'Magic AI',
  webhooks: 'Webhooks'
}

export const nl = {
  themeConfig: {
    nav: [
      { text: 'Home', link: `/${prefix}/` },
      { text: 'Dev Doc', link: 'https://devdocs.unopim.com/' },
      { text: 'Extensies Doc', link: 'https://docs-extensions.unopim.com/' }
    ],
    sidebar: {
      [`/${prefix}/1.0/`]: build10(prefix, v10Labels),
      [`/${prefix}/2.0/`]: build20(prefix, v21Labels),
      [`/${prefix}/2.1/`]: build21(prefix, v21Labels)
    },
    editLink: {
      pattern: 'https://github.com/unopim/user-guide/edit/main/src/:path',
      text: 'Help ons deze pagina op GitHub te verbeteren.'
    },
    lastUpdated: { text: 'Laatst bijgewerkt' },
    docFooter: { prev: 'Vorige pagina', next: 'Volgende pagina' },
    outline: { level: 'deep' as const, label: 'Op deze pagina' },
    darkModeSwitchLabel: 'Weergave',
    lightModeSwitchTitle: 'Wissel naar licht thema',
    darkModeSwitchTitle: 'Wissel naar donker thema',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Terug naar boven',
    langMenuLabel: 'Taal wijzigen'
  }
}
