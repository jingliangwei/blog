# 电动力学

## 电磁现象的普遍规律

- 电磁力 $F\propto r^{-2}$ 是麦克斯韦方程组的库伦解。电磁波 $\vec{E}=\vec{E}_0 e^{i(\omega t-\vec{k}\cdot\vec{x})}$ 是其行波解。

### 1.1 电荷 & 电场

- Gauss 定理：
$$
\oint\vec{E}\mathrm{d}\vec{S}=\frac{1}{\varepsilon_0}\sum_i Q_i
$$
$$
\nabla\cdot\vec{E}=\frac{\rho}{\varepsilon_0}
$$

- 静电场的旋度：
$$
\nabla\times\vec{E}=0
$$

### 1.2 电流 & 磁场

- 电荷守恒：
$$
\oint_S\boldsymbol{J}\cdot\mathrm{d}\boldsymbol{S}=-\int_V\frac{\partial\rho}{\partial t}\mathrm{d}V
$$
$$
\nabla\cdot\boldsymbol{J}+\frac{\partial\rho}{\partial t}=0
$$

- 毕奥-萨伐尔定律：
$$
\boldsymbol{B}(\boldsymbol{x})=\frac{\mu_0}{4\pi}\int\frac{\boldsymbol{J}(\boldsymbol{x'})\times\boldsymbol{r}}{r^3}\mathrm{d}V'
$$

- 安培环路定理：
$$
\oint_L\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{l}=\mu_0\int_S\boldsymbol{J}\cdot\mathrm{d}\boldsymbol{S}
$$
$$
\nabla\times\boldsymbol{B}=\mu_0\boldsymbol{J}
$$

- 磁场的散度：
$$
\oint_S\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{S}=0
$$
$$
\nabla\cdot\boldsymbol{B}=0
$$

### 1.3 Maxwell Equations

变化电磁场，新增规律：
1. 变化磁场激发电场（法拉第电磁感应定律）
2. 变化电场激发磁场（麦克斯韦位移电流 (displacement current) 假设）:
$$
\boldsymbol{J}_D=\varepsilon_0\frac{\partial\boldsymbol{E}}{\partial t}
$$

- maxwell equations:
$$
\nabla\times\boldsymbol{E}=-\frac{\partial \boldsymbol{B}}{\partial t},
$$
$$
\nabla\times\boldsymbol{B}=\mu_0\boldsymbol{J}+\mu_0\varepsilon_0\frac{\partial\boldsymbol{E}}{\partial t},
$$
$$
\nabla\cdot\boldsymbol{E}=\frac{\rho}{\varepsilon_0},
$$
$$
\nabla\cdot\boldsymbol{B}=0.
$$

### 1.4 介质的电磁性质

#### 极化

- 介质电极化强度：
$$
\boldsymbol{P}=\frac{\sum\boldsymbol{p}_i}{\Delta V}
$$

- 介质极化荷体密度：
$$
\int_V\rho_P\mathrm{d}V=-\oint_S\boldsymbol{P}\cdot\mathrm{d}\boldsymbol{S}
$$
$$
\rho_P=-\nabla\cdot\boldsymbol{P}
$$

- 极化电荷面密度
$$
\sigma_P=(\boldsymbol{P}_1-\boldsymbol{P}_2)\cdot\hat{e}_{21}
$$

- 电位移
$$
\boldsymbol{D}=\varepsilon_0\boldsymbol{E}+\boldsymbol{P}
$$

$$
\nabla\cdot\boldsymbol{D}=\rho_f
$$

::: info 电场和电位移
$$
\rho_f\rightarrow\boldsymbol{D}
$$
$$
\rho_f+\rho_P\rightarrow\boldsymbol{E}
$$
:::

- 极化率 $\chi_e$:
$$
\boldsymbol{P}=\chi_e\varepsilon_0\boldsymbol{E}
$$
- 介质电容率 $\varepsilon$, 相对电容率 $\varepsilon_r$:
$$
\boldsymbol{D}=\varepsilon\boldsymbol{E}
$$
$$
\varepsilon=\varepsilon_r\varepsilon_0,\quad\varepsilon_r=1+\chi_e
$$

#### 磁化

- 磁化强度
$$
\boldsymbol{M}=\frac{\sum\boldsymbol{m}_i}{\Delta V},\quad\boldsymbol{m}=i\boldsymbol{a}.
$$

- 磁化电流体密度
$$
\int_S\boldsymbol{J}_M\cdot\mathrm{d}\boldsymbol{S}=\oint_L\boldsymbol{M}\cdot\mathrm{d}\boldsymbol{l}
$$
$$
\boldsymbol{J}_M=\nabla\times\boldsymbol{M}
$$
- 磁化电流面密度
$$
\alpha_M=(\boldsymbol{M}_1-\boldsymbol{M}_2)\times\hat{e}_{21}
$$
- 极化电流
$$
\boldsymbol{J}_P=\frac{\partial \boldsymbol{P}}{\partial t}
$$

- 磁场强度
$$
\boldsymbol{H}=\frac{\boldsymbol{B}}{\mu_0}-\boldsymbol{M}
$$

$$
\nabla\times\boldsymbol{H}=\boldsymbol{J}_f+\frac{\partial\boldsymbol{D}}{\partial t}
$$

- 磁化率 $\chi_M$
$$
\boldsymbol{M}=\chi_M\boldsymbol{H}
$$

- 磁导率 $\mu$，相对磁导率 $\mu_r$
$$
\mu=\mu_r\mu_0,\quad\mu_r=1+\chi_M
$$

#### 介质中的麦克斯韦方程组

$$
\begin{align}
\nabla\times\boldsymbol{E}&=-\frac{\partial\boldsymbol{B}}{\partial t}, \\
\nabla\times\boldsymbol{H}&=\boldsymbol{J}+\frac{\partial\boldsymbol{D}}{\partial t}, \\
\nabla\cdot\boldsymbol{D}&=\rho, \\
\nabla\cdot\boldsymbol{B}&=0.
\end{align}
$$

$$
\boldsymbol{D}=\varepsilon\boldsymbol{E},
$$
$$
\boldsymbol{B}=\mu\boldsymbol{H},
$$
$$
\boldsymbol{J}=\sigma\boldsymbol{E}.
$$
