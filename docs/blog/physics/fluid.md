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
\frac{\mathrm{d}x}{-y\Omega}=\frac{\mathrm{d}y}{x\Omega}\Rightarrow x^2+y^2=\mathrm{const}
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

## Inviscid (ideal) fluid

### Euler equation

control volume FIXED in space, consider the momentum:

$$
\begin{align}
\frac{\partial}{\partial t}\iiint\rho u_i\mathrm{d}V &=-\iint\rho u_i(\boldsymbol{u}\cdot\boldsymbol{n})\mathrm{d}S-\iint pn_i\mathrm{d}S+\iiint\rho f_i\mathrm{d}V \\
&=-\iiint\nabla(\rho u_i\boldsymbol{u})\mathrm{d}V-\iiint\frac{\partial p}{\partial x_i}\mathrm{d}V+\iiint\rho f_i\mathrm{d}V
\end{align}
$$

(here $f_i$ means the volume force e.g. gravity or magnetic)

so we have,

$$
\frac{\partial}{\partial t}(\rho u_i)+\nabla(\rho u_i\boldsymbol{u})=-\frac{\partial p}{\partial x_i}+\rho f_i
$$

for incompressible fluid, we have $\dfrac{\partial\rho}{\partial t}=0$ and $\nabla\cdot\boldsymbol{u}=0$

$$
\begin{align}
\mathrm{LHS} &=\rho\frac{\partial u_i}{\partial t}+u_i\frac{\partial\rho}{\partial t}+\rho(\boldsymbol{u}\cdot\nabla)u_i+u_i\nabla\cdot(\rho\boldsymbol{u}) \\
&=\rho\left(\frac{\partial u_i}{\partial t}+(\boldsymbol{u}\cdot\nabla)u_i\right)
\end{align}
$$

then we get the Euler equation (4 equivalent forms):

$$
\frac{\partial u_i}{\partial t}+(\boldsymbol{u}\cdot\nabla)u_i=-\frac{1}{\rho}\frac{\partial p}{\partial x_i}+f_i
$$
$$
\frac{\mathrm{d}u_i}{\mathrm{d}t}=-\frac{1}{\rho}\frac{\partial p}{\partial x_i}+f_i
$$
$$
\frac{\partial\boldsymbol{u}}{\partial t}+(\boldsymbol{u}\cdot\nabla)\boldsymbol{u}=-\frac{1}{\rho}\nabla p+\boldsymbol{f}
$$
$$
\frac{\mathrm{d}\boldsymbol{u}}{\mathrm{d}t}=-\frac{1}{\rho}\nabla p+\boldsymbol{f}
$$

### Close the equation

now we have mass conservation equation and Euler equation:

$$
\left\{\begin{array}{l}
\displaystyle\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\boldsymbol{u})=0 \\
\displaystyle\frac{\mathrm{d}\boldsymbol{u}}{\mathrm{d}t}=-\frac{1}{\rho}\nabla p+\boldsymbol{f}
\end{array}\right.
$$

here we have 5 variables ( $\rho,\boldsymbol{u},p$ ), but only 4 equations.

- incompressible fluid:

  $\rho=\mathrm{const}$ closed.

- compressible fluid:

  need Equation of State (EOS)

  e.g. ideal gas $p=\rho RT$

  polytropic relation $p\propto\rho^\gamma$

### Bernoulli theorem

for steady flow ( $\partial\boldsymbol{u}/\partial t=0$ )

Euler equation reads,
$$
\boldsymbol{u}\cdot\nabla\boldsymbol{u}=-\frac{1}{\rho}\nabla p+\boldsymbol{g}
$$

apply the relation
$$
\boldsymbol{u}\cdot\nabla\boldsymbol{u}=\nabla\left(\frac{u^2}{2}\right)-\boldsymbol{u}\times\boldsymbol{\omega}
$$

we have
$$
-\nabla\left(\frac{p}{\rho}+\frac{u^2}{2}+gz\right)+\boldsymbol{u}\times\boldsymbol{\omega}=0
$$

let
$$
H=\frac{u^2}{2}+\frac{p}{\rho}+gz
$$

yields
$$
-\nabla H+\boldsymbol{u}\times\boldsymbol{\omega}=0
$$

By performing $\boldsymbol{u}\cdot$ on the above equation and applying $\boldsymbol{u}\cdot(\boldsymbol{u}\times\boldsymbol{\omega})=0$ , we derive
$$
\boldsymbol{u}\cdot\nabla H=0
$$

this means $H=\dfrac{u^2}{2}+\dfrac{p}{\rho}+gz=\mathrm{const}$ along a streamline

### Navier-Stokes equation

$$
\frac{\mathrm{d}\boldsymbol{u}}{\mathrm{d}t}=-\frac{1}{\rho}\nabla p+\frac{\mu}{\rho}\nabla^2\boldsymbol{u}+\frac{\mu'+\mu/3}{\rho}\nabla(\nabla\cdot\boldsymbol{u})+\boldsymbol{f}
$$

$\mu$ : first viscosity; $\mu'$ : second viscosity

$\mu/\rho\equiv\nu \quad\quad\quad; \mu'/\rho\equiv\nu'$

$\mu,\mu'$ : dynamic viscosity

$\nu,\nu'$ : kinematic viscosity

$[\nu]=m^2s^{-1}$

$$
\frac{\mathrm{d}\boldsymbol{u}}{\mathrm{d}t}=-\frac{1}{\rho}\nabla p+\nu\nabla^2\boldsymbol{u}+(\nu'+\frac{1}{3}\nu)\nabla(\nabla\cdot\boldsymbol{u})+\boldsymbol{f}
$$

for incompressible fluid
$$
\frac{\mathrm{d}\boldsymbol{u}}{\mathrm{d}t}=-\frac{1}{\rho}\nabla p+\nu\nabla^2\boldsymbol{u}+\boldsymbol{f}
$$

### Stellar structure

for compressible fluid, assume spherical symmetric $\rho(r),p(r)$

hydrostatic equilibrium gives
$$
-\nabla p+\rho\boldsymbol{g}=0
$$
$$
\Rightarrow-\frac{\mathrm{d}p}{\mathrm{d}r}-\rho g=0
$$

here
$$
g=\frac{G}{r^2}\int_0^r \rho 4\pi r'^2\mathrm{d}r'
$$

so we have
$$
\frac{\mathrm{d}p}{\mathrm{d}r}+\rho\frac{G}{r^2}\int_0^r 4\pi\rho r'^2\mathrm{d}r'=0
$$
$$
\Rightarrow\frac{\mathrm{d}}{\mathrm{d}r}\left(\frac{\mathrm{d}p}{\mathrm{d}r}r^2\frac{1}{\rho}\right)+4\pi G\rho r^2=0
$$
$$
\Rightarrow\frac{1}{r^2}\frac{\mathrm{d}}{\mathrm{d}r}\left(r^2\frac{1}{\rho}\frac{\mathrm{d}p}{\mathrm{d}r}\right)=-4\pi G\rho
$$

::: details Another approach
$$
-\nabla p+\rho\boldsymbol{g}=0,\quad \boldsymbol{g}=-\nabla\Phi
$$
$$
\nabla\left(\frac{1}{\rho}\nabla p\right)=\nabla\cdot\boldsymbol{g}=-\nabla^2\Phi
$$
here
$$
\iint\boldsymbol{g}\cdot\mathrm{d}\boldsymbol{S}=\iiint-\nabla^2\Phi\mathrm{d}V
$$
$$
\Rightarrow\frac{G\rho V}{r^2}4\pi r^2=\nabla^2\Phi V
$$
$$
\Rightarrow\nabla^2\Phi=4\pi G\rho
$$
:::

::: info polytropic gas
$$
p=K\rho^\gamma=K\rho^{(1+1/n)}
$$

here $n$ is polytropic index

- convection: atom H, $\gamma=5/3$, $n=1.5$
- radiation: photon, $\gamma=4/3$, $n=3$
- non-relativistic degenerate electron, $\gamma=5/3$, $n=1.5$
- relativistic degenerate electron, $\gamma=4/3$, $n=3$
:::

$$
\Rightarrow K\left(1+\frac{1}{n}\right)\frac{1}{r^2}\frac{\mathrm{d}}{\mathrm{d}r}\left(r^2\rho^{-1+1/n}\frac{\mathrm{d}\rho}{\mathrm{d}r}\right)+4\pi G\rho=0
$$

at $r=0$, $\rho=\rho_c$, $\mathrm{d}\rho/\mathrm{d}r=0$

at $r=R$, $\rho=0$ $\Rightarrow R$

let $a=\dfrac{4\pi G}{K(1+n)}\rho_c^{1-1/n}$, $z=ar$, $u=(\rho/\rho_c)^{1/n}$, we have
$$
\frac{1}{z^2}\frac{\mathrm{d}}{\mathrm{d}z}\left(z^2\frac{\mathrm{d}u}{\mathrm{d}z}\right)+u^n=0
$$

at $z=0$, $u=1$, $u'=0$

$u=0\Rightarrow z=aR\Rightarrow R$

the solve of Lane-Emden equation

- $n=0$: $u=1-\dfrac{1}{6}z^2$ ($z=\sqrt{6},u=0$)
- $n=1$: $u=\dfrac{\sin z}{z}$ ($z=\pi,u=0$)
- $n=5$: $u=\dfrac{1}{\sqrt{1+z^2/3}}$ ($z\rightarrow\infty,u\rightarrow0$)

for $n<5$, $R$ finite, $u\rightarrow 0$

for $n\ge5$, $R\rightarrow\infty$, $u\rightarrow 0$

::: info estimation
$$
\frac{\mathrm{d}p}{\mathrm{d}r}\simeq\rho g,\frac{p}{R}\simeq\rho\frac{GM}{R^2}\simeq\frac{GM^2}{R^5}
$$
$$
\Rightarrow p\simeq\frac{GM^2}{R^4}
$$
we know
$$
p=K\rho^\gamma\simeq K\left(\frac{M}{R^3}\right)^\gamma
$$
combine two relation yields,
$$
\frac{G}{K}M^{2-\gamma}R^{3\gamma-4}\simeq 1
$$

when $\gamma=5/3$: $M^{1/3}R\simeq\mathrm{const}$, $R\propto M^{-1/3}$

when $\gamma=4/3$: $M=\mathrm{const}$
:::
