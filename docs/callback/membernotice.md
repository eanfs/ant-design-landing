---
order: 3
category:
  zh-CN: 回调接口
  en-US: Callback
title: 
  zh-CN: 员工通知事件
  en-US: MemberCallback
---

## 成员通知事件

### 新增成员事件 
请求方式：POST（HTTPS）
请求地址： https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

>请求包体：

```xml
<xml>
    <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
    <AuthCorpId><![CDATA[wxf8b4f85f3a794e77]]></AuthCorpId>
    <InfoType><![CDATA[create_user]]></InfoType>
    <TimeStamp>1403610513</TimeStamp>
    <UserID><![CDATA[df2938472934782427434874973]]></UserID>
    <Name><![CDATA[张三]]></Name>
    <Mobile><![CDATA[15913215421]]></Mobile>
    <Position><![CDATA[产品经理]]></Position>
    <Gender>1</Gender>
    <Email><![CDATA[zhangsan@nextxx.com]]></Email>
    <Avatar><![CDATA[http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3WJ6DSZUfiakYe37PKnQhBIeOQBO4czqrnZDS79FH5Wm5m4X69TBicnHFlhiafvDwklOpZeXYQQ2icg/0]]></Avatar>
    <Signature><![CDATA[020-3456788]]></Signature>
    <GroupId>2</GroupId>
    <GroupName><![CDATA[张三]]></GroupName>
</xml>
```
>参数说明：


|参数 | 说明|
| -------- | -------------------------------------------- |
|SuiteId | 第三方应用ID|
|AuthCorpId | 授权企业的CorpID|
|InfoType | 固定为create_user|
|TimeStamp | 时间戳|
|UserID | 成员UserID|
|Name | 成员名称|
|Mobile | 手机号码|
|Position | 职位信息。长度为0~64个字节|
|Gender | 性别。1表示男性，2表示女性 |
|Email | 邮箱 |
|Status | 激活状态：1=激活或关注， 2=禁用， 4=未激活 已激活代表已激活NexT+或已关注微工作台|
|Avatar | 头像url |
|GroupId | 加入的团队ID |
|GroupName | 加入的团队名称 |

### 更新成员事件
>请求方式：POST（HTTPS）
>请求地址： https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

>请求包体：

```xml
<xml>
    <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
    <AuthCorpId><![CDATA[wxf8b4f85f3a794e77]]></AuthCorpId>
    <InfoType><![CDATA[update_user]]></InfoType>
    <TimeStamp>1403610513</TimeStamp>
    <UserID><![CDATA[df2938472934782427434874973]]></UserID>
    <Name><![CDATA[张三]]></Name>
    <Mobile><![CDATA[15913215421]]></Mobile>
    <Position><![CDATA[产品经理]]></Position>
    <Gender>1</Gender>
    <Email><![CDATA[zhangsan@nextxx.com]]></Email>
    <Avatar><![CDATA[http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3WJ6DSZUfiakYe37PKnQhBIeOQBO4czqrnZDS79FH5Wm5m4X69TBicnHFlhiafvDwklOpZeXYQQ2icg/0]]></Avatar>
    <Signature><![CDATA[020-3456788]]></Signature>
    <GroupId>2</GroupId>
    <GroupName><![CDATA[张三]]></GroupName>
</xml>
```

>参数说明：

|参数 | 说明|
| -------- | -------------------------------------------- |
|SuiteId | 第三方应用ID|
|AuthCorpId | 授权企业的CorpID|
|InfoType | 固定为update_user|
|TimeStamp | 时间戳|
|UserID | 成员UserID|
|Name | 成员名称|
|Mobile | 手机号码|
|Position | 职位信息。长度为0~64个字节|
|Gender | 性别。1表示男性，2表示女性 |
|Email | 邮箱 |
|Status | 激活状态：1=激活或关注， 2=禁用， 4=未激活 已激活代表已激活NexT+或已关注微工作台|
|Avatar | 头像url |
|GroupId | 加入的团队ID |
|GroupName | 加入的团队名称 |

### 删除成员事件
>请求方式：POST（HTTPS）
>请求地址： https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

>请求包体：
```xml
<xml>
    <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
    <AuthCorpId><![CDATA[wxf8b4f85f3a794e77]]></AuthCorpId>
    <InfoType><![CDATA[delete_user]]></InfoType>
    <TimeStamp>1403610513</TimeStamp>
    <UserID><![CDATA[df2938472934782427434874973]]></UserID>
    <Name><![CDATA[张三]]></Name>
    <Mobile><![CDATA[15913215421]]></Mobile>
    <Position><![CDATA[产品经理]]></Position>
    <Gender>1</Gender>
    <Email><![CDATA[zhangsan@nextxx.com]]></Email>
    <Avatar><![CDATA[http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3WJ6DSZUfiakYe37PKnQhBIeOQBO4czqrnZDS79FH5Wm5m4X69TBicnHFlhiafvDwklOpZeXYQQ2icg/0]]></Avatar>
    <Signature><![CDATA[020-3456788]]></Signature>
    <GroupId>2</GroupId>
    <GroupName><![CDATA[张三]]></GroupName>
</xml>
```
参数说明：

|参数 | 说明|
| -------- | -------------------------------------------- |
|SuiteId | 第三方应用ID|
|AuthCorpId | 授权企业的CorpID|
|InfoType | 固定为change_contact|
|TimeStamp | 时间戳|
|ChangeType | 固定为delete_user|
|UserID | 变更信息的成员UserID|


### 成员加入团队事件 
请求方式：POST（HTTPS）
请求地址： https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

>请求包体：

```xml
<xml>
    <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
    <AuthCorpId><![CDATA[wxf8b4f85f3a794e77]]></AuthCorpId>
    <InfoType><![CDATA[user_join_group]]></InfoType>
    <TimeStamp>1403610513</TimeStamp>
    <UserID><![CDATA[df2938472934782427434874973]]></UserID>
    <Name><![CDATA[张三]]></Name>
    <Mobile><![CDATA[15913215421]]></Mobile>
    <Position><![CDATA[产品经理]]></Position>
    <Gender>1</Gender>
    <Email><![CDATA[zhangsan@nextxx.com]]></Email>
    <Avatar><![CDATA[http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3WJ6DSZUfiakYe37PKnQhBIeOQBO4czqrnZDS79FH5Wm5m4X69TBicnHFlhiafvDwklOpZeXYQQ2icg/0]]></Avatar>
    <Signature><![CDATA[020-3456788]]></Signature>
    <GroupId>2</GroupId>
    <GroupName><![CDATA[张三]]></GroupName>
</xml>
```
>参数说明：


|参数 | 说明|
| -------- | -------------------------------------------- |
|SuiteId | 第三方应用ID|
|AuthCorpId | 授权企业的CorpID|
|InfoType | 固定为create_user|
|TimeStamp | 时间戳|
|UserID | 成员UserID|
|Name | 成员名称|
|Mobile | 手机号码|
|Position | 职位信息。长度为0~64个字节|
|Gender | 性别。1表示男性，2表示女性 |
|Email | 邮箱 |
|Status | 激活状态：1=激活或关注， 2=禁用， 4=未激活 已激活代表已激活NexT+或已关注微工作台|
|Avatar | 头像url |
|GroupId | 加入的团队ID |
|GroupName | 加入的团队名称 |


### 成员退出团队事件
>请求方式：POST（HTTPS）
>请求地址： https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

>请求包体：
```xml
<xml>
    <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
    <AuthCorpId><![CDATA[wxf8b4f85f3a794e77]]></AuthCorpId>
    <InfoType><![CDATA[user_exit_group]]></InfoType>
    <TimeStamp>1403610513</TimeStamp>
    <UserID><![CDATA[df2938472934782427434874973]]></UserID>
    <Name><![CDATA[张三]]></Name>
    <Mobile><![CDATA[15913215421]]></Mobile>
    <Position><![CDATA[产品经理]]></Position>
    <Gender>1</Gender>
    <Email><![CDATA[zhangsan@nextxx.com]]></Email>
    <Avatar><![CDATA[http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3WJ6DSZUfiakYe37PKnQhBIeOQBO4czqrnZDS79FH5Wm5m4X69TBicnHFlhiafvDwklOpZeXYQQ2icg/0]]></Avatar>
    <Signature><![CDATA[020-3456788]]></Signature>
    <GroupId>2</GroupId>
    <GroupName><![CDATA[张三]]></GroupName>
</xml>
```
参数说明：

|参数 | 说明|
| -------- | -------------------------------------------- |
|SuiteId | 第三方应用ID|
|AuthCorpId | 授权企业的CorpID|
|InfoType | 固定为user_exit_group|
|TimeStamp | 时间戳|
|UserID | 变更信息的成员UserID|
|GroupId | 团队ID |
