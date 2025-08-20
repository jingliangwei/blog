# Dynamics of Planetary Systems

## 1. The two-body problem

### 1.2 The shape of the Kepler orbit

- the shape of the orbit is given by
  $$
  r=\frac{a(1-e^2)}{1+e\cos f}\tag{1.29}
  $$
  where $f=\varphi-\varpi$ is known as the **true anomaly**

- the closest approach of the two bodies occurs at $f=0$ or azimuth $\varphi=\varpi$, the **longitude of periapsis** is $\varpi$.

### 1.3 Motion in the Kepler orbit

- the **mean motion** or mean rate of change of azimuth
  $$
  n=\frac{2\pi}{P}\tag{1.44}
  $$

- the **mean anomaly**
  $$
  l=2\pi\frac{t-t_0}{P}=n(t-t_0)\tag{1.45}
  $$

- define the **eccentric anomaly** by
  $$
  r=a(1-e\cos u)\tag{1.46}
  $$

- **Kepler's equation**
  $$
  l=u-e\sin u\tag{1.49}
  $$

### 1.8 Nearly circular orbits

#### 1.8.2 The epicycle approximation

- the **azimuthal frequency** is
  $$
  \kappa_\phi(R_g)\equiv\frac{L_z}{R_g^2}=\left(\frac{1}{R}\frac{\partial\Phi}{\partial R}\right)^{1/2}_{(R_g,0)}\tag{1.161}
  $$
  the **vertical frequency** is
  $$
  \kappa_z(R_g)=\left(\frac{\partial^2\Phi}{\partial z^2}\right)^{1/2}_{(R_g,0)}\tag{1.165}
  $$
  the **radial** or **epicycle frequency** is
  $$
  \kappa_R(R_g)=\left(\frac{3L_z^2}{R^4}+\frac{\partial^2\Phi}{\partial R^2}\right)^{1/2}_{(R_g,0)}=\left(\frac{3}{R}\frac{\partial\Phi}{\partial R}+\frac{\partial^2\Phi}{\partial R^2}\right)^{1/2}_{(R_g,0)}\tag{1.168}
  $$

  ::: info derivation (Lagrange's equation & perturbation method)
  consider an axisymmetric potential $\Phi(R,z)$ in cylindrical coordinates $(R,\phi,z)$, and assume that the potential is symmetric about the equatorial plane $z=0$, so $\Phi(R,-z)=\Phi(R,z)$. The equations of motion for a test particle, $\ddot{r}=-\nabla\Phi$, can be written:
  $$
  \ddot{R}-R\dot{\phi}^2=-\frac{\partial\Phi(R,z)}{\partial R},\quad 2\dot{R}\dot{\phi}+R\ddot{\phi}=0,\quad \ddot{z}=-\frac{\partial\Phi(R,z)}{\partial z}\tag{1.156}
  $$
  the second equation implies,
  $$
  R^2\dot{\phi}=\text{constant}=L_z\tag{1.157}
  $$
  the first equation can be rewritten as
  $$
  \ddot{R}-\frac{L_z^2}{R^3}=-\frac{\partial\Phi(R,z)}{\partial R}\tag{1.158}
  $$
  examine a circular orbit in the equatorial plane, $R(t)\equiv R_g=\text{constant}$, $z(t)=0$. Equation (1.158) yields
  $$
  L_z^2=R_g^3\left(\frac{\partial\Phi}{\partial R}\right)_{(R_g,0)}\tag{1.159}
  $$
  1. Equation (1.157) can be solved
     $$
     \fbox{$\kappa_\phi=\dot{\phi}=\frac{L_z}{R_g^2}=\left(\frac{1}{R}\frac{\partial\Phi}{\partial R}\right)^{1/2}_{(R_g,0)}$}
     $$
  Now consider a nearly circular orbit with the same $z$-component of angular momentum $L_z$ as in equation (1.159). Let
  $$
  x\equiv R-R_g\tag{1.162}
  $$
  and expand the potential in a Taylor series around $(R,z)=(R_g,0)$:
  $$
  \Phi(R,z)=\left(\frac{\partial\Phi}{\partial R}\right)_{(R_g,0)}x+\frac{1}{2}\left(\frac{\partial^2\Phi}{\partial R^2}\right)_{(R_g,0)}x^2+\frac{1}{2}\left(\frac{\partial^2\Phi}{\partial z^2}\right)_{(R_g,0)}z^2\tag{1.163}
  $$
  The **epicycle approximation** neglect all terms in the expansion above that are higher than second order in $x$ and $z$.
  2. Substituting the Taylor series (1.163) into the third of equations (1.156) to obtain
     $$
     \ddot{z}+\kappa_z^2z=0,\tag{1.164}
     $$
     where the **vertical frequency** is
     $$
     \fbox{$\kappa_z(R_g)=\left(\frac{\partial^2\Phi}{\partial z^2}\right)^{1/2}_{(R_g,0)}\tag{1.165}$}
     $$
  3. We next turn to the radial equation of motion (1.158), replacing $\ddot{R}$ by $\ddot{x}$, the potential $\Phi(R,z)$ by its Taylor expansion (1.163), and $L_z^2/R^3$ by its Taylor expansion $L_z^2/(R_g+x)^3=L_z^2/R_g^3-3(L_z^2/R_g^4)x+O(x^2)$. The terms independent of $x$ cancel because of equation (1.159), and discarding all terms that are higher than first order in $x$ or $z$, we obtain
     $$
     \ddot{x}+\kappa_R^2x=0,\tag{1.167}
     $$
     where the **radial** or **epicycle frequency** is
     $$
     \fbox{$\kappa_R(R_g)=\left(\frac{3L_z^2}{R^4}+\frac{\partial^2\Phi}{\partial R^2}\right)^{1/2}_{(R_g,0)}=\left(\frac{3}{R}\frac{\partial\Phi}{\partial R}+\frac{\partial^2\Phi}{\partial R^2}\right)^{1/2}_{(R_g,0)}\tag{1.168}$}
     $$
  :::

- the solution of $R$ and $\phi$:
  $$
  R(t)=R_g+x_0\cos(\kappa_Rt+\eta)
  $$
  $$
  \phi(t)=\kappa_\phi t+\phi_0-\frac{2x_0}{R_g}\frac{\kappa_\phi}{\kappa_R}\sin(\kappa_Rt+\eta)\tag{1.170}
  $$

  ::: info derivation
  1. It's easy to solve $x$ from equation (1.167)
     $$
     x(t)=x_0\cos(\kappa_Rt+\eta),\tag{1.169}
     $$
     with integration constants $x_0\ge0$ and $\eta$.  
     Substituting into relation (1.162), it reads
     $$
     \fbox{$R(t)=R_g+x_0\cos(\kappa_Rt+\eta)$}
     $$
  2. Solve the azimuthal motion by writing equation (1.157) in the form
     $$
     \dot{\phi}=\frac{L_z}{(R_g+x)^2}=\kappa_\phi\left(1-\frac{2x}{R_g}\right)+O(x^2),
     $$
     dropping terms higher than $O(x)$ and using equation (1.169), we find
     $$
     \fbox{$\phi(t)=\kappa_\phi t+\phi_0-\frac{2x_0}{R_g}\frac{\kappa_\phi}{\kappa_R}\sin(\kappa_Rt+\eta)\tag{1.170}$}
     $$
  :::
  ::: info comfine the integration constants
  Comparing the $R(t)$ with the equation (1.46),
  $$
  \begin{align}
  R(t)&=R_g+x_0\cos(\kappa_Rt+\eta) \\
  r&=a(1-e\cos u)\tag{1.46}
  \end{align}
  $$
  we find that $R_g=a$, $x_0=ae$, so we have
  $$
  \fbox{$
  \begin{align}
  R(t)&=a(1+e\cos(\kappa_Rt+\eta)) \\
  \phi(t)&=\kappa_\phi t-\frac{2\kappa_\phi e}{\kappa_R}\sin(\kappa_R t+\eta)+\phi_0
  \end{align}
  $}\tag{a}
  $$
  :::
