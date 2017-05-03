# 百度云应聘笔试题

## 题目内容及要求

> 题目内容

小明最近买了一个非主流的手机，所以一直没有找到一个符合自己需求的 天气 APP，无奈之下只好自己动手开发一个。幸好手机上有个功能强劲的浏览器，小明仔细地考虑了一下，列举了一些最想要的功能:
 1. 首先应该找到一些提供天气信息的网站把需要的数据抓取下来
 2. 可以清晰地了解到未来几天气温的变化情况。
 3. 希望气温的变化情况能够直观的以 曲线图 的形式展示出来。
 4. 考虑到后续的升级和维护，小明决定做一个 Web App ，这样子的话，可以方便的在PC上面使用这个应用。

> 开发需求

1. 代码可以托管在github, gitcafe, google code等相关的网站
2. 网站最终可以托管到BAE，SAE，GAE等环境
3. 可以使用任何你熟悉的语言开发
4. 完成事件: 1周 以内
5. Do the best as much as you can.

## 设计原型见下图

![](./weather-assert.png)

## 简要说明

### 实现了一个简单的 MVVM 库

因为不想使用 AngularJS、VueJS or ReactJS 等现成库或框架，但又需要其部分功能，于是自己实现了一个类似 Vue 的 MVVM 框架，详见 [knopper.js](utils/knopper.js)。

目前实现了 k-module, k-click 的双向绑定和 k-repeat 的单向绑定。将来可能会实现 k-if/k-on 等。

`knopper.js` 名字是因为在写它的时候正在吃 `knoppers` 饼干，主要原理基于 `ES2016 的 Proxy 和 Reflect`。

### 天气 API

6fcd1f55dc9d4c059b6ae73ec24f2ce2