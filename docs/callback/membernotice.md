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
    <InfoType><![CDATA[change_contact]]></InfoType>
    <TimeStamp>1403610513</TimeStamp>
    <ChangeType><![CDATA[create_user]]></ChangeType>
    <UserID><![CDATA[zhangsan]]></UserID>
    <Name><![CDATA[张三]]></Name>
    <Department><![CDATA[1,2,3]]></Department>
    <IsLeaderInDept><![CDATA[1,0,0]]></IsLeaderInDept>
    <Mobile><![CDATA[15913215421]]></Mobile>
    <Position><![CDATA[产品经理]]></Position>
    <Gender>1</Gender>
    <Email><![CDATA[zhangsan@gzdev.com]]></Email>
    <Avatar><![CDATA[http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3WJ6DSZUfiakYe37PKnQhBIeOQBO4czqrnZDS79FH5Wm5m4X69TBicnHFlhiafvDwklOpZeXYQQ2icg/0]]></Avatar>
    <Alias><![CDATA[zhangsan]]></Alias>
    <Telephone><![CDATA[020-3456788]]></Telephone>
    <ExtAttr>
        <Item>
        <Name><![CDATA[爱好]]></Name>
        <Type>0</Type>
        <Text>
            <Value><![CDATA[旅游]]></Value>
        </Text>
        </Item>
        <Item>
        <Name><![CDATA[卡号]]></Name>
        <Type>1</Type>
        <Web>
            <Title><![CDATA[NexT+]]></Title>
            <Url><![CDATA[https://open.nextxx.cn]]></Title>
        </Web>
        </Item>
    </ExtAttr>
</xml>
```
>参数说明：

> 
|参数 | 说明|
| -------- | -------------------------------------------- |
|SuiteId | 第三方应用ID|
|AuthCorpId | 授权企业的CorpID|
|InfoType | 固定为change_contact|
|TimeStamp | 时间戳|
|ChangeType | 固定为create_user|
|UserID | 成员UserID|
|Name | 成员名称|
|Department | 更新后成员所在部门列表，仅返回该应用有查看权限的部门id|
|IsLeaderInDept | 表示所在部门是否为上级，0-否，1-是，顺序与Department字段的部门逐一对应|
|Mobile | 手机号码，仅通讯录管理应用可获取|
|Position | 职位信息。长度为0~64个字节，仅通讯录管理应用可获取|
|Gender | 性别。1表示男性，2表示女性
|Email | 邮箱，仅通讯录管理应用可获取
|Status | 激活状态：1=激活或关注， 2=禁用， 4=未激活 已激活代表已激活NexT+或已关注微工作台|
|Avatar | 头像url。注：如果要获取小图将url最后的”/0”改成”/100”即可，仅通讯录管理应用可获取
|Alias | 成员别名
|Telephone | 座机，仅通讯录管理应用可获取
|ExtAttr | 扩展属性，仅通讯录管理应用可获取
|Type | 扩展属性类型: 0-本文 1-网页
|Text | 文本属性类型，扩展属性类型为0时填写
|Value | 文本属性内容
|Web | 网页类型属性，扩展属性类型为1时填写
|Title | 网页的展示标题
|Url | 网页的url
说明： 对用户具有通讯录基本信息只读权限的应用只返回基本字段。由通讯录应用发起的新增成员触发的事件不回调给通讯录应用。

### 更新成员事件
>请求方式：POST（HTTPS）
>请求地址： https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

>请求包体：
```xml
<xml>
    <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
    <AuthCorpId><![CDATA[wxf8b4f85f3a794e77]]></AuthCorpId>
    <InfoType><![CDATA[change_contact]]></InfoType>
    <TimeStamp>1403610513</TimeStamp>
    <ChangeType><![CDATA[update_user]]></ChangeType>
    <UserID><![CDATA[zhangsan]]></UserID>
    <NewUserID><![CDATA[zhangsan001]]></NewUserID>
    <Name><![CDATA[张三]]></Name>
    <Department><![CDATA[1,2,3]]></Department>
    <IsLeaderInDept><![CDATA[1,0,0]]></IsLeaderInDept>
    <Mobile><![CDATA[15913215421]]></Mobile>
    <Position><![CDATA[产品经理]]></Position>
    <Gender>1</Gender>
    <Email><![CDATA[zhangsan@gzdev.com]]></Email>
    <Status>1</Status>
    <Avatar><![CDATA[http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3WJ6DSZUfiakYe37PKnQhBIeOQBO4czqrnZDS79FH5Wm5m4X69TBicnHFlhiafvDwklOpZeXYQQ2icg/0]]></Avatar>
    <Alias><![CDATA[zhangsan]]></Alias>
    <Telephone><![CDATA[020-3456788]]></Telephone>
    <ExtAttr>
        <Item>
        <Name><![CDATA[爱好]]></Name>
        <Type>0</Type>
        <Text>
            <Value><![CDATA[旅游]]></Value>
        </Text>
        </Item>
        <Item>
        <Name><![CDATA[卡号]]></Name>
        <Type>1</Type>
        <Web>
            <Title><![CDATA[NexT+]]></Title>
            <Url><![CDATA[https://open.nextxx.cn]]></Title>
        </Web>
        </Item>
    </ExtAttr>
</xml>
```

>参数说明：

|参数 | 说明|
| -------- | -------------------------------------------- |
|SuiteId | 第三方应用ID|
|AuthCorpId | 授权企业的CorpID|
|InfoType | 固定为change_contact|
|TimeStamp | 时间戳|
|ChangeType | 固定为update_user|
|UserID | 变更信息的成员UserID|
|NewUserID | 新的UserID，变更时推送（userid由系统生成时可更改一次）|
|Name | 成员名称，变更时推送|
|Department | 更新后成员所在部门列表，仅返回该应用有查看权限的部门id|
|IsLeaderInDept | 表示所在部门是否为上级，0-否，1-是，顺序与Department字段的部门逐一对应|
|Mobile | 手机号码，变更时推送，仅通讯录应用可获取|
|Position | 职位信息。长度为0~64个字节，仅通讯录管理应用可获取|
|Gender | 性别，变更时推送。1表示男性，2表示女性|
|Email | 邮箱，变更时推送 ，仅通讯录应用可获取|
|Avatar | 头像url。注：如果要获取小图将url最后的”/0”改成”/100”即可。变更时推送，仅通讯录管理应用可获取|
|Status | 激活状态：1=激活或关注， 2=禁用， 4=未激活（重新启用未激活用户或者退出企业并且取消关注时触发）|
|Alias | 成员别名|
|Telephone | 座机，仅通讯录应用可获取|
|ExtAttr | 扩展属性，变更时推送，仅通讯录应用可获取|
|Type | 扩展属性类型: 0-本文 1-网页|
|Text | 文本属性类型，扩展属性类型为0时填写|
|Value | 文本属性内容|
|Web | 网页类型属性，扩展属性类型为1时填写|
|Title | 网页的展示标题|
|Url | 网页的url|
说明： 对用户具有通讯录基本信息只读权限的应用只返回基本字段，只变更敏感字段信息不回调事件给基本信息只读的应用。由通讯录应用发起的更新成员触发的事件不回调给通讯录应用。（更新成员部门的操作导致退出应用权限范围的也会收到成员部门变更事件的回调）

### 删除成员事件
>请求方式：POST（HTTPS）
>请求地址： https://127.0.0.1/suite/callback?msg_signature=3a7b08bb8e6dbce3c9671d6fdb69d15066227608&timestamp=1403610513&nonce=380320359

>请求包体：
```xml
<xml>
    <SuiteId><![CDATA[ww4asffe99e54c0f4c]]></SuiteId>
    <AuthCorpId><![CDATA[wxf8b4f85f3a794e77]]></AuthCorpId>
    <InfoType><![CDATA[change_contact]]></InfoType>
    <TimeStamp>1403610513</TimeStamp>
    <ChangeType><![CDATA[delete_user]]></ChangeType>
    <UserID><![CDATA[zhangsan]]></UserID>
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
**说明： 由通讯录应用发起的删除成员触发的事件不回调给通讯录应用。**