---
order: 1
category:
  zh-CN: 开发配置
  en-US: Config
title: 
  zh-CN: 构造网页授权链接
  en-US: Use in umi
---

##构造第三方应用oauth2链接

>如果第三方应用需要在打开的网页里面携带用户的身份信息，第一步需要构造如下的链接来获取code：
```js
https://open.weixin.nextxx.cn/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect
```

>参数说明：

|参数 | 必须 | 说明 |
| -------- | -------- |-------------------------------------------- |
|appid | 是 | 第三方应用id（即ww或wx开头的suite_id）。注意与企业的网页授权登录不同|
|redirect_uri | 是 | 授权后重定向的回调链接地址，请使用urlencode对链接进行处理 ，注意域名需要设置为第三方应用的可信域名|
|response_type | 是 | 返回类型，此时固定为：code|
|scope | 是 | 应用授权作用域。snsbase |
|state | 否 | 重定向后会带上state参数，企业可以填写a-zA-Z0-9的参数值，长度不可超过128个字节|

**企业员工点击后，页面将跳转至 redirect_uri?code=CODE&state=STATE，第三方应用可根据code参数获得企业员工的corpid与userid。code长度最大为512字节。**
