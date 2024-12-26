# Python 期末考试

2024年12月4日

前2题的解答略，其余的解答在题目下方。

## 解释下面函数的含义以及使用示例

1. 

- `range()`
- `strip()`
- `readlines()`
- `linspace()`
- `scatter()`

## 给下面代码添加注释并给出输出结果

2. 

(1) 
```py
a = np.arange(10).reshape(2,-1)
print(a)
print(a[0])
print(a[:,2])
print(a[0][::2])
```

(2)
```py
a = [0,1,2,3]
b = a
b.append(4)
print(a, b)
```

(3)
```py
def modifty(data):
    for key in data.keys():
        data[key] += 1
data = {'a':1, 'b':2, 'c':3}
modifty_data = modifty(data)
print(modifty_data)
```

(4)
```py
count = 0
count_max = 10
a = 1 ; b = 1
while count < count_max:
    a, b = b, a + b
    print(a, end=',')
    count = count + 1
```

(5)
```py
def jc(n):
    """ jc function """
    resu = 1
    for i in range(1, n+1, 2):
        resu *= i
    return resu
n = 7
res = jc(n)
print('jc of {} is {}.'.format(n, res))
```

## 程序设计

3. 算出$100$以内的所有质数并保存到文件中

:::details solve
没什么好说的，按照题目要求实现即可。
```py
# 判断是否是质数
def judge(n):
    if n == 0 or n == 1:
        return False
    label = True
    for i in range(2, n):
        if n % i == 0:
            label = False
    return label

# 把100以内的质数保存在列表
nums = []
for k in range(100):
    if judge(k):
        nums.append(k)

# 保存到文件data.txt里
file = open('data.txt', 'w')
data = '\n'.join([str(k) for k in nums])
file.write(data)
file.close()
```
:::

4. 把二维`numpy`数组的每一列都绘制一条曲线，并添加图注

:::details solve
先把二维数组转置，然后就可以绘制每一行了。
```py
import numpy as np
import matplotlib.pyplot as plt

# input = np.arange(10).reshape(5,-1)
# 假设二维numpy数组为input
input = input.T
for data in input:
    plt.plot(data, label=str(data[0]))
plt.legend()
plt.show()
```
:::

5. 创建一个奇数行都是$2$，其余都是$0$的$10\times10$矩阵

:::details solve
本题用循环的思路也可以实现，但是太过平凡，
可以采用如下算法。
```py
import numpy as np
a = np.arange(100)
a = ((a // 10) + 1) % 2     # 此时a是一个10个1，10个0，10个1，10个0交替的数组
a *= 2
a = a.reshape(10, 10)
print(a)
```
:::

6. 已知平面上散落点的坐标，画出一个包含所有点的大圆

:::details solve
本题要求比较宽松，可以考虑绘制所有点的分布矩阵范围的外接圆即可。
```py
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as patches

# x = np.array([0,4,4]) ; y = np.array([2,-1,8])
# 假设散落点的坐标以两个数组形式给出，分别记为x,y

x_min = x.min() ; x_max = x.max()
y_min = y.min() ; y_max = y.max()
x_c = (x_min + x_max) / 2
y_c = (y_min + y_max) / 2
r = np.sqrt((x_max - x_c) ** 2 + (y_max - y_c) ** 2)

circle = patches.Circle((x_c, y_c), r, edgecolor='r', facecolor='none', lw=1)

fig, ax = plt.subplots()
ax.scatter(x, y)
ax.add_patch(circle)
plt.show()
```
:::

