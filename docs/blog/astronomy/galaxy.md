# 星系天文学

> A galaxy is a massive, gravitationally bound system that consists of stars and stellar remnants, an interstellar medium of gas dust, and an important but poorly understood component tentatively dubbed dark matter.
>
>(From Wikipedia)

## 星际介质与星系际介质

<table>
    <tr>
        <td>星际介质</td>
        <td>ISM</td>
        <td><span style="color: red;">i</span>nter<span style="color: red;">s</span>tellar <span style="color: red;">m</span>edium</td>
    </tr>
    <tr>
        <td>星系团内介质</td>
        <td>ICM</td>
        <td><span style="color: red;">i</span>ntra<span style="color: red;">c</span>luster <span style="color: red;">m</span>edium</td>
    </tr>
    <tr>
        <td>星系际介质</td>
        <td>IGM</td>
        <td><span style="color: red;">i</span>nter<span style="color: red;">g</span>alactic <span style="color: red;">m</span>edium</td>
    </tr>
    <tr>
        <td>星系周介质</td>
        <td>CGM</td>
        <td><span style="color: red;">c</span>ircum <span style="color: red;">g</span>alactic <span style="color: red;">m</span>edium</td>
    </tr>
    <tr>
        <td>行星际介质</td>
        <td>IPM</td>
        <td><span style="color: red;">i</span>nter<span style="color: red;">p</span>lanetary <span style="color: red;">m</span>edium</td>
    </tr>
</table>

### 星际介质分类

1. 星际介质分类：
    - 气体 (gas) & 尘埃 (dust)

    - 星云 (nebula) & 云际介质 (intercloud medium)

2. 云际介质：

    - 暖 (warm) 云际气体： $10^4\sim 10^5$ K
    - 热 (hot) 云际气体 / 云际冕气 (coronal gas) ： $10^6\sim 10^7$ K

3. 星云分类：
    1. （可见光波段发光性质）

       - 亮星云： 反射星云 (Reflection nebula)，发射星云 (Emission nebula)
       - 暗星云

    ::: info 发射星云分类
    - 普通 HII 区：新形成高温亮恒星（O,B星），光致电离
    - 行星状星云：热晚型星（白矮星），光致电离
    - 超新星遗迹：超新星，碰撞电离
    :::

    2. （星际消光大小）

       - 暗星云 (dark) ：气体分子
       - 半透明星云 (translucent) ：气体分子，原子
       - 弥漫星云 (diffuse) ：
         - 电离弥漫星云 (ionized diffuse clouds) ：电离气体 HII
         - 中性弥漫星云 (neutral diffuse clouds) ：中性原子气体 HI

    3. （成分中 H 的主要状态）

       - 分子云
       - HI 云
       - HII 云

### 星际气体

<table>
  <thead>
    <tr>
      <th rowspan="2">氢的主要状态</th>
      <th rowspan="2">温度（K）</th>
      <th rowspan="2">密度（cm⁻³）</th>
      <th rowspan="2">体积百分比（%）</th>
      <th colspan="2">对应天体（或环境）</th>
    </tr>
    <tr>
      <th>对应第一节</th>
      <th>其他名称</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>H₂</td>
      <td>10-20</td>
      <td>10²-10⁶</td>
      <td>&lt;1</td>
      <td>暗星云</td>
      <td>分子云</td>
    </tr>
    <tr>
      <td>HI</td>
      <td>50-100</td>
      <td>20-50</td>
      <td>1-5</td>
      <td>部分反射 星云</td>
      <td>HI区/云 （中性弥漫星云）</td>
    </tr>
    <tr>
      <td>HI</td>
      <td>6000-10⁴</td>
      <td>0.2-0.5</td>
      <td>10-20</td>
      <td>暖云际气体</td>
      <td>中性云际气体</td>
    </tr>
    <tr>
      <td rowspan="2">HII</td>
      <td rowspan="2">~8000</td>
      <td>0.2-0.5</td>
      <td>20-50</td>
      <td>暖云际气体</td>
      <td>电离云际气体</td>
    </tr>
    <tr>
      <td>10²-10⁴</td>
      <td>&lt;1</td>
      <td>发射星云</td>
      <td>HII区/云 （电离弥漫星云）</td>
    </tr>
    <tr>
      <td>HII</td>
      <td>10⁶-10⁷</td>
      <td>0.0065</td>
      <td>30-70%</td>
      <td>热云际气体</td>
      <td>云际冕气</td>
    </tr>
  </tbody>
</table>

#### H₂

1. 星际分子的形成：
    - 辐射缔合 (Radiative Association)
    - 尘埃表面的催化作用 (Grain Surface Chemistry)

::: info 早期宇宙第一代 H₂ 的形成
- 低密度环境：
  $$
  H+e^-\rightarrow H^-+h\nu
  $$
  $$
  H^-+H\rightarrow H_2+e
  $$

- 高密度环境：
  $$
  H+H+H\rightarrow H_2+H
  $$

reference: [Formation of the first stars](https://arxiv.org/abs/1807.06248)
:::

2. 破坏：
    - 光致离解
    - 离解复合：e.g. 大气电离层
        $$
        O^++H_2\rightarrow OH^++H,\ OH^++e^-\rightarrow O+H
        $$

::: info 分子光谱
1. 电子 (electronic) 能级：价电子的能量量子化
2. 振动 (vibrational) 能级：原子在化学键键长附近振动能量量子化
3. 转动 (rotational) 能级：分子整体转动角动量量子化
:::

3. 观测：

    星际分子谱线多为纯转动谱线，因为温度太低。

    $^{12}CO$ 的最强辐射源来自转动能级的 $J=1\rightarrow 0$ 跃迁，波长 $2.6mm$

    H₂通常无法直接观测：对称、转动惯量小，最低转动态向基态跃迁波长 $28\mu m$，对应温度 $\sim 510K$

    示踪分子：分子云中的 $H_2$ 与 $CO,HCN,NH_3,H_2O$ 分子成协。如 $CO$ 分子辐射强度与 $H_2$ 的柱密度存在经验关系。

4. 分子云：

    主要特征：低温（利于分子存在），紫外和光学波段光学厚（尘埃）

    - 巨分子云：狭长纤维状结构 (filamentary structures)

    - 博克球状体 (Bok Globules)：

      高密度暗星云，通常处于 HII 区

      >similar to insect's cocoons

      引力坍缩阶段原恒星，星际物质与恒星的过渡阶段（观测验证：红外波段观测到恒星形成的不同阶段）

::: info $H_2$ 的典型存在环境
1. 分子云 (dense molecular gas) $T\sim 10-20K,n>100cm^{-3}$
2. 拱星包层 (Stellar outflows) $T\sim 50-10^3K,n=1-10^6cm^{-3}$
3. 半透明星云 (diffuse molecular gas) $T\sim 50K,n\sim 100cm^{-3}$
:::

#### HII

1. 形成：

    - 光致电离（HII区，行星状星云）
    - 碰撞电离（超新星遗迹，云际冕气）

2. 观测：

    - 光学观测：发射线谱，允许线和禁戒线，颜色偏红 ($H\alpha\ 656.3nm$)
    - 射电观测：H，N和C等的离子复合为高激发态原子（里徳伯原子）退激发谱线
      
      射电连续谱：热轫致辐射
  
3. 大小： Strömgren 半径

    斯特隆根球 (Strömgren sphere) ：O，B星周围气体云质量够大，消耗中心恒星紫外光子，形成HI区内球状HII区

4. 云际冕气：

    形成：星系喷泉 (Galactic Fountain)

