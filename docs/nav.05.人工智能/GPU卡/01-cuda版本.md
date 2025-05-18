# 01.Cuda与GPU显卡驱动版本关系

# 1.常说的cuda版本是什么

我们常说的cuda指的是 nvidia cuda toolkit 软件开发包，而不是不是GPU驱动。
相应的，cuda版本也即CUDA工具包的版本，而不是显卡驱动版本，请注意~~
运行cuda应用程序需要有两个前提：
- 硬件：支持cuda的显卡
- 软件：与cuda toolkit兼容的显卡驱动程序

cuda每个版本都对应一个最低版本的显卡驱动程序
也就是说，cuda程序是向后兼容的，针对特定版本的 CUDA 编译的应用程序将继续在后续（以后）驱动程序版本上工作。
例如cuda10.x 和cuda11.x对显卡驱动的要求如下：

![](/images/cuda-01.png)

![](/images/cuda-02.png)

# 2.怎么选择cuda版本呢？

查看显卡型号，然后再查看该型号显卡的产品型录中关于cuda的约束。
例如买的是A10显卡，[官方产品文档](https://www.nvidia.cn/content/dam/en-zz/Solutions/Data-Center/a10/pdf/A10-Product-Brief.pdf)的软件规格项中有详细说明。

![](/images/cuda-03.png)

如果我们的程序需要运行在多种型号的GPU上（通常是这样），那就需要查看各个GPU的文档，选择一个公共的的CUDA版本， 否则开发和运维都比较苦逼，需要维护不通版本的程序、还有一套CI。

# 3.驱动和cuda环境安装完毕，使用nvidia-smi查看一下。
```bash
[xueliang.wu@dev-asr-zhuanyong-001 ~]$: nvidia-smi
Tue Mar 14 23:34:03 2023       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 470.42.01    Driver Version: 470.42.01    CUDA Version: 11.4     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA GeForce ...  Off  | 00000000:82:00.0 Off |                  N/A |
| 29%   28C    P8     8W / 250W |      0MiB / 11178MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
[xueliang.wu@dev-asr-zhuanyong-001 ~]$: 
```

# 4.其他资料
[显卡和cuda版本、cuda驱动对应关系](https://raychiu.blog.csdn.net/article/details/121649361?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-121649361-blog-124540449.pc_relevant_landingrelevant&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-121649361-blog-124540449.pc_relevant_landingrelevant&utm_relevant_index=1)