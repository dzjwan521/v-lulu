
# 快速上手

----


## vue项目搭建

> `Vue.js` 提供一个官方命令行工具 `vue-cli`，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。
```bash
> npm i -g vue-cli  //vue项目搭建工具
> vue init webpack 项目名
> cd 项目名
> npm i
> npm run dev //开始开发
```
想看更详细的教程，[可以参考我的教程](https://luvxy.cn/#/article/5b587fd6f049b70ef43feac8)


## vue官方资料

> 在使用之前，推荐学习 `Vue` 和 `ES2015` ，并正确配置 `Node.js` v6.x 或以上版本

`vue-lulu` 基于 `Vue.js` 2.x+ 版本开发，所以有必要了解以下基础知识：
- [Vue 组件](https://cn.vuejs.org/v2/guide/components.html)
- [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)


## 使用 npm 安装 lulu
推荐使用 npm 的方式进行开发，享受 node 生态圈和 webpack 工具链带来的便利。通过 npm 安装的模块包，我们可以轻松的使用 import 或者 require 的方式引用

```bash
npm install vue-lulu //目前没发布
```



### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import lulu from 'lulu' // 引入组件库
import '../node_modules/lulu/packages/theme-default/lib/index.css' // 引入样式库

Vue.use(lulu)
```

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { luButton } from 'vue-lulu'

export default {
  components: {
    luButton
  }
}
```

在模板中，用 `<lu-button></lu-button>` 自定义标签的方式使用组件


```html
<template>
  <div>
    <lu-button>这是一个按钮</lu-button>
  </div>
</template>
```
