/* configs/sidebar.ts */
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/blog/': [
  {
    text: 'arwell\'s notes', link: '/blog/index',
  },
  {
    text: 'math',
    collapsed: false,
    items: [
      // { text: '正交曲面坐标系', link: '/blog/math/metric' },
      // { text: '向量微分算符', link: '/blog/math/nabla' },
      // { text: '全反对称三秩张量', link: '/blog/math/antisymmetric_tensor'},
      { text: '矢量运算和基础场论', link: '/blog/math/vector_field'},
      { text: '概率论与数理统计', link: '/blog/math/probability_and_mathematical_statistics'},
      { text: '概率论中的特征函数', link: '/blog/math/characteristic_function'},
      { text: '傅里叶变换', link: '/blog/math/fourier_transform'}
    ]
  },
  {
    text: 'physics',
    collapsed: false,
    items: [
      { text: '电偶极子和磁偶极子', link: '/blog/physics/dipoles' },
      { text: '接地问题', link: '/blog/physics/earthing'},
      { text: '光学', link: '/blog/physics/optics'},
      { text: '原子物理', link: '/blog/physics/atom'},
      { text: '理论力学', link: '/blog/physics/analytial_mechanics'},
      { text: '天体物理流体力学', link: '/blog/physics/astro_fluid'},
      // { text: '流体力学', link: '/blog/physics/fluid'}
    ]
  },
  {
    text: 'astronomy',
    collapsed: false,
    items: [
      { text: '天体测量基础', link: '/blog/astronomy/measurement'},
      { text: 'JPL星表', link: '/blog/astronomy/jpl'},
      { text: '儒略日和公历', link: '/blog/astronomy/jd'},
      { text: '天文数据处理', link: '/blog/astronomy/data_processing'}
    ]
  },
  {
    text: 'tools',
    collapsed: true,
    items: [
      { text: 'python数据处理', link: '/blog/tools/python'},
      { text: 'python虚拟环境', link: '/blog/tools/python-venv'},
      { text: 'matlab的使用', link: '/blog/tools/matlab'},
      { text: 'make的使用', link: '/blog/tools/make'},
      { text: 'git命令', link: '/blog/tools/git'},
      { text: 'docker命令', link: '/blog/tools/docker'},
      { text: 'yazi的使用', link: '/blog/tools/yazi'},
      { text: 'vimium的使用', link: '/blog/tools/vimium'},
      { text: 'vscode的使用', link: '/blog/tools/vscode'},
      { text: 'wps问题解答', link: '/blog/tools/wps'}
    ]
  }
],

'/hw/': [
  {
    text: '韦境量\'s作业',
  },
  {
    text: '数学物理方法',
    items: [
      { text: '用python绘制本征函数系拟合图', link: '/hw/math/fit'},
      { text: 'delta函数展开', link: '/hw/math/fit_delta'}
    ]
  },
  {
    text: '天文数据处理',
    items: [
      { text: '作业1', link: '/hw/data_process/hw1'},
      { text: '作业2', link: '/hw/data_process/hw2'}
    ]
  },
  {
    text: '天体测量基础',
    items: [
      { text: '作业1', link: '/hw/astro_meansure/hw1'},
      { text: '作业2', link: '/hw/astro_meansure/hw2'}
    ]
  }
],

'/exam/': [
  {
    text: 'arwell',
    items: [
      { text: 'python期末考试', link: '/exam/py_exam'}
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
      { text: '弱口令与口令爆破', link: '/web_security/vulnerability/weak_password'},
      { text: 'XSS漏洞', link: 'web_security/vulnerability/xss'},
      { text: 'CSRF漏洞', link: 'web_security/vulnerability/csrf'},
      { text: 'SSRF漏洞', link: 'web_security/vulnerability/ssrf'},
      { text: 'XXE漏洞', link: 'web_security/vulnerability/xxe'},
      { text: 'Python', link: 'web_security/vulnerability/python'},
      { text: 'sql注入', link: 'web_security/vulnerability/sql'}
    ]
  },
  {
    text: '附录',
    collapsed: false,
    items: [
      { text: 'ifconfig', link: '/web_security/appendix/ifconfig'},
      { text: 'win靶机配置', link: '/web_security/appendix/install_win'},
      { text: 'ufw命令', link: '/web_security/appendix/ufw'},
      { text: 'docker安装kali', link: 'web_security/appendix/docker_kali'},
      { text: 'docker安装mysql', link: 'web_security/appendix/docker_mysql'}
    ]
  }
]
} 
