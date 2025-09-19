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

