# Principles of Astrophysical Fluid Dynamics

## Introduction

### fluid element

A region over which we can define local variables.
The size $l_{\text{region}}$ needs to satisfy three conditions:

1. $l_{\text{region}}\ll l_{\text{scale}}\sim\dfrac{q}{\nabla q}$
2. $nl^3_{\text{region}}\gg 1$
3. $l_{\text{region}}\gg\lambda$

### formulation of the fluid equations

- Eulerian description:

  $\rho=\rho(\boldsymbol{r},t)$

  $\partial/\partial t$ evaluated at the *fixed position*

- Lagrangian description:

  $\rho=\rho(\boldsymbol{a},t)$

  $\mathrm{d}/\mathrm{d}t$ evaluated at the *fixed element*

  the position $\boldsymbol{r}=\boldsymbol{r}(\boldsymbol{a},t)$

::: info note
The Lagrangian description refers to the world as seen by an observer riding on a fluid element;
the Eulerian one refers to the world as seen at a fixed spatial position.
:::

- steady flows:
  
  $$
  \frac{\partial}{\partial t}=0
  $$

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

### kinematical concepts

- streamlines:

the tangent to a streamline at any point gives the direction of the velocity at that point.

the equation of streamline at a FIXED time:

Cartesian coordinates:
$$
\frac{\mathrm{d}x}{u_x}=\frac{\mathrm{d}y}{u_y}=\frac{\mathrm{d}z}{u_z}
$$

Spherical polars:
$$
\frac{\mathrm{d}r}{u_r}=\frac{r\mathrm{d}\theta}{u_\theta}=\frac{r\sin\theta\mathrm{d}\phi}{u_\phi}
$$

Cylindrical polars:
$$
\frac{\mathrm{d}R}{u_R}=\frac{\mathrm{d}z}{u_z}=\frac{R\mathrm{d}\phi}{u_\phi}
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
\frac{\mathrm{d}x}{-y\Omega}=\frac{\mathrm{d}y}{x\Omega}\Rightarrow x^2+y^2=\mathrm{const}
$$
:::

- particle paths:

  $$
  \frac{\mathrm{d}\boldsymbol{r}}{\mathrm{d}t}=\boldsymbol{u}(\boldsymbol{r},t)
  $$

Cartesian:
$$
\frac{\mathrm{d}x}{\mathrm{d}t}=u_x,\quad\frac{\mathrm{d}y}{\mathrm{d}t}=u_y,\quad\frac{\mathrm{d}z}{\mathrm{d}t}=u_z
$$

Spherical:
$$
\frac{\mathrm{d}r}{\mathrm{d}t}=u_r,\quad r\frac{\mathrm{d}\theta}{\mathrm{d}t}=u_\theta,\quad r\sin\theta\frac{\mathrm{d}\phi}{\mathrm{d}t}=u_\phi
$$

Cylindrical:
$$
\frac{\mathrm{d}R}{\mathrm{d}t}=u_R,\quad\frac{\mathrm{d}z}{\mathrm{d}t}=u_z,\quad R\frac{\mathrm{d}\phi}{\mathrm{d}t}=u_\phi
$$

- streaklines:

  the line (at a particular time $t$) joining the instantaneous positions of all the particles which have ever passed (and will ever pass) through a particular point.

## The fluid equations

### conservation of mass

$$
\frac{\partial \rho}{\partial t}+\nabla\cdot(\rho\boldsymbol{u})=0
$$
$$
\frac{\mathrm{d}\rho}{\mathrm{d}t}+\rho\nabla\cdot\boldsymbol{u}=0
$$

- incompressible flows: $\mathrm{d}\rho/\mathrm{d}t=0$

  $$
  \Rightarrow\nabla\cdot\boldsymbol{u}=0
  $$
