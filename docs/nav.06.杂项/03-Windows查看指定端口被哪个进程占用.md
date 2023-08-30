# 03.Windows查看指定端口被哪个进程占用

## 查看所有端口的占用情况
```bash
netstat -ano
```

## 查看指定端口的占用情况
```bash
netstat -ano|findstr "端口号"
```
![image](https://github.com/xliangwu/coder_km/assets/1142820/b14725e2-6897-4bee-a763-78eafde0ed1b)

## 使用tasklist查看 PID 对应的进程名
```bash

tasklist|findstr "PID号"

```

## 结束进程
如果我们想结束该进程，可以在任务管理器内找到该进程，然后直接右键结束。

```bash

taskkill /F /PID PID


```
