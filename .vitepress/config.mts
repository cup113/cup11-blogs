import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
          { text: 'A1. HTML入门', link: '/frontend-tutorial/A1' },
          { text: 'A2. CSS入门', link: '/frontend-tutorial/A2' },
          { text: 'B1. Web通识及工具', link: '/frontend-tutorial/B1' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cup113' }
    ]
  }
})
