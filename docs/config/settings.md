---
order: 1
category:
  zh-CN: 开发配置
  en-US: Config
title: 
  zh-CN: 构造网页授权链接
  en-US: Use in umi
---

构造网页授权链接
构造第三方应用oauth2链接
构造企业oauth2链接
scope的特殊情况
构造第三方应用oauth2链接
如果第三方应用需要在打开的网页里面携带用户的身份信息，第一步需要构造如下的链接来获取code：

https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect
参数说明：

参数 | 必须 | 说明
appid | 是 | 第三方应用id（即ww或wx开头的suite_id）。注意与企业的网页授权登录不同
redirect_uri | 是 | 授权后重定向的回调链接地址，请使用urlencode对链接进行处理 ，注意域名需要设置为第三方应用的可信域名
response_type | 是 | 返回类型，此时固定为：code
scope | 是 | 应用授权作用域。
snsapi_base：静默授权，可获取成员的基础信息（UserId与DeviceId）；
snsapi_userinfo：静默授权，可获取成员的详细信息，但不包含手机、邮箱等敏感信息；
snsapi_privateinfo：手动授权，可获取成员的详细信息，包含手机、邮箱等敏感信息。
state | 否 | 重定向后会带上state参数，企业可以填写a-zA-Z0-9的参数值，长度不可超过128个字节
#wechat_redirect | 是 | 终端使用此参数判断是否需要带上身份信息
企业员工点击后，页面将跳转至 redirect_uri?code=CODE&state=STATE，第三方应用可根据code参数获得企业员工的corpid与userid。code长度最大为512字节。

权限说明：
使用snsapi_privateinfo的scope时，第三方应用必须有’成员敏感信息授权’的权限。

构造企业oauth2链接
如果企业需要在打开的网页里面携带用户的身份信息，第一步需要构造如下的链接来获取code参数：

https://open.weixin.qq.com/connect/oauth2/authorize?appid=CORPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&agentid=AGENTID&state=STATE#wechat_redirect
参数说明：

参数 | 必须 | 说明
appid | 是 | 企业的CorpID
redirect_uri | 是 | 授权后重定向的回调链接地址，请使用urlencode对链接进行处理
response_type | 是 | 返回类型，此时固定为：code
scope | 是 | 应用授权作用域。
snsapi_base：静默授权，可获取成员的的基础信息（UserId与DeviceId）；
snsapi_userinfo：静默授权，可获取成员的详细信息，但不包含手机、邮箱；
snsapi_privateinfo：手动授权，可获取成员的详细信息，包含手机、邮箱
注意：企业自建应用可以根据userid获取成员详情，无需使用snsapi_userinfo和snsapi_privateinfo两种scope。更多说明见scope
agentid | 否 | 企业应用的id。
当scope是snsapi_userinfo或snsapi_privateinfo时，该参数必填
注意redirect_uri的域名必须与该应用的可信域名一致。
state | 否 | 重定向后会带上state参数，企业可以填写a-zA-Z0-9的参数值，长度不可超过128个字节
#wechat_redirect | 是 | 终端使用此参数判断是否需要带上身份信息
员工点击后，页面将跳转至 redirect_uri?code=CODE&state=STATE，企业可根据code参数获得员工的userid。code长度最大为512字节。

scope的特殊情况
scope为snsapi_userinfo或snsapi_privateinfo时，必须填agentid参数，否则系统会视为snsapi_base，不会返回敏感信息。
第三方服务商配置scope为snsapi_privateinfo时，agentid所对应的应用必须有“成员敏感信息授权”的权限。“成员敏感信息授权”的开启方法为：登录服务商管理后台->标准应用服务->本地应用->进入应用->点击基本信息栏“编辑”按钮->勾选”成员敏感信息”
企业自建应用调用读取成员接口没有字段限制，可以获取包括敏感字段在内的所有信息。因此，只有第三方应用才有必要使用snsapi_userinfo或snsapi_privateinfo的scope。