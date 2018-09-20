# Input 输入框
------
### 基础用法

我们为 ```<lu-input /> ```输入框定义了三种尺寸（默认、中、小），高度分别为 40px、34px 和 28px。

<div class="demo-block">
    <lu-input  size="large" placeholder="large" style="width:180px"></lu-input>
    <lu-input  size="default" readonly  placeholder="readonly" style="width:180px"></lu-input>
    <lu-input  size="small" disabled placeholder="small disabled" style="width:180px"></lu-input>
</div>

::: demo
```html

    <lu-input  size="large" placeholder="large" style="width:180px"></lu-input>
    <lu-input  size="default" readonly  placeholder="readonly" style="width:180px"></lu-input>
    <lu-input  size="small" disabled placeholder="small disabled" style="width:180px"></lu-input>

```
:::

### icon的用法
<div class="demo-block">
    <lu-input size="large" type="search"  v-model="val" placeholder="placeholder"  suffix="iconfont icon-search" @icon-click="click" style="width:180px"></lu-input>
    <lu-input  type="search" clearable v-model="val" placeholder="placeholder"  prefix="iconfont icon-peoplefill" style="width:180px"></lu-input>
    <lu-input size="small" type="search" clearable v-model="val" placeholder="placeholder"  style="width:180px" suffix="iconfont icon-repeal"prefix="iconfont icon-profile" ></lu-input>
</div>

::: demo
```html

    <lu-input size="large" type="search"  v-model="val" placeholder="placeholder"  suffix="iconfont icon-search" @icon-click="click" style="width:180px"></lu-input>
    <lu-input  type="search" clearable v-model="val" placeholder="placeholder"  prefix="iconfont icon-peoplefill" style="width:180px"></lu-input>
    <lu-input size="small" type="search" clearable v-model="val" placeholder="placeholder"  style="width:180px" suffix="iconfont icon-repeal"prefix="iconfont icon-profile" ></lu-input>

```
:::

### textarea类型
<div class="demo-block">
    <lu-input type="textarea" rows='4' cols='60'></lu-input>
</div>

::: demo
```html

<lu-input type="textarea" rows='4'></lu-input>

```
:::

### Attributes
拥有原生input的属性和方法
| 参数    | 说明            | 类型  | 可选值 | 默认值 |
| --------- | :-----------------: | ------- | ------ | ------ |
| clearable | 按钮      | boolean | -      | false  |
| prefix    | 前置icon的class名 | string  | -      | -      |
| suffix    | 后置icon的class名 | string  | -      | -      |
| size    | 大小只对input有效 | string  | large，small,default     | default    |

### Event
| 参数    | 说明            | 类型  | 可选值 | 默认值 |
| --------- | :-----------------: | ------- | ------ | ------ |
| clear | 清除按钮回调      | function | -      | -  |
| icon-click | 后置按钮点击回调      | function | -      | -  |


<script>
export default {
    data(){
        return {
            val:''
        }
    },
    methods:{
        click(e){
            alert('点击了suffix-icon')
        }
    }
}
</script>
