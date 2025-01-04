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
          { text: '全反对称三秩张量', link: '/blog/math/antisymmetric_tensor'},
          { text: '概统', link: 'blog/math/probability_and_mathematical_statistics'},
          { text: '概率论中的特征函数', link: 'blog/math/characteristic_function'}
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
      }
    ],

    '/hw/': [
      {
        text: '韦境量\'s作业',
        items: [
          { text: '用python绘制本征函数系拟合图', link: '/hw/fit'},
          { text: 'delta函数展开', link: '/hw/fit_delta'}
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
    ],

    '/web_security/': [
      {
        text: 'arwell',
        items: [
          { text: '首页', link: '/web_security/index'}
        ]
      },
      {
        text: '基础入门',
        collapsed: false,
        items: [
          { text: '网络安全导论', link: '/web_security/basic/intro' },
          { text: '渗透测试基础', link: '/web_security/basic/penetration_testing'},
          { text: '计算机网络基础', link: '/web_security/basic/network'},
          { text: '操作系统基础', link: '/web_security/basic/operating_system'},
          { text: 'Web基础', link: '/web_security/basic/web'},
          { text: '数据库基础', link: '/web_security/basic/databases'},
          { text: 'php编程基础', link: '/web_security/basic/php'}
        ]
      },
      {
        text: '技术进阶',
        collapsed: false,
        items: [
          { text: '弱口令与口令爆破', link: '/web_security/vulnerability/weak_password'}
        ]
      },
      {
        text: '附录',
        collapsed: false,
        items: [
          { text: 'ifconfig', link: '/web_security/appendix/ifconfig'},
          { text: 'win靶机配置', link: '/web_security/appendix/install_win'}
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
