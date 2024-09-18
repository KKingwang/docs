以管理员身份运行命令提示符 执行命令  

```
bcdedit /set hypervisorlaunchtype off 
```
重启，运行vm即可。  
如果想要恢复hyper启动  
```
bcdedit /set hypervisorlaunchtype auto
```
  
