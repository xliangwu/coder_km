# 15. k8s 修改 /dev/shm大小

## 问题
/dev/shm在/etc/fstab中挂载，对应tmpfs，实际使用的是内存的空间。默认情况下，/dev/shm为物理内存大小的一半。
在Kubernetes上跑docker，发现/dev/shm太小，只有64M，想要扩容。却扩容失败

## 分析
Kubernetes不支持这操作。默认64M

## 解决方案

修改ymal配置，并将medium设置为Memory
```yaml
spec:
  volumes:
  - name: dshm
    emptyDir:
      medium: Memory
  containers:
    volumeMounts:
      - mountPath: /dev/shm
        name: dshm
```
