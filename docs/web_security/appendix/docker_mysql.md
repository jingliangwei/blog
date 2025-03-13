# docker 安装 mysql

实现把日志文件保留在主机，在容器内运行 `mysql` 服务。

## 创建挂载目录

在主机创建保存容器内 `mysql` 配置的目录

```sh
sudo mkdir -p /data/docker/mysql/config
```

## 准备配置文件

新建文件 `/data/docker/mysql/config/my.cnf` 如下：

```
[mysqld]
# 设置3306端口
port=3306
# 允许最大连接数
max_connections=1000
# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=100
# 服务端使用的字符集默认为UTF8
character-set-server=utf8mb4
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
#是否对sql语句大小写敏感，1表示不敏感
lower_case_table_names = 1
#MySQL连接闲置超过一定时间后(单位：秒)将会被强行关闭
#MySQL默认的wait_timeout  值为8个小时, interactive_timeout参数需要同时配置才能生效
interactive_timeout = 1800
wait_timeout = 1800
#Metadata Lock最大时长（秒）， 一般用于控制 alter操作的最大时长sine mysql5.6
#执行 DML操作时除了增加innodb事务锁外还增加Metadata Lock，其他alter（DDL）session将阻塞
lock_wait_timeout = 3600
#内部内存临时表的最大值。
#比如大数据量的group by ,order by时可能用到临时表，
#超过了这个值将写入磁盘，系统IO压力增大
tmp_table_size = 64M
max_heap_table_size = 64M
 
# === 日志相关 ===
## >>> 错误日志
# 错误日志存放文件，默认 datadir 目录下
log_error=/var/log/mysql/log-error.log
# 开启事务中所有死锁的InnoDB信息记录在错误日志中
innodb_print_all_deadlocks=ON
## >>> 二进制日志
# 二进制日志文件基础名称以及路径，默认 datadir 目录下
log_bin=/var/log/mysql/log-bin
## >>> 慢查询日志
# 开启慢查询日志，默认OFF，建议开发和测试环境开启
slow_query_log=ON
# 慢查询日志文件位置
slow_query_log_file=/var/log/mysql/log-slow.log
# 慢查询时间阈值，默认10，单位：秒
long_query_time=10
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8mb4
```

文件 `/data/docker/mysql/docker-compose.yml` 如下：

```yml
version: '3'
 
services:
  mysql:
    image: mysql:8.0.40
    container_name: mysql
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: root@123
      TZ: Asia/Shanghai
    volumes:
      - /data/docker/mysql/data:/var/lib/mysql
      - /data/docker/mysql/config:/etc/mysql/conf.d
      - /data/docker/mysql/log:/var/log/mysql
    privileged: true
    network_mode: "bridge"
```

## 启动容器

通过命令

```sh
docker-compose -f /data/docker/mysql/docker-compose.yml up -d
```

启动容器中的 `mysql`

可以通过命令

```sh
docker exec -it mysql bash
```

进入容器的命令行

