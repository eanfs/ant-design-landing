---
order: 0
category:
  zh-CN: 回调接口
  en-US: Callback
title: 
  zh-CN: 概述
  en-US: CallbackIntro
---

概述
<<<<<<< HEAD
在发生授权、通讯录变更、ticket变化等事件时，企业微信服务器会向应用的“指令回调URL”推送相应的事件消息。消息结构体将使用创建应用时的EncodingAESKey进行加密（特别注意, 在第三方回调事件中使用加解密算法，receiveid的内容为suiteid），请参考接收消息解析数据包。

本章节的回调事件，服务商在收到推送后都必须直接返回字符串 “success”，若返回值不是 “success”，企业微信会把返回内容当作错误信息。
=======
在发生授权、通讯录变更、ticket变化等事件时，NexT+服务器会向应用的“指令回调URL”推送相应的事件消息。消息结构体将使用创建应用时的EncodingAESKey进行加密（特别注意, 在第三方回调事件中使用加解密算法，receiveid的内容为suiteid），请参考接收消息解析数据包。

本章节的回调事件，服务商在收到推送后都必须直接返回字符串 “success”，若返回值不是 “success”，NexT+会把返回内容当作错误信息。
>>>>>>> master

各个事件皆假设指令回调URL设置为：https://127.0.0.1/suite/receive

收到的数据包中ToUserName为产生事件的SuiteId，AgentID为空

各个事件的xml包仅是接收的数据包中的Encrypt参数解密后的内容说明