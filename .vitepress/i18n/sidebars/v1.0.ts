// .vitepress/version-configs/1.0.ts
const version = '1.0'

type Labels = {
  introduction: string
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
  dataTransfer: string
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
  magicAI: string
  webhooks: string
}

export default function buildSidebar(localePrefix: string, t: Labels) {
  const prefix = localePrefix ? `/${localePrefix}` : ''

  function items(children: [string, string][]) {
    return children.map(c => ({ text: c[1], link: `${prefix}/${version}/${c[0]}` }))
  }

  return [
    { text: t.introduction, link: `${prefix}/${version}/introduction/introductions` },

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
      text: t.dataTransfer,
      link: `${prefix}/${version}/data-transfer/`,
      collapsed: false,
      items: items([
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
        ['configuration/magic-ai', t.magicAI],
        ['configuration/webhooks', t.webhooks]
      ])
    },

    { text: t.magicAI, link: `${prefix}/${version}/magic/magic-ai` }
  ]
}
