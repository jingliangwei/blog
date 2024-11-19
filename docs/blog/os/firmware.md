# 从固件到操作系统

## 启动磁盘

计算机电源打开后，会先运行写在固件（Firmware）的程序BIOS，
加载电脑里磁盘的前512字节，判断磁盘是否是启动磁盘。
如果这512字节的最后是0x55,0xAA，
则认为是启动磁盘，
把这512个字节加载到内存0x7c00处。

### 验证

#### 生成55aa结尾的512字节流

在`bash`运行如下命令：
```sh
( echo "eb fe 11 22 33 44" | xxd -r -p; \
  cat /dev/zero | head -c 504; \
  echo "55 aa" | xxd -r -p \
) > minimal.img
```
开头的`eb fe`是`jump`命令，
会使程序在0x7c00处一直跳转到0x7c00死循环。

#### 使用qemu启动minimal.img

在`bash`运行：
```sh
qemu-system-x86_64 -monitor stdio minimal.img
```
然后再检验0x7c00处的代码：
```sh
arwell@arwell$ qemu-system-x86_64 -monitor stdio minimal.img 
WARNING: Image format was not specified for 'minimal.img' and probing guessed raw.
         Automatically detecting the format is dangerous for raw images, write operations on block 0 will be restricted.
         Specify the 'raw' format explicitly to remove the restrictions.
QEMU 6.2.0 monitor - type 'help' for more information
(qemu) x/i 0x7c00
0x0000000000007c00:  jmp    0x7c00
```

