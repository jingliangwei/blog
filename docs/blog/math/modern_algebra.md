# 近世代数

群论是在19世纪初期为了解决一般五次方程的根式解，由伽罗瓦创立的理论。对于2,3,4次方程都有求根公式，但对于5次及以上次数的方程没有根式解，下面是相关的简述，主要参考：《抽象代数基础教程》（Joseph J. Rotman）

## 经典公式

### 二次方程

我们熟知用配方法得到二次方程的求根公式
$$
\begin{align}
x^2+bx+c&=x^2+bx+\frac{1}{4}b^2+c-\frac{1}{4}b^2 \\
&=\left(x+\frac{1}{2}b\right)^2+\frac{1}{4}(4c-b^2)
\end{align}
$$

下面有一个不同的推导方法，从将给定的多项式化简开始。

::: info 定义
若一个 $n$ 次多项式 $f(x)\in\mathbb{R}[x]$ 没有 $x^{n-1}$ 项，则称为是简化的。

化简方式：

对于多项式 $f(X)=X^n+a_{n-1}X^{n-1}+h(X)$ ，其中 $\deg(h)\le n-2$ ，作替换 $X=x-\frac{1}{n}a_{n-1}$ ，有
$$
\begin{align}
f^*(x)&=f\left(x-\frac{1}{n}a_{n-1}\right) \\
&=\left(x-\frac{1}{n}a_{n-1}\right)^n+a_{n-1}\left(x-\frac{1}{n}a_{n-1}\right)^{n-1}+h\left(x-\frac{1}{n}a_{n-1}\right) \\
&=(x^n-a_{n-1}x^{n-1}+g_1(x))+a_{n-1}(x^{n-1}+g_2(x))+h\left(x-\frac{1}{n}a_{n-1}\right) \\
&=x^n+g_1(x)+a_{n-1}g_2(x)+h\left(x-\frac{1}{n}a_{n-1}\right)
\end{align}
$$
可见 $f^*(x)$ 为简化的。
:::

对一般二次多项式 $f(X)=X^2+bX+c$ 化简有
$$
\begin{align}
f^*(x)&=\left(x-\frac{1}{2}b\right)^2+b\left(x-\frac{1}{2}b\right)+c \\
&=x^2-\frac{1}{4}(b^2-4c)
\end{align}
$$
所以 $f^*(x)$ 的根为 $u=\pm\frac{1}{2}\sqrt{b^2-4c}$ ，原多项式的根为 $u-\frac{1}{2}b$ 即
$$
U=\frac{1}{2}(-b\pm\sqrt{b^2-4c})
$$

### 三次方程

我们考虑简化的三次多项式 $x^3+qx+r$ 的根（卡尔达诺公式）
$$
\alpha+\beta,\ \omega\alpha+\omega^2\beta,\ \omega^2\alpha+\omega\beta
$$
其中
$$
\alpha^3=\frac{1}{2}(-r+\sqrt{D}),\beta=-\frac{q}{3\alpha},D=r^2+\frac{4}{27}q^3,\omega=\frac{-1+\sqrt{3}i}{2}
$$

proof idea:

记一根 $u=\alpha+\beta$ 引入 $\alpha\beta=-q/3$ 得到 $\alpha^3$ 的二次方程

::: info 例子
下面例子说明了三次公式为什么很少使用，尽管它的确给出了三次方程的根，但它给出的形式是不可辨认的。

对于 $x^3-7x+6=(x-1)(x-2)(x+3)$

带入求根公式：$q=-7,r=6,D=-400/27$
$$
\alpha^3=\frac{1}{2}\left(-6+\sqrt{\frac{-400}{27}}\right),\beta^3=\frac{1}{2}\left(-6-\sqrt{\frac{-400}{27}}\right)
$$
即
$$
\omega\sqrt[3]{\frac{1}{2}\left(-6+\sqrt{\frac{-400}{27}}\right)}+\omega^2\sqrt[3]{\frac{1}{2}\left(-6-\sqrt{\frac{-400}{27}}\right)}
$$
等于 $1,2,-3$ 中的某一个数。
:::

### 四次方程

笛卡尔给出了四次方程求根的方式，同样考虑简化的四次多项式 $x^4+qx^2+rx+s$

分解为 $(x^2+jx+l)(x^2-jx+m)$

进而得到 $j^2$ 的三次方程 $j^6+2qj^4+(q^2-4s)j^2-r^2=0$

用三次方程求根公式可解。

## 一般五次方程的不可解性

证明方程无根式解的主要逻辑为：

1. 用 $k$ 上分裂域 $E$ 的子域的语言来叙述多项式根式解公式
2. 若 $f(x)$ 根式可解，则 $\text{Gal}(E/k)$ 是可解群
3. 次数不小于 5 的多项式有不可解的伽罗瓦群

### 根式可解性

::: info 定义
1. 型 $m$ 的单纯扩张是满足 $u^m\in k$ 的扩张 $k(u)/k$ ，其中 $m>1$

2. 扩张 $K/k$ 称为根式扩张若存在域塔
   $$
   k=K_0\subseteq K_1\subseteq \cdots \subseteq K_t=K
   $$
   使得每个 $K_{i+1}/K_i$ 都是单纯扩张。上式称为根式塔。

3. 设 $f(x)\in k[x]$ 有一个分裂域 $E$ 。称 $f(x)$ 是根式可解的若存在根式扩张
   $$
   k=K_0\subseteq K_1\subseteq \cdots \subseteq K_t
   $$
   使得 $E\subseteq K_t$
:::

- 对于二次多项式
  
  $f(x)=x^2+bx+c\in\mathbb{Q}[x]$ 定义 $K_1=\mathbb{Q}(u),u=\sqrt{b^2-4c}$ ， $K_1/\mathbb{Q}$ 为根式扩张，因为 $u^2\in\mathbb{Q}$

- 三次多项式

  一个 $\mathbb{Q}[x]$ 中不可约的三次多项式，其所有根都是实数，即分裂域 $E=\mathbb{R}$ ，但其根式解需要复数，即根式扩张 $K_t/\mathbb{Q}\nsubseteq\mathbb{R}$

  所以根式可解的定义要求 $E\subseteq K_t$

- 反过来，若 $f(x)\in\mathbb{Q}[x]$ 根式可解，则有一个
  $$
  \mathbb{Q}=K_0\subseteq K_1\subseteq\cdots\subseteq K_t
  $$
  使得 $E\subseteq K_t$ 的根式扩张。设 $z$ 为 $f(x)$ 的一个根，又 $K_t=K_{t-1}(u)$ ，其中 $u$ 为 $K_{t-1}$ 中某个元素 $a\in K_{t-1}$ 的 $m$ 次根。因此 $z$ 可以用 $\sqrt[m]{a}$ 及 $K_{t-1}$ 中的元素表示。最终 $z$ 可以用一个类似经典公式的公式表示。

### 伽罗瓦群和可解群

::: info 定义
设 $k$ 为域 $E$ 的一个子域。 $E$ 在 $k$ 上的伽罗瓦群，记为 $\text{Gal}(E/k)$ ，就是所有的 $E$ 的固定 $k$ 的自同构组成的集合。若 $f(x)\in k[x]$ ， $E=k(z_1,\cdots,z_n)$ 为它的一个分裂域，则 $f(x)$ 在 $k$ 上的伽罗瓦群就规定为 $\text{Gal}(E/k)$
:::

若 $f(x)\in k[x]$ 的次数为 $n$ ，则它的伽罗瓦群 $\text{Gal}(E/k)$ 同构于 $S_n$ 的一个子群。

::: info 定义
群 $G$ 的正规子群列指的是如下形式的子群列
$$
G=G_0\rhd G_1\rhd G_2\rhd\cdots\rhd G_t=\{1\}
$$
此子群列的商群是
$$
G_0/G_1,\ G_1/G_2,\ \cdots,\ G_{t-1}/G_t
$$
群 $G$ 称为可解的，若 $G$ 有一个使每个商群的阶均为素数的正规子群列。
:::

1. $S_4$ 是可解的，因为 $S_4\rhd A_4\rhd V_4\rhd W\rhd \{1\}$
2. 每个有限阿贝尔群可解
3. 每个非阿贝尔的单群不可解
4. $S_n,n\ge 5$ 不可解

::: info （伽罗瓦）
定理：$f(x)\in k[x]$ 是根式可解的，则它的伽罗瓦群 $\text{Gal}(E/k)$ 是一个可解群
:::

::: info （阿贝尔）
若多项式 $f(x)$ 的伽罗瓦群是交换群，则 $f(x)$ 是根式可解的
:::

::: info （阿贝尔-鲁费尼）
对所有的 $n\ge5$ ，一般的 $n$ 次多项式
$$
f(x)=(x-y_1)(x-y_2)\cdots(x-y_n)
$$
不是根式可解的。
:::
