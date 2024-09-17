docsify-terminal-block 🖥️
==========================

这是一个 docsify 插件，用于在文档中添加美观的终端块，同时支持“复制到剪贴板”功能。

截图
-----
[![Example](https://camo.githubusercontent.com/8ec771e1fc38c786ff5bbfcb50be2884b4081dc1255dd57d26440a873f685e05/68747470733a2f2f692e696d6775722e636f6d2f495a644f744c682e706e67)](https://camo.githubusercontent.com/8ec771e1fc38c786ff5bbfcb50be2884b4081dc1255dd57d26440a873f685e05/68747470733a2f2f692e696d6775722e636f6d2f495a644f744c682e706e67)

用法
-----

在 Markdown 文件中添加 terminal 标签即可创建终端块。

```
    ```terminal
    npm run start
    ```
```

你还可以通过添加前缀（如 `$` 或 `>`）来改变终端行的样式：
```
    ```terminal
    $|npm run start
    >|npm run start
    ```
```

此外，还可以通过在前缀后添加 `warning`、`info`、`error` 或 `success` 来更改行的状态：
```
    ```terminal
    $|warning|npm run build
    >|info|npm run start
    >|error|npm run start
    >|success|npm run start
    ```
```

实例
-----------
```
    ```terminal
    npm run start
    $|npm run start
    $|warning|npm run build
    >|info|npm run start
        |...
    >|error|npm run start
    >|success|npm run start
    
    warning|npm run build
    ```
```
---
```terminal
npm run start
$|npm run start
$|warning|npm run build
>|info|npm run start
    |...
>|error|npm run start
>|success|npm run start

warning|npm run build
```

---
原文 ： https://github.com/dolanmiu/docsify-terminal-block

