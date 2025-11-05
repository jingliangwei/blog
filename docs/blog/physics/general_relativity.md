# 广义相对论

牛顿的引力 $\vec{F}=-G_Nm_1m_2/r^2\hat{e}_r$ 为“超距”作用，与相对论不符。把“力”代之以“引力场”。

## 曲线坐标

简记取微分操作
$$
\frac{\partial Q}{\partial x^\mu}=Q_{,\mu}
$$
- 逆变矢量
$$
A^{\mu'}={x^{\mu'}}_{,\nu}A^{\nu}
$$
- 协变矢量
$$
B_{\mu'}={x^{\nu}}_{,\mu'}B_\nu
$$
- 张量
$$
{T^{\alpha'\beta'}}_{\gamma'}={x^{\alpha'}}_{,\lambda}{x^{\beta'}}_{,\mu}{x^{\nu}}_{,\gamma'}{T^{\lambda\mu}}_\nu
$$

## 克里斯托费尔符号

- 第一类克里斯托费尔符号
$$
\Gamma_{\mu\nu\sigma}=\frac{1}{2}(g_{\mu\nu,\sigma}+g_{\mu\sigma,\nu}-g_{\nu\sigma,\mu})
$$
- 第二类克里斯托费尔符号
$$
\begin{align}
\Gamma^\mu_{\nu\sigma}&=g^{\mu\lambda}\Gamma_{\lambda\nu\sigma} \\
&=\frac{1}{2}g^{\mu\lambda}(g_{\lambda\nu,\sigma}+g_{\lambda\sigma,\nu}-g_{\nu\sigma,\lambda})
\end{align}
$$
- 协变矢量平移
$$
\mathrm{d}A_\nu=\Gamma^\mu_{\nu\sigma}A_\mu\mathrm{d}x^\sigma
$$
- 逆变矢量平移
$$
\mathrm{d}B^\nu=-\Gamma^\nu_{\mu\sigma}B^\mu\mathrm{d}x^\sigma
$$

## 测地线

- 测地线：坐标点 $z^\mu$ ，为参数 $\tau$ 的函数，沿 $u^\mu\equiv\mathrm{d}z^\mu/\mathrm{d}\tau$ 移动的路线。

- 测地线方程
$$
\frac{\mathrm{d}^2z^\mu}{\mathrm{d}\tau^2}+\Gamma^\mu_{\nu\sigma}\frac{\mathrm{d}z^\nu}{\mathrm{d}\tau}\frac{\mathrm{d}z^\sigma}{\mathrm{d}\tau}=0
$$

## 协变导数

- 协变矢量
$$
A_{\mu:\nu}\equiv A_{\mu,\nu}-\Gamma^\alpha_{\mu\nu}A_\alpha
$$
- 逆变矢量
$$
{A^\mu}_{:\sigma}\equiv {A^\mu}_{,\sigma}+\Gamma^\mu_{\alpha\sigma}A^\alpha
$$
- 标量
$$
Y_{:\sigma}=Y_{,\sigma}
$$

## 曲率张量

$$
A_{\nu:\rho:\sigma}-A_{\nu:\sigma:\rho}=A_\beta R^\beta_{\nu\rho\sigma}
$$
$$
\Rightarrow R^\beta_{\nu\rho\sigma}=\Gamma^\beta_{\nu\sigma,\rho}-\Gamma^\beta_{\nu\rho,\sigma}+\Gamma^\alpha_{\nu\sigma}\Gamma^\beta_{\nu\rho}-\Gamma^\alpha_{\nu\rho}\Gamma^\beta_{\alpha\sigma}
$$
$$
\begin{align}
\Rightarrow R_{\mu\nu\rho\sigma}&=g_{\mu\beta}R^\beta_{\nu\rho\sigma} \\
&=\frac{1}{2}(g_{\mu\sigma,\nu\rho}-g_{\nu\sigma,\mu\rho}-g_{\mu\rho,\nu\sigma}+g_{\nu\rho,\mu\sigma})+\Gamma_{\beta\mu\sigma}\Gamma^\beta_{\nu\rho}-\Gamma_{\beta\mu\rho}\Gamma^\beta_{\nu\sigma}
\end{align}
$$

## 里奇张量

$$
R_{\nu\rho}=R^\mu_{\nu\rho\mu}
$$
- 里奇张量 (Ricci)
$$
\Rightarrow R_{\mu\nu}=\Gamma^\alpha_{\mu\alpha,\nu}-\Gamma^\alpha_{\mu\nu,\alpha}-\Gamma^\alpha_{\mu\nu}\Gamma^\beta_{\alpha\beta}+\Gamma^\alpha_{\mu\beta}\Gamma^\beta_{\nu\alpha}
$$

- 里奇标量（标量曲率）
$$
R\equiv R^\nu_\nu=g^{\nu\rho}R_{\nu\rho}
$$

## 爱因斯坦引力定律

- 爱因斯坦引力定律：真空中
$$
R_{\mu\nu}=0
$$

这是一个场方程。

## 史瓦西解

$$
\mathrm{d}s^2=\left(1-\frac{2m}{r}\right)\mathrm{d}t^2-\left(1-\frac{2m}{r}\right)^{-1}\mathrm{d}r^2-r^2\mathrm{d}\theta^2-r^2\sin^2\theta\mathrm{d}\phi^2
$$
