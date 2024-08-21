module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'UnoPim User Guide',
    description: 'Unlock the full potential of UnoPim with our comprehensive user guide. Master data enrichment and streamline your information management effortlessly.',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico" }],

        ['script', {}, `
            (function() {
                var script = document.createElement('script');
                script.innerHTML = 'window.chatbotConfig = { url: "https://ask.bagisto.com:5001/chat", logoUrl: "https://docs.krayincrm.com/logoBot.png" };';
                document.head.appendChild(script);
            })();
        `],
        // ['script', { src: 'https://vikastiwari-webkul.github.io/ai-chatbot/chatbot.js', async: true }]
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        repo: 'unopim/user-guide',
        repoLabel: 'Contribute to UnoPim',
        docsRepo: 'UnoPim/laravel-crm-docs',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',
        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
        ],
        sidebar: {
            '/1.0/': require('./version-configs/1.0')
        }
    },
    markdown: {
        lineNumbers: false
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};
