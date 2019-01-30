---
order: 2
category:
  zh-CN: 开发配置
  en-US: Config
title: 
  zh-CN: 配置回调服务
  en-US: Use in pro 2.x
---

## 配置回调服务

配置回调服务时，需要能同时支持HttpGet以及HttpPost两种能力，


>假定重定向访问的链接是：
>http://mail.nextxx.cn:8080/openapi/helloworld

|配置域名 | 是否正确 | 原因| 
| -------- | -------- |-------------------------------------------- |
|mail.nextxx.cn:8080 | correct | 配置域名与访问域名完全一致|
|email.nextxx.cn | error | 配置域名必须与访问域名完全一致|
|support.mail.nextxx.cn | error | 配置域名必须与访问域名完全一致|
|*.nextxx.cn | error | 不支持泛域名设置|
|mail.nextxx.cn | error | 配置域名必须与访问域名完全一致，包括端口号|

>假定配置的可信域名是 
>mail.nextxx.cn

|访问链接 | 是否正确 | 原因 |
| -------- | -------- |-------------------------------------------- |
|https://mail.nextxx.cn/openapi/helloworld | correct | 配置域名与访问域名完全一致 |
|http://mail.nextxx.cn/openapi/redirect | correct | 配置域名与访问域名完全一致，与协议头/链接路径无关|
|https://exmail.nextxx.cn/openapi/helloworld | error | 配置域名必须与访问域名完全一致|