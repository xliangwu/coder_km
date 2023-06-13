# 13.Docker 常用命令
![](/images/docker-commands.png)

## Docker全部命令
```bash
$ docker --help

管理命令:
  container   管理容器
  image       管理镜像
  network     管理网络
命令：
  attach      介入到一个正在运行的容器
  build       根据 Dockerfile 构建一个镜像
  commit      根据容器的更改创建一个新的镜像
  cp          在本地文件系统与容器中复制 文件/文件夹
  create      创建一个新容器
  exec        在容器中执行一条命令
  images      列出镜像
  kill        杀死一个或多个正在运行的容器    
  logs        取得容器的日志
  pause       暂停一个或多个容器的所有进程
  ps          列出所有容器
  pull        拉取一个镜像或仓库到 registry
  push        推送一个镜像或仓库到 registry
  rename      重命名一个容器
  restart     重新启动一个或多个容器
  rm          删除一个或多个容器
  rmi         删除一个或多个镜像
  run         在一个新的容器中执行一条命令
  search      在 Docker Hub 中搜索镜像
  start       启动一个或多个已经停止运行的容器
  stats       显示一个容器的实时资源占用
  stop        停止一个或多个正在运行的容器
  tag         为镜像创建一个新的标签
  top         显示一个容器内的所有进程
  unpause     恢复一个或多个容器内所有被暂停的进程
```

## 常用命令
1. 启动、停止、重启服务
```bash
[root@localhost ~]# service docker restart
Redirecting to /bin/systemctl restart docker.service
[root@localhost ~]# service docker stop
Redirecting to /bin/systemctl stop docker.service
[root@localhost ~]# service docker start
Redirecting to /bin/systemctl start docker.service
```
2. 拉取一个镜像，启动容器
```bash
[root@localhost ~]# docker pull centos
[root@localhost ~]# docker run -it -v /centos_dir:/docker_dir --name biodwhu-1 centos
```
-i：允许我们对容器内的 (STDIN) 进行交互
-t：在新容器内指定一个伪终端或终端
-v：是挂在宿机目录， /centos_dir 是宿机目录，/docker_dir 是当前 Docker 容器的目录，宿机目录必须是绝对的。
-p：端口映射
--name：是给容器起一个名字，可省略，省略的话 docker 会随机产生一个名字
--restart：always

3. 启动的容器列表
```bash
[root@localhost ~]# docker ps
```

4. 查看所有的容器
```bash
[root@localhost ~]# docker ps -a
```

5. 启动、停止、重启某个容器
```bash
[root@localhost ~]# docker start biodwhu-1
biodwhu-1
[root@localhost ~]# docker stop biodwhu-2
biodwhu-2
[root@localhost ~]# docker restart biodwhu-3
biodwhu-3
```

6. 查看指定容器的日志记录
```bash
[root@localhost ~]# docker logs -f biodwhu-1
```

7. 删除某个容器，若正在运行，需要先停止
```bash
[root@localhost ~]# docker rm biodwhu-1
Error response from daemon: You cannot remove a running container 2d48fc5b7c17b01e6247cbc012013306faf1e54f24651d5e16d6db4e15f92d33. Stop the container before attempting removal or use -f
[root@localhost ~]# docker stop biodwhu-1
biodwhu-1
[root@localhost ~]# docker rm biodwhu-1
biodwhu-1
```

8. 删除容器
```bash
# 删除某个容器
[root@localhost ~]# docker rm f3b346204a39

# 删除所有容器
[root@localhost ~]# docker stop $(docker ps -a -q)
[root@localhost ~]# docker rm $(docker ps -a -q)
```

9. 删除镜像
```bash
# 删除某个镜像
[root@localhost ~]# docker rmi docker.io/mysql:5.6

# 删除所有镜像
[root@localhost ~]# docker rmi $(docker images -q)

# 强制删除所有镜像
[root@localhost ~]# docker rmi -f $(docker images -q)
```

10. 删除虚悬镜像
>我们在 build 镜像的过程中，可能会产生一些临时的不具有名称也没有作用的镜像他们的名称一般都是 <none> ,我们可以执行下面的命令将其清除掉：
```bash
[root@localhost ~]# docker rmi $(docker images -f "dangling=true" -q)
# 或者
[root@localhost ~]# docker image prune -a -f
```

11. 镜像导入与导出
```bash
[root@localhost ~]# docker save a46c2a2722b9 > /var/docker/images_save/mysql.tar.gz
[root@localhost ~]# docker load -i /var/docker/images_save/mysql.tar.gz

```

12. 查看容器某个时间段的日志
```bash
docker logs -t --since="2023-02-24T00:00:01" --until "2023-02-24T23:59:01" e55099f6d5f3
  
Usage:  docker logs [OPTIONS] CONTAINER

Fetch the logs of a container

Options:
      --details        Show extra details provided to logs
  -f, --follow         Follow log output
      --since string   Show logs since timestamp (e.g. 2013-01-02T13:23:37) or relative (e.g. 42m for 42 minutes)
      --tail string    Number of lines to show from the end of the logs (default "all")
  -t, --timestamps     Show timestamps
      --until string   Show logs before a timestamp (e.g. 2013-01-02T13:23:37) or relative (e.g. 42m for 42 minutes)
```

  13. 清除镜像
  ```bash
  docker system prune -a
  ```
