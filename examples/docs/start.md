
# 快速上手

----


## 使用前提

> 使用lulu前提是学会vue，`Vue.js` 提供一个官方命令行工具 `vue-cli`，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。
如果你不会vue，[可以参考我的教程](https://luvxy.cn/#/article/5b587fd6f049b70ef43feac8)




## 使用 npm 安装 lulu
推荐使用 npm 的方式进行开发，享受 node 生态圈和 webpack 工具链带来的便利。通过 npm 安装的模块包，我们可以轻松的使用 import 或者 require 的方式引用

```bash
npm install v-lulu //目前没发布
```



### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import lulu from 'v-lulu' // 引入组件库
import 'v-lulu/theme/lib/index.css' // 引入样式库

Vue.use(lulu)
```

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { luButton } from 'v-lulu'

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
