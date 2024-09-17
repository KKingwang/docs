# OpenWrt编译

本文章讲述如何使用Ubuntu编译OpenWrt，建议使用Ubuntu 22.04或者Ubuntu 24.04进编译。

```
    注意：

    1.不要用 root 用户进行编译

    2.国内用户编译前最好准备好梯子

    3.默认登陆IP 192.168.1.1 密码 password
```
---
## 1.安装编译环境依赖
- 适用于 Ubuntu 24.04 的现代化软件包，其中包含 Python 3.12，但不包含 python3-distutils：（OpenWrt main/master 于 2024 年 4 月发布）
```
    sudo apt update
    sudo apt install build-essential clang flex bison g++ gawk \
    gcc-multilib g++-multilib gettext git libncurses5-dev libssl-dev \
    python3-setuptools rsync swig unzip zlib1g-dev file wget
```

- 为 Ubuntu 22.04 设置（使用较早的 Python 3.xx）：)
```
    sudo apt update
    sudo apt install build-essential clang flex bison g++ gawk \
    gcc-multilib g++-multilib gettext git libncurses-dev libssl-dev \
    python3-distutils python3-setuptools rsync swig unzip zlib1g-dev file wget
```

- 原文：https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem

## 2.下载源代码
- 打开科学上网工具，最好全局！以下源码二选一下载，也可以使用其他团队的源码！
```
    git clone https://github.com/openwrt/openwrt       # 官方版本

    git clone https://github.com/coolsnowwolf/lede     # lede版本
```

## 3.选择OpenWrt版本（可跳过）
- 查看版本
```
    git tag
```

- 指定版本，红色部分位版本号
```
    git checkout v23.05.4
```

- 查询内核版本所在的小版本  
教程：https://www.right.com.cn/forum/thread-8349978-1-1.html <br>
实例：https://github.com/openwrt/openwrt/commits/master/include/kernel-6.6

- 切换到内核版本为6.6.40
```
    git checkout b4f1deab9041583e7c350df4a490f6c8d999614b
```
## 3.添加插件或主题
- 在 package/ 下，建立一个自定义的文件夹

- 把 passwa11 的官方代码库 git clone 下来 
```
    git clone https://github.com/xiaorouji/openwrt-passwall
```

- make menuconfig 时，系统会自动扫描 package下的文件夹中的 Makefile，然后把找到的 Makefile集中，这样就能看到自己的 Passwall 了。

- 教程：https://www.bilibili.com/video/BV1854y1W7fu?t=1352.2

## 4.更新并拷贝源码
```
    ./scripts/feeds update -a && ./scripts/feeds install -a
```

## 5.定制 OpenWrt 系统
- 开openwrt配置面板
```
    make menuconfig
```

- **如果需要重新配置**
```
    rm -rf ./tmp && rm -rf .config
    make menuconfig
    make V=s -j$(nproc)
```

## 6.下载 dll 库 （-j 后面是线程数）（可跳过）
- 下载dl库，V=s 显示任务详细情况
```
    make -j8 download V=s                                      
```

## 7.编译并记录日志（-j 后面是线程数）
- 开始编译并用tee记录输出日志文件保存在 ./openwrt-make.log
```
    make V=s -j8 | tee ./openwrt-make.log
```

- 如果编译失败使用 rm -rf 删除 .log 后重新运行编译程序 
```
    rm -rf ./openwrt-make.log && make V=s -j8 | tee ./openwrt-make.log
```

- 用cat命令查找日志中的错误
```
    cat ~/openwrt-make.log | grep failed
    cat ~/openwrt-make.log | grep ERROR:
```

- 删除编译目录/bin和/build_dir目录中的文件
```
    make clean
```

- 除了删除编译目录之外还删除编译工具目录，删除/bin和/build_dir目录的中的文件(make clean)以及/staging_dir、/toolchain、/tmp和/logs中的文件，一般在更换CPU架构的情况下才操作。
```
    make dirclean
```

- 编译完成后输出路径：openwrt/bin/targets

---
## 备注
#### 编译 passwall 报错
- 在 ./scripts/feeds install -a 操作之后替换 golang 为 1.22.x 版本
```
    rm -rf feeds/packages/lang/golang
    git clone https://github.com/sbwml/packages_lang_golang -b 22.x feeds/packages/lang/golang
```

#### OpenWrt 看门狗
- openwrt自带ddns看门狗脚本的，直接在定时任务添加以下cron就行了
```
    * * * * * /usr/bin/wireguard_watchdog
```

#### 查看内核版本
- 查看内核
```
    cat /proc/version
```
## 链接
OpenWrt官网：https://openwrt.org/ <br>
清华镜像站：https://mirror.tuna.tsinghua.edu.cn/help/openwrt/