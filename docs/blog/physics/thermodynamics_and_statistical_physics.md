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

    - 范德瓦耳斯气体（考虑分子之间相互作用）
    - 昂尼斯 (Onnes) 方程（低压展开，压强幂级数）
    - 顺磁固体，居里 (Curie) 定律

### 热力学第一定律

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
