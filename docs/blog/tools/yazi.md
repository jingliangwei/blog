# 终端文件资源管理 yazi

详见官网 [yazi](https://yazi-rs.github.io/)

## 安装

我在 Ubuntu22.04 上采用[从源码构建的方式](https://yazi-rs.github.io/docs/installation#source)安装 yazi 

由于网络问题，[rustup](https://rustup.rs/) 官网提供的安装脚本无法下载，
于是我利用 `docker pull rust` 来获取最新的 `rust` 环境来进行构建。

::: info 终端图标出现乱码
yazi 采用了特殊的 Unicode 符号来标识各类文件，需要终端使用的字体包含正确的字形才能正常显示。

官方推荐使用 `nerd-fonts` 字体，可以从 [Nerd Fonts project](https://www.nerdfonts.com/) 获得。
:::

## 使用

记录常用的操作：

- 光标移动：同 vim `(h,j,k,l,gg,G)`
- 文件操作：同 vim `(d,x,c,p,v)`
- 重命名： `r`
- 查看详细信息： `tab`
- 打开： `o,[Enter]`
- 显示，隐藏文件： `.`
- 复制信息： `c`
- 文件排序： `,`
- 多标签页： `t`
- 选择标签页： `1,2,3,... or [,]`
- 关闭标签页： `ctrl+c`
- 添加文件、文件夹： `a`
