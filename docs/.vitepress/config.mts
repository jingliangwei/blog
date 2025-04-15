import { defineConfig } from 'vitepress'

import {nav} from './configs'
import {sidebar} from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "韦境量",
  description: "arwell's blog",
  head: [
    ['link', { rel: 'icon', href: '/blog/icon.jpg'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.jpg',

    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jingliangwei' }
    ],
    
    outline: {
      level: 'deep',
      label: '页面目录',
    },

    // enable local search
    search: {
      provider: 'local'
    },

    externalLinkIcon: true,
  },

  // enable math equation in markdown.
  markdown: {
    math: true,
    // enable line numbers in code part.
    lineNumbers: true
  }
})
