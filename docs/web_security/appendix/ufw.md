# `Linux`下`ufw`的使用

记录一些常用的防火墙`ufw`的使用命令。

1. 启动和关闭防火墙

```sh
ufw enable
```
```sh
ufw disable
```

2. 查看防火墙状态

```sh
ufw status
```
```sh
ufw status verbose
```
```sh
ufw status numbered
```

3. 添加规则

```sh
ufw allow from <ip> to any port <port-number>
```

4. 删除规则

```sh
ufw delete <rule-number>
```
