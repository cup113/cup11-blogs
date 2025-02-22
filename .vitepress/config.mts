import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "cup11's blog",
  description: "My personal blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Frontend Tutorial',
        link: '/frontend-tutorial',
        items: [
          {
            text: 'A1. HTML入门', link: '/frontend-tutorial/A1', items: [
              { text: 'A11. 初识网页开发', link: '/frontend-tutorial/A1/A11' },
              { text: 'A12. 元素的基础语法 格式元素', link: '/frontend-tutorial/A1/A12' },
              { text: 'A13. 元素的属性 超链接与图片元素', link: '/frontend-tutorial/A1/A13' },
              { text: 'A14. 元素的嵌套 调试', link: '/frontend-tutorial/A1/A14' },
              { text: 'A15. HTML结构', link: '/frontend-tutorial/A1/A15' },
              { text: 'A16. HTML基础语法', link: '/frontend-tutorial/A1/A16' },
            ], collapsed: false,
          },
          {
            text: 'A2. CSS入门', link: '/frontend-tutorial/A2', items: [
              { text: 'A21. CSS基础语法 长度属性值', link: '/frontend-tutorial/A2/A21' },
              { text: 'A22. 颜色 CSS调试', link: '/frontend-tutorial/A2/A22' },
              { text: 'A23. 盒模型', link: '/frontend-tutorial/A2/A23' },
              { text: 'A24. CSS选择器', link: '/frontend-tutorial/A2/A24' },
              { text: 'A25. CSS常用属性 兼容性', link: '/frontend-tutorial/A2/A25' },
            ], collapsed: false,
          },
          {
            text: 'A3. JavaScript入门', link: '/frontend-tutorial/A3', items: [
              { text: 'A31. 语句 数据类型', link: '/frontend-tutorial/A3/A31' },
              { text: 'A32. 流程控制 函数', link: '/frontend-tutorial/A3/A32' },
              { text: 'A33. 浏览器操作 DOM', link: '/frontend-tutorial/A3/A33' },
              { text: 'A34. 表单', link: '/frontend-tutorial/A3/A34' },
            ], collapsed: false,
          },
          {
            text: 'B1. Web通识及工具', link: '/frontend-tutorial/B1', items: [
              { text: 'B11. 常见标记语言', link: '/frontend-tutorial/B1/B11' },
              { text: 'B12. 网络与社区', link: '/frontend-tutorial/B1/B12' },
            ], collapsed: false,
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cup113' }
    ],

    footer: {
      copyright: 'Copyright © 2025 cup11',
    },

    search: {
      provider: 'local',
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/cube.png' }]
  ],
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    math: true,
  },
})
