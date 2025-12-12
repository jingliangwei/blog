# 暗能量的理论与实验观测

建议先学习广义相对论相关内容，可以参考 [相对论](/blog/physics/relativity)

能看懂爱因斯坦场方程即可。

## 标准宇宙学模型

- 宇宙演化满足爱因斯坦场方程
$$
R_{\mu\nu}-\frac{1}{2}g_{\mu\nu}R=8\pi GT_{\mu\nu}
$$

- 宇宙学基本原理：在大尺度上，宇宙中的物质是均匀的，各项同性的。

- Friedmann-Lemaitre-Robertson-Walker metric （FLRW度规）
$$
\mathrm{d}s^2=-c^2\mathrm{d}t^2+a^2(t)\left[\frac{\mathrm{d}r^2}{1-Kr^2}+r^2(\mathrm{d}\theta^2+\sin^2\theta\mathrm{d}\phi^2)\right]
$$
$a$ 为宇宙尺度因子， $K$ 为宇宙的曲率

平坦时空度规
$$
\mathrm{d}s^2=-c^2\mathrm{d}t^2+a^2(t)\left[\mathrm{d}x^2+\mathrm{d}y^2+\mathrm{d}z^2\right]
$$

- Friedmann 方程

对于理想流体，能动张量
$$
T^\mu_\nu=\text{diag}\{-\rho,P,P,P\}
$$
爱因斯坦方程的 $(0,0)$ 分量
$$
H^2\equiv\left(\frac{\dot{a}}{a}\right)^2=\frac{8\pi G}{3}\rho-\frac{K}{a^2}
$$
$(i,i)$ 分量
$$
\frac{\ddot{a}}{a}=-\frac{4\pi G}{3}(\rho+3P)
$$
能量守恒方程
$$
\dot{\rho}+3H(\rho+P)=0
$$

- 哈勃参数
$$
H\equiv \frac{\dot{a}}{a}
$$
哈勃定律：河外星系的视向退行速度与距离成正比
$$
v=H_0 d
$$
归一化无量纲因子
$$
h \equiv \frac{H_0}{100 \ \text{km} \ \text{s}^{-1} \ \text{Mpc}^{-1}}
$$

- 物质状态方程
$$
P=w\rho
$$
$w$ 是状态方程参数

由能量守恒方程解出
$$
\rho\propto a^{-3(1+w)}
$$
在平坦时空，还有
$$
H=\frac{2}{3(1+w)(t-t_0)}
$$
$$
a(t)\propto(t-t_0)^{2/3(1+w)}
$$
对普通尘埃物质，压强远小于能量密度， $w\sim0,\rho_m\propto a^{-3}$ ；对于辐射物质，压强与能量密度有 $P=\rho/3, w=1/3, \rho_r\propto a^{-4}$

## 暗能量的观测证据和基本性质

### 一些基本的物理量

- 临界能量密度：
$$
\begin{align}
\rho_{\text{crit},0} = \frac{3H_0^2}{8\pi G} &= 1.9 \times 10^{-29} \, h^2 \, \text{grams cm}^{-3} \\
&= 2.8 \times 10^{11} \, h^2 \, M_\odot \, \text{Mpc}^{-3} \\
&= 1.1 \times 10^{-5} \, h^2 \, \text{protons cm}^{-3}
\end{align}
$$

能量密度参数：
$$
\Omega_{I,0} \equiv \frac{\rho_{I,0}}{\rho_{\text{crit},0}}
$$

Friedmann 方程：
$$
\frac{H^2}{H_0^2} = \Omega_r a^{-4} + \Omega_m a^{-3} + \Omega_k a^{-2} + \Omega_\Lambda
$$
其中曲率密度参数 $\Omega_k \equiv -\frac{k}{H_0^2}$

- 宇宙学红移：
$$
z=\frac{a(t_0)}{a(t_1)}-1=\frac{1}{a}-1
$$

- 哈勃参数的演化

根据 FLRW 度规推导的 Friedmann 方程
$$
E(z)\equiv\left(\frac{H(z)}{H_0}\right)^2=\Omega_{m,0}(1+z)^3+\Omega_{k,0}(1+z)^2+\Omega_{\Lambda,0}
$$

- 宇宙年龄
$$
t_0=\frac{1}{H_0}\int_0^\infty \frac{\mathrm{d}z}{(1+z)E(z)^{1/2}}
$$

- 哈勃距离
$$
t_H \equiv \frac{1}{H_0} = 9.78 \times 10^9 \, h^{-1} \, \text{yr}, \quad D_H \equiv \frac{c}{H_0} = 3000 \, h^{-1} \, \text{Mpc}
$$

- 共动距离
$$
D_C = D_H \int_0^z \frac{dz'}{E(z)^{1/2}}, \quad E(z) = \Omega_M (1 + z)^3 + \Omega_k (1 + z)^2 + \Omega_\Lambda
$$

- 光度距离
$$
d_L=\sqrt{\frac{L}{4\pi F}}
$$
$$
d_L = (1 + z) D_C
$$

- 角直径距离
$$
d_A \equiv \frac{D}{\delta\theta} = a(t_1)D_C = \frac{D_C}{1 + z}
$$

- Cosmic Distance Duality Relation （宇宙距离对偶关系）
$$
d_A=\frac{d_L}{(1+z)^2}
$$
仅与宇宙的几何有关，与具体模型无关，检验参数 $\eta = \frac{d_L}{d_A (1 + z)^2}$

### 宇宙加速膨胀的观测证据

1. Ia型超新星：光度距离比预期大

2. 减速因子：
$$
q\equiv -a\ddot{a}/\dot{a}^2
$$
对于ΛCDM模型
$$
q_0 = \frac{\Omega_{m,0}}{2} - \Omega_{\Lambda,0}
$$
观测表明 $q_0 \sim -0.6$

3. 宇宙年龄：

最老球状星团年龄 $12\sim13.5 \, \text{Gyr}$

只有物质的平坦宇宙年龄 $t_0 = \frac{2}{3H_0} \approx 8-10 \, \text{Gyr}$ ，与观测矛盾

引入暗能量（宇宙学参数）后，年龄
$$
H_0 t_0 = \int_{0}^{\infty} \frac{dz}{(1+z) \sqrt{\Omega_m^{(0)} (1+z)^3 + \Omega_{\Lambda}^{(0)}}}
$$
当 $\Omega_m \approx 0.3, \Omega_\Lambda \approx 0.7, h=0.7$ 时， $t_0 \sim 13.1 \, \text{Gyr}$

4. CMB 和 LSS 观测：结合大尺度结构数据，强烈支持一个由约70%暗能量、26%暗物质和4%重子物质组成的平坦宇宙模型。

### 暗能量的基本性质

1. 负压强

由 Friedmann 方程：
$$
\frac{\ddot{a}}{a}=-\frac{4\pi G}{3}(\rho+3p)
$$
要求 $\ddot{a}>0$ 有 $w=p/\rho<-1/3$

宇宙中物质占 $30\%,\Omega_m=0.3$ ，暗能量占 $70\%,\Omega_{DE}=0.7$
$$
w=w_m\Omega_m+w_{DE}\Omega_{DE}
$$
$$
w_{DE}\approx\frac{10}{7}w<-\frac{10}{21}
$$

2. 宇宙学常数项
$$
R_{\mu\nu}-\frac{1}{2}g_{\mu\nu}R+\Lambda g_{\mu\nu}=8\pi GT_{\mu\nu}
$$
能量密度 $\Lambda=8\pi G\rho_\Lambda$
$$
P_\Lambda=-\rho_\Lambda,\quad w=-1
$$

3. 宇宙学常数问题（精细调节 Fine-tuning 问题）

现在观测到的暗能量密度 $\rho_{eff} \approx 10^{-47} \, \text{GeV}^4$

量子场论估算真空零点能密度（取普朗克能标） $\rho_{vac} \approx 10^{74} \, \text{GeV}^4$

调节 $\Lambda$ 使 
$$
\rho_{eff}=\rho_{vac}+\frac{\Lambda}{8\pi G}
$$

4. 重合性问题（Coincidence问题）

宇宙演化到今天，暗能量密度和物质密度在同一量级。
但是二者演化不同：物质 $\rho_m\propto a^{-3}$ ，宇宙学常数 $\rho_\Lambda=\text{const}$

## 暗能量的理论模型和扰动性质

### 动力学暗能量模型

宇宙学常数模型对应暗能量状态方程始终为 $w=-1$ ，但实际观测显示其可能偏离 $-1$ ，能量密度和状态方程可能随宇宙演化而改变。主要模型：
1. Quintessence （精质场）模型：将暗能量解释为近似均匀分布的标量场 $\phi$ ，与引力最小耦合，沿势函数 $V(\phi)$ 滚动。
   
   $$
   S = \int d^4 x \sqrt{-g} \left[ -\frac{1}{2} (\nabla \phi)^2 - V(\phi) \right]
   $$
2. K-essence （动能主导）模型：依赖标量场动能项推动加速膨胀。

   $$
   S = \int d^4 x \sqrt{-g} \, p(\phi, X), \quad X \equiv -\frac{1}{2}(\nabla \phi)^2
   $$
3. Phantom （幻影）模型： $w<-1$ （Quintessence模型给出的 $w$ 都大于 $-1$）

   $$
   S = \int d^4 x \sqrt{-g} \left[ \frac{1}{2} (\nabla \phi)^2 - V(\phi) \right]
   $$
4. Chaplygin Gas （查普利金气体）模型：理想流体作为暗能量

### 解决重合性问题

追踪解 (Tracking Solution):

标量场状态方程随背景变化：辐射为主时 $w=1/3$ ，物质为主时 $w=0$ ，晚期加速时 $w=-1$

### Autonomous （自发）系统与稳定性分析

系统形式：
$$
\dot{x} = f(x, y), \quad \dot{y} = g(x, y)
$$

临界点 Critical Point / 吸引子 attractor:
$$
(f,g)|_{(x_c,y_c)}=0
$$
$$
(x(t),y(t))\rightarrow (x_c,y_c)\quad \text{for}\  t\rightarrow\infty
$$

扰动分析：
$$
x=x_c+\delta x,\quad y=y_c+\delta y
$$
$$
\frac{d}{dN} \begin{pmatrix} \delta x \\ \delta y \end{pmatrix} = M \begin{pmatrix} \delta x \\ \delta y \end{pmatrix}, \quad N = \ln(a)
$$
$$
M = \left[\begin{array}{cc}\dfrac{\partial f}{\partial x} & \dfrac{\partial f}{\partial y} \\ \dfrac{\partial g}{\partial x} & \dfrac{\partial g}{\partial y}\end{array}\right]_{(x_c,y_c)}
$$
$$
\delta x = C_1 e^{\mu_1 N} + C_2 e^{\mu_2 N}, \quad \delta y = C_3 e^{\mu_1 N} + C_4 e^{\mu_2 N}
$$

稳定性分析：
- 稳定结点 (Stable Node): $\mu_1 <0,\mu_2 <0$
- 不稳定结点 (Unstable Node): $\mu_1 >0,\mu_2 >0$
- 马鞍点 (Saddle Point): $\mu_1\mu_2<0$
- 稳定漩涡 (Stable Spiral): $\text{Re}(\mu_1)<0,\text{Re}(\mu_2)<0,\text{det}M<0$

### 相互作用暗能量模型

与冷暗物质 (CDM) 相互作用

与光子 Chern-Simons 相互作用

### 暴涨理论

暴涨定义：宇宙极早期 $(\sim 10^{-33}s)$ 发生的指数式加速膨胀，尺度因子增长约 $10^{43}$ 倍。

必要性：解决热大爆炸模型的平坦性问题、视界问题、磁单极问题等。

### 扰动理论

对平坦 FLRW 度规引入扰动计算

...

暗能量扰动方程含 $(1+w)$ 项在分母，当 $w\rightarrow -1$ 扰动发散，故 $w=-1$ 称为宇宙学边界。

- 止步定理：在四维经典爱因斯坦引力下，由单一成分（单一流体或单标量场 $\mathcal{L}=\mathcal{L}(\phi, \partial_\mu\phi\partial^\mu\phi)$）描述且与引力及其他物质最小耦合的暗能量，其状态方程无法跨越 $w=-1$ 边界。

- 跨越 $-1$ 的途径：打破上述至少一个条件，如：
  1. 修改引力： $f(R)$ 理论

     $$
     S = \frac{1}{16\pi G} \int d^4x \sqrt{-g} f(R)
     $$
  2. 引入多成分：双标量场
     
     $$
     S = \int d^4x \sqrt{-g} \left[\frac{1}{2}\nabla_\mu\phi_1\nabla^\mu\phi_1-\frac{1}{2}\nabla_\mu\phi_2\nabla^\mu\phi_2-V(\phi_1,\phi_2)\right]
     $$
  3. 引入非最小耦合或相互作用

### 数值计算与参数化

- 常用参数化形式：
  1. 常数 $w=\text{const}$
  2. 低红移展开 $w(z)=w_0+w_1z$
  3. CPL 参数化（常用） $w(a)=w_0+w_a(1-a),\ w_a=-\mathrm{d}w/\mathrm{d}a|_{a=1}$
  4. 振荡型 $w(z)=w_0+w_1\sin(z)$
  5. 早期暗能量参数化
     $$
     w_{\text{EDE}}(a) = -1 + \left[ 1 - \frac{w_0}{1+w_0} a^C \right]^{-1}
     $$
  6. 局部结构参数化
     $$
     w = w_0 + A (\ln a - \lambda)^3 \exp(-(\ln a - \lambda)^4 / d)
     $$

- 常用程序： [COSMOMC](http://cosmologist.info/cosmomc)
  
  包含两大部分：
  1. CAMB：理论模型的数值计算
  2. MCMC：用实验观测数据限制理论模型（随机游走计算 $\chi^2$）

## 超新星观测和标准烛光

### 超新星分类

Supernova

- Type I ：无氢线
  - Ia 型：强硅线，来自碳氧白矮星热核爆炸（质量达到钱德拉塞卡极限 $1.4M_\odot$）
  - Ib/Ic 型：无硅线，来自大质量星铁核塌缩，丢失氢包层（Ib）或氢氦包层（Ic）
- Type II ：有氢线，来自大质量星（$>8M_\odot$）铁核塌缩

### 标准烛光

Ia 型超新星的临界质量是一定的，故认为所有 Ia 型超新星爆发时释放的能量是相同的，使得 Ia 型超新星成为理想的标准烛光。

两个经验关系：
1. Phillips 关系：越亮的超新星的光变曲线越宽
2. 越亮的超新星光学颜色越蓝

两个光学参数：拉伸参数 $s$ 和颜色参数 $C$
$$
m_{\text{corr}} = m + \alpha (s - 1) - \beta C
$$

### 中微子物理

- 中微子性质：
  
  Neutrino 电中性轻子，有三种 $(v_e, v_\mu, v_\tau)$ ，只参与引力相互作用和弱相互作用（热暗物质），标准模型中无质量，实验观测三种中微子总质量 $O(0.1\ \text{eV})$

### 超新星观测数据集

- Union 2.1: 580颗 $z\le 1.414$
- SNLS: 472颗 $z\le 1.4$
- JLA: 740颗 $z\le 1.3$
- Pantheon: 1048颗 $z\le 2.3$

### 伽马射线暴

伽马射线暴 （GRB）

以2秒为界，分长暴（大质量星塌缩）、短暴（致密天体并合）

- 火球模型：内激波产生伽马暴，外激波产生余辉

## 宇宙微波背景辐射观测

CMB
