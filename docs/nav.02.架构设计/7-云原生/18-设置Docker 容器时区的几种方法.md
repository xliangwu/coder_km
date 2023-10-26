# 18.设置Docker 容器时区的几种方法

## 模板
```docker
FROM xxxxxxx
 
LABEL maintainer="xueliang.wu@aispeech.com"

RUN rm -rf /etc/localtime && ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo "Asia/shanghai" > /etc/timezone

WORKDIR /opt
COPY run.sh /home/run.sh
ADD jdk-8u301-linux-x64.tar.gz /opt
ENV INFER_FRAMEWORK=lmdeploy 
ENV JAVA_HOME=/opt/jdk1.8.0_301
ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
ENV PATH=$JAVA_HOME/bin:$PATH
```

## 引用
[设置Docker 容器时区的几种方法](https://juejin.cn/post/7082670118257295391)
