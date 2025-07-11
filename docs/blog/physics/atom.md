# 原子物理

## 玻尔模型

### 里德伯公式

氢原子的谱线有经验公式
$$
\tilde{\nu}=R_H(\frac{1}{m^2}-\frac{1}{n^2})
$$

其中里德伯常数 $R_H=1.097\times10^7m^{-1}$ ，
波数 $\tilde{\nu}=\dfrac{1}{\lambda}$

各线系如下表：

| 线系名字   |     |
|:---------------:|:---------------:|
| 赖曼系   | $m=1$ |
| 巴尔末系   | $m=2$ |
| 帕邢系   | $m=3$ |
| 布喇开系   | $m=4$ |
| 普丰德系   | $m=5$ |

### 玻尔模型基本假设

1. 定态假设
2. 频率条件（辐射条件或玻尔准则）：
电子跃迁释放光子 $h\nu=|E_n-E_m|$
![氢原子能级](./atom_fig/1-4.jpg)
3. 角动量量子化

### 玻尔模型

1. 氢原子能量：

- 经典 $E=-\dfrac{1}{2}\dfrac{Ze^2}{4\pi\varepsilon_0r}\quad(Z=1)$
- 量子 $E_n=-\dfrac{R_Hhc}{n^2}$

2. 电子轨道半径
$$
r_n=\frac{1}{4\pi\varepsilon_0}\frac{n^2e^2}{2hcR_H}
$$

3. $R_H$ 理论值

从光子(电磁辐射)频率导出电子轨道的另一表达式

- 经典 $\nu=\dfrac{e}{2\pi}\sqrt{\dfrac{Z}{4\pi\varepsilon_0m_er^3}}\quad(Z=1)$
- 量子 $\nu=c\tilde{\nu}=\dfrac{2R_Hc}{n^3}\quad(m\rightarrow\infty,n=m+1)$

得到 $r=r_n=n^2\sqrt[3]{\dfrac{1}{4\pi\varepsilon_0}\dfrac{e^2}{16\pi^2R_H^2c^2m_e}}$

进而有 $R_H=\dfrac{2\pi^2e^4m_e}{(4\pi\varepsilon_0)^2h^3c}$

::: info 误差
理论值 $R_H=\dfrac{2\pi^2e^4m_e}{(4\pi\varepsilon_0)^2h^3c}=1.09737\times10^7m^{-1}$

实测值 $R_H=1.9677\times10^7m^{-1}$
:::

4. more:
- 玻尔半径 $a_B=r_1\approx0.53\times10^{-10}m$
- 精细结构常数 $\alpha=\dfrac{e^2}{4\pi\varepsilon_0\hbar c}\approx7.297\times10^{-3}$
- 电子轨道速度量子化 $v_n=\dfrac{e^2}{4\pi\varepsilon_0\hbar}\dfrac{1}{n}=\dfrac{\alpha}{n}c$

### 玻尔理论的修正

1. 对原子核运动的修正

原子核不是静止的，考虑氢核和电子相对质心的运动，
所有出现电子质量 $m_e$ 处需替换为折合质量（约化质量） $\mu=\dfrac{m_eM}{m_e+M}$

故里德伯常量 $R_H=\dfrac{2\pi^2e^4m_e}{(4\pi\varepsilon_0)^2h^3c}=1.09737\times10^7m^{-1}$ 
应改写为
$$
R_H=\dfrac{2\pi^2e^4\mu}{(4\pi\varepsilon_0)^2h^3c}=1.0967758\times10^7m^{-1}
$$
这与实验测量值
$R_H=1.9677\times10^7m^{-1}$ 符合的很好

记 $R_\infty=\dfrac{2\pi^2e^4m_e}{(4\pi\varepsilon_0)^2h^3c}=1.09737\times10^7m^{-1}$

### 玻尔模型的结论

对于电子与微观粒子核两体绕转问题，记核为 $X$ ，核电荷数为 $Z$

该系统的里德伯常数 $R_X=R_\infty\dfrac{1}{1+m_e/M_X}$ （仅修正了质量，应用时还要修正电荷数）

1. 电子轨道半径
$$
r_n=\frac{1}{4\pi\varepsilon_0}\frac{n^2e^2}{2hcZR_X}=\frac{4\pi\varepsilon_0\hbar^2}{\mu Ze^2}n^2
$$

2. 原子能量
$$
E_n=-\frac{Z^2R_Xhc}{n^2}=-\frac{Z^2e^4\mu}{2(4\pi\varepsilon_0)^2\hbar^2}\frac{1}{n^2}
$$

::: info 常用的组合常数
$$
\hbar c=197.3eV\cdot nm=197.3MeV\cdot fm
$$
$$
hc=1240MeV\cdot fm=1240eV\cdot nm
$$
$$
m_ec^2=0.511MeV
$$
$$
m_pc^2=938.3MeV
$$
:::

### 玻尔理论的实验验证

1. 类氢体系的光谱

- 氢的同位素
- 类氢离子 $(\mathrm{HeII},\mathrm{LiIII},\mathrm{BeIV})$ ：核电荷数 $Z\neq1$ ，将 $e^2$ 替换为 $Ze^2$
- 里德伯原子 （一个外层电子+一个带 $+e$ 电荷的原子实）
- 类氢奇特原子 $(\mathrm{p},\mathrm{\mu}^+,\mathrm{e}^+,...)+(\mathrm{e}^-,\mathrm{\mu}^-,\bar{\mathrm{p}},\mathrm{\pi}^-,...)$

应用玻尔理论时做如下修正：
$$
\mu=\frac{Mm}{M+m},\ e^2=Z_1eZ_2e
$$

2. 弗兰克-赫兹实验

证实原子具有分立的能量。

- 汞原子第一激发电势

实验装置如下图：

![实验装置](./atom_fig/1-1.png)

控制 $KG$ 间电压使从 $K$ 处释放的自由电子加速到 $G$ ，然后在 $GA$ 减速，通过电流表观察能够到达 $A$ 的电子数。
控制汞蒸汽的温度压强使其平均自由程 $\bar{\lambda}$ 满足 $D_{GA}<\bar\lambda<D_{KG}$ ，则自由电子只在 $KG$ 段
会与汞原子发生碰撞。
实验结果如下：

![实验结果](./atom_fig/1-2.png)

::: info 解释
- 在 $U\in[0V,4.9V]$ 时，电子与汞原子发生弹性碰撞，随着电压增大，到达阳极的电子增多且更快，电流 $I$ 增大
- 在 $U$ 达到 $4.9V$ 时，电子与汞原子发生完全非弹性碰撞，汞原子正好吸收 $4.9eV$ 能量激发，电子能量损失，电流 $I$ 减小
- 电压 $U$ 继续增大，电子被吸收 $4.9eV$ 能量后的剩余能量不断增大，到达阳极的电子增多且更快，电流 $I$ 增大
:::

实验说明汞原子从基态到第一激发态的第一激发电势为 $4.9V$

::: info 注
由于电子在 $GA$ 边加速边与汞原子碰撞，能量一达到 $4.9V$ 便被基态汞原子吸收了，所以该实验只能测到汞原子的第一激发电势。
:::

- 检验汞原子的其他能态

改进实验装置如下：

![实验装置](./atom_fig/1-3.png)

## 量子力学初步

### 波粒二象性

#### 光的波粒二象性

康普顿散射实验

- 康普顿效应：被散射后的X射线，除了与入射X射线相同波长的成分，还多出了波长增大的成分，而且波长增加的大小随散射角的变化而不同。

![康普顿散射](./atom_fig/2-1.png)

- 实验现象

1. 新谱线相对原谱线的波长改变量 $\Delta\lambda$ 与且仅与散射角 $\theta$ 有关： $\Delta\lambda$ 随 $\theta$ 增大而增大； $\Delta\lambda$ 与入射波长 $\lambda$ 及散射物的性质无关。
2. 在同一散射角 $\theta$ 的情况下，用不同元素的物质作散射物，发现散射谱中原谱线强度随散射物的原子序数的增加而增强，新谱线正相反。

![实验现象](./atom_fig/2-2.png)

- 定性解释

1. 当入射的高能光子与 $Z$ 小原子中的电子或 $Z$ 大原子的外层电子作用时，由于电子束缚能小，相当于与自由电子碰撞，二者交换能量，自由电子获得动能，光子能量减小，形成波长增大的谱线（称为“变线”）。
2. 当入射的高能光子与 $Z$ 大原子内层的束缚电子作用时，由于其束缚能大，相当于与整个原子发生了弹性碰撞，二者不交换能量。光子按照原能量相干散射，形成波长不变的谱线（称为“不变线”）。

- 定量解释

入射光子与自由电子发生弹性碰撞

![入射光子与自由电子发生弹性碰撞](./atom_fig/2-3.png)

可以得到

$$
\Delta\lambda=\lambda_C (1-\cos\theta)
$$

其中 $\lambda_C=\dfrac{h}{m_0c}=0.0242621\overset{\circ}{\mathrm{A}}$ 称为康普顿波长，对应于静止电子的波长。

::: info 相对论中粒子的能量和动量
粒子的总能量
$$
\begin{align}
E=mc^2=m_0c^2+E_k \\
=m_0c^2/\sqrt{1-v^2/c^2}
\end{align}
$$
质能动关系
$$
E=\sqrt{p^2c^2+m_0^2c^4}
$$
动能动量关系
$$
p=\sqrt{E_k^2/c^2+2m_0E_k}
$$
$$
E_k=E-m_0c^2=\sqrt{p^2c^2+m_0^2c^4}-m_0c^2
$$
:::

#### 实物粒子波动性

1. 德布罗意假设

- 我们可以观察到的宇宙是由光和实物组成的；
- 既然光具有波粒二象性，实物也可能具有这种波粒二象性；
- 德布罗意关系式：每一个具有静质量 $m_0$ 和速度 $v$ 的物质粒子，必然由一个实在的波与之关联，以如下方程的形式与动量相关
$$
\lambda=\frac{h}{p}=\frac{h}{mv}=\frac{h}{m_0v}\sqrt{1-v^2/c^2}
$$
写成与动能的关系
$$
\lambda=\frac{h}{\sqrt{2m_0E_k}}\frac{1}{\sqrt{1+E_k/(2m_0c^2)}}
$$
- 德布罗意波（物质波，实物波）：一个具有确定能量 $E$ 、动量 $p$ 的自由粒子，总是和一列单色平面波（具有确定的频率和波长）相联系的，这个平面波的运动方程为
$$
\Psi(\vec{r},t)=Ae^{-i(\omega t-\vec{k}\cdot\vec{r})}=Ae^{-i(Et-\vec{p}\cdot\vec{r})/\hbar}
$$

2. 电子的晶体衍射实验

- 戴维孙-革末实验

![实验](./atom_fig/2-4.png)

- 汤姆逊实验

![实验](./atom_fig/2-5.png)

### 量子力学第一假设

#### 波函数及物理意义

$$
\Psi(\vec{r},t)=Ae^{-i(\omega t-\vec{k}\cdot\vec{r})}=Ae^{-i(Et-\vec{p}\cdot\vec{r})/\hbar}
$$

微观粒子的波动性反映了其运动的统计规律： $|\Psi|^2$ 代表概率（量子力学第一假设）

#### 波函数性质

1. 标准条件： $\Psi$ 必须有限、单值和连续
2. 归一化条件： $\displaystyle \iiint_{-\infty}^{+\infty}|\Psi(\vec{r}, t)|^2\mathrm{d}V=1$
3. 常数因子不定： $\Psi$ 和 $c\Psi$ 描述的概率波完全一致， $c$ 为非零常数
4. 相干叠加性：若 $\Psi_1(\vec{r}, t)$ 和 $\Psi_2(\vec{r}, t)$ 是系统可能的量子态，
那么它们的线性叠加态
$$
\Psi(\vec{r}, t)=c_1\Psi_1(\vec{r}, t)+c_2\Psi_2(\vec{r}, t)\quad c_1,c_2\neq 0
$$
也是这个系统的一个可能的量子态。

（波函数的态叠加原理，量子力学第一原理）

### 量子力学第二假设

#### 薛定谔方程

对于一个静质量为 $m$ ，动量为 $p$ ，能量为 $E$ 的粒子在势场 $V(\vec{r},t)$ 中的三维非相对论运动，有
$$
i\hbar\frac{\partial\Psi(\vec{r},t)}{\partial t}=-\frac{\hbar^2}{2m}\nabla^2\Psi(\vec{r},t)+V(\vec{r},t)\Psi(\vec{r},t)
$$
称为薛定谔方程。

#### 定态薛定谔方程

当势场与时间无关，即 $V=V(\vec{r})$ ，有

- 定态波函数 $\Psi(\vec{r},t)=u(\vec{r})e^{-iEt/\hbar}$
- 定态的薛定谔方程 
$$
-\frac{\hbar^2}{2m}\nabla^2 u(\vec{r})+V(\vec{r})u(\vec{r})=Eu(\vec{r})
$$

### 量子力学第三假设

#### 可观测量的平均值

$$
\langle \vec{r}\rangle =\iiint_{-\infty}^{+\infty}\Psi^*(\vec{r},t)\cdot\vec{r}\cdot\Psi(\vec{r},t)\mathrm{d}\tau
$$
$$
\langle V(\vec{r})\rangle =\iiint_{-\infty}^{+\infty}\Psi^*(\vec{r},t)\cdot V(\vec{r})\cdot\Psi(\vec{r},t)\mathrm{d}\tau
$$
$$
\langle \vec{p}\rangle =\iiint_{-\infty}^{+\infty}\Psi^*(\vec{r},t)\cdot(-i\hbar\nabla)\cdot\Psi(\vec{r},t)\mathrm{d}\tau
$$
$$
\langle E_k\rangle =\iiint_{-\infty}^{+\infty}\Psi^*(\vec{r},t)\cdot(-\frac{\hbar^2}{2m}\nabla^2)\cdot\Psi(\vec{r},t)\mathrm{d}\tau
$$
$$
\langle E\rangle =\iiint_{-\infty}^{+\infty}\Psi^*(\vec{r},t)\cdot[-\frac{\hbar^2}{2m}\nabla^2+V(\vec{r})]\cdot\Psi(\vec{r},t)\mathrm{d}\tau
$$

#### 可观测量算符表示

对任何一个可观测量 $A$ 的平均值
$$
\langle A\rangle =\iiint_{-\infty}^{+\infty}\Psi^*(\vec{r},t)\cdot[\hat{A}\cdot\Psi(\vec{r},t)]\mathrm{d}\tau
$$
其中 $\mathrm{d}\tau=\mathrm{d}x\mathrm{d}y\mathrm{d}z$ ，$\hat{A}$ 称为可观测量 $A$ 的算符。

- 量子力学第三假设：量子力学系统每个可观测量都对应着一个算符，可观测量可由相应的算符表示。

- 常见算符：
1. $\widehat{\vec{r}}=\vec{r}$
2. $\widehat{V(\vec{r})}=V(\vec{r})$
3. $\widehat{\vec{p}}=-i\hbar\nabla$
4. $\widehat{E_k}=-\dfrac{\hbar^2}{2m}\nabla^2$
5. $\widehat{H}=-\dfrac{\hbar^2}{2m}\nabla^2+V(\vec{r})$ 定态能量（哈密顿算符）
6. $\widehat{\vec{L}}=-i\hbar(\vec{r}\times\nabla)$ 角动量算符

- 本征方程：

定态薛定谔方程

$$
-\frac{\hbar^2}{2m}\nabla^2 u(\vec{r})+V(\vec{r})u(\vec{r})=Eu(\vec{r})
$$

是哈密顿算符 $\hat{H}$ 的本征方程。

### 量子力学第四假设

#### 算符的对易关系

- 量子力学第四假设：表示微观体系力学量的算符之间有确定的对易关系。（量子条件）

$$
\begin{array}{l}
\left[\widehat{x_i},\widehat{p_j}\right]=i\hbar\delta_{ij} \\
\left[\widehat{L_x},\widehat{L_y}\right]=i\hbar\widehat{L_z} \\
\left[\widehat{L^2},\widehat{L_z}\right]=0
\end{array}
$$

- 广义不确定关系：
若两个力学量 $p$ 与 $q$ 不对易，则 $p$ 与 $q$ 不能同时具有确定的值。
设 $p$ 与 $q$ 的不确定度（标准差或均方根）为 $\Delta p$ 与 $\Delta q$ ，则它们满足
$$
\Delta p\cdot\Delta q\ge\frac{1}{2}|\langle[\hat{p},\hat{q}]\rangle|
$$

#### 位置动量不确定关系

- 微观粒子的同一方向的位置和动量的不确定度的乘积有下限，称为位置和动量的不确定关系（海森伯不确定关系）。

直角坐标系
$$
\left\{
\begin{array}{l}
\Delta p_x\Delta x\ge\hbar/2 \\
\Delta p_y\Delta y\ge\hbar/2 \\
\Delta p_z\Delta z\ge\hbar/2
\end{array}
\right.
$$
极坐标系
$$
\left\{
\begin{array}{l}
\Delta p_r\Delta r\ge\hbar/2 \\
\Delta p_\theta\Delta \theta\ge\hbar/2 \\
\Delta p_\varphi\Delta \varphi\ge\hbar/2
\end{array}
\right.
$$

#### 能量时间不确定关系

$$\Delta E\cdot\Delta t\ge\hbar/2$$

这里 $\Delta t$ 是特征时间尺度，而非测量时间的标准差，对应的 $\Delta E$ 代表在 $\Delta t$ 这段时间内，体系能量的确定程度。

### 典型一维定态问题

#### 一维无限深势阱

![一维无限深势阱](./atom_fig/2-6.png)

通过定态薛定谔方程求出波函数
$$
\Psi(x, t)=\left\{
\begin{array}{ll}
0 & x\in (-\infty,0)\cup(d,\infty) \\
\displaystyle \sqrt{\frac{2}{d}}\sin(\frac{n\pi x}{d})e^{-iE_nt/\hbar} & x\in [0,d]
\end{array}
\right.
$$
其中 $\displaystyle E_n=\frac{\pi^2\hbar^2}{2md^2}n^2\quad(n=1,2,3...)$

#### 势垒和势垒贯穿

![一维方势垒](./atom_fig/2-7.png)

当 $E<V_0$ 时，解出定态薛定谔方程的解为
$$
u(x)=\left\{
\begin{array}{ll}
A_1e^{ik_1x}+B_1e^{-ik_1x} & x<0 \\
A_2e^{k_2x}+B_2e^{-k_2x} & 0<x<a \\
A_3e^{ik_1x}+B_3e^{-ik_1x} & x>a
\end{array}
\right.
$$
其中 $\displaystyle k_1=\sqrt{\frac{2mE}{\hbar^2}},k_2=\sqrt{\frac{2m(V_0-E)}{\hbar^2}}$

![波函数](./atom_fig/2-8.png)
![概率](./atom_fig/2-9.png)

- 势垒贯穿： $E<V_0$ 的粒子有一定概率穿过势垒到达 $\mathrm{III}$ 区，这种现象称为势垒贯穿，也叫量子隧道效应。
- 透射系数：
$$
T=\frac{|A_3|^2}{|A_1|^2}=\frac{16k_1^2k_2^2}{(k_1^2+k_2^2)^2(e^{-k_2a}-e^{k_2a})^2+16k_1^2k_2^2}
$$
当 $k_2a\gg 1$ 时（即势垒足够高足够厚时），有
$$
T\approx16(\frac{k_1k_2}{k_1^2+k_2^2})^2e^{-2k_2a}=\frac{16E(V_0-E)}{V_0^2}e^{\textstyle -\frac{2a}{\hbar}\sqrt{2m(V_0-E)}}
$$

## 氢原子与碱金属原子

### 氢原子

#### 波函数

- 求解波函数

核：电荷 $+Ze$ （以适用整个类氢体系），质量 $M$

电子：电荷 $-e$ ，质量 $m_e$

势函数： $\displaystyle V(r)=-\frac{Ze^2}{4\pi\varepsilon_0 r}$

质心系下氢原子的定态薛定谔方程为
$$
(-\frac{\hbar^2}{2\mu}\nabla^2-\frac{Ze^2}{4\pi\varepsilon_0 r})u(r,\theta,\varphi)=Eu(r,\theta,\varphi)
$$

分离变量进行求解得：
$$
u(r,\theta,\varphi)=R(r)\Theta(\theta)\Phi(\varphi)
$$
$$
\begin{array}{l}
\displaystyle\Phi(\varphi)=\Phi_{m_l}(\varphi)=\frac{1}{\sqrt{2\pi}}e^{im_l\varphi} \\
\displaystyle\Theta(\theta)=\Theta_{l,m_l}(\theta)=BP_l^{m_l}(\cos\theta) \\
\displaystyle R(r)=R_{n,l}(r)=C\rho^le^{-\rho/2}L_{n+1}^{2l+1}(\rho),\quad \rho=\frac{2Z}{na_B}r
\end{array}
$$
$$
n=1,2,3...;\quad l=0,1,2,...,n-1;\quad m_l=0,\pm1,\pm2,...,\pm l
$$

其中主量子数 $\displaystyle n=\frac{Ze^2}{4\pi\varepsilon_0\hbar}\sqrt{\frac{\mu}{2|E|}}$

故 $\displaystyle E_n=-\frac{1}{n^2}\frac{\mu}{2}(\frac{Ze^2}{4\pi\varepsilon_0\hbar})^2$

| $n$ | $l$ | $m_l$ | $u_{n,l,m_l}(r,\theta,\varphi)$ |
|:--:|:--:|:--:|:--:|
| $1$ | $0$ | $0$ | $\displaystyle\frac{1}{\sqrt{\pi}}\left(\frac{Z}{a_0}\right)^{3/2}\exp\left(-\frac{Zr}{a_0}\right)$ |
| $2$ | $0$ | $0$ | $\displaystyle\frac{1}{4\sqrt{2\pi}}\left(\frac{Z}{a_0}\right)^{3/2}\left(2-\frac{Zr}{a_0}\right)\exp\left(-\frac{Zr}{2a_0}\right)$ |
| $2$ | $1$ | $0$ | $\displaystyle\frac{1}{4\sqrt{2\pi}}\left(\frac{Z}{a_0}\right)^{3/2}\frac{Zr}{a_0}\cos\theta\exp\left(-\frac{Zr}{2a_0}\right)$ |
| $2$ | $1$ | $\pm1$ | $\displaystyle\frac{1}{8\sqrt{\pi}}\left(\frac{Z}{a_0}\right)^{3/2}\frac{Zr}{a_0}\sin\theta\exp\left(-\frac{Zr}{2a_0}\right)e^{\pm i\varphi}$ |
| $3$ | $0$ | $0$ | $\displaystyle\frac{1}{81\sqrt{3\pi}}\left(\frac{Z}{a_0}\right)^{3/2}\left(27-18\frac{Zr}{a_0}+2\frac{Z^2r^2}{a_o^2}\right)\exp\left(-\frac{Zr}{3a_0}\right)$ |
| $3$ | $1$ | $0$ | $\displaystyle\frac{\sqrt{2}}{81\sqrt{\pi}}\left(\frac{Z}{a_0}\right)^{3/2}\left(6-\frac{Zr}{a_0}\right)\frac{Zr}{a_0}\cos\theta\exp\left(-\frac{Zr}{3a_0}\right)$ |
| $3$ | $1$ | $\pm1$ | $\displaystyle\frac{1}{81\sqrt{\pi}}\left(\frac{Z}{a_0}\right)^{3/2}\left(6-\frac{Zr}{a_0}\right)\frac{Zr}{a_0}\sin\theta\exp\left(-\frac{Zr}{3a_0}\right)e^{\pm i\varphi}$ |
| $3$ | $2$ | $0$ | $\displaystyle\frac{1}{81\sqrt{6\pi}}\left(\frac{Z}{a_0}\right)^{3/2}\left(\frac{Zr}{a_0}\right)^2(3\cos^2\theta-1)\exp\left(-\frac{Zr}{3a_0}\right)$ |
| $3$ | $2$ | $\pm1$ | $\displaystyle\frac{1}{81\sqrt{\pi}}\left(\frac{Z}{a_0}\right)^{3/2}\left(\frac{Zr}{a_0}\right)^2\sin\theta\cos\theta\exp\left(-\frac{Zr}{3a_0}\right)e^{\pm i\varphi}$ |
| $3$ | $2$ | $\pm2$ | $\displaystyle\frac{1}{162\sqrt{\pi}}\left(\frac{Z}{a_0}\right)^{3/2}\left(\frac{Zr}{a_0}\right)^2\sin^2\theta\exp\left(-\frac{Zr}{3a_0}\right)e^{\pm 2i\varphi}$ |

#### 概率密度

1. $(\varphi,\varphi+\mathrm{d}\varphi)$ 区间：
$$
P(\varphi)\mathrm{d}\varphi=\frac{1}{2\pi}\mathrm{d}\varphi
$$

2. $(\theta,\theta+\mathrm{d}\theta)$ 区间：
$$
P_{l,m_l}(\theta)\mathrm{d}\theta=|\Theta_{l,m_l}(\theta)|^2\sin\theta\mathrm{d}\theta
$$

3. 角向分布：
$$
P_{l,m_l}(\theta,\varphi)\mathrm{d}\Omega=|Y_l^{m_l}(\theta,\varphi)|^2\mathrm{d}\Omega,\quad\mathrm{d}\Omega=\sin\theta\mathrm{d}\theta\mathrm{d}\varphi
$$

4. 径向分布 $(r,r+\mathrm{d}r)$ 区间：
$$
P_{n,l}(r)\mathrm{d}r=|R_{n,l}(r)|^2r^2\mathrm{d}r
$$

- 玻尔理论中的轨道半径 $r_n=n^2a_B$ 对应 $l=n-1$ 时，电子径向概率分布最大的半径（最概然半径，最可几半径，电子云密度最大处半径）
- $\displaystyle<r>=<r_{n,l}>=\int_0^\infty R^*(r)rR(r)r^2\mathrm{d}r=\frac{1}{2}[3n^2-l(l+1)]a_B$

5. 电子云图 $|\Psi|^2$

![电子云图](./atom_fig/3-1.png)

#### 角动量

1. 轨道角动量大小

角动量平方算符 $\widehat{L^2}$ 满足本征方程
$$
\widehat{L^2}Y_l^{m_l}(\theta,\varphi)=l(l+1)\hbar^2Y_l^{m_l}(\theta,\varphi)
$$
本征值 $\widehat{L^2}=l(l+1)\hbar^2$

则角动量大小 $L_l=\sqrt{l(l+1)}\hbar$

（ $l$ 称为轨道角动量量子数，简称轨道角量子数）

2. 轨道角动量方向

- 角动量 $z$ 向分量： $L_{lz}=m_l\hbar$
- 轨道磁量子数： $m_l$
- $x,y$ 向分量： $<L_{lx}>=0,<L_{ly}>=0$
$$
\left\{\begin{array}{l}
[\widehat{L}_{lx},\widehat{L}_{ly}]=ih\widehat{L}_z\neq0 \\
[\widehat{L}_{ly},\widehat{L}_{lz}]\neq0 \\
[\widehat{L}_{lx},\widehat{L}_{lz}]\neq0
\end{array}\right.
$$

3. 角动量定义：

若一个算符包含三个分量
$$
\hat{j}=(\hat{j}_x,\hat{j}_y,\hat{j}_z)
$$
且它的三个分量满足如下基本对易关系
$$
\begin{array}{l}
[\hat{j}_x,\hat{j}_y]=i\hbar\hat{j}_z \\
[\hat{j}_y,\hat{j}_z]=i\hbar\hat{j}_x \\
[\hat{j}_z,\hat{j}_x]=i\hbar\hat{j}_y
\end{array}
$$
无论其物理意义如何，均可称为角动量算符。

4. 角动量守恒：

在量子力学中，设力学量 $F$ 对应算符 $\widehat{F}$ ，若
$$
\frac{\mathrm{d}\widehat{F}}{\mathrm{d}t}=0
$$
则该力学量守恒。

#### 量子数

1. 轨道角量子数 $l$
- $L_l=\sqrt{l(l+1)}\hbar,\quad l=0,1,2,...,n-1$
- 其值习惯上用光谱学标记表示，$l=0,1,2,3,4,5,6,7...$ 分别对应小写字母：s,p,d,f,g,h,i,k...

2. 轨道磁量子数 $m_l$
- $L_{lz}=m_l\hbar,\quad m_l=-l,-l+1,...,l$

3. 主量子数 $n$
- $\displaystyle E_n=-\frac{1}{n^2}\cdot\frac{1}{2}\mu\left(\frac{Ze^2}{4\pi\varepsilon_0\hbar}\right)^2$

4. 简并（degeneracy）：不同的本征函数对应相同的本征值

能级 $E_n$ 是 $n^2$ 重简并的。

::: info 简并的本质是系统的对称性
1. “球对称” 能量大小与 $z$ 轴取向无关（对应磁量子数 $m_l$）
2. “势函数 $V$ 与 $r$ 简单成反比” 能量对 $l$ 简并
:::

### 原子的辐射跃迁与选择定则

#### 辐射跃迁

- 辐射跃迁：光子形式传递能量
- 碰撞跃迁：动能形式传递能量

- 谱线强弱因素：
1. 相应能量的光子数
2. 相应能级的跃迁原子数目
3. 能级 $E_i$ 的原子布居数（atom population，即单位体积内的原子数）和跃迁概率

#### 跃迁的选择定则

- 选择定则：电偶极跃迁概率 $\displaystyle\lambda_{21}=\frac{16\pi^3\nu_{21}^3}{3\varepsilon_0hc^3}|D_{21}|^2$ 不为零。
即
$$
\left\{\begin{array}{l}
\Delta n \text{任意} \\
\Delta l=l_2-l_1=\pm1 \\
\Delta m_l=m_{l2}-m_{l1}=0,\pm1
\end{array}\right.
$$

1.
- 允许跃迁（容许跃迁，allowed transition）
- 稳态（stable state）
- 允许线

2.
- 禁戒跃迁（forbidden transition）
- 亚稳态（metastable state）
- 禁线（forbidden line），半禁线（semi-forbidden line）

3. 宇称（parity）：对波函数作空间反演
$$
\widehat{P}u(\vec{r})=u(-\vec{r})=\pm u(\vec{r})
$$
- 偶宇称：本征值 $\eta=+1$ （当 $l$ 为偶数）
- 奇宇称：本征值 $\eta=-1$ （当 $l$ 为奇数）

### 碱金属原子

#### 光谱特点

锂原子的光谱：

- 主线系：波长范围最宽，第一条在可见光的红光区，其余均位于紫外；
- 第一辅线系：位于可见光区域，也叫漫线系，边缘模糊；
- 第二辅线系：位于可见光和红外区域，第一辅线系和第二辅线系的线系限相同，也叫锐线系，边缘清晰；
- 柏格曼系：位于红外区域，也叫基线系，频率最低。

![线系](./atom_fig/3-2.png)

#### 能级结构和允许跃迁

![能级结构](./atom_fig/3-3.png)

- 主线系：np->2s (principal 主)
- 一辅系：nd->2p (diffuse 漫)
- 二辅系：ns->2p (sharp 锐)
- 柏格曼系：nf->3d (fundamental 基)

#### 光谱的理论解释

1. 能级公式：

$$
E_{n,l}=-Z^{*2}\frac{Rhc}{n^2}
$$

其中 $Z^{*}\neq 1$ 为原子实的有效电荷数。

- 原子实极化 & 贯穿效应
![图示](./atom_fig/3-4.png)

$$
\begin{align}
E_{n,l}&=-Z^{*2}\frac{Rhc}{n^2}=-\frac{Rhc}{(n/Z^*)^2}=-\frac{Rhc}{n^{*2}} \\
&=-\frac{Rhc}{(n-\Delta_{n,l})^2}=-\frac{(Z-\sigma)^2Rhc}{n^2}
\end{align}
$$

- 有效主量子数 $n^*=n/Z^*$
- 量子数亏损（量子数修正） $\Delta_{n,l}=n-n^*$
- 屏蔽常数 $\sigma=Z-Z^*$

2. 波数公式

$\tilde{\nu}=T_m-T_n$

- 固定光谱项 $T_m$
- 跑动光谱项 $T_n$
- 碱金属光谱项 $\displaystyle T_{n,l}=-\frac{E_{n,l}}{hc}=\frac{Z^{*2}R}{n^2}=\frac{R}{(n-\Delta_{n,l})^2}$
- 线系限： $n=\infty$ 时，即各线系的最短波长
- 共振线： np->ns 的光谱线

则锂原子的波数公式如下：

- 主线系 $\displaystyle \tilde{\nu}=\frac{R}{(2-\Delta_{2s})^2}-\frac{R}{(n-\Delta_{np})^2},\ n=2,3,4,...$
- 第一辅线系 $\displaystyle \tilde{\nu}=\frac{R}{(2-\Delta_{2p})^2}-\frac{R}{(n-\Delta_{nd})^2},\ n=3,4,5,...$
- 第二辅线系 $\displaystyle \tilde{\nu}=\frac{R}{(2-\Delta_{2p})^2}-\frac{R}{(n-\Delta_{ns})^2},\ n=3,4,5,...$
- 柏格曼系 $\displaystyle \tilde{\nu}=\frac{R}{(2-\Delta_{3d})^2}-\frac{R}{(n-\Delta_{nf})^2},\ n=4,5,6,...$

### 电子的磁矩

#### 电子的轨道磁矩

- 电子轨道磁矩 $\displaystyle \vec{\mu}=-\frac{e}{2m_e}\vec{p}_l$ 与轨道角动量 $\vec{p}_l$ 反向
- 旋磁比(gyromagnetic ratio，或磁旋比 magnetogyric ratio) $\displaystyle \gamma=\frac{|\vec\mu|}{|\vec p_l|}=\frac{e}{2m_e}$

$$
\mu_l=-\frac{e}{2m_e}\sqrt{l(l+1)}\hbar\triangleq-\sqrt{l(l+1)}\mu_B
$$

- 电子的玻尔磁子 $\displaystyle \mu_B=\frac{e\hbar}{2m_e}=9.273\times10^{-24}J/T=0.5788\times10^{-4}eV/T$

$$
\mu_{lz}=-\frac{e}{2m_e}p_{lz}=-m_l\mu_B,\ (m_l=l,l-1,...,-l)
$$

#### 磁场中的电子轨道磁矩

1. 磁矩与磁场的相互作用使系统具有磁势能 $\Delta E$
$$
\Delta E=m_l\mu_BB,\quad m_l=0,\pm1,\pm2,...,\pm l
$$
原子能量对磁量子数 $m_l$ 不再简并，进一步分裂。

2. 在匀强磁场中，电子轨道磁矩 $\mu_l$ 以角速度 $\omega$ 绕 $\vec B$ 做拉莫尔进动。
$$
\vec{\omega}=\gamma\vec{B}
$$

3. 非匀强磁场中，一束原子垂直磁场方向入射，当 $l$ 相同，$m_l$ 不同，原子受到的平移力 $F_z$ 将有 $(2l+1)$ 各不同大小，相应的原子束会分裂成 $(2l+1)$ 束。

#### 施特恩-格拉赫实验

![实验](./atom_fig/3-5.png)

### 电子的自旋

- 自旋角动量量子数 $s=1/2$
- 自旋角动量 $\vec{p}_z=\sqrt{s(s+1)}\hbar=\dfrac{\sqrt{3}}{2}\hbar$
- 自旋角动量 $z$ 向分量 $p_{sz}=m_s\hbar,m_s=s,s-1,...,-s$ 即 $p_{sz}=\pm\dfrac{1}{2}\hbar$

![自旋角动量](./atom_fig/3-6.png)

- 自旋磁矩 $\mu_s=-2\cdot\dfrac{e}{2m_e}p_s=-\sqrt{3}\hbar$
- 自旋磁矩 $z$ 向分量 $\mu_{sz}=-2m_s\mu_B=\pm\mu_B$

为了使同一粒子的各种角动量对应的磁矩在形式上一致，引入 g 因子（ g-factor ）
$$
\left\{\begin{array}{l}
\displaystyle \vec{\mu}_j=-g_j\frac{e}{2m_e}\vec{p}_j=-g_j\frac{\mu_B}{\hbar}\vec{p}_j \\
\displaystyle \mu_j=-g_j\sqrt{j(j+1)}\mu_B \\
\displaystyle \mu_{jz}=-g_jm_j\mu_B
\end{array}\right.
$$
其中，$j$ 是角动量 $\vec{p}_j$ 的量子数，可以为整数或半整数； $m_j$ 是其磁量子数， $m_j=j,j-1,...,-j$

完全确定电子的状态需要 4 个量子数 $(n,l,m_l,m_s)$

### 自旋-轨道相互作用

#### 角动量合成

对于两个角动量
$$
\begin{array}{c}
\left\{\begin{array}{l}
p_{j1}=\sqrt{j_1(j_1+1)}\hbar \\
p_{j1z}=m_{j1}\hbar
\end{array}\right.,\quad\left\{\begin{array}{l}
p_{j2}=\sqrt{j_2(j_2+1)}\hbar \\
p_{j2z}=m_{j2}\hbar
\end{array}\right. \\
m_{j1}=j_1,j_1-1,...,-j_1;\quad m_{j2}=j_2,j_2-1,...,-j_2 \\
\end{array}
$$
合成的角动量 $\vec{p}_j$ 为
$$
\left\{\begin{array}{l}
p_j=\sqrt{j(j+1)}\hbar \\
p_{jz}=m_j\hbar
\end{array}\right.,\quad \begin{array}{l}
j=j_1+j_2,j_1+j_2-1,...,|j_1-j_2| \\
m_j=j,j-1,...,-j
\end{array}
$$

其中 $j$ 有 $2min(j_1,j_2)+1$ 种取值，当 $j=j_1+j_2$ 时，称角动量 $\vec{p}_{j1},\vec{p}_{j2}$ 平行；当 $j=|j_1-j_2|$ 时，称角动量 $\vec{p}_{j1},\vec{p}_{j2}$ 反平行。

#### 单电子原子的总角动量

- 单电子原子的总角动量就是其价电子的总角动量
$$
p_j=\sqrt{j(j+1)}\hbar,\quad p_{jz}=m_j\hbar
$$
$$
j=l+\frac{1}{2},|l-\frac{1}{2}|;\quad m_j=j,j-1,...,-j
$$

- 好量子数：在量子力学中，量子数是标记力学量本征值的指标。若该力学量是守恒量，那么对应的量子数就称为好量子数。

考虑自旋-轨道相互作用后的单电子原子，有 7 个量子数 $(n,l,m_l,s,m_s,j,m_j)$ ，其中好量子数 $(n,l,j,m_j)$

#### 单电子原子的总磁矩和有效磁矩

- 单电子原子的总磁矩是电子轨道磁矩和自旋磁矩的矢量和
$$
\vec{\mu}=-\frac{\mu_B}{\hbar}(g_l\vec{p}_l+g_s\vec{p}_s)
$$
其中 $g_l=1,\ g_s=2$

- 单电子原子有效磁矩是 $\vec{\mu}$ 在 $\vec{p}_j$ 上的分量 $\vec{\mu}_j$
$$
\left\{\begin{array}{l}
\displaystyle \vec{\mu}_j=-g_j\frac{e}{2m_e}\vec{p}_j=-g_j\frac{\mu_B}{\hbar}\vec{p}_j \\
\displaystyle \mu_j=-g_j\sqrt{j(j+1)}\mu_B \\
\displaystyle \mu_{jz}=-g_jm_j\mu_B
\end{array}\right.
$$

其中 $\displaystyle j=l+\frac{1}{2},|l-\frac{1}{2}|;$ $m_j=j,j-1,...,-j;$ $g_j=1+\dfrac{j(j+1)+s(s+1)-l(l+1)}{2j(j+1)}$

#### 自旋-轨道耦合能

$$
\Delta E_{l,s}=\frac{1}{4\pi\varepsilon_0}\frac{Z^*e^2}{2m_e^2c^2r^3}\vec{p}_s\vec{p}_l
$$

$$
\langle\Delta E_{l,s}\rangle=-E_{n,l}\alpha^2\frac{Z^{*2}}{n}\frac{j(j+1)-s(s+1)-l(l+1)}{2l(l+\dfrac{1}{2})(l+1)}
$$

### 光谱的精细结构

1. 粗结构 (gross structure) ：只考虑电相互作用，忽略磁作用和相对论效应
2. 精细结构 (fine structure) ：考虑自旋-轨道相互作用
3. 超精细结构 (hyperfine structure) ：核自旋-电子耦合

#### 碱金属原子光谱精细结构

1. 粗结构 $E_{n,l}=-\dfrac{RhcZ^{*2}}{n^2}=-\dfrac{Rhc}{(n-\Delta_{n,l})^2}=...$

2. 精细结构 $\displaystyle\langle\Delta E_{l,s}\rangle=-E_{n,l}\alpha^2\frac{Z^{*2}}{n}\frac{j(j+1)-s(s+1)-l(l+1)}{2l(l+\dfrac{1}{2})(l+1)}$

- 精细结构的裂距 $\delta E=\Delta E_{j=l+1/2}+|\Delta E_{j=l-1/2}|=\dfrac{Rhc\alpha^2Z^{*4}}{n^3l(l+1)}\quad = 2\mu_BB_{\text{内}}$

- 电子组态 (electron configuration) ：基态钠原子 $1s^22s^22p^63s$
- 电子态符号 (electronic term symbol) $nl_j$ 或 $n^{2s+1}l_j$
- 原子态符号 (term symbol) $^{2S+1}L_J$ 更完整的 $n_il_i\ ^{2S+1}L_J$ （对于单电子原子简化为 $n^{2S+1}L_J$ ）

3. 结构特点及实验验证

- 精细结构的多重线特征：

双重线： 主线系 $np\rightarrow n's$ 二辅系 $ns\rightarrow n'p$

三重线： 一辅系 $nd\rightarrow n'p$ 柏格曼系 $nf\rightarrow n'd$

- 选择定则：
$$
\left\{\begin{array}{l}
\Delta n \text{任意} \\
\Delta l=\pm1 \\
\Delta j=0,\pm1
\end{array}\right.
$$

#### 氢原子光谱精细结构

1. 粗结构 
$$
\begin{align}
E_n&=-\dfrac{1}{n}\dfrac{1}{2}m_e\left(\dfrac{e^2}{4\pi\varepsilon_0\hbar}\right)^2=-\dfrac{1}{2}\alpha^2c^2\dfrac{m_e}{n^2}Z^2 \\
&=-\frac{RhcZ^2}{n^2}=\left(\frac{Z^2}{n^2}\right)E_1
\end{align}
$$

2. 精细结构

- 电子自旋-轨道相互作用能
$$
\begin{align}
\Delta E_{l,s}&=-\vec{\mu}_s\cdot\vec{B}_{\text{内}}=\langle\Delta E_{l,s}\rangle \\
&=\left\{\begin{array}{ll}
-E_n\dfrac{\alpha^2Z^2}{n}\cdot\dfrac{[j(j+1)-s(s+1)-l(l+1)]}{2l(l+\frac{1}{2})(l+1)} & l\neq 0 \\
0 & l=0
\end{array}\right.
\end{align}
$$

- 电子绕核运动动能的相对论修正
$$
\Delta E_r=-E_n\frac{\alpha^2Z^2}{n^2}\left(\frac{3}{4}-\frac{n}{l+\frac{1}{2}}\right)
$$

- 库仑势的相对论修正（达尔文项）
$$
\Delta E_V=\frac{\pi\hbar}{2m_e^2c^2}\frac{Ze^2}{4\pi\varepsilon_0r^2}|\Psi(0)|^2
$$

- 氢原子的精细结构项 (fine structure)
$$
\Delta E_{FS}=-E_n\frac{\alpha^2Z^2}{n^2}\left(\frac{3}{4}-\frac{n}{j+\frac{1}{2}}\right)
$$

- 一级近似下，氢原子的能量公式
$$
E=E_n+\Delta E_{FS}=E_n\left[1-\frac{\alpha^2Z^2}{n^2}\left(\frac{3}{4}-\frac{n}{j+\frac{1}{2}}\right)\right]
$$

3. 实验观测

对 $\mathrm{H}_\alpha$ 光谱的观测结果与理论明显不符

![H_a](./atom_fig/3-7.png)

4. 兰姆位移 (Lamb shift)

![lamb shift](./atom_fig/3-8.png)

5. 氢原子的超精细结构 (hyperfine structure)

考虑核磁矩
$$
E_{\text{总}}=E_{nl}+\Delta E_1[\propto\alpha^2E_{nl}]+\Delta E_2[\propto\frac{m_e}{m_p}\alpha^2E_{nl}]
$$

$\vec{p}_F=\vec{p}_J+\vec{p}_I$ 量子数 $F=J+I,J+I-1,...,|J-I|$

![hyperfine structure](./atom_fig/3-9.png)

## 多电子原子

### 中心力场近似

- 中心力场近似 (central field approximation) ：

假设原子中某电子 $i$ 在原子核的库仑势场 $-\dfrac{Ze^2}{4\pi\varepsilon_0 r_i}$ 和其他 $(N-1)$ 个电子产生的平均化的中心势场 $U_i(r_i)$ 中运动。

包含了两个假设：1. 独立电子模型；2. 中心力场近似。

- 剩余库仑相互作用 $\displaystyle\hat{H}_1\triangleq\sum_{i>j,j=1}^N\frac{e^2}{4\pi\varepsilon_0r_{ij}}-\sum_{i=1}^NU_i(r_i)$

哈密顿算符 $\displaystyle\hat{H}=\left[\sum_{i=1}^N(-\frac{\hbar^2}{2m_i}\nabla_i^2-\frac{Ze^2}{4\pi\varepsilon_0r_i})+\sum_{i=1}^NU_i(r_i)\right]+\hat{H}_1\triangleq\hat{H}_0+\hat{H}_1$

- 零级近似的哈密顿量 $\displaystyle\hat{H}_0=\sum_{i=1}^N(-\frac{\hbar^2}{2m_i}\nabla_i^2-\frac{Ze^2}{4\pi\varepsilon_0r_i})+\sum_{i=1}^NU_i(r_i)$

- 原子总能量为 $N$ 个电子能量和
$$
E_0=\sum_{i=1}^N E_{n_i,l_i},\quad E_{n_i,l_i}=-Z_{n_i,l_i}^*\frac{Rhc}{n^2}
$$

### 泡利不相容原理

- 泡利不相容原理 (Pauli Exclusion Principle) ：

在原子中，要完全确定一个电子的状态，需要四个量子数。原子中任意两个电子的这四个量子数不能完全相同。或者说，每个量子态只能容纳一个电子。

- 全同粒子 (identical particles) ：内禀性质完全相同的粒子。

- 量子力学第五基本假设：在全同粒子组成的多粒子体系中，全同粒子具有不可分辨性；交换任意两个粒子不会引起体系物理状态的变换；体系的波函数具有交换对称或反对称性。（微观粒子的全同性原理）

考虑一个双粒子全同粒子体系（如氦原子），记两个粒子分别为 $a,b$ ，体系波函数为 $\Psi(q_1,q_2,t)$ ，全同性原理要求 $|\Psi(q_2,q_1)|^2=|\Psi(q_1,q_2)|^2$
$$
\Rightarrow\left\{\begin{array}{lr}
\Psi(q_2,q_1)=\Psi(q_1,q_2) & (1) \\
\Psi(q_2,q_1)=-\Psi(q_1,q_2) & (2)
\end{array}\right.
$$
1. 满足 (1) 式的波函数称为交换对称波函数。如光子、胶子、声子、引力子、氦原子等自旋量子数为整数的全同粒子体系波函数。在统计物理中，这些粒子遵从玻色-爱因斯坦统计，称为玻色子 (bosons)
2. 满足 (2) 式的波函数称为交换反对称波函数。如电子、质子、中子、中微子、夸克等自旋量子数为半奇数的全同粒子体系波函数。在统计物理中，这些粒子遵从费米-狄拉克统计，称为费米子 (fermions)

- 不相容原理更普遍的表述：费米子组成的全同粒子体系的波函数一定是交换反对称的。这种全同费米子体系的每个量子态只能容纳一个费米子。

### 原子的粗结构能级和壳层结构

#### 原子的壳层结构

- 主壳层 (shell) 主量子数 $n$ 相同
$$
\begin{array}{cccccccc}
n= & 1, & 2, & 3, & 4, & 5, & 6, & \dots \\
\text{壳层名} & K, & L, & M, & N, & O, & P, & \dots
\end{array}
$$

- 支壳层 (subshell) 相同 $(n,l)$
$$
\begin{array}{cccccc}
l= & 0, & 1, & 2, & 3, & \dots \\
\text{支壳层} & s, & p, & d, & f, & \dots
\end{array}
$$

- 同一支壳层最多容纳电子数 $N_l=2(2l+1)$ 
- 同一壳层最多容纳电子数 $N_n=2n^2$
- 闭合壳层 (closed shell) （满壳层）：被电子填满的壳层。
- 闭合壳层特点：1. 电子电荷分布球对称；2. 总角动量和总磁矩均为零。

#### 原子的电子组态

- 电子组态 (electron configuration) （电子构型、电子排布） e.g. 氧原子 $1s^22s^22p^4$
- 基组态：原子能量最低电子组态
- 激发组态：非基组态

#### 元素周期表与电子基组态

决定原子的电子基组态原则：
1. 泡利不相容原理
2. 能量最小原理

- 第一周期：对应主壳层 $K$ ，一个支壳层 $1s$ ， $1s\rightarrow1s^2$ 2个元素；
- 第二周期：主壳层 $L$ ，两个支壳层 $2s,2p$ ， $1s^22s\rightarrow1s^22s^22p^6$ 8个元素；
- 第三周期：主壳层 $M$ ，两个支壳层 $3s,3p$ ， $1s^22s^22p^63s\rightarrow1s^22s^22p^63s^23p^6$ 8个元素；
- 第四周期：主壳层 $M,N$ ，三个支壳层 $3d,4s,4p$ ， $4s\rightarrow4s^2\rightarrow3d^14s^2\rightarrow3d^{10}4s^2\rightarrow3d^{10}4s^24p^6$ 18个元素 （其中有两个特例： $Cr(Z=24):3d^54s^1$ 和 $Cu(Z=29):3d^{10}4s^1$ ）
- 第五周期： $5s\rightarrow4d\rightarrow5p$ 18个元素；
- 第六周期： $6s\rightarrow4f\rightarrow5d\rightarrow6p$ 32个元素；
- 第七周期： $7s\rightarrow5d\rightarrow6d\rightarrow7p$ 

洪德定则（经验规律）：电子在填充支壳层时，首先会选择自旋方向向上（即 $m_s=1/2$ ）、且各电子自旋平行的量子态填充；填满后，再填充反平行（即 $m_s=-1/2$ ）的量子态。

### 多电子原子能级精细结构

$$
\hat{H}=\hat{H}_0+[\hat{H}_1+\hat{H}_2]+...
$$

多电子原子的粗结构
$$
E_0=\sum_{i=1}^N E_{n_i,l_i}
$$

多电子原子的精细结构
1. 电作用：剩余库仑作用 $H_1$
2. 磁作用：电子自旋-轨道相互作用 $H_2$

- $H_1\sim H_2$, 中间耦合
- $H_1>H_2$, LS耦合，原子的基态和轻原子（$Z<30$）的低激发态
  
  $(s_1,s_2,s_3,...)(l_1,l_2,l_3,...)\rightarrow(S,L)\rightarrow J$
- $H_1<H_2$, jj耦合，重原子的激发态，轻原子的高激发态等

  $(s_1,l_1)(s_2,l_2)...\rightarrow(j_1,j_2,...)\rightarrow J$

#### LS耦合

以双价电子体系为例

在中心力场近似（能级粗结构）的基础上，LS耦合分两步：
1. 多重态 (multiple state) 修正：
   
   主要的相互作用发生在不同原子之间。

   设两个电子的轨道角动量分别为 $\vec{p}_{l1},\vec{p}_{l2}$

   则原子的总轨道角动量
   $$
   \left\{
   \begin{array}{l}
   \vec{p}_L=\vec{p}_{l1}+\vec{p}_{l2} \\
   p_L=\sqrt{L(L+1)}\hbar \\
   p_{Lz}=M_L \hbar
   \end{array}
   \right.
   $$
   其中，总轨道角动量量子数 $L=l_1+l_2,l_1+l_2-1,...,|l_1-l_2|$

   相应的磁量子数 $M_L=L,L-1,...,-L$

   类似的，原子的总自旋角动量
   $$
   \left\{\begin{array}{l}
   \vec{p}_S=\vec{p}_{s1}+\vec{p}_{s2} \\
   p_S=\sqrt{S(S+1)}\hbar \\
   p_{Sz}=M_S\hbar
   \end{array}\right.
   $$
   其中，总自旋角动量量子数 $S=1,0$

   相应的磁量子数 $M_S=1,0,-1$ 和 $M_S=0$

   更一般的，当有 $t$ 个价电子，原子的量子态由量子数 $(n_1,l_1),(n_2,l_2),...,(n_t,l_t),L,M_L,S,M_S$ 决定。

   多重态能级用谱项（符号） $^{2S+1}L$ 表示，每个多重态能级对量子数 $M_L,M_S$ 是 $(2L+1)(2S+1)$ 重简并的。

2. 精细结构修正：
   
   考虑 $\vec{p}_L,\vec{p}_S$ 由于磁相互作用耦合形成原子的总角动量 $\vec{p}_J$

   则原子的量子态由量子数 $(n_1,l_1),(n_2,l_2),...,(n_t,l_t),L,S,J,M_J$ 决定。

   LS耦合的精细结构能量公式为
   $$
   \Delta E_{LS}=\frac{1}{2}A(L,S)[J(J+1)-L(L+1)-S(S+1)]\hbar^2
   $$

   用光谱支项符号 $^{2S+1}L_J$ 表示。

- LS耦合的两个定则：

1. 朗德间隔定则：
   
   同一多重态的精细结构中，两个相邻能级的间隔与他们中较大的 $J$ 值成正比。

2. 洪德定则 (Hund's rules)：

   在同一电子组态形成的原子态中，首先看 $S$ 值， $S$ 大的能级低；其次看 $L$ 值，$L$ 大的能级低。

   当 $S,L$ 相同时，若价电子数小于或等于该支壳层可容纳的最大电子数目的一半时，$J$ 值小的能级低（正序）；若电子数大于该支壳层可容纳最大电子数目的一半，$J$ 值大的能级低（倒序）。

![4-1](./atom_fig/4-1.png)

- 等效电子 (equivalent electrons)： $n$ 和 $l$ 两个量子数相同的电子，也叫同科电子
- 非等效电子/非同科电子

#### jj耦合

第一步修正：
每个电子的轨道角动量 $\vec{p}_{li}$ 和自旋角动量 $\vec{p}_{si}$ 耦合成该电子的总角动量 $\vec{p}_{ji}$ ，能级由量子数 $(n_1,l_1,j_1,m_{j1}),(n_2,l_2,j_2,m_{j2}),...$ 决定。

第二步修正：
各个电子的总角动量耦合成原子的总角动量
$$
\left\{\begin{array}{l}
\vec{p}_{J}=\vec{p}_{j1}+\vec{p}_{j2}+... \\
p_J=\sqrt{J(J+1)}\hbar \\
p_{Jz}=M_J\hbar
\end{array}\right.
$$
原子态表示为 $(j_1,j_2,...)_J$

### 多电子原子的实验光谱

#### 选择定则

1. 电子组态的选择定则
   
   - 奇宇称 $(-1)^{\sum_i l_i}=-1$
   - 偶宇称 $(-1)^{\sum_i l_i}=1$

   电子组态的选择定则为 $\Delta(\sum_i l_i)=\pm 1$

2. 原子态的选择定则
   
   - LS耦合（原子态 $^{2S+1}L_J$ ）的选择定则
   $$
   \left\{\begin{array}{l}
   \Delta L=0,\pm 1 \\
   \Delta S=0 \\
   \Delta J=0,\pm 1 (J=0\rightarrow J=0\text{除外}) \\
   \Delta M_J=0,\pm 1 (\text{外磁场环境中})
   \end{array}\right.
   $$

   - jj耦合（原子态 $(j_1,j_2)_J$ ）的选择定则
   $$
   \left\{\begin{array}{l}
   \left\{\begin{array}{l}
   \Delta j_1=0 \\
   \Delta j_2=0,\pm 1
   \end{array}\right.\text{或}\left\{\begin{array}{l}
   \Delta j_1=0,\pm 1 \\
   \Delta j_2=0
   \end{array}\right. \\
   \Delta J=0,\pm 1 (J=0\rightarrow J=0\text{除外}) \\
   \Delta M_J=0,\pm 1 (\text{外磁场环境中})
   \end{array}\right.
   $$

#### 氦原子的光谱

![4-2](./atom_fig/4-2.png)

- 仲氦 (Parahelium) ：发射单线结构光谱
- 正氦 (Orthohelium) ：发射三重线光谱

## X射线谱与原子内壳层结构

- X射线谱线源自于原子内层电子能级的跃迁

- X射线管
  ![5-1](./atom_fig/5-1.png)

- X射线光谱
  ![5-2](./atom_fig/5-2.png)

  - 连续谱：由轫致辐射（刹车辐射）（自由-自由跃迁）
  - 短波限：$\displaystyle\lambda_{min}=\frac{hc}{T}=\frac{hc}{eV}=\frac{1.24}{V(kV)}(nm)$
  - 特征谱/标识谱：激发电压，线系分为 $K,L,M...$
  - 莫塞莱定律：特征谱波数公式
    $$
    \tilde{\nu}_{K_\alpha}=R(Z-1)^2\left(\frac{1}{1^2}-\frac{1}{2^2}\right)
    $$
    $$
    \tilde{\nu}_{L_\alpha}=R(Z-7.4)^2\left(\frac{1}{2^2}-\frac{1}{3^2}\right)
    $$
    可以用于精确测量原子序数。
