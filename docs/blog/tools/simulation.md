# Simulation

Fluid simulation:
1. the calculate code: [Athena++](https://www.athena-astro.app/)
2. the visualization: gnuplot, VisIt

On `Ubuntu 24.04` with `x86_64`

## Athena++

### Requirements

- gcc/g++ v.11.4.0:

```sh:no-line-numbers
sudo apt install gcc-11 g++-11
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-11 60
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-11 60
```

::: details why?
or you will face:
```sh:no-line-numbers
In file included from src/main.cpp:36:
src/athena.hpp:24:16: error: ‘__fp16’ was not declared in this scope; did you mean ‘__m16’?
   24 | #define fp16_t __fp16
      |                ^~~~~~
src/outputs/outputs.hpp:211:25: note: in expansion of macro ‘fp16_t’
  211 |   std::is_same<h5out_t, fp16_t>::value,
      |                         ^~~~~~
```
:::

- OpenMpi v.5.0.9

```sh:no-line-numbers
wget https://download.open-mpi.org/release/open-mpi/v5.0/openmpi-5.0.9.tar.gz
tar -zxvf openmpi-5.0.7.tar.gz
cd openmpi-5.0.7

./configure --prefix=/opt/openmpi-5.0.9

make -j 4
sudo make install
```

- hdf5 v.1.12.1

```sh:no-line-numbers
wget https://support.hdfgroup.org/ftp/HDF5/releases/hdf5-1.12/hdf5-1.12.1/src/hdf5-1.12.1.tar.gz
tar -xzf hdf5-1.12.1.tar.gz
cd hdf5-1.12.1

./configure --prefix=/usr/local/hdf5-mpi --enable-parallel --enable-shared \
            CC=mpicc CXX=mpicxx FC=mpifort

make -j 4
sudo make install
```

remember the path to the head files `*.h` of OpenMpi, hdf5 and the library `*.so` of hdf5, which are something like:
```sh:no-line-numbers
/opt/openmpi-5.0.9/include/
/usr/local/hdf5-mpi/include/
/usr/local/hdf5-mpi/lib/
```
we will need them later.

### Basic usage

1. Configuring & Compile:

in the root directory of athena
```sh:no-line-numbers
python configure.py --prob blast -b --flux hlld -omp -hdf5
make clean
make CPPFLAGS="-I/usr/local/hdf5-mpi/include/ -I/opt/openmpi-5.0.9/include/" LDFLAGS="-L/usr/local/hdf5-mpi/lib/"
```
this will generate a executable file `athena` in `bin/`

2. Run:

`cd` to the work directory
```sh:no-line-numbers
./path/to/bin/athena -i athinput.<name>
```
```sh:no-line-numbers
mpiexec -n 4 ./path/to/bin/athena -i athinput.<name>
```
begin to calculate and output results

```sh:no-line-numbers
./path/to/bin/athena -i athinput.<name> -m 1
```
output a mesh infomation file `mesh_structure.dat`, help you see the mesh using gnuplot (see below).

### Configuring

* `--prob [problem_generator]` : select a problem generator (from `src/pgen/` matching filename)
* `--coord [coordinates]` : select a coordinate system (from `src/coordinates/` matching filename)
* `-b` : enable magnetic field
* `-mpi` : enable MPI parallelization
* `-omp` : enable OpenMP parallelization
* `-hdf5` : enable HDF5 Output (requires the HDF5 library)
* `--hdf5_path [path]` : path to HDF5 libraries
* `--include [path]` : use `-Ipath` when compiling object files
* `--lib_path [path]` : use `-Lpath` when linking binary executable

### Input file

```sh
<output1>
file_type  = hdf5       # HDF5 data dump
variable   = prim       # variables to be output
dt         = 0.1        # time increment between outputs

<time>
cfl_number = 0.3        # The Courant, Friedrichs, & Lewy (CFL) Number
nlim       = -1         # cycle limit
tlim       = 1.0        # time limit
integrator  = vl2       # time integration algorithm
xorder      = 2         # order of spatial reconstruction
ncycle_out  = 1         # interval for stdout summary info

<mesh>
nx1        = 64         # Number of zones in X1-direction
x1min      = -1.0       # minimum value of X1
x1max      =  1.0       # maximum value of X1
ix1_bc     = periodic   # inner-X1 boundary flag
ox1_bc     = periodic   # outer-X1 boundary flag

nx2        = 64         # Number of zones in X2-direction
x2min      = -1.0       # minimum value of X2
x2max      =  1.0       # maximum value of X2
ix2_bc     = periodic   # inner-X2 boundary flag
ox2_bc     = periodic   # outer-X2 boundary flag

nx3        = 64         # Number of zones in X3-direction
x3min      = -1.0       # minimum value of X3
x3max      =  1.0       # maximum value of X3
ix3_bc     = periodic   # inner-X3 boundary flag
ox3_bc     = periodic   # outer-X3 boundary flag

num_threads = 1         # Number of OpenMP threads per process
refinement = static

# setting for Adaptive Mesh Refinement
# refinement  = adaptive  # Adaptive Mesh Refinement
# numlevel    = 3         # Number of AMR levels
# derefine_count = 5      # Number of Steps

<meshblock>
nx1        = 16
nx2        = 16
nx3        = 16

<refinement1>
x1min=-0.5
x1max= 0.5
x2min=-0.5
x2max= 0.5
x3min=-0.5
x3max= 0.5
level=1
```

## gnuplot

[gnuplot](http://gnuplot.info/)

- Download:
```sh:no-line-numbers
sudo apt install gnuplot
```

- usage:
```sh:no-line-numbers
$ gnuplot
gnuplot> plot "Sod.block0.out1.00025.tab" using 2:3 with lines
gnuplot> splot "mesh_structure.dat" w l
```

## VisIt

[VisIt](https://visit-dav.github.io/visit-website/)

- Open datas:

  `.vtk`

  `*.athdf.xdmf` (Load expression file "Controls -> Expressions" load `athena/vis/visit/athdf_MHD_primitive.xml`)

- Draw datas:

  "Add -> Pseudocolor -> ..."

  "Add -> Mesh"

- Operate:

  "Operators -> Slicing -> ThreeSlice"

  "Operators -> Selection -> Index Select"
