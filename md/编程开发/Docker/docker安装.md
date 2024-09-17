### 海外服务器

#### 非大陆Docker安装

```
wget -qO- get.docker.com | bash

```

#### 卸载Docker

```
sudo apt-get purge docker-ce docker-ce-cli containerd.io

```
```
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd

```

#### 非大陆Docker-compose安装

```
 sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

```
```
sudo chmod +x /usr/local/bin/docker-compose

```

查看版本

```
docker-compose --version

```

### 大陆服务器

#### 国内机安装docker

```
curl -sSL https://get.daocloud.io/docker | sh

```

#### 国内机安装docker-compose

```
curl -L https://get.daocloud.io/docker/compose/releases/download/v2.1.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

```

#### 卸载docker

```
sudo apt-get remove docker docker-engine
rm -fr /var/lib/docker/
```