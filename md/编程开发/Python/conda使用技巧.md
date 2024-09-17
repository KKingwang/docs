- 基本命令
    
- 确认版本：conda -v
    

```
(base) coder@192 pycharm % conda -V     
conda 4.10.3
(base) coder@

```

- 查看命令参数: conda, 可以看到子命令有clean、help、list、install、search等子命令

```
(base) coder@192 ~ % conda
usage: conda [-h] [-V] command ...

conda is a tool for managing and deploying applications, environments and packages.

Options:

positional arguments:
  command
    clean        Remove unused packages and caches.
    compare      Compare packages between conda environments.
    config       Modify configuration values in .condarc. This is modeled after the git config command. Writes to the
                 user .condarc file (/Users/cynthia/.condarc) by default.
    create       Create a new conda environment from a list of specified packages.
    help         Displays a list of available conda commands and their help strings.
    info         Display information about current conda install.
    init         Initialize conda for shell interaction. [Experimental]
    install      Installs a list of packages into a specified conda environment.
    list         List linked packages in a conda environment.
    package      Low-level conda package utility. (EXPERIMENTAL)
    remove       Remove a list of packages from a specified conda environment.
    uninstall    Alias for conda remove.
    run          Run an executable in a conda environment. [Experimental]
    search       Search for packages and display associated information. The input is a MatchSpec, a query language for
                 conda packages. See examples below.
    update       Updates conda packages to the latest compatible version.
    upgrade      Alias for conda update.

optional arguments:
  -h, --help     Show this help message and exit.
  -V, --version  Show the conda version number and exit.

conda commands available from other packages:
  env

```

- 查看子命令帮助信息: conda \[子命令\] -h
    
    ```
    (base) coder@192 ~ % conda create -h
    usage: conda create [-h] [--clone ENV] [-n ENVIRONMENT | -p PATH] [-c CHANNEL] [--use-local] [--override-channels]
                        [--repodata-fn REPODATA_FNS] [--strict-channel-priority] [--no-
    ...
    
    Options:
    
    positional arguments:
      package_spec          Packages to install or update in the conda environment.
    
    ...
    
    Target Environment Specification:
      -n ENVIRONMENT, --name ENVIRONMENT
                            Name of environment.
      -p PATH, --prefix PATH
                            Full path to environment location (i.e. prefix).
    ...
    
    ```
    

## **环境：创建/删除**

conda最有特色的点，可以便利创建不同的开发环境，对开发环境进行管理

### 查看既存环境：conda env list

```
(base) coder@192 ~ % conda env list
# conda environments:
#
                         /Applications/JupyterLab.app/Contents/Resources/jlab_server
base                  *  /Users/coder/opt/miniconda3

```

### 创建虚拟环境：conda create -n \[环境名称\] \[安装库包列表\]

- 下面示例：环境名称：oldgeek-study，环境默认安装python3.10版

```
(base) coder@192 ~ % conda create -n oldgeek-study python=3.10
Collecting package metadata (current_repodata.json): done
Solving environment: done

## Package Plan ##

  environment location: /Users/coder/opt/miniconda3/envs/oldgeek-study

  added / updated specs:
    - python=3.10


The following packages will be downloaded:

    package                    |            build
    ---------------------------|-----------------
    certifi-2020.6.20          |     pyhd3eb1b0_3         155 KB
    ncurses-6.3                |       hca72f7f_0         856 KB
    pip-21.2.4                 |  py310hecd8cb5_0         1.8 MB
    python-3.10.0              |       h88f2d9e_1        10.1 MB
    setuptools-58.0.4          |  py310hecd8cb5_0         782 KB
    tzdata-2021e               |       hda174b7_0         112 KB
    ------------------------------------------------------------
                                           Total:        13.8 MB

The following NEW packages will be INSTALLED:

  bzip2              pkgs/main/osx-64::bzip2-1.0.8-h1de35cc_0
  ca-certificates    pkgs/main/osx-64::ca-certificates-2021.10.26-hecd8cb5_2
  certifi            pkgs/main/noarch::certifi-2020.6.20-pyhd3eb1b0_3
  libcxx             pkgs/main/osx-64::libcxx-12.0.0-h2f01273_0
  libffi             pkgs/main/osx-64::libffi-3.3-hb1e8313_2
  ncurses            pkgs/main/osx-64::ncurses-6.3-hca72f7f_0
  openssl            pkgs/main/osx-64::openssl-1.1.1l-h9ed2024_0
  pip                pkgs/main/osx-64::pip-21.2.4-py310hecd8cb5_0
  python             pkgs/main/osx-64::python-3.10.0-h88f2d9e_1
  readline           pkgs/main/osx-64::readline-8.1-h9ed2024_0
  setuptools         pkgs/main/osx-64::setuptools-58.0.4-py310hecd8cb5_0
  sqlite             pkgs/main/osx-64::sqlite-3.36.0-hce871da_0
  tk                 pkgs/main/osx-64::tk-8.6.11-h7bc2e8c_0
  tzdata             pkgs/main/noarch::tzdata-2021e-hda174b7_0
  wheel              pkgs/main/noarch::wheel-0.37.0-pyhd3eb1b0_1
  xz                 pkgs/main/osx-64::xz-5.2.5-h1de35cc_0
  zlib               pkgs/main/osx-64::zlib-1.2.11-h1de35cc_3


Proceed ([y]/n)?

```

- 输入：y，创建虚拟环境
    
    ```
    Proceed ([y]/n)? y
    
    
    Downloading and Extracting Packages
    ncurses-6.3          | 856 KB    | ############################################################################## | 100% 
    tzdata-2021e         | 112 KB    | ############################################################################## | 100% 
    setuptools-58.0.4    | 782 KB    | ############################################################################## | 100% 
    pip-21.2.4           | 1.8 MB    | ############################################################################## | 100% 
    certifi-2020.6.20    | 155 KB    | ############################################################################## | 100% 
    python-3.10.0        | 10.1 MB   | ############################################################################## | 100% 
    Preparing transaction: done
    Verifying transaction: done
    Executing transaction: done
    #
    # To activate this environment, use
    #
    #     $ conda activate oldgeek-study
    #
    # To deactivate an active environment, use
    #
    #     $ conda deactivate
    
    (base) cynthia@192 ~ %
    
    ```
    

### 查看环境列表：conda env list

```
(base) coder@192 ~ % conda env list
# conda environments:
#
                         /Applications/JupyterLab.app/Contents/Resources/jlab_server
base                  *  /Users/coder/opt/miniconda3
oldgeek-study            /Users/coder/opt/miniconda3/envs/oldgeek-study

```

### 引申知识

- Step1: 创建虚拟环境时安装包：requests、numpy 环境名称：coder-study

```
conda create -n coder-study requests numpy

```

- Step2: 在Step1创建的环境上还想继续安装包：scripy

```
conda install -n coder-study scipy

```

### 启动新创建环境：oldgeek-study

```
(base) coder@192 ~ % conda activate oldgeek-study
(oldgeek-study) coder@192 ~ %

```

### 新创建环境中安装所需包：oldgeek-study

- 安装网络HTTP包：rquests，悲剧安装失败

```
(oldgeek-study) coder@192 ~ % conda install requests
Collecting package metadata (current_repodata.json): done
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Solving environment: failed with repodata from current_repodata.json, will retry with next repodata source.
Collecting package metadata (repodata.json): done
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Solving environment: | 
Found conflicts! Looking for incompatible packages.
This can take several minutes.  Press CTRL-C to abort.
failed                                                                                                                   

UnsatisfiableError: The following specifications were found to be incompatible with each other:

Output in format: Requested package -> Available versions

```

- 在conda创建的环境中也可以使用pip安装，执行命令：pip install requests
    
- pip 是一个Python包管理工具，主要是用于安装 PyPI 上的软件包。
    

```
(oldgeek-study) coder@192 ~ % pip install requests
Collecting requests
  Using cached requests-2.26.0-py2.py3-none-any.whl (62 kB)
Collecting certifi>=2017.4.17
  Downloading certifi-2021.10.8-py2.py3-none-any.whl (149 kB)
     |████████████████████████████████| 149 kB 164 kB/s 
Collecting urllib3<1.27,>=1.21.1
  Downloading urllib3-1.26.7-py2.py3-none-any.whl (138 kB)
     |████████████████████████████████| 138 kB 67 kB/s 
Collecting idna<4,>=2.5
  Downloading idna-3.3-py3-none-any.whl (61 kB)
     |████████████████████████████████| 61 kB 16 kB/s 
Collecting charset-normalizer~=2.0.0
  Downloading charset_normalizer-2.0.7-py3-none-any.whl (38 kB)
Installing collected packages: urllib3, idna, charset-normalizer, certifi, requests
Successfully installed certifi-2021.10.8 charset-normalizer-2.0.7 idna-3.3 requests-2.26.0 urllib3-1.26.7

```

使用pip安装成功，那我们用conda list查看安装情况

```
(oldgeek-study) coder@192 ~ % conda list
# packages in environment at /Users/coder/opt/miniconda3/envs/oldgeek-study:
#
# Name                    Version                   Build  Channel
bzip2                     1.0.8                h1de35cc_0  
ca-certificates           2021.10.26           hecd8cb5_2  
certifi                   2020.6.20          pyhd3eb1b0_3  
libcxx                    12.0.0               h2f01273_0  
libffi                    3.3                  hb1e8313_2  
ncurses                   6.3                  hca72f7f_0  
openssl                   1.1.1l               h9ed2024_0  
pip                       21.2.4          py310hecd8cb5_0  
python                    3.10.0               h88f2d9e_1  
readline                  8.1                  h9ed2024_0  
setuptools                58.0.4          py310hecd8cb5_0  
sqlite                    3.36.0               hce871da_0  
tk                        8.6.11               h7bc2e8c_0  
tzdata                    2021e                hda174b7_0  
wheel                     0.37.0             pyhd3eb1b0_1  
xz                        5.2.5                h1de35cc_0  
zlib                      1.2.11               h1de35cc_3  
(oldgeek-study) cynthia@192 ~ % pip list
Package            Version
------------------ ---------
certifi            2021.10.8
charset-normalizer 2.0.7
idna               3.3
pip                21.2.4
requests           2.26.0
setuptools         58.0.4
urllib3            1.26.7
(oldgeek-study) cynthia@192 ~ %

```

- 悲剧，没有查到，用conda安装的包，conda都能进行管理，因为我们使用pip安装的，所以查看不到，没关系, 我们用pip list可以继续查看，能看到吧。**自己管理自己的东西，别人管理的与我何关**
    
    ```
    (oldgeek-study) coder@192 pycharm % pip list
    Package                       Version
    ----------------------------- ---------
    anyio                         3.3.4
    appnope                       0.1.2
    ...
    requests                      2.26.0
    
    ```
    
- 安装包: 科学计算包：NumPy
    

```
(oldgeek-study) coder@192 ~ % conda install numpy
Collecting package metadata (current_repodata.json): done
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Solving environment: failed with repodata from current_repodata.json, will retry with next repodata source.
Collecting package metadata (repodata.json): done
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Solving environment: | 
Found conflicts! Looking for incompatible packages.
This can take several minutes.  Press CTRL-C to abort.
failed                                                                                                                   

UnsatisfiableError: The following specifications were found
to be incompatible with the existing python installation in your environment:

Specifications:

  - numpy -> python[version='>=2.7,<2.8.0a0|>=3.6,<3.7.0a0|>=3.7,<3.8.0a0|>=3.8,<3.9.0a0|>=3.9,<3.10.0a0|>=3.5,<3.6.0a0']

Your python: python=3.10

If python is on the left-most side of the chain, that's the version you've asked for.
When python appears to the right, that indicates that the thing on the left is somehow
not available for the python version you are constrained to. Note that conda will not
change your python version to a different minor version unless you explicitly specify
that.

```

悲剧：没有安装成功，我们太新潮了，python3.10刚出来，numpy尚未来的及对python3.10的支持，所以直接安装挂了。

**建议：**

- 学习了解新功能，可以安装新版本
- **生产环境：切换新版本一定要注意，要经过仔细测试，无问题后才可以在生产切换，切勿未经测试，直接切换，酿成重大生产事故。**

### 退出新环境：输入exit

```
(oldgeek-study) coder@192 ~ % exit
Saving session...
...copying shared history...
...saving history...truncating history files...
...completed.

[进程已完成]

```

### 删除环境：conda remove -n \[环境名称\] --all

```
(oldgeek-study) coder@192 ~ % conda remove -n oldgeek-study --all

CondaEnvironmentError: cannot remove current environment. deactivate and run conda remove again

```

## **速查宝典**

- 官方

### 查看帮助和版本

| 命令  | 说明  |
| --- | --- |
| conda | 查看命令列表 |
| conda \[子命令\] -h 栗子：conda list -h | 查看子命令帮助信息 |
| conda -V | 查看版本号 |
| conda info | 查看配置信息 |
| conda |     |

### 环境相关

| 命令  | 说明  |
| --- | --- |
| conda create -n \[env_name\] | 创建环境 |
| conda create -n \[env_name\] python=3.8 | 创建环境并安装Python指定版本 |
| conda create -n \[env_name\] python=3.8 dumpy | 创建环境并安装Python指定版本并安装其他包 |
| conda remove -n \[env_name\] --all | 移除环境 |
| conda activate \[env_name\] | 进入环境 |
| 环境内直接输入：exit | 退出环境 |
| conda create --name new\_env\_name --clone base\_env\_name | 克隆环境 |
| conda env export --file \[文件名字.yml\] --name \[env_name\] 栗子：conda env export --file coder-base.yml --name coder-base | 导出环境的包列表 |
| conda env create -f \[文件名字.yml\] conda env create -f coder-base.yml | 基于导出的yml文件创建新环境 |

### 日常命令

| 命令  | 说明  |
| --- | --- |
| conda install \[package_name\] | 安装包 |
| caonda list | 查看已安装列表 |
| conda search \[package_name\] | 搜索待安装包信息 |
| conda update \[package_name\] | 更新包 |
| conda remove \[package_name\] | 删除包 |
| conda clean -t | 直接清除被缓存包 |
| conda clean -y -a | 直接清除索引缓存、未使用缓存包 |

### 通道相关

| 命令  | 说明  |
| --- | --- |
| conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/ conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/ conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/ conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/ | 更换源：栗子是清华大学的通道 |
| conda config --show channels | 查看已安装通道 |
| conda config --remove-key channels | 恢复默认通道 |
| conda update \[package_name\] | 更改通道 |
| conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/ | 删除某个通道 |

### **华山论剑：conda & pip**

* * *

Command reference

- https://docs.conda.io/projects/conda/en/latest/commands.html

| 命令  | Conda | Pip | Virtualenv |
| --- | --- | --- | --- |
| 安装包 | `conda install $PACKAGE_NAME` | `pip install $PACKAGE_NAME` | X   |
| 更新包 | `conda update --name $ENVIRONMENT_NAME $PACKAGE_NAME` | `pip install --upgrade $PACKAGE_NAME` | X   |
| 更新管理器 | `conda update conda` | Linux/macOS: `pip install -U pip` Win: `python -m pip install -U pip` | X   |
| 卸载包 | `conda remove --name $ENVIRONMENT_NAME $PACKAGE_NAME` | `pip uninstall $PACKAGE_NAME` | X   |
| 创建环境 | `conda create --name $ENVIRONMENT_NAME python` | X   | `cd $ENV_BASE_DIR; virtualenv $ENVIRONMENT_NAME` |
| 进入环境 | `conda activate $ENVIRONMENT_NAME`* | X   | `source $ENV_BASE_DIR/$ENVIRONMENT_NAME/bin/activate` |
| 退出环境 | `conda deactivate` | X   | `deactivate` |
| 搜寻可用包 | `conda search $SEARCH_TERM` | `pip search $SEARCH_TERM` | X   |
| 从指定通道安装包 | `conda install --channel $URL $PACKAGE_NAME` | `pip install --index-url $URL $PACKAGE_NAME` | X   |
| 显示已安装包 | `conda list --name $ENVIRONMENT_NAME` | `pip list` | X   |
| 获取已安装包 | `conda list --export` | `pip freeze` | X   |
| 查看环境列表 | `conda info --envs` | X   | Install virtualenv wrapper, then `lsvirtualenv` |
| 安装包 | `conda install pip` | `pip install conda` | X   |
| 安装Python指定版本 | `conda install python=x.x` | X   | X   |
| 卸载Python | `conda update python`* | X   |     |

## **参考资料**

- 官网
    
- https://docs.conda.io/en/latest/
    
- 用户指南
    
- https://docs.conda.io/projects/conda/en/latest/user-guide/index.html
    
- 安装
    
- -https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html
    
- 命令速查
    
- https://docs.conda.io/projects/conda/en/latest/commands.html
    
- 精简版下载和安装
    
- https://docs.conda.io/en/latest/miniconda.html