---
order: 1
category:
  zh-CN: 回调接口
  en-US: Callback
title: 
  zh-CN: 推送Suite Ticket
  en-US: SuiteTicketCallback
---

推送suite_ticket
企业微信服务器会定时（每十分钟）推送ticket。ticket会实时变更，并用于后续接口的调用。
请求方式：POST（HTTPS）
请求地址：https://127.0.0.1/suite/receive?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

请求包体：

    <xml>
        <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
        <InfoType> <![CDATA[suite_ticket]]></InfoType>
        <TimeStamp>1403610513</TimeStamp>
        <SuiteTicket><![CDATA[asdfasfdasdfasdf]]></SuiteTicket>
    </xml>
参数说明：

参数	说明
SuiteId	第三方应用的SuiteId
InfoType	suite_ticket
TimeStamp	时间戳
SuiteTicket	Ticket内容，最长为512字节