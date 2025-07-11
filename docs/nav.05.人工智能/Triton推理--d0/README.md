# 12.Triton Inference Server

整个AI模型的生命周期，主要包括数据采集、数据预处理、模型训练、模型评估、模型部署/服务化以及模型监控等环节。模型推理部署和服务化是抽象的算法模型触达具体的实际业务的最后一公里。因此，模型部署是实际AI应用落地非常重要的环节。

[Triton Server](https://github.com/triton-inference-server/server)是Nvidia 发布的一个高性能推理服务框架，可以帮助开发人员高效轻松地在云端、数据中心或者边缘设备部署高性能推理服务。

Triton的入门可以参考文章 [模型推理服务化框架Triton保姆式教程](https://zhuanlan.zhihu.com/p/629336492).

接下来会通过系列文章来进行Triton Server各个模块的学习。

# 1. Triton 深入浅出

| #     | 文章  | 备注 |
| ---   | ---   | --- |
| 01    | [Triton HelloWord](./01.triton-helloworld.md)         |  Triton快速入门。通过一个示例，快速了解Triton怎么启动     |
| 02    | [Model-Repository](./02.Model-Repository.md)          |  模型结构  |
| 03    | [部署一个模型](./03.Deploy-models-using-Triton.md)     | 通过Triton快速部署一个图片识别模型 |
| 04    | [模型加载策略](./04.Model-Management.md)               | 模型加载策略|

# 2. 文章
1. [what-is-temperature](https://lukesalamone.github.io/posts/what-is-temperature/)
> Higher temperatures make the model more “creative” which can be useful when generating prose, for example. Lower temperatures make the model more “confident” which can be useful in applications like question answering.
采样参数,较高的值，如0.8会使输出更随机，而较低的值，如0.2会使其更加集中和确定性。

