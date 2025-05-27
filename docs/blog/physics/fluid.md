# 流体力学

## Introduction

- how to describe fluid?

density $\rho$ , pressure $p$ , temperature $T$ , velosity $\boldsymbol{u}$

- steady & unsteady
$$
\frac{\partial}{\partial t}=0 \ ?
$$

- 2D flow

two components (plane flow)

two coordinates (e.g. $\partial/\partial\varphi=0$ )

### streamline

the equation of streamline at a FIXED time:
$$
\frac{\mathrm{d}x}{u_x}=\frac{\mathrm{d}y}{u_y}=\frac{\mathrm{d}z}{u_z}
$$

::: info e.g.
for a fluid rotate at $\boldsymbol{\Omega}=\Omega\hat{z}$ , velocity $\boldsymbol{u}=\boldsymbol{\Omega}\times\boldsymbol{r}$
$$
\boldsymbol{u}=\left[\begin{array}{c}
-y\Omega \\
x\Omega \\
0
\end{array}\right]
$$
streamline equation:
$$
\frac{\mathrm{d}x}{-y\Omega}=\frac{\mathrm{d}y}{x\Omega}\Rightarrow x^2+y^2=const
$$
:::

### material derivative and advection

given $\boldsymbol{u}=(u_x,u_y,u_z)$ and function $f(x,y,z,t)$

we have
$$
\begin{align}
\frac{\mathrm{d}f}{\mathrm{d}t}&=\frac{\partial f}{\partial t}+\frac{\partial f}{\partial x}\frac{\mathrm{d}x}{\mathrm{d}t}+\frac{\partial f}{\partial y}\frac{\mathrm{d}y}{\mathrm{d}t}+\frac{\partial f}{\partial z}\frac{\mathrm{d}z}{\mathrm{d}t} \\
&=\frac{\partial f}{\partial t}+u_x\frac{\partial f}{\partial x}+u_y\frac{\partial f}{\partial y}+u_z\frac{\partial f}{\partial z} \\
&=\frac{\partial f}{\partial t}+(\boldsymbol{u}\cdot\nabla)f
\end{align}
$$

then we call
$$
\underbrace{\frac{\mathrm{d}f}{\mathrm{d}t}}_{\text{material derivative}}=\underbrace{\frac{\partial f}{\partial t}}_{\text{local rate}}+\underbrace{(\boldsymbol{u}\cdot\nabla)f}_{\text{advection rate}}
$$

when $f$ is $\boldsymbol{u}$
$$
\underbrace{\frac{\mathrm{d}\boldsymbol{u}}{\mathrm{d}t}}_{\text{Lagrangian description}}=\underbrace{\frac{\partial\boldsymbol{u}}{\partial t}+(\boldsymbol{u}\cdot\nabla)\boldsymbol{u}}_{\text{Eulerian description}}
$$

### incompressible fluid

$$
\iint\boldsymbol{u}\cdot\boldsymbol{n}\mathrm{d}S=0
$$
$$
\nabla\cdot\boldsymbol{u}=0
$$

### mass conservation

control volume FIXED in space (Eulerian description)
$$
\frac{\partial}{\partial t}\iiint\rho\mathrm{d}V=-\iint\rho\boldsymbol{u}\cdot\boldsymbol{n}\mathrm{d}S=-\iiint\nabla\cdot(\rho\boldsymbol{u})\mathrm{d}V
$$
$$
\Rightarrow \frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\boldsymbol{u})=0
$$
$$
\Leftrightarrow \frac{\partial\rho}{\partial t}+(\boldsymbol{u}\cdot\nabla)\rho+\rho(\nabla\cdot\boldsymbol{u})=0
$$
$$
\Leftrightarrow \frac{\mathrm{d}\rho}{\mathrm{d}t}+\rho(\nabla\cdot\boldsymbol{u})=0
$$

- incompressible: $\nabla\cdot\boldsymbol{u}=0$, $\dfrac{\mathrm{d}\rho}{\mathrm{d}t}=0$
- compressible: $\dfrac{\mathrm{d}}{\mathrm{d}t}\ln\rho=-\nabla\cdot\boldsymbol{u}$

### vorticity

- vorticity $\boldsymbol{\omega}=\nabla\times\boldsymbol{u}$

::: info e.g.
take a fluid rotate at $\boldsymbol{\Omega}=\Omega\hat{z}$ again.

consider a circle ($\Gamma$) in x-y plane with radius $R$ , so we can calculate the vorticity by:
$$
\oint_\Gamma\boldsymbol{u}\mathrm{d}\boldsymbol{l}=\iint(\nabla\times\boldsymbol{u})\mathrm{d}S
$$
$$
\Rightarrow \Omega R\cdot 2\pi R=\omega\cdot\pi R^2
$$
$$
\Rightarrow \omega=2\Omega
$$

thus we know vorticity is twice of local rotation rate.
:::

### potential flow

$$
\boldsymbol{\omega}=0 \quad \boldsymbol{u}=\nabla \Psi
$$
