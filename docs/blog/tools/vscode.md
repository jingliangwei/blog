# vscode 相关设置

在 `linux` 操作系统中， vscode 的设置文件路径为 `~/.config/Code/User/settings.json`

下面记录我使用的额外配置，以便自己查询。

## 键盘输入识别

系统设置了 `esc` 键和 `capslock` 键互换， vscode 需要改为识别按键码才能生效。

```json:no-line-numbers
    "keyboard.dispatch": "keyCode",
```

## vim 插件复制到系统剪切板

```json:no-line-numbers
    "vim.useSystemClipboard": true,
```

## 行号设置

```json:no-line-numbers
    "editor.lineNumbers": "relative",
    "vim.smartRelativeLine": true,
```
