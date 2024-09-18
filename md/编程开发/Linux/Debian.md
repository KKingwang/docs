## 初始化

- 切换到root用户
```bash
sudo sudo -i
```

- 升级packages
```bash
apt update -y
```

- Debian系统比较干净，安装常用的软件
```bash
apt install wget curl sudo vim git
```

## Debian 配置网络

- 1.查看要配置的网卡名称
```bash
    ip a
```

- 2.vim 编辑器打开网络接口的配置文件 " /etc/network/interfaces "
```bash
    sudo vim /etc/network/interfaces
```

- 3.配置接口，将 ens18 改成自己对应的网络接口
```bash
    # 配置DHCP
    auto ens18
    iface ens18 inet dhcp
    allow-hotplug ens18
```
```bash
    # 配置静态IP
    auto ens18
    iface ens18 inet static
    address 192.168.1.68
    network 255.255.255.0
    gateway 192.168.1.1
    dns-nameservers 192.168.1.1 8.8.8.8
```

- 4.重启网络
```bash
    systemctl restart networking
    或者
    /etc/init.d/networking restart
```