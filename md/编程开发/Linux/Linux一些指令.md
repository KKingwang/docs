# 樱花frp指令：(详细教程：https://doc.natfrp.com/#/frpc/service/systemd)

*请记住后续操作中用到的 Unit 名称 是 frpc@&lt;启动参数&gt;，例如 frpc@wdnmdtoken666666:12345*

启动/停止隧道
systemctl &lt;start|stop&gt; &lt;Unit名称&gt;
例1：systemctl start frpc@tlwq09g5ojm2yxvp:979283
例2：systemctl start frpc@tlwq09g5ojm2yxvp:1138802

查看隧道状态
systemctl status &lt;Unit名称&gt;

如果您忘记了之前开启过哪些隧道，使用下面的命令可以列出当前运行中的隧道
systemctl list-units frpc@*

# screen指令：

screen -S yourname -> 新建一个叫yourname的session
然后在里面执行你要执行的程序
比如java -jar xxx.jar
然后ctrl+a+d退出会话
screen -ls -> 列出当前所有的session
screen -r yourname -> 回到yourname这个session
screen -d yourname -> 远程detach某个session
screen -d -r yourname -> 结束当前session并回到yourname这个session

### 表示关机 （halt），（表示重启 reboot）

### 下载指令：wget &lt;url&gt;

# unzip：unzip解压文件到指定目录

1、把文件解压到当前目录下
unzip test.zip

2、如果要把文件解压到指定的目录下，需要用到-d参数。
unzip -d /temp test.zip

3、解压的时候，有时候不想覆盖已经存在的文件，那么可以加上-n参数
unzip -n test.zip
unzip -n -d /temp test.zip

4、只看一下zip压缩包中包含哪些文件，不进行解压缩
unzip -l test.zip

5、查看显示的文件列表还包含压缩比率
unzip -v test.zip

6、检查zip文件是否损坏
unzip -t test.zip

7、将压缩文件test.zip在指定目录tmp下解压缩，如果已有相同的文件存在，要求unzip命令覆盖原先的文件
unzip -o test.zip -d /tmp/

压缩：zip -r 文件夹.zip 文件夹
解压：unzip 文件夹.zip -d 文件夹

# 代理网络：

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