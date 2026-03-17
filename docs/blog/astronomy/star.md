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

1. Equation of hydrostatic equilibrium:

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

2. Equation of mass conservation:

    $$
    \frac{\mathrm{d}M(r)}{\mathrm{d}r}=4\pi r^2\rho(r)
    $$
