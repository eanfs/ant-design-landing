---
order: 4
category:
  zh-CN: 应用授权
  en-US: Guide
title: 
  zh-CN: 获取企业永久授权码
  en-US: Permanent
---


## 获取企业永久授权码
该API用于使用临时授权码换取授权方的永久授权码，并换取授权信息、企业access_token，临时授权码一次有效。建议第三方以userid为主键，来建立自己的管理员账号。

请求方式：POST（HTTPS）  
请求地址： https://open.nextxx.cn/openapi/oauth/permanent-code?suite_access_token=SUITE_ACCESS_TOKEN

> 请求包体：
```json
{
    "auth_code": "auth_code_value"
}
```
> 参数说明：

| 参数 | 是否必须 | 说明 |
| --------    | -------------------------------------------- | -------- |
| auth_code | 是 | 临时授权码，会在授权成功时附加在redirect_uri中跳转回第三方服务商网站，或通过回调推送给服务商。|

>返回结果：
```json
{
    "errorCode":0 ,
    "errorMessage":"ok" ,
    "accessToken": "xxxxxx", 
    "expiresIn": 7200, 
    "permanentCode": "xxxx",
    "authCorpInfo": 
    {
        "corpid": "xxxx",
        "corp_name": "name",
        "corp_type": "verified",
        "corp_square_logo_url": "yyyyy",
        "corp_user_max": 50,
        "corp_agent_max": 30,
        "corp_full_name":"full_name",
        "verified_end_time":1431775834,
        "subject_type": 1,
        "corp_wxqrcode": "zzzzz",
        "corp_scale": "1-50人",
        "corp_industry": "IT服务",
        "corp_sub_industry": "计算机软件/硬件/信息服务"
      },
    "authInfo":
    {
        "agent" :
        [
            {
                "agentid":1,
                "name":"NAME",
                "round_logo_url":"xxxxxx",
                "square_logo_url":"yyyyyy",
                "appid": "demo818760xxxxxx1604eded2cf0000",
            }
        ]
    },
    "authUserInfo":
    {
        "id": "demo8ff35d8dc4xxxxxx8de2fb80000c",
        "userid":"useriddeom1",
        "name":"xxx",
        "avatar":"http://xxx"
    }
}
```

> 参数说明：

| 参数 | 说明 |
| --------    | -------------------------------------------- | -------- |
|access_token | 授权方（企业）access_token,最长为512字节|
|expiresIn | 授权方（企业）access_token超时时间|
|permanent_code | NexT+永久授权码,最长为512字节|
|auth_corp_info | 授权方企业信息|
|corpid | 授权方NexT+id|
|corp_name | 授权方企业名称|
|corp_type | 授权方企业类型，认证号：verified, 注册号：unverified|
|corp_square_logo_url | 授权方企业方形头像|
|corp_user_max | 授权方企业用户规模|
| corp_full_name | 授权方企业的主体名称(仅认证过的企业有)|
| subject_type | 企业类型，1. 企业; 2. 政府以及事业单位; 3. 其他组织, 4.团队号|
| verified_end_time | 认证到期时间|
| corp_wxqrcode | 授权企业在微工作台（原企业号）的二维码，可用于关注微工作台|
| corp_scale | 企业规模。当企业未设置该属性时，值为空|
| corp_industry | 企业所属行业。当企业未设置该属性时，值为空|
| corp_sub_industry | 企业所属子行业。当企业未设置该属性时，值为空|
| location | 企业所在地信息, 为空时表示未知 |
| auth_info | 授权信息。如果是通讯录应用，且没开启实体应用，是没有该项的。通讯录应用拥有企业通讯录的全部信息读写权限|
