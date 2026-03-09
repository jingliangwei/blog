# 射电天文学

reference: *Essential Radio Astronomy* by James J. Condon, and Scott M. Ransom

## Radiation Fundamentals

### Brightness and Flux Density

- Specific intensity / brightness $I_\nu$ or $I_\lambda$
    $$
    I_\nu\equiv\frac{\mathrm{d}P}{(\,\cos\theta\ \mathrm{d}\sigma\,)\ \mathrm{d}\nu\ \mathrm{d}\Omega}
    $$
    $$
    I_\lambda\equiv\frac{\mathrm{d}P}{(\,\cos\theta\ \mathrm{d}\sigma\,)\ \mathrm{d}\lambda\ \mathrm{d}\Omega}
    $$

::: info units
- MKS units: metre, kilogram, second
- cgs units: centimetre, gram, second
:::

- Total intensity $I$
    $$
    I\equiv\int_0^\infty I_\nu(\nu)\,\mathrm{d}\nu=\int_0^\infty I_\lambda(\lambda)\,\mathrm{d}\lambda
    $$

- Flux density $S_\nu$
    $$
    S_\nu=\int_{\text{source}} I_\nu(\theta,\phi)\cos\theta\,\mathrm{d}\Omega
    $$
  astronomers use smaller units
  $$
  1\ \text{jansky}=1\ \text{Jy}\equiv 10^{-26} \text{ W m}^{-2}\text{ Hz}^{-1}
  $$

- Spectral luminosity $L_\nu$
    $$
    L_\nu=4\pi d^2 S_\nu
    $$

- Luminosity $L$
    $$
    L\equiv \int_0^\infty L_\nu\,\mathrm{d}\nu
    $$

### Radiative Transfer

1. Absorption

    - the linear absorption coefficient $\kappa$
        $$
        \frac{\mathrm{d}I_\nu}{I_\nu}=-\kappa\ \mathrm{d}s
        $$
    - the optical depth or opacity $\tau$
        $$
        \tau\equiv-\int_{s_{\text{out}}}^{s_{\text{in}}}\kappa(s')\,\mathrm{d}s'
        $$
    
      thus

        $$
        \frac{I_\nu(s_{\text{out}})}{I_\nu(s_{\text{in}})}=\exp(-\tau)
        $$

      If $\tau\ll 1$, the absorber is said to be optically thin; if $\tau\gg 1$, it is optically thick.

2. Emission

    - the emission coefficient $j_v$
        $$
        j_\nu\equiv\frac{\mathrm{d}I_\nu}{\mathrm{d}s}
        $$
    - the equation of radiative transfer
        $$
        \frac{\mathrm{d}I_\nu}{\mathrm{d}s}=-\kappa I_\nu+j_\nu
        $$

In fact, the absorption coefficient and emission coefficient is not independent in full **thermodynamic equilibrium (TE)**

- Kirchhoff's law for a system in TE:
    $$
    \frac{j_\nu(T)}{\kappa(T)}=B_\nu(T)
    $$

  where $B_\nu(T)$ is the blackbody radiation. It applies in **local thermodynamic equilibrium (LTE)** as well as in TE.
