# 天体力学基础

## 绪论

### 矢量运算和场运算

参考 [矢量运算和基础场论](/blog/math/vector_field)

### 坐标系变换

- 坐标基底变换
  
  $(\hat{e}_1,\hat{e}_2)\rightarrow(\hat{e}_1',\hat{e}_2')$:
  $$
  (\hat{e}_1'\quad\hat{e}_2')=(\hat{e}_1\quad\hat{e}_2)\boldsymbol{A}
  $$

- 对应矢量坐标变换

  $\boldsymbol{\alpha}=\alpha_1\hat{e}_1+\alpha_2\hat{e}_2=\alpha_1'\hat{e}_1'+\alpha_2'\hat{e}_2'$:
  $$
  \boldsymbol{\alpha}=(\hat{e}_1\quad\hat{e}_2)\left(\begin{array}{c}\alpha_1 \\ \alpha_2\end{array}\right)=(\hat{e}_1'\quad\hat{e}_2')\left(\begin{array}{c}\alpha_1' \\ \alpha_2'\end{array}\right)=(\hat{e}_1\quad\hat{e}_2)\boldsymbol{A}^{-1}\left(\begin{array}{c}\alpha_1 \\ \alpha_2\end{array}\right)
  $$
  $$
  \Rightarrow\left(\begin{array}{c}\alpha_1' \\ \alpha_2'\end{array}\right)=\boldsymbol{A}^{-1}\left(\begin{array}{c}\alpha_1 \\ \alpha_2\end{array}\right)
  $$

- 常用的坐标变换矩阵：
  
  1. 转动
  $$
  \boldsymbol{R}_x(\theta)=\left[\begin{array}{ccc}
  1 & 0 & 0 \\
  0 & \cos\theta & \sin\theta \\
  0 & -\sin\theta & \cos\theta
  \end{array}\right]
  $$
  $$
  \boldsymbol{R}_y(\theta)=\left[\begin{array}{ccc}
  \cos\theta & 0 & -\sin\theta \\
  0 & 1 & 0 \\
  \sin\theta & 0 & \cos\theta
  \end{array}\right]
  $$
  $$
  \boldsymbol{R}_z(\theta)=\left[\begin{array}{ccc}
  \cos\theta & \sin\theta & 0 \\
  -\sin\theta & \cos\theta & 0 \\
  0 & 0 & 1
  \end{array}\right]
  $$
  2. 宇称
  $$
  \boldsymbol{P}_x=\left[\begin{array}{ccc}
  -1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & 1
  \end{array}\right]
  $$
  $$
  \boldsymbol{P}_y=\left[\begin{array}{ccc}
  1 & 0 & 0 \\
  0 & -1 & 0 \\
  0 & 0 & 1
  \end{array}\right]
  $$
  $$
  \boldsymbol{P}_y=\left[\begin{array}{ccc}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & -1
  \end{array}\right]
  $$

## 二体问题

### 有心力对应的比耐公式

$$
-mh^2u^2\frac{\mathrm{d}^2u}{\mathrm{d}\theta^2}-mu^3h^2=F
$$

::: info derivation
$$
F=ma_r=m(\ddot{r}-r\dot{\theta}^2)
$$
$$
L=mh=mr^2\dot{\theta}
$$
$$
r\equiv\frac{1}{u}
$$
:::

### 二体运动方程

#### 质心系

牛顿力学给出
$$
\vec{F}_1=m_1\ddot{\vec{r}}_1=\frac{Gm_1m_2}{r^3}\vec{r}=\frac{Gm_1m_2}{r^2}\hat{r},
$$
$$
\vec{F}_2=m_2\ddot{\vec{r}}_2=-\frac{Gm_1m_2}{r^3}\vec{r}=-\frac{Gm_1m_2}{r^2}\hat{r}.
$$

在质心系中
$$
\ddot{\vec{r}}_1=\frac{Gm_2}{r^3}\vec{r}=-\frac{Gm_2^3}{(m_1+m_2)^2}\frac{\vec{r}_1}{r_1^3},
$$
$$
\ddot{\vec{r}}_2=-\frac{Gm_1}{r^3}\vec{r}=-\frac{Gm_1^3}{(m_1+m_2)^2}\frac{\vec{r}_2}{r_2^3}.
$$

#### 相对运动方程和有效单体问题

相对位移 $\vec{r}\equiv\vec{r}_2-\vec{r}_1$

$$
\frac{\mathrm{d}^2\vec{r}}{\mathrm{d}t^2}=-G(m_1+m_2)\frac{\vec{r}}{r^3}.
$$

有效单体问题 (Effective One Body problem)

#### 从非惯性系看有效单体问题

取以天体1为参考的非惯性系
$$
\begin{align}
m_2\ddot{\vec{r}}&=-\frac{Gm_1m_2}{r^3}\vec{r}-m_2\ddot{\vec{r}}_1 \\
&=-\frac{Gm_1m_2}{r^3}\vec{r}-m_2\frac{Gm_2}{r^3}\vec{r} \\
&=-Gm_2(m_1+m_2)\frac{\vec{r}}{r^3}
\end{align}
$$

### 二体运动方程求解

有效单体问题方程可简记为
$$
\ddot{\vec{r}}=-\mu\frac{\vec{r}}{r^3}
$$

#### 面积积分与角动量守恒

方程两边 $\vec{r}\times$ $\Rightarrow$ $\frac{\mathrm{d}}{\mathrm{d}t}(\vec{r}\times\dot{\vec{r}})=0$

#### 拉普拉斯积分与轨道曲线

- 拉普拉斯积分（守恒矢量 $\vec{e}$ ）
  
  $$
  \vec{h}\times\dot{\vec{r}}+\mu\frac{\vec{r}}{r}\equiv-\mu\vec{e}
  $$

  龙格楞次 (Runge-Lenz) 矢量即 $m\mu\vec{e}$

- 轨道曲线

  $\vec{r}\cdot\vec{e}=-r+\frac{h^2}{\mu}=re\cos f$ $\Rightarrow$ $r=\frac{p}{1+e\cos f}$

#### 活力积分与能量守恒

活力积分
$$
E=\frac{1}{2}\dot{\vec{r}}\cdot\dot{\vec{r}}-\frac{\mu}{r}=-\frac{\mu}{2a}
$$

#### 轨道根数

![orbital element](./celestial_mechanics_fig/1.png)

- 半长径 $a$、偏心率 $e$
- 轨道倾角 $i$、升交点赤经 $\Omega$、近心点幅角 $\omega$
- 平近点角 $M$、过近心点时刻 $\tau$

![anomaly](./celestial_mechanics_fig/2.png)

- 平近点角 $M$ (Mean Anomaly)
- 偏近点角 $E$ (Eccentric Anomaly)
- 真近点角 $f$ (True Anomaly)
$$
\cos f=\frac{\cos E-e}{1-e\cos E}
$$
$$
M=E-e\sin E
$$

### 星历表计算

#### 轨道坐标系

$$
\vec{r}=a(\cos E-e)\hat{P}+a\sqrt{1-e^2}\sin E\hat{Q}
$$
$$
\dot{\vec{r}}=\frac{na^2}{r}(-\sin E\hat{P}+\sqrt{1-e^2}\cos E\hat{Q})
$$

#### 从轨道坐标系到任意坐标系

![rotate](./celestial_mechanics_fig/3.png)

$$
\left[\begin{array}{c}
x \\
y \\
z
\end{array}\right]=R_z(\omega)R_x(\iota)R_z(\Omega)\left[\begin{array}{c}
x' \\
y' \\
z'
\end{array}\right]
$$
$$
\left[\begin{array}{c}
x \\
y \\
z
\end{array}\right]=\left[\begin{array}{ccc}
\cos\omega\cos\Omega-\cos\iota\sin\omega\sin\Omega & \cos\iota\cos\Omega\sin\omega+\cos\omega\sin\Omega & \sin\iota\sin\omega \\
-\cos\Omega\sin\omega-\cos\iota\cos\omega\sin\Omega & \cos\iota\cos\omega\cos\Omega-\sin\omega\sin\Omega & \cos\omega\sin\iota \\
\sin\iota\sin\Omega & -\cos\Omega\sin\iota & \cos\iota
\end{array}\right]
\left[\begin{array}{c}
x' \\
y' \\
z'
\end{array}\right]
$$

#### 星历表的计算

1. $M\rightarrow E$
$$
M(t)=nt+M_0,\quad E-e\sin E=M
$$

2. 轨道坐标系 ($\hat{P},\hat{Q}$) $\rightarrow\vec{r},\dot{\vec{r}}$

3. 所需坐标下的 ($\hat{P},\hat{Q}$)
$$
\hat{P}=\left[\begin{array}{c}
\cos\omega\cos\Omega-\cos\iota\sin\omega\sin\Omega \\
\cos\omega\sin\Omega+\cos\iota\cos\Omega\sin\omega \\
\sin\iota\sin\omega
\end{array}\right]
$$
$$
\hat{Q}=\left[\begin{array}{c}
-\cos\iota\cos\omega\sin\Omega-\cos\Omega\sin\omega \\
\cos\iota\cos\omega\cos\Omega-\sin\omega\sin\Omega \\
\cos\omega\sin\iota
\end{array}\right]
$$

- 从日心黄道坐标到日心赤道坐标 $R_x(-\epsilon)$
- 从日心赤道坐标到地心赤道坐标 平移

#### 轨道计算

- 由 $\vec{r}(t_0)$ 和 $\dot{\vec{r}}(t_0)$
  
  1. 由活力积分
  $$
  a=1/\left(\frac{2}{r}-\frac{v^2}{\mu}\right)
  $$
  2. $\mu,a\rightarrow n$
  $$
  n=\sqrt{\frac{\mu}{a^3}}
  $$
  3. $r,\vec{r}\cdot\dot{\vec{r}}\rightarrow e,E$
  $$
  e=\sqrt{(1-\frac{r}{a})^2+(\frac{\vec{r}\cdot\dot{\vec{r}}}{a^2n})^2}
  $$
  $$
  \tan E=(\frac{\vec{r}\cdot\dot{\vec{r}}}{a^2n})/(1-\frac{r}{a})
  $$
  4. $E\rightarrow M$
  $$
  M=E-e\sin E
  $$
  5. $\vec{r},\dot{\vec{r}}\rightarrow\hat{P},\hat{Q}$
  $$
  \hat{P}=\frac{\cos E}{r}\vec{r}-\frac{\sin E}{an}\dot{\vec{r}}
  $$
  $$
  \hat{Q}=\frac{\sin E}{r\sqrt{1-e^2}}\vec{r}+\frac{\cos E-e}{an\sqrt{1-e^2}}\dot{\vec{r}}
  $$
  6. $\hat{n}=\hat{P}\times\hat{Q}$
  7. $\hat{n},\hat{P},\hat{Q}\rightarrow\Omega,\omega,\iota$
  $$
  \Omega=-\arctan\frac{\hat{n}_x}{\hat{n}_y}
  $$
  $$
  \omega=\arctan\frac{\hat{P}_z}{\hat{Q}_z}
  $$
  $$
  \iota=\arccos\hat{n}_z
  $$
  5'. $\vec{h}=\vec{r}\times\dot{\vec{r}}\rightarrow \iota,\Omega$
  $$
  \vec{h}=A\hat{i}+B\hat{j}+C\hat{k}
  $$
  $$
  \cos\iota=\frac{C}{h}
  $$
  $$
  \cos\Omega=-\frac{B}{h\sin\iota}
  $$
  6'. $\vec{h},\vec{e}\rightarrow\hat{n},\hat{P}\rightarrow\hat{Q}\rightarrow \omega$
  $$
  \vec{e}=-\frac{1}{\mu}\left(\vec{h}\times\dot{\vec{r}}+\mu\frac{\vec{r}}{r}\right)
  $$

- 由 $\vec{r}(t_1)$ 和 $\vec{r}(t_2)$

  1. 计算 $a$

     $t_1,t_2$ 时刻开普勒方程
     $$
     nt_1+M_0=E_1-e\sin E_1
     $$
     $$
     nt_2+M_0=E_2-e\sin E_2
     $$
     引入辅助变量 $(q,p)$ $(\epsilon,\delta)$ $\sigma$
     $$
     q\equiv\frac{E_2-E_1}{2}
     $$
     $$
     \cos p\equiv e\cos\frac{E_2+E_1}{2}
     $$
     $$
     \epsilon\equiv p+q
     $$
     $$
     \delta\equiv p-q
     $$
     $$
     \sigma\equiv|\vec{r}_2-\vec{r}_1|
     $$
     有关系式
     $$
     \sin\frac{\epsilon}{2}=\pm\sqrt{\frac{r_1+r_2+\sigma}{4a}}
     $$
     $$
     \sin\frac{\delta}{2}=\pm\sqrt{\frac{r_1+r_2-\sigma}{4a}}
     $$
     将 4 组 $(\epsilon,\delta)$ 分别带入
     $$
     \left\{\begin{array}{l}
     n=\dfrac{\epsilon-\delta-(\sin\epsilon-\sin\delta)}{t_2-t_1} \\
     \mu=n^2a^3
     \end{array}\right.
     $$

  2. 计算 $e$
     
     $r_1,r_2,a,\epsilon,\delta\rightarrow e,E_1$
     $$
     \left\{\begin{array}{l}
     e\sin E_1=\dfrac{(1-\frac{r_1}{a})\cos(\epsilon-\delta)-(1-\frac{r_2}{a})}{\sin(\epsilon-\delta)} \\
     e\cos E_1=1-\frac{r_1}{a}
     \end{array}\right.
     $$

  3. 计算三个角度 $\Omega,\omega,\iota$

     $\vec{r}_1,\vec{r}_2\rightarrow\hat{P},\hat{Q}\rightarrow\Omega,\omega,\iota$

#### 状态传递

- 状态传递函数
$$
\vec{r}(t)=F(t)\vec{r}(t_0)+G(t)\dot{\vec{r}}(t_0),
$$
$$
\dot{\vec{r}}(t)=\dot{F}(t)\vec{r}(t_0)+\dot{G}(t)\dot{\vec{r}}(t_0),
$$

其中
$$
F(t)=1-\frac{a}{r_0}[1-\cos\Delta E]
$$
$$
G(t)=\Delta t+\frac{1}{n}[\sin\Delta E-\Delta E]
$$
$$
F'(t)=-\frac{a^2n}{rr_0}\sin\Delta E
$$
$$
G'(t)=1+\frac{a}{r}[\cos\Delta E-1]
$$
$$
\Delta E=E-E_0,\Delta t=t-t_0
$$

又有
$$
n\Delta t=\Delta E-(1-\frac{r_0}{a})\sin\Delta E+\frac{\vec{r}_0\cdot\dot{\vec{r}}_0}{\sqrt{\mu a}}(1-\cos\Delta E)
$$
$$
a=1/(\frac{2}{r_0}-\frac{\dot{\vec{r}}_0\cdot\dot{\vec{r}}_0}{\mu}),n=\sqrt{\frac{\mu}{a^3}}
$$

从初始条件 $\vec{r}_0,\dot{\vec{r}}_0$ 出发：

$\vec{r}_0,\dot{\vec{r}}_0$ $\rightarrow$ $\Delta E,a$ $\rightarrow$ $E,r=a(1-e\cos E)$ $\rightarrow$ $F,G,\dot{F},\dot{G}$

### 宇宙速度

- 第一宇宙速度
  $$
  \frac{1}{2}v_1^2-\frac{\mu}{r_\oplus}=E=-\frac{\mu}{2r_\oplus}
  $$
  $$
  v_1=\sqrt{\frac{\mu}{r_\oplus}}
  $$

- 第二宇宙速度
  $$
  \frac{1}{2}v_2^2-\frac{\mu}{r_\oplus}=E=0
  $$
  $$
  v_2=\sqrt{\frac{2\mu}{r_\oplus}}
  $$

- 第三宇宙速度
  
  记太阳的第二宇宙速度 $v_{\odot2}=\sqrt{2\mu_\odot/d_{\odot}}$ ，地球轨道速度 $v_e$
  $$
  \frac{1}{2}(v_{\odot2}-v_e)^2=\frac{1}{2}v_3^2-\frac{\mu_\oplus}{r_\oplus}
  $$
  $$
  v_3=\sqrt{\frac{2\mu_\oplus}{r_\oplus}+(v_{\odot2}-v_e)^2}=\sqrt{v_2^2+(v_{\odot2}-v_e)^2}
  $$
  ::: info 注
  在太阳参考系下，逃逸速度即 $v_{\odot2}$

  在地球参考系下，该速度为 $v_{\odot2}-v_e$

  也就是说，从地球上以 $v_3$ 发射，以双曲轨道离开地球，离地球无限远时相对地球速度为 $v_{\odot2}-v_e$ ，此时相对太阳速度为 $v_{\odot2}$ ，再以抛物轨道离开太阳。
  :::

### 作用范围

![作用范围](./celestial_mechanics_fig/4.png)

记 $q=\frac{m}{M}$
- 引力作用范围
  $$
  a_{1\text{引}}=a_{2\text{引}}
  $$
  $$
  r_1\approx\sqrt{q}A
  $$
- 引潮比作用范围
  $$
  \frac{|\vec{a}_{2\text{引}}|}{|\vec{a}_{1\text{潮}}|}=\frac{|\vec{a}_{1\text{引}}|}{|\vec{a}_{2\text{潮}}|}
  $$
  $$
  \vec{a}_{1\text{潮}}=GM(\frac{\vec{R}}{R^3}+\frac{\vec{A}}{A^3})
  $$
  $$
  \vec{a}_{2\text{潮}}=Gm(\frac{\vec{r}}{r^3}-\frac{\vec{A}}{A^3})
  $$
  $$
  r_2\approx q^{2/5}A
  $$
- 希尔作用范围
  $$
  r_3\approx q^{1/3}A
  $$

## N体问题

### 万有引力的场论表示

泊松方程
$$
\nabla^2 V=4\pi G\rho
$$

### 星球的引力势函数

#### 引力势展开

$$
V(\vec{x})=\sum_{l=0}^\infty \frac{1}{R^{l+1}}\sum_{m=0}^l(C_l^m\cos m\phi+S_l^m\sin m\phi)P_{lm}(\cos\theta)
$$
$$
\begin{align}
C_l^0&=-G\int r'^lP_l(\cos\theta')\rho'(\vec{x}')r'^2\sin\theta'\mathrm{d}r'\mathrm{d}\theta'\mathrm{d}\phi' \\
S_l^0&=0 \\
C_l^m&=-2G\frac{(l-m)!}{(l+m)!}\int r'^lP_{lm}(\cos\theta')\cos m\phi'\rho'(\vec{x}')r'^2\sin\theta'\mathrm{d}r'\mathrm{d}\theta'\mathrm{d}\phi' \\
S_l^m&=-2G\frac{(l-m)!}{(l+m)!}\int r'^lP_{lm}(\cos\theta')\sin m\phi'\rho'(\vec{x}')r'^2\sin\theta'\mathrm{d}r'\mathrm{d}\theta'\mathrm{d}\phi'
\end{align}
$$

#### 球多极矩

- 球多极矩
$$
I_{lm}\equiv\int r'^l Y_{lm}^*(\theta',\phi')\rho'\mathrm{d}^3x'
$$

- 引力势展开
$$
V(\vec{x})=\sum_{l=0}^\infty\sum_{m=-l}^l \frac{1}{R^{l+1}}\left(-G\frac{4\pi}{2l+1}I_{lm}\right)Y_{lm}
$$

### 运动方程

惯性系下
$$
\ddot{\vec{r}}_k=G\sum_{\begin{array}{c}j=1 \\ j\neq k\end{array}}^N \frac{m_j}{r_{kj}^3}\vec{r}_{kj}
$$
$$
\begin{align}
\ddot{\vec{r}}_k&=\nabla_k\left[G\sum_{i=1}^N \sum_{j=1+i}^N \frac{m_j}{r_{ij}}\right] \\
&=\nabla_k\left[\frac{1}{2}G\sum_{i=1}^N \sum_{\begin{array}{c}j=1\\ j\neq i\end{array}}^N \frac{m_j}{r_{ij}}\right]
\end{align}
$$

定义力函数
$$
U=G\sum_{i=1}^N \sum_{j=1+i}^N \frac{m_im_j}{r_{ij}}=\frac{1}{2}G\sum_{i=1}^N \sum_{\begin{array}{c}j=1\\ j\neq i\end{array}}^N \frac{m_im_j}{r_{ij}}
$$

### 各种坐标系

1. 相对运动非惯性坐标系： $(\vec{r}_{k1},\vec{r}_{k2},...,\vec{r}_{k,k-1},\vec{r}_{k,k+1},...,\vec{r}_{kN},\vec{r}_k)$
   $$
   \ddot{\vec{r}}_i-\ddot{\vec{r}}_k\equiv\ddot{\vec{r}}_{ki}=-G\frac{m_i+m_k}{r_{ki}^3}\vec{r}_{ki}+\sum_{\begin{array}{c}j=1\\ j\neq i,k\end{array}}^N Gm_j\left(\frac{\vec{r}_{ij}}{r_{ij}^3}-\frac{\vec{r}_{kj}}{r_{kj}^3}\right)
   $$
   原点取在天体 $P_k$ 处
   $$
   \begin{align}
   \ddot{\vec{r}}_i&=-G\frac{m_i+m_k}{r_i^3}\vec{r}_i+\nabla_i\sum_{\begin{array}{c}j=1\\ j\neq i,k\end{array}}^N Gm_j\left(\frac{1}{r_{ij}}-\frac{\vec{r}_i\cdot\vec{r}_j}{r_j^3}\right)\\
   &=\nabla_i\left[G\frac{m_i+m_k}{r_i}+\sum_{\begin{array}{c}j=1\\ j\neq i,k\end{array}}^N Gm_j\left(\frac{1}{r_{ij}}-\frac{\vec{r}_i\cdot\vec{r}_j}{r_j^3}\right)\right]
   \end{align}
   $$

2. 雅可比坐标系：
   
   $P_2$ 相对 $P_1$ 位置坐标 $\vec{r}_2'$

   $P_3$ 相对 $P_1-P_2$ 质心位置坐标 $\vec{r}_3'$

   $P_4$ 相对 $P_1-P_2-P_3$ 质心位置坐标 $\vec{r}_4'$

   ...

   $(\vec{r}_2',\vec{r}_3',...\vec{r}_N',\vec{r}_C)$

   $$
   \vec{r}_i'=\vec{r}_i-\frac{1}{\eta_i}\sum_{j=1}^{i-1}m_j\vec{r}_j,\ 2\le i\le N
   $$
   $$
   \eta_i=\sum_{j=1}^{\boldsymbol{i-1}}m_j
   $$

   运动方程
   $$
   \ddot{r}_i'=\frac{1}{\mu_i}\nabla_{i'}U
   $$
   $$
   \mu_i\equiv\frac{m_i\eta_i}{m_i+\eta_i}
   $$

   正则坐标及哈密顿量
   $$
   \vec{q}_i=\vec{r}_{i+1}',\ i=1,...,N-1
   $$
   $$
   \vec{p}_i=\mu_{i+1}\dot{\vec{r}}_{i+1}',\ i=1,...,N-1
   $$
   $$
   H=\sum_{i=1}^{N-1}\frac{1}{2\mu_i}p_i^2-U(\vec{q}_i)
   $$

3. 作用量-角变量：角坐标为循环坐标，周期函数解
   
   可积哈密顿系统的解在相空间对应一系列环面，KAM环面

   不可积系统对应破碎的KAM环面

   完全可积二体问题，常用的作用量-角变量是 Delaunay 变量

4. 哈密顿-雅可比变量： $(P,Q)$ 使哈密顿量变为零

   旧正则变量 $(p,q)$ 哈密顿量 $H(p,q,t)$

   寻找哈密顿-雅可比变量，等价于求解生成函数 $\Psi(q,P,t)$ 的哈密顿-雅可比方程
   $$
   \frac{\partial\Psi}{\partial t}+H(q,\frac{\partial\Psi}{\partial q},t)=0
   $$

## 三体问题

### 特解

考虑三个天体相对旋转非惯性系静止的特解：
1. 排在一条直线上，绕质心旋转
2. 构成边长为 $a$ 的正三角形，绕质心以角速度 $n=\sqrt{\frac{G(m_0+m_1+m_2)}{a^3}}$ 旋转

- 中心构型：
  $$
  \sum_{\begin{array}{c}j=0 \\ j\neq i\end{array}}^{N-1}\frac{m_j\vec{a}_{ij}}{a_{ij}^3}=-\lambda\vec{a}_i
  $$
  对于三体问题，上式有共线解和正三角形解。通过定义特殊矢量乘法，配以中心构型可以给出 $N$ 体问题的若干特解。

### 限制性三体问题

- 二体系统加测试天体问题称为限制性三体问题

- 在三体问题共线特解中分别取三个天体为测试天体可以给出第一、第二、第三拉格朗日点

  考虑正三角形解给出第四、第五拉格朗日点

- 限制性三体问题根据两个有限质量天体的相对运动轨道形状分为圆型、椭圆型和抛物型

### 圆型限制性三体问题

- 引入记号
  $$
  \Omega\equiv\frac{1}{2}(x^2+y^2)+\frac{1-\mu}{r_1}+\frac{\mu}{r_2}
  $$
  运动方程
  $$
  \frac{\mathrm{d}^2x}{\mathrm{d}\tau^2}-2\frac{\mathrm{d}y}{\mathrm{d}\tau}=\frac{\partial\Omega}{\partial x}
  $$
  $$
  \frac{\mathrm{d}^2y}{\mathrm{d}\tau^2}+2\frac{\mathrm{d}x}{\mathrm{d}\tau}=\frac{\partial\Omega}{\partial y}
  $$
  $$
  \frac{\mathrm{d}^2z}{\mathrm{d}\tau^2}=\frac{\partial\Omega}{\partial z}
  $$

- 雅可比积分（旋转势能、引力势能和动能和）：
  $$
  a^2n^2C_J=n^2(x_0^2+y_0^2)+2G\frac{m_1}{r_{10}}+2G\frac{m_2}{r_{20}}-(\dot{x}_0^2+\dot{y}_0^2+\dot{z}_0^2)
  $$

- 蒂塞郎准则：两次测定彗星相对太阳的位置和速度，根据雅可比积分判定是否为同一颗彗星

- 零速度面：
  $$
  x^2+y^2+\frac{2(1-\mu)}{\sqrt{(x-x_1)^2+y^2+z^2}}+\frac{2\mu}{\sqrt{(x-x_2)^2+y^2+z^2}}=C_J
  $$

- 希尔作用范围：天体到第一拉格朗日点构成球面

- 洛希势和洛希瓣：引力势+离心势

### 拉格朗日点的动力学稳定性

- 线性稳定性分析：
  
  动力学系统
  $$
  \frac{\mathrm{d}y_i}{\mathrm{d}t}=f_i(y_1,y_2,...,y_N),\quad i=1,...,N
  $$
  取线性微扰 $y_i^o(t)+\xi_i(t)$
  $$
  \frac{\mathrm{d}\xi_i}{\mathrm{d}t}=\sum_{j=1}^N\left.\frac{\partial f_i}{\partial y_j}\right|_{y=y^o}\xi_j
  $$

- 共线特解拉格朗日点 $L_1,L_2,L_3$ 不稳定
  
  记 Ruth 临界质量 $\mu_1=\frac{1}{18}(9-\sqrt{69})$ 当
  1. $\mu_1<\mu\le\frac{1}{2}$ 和 $\mu=\mu_1$ 时，$L_4,L_5$ 不稳定
  2. $\mu<\mu_1$ 时，$L_4,L_5$ 稳定

## 摄动理论

### 受摄二体问题

- 受摄二体问题
$$
\ddot{\vec{r}}=\vec{F}_0+\vec{F}_e=-G\frac{M+m}{r^3}\vec{r}+\vec{F}_e
$$

- 吻切轨道
  
  受摄二体问题的解
  $$
  \vec{r}=\vec{r}(C_1(t),C_2(t),C_3(t),C_4(t),C_5(t),C_6(t);t)
  $$
  $$
  \dot{\vec{r}}=\dot{\vec{r}}(C_1(t),C_2(t),C_3(t),C_4(t),C_5(t),C_6(t);t)
  $$

  每个时刻 $t$ ，存在一个由 $C_1(t),C_2(t),C_3(t),C_4(t),C_5(t),C_6(t)$ 决定的二体问题轨道，该轨道与实际运动轨道互为吻切轨道。

### 摄动方程

- 摄动方程
  $$
  \sum_{j=1}^6\frac{\partial\dot{\vec{r}}}{\partial C_j}\frac{\mathrm{d}C_j}{\mathrm{d}t}=\vec{F}_e
  $$
  构造守恒量 $\psi$: $\psi(C_1,C_2,C_3,C_4,C_5,C_6)=\psi(\vec{r},\dot{\vec{r}})$
  $$
  \sum_{j=1}^6\frac{\partial\psi}{\partial C_j}\frac{\mathrm{d}C_j}{\mathrm{d}t}=\frac{\partial\psi}{\partial\dot{\vec{r}}}\vec{F}_e
  $$

- STW 型摄动方程：
  
  取六个轨道根数 $a,e,\iota,\Omega,\omega,M_0$ ，记 $\vec{F}_e$ 在 $(\hat{r},\hat{\theta},\hat{n})$ 方向的分量为 $S,T,W$

  1. 能量守恒
  $$
  \frac{\mathrm{d}a}{\mathrm{d}t}=\frac{2}{n\sqrt{1-e^2}}[e\sin fS+(1+e\cos f)T]
  $$
  2. 角动量守恒
  $$
  \frac{\mathrm{d}e}{\mathrm{d}t}=\frac{\sqrt{1-e^2}}{na}[\sin fS+(\cos f+\cos E)T]
  $$
  3. 角动量的 $x,y$ 分量
  $$
  \frac{\mathrm{d}\iota}{\mathrm{d}t}=\frac{r\cos(\omega+f)}{na^2\sqrt{1-e^2}}W
  $$
  $$
  \frac{\mathrm{d}\Omega}{\mathrm{d}t}=\frac{r\sin(\omega+f)}{na^2\sqrt{1-e^2}\sin\iota}W
  $$
  4. 拉普拉斯积分守恒量 $z$ 分量
  $$
  \frac{\mathrm{d}\omega}{\mathrm{d}t}=\frac{\sqrt{1-e^2}}{nae}\left[-S\cos f+T\left(1+\frac{r}{p}\right)\sin f\right]-W\cos\iota\frac{r\sin(\omega+f)}{na^2\sin\iota\sqrt{1-e^2}}
  $$
  5. 开普勒方程 $M=E-e\sin E$ 的时间导数
  $$
  \frac{\mathrm{d}M}{\mathrm{d}t}=n-\frac{1-e^2}{nae}\left[-S\left(\cos f-2e\frac{r}{p}\right)+T\sin f\left(1+\frac{r}{p}\right)\right]
  $$

- UNW 型摄动方程：

  把摄动力按速度切向 $(\hat{v})$ 、速度法向 $(\hat{w})$ 和轨道面法向展开
  $$
  \vec{F}_e=U\hat{v}+N\hat{w}+W\hat{n}=S\hat{r}+T\hat{\theta}+W\hat{n}
  $$
  由 STW 型摄动方程有：
  $$
  \frac{\mathrm{d}a}{\mathrm{d}t}=\frac{2}{n\Gamma}U
  $$
  $$
  \frac{\mathrm{d}e}{\mathrm{d}t}=\frac{\Gamma}{na}[2U(e+\cos f)-N\beta\sin E]
  $$
  $$
  \frac{\mathrm{d}\iota}{\mathrm{d}t}=W\frac{\beta}{na}\frac{\cos(\omega+f)}{1+e\cos f}
  $$
  $$
  \frac{\mathrm{d}\Omega}{\mathrm{d}t}=W\frac{\beta}{na}\frac{\sin(\omega+f)}{1+e\cos f}\csc \iota
  $$
  $$
  \frac{\mathrm{d}\omega}{\mathrm{d}t}=\frac{\Gamma}{nae}\left[2U\sin f+N(e+\cos E)-\dot{\Omega}\cos\iota\right]
  $$
  $$
  \frac{\mathrm{d}M}{\mathrm{d}t}=n-\frac{\beta\Gamma}{nae}\left[-2U\left(1+\frac{e^2}{1+e\cos f}\right)\sin f+N(e-\cos E)\right]
  $$
  其中
  $$
  \beta\equiv\sqrt{1-e^2},\quad\Gamma\equiv\frac{\sqrt{1-e^2}}{\sqrt{1+2e\cos f+e^2}}
  $$

这两组摄动方程为高斯型摄动方程，下面考虑保守力型摄动方程（拉格朗日型摄动方程）

- 拉格朗日型摄动方程：

  记摄动力 $\vec{F}_e=\nabla R$ ，STW 型摄动方程为：
  $$
  \frac{\mathrm{d}a}{\mathrm{d}t}=\frac{2}{na}\frac{\partial R}{\partial M}
  $$
  $$
  \frac{\mathrm{d}e}{\mathrm{d}t}=\frac{1-e^2}{na^2e}\frac{\partial R}{\partial M}-\frac{\sqrt{1-e^2}}{na^2e}\frac{\partial R}{\partial \omega}
  $$
  $$
  \frac{\mathrm{d}\iota}{\mathrm{d}t}=\frac{1}{na^2\sqrt{1-e^2}\sin\iota}\left(\cos\iota\frac{\partial R}{\partial \omega}-\frac{\partial R}{\partial \Omega}\right)
  $$
  $$
  \frac{\mathrm{d}\Omega}{\mathrm{d}t}=\frac{1}{na^2\sqrt{1-e^2}\sin\iota}\frac{\partial R}{\partial \iota}
  $$
  $$
  \frac{\mathrm{d}\omega}{\mathrm{d}t}=\frac{\sqrt{1-e^2}}{na^2e}\frac{\partial R}{\partial e}-\cos \iota\frac{\mathrm{d}\Omega}{\mathrm{d}t}
  $$
  $$
  \frac{\mathrm{d}M}{\mathrm{d}t}=n-\frac{1-e^2}{na^2e}\frac{\partial R}{\partial e}-\frac{2}{na}\frac{\partial R}{\partial a}
  $$
