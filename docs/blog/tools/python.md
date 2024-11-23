# Python数据处理

本文记录一些常用以及易忘的`python`字符串方法和`numpy`和`matplotlib`模块的函数。

## 字符串

### 基础的处理（定义、合并、重复和索引）
```py
>>> a = 'hello'
>>> a + 'world'
'helloworld'
>>> a * 2
'hellohello'
>>> a[0]
'h'
>>> a[-1]
'o'
>>> a[1:4]
'ell'
>>> a[0:5:2]
'hlo'
>>> len(a)
5
```
:::tip
`python`字符串的索引可以接受1，2，3个参数。

当只有一个参数，得到对于位置上的单个字符，可以正向索引 $(0,1,...,len-1)$ ，也可以逆向索引 $(-len,...,-2,-1)$。

当有两个参数时，用冒号`:`隔开，例如`str[a:b]`得到字符串从索引`a`到索引`b-1`的子字符串，可以理解为左闭右开区间$[a,b)$，同样支持正向和逆向索引，
其中参数`a`和参数`b`都可以省略，其默认值分别为$0$和$len$。

当有三个参数时，第三个参数代表步长，其值可以为正负整数但不能为$0$。
:::

### 字符串方法

- `a.strip(chars = None)` 去除首尾的字符（由`chars`指定，默认为空格）

```py
>>> a = ' good job'
>>> a.strip()
'good job'
>>> a.strip('b')
' good jo'
>>> a.strip('o g')
'd job'
```

- `a.split(sep = None, maxsplit = -1)` 分割字符串（根据`sep`分割，默认为空格，参数`maxsplit`是最大分割次数，默认无限制）

```py
>>> a = ' good job'
>>> a.split()
['good', 'job']
>>> a.split('o')
[' g', '', 'd j', 'b']
>>> a.split('o',2)
[' g', '', 'd job']
```

- `a.replace(old, new, count = -1)` 替换字符（把`old`替换成`new`，参数`count`代表最大替换次数，默认无限制）

```py
>>> a = ' good job'
>>> a.replace('o','0')
' g00d j0b'
>>> a.replace('o','0',2)
' g00d job'
>>> a.replace('oo','0')
' g0d job'
```

- `a.find(sub[, start[, end]])` 查找字符（在`a[start:end]`查找`sub`，返回第一次出现的索引，没找到返回$-1$）

```py
>>> a = ' good job'
>>> a.find('o')
2
>>> a.find('ob')
7
>>> a.find('o',3)
3
>>> a.find('o',4,7)
-1
```

- `a.count(sub[, start[, end]])` 字符统计（在`a[start:end]`查找`sub`，统计出现的次数）

```py
>>> a = ' good job'
>>> a.count('o')
3
>>> a.count('x')
0
>>> a.count('od')
1
```

- `a.upper()`/`a.lower()` 转大小写

```py
>>> a = 'Good Job!'
>>> a.upper()
'GOOD JOB!'
>>> a.lower()
'good job!'
```

- `a.ljust(width, fillchar=' ')`/`a.rjust(width, fillchar=' ')`/`a.zfill(width)` 指定宽度

```py
>>> a
'Good Job!'
>>> len(a)
9
>>> a.ljust(12)
'Good Job!   '
>>> a.rjust(15)
'      Good Job!'
>>> a.rjust(15,'6')
'666666Good Job!'
>>> a.zfill(14)
'00000Good Job!'
```

- `a.isalpha()`/`a.isdigit()`/`a.isalnum()` 判断字符串是否是纯字母/纯数字/纯字母数字

```py
>>> a = 'good'
>>> b = 'good job'
>>> c = '123'
>>> d = 'good 123'
>>> e = 'good123'
>>> f = '123.45'
>>> a.isalpha()
True
>>> b.isalpha()
False
>>> c.isdigit()
True
>>> d.isdigit()
False
>>> f.isdigit()
False
>>> e.isalnum()
True
>>> d.isalnum()
False
>>> f.isalnum()
False
```
- `a.join(iterable)` 拼接字符串（参数`iterable`为字符串列表）

```py
>>> '+'.join(['a','b','cd'])
'a+b+cd'
```

- `a.rfind(sub[, start[, end]])` 从右侧查找字符（在`a[start:end]`查找`sub`，返回最后一次出现的索引，没找到返回$-1$）

```py
>>> a = ' good job'
>>> a.rfind('o')
7
>>> a.rfind('o',1,3)
2
```

:::tip
在定义了字符串`a`后，可以通过`dir(a)`得到字符串的所有方法。通过`help(a.replace)`可以查看该方法的参数以及返回值。
:::

:::details
通过`help(a.replace)`注意到方法`replace()`的函数原型是`replace(old, new, count=-1, /)`，
参数列表最后的`/`是指该函数的某些参数只能通过位置传送，不能通过关键字传送。
相比于方法`split(sep=None, maxsplit=-1)`，没有`/`，说明可以通过`a.split(maxsplit=2, sep=' ')`这种关键字的方式进行传参。
:::

### 格式化输出

进行格式化输出有两种方式如下：
```py
>>> age = 20
>>> name = 'Tom'
>>> print(f'{name:^5} was {age:.1f} years old.')
 Tom  was 20.0 years old.
>>> print('{0:^5} was {1:.1f} years old.'.format(name, age))
 Tom  was 20.0 years old.
```

在冒号`:`后为格式控制命令，具体如下：

| 原数值       | 命令      | 显示字符串      | 解释              |
|:----------:|:-------:|:----------:|:---------------:|
| `3.1415926`  | `{:.2f}`  | `3.14`       | 保留小数点后两位        |
| `3.1415926`  | `{:+.2f}` | `+3.14`      | 带符号保留小数点后两位     |
| `-1`         | `{:+.2f}` | `-1.00`      | 带符号保留小数点后两位     |
| `2.71828`    | `{:.0f}`  | `3`          | 不带小数            |
| `5`          | `{:0>2d}` | `05`         | 数字补零（填充左边，宽度为2） |
| `5`          | `{:x<4d}` | `5xxx`       | 数字补x（填充右边，宽度为4） |
| `10`         | `{:y<4d}` | `10yy`       | 数字补x（填充右边，宽度为4） |
| `1000000`    | `{:,}`    | `1,000,000`  | 以逗号分隔的数字格式      |
| `0.25`       | `{:.2%}`  | `25.00%`     | 百分比格式           |
| `1000000000` | `{:.2e}`  | `1.00e+09`   | 指数格式            |
| `13`         | `{:>10d}` | `--------13` | 右对齐（宽度为10）      |
| `13`         | `{:<10d}` | `13--------` | 左对齐（宽度为10）      |
| `13`         | `{:^10d}` | `----13----` | 中间对齐（宽度为10）     |

:::info
上表最后三行显示结果的`-`代指空格。
:::

验证程序：
```py
a = 3.1415926
print(str(a) + ' {:.2f} -> ' + f'"{a:.2f}"')
print(str(a) + ' {:+.2f} -> ' + f'"{a:+.2f}"')
a = -1
print(str(a) + ' {:+.2f} -> ' + f'"{a:+.2f}"')
a = 2.71828
print(str(a) + ' {:.0f} -> ' + f'"{a:.0f}"')
a = 5
print(str(a) + ' {:0>2d} -> ' + f'"{a:0>2d}"')
print(str(a) + ' {:x<4d} -> ' + f'"{a:x<4d}"')
a = 10
print(str(a) + ' {:y<4d} -> ' + f'"{a:y<4d}"')
a = 1000000
print(str(a) + ' {:,} -> ' + f'"{a:,}"')
a = 0.25
print(str(a) + ' {:.2%} -> ' + f'"{a:.2%}"')
a = 1000000000
print(str(a) + ' {:.2e} -> ' + f'"{a:.2e}"')
a = 13
print(str(a) + ' {:>10d} -> ' + f'"{a:>10d}"')
print(str(a) + ' {:<10d} -> ' + f'"{a:<10d}"')
print(str(a) + ' {:^10d} -> ' + f'"{a:^10d}"')
```
