# 量子力学

## 绪论

### 光的波粒二象性

- Planck 黑体辐射
  
  $$
  \rho(\nu,T)\mathrm{d}\nu=\frac{8\pi h}{c^3}\frac{\nu^3\mathrm{d}\nu}{e^{h\nu/kT}-1}
  $$

- 光电效应

- [Compton 散射](/blog/physics/atom#光的波粒二象性)

### 原子结构的玻尔理论

### 微观粒子的波粒二象性

参考 [原子物理](/blog/physics/atom#实物粒子波动性)

- 德布罗意物质波

- 电子衍射实验

- 波尔-索末菲量子化条件
$$
\oint p\mathrm{d}q=\left(n+\frac{1}{2}\right)h
$$

## 波函数和 Schrodinger 方程

### 波函数的统计解释

- de Broglie 波
$$
\varphi(\boldsymbol{r},t)=Ae^{\frac{i}{\hbar}(\boldsymbol{p}\cdot\boldsymbol{r}-Et)}
$$

### 态叠加原理

- 量子力学原理1：量子体系的状态完全由波函数描述，波函数满足态叠加原理。

- 动量波函数 $c(\boldsymbol{p})$ & 波函数 $\Psi(\boldsymbol{r})$:
$$
\begin{align}
\Psi(\boldsymbol{r})&=\int c(\boldsymbol{p})\psi_p(\boldsymbol{r})\mathrm{d}\boldsymbol{p} \\
&=\frac{1}{(2\pi\hbar)^{3/2}}\iiint_{-\infty}^\infty c(\boldsymbol{p})e^{i\boldsymbol{p}\cdot\boldsymbol{r}/\hbar}\mathrm{d}p_x\mathrm{d}p_y\mathrm{d}p_z
\end{align}
$$
$$
\begin{align}
c(\boldsymbol{p})&=\int \psi_p^*(\boldsymbol{r})\Psi(\boldsymbol{r})\mathrm{d}\boldsymbol{r} \\
&=\frac{1}{(2\pi\hbar)^{3/2}}\iiint_{-\infty}^\infty \Psi(\boldsymbol{r})e^{-i\boldsymbol{p}\cdot\boldsymbol{r}/\hbar}\mathrm{d}x\mathrm{d}y\mathrm{d}z
\end{align}
$$

### Schrodinger 方程

- 量子力学原理2：体系状态波函数满足 Schrodinger 方程

- Schrodinger 方程
$$
i\hbar\frac{\partial}{\partial t}\Psi(\vec{r},t)=\left[-\frac{\hbar^2}{2m}\nabla^2+U\right]\Psi(\vec{r},t)=\widehat{H}\Psi(\vec{r},t)
$$

- 能量算符 $\widehat{E}\equiv i\hbar\frac{\partial}{\partial t}$

  动量算符 $\widehat{p}\equiv -i\hbar\nabla,\ \widehat{p}^2=-\hbar^2\nabla^2$

  Hamilton 算符 $\widehat{H}=-\frac{\hbar^2}{2m}\nabla^2+U$

- 多粒子体系的 Schrodinger 方程
$$
i\hbar\frac{\partial}{\partial t}\Psi(\vec{r}_1,\vec{r}_2,\cdots,\vec{r}_N;t)=\left[\sum_{i=1}^N\left[-\frac{\hbar^2}{2m_i}\nabla_i^2+V_i(\vec{r}_i)\right]+U(\vec{r}_1,\vec{r}_2,\cdots,\vec{r}_N)\right]\Psi(\vec{r}_1,\vec{r}_2,\cdots,\vec{r}_N;t)
$$

### 粒子流密度和粒子数守恒定律

- 概率流密度矢量
$$
\vec{J}=\frac{i\hbar}{2m}[\Psi\nabla\Psi^*-\Psi^*\nabla\Psi]
$$

- 波函数的标准条件：单值、有限、连续

### 定态 Schrodinger 方程

当外势场 $\partial U/\partial t=0$

- 定态波函数
$$
\Psi(\vec{r},t)=\psi(\vec{r})e^{-\frac{i}{\hbar}Et}
$$

- 定态 Schrodinger 方程
$$
\nabla^2\psi(\vec{r})+\frac{2m}{\hbar^2}(E-U)\psi(\vec{r})=0
$$

- 能量本征值方程
$$
\widehat{H}\Psi=E\Psi
$$

### 一维无限深势阱

### 线性谐振子

- Hamilton 量
$$
\begin{align}
\widehat{H}&=\frac{\hat{p}^2}{2m}+\frac{1}{2}m\omega^2x^2 \\
&=-\frac{\hbar^2}{2m}\frac{\mathrm{d}^2}{\mathrm{d}x^2}+\frac{1}{2}m\omega^2x^2
\end{align}
$$

- 方程
$$
\left[\frac{\mathrm{d}^2}{\mathrm{d}x^2}+\frac{2m}{\hbar^2}\left(E-\frac{1}{2}m\omega^2x^2\right)\right]\psi(x)=0
$$
令 $\xi=\alpha x$ 其中 $\alpha=\sqrt{\frac{m\omega}{\hbar}}$
$$
\frac{\mathrm{d}^2\psi}{\mathrm{d}\xi^2}+(\lambda-\xi^2)\psi(x)=0,\quad\lambda=\frac{2E}{\hbar\omega}
$$

- Hermitian 多项式
$$
H_n(\xi)=(-1)^n\exp(\xi^2)\frac{\mathrm{d}^n}{\mathrm{d}\xi^n}\exp(-\xi^2)
$$

- 能量
$$
E_n=\hbar\omega\left(n+\frac{1}{2}\right),\quad n=0,1,2,...,m
$$

- 波函数（厄密函数）
$$
\Psi_n(x)=N_n e^{-\frac{\alpha^2}{2}x^2}H_n(\alpha x)
$$
$$
N_n=\sqrt{\frac{\alpha}{2^nn!\sqrt{\pi}}}
$$

### 势垒贯穿

## 量子力学中的力学量

### 算符

- 两波函数的标积
$$
(\psi,\varphi)\equiv\int\psi^*\varphi\mathrm{d}\tau
$$

- 算符 $\widehat{F}$ 的复共轭算符 $\widehat{F}^*$

  e.g. $\hat{p}^*=i\hbar\nabla=-\hat{p}$

- 算符 $\widehat{F}$ 的转置算符 $\widetilde{\widehat{F}}$ 定义为
  $$
  (\psi,\widetilde{\widehat{F}}\varphi)=(\varphi^*,\widehat{F}\psi^*)
  $$

  e.g. $\widetilde{\dfrac{\partial}{\partial x}}=-\dfrac{\partial}{\partial x}$

- 算符 $\widehat{F}$ 的厄米共轭算符 $\widehat{F}^\dagger$
  $$
  \widehat{F}^\dagger\equiv\widetilde{\widehat{F}}^*
  $$
  - 幺正算符 $\widehat{F}^\dagger=\widehat{F}^{-1}$
  - 厄米算符 $\widehat{F}^\dagger=\widehat{F}$

- 量子力学原理3：表示力学量的算符都是厄米算符。

### 动量算符和角动量算符

- 动量算符 $\hat{p}$ 的本征方程
  $$
  -i\hbar\nabla\psi(\vec{r})=\vec{p}\psi(\vec{r})
  $$
  本征函数
  $$
  \psi_p(\vec{r})=\frac{1}{(2\pi\hbar)^{3/2}}e^{\frac{i}{\hbar}\vec{p}\cdot\vec{r}}
  $$

- 角动量算符 $\widehat{L}_z$ 的本征方程
  $$
  -i\hbar\frac{\mathrm{d}}{\mathrm{d}\phi}\psi(\phi)=l_z\psi(\phi)
  $$
  本征函数
  $$
  \psi_m(\phi)=\frac{1}{\sqrt{2\pi}}e^{im\phi}, l_z=m\hbar, m=0,\pm1,\pm2,...
  $$

- 算符 $\widehat{L}^2$ 的本征方程
  $$
  -\hbar^2\left[\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right)+\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}\right]Y(\theta,\phi)=L^2Y(\theta,\phi)
  $$
  本征值 $L^2=l(l+1)\hbar^2$

  本征函数
  $$
  Y_{lm}(\theta,\phi)=(-1)^mN_{lm}P^m_l(\cos\theta)e^{im\phi}
  $$
  $$
  l=0,1,2,...,n-1,\quad m=0,\pm1,\pm2,...,\pm l
  $$

### 电子在库伦场中的运动

- 本征值和本征函数
$$
E_n=-\frac{\mu Z^2e^4}{2\hbar^2n^2},n=1,2,3,...
$$
$$
\phi_{nlm}(r,\theta,\phi)=R_{nl}(r)Y_{lm}(\theta,\phi)
$$
$$
l=0,1,2,...,n-1
$$
$$
m=0,\pm 1,\pm 2,...,\pm l
$$

- 能级简并度
  
  主量子数 $n=n_r+l+1$

  角量子数 $l=0,1,2,...,n-1$

  径向量子数 $n_r$

  对于确定的 $l$ ，磁量子数 $m=0,\pm 1,\pm 2,...,\pm l$

  能级 $E_n$ 的简并度为 $\sum_{l=0}^{n-1}(2l+1)=n^2$

### 氢原子

参考 [原子物理-氢原子](/blog/physics/atom.html#氢原子)
