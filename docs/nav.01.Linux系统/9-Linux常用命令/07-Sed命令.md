# 07.Sed命令

sed（stream editor）sed 会根据脚本命令来处理文本文件中的数据，这些命令要么从命令行中输入，要么存储在一个文本文件中，此命令执行数据的顺序如下：
- 每次仅读取一行内容；
- 根据提供的规则命令匹配并修改数据。注意，sed 默认不会直接修改源文件数据，而是会将数据复制到缓冲区中，修改也仅限于缓冲区中的数据；
- 将执行结果输出。
  
    当一行数据匹配完成后，它会继续读取下一行数据，并重复这个过程，直到将文件中所有数据处理完毕。

## sed语法
> sed [option] 'command(s)' files

## 常用参数介绍

| 选项   | 说明 |
| --    | --  |
|-n	|使用安静模式，在一般情况所有的 STDIN 都会输出到屏幕上，加入-n 后只打印被 sed 特殊处理的行 |
|-e	|多重编辑，且命令顺序会影响结果 |
|-f	|指定一个 sed 脚本文件到命令行执行 |
|-r	|Sed 使用扩展正则 |
|-i	|直接修改文档读取的内容，不在屏幕上输出 |


## sed定位

> Sed 命令在没有给定的位置时，默认会处理所有行
Sed 支持以下几种地址类型：
语法：[address1[,address2]] <指令>

| 指令 |	说明|
| --   |  -- |
|first~step	| first 指起始匹配行， step 指步长，例如： sed -n 2~5p 含义：从第二行开始匹配，隔 5 行匹配一次，即 2,7,12… |
|$	| $符表示匹配最后一行 |
|/REGEXP/	| 表示匹配正则那一行，通过//之间的正则来匹配 |
|\cREGEXPc	| 这个是表示匹配正则那一行，通过\c 和 c 之间的正则来匹配,c 可以是任一字符 |
|addr1， add2	| 定址 addr1， add2 决定用于对哪些行进行编辑。地址的形式可以是数字、正则表达式或二者的结合。如果没有指定地址， sed 将处理输入文件中的所有行。如果定址是一个数字，则这个数字代表行号，如果是逗号分隔的两个行号，那么需要处理的定址就是两行之间的范围（包括两行在内）。范围可以是数字，正则或二者组合。 |
|addr1， +N	| 从 addr1 这行到往下 N 行匹配，总共匹配 N+1 行 |
|addr1， ~N	| 将匹配addr1和addr1后面的行，直到输入行号为N的倍数的下一行 |

## sed正则表达式
[Sed正则表达式](https://www.yiibai.com/sed/sed_regular_expressions.html)

## sed操作指令
>sed 操作命令告诉 sed 如何处理由地址指定的各输入行。如果没有指定地址， sed 就会处理输入的所有的行。

|命 令 |	说 明 |
| -- | -- |
|a\	| 在当前行后添加一行或多行 |
|c\	| 用新文本修改（替换）当前行中的文本 |
|d	| 删除行 |
|i\	| 在当前行之前插入文本 |
|h	| 把模式空间里的内容复制到暂存缓存区 |
|H	| 把模式空间里的内容追加到暂存缓存区 |
|g	| 取出暂存缓冲区里的内容，将其复制到模式空间，覆盖该处原有内容 |
|G	| 取出暂存缓冲区里的内容，将其复制到模式空间，追加在原有内容后面 |
|l	| 列出非打印字符 |
|p	| 打印行 |
|n	| 读入下一输入行，并从下一条命令而不是第一条命令开始处理 |
|q	| 结束或退出 sed |
|r	| 从文件中读取输入行 |
|！	| 对所选行意外的所有行应用命令 |
|s  | 	用一个字符串替换另一个 |

## HelloWord

测试文本
```bash
[xueliang.wu@dev-asr-zhuanyong-001 ~/data]$: cat a.txt 
1) A Storm of Swords, George R. R. Martin, 1216 
2) The Two Towers, J. R. R. Tolkien, 352 
3) The Alchemist, Paulo Coelho, 197 
4) The Fellowship of the Ring, J. R. R. Tolkien, 432 
5) The Pilgrimage, Paulo Coelho, 288 
6) A Game of Thrones, George R. R. Martin, 864
```

1. sed删除命令
```bash
[xueliang.wu@dev-asr-zhuanyong-001 ~/data]$: sed '2d' a.txt 
1) A Storm of Swords, George R. R. Martin, 1216 
3) The Alchemist, Paulo Coelho, 197 
4) The Fellowship of the Ring, J. R. R. Tolkien, 432 
5) The Pilgrimage, Paulo Coelho, 288 
6) A Game of Thrones, George R. R. Martin, 864

[xueliang.wu@dev-asr-zhuanyong-001 ~/data]$: sed '/Paulo Coelho/d' a.txt 
1) A Storm of Swords, George R. R. Martin, 1216 
2) The Two Towers, J. R. R. Tolkien, 352 
4) The Fellowship of the Ring, J. R. R. Tolkien, 432 
6) A Game of Thrones, George R. R. Martin, 864
```

2. 写入w 命令
```bash
[xueliang.wu@dev-asr-zhuanyong-001 ~/data]$: sed -n '2~2w books.bak' a.txt 
[xueliang.wu@dev-asr-zhuanyong-001 ~/data]$: ls -l
total 8
-rw-rw-r-- 1 xueliang.wu xueliang.wu 267 Mar  9 22:13 a.txt
-rw-rw-r-- 1 xueliang.wu xueliang.wu 143 Mar  9 22:16 books.bak
[xueliang.wu@dev-asr-zhuanyong-001 ~/data]$: cat books.bak 
2) The Two Towers, J. R. R. Tolkien, 352 
4) The Fellowship of the Ring, J. R. R. Tolkien, 432 
6) A Game of Thrones, George R. R. Martin, 864
```

3. 转换 y 命令
```bash
[xueliang.wu@dev-asr-zhuanyong-001 ~/data]$: echo "BCDAFE" | sed 'y/ABCDEF/abcdef/' 
bcdafe
```

4. 替换命令
> [address1[,address2]]s/pattern/replacement/[flags]

```bash
[xueliang.wu@dev-asr-zhuanyong-001 ~/data]$: sed 's/,/ | /' a.txt 
1) A Storm of Swords |  George R. R. Martin, 1216 
2) The Two Towers |  J. R. R. Tolkien, 352 
3) The Alchemist |  Paulo Coelho, 197 
4) The Fellowship of the Ring |  J. R. R. Tolkien, 432 
5) The Pilgrimage |  Paulo Coelho, 288 
6) A Game of Thrones |  George R. R. Martin, 864
```

## 引用
[Sed实用功能](https://www.yiibai.com/sed/sed_useful_recipes.html)
