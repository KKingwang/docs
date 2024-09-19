## screen 指令：
```bash
    1. 新建一个叫yourname的session
    screen -S yourname
    然后在里面执行你要执行的程序
    比如java -jar xxx.jar

    2. 快捷键ctrl+a+d退出会话

    3. 列出当前所有的session
    screen -ls

    4. 回到yourname这个session
    screen -r yourname

    5. 远程detach某个session
    screen -d yourname

    6. 结束当前session并回到yourname这个session
    screen -d -r yourname
```

## 关机重启
```bash
    1. 关机（关掉电源）：
    sudo poweroff

    2. 重启系统：
    sudo reboot

    3. 立刻关机
    sudo shutdown -h now

    4. 定时关机（例如5分钟后关机）
    sudo shutdown -h +5

    5. 取消计划的关机命令：
    sudo shutdown -c
```

## 下载指令：wget <url>
```bash
    wget <url>
```

## unzip 解压文件
```bash
    1. 把文件解压到当前目录下
    unzip test.zip

    2. 如果要把文件解压到指定的目录下，需要用到-d参数。
    unzip -d /temp test.zip

    3. 解压的时候，有时候不想覆盖已经存在的文件，那么可以加上-n参数
    unzip -n test.zip
    unzip -n -d /temp test.zip

    4. 只看一下zip压缩包中包含哪些文件，不进行解压缩
    unzip -l test.zip

    5. 查看显示的文件列表还包含压缩比率
    unzip -v test.zip

    6. 检查zip文件是否损坏
    unzip -t test.zip

    7. 将压缩文件test.zip在指定目录tmp下解压缩，如果已有相同的文件存在，要求unzip命令覆盖原先的文件
    unzip -o test.zip -d /tmp/

    压缩：zip -r 文件夹.zip 文件夹
    解压：unzip 文件夹.zip -d 文件夹
```

## proxy 代理网络
```bash
    192.168.10.67
    export http_proxy=“http://192.168.10.67:10811”
    export https_proxy=“http://192.168.10.67:10811”

    export http_proxy=192.168.10.67:10811;export https_proxy=192.168.10.67:10811;export ALL_PROXY=socks5://192.168.10.67:10810

    临时设置代理：
    export http_proxy=“http://proxy-XXXXX” 
    export https_proxy=“https://proxy-XXXXX:”
    临时取消代理：
    unset http_proxy
    unset https_proxy
    查看代理： env | grep export

    echo 'export https_proxy="http://192.168.10.67:10811"' >> ~/.bashrc
    echo 'export http_proxy=$https_proxy' >> ~/.bashrc
    echo 'export ftp_proxy=$https_proxy' >> ~/.bashrc
    echo 'export proxy=$https_proxy' >> ~/.bashrc
    echo 'export HTTPS_PROXY=$https_proxy' >> ~/.bashrc
    echo 'export HTTP_PROXY=$https_proxy' >> ~/.bashrc
    echo 'export FTP_PROXY=$https_proxy' >> ~/.bashrc
    echo 'export PROXY=$https_proxy' >> ~/.bashrc
```

## scp 文件传输
```bash
    1. 从服务器上下载文件
    scp username@servername:/path/filename /var/www/local_dir（本地目录）
     例如scp root@192.168.0.101:/var/www/test.txt  把192.168.0.101上的/var/www/test.txt 的文件下载到/var/www/local_dir（本地目录）

    2. 上传本地文件到服务器
    scp /path/filename username@servername:/path   
    例如scp /var/www/test.php  root@192.168.0.101:/var/www/  把本机/var/www/目录下的test.php文件上传到192.168.0.101这台服务器上的/var/www/目录中
     
    3. 从服务器下载整个目录
    scp -r username@servername:/var/www/remote_dir/（远程目录） /var/www/local_dir（本地目录）
    例如:scp -r root@192.168.0.101:/var/www/test  /var/www/  

    4. 上传目录到服务器
    scp -r local_dir username@servername:remote_dir
    例如：scp -r test  root@192.168.0.101:/var/www/   把当前目录下的test目录上传到服务器的/var/www/ 目录
```

## lsof 查看端口占用
```bash
    1. lsof 查看端口占用语法格式：
    lsof -i:端口号

    例如查看服务器 8000 端口的占用情况：
    # lsof -i:8000
    COMMAND   PID USER   FD   TYPE   DEVICE SIZE/OFF NODE NAME
    nodejs  26993 root   10u  IPv4 37999514      0t0  TCP *:8000 (LISTEN)
```
- 原文链接🔗：https://www.runoob.com/w3cnote/linux-check-port-usage.html