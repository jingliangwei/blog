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
          { text: '正交曲面坐标系', link: '/blog/math/metric' },
          { text: '向量微分算符', link: '/blog/math/nabla_sphere' }
        ]
      },
      {
        text: 'tools',
        items: [
          { text: 'make的使用', link: '/blog/tools/make'}
        ]
      },
      {
        text: 'os',
        items: [
          { text: '从固件到操作系统', link: '/blog/os/firmware'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jingliangwei' }
    ],
    
    outline: 'deep'
  },

  // enable math equation in markdown.
  markdown: {
    math: true
  }
})
