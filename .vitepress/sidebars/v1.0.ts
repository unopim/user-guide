// .vitepress/sidebars/v1.0.ts
const version = '1.0'

export default [
  { text: 'Introduction', link: `/${version}/introduction/introductions` },

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
      { text: 'Create Product Attribute', link: `/${version}/attribute/product-attribute` },
      { text: 'Attribute Family', link: `/${version}/attribute/attribute-family` },
      { text: 'Attribute Groups', link: `/${version}/attribute/attribute-groups` }
    ]
  },

  {
    text: 'Data Transfer',
    link: `/${version}/data-transfer/`,
    collapsed: false,
    items: [
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
      { text: 'Magic AI', link: `/${version}/configuration/magic-ai` },
      { text: 'Webhooks', link: `/${version}/configuration/webhooks` }
    ]
  },

  { text: 'Magic AI', link: `/${version}/magic/magic-ai` }
]
