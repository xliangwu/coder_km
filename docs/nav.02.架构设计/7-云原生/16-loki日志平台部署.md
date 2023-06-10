# 16. Loki日志平台搭建

## 1. Loki简介
Loki相比EFK/ELK，它不对原始日志进行索引，只对日志的标签进行索引，而日志通过压缩进行存储，通常是文件系统存储，所以其操作成本更低，数量级效率更高

由于Loki的存储都是基于文件系统的，所以它的日志搜索时基于内容即日志行中的文本，所以它的查询支持LogQL，在搜索窗口中通过过滤标签的方式进行搜索和查询

Loki分两部分，Loki是日志引擎部分，Promtail是收集日志端，然后通过Grafana进行展示。
>Promtail: 代理，负责收集日志并将其发送给 loki

>Loki: 日志记录引擎，负责存储日志和处理查询

> Grafana: UI 界面

![](/images/loki.png)


## 2. Loki的官方文档和安装
[Loki的官方文档](https://grafana.com/docs/loki/latest/installation)

1. [Docker方式部署](https://grafana.com/docs/loki/latest/installation/docker/)：
```bash
wget https://raw.githubusercontent.com/grafana/loki/v2.8.0/cmd/loki/loki-local-config.yaml -O loki-config.yaml
wget https://raw.githubusercontent.com/grafana/loki/v2.8.0/clients/cmd/promtail/promtail-docker-config.yaml -O promtail-config.yaml

docker run --name loki -d -v /data/loki:/mnt/config -v /data/loki_data:/data -p 3100:3100 grafana/loki:2.8.0 -config.file=/mnt/config/loki-config.yaml

docker run --name promtail -d -v /data/promtail:/mnt/config -v /home/xw80329/apps:/apps -v /etc/localtime:/etc/localtime --link loki grafana/promtail:2.8.0 -config.file=/mnt/config/promtail-config.yaml

```

2. [Docker-Compose部署](https://grafana.com/docs/loki/latest/installation/docker/)

下载promtail和loki的默认配置文件：
```bash
wget https://raw.githubusercontent.com/grafana/loki/master/cmd/loki/loki-local-config.yaml
wget https://raw.githubusercontent.com/grafana/loki/main/clients/cmd/promtail/promtail-local-config.yaml

```

```yarml
[root@pool1 loki]# tree
.
├── image
│   ├── grafana.tar.gz
│   ├── loki-2.4.tar.gz
│   └── promtail-2.4.tar.gz
├── pkgs
│   ├── docker-19.03.9.tgz
│   └── InstallDocker.py
└── yaml
    └── docker-compose.yaml
[root@pool1 loki]# vi yaml/docker-compose.yaml
version: "3"

services:
  loki:
    container_name: loki
    image: grafana/loki:2.4.0
    restart: always
    ports:
      - "3100:3100"
    volumes:
      - /opt/loki/conf:/etc/loki
      - /etc/localtime:/etc/localtime
    command: -config.file=/etc/loki/loki-local-config.yaml
    networks:
      - loki

  promtail:
    container_name: promtail
    image: grafana/promtail:2.4.0
    restart: always
    depends_on:
      - loki
    volumes:
      - /var/log:/var/log
      - /opt/promtail/conf:/etc/promtail
      - /etc/localtime:/etc/localtime
    command: -config.file=/etc/promtail/promtail-local-config.yaml
    networks:
      - loki

  grafana:
    container_name: grafana
    image: grafana/grafana:latest
    restart: always
    depends_on:
      - loki
      - promtail
    ports:
      - "3200:3000"
    volumes:
      - /etc/localtime:/etc/localtime
    networks:
      - loki
      
networks:
  loki:
    driver: bridge

```

启动容器 docker-compose up -d
```bash
[root@pool1 loki]# docker-compose up -d
Creating loki ... done
Creating promtail ... done
Creating grafana  ... done
[root@pool1 yaml]# docker-compose ps
  Name                Command               State           Ports         
--------------------------------------------------------------------------
grafana    /run.sh                          Up      0.0.0.0:3000->3000/tcp
loki       /usr/bin/loki -config.file ...   Up      0.0.0.0:3100->3100/tcp
promtail   /usr/bin/promtail -config. ...   Up                            
```

## 3. Grafana配置loki

** 添加Grafana的loki datasource. 
![](/images/loki_datasource.png)

查询日志：
![](https://semaik.gitee.io/images/pasted-263.png)

详细Loki语法，可以参考官网手册[LogQL: Log query language](https://grafana.com/docs/loki/latest/logql/).

建议所有资料查询官网。[Grafana Loki documentation](https://grafana.com/docs/loki/latest/)