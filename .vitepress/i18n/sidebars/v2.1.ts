// .vitepress/version-configs/2.1.ts
const version = '2.1'

type Labels = {
  introduction: string
  whatsNew: string
  agenticPim: string
  dashboard: string
  productTypes: string
  simpleProduct: string
  configurableProduct: string
  categories: string
  categoryFields: string
  attributes: string
  attributeInputType: string
  productAttribute: string
  attributeFamily: string
  attributeGroups: string
  magicAI: string
  platforms: string
  settingsLabel: string
  prompts: string
  systemPrompts: string
  dataTransfer: string
  jobTracker: string
  import: string
  export: string
  settings: string
  locales: string
  currencies: string
  channels: string
  users: string
  roles: string
  configurations: string
  integration: string
  webhooks: string
  notifications: string
  aiAgent: string
  aiAgentChat: string
  approvalQueue: string
  analytics: string
}

export default function buildSidebar(localePrefix: string, t: Labels) {
  const prefix = localePrefix ? `/${localePrefix}` : ''

  function items(children: [string, string][]) {
    return children.map(c => ({ text: c[1], link: `${prefix}/${version}/${c[0]}` }))
  }

  return [
    { text: t.introduction, link: `${prefix}/${version}/introduction/` },
    { text: t.whatsNew, link: `${prefix}/${version}/releases/` },
    { text: t.agenticPim, link: `${prefix}/${version}/agenticPim/` },
    { text: t.dashboard, link: `${prefix}/${version}/dashboard/`, items: [] },

    {
      text: t.productTypes,
      link: `${prefix}/${version}/products/`,
      collapsed: false,
      items: items([
        ['products/simple', t.simpleProduct],
        ['products/configurable', t.configurableProduct]
      ])
    },

    { text: t.categories, link: `${prefix}/${version}/category/categories` },
    { text: t.categoryFields, link: `${prefix}/${version}/categoryField/category-fields` },

    {
      text: t.attributes,
      link: `${prefix}/${version}/attribute/`,
      collapsed: false,
      items: items([
        ['attribute/attribute-input', t.attributeInputType],
        ['attribute/product-attribute', t.productAttribute],
        ['attribute/attribute-family', t.attributeFamily],
        ['attribute/attribute-groups', t.attributeGroups]
      ])
    },

    {
      text: t.magicAI,
      link: `${prefix}/${version}/magic/magic-ai`,
      collapsed: false,
      items: items([
        ['magic-ai/platforms', t.platforms],
        ['magic-ai/settings', t.settingsLabel],
        ['magic-ai/prompts', t.prompts],
        ['magic-ai/system-prompts', t.systemPrompts]
      ])
    },

    {
      text: t.dataTransfer,
      link: `${prefix}/${version}/data-transfer/`,
      collapsed: false,
      items: items([
        ['data-transfer/job-tracker', t.jobTracker],
        ['data-transfer/import', t.import],
        ['data-transfer/export', t.export]
      ])
    },

    {
      text: t.settings,
      link: `${prefix}/${version}/settings/`,
      collapsed: false,
      items: items([
        ['settings/locale', t.locales],
        ['settings/currencies', t.currencies],
        ['settings/channels', t.channels],
        ['settings/users', t.users],
        ['settings/roles', t.roles]
      ])
    },

    {
      text: t.configurations,
      link: `${prefix}/${version}/configuration/`,
      collapsed: false,
      items: items([
        ['configuration/integration', t.integration],
        ['configuration/webhooks', t.webhooks]
      ])
    },

    { text: t.notifications, link: `${prefix}/${version}/notifications/` },

    {
      text: t.aiAgent,
      link: `${prefix}/${version}/ai-agent/`,
      collapsed: false,
      items: items([
        ['ai-agent/ai-agent-chat', t.aiAgentChat],
        ['ai-agent/approval-queue', t.approvalQueue],
        ['ai-agent/analytics', t.analytics]
      ])
    }
  ]
}
