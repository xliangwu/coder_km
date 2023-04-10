# 04-ONNX简介

Open Neural Network Exchange（ONNX，开放神经网络交换）格式，是一个用于表示深度学习模型的标准，可使模型在不同框架之间进行转移。

>ONNX是一种针对机器学习所设计的开放式的文件格式，用于存储训练好的模型。它使得不同的人工智能框架（如Pytorch, MXNet）可以采用相同格式存储模型数据并交互。 ONNX的规范及代码主要由微软，亚马逊 ，Facebook 和 IBM 等公司共同开发，以开放源代码的方式托管在Github上。目前官方支持加载ONNX模型并进行推理的深度学习框架有： Caffe2, PyTorch, MXNet，ML.NET，TensorRT 和 Microsoft CNTK，并且 TensorFlow 也非官方的支持ONNX。---维基百科.

假设一个场景：现在某组织因为主要开发用TensorFlow为基础的框架，现在有一个深度算法，需要将其部署在移动设备上，以观测变现。传统地我们需要用caffe2重新将模型写好，然后再训练参数；试想下这将是一个多么耗时耗力的过程。

此时，ONNX便应运而生，Caffe2，PyTorch，Microsoft Cognitive Toolkit，Apache MXNet等主流框架都对ONNX有着不同程度的支持。这就便于了我们的算法及模型在不同的框架之间的迁移。


## ONNX

开放式神经网络交换（ONNX）是迈向开放式生态系统的第一步，它使AI开发人员能够随着项目的发展选择合适的工具。 ONNX为AI模型提供开源格式。 它定义了可扩展的计算图模型，以及内置运算符和标准数据类型的定义。 最初的ONNX专注于推理（评估）所需的功能。 ONNX解释计算图的可移植，它使用graph的序列化格式。 它不一定是框架选择在内部使用和操作计算的形式。 例如，如果在优化过程中操作更有效，则实现可以在存储器中以不同方式表示模型。

ONNX是一个开放式规范，由以下组件组成：

- 可扩展计算图模型的定义
- 标准数据类型的定义
- 内置运算符的定义

## 引用

- [ONNX](https://zh.wikipedia.org/wiki/ONNX)
- [ONNX--跨框架的模型中间表达框架](https://zhuanlan.zhihu.com/p/41255090)
