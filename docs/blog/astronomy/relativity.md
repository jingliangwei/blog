# 相对论天体物理

## 从时间、空间到时空

### 用时空图画出洛伦兹变换

- 洛伦兹变换
  
  $$
  \begin{align}
  t'&=\gamma\left(t-\frac{vx}{c^2}\right), \\
  x'&=\gamma(x-vt), \\
  \gamma&\equiv\frac{1}{\sqrt{1-v^2/c^2}}.
  \end{align}
  $$

### 动钟变慢

![动钟变慢时空图](./relativity_fig/move_clock_slow.png)

### 双生子佯谬

![双生子佯谬时空图](./relativity_fig/brothers_trouble.png)

### 闵氏几何

时空几何（闵氏几何）线元
$$
ds^2=-dt^2+dx^2+dy^2+dz^2
$$

## 从矢量到张量

### 相对论速度变换

$$
\begin{align}
u'^x&=\frac{u^x-v}{1-vu^x}, \\
u'^y&=\frac{u^y}{\gamma(1-vu^x)}, \\
u'^z&=\frac{u^z}{\gamma(1-vu^x)}.
\end{align}
$$

### 切失与偏导

坐标基底的变换关系
$$
\left(\frac{\partial}{\partial \tilde{x}^\mu}\right)^a=\left(\frac{\partial}{\partial x^\nu}\right)^a\frac{\partial x^\nu}{\partial\tilde{x}^\mu}
$$

### 坐标微分与对偶坐标基底

$$
(d\tilde{x}^\mu)_a=\frac{\partial\tilde{x}^\mu}{\partial x^\nu}(dx^\nu)_a
$$

### 从并矢到张量

并矢：把矢量放一块 $u^av^b$

张量：
$$
{{T_a}^{bc}}_d={{T_\mu}^{\nu\sigma}}_\tau(dx^\mu)_a\left(\frac{\partial}{\partial x^\nu}\right)^b\left(\frac{\partial}{\partial x^\sigma}\right)^c(dx^\tau)_d
$$

张量缩并：
$$
\left(\frac{\partial}{\partial x^\mu}\right)^a(dx^\nu)_a={\delta^\nu}_\mu
$$

#### 度规张量

度规系数 $g_{\mu\nu}$

不同坐标基底下的度规系数
$$
g_{kl}=\tilde{g}_{ij}\frac{d\tilde{x}^i}{dx^k}\frac{d\tilde{x}^j}{dx^l}
$$

度规张量 $g_{ab}\equiv g_{\mu\nu}(dx^\mu)_a(dx^\nu)_b$

逆度规张量 $\displaystyle g^{ab}\equiv g^{\mu\nu}\left(\frac{\partial}{\partial x^\mu}\right)^a\left(\frac{\partial}{\partial x^\nu}\right)^b$ 其中 $g^{\mu\nu}\equiv(g_{\mu\nu})^{-1}$

指标升降
$$
T_a\equiv g_{ab}T^b
$$
$$
W^a\equiv g^{ab}W_b
$$

#### 电磁场张量

电磁场张量
$$
F_{\mu\nu}=\left[\begin{array}{cccc}
0 & -E_x & -E_y & -E_z \\
E_x & 0 & B_z & -B_y \\
E_y & -B_z & 0 & B_x \\
E_z & B_y & -B_x & 0
\end{array}\right]
$$
$$
F_{ab}\equiv F_{\mu\nu}(dx^\mu)_a(dx^\nu)_b
$$
