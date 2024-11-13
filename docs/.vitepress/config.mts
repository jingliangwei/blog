import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
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
          // { text: '首页', link: '/blog/index' }
        ]
      },
      {
        text: 'math',
        items: [
          { text: '向量微分算符', link: '/blog/nabla_sphere' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jingliangwei' }
    ]
  },

  // enable math equation in markdown.
  markdown: {
    math: true
  }
})
