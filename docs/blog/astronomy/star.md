# 恒星结构与演化

## Star Formation

1. The detailed process of star formation:
    - giant molecular clouds
    - dense core: fragmentation and collapse, rotating disk (accretion disk)
    - protostar
    - ignition: the Main Sequence

2. Brown dwarfs: if the initial mass of the protostar is too low, the process fails.

## The Observed Properties of Stars

1. Distance:
    
    - parallax
    - Cepheid variables (Period-luminosity relation)
    - Hubble's law

2. Mass:

    - astrometric binaries
    - visual binaries
    - spectroscopic binaries
    - eclipsing binaries （食双星）

3. Radii:

    - angular diameter
    - interferometry and eclipsing binaries

4. Magnitude:

    - colour-magnitude: 
        $$
        \text{B-V}=-2.5\log\left(\frac{\text{flux in B}}{\text{flux in V}}\right)
        $$

    - absolute magnitude, apparent magnitude:
        $$
        m-M=5\log d-5
        $$

    - bolometric magnitude （热星等）:
        $$
        M_{\text{bol}}-M_{\text{bol}\odot}=-2.5\log \frac{L}{L_\odot}
        $$

5. Stellar spectral types, effective temperature: OBAFGKM

6. The Hertzsprung-Russell diagram
7. Mass-luminosity relation
8. Age: star clusters

::: info star clusters
- stars all at same distance
- dynamically bound
- same age
- same initial chemical composition

Open cluster & Globular cluster

MS turn-off points: Globular cluster all old

open cluster has the Hertzsprung gap
:::

9. Metallicity: spectrum

## The Equations of Stellar Structure

4 equations: momentum transport (hydrostatic equilibrium), mass conservation, energy conservation, energy transport.

- Stars: gravity v.s. internal thermal pressure

- Assumptions: isolated, static, spherically symmetric, and inital homogeneous

    ::: info conditions
    - sphere (rotating, magnetic field)
    :::

- 3 supplements:

    Equation of state

    Opacity

    Core nuclear energy generation rate

1. **Equation of hydrostatic equilibrium**:

    $$
    \frac{\mathrm{d}P(r)}{\mathrm{d}r}=-\frac{GM(r)\rho(r)}{r^2}
    $$

    ::: info derivation
    consider a mass of element
    $$
    \delta m=\rho(r)\delta s\delta r
    $$
    outward force: pressure exerted by stellar material on the lower face
    $$
    P(r)\delta s
    $$
    inward force: pressure on the upper face, and gravitational attraction of all stellar material lying within $r$:
    $$
    P(r+\delta r)\delta s+\frac{GM(r)}{r^2}\delta m=P(r+\delta r)\delta s+\frac{GM(r)}{r^2}\rho(r)\delta s\delta r
    $$
    In hydrostatic equilibrium
    $$
    \frac{\mathrm{d}P(r)}{\mathrm{d}r}=-\frac{GM(r)\rho(r)}{r^2}
    $$
    :::

2. **Equation of mass conservation**:

    $$
    \frac{\mathrm{d}M(r)}{\mathrm{d}r}=4\pi r^2\rho(r)
    $$

::: info applications
1. Minimun values for central pressure of a star:

    $$
    \left\{\begin{array}{l}
        \dfrac{\mathrm{d}P}{\mathrm{d}r}=-\dfrac{GM\rho}{r^2} \\
        \dfrac{\mathrm{d}M}{\mathrm{d}r}=4\pi r^2\rho
    \end{array}\right.
    $$
    $$
    \Rightarrow \frac{\mathrm{d}P}{\mathrm{d}M}=-\frac{GM}{4\pi r^4}
    $$
    $$
    P_c-P_s=\int_0^{M_s}\frac{GM}{4\pi r^4}\mathrm{d}M>\int_0^{M_s}\frac{GM}{4\pi r_s^4}\mathrm{d}M=\frac{GM_s^2}{8\pi r_s^4}
    $$

2. The Virial theorem:

    $$
    \Rightarrow 4\pi r^3\mathrm{d}P=-\frac{GM}{r}\mathrm{d}M
    $$
    $$
    \Rightarrow 3\int_{P_c}^{P_s}V\mathrm{d}P=-\int_0^{M_s}\frac{GM}{r}\mathrm{d}M
    $$
    $$
    \Rightarrow 3[PV]|_c^s-3\int_{V_c}^{V_s}P\mathrm{d}V=-\int_0^{M_s}\frac{GM}{r}\mathrm{d}M
    $$
    $$
    \Rightarrow 3\int_0^{V_s}P\mathrm{d}V+\Omega=0
    $$
    where $\Omega$ is the total gravitational potential energy of the star.

3. Minimun mean temperature of a star:

    $$
    -\Omega=3\int_0^{V_s}P\mathrm{d}V=3\int_0^{M_s}\frac{P}{\rho}\mathrm{d}M
    $$
    for ideal gas $P=nkT=k\rho T/m$,
    $$
    3\int_0^{M_s}\frac{kT}{m}\mathrm{d}M=-\Omega=\int_0^{M_s}\frac{GM}{r}\mathrm{d}M>\int_0^{M_s}\frac{GM}{r_s}\mathrm{d}M=\frac{GM_s^2}{2r_s}
    $$
    $$
    \overline{T}=\frac{\int_0^{M_s}T\mathrm{d}M}{M_s}>\frac{GM_sm}{6kr_s}
    $$

4. Physical state of stellar material: plasma (highly ionized gas)

5. the radiation

    $$
    P_{rad}=\frac{aT^4}{3}
    $$
    
    radiation v.s. gas pressure
    $$
    \frac{P_r}{P_g}=\frac{aT^4/3}{kT\rho/m}\approx\frac{amT^3}{3k\left(\dfrac{3M_s}{4\pi r_s^3}\right)}=\frac{4\pi amr_s^3T^3}{9kM_s}\propto M_s^2
    $$

6. Gravitational instability:

    using the Virial theorem $3\int_0^{V_s}P\mathrm{d}V+\Omega=0$

    $$
    3\int_0^{V_s}nkT\mathrm{d}V=3\int_0^{V_s}\frac{\rho_0}{\mu m_H}kT\mathrm{d}V=3\frac{\rho_0}{\mu m_H}kT\frac{4\pi}{3}r_s^3=\frac{3M_s kT}{\mu m_H}
    $$
    $$
    \int_0^{M_s}\frac{GM}{r}\mathrm{d}M=\int_0^{r_s}\frac{G\dfrac{4\pi}{3}\rho_0r^3}{r}4\pi r^2\rho_0\mathrm{d}r=\frac{3}{5}\frac{GM_s^2}{r_s}
    $$

    Jeans criterions:
    $$
    M_s>\left(\frac{5kT}{G\mu m_H}\right)^{3/2}\left(\frac{3}{4\pi\rho_0}\right)^{1/2}\equiv M_J
    $$
    $$
    r_J>\left(\frac{15kT}{4\pi G\mu m_H\rho_0}\right)^{1/2}\equiv r_J
    $$
:::

- Source of energy generation:

    - Cooling or Contraction
    - Chemical Reactions
    - Nuclear Reactions (Fission / Fusion)

3. **Equation of energy production**:
    $$
    \frac{\mathrm{d}L(r)}{\mathrm{d}r}=4\pi r^2\rho(r)\varepsilon
    $$

    ::: info derivation
    $$
    L(r+\delta r)=L(r)+4\pi r^2\rho(r)\delta r\ \varepsilon
    $$
    where $\varepsilon$ is the energy release per unit mass per unit time.
    :::

- Method of energy transport:

    - Conduction: by collisions of gas particles
    - Radiation: by photons
    - Convection: by mass motions of the gas

        condition for occurrence of convection (Schwarzschild criterion):
        $$
        \frac{\mathrm{d}T}{\mathrm{d}r}>\frac{\gamma-1}{\gamma}\frac{T}{P}\frac{\mathrm{d}P}{\mathrm{d}r}=\left(\frac{\mathrm{d}T}{\mathrm{d}r}\right)_{\text{adia}}
        $$
        ::: info derivation
        The density of the convective element should be lower than the surroundings
        $$
        \rho-\delta\rho<\rho-\Delta\rho
        $$
        Assuming adiabatical
        $$
        PV^\gamma=\text{const}\Rightarrow\frac{P}{\rho^\gamma}=\text{const}
        $$
        $$
        \Rightarrow\delta \rho\approx\frac{\rho}{\gamma P}\delta P
        $$
        $$
        \frac{\rho}{\gamma P}\frac{\mathrm{d}P}{\mathrm{d}r}>\frac{\mathrm{d}\rho}{\mathrm{d}r}
        $$
        $$
        P=\frac{\rho kT}{m}\Rightarrow 1=\frac{P}{\rho}\frac{\mathrm{d}\rho}{\mathrm{d}P}+\frac{P}{T}\frac{\mathrm{d}T}{\mathrm{d}P}
        $$
        :::

- The characteristic timescales

    - The dynamical timescale (Newtonian timescale)
        $$
        t_d=\sqrt{\frac{2r^3}{GM}}
        $$
    - The thermal timescale (Kelvin-Helmholtz timescale)
        $$
        t_{th}=\frac{GM^2}{Lr}
        $$
    - The nuclear timescale (Einstein timescale)
        $$
        t_{nuc}\sim\frac{\eta Mc^2}{L}
        $$

4. **Equation of radiative transport**:
    $$
    \frac{\mathrm{d}T(r)}{\mathrm{d}r}=-\frac{3\rho \kappa}{16\pi acr^2T^3}L(r)
    $$
    ::: info derivation
    Only considering the radiation
    $$
    E=aT^4,\quad p_R=\frac{1}{3}aT^4
    $$
    $$
    -\mathrm{d}p_R=F\kappa\rho\mathrm{d}x/c
    $$
    $$
    F=-\frac{4acT^3}{3\kappa\rho}\frac{\mathrm{d}T}{\mathrm{d}r}
    $$
    $$
    L=4\pi r^2F
    $$
    :::

::: info summary
Four equation:
$$
\left\{\begin{array}{l}
    \displaystyle \frac{\mathrm{d}P(r)}{\mathrm{d}r}=-\frac{GM(r)\rho(r)}{r^2} \\
    \displaystyle \frac{\mathrm{d}M(r)}{\mathrm{d}r}=4\pi r^2\rho(r) \\
    \displaystyle \frac{\mathrm{d}L(r)}{\mathrm{d}r}=4\pi r^2\rho(r)\varepsilon \\
    \displaystyle \frac{\mathrm{d}T(r)}{\mathrm{d}r}=-\frac{3\rho \kappa}{16\pi acr^2T^3}L(r)
\end{array}\right.
$$
with 7 variablies $M(r),\rho(r),P(r),L(r),\varepsilon(r),T(r),\kappa(r)$.

Solvable with 3 supplements:
- Equation of state: $P$
- Equation of Opacity: $\kappa$
- Equation of nuclear reactions: $\varepsilon$
:::

- Use of mass as the independent variable
    $$
    \begin{align}
    \frac{\mathrm{d}r}{\mathrm{d}M}&=\frac{1}{4\pi r^2\rho} \\
    \frac{\mathrm{d}P}{\mathrm{d}M}&=-\frac{GM}{4\pi r^4} \\
    \frac{\mathrm{d}L}{\mathrm{d}M}&=\varepsilon \\
    \frac{\mathrm{d}T}{\mathrm{d}M}&=-\frac{3\kappa L}{64\pi^2acr^4T^3}
    \end{align}
    $$
    with boundary conditions:
    $$
    r=0,\ L=0\text{ at } M=0
    $$
    $$
    \rho=0,\ T=0\text{ at } M=M_S
    $$

- Influence of convection
    $$
    L_{conv}=4\pi r^2\alpha\rho v\frac{5k\delta T}{2m}=\frac{10\pi r^2\alpha\rho vk\delta T}{m}
    $$

## The physics of stellar interiors

1. Equation of state of an ideal gas
    $$
    P=\frac{\mathfrak{R}\rho T}{\mu}+\frac{aT^4}{3}
    $$

2. Mean molecular weight
    $$
    n=\frac{2X\rho}{m_H}+\frac{3Y\rho}{4m_H}+\frac{Z\rho}{2m_H}=\frac{\rho}{4m_H}(6X+Y+2)
    $$
    $$
    \mu=\frac{4}{6X+Y+2}
    $$

3. Equation of state of a degenerate gas

    - Non-relativistic degenerate gas
        $$
        P=\frac{1}{20}\left(\frac{2}{\pi}\right)^{2/3}\frac{h^2n_e^{5/3}}{m_e}
        $$
    - Relativistic degenerate gas
        $$
        P=\frac{1}{8}\left(\frac{3}{\pi}\right)^{1/3}hcn_e^{4/3}
        $$
