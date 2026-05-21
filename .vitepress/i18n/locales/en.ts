// English
import build10 from '../sidebars/v1.0'
import build20 from '../sidebars/v2.0'
import build21 from '../sidebars/v2.1'

const prefix = 'en'

const v21Labels = {
  introduction: 'Introduction',
  whatsNew: "What's New",
  agenticPim: 'Agentic PIM',
  dashboard: 'Dashboard',
  productTypes: 'Product Types',
  simpleProduct: 'Simple Product',
  configurableProduct: 'Configurable Product',
  categories: 'Categories',
  categoryFields: 'Category Fields',
  attributes: 'Attributes',
  attributeInputType: 'Attribute Input Type',
  productAttribute: 'Product Attribute',
  attributeFamily: 'Attribute Family',
  attributeGroups: 'Attribute Groups',
  magicAI: 'Magic AI',
  platforms: 'Platforms',
  settingsLabel: 'Settings',
  prompts: 'Prompts',
  systemPrompts: 'System Prompts',
  dataTransfer: 'Data Transfer',
  jobTracker: 'Job Tracker',
  import: 'Import',
  export: 'Export',
  settings: 'Settings',
  locales: 'Locales',
  currencies: 'Currencies',
  channels: 'Channels',
  users: 'Users',
  roles: 'Roles',
  configurations: 'Configurations',
  integration: 'Integration',
  webhooks: 'Webhooks',
  notifications: 'Notifications',
  aiAgent: 'AI Agent',
  aiAgentChat: 'AI Agent Chat',
  approvalQueue: 'Approval Queue',
  analytics: 'Analytics'
}

const v10Labels = {
  introduction: 'Introduction',
  productTypes: 'Product Types',
  simpleProduct: 'Simple Product',
  configurableProduct: 'Configurable Product',
  categories: 'Categories',
  categoryFields: 'Category Fields',
  attributes: 'Attributes',
  attributeInputType: 'Attribute Input Type',
  productAttribute: 'Create Product Attribute',
  attributeFamily: 'Attribute Family',
  attributeGroups: 'Attribute Groups',
  dataTransfer: 'Data Transfer',
  import: 'Import',
  export: 'Export',
  settings: 'Settings',
  locales: 'Locales',
  currencies: 'Currencies',
  channels: 'Channels',
  users: 'Users',
  roles: 'Roles',
  configurations: 'Configurations',
  integration: 'Integration',
  magicAI: 'Magic AI',
  webhooks: 'Webhooks'
}

export const en = {
  themeConfig: {
    nav: [
      { text: 'Home', link: `/${prefix}/` },
      { text: 'Dev Doc', link: 'https://devdocs.unopim.com/' },
      { text: 'Extensions Doc', link: 'https://docs-extensions.unopim.com/' }
    ],
    sidebar: {
      [`/${prefix}/1.0/`]: build10(prefix, v10Labels),
      [`/${prefix}/2.0/`]: build20(prefix, v21Labels),
      [`/${prefix}/2.1/`]: build21(prefix, v21Labels)
    },
    editLink: {
      pattern: 'https://github.com/unopim/user-guide/edit/main/src/:path',
      text: 'Help us improve this page on Github.'
    },
    lastUpdated: { text: 'Last Updated' },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    outline: { level: 'deep' as const, label: 'On this page' },
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    langMenuLabel: 'Change language'
  }
}
