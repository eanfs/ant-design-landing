---
order: 0
title: 
  zh-CN: 开发指南
  en-US: Introduce
---



## 开发前必读

- 开发文档阅读说明
- 区分三种类型access_token


## 开发文档阅读说明

- 所有的接口需使用HTTPS协议、JSON数据格式、UTF8编码。接口说明格式如下：

> 请求方式：GET/POST（HTTPS）
>
> 请求地址：https://open.nextxx.com/openapi/oauth/token
> ...
>
> 请求包体：
> ...
>
> 参数说明：
> ...
> 
> 权限说明：
> ...
>
> 返回结果：
> ...
>
> 参数说明：
> ...


## 区分两种类型access_token

- 在第三方应用开发提供的接口中，会涉及到三种类型的access_token。下面表格对这三类token的定义及使用场景进行说明，开发者应在不同场景中选择对应的token：

| 类型 |  说明   |  使用场景                                           |
| -------- | -------------------------------------------- | -------- |
| `第三方应用的token` | 以suite_id（第三方应用ID）、suite_secret（第三方应用密钥）换取suite_access_token，代表第三方应用的身份 | 用于获取第三方应用的预授权码，获取授权企业信息等。说明文档参考 获取第三方应用凭证| 
| `授权企业的token`  | 企业安装第三方应用后，第三方服务商以企业的corpid、永久授权码来获取access_token | 用于操作授权企业相关接口，如通讯录管理，消息推送等。说明文档参考 获取企业凭证 |
| `服务商的token | ` | 以corpid（服务商CorpID）、provider_secret（服务商密钥）换取provider_access_token，代表的是服务商的身份 | 用于服务商级别的接口调用，比如登录授权、推广二维码等（暂未开放） |
