# 天文数据处理


## 插值

对于时间间隔 $\Delta t$ 不均匀的离散时间序列，可以通过插值补充为时间间隔固定的序列。

使用 `python` 中 `scipy` 模块里的 `interpolate.interp1d` 进行插值：

[`interpolate.interp1d(x, y, kind='linear')`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.interp1d.html#scipy.interpolate.interp1d)

| 参数 `kind` | 插值方法 |
|:--:|:--:|
| `linear` | 线性插值 |
| `nearest`,`nearest_up` | 最邻近阶梯插值 |
| `zero` | 零阶样条插值 |
| `slinear` | 一阶样条插值 |
| `quadratic` | 二阶样条插值 |
| `cubic` | 三阶样条插值 |
| `previous`,`next` | 阶梯插值 |

![图示](./data_processing_fig/1.png)

::: details `python` 脚本
```py
import numpy as np
import matplotlib.pyplot as plt
from scipy import interpolate

t = np.array([1, 2, 4, 7, 8, 9])
y = np.array([1, 3, 5, 3, 1, 3])

t_new = np.arange(1, 9, 0.1)
kinds = ['linear', 'nearest', 'nearest-up',
         'zero', 'slinear', 'quadratic', 'cubic',
         'previous', 'next']

f = interpolate.interp1d(t, y, kind='cubic')
y_new = f(t_new)

ax1 = plt.subplot(311)
ax2 = plt.subplot(312)
ax3 = plt.subplot(313)

ax1.scatter(t, y, c='b', alpha=0.6)
for kind in kinds[:3]:
    func = interpolate.interp1d(t, y, kind=kind)
    y_new = func(t_new)
    ax1.plot(t_new, y_new, label=kind, alpha=0.6)
ax1.set_xlabel('t')
ax1.set_ylabel('y')
ax1.legend()

ax2.scatter(t, y, c='b', alpha=0.6)
for kind in kinds[3:-2]:
    func = interpolate.interp1d(t, y, kind=kind)
    y_new = func(t_new)
    ax2.plot(t_new, y_new, label=kind, alpha=0.6)
ax2.set_xlabel('t')
ax2.set_ylabel('y')
ax2.legend()

ax3.scatter(t, y, c='b', alpha=0.6)
for kind in kinds[-2:]:
    func = interpolate.interp1d(t, y, kind=kind)
    y_new = func(t_new)
    ax3.plot(t_new, y_new, label=kind, alpha=0.6)
ax3.set_xlabel('t')
ax3.set_ylabel('y')
ax3.legend()

plt.show()
```
:::

## 平滑处理

常用的时间序列的平滑模型有：
- 滑动平均模型
- 加权滑动平均模型
- 二次滑动平均模型
- 指数平滑模型

使用 `python` 中 `scipy` 模块里的 `signal.savgol_filter` 进行平滑：

[`signal.savgol_filter(x, window_length, polyorder)`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.savgol_filter.html#scipy.signal.savgol_filter)

取 `polyorder=1` ，该函数会对数据 `x` 进行 `window_length` 阶滑动平均。

![图示](./data_processing_fig/2.png)

::: details `python` 脚本
```py
import numpy as np
import matplotlib.pyplot as plt
from scipy import signal

t = np.arange(0, 50, 1)
x = 5 * np.sin(t)
noise = np.random.randn(50)
y = x + noise

window_lens = [3, 5, 13]

plt.plot(y, label='raw')
for l in window_lens:
    y_new = signal.savgol_filter(y, l, 1)
    plt.plot(y_new, label=f'window len={l}')
plt.legend()
plt.show()
```
:::

## 曲线拟合

使用 `python` 中 `scipy` 模块里 `optimize.curve_fit` 进行拟合：

[`optimize.curve_fit(f, xdata, ydata)`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.curve_fit.html#scipy.optimize.curve_fit)

自行编写函数模型 `f(x, params)` ，将待拟合的数据 `xdata`,`ydata` 传入函数后会返回参数数组和协方差。

实例：

使用曲线模型 $g(x)=c_1+c_2x+c_3\sin(\pi x)+c_4\sin(2\pi x)$ 对下面数据进行拟合：

$x_i=[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]$

$y_i=[0, 2.122, 3.0244, 3.2568, 3.1399, 2.8579, 2.514, 2.1639, 1.8358]$

![图示](./data_processing_fig/3.png)

::: details `python` 脚本
```py
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit

# raw data
xi = np.array([0.1, 0.2, 0.3, 0.4, 0.5,
               0.6, 0.7, 0.8, 0.9])
yi = np.array([0, 2.122, 3.0244, 3.2568, 3.1399,
               2.8579, 2.514, 2.1639, 1.8358])

# use g(x)=c1+c2x+c3sin(pi*x)+c4sin(2pi*x) to fit
def func(x, c1, c2, c3, c4):
    return c1 + c2*x + c3*np.sin(np.pi*x) + c4*np.sin(2*np.pi*x)

popt, pcov = curve_fit(func, xi, yi)
x_fit = np.arange(0, 1, 0.01)
y_fit = func(x_fit, popt[0], popt[1], popt[2], popt[3])

# draw
plt.scatter(xi, yi, label='raw data')
plt.plot(x_fit, y_fit, label='fit curve')
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.show()
```
:::

## 离散傅里叶变换

使用 `python` 中 `scipy` 模块里的 `fftpack.fft` 进行傅里叶变换：

[`fftpack.fft(x, N)`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.fftpack.fft.html#scipy.fftpack.fft)

但是该函数只是返回数据进行傅里叶变换后的复数序列，还需要转化成频谱图。

实例：

绘制如下两个周期信号的频谱图
```py
fs = 5000
f1 = 404
f2 = 2000
f3 = 1234

t = np.linspace(0, 1, fs)

base = 2
component1 = 2*np.sin(2*np.pi*f1*t)
component2 = 5*np.sin(2*np.pi*f2*t+1)
component3 = 3*np.sin(2*np.pi*f3*t+4)
noise = np.random.normal(1, 10, fs)
y1 = base+component1+component2+component3
y2 = component1+component2+component3+noise
```

![图示](./data_processing_fig/4.png)

::: details `python` 脚本
```py
import numpy as np
import matplotlib.pyplot as plt
from scipy.fftpack import fft

def FFT(data):
    L = len(data)
    N = int(np.power(2, np.ceil(np.log2(L))))
    FFT_y = np.abs(fft(data, N)) / L * 2
    Fre = np.arange(int(N/2)) * L / N
    FFT_y = FFT_y[range(int(N/2))]
    return Fre, FFT_y

fs = 5000
f1 = 404
f2 = 2000
f3 = 1234

t = np.linspace(0, 1, fs)

base = 2
component1 = 2*np.sin(2*np.pi*f1*t)
component2 = 5*np.sin(2*np.pi*f2*t+1)
component3 = 3*np.sin(2*np.pi*f3*t+4)
noise = np.random.normal(1, 10, fs)
y1 = base+component1+component2+component3
y2 = component1+component2+component3+noise

ax1 = plt.subplot(211)
ax2 = plt.subplot(212)
fre1, fft_y1 = FFT(y1)
fre2, fft_y2 = FFT(y2)
ax1.plot(fre1, fft_y1)
ax2.plot(fre2, fft_y2)
ax1.set_ylabel('A')
ax1.grid()
ax2.set_ylabel('A')
ax2.set_xlabel('f/Hz')
ax2.grid()
plt.show()
```
:::

