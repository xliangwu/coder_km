# 02-常见的深度学习框架

现如今开源生态非常完善，深度学习相关的开源框架众多，为人熟知的有caffe，tensorflow，pytorch/caffe2，keras，mxnet，paddldpaddle，theano，cntk，deeplearning4j，matconvnet等。

下面是各大开源框架的一个总览。
![](/images/dp-01.jpeg)

目前最主流的主要是tensorflow2,pytorch.

## TensorFlow框架

谷歌的TensorFlow可以说是当今最受欢迎的开源深度学习框架，可用于各类深度学习相关的任务中。TensorFlow = Tensor + Flow，Tensor就是张量，代表N维数组；Flow即流，代表基于数据流图的计算。

TensorFlow是目前深度学习的主流框架，其主要特性如下所述。

TensorFlow支持Python、JavaScript、C ++、Java、Go、C＃、Julia和R等多种编程语言。
TensorFlow不仅拥有强大的计算集群，还可以在iOS和Android等移动平台上运行模型。
TensorFlow编程入门难度较大。初学者需要仔细考虑神经网络的架构，正确评估输入和输出数据的维度和数量。
TensorFlow使用静态计算图进行操作。也就是说，我们需要先定义图形，然后运行计算，如果我们需要对架构进行更改，则需要重新训练模型。选择这样的方法是为了提高效率，但是许多现代神经网络工具已经能够在学习过程中改进，并且不会显著降低学习速度。在这方面，TensorFlow的主要竞争对手是PyTorch。


## Pytorch框架

PyTorch是Facebook团队于2017年1月发布的一个深度学习框架，虽然晚于TensorFlow、Keras等框架，但自发布之日起，其受到的关注度就在不断上升，目前在GitHub上的热度已经超过Theano、Caffe、MXNet等框架。

PyTroch主要提供以下两种核心功能：

- 支持GPU加速的张量计算
- 方便优化模型的自动微分机制


PyTorch的主要优点如下:

- 简洁易懂：PyTorch的API设计相当简洁一致，基本上是tensor、autograd、nn三级封装，学习起来非常容易。
- 便于调试：PyTorch采用动态图，可以像普通Python代码一样进行调试。不同于TensorFlow，PyTorch的报错说明通常很容易看懂。
- 强大高效：PyTorch提供了非常丰富的模型组件，可以快速实现想法。

### PyTorch vs TensorFlow

PyTorch和TensorFlow的区别，可以查看下边这边文章：

[PyTorch 与 TensorFlow 怎么选？](https://cloud.tencent.com/developer/article/2084384)


## 链接
1. [8种主流深度学习框架介绍](https://zhuanlan.zhihu.com/p/438250737)
2. [如此多的深度学习框架，为什么我选择PyTorch？](https://cloud.tencent.com/developer/article/1643061)