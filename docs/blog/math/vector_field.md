# 矢量运算和基础场论

## 矢量运算

- 点积 (scalar product) $\boldsymbol{a}\cdot\boldsymbol{b}=a_ib_i$
::: info 爱因斯坦求和约定
出现重复下标时默认对该下标遍历求和。
:::
- 矢积 (vector product)
$$
\boldsymbol{a}\times\boldsymbol{b}=\left|\begin{array}{ccc}
\hat{e}_1 & \hat{e}_2 & \hat{e}_3 \\
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3
\end{array}\right|=\varepsilon_{ijk}a_ib_j\hat{e}_k
$$
::: info $\varepsilon_{ijk}$
$\varepsilon_{ijk}$ 称为列维-席维塔符号，其定义为

$$
\varepsilon_{ijk} = 
\begin{cases}
+1 & \text{若} ijk \text{为} 123 \text{的偶排列} \\
-1 & \text{若} ijk \text{为} 123 \text{的奇排列} \\
0 & \text{其他}
\end{cases}
$$
:::

- 三矢积公式 (triple vector product)
$$
(\boldsymbol{a}\times\boldsymbol{b})\times\boldsymbol{c}=(\boldsymbol{a}\cdot\boldsymbol{c})\boldsymbol{b}-(\boldsymbol{b}\cdot\boldsymbol{c})\boldsymbol{a}
$$
$$
\boldsymbol{c}\times(\boldsymbol{a}\times\boldsymbol{b})=(\boldsymbol{b}\cdot\boldsymbol{c})\boldsymbol{a}-(\boldsymbol{a}\cdot\boldsymbol{c})\boldsymbol{b}
$$

## 基础场论

- 梯度 (gradient)
$$
\begin{align}
\nabla\psi&=\frac{\partial\psi}{\partial x}\hat{x}+\frac{\partial\psi}{\partial y}\hat{y}+\frac{\partial\psi}{\partial z}\hat{z} \\
&=\frac{\partial\psi}{\partial r}\hat{r}+\frac{1}{r}\frac{\partial\psi}{\partial\theta}\hat{\theta}+\frac{\partial\psi}{\partial z}\hat{z} \\
&=\frac{\partial\psi}{\partial r}\hat{r}+\frac{1}{r}\frac{\partial\psi}{\partial\theta}\hat{\theta}+\frac{1}{r\sin\theta}\frac{\partial\psi}{\partial\phi}\hat{\phi}
\end{align}
$$

- 散度 (divergence)
$$
\begin{align}
\nabla\cdot\boldsymbol{a}&=\frac{\partial a_x}{\partial x}+\frac{\partial a_y}{\partial y}+\frac{\partial a_z}{\partial z} \\
&=\frac{1}{r}\frac{\partial}{\partial r}(ra_r)+\frac{1}{r}\frac{\partial a_\theta}{\partial\theta}+\frac{\partial a_z}{\partial z} \\
&=\frac{1}{r^2}\frac{\partial}{\partial r}(r^2a_r)+\frac{1}{r\sin\theta}\frac{\partial}{\partial\theta}(\sin\theta a_\theta)+\frac{1}{r\sin\theta}\frac{\partial a_\phi}{\partial\phi}
\end{align}
$$

- 旋度 (curl)
$$
\begin{align}
\nabla\times\boldsymbol{a}&=\left|\begin{array}{ccc}
\hat{x} & \hat{y} & \hat{z} \\
\dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\
a_x & a_y & a_z
\end{array}\right| \\
&=\frac{1}{r}\left|\begin{array}{ccc}
\hat{r} & r\hat{\theta} & \hat{z} \\
\dfrac{\partial}{\partial r} & \dfrac{\partial}{\partial\theta} & \dfrac{\partial}{\partial z} \\
a_r & ra_\theta & r_z
\end{array}\right| \\
&=\frac{1}{r^2\sin\theta}\left|\begin{array}{ccc}
\hat{r} & r\hat{\theta} & r\sin\theta\hat{\phi} \\
\dfrac{\partial}{\partial r} & \dfrac{\partial}{\partial\theta} & \dfrac{\partial}{\partial\phi} \\
a_r & ra_\theta & r\sin\theta a_\phi
\end{array}\right|
\end{align}
$$

- Laplace 算符 ( $\nabla^2=$ div grad )
$$
\begin{align}
\nabla^2\psi&=\frac{\partial^2\psi}{\partial x^2}\hat{x}+\frac{\partial^2\psi}{\partial y^2}\hat{y}+\frac{\partial^2\psi}{\partial z^2}\hat{z} \\
&=\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial\psi}{\partial r}\right)+\frac{1}{r^2}\frac{\partial^2\psi}{\partial \theta^2}+\frac{\partial^2\psi}{\partial z^2} \\
&=\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial\psi}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial\psi}{\partial\theta}\right)+\frac{1}{r^2\sin\theta}\frac{\partial^2\psi}{\partial\theta^2}
\end{align}
$$

## $\nabla$ 的运算法则

关于向量微分算符 $\nabla$ 的相关运算法则如下：

其中 $\phi,\psi$ 代表标量场，$\boldsymbol{f},\boldsymbol{g}$ 代表矢量场。
$$
\nabla(\phi\psi)=\phi\nabla\psi+\psi\nabla\phi
$$
$$
\nabla\cdot(\phi\boldsymbol{f})=(\nabla\phi)\cdot\boldsymbol{f}+\phi\nabla\cdot\boldsymbol{f}
$$
$$
\nabla\times(\phi\boldsymbol{f})=(\nabla\phi)\times\boldsymbol{f}+\phi\nabla\times\boldsymbol{f}
$$
$$
\nabla\cdot(\boldsymbol{f}\times\boldsymbol{g})=(\nabla\times\boldsymbol{f})\cdot\boldsymbol{g}-\boldsymbol{f}\cdot(\nabla\times\boldsymbol{g})
$$
$$
\nabla\times(\boldsymbol{f}\times\boldsymbol{g})=(\boldsymbol{g}\cdot\nabla)\boldsymbol{f}+(\nabla\cdot\boldsymbol{g})\boldsymbol{f}-(\boldsymbol{f}\cdot\nabla)\boldsymbol{g}-(\nabla\cdot\boldsymbol{f})\boldsymbol{g}
$$
$$
\nabla(\boldsymbol{f}\cdot\boldsymbol{g})=\boldsymbol{f}\times(\nabla\times\boldsymbol{g})+(\boldsymbol{f}\cdot\nabla)\boldsymbol{g}+\boldsymbol{g}\times(\nabla\times\boldsymbol{f})+(\boldsymbol{g}\cdot\nabla)\boldsymbol{f}
$$

- Laplace 算符
$$
\nabla^2\phi=\nabla\cdot\nabla\phi
$$

- 其他性质
$$
\nabla\cdot(\nabla\times\boldsymbol{f})=0
$$
$$
\nabla\times(\nabla\times\boldsymbol{f})=\nabla(\nabla\cdot\boldsymbol{f})-\nabla^2\boldsymbol{f}
$$

### 流体力学应用

在流体力学中常用的公式 $(\boldsymbol{u}\cdot\nabla)Q$ 和 $(\boldsymbol{u}\cdot\nabla)\boldsymbol{Q}$ 在三种坐标系中的表达式：

- 直角坐标系 (Cartesian coordinates)
- 球坐标 (Spherical polar coordinates)
- 柱坐标 (Cylindrical polar coordinates)

$$
\begin{align}
(\boldsymbol{u}\cdot\nabla)Q&=u_x\frac{\partial Q}{\partial x}+u_y\frac{\partial Q}{\partial y}+u_z\frac{\partial Q}{\partial z} \\
&=u_r\frac{\partial Q}{\partial r}+\frac{u_\theta}{r}\frac{\partial Q}{\partial \theta}+\frac{u_\phi}{r\sin\theta}\frac{\partial Q}{\partial \phi} \\
&=u_R\frac{\partial Q}{\partial R}+\frac{u_\phi}{R}\frac{\partial Q}{\partial\phi}+u_z\frac{\partial Q}{\partial z}
\end{align}
$$

$$
\begin{align}
(\boldsymbol{u}\cdot\nabla)\boldsymbol{Q}&=\left[\begin{array}{c}
    u_x\dfrac{\partial Q_x}{\partial x}+u_y\dfrac{\partial Q_x}{\partial y}+u_z\dfrac{\partial Q_x}{\partial z} \\
    u_x\dfrac{\partial Q_y}{\partial x}+u_y\dfrac{\partial Q_y}{\partial y}+u_z\dfrac{\partial Q_y}{\partial z} \\
    u_x\dfrac{\partial Q_z}{\partial x}+u_y\dfrac{\partial Q_z}{\partial y}+u_z\dfrac{\partial Q_z}{\partial z}
    \end{array}\right]_{x,y,z} \\
&=\left[\begin{array}{c}
    u_r\dfrac{\partial Q_r}{\partial r}+\dfrac{u_\theta}{r}\dfrac{\partial Q_r}{\partial \theta}+\dfrac{u_\phi}{r\sin\theta}\dfrac{\partial Q_r}{\partial\phi}-\dfrac{u_\theta Q_\theta+u_\phi Q_\phi}{r} \\
    u_r\dfrac{\partial Q_\theta}{\partial r}+\dfrac{u_\theta}{r}\dfrac{\partial Q_\theta}{\partial\theta}+\dfrac{u_\phi}{r\sin\theta}\dfrac{\partial Q_\theta}{\partial\phi}+\dfrac{u_\theta Q_r}{r}-\dfrac{u_\phi Q_\phi\cot\theta}{r} \\
    u_r\dfrac{\partial Q_\phi}{\partial r}+\dfrac{u_\theta}{r}\dfrac{\partial Q_\phi}{\partial\theta}+\dfrac{u_\phi}{r\sin\theta}\dfrac{\partial Q_\phi}{\partial\phi}+\dfrac{u_\phi Q_r}{r}+\dfrac{u_\phi Q_\theta\cot\theta}{r}
\end{array}\right]_{r,\theta,\phi} \\
&=\left[\begin{array}{c}
    u_R\dfrac{\partial Q_R}{\partial R}+\dfrac{u_\phi}{R}\dfrac{\partial Q_R}{\partial \phi}+u_z\dfrac{\partial Q_R}{\partial z}-\dfrac{u_\phi Q_\phi}{R} \\
    u_R\dfrac{\partial Q_\phi}{\partial R}+\dfrac{u_\phi}{R}\dfrac{\partial Q_\phi}{\partial \phi}+u_z\dfrac{\partial Q_\phi}{\partial z}+\dfrac{u_\phi Q_R}{R} \\
    u_R\dfrac{\partial Q_z}{\partial R}+\dfrac{u_\phi}{R}\dfrac{\partial Q_z}{\partial\phi}+u_z\dfrac{\partial Q_z}{\partial z}
\end{array}\right]_{R,\phi,z}
\end{align}
$$
