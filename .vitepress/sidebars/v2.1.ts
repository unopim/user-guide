// .vitepress/sidebars/v2.1.ts
const version = '2.1'

export default [
  { text: 'Introduction', link: `/${version}/introduction/` },
  { text: "What's New", link: `/${version}/releases/` },
  { text: 'Agentic PIM', link: `/${version}/agenticPim/` },
  { text: 'Dashboard', link: `/${version}/dashboard/`, items: [] },

  {
    text: 'Product Types',
    link: `/${version}/products/`,
    collapsed: false,
    items: [
      { text: 'Simple Product', link: `/${version}/products/simple` },
      { text: 'Configurable Product', link: `/${version}/products/configurable` }
    ]
  },

  { text: 'Categories', link: `/${version}/category/categories` },
  { text: 'Category Fields', link: `/${version}/categoryField/category-fields` },

  {
    text: 'Attributes',
    link: `/${version}/attribute/`,
    collapsed: false,
    items: [
      { text: 'Attribute Input Type', link: `/${version}/attribute/attribute-input` },
      { text: 'Product Attribute', link: `/${version}/attribute/product-attribute` },
      { text: 'Attribute Family', link: `/${version}/attribute/attribute-family` },
      { text: 'Attribute Groups', link: `/${version}/attribute/attribute-groups` }
    ]
  },

  {
    text: 'Magic AI',
    link: `/${version}/magic/magic-ai`,
    collapsed: false,
    items: [
      { text: 'Platforms', link: `/${version}/magic-ai/platforms` },
      { text: 'Settings', link: `/${version}/magic-ai/settings` },
      { text: 'Prompts', link: `/${version}/magic-ai/prompts` },
      { text: 'System Prompts', link: `/${version}/magic-ai/system-prompts` }
    ]
  },

  {
    text: 'Data Transfer',
    link: `/${version}/data-transfer/`,
    collapsed: false,
    items: [
      { text: 'Job Tracker', link: `/${version}/data-transfer/job-tracker` },
      { text: 'Import', link: `/${version}/data-transfer/import` },
      { text: 'Export', link: `/${version}/data-transfer/export` }
    ]
  },

  {
    text: 'Settings',
    link: `/${version}/settings/`,
    collapsed: false,
    items: [
      { text: 'Locales', link: `/${version}/settings/locale` },
      { text: 'Currencies', link: `/${version}/settings/currencies` },
      { text: 'Channels', link: `/${version}/settings/channels` },
      { text: 'Users', link: `/${version}/settings/users` },
      { text: 'Roles', link: `/${version}/settings/roles` }
    ]
  },

  {
    text: 'Configurations',
    link: `/${version}/configuration/`,
    collapsed: false,
    items: [
      { text: 'Integration', link: `/${version}/configuration/integration` },
      { text: 'Webhooks', link: `/${version}/configuration/webhooks` }
    ]
  },

  { text: 'Notifications', link: `/${version}/notifications/` },

  {
    text: 'AI Agent',
    link: `/${version}/ai-agent/`,
    collapsed: false,
    items: [
      { text: 'AI Agent Chat', link: `/${version}/ai-agent/ai-agent-chat` },
      { text: 'Approval Queue', link: `/${version}/ai-agent/approval-queue` },
      { text: 'Analytics', link: `/${version}/ai-agent/analytics` }
    ]
  }
]
