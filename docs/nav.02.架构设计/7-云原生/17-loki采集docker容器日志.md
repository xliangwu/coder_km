# 17-loki采集docker容器日志

如何安装Loki日志采集平台，可以参考[Loki日志平台搭建](./16-loki%E6%97%A5%E5%BF%97%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2.md)

Promtail agent默认采集的文件，可以通过配置采集任何地方的日志文件或者日志文件流。但是，在云原生架构的今天，服务部署基本都采用docker或者k8s部署，因此直接采集容器日志会更方便。
接下来就介绍下如何采集docker 容器日志。

## 2. 安装loki的docker plugin
```bash
docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions
```
详细可以参考:[Docker driver](https://grafana.com/docs/loki/latest/clients/docker-driver/)

## 3.docker配置loki日志采集

对于loki的docker plugin有两种使用方式，一种是全局配置，一种是单个pod配置。

> 全局配置

编辑daemon.json。linux下默认路径是/etc/docker/daemon.json， windows则默认是%userprofile%\.docker\daemon.json
```json
{
  "log-driver": "loki",
  "log-opts": {
    "loki-url": "http://YOUR_IP:3100/loki/api/v1/push",
    "max-size": "50m",
    "max-file": "10",    
  },
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

配置好了，重启docker。**sudo systemctl restart docker**

> 局部pod配置
```bash
docker run -d \
	--name car_dtu \
	--link loki:loki \
	--log-driver=loki \
  --log-opt loki-url="http://127.0.0.1:3100/loki/api/v1/push" \
  --log-opt loki-retries=5 \
  --log-opt loki-batch-size=1024 \
	-v /home/xw80329/apps/car_dtu:/app \
	-p 8500:8500 -p 8580:8580 -p 8581:8581 \
  jdk-runner:v1.0 --restart

```

配置好了，可以通过Grafana查看下是否有对应的日志采集到。如下图所示：
![](/images/loki2.png)



