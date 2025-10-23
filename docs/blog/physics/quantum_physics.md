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
