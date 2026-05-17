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

- Schwarzschild Criterion (convection versus radiation)
    $$
    \nabla_{\text{conv}}\equiv\frac{P}{T}\frac{\mathrm{d}T}{\mathrm{d}P}
    $$
    $$
    \nabla_{\text{rad}}\equiv\frac{\gamma-1}{\gamma}
    $$

## The physics of stellar interiors

### Equation of state

1. Equation of state of an ideal gas
    $$
    P=\frac{\mathfrak{R}\rho T}{\mu}+\frac{aT^4}{3}
    $$
    $$
    \begin{align}
    P&=\frac{\mathfrak{R}\rho T}{\mu_e}+\frac{\mathfrak{R}\rho T}{\mu_i}+\frac{aT^4}{3} \\
    &\equiv P_e+P_i+P_r
    \end{align}
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
        $$
        P=\frac{h^2}{20m_e}\left(\frac{3}{\pi}\right)^{2/3}\left(\frac{1+X}{2m_H}\right)^{5/3}\rho^{5/3}
        $$
    - Relativistic degenerate gas
        $$
        P=\frac{1}{8}\left(\frac{3}{\pi}\right)^{1/3}hcn_e^{4/3}
        $$
        $$
        P=\frac{hc}{8}\left(\frac{3}{\pi}\right)^{1/3}\left(\frac{1+X}{2m_H}\right)^{4/3}\rho^{4/3}
        $$
    
    They are independent of temperature.

### Opacity

4. Opacity

    - Four processes: 
        1. Bound-bound absorption
        2. Bound-free absorption
        3. Free-free absorption
        4. Scattering
    
    - Approximate form
        $$
        \kappa=\kappa_0\rho^\alpha T^\beta
        $$

### Nuclear reactions

5. The binding energy of the atomic nucleus:
    $$
    Q(Z,N)\equiv[Zm_p+Nm_n-m(Z,N)]c^2
    $$
    total binding energy per nucleon
    $$
    \frac{Q(Z,N)}{Z+N}\equiv\frac{Q(Z,N)}{A}
    $$
    where $A$ is the baryon number.

    fusion vs fission

6. The occurrence of fusion reactions

    overcome Coulomb barrier by Quantum Tunnelling
    $$
    P_{\text{fusion}}\propto \exp\left(\frac{-\pi Z_1Z_2e^2}{h\varepsilon_0 v}\right)\exp\left(-\frac{mv^2}{2k_B T}\right)
    $$

    the Gamow peak (Maxwell distribution + tunnelling probability)

7. Hydrogen burning:

    - p-p chain:

        1. PPI chain ( $1.3\times10^7K$ ):
            $$
            p+p\rightarrow D+e^++\nu_e
            $$
            $$
            D+p\rightarrow ^3\!\!He+\gamma
            $$
            $$
            ^3He+^3\!\!He\rightarrow ^4\!\!He+2p
            $$
        2. PPII chain ( $2.0\times10^7K$ ):
            $$
            ^3He+^4\!\!He\rightarrow^7\!\!Be+\gamma
            $$
            $$
            ^7Be+e^-\rightarrow^7\!\!Li+\nu_e
            $$
            $$
            ^7Li+p\rightarrow^4\!\!He+^4\!\!He
            $$
        3. PPIII chain ( $3\times10^7K$ ):
            $$
            ^7Be+p\rightarrow^8\!\!B+\gamma
            $$
            $$
            ^8B\rightarrow^8\!\!Be+e^++\nu_e
            $$
            $$
            ^8Be\rightarrow 2\ ^4He
            $$
        
        Energy production
        $$
        Q_{\text{p-p}}=[4M(p)-M(^4He)]c^2=26.7MeV
        $$

        Neutrino emission
    
    - CNO cycle

        carbon, nitrogen, oxygen

        $$
        ^{12}C+p\rightarrow^{13}\!\!N+\gamma
        $$
        $$
        ^{13}N\rightarrow^{13}\!\!C+e^++\nu_e
        $$
        $$
        ^{13}C+p\rightarrow^{14}\!\!N+\gamma
        $$
        $$
        ^{14}N+p\rightarrow^{15}\!\!O+\gamma
        $$
        $$
        ^{15}O\rightarrow^{15}\!\!N+e^++\nu_e
        $$
        $$
        ^{15}N+p\rightarrow^{12}\!\!C+^{4}\!\!He
        $$

    the rate of energy production of each
    $$
    \varepsilon_{\text{p-p}}\propto \rho T^4
    $$
    $$
    \varepsilon_{\text{CNO}}\propto \rho T^{16}
    $$

8. Helium burning

    - the triple-$\alpha$ reaction
        $$
        ^4He+^4\!\!He\rightarrow^8\!\!Be
        $$
        $$
        ^8Be+^4\!\!He\rightarrow^{12}\!\!C+\gamma
        $$
    
    the energy released
    $$
    Q_{3\alpha}=[3M(^4He)-M(^{12}C)]c^2=7.275MeV
    $$
    the rate of energy production
    $$
    \varepsilon_{3\alpha}\propto \rho^2 T^{40}
    $$

9. Carbon burning ( $5\times10^8K$ )

    Oxygen burning ( $10^9K$ )

    Silicon burning ( $3\times10^9K$ )

::: info Major nuclear burning processes
| Nuclear Fuel | Process | $T_{\text{threshold}}\quad (10^6K)$ | Products | Energy per nucleon (MeV) |
|:---:|:---:|:---:|:---:|:---:|
| H | PP | ~4 | He | 6.55 |
| H | CNO | 15 | He | 6.25 |
| He | 3$\alpha$ | 100 | C,O | 0.61 |
| C | C+C | 600 | O,Ne,Na,Mg | 0.54 |
| O | O+O | 1000 | Mg,S,P,Si | ~0.3 |
| Si | Nuc eq. | 3000 | Co,Fe,Ni | <0.18 |
:::

$$
\varepsilon=\varepsilon_0\rho T^\eta
$$

10. Origin of the elements heavier than Fe:

    the s-process and r-process: the neutron capture reactions proceeds more slowly or rapidly than the competing $\beta$ decays.

    - $\beta$ decay: $n^0\rightarrow p^++e^-+\nu_e$

11. Abundances of nuclei:

    percentage of (total number of atoms / total mass (X,Y,Z used above))

## The structure of main-sequence stars

Four stellar structure equations:
$$
    \begin{align}
    \frac{\mathrm{d}r}{\mathrm{d}M}&=\frac{1}{4\pi r^2\rho} \\
    \frac{\mathrm{d}P}{\mathrm{d}M}&=-\frac{GM}{4\pi r^4} \\
    \frac{\mathrm{d}L}{\mathrm{d}M}&=\varepsilon \\
    \frac{\mathrm{d}T}{\mathrm{d}M}&=-\frac{3\kappa L}{64\pi^2acr^4T^3}
    \end{align}
$$
Three supplements:
$$
\begin{aligned}
P&=\frac{\mathcal{R}\rho T}{\mu} \\
\kappa &=\kappa_0 \rho^\alpha T^\beta \\
\varepsilon &= \varepsilon_0\rho T^\eta
\end{aligned}
$$

### homologous stellar model

- model:
    $$
    \begin{aligned}
    r&=M_s^{a_1}r^*(m) \\
    \rho&=M_s^{a_2}\rho^*(m) \\
    L&=M_s^{a_3}L^*(m) \\
    T&=M_s^{a_4}T^*(m) \\
    P&=M_s^{a_5}P^*(m)
    \end{aligned}
    $$

    substitute into the four stellar structure equation and the equation of state, and we have
    $$
    \begin{aligned}
    4a_1+a_5&=2 \\
    3a_1+a_2&=1 \\
    a_3&=\eta a_4+a_2+1 \\
    4a_1+(4-\beta)a_4&=\alpha a_2+a_3+1 \\
    a_5&=a_2+a_4
    \end{aligned}
    $$

- $M-L$ and $L-T_e$ relations:

    $$
    L_s\propto M_s^{a_3}
    $$
    $$
    L_s\propto T_s^{4a_3/(a_3-2a_1)}
    $$

### polytropes model

- model:
    $$
    \left\{\begin{array}{l}
    \dfrac{\mathrm{d}P(r)}{\mathrm{d}r}=-\dfrac{GM(r)\rho(r)}{r^2} \\
    P=K\rho^\gamma=K\rho^{n+1/n}
    \end{array}\right.
    $$
    $$
    \Rightarrow \frac{1}{\xi^2}\frac{\mathrm{d}}{\mathrm{d}\xi}\left(\xi^2\frac{\mathrm{d}\theta}{\mathrm{d}\xi}\right)=-\theta^n
    $$
    where
    $$
    \xi\equiv \frac{r}{\alpha},\theta^n\equiv\frac{\rho}{\rho_c},\alpha\equiv\sqrt{\frac{(n+1)K}{4\pi G\rho_c^{n-1/n}}}
    $$
    This is Lane-Emden equation.

- For $n=1.5$, in the case of non-relativistic degeneracy $P=K_1\rho^{5/3}$
    $$
    M_sR^3=\text{const}
    $$
    For $n=3$, in the case of relativistic degeneracy $P=K_2\rho^{4/3}$
    $$
    M_s=5.83\mu_e^{-2}M_\odot
    $$

- Minimum and maximum masses for stars:

    - Clayton's model:
        $$
        \frac{\mathrm{d}P}{\mathrm{d}r}=-\frac{4\pi}{3}G\rho_c^2 r\exp\left(-\frac{r^2}{a^2}\right)
        $$
        $$
        \Rightarrow P(r)=\frac{2\pi}{3}G\rho_c^2 a^2\left[\exp\left(-\frac{r^2}{a^2}\right)-\exp\left(-\frac{R^2}{a^2}\right)\right]
        $$
        $$
        P_c\approx\left[\frac{\pi}{36}\right]^{1/3}GM_s^{2/3}\rho_c^{4/3}
        $$
    - Minimum mass of a main sequence star:
        
        The maximum temperature at the center of a contracting gas cloud reaches the ignition temperature for the thermonuclear fusion of H.
        $$
        M_\text{min}\approx\left(\frac{36}{\pi}\right)^{1/2}\left(\frac{4K_{NR}}{G^2m_H^{8/3}}\right)^{3/4}(kT_{ign})^{3/4}
        $$
        where $K_{NR}$ meaning the non-relativistic $P=K_{NR}n_e^{5/3}$

        $M_\text{min}\sim 0.08 M_\odot$

    - Maximum mass of a main sequence star:

        If radiation becomes the dominant source of the pressure, the star could be easily disrupted.
        $$
        P_g=\frac{\rho_c}{m}kT_c
        $$
        $$
        P_r=\frac{1}{3}aT_c^4
        $$
        denoting the parameter $\beta$:
        $$
        P_g\equiv\beta P_c,\quad P_r\equiv(1-\beta)P_c
        $$
        $$
        P_c=\left(\frac{3}{a}\frac{1-\beta}{\beta^4}\right)^{1/3}\left(\frac{k\rho_c}{m}\right)^{4/3}
        $$
        $$
        \left[\frac{\pi}{36}\right]^{1/3}GM_s^{2/3}=\left(\frac{3}{a}\frac{1-\beta}{\beta^4}\right)^{1/3}\left(\frac{k}{m}\right)^{4/3}
        $$

        the maximum mass of a main sequence star is $\sim 100M_\odot$ by requiring $(1-\beta)$ to be less than $0.5$.

        
