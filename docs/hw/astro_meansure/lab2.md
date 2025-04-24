---
sidebar: false
prev: false
next: false
---

# 实践2

使用 NOVAS 程序包计算天体坐标。

## NOVAS 程序

### 安装

- 从[ASCL](https://ascl.net/1202.003)上下载 NOVAS 程序包，这里使用 `Fortran` 版本[
https://ascl.net/assets/codes/NOVAS/novasf3.1.zip](
https://ascl.net/assets/codes/NOVAS/novasf3.1.zip)

- 将之前安装的[JPL星表](/blog/astronomy/jpl)中的 `jplsubs.f` 和 `JPLEPH` 复制到 `novasf3.1` 解压文件夹内

### 使用

查看程序包自带的 `NOVAS_F3.1_Guide.pdf` 了解该程序的使用：

1. 先设置计算精度和坐标转换方法（直接调用子程序）
```f90
    call HIACC
    call EQINOX
```
2. 设置时间参数并计算各个时标下的时间
```f90
    call JULDAT(year, month, day, hour, UTCJD)
    TTJD = UTCJD + ( leaps + 32.184D0 ) / 86400.D0
    UT1JD = UTCJD + UT1UTC / 86400.D0
    DeltaT = 32.184D0 + leaps - UT1UTC
    call SETDT(DeltaT)
```
其中 `year,month,day,hour` 为观测时间， `leaps` 为当前的闰秒（可以从[IERS](https://www.iers.org/IERS/EN/DataProducts/EarthOrientationData/eop.html)上查询）

3. 子程序的参数

下面需要用到的两个子程序为 `PLACE` 和 `ZDAZ`

- `call PLACE(TJD, OBJECT, LOCATN, ICOORD, STAR, OBSERV, SKYPOS)`

用于计算天体在`TJD`时刻天球坐标

| 参数 | 类型 | 解释 |
|:--:|:--:|:--:|
|`TJD`|双精度浮点数(in)| TT 儒略日|
|`OBJECT`|字符串(in)|观测天体<br>（太阳系天体用大写英文名`SUN`,`MOON`,`JUPITER`等，<br>对于系外天体用`STAR`代替）
|`LOCATN`|整数(in)|观测者位置<br>（`0` 代表地心，`1` 代表地表，`2` 代表近地空间）|
|`ICOORD`|整数(in)|输出坐标采用的坐标系<br>（`0`代表 GCRS，`1` 代表真赤道系，<br> `2` 代表 CIRS， `3` 代表 ICRS）|
|`STAR`|双精度数组(6)(in)|（当`OBJECT`为`STAR`时提供天体信息）<br>`STAR(1)=ICRS right ascension at J2000.0 in hours`,<br>`STAR(2)=ICRS declination as J2000.0 in degrees`,<br>`STAR(3)=ICRS proper motion in RA in mas/yr`,<br>`STAR(4)=ICRS proper motion in Dec in mas/yr`,<br>`STAR(5)=parallax in mas`,<br>`STAR(6)=radial velocity in km/s`|
|`OBSERV`|双精度数组(6)(in)|（当`LOCATN=0`时，不需要）<br>（当`LOCATN=1`时，提供站点信息：<br>`OBSERV(1)=WGS-84 longitude (east positive) in degrees`,<br>`OBSERV(2)=WGS-84 latitude (north positive) in degrees`,<br>`OBSERV(3)=height above Earth's reference ellipsoid(or height above mean sea level) in meters`,<br>`OBSERV(4)=DeltaT`）<br>（当`LOCATN=2`时，提供观测点信息：<br>`OBSERV(1)=geocentric X in km`,<br>`OBSERV(2)=geocentric Y in km`,<br>`OBSERV(3)=geocentric Z in km`,<br>`OBSERV(4)=geocentric X-dot in km/s`,<br>`OBSERV(5)=geocentric Y-dot in km/s`,<br>`OBSERV(6)=geocentric Z-dot in km/s`,<br>这里`Z`指向 CIP，`X`指向真春分点）|
|`SKYPOS`|双精度数组(7)(out)|输出天体坐标<br>`(SKYPOS(1),SKYPOS(2),SKYPOS(3))`组成指向天体的单位向量,<br>`SKYPOS(4)=RA in hours`,<br>`SKYPOS(5)=Dec in degrees`,<br>`SKYPOS(6)`为到太阳系内天体距离（对系外天体为`0.D0`）<br>`SKYPOS(7)=radial velocity in km/s`|

- `call ZDAZ(UJD, XP, YP, GLON, GLAT, HT, RA, DEC, IREFR, ZD, AZ, RAR, DECR)`

用于把站心位置的赤经`RA`、赤纬`DEC`转成地平坐标的天顶距`ZD`、方位角`AZ`

| 参数 | 类型 | 解释 |
|:--:|:--:|:--:|
|`UJD`|双精度浮点数(in)| UT1 儒略日|
|`XP`,`YP`|双精度浮点数(in)| CIP 的极移(arcseconds)|
|`GLON`,`GLAT`,`HT`|双精度浮点数(in)| 观测点的经度(deg)，纬度(deg)和海拔(m)|
|`RA`,`DEC`|双精度浮点数(in)| 天体的站心位置赤经(h)，赤纬(deg)|
|`IREFR`|整数(in)| `0` 忽略大气折射，`1` 考虑大气折射|
|`ZD`,`AZ`|双精度浮点数(out)| 地平坐标的天顶距(deg)，方位角(deg)|
|`RAR`,`DECR`|双精度浮点数(out)| 考虑大气折射后的观测位置赤经(h)，赤纬(deg)|

## 练习1

::: info 题目
已知某天体的星表位置为 $\mathrm{ICRS}[\alpha,\delta]=14^h34^m16^s.81183,-12^\circ31'10''.3965$

自行 $\mu_\alpha=-354.45\ \mathrm{mas/y}, \mu_\delta=+595.35\ \mathrm{mas/y}$

视差 $=0''.16499$ ，径向速度（退行速度）$=0\mathrm{km/s}$

观测时刻为 2025 年 5 月 1 日，$23^h15^m43^s.55 \mathrm{UTC}$

求：

（1）该天体的地心视位置

（2）设测站坐标为：经度和纬度 $=W70^\circ44'11''.560,\ S30^\circ14'26''.731$，参考椭球面高度 $2378\mathrm{m}$。求该天体的站心位置、地平坐标。

（3）若利用 CSST 来观测该天体，有什么约束条件需要考虑？

要求结果的赤经以小时，分，秒表示，赤纬以度，角分，角秒表示，精确到毫秒级。
:::

### 编写程序

由于多次涉及到角度值与角分秒格式的互换，先编写二者互相转换的子程序备用 `deg-dmg.f90`
```f90
subroutine dms_to_deg(deg, min, sec, dec_deg)
    integer, intent(in) :: deg, min
    double precision, intent(in) :: sec
    double precision, intent(out) :: dec_deg
 
    if (deg < 0) then
        dec_deg = dble(deg) - dble(min)/60.D0 - sec/3600.D0
    else
        dec_deg = dble(deg) + dble(min)/60.D0 + sec/3600.D0
    end if
end subroutine dms_to_deg

subroutine deg_to_dms(dec_deg, deg, min, sec)
    double precision, intent(in) :: dec_deg
    integer, intent(out) :: deg, min
    double precision, intent(out) :: sec
    double precision :: remainder, decimal_min

    deg = int(dec_deg)

    remainder = abs(dec_deg - dble(deg))
    decimal_min = remainder * 60.D0

    min = int(decimal_min)
    sec = (decimal_min - dble(min)) * 60.D0

    if (dec_deg < 0.0) then
        if (deg == 0) then
            min = -min
            sec = -sec
        end if
    end if
end subroutine deg_to_dms
```

从[IERS](https://www.iers.org/IERS/EN/DataProducts/EarthOrientationData/eop.html)上提供的 [Leap second announcements in UTC](https://datacenter.iers.org/data/latestVersion/bulletinC.txt) 和 Daily EOP data files: finals.daily(IAU2000) 查询得到观测时刻的闰秒和极移数据：

| 参数 | 值 |
|:--:|:--:|
|`leaps`|`37 s`|
|`UT1-UTC`|`0.0298409 s`|
|`PM-x`|`0.085858 arcsec`|
|`PM-y`|`0.414835 arcsec`|

然后编写 `fortran` 脚本调用 NOVAS 程序计算天体的地心视坐标，站心坐标和地平坐标：`t1.f90`
```f90
program t1
    integer year, month, day
    double precision hour, leaps, UT1UTC, XP, YP
    integer locatn, icoord
    double precision star(6), observ(6), skypos(7)
    double precision UTCJD, TTJD, UT1JD, DeltaT
    integer Q1RAh, Q1RAm, Q1DECd, Q1DECm
    double precision Q1RAs, Q1DECs
    integer Q2RAh, Q2RAm, Q2DECd, Q2DECm
    double precision Q2RAs, Q2DECs, Q2RA, Q2DEC
    double precision GLON, GLAT, HT, ZD, AZ, RAR, DECR

    ! observe time and EOP info
    year = 2025
    month = 5
    day = 1
    call dms_to_deg(23, 15, 43.55D0, hour)
    leaps = 37
    UT1UTC = 0.0298409
    XP = 0.085858
    YP = 0.414835

    ! set up
    call HIACC
    call EQINOX
    call JULDAT(year, month, day, hour, UTCJD)
    TTJD = UTCJD + ( LEAPS + 32.184D0 ) / 86400.D0
    UT1JD = UTCJD + UT1UTC / 86400.D0
    DeltaT = 32.184D0 + leaps - UT1UTC
    call SETDT(DeltaT)

    ! observe object info
    call dms_to_deg(14, 34, 16.81183D0, star(1))
    call dms_to_deg(-12, 31, 10.3965D0, star(2))
    star(3) = -354.45
    star(4) = 595.35
    star(5) = 0.16499
    star(6) = 0

    ! question 1: the apparent place of object
    locatn = 0
    icoord = 1
    call PLACE(TTJD, 'STAR', locatn, icoord, star, observ, skypos)
    write(*, *) '-------------------------------------'
    write(*, *) 'Q1: the apparent place of star'
    write(*, *) '-------------------------------------'
    write(*, *) 'the apparent place:'
    write(*, *) 'RA               | Dec'
    call deg_to_dms(skypos(4), Q1RAh, Q1RAm, Q1RAs)
    call deg_to_dms(skypos(5), Q1DECd, Q1DECm, Q1DECs)
    write(*, 100) Q1RAh, Q1RAm, Q1RAs, Q1DECd, Q1DECm, Q1DECs
100 format(I4, 'h', I3, 'm', F7.3, 's |', I4, 'deg', I3, "'", F7.3, '"')

    ! question 2: the topocentric place and the horizontal coordinate
    !! the topocentric place
    locatn = 1
    icoord = 1
    call dms_to_deg(-70, 44, 11.560D0, observ(1))
    call dms_to_deg(-30, 14, 26.731D0, observ(2))
    observ(3) = 2378
    observ(4) = DeltaT
    call PLACE(TTJD, 'STAR', locatn, icoord, star, observ, skypos)
    Q2RA = skypos(4)
    Q2DEC = skypos(5)
    write(*, *) '-------------------------------------'
    write(*, *) '-------------------------------------'
    write(*, *) 'Q2: the topocentric place and the'
    write(*, *) 'horizontal coordinate of the star'
    write(*, *) '-------------------------------------'
    write(*, *) 'the topocentric place:'
    write(*, *) 'RA               | Dec'
    call deg_to_dms(Q2RA, Q2RAh, Q2RAm, Q2RAs)
    call deg_to_dms(Q2DEC, Q2DECd, Q2DECm, Q2DECs)
    write(*, 100) Q2RAh, Q2RAm, Q2RAs, Q2DECd, Q2DECm, Q2DECs
    !! the horizontal coordinate
    GLON = observ(1)
    GLAT = observ(2)
    HT = observ(3)
    call ZDAZ(UT1JD, XP, YP, GLON, GLAT, HT, Q2RA, Q2DEC, 1, ZD, AZ, RAR, DECR)
    write(*, *) '-------------------------------------'
    write(*, *) 'the horizontal coordinate'
    write(*, *) '(zenith distance, azimuth):'
    write(*, *) 'ZD(deg)          | AZ(deg)'
    write(*, 200) ZD, AZ
    write(*, *) '-------------------------------------'
200 format(F10.6, '        |', F10.6)
end program
```

### 结论

在终端编译
```sh:no-line-numbers
gfortran t1.f90 deg-dmg.f90 jplsubs.f NOVAS_F3.1.f NOVAS_F3.1_solsys2.f -o t1
```
运行得到结果如下
```sh:no-line-numbers
$ ./t1
 -------------------------------------
 Q1: the apparent place of star
 -------------------------------------
 the apparent place:
 RA               | Dec
  14h 35m 40.065s | -12deg 37' 43.386"
 -------------------------------------
 -------------------------------------
 Q2: the topocentric place and the
 horizontal coordinate of the star
 -------------------------------------
 the topocentric place:
 RA               | Dec
  14h 35m 40.068s | -12deg 37' 43.326"
 -------------------------------------
 the horizontal coordinate
 (zenith distance, azimuth):
 ZD(deg)          | AZ(deg)
 75.595002        | 96.431802
 -------------------------------------
```

::: info 结论
1. 该天体的地心视位置（赤经，赤纬）为 $(14^h35^m40^s.065,-12^\circ37'43''.386)$

2. 该天体的站心位置（赤经，赤纬）为 $(14^h35^m40^s.068,-12^\circ37'43''.326)$

地平坐标（天顶距，方位角）为 $(75^\circ.595002,96^\circ.431802)$

3. 若利用 CSST 观测，还需要知道 CSST 在真赤道系下的坐标 `(X,Y,Z)` 和速度 `(X-dot,Y-dot,Z-dot)`
:::

## 练习2

::: info 题目
已知观测时刻为 2025 年 5 月 1 日，$23^h15^m43^s.55 \mathrm{UTC}$

求：

（1）月球和八大行星的地心视位置

（2）若观测站是新疆慕士塔格站，求对应观测时刻月球和八大行星的站心位置、地平坐标，并指出其中哪些天体可观测。

要求结果的赤经以小时，分，秒表示，赤纬以度，角分，角秒表示，精确到毫秒级。
:::

### 编写程序

从[中国科学院新疆天文台的官网](https://xao.cas.cn/jgsz/ywtz/mstggcz/)可以查到新疆慕士塔格站的地理坐标为 $(38^\circ19'47''N,74^\circ53'48''E)$ ，海拔高度约 $4500$ 米。

编写 `fortran` 脚本：`t2.f90`
```f90
program t2
    integer year, month, day
    double precision hour, leaps, UT1UTC, XP, YP
    integer locatn, icoord
    double precision star(6), observ(6), skypos(7)
    double precision UTCJD, TTJD, UT1JD, DeltaT
    character(len=10) object(8)
    integer Q1RAh(8), Q1RAm(8), Q1DECd(8), Q1DECm(8)
    double precision Q1RAs(8), Q1DECs(8)
    integer Q2RAh(8), Q2RAm(8), Q2DECd(8), Q2DECm(8)
    double precision Q2RAs(8), Q2DECs(8), Q2RA(8), Q2DEC(8)
    double precision GLON, GLAT, HT, ZD(8), AZ(8), RAR(8), DECR(8)

    ! observe time and EOP info
    year = 2025
    month = 5
    day = 1
    call dms_to_deg(23, 15, 43.55D0, hour)
    leaps = 37
    UT1UTC = 0.0298409
    XP = 0.085858
    YP = 0.414835

    ! set up
    call HIACC
    call EQINOX
    call JULDAT(year, month, day, hour, UTCJD)
    TTJD = UTCJD + ( LEAPS + 32.184D0 ) / 86400.D0
    UT1JD = UTCJD + UT1UTC / 86400.D0
    DeltaT = 32.184D0 + leaps - UT1UTC
    call SETDT(DeltaT)

    ! observe object info
    object(1) = 'MOON'
    object(2) = 'MERCURY'
    object(3) = 'VENUS'
    object(4) = 'MARS'
    object(5) = 'JUPITER'
    object(6) = 'SATURN'
    object(7) = 'URANUS'
    object(8) = 'NEPTUNE'

    ! question 1: the apparent place of object
    locatn = 0
    icoord = 1
    write(*, *) '-------------------------------------------------'
    write(*, *) 'Q1: the apparent place of objects.'
    write(*, *) '-------------------------------------------------'
    write(*, *) 'the apparent place:'
	write(*, *) 'Object    | RA               | Dec'
    do i = 1, 8
        call PLACE(TTJD, object(i), locatn, icoord, star, observ, skypos)
	    call deg_to_dms(skypos(4), Q1RAh(i), Q1RAm(i), Q1RAs(i))
	    call deg_to_dms(skypos(5), Q1DECd(i), Q1DECm(i), Q1DECs(i))
	    write(*, 100) object(i), Q1RAh(i), Q1RAm(i), Q1RAs(i), &
                      Q1DECd(i), Q1DECm(i), Q1DECs(i)
    end do
100 format(1X, A10, '|', I4, 'h', I3, 'm', F7.3, 's |', & 
           I4, 'deg', I3, "'", F7.3, '"')

    ! question 2: the topocentric place and the horizontal coordinate
    !! the topocentric place
    locatn = 1
    icoord = 1
    call dms_to_deg(74, 53, 48.D0, observ(1))
    call dms_to_deg(38, 19, 47.D0, observ(2))
    observ(3) = 4500
    observ(4) = DeltaT
    write(*, *) '-------------------------------------------------'
    write(*, *) '-------------------------------------------------'
    write(*, *) 'Q2: the topocentric place and the'
    write(*, *) 'horizontal coordinate of the objects.'
    write(*, *) '-------------------------------------------------'
    write(*, *) 'the topocentric place:'
	write(*, *) 'Object    | RA               | Dec'
    do i = 1, 8
        call PLACE(TTJD, object(i), locatn, icoord, star, observ, skypos)
        Q2RA(i) = skypos(4)
        Q2DEC(i) = skypos(5)
	    call deg_to_dms(Q2RA(i), Q2RAh(i), Q2RAm(i), Q2RAs(i))
	    call deg_to_dms(Q2DEC(i), Q2DECd(i), Q2DECm(i), Q2DECs(i))
	    write(*, 100) object(i), Q2RAh(i), Q2RAm(i), Q2RAs(i), &
                      Q2DECd(i), Q2DECm(i), Q2DECs(i)
    end do
    !! the horizontal coordinate
    GLON = observ(1)
    GLAT = observ(2)
    HT = observ(3)
    write(*, *) '-------------------------------------------------'
    write(*, *) 'the horizontal coordinate'
    write(*, *) '(zenith distance, azimuth):'
    write(*, *) 'Object    | ZD(deg)       | AZ(deg)'
    do i = 1, 8
        call ZDAZ(UT1JD, XP, YP, GLON, GLAT, HT, Q2RA(i), Q2DEC(i), 1, &
                  ZD(i), AZ(i), RAR(i), DECR(i))
        write(*, 200) object(i), ZD(i), AZ(i)
    end do
    write(*, *) '-------------------------------------------------'
200 format(1X, A10, '|', F11.6, '    |', F11.6)
end program
```

### 结论

在终端编译
```sh:no-line-numbers
gfortran t2.f90 deg-dmg.f90 jplsubs.f NOVAS_F3.1.f NOVAS_F3.1_solsys2.f -o t2
```
运行得到结果如下
```sh:no-line-numbers
$ ./t2
 -------------------------------------------------
 Q1: the apparent place of objects.
 -------------------------------------------------
 the apparent place:
 Object    | RA               | Dec
 MOON      |   6h 42m 27.439s |  28deg  6' 47.500"
 MERCURY   |   1h  6m 31.348s |   3deg 58'  8.533"
 VENUS     |   0h  1m  6.631s |   1deg  8' 39.369"
 MARS      |   8h 35m 44.956s |  20deg 40' 35.872"
 JUPITER   |   5h 23m 20.292s |  22deg 56'  5.144"
 SATURN    |  23h 55m 39.108s |  -2deg 39' 19.084"
 URANUS    |   3h 36m 27.535s |  19deg  7' 55.584"
 NEPTUNE   |   0h  6m  9.788s |   0deg-43'-27.522"
 -------------------------------------------------
 -------------------------------------------------
 Q2: the topocentric place and the
 horizontal coordinate of the objects.
 -------------------------------------------------
 the topocentric place:
 Object    | RA               | Dec
 MOON      |   6h 42m 39.485s |  27deg 13' 21.027"
 MERCURY   |   1h  6m 31.805s |   3deg 58'  3.118"
 VENUS     |   0h  1m  7.600s |   1deg  8' 27.747"
 MARS      |   8h 35m 44.794s |  20deg 40' 30.813"
 JUPITER   |   5h 23m 20.309s |  22deg 56'  3.829"
 SATURN    |  23h 55m 39.155s |  -2deg 39' 19.607"
 URANUS    |   3h 36m 27.542s |  19deg  7' 55.200"
 NEPTUNE   |   0h  6m  9.806s |   0deg-43'-27.697"
 -------------------------------------------------
 the horizontal coordinate
 (zenith distance, azimuth):
 Object    | ZD(deg)       | AZ(deg)
 MOON      | 114.375251    |   3.218055
 MERCURY   |  89.353599    |  85.232191
 VENUS     |  78.541941    |  97.680899
 MARS      | 116.508683    | 333.803427
 JUPITER   | 115.006380    |  23.523559
 SATURN    |  79.883865    | 101.552485
 URANUS    | 105.940956    |  48.675189
 NEPTUNE   |  80.684348    |  98.347967
 -------------------------------------------------
```

::: info 结论
月球和八大行星（除去地球）的地心视位置、站心位置、地平坐标：

|天体|地心视位置|站心坐标|地平坐标|
|:--:|:--:|:--:|:--:|
|月球|$(6^h42^m27^s.439,$<br>$28^\circ6'47''.500)$|$(6^h42^m39^s.485,$<br>$27^\circ13'21''.027)$|$(114.375251^\circ,3.218055^\circ)$|
|水星|$(1^h6^m31^s.348,$<br>$3^\circ58'8''.533)$|$(1^h6^m31^s.805,$<br>$3^\circ58'3''.118)$|$(89.353599^\circ,85.232191^\circ)$|
|金星|$(0^h1^m6^s.631,$<br>$1^\circ8'39''.369)$|$(0^h1^m7^s.600,$<br>$1^\circ8'27''.747)$|$(78.541941^\circ,97.680899^\circ)$|
|火星|$(8^h35^m44^s.956,$<br>$20^\circ40'35''.872)$|$(8^h35^m44^s.794,$<br>$20^\circ40'30''.813)$|$(116.508683^\circ,333.803427^\circ)$|
|木星|$(5^h23^m20^s.292,$<br>$22^\circ56'5''.144)$|$(5^h23^m20^s.309,$<br>$22^\circ56'3''.829)$|$(115.006380^\circ,23.523559^\circ)$|
|土星|$(23^h55^m39^s.108,$<br>$-2^\circ39'19''.084)$|$(23^h55^m39^s.155,$<br>$-2^\circ39'19''.607)$|$(79.883865^\circ,101.552485^\circ)$|
|天王星|$(3^h36^m27^s.535,$<br>$19^\circ7'55''.584)$|$(3^h36^m27^s.542,$<br>$19^\circ7'55''.200)$|$(105.940956^\circ,48.675189^\circ)$|
|海王星|$(0^h6^m9^s.788,$<br>$-0^\circ43'27''.522)$|$(0^h6^m9^s.806,$<br>$-0^\circ43'27''.697)$|$(80.684348^\circ,98.347967^\circ)$|

只有天顶距 $\mathrm{ZD}<90^\circ$ 的天体才能观测到，即只有以下天体可观测：

水星、金星、土星和海王星。
:::

