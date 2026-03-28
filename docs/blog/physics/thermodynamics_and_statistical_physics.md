# 热力学与统计物理

## 热力学

### 基本概念

1. 热力学系统；绝热壁，导热壁，刚性壁；孤立系，闭系，开系
2. 平衡态：在没有外界影响的条件下，物体各部分的性质长时间内不发生任何变化的状态。

    弛豫时间
3. 状态变量（几何、力学、电磁、化学），温度，态函数；广延量，强度量
4. 热平衡定律（热力学第零定律）：引入温度
5. 物态方程：

    - 三个力学响应函数
        - 等压膨胀系由数
        $$
        \alpha\equiv\frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_p
        $$
    
        - 压强系数
        $$
        \beta\equiv\frac{1}{p}\left(\frac{\partial p}{\partial T}\right)_V
        $$
    
        - 等温压缩系数
        $$
        \kappa_T\equiv-\frac{1}{V}\left(\frac{\partial V}{\partial p}\right)_T
        $$

    - 理想气体（实际气体压强趋于零的极限）
    $$
    pV=NRT
    $$
    ::: info 理想气体的响应函数
    $$
    \alpha=\frac{1}{T},\quad \beta=\frac{1}{T},\quad \kappa_T=\frac{1}{p}
    $$
    :::
    ::: info 适用条件
    1. 理想气体
    2. 不考虑重力
    3. 平衡态
    :::
    ::: info 理想气体假设
    - 微观上：（1）忽略分子体积；（2）忽略分子间作用力
    - 宏观上：低压、低密
    :::

    - 范德瓦耳斯气体（考虑分子之间相互作用） $\left(p+\dfrac{N^2a}{V^2}\right)(V-Nb)=NRT$
    - 昂尼斯 (Onnes) 方程（低压展开，压强幂级数） $pV=NRT(1+A_2p+A_3p^2+\cdots)$
    - 顺磁固体，居里 (Curie) 定律

### 热力学第一定律/内能

1. 热力学第一定律（能量守恒） $\Delta U=W+Q$

    $$
    \mathrm{d}U=\delta W+\delta Q
    $$

2. 内能（态函数） $U$
    
    焓（态函数） $H=U+pV$
    ::: info 理想气体内能只是温度函数的实验证明
    1. 盖吕萨克-焦耳“绝热自由膨胀”实验
    2. 焦耳-汤姆孙“多孔塞节流”实验
    :::

    ::: tip 注
    只有理想气体的内能只与温度有关，实际气体还与体积/压强有关。
    :::

3. 绝热过程、准静态过程
4. 等容热容量
    $$
    C_V=\lim_{\Delta T\rightarrow 0}\left(\frac{\Delta Q}{\Delta T}\right)_V=\left(\frac{\partial U}{\partial T}\right)_V
    $$

    等压热容量
    $$
    \begin{align}
    C_p&=\lim_{\Delta T\rightarrow 0}\left(\frac{\Delta U+p\Delta V}{\Delta T}\right)_p=\left(\frac{\partial U}{\partial T}\right)_p+p\left(\frac{\partial V}{\partial T}\right)_p \\
    &=\left(\frac{\partial H}{\partial T}\right)_p
    \end{align}
    $$

5. 迈耶 (Mayer) 方程
    $$
    C_p-C_V=\left[p+\left(\frac{\partial U}{\partial V}\right)_T\right]\left(\frac{\partial V}{\partial T}\right)_p
    $$
    对于理想气体
    $$
    C_p-C_V=NR
    $$
    ::: info derivation
    $$
    \begin{align}
    U(T,V)&=\left(\frac{\partial U}{\partial T}\right)_V\mathrm{d}T+\left(\frac{\partial U}{\partial V}\right)_T\mathrm{d}V \\
    &=\left(\frac{\partial U}{\partial T}\right)_V\mathrm{d}T+\left(\frac{\partial U}{\partial V}\right)_T\left(\frac{\partial V}{\partial T}\right)_p\mathrm{d}T\quad(\text{using  }\mathrm{d}p=0)
    \end{align}
    $$
    $$
    \Rightarrow \left(\frac{\partial U}{\partial T}\right)_p=\left(\frac{\partial U}{\partial T}\right)_V+\left(\frac{\partial U}{\partial V}\right)_T\left(\frac{\partial V}{\partial T}\right)_p
    $$
    $$
    \begin{align}
    C_p-C_V&=\left(\frac{\partial H}{\partial T}\right)_p-\left(\frac{\partial U}{\partial T}\right)_V \\
    &=\left(\frac{\partial(U+pV)}{\partial T}\right)_p-\left(\frac{\partial U}{\partial T}\right)_V \\
    &=\left(\frac{\partial U}{\partial T}\right)_p+p\left(\frac{\partial V}{\partial T}\right)_p-\left(\frac{\partial U}{\partial T}\right)_V \\
    &=\left[p+\left(\frac{\partial U}{\partial V}\right)_T\right]\left(\frac{\partial V}{\partial T}\right)_p
    \end{align}
    $$
    :::

6. 过程方程 $pV^\gamma=C$

    | | | |
    |:--:|:--:|:--:|
    |$\gamma=0$| $p=\text{const}$| 等压|
    |$\gamma=1$| $pV=\text{const}$| 等温|
    |$\gamma=C_p/C_V$| $pV^\gamma=\text{const}$| 绝热|
    |$\gamma=\infty$| $V=\text{const}$| 等容|

    ::: info 推导绝热过程方程
    $$
    \delta Q=0
    $$
    $$
    \Leftrightarrow\mathrm{d}U+p\mathrm{d}V=0
    $$
    $$
    \Leftrightarrow C_V\mathrm{d}T+p\mathrm{d}V=0
    $$
    $$
    pV=NRT
    $$
    $$
    \Rightarrow p\mathrm{d}V+V\mathrm{d}p=NR\mathrm{d}T
    $$
    $$
    \Rightarrow p\mathrm{d}V+V\mathrm{d}p=C_V(\gamma-1)\mathrm{d}T
    $$
    联立消 $\mathrm{d}T$ 得
    $$
    V\mathrm{d}p+\gamma p\mathrm{d}V=0
    $$
    $$
    \Rightarrow \frac{\mathrm{d}p}{p}+\gamma\frac{\mathrm{d}V}{V}=0
    $$
    $$
    \Rightarrow pV^\gamma=\text{const}
    $$
    :::

### 热力学第二定律/熵与熵变

1. 热机，通常以气体作为工质（气体体积变化大）

2. 可逆过程、不可逆过程 （外界变化）

    无摩擦的准静态过程为可逆过程

3. 热力学第二定律：（自发过程不可逆）

    - Clausius 不可能把热量从低温物体传递到高温物体而不引起其他变化
    - Kelvin-Planck 不可能从单一热源吸热使之完全变成功而不引起其他变化

4. 卡诺定理：

    工作在两个一定温度间的热机，可逆机效率最高
    $$
    \eta=\frac{Q_1-Q_2}{Q_1}\le\frac{T_1-T_2}{T_1}
    $$

5. 熵（态函数） Entropy
    $$
    S_1-S_0=\int_0^1\frac{\delta Q}{T}
    $$
    - 积分沿可逆过程
    - 广延量
    - 差值才有意义
    - 对于任意过程：
        $$
        S_1-S_0\ge\int_0^1\frac{\delta Q}{T},\quad \mathrm{d}S\ge\frac{\delta Q}{T}
        $$

6. 热力学基本方程
    $$
    \mathrm{d}U=T\mathrm{d}S-p\mathrm{d}V
    $$

7. 熵增原理
    ::: tip 注
    热源默认足够大，温度不变。

    物体则温度会变。
    :::

8. 理想气体的熵 （理想气体的 $T\mathrm{d}S$ 方程）：

    - $(T,V)$:
        $$
        \mathrm{d}S=\frac{C_V}{T}\mathrm{d}T+\frac{nR}{V}\mathrm{d}V
        $$
        ::: info derivation
        $$
        \mathrm{d}U=C_V\mathrm{d}T
        $$
        $$
        \mathrm{d}U=T\mathrm{d}S-p\mathrm{d}V
        $$
        $$
        pV=nRT
        $$
        :::
    - $(T,p)$:
        $$
        \mathrm{d}S=\frac{C_p}{T}\mathrm{d}T-nR\frac{\mathrm{d}p}{p}
        $$
        ::: info derivation
        $$
        pV=nRT \Rightarrow \frac{\mathrm{d}p}{p}+\frac{\mathrm{d}V}{V}=\frac{\mathrm{d}T}{T}
        $$
        $$
        \mathrm{d}U=C_V\mathrm{d}T
        $$
        $$
        \mathrm{d}U=T\mathrm{d}S-p\mathrm{d}V
        $$
        :::


9. $T\mathrm{d}S$ 方程：
    $$
    T\mathrm{d}S=C_V\mathrm{d}T+T\left(\frac{\partial p}{\partial T}\right)_V\mathrm{d}V=C_V\mathrm{d}T+\frac{T\alpha}{\kappa}\mathrm{d}V
    $$
    $$
    T\mathrm{d}S=C_p\mathrm{d}T-T\left(\frac{\partial V}{\partial T}\right)_p\mathrm{d}p=C_p\mathrm{d}T-TV\alpha\mathrm{d}p
    $$
    $$
    T\mathrm{d}S=C_p\left(\frac{\partial T}{\partial V}\right)_p\mathrm{d}V+C_V\left(\frac{\partial T}{\partial p}\right)_V\mathrm{d}p=\frac{C_p}{\alpha V}\mathrm{d}V+\frac{C_V\kappa}{\alpha}\mathrm{d}p
    $$

    ::: info derivation
    1. 热力学基本方程+内能全微分
    $$
    \left\{\begin{array}{l}
        \displaystyle \mathrm{d}S=\frac{1}{T}(\mathrm{d}U+p\mathrm{d}V) \\
        \displaystyle \mathrm{d}U=\left(\frac{\partial U}{\partial T}\right)_V\mathrm{d}T+\left(\frac{\partial U}{\partial V}\right)_T\mathrm{d}V
    \end{array}\right.
    $$
    $$
    \Rightarrow \mathrm{d}S=\frac{1}{T}\left(\frac{\partial U}{\partial T}\right)_V\mathrm{d}T+\frac{1}{T}[\left(\frac{\partial U}{\partial V}\right)_T+p]\mathrm{d}V
    $$
    2. +熵全微分
    $$
    \left\{\begin{array}{l}
        \displaystyle \mathrm{d}S=\frac{1}{T}\left(\frac{\partial U}{\partial T}\right)_V\mathrm{d}T+\frac{1}{T}[\left(\frac{\partial U}{\partial V}\right)_T+p]\mathrm{d}V \\
        \displaystyle \mathrm{d}S=\left(\frac{\partial S}{\partial T}\right)_V\mathrm{d}T+\left(\frac{\partial S}{\partial V}\right)_T\mathrm{d}V
    \end{array}\right.
    $$
    $$
    \Rightarrow \left\{\begin{array}{l}
        \left(\dfrac{\partial S}{\partial T}\right)_V=\dfrac{1}{T}\left(\dfrac{\partial U}{\partial T}\right)_V \\
        \left(\dfrac{\partial S}{\partial V}\right)_T=\dfrac{1}{T}[\left(\dfrac{\partial U}{\partial V}\right)_T+p]
    \end{array}\right.
    $$
    3. 二阶混合偏导
    $$
    \left[\frac{\partial}{\partial V}\left(\frac{\partial S}{\partial T}\right)_V\right]_T=\left[\frac{\partial}{\partial T}\left(\frac{\partial S}{\partial V}\right)_T\right]_V
    $$
    $$
    \Rightarrow 0=-\frac{1}{T^2}[\left(\frac{\partial U}{\partial V}\right)_T+p]+\frac{1}{T}[0+\left(\frac{\partial p}{\partial T}\right)_V]
    $$
    $$
    \Rightarrow \left(\frac{\partial U}{\partial V}\right)_T=T\left(\frac{\partial p}{\partial T}\right)_V-p
    $$
    4. 代回熵全微分
    $$
    T\mathrm{d}S=C_V\mathrm{d}T+T\left(\frac{\partial p}{\partial T}\right)_V\mathrm{d}V=C_V\mathrm{d}T+\frac{T\alpha}{\kappa}\mathrm{d}V
    $$

    对于其他两个方程，类似方式可证
    :::

10. 
| 过程 | 热力学特征 | 不变的状态函数 | 熵变 ($\Delta S$) | 温度变化 （理想气体） |
| :---: | :---: | :---: | :---: | :---: |
| **绝热自由膨胀** | 向真空膨胀，$Q=0, W=0$ | **内能 $U$** | 增加 ($>0$) | 不变 |
| **绝热节流膨胀** | 稳流通过多孔塞，$Q=0$ | **焓 $H$** | 增加 ($>0$) | 不变 |
| **绝热可逆膨胀** | 准静态，无摩擦，$Q=0$ | **熵 $S$** | 不变 ($=0$) | 降低 |

### 热力学势与麦克斯韦关系

1. 热力学函数

    - 内能作为热力学函数：

        $$
        \mathrm{d}U=T\mathrm{d}S-p\mathrm{d}V
        $$
    
    - 熵作为热力学函数：

        $$
        \mathrm{d}S=\frac{1}{T}\mathrm{d}U+\frac{p}{T}\mathrm{d}V
        $$

    - 自由能作为热力学函数：

        $$
        F=U-TS
        $$
        $$
        \mathrm{d}F=-S\mathrm{d}T-p\mathrm{d}V
        $$

        最大功定理：系统在等温过程中，自由能的减少是系统对外做功的最大值
    
    - 焓作为热力学函数：

        $$
        H=U+pV
        $$
        $$
        \mathrm{d}H=T\mathrm{d}S+V\mathrm{d}p
        $$
    
    - 吉布斯自由能作为热力学函数：

        $$
        G=U+pV-TS
        $$
        $$
        \mathrm{d}G=-S\mathrm{d}T+V\mathrm{d}p
        $$

2. 热力学势与热力学基本方程组：

    - 热力学势：

        - $U=U(S,V)$ 等熵等容过程，系统的不可逆/自发过程 $\mathrm{d}U<0$
        - $H=H(S,p)$ 等熵等压过程，系统的不可逆/自发过程 $\mathrm{d}H<0$
        - $F=F(T,V)$ 等温等容过程，系统的不可逆/自发过程 $\mathrm{d}F<0$
        - $G=G(T,p)$ 等温等压过程，系统的不可逆/自发过程 $\mathrm{d}G<0$

    - 热力学基本方程组

    | 热力学势 | 全微分 | 平衡态信息 |
    |:---:|:---:|:---:|
    | $U=U(S,V)$ | $\mathrm{d}U=T\mathrm{d}S-p\mathrm{d}V$ | $T=\left(\dfrac{\partial U}{\partial S}\right)_V,p=-\left(\dfrac{\partial U}{\partial V}\right)_S$ |
    | $H=H(S,p)$ | $\mathrm{d}H=T\mathrm{d}S+V\mathrm{d}p$ | $T=\left(\dfrac{\partial H}{\partial S}\right)_p,V=\left(\dfrac{\partial H}{\partial p}\right)_S$ |
    | $F=F(T,V)$ | $\mathrm{d}F=-S\mathrm{d}T-p\mathrm{d}V$ | $S=-\left(\dfrac{\partial F}{\partial T}\right)_V,p=-\left(\dfrac{\partial F}{\partial V}\right)_T$ |
    | $G=G(T,p)$ | $\mathrm{d}G=-S\mathrm{d}T+V\mathrm{d}p$ | $S=-\left(\dfrac{\partial G}{\partial T}\right)_p,V=\left(\dfrac{\partial G}{\partial p}\right)_T$ |

3. 麦克斯韦关系（混合二阶偏导相等）：

    - $\left(\dfrac{\partial T}{\partial V}\right)_S=-\left(\dfrac{\partial p}{\partial S}\right)_V$
    - $\left(\dfrac{\partial T}{\partial p}\right)_S=\left(\dfrac{\partial V}{\partial S}\right)_p$
    - $\left(\dfrac{\partial S}{\partial V}\right)_T=\left(\dfrac{\partial p}{\partial T}\right)_V$
    - $-\left(\dfrac{\partial S}{\partial p}\right)_T=\left(\dfrac{\partial V}{\partial T}\right)_p$

4. 麦克斯韦关系应用：

    - 能态方程
        $$
        \left(\frac{\partial U}{\partial V}\right)_T=T\left(\frac{\partial p}{\partial T}\right)_V-p
        $$
        $$
        \mathrm{d}U=\left(\frac{\partial U}{\partial T}\right)_V\mathrm{d}T+\left(\frac{\partial U}{\partial V}\right)_T\mathrm{d}V=C_V\mathrm{d}T+\left[T\left(\frac{\partial p}{\partial T}\right)_V-p\right]\mathrm{d}V
        $$

    - 焓态方程
        $$
        \left(\frac{\partial H}{\partial p}\right)_T=-T\left(\frac{\partial V}{\partial T}\right)_p+V
        $$
        $$
        \mathrm{d}H=\left(\frac{\partial H}{\partial T}\right)_p\mathrm{d}T+\left(\frac{\partial H}{\partial p}\right)_T\mathrm{d}p=C_p\mathrm{d}T+\left[V-T\left(\frac{\partial V}{\partial T}\right)_p\right]\mathrm{d}p
        $$

    - 熵
        $$
        \mathrm{d}S=\frac{C_V}{T}\mathrm{d}T+\left(\frac{\partial p}{\partial T}\right)_V\mathrm{d}V
        $$
