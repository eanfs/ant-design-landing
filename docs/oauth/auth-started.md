---
order: 0
category:
  zh-CN: 授权登录
  en-US: OAuth
title: 
  zh-CN: 开始使用
  en-US: Getting-started
---



##NexT+OAuth2接入流程

<img class="preview-img" align="left" width="100%" alt="授权流程" description="" src="https://download.esenyun.com/resources/oauthflow.png">
图1 NexT+OAuth2流程图
使用OAuth2前须知
关于网页授权的可信域名
REDIRECT_URL中的域名，需要先配置至应用的“可信域名”，否则跳转时会提示“redirect_uri参数错误”。
要求配置的可信域名，必须与访问链接的域名完全一致。举个例子：

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