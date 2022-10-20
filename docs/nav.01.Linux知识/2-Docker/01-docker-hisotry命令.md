# 2.docker history查看镜像构建过程

通过docker history查看镜像构建过程

## 命令介绍
```bash
 ~]# docker history --help
Usage:  docker history [OPTIONS] IMAGE
Show the history of an image
Options:
      --format string   Pretty-print images using a Go template
      --help            Print usage
  -H, --human           Print sizes and dates in human readable format (default true)
      --no-trunc        Don't truncate output
  -q, --quiet           Only show numeric IDs
```

## 列子
如果要让CREATED BY 列完整显示，可以加上--no-trunc 参数
```bash
~]# docker history kubeguide/tomcat-app:v1
IMAGE               CREATED             CREATED BY                                      SIZE                COMMENT
a29e200a18e9        2 years ago         /bin/sh -c #(nop) ADD dir:c5c3bddef49cbc9f...   992kB               
<missing>           2 years ago         /bin/sh -c #(nop) MAINTAINER bestme <bestm...   0B                  
<missing>           2 years ago         /bin/sh -c #(nop) CMD ["catalina.sh" "run"]     0B                  
<missing>           2 years ago         /bin/sh -c #(nop) EXPOSE 8080/tcp               0B                  
<missing>           2 years ago         /bin/sh -c set -e  && nativeLines="$(catal...   0B                  
<missing>           2 years ago         /bin/sh -c set -x   && curl -fSL "$TOMCAT_...   16.6MB              
<missing>           2 years ago         /bin/sh -c #(nop) ENV TOMCAT_TGZ_URL=https...   0B                  
<missing>           2 years ago         /bin/sh -c #(nop) ENV TOMCAT_VERSION=8.0.35     0B                  
<missing>           2 years ago         /bin/sh -c #(nop) ENV TOMCAT_MAJOR=8            0B                  
<missing>           2 years ago         /bin/sh -c set -ex  && for key in   05AB33...   114kB               
<missing>           2 years ago         /bin/sh -c apt-get update && apt-get insta...   7.18MB              
<missing>           2 years ago         /bin/sh -c {   echo 'deb http://httpredir....   172B                
<missing>           2 years ago         /bin/sh -c #(nop) ENV OPENSSL_VERSION=1.0....   0B                  
<missing>           2 years ago         /bin/sh -c #(nop) WORKDIR /usr/local/tomcat     0B                  
<missing>           2 years ago         /bin/sh -c mkdir -p "$CATALINA_HOME"            0B                  
<missing>           2 years ago         /bin/sh -c #(nop) ENV PATH=/usr/local/tomc...   0B                  
<missing>           2 years ago         /bin/sh -c #(nop) ENV CATALINA_HOME=/usr/l...   0B                  
<missing>           2 years ago         /bin/sh -c set -x  && apt-get update  && a...   163MB               
<missing>           2 years ago         /bin/sh -c #(nop) ENV JAVA_DEBIAN_VERSION=...   0B                  
<missing>           2 years ago         /bin/sh -c #(nop) ENV JAVA_VERSION=7u101        0B                  
<missing>           2 years ago         /bin/sh -c #(nop) ENV JAVA_HOME=/usr/lib/j...   0B                  
<missing>           2 years ago         /bin/sh -c {   echo '#!/bin/sh';   echo 's...   87B                 
<missing>           2 years ago         /bin/sh -c #(nop) ENV LANG=C.UTF-8              0B                  
<missing>           2 years ago         /bin/sh -c apt-get update && apt-get insta...   1.17MB              
<missing>           2 years ago         /bin/sh -c apt-get update && apt-get insta...   44.3MB              
<missing>           2 years ago         /bin/sh -c #(nop) CMD ["/bin/bash"]             0B                  
<missing>           2 years ago         /bin/sh -c #(nop) ADD file:5d8521419ad6cfb...   125MB
```
