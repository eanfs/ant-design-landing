---
order: 4
category:
  zh-CN: 回调接口
  en-US: Callback
title: 
  zh-CN: 部门通知事件
  en-US: DeptCallBack
---

## 部门通知事件

### 新增部门事件
>请求方式：POST（HTTPS）  
>请求地址： https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

请求包体：
```xml
<xml>
    <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
    <AuthCorpId><![CDATA[wxf8b4f85f3a794e77]]></AuthCorpId>
    <InfoType><![CDATA[change_contact]]></InfoType>
    <TimeStamp>1403610513</TimeStamp>
    <ChangeType><![CDATA[create_party]]></ChangeType>
    <Id>2</Id>
    <Name><![CDATA[张三]]></Name>
    <ParentId><![CDATA[1]]></ParentId>
    <Order>1</Order>
</xml>
```

>参数说明：

| 参数 | 说明 |
| -------- | -------------------------------------------- |
|SuiteId | 第三方应用ID|
|AuthCorpId | 授权企业的CorpID|
|InfoType | 固定为change_contact|
|TimeStamp | 时间戳|
|ChangeType | 固定为create_party|
|Id | 部门Id|
|Name | 部门名称|
|ParentId | 父部门id|
|Order | 部门排序|
**说明： 由通讯录应用发起的新增部门触发的事件不回调给通讯录应用。**

### 更新部门事件
请求方式：POST（HTTPS）
请求地址： https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

> 请求包体：
```xml
<xml>
    <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
    <AuthCorpId><![CDATA[wxf8b4f85f3a794e77]]></AuthCorpId>
    <InfoType><![CDATA[change_contact]]></InfoType>
    <TimeStamp>1403610513</TimeStamp>
    <ChangeType><![CDATA[update_party]]></ChangeType>
    <Id>2</Id>
    <Name><![CDATA[张三]]></Name>
    <ParentId><![CDATA[1]]></ParentId>
</xml>
```
>参数说明：

| 参数 | 说明 |
| -------- | -------------------------------------------- |
| SuiteId | 第三方应用ID|
|AuthCorpId | 授权企业的CorpID |
|InfoType | 固定为change_contact |
| TimeStamp | 时间戳|
|ChangeType | 固定为update_party|
| Id | 部门Id|
| Name | 部门名称，仅当该字段发生变更时传递|
| ParentId | 父部门id，仅当该字段发生变更时传递|
**说明： 由通讯录应用发起的更新部门触发的事件不回调给通讯录应用。**

### 删除部门事件
请求方式：POST（HTTPS）
请求地址： https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

请求包体：
```xml
<xml>
    <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
    <AuthCorpId><![CDATA[wxf8b4f85f3a794e77]]></AuthCorpId>
    <InfoType><![CDATA[change_contact]]></InfoType>
    <TimeStamp>1403610513</TimeStamp>
    <ChangeType><![CDATA[delete_party]]></ChangeType>
    <Id>2</Id>
</xml>
```
>参数说明：

|参数 | 说明|
| -------- | -------------------------------------------- |
|SuiteId | 第三方应用ID|
|AuthCorpId | 授权企业的CorpID|
|InfoType | 固定为change_contact|
TimeStamp | 时间戳|
|ChangeType | 固定为delete_party|
|Id | 部门Id|
