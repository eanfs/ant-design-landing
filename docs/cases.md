---
order: 6
title: 
  zh-CN: 一森云JS-SDK
  en-US: JSSdk
---



## 一森云JS-SDK

### 调用JSAPI用户授权接口,取得用户的授权码

调用JSAPI用户授权接口,取得用户的授权码 文件为例：

```ts
EsenYunJSBridge.call('oauthConfirm', {'ticket':'{ticketId}'},      function(result){
  alert("结果："+JSON.stringify(result));
});
```

### 调用扫描二维码

```ts
EsenYunJSBridge.call('qrcodeScan', {'type':'qrcode'},      function(result){
  alert("结果："+JSON.stringify(result));
});
```

### 关闭当前窗口

```ts
EsenYunJSBridge.call('close');
```

### 选择团队

选择团队: 说明 *type* -选择方式 *signle* mulitple

```ts
EsenYunJSBridge.call('groupPick', {'type':'signle'},      function(result){
  alert("结果："+JSON.stringify(result));
});
```

### 选择团队成员

```ts
EsenYunJSBridge.call('memberPick', {'type':'signle', 'groupId': '{groupId}'},      function(result){
  alert("结果："+JSON.stringify(result));
});
```

参数说明：
 'type' -非空  选择方式 'signle' mulitple
 'groupId' -可空 团队ID  可以不传，为空时默认打开公司通讯录（可选公司所有成员）， 传GroupID时，打开团队的通讯（仅可选择团队内成员）


### 选择图片

```ts
EsenYunJSBridge.call('photoPick', {'type':'signle'},      function(result){
  alert("结果："+JSON.stringify(result));
});
```

参数说明：
 'type' -非空  选择方式 'signle' mulitple

### 查看文件

```ts
EsenYunJSBridge.call('fileView', {'fileUri':'', 'mimeType':'docx'},      function(result){
  alert("结果："+JSON.stringify(result));
});
```

参数说明：
 'fileUri' -非空  选择方式 'signle' mulitple
 'mimeType' -非空  文件类型 application/pdf：PDF（Portable Document Format）
                          audio/mp4：MP4音频文件
                          audio/mpeg：MP3或其他MPEG音频文件
                          image/gif：GIF图像文件
                          image/jpeg：JPEG图像文件
                          image/png： PNG图像文件
                          text/plain: 纯文字内容
                          video/mpeg：MPEG-1视频文件
                          video/mp4：MP4视频文件
                          application/msword (.doc)
                          application/vnd.openxmlformats-officedocument.wordprocessingml.document(.docx)
                          application/vnd.ms-excel (.xls)
                          application/vnd.openxmlformats-officedocument.spreadsheetml.sheet (.xlsx)
                          application/vnd.ms-powerpoint (.ppt)
                          application/vnd.openxmlformats-officedocument.presentationml.presentation (.pptx)

### 选择聊天群

```ts
EsenYunJSBridge.call('chat', {'groupId':''},      function(result){
  alert("结果："+JSON.stringify(result));
});
```

参数说明：

### 调用个人卡片

```ts
EsenYunJSBridge.call('personalCard', {
  'openId':'',
  'userId':'',
  'name':'',
  'avatar':'',
  },      function(result){
  alert("结果："+JSON.stringify(result));
});
```


### 是否显示右上角菜单

```ts
EsenYunJSBridge.call('showMenu', {
  menuStatus: true,        // 右上角菜单显示状态
  baseMenuStatus: false,   // 原生的菜单项显示状态
  menu: [                  // 不显示就传空数组
    {
      title: '12',         // 菜单项的名字
      icon: '',            // 菜单项的icon
      action: '123'        // 菜单项的action 唯一标识
    },
    {
      title: '1234',
      icon: '',
      action: '123123'
    },
  ]
}, function(result) {
  alert("结果："+ JSON.stringify(result));
});
```

### 调用筛选侧边栏

```ts
EsenYunJSBridge.call('filter', {
  module: 'FEEDBACK',    // 筛选模块名称
  // action: 'delete',      // 删除筛选项
  // data: {}               // 删除的选项（forShowArr数组中的对象）
}, function (res) {
  // 打开侧边栏时点击确定筛选时返回的数据，删除时不返回
  alert(JSON.stringify(res.data.forSearchArr));  // 供查询列表的数组（带分类信息）
  alert(JSON.stringify(res.data.forShowArr));    // 供展示的数组（不带分类信息）
});
```

参数说明：
 'module' -非空  筛选模块名称
 'action' -可空  删除时必填（delete）, 打开侧边栏时不填
 'data'   -可空  删除时必填删除的选项（forShowArr数组中的对象）, 打开侧边栏时不填


### 转成客户/查看客户

```ts
EsenYunJSBridge.call('assembleCustomerInfo', {
  data: {
    cusName: 'companyName',    // 客户名称（必填）
    cusId: ''                  // 客户id，查看客户时必填客户id
  }
}, (res) => {
  alert(JSON.stringify(res))  // 转成客户成功返回客户id
})
```

---
## 提供给Native调用的方法

### 是否返回 (isCanGoBack)

```ts
EsenYunJSBridge.registerHandler('isCanGoBack', function (data, responseCallback) {
  alert("结果："+ JSON.stringify(data));
  responseCallback({ 'status': true }); // status为true 是可以返回
})
```
### 点击菜单项 (doMenuAction)

```ts
EsenYunJSBridge.registerHandler('doMenuAction', function (data, responseCallback) {
  alert("结果："+ JSON.stringify(data));
  responseCallback({
    success: true,  // 回调成功
    messsage: ''    // 可为空, 如果需要可带
  })
})
```