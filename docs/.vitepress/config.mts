import { defineConfig } from 'vitepress'

import {nav} from './configs'
import {sidebar} from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "Blog",
  description: "arwell's blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jingliangwei' }
    ],
    
    outline: {
      level: 'deep',
      label: '页面导航',
    },

    // enable local search
    search: {
      provider: 'local'
    }
  },

  // enable math equation in markdown.
  markdown: {
    math: true,
    // enable line numbers in code part.
    lineNumbers: true
  }
})
