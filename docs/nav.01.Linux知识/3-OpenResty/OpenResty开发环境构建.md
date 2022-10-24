# 1. OpenResty开发环境构建


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

## 源代码
```lua
--request header
local headers = ngx.req.get_headers()
ngx.say("headers begin", "<br/>")
ngx.say("Host : ", headers["Host"], "<br/>")
ngx.say("user-agent : ", headers["user-agent"], "<br/>")
ngx.say("user-agent : ", headers.user_agent, "<br/>")


-- local ok, md5_or_err = ngx.run_worker_thread("default_pool", "md5", "md5")
-- ok, md5_or_err = ngx.run_worker_thread("default_pool", "md5", "md5")
-- ngx.say(ok, " : ", md5_or_err)

-- ok, md5_or_err = ngx.run_worker_thread("default_pool", "md5", "md5")
-- ngx.say(ok, " : ", md5_or_err)

ngx.sleep(20)
ngx.say('ok')

-- end header
ngx.say("post args end", "<br/>")
ngx.say("<br/>")
```

# 测试
curl http://localhost:28004/api
