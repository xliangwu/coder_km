# 2. OpenResty开发环境构建


## Dockerfile
```bash
FROM openresty/openresty:1.21.4.1-centos7 

# 安装 lua 依赖模块: template
RUN luarocks install lua-resty-template

# 把编译后的结果放在 /fe 文件夹下

COPY src /app/src

COPY conf/nginx.conf /usr/local/openresty/nginx/conf/nginx.conf

EXPOSE 28003
```

## Docker 构建
```bash
docker build -t openresty1.21.4.1:v0.1.1 .
docker run -v /home/xueliang.wu/openresty:/app -p 28004:8000 openresty1.21.4.1:v0.1.1
```

## Nginx 配置
```xml
worker_processes 1;
error_log error.log;
events {
    worker_connections 1024;
}
http {
    lua_package_path '/app/src/?.lua;;';

    server {
        listen 8000;

        location / {
            default_type text/html;
            content_by_lua '
                ngx.say("<p>hello world!</p>")
            ';
        }

        # test api
        location /api {  
            default_type "text/html";  
            #nginx内容处理  
            content_by_lua_file /app/src/test_request.lua;  
        }
    }
}

```

# 测试
curl http://localhost:28004/api
