# 全反对称三秩张量

## $\varepsilon_{ijk}$ 的定义

$\varepsilon_{ijk}$称为列维-席维塔符号，其定义为

$$
\varepsilon_{ijk} = 
\begin{cases}
+1 & \text{若} ijk \text{为} 123 \text{的偶排列} \\
-1 & \text{若} ijk \text{为} 123 \text{的奇排列} \\
0 & \text{其他}
\end{cases}
$$

有关的基本公式有

(1)
$$
\sum_{ij}\varepsilon_{ijk}\varepsilon_{ijl}=2\delta_{kl}
$$

(2)
$$
\sum_i \varepsilon_{ijk}\varepsilon_{ilm}=\delta_{il}\delta_{km}-\delta_{jm}\delta_{kl}
$$

(3)
当$\hat{e}_1,\hat{e}_2,\hat{e}_3$是三个右手系正交单位矢量时
$$
\hat{e}_i\times\hat{e}_j=\sum_k\varepsilon_{ijk}\hat{e}_k
$$

## 应用

### 两个矢量矢积

记 $\vec{A}=A_i\hat{e}_i,\vec{B}=B_j\hat{e}_j$ ，
则
$$
\begin{align}
\vec{A}\times\vec{B}&=A_i\hat{e}_i\times B_j\hat{e}_j \\
&=A_iB_j\hat{e}_i\times\hat{e}_j \\
&=\varepsilon_{ijk}A_iB_j\hat{e}_k
\end{align}
$$

:::info
采用爱因斯坦求和约定，即出现重复下标时默认对该下标遍历求和。
:::
