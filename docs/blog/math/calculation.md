# Calculation

## 二元函数泰勒公式

$$
f(x_0+\delta x,y_0+\delta y)=\sum_{k=0}^n \left(\delta x\frac{\partial}{\partial x}+\delta y\frac{\partial}{\partial y}\right)^k f(x_0,y_0)+\mathcal{O}(\delta^{n+1})
$$

## 高斯公式和斯托克斯公式

- Gauss
$$
\iiint_\Omega \nabla\cdot\vec{A}\mathrm{d}v=\iint_\Sigma A_n\mathrm{d}S
$$

- Stokes
$$
\iint_\Sigma \left|\begin{array}{ccc}
\mathrm{d}y\mathrm{d}z & \mathrm{d}z\mathrm{d}x & \mathrm{d}x\mathrm{d}y \\
\dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\
P & Q & R
\end{array}\right|=\oint_\Gamma P\mathrm{d}x+Q\mathrm{d}y+R\mathrm{d}z
$$

## 二重积分换元 & Jacobi matrix

作变换 $x=x(u,v),y=y(u,v)$

Jacobi matrix $J(u,v)$
$$
J(u,v)=\frac{\partial(x,y)}{\partial(u,v)}\equiv\left[\begin{array}{cc}
\dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v} \\
\dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v}
\end{array}\right]
$$

$$
\iint_D f(x,y)\,\mathrm{d}x\mathrm{d}y=\iint_{D'}f[x(u,v),y(u,v)]\text{det}J(u,v)\,\mathrm{d}u\mathrm{d}v
$$
