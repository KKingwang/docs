# 在Mac上通过screen连接串口设备

---

**1. 确认设备和驱动**

- 将设备通过USB转串口线连接到Mac电脑。

- 某些设备可能需要安装驱动，如常见的USB转串口芯片（如CP210x、FTDI）驱动。可以从设备厂商或芯片厂商官网下载驱动并安装。

- 建议先连接串口线，再接通串口设备（如传感器、开发板等）电源，这样可以确保设备安全。

**2. 查找设备路径**

- 打开终端，输入以下命令来查看当前连接的串口设备：

```bash
ls /dev/tty.*
```

你会看到类似 /dev/tty.usbserial-xxxx 或 /dev/tty.usbmodem-xxxx 的设备路径。

**3. 使用屏幕命令连接**

- 使用macOS自带的 screen 命令来连接串口设备：

```bash
screen /dev/tty.usbserial-xxxx 波特率
```

例如，如果设备路径为 /dev/tty.usbserial-1420 且波特率为 9600，命令如下：

```bash
screen /dev/tty.usbserial-1420 9600
```

**4. 退出连接**

- 连接完成后，按下 Ctrl + A，然后按 K，再按 Y 确认退出 screen。