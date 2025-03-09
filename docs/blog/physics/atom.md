# 原子物理

## 玻尔模型

### 里德伯公式

氢原子的谱线有经验公式
$$
\tilde{\nu}=R_H(\frac{1}{m^2}-\frac{1}{n^2})
$$

其中里德伯常数 $R_H=1.097\times10^7m^{-1}$ ，
波数 $\tilde{\nu}=\dfrac{1}{\lambda}$

### 玻尔模型基本假设

1. 定态假设
2. 频率条件（辐射条件或玻尔准则）：
电子跃迁释放光子 $h\nu=|E_n-E_m|$
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
- 玻尔半径 $a_B=r_1$
- 精细结构常数 $\alpha=\dfrac{e^2}{4\pi\varepsilon_0\hbar c}$
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

1. 电子轨道半径
$$
r_n=\frac{1}{4\pi\varepsilon_0}\frac{n^2e^2}{2hcR_H}=\frac{4\pi\varepsilon_0\hbar^2}{\mu e^2}n^2
$$

2. 原子能量
$$
E_n=-\frac{R_Hhc}{n^2}=-\frac{e^4\mu}{2(4\pi\varepsilon_0)^2\hbar^2}\frac{1}{n^2}
$$

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
控制汞蒸汽的温度压强使其平均自由程 $\bar{\lambda}$ 满足 $D_{GA}<\bar\lambda<D_{AK}$ ，则自由电子只在 $GA$ 段
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

