

查看Anaconda环境是否安装成功
=================================================================================

```
conda -V

```

conda创建、激活、使用、关闭、克隆 虚拟环境
=======================================================================================

```
activate        // 激活anaconda，进入base
conda create -n py310 python = 3.10         //创建名为py310，版本为3.10的python环境
conda activate py310          //激活python3.10环境，进入py310环境
python          //查看该环境下python的版本,并计入python控制台
exit ()      //退出python控制台
conda deactivate      //退出当前虚拟的环境，回到base环境中
conda create -n BBB --clone AAA   //克隆环境 本地已有一个环境AAA，若需要创建一个同样的BBB 

```
ps:
```
激活conda环境 conda activate

关闭conda环境 conda deactivate

打开终端自动进入conda环境: conda config --set auto_activate_base true

关闭打开终端自动进入conda环境: conda config --set auto_activate_base false
```
查看cuda版本
=======================================================================

```
nvcc -V

```

查看已有的虚拟环境
========================================================================

```
conda env list

```

删除虚拟环境
=====================================================================

```
conda remove -n name  --all

```

查看已安装的包
======================================================================

```
conda list      //查看已有的包
conda list numpy      //查看指定包

```

安装卸载包
====================================================================

```
conda install xxx   //安装xxx包
conda install scikit-learn=0.23.1      //eg：安装0.23.1版本的scikit-learn
conda uninstall xxx   //卸载xxx包
//这个命令时不时会出一些问题，卸载失败，就可以尝试以下两种卸载命令
conda remove XXX
pip uninstall  XXX

```

升级包
==================================================================

```
conda update xxx

```

conda缓存清理（conda报错segment fault的时候就是需要清理缓存哦）
==========================================================================================================

```
conda clean -p      //删除没有用的包
conda clean -t      //删除tar包
conda clean -y --all //删除所有的安装包及cache

```

conda下载包是通过一些chanel来访问下载的
========================================================================================

查看chanel
-----------------------------------------------------------------------

```
conda config --show

```

添加chanel
-----------------------------------------------------------------------

```
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/

```

删除chanel
-----------------------------------------------------------------------

```
conda config –remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/

```

conda搜索某个包及可安装的版本信息（以scikit-learn包为例）
----------------------------------------------------------------------------------------------------

```
conda list                    #查看目前以安装的包
conda search scikit-learn     #查看scikit-learn是否可安装

```

镜像源
==================================================================

常见镜像源
--------------------------------------------------------------------

```
http://mirrors.aliyun.com/pypi/simple/             #阿里
https://pypi.tuna.tsinghua.edu.cn/simple/          #清华
http://pypi.douban.com/simple/                     #豆瓣
http://pypi.mirrors.ustc.edu.cn/simple/            #中国科学技术大学

```

查看anaconda中已经存在的镜像源
----------------------------------------------------------------------------------

```
conda config --show channels

```

删除之前的镜像源，恢复默认状态
------------------------------------------------------------------------------

```
conda config --remove-key channels

```

添加镜像源（待验证）
-------------------------------------------------------------------------

```
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/

```

设置搜索时显示通道地址
--------------------------------------------------------------------------

```
conda config --set show_channel_urls yes

```

若不想按照上述步骤添加镜像，可使用以下命令直接指定安装时使用的镜像地址(以opencv为例)
-------------------------------------------------------------------------------------------------------------

```
conda install opencv -c https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/

```

指定源使用
--------------------------------------------------------------------

```
pip install numpy -i https://pypi.tuna.tsinghua.edu.cn/simple      //numpy在国内的站点下载爬虫中的numpy库（第三方库）


```


