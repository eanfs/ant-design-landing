---
order: 2
category:
  zh-CN: 应用授权
  en-US: Guide
title: 
  zh-CN: 获取预授权码
  en-US: PreAuthcode
---

## 获取预授权码
该API用于获取预授权码。预授权码用于企业授权时的第三方服务商安全验证。

请求方式：GET（HTTPS）
请求地址： https://open.nextxx.cn/openapi/oauth/pre-auth-code?suite_access_token=SUITE_ACCESS_TOKEN

> 参数说明：

| 参数 | 是否必须 | 说明 |
| --------   | ------ | ---------------------------------------------- |
| suite_access_token | 是 | 第三方应用access_token,最长为512字节 |

> 返回结果：
```json
{
    "errorCode":0 ,
    "errorMessage":"ok" ,
    "preAuthCode":"Cx_Dk6qiBE0Dmx4EmlT3oRfArPvwSQ-oa3NL_fwHM7VI08r52wazoZX2Rhpz1dEw",
    "expiresIn":1200
}
```

> 参数说明：

| 参数 | 说明 |
| --------   | ---------------------------------------------- |
| preAuthCode | 预授权码,最长为512字节 |
| expiresIn | 有效期 |