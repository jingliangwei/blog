/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  // { text: 'Home', link: '/' },
  {
    text: '站点导航',
    items: [
      // { text: 'blog', link: '/'},
      { text: '笔记', link: '/blog/'},
      { text: '作业', link: '/hw/'},
      { text: '考试', link: '/exam/'},
      { text: '报告', link: '/lecture/'}
    ]
  }
]
