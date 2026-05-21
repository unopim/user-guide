// Deutsch
import build10 from '../sidebars/v1.0'
import build20 from '../sidebars/v2.0'
import build21 from '../sidebars/v2.1'

const prefix = 'de'

const v21Labels = {
  introduction: 'Einführung',
  whatsNew: 'Neuigkeiten',
  agenticPim: 'Agentic PIM',
  dashboard: 'Dashboard',
  productTypes: 'Produkttypen',
  simpleProduct: 'Einfaches Produkt',
  configurableProduct: 'Konfigurierbares Produkt',
  categories: 'Kategorien',
  categoryFields: 'Kategoriefelder',
  attributes: 'Attribute',
  attributeInputType: 'Attribut-Eingabetyp',
  productAttribute: 'Produktattribut',
  attributeFamily: 'Attributfamilie',
  attributeGroups: 'Attributgruppen',
  magicAI: 'Magic AI',
  platforms: 'Plattformen',
  settingsLabel: 'Einstellungen',
  prompts: 'Prompts',
  systemPrompts: 'System-Prompts',
  dataTransfer: 'Datenübertragung',
  jobTracker: 'Job-Tracker',
  import: 'Import',
  export: 'Export',
  settings: 'Einstellungen',
  locales: 'Sprachen',
  currencies: 'Währungen',
  channels: 'Kanäle',
  users: 'Benutzer',
  roles: 'Rollen',
  configurations: 'Konfigurationen',
  integration: 'Integration',
  webhooks: 'Webhooks',
  notifications: 'Benachrichtigungen',
  aiAgent: 'KI-Agent',
  aiAgentChat: 'KI-Agent-Chat',
  approvalQueue: 'Genehmigungs-Warteschlange',
  analytics: 'Analytik'
}

const v10Labels = {
  introduction: 'Einführung',
  productTypes: 'Produkttypen',
  simpleProduct: 'Einfaches Produkt',
  configurableProduct: 'Konfigurierbares Produkt',
  categories: 'Kategorien',
  categoryFields: 'Kategoriefelder',
  attributes: 'Attribute',
  attributeInputType: 'Attribut-Eingabetyp',
  productAttribute: 'Produktattribut erstellen',
  attributeFamily: 'Attributfamilie',
  attributeGroups: 'Attributgruppen',
  dataTransfer: 'Datenübertragung',
  import: 'Import',
  export: 'Export',
  settings: 'Einstellungen',
  locales: 'Sprachen',
  currencies: 'Währungen',
  channels: 'Kanäle',
  users: 'Benutzer',
  roles: 'Rollen',
  configurations: 'Konfigurationen',
  integration: 'Integration',
  magicAI: 'Magic AI',
  webhooks: 'Webhooks'
}

export const de = {
  themeConfig: {
    nav: [
      { text: 'Startseite', link: `/${prefix}/` },
      { text: 'Entwicklerdokumentation', link: 'https://devdocs.unopim.com/' },
      { text: 'Erweiterungen', link: 'https://docs-extensions.unopim.com/' }
    ],
    sidebar: {
      [`/${prefix}/1.0/`]: build10(prefix, v10Labels),
      [`/${prefix}/2.0/`]: build20(prefix, v21Labels),
      [`/${prefix}/2.1/`]: build21(prefix, v21Labels)
    },
    editLink: {
      pattern: 'https://github.com/unopim/user-guide/edit/main/src/:path',
      text: 'Helfen Sie uns, diese Seite auf GitHub zu verbessern.'
    },
    lastUpdated: { text: 'Zuletzt aktualisiert' },
    docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
    outline: { level: 'deep' as const, label: 'Auf dieser Seite' },
    darkModeSwitchLabel: 'Darstellung',
    lightModeSwitchTitle: 'Zum hellen Design wechseln',
    darkModeSwitchTitle: 'Zum dunklen Design wechseln',
    sidebarMenuLabel: 'Menü',
    returnToTopLabel: 'Nach oben',
    langMenuLabel: 'Sprache ändern'
  }
}
