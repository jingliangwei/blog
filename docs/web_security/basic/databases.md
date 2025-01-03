# 数据库基础

## 数据库简介

数据库(databases)、数据表(table)、数据行(row)、字段(field)

可以对数据进行增、删、查、改操作。

| | |
|:--:|:--:|
|传统型/关系型/SQL数据库|MySQL、Oracle、SQL Server|
|非关系型/NoSQL数据库|Mongodb|

## SQL语言基础

详细的介绍查看[菜鸟教程](https://www.runoob.com/sql/sql-tutorial.html)

常用的命令如下：

| 命令 | 用途 |
|:---:|:---:|
|`SELECT <column/*> FROM <table-name> WHERE <condition>`|从数据表查询某列/每列满足条件的数据|

## MySQL的使用

在`Ubuntu`上安装使用`mysql`

| 命令 | 用途 |
|:---:|:---:|
|`sudo systemctl status mysql`| 查看`mysql`启动状态 |
|`sudo systemctl start mysql`|启动`mysql`服务|
|`sudo systemctl stop mysql`|关闭`mysql`服务|
|`sudo mysql`|以管理员身份进入`mysql`命令行|
|`mysql -u <user-name> -p`|使用密码以某用户身份进入`mysql`命令行|

进入`mysql`命令行后，查看和处理数据库的命令如下：

基础的查看、创建和删除数据库和数据表：

```sh
# 查看数据库
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)
# 创建数据库
mysql> CREATE DATABASE test_database;
Query OK, 1 row affected (0.01 sec)

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| test_database      |
+--------------------+
5 rows in set (0.00 sec)
# 查看数据库内的数据表
mysql> USE test_database;
Database changed

mysql> SHOW TABLES;
Empty set (0.00 sec)
# 创建数据表
mysql> CREATE TABLE students (
    -> id INT AUTO_INCREMENT PRIMARY KEY,
    -> name VARCHAR(100),
    -> age INT
    -> );
Query OK, 0 rows affected (0.04 sec)

mysql> SHOW TABLES;
+-------------------------+
| Tables_in_test_database |
+-------------------------+
| students                |
+-------------------------+
1 row in set (0.00 sec)
# 向数据表内添加数据
mysql> INSERT INTO students (name, age)
    -> VALUES ('Alice', 30);
Query OK, 1 row affected (0.00 sec)

mysql> SELECT * FROM students;
+----+-------+------+
| id | name  | age  |
+----+-------+------+
|  1 | Alice |   30 |
+----+-------+------+
1 row in set (0.00 sec)
# 删除数据表、数据库
mysql> DROP TABLE students;
Query OK, 0 rows affected (0.02 sec)

mysql> SHOW TABLES;
Empty set (0.00 sec)

mysql> DROP DATABASE test_database;
Query OK, 0 rows affected (0.00 sec)

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)
```

添加本地用户，设置密码和权限：

```sql
CREATE USER 'user-name'@'localhost' IDENTIFIED BY 'password';
```
```sql
GRANT ALL PRIVILEGES ON <database-name>.* TO 'user-name'@'localhost';
```

## 数据库加固

参考[【史上最全】MySQL数据库安全加固方案](https://blog.csdn.net/sophiasofia/article/details/135997657)
