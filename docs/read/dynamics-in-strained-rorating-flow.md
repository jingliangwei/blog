# dynamics in strained rorating flow

the [pdf](/read/chaotic-dynamics-in-a-strained-rotating-flow-a-precessing-plane-fluid-layer.pdf) of paper *chaotic dynamics in a strained rotating flow: a precessing plane fluid layer*

## prove of (2.12)

paper have given the equation of motion in boundary (rotating) frame (2.4):
$$
\frac{\partial\boldsymbol{u}}{\partial t}+2[\hat{\boldsymbol{z}}+\boldsymbol{\epsilon}(t)]\times\boldsymbol{u}+\boldsymbol{u}\cdot\nabla\boldsymbol{u}+\nabla p=E\nabla^2\boldsymbol{u}+2z\boldsymbol{\epsilon}(t)
$$
the boundary conditions
$$
\boldsymbol{u}(x,y,\pm\frac{1}{2})=\boldsymbol{0}
$$
where
$$
\boldsymbol{\epsilon}(t)=\epsilon\hat{\boldsymbol{X}}:=\epsilon(\hat{\boldsymbol{x}}\cos t-\hat{\boldsymbol{y}}\sin t)
$$

and a simple flow solution in the boundary frame is
$$
\boldsymbol{u}_{\text{basic}}=2[\boldsymbol{\epsilon}(t)\times\hat{\boldsymbol{z}}]\hat{\boldsymbol{z}}\cdot\boldsymbol{r}=-2\epsilon z(\hat{\boldsymbol{x}}\sin t+\hat{\boldsymbol{y}}\cos t)
$$

$\boldsymbol{u}_{\text{basic}}$ satisfies
$$
\frac{\partial\boldsymbol{u}_{\text{basic}}}{\partial t}+2[\hat{\boldsymbol{z}}+\boldsymbol{\epsilon}(t)]\times\boldsymbol{u}_{\text{basic}}+\boldsymbol{u}_{\text{basic}}\cdot\nabla\boldsymbol{u}_{\text{basic}}+\nabla p=E\nabla^2\boldsymbol{u}_{\text{basic}}+2z\boldsymbol{\epsilon}(t)
$$

let velocity perturbation $\tilde{\boldsymbol{u}}=\boldsymbol{u}-\boldsymbol{u}_{\text{basic}}$

replacing the $\boldsymbol{u}$ in (2.4) with $\tilde{\boldsymbol{u}}+\boldsymbol{u}_{\text{basic}}$ and applying the relation of basic flow, we are led to
$$
\frac{\partial\tilde{\boldsymbol{u}}}{\partial t}+2[\hat{\boldsymbol{z}}+\boldsymbol{\epsilon}(t)]\times\tilde{\boldsymbol{u}}+\tilde{\boldsymbol{u}}\cdot\nabla\tilde{\boldsymbol{u}}+\tilde{\boldsymbol{u}}\cdot\nabla\boldsymbol{u}_{\text{basic}}+\boldsymbol{u}_{\text{basic}}\cdot\nabla\tilde{\boldsymbol{u}}+\nabla\tilde{p}=E\nabla^2\tilde{\boldsymbol{u}}
$$

here we have
$$
\boldsymbol{\epsilon}(t)\times\tilde{\boldsymbol{u}}=\left|\begin{array}{ccc}
\hat{\boldsymbol{x}} & \hat{\boldsymbol{y}} & \hat{\boldsymbol{z}} \\
\epsilon\cos t & -\epsilon\sin t & 0 \\
\tilde{u}_x & \tilde{u}_y & \tilde{u}_z
\end{array}\right|=\left[\begin{array}{c}
-\epsilon\sin t\tilde{u}_z \\
-\epsilon\cos t\tilde{u}_z \\
\epsilon\cos t\tilde{u}_y+\epsilon\sin t\tilde{u}_x
\end{array}\right]
$$

$$
\tilde{\boldsymbol{u}}\cdot\nabla\boldsymbol{u}_{\text{basic}}=\left(\tilde{u}_x\frac{\partial}{\partial x}+\tilde{u}_y\frac{\partial}{\partial y}+\tilde{u}_z\frac{\partial}{\partial z}\right)\left[\begin{array}{c}
-2\epsilon z\sin t \\
-2\epsilon z\cos t \\
0
\end{array}\right]=\left[\begin{array}{c}
-2\epsilon\sin t\tilde{u}_z \\
-2\epsilon\cos t\tilde{u}_z \\
0
\end{array}\right]
$$

$$
\boldsymbol{u}_{\text{basic}}\cdot\nabla\tilde{\boldsymbol{u}}=\left(-2\epsilon z\sin t\frac{\partial}{\partial x}-2\epsilon z\cos t\frac{\partial}{\partial y}\right)\left[\begin{array}{c}
\tilde{u}_x \\
\tilde{u}_y \\
\tilde{u}_z
\end{array}\right]=-2\epsilon z\left[\sin t\frac{\partial}{\partial x}+\cos t\frac{\partial}{\partial y}\right]\tilde{u}
$$

so we have
$$
\begin{align}
&\frac{\partial\tilde{\boldsymbol{u}}}{\partial t}+2\hat{\boldsymbol{z}}\times\tilde{\boldsymbol{u}}+\tilde{\boldsymbol{u}}\cdot\nabla\tilde{\boldsymbol{u}}+\nabla\tilde{p}-E\nabla^2\tilde{\boldsymbol{u}}=-2\boldsymbol{\epsilon}(t)\times\tilde{u}-\tilde{u}\cdot\nabla\boldsymbol{u}_{\text{basic}}-\boldsymbol{u}_{\text{basic}}\cdot\nabla\tilde{\boldsymbol{u}} \\
&=\left[\begin{array}{c}
2\epsilon\sin t\tilde{u}_z \\
2\epsilon\cos t\tilde{u}_z \\
-2\epsilon\cos t\tilde{u}_y-2\epsilon\sin t\tilde{u}_x
\end{array}\right]+\left[\begin{array}{c}
2\epsilon\sin t\tilde{u}_z \\
2\epsilon\cos t\tilde{u}_z \\
0
\end{array}\right]+2\epsilon z\left[\sin t\frac{\partial}{\partial x}+\cos t\frac{\partial}{\partial y}\right]\tilde{u} \\
&=\left[\begin{array}{c}
4\epsilon\sin t\tilde{u}_z \\
4\epsilon\cos t\tilde{u}_z \\
-2\epsilon\cos t\tilde{u}_y-2\epsilon\sin t\tilde{u}_x
\end{array}\right]+2\epsilon z\left[\sin t\frac{\partial}{\partial x}+\cos t\frac{\partial}{\partial y}\right]\tilde{u} \\
&=\epsilon\left\{2z\left(\sin t\frac{\partial}{\partial x}+\cos t\frac{\partial}{\partial y}\right)+\left[\begin{array}{ccc}
0 & 0 & 4\sin t \\
0 & 0 & 4\cos t \\
-2\sin t & -2\cos t & 0
\end{array}\right]\right\}\tilde{\boldsymbol{u}}
\end{align}
$$

here we get (2.12)

and the boundary conditions
$$
\frac{\partial\tilde{u}}{\partial z}=\frac{\partial\tilde{v}}{\partial z}=\tilde{w}=0\quad\text{on}\quad z=\pm\frac{1}{2}
$$
where
$$
\tilde{\boldsymbol{u}}=\left[\begin{array}{c}\tilde{u} \\ \tilde{v} \\ \tilde{w}\end{array}\right]
$$

## prove of (4.2)

considering the linear part and ignoring viscosity in (2.12), we have
$$
\begin{multline}
\frac{\partial\tilde{\boldsymbol{u}}}{\partial t}+2\hat{\boldsymbol{z}}\times\tilde{\boldsymbol{u}}+\nabla\tilde{p} \\
=\epsilon\left\{2z\left(\sin t\frac{\partial}{\partial x}+\cos t\frac{\partial}{\partial y}\right)+\left[\begin{array}{ccc}
0 & 0 & 4\sin t \\
0 & 0 & 4\cos t \\
-2\sin t & -2\cos t & 0
\end{array}\right]\right\}\tilde{\boldsymbol{u}} 
\end{multline}
$$

here
$$
\begin{align}
& 2z\left(\sin t\frac{\partial}{\partial x}+\cos t\frac{\partial}{\partial y}\right)+\left[\begin{array}{ccc}
0 & 0 & 4\sin t \\
0 & 0 & 4\cos t \\
-2\sin t & -2\cos t & 0
\end{array}\right] \\
& =\left[\begin{array}{ccc}
2z(\sin t\partial_x+\cos t\partial_y) & 0 & 4\sin t \\
0 & 2z(\sin t\partial_x+\cos t\partial_y) & 4\cos t \\
-2\sin t & -2\cos t & 2z(\sin t\partial_x+\cos t\partial_y)
\end{array}\right]
\end{align}
$$

applying $\sin t=\dfrac{\mathrm{e}^{it}-\mathrm{e}^{-it}}{2i}$ and $\cos t=\dfrac{\mathrm{e}^{it}+\mathrm{e}^{-it}}{2}$ yeilds
$$
\begin{align}
& =\left[\begin{array}{ccc}
z\left(\dfrac{\mathrm{e}^{it}-\mathrm{e}^{-it}}{i}\partial_x+\dfrac{\mathrm{e}^{it}+\mathrm{e}^{-it}}{1}\partial_y\right) & 0 & 2\dfrac{\mathrm{e}^{it}-\mathrm{e}^{-it}}{i} \\
0 & z\left(\dfrac{\mathrm{e}^{it}-\mathrm{e}^{-it}}{i}\partial_x+\dfrac{\mathrm{e}^{it}+\mathrm{e}^{-it}}{1}\partial_y\right) & 2\dfrac{\mathrm{e}^{it}+\mathrm{e}^{-it}}{1} \\
-\dfrac{\mathrm{e}^{it}-\mathrm{e}^{-it}}{i} & -\dfrac{\mathrm{e}^{it}+\mathrm{e}^{-it}}{1} & z\left(\dfrac{\mathrm{e}^{it}-\mathrm{e}^{-it}}{i}\partial_x+\dfrac{\mathrm{e}^{it}+\mathrm{e}^{-it}}{1}\partial_y\right)
\end{array}\right] \\
& =\mathrm{e}^{it}\left[\begin{array}{ccc}
z(\partial_y-i\partial_x) & 0 & -2i \\
0 & z(\partial_y-i\partial_x) & 2 \\
i & -1 & z(\partial_y-i\partial_x)
\end{array}\right]+\mathrm{e}^{-it}\left[\begin{array}{ccc}
z(\partial_y+i\partial_x) & 0 & 2i \\
0 & z(\partial_y+i\partial_x) & 2 \\
-i & -1 & z(\partial_y+i\partial_x)
\end{array}\right]
\end{align}
$$

## the theory of 4.1 part

### when $\epsilon=0$

the inertial wave problem ([Greenspan 1968](/read/The-Theory-of-Rotating-Fluids.pdf))

$$
\left[\begin{array}{c} u \\ v \\ w \\ p\end{array}\right]=\left[\begin{array}{c}
k^2(k_x\lambda-2ik_y)\cos(n\pi[z+\frac{1}{2}])/4k^2_\bot \\
k^2(k_y\lambda+2ik_x)\cos(n\pi[z+\frac{1}{2}])/4k^2_\bot \\
-ik_z\sin(n\pi[z+\frac{1}{2}])/\lambda \\
\cos(n\pi[z+\frac{1}{2}])
\end{array}\right]\exp(i(k_xx+k_yy+\lambda t))
$$
with $k^2_\bot:=k^2_x+k^2_y$ , $k_z:=n\pi$ , $k^2:=k^2_\bot+k^2_z$ and the dispersion relation is
$$
\lambda=\frac{\pm 2k_z}{k}
$$
where $n=0,1,2,...$ and $k_x,k_y\in\mathbb{R}$ .

### for $0<\epsilon\ll 1$

consider a linear combination of two inertial waves ($\lambda_A\neq\lambda_B$)
$$
\tilde{\boldsymbol{u}}=A(\tau)\boldsymbol{u}_A(\boldsymbol{x})\exp(i\lambda_A t)+B(\tau)\boldsymbol{u}_B(\boldsymbol{x})\exp(i\lambda_B t)+\epsilon\tilde{\boldsymbol{v}}(\boldsymbol{x},t)+\cdots
$$
to leading order in $\epsilon$

using inner product to get the amplitude equations
