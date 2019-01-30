---
order: 2
category:
  zh-CN: 授权登录
  en-US: OAuth
title: 
  zh-CN: 获取访问用户身份
  en-US: OAuth 2 
---

获取访问用户身份
请求方式：GET（HTTPS）
请求地址：https://qyapi.weixin.qq.com/cgi-bin/service/getuserinfo3rd?access_token=SUITE_ACCESS_TOKEN&code=CODE

参数说明：

参数 | 必须 | 说明
access_token | 是 | 第三方应用的suite_access_token，参见“获取第三方应用凭证”
code | 是 | 通过成员授权获取到的code，最大为512字节。每次成员授权带上的code将不一样，code只能使用一次，5分钟未被使用自动过期。
权限说明：
跳转的域名须完全匹配access_token对应第三方应用的可信域名，否则会返回50001错误。

返回结果：
a) 当用户属于某个企业，返回示例如下：

{
   "errcode": 0,
   "errmsg": "ok",
   "CorpId":"CORPID",
   "UserId":"USERID",
   "DeviceId":"DEVICEID",
   "user_ticket": "USER_TICKET"，
   "expires_in":7200
}
参数 | 说明
errcode | 返回码
errmsg | 对返回码的文本描述内容
CorpId | 用户所属企业的corpid
UserId | 用户在企业内的UserID，如果该企业与第三方应用有授权关系时，返回明文UserId，否则返回密文UserId
<<<<<<< HEAD
DeviceId | 手机设备号(由企业微信在安装时随机生成，删除重装会改变，升级不受影响)
=======
DeviceId | 手机设备号(由NexT+在安装时随机生成，删除重装会改变，升级不受影响)
>>>>>>> master
user_ticket | 成员票据，最大为512字节。
scope为snsapi_userinfo或snsapi_privateinfo，且用户在应用可见范围之内时返回此参数。
后续利用该参数可以获取用户信息或敏感信息，参见“第三方使用user_ticket获取成员详情”。
expires_in | user_ticket的有效时间（秒），随user_ticket一起返回
b) 若用户不属于任何企业，返回示例如下：

{
   "errcode": 0,
   "errmsg": "ok",
   "OpenId":"OPENID",
   "DeviceId":"DEVICEID"
}
参数 | 说明
errcode | 返回码
errmsg | 对返回码的文本描述内容
OpenId | 非企业成员的标识，对当前服务商唯一
<<<<<<< HEAD
DeviceId | 手机设备号(由企业微信在安装时随机生成，删除重装会改变，升级不受影响)
=======
DeviceId | 手机设备号(由NexT+在安装时随机生成，删除重装会改变，升级不受影响)
>>>>>>> master
出错返回示例：

{
   "errcode": 40029,
   "errmsg": "invalid code"
}