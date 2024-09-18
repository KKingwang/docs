# `macOS`长按连续输入的简单设置方法

实际上，苹果「Apple」已经在**用户系统配置项「Mac OS X User Defaults System」**里预留出了长按连续输入的设置选项。我们可以方便地**使用`defaluts`命令行工具关闭`ApplePressAndHoldEnabled`功能**，设置完成后，**注销或重启使其生效**即可。

```bash
    $ defaults write -g ApplePressAndHoldEnabled -bool false
    # or (一般第一个就可以)
    $ defaults write NSGlobalDomain ApplePressAndHoldEnabled -boolean false
```

> 代码清单：`defaults`全局`-g`设置长按连续输入
> 还原设置：将上述命令的`false`改成`true`

甚至，我们还可以做到仅针对某个应用程序单独设置：

```bash
    $ defaults write 'com.microsoft.VSCode' ApplePressAndHoldEnabled -bool false
```

> 代码清单：`defaults`针对应用程序设置长按连续输入

我们也可以通过命令来查看当前系统`ApplePressAndHoldEnabled`配置的启用情况。

```bash
    $ defaults read | grep ApplePressAndHoldEnabled
```

> 代码清单：检查`ApplePressAndHoldEnabled`启用情况

[](about:blank#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99 "参考资料")参考资料
===============================================================

*   知乎问答「20589636」：[https://www.zhihu.com/question/20589636](https://www.zhihu.com/question/20589636)