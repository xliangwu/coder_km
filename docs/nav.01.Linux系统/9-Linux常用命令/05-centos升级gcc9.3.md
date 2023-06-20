# 05.centos升级gcc9.3
本文主要介绍怎么在CentOS 7环境下安装GCC 9.3.0，适用于部分源码包需要高版本的gcc进行编译的场景，需要准备的环境有：

## 步骤
1. 使用下面命令安装gcc、gcc-c++，若已安装则忽略此步骤
```bash
yum install -y gcc gcc-c++
```
2. 使用以下命令安装bzip2，主要用于之后自动解压安装GCC依赖，若已安装则忽略此步骤
>yum install -y bzip2
3. 下载gcc-9.3.0.tar.gz
> https://gcc.gnu.org/pub/gcc/releases/

4. 安装gcc9.3
> 选定一个目录,比如/tmp
```bash
tar -xzvf gcc-9.3.0.tar.gz
./contrib/download_prerequisites
mkdir gcc-build-9.3.0
/usr/lib/gcc/x86_64-redhat-linux/
mkdir 9.3.0
cd gcc-build-9.3.0
../gcc-9.3.0/configure --prefix=/usr/lib/gcc/x86_64-redhat-linux/9.3.0/ --enable-checking=release --enable-languages=c,c++ --disable-multilib
make && make install
```

5. 查看gcc 版本
> gcc --version

## 引用
- [安装gcc-9.3.0](https://blog.csdn.net/ncdx111/article/details/106041764)
- [记CentOS7下升级gcc到9.3.0](https://blog.csdn.net/qq_37475168/article/details/108507986?spm=1001.2101.3001.6650.4&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-4-108507986-blog-106041764.pc_relevant_recovery_v2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-4-108507986-blog-106041764.pc_relevant_recovery_v2&utm_relevant_index=5)
- [gcc-9.3.0](http://mirrors.concertpass.com/gcc/releases/gcc-9.3.0/)
