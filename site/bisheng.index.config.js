const commonConfig = require('./bisheng.common.config');

module.exports = Object.assign({
  port: 7111,
  root: '/',
  source: {
    docs: './docs',
  },
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  themeConfig: {
    root: '/',
    categoryOrder: {
      开发指南: 0,
      概念介绍: 1,
      开发配置: 2,
      应用授权: 3,
      回调接口: 4,
      授权登录: 5,
      Introduce: 0,
      Concept: 1,
      Config: 2,
      Guide: 3,
      Callback: 4,
      OAuth: 5,
    },
  },
}, commonConfig);
