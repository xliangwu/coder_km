# 05-NVIDIA显卡的型号

大家应该知道显卡分N卡和A卡，这个N卡指的是英伟达（NVIDIA），A卡之前是ATI，后来被AMD收购了，现在的A卡指的就是AMD显卡。

## nvidia型号介绍

![](/images/nvidia-gpu.png)

1. 前面这个GTX表示是英伟达的一个系列名称，全称叫GeForce GTX，GTX定位高

端显卡系列，从低到高依次GS/GT/ GTX，从20系列开始开头变成RTX了，排名从低到高就变成了GS/GT/ GTX/RTX。

2. 这里的10表示是第10代显卡，如果是GTX960它就是第9代，GTX2080就是20代，RTX3080就是第30代，这个数字肯定是越大越好，类似于CPU。

3. 80表示性能的高低，这个数字非常重要！通常1-4定位为同系里的低端、5-6为中端、789为高端，这里要注意，低代系列的高端显卡并不一定就比高代系列的中低端显卡差，比如GTX980就比GTX1050要强很多。还有就是同系同代显卡即使这个数字差不多但性能可能相差很远，比如GTX1060和GTX1050，只看型号给人感觉它们应该是差不多的两个显卡，但实际上GTX1060差不多能有GTX1050两倍的性能！

4. Ti表示显卡的后缀，代表是加强版的意思，同型号带TI的要比不带Ti的性能更强。还有一种后缀叫Max-Q，这个版本的显卡是针对笔记本设计的，其体积更小，功耗降低了近50%，但性能也下降了15%左右，这对于笔记本来说是真是福音，当然了这是官方宣称的数据，但有网友自己测试过功耗实际降低了也就是20-30%左右的样子。

## 常见的N卡型号
![](/images/nvidia-gpu-category.png)
价格:[Nvadia Tesla T4 V100 A10 A40 A100 GPU深度计算加速显卡 Tesla V100 32G](https://item.jd.com/56735960113.html#crumb-wrap)

GPU各个卡的参数对比：
![](/images/nvidia-gpu-params.jpg)

## 架构代号
| 版本      | 系列号 | 显卡型号  |
| ----------- | ----------- |
| 麦克斯韦 Maxwell（CUDA 6~CUDA 11）      | SM50 or SM_50, compute_50       | Tesla/Quadro M 系列 | 
| 麦克斯韦 Maxwell（CUDA 6~CUDA 11）      | SM52 or SM_52, compute_52       | Quadro M6000 , GeForce 900, GTX-970, GTX-980, GTX Titan X | 
| 麦克斯韦 Maxwell（CUDA 6~CUDA 11）      | SM53 or SM_53, compute_53       | egra (Jetson) TX1 / Tegra X1, Drive CX, Drive PX, Jetson Nano | 
| 帕斯卡 Pascal (CUDA 8 ~今)              | SM60 or SM_60, compute_60       | Quadro GP100, Tesla P100, DGX-1 (Generic Pascal) |
| 帕斯卡 Pascal (CUDA 8 ~今)              | SM61 or SM_61, compute_61       | GTX 1080, GTX 1070, GTX 1060, GTX 1050, GTX 1030, Titan Xp, Tesla P40, Tesla P4, Discrete GPU on the NVIDIA Drive PX2 |
| 伏特 Volta (CUDA 9 ~今)                 | SM70 or SM_70, compute_70       | DGX-1 with Volta, Tesla V100, GTX 1180 (GV104), Titan V, Quadro GV100 |
| 伏特 Volta (CUDA 9 ~今)                 | SM70 or SM_70, compute_70       | DGX-1 with Volta, Tesla V100, GTX 1180 (GV104), Titan V, Quadro GV100 |
| 图灵Turing                              | SM75 or SM_75, compute_75       | GTX/RTX Turing – GTX 1660 Ti, RTX 2060, RTX 2070, RTX 2080, Titan RTX, Quadro RTX 4000, Quadro RTX 5000, Quadro RTX 6000, Quadro RTX 8000, Quadro T1000/T2000, Tesla T4 |
| 安培Ampere                               | SM80 or SM_80, compute_80       | NVIDIA DGX-A100 |
| 安培Ampere                               | SM86 or SM_86, compute_86       | Tesla GA10x, RTX Ampere – RTX 3080, GA102 – RTX 3090, RTX A6000, RTX A40 |

## 相关文章
- [GPU性能测试](https://www.autodl.com/docs/gpu_perf/AutoDL)
- [GPU 参数查询](https://www.techpowerup.com/gpu-specs/)
- [NVIDIA GPU的架构代号](https://blog.csdn.net/shaojie_wang/article/details/121117277)
- [英伟达产品系列分类、架构、数据中心GPU所有型号及参数汇总](https://www.zhihu.com/tardis/zm/art/671412359?source_id=1005)
