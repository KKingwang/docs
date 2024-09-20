## 安装构建环境
> 安装最新版的 go , nodejs , npm 包 （自行下载安装）

## 构建 ui
- 进入ui目录运行以下命令安装 npm 依赖，并构建 ui ：
```bash
    # 安装 npm 依赖
    npm install

    # 编译 ui
    npm run build
```

## 构建 screego-audio 
- 进入项目根目录运行以下命令安装 Go 依赖并编译 screego-audio ：
```bash
    # 安装 Go 依赖
    go mod tidy

    # 编译项目 screego-audio
    go build -o screego main.go
```
- 这将会生成一个可执行文件 screego。

## 运行项目：
- 执行生成的二进制文件：
```bash
    ./screego
```