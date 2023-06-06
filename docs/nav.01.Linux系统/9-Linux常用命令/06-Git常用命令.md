# 06-Git常用命令

## 1.如何删除本地分支
```bash
git branch -d <分支名称>
```

## 2.查看远程分支列表
```bash
$ git branch -a
• master
dev
remotes/origin/HEAD -> origin/master
remotes/origin/master
remotes/origin/dev
```

## 3.删除远程 git 分支

但是要删除远程仓库中的分支，使用 git branch 命令是不起作用的。要删除远程 git 分支，还需要使用 git push 命令，如下语法所示：
```bash
$ git push origin --delete dev

• [deleted]         dev
$ git branch -a
• master
dev
remotes/origin/HEAD -> origin/master
remotes/origin/master
```

## 4.查看分支的创建人
将branch_A 替换成你想查看的分支的名字
```bash
git for-each-ref --format='%(committerdate) %09 %(authorname) %09 %(refname)' | sort -k5n -k2M -k3n -k4n|grep branch_A
```
