# work on open clusters

## theory

data: we have 6 fits files, 3 filters(r,g,i) & 2 exposure times

0. notices:
   
   the final H-R diagrams need g-r, this means we need the same target stars in different filters.

   at the longer exposure times frames, we choose the fainter stars as much as positie for main sequence.

   at the shorter exposure times frames, we choose the brighter stars for gaints.

1. redution

2. read out the **flux and the error of flux** using AstroImageJ:

   - select target stars (about 50)

   - save the fluxs into files
3. ADU -> Instrumental magnitudes:
   $$
   m_{\text{inst}}=-2.5\log_{10}\left(\frac{F_{\text{obj}}}{t_{\text{exp}}}\right)
   $$
   the error:
   $$
   \sigma_{m_{\text{inst}}}=\sqrt{\left(\frac{-2.5}{\ln 10}\right)^2\left(\frac{\sigma_C}{C}\right)^2}
   $$
4. instrumental magnitudes -> apparent magnitudes:

   download apparent magnitudes mannally on [https://catalogs.mast.stsci.edu/panstarrs/](https://catalogs.mast.stsci.edu/panstarrs/), and then crossmatch to get the zeropoint magnitude.
   
5. apparent magnitudes -> absolute magnitudes:
   
   - get the distance of each stars $d$, and we can obtain absolute magnitude $M$ from apparent magnitude $m$ using:
   $$
   m-M=5\log_{10}(d)-5
   $$
   the error:
   $$
   \sigma_M=\sqrt{\sigma_m^2+\left(\frac{5}{\ln 10}\right)^2\left(\frac{\sigma_d}{d}\right)^2}
   $$

6. absolute magnitudes -> H-R diagram:
   
   - use python to plot
   1. g vs g-r
   2. g vs g-i
   3. r vs r-i

   - the error of g-r:
   $$
   \sigma_{g\text{-}r}=\sqrt{\sigma_g^2+\sigma_r^2}
   $$

more questions: in step 6, the interstellar extinction and reddening are waitted to consider.

## process

0. make sure all python scripts are in the same path, and contain filters and exposure time infomation in filename.

prepara the setting file `setting.py`

::: details `setting.py`
```py
filters = 'g'
# exposure time in seconds
t_exp = 120
# number of target stars (uesd in 2format.py)
number = 50
# zero point for magnitude conversion (used in 43inst2app.py)
## gain zero point from 42crossmatch.py
mag_zp = 0
```
:::

the details process:

1. reduction
2. select targets stars using AstroImageJ and save the table into file:
   
   - import the longer exposure time (3 frames) at the same time to make sure the target stars in different filters are the same one, and then repeat for the shorts;
   - then divide the table manually to `gSDSS_30s/Table_g_30s.tbl`,`gSDSS_120s/Table_g_120s.tbl`,`iSDSS_4s/Table_i_4s.tbl`,`iSDSS_40s/Table_i_40s.tbl`,`rSDSS_10s/Table_r_10s.tbl`,`rSDSS_90s/Table_r_90s.tbl` (make sure the name and path here are the same as the scripts used below)

3. using `2format.py` to convert the `?SDSS_*s/Table_?_*s.tbl` to `2?_*s.csv`

::: details `2format.py`
```py
import pandas as pd
from setting import filters, number, t_exp

file_in = f'{filters}SDSS_{t_exp}s/Table_{filters}_{t_exp}s.tbl'
file_out = f'{filters}SDSS_{t_exp}s/2{filters}_{t_exp}s.csv'

# load the table
df = pd.read_csv(file_in, sep='\t', comment='/', engine='python')

# extract Source-Sky_T* and Source_Error_T* columns
ra_cols = [f'RA_T{i}' for i in range(1, number+1)]
dec_cols = [f'DEC_T{i}' for i in range(1, number+1)]
source_sky_cols = [f'Source-Sky_T{i}' for i in range(1, number+1)]
source_err_cols = [f'Source_Error_T{i}' for i in range(1, number+1)]

ra = df[ra_cols].values[0]
dec = df[dec_cols].values[0]
source_sky = df[source_sky_cols].values[0]
source_err = df[source_err_cols].values[0]

# save information to a new file
info = pd.DataFrame({
    'RA': ra,
    'DEC': dec,
    'Source-Sky': source_sky,
    'Source_Error': source_err
})
info.to_csv(file_out, index=False)
```
:::

4. calculate ADU to Instrumental magnitudes: (using `3mag_inst.py`)

::: details `3mag_inst.py`
```py
import numpy as np
import pandas as pd
from setting import filters, t_exp

# load data
data = np.genfromtxt(f'{filters}SDSS_{t_exp}s/2{filters}_{t_exp}s.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]
Source_Sky = data[:, 2]
Source_Error = data[:, 3]

# convert flux to instrumental magnitude
m_inst = -2.5 * np.log10(Source_Sky / t_exp)
err_m_inst = np.sqrt((2.5 / np.log(10))**2 * (Source_Error / Source_Sky)**2)

# save results into new file
output_file = f'{filters}SDSS_{t_exp}s/3{filters}_{t_exp}s.csv'
results = pd.DataFrame({
    'RA': RA,
    'DEC': DEC,
    'Mag_inst': m_inst,
    'Err_mag_inst': err_m_inst
})
results.to_csv(output_file, index=False)
```
:::

5. get apparent magnitudes from catalog:
   - download the data from [https://catalogs.mast.stsci.edu/panstarrs/](https://catalogs.mast.stsci.edu/panstarrs/)
     
     notice: about 5 arcminutes, get the g,r,i mag

   - using `41get_mag_app.py` to match the coordinate between `Instrumental_Magnitudes_g3.csv` and `PS-7_26_2025.csv`:

::: details `41get_mag_app.py`
```py
import numpy as np
import pandas as pd
from astropy.coordinates import SkyCoord
import astropy.units as u
from setting import filters, t_exp

# load data
data = np.genfromtxt(f'{filters}SDSS_{t_exp}s/3{filters}_{t_exp}s.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]
Mag_inst = data[:, 2]
Err_mag_inst = data[:, 3]

# load data from panstarrs
data2 = np.genfromtxt('PS-7_26_2025.csv', delimiter=',', skip_header=1)
raMean = data2[:, 1]
decMean = data2[:, 2]
gMeanMag = data2[:, 3]
rMeanMag = data2[:, 4]
iMeanMag = data2[:, 5]

# get the apparent magnitude from Pan-STARRS (gSDSS filter)
Mag_app = []
n = len(RA)
for i in range(n):
    star = SkyCoord(ra=15*RA[i]*u.deg, dec=DEC[i]*u.deg, frame='icrs')
    Panstarrs_field = SkyCoord(ra=raMean*u.deg, dec=decMean*u.deg, frame='icrs')
    d2d = star.separation(Panstarrs_field)
    idx = np.argmin(d2d)
    if d2d[idx] < 2 * u.arcsec:
        if filters == 'i':
            Mag_app.append(iMeanMag[idx])
        elif filters == 'g':
            Mag_app.append(gMeanMag[idx])
        elif filters == 'r':
            Mag_app.append(rMeanMag[idx])
    else:
        Mag_app.append(np.nan)

Mag_app = np.array(Mag_app)
Mag_app[Mag_app == -999] = np.nan

# save results into new file
output_file = f'{filters}SDSS_{t_exp}s/41{filters}_{t_exp}s.csv'
results = pd.DataFrame({
    'RA': RA,
    'DEC': DEC,
    'Mag_inst': Mag_inst,
    'Err_mag_inst': Err_mag_inst,
    f'Mag_app_{filters}SDSS_catalog': Mag_app
})
results.to_csv(output_file, index=False)
```
:::

6. get the zeropoint magnitude using `42crossmatch.py`:

::: details `42crossmatch.py`
```py
import numpy as np
import matplotlib.pyplot as plt
from setting import filters, t_exp

# load data
data = np.genfromtxt(f'{filters}SDSS_{t_exp}s/41{filters}_{t_exp}s.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]
Mag_inst = data[:, 2]
Err_mag_inst = data[:, 3]
Mag_app = data[:, 4]

dis = Mag_app - Mag_inst 

# get the median of the difference
median_dis = np.nanmedian(dis)
print(f'Median of the difference: {median_dis}')
print('update the zero point in setting.py')

index = np.arange(len(Mag_inst))
plt.errorbar(index, Mag_inst, xerr=Err_mag_inst, label='Instrumental Magnitude', color='blue', fmt='o', capsize=5, markersize=2)
plt.scatter(index, Mag_app, label='Apparent Magnitude', color='orange')
plt.plot(index, dis)
plt.legend()
plt.show()
```
:::

update the zeropoint magnitude in `setting.py` before continue

7. calculate our apparent magnitude using our zeropoint magnitude(using `43inst2app.py`)

::: details `43inst2app.py`
```py
import numpy as np
import pandas as pd
from setting import filters, mag_zp, t_exp

# load data
data = np.genfromtxt(f'{filters}SDSS_{t_exp}s/41{filters}_{t_exp}s.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]
Mag_inst = data[:, 2]
Err_mag_inst = data[:, 3]
Mag_app_catalog = data[:, 4]

# convert instrumental magnitudes to apparent magnitudes
Mag_app_my = Mag_inst + mag_zp

# save our apparent magnitudes to a new file
output_file = f'{filters}SDSS_{t_exp}s/43{filters}_{t_exp}s.csv'
result = pd.DataFrame({
    'RA': RA,
    'DEC': DEC,
    'Mag_inst': Mag_inst,
    'Err_mag_inst': Err_mag_inst,
    f'Mag_app_{filters}SDSS_catalog': Mag_app_catalog,
    f'Mag_app_{filters}SDSS_my': Mag_app_my
})
result.to_csv(output_file, index=False)
```
:::

8. get the distance (and error of it) of target stars from Gaia (using `51parallax.py`)

::: details `51parallax.py`
```py
import numpy as np
import pandas as pd
from astroquery.gaia import Gaia
from astropy.coordinates import SkyCoord
import astropy.units as u
from setting import filters, t_exp

# load data
data = np.genfromtxt(f'{filters}SDSS_{t_exp}s/43{filters}_{t_exp}s.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]
Mag_inst = data[:, 2]
Err_mag_inst = data[:, 3]
Mag_app_catalog = data[:, 4]
Mag_app_my = data[:, 5]

# search for parallax and its error in Gaia catalog
def get_gaia_distance_and_error(ra, dec):
    coord = SkyCoord(ra=ra, dec=dec, unit=(u.degree, u.degree), frame='icrs')
    width = u.Quantity(1, u.arcsec)
    height = u.Quantity(1, u.arcsec)
    job = Gaia.query_object_async(coordinate=coord, width=width, height=height)
    if len(job) > 0 and 'parallax' in job.colnames and 'parallax_error' in job.colnames:
        parallax = job['parallax'][0]
        parallax_error = job['parallax_error'][0]
        if parallax > 0:
            distance = 1000.0 / parallax  # parsecs
            distance_error = abs(1000.0 * parallax_error / (parallax ** 2))
            if 2 * distance_error > distance:
                return None, None  # avoid unrealistic distances
            return distance, distance_error
    return None, None

distance = []
distance_error = []
n = len(RA)
for i in range(n):
    ra = 15 * RA[i]  # convert RA from degrees to hours
    dec = DEC[i]
    dist, dist_err = get_gaia_distance_and_error(ra=ra, dec=dec)
    distance.append(dist)
    distance_error.append(dist_err)
distance = np.array(distance)
distance_error = np.array(distance_error)

# save results into new file
output_file = f'{filters}SDSS_{t_exp}s/51{filters}_{t_exp}s.csv'
results = pd.DataFrame({
    'RA': RA,
    'DEC': DEC,
    'Mag_inst': Mag_inst,
    'Err_mag_inst': Err_mag_inst,
    f'Mag_app_{filters}SDSS_catalog': Mag_app_catalog,
    f'Mag_app_{filters}SDSS_my': Mag_app_my,
    'Dis': distance,
    'Err_dis': distance_error
})
results.to_csv(output_file, index=False)
```
:::

9. calculate the absolute magnitude and its error using distance (using `52mag_abs.py`)

::: details `52mag_abs.py`
```py
import numpy as np
import pandas as pd
from setting import filters, t_exp

# load data
data = np.genfromtxt(f'{filters}SDSS_{t_exp}s/51{filters}_{t_exp}s.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]
Mag_inst = data[:, 2]
Err_mag_inst = data[:, 3]
Mag_app_catalog = data[:, 4]
Mag_app_my = data[:, 5]
Dis = data[:, 6]
Err_dis = data[:, 7]

# calculate absolute magnitudes and its error
Mag_abs = Mag_app_my - 5 * (np.log10(Dis) - 1)
Err_mag_abs = np.sqrt(Err_mag_inst**2 + (5 / (np.log(10) * Dis))**2 * Err_dis**2)

# save our apparent magnitudes to a new file
output_file = f'{filters}SDSS_{t_exp}s/52{filters}_{t_exp}s.csv'
result = pd.DataFrame({
    'RA': RA,
    'DEC': DEC,
    'Mag_inst': Mag_inst,
    'Err_mag_inst': Err_mag_inst,
    f'Mag_app_{filters}SDSS_catalog': Mag_app_catalog,
    f'Mag_app_{filters}SDSS_my': Mag_app_my,
    'Dis': Dis,
    'Err_dis': Err_dis,
    'Mag_abs': Mag_abs,
    'Err_mag_abs': Err_mag_abs
})
result.to_csv(output_file, index=False)
```
:::

10. draw the H-R diagram (using `6draw.py`)

::: details `6draw.py`
```py
import numpy as np
import matplotlib.pyplot as plt

datag_30s = np.genfromtxt('gSDSS_30s/52g_30s.csv', delimiter=',', skip_header=1)
datag_120s = np.genfromtxt('gSDSS_120s/52g_120s.csv', delimiter=',', skip_header=1)
datar_10s = np.genfromtxt('rSDSS_10s/52r_10s.csv', delimiter=',', skip_header=1)
datar_90s = np.genfromtxt('rSDSS_90s/52r_90s.csv', delimiter=',', skip_header=1)
datai_4s = np.genfromtxt('iSDSS_4s/52i_4s.csv', delimiter=',', skip_header=1)
datai_40s = np.genfromtxt('iSDSS_40s/52i_40s.csv', delimiter=',', skip_header=1)

g_30s = datag_30s[:, 8]
err_g_30s = datag_30s[:, 9]
g_120s = datag_120s[:, 8]
err_g_120s = datag_120s[:, 9]
r_10s = datar_10s[:, 8]
err_r_10s = datar_10s[:, 9]
r_90s = datar_90s[:, 8]
err_r_90s = datar_90s[:, 9]
i_4s = datai_4s[:, 8]
err_i_4s = datai_4s[:, 9]
i_40s = datai_40s[:, 8]
err_i_40s = datai_40s[:, 9]

g = np.concatenate([g_30s, g_120s])
err_g = np.concatenate([err_g_30s, err_g_120s])
r = np.concatenate([r_10s, r_90s])
err_r = np.concatenate([err_r_10s, err_r_90s])
i = np.concatenate([i_4s, i_40s])
err_i = np.concatenate([err_i_4s, err_i_40s])

mask_nan = ~(
    np.isnan(g) | np.isnan(r) | np.isnan(i) |
    np.isnan(err_g) | np.isnan(err_r) | np.isnan(err_i)
)
g = g[mask_nan]
r = r[mask_nan]
i = i[mask_nan]
err_g = err_g[mask_nan]
err_r = err_r[mask_nan]
err_i = err_i[mask_nan]

g_r = g - r
g_i = g - i
r_i = r - i
err_g_r = np.sqrt(err_g**2 + err_r**2)
err_g_i = np.sqrt(err_g**2 + err_i**2)
err_r_i = np.sqrt(err_r**2 + err_i**2)

max_err = 0.2
mask_err = ~(
    (err_g>max_err) & (err_r>max_err) & (err_i>max_err) &
    (err_g_r>max_err) & (err_g_i>max_err) & (err_r_i>max_err)
)
g = g[mask_err]
r = r[mask_err]
i = i[mask_err]
err_g = err_g[mask_err]
err_r = err_r[mask_err]
err_i = err_i[mask_err]
g_r = g_r[mask_err]
g_i = g_i[mask_err]
r_i = r_i[mask_err]
err_g_r = err_g_r[mask_err]
err_g_i = err_g_i[mask_err]
err_r_i = err_r_i[mask_err]

draw_error = 0
if draw_error == 1:
    ax1 = plt.subplot(131)
    ax1.errorbar(g_r, g, xerr=err_g_r, yerr=err_g, fmt='o', markersize=1, capsize=1)
    ax1.invert_yaxis()
    ax1.set_xlabel('g-r')
    ax1.set_ylabel('g')
    ax2 = plt.subplot(132)
    ax2.errorbar(g_i, g, xerr=err_g_i, yerr=err_g, fmt='o', markersize=1, capsize=1)
    ax2.invert_yaxis()
    ax2.set_xlabel('g-i')
    ax2.set_ylabel('g')
    ax3 = plt.subplot(133)
    ax3.errorbar(r_i, r, xerr=err_r_i, yerr=err_r, fmt='o', markersize=1, capsize=1)
    ax3.invert_yaxis()
    ax3.set_xlabel('r-i')
    ax3.set_ylabel('r')
else:
    ax1 = plt.subplot(131)
    ax1.scatter(g_r, g, s=4)
    ax1.invert_yaxis()
    ax1.set_xlabel('g-r')
    ax1.set_ylabel('g')
    ax2 = plt.subplot(132)
    ax2.invert_yaxis()
    ax2.scatter(g_i, g, s=4)
    ax2.set_xlabel('g-i')
    ax2.set_ylabel('g')
    ax3 = plt.subplot(133)
    ax3.scatter(r_i, r, s=4)
    ax3.invert_yaxis()
    ax3.set_xlabel('r-i')
    ax3.set_ylabel('r')
plt.show()
```
:::
