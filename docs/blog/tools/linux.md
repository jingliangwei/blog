# About Linux

## 自定义软件图标

`Ubuntu 24.04` 的软件图标都以 `**.desktop` 文件的形式保存于路径 `/usr/share/applications`

新建一个 `**.desktop` 文件并输入类似以下参数即可

```
[Desktop Entry]
Name=AstroImageJ
Type=Application
Terminal=false
Exec=/usr/local/bin/astroimagej
Icon=/usr/local/AstroImageJ/astronomy_icon.png
```

## 设置`apt`镜像

`Ubuntu 24.04` 的 `apt` 源的位置替换到了 `/etc/apt/sources.list.d/ubuntu.sources` 中

`sources.list.d` 文件夹里，所有的 `.sources` 文件均会视为一个可选的源

1. 将原始文件备份
```bash:no-line-numbers
sudo mv /etc/apt/sources.list.d/ubuntu.sources  /etc/apt/backup-sources.list.d/ubuntu.sources.bak
```

2. 创建新的源文件
```bash:no-line-numbers
sudo vi /etc/apt/sources.list.d/tuna.sources
```
写入内容：
```
Types: deb
URIs: https://mirrors.tuna.tsinghua.edu.cn/ubuntu/
Suites: noble noble-updates noble-backports
Components: main universe restricted multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

Types: deb
URIs: http://mirrors.tuna.tsinghua.edu.cn/ubuntu/
Suites: noble-security
Components: main universe restricted multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
```

## 查看系统开机时间和运行日志

- 开机时间
```bash:no-line-numbers
systemd-analyze time
```

- 运行日志
```bash:no-line-numbers
sudo dmesg
```

## `.bashrc` 配置

- 简化命令
```bash:no-line-numbers
alias tgpt='/path/to/tgpt-linux-amd64'
```

## 识别外接麦克风

情况： `ubuntu 24.04` 华硕 FX60V 只有一个3.5mm接口，插入耳机后设置里 Sound 只有 Output 能识别到耳机， Input 识别不到耳机麦。

解决： 在文件 `/etc/modprobe.d/alsa-base.conf` 加上
```:no-line-numbers
options snd-hda-intel model=dell-headset-multi
```
