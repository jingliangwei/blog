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

7. identify if the star is belong to the clusters

   - using parallax(distance) and proper motion

more questions: the interstellar extinction and reddening are waitted to consider.

the isochrone.

## process

0. make sure all python scripts are in the same path, and contain filters and exposure time infomation in filename.

prepara the setting file `setting.py`

::: details `setting.py`
```py
filters = 'r'
# exposure time in seconds
t_exp = 90
# the length of exposure time ('long' or 'short')
t_ls = 'long'
# number of target stars (uesd in 2format.py)
number = 50
# zero point for magnitude conversion (used in 43inst2app.py)
## gain zero point from 42crossmatch.py
mag_zp = 22.921860444806008

# ignore this part
# the atmosphere extinction (used in 53extinction.py)
k = 0
# the airmass of frame field (used in 53extinction.py)
## gain airmass from 2format.py
X = 1.108257574223502

# identify if the star belongs to the clusters
distance_median = 1660.0017621596332
pm_median = 2.3772686
pmra_median = -1.6451050478984617
pmdec_median = -1.6698721604105364
delta_distance = 500
delta_pm = 1.414
delta_pmra = 1
delta_pmdec = 1
```
:::

the details process:

1. reduction
2. select targets stars using AstroImageJ and save the table into file:
   
   - import the longer exposure time (3 frames) at the same time to make sure the target stars in different filters are the same one, and then repeat for the shorts;
   - then divide the table manually to `gSDSS_30s/Table_g_30s.tbl`,`gSDSS_120s/Table_g_120s.tbl`,`iSDSS_4s/Table_i_4s.tbl`,`iSDSS_40s/Table_i_40s.tbl`,`rSDSS_10s/Table_r_10s.tbl`,`rSDSS_90s/Table_r_90s.tbl` (make sure the name and path here are the same as the scripts used below)

3. using `2format.py` to convert the `?SDSS_*s/Table_?_*s.tbl` to `2?_*s.csv`

and save the `RA,DEC` to `*_time/2*.csv`

::: details `2format.py`
```py
import pandas as pd
from setting import filters, number, t_exp, t_ls

file_in = f'{filters}SDSS_{t_exp}s/Table_{filters}_{t_exp}s.tbl'
file_out = f'{filters}SDSS_{t_exp}s/2{filters}_{t_exp}s.csv'
file_out2 = f'{t_ls}_time/2{t_ls}.csv'

# load the table
df = pd.read_csv(file_in, sep='\t', comment='/', engine='python')

# extract Source-Sky_T* and Source_Error_T* columns
ra_cols = [f'RA_T{i}' for i in range(1, number+1)]
dec_cols = [f'DEC_T{i}' for i in range(1, number+1)]
source_sky_cols = [f'Source-Sky_T{i}' for i in range(1, number+1)]
source_err_cols = [f'Source_Error_T{i}' for i in range(1, number+1)]
airmass_col = f'AIRMASS'

ra = df[ra_cols].values[0]
dec = df[dec_cols].values[0]
source_sky = df[source_sky_cols].values[0]
source_err = df[source_err_cols].values[0]
airmass = df[airmass_col].values[0]

# print out the airmass
print(f'Airmass of the frame field: {airmass}')
print('update the airmass in setting.py')

# save information to a new file
info = pd.DataFrame({
    'RA': ra,
    'DEC': dec,
    'Source-Sky': source_sky,
    'Source_Error': source_err
})
info.to_csv(file_out, index=False)
info2 = pd.DataFrame({
    'RA': ra,
    'DEC': dec
})
info2.to_csv(file_out2, index=False)
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

(only run once for each the 'long' and 'short' exposure time)

::: details `51parallax.py`
```py
# only run one time for each the 'long' and 'short' exposure time
import numpy as np
import pandas as pd
from astroquery.gaia import Gaia
from astropy.coordinates import SkyCoord
import astropy.units as u
from setting import t_ls

# load data
data = np.genfromtxt(f'{t_ls}_time/2{t_ls}.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]

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
    print(f'{i+1}/{n}:', end='')
    ra = 15 * RA[i]  # convert RA from hours to degrees
    dec = DEC[i]
    dist, dist_err = get_gaia_distance_and_error(ra=ra, dec=dec)
    distance.append(dist)
    distance_error.append(dist_err)
distance = np.array(distance)
distance_error = np.array(distance_error)

# save results into new file
output_file = f'{t_ls}_time/51{t_ls}.csv'
results = pd.DataFrame({
    'RA': RA,
    'DEC': DEC,
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
from setting import filters, t_exp, t_ls

# load data
data = np.genfromtxt(f'{filters}SDSS_{t_exp}s/43{filters}_{t_exp}s.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]
Mag_inst = data[:, 2]
Err_mag_inst = data[:, 3]
Mag_app_catalog = data[:, 4]
Mag_app_my = data[:, 5]
data2 = np.genfromtxt(f'{t_ls}_time/51{t_ls}.csv', delimiter=',', skip_header=1)
Dis = data2[:, 2]
Err_dis = data2[:, 3]

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

::: info the summary of the process before next step
the steps:

for `g,30s` run the script `2,3,41,42,43,51,52`

for `i,4s` run `2,3,41,42,43,52`

for `r,10s` run `2,3,41,42,43,52`

for `g,120s` run `2,3,41,42,43,51,52`

for `i,40s` run `2,3,41,42,43,52`

for `r,90s` run `2,3,41,42,43,52`

the results:

in folder `gSDSS_30s,120s/iSDSS_4s,40s/rSDSS_10s,90s`, there are `2,3,41,43,52`

in folder `long_time/short_time`, there are `2,51`
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

11. identify if the target star is belong to the clusters：

- run `71pm.py` twice, for setting `t_ls` is `'long'` and `'short'`

::: details `71pm.py`
```py
import numpy as np
import pandas as pd
from astroquery.gaia import Gaia
from astropy.coordinates import SkyCoord
import astropy.units as u
from setting import t_ls

# load data
data = np.genfromtxt(f'{t_ls}_time/51{t_ls}.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]
Dis = data[:, 2]
Err_dis = data[:, 3]

def get_gaia_pm(ra, dec):
    coord = SkyCoord(ra=ra, dec=dec, unit=(u.degree, u.degree), frame='icrs')
    width = u.Quantity(1, u.arcsec)
    height = u.Quantity(1, u.arcsec)
    job = Gaia.query_object_async(coordinate=coord, width=width, height=height)
    if len(job) > 0 and 'parallax' in job.colnames and 'parallax_error' in job.colnames \
       and 'pm' in job.colnames and 'pmra' in job.colnames and 'pmdec' in job.colnames:
        parallax = job['parallax'][0]
        parallax_error = job['parallax_error'][0]
        pm = job['pm'][0]
        pmra = job['pmra'][0]
        pmdec = job['pmdec'][0]
        if parallax > 0:
            distance = 1000.0 / parallax  # parsecs
            distance_error = abs(1000.0 * parallax_error / (parallax ** 2))
            if 2 * distance_error > distance:
                return None, None, None  # avoid unrealistic distances
            return pm, pmra, pmdec
    return None, None, None

propermotion = []
propermotion_ra = []
propermotion_dec = []
n = len(RA)
for i in range(n):
    print(f'{i+1}/{n}:', end='')
    ra = 15 * RA[i]  # convert RA from hours to degrees
    dec = DEC[i]
    pm, pmra, pmdec = get_gaia_pm(ra=ra, dec=dec)
    propermotion.append(pm)
    propermotion_ra.append(pmra)
    propermotion_dec.append(pmdec)
propermotion = np.array(propermotion)
propermotion_ra = np.array(propermotion_ra)
propermotion_dec = np.array(propermotion_dec)

# save results into new file
output_file = f'{t_ls}_time/71{t_ls}.csv'
results = pd.DataFrame({
    'RA': RA,
    'DEC': DEC,
    'Dis': Dis,
    'Err_dis': Err_dis,
    'pm': propermotion,
    'pm_ra': propermotion_ra,
    'pm_dec': propermotion_dec
})
results.to_csv(output_file, index=False)
```
:::

- run `72check.py` to view and select the box to contain the main stars in clusters

::: details `72check.py`
```py
import numpy as np
import matplotlib.pyplot as plt

data_short = np.genfromtxt('short_time/71short.csv', delimiter=',', skip_header=1)
data_long = np.genfromtxt('long_time/71long.csv', delimiter=',', skip_header=1)

distance_short = data_short[:, 2]
distance_long = data_long[:, 2]
pm_short = data_short[:, 4]
pm_long = data_long[:, 4]
pmra_short = data_short[:, 5]
pmra_long = data_long[:, 5]
pmdec_short = data_short[:, 6]
pmdec_long = data_long[:, 6]

distance = np.concatenate([distance_short, distance_long])
pm = np.concatenate([pm_short, pm_long])
pmra = np.concatenate([pmra_short, pmra_long])
pmdec = np.concatenate([pmdec_short, pmdec_long])

mask_nan = ~(
    np.isnan(distance) | np.isnan(pm) | np.isnan(pmra) | np.isnan(pmdec)
)
distance = distance[mask_nan]
pm = pm[mask_nan]
pmra = pmra[mask_nan]
pmdec = pmdec[mask_nan]

distance_median = np.median(distance)
pm_median = np.median(pm)
pmra_median = np.median(pmra)
pmdec_median = np.median(pmdec)
delta_distance = 500
delta_pm = 1.414
delta_pmra = 1
delta_pmdec = 1
print(f'distance_median: {distance_median}')
print(f'pm_median: {pm_median}')
print(f'pmra_median: {pmra_median}')
print(f'pmdec_median: {pmdec_median}')
print(f'delta_distance: {delta_distance}')
print(f'delta_pm: {delta_pm}')
print(f'delta_pmra: {delta_pmra}')
print(f'delta_pmdec: {delta_pmdec}')
print('update above parameters in setting.py')

ax1 = plt.subplot(121)
ax1.scatter(pm, distance)
ax1.set_xlabel('Proper Motion (mas/yr)')
ax1.set_ylabel('distance (pc)')
rect1 = plt.Rectangle((pm_median - delta_pm, distance_median - delta_distance), 2 * delta_pm, 2 * delta_distance,
                        linewidth=1, edgecolor='r', facecolor='none')
ax1.add_patch(rect1)
ax2 = plt.subplot(122)
ax2.scatter(pmra, pmdec)
ax2.set_xlabel('Proper Motion RA (mas/yr)')
ax2.set_ylabel('Proper Motion Dec (mas/yr)')
rect2 = plt.Rectangle((pmra_median - delta_pmra, pmdec_median - delta_pmdec), 2 * delta_pmra, 2 * delta_pmdec,
                     linewidth=1, edgecolor='r', facecolor='none')
ax2.add_patch(rect2)
plt.show()
```
:::

- run `73identify.py` to save the results to file `short_time/73short.csv`,`long_time/73long.csv`

::: details `73identify.py`
```py
import numpy as np
import pandas as pd
from setting import distance_median, pm_median, delta_distance, delta_pm
from setting import pmra_median, pmdec_median, delta_pmra, delta_pmdec

data_short = np.genfromtxt('short_time/71short.csv', delimiter=',', skip_header=1)
data_long = np.genfromtxt('long_time/71long.csv', delimiter=',', skip_header=1)

ra_short = data_short[:, 0]
ra_long = data_long[:, 0]
dec_short = data_short[:, 1]
dec_long = data_long[:, 1]
dis_short = data_short[:, 2]
dis_long = data_long[:, 2]
err_dis_short = data_short[:, 3]
err_dis_long = data_long[:, 3]
pm_short = data_short[:, 4]
pm_long = data_long[:, 4]
pmra_short = data_short[:, 5]
pmra_long = data_long[:, 5]
pmdec_short = data_short[:, 6]
pmdec_long = data_long[:, 6]

identify_short = []
identify_long = []

n = len(pmra_short)
for i in range(n):
    dis = dis_short[i]
    pm = pm_short[i]
    pmra = pmra_short[i]
    pmdec = pmdec_short[i]
    if (dis < distance_median + delta_distance) and (dis > distance_median - delta_distance) and \
       (pm < pm_median + delta_pm) and (pm > pm_median - delta_pm) and \
       (pmra < pmra_median + delta_pmra) and (pmra > pmra_median - delta_pmra) and \
       (pmdec < pmdec_median + delta_pmdec) and (pmdec > pmdec_median - delta_pmdec):
        identify_short.append(1)
    else:
        identify_short.append(0)
n = len(pmra_long)
for i in range(n):
    dis = dis_long[i]
    pm = pm_long[i]
    pmra = pmra_long[i]
    pmdec = pmdec_long[i]
    if (dis < distance_median + delta_distance) and (dis > distance_median - delta_distance) and \
       (pm < pm_median + delta_pm) and (pm > pm_median - delta_pm) and \
       (pmra < pmra_median + delta_pmra) and (pmra > pmra_median - delta_pmra) and \
       (pmdec < pmdec_median + delta_pmdec) and (pmdec > pmdec_median - delta_pmdec):
        identify_long.append(1)
    else:
        identify_long.append(0)
identify_short = np.array(identify_short)
identify_long = np.array(identify_long)

# save results into new file
output_file_short = 'short_time/73short.csv'
output_file_long = 'long_time/73long.csv'
info_short = pd.DataFrame({
    'RA': ra_short,
    'DEC': dec_short,
    'Dis': dis_short,
    'Err_dis': err_dis_short,
    'pm': pm_short,
    'pm_ra': pmra_short,
    'pm_dec': pmdec_short,
    'identify': identify_short
})
info_long = pd.DataFrame({
    'RA': ra_long,
    'DEC': dec_long,
    'Dis': dis_long,
    'Err_dis': err_dis_long,
    'pm': pm_long,
    'pm_ra': pmra_long,
    'pm_dec': pmdec_long,
    'identify': identify_long
})
info_short.to_csv(output_file_short, index=False)
info_long.to_csv(output_file_long, index=False)
```
:::

- the `74recheck.py` just for recheck, is optional.

::: details `74recheck.py`
```py
import numpy as np
import matplotlib.pyplot as plt

data_short = np.genfromtxt('short_time/73short.csv', delimiter=',', skip_header=1)
data_long = np.genfromtxt('long_time/73long.csv', delimiter=',', skip_header=1)

distance_short = data_short[:, 2]
distance_long = data_long[:, 2]
pm_short = data_short[:, 4]
pm_long = data_long[:, 4]
pmra_short = data_short[:, 5]
pmra_long = data_long[:, 5]
pmdec_short = data_short[:, 6]
pmdec_long = data_long[:, 6]
identify_short = data_short[:, 7]
identify_long = data_long[:, 7]

mask_identify_short = (identify_short == 1)
mask_identify_long = (identify_long == 1)

distance_short_identify = distance_short[mask_identify_short]
distance_long_identify = distance_long[mask_identify_long]
pm_short_identify = pm_short[mask_identify_short]
pm_long_identify = pm_long[mask_identify_long]
pmra_short_identify = pmra_short[mask_identify_short]
pmra_long_identify = pmra_long[mask_identify_long]
pmdec_short_identify = pmdec_short[mask_identify_short]
pmdec_long_identify = pmdec_long[mask_identify_long]

distance_identify = np.concatenate([distance_short_identify, distance_long_identify])
pm_identify = np.concatenate([pm_short_identify, pm_long_identify])
pmra_identify = np.concatenate([pmra_short_identify, pmra_long_identify])
pmdec_identify = np.concatenate([pmdec_short_identify, pmdec_long_identify])

mask_nan = ~(
    np.isnan(distance_identify) | np.isnan(pm_identify) | np.isnan(pmra_identify) | np.isnan(pmdec_identify)
)
distance_identify = distance_identify[mask_nan]
pm_identify = pm_identify[mask_nan]
pmra_identify = pmra_identify[mask_nan]
pmdec_identify = pmdec_identify[mask_nan]

distance = np.concatenate([distance_short, distance_long])
pm = np.concatenate([pm_short, pm_long])
pmra = np.concatenate([pmra_short, pmra_long])
pmdec = np.concatenate([pmdec_short, pmdec_long])

ax1 = plt.subplot(121)
ax1.scatter(pm_identify, distance_identify, label='Identified Stars')
ax1.scatter(pm, distance, alpha=0.3, label='All Stars')
ax1.set_xlabel('Proper Motion (mas/yr)')
ax1.set_ylabel('distance (pc)')
ax1.legend()
ax2 = plt.subplot(122)
ax2.scatter(pmra_identify, pmdec_identify, label='Identified Stars')
ax2.scatter(pmra, pmdec, alpha=0.3, label='All Stars')
ax2.set_xlabel('Proper Motion RA (mas/yr)')
ax2.set_ylabel('Proper Motion Dec (mas/yr)')
ax2.legend()
plt.show()
```
:::

12. draw the H-R diagram after identification (using `8draw.py`)

::: details `8draw.py`
```py
import numpy as np
import matplotlib.pyplot as plt

datag_30s = np.genfromtxt('gSDSS_30s/52g_30s.csv', delimiter=',', skip_header=1)
datag_120s = np.genfromtxt('gSDSS_120s/52g_120s.csv', delimiter=',', skip_header=1)
datar_10s = np.genfromtxt('rSDSS_10s/52r_10s.csv', delimiter=',', skip_header=1)
datar_90s = np.genfromtxt('rSDSS_90s/52r_90s.csv', delimiter=',', skip_header=1)
datai_4s = np.genfromtxt('iSDSS_4s/52i_4s.csv', delimiter=',', skip_header=1)
datai_40s = np.genfromtxt('iSDSS_40s/52i_40s.csv', delimiter=',', skip_header=1)

data_short = np.genfromtxt('short_time/73short.csv', delimiter=',', skip_header=1)
data_long = np.genfromtxt('long_time/73long.csv', delimiter=',', skip_header=1)

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

## the whole part
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

## the identify part
identify_short = data_short[:, 7]
identify_long = data_long[:, 7]

mask_identified_short = (identify_short == 1)
mask_identified_long = (identify_long == 1)

g_30s_identify = g_30s[mask_identified_short]
err_g_30s_identify = err_g_30s[mask_identified_short]
g_120s_identify = g_120s[mask_identified_long]
err_g_120s_identify = err_g_120s[mask_identified_long]
r_10s_identify = r_10s[mask_identified_short]
err_r_10s_identify = err_r_10s[mask_identified_short]
r_90s_identify = r_90s[mask_identified_long]
err_r_90s_identify = err_r_90s[mask_identified_long]
i_4s_identify = i_4s[mask_identified_short]
err_i_4s_identify = err_i_4s[mask_identified_short]
i_40s_identify = i_40s[mask_identified_long]
err_i_40s_identify = err_i_40s[mask_identified_long]

g_identify = np.concatenate([g_30s_identify, g_120s_identify])
err_g_identify = np.concatenate([err_g_30s_identify, err_g_120s_identify])
r_identify = np.concatenate([r_10s_identify, r_90s_identify])
err_r_identify = np.concatenate([err_r_10s_identify, err_r_90s_identify])
i_identify = np.concatenate([i_4s_identify, i_40s_identify])
err_i_identify = np.concatenate([err_i_4s_identify, err_i_40s_identify])

mask_nan = ~(
    np.isnan(g_identify) | np.isnan(r_identify) | np.isnan(i_identify) |
    np.isnan(err_g_identify) | np.isnan(err_r_identify) | np.isnan(err_i_identify)
)
g_identify = g_identify[mask_nan]
r_identify = r_identify[mask_nan]
i_identify = i_identify[mask_nan]
err_g_identify = err_g_identify[mask_nan]
err_r_identify = err_r_identify[mask_nan]
err_i_identify = err_i_identify[mask_nan]

g_r_identify = g_identify - r_identify
g_i_identify = g_identify - i_identify
r_i_identify = r_identify - i_identify
err_g_r_identify = np.sqrt(err_g_identify**2 + err_r_identify**2)
err_g_i_identify = np.sqrt(err_g_identify**2 + err_i_identify**2)
err_r_i_identify = np.sqrt(err_r_identify**2 + err_i_identify**2)

max_err = 0.2
mask_err = ~(
    (err_g_identify>max_err) & (err_r_identify>max_err) & (err_i_identify>max_err) &
    (err_g_r_identify>max_err) & (err_g_i_identify>max_err) & (err_r_i_identify>max_err)
)
g_identify = g_identify[mask_err]
r_identify = r_identify[mask_err]
i_identify = i_identify[mask_err]
err_g_identify = err_g_identify[mask_err]
err_r_identify = err_r_identify[mask_err]
err_i_identify = err_i_identify[mask_err]
g_r_identify = g_r_identify[mask_err]
g_i_identify = g_i_identify[mask_err]
r_i_identify = r_i_identify[mask_err]
err_g_r_identify = err_g_r_identify[mask_err]
err_g_i_identify = err_g_i_identify[mask_err]
err_r_i_identify = err_r_i_identify[mask_err]

## draw the H-R diagram
show_raw = 0
draw_error = 1
if draw_error == 1:
    ax1 = plt.subplot(131)
    ax1.errorbar(g_r_identify, g_identify, xerr=err_g_r_identify, yerr=err_g_identify, fmt='o', markersize=1, capsize=1)
    ax1.invert_yaxis()
    ax1.set_xlabel('g-r')
    ax1.set_ylabel('g')
    ax2 = plt.subplot(132)
    ax2.errorbar(g_i_identify, g_identify, xerr=err_g_i_identify, yerr=err_g_identify, fmt='o', markersize=1, capsize=1)
    ax2.invert_yaxis()
    ax2.set_xlabel('g-i')
    ax2.set_ylabel('g')
    ax3 = plt.subplot(133)
    ax3.errorbar(r_i_identify, r_identify, xerr=err_r_i_identify, yerr=err_r_identify, fmt='o', markersize=1, capsize=1)
    ax3.invert_yaxis()
    ax3.set_xlabel('r-i')
    ax3.set_ylabel('r')
else:
    ax1 = plt.subplot(131)
    ax1.scatter(g_r_identify, g_identify, s=4, label='Identified Stars')
    if show_raw == 1:
        ax1.scatter(g_r, g, s=3, alpha=0.8, label='All Stars')
    ax1.invert_yaxis()
    ax1.set_xlabel('g-r')
    ax1.set_ylabel('g')
    ax1.legend()
    ax2 = plt.subplot(132)
    ax2.invert_yaxis()
    ax2.scatter(g_i_identify, g_identify, s=4, label='Identified Stars')
    if show_raw == 1:
        ax2.scatter(g_i, g, s=3, alpha=0.8, label='All Stars')
    ax2.set_xlabel('g-i')
    ax2.set_ylabel('g')
    ax2.legend()
    ax3 = plt.subplot(133)
    ax3.scatter(r_i_identify, r_identify, s=4, label='Identified Stars')
    if show_raw == 1:
        ax3.scatter(r_i, r, s=3, alpha=0.8, label='All Stars')
    ax3.invert_yaxis()
    ax3.set_xlabel('r-i')
    ax3.set_ylabel('r')
    ax3.legend()
plt.show()
```
:::
