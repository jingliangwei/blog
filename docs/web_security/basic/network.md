# 计算机网络基础

## 计算机网络简介

### 计算机网络架构和协议

Internet协议栈（自顶向下）

1. 应用层(application) FTP、HTTP、DNS等协议

2. 传输层(transport) TCP、UDP两种协议

3. 网络层(network) IP、路由

4. 链路层(link)

5. 物理层(physical)

详见[网络通信原理——OSI模型、TCP/IP模型、数据通信原理](https://blog.csdn.net/m0_60643467/article/details/127033531)

### 常见协议解析

#### HTTP

URL(Uniform Resource Locator): `Prot://user:psw@www.someSchool.edu:port/someDept/pic.gif`

HTTP请求报文：(使用BurpSuite抓包)

![http请求报文](./network_fig/http-request1.png)

![http请求报文格式](./network_fig/http-request2.png)

HTTP响应报文：

![http响应报文](./network_fig/http-response1.png)

#### IPv4

主机获得IP:DHCP(Dynamic Host Configuration Protocol)

子网(subnet)

子网掩码(subnet mask)

内网专用IP:

- A类 `10.0.0.0-10.255.255.255`
- B类 `172.16.0.0-172.31.255.255`
- C类 `192.168.0.0-192.168.255.255`

NAT(Network Address Translation)

#### ARP

ARP(Address Resolution Protocol)

把已知IP地址转换为MAC地址。

## 计算机网络安全

### 网络安全防御与攻击技术介绍

查看[【网络安全】15种常见网络攻击类型及防御措施_网络攻防](https://blog.csdn.net/fly_enum/article/details/144088376)

[10大常见网络安全攻击手段及防御方法总结](https://blog.csdn.net/logic1001/article/details/144790427)

### Web漏洞原理与防御

先大致了解有哪些漏洞，后面会逐个详细学习。

SQL注入、XSS(Cross-site Scripting)、CSRF(Cross-site Request Forgery)、SSRF(Server-site Request Forgery)、文件包含、文件上传、文件解析、命令执行、逻辑漏洞、XXE(XML Exteral Injection)、JAVA反序列化等。

详见[web常见漏洞原理，利用，防御（思路](https://blog.csdn.net/weixin_41652128/article/details/88733041)

### 网络攻击

网络安全中攻击方法分为两种：主动攻击和被动攻击。

1. 主动攻击直接影响系统资源

2. 被动攻击更注重收集信息而不干扰系统

DDoS攻击(Distributed Denial of Service Attack) 分布式拒绝服务攻击

CVE漏洞库(Common Vulnerabilities and Exposures) 公开的信息安全领域的已知漏洞和安全风险的数据库，例如[阿里云漏洞库](https://avd.aliyun.com/)
