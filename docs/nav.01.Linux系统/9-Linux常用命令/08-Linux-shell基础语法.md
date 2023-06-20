# 08.Linux Shell基础语法

## 1. Shell介绍

>Shell是一个用C语言编写的程序，它是用户使用linux的桥梁。Shell既是一种命令语言，又是一种程序设计语言。Shell是指一种应用程序，这个应用程序提供了一个界面，用户通过这个界面访问操作系统内核的服务。

本文主要以shell脚本为重心展开介绍。

Linux shell的种类有很多，目前流行的 Shell 包括 ash、bash、ksh、csh、zsh…，用户可以通过查看​​/etc/shells​​文件中的内容查看自己主机中当前有哪些种类的shell。

```bash
[root@master shell]# cat /etc/shells
/bin/sh
/bin/bash
/sbin/nologin
/usr/bin/sh
/usr/bin/bash
/usr/sbin/nologin
```

目前主要流行或者经常使用的，主要是sh、bash. bash语法和功能比sh多些。

## 2. 一个简单的shell模板
```bash
#/bin/bash
# ​#!​​：是约定标记，告诉系统这个标记需要什么解释器，即需要哪种shell

echo "Hello Word"
```

执行一个shell脚本很简单。比如：./xxx.sh bash xxx.sh


## 3. 变量
```bash
variable=value
variable='value'
variable="value"
```
*注意：​​=​​周围不能有空格*

```bash
#!/bin/bash

url=www.couragesteak.com
echo $url

name='有勇气的牛排'
echo $name

author="导演"
echo $author

echo "I am ${name}."
```
> 变量中单引号、双引号的区别
>> - 单引号​​' '​​：被单引号包围时，单引号里面是什么就输出什么。
>> - 双引号​​" "​​：双引号会解析里面的变量和命令，而不是原样输出。

### 特殊变量
| 变量 | 描述|
| -- | -- |
| $0 | 当前脚本文件名|
| $# |传递给脚本或函数测参数个数|
| $* |传递给脚本或函数的所有参数|
| $@ |传递给脚本或函数的所有参数。但被双引号包含是与@、*稍有不同|
| $! |上个命令的退出状态，或函数的返回值|
| $$ |当前Shell进程ID|

### 脚本文件或函数获取参数
```bash
#!/bin/bash

echo "参数1: $1"
echo "参数2: $2"
```

```bash
./test.sh charles 牛排
```
输出 charles 牛排


## 4. 运算符

### 算数运算符
原生bash不支持数学运算，不过可以通过expr命令实现。

### 逻辑运算符
| 运算符 | 描述 |
| ---    | --- |
| -a | 与|
| -o | 或|
| !  | 非|

### 字符串运算符
| 运算符 | 描述  | 举例 |
| --  | -- | -- |
| =   | 判断2个字符串是否相等 |  [ $a=$b ]      |
| !=  | 判断2个字符串是否不相等  | [ $a!=$b ]   |
| -z  | 判断字符串长度是否为0    | [ -z $a ]    |
| -n  | 判断字符串是否不为0     | [ -n $a ]     |
| str | 判断字符串是否为空      | [ $a ]        |

### 文件测试运算符
| 操作符  |描述 |
| -- | -- |
| -b  |判断文件是否为 块设备 文件 |
| -c  |判断文件是否为 字符设备 文件 |
| -d  |判断文件是否是 目录 |
| -f  |判断文件是否为 普通文件 |
| -g  |判断文件是否设置了 SGID 位 |
| -k  |判断文件是否设置了 粘贴位(Sticky Bit) (可理解为防删除位) |
| -p  |判断文件是否有管道 |
| -u  |判断文案是否设置了 SUID位 |
| -r  |判断文件是否可读 |
| -w  |判断文件是否可写 |
| -x  |判断文件是否可执行 |
| -s  |检测文件是否为空（文件大小是否>0） |
| -e  |检测文件(包括目录)是否存在 |

```bash
# 判断目录是否存在
FILE=/usr/local
if [ -d "$FILE" ]; then
    echo "$FILE 存在"
else
    echo "$FILE 不存在"
fi
```

## 5.流程控制

### if/elif/else
```bash
#!/bin/bash

read -p "请输入您的分数：" score

if(($score < 60));then
    echo "未及格"
elif (($score >= 60 && $score < 85));then
    echo "还不错"
else
    echo "优秀"
fi
```

### for/while/until 
思想跟主流的编程语言，比如Java、c都类似。
```bash
#!/bin/bash

printf "计算1~n数字之和\n"
read -p "请输入n：" n

i=0
while ((i <= n)) 
do
    ((sum += i)) 
    ((i++))
done

echo "结果为：$sum"
```

## 6.函数定义

语法：
```bash
function function_name () {
    //TODO
    //some code
}

#调用
function_name
```

## 7. 字符串操作

### 模式匹配
|Operator | Meaning |
| -- | -- |
| ${variable#pattern} | If the pattern matches the beginning of the variable's value, delete the shortest part that matches and return the rest.|
| ${variable##pattern} | If the pattern matches the beginning of the variable's value, delete the longest part that matches and return the rest.|
| ${variable%pattern} | If the pattern matches the end of the variable's value, delete the shortest part that matches and return the rest.|
| ${variable%%pattern} | If the pattern matches the end of the variable's value, delete the longest part that matches and return the rest.|
| ${variable/pattern/string} |  |
| ${variable//pattern/string} | The longest match to pattern in variable is replaced by string. In the first form, only the first match is replaced. In the second form, all matches are replaced. If the pattern is begins with a #, it must match at the start of the variable. If it begins with a %, it must match with the end of the variable. If string is null, the matches are deleted. If variable is @ or *, the operation is applied to each positional parameter in turn and the expansion is the resultant list.a |

path=/home/cam/book/long.file.name
```bash
xw80329@dev001:~$ path=/home/cam/book/long.file.name
xw80329@dev001:~$ echo $path
/home/cam/book/long.file.name
xw80329@dev001:~$ echo ${path##/*/}
long.file.name
xw80329@dev001:~$ echo ${path#/*/}
cam/book/long.file.name
xw80329@dev001:~$ echo $path
/home/cam/book/long.file.name
xw80329@dev001:~$ echo ${path%.*}
/home/cam/book/long.file
xw80329@dev001:~$ echo ${path%%.*}
/home/cam/book/long
xw80329@dev001:~$ 
```

### 字符串替换
[Shell字符串截取](http://c.biancheng.net/view/1120.html)
[linux shell 字符串操作详解 （长度，读取，替换，截取，连接，对比，删除，位置 ）](https://www.cnblogs.com/gaochsh/p/6901809.html)

## 资料
[Shell编程](http://c.biancheng.net/shell/program/)
