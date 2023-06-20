# 04.crontab 命令
crontab 是用来让使用者在固定时间或固定间隔执行程序之用，换句话说，也就是类似使用者的时程表。

-u user 是指设定指定 user 的时程表，这个前提是你必须要有其权限(比如说是 root)才能够指定他人的时程表。如果不使用 -u user 的话，就是表示设定自己的时程表。

# 表达式
![image](https://user-images.githubusercontent.com/1142820/144744467-722ee0f2-673d-4738-8648-374773dca083.png)

# 列子
```bash
* * * * * /bin/ls
每一分钟执行一次 /bin/ls：

0 6-12/3 * 12 * /usr/bin/backup
在 12 月内, 每天的早上 6 点到 12 点，每隔 3 个小时 0 分钟执行一次 /usr/bin/backup：
```
