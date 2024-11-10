import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "arwell's blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'arwell\'s blog',
        items: [
          { text: 'Markdown Examples', link: '/blog/markdown-examples' },
          { text: 'Runtime API Examples', link: '/blog/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jingliangwei' }
    ]
  }
})
