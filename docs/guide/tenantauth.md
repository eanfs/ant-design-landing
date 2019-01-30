---
order: 3
category:
  zh-CN: 应用授权
  en-US: Guide
title: 
  zh-CN: 设置授权配置
  en-US: TenantAuth
---

设置授权配置
该接口可对某次授权进行配置。可支持测试模式（应用未发布时）。

请求方式：POST（HTTPS）
请求地址： https://qyapi.weixin.qq.com/cgi-bin/service/set_session_info?suite_access_token=SUITE_ACCESS_TOKEN

请求包体：

{
    "pre_auth_code":"xxxxx",
    "session_info":
    {
        "appid":[1,2,3],
        "auth_type":1
    }
}
参数说明：

| 参数 | 是否必须 | 说明 |
| --------    | -------------------------------------------- | -------- |
| suite_access_token | 是 | 第三方应用access_token |
| pre_auth_code | 是 | 预授权码 |
session_info | 是 | 本次授权过程中需要用到的会话信息
appid | 否 | 允许进行授权的应用id，如1、2、3， 不填或者填空数组都表示允许授权套件内所有应用（仅旧的多应用套件可传此参数，新开发者可忽略）
auth_type | 否 | 授权类型：0 正式授权， 1 测试授权。 默认值为0。注意，请确保应用在正式发布后的授权类型为“正式授权”
返回结果：

{
    "errcode": 0,
    "errmsg": "ok"
}
参数说明：

参数 | 说明
errcode | 返回码
errmsg | 对返回码的文本描述内容