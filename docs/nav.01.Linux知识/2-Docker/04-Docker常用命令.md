# 4.Docker 常用命令
![](/images/docker-cmd.png)

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
