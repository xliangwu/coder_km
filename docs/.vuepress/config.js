const getConfig = require("vuepress-bar");
const { nav, sidebar } = getConfig();

module.exports = {
    title: '代码驱动科技',
    description: '编程知识体系梳理和总结',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    base: '/',
    markdown: {
        lineNumbers: true
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', {
            selector: '.theme-default-content :not(a) > img',
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16,
                scrollOffset: 50,
            }
        }],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],
        ['@vuepress/search', {
            searchMaxSuggestions: 10,
            search: true,
        }],
        ['@vssue/vuepress-plugin-vssue', {
            platform: 'github',
            owner: 'xliangwu',
            repo: 'coder_km',
            clientId: '5890b016f86cb83a7e3b',
            clientSecret: '2f9a25db8e2e161d19e5fca0b69486a0544de7bd',
            autoCreateIssue: true
        }],
    ],
    themeConfig: {
        logo: '/images/code.png',
        lastUpdated: 'Last Updated',
        sidebarDepth: 2,
        nav: [
            { text: '主页', link: '/' },
            ...nav,
            { text: '博客', link: 'http://blog.nowcode.cn/' },
            { text: '关于我', link: '/about' },
            {
                text: 'GitHub',
                link: 'https://github.com/xliangwu/coder_km'
            },
        ],
        sidebar
    }
};