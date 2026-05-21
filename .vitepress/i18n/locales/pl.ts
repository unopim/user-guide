// Polski
import build10 from '../sidebars/v1.0'
import build20 from '../sidebars/v2.0'
import build21 from '../sidebars/v2.1'

const prefix = 'pl'

const v21Labels = {
  introduction: 'Wprowadzenie',
  whatsNew: 'Co nowego',
  agenticPim: 'Agentic PIM',
  dashboard: 'Pulpit',
  productTypes: 'Typy produktów',
  simpleProduct: 'Produkt prosty',
  configurableProduct: 'Produkt konfigurowalny',
  categories: 'Kategorie',
  categoryFields: 'Pola kategorii',
  attributes: 'Atrybuty',
  attributeInputType: 'Typ wprowadzania atrybutu',
  productAttribute: 'Atrybut produktu',
  attributeFamily: 'Rodzina atrybutów',
  attributeGroups: 'Grupy atrybutów',
  magicAI: 'Magic AI',
  platforms: 'Platformy',
  settingsLabel: 'Ustawienia',
  prompts: 'Prompty',
  systemPrompts: 'Prompty systemowe',
  dataTransfer: 'Transfer danych',
  jobTracker: 'Śledzenie zadań',
  import: 'Import',
  export: 'Eksport',
  settings: 'Ustawienia',
  locales: 'Języki',
  currencies: 'Waluty',
  channels: 'Kanały',
  users: 'Użytkownicy',
  roles: 'Role',
  configurations: 'Konfiguracje',
  integration: 'Integracja',
  webhooks: 'Webhooki',
  notifications: 'Powiadomienia',
  aiAgent: 'Agent AI',
  aiAgentChat: 'Czat Agenta AI',
  approvalQueue: 'Kolejka zatwierdzeń',
  analytics: 'Analityka'
}

const v10Labels = {
  introduction: 'Wprowadzenie',
  productTypes: 'Typy produktów',
  simpleProduct: 'Produkt prosty',
  configurableProduct: 'Produkt konfigurowalny',
  categories: 'Kategorie',
  categoryFields: 'Pola kategorii',
  attributes: 'Atrybuty',
  attributeInputType: 'Typ wprowadzania atrybutu',
  productAttribute: 'Utwórz atrybut produktu',
  attributeFamily: 'Rodzina atrybutów',
  attributeGroups: 'Grupy atrybutów',
  dataTransfer: 'Transfer danych',
  import: 'Import',
  export: 'Eksport',
  settings: 'Ustawienia',
  locales: 'Języki',
  currencies: 'Waluty',
  channels: 'Kanały',
  users: 'Użytkownicy',
  roles: 'Role',
  configurations: 'Konfiguracje',
  integration: 'Integracja',
  magicAI: 'Magic AI',
  webhooks: 'Webhooki'
}

export const pl = {
  themeConfig: {
    nav: [
      { text: 'Strona główna', link: `/${prefix}/` },
      { text: 'Dok. dewelopera', link: 'https://devdocs.unopim.com/' },
      { text: 'Dok. rozszerzeń', link: 'https://docs-extensions.unopim.com/' }
    ],
    sidebar: {
      [`/${prefix}/1.0/`]: build10(prefix, v10Labels),
      [`/${prefix}/2.0/`]: build20(prefix, v21Labels),
      [`/${prefix}/2.1/`]: build21(prefix, v21Labels)
    },
    editLink: {
      pattern: 'https://github.com/unopim/user-guide/edit/main/src/:path',
      text: 'Pomóż nam ulepszyć tę stronę na GitHub.'
    },
    lastUpdated: { text: 'Ostatnia aktualizacja' },
    docFooter: { prev: 'Poprzednia strona', next: 'Następna strona' },
    outline: { level: 'deep' as const, label: 'Na tej stronie' },
    darkModeSwitchLabel: 'Wygląd',
    lightModeSwitchTitle: 'Przełącz na motyw jasny',
    darkModeSwitchTitle: 'Przełącz na motyw ciemny',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Wróć na górę',
    langMenuLabel: 'Zmień język'
  }
}
