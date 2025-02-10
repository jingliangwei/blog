# python 虚拟环境

记录 `python` 虚拟环境管理 `pip` 安装模块的命令

```sh
python -m venv <venv-path>
source <venv-path>/bin/activate
pip install <package>
pip list
pip freeze > requirements.txt
pip install -r requirements.txt
deactivate
```

## 在 Ubuntu 上统一管理 python 虚拟环境

1. 选择一个路径专门存放 `python` 虚拟环境，并把路径保存为一个环境变量 `pyenv`

在文件 `~/.bashrc` 添加

```sh
export pyenv=<path-to-pyenv>
```

然后 `source ~/.bashrc` 刷新。

2. 然后新建虚拟环境

```sh
python -m venv $pyenv/calc
source $pyenv/calc/bin/activate
pip install numpy
```

所有操作都将 `<venv-path>` 改为 `$pyenv/<venv-name>` 即可。
