export default {
  //APP配置
  lang: 'zh-Hans',
  title: '天梯',
  description: '菜菜的个人博客',
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
    siteTitle: '天梯',
    outlineTitle: '目录',
    socialLinks: [{ icon: 'github', link: 'https://github.com/Merrick-C' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present 菜菜'
    },
    lastUpdatedText: '更新于',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    nav: [
      { text: '前端开发', link: '/front-end/mark/1', activeMatch: '/front-end/' },
      { text: '笔记', link: '/notes/1', activeMatch: '/notes/' },
      { text: '关于', link: '/about', activeMatch: '/about' },
    ],
    //侧边导航
    sidebar: {
      '/front-end/': [
        {
          text: '记录',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '网站大全', link: '/front-end/mark/1' },
            { text: '前端开发之路', link: '/front-end/mark/2' },
            { text: '问卷易', link: '/front-end/mark/3' },
            { text: 'SEATTA', link: '/front-end/mark/4' },
          ]
        },
        {
          text: '知识点',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Git命令', link: '/front-end/knowledge/1' },
            { text: '网络请求', link: '/front-end/knowledge/2' },
            { text: '异步编程', link: '/front-end/knowledge/3' },
            { text: '页面渲染', link: '/front-end/knowledge/4' },
            { text: '模块化', link: '/front-end/knowledge/5' },
            { text: '前端路由', link: '/front-end/knowledge/6' },
            { text: '前端鉴权', link: '/front-end/knowledge/7' },
            { text: 'CSS', link: '/front-end/knowledge/8' },
            { text: 'JS综合', link: '/front-end/knowledge/9' },
            { text: 'Web API', link: '/front-end/knowledge/10' },
            { text: '样式兼容', link: '/front-end/knowledge/11' },
            { text: 'JS对象', link: '/front-end/knowledge/12' },
            { text: 'npm依赖', link: '/front-end/knowledge/13' },
          ]
        },
      ],
      '/notes/': [
        {
          text: '笔记',
          items: [
            { text: 'C语言', link: '/notes/1' },
            { text: '科幻', link: '/notes/2' },
            { text: '个人成长', link: '/notes/3' },
            { text: '交易', link: '/notes/4' },
            { text: '外语学习', link: '/notes/5' }
          ]
        }
      ]
    }
  }
}