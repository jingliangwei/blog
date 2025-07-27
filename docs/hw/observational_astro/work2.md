## work on open clusters

### detail process

1. reduction (see guides at [practice 1](/blog/astronomy/observational_astro.html#practice-1))

2. select targets stars using AstroImageJ and save the table into file `Table_g.tbl`,`Table_r.tbl`,`Table_i.tbl`

3. using `2format.py` to convert the `Table_?.tbl` to `Source_Sky_Info_?2.csv`

obtain `RA_Ti`,`DEC_Ti`,`Source-Sky_Ti`,`Source_Error_Ti`

::: details `2format.py`
```py
import pandas as pd

# setting
filters = 'i'
file_in = f'datas/{filters}SDSS/Table_{filters}.tbl'
file_out = f'datas/{filters}SDSS/Source_Sky_Info_{filters}2.csv'

# load the table
df = pd.read_csv(file_in, sep='\t', comment='/', engine='python')

# extract Source-Sky_T* and Source_Error_T* columns
ra_cols = [f'RA_T{i}' for i in range(1, 51)]
dec_cols = [f'DEC_T{i}' for i in range(1, 51)]
source_sky_cols = [f'Source-Sky_T{i}' for i in range(1, 51)]
source_err_cols = [f'Source_Error_T{i}' for i in range(1, 51)]

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

filters = 'i'

# load data
data = np.genfromtxt(f'datas/{filters}SDSS/Source_Sky_Info_{filters}2.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]
Source_Sky = data[:, 2]
Source_Error = data[:, 3]

# convert flux to instrumental magnitude
t_exp = 30
m_inst = -2.5 * np.log10(Source_Sky / t_exp)
err_m_inst = np.sqrt((2.5 / np.log(10))**2 * (Source_Error / Source_Sky)**2)

# save results into new file
output_file = f'datas/{filters}SDSS/Instrumental_Magnitudes_{filters}3.csv'
results = pd.DataFrame({
    'RA': RA,
    'DEC': DEC,
    'Instrumental_Magnitude': m_inst,
    'Error_Instrumental_Magnitude': err_m_inst
})
results.to_csv(output_file, index=False)
```
:::

5. get apparent magnitudes from catalog:
   - download the data from [https://catalogs.mast.stsci.edu/panstarrs/](https://catalogs.mast.stsci.edu/panstarrs/) as `PS-7_26_2025.csv`
     
     notice: about 5 arcminutes(the website will provide at most 10000 items at the same time), get the g,r,i mag

   - using `41get_mag_app.py` to match the coordinate between `Instrumental_Magnitudes_g3.csv` and `PS-7_26_2025.csv`:
::: details `41get_mag_app.py`
```py
import numpy as np
import pandas as pd
from astropy.coordinates import SkyCoord
import astropy.units as u

filters = 'i'

# load data
data = np.genfromtxt(f'datas/{filters}SDSS/Instrumental_Magnitudes_{filters}3.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]
Mag_inst = data[:, 2]
Err_mag_inst = data[:, 3]

# load data from panstarrs
data2 = np.genfromtxt('datas/PS-7_26_2025.csv', delimiter=',', skip_header=1)
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
output_file = 'datas/iSDSS/Apparent_Magnitudes_i41.csv'
results = pd.DataFrame({
    'RA': RA,
    'DEC': DEC,
    'Instrumental_Magnitude': Mag_inst,
    'Error_Instrumental_Magnitude': Err_mag_inst,
    f'Apparent_Magnitude_{filters}SDSS_catalog': Mag_app         # r,g,i
})
results.to_csv(output_file, index=False)
```
:::

6. get the zeropoint magnitude using `42crossmatch.py`:
::: details `42crossmatch.py`
```py
import numpy as np
import matplotlib.pyplot as plt

filters = 'i'

# load data
data = np.genfromtxt(f'datas/{filters}SDSS/Apparent_Magnitudes_{filters}41.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]
Mag_inst = data[:, 2]
Err_mag_inst = data[:, 3]
Mag_app = data[:, 4]

dis = Mag_app - Mag_inst 

# get the median of the difference
median_dis = np.nanmedian(dis)
print(f'Median of the difference: {median_dis}')

index = np.arange(len(Mag_inst))
plt.errorbar(index, Mag_inst, xerr=Err_mag_inst, label='Instrumental Magnitude', color='blue', fmt='o', capsize=5, markersize=2)
plt.scatter(index, Mag_app, label='Apparent Magnitude', color='orange')
plt.plot(index, dis)
plt.legend()
plt.show()
```
:::

7. calculate our apparent magnitude using our zeropoint magnitude(using `43inst2app.py`)
::: details `43inst2app.py`
```py
import numpy as np
import pandas as pd

filters = 'i'

# load data
data = np.genfromtxt(f'datas/{filters}SDSS/Apparent_Magnitudes_{filters}41.csv', delimiter=',', skip_header=1)
RA = data[:, 0]
DEC = data[:, 1]
Mag_inst = data[:, 2]
Err_mag_inst = data[:, 3]
Mag_app_catalog = data[:, 4]

# convert instrumental magnitudes to apparent magnitudes
mag_zp = 20.24873852138639
Mag_app_my = Mag_inst + mag_zp

# save our apparent magnitudes to a new file
output_file = f'datas/{filters}SDSS/Apparent_Magnitudes_{filters}43.csv'
result = pd.DataFrame({
    'RA': RA,
    'DEC': DEC,
    'Instrumental_Magnitude': Mag_inst,
    'Error_Instrumental_Magnitude': Err_mag_inst,
    f'Apparent_Magnitude_{filters}SDSS_catalog': Mag_app_catalog,
    f'Apparent_Magnitude_{filters}SDSS_my': Mag_app_my
})
result.to_csv(output_file, index=False)
```
:::
