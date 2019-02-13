---
order: 5
category:
  zh-CN: 应用授权
  en-US: Guide
title: 
  zh-CN: 获取企业凭证
  en-US: SuiteTenantToken
---

## 获取企业凭证
第三方服务商在取得企业的永久授权码后，通过此接口可以获取到企业的access_token。
获取后可通过通讯录、应用、消息等企业接口来运营这些应用。

此处获得的企业access_token与企业获取access_token拿到的token，本质上是一样的，只不过获取方式不同。获取之后，就跟普通企业一样使用token调用API接口

调用企业接口所需的access_token获取方法如下。

请求方式：POST（HTTPS）
请求地址： https://open.nextxx.cn/openapi/oauth/corp-token?suite_access_token=SUITE_ACCESS_TOKEN

>请求包体：
```json
 {
     "auth_corpid": "auth_corpid_value",
     "permanent_code": "code_value"
 }
 ```
>参数说明：

| 参数 | 是否必须 | 说明 |
| --------    | -------------------------------------------- | -------- |
|auth_corpid | 是 | 授权方corpid|
|permanent_code | 是 | 永久授权码，通过[获取企业永久授权码]获取|

>返回结果：
```json
{
    "errorCode":0 ,
    "errorMessage":"ok" ,
    "accessToken": "xxxxxx", 
    "expiresIn": 7200
}
```

>参数说明：

参数 | 说明
| --------    | -------------------------------------------- | -------- |
| accessToken | 授权方（企业）access_token,最长为512字节 |
| expiresIn | 授权方（企业）access_token超时时间 |