# 栅格布局

### 基础用法

这里定义了两个概念，行row和列col，具体使用方法如下：
- 使用row在水平方向创建一行，并将区域进行24等分，每个row中的col总和应该为24
- 将一组col插入在row中，在每个col中，键入自己的内容
- 通过设置col的span参数，指定跨越的范围，其范围是1到24，如果不设置默认为24
- 通过给 row 添加 gutter 属性，可以给下属的 col 添加间距
- 通过设置push(向右)和pull(向左)来改变栅格的顺序。
- 通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。

举个🌰：

<div class="demo-block">
    <lu-Row >
        <lu-Col><div>24</div></lu-Col>
    </lu-Row>
    <lu-Row :gutter="8" >
        <lu-Col :span="16"><div>16</div></lu-Col>
        <lu-Col :span="8"><div>8</div></lu-Col>
    </lu-Row>
    <lu-Row :gutter="16">
       <lu-Col :span="4"><div>4</div></lu-Col>
        <lu-Col :span="4"><div>4</div></lu-Col>
        <lu-Col :span="4"><div>4</div></lu-Col>
        <lu-Col :span="4"><div>4</div></lu-Col>
        <lu-Col :span="4"><div>4</div></lu-Col>
        <lu-Col :span="4"><div>4</div></lu-Col>
    </lu-Row>
    <lu-Row :gutter="16" >
        <lu-Col :span="4" push="8"><div>4 push="8"</div></lu-Col>
        <lu-Col :span="8" pull="4"><div>8 pull="4"</div></lu-Col>
    </lu-Row>
    <lu-Row>
        <lu-Col :span="6" offset="3"><div>6 offset="3"</div></lu-Col>
        <lu-Col :span="6" offset="3"><div>6 offset="3"</div></lu-Col>
    </lu-Row>
</div>


::: demo
```html

    <lu-Row >
        <lu-Col><div>24</div></lu-Col>
    </lu-Row>
    <lu-Row :gutter="8" >
        <lu-Col :span="16"><div>16</div></lu-Col>
        <lu-Col :span="8"><div>8</div></lu-Col>
    </lu-Row>
    <lu-Row :gutter="16">
       <lu-Col :span="4"><div>4</div></lu-Col>
        <lu-Col :span="4"><div>4</div></lu-Col>
        <lu-Col :span="4"><div>4</div></lu-Col>
        <lu-Col :span="4"><div>4</div></lu-Col>
        <lu-Col :span="4"><div>4</div></lu-Col>
        <lu-Col :span="4"><div>4</div></lu-Col>
    </lu-Row>
    <lu-Row :gutter="16" >
        <lu-Col :span="4" push="8"><div>4 push="8"</div></lu-Col>
        <lu-Col :span="8" pull="4"><div>8 pull="4"</div></lu-Col>
    </lu-Row>
    <lu-Row>
        <lu-Col :span="6" offset="3"><div>6 offset="3"</div></lu-Col>
        <lu-Col :span="6" offset="3"><div>6 offset="3"</div></lu-Col>
    </lu-Row>

```
:::


### flex布局

- 先将row上type属性设置为flex
- col上属性order控制排序，align控制垂直方向，justify控制水平方向

<div class="demo-block">
    <p>order排序</p>
    <lu-Row type="flex">
        <lu-Col span="4" order="4"><p>order4|col-4</p></lu-Col>
        <lu-Col span="4" order="3"><p>order3|col-4</p></lu-Col>
        <lu-Col span="4" order="2"><p>order2|col-4</p></lu-Col>
        <lu-Col span="4" order="1"><p>order1|col-4</p></lu-Col>
    </lu-Row>
    <p>垂直顶部对齐</p>
    <lu-Row type="flex"  align="top" >
        <lu-Col span="4"><p style="height: 80px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 30px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 100px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 60px">col-4</p></lu-Col>
    </lu-Row>
    <p>垂直底部对齐 水平局中</p>
    <lu-Row type="flex" justify="center" align="bottom" >
        <lu-Col span="4"><p style="height: 80px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 30px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 100px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 60px">col-4</p></lu-Col>
    </lu-Row>
    <p>垂直居中对齐,水平space-around</p>
    <lu-Row type="flex" justify="space-around" align="middle" >
        <lu-Col span="4"><p style="height: 80px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 30px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 100px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 60px">col-4</p></lu-Col>
    </lu-Row>
</div>

::: demo
```html

<p>order排序</p>
    <lu-Row type="flex">
        <lu-Col span="4" order="4"><p>order4|col-4</p></lu-Col>
        <lu-Col span="4" order="3"><p>order3|col-4</p></lu-Col>
        <lu-Col span="4" order="2"><p>order2|col-4</p></lu-Col>
        <lu-Col span="4" order="1"><p>order1|col-4</p></lu-Col>
    </lu-Row>
    <p>垂直顶部对齐</p>
    <lu-Row type="flex"  align="top" >
        <lu-Col span="4"><p style="height: 80px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 30px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 100px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 60px">col-4</p></lu-Col>
    </lu-Row>
    <p>垂直底部对齐 水平局中</p>
    <lu-Row type="flex" justify="center" align="bottom" >
        <lu-Col span="4"><p style="height: 80px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 30px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 100px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 60px">col-4</p></lu-Col>
    </lu-Row>
    <p>垂直居中对齐align="middle",水平justify="space-around"</p>
    <lu-Row type="flex" justify="space-around" align="middle" >
        <lu-Col span="4"><p style="height: 80px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 30px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 100px">col-4</p></lu-Col>
        <lu-Col span="4"><p style="height: 60px">col-4</p></lu-Col>
    </lu-Row>

```
:::


### 响应式布局

参照了 Bootstrap 的 响应式设计，预设了四个响应尺寸：```xs```、```sm```、```md```、```lg``` 。
<div class="demo-block">
  <lu-Row :gutter="8">
    <lu-col :xs="8" :sm="6" :md="4" :lg="3" ><div >响应式</div></lu-col>
    <lu-col :xs="4" :sm="6" :md="8" :lg="9" ><div >响应式</div></lu-col>
    <lu-col :xs="4" :sm="6" :md="8" :lg="9" ><div >响应式</div></lu-col>
    <lu-col :xs="8" :sm="6" :md="4" :lg="3" ><div >响应式</div></lu-col>
</lu-Row>
</div>


::: demo
```html

<lu-Row :gutter="8">
  <lu-col :xs="8" :sm="6" :md="4" :lg="3"><div>3</div></lu-col>
  <lu-col :xs="4" :sm="6" :md="8" :lg="9"><div>9</div></lu-col>
  <lu-col :xs="4" :sm="6" :md="8" :lg="9"><div>9</div></lu-col>
  <lu-col :xs="8" :sm="6" :md="4" :lg="3"><div>3</div></lu-col>
</lu-Row>

```

:::

### Attributes
### row
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| gutter     | 间隔   | number，string  |   -           |    0    |
| type     | 类型   | string    |   flex |     -    |
| align     |  垂直居中  |  string   | top、middle、bottom | false   |
| justify  | 水平居中    | string   | start、end、center、space-around、space-between   | -   |

### col
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 栅格占据的列数 | number | — | — |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| order | 栅格的顺序，在flex布局模式下有效 | number | — | 0 |
| push |  栅格向右移动格数 | number | — | 0 |
| pull |  栅格向左移动格数 | number | — | 0 |
| xs | `<768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | `≥768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md | `≥992` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | `≥1200` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |




<style>
.lu-row{
    margin-top:5px;
    margin-bottom:5px;
}
.lu-col div{
    border-radius:5px;
    background: #ccd0d7;
    text-align:center;
    padding:8px 0;
    box-sizing:border-box;
}
.lu-col p{
    border-radius:5px;
    background: #ccd0d7;
    text-align:center;
    padding:8px 0;
    box-sizing:border-box;
}


</style>

