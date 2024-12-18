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

    sidebar: {
      '/blog/': [
      {
        text: 'arwell\'s blog',
        items: [
          // { text: '首页', link: '/blog/index' }
        ]
      },
      {
        text: 'math',
        collapsed: false,
        items: [
          { text: '正交曲面坐标系', link: '/blog/math/metric' },
          { text: '向量微分算符', link: '/blog/math/nabla' },
          { text: '全反对称三秩张量', link: '/blog/math/antisymmetric_tensor'}
        ]
      },
      {
        text: 'physics',
        collapsed: false,
        items: [
          { text: '电偶极子和磁偶极子', link: '/blog/physics/dipoles' }
        ]
      },
      {
        text: 'tools',
        collapsed: false,
        items: [
          { text: 'python数据处理', link: '/blog/tools/python'},
          { text: 'make的使用', link: '/blog/tools/make'},
          { text: 'git命令', link: '/blog/tools/git'},
          { text: 'wps问题解答', link: '/blog/tools/wps'}
        ]
      },
      {
        text: 'os',
        collapsed: false,
        items: [
          { text: '从固件到操作系统', link: '/blog/os/firmware'}
        ]
      }
    ],

    '/hw/': [
      {
        text: '韦境量\'s作业',
        items: [
          { text: '用python绘制本征函数系拟合图', link: '/hw/fit'}
        ]
      }
    ],

    '/test/': [
      {
        text: 'arwell',
        items: [
          { text: 'python期末考试', link: '/test/py_test'}
        ]
      }
    ]
    },

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
