---
order: 0
category:
  zh-CN: 概念介绍
  en-US: Concept
title: 
  zh-CN: 基本概念介绍
  en-US: Keyword
---



- 术语介绍

## corpid

- 每个服务商同时也是一个NexT+的企业，都有唯一的corpid。获取此信息可在服务商管理后台“应用开发”－“通用开发参数”可查看


## provider_secret

- 作为服务商身份的调用凭证，应妥善保管好该密钥，务必不能泄漏。

## suiteid & suite_secret

- suiteid为应用的唯一身份标识，suite_secret为对应的调用身份密钥。


## suite_ticket

- suite_ticket与suite_secret配套使用，用于获取suite_access_token。
suite_ticket由NexT+开发管理后台向登记的应用指令回调地址定期推送（10分钟），用于加强调用者身份确认（即使suite_secret泄露，也无法获取到suite_access_token）。`若开发者丢失suite_ticket，除了等待定时推送的事件外，开发者也可以在管理端手动触发推送。`
