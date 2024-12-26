# 概率论中的特征函数

## 定义

对于一个随机变量 $X$ ，定义其特征函数为
$$
\varphi_X(t)=E[e^{itX}]
$$

::: info why?
已知 $e^{itX}$ 的泰勒级数为：
$$
e^{itX}=1+\dfrac{itX}{1}-\dfrac{t^2X^2}{2!}+\cdots+\dfrac{(it)^nX^n}{n!}+\cdots
$$
故
$$
\begin{align}
\varphi_X(t)&=E[e^{itX}] \\
&=E(1+\dfrac{itX}{1}-\dfrac{t^2X^2}{2!}+\cdots+\dfrac{(it)^nX^n}{n!}+\cdots) \\
&=E(1)+E(\dfrac{itX}{1})-E(\dfrac{t^2X^2}{2!})+\cdots+E(\dfrac{(it)^nX^n}{n!})+\cdots \\
&=1+\dfrac{itE[X]}{1}-\dfrac{t^2E[X^2]}{2!}+\cdots+\dfrac{(it)^nE[X^n]}{n!}+\cdots
\end{align}
$$
包含了随机变量分布的所有原点矩，即包含了分布的所有特征。
:::

::: details 生成函数
上式是随机变量 $X$ 的各阶原点矩的生成函数。

有数学家是这么形容生成函数的：
> A generating function is a clothesline on which we hang up a sequence of numbers for display. (生成函数是用来展示一串数字的晾衣绳)
> ——Herbert Wilf
:::

::: info 例子
正态分布 $X\sim N(\mu,\sigma^2)$ 的分布函数
$$
f(x)=\dfrac{1}{\sqrt{2\pi}\sigma}e^{-\dfrac{(x-\mu)^2}{2\sigma^2}}
$$
其对应的特征函数
$$
\varphi_X(t)=\exp\left(\displaystyle i\mu t-\dfrac{\sigma^2t^2}{2}\right)
$$
:::

## 使用

::: info 性质
注意到特征函数的定义式
$$
\varphi_X(t)=E[e^{itX}]=\int_{-\infty}^\infty f(x)e^{itx}\mathrm{d}x
$$
与傅里叶变换的定义式相仿，记变量 $X$ 的分布函数 $f(x)$ 的傅里叶变换为 $\mathcal{F}(x)$ ，
有
$$
\varphi_X(t)=\mathcal{F}^*(x)
$$
即特征函数是分布函数的傅里叶变换的复共轭。
:::

当利用卷积公式
$$
f_Z(z)=\int_{-\infty}^\infty f_X(x)f_Y(z-x)\mathrm{d}x=f_X*f_Y
$$
计算两个变量和 $Z=X+Y$ 的分布函数时，可以转化成为计算其对应的特征函数的乘积
$$
\varphi_Z(t)=\varphi_X(t)\varphi_Y(t)
$$

::: info 例子
例如现在来求 $X_k\sim N(\mu_k,\sigma_k^2),k=1,2$ ，变量 $Z=a_1X_1+a_2X_2$ 的分布：

变量 $a_kX_k\sim N(a_k\mu_k,a_k^2\sigma_k^2)$ ，分布函数为
$$
f_k(x)=\dfrac{1}{\sqrt{2\pi}a_k\sigma_k}e^{-\dfrac{(x-a_k\mu_k)^2}{2a_k^2\sigma_k^2}}
$$
其对应的特征函数
$$
\varphi_k(t)=\exp\left(\displaystyle ia_k\mu_k t-\frac{a_k^2\sigma_k^2t^2}{2}\right)
$$
变量 $Z$ 的特征函数为
$$
\begin{align}
\varphi_Z(t) &= \varphi_1(t)\varphi_2(t) \\
&= \exp\left(i(a_1\mu_1+a_2\mu_2)t-\dfrac{(a_1^2\sigma_1^2+a_2^2\sigma_2^2)t^2}{2}\right)
\end{align}
$$
故变量 $Z$ 的分布函数
$$
f_Z(z)=\dfrac{1}{\sqrt{2\pi}(a_1\mu_1+a_2\mu_2)}e^{-\dfrac{(x-(a_1\mu_1+a_2\mu_2))^2}{2(a_1^2\sigma_1^2+a_2^2\sigma_2^2)}}
$$
即 $Z\sim N(a_1\mu_1+a_2\mu_2, a_1^2\sigma_1^2+a_2^2\sigma_2^2)$

::: info 推广
进一步可以得到正态分布的线性组合的分布仍然是正态分布：

若变量 $X_k\sim N(\mu_k,\sigma_k^2)$ ，$Z=\sum_{k=1}^n a_kX_k$ ，
则 
$$
Z\sim N(\sum_{k=1}^n a_k\mu_k, \sum_{k=1}^n a_k^2\sigma_k^2)
$$
:::



