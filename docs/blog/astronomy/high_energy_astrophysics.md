# 高能天体物理

## 高能辐射机制

### 相关物理量

- 普朗克常数 $h=6.625\times10^{-27} \text{erg s}$

    波尔兹曼常数 $k=1.3\times10^{-16} \text{erg/K}$

- 流量 Flux
    $$
    F=\frac{\mathrm{d}E}{\mathrm{d}A\,\mathrm{d}t}
    $$

- 单色能流量 monochromatic energy flux
    $$
    F_\nu=\frac{\mathrm{d}E}{\mathrm{d}A\,\mathrm{d}t\,\mathrm{d}\nu}
    $$

- 能流 Fluence
    $$
    \mathcal{F}=\frac{\mathrm{d}E}{\mathrm{d}A}
    $$

- 方向亮度 specific intensity
    $$
    I_\nu=\frac{\mathrm{d}E}{(\,\cos\theta\,\mathrm{d}A\,)\,\mathrm{d}t\,\mathrm{d}\Omega\,\mathrm{d}\nu}
    $$

![intensity](./high_energy_astrophysics_fig/1.png)

- 净流量 Net flux (in direction $\hat{n}$)
    $$
    F_\nu=\int\mathrm{d}F_\nu=\int I_\nu\cos\theta\,\mathrm{d}\Omega
    $$

- 净动量流量 Net momentum flux (in direction $\hat{n}$)
    $$
    p_\nu=\frac{1}{c}\int I_\nu\cos^2\theta\,\mathrm{d}\Omega
    $$

    ::: info derivation
    光子动量
    $$
    p=\frac{h}{\lambda}=\frac{h\nu}{c}=\frac{E}{c}
    $$
    :::

- 辐射能量密度 radiative energy density
    $$
    u_\nu=\frac{1}{c}\int I_\nu\,\mathrm{d}\Omega=\frac{4\pi}{c}J_\nu
    $$
    平均强度 $J_\nu=\frac{1}{4\pi}\int I_\nu\,\mathrm{d}\Omega$

### 辐射转移

- 自发辐射系数 $\varepsilon_\nu$: $\mathrm{d}I_\nu=\varepsilon_\nu\mathrm{d}x$
- 吸收系数 $\alpha_\nu$: $\mathrm{d}I_\nu=-\alpha_\nu I_\nu \mathrm{d}x$

    - 物质中粒子吸收截面 $\sigma_\nu$ ，粒子数密度 $n$，吸收系数 $\alpha_\nu=n\sigma_\nu$
- 辐射转移方程
    $$
    \frac{\mathrm{d}I_\nu}{\mathrm{d}x}=-\alpha_\nu I_\nu+\varepsilon_\nu
    $$
- 光深 $\tau_\nu$: $\mathrm{d}\tau_\nu=\alpha_\nu\mathrm{d}x$, $\tau_\nu=\int_0^x\alpha_\nu(x')\mathrm{d}x'$

    - $\tau_\nu>1$ 光学厚，对辐射不透明
    - $\tau_\nu<1$ 光学薄，对辐射透明
    - 平均自由程 Mean free path $l_\nu=\frac{1}{n\sigma_\nu}$

- 源函数
    
    $$
    S_\nu\equiv\frac{\varepsilon_\nu}{\alpha_\nu}
    $$
    若源函数为常数，辐射强度会趋于源函数
    $$
    I_\nu(\tau_\nu)=S_\nu+e^{-\tau_\nu}[I_\nu(0)-S_\nu]
    $$
    ::: info derivation
    $$
    \frac{\mathrm{d}I_\nu}{\mathrm{d}x}=-\alpha_\nu I_\nu+\varepsilon_\nu
    $$
    $$
    \Rightarrow \frac{\mathrm{d}I_\nu}{\mathrm{d}\tau_\nu}=-I_\nu+\frac{\varepsilon_\nu}{\alpha_\nu}=S_\nu-I_\nu
    $$
    $$
    \Rightarrow \left(\frac{\mathrm{d}I_\nu}{\mathrm{d}\tau_\nu}+I_\nu\right)e^{\tau_\nu}=e^{\tau_\nu}S_\nu
    $$
    $$
    \Rightarrow I_\nu(\tau_\nu)=I_\nu(0)e^{-\tau_\nu}+e^{-\tau_\nu}\int_0^{\tau_\nu}e^{\tau_\nu'}S(\tau_\nu')\,\mathrm{d}\tau_\nu'
    $$
    $$
    \Rightarrow I_\nu(\tau_\nu)=S_\nu+e^{-\tau_\nu}[I_\nu(0)-S_\nu]
    $$
    :::

### 黑体辐射

- 亮温度 Brightness temperature
    $$
    I_\nu=B_\nu(T_b)
    $$
- 色温度 Color temperature
    $$
    h\nu_{\text{max}}=2.82kT_c
    $$
- 有效温度 Effective temperature
    $$
    F=\sigma T_{\text{eff}}^4
    $$

### 轫致辐射

#### 加速带电粒子电磁辐射

![加速电子辐射](./high_energy_astrophysics_fig/2.png)

- Energy flux, Poynting vector
    $$
    -\left(\frac{\mathrm{d}E}{\mathrm{d}A\,\mathrm{d}t}\right)=S=\frac{|\ddot{p}|^2\sin^2\theta}{16\pi^2\varepsilon_0 c^3r^2}
    $$

- Energy loss per solid angle
    $$
    -\left(\frac{\mathrm{d}E}{\mathrm{d}t\,\mathrm{d}\Omega}\right)=\frac{|\ddot{p}|^2\sin^2\theta}{16\pi^2\varepsilon_0 c^3}\quad \left(\text{using  } \mathrm{d}\Omega=\frac{\mathrm{d}A}{r^2}\right)
    $$

- 拉莫方程
    $$
    -\left(\frac{\mathrm{d}E}{\mathrm{d}t}\right)=\frac{|\ddot{p}|^2}{6\pi \varepsilon_0 c^3}
    $$

::: info derivation
$E_r$ 不变，由几何关系导出 $E_\theta$
$$
E_\theta=\frac{qa\sin\theta}{4\pi\varepsilon_0 c^2 r}=\frac{|\ddot{p}|\sin\theta}{4\pi\varepsilon_0 c^2 r}
$$
Poynting vector
$$
|\vec{S}|=|\vec{E}\times\vec{H}|=EH=E\frac{B}{\mu_0}=\frac{E^2}{c\mu_0}
$$
当 $r\gg1$ 时，$E\sim E_\theta$
$$
S=\frac{1}{c\mu_0}\frac{|\ddot{p}|^2\sin^2\theta}{16\pi^2 \varepsilon_0^2 c^4 r^2}=\frac{|\ddot{p}|^2\sin^2\theta}{16\pi^2\varepsilon_0c^3r^2}
$$
:::

::: info Parseval’s theorem
$\dot{\vec{v}}(t)\rightarrow\dot{\vec{v}}(\omega)$
$$
\begin{align}
\int_{-\infty}^\infty -\left(\frac{\mathrm{d}E}{\mathrm{d}t}\right)\mathrm{d}t&=\int_{-\infty}^\infty\frac{e^2}{6\pi\varepsilon_0c^3}|\dot{\vec{v}}(t)|^2\mathrm{d}t \\
&=\int_{-\infty}^\infty \frac{e^2}{6\pi\varepsilon_0 c^3}|\dot{\vec{v}}(\omega)|^2\mathrm{d}\omega
\end{align}
$$
total emitted radiation
$$
\int_0^\infty I(\omega)\mathrm{d}\omega=\int_0^\infty\frac{e^2}{3\pi\varepsilon_0c^3}|\dot{\vec{v}}(\omega)|^2\mathrm{d}\omega
$$
Parseval's theorem
$$
I(\omega)=\frac{e^2}{3\pi\varepsilon_0c^3}|\dot{\vec{v}}(\omega)|^2
$$
:::

#### 单电子轫致辐射

- 轫致辐射 Bremsstrahlung radiation

    刹车辐射 braking radiation

    自由-自由辐射 free-free radiation

![轫致辐射](./high_energy_astrophysics_fig/3.jpg)

- 辐射能谱
    
    $$
    \begin{align}
    I(\omega)&=\frac{e^2}{3\pi\varepsilon_0 c^3}\left[|a_\parallel(\omega)|^2+|a_\perp(\omega)|^2\right] \\
    &=\frac{Z^2e^6}{24\pi^4\varepsilon_0^3c^3m_e^2v^2}\frac{\omega^2}{\gamma^2v^2}\left[\frac{1}{\gamma^2}K_0^2\left(\frac{\omega b}{\gamma v}\right)+K_1^2\left(\frac{\omega b}{\gamma v}\right)\right] \\
    &=\left\{\begin{array}{ll}
        \dfrac{Z^2e^6}{48\pi^3\varepsilon_0^3c^3m_e^2v^2}\dfrac{\omega}{\gamma vb}\left[\dfrac{1}{\gamma^2}+1\right]\exp\left(-\dfrac{2\omega b}{\gamma v}\right) & \text{if  } \omega\gg\dfrac{\gamma v}{b} \\
        \dfrac{Z^2e^6}{24\pi^4\varepsilon_0^3c^3m_e^2v^2}\dfrac{1}{b^2}\left[1+\dfrac{1}{\gamma^2}\left(\dfrac{\omega b}{\gamma v}\right)^2\ln^2\left(\dfrac{\omega b}{\gamma v}\right)\right] & \text{if  } \omega\ll\dfrac{\gamma v}{b}
    \end{array}\right.
    \end{align}
    $$
    where $K_0$ and $K_1$ are modified Bessel functions of order zero and one.

    ![辐射能谱](./high_energy_astrophysics_fig/4.png)

::: info derivation
$a_\parallel=\dot{v}_x,a_\perp=\dot{v}_z$ 傅里叶变换后代入 Parseval's theorem.
:::

## Appendix 2: Distances in astronomy

reference: *High Energy Astrophysics* (3ed) by Longair M.S.

- Parallaxes
- The relation between the pulsation periods of Cepheid variables and their intrinsic luminosities
- Velocity-distance relation for galaxies (Hubble)
- Baade-Wesselink method: obtain angular size $\Delta\theta$ using the Stefan-Boltzmann law and physical size $(d_2-d_1)$ using the expansion of the shell $v$, then distance $r=d/\Delta\theta$
- Gravitational lenses
