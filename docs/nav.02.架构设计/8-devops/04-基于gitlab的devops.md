# 04.基于GitLab的devops实践

Devops肯定很多人都听说过，但是很多人不知道什么是Devops，以及如何去实践。其实DevOps是一种文化理念、工具与实践的结合，目的是更快更可靠地向用户持续交付价值。其中最重要的是文化，文化要求Dev和Ops团队责任共担，目标一致，也要求整个团队持续学习，抱着成长的心态，Continuously Everything；其次DevOps离不开高效的工具集，工具是自动化的基础。最后我们要在各个环节追求最佳实践，不管是工具的使用，还是团队的协作模式和沟通方法。

Microsoft的DevOps团队(Introduce the foundation pillars of DevOps: Culture and Lean Product)[https://learn.microsoft.com/en-us/training/modules/introduce-foundation-pillars-devops/) 给出devops的理解：
> DevOps is the union of people, process, and products to enable continuous delivery of value to our end users. Discover two foundation pillars of DevOps: Culture and Lean Product.

![](https://learn.microsoft.com/en-us/training/wwl/introduce-foundation-pillars-devops/media/1-2-devops.png)
理解devops的理念，可以文章[什么是 DevOps？看这一篇就够了](https://www.cnblogs.com/DevLake-DevStream/p/what-is-devops.html)

简而言之，devops就是开发、测试、构建、部署、监控形成闭环，提升软件开发的速度和质量，给用户提供更好的体验。

最近给公司部署了Gitlab，下边就基于Gitlab的devops实践分享给大家。
1. 安装Gitlab

安装Gitlab，直接按官方文档就可以.[GitLab](https://gitlab.com/)，推荐按docker方式安装，简单方便。

2. Gitlab CI/CD

官方文字：
> CI/CD is a continuous method of software development, where you continuously build, test, deploy, and monitor iterative code changes.

This iterative process helps reduce the chance that you develop new code based on buggy or failed previous versions. GitLab CI/CD can catch bugs early in the development cycle, and help ensure that the code deployed to production complies with your established code standards.

![](https://docs.gitlab.com/ee/ci/img/get_started_cicd_v16_11.png)


3. Gitlab Runner

安装好Gitlab和熟悉CI/CD之后，需要安装Gitlab Runner，Gitlab Runner是Gitlab CI/CD的运行环境，可以运行在服务器上，也可以运行在容器上。参考下边这个文章，可以快速安装Gitlab Runner和注册Gitlab runner。
[gitlab-runner 安装使用](https://www.cnblogs.com/xxred/p/11548251.html)

gitlab-runner 详细参数的中文介绍，可以参考这个文章[gitlab-Runner配置参数详](https://www.cnblogs.com/wu-wu/p/13269950.html)

下边是我注册好之后的配置文件。地址：/etc/gitlab-runner/config.toml
```toml
concurrent = 2
check_interval = 0

[session_server]
  session_timeout = 1800

[[runners]]
  name = "me-runner"
  url = "https://git.aispeech.com.cn/"
  token = "QTY5bHKCRoZ6AHVspjiM"
  executor = "docker"
  cache_dir = "/home/gitlab-runner/cache"
  [runners.custom_build_dir]
  [runners.cache]
    [runners.cache.s3]
    [runners.cache.gcs]
    [runners.cache.azure]
  [runners.docker]
    tls_verify = false
    image = "maven:3.3.9-jdk-8"
    privileged = true
    disable_entrypoint_overwrite = false
    oom_kill_disable = false
    disable_cache = false
    volumes = ["/cache","/var/run/docker.sock:/var/run/docker.sock","/data/maven/repository/:/root/.m2/repository:rw"]
    shm_size = 0
```

如果能在Gitlab CI/CD-> Runners 中看到刚刚启动的runner，就说明配置成功了。
![](./imgs/runner.png)


4. 项目添加自动构建的配置文件
添加.gitlab-ci.yml文件到项目根目录，才能自动触发构建。官方文档[Tutorial: Create and run your first GitLab CI/CD pipeline](https://docs.gitlab.com/ee/ci/quick_start/index.html)

下边是一个java项目的配置文件,里边主要包含build、test、sonar三个阶段。
```yaml
image: maven:3.3.9-jdk-8

stages:
  - build
  - test
  - sonar

build:
  stage: build
  script: mvn clean package -DskipTests

test:
  stage: test
  script: mvn clean test surefire-report:report
  only:
    - master
    - develop

sonar:
  stage: sonar
  variables:
    SONAR_USER_HOME: "${CI_PROJECT_DIR}/.sonar"  # Defines the location of the analysis task cache
    GIT_DEPTH: "0"  # Tells git to fetch all the branches of the project, required by the analysis task
  cache:
    key: "${CI_JOB_NAME}"
    paths:
      - .sonar/cache
  script:
    - mvn clean test verify sonar:sonar
  allow_failure: true
  only:
    - master
    - develop
```
