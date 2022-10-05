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
    themeConfig: {
        logo: '/images/code.png',
        sidebarDepth: 2,
        plugins: [
            ['autobar', { 'pinyinNav': true, "maxLevel": 2 }],
            ['permalink-pinyin'],
            ["rpurl"],
            ['@vuepress/back-to-top'],
            ['@vuepress/search', {
                searchMaxSuggestions: 10
            }],
        ],
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