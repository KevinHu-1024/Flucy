## TODOS

- [x] 增加JSON校验错误提示
- [x] 增加控制台版本报告
- [ ] 增加控制台`issue`提交路径信息
- [ ] 增加`markdown`格式支持，可能要定制语法，防止`<pre>`标签
- [ ] 增加json文件直接导入功能
- [ ] 增加json文件直接导出功能，生成前再校验一次
- [ ] 增加页面重置功能，避免刷新，重置前提示用户
- [ ] 增加tests翻译功能
- [ ] 调整页面按钮文案，避免和新功能混淆
- [ ] 增加翻译提示功能，及语言转换选项
- [ ] 增加description语言分支选择功能，多语言版本

## 已知bug - 覆盖测试下

1. basic-bonfires.json / basic-ziplines.json / front-end-development-certificate.json / gear-up-for-success.json / data-visualization-certificate.json / api-projects.json / back-end-development-certificate.json /里导出或导入错误，它的discription里面还有数组，我把它扁平化了
2. front-end-development-certificate.json / chromedevtools.json /  bigonotation.json / computer-basics.json / dom.json / jslingo.json没用断言，用的别的，上面的有些也是这个原因
3. basic-js.json 中后几个断言中没有message字段