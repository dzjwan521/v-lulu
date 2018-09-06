# LoadingBar 加载进度条
----
全局创建了一个用于显示页面加载、异步请求的加载进度条。
因为可复用性的关系，```LoadingBar``` 只会全局创建一个实例，而且在 ```Vue.prototype``` 中添加了全局对象 ```$loadingBar```，可以直接通过 ```this.$loadingBar``` 操作实例
### 基础用法
通过调用 $loadingBar 提供的三种方法来控制全局的加载进度条 ```start()```、```end()```、```error()```

<script>
  export default{
    mounted () {

    },
    methods: {
      start () {
        this.$loadingBar.start()
        console.log(this.$loadingBar)
      },
      end () {
        this.$loadingBar.end()
      },
      error () {
        this.$loadingBar.error()
      },
      setSpeed () {
        this.$loadingBar.config({
          speed: 10
        })
        this.$loadingBar.start()
      },
      setSpinner () {
        this.$loadingBar.config({
          easing: 'ease'
        })
        this.$loadingBar.start()
      },
      setPercentNum () {
        this.$loadingBar.config({
          percentNum: 0.1
        })
        this.$loadingBar.start()
      },
      setShowSpinner () {
        this.$loadingBar.config({
          showSpinner: false
        })
        this.$loadingBar.start()
      }
    }
  }
</script>
<div class="demo-block">
   <lu-Button @click="start">开始</lu-Button>
   <lu-Button @click="end">结束</lu-Button>
   <lu-Button @click="error">错误</lu-Button>
</div>

::: demo

```html
<lu-Button @click="start">开始</lu-Button>
<lu-Button @click="end">结束</lu-Button>
<lu-Button @click="error">错误</lu-Button>
<script>
  export default{
    methods: {
      start () {
        this.$loadingBar.start()
      },
      end () {
        this.$loadingBar.end()
      },
      error () {
        this.$loadingBar.error()
      }
    }
  }
</script>
```

:::

### 常规配置
提供 LoadingBar 的全局配置，使用方法如下：

<div class="demo-block">
   <lu-Button @click="setSpeed">设置speed速度</lu-Button>
   <lu-Button @click="setSpinner">设置spinner动画效果</lu-Button>
   <lu-Button @click="setPercentNum">设置percentNum每次加载的比例</lu-Button>
   <lu-Button @click="setShowSpinner">设置是否显示spinner</lu-Button>
</div>

::: demo

```html
<lu-Button @click="setSpeed">设置speed速度</lu-Button>
<lu-Button @click="setSpinner">设置spinner动画效果</lu-Button>
<lu-Button @click="setPercentNum">设置percentNum每次加载的比例</lu-Button>
<lu-Button @click="setShowSpinner">设置是否显示spinner</lu-Button>
<script>
  export default{
    methods: {
     setSpeed () {
       this.$loadingBar.config({
         speed: 10
       })
       this.$loadingBar.start()
     },
     setSpinner () {
       this.$loadingBar.config({
         easing: 'ease'
       })
       this.$loadingBar.start()
     },
     setPercentNum () {
       this.$loadingBar.config({
         percentNum: 0.1
       })
       this.$loadingBar.start()
     },
     setShowSpinner () {
       this.$loadingBar.config({
         showSpinner: false
       })
       this.$loadingBar.start()
     }
    }
  }
</script>

```

:::

### LoadingBar config参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| speed | 加载速度 | Number | 0-100 | 5 |
| easing | spinner加载动画 | String | linear, ease, cubic-bezier... | 贝萨尔曲线值|
| percentNum | 每次前进的百分比 | Float | 0-1 | Math.random() |
| showSpinner | 是否显示spinner | Boolean | true, false | 是否显示spinner |

