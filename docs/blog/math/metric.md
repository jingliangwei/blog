# 正交曲面坐标系

坐标系的三个单位方向向量正交的坐标系称为正交曲面坐标系，
例如柱坐标系和球坐标系都是正交曲面坐标系。

## 度规张量(Metric Tensor)

记直角坐标$(x,y,z)$和新坐标$(q_1,q_2,q_3)$，
有
$$
dx=\frac{\partial x}{\partial q_1}dq_1+
\frac{\partial x}{\partial q_2}dq_2+
\frac{\partial x}{\partial q_3}dq_3
$$
则
$$
(dx)^2=\sum_{i,j=1,2,3} \frac{\partial x}{\partial q_i} \frac{\partial x}{\partial q_j} dq_i dq_j
$$
同理
$$
(dy)^2=\sum_{i,j=1,2,3} \frac{\partial y}{\partial q_i} \frac{\partial y}{\partial q_j} dq_i dq_j
$$
$$
(dz)^2=\sum_{i,j=1,2,3} \frac{\partial z}{\partial q_i} \frac{\partial z}{\partial q_j} dq_i dq_j
$$

进而有
$$
(ds)^2=(dx)^2+(dy)^2+(dz)^2=\sum_{i,j=1,2,3} \left( \frac{\partial x}{\partial q_i} \frac{\partial x}{\partial q_j} + \frac{\partial y}{\partial q_i} \frac{\partial y}{\partial q_j} + \frac{\partial z}{\partial q_i} \frac{\partial z}{\partial q_j} \right) dq_i dq_j
$$

度规
$$
g_{ij}=g_{ji}= \frac{\partial x}{\partial q_i} \frac{\partial x}{\partial q_j} + \frac{\partial y}{\partial q_i} \frac{\partial y}{\partial q_j} + \frac{\partial z}{\partial q_i} \frac{\partial z}{\partial q_j} 
$$

对于正交曲面坐标系，有$g_{ij}=0, \forall i\neq j$。
$$
(ds)^2=\sum_{i=1}^3 g_{ii}(dq_i)^2 = \sum_{i=1}^3 (h_idq_i)^2
$$

度规系数/拉梅系数
$$
h_i = \sqrt{g_{ii}} = \sqrt{\left(\frac{\partial x}{\partial q_i}\right)^2 + \left(\frac{\partial y}{\partial q_i}\right)^2 + \left(\frac{\partial z}{\partial q_i}\right)^2 } \quad (i=1,2,3)
$$

## 正交曲面坐标系下的微分

线微分
$$
d\vec{s} = h_1 dq_1 \hat{q_1} + h_2 dq_2 \hat{q_2} + h_3 dq_3 \hat{q_3}
$$

面微分
$$
d\vec{\sigma} = h_2h_3dq_2dq_3\hat{q_1} + h_1h_3dq_1dq_3\hat{q_2} + h_1h_2dq_1dq_2\hat{q_3}
$$

体微分
$$
d\tau=h_1h_2h_3dq_1dq_2dq_3
$$

## 正交曲面坐标系下的积分

线积分
$$
\int_C \vec{V}d\vec{s} = \sum_{i=1}^3 \int_C V_ih_idq_i
$$

面积分
$$
\iint_S \vec{V}d\vec{\sigma} = \iint_S V_1h_2h_3dq_2dq_3 +  \iint_S V_2h_1h_3dq_1dq_3 + \iint_S V_3h_1h_2dq_1dq_2
$$

体积分
$$
\iiint_V \phi d\tau = \iiint_V \phi h_1h_2h_3dq_1dq_2dq_3
$$

## 正交曲面坐标系下的微分算符

梯度(grad)
$$
\nabla f = \frac{1}{h_1}\frac{\partial f}{\partial q_1}\hat{q_1} + \frac{1}{h_2}\frac{\partial f}{\partial q_2}\hat{q_2} +  \frac{1}{h_3}\frac{\partial f}{\partial q_3}\hat{q_3}
$$

散度(div)
$$
\nabla \cdot \vec{V} = \frac{1}{h_1h_2h_3}\left[ \frac{\partial}{\partial q_1}(h_2h_3v_1) + \frac{\partial}{\partial q_2}(h_1h_3v_2) +  \frac{\partial}{\partial q_3}(h_1h_2v_3) \right]
$$

拉普拉斯算符 $\nabla^2\phi\equiv\nabla\cdot(\nabla\cdot\phi)$
$$
\nabla^2\phi = \frac{1}{h_1h_2h_3}\left[ \frac{\partial}{\partial q_1}\left(\frac{h_2h_3}{h_1}\frac{\partial\phi}{\partial q_1}\right) + \frac{\partial}{\partial q_2}\left(\frac{h_1h_3}{h_2}\frac{\partial\phi}{\partial q_2}\right) + \frac{\partial}{\partial q_3}\left(\frac{h_1h_2}{h_3}\frac{\partial\phi}{\partial q_3}\right) \right]
$$

旋度(curl)
$$
\nabla\times\vec{B} = \frac{1}{h_1h_2h_3} \left| 
    \begin{array}{ccc}
    h_1\hat{q_1} & h_2\hat{q_2} & h_3\hat{q_3} \\
    \displaystyle\frac{\partial}{\partial q_1} & \displaystyle\frac{\partial}{\partial q_2} & \displaystyle\frac{\partial}{\partial q_3} \\
    h_1B_1 & h_2B_2 & h_3B_3
    \end{array}
 \right|
$$

对矢量的拉普拉斯算符
$$
\nabla^2\vec{V} = \nabla\cdot(\nabla\cdot\vec{V}) - \nabla\times(\nabla\times\vec{V})
