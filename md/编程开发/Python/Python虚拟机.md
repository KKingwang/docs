# 使用方法
创建虚拟环境：
```
python -m venv [虚拟环境的名字]
```
创建完目录下就会出现对应名字的文件
然后进入对应环境的目录下的`Scripts`目录里执行`activate`激活虚拟环境
```
#激活虚拟环境
activate
activate.ps1
activate.bat
#去激活
deactivate.bat
```

## 导出库
首先使用`list`查看环境中安装了那些库文件
```
pip list
```

在使用`freeze`命令保存到`requirements.txt`中
```
pip freeze
pip freeze > requirements.txt
```
再次安装就可以部署环境了
```
pip install -r requirements.txt
```
也可以通过加入`-y`删掉所有的库
```
pip uninstall -r requirements.txt -y

```