---
order: 2
category:
  zh-CN: 回调接口
  en-US: Callback
title: 
  zh-CN: 授权通知事件
  en-US: AuthCallback
---


### 授权成功通知

### 从NexT+应用市场发起授权时，NexT+后台会推送授权成功通知。

从第三方服务商网站发起的应用授权流程，由于授权完成时会跳转第三方服务商管理后台，因此不会通过此接口向第三方服务商推送授权成功通知。

请求方式：POST（HTTPS）
请求地址：https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

>请求包体：
```xml
    <xml>
        <SuiteId><![CDATA[nx4asffe99e54c0f4c]]></ SuiteId>
        <AuthCode><![CDATA[AUTHCODE]]></AuthCode>
        <InfoType><![CDATA[create_auth]]></InfoType>
        <TimeStamp>143410513</TimeStamp>
    </xml>
```

**服务商的响应必须在1000ms内完成，以保证用户安装应用的体验。建议在接收到此事件时，先记录下AuthCode，并立即回应NexT+，之后再做相关业务的处理。**

>参数说明：

|参数 | 说明|
| -------- | -------------------------------------------- |
|SuiteId | 第三方应用的SuiteId |
|AuthCode | 授权的auth_code,最长为512字节。用于获取企业的永久授权码。5分钟内有效|
|InfoType | create_auth |
|TimeStamp | 时间戳 |


### 变更授权通知 (暂未实现)
当授权方（即授权企业）在NexT+管理端的授权管理中，修改了对应用的授权后，NexT+服务器推送变更授权通知。
服务商接收到变更通知之后，需自行调用获取企业授权信息进行授权内容变更比对。

请求方式：POST（HTTPS） 
请求地址：https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

>请求包体：
```xml
    <xml>
        <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
        <InfoType><![CDATA[change_auth]]></InfoType>
        <TimeStamp>1403610513</TimeStamp>
        <AuthCorpId><![CDATA[wxf8b4f85f3a794e77]]></AuthCorpId>
    </xml>
```
**服务商的响应必须在1000ms内完成，以保证用户变更授权的体验。建议在接收到此事件时，立即回应NexT+，之后再做相关业务的处理。**

>参数说明：

|参数 | 说明|
| -------- | -------------------------------------------- |
| SuiteId | 第三方应用的SuiteId|
| InfoType | change_auth |
| TimeStamp | 时间戳 |
| AuthCorpId | 授权方的corpid|


### 取消授权通知 (暂未实现)

当授权方（即授权企业）在NexT+管理端的授权管理中，取消了对应用的授权托管后，NexT+后台会推送取消授权通知。

请求方式：POST（HTTPS）  
请求地址：https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

>请求包体：
```xml
    <xml>
        <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></ SuiteId>
        <InfoType><![CDATA[cancel_auth]]></InfoType>
        <TimeStamp>1403610513</TimeStamp>
        <AuthCorpId><![CDATA[wxf8b4f85f3a794e77]]></AuthCorpId>
    </xml>
```
**服务商的响应必须在1000ms内完成，以保证用户取消授权的体验。建议在接收到此事件时，立即回应NexT+，之后再做相关业务的处理。**

>参数说明：

|参数 | 说明 |
| -------- | -------------------------------------------- |
|SuiteId | 第三方应用的SuiteId |
|InfoType | cancel_auth|
|TimeStamp | 时间戳|
|AuthCorpId | 授权方企业的corpid|
