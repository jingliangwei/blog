# Make的使用

在需要一次性执行多条命令时，
可以使用Make工具简化命令。

## 基础使用规则

在项目根目录新建一个`Makefile`文件，
内容的规则如下：
```Makefile
target : dependencies
    action commands
```

具体的例子：

在根目录下有一个C源代码和一个`Makefile`文件，
文件结构如下：
```
.
├── main.c
└── Makefile
```

其中C源代码内容如下：
```C
#include <stdio.h>
int main() {
    printf("hello, make\n");
    return 0;
}
```

`Makefile`文件内容如下：
```Makefile
hello : main.c
	gcc main.c -o hello
```
::: warning
注意在`Makefile`文件第二行缩进必须用`tab`进行缩进，不能用空格代替，否则会报错。
使用空格的报错信息如下：`Makefile:2: *** missing separator. Stop.`。
:::

在终端运行 `make` 命令则等价于运行 `gcc main.c -o hello`
```bash
arwell@arwell$ make
gcc main.c -o hello
arwell@arwell$ ls
hello  main.c  Makefile
```

## 多个生成目标文件

将`Makefile`文件改为如下内容：
```Makefile
hello : main.c
    gcc main.c -o hello

hello2 : main.c
    gcc main.c -o hello2
```

在终端运行 `make` + 目标文件名即可执行对应的命令。

```bash
arwell@arwell$ ls
main.c  Makefile
arwell@arwell$ make hello
gcc main.c -o hello
arwell@arwell$ ls
hello  main.c  Makefile
arwell@arwell$ make hello2
gcc main.c -o hello2
arwell@arwell$ ls
hello  hello2  main.c  Makefile
```

## 伪目标（.PHONY）

有一些不生成目标文件的命令，
比如打包、清理多余文件等，
可以使用伪目标。

### clean

例如把`Makefile`文件内容改为如下内容，
可以实现清理文件的作用。

```Makefile
hello : main.c
	gcc main.c -o hello

hello2 : main.c 
	gcc main.c -o hello2

clean : 
	rm -f hello hello2
```

在终端中运行 `make clean`即可。
```bash
arwell@arwell$ ls
hello  hello2  main.c  Makefile
arwell@arwell$ make clean
rm -f hello hello2
arwell@arwell$ ls
main.c  Makefile
```

### all

把 `Makefile` 文件内容改为如下内容，
可以实现一条命令生成多个目标文件。
```Makefile
all : hello hello2
	echo "all done."

hello : main.c
	gcc main.c -o hello

hello2 : main.c 
	gcc main.c -o hello2

clean : 
	rm -f hello hello2
```

在终端运行 `make all` 
```bash
arwell@arwell$ ls
main.c  Makefile
arwell@arwell$ make all
gcc main.c -o hello
gcc main.c -o hello2
echo "all done."
all done.
arwell@arwell$ ls
hello  hello2  main.c  Makefile
```
:::tip
在定义了伪目标`all`之后，直接运行`make`跟`make all`是等效的。
:::

:::tip
在`make`命令后加一个`-s`参数可以不在终端显示执行的命令；
在`make`命令后加一个`-n`参数可以只显示要执行的命令但是不执行。
:::

:::tip
如果在`Makefile`某条命令前加一个`@`可以在执行时不打印这一条命令。
例如：
```Makefile
all : hello hello2
	@echo "all done."

hello : main.c
	gcc main.c -o hello

hello2 : main.c 
	gcc main.c -o hello2

clean : 
	rm -f hello hello2
```
:::

:::tip
如果工作目录里有命名为`clean`、`all`等的文件，
执行`make clean/all`命令无法正常工作，
在`Makefile`第一行声明伪目标即可。
```Makefile
.PHONY: clean all

all : hello hello2
	echo "all done."

hello : main.c
	gcc main.c -o hello

hello2 : main.c 
	gcc main.c -o hello2

clean : 
	rm -f hello hello2
```
:::

## 变量

定义变量和使用变量的方式如下，
可以用来添加编译参数。

```Makefile
.PHONY: clean all
Cflags = -Wall -g -O2

all : hello hello2
	@echo "all done."

hello : main.c
	gcc $(Cflags) main.c -o hello

hello2 : main.c 
	gcc $(Cflags) main.c -o hello2

clean : 
	rm -f hello hello2
```

## 自动变量

`Makefile`有自动变量，
比如`$@`表示目标文件，
`$<`表示第一个依赖文件，
`$^`表示所有的依赖文件。

于是上面的`Makefile`文件内容可以简化：
```Makefile
.PHONY: clean all
Cflags = -Wall -g -O2

all : hello hello2
	@echo "all done."

hello : main.c
	gcc $(Cflags) $< -o $@

hello2 : main.c 
	gcc main.c -o hello2

clean : 
	rm -f hello hello2
```

