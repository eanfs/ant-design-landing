---
order: 0
category:
  zh-CN: 设计指引
  en-US: Guide
title: 
  zh-CN: 企业授权应用
  en-US: Workflow
---

## 从NexT+应用市场发起


### 企业可以在应用市场找到想要使用的应用并授权安装，具体流程如右图示。

<img class="preview-img" align="left" width="100%" alt="授权流程" description="" src="https://download.esenyun.com/platform/Guide_Flow.png">

注：

- 回调临时授权码的详细说明**见授权成功通知**
- 利用临时授权码获取永久授权码**见获取永久授权码**；
- 临时授权码10分钟后会失效，第三方服务商需尽快使用临时授权码换取永久授权码及授权信息。
- 每个企业授权的每个应用的永久授权码、授权信息都是唯一的，第三方服务商需妥善保管。
- 后续可以通过永久授权码获取企业access_token，进而调用相关API为授权企业提供服务。