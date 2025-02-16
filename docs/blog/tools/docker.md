# docker 的使用

## docker 常用命令

linux系统Docker服务

```sh
sudo systemctl start docker
sudo systemctl stop docker
sudo systemctl status docker
```

列出常用的 `docker` 命令：

```sh
docker images
docker pull <image-name>
docker run -it --name <container-name> <image-name> bash
docker ps [-a]
docker start <container-name>
docker stop <container-name>
docker exec -it <container-name> bash
docker rm <container-name>
docker cp <local-file-path> <container-id>:<file-path>
docker build -f <Dockerfile-name> -t <image-name>:<image-label> .
docker tag <old-image>:<old-image-label> <new-image>:<new-image-label>
```

其中 `docker run` 的参数如下：

| 参数 | 含义 |
|:---:|:---:|
| `docker run -d <image>` | 后台运行容器 |
| `docker run -it <image>` | 交互式运行容器 |
| `docker run --name <container-name> <image>` | 分配容器名字 |
| `docker run -p <host-port>:<container-port> <image>` | 端口映射 |
| `docker run -v <host-path>:<container-path> <image>` | 挂载卷 |
| `docker run --rm <image>` | 容器停止后自动删除容器 |

## 使用 docker 部署 php5.6

1. 拉取php5.6-cli镜像

```sh
docker pull php:5.6-cli
```

2. 在宿主机工作目录运行容器

```sh
docker -it --rm \
       --name php-5.6-server \
       -p 8000:8000 \
       -v $(pwd):/var/www/html php:5.6-cli bash
```

此时会进入容器的终端，容器内有 php5.6 的环境，并且宿主机的当前路径已经挂载在容器内的 `/var/www/html` 路径，通过 `cd /var/www/html` 然后 `php -S 0.0.0.0:8000` 即可。

