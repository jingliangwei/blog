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
