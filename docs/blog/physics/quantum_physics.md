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
