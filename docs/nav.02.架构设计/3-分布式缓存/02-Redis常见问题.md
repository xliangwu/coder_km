# 02-Redis 常见FAQ

## 1.远程服务上执行命令
```bash
$ redis-cli -h host -p port -a password
```
** -h 服务器地址 -p 端口号 -a 密码** 

## 2.查看过期时间和设置过期时间
```bash
# 不存在的 key

redis> FLUSHDB
OK

redis> TTL key
(integer) -2


# key 存在，但没有设置剩余生存时间

redis> SET key value
OK

redis> TTL key
(integer) -1


# 有剩余生存时间的 key

redis> EXPIRE key 10086
(integer) 1

redis> TTL key
(integer) 10084
```

[Redis TTL 命令](https://www.runoob.com/redis/keys-ttl.html)

