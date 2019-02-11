---
order: 1
category:
  zh-CN: 应用授权
  en-US: Guide
title: 
  zh-CN: 获取第三方应用凭证
  en-US: SuiteToken
---

## 获取第三方应用凭证

### 该API用于获取第三方应用凭证（suite_access_token）。

由于第三方服务商可能托管了大量的企业，其安全问题造成的影响会更加严重，故API中除了合法来源IP校验之外，还额外增加了suite_ticket作为安全凭证。
获取suite_access_token时，需要suite_ticket参数。suite_ticket由NexT+后台定时推送给“指令回调URL”，每十分钟更新一次，见推送suite_ticket。
suite_ticket实际有效期为30分钟，请永远使用最新接收到的suite_ticket。
通过本接口获取的suite_access_token有效期为2小时，开发者需要进行缓存，不可频繁获取。

请求方式：POST（HTTPS）  
请求地址： https://open.nextxx.cn/openapi/oauth/suite-token
>
> 请求包体：
```json
{
    "suiteId":"demodcf07cad2000c" ,
    "suiteSecret": "demo_secret", 
    "suiteTicket": "demo_suite_ticket-CGYJ3_NhYexMyw" 
}
```
>
> 参数说明：

| 参数 | 是否必须 | 说明 |
| --------    | -------------------------------------------- | -------- |
|suiteId     | 是 | 应用id|
|suiteSecret | 是 | 应用secret|
|suiteTicket | 是 | NexT+后台推送的ticket|

> 返回结果：
```json
{
    "errorCode":0 ,
    "errorMessage":"ok" ,
    "suite_access_token":"61W3mEpU66027wgNZ_MhGHNQDHnFATkDa9-2llMBjUwxRSNPbVsMmyD-yq8wZETSoE5NQgecigDrSHkPtIYA",
    "expiresIn":7200
}
```
> 参数说明：

| 参数 | 说明 |
| -------- | -------------------------------------------- |
|suite_access_token | 第三方应用access_token,最长为512字节 |
