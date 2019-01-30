---
order: 2
category:
  zh-CN: 开发配置
  en-US: Config
title: 
  zh-CN: 获取访问用户身份
  en-US: Use in pro 2.x
---

## 获取访问用户身份
请求方式：GET（HTTPS）
请求地址：https://qyapi.weixin.nextxx.cn/openapi/service/getuserinfo3rd?access_token=SUITE_ACCESS_TOKEN&code=CODE

>参数说明：

|参数 | 必须 | 说明|
| -------- | -------- |-------------------------------------------- |
|access_token | 是 | 第三方应用的suite_access_token，参见“获取第三方应用凭证”|
|code | 是 | 通过成员授权获取到的code，最大为512字节。每次成员授权带上的code将不一样，code只能使用一次，5分钟未被使用自动过期。|

>权限说明：
>跳转的域名须完全匹配access_token对应第三方应用的可信域名，否则会返回错误。

返回结果：
```json
{
   "errcode": 0,
   "errmsg": "ok",
   "CorpId":"CORPID",
   "UserId":"USERID",
   "DeviceId":"DEVICEID",
   "user_ticket": "USER_TICKET"，
   "expires_in":7200
}
```

|参数 | 说明 |
| -------- |-------------------------------------------- |
|errcode | 返回码|
|errmsg | 对返回码的文本描述内容|
|CorpId | 用户所属企业的corpid|
|UserId | 用户在企业内的UserID，如果该企业与第三方应用有授权关系时，返回明文UserId，否则返回密文UserId|
