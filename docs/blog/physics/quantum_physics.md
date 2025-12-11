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
递推关系
$$
\frac{\mathrm{d}H_n}{\mathrm{d}\xi}=2nH_{n-1}(\xi)
$$
$$
H_{n+1}-2\xi H_n+2n H_{n-1}=0
$$

- 能量
$$
E_n=\hbar\omega\left(n+\frac{1}{2}\right),\quad n=0,1,2,...,m
$$

- 波函数（厄密函数）
$$
\Psi_n(\xi)=N_n e^{-\frac{\xi^2}{2}}H_n(\xi)
$$
$$
\Psi_n(x)=N_n e^{-\frac{\alpha^2}{2}x^2}H_n(\alpha x)
$$
$$
N_n=\sqrt{\frac{\alpha}{2^nn!\sqrt{\pi}}}
$$

有递推关系
$$
\xi\Psi_n(\xi)=\sqrt{\frac{n+1}{2}}\Psi_{n+1}(\xi)+\sqrt{\frac{n}{2}}\Psi_{n-1}(\xi)
$$
$$
\frac{\mathrm{d}}{\mathrm{d}\xi}\Psi_n(\xi)=\sqrt{\frac{n}{2}}\Psi_{n-1}(\xi)-\sqrt{\frac{n+1}{2}}\Psi_{n+1}(\xi)
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
\widehat{H}\psi=\left[-\frac{\hbar^2}{2\mu}\nabla^2-\frac{Ze^2}{r}\right]\psi=E\psi
$$
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

### 厄米算符本征函数性质

1. 正交归一性
2. 完备性

### 算符与力学量的关系

1. 量子力学原理三：
   
   量子力学中表示力学量的算符都是厄米算符，它的本征函数 $\varphi_n(x)$ 组成正交归一完备系。如果量子力学中的力学量 $F$ 在经典力学中有相应的力学量，则表示这个力学量的算符 $\widehat{F}$ 由经典表达式 $F(r,p)$ 中将 $p$ 换成 $\hat{p}$ 得出。

2. 量子力学原理四：

   算符 $\widehat{F}$ 的本征函数为 $\varphi_n(x)$ ，当体系处于归一化波函数
   $$
   \psi(x)=\sum_n c_n\varphi_n(x),\quad c_n=(\varphi_n,\psi)
   $$
   $$
   \psi(x)=\int c_\lambda\varphi_\lambda(x)\mathrm{d}\lambda,\quad c_\lambda=(\varphi_\lambda,\psi)
   $$
   所描述的状态时，测量力学量 $F$ 所得到的数值，必定是算符 $\widehat{F}$ 的本征值 $\lambda_n$ 之一，测得 $\lambda_n$ 的几率等于 $|c_n|^2$ 。

3. 力学量的平均值
   $$
   \bar{F}=\int\psi^*\widehat{F}\psi\mathrm{d}x=\sum_n|c_n|^2F_n,\text{or}\int\lambda|c_\lambda|^2\mathrm{d}\lambda
   $$
   对于任意力学量 $\widehat{B}$
   $$
   \bar{B}=\int\psi^*\widehat{B}\psi\mathrm{d}x=(\psi,\widehat{B}\psi)
   $$

### 算符对易关系和测不准关系

1. 算符的对易关系：
   
   $$
   [x_\alpha,\hat{p}_\beta]=i\hbar\delta_{\alpha\beta}
   $$
   $$
   [\hat{p}_\alpha,\hat{p}_\beta]=0
   $$
   $$
   [\hat{L}_x,\hat{L}_y]=i\hbar\hat{L}_z
   $$
   $$
   [\hat{L}^2,\hat{L}_\alpha]=0
   $$

2. 两个算符对易 $\Leftrightarrow$ 其本征函数系相同且完备 $\Leftrightarrow$ 在本征态下算符/力学量有确定的值

3. 测不准原理：
   
   设 $[\widehat{F},\widehat{G}]=i\hat{k}$ 则有
   $$
   \overline{(\Delta\widehat{F})^2}\ \overline{(\Delta\widehat{G})^2}\ge \frac{(\bar{k})^2}{4}
   $$

   e.g. 坐标与动量的测不准关系
   $$
   \Delta x\Delta p_x\ge\frac{\hbar}{2}
   $$

### 力学量的时间变化及守恒律

1. 薛定谔绘景： $\psi(x,t)$ 随时间变化， $\widehat{F}(\vec{r},\hat{p})$ 不随时间变化
   $$
   i\hbar\frac{\partial}{\partial t}\psi(\vec{r},t)=\widehat{H}\psi(\vec{r},t)
   $$

2. 海森堡绘景： $\psi$ 不随时间变化， $\widehat{F}$ 不显含时间，但随时间变化
   $$
   \frac{\mathrm{d}\widehat{F}}{\mathrm{d}t}=\frac{1}{i\hbar}[\widehat{F},\widehat{H}]
   $$

3. 如果 $\widehat{F}$ 不显含时间 $t$ ，与 $\widehat{H}$ 对易，则 $\frac{\mathrm{d}\widehat{F}}{\mathrm{d}t}=0$ ，即力学量 $\widehat{F}$ 守恒。

4. 宇称算符
   $$
   \widehat{P}\psi(x,t)=\psi(-x,t)
   $$

   如果体系的 $\widehat{H}$ 在空间反演下不变，则宇称算符 $\widehat{P}$ 与 $\widehat{H}$ 对易，进而 $P$ 为守恒量，即宇称守恒定律。

## 态和力学量的表象

### 态的表象

- 坐标表象
  
  $\varphi_i(x),i=1,2,...,n$

  $\Psi(x,t)=\sum c_n\varphi_n(x)$

- Q表象

  $u_i(x),i=1,2,...,n$ （力学量Q的正交归一本征函数系）

  $\Psi(x,t)=\{a_n\}$ 态矢量

### Q表象下算符的矩阵表示

- 坐标表象 $\widehat{F}=\widehat{F}(\hat{x},\hat{p}_x)=\widehat{F}(x,-i\hbar\nabla_x)$

  动量表象 $\widehat{F}=\widehat{F}(\hat{x},\hat{p}_x)=\widehat{F}(i\hbar\nabla_p,p)$

  Q表象 $F_{nm}\equiv\int u_n^*(x)\widehat{F}(x,-i\hbar\frac{\partial}{\partial x})u_m(x)\mathrm{d}x$

### 量子力学公式的矩阵表示

- 动量表象（连续谱）
  
  1. 期望值 $\overline{F}=\int c^*(p)\widehat{F}(i\hbar\nabla_p,p)c(p)\mathrm{d}p$

  2. 本征方程 $\widehat{F}c(p)=F_nc(p)$

  3. Schrodinger方程 $i\hbar\frac{\partial}{\partial t}c(p,t)=\widehat{H}c(p,t)=Ec(p,t)$

- Q表象（分离谱）

  1. 期望值 $\overline{F}=\Psi^\dagger F\Psi$

  2. 久期方程 $\text{det}(F_{mn}-\lambda\delta_{mn})=0$

  3. Schrodinger方程 $i\hbar\frac{\partial}{\partial t}\Psi=H\Psi$

### 两个表象之间算符变换——幺正变换

- $\widehat{Q}$ 本征函数 $\{\psi_n(x)\}$

  $\widehat{B}$ 本征函数 $\{\phi_n(x)\}$

- $\widehat{B}$ 在Q表象下本征矢 $\{\phi_\beta\}$
  $$
  S=(\phi_1\ \phi_2\ ...\ \phi_\beta)
  $$

  $$
  \Phi=\widetilde{S}\Psi
  $$

  $S$ 为变换矩阵，幺正矩阵

- $\widehat{F}$ 在B表象下为 $F'$ ，在Q表象下 $F=SF'S^\dagger$

- Q表象波函数 $a$ 在B表象下 $b=S^\dagger a$

  B表象波函数 $b$ 在Q表象下 $a=Sb$

### Dirac 符号

- 右矢和左矢 $|\psi\rangle=\langle\psi|^\dagger$, $\langle\psi|=|\psi\rangle^\dagger$

- $\{a_n\}=\{\langle n|\Psi\rangle\}$ 是态 $\Psi$ 在Q表现中的波函数

  $\varphi(x)=\langle x|\Psi\rangle$ 是 $\Psi$ 在x表现中的波函数

- 内积 $\langle\psi|\varphi\rangle\equiv(\psi,\varphi)$

  外积 $|\psi\rangle\langle\varphi|=\left[\begin{array}{c} a_1\\ a_2\end{array}\right](b_1^*\ b_2^*)=\left[\begin{array}{cc}a_1b_1^* & a_1b_2^* \\ a_2b_1^* & a_2b_2^*\end{array}\right]$

- $\widehat{F}$ 的本征方程 $\widehat{F}|\lambda\rangle=\lambda|\lambda\rangle$

- 期望值公式 $\bar{F}=\langle\psi|\widehat{F}|\psi\rangle$

- Schrodinger方程 $i\hbar\frac{\partial}{\partial t}|\psi(t)\rangle=\widehat{H}|\psi(t)\rangle$

- $\widehat{F}$ 在Q表象下 $F_{mn}=\langle m|\widehat{F}|n\rangle$

### 粒子数表象

- 湮灭算符 $\hat{a}$ : $\hat{a}|n\rangle=\sqrt{n}|n-1\rangle$
  
  产生算符 $\hat{a}^\dagger$ : $\hat{a}^\dagger|n\rangle=\sqrt{n+1}|n+1\rangle$
   
  粒子数算符 $\widehat{N}=\hat{a}^\dagger\hat{a}$ : $\widehat{N}|n\rangle=n|n\rangle$

## 近似方法

### 非简并定态微扰理论

受扰动体系能量和态矢量
$$
E_n=E_n^{(0)}+H'_{nn}+\sum_{m\neq n}\frac{|H'_{mn}|^2}{E_n^{(0)}-E_m^{(0)}}+\cdots
$$
$$
|\psi_n\rangle=|\psi_n^{(0)}\rangle+\sum_{m\neq n}\frac{H'_{mn}}{E_n^{(0)}-E_m^{(0)}}|\psi_m^{(0)}\rangle+\cdots
$$
$$
H'_{mn}=\langle\psi_m^{(0)}|\widehat{H}^{(1)}|\psi_n^{(0)}\rangle
$$
