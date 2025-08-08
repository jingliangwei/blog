# disk-satellite interaction

## basic conception

1. epicyclic frequency:

   a 'Rayleigh discriminant' to examine the 'boundaries' of an accretion disc with differential rotation $\Omega$ is given by
   $$
   \kappa^2=\frac{2\Omega}{R}\frac{\mathrm{d}}{\mathrm{d}R}(R^2\Omega)
   $$
   where $R$ is the radial coordinate.

   ::: info derivation (Lagrange's equation & perturbation method)
   An astrophysical disk can be modeled as a fluid with negligible mass compared to the central object (e.g. a star) and with negligible pressure. We can suppose an axial symmetry such that $\Phi(r,z)=\Phi(r,-z)$.

   The Lagrangian in cylindrical coordiantes is
   $$
   L=\frac{m}{2}(\dot{r}^2+r^2\dot{\theta}^2+\dot{z}^2)-m\Phi
   $$

   Then we obtain the Lagrange's equation:
   $$
   \begin{align}
   \ddot{r}-r\dot{\theta}^2&=-\partial_r\Phi \\
   r\ddot{\theta}+2\dot{r}\dot{\theta}&=0 \\
   \ddot{z}&=-\partial_z\Phi
   \end{align}
   $$

   The second line implies that the specific angular momentum is conserved. We can then define an effective potential $\displaystyle\Phi_{eff}=\Phi-\frac{1}{2}r^2\dot{\theta}^2=\Phi-\frac{h^2}{2r^2}$ and so:
   $$
   \begin{align}
   \ddot{r}&=-\partial_r\Phi_{eff} \\
   \ddot{z}&=-\partial_z\Phi_{eff}
   \end{align}
   $$

   We can apply a small perturbation $\delta\boldsymbol{r}=\delta r\boldsymbol{e}_r+\delta z\boldsymbol{e}_z$ to the circular orbit:
   $$
   \boldsymbol{r}=r_0\boldsymbol{e}_r+\delta\boldsymbol{r}
   $$

   So,
   $$
   \ddot{\boldsymbol{r}}+\delta\ddot{\boldsymbol{r}}=-\nabla\Phi_{eff}(\boldsymbol{r}+\delta\boldsymbol{r})\approx-\nabla\Phi_{eff}(\boldsymbol{r})-\partial_r^2\Phi_{eff}(\boldsymbol{r})\delta r-\partial_z^2\Phi_{eff}(\boldsymbol{r})\delta z
   $$

   And thus:
   $$
   \begin{align}
   \delta\ddot{r}=-\partial_r^2\Phi_{eff}\delta_r=-\Omega_r^2\delta r \\
   \delta\ddot{z}=-\partial_z^2\Phi_{eff}\delta_z=-\Omega_z^2\delta z
   \end{align}
   $$

   We then note
   $$
   \kappa^2=\Omega_r^2=\partial_r^2\Phi_{eff}=\partial_r^2\Phi+\frac{3h^2}{r^4}
   $$

   In a circular orbit $h_c^2=r^3\partial_r\Phi$, $\displaystyle\Omega_c^2=\frac{1}{r}\partial_r\Phi$, finally yields:
   $$
   \kappa^2=\partial_r^2\Phi+\frac{3}{r}\partial_r\Phi=4\Omega_c^2+2r\Omega_c\frac{\mathrm{d}\Omega_c}{\mathrm{d}r}=\frac{2\Omega_c}{r}\frac{\mathrm{d}}{\mathrm{d}r}(r^2\Omega_c)
   $$
   :::

2. mean-motion resonance (MMR):

   A mean-motion resonance occurs when multiple bodies have orbital periods or mean motions (orbital frequencies) that are simple integer ratios of each other.

## GT79

some key points from [GT79](/read/goldreich-tremaine-1979.pdf) *the excitation of density waves at the Lindblad and corotaion resonances by an external potential*

- main content:
  
  the linear response of a differentially rotating two-dimensional gas disk to a rigidly rotating external potential.

### II. Basic Equations

- equation (3): the unperturbed angular velocity $\Omega(r)$
  $$
  \Omega^2(r)=\frac{1}{r}\frac{\mathrm{d}}{\mathrm{d}r}(\phi_0+\eta_0)\tag{3}
  $$

  ::: info derivation (enthalpy represents pressure)
  the Eular equation in radial direction of cylindrical coordinates for stable axial symmetry dics ( $\partial/\partial t=0,\partial/\partial \theta=0$ ):
  $$
  -\frac{v_\theta^2}{r}=-\frac{\partial\Phi}{\partial r}-\frac{1}{\rho}\frac{\partial p}{\partial r}
  $$

  define the two-dimensional enthalpy $\eta$
  $$
  \mathrm{d}\eta=\frac{\mathrm{d}p}{\sigma}\Rightarrow\frac{\mathrm{d}\eta}{\mathrm{d}r}=\frac{1}{\sigma}\frac{\mathrm{d}p}{\mathrm{d}r}
  $$
  where $\sigma$ is the surface mass density.

  so we have
  $$
  -r\Omega^2=-\frac{\mathrm{d}\phi}{\mathrm{d}r}-\frac{\mathrm{d}\eta}{\mathrm{d}r}
  $$
  $$
  \Rightarrow \Omega^2(r)=\frac{1}{r}\frac{\mathrm{d}}{\mathrm{d}r}(\phi_0+\eta_0)
  $$
  :::

- the linear perturbation equations (5,6,7,8)
  $$
  \begin{align}
  \frac{\partial\boldsymbol{v}_1}{\partial t}+(\boldsymbol{v}_0\cdot\nabla)\boldsymbol{v}_1+(\boldsymbol{v}_1\cdot\nabla)\boldsymbol{v}_0&=-\nabla(\phi_1+\phi_1^D+\eta_1),\tag{5} \\
  \frac{\partial\sigma_1}{\partial t}+\nabla\cdot(\sigma_0\boldsymbol{v}_1)+\nabla\cdot(\sigma_1\boldsymbol{v}_0)&=0,\tag{6} \\
  \eta_1&=c_0^2(\sigma_1/\sigma_0),\tag{7} \\
  \nabla^2\phi_1^D&=4\pi G\sigma_1\delta(z),\tag{8}
  \end{align}
  $$
  where $\boldsymbol{v}_0=r\Omega(r)\hat{e}_\theta$ and $\delta(z)$ is the Dirac delta function.

  ::: tip todo:
  how to get equation (7)
  :::

- the response of the disk to $\phi_1$ is completely described by equation (7,8,13)
  $$
  \begin{multline}
  \left\{\frac{\mathrm{d}^2}{\mathrm{d}r^2}+\left[\frac{\mathrm{d}}{\mathrm{d}r}\ln\left(\frac{\sigma r}{D}\right)\right]\frac{\mathrm{d}}{\mathrm{d}r}+\frac{2m\Omega}{r(m\Omega-\omega)}\left[\frac{\mathrm{d}}{\mathrm{d}r}\ln\left(\frac{\sigma\Omega}{D}\right)\right]-\frac{m^2}{r^2}\right\} \\
  (\phi_1+\phi_1^D+\eta_1)=\frac{D\eta_1}{c^2}\tag{13}
  \end{multline}
  $$
  where the subscripts on $\sigma_0$ and $c_0$ have been dropped.

  where $D=\kappa^2-(m\Omega-\omega)^2$

  ::: info derivation
  substitute the component form of equation (5) and equation (7) into the continuity equation (6)
  :::

  ::: info resonance
  there are singularities in the coefficients of equation (13):
  - $D=0$: Lindblad resonance, $r=r_L$
  - $m\Omega-\omega=0$: corotaion resonance, $r=r_c$
  :::

- the general solution of the perturbation equations away from the resonances:
  
  contain a homogeneous free-wave solutions and inhomogeneous non-wave solutions.

  1. the inhomogeneous non-wave solution ( $\phi_1^D\approx0$ )
   $$
   \begin{multline}
   \frac{\sigma_1}{\sigma}=\frac{\eta_1}{c^2}= \\
   \frac{1}{D}\left\{\frac{\mathrm{d}^2}{\mathrm{d}r^2}+\left[\frac{\mathrm{d}}{\mathrm{d}r}\ln\left(\frac{\sigma r}{D}\right)\right]\frac{\mathrm{d}}{\mathrm{d}r}+\frac{2m\Omega}{r(m\Omega-\omega)}\left[\frac{\mathrm{d}}{\mathrm{d}r}\ln\left(\frac{\sigma\Omega}{D}\right)\right]-\frac{m^2}{r^2}\right\}\phi_1 \tag{15}
   \end{multline}
   $$

  2. the homogeneous free-wave solution ( $\phi_1=0$ )
  $$
  \phi_1^D(r)=\Phi(r)\exp\left[i\int^r k(s)\mathrm{d}s\right]\tag{16}
  $$
  $$
  \sigma_1=\frac{i\ \text{sgn}(k)}{2\pi Gr^{1/2}}\frac{\mathrm{d}}{\mathrm{d}r}(r^{1/2}\phi_1^D)\tag{17}
  $$

  here equation (17) is the WKB solution of Poisson's equation (8)

- the total angular momentum flux:
  $$
  F=F_G+F_A=-\text{sgn}(k)\frac{mr\Phi^2}{4G}\left(1-\frac{c^2|k|}{\pi G\sigma}\right)\tag{30}
  $$

  ::: info derivation
  spiral density waves transport angular momentum by **gravitational torques** and by **advective transport**.

  1. the angular momentum flux across a cylinder of radius $r$ due to gravitational torques is
    $$
    \begin{align}
    F_G&=\frac{1}{4\pi G}\int_0^{2\pi}\mathrm{d}\theta\int_{-\infty}^\infty \mathrm{d}z r\ \text{Re}\left[\frac{\partial\phi_1^D}{\partial\theta}\right]\text{Re}\left[\frac{\partial\phi_1^D}{\partial r}\right]\tag{23} \\
    &=\text{sgn}(k)\frac{mr\Phi^2(r)}{4G}\tag{25}
    \end{align}
    $$
  
  2. the flux due to advective transport
    $$
    \begin{align}
    F_A&=r^2\sigma\int_0^{2\pi}\mathrm{d}\theta\ \text{Re}(u)\text{Re}(v)\tag{26} \\
    &=-\frac{\pi mr\sigma k}{D}\left(1-\frac{c^2|k|}{2\pi G\sigma}\right)^2\Phi^2\tag{29}
    \end{align}
    $$
   
   combining equation (25),(29), finally yields
   $$
   F=F_G+F_A=-\text{sgn}(k)\frac{mr\Phi^2}{4G}\left(1-\frac{c^2|k|}{\pi G\sigma}\right)\tag{30}
   $$
  :::

### III. Lindblad Resonances

- the long trailing wave excited at a Lindblad resonance has an angular momentum flux,
  $$
  F=-m\pi^2\left\{\left|\frac{\sigma}{r\mathrm{d}D/\mathrm{d}r}\right|\left[r\frac{\mathrm{d}\phi_1}{\mathrm{d}r}+\frac{2m\Omega}{(m\Omega-\omega)}\phi_1\right]^2\right\}_{r_L}\tag{46}
  $$

  ::: info derivation
  computed from equations (15),(19),(30),(32), and (34)
  - the inhomogeneous non-wave solution (15)
   $$
   \begin{multline}
   \frac{\sigma_1}{\sigma}=\frac{\eta_1}{c^2}= \\
   \frac{1}{D}\left\{\frac{\mathrm{d}^2}{\mathrm{d}r^2}+\left[\frac{\mathrm{d}}{\mathrm{d}r}\ln\left(\frac{\sigma r}{D}\right)\right]\frac{\mathrm{d}}{\mathrm{d}r}+\frac{2m\Omega}{r(m\Omega-\omega)}\left[\frac{\mathrm{d}}{\mathrm{d}r}\ln\left(\frac{\sigma\Omega}{D}\right)\right]-\frac{m^2}{r^2}\right\}\phi_1 \tag{15}
   \end{multline}
   $$
  - the solutions of the dispersion relation (19)
   $$
   |k|=\frac{\pi G\sigma}{c^2}+\epsilon\left[\left(\frac{\pi G\sigma}{c^2}\right)^2-\frac{D}{c^2}\right]^{1/2}\tag{19}
   $$
  - the total angular momentum flux (30)
   $$
   F=F_G+F_A=-\text{sgn}(k)\frac{mr\Phi^2}{4G}\left(1-\frac{c^2|k|}{\pi G\sigma}\right)\tag{30}
   $$
  - replace $D$ with $\mathscr{D}x$ (32)
   $$
   \mathscr{D}=[r(\mathrm{d}D/\mathrm{d}r)]_{r_L}\tag{32}
   $$
   $$
   x=(r-r_L)/r_L\tag{31}
   $$
  - the potential (34)
   $$
   \Phi=\left(r\frac{\mathrm{d}\phi_1}{\mathrm{d}r}+\frac{2m\Omega}{(m\Omega-\omega)}\phi_1\right)_{r_L}\tag{34}
   $$
  :::

- the external torque exerted on a gas disk in the neighborhood of the Lindblad resonance
  $$
  T_L=\pm m\pi^2\left\{\left|\frac{\sigma}{r\mathrm{d}D/\mathrm{d}r}\right|\left[r\frac{\mathrm{d}\phi_1}{\mathrm{d}r}+\frac{2m\Omega}{(m\Omega-\omega)}\phi_1\right]^2\right\}_{r_L}\tag{100}
  $$

### IV. Corotaion Resonances

#### a) Disks without Self-Gravity

- the entire flux
  $$
  F_A=-\frac{\pi^2}{4}m\ \text{sgn}(x)\left[\frac{\phi_1^2}{\mathrm{d}\Omega/\mathrm{d}r}\frac{\mathrm{d}}{\mathrm{d}r}\left(\frac{\sigma}{B}\right)\right]_{r_c}\exp(-|qx|)\tag{55}
  $$

#### b) Disks with Self-Gravity

- the torque exerted by the external potential
  $$
  T_c=\frac{m\pi^2}{2}\left[\frac{\phi_1^2}{\mathrm{d}\Omega/\mathrm{d}r}\frac{\mathrm{d}}{\mathrm{d}r}\left(\frac{\sigma}{B}\right)\right]_{r_c}\tag{93}
  $$

### Appendix

#### a) Lindblad Resonances

while solving the Lindblad resonance, we define
$$
\Psi=\left(r\frac{\mathrm{d}\phi_1}{\mathrm{d}r}+\frac{2m\Omega}{(m\Omega-\omega)}\phi_1\right)_{r_L}\tag{34}
$$
$$
\alpha=(2\pi G\sigma r/c^2)_{r_L}\text{sgn}(k)\tag{36}
$$
$$
\beta=(r/c)_{r_L}^2\mathscr{D}\tag{38}
$$

- the perturbed solution of velocity reads
  $$
  u_1=-\frac{\kappa}{r_L|\mathscr{D}|}\Psi\int_0^{\infty}\mathrm{d}t\exp\left[i\left(xt-\frac{\alpha t^2}{2\beta}+\frac{t^3}{3\beta}\right)\right]\tag{A6}
  $$
  $$
  v_1=i\ \text{sgn}(\mathscr{D})\frac{\kappa}{2\Omega}u_1\tag{A5}
  $$

- the torque exerted on the disk by the external potential in the neighborhood of a Lindblad resonance
  $$
  T=-\pi m\int_0^\infty\mathrm{d}r r\phi_1(r)\ \text{Im}\ \sigma_1(r)\tag{A7}
  $$

## GT80

some key points from [GT80](/read/goldreich-tremaine-1980.pdf) *disk-satellite interactions*

- main content:
  
  the interactions between a disk and a satellite which orbit the same central mass.

### II. Steady-State Interactions at Resonances

#### a) The Disk

- Oort's parameters $A(r),B(r)$ and the epicyclic frequency $\kappa(r)$
  $$
  A(r)=\frac{r}{2}\frac{\mathrm{d}\Omega}{\mathrm{d}r},\quad B(r)=\Omega(r)+A(r),\quad \kappa^2(r)=4B(r)\Omega(r)\tag{1}
  $$

#### b) The Satellite

- the position of satellite when $e\ll 1$ in the first order in $e$ is
  $$
  r_s=a(1-e\cos\kappa_s t),\quad \theta_s=\Omega_s t+\frac{2\Omega_s e}{\kappa_s}\sin\kappa_s t\tag{2}
  $$

  ::: tip todo:
  check it in (Chandrasekhar 1960)
  :::

- the perturbation potential due to a satellite of mass $M_s$ reads
  $$
  \phi^s(r,\theta,t)=-\frac{GM_s}{|\boldsymbol{r}-\boldsymbol{r}_s|}+\frac{M_s}{M_p}\Omega^2(r)\boldsymbol{r}_s\cdot\boldsymbol{r}\tag{4}
  $$

  ::: info derivation (the inertial potential)
  the acceleration of the central mass arised by the gravitation of the satellite reads
  $$
  \boldsymbol{a}_p=\frac{GM_s}{|\boldsymbol{r}_s|^3}\boldsymbol{r}_s
  $$

  for a unit mass point in this coordinate system, the inertial force satisfies
  $$
  \boldsymbol{F}_{iner}=-\nabla\phi_{iner}=-\boldsymbol{a}_{p}
  $$

  so the inertial potential satisfies
  $$
  \nabla\phi_{iner}=\frac{GM_s}{|\boldsymbol{r}_s|^3}\boldsymbol{r}_s
  $$
  $$
  \Rightarrow\phi_{iner}=\frac{GM_s}{|\boldsymbol{r}_s|^3}\boldsymbol{r}_s\cdot\boldsymbol{r}+C
  $$

  in the binary system, we have
  $$
  G\frac{M_pM_s}{|\boldsymbol{r}_s|^2}=M_s\Omega^2|\boldsymbol{r}_s|\Rightarrow\frac{GM_s}{|\boldsymbol{r}_s|^3}=\frac{M_s}{M_p}\Omega^2
  $$

  applying the relation above, we finally obtain
  $$
  \phi_{iner}=\frac{M_s}{M_p}\Omega^2\boldsymbol{r}_s\cdot\boldsymbol{r}
  $$
  :::

- the pattern speed of the $l,m$ potential component (in a Fourier series) is
  $$
  \Omega_{l,m}=\Omega_s+\frac{(l-m)}{m}\kappa_s
  $$

  ::: info the difference of mark
  the pattern speed is donated by $\omega$ in [GT79](/read/goldreich-tremaine-1979.pdf), both of them are the coefficients of time $t$.
  :::

#### c) Torques at Resonances

- the condition of Lindblad and corotation resonances:
  1. the Lindblad resonance:
   $$
   \Omega(r)+\epsilon\frac{\kappa(r)}{m}=\Omega_{l,m},\quad \epsilon=\pm1,\quad m>0\tag{11}
   $$
  2. the corotation resonance:
   $$
   \Omega(r)=\Omega_{l,m},\quad m>0\tag{12}
   $$

  ::: info derivation
  see the equation (13) in [GT79](/read/disks#ii-basic-equations)
  :::

- the torque
  1. at a Lindblad resonance $r=r_L$,
   $$
   T_{l,m}^L=-m\pi^2\left[\Sigma\left(\frac{r\mathrm{d}D}{\mathrm{d}r}\right)^{-1}\left(\frac{r\mathrm{d}\phi_{l,m}^s}{\mathrm{d}r}+\frac{2\Omega}{\Omega-\Omega_{l,m}}\phi_{l,m}^s\right)^2\right]_{r_L}\tag{13}
   $$
   where $D=\kappa^2-m^2(\Omega-\Omega_{l,m})^2$. Note that the sign of $T_{l,m}^L$ is opposite to that of $\mathrm{d}D/\mathrm{d}r$. Thus, angular momentum is removed from the disk at an inner Lindblad resonance and added to it at an outer Lindblad resonance.

  2. at a corotation resonance $r=r_c$,
   $$
   T_{l,m}^C=\frac{m\pi^2}{2}\left[\left(\frac{\mathrm{d}\Omega}{\mathrm{d}r}\right)^{-1}\frac{\mathrm{d}}{\mathrm{d}r}\left(\frac{\Sigma}{B}\right)(\phi_{l,m}^s)^2\right]_{r_c}
   $$

## yang-li-2024

the theory part of [yang-li-2024](/read/yang-li-2024.pdf) *mean-motion resonances with interfering density waves*

- main content:
  
  an object 'A' moving on a *fixed* outer circular orbit and an object 'B' moving along an inner eccentric orbit, the system is assumed to be locked in a $m:m-1$ resonance such that
  $$
  m\Omega_A=m\Omega_B-\kappa_B\tag{1}
  $$

### 2 Interfering density waves and their backreaction

- the Fourier series of the individual gravitational field for object A or B ( $s=A,B$ )
  $$
  \varphi_s(r,\phi,t)=\sum_{l_s=-\infty}^\infty\sum_{m_s=0}^\infty\varphi_{s,l_s,m_s}\cos\{m_s\phi-[m_s\Omega_s+(l_s-m_s)\kappa_s]t\}\tag{2}
  $$
  where the pattern frequency of the $l_s,m_s$ component is
  $$
  \Omega_{l_s,m_s}=\Omega_s+\frac{l_s-m_s}{m_s}\kappa_s\tag{3}
  $$

- the location of the inner and outer Lindblad resonances and corotation resonance is
  $$
  m(\Omega-\Omega_{l_s,m_s})=\pm\kappa,\quad m>0\tag{4}
  $$
  $$
  \Omega=\Omega_{l,m}\tag{6}
  $$

- the total angular flux contains the cross-term is
  $$
  \mathcal{F}_{J\times}=-\text{sgn}(k)\frac{mr}{2G}\left(1-\frac{c^2|k|}{\pi G\sigma}\right)\text{Re}(\Phi_A\Phi_B e^{i(Q_0+C_{AB})})\tag{9}
  $$

#### 2.1 Computing the torque

- the torque of the external potentials $\phi_A=\varphi_{A,m,m},\phi_B=\varphi_{B,m-1,m}$ acting on the disc is
  $$
  T=-m\pi\int_0^\infty\mathrm{d}r r[\phi_A(r)+\phi_B(r)]\text{Im}[\sigma_A(r)+\sigma_B(r)]\tag{10}
  $$

- the backreaction of the density wave produced by object A on object B should be
  $$
  \begin{align}
  T_B&=m\pi\int_0^\infty\mathrm{d}r r\phi_B(r)\text{Im}\sigma_A(r) \\
  &=-\pi m\text{Im}\left\{\int_0^\infty\mathrm{d}r\left[\frac{m\phi_B\sigma v_A}{m\Omega-\omega}+ir\sigma u_A\frac{\mathrm{d}}{\mathrm{d}r}\left(\frac{\phi_B}{m\Omega-\omega}\right)\right]\right\}\tag{11}
  \end{align}
  $$

##### 2.1.1 Lindblad resonances

- the torque near the Lindblad resonance
  $$
  T_B=-\frac{\pi m\sigma r_L}{\kappa}\text{sgn}(\mathcal{D})\int_{-\infty}^\infty\mathrm{d}x\Psi_{B,l,m}\text{Re}(u_A)f(x)\tag{16}
  $$
  where the window function $f(x)$ is chosen such that $f=1$ near the resonance location and $f\rightarrow0$ for $|x|\rightarrow\infty$ to eliminate oscillatory contributions far away.

- the inner Lindblad resonance of object A operate the torque on object B
  $$
  \begin{align}
  T_{B,in}&=\frac{m\pi\sigma}{\mathcal{D}}\Psi_{A,m,m}\int_{-\infty}^\infty\mathrm{d}xf(x)(\Psi_d+\Psi_c\sin f_c)\times\text{Re}\left\{\int_0^\infty\mathrm{d}t\exp\left[i\left(tx-\frac{\alpha t^2}{2\beta}+\frac{t^3}{3\beta}-iQ\right)\right]\right\}\tag{21}\\
  &=\frac{\pi^2m\sigma\Psi_{A,m,m}}{\mathcal{D}}\left\{\Psi_d\cos Q+\frac{e_B}{2}\Psi_c\text{Re}\left[W(\alpha,\beta)e^{-iQ}\right]\right\}\tag{25}
  \end{align}
  $$

- the outer one
  $$
  T_{B,out}=\frac{\pi^2m\sigma\Psi_{A,m,m}\Psi_{B,m-1,m}}{\mathcal{D}}\cos Q\tag{29}
  $$

##### 2.1.2 Corotation resonance

- the corotation torque:
  $$
  T_{B,co}=-\frac{m\pi^2}{2}\left[\left(\frac{\mathrm{d}\Omega}{\mathrm{d}r}\right)^{-1}\frac{\mathrm{d}}{\mathrm{d}r}\left(\frac{\sigma}{B_0}\right)\varphi_{A,m,m}\varphi_{B,m-1,m}\cos Q\right]_{r_C}\tag{33}
  $$

##### 2.1.3 Alternative smoothing scheme

- an alternative smoothing scheme in numerical simulation to modify the gravitational potential produced by planets
  $$
  \Phi_s=-\frac{G\mu_sM}{(|\boldsymbol{r}_{p,s}-\boldsymbol{r}|^2+\epsilon^2)^{1/2}}+\mu_s\Omega_{p,s}^2\boldsymbol{r}_{p,s}\cdot\boldsymbol{r}\tag{36}
  $$

#### 2.2 Change rate of orbital quantities

$$
\frac{\mathrm{d}e_B}{\mathrm{d}t}=-\frac{1}{m}\frac{T_{B,in}}{M_Be_Ba_B^2\Omega_B}:=-\frac{\cos(Q-Q_0)}{\tau_0}\tag{42}
$$
$$
\frac{\dot{n}_B}{n_B}=-3(GM)^{-2/3}n^{1/3}M_B^{-1}T_{B,in}:=-\frac{3me_B}{\cos(Q-Q_0)}\tau_0\tag{44}
$$

::: warning some errors?
1. equation (14)

   $$
   v_A=i\ \text{sgn}(\mathcal{D})\frac{2\Omega}{\kappa}u_A\tag{14}
   $$

   is different from that in [GT79](/read/disks#a-lindblad-resonances)

   $$
   v_1=i\ \text{sgn}(\mathscr{D})\frac{\kappa}{2\Omega}u_1\tag{A5}
   $$

2. equation (44)
   
   $$
   -\frac{3me_B}{\cos}(Q-Q_0)\tau_0
   $$
:::
