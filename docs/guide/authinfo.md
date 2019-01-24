---
order: 5
category:
  zh-CN: 设计指引
  en-US: Guide
title: 
  zh-CN: 获取企业授权信息
  en-US: Authorize
---

## 获取企业授权信息  
该API用于通过永久授权码换取企业微信的授权信息。 永久code的获取，是通过临时授权码使用get_permanent_code 接口获取到的permanent_code。

请求方式：POST（HTTPS）
请求地址： https://qyapi.weixin.qq.com/cgi-bin/service/get_auth_info?suite_access_token=SUITE_ACCESS_TOKEN

> 请求包体：
>
```json
 {
     "auth_corpid": "auth_corpid_value",
     "permanent_code": "code_value"
 }
 ```
>
> 参数说明：

| 参数 | 是否必须 | 说明 |
| --------    | -------------------------------------------- | -------- |
| auth_corpid | 是 | 授权方corpid |
| permanent_code | 是 | 永久授权码，通过get_permanent_code获取 |

>返回结果：
```json
{
    "errcode":0 ,
    "errmsg":"ok" ,
    "dealer_corp_info": 
    {
        "corpid": "xxxx",
        "corp_name": "name"
    },
    "auth_corp_info": 
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
        "corp_sub_industry": "计算机软件/硬件/信息服务",
        "location":"广东省广州市"
    },
    "auth_info":
    {
        "agent" :
        [
            {
                "agentid":1,
                "name":"NAME",
                "round_logo_url":"xxxxxx",
                "square_logo_url":"yyyyyy",
                "appid":1,
                "privilege":
                {
                    "level":1,
                    "allow_party":[1,2,3],
                    "allow_user":["zhansan","lisi"],
                    "allow_tag":[1,2,3],
                    "extra_party":[4,5,6],
                    "extra_user":["wangwu"],
                    "extra_tag":[4,5,6]
                }
            },
            {
                "agentid":2,
                "name":"NAME2",
                "round_logo_url":"xxxxxx",
                "square_logo_url":"yyyyyy",
                "appid":5
            }
        ]
    }
}
```

> 参数说明：

| 参数 | 说明 |
| --------    | -------------------------------------------- | -------- |
|access_token | 授权方（企业）access_token,最长为512字节|
|expires_in | 授权方（企业）access_token超时时间|
|auth_corp_info | 授权方企业信息|
|corpid | 授权方企业微信id|
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
