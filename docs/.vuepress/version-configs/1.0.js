/* set version */
let version = '1.0';

/* version prefix setter */
function setVersionPrefix(children) {
    if (children.constructor === Array) {
        return children.map(child => {
            child[0] = `/${version}/${child[0]}`;
            return child;
        });
    }
    return `/${version}/${children}`;
}

/* module export */
module.exports = [
    [setVersionPrefix('introduction/introductions'), 'Introduction'],

    {
        title: 'Product Types',
        path: setVersionPrefix('products'),
        collapsable: true,
        children: setVersionPrefix([
            ['products/simple', 'Simple Product'],
            ['products/configurable', 'Configurable Product'],
        ])
    },
   
    [setVersionPrefix('category/categories'), 'Categories'],

    [setVersionPrefix('categoryField/category-fields'), 'Category Fields'],

    {
        title: 'Attributes',
        path: setVersionPrefix('attribute'),
        collapsable: true,
        children: setVersionPrefix([
            ['attribute/attribute-input', 'Attribute Input Type'],
            ['attribute/product-attribute', 'Create Product Attribute'],
            ['attribute/attribute-family', 'Attribute Family'],
            ['attribute/attribute-groups', 'Attribute Groups'],
        ])
    },

    {
        title: 'Data Transfer',
        path: setVersionPrefix('data-transfer'),
        collapsable: true,
        children: setVersionPrefix([
            ['data-transfer/import', 'Import'],
            ['data-transfer/export', 'Export'],
        ])
    },

    {
        title: 'Settings',
        path: setVersionPrefix('settings'),
        collapsable: true,
        children: setVersionPrefix([
            ['settings/locale', 'Locales'],
            ['settings/currencies', 'Currencies'],
            ['settings/channels', 'Channels'],
            ['settings/users', 'Users'],
            ['settings/roles', 'Roles'],
        ])
    },

    {
        title: 'Configurations',
        path: setVersionPrefix('configuration'),
        collapsable: true,
        children: setVersionPrefix([
            ['configuration/integration', 'Integration'],
            ['configuration/magic-ai', 'Magic AI'],
        ])
    },

    [setVersionPrefix('magic/magic-ai'), 'Magic AI'],  

]
