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
E=\frac{1}{2}\dot{\vec{r}}\cdot\dot{\vec{r}}-\frac{\mu}{r}
$$
