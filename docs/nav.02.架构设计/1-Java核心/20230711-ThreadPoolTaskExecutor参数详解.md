# 02.JNA中的回调

## 简介

什么是callback呢？简单点说callback就是回调通知，当我们需要在某个方法完成之后，或者某个事件触发之后，来通知进行某些特定的任务就需要用到callback了。
最有可能看到callback的语言就是javascript了，基本上在javascript中，callback无处不在。为了解决callback导致的回调地狱的问题，ES6中特意引入了promise来解决这个问题。
为了方便和native方法进行交互，JNA中同样提供了Callback用来进行回调。JNA中回调的本质是一个指向native函数的指针，通过这个指针可以调用native函数中的方法，一起来看看吧。

## JNA中的Callback
```java
public interface Callback {
    interface UncaughtExceptionHandler {
        void uncaughtException(Callback c, Throwable e);
    }

    String METHOD_NAME = "callback";

    List<String> FORBIDDEN_NAMES = Collections.unmodifiableList(
            Arrays.asList("hashCode", "equals", "toString"));
}

```

所有的Callback方法都需要实现这个Callback接口。Callback接口很简单，里面定义了一个interface和两个属性。
先来看这个interface,interface名字叫做UncaughtExceptionHandler,里面有一个uncaughtException方法。这个interface主要用于处理JAVA的callback代码中没有捕获的异常。


## callback的定义
因为JNA中的callback实际上映射的是native中指向函数的指针。首先看一下在struct中定义的函数指针：
```c
struct _functions {
  int (*open)(const char*,int);
  int (*close)(int);
};
```

在这个结构体中，定义了两个函数指针，分别带两个参数和一个参数。

对应的JNA的callback定义如下：
```java
public class Functions extends Structure {
  public static interface OpenFunc extends Callback {
    int invoke(String name, int options);
  }
  public static interface CloseFunc extends Callback {
    int invoke(int fd);
  }
  public OpenFunc open;
  public CloseFunc close;
}

```
有了对应的callback函数，就可以直接跟C/C++ so通信。
## 最佳实践
1. 根据C/C++的头文件，直接生成对应的java文件
2. 如果涉及到callback函数，自定义callback类，并主动管理这些callback类，不能自动交给JVM gc，否则容易出现callback收不到消息。
【备注】最近开发一个程序，需要跟C提供的so通信，发现没有主动管理callback对象，这些对象会被jvm自动回收掉，导致so库已经回调，但是java没有收到通知。也没有任何报错信息。

## 引用
1. [java-jna](https://github.com/ddean2009/learn-java-base-9-to-20/tree/master/java-jna)
2. [Callbacks, Function Pointers and Closures](https://github.com/java-native-access/jna/blob/master/www/CallbacksAndClosures.md)

