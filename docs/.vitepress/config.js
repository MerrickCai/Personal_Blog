export default {
  //APP配置
  lang: 'en',
  title: 'Sky Ladder',
  description: "Merrick Cai's personal blog",
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/icon16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/icon32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/icon96.png' }],
  ],
  lastUpdated: true,
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true
  },
  //主题配置
  themeConfig: {
    logo: '/img/icon96.png',
    siteTitle: 'Sky Ladder',
    outlineTitle: 'Outline',
    socialLinks: [{ icon: 'github', link: 'https://github.com/MerrickCai' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Merrick Cai'
    },
    lastUpdatedText: 'Updated at',
    docFooter: {
      prev: 'previous post',
      next: 'next post'
    },
    nav: [
      { text: 'Notion Note', link: 'https://merrickcai.notion.site/Front-end-Dev-188e3a07cc988036a524c65fb43d2d06' },
      { text: 'Frontend Dev', link: '/front-end/mark/1', activeMatch: '/front-end/' },
      { text: 'Note', link: '/notes/1', activeMatch: '/notes/' },
      { text: 'About', link: '/about', activeMatch: '/about' },
    ],
    //侧边导航
    sidebar: {
      '/front-end/': [
        {
          text: 'Record',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '网站大全', link: '/front-end/mark/1' },
            { text: '前端开发之路', link: '/front-end/mark/2' },
          ]
        },
        {
          text: 'Reference',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Page Rendering', link: '/front-end/knowledge/4' },
            { text: 'Frontend Routing', link: '/front-end/knowledge/6' },
            { text: 'Frontend Authentication', link: '/front-end/knowledge/7' },
            { text: 'JS Comprehensive', link: '/front-end/knowledge/9' },
            { text: 'Asynchronous Programming', link: '/front-end/knowledge/3' },
            { text: 'JS Objects', link: '/front-end/knowledge/12' },
            { text: 'Web API', link: '/front-end/knowledge/10' }
          ]
        },
      ],
      '/notes/': [
        {
          text: 'Note',
          items: [
            { text: 'C Programming Language', link: '/notes/1' },
            { text: 'Sci-fi', link: '/notes/2' },
            { text: 'Trade', link: '/notes/4' },
            { text: 'ESL', link: '/notes/5' }
          ]
        }
      ]
    }
  }
}