# Divider 分割线
### 基础用法

<div class="demo-block">
    <p>标题居左</p>
    <lu-Divider orientation="left">分割线</lu-Divider>
    <p>标题居中</p>
    <lu-Divider>分割线</lu-Divider>
    <p>标题居右，虚线</p>
    <lu-Divider orientation="right" :dashed="true">分割线</lu-Divider>

</div>

::: demo
```html

    <p>标题居左</p>
    <lu-Divider orientation="left">分割线</lu-Divider>
    <p>标题居中</p>
    <lu-Divider>分割线</lu-Divider>
    <p>标题居右</p>
    <lu-Divider orientation="right" :dashed="true">分割线</lu-Divider>


```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| orientation     | 方向   | String  |   left,center,right  |    center    |
| dashed     | 是否虚线   | Boolean    |   ture,false |     false    |

