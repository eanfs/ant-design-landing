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
      设计指引: 2,
      编辑器教程: 3,
      使用教程: 4,
      实践案例: 5,
      设计资源: 6,
      Introduce: 0,
      Concept: 1,
      Guide: 2,
      'Edit-help': 3,
      Tutorial: 4,
    },
  },
}, commonConfig);
