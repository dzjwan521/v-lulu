# datepicker 时间选择器
----

基于[vue-datepicker-local](https://weifeiyue.github.io/vue-datepicker-local/)


### 基础使用
<div class="demo-block">
    <lu-date-picker v-model="time" ></lu-date-picker>
    <lu-date-picker v-model="time" v-model="time" @confirm="confirm" show-buttons></lu-date-picker>
</div>


::: demo
```html

<div class="demo-block">
    <lu-date-picker v-model="time" ></lu-date-picker>
    <lu-date-picker v-model="time" v-model="time" @confirm="confirm" show-buttons></lu-date-picker>
</div>

```
:::

### 格式化日期
<div class="demo-block">
    <lu-date-picker v-model="time" v-model="time" format="YYYY"></lu-date-picker>
    <lu-date-picker v-model="time" format="YYYY-MM"></lu-date-picker>
    <lu-date-picker v-model="time" format="YYYY-MM-DD HH:mm:ss"></lu-date-picker>
</div>



::: demo
```html

<div class="demo-block">
    <lu-date-picker v-model="time" v-model="time" format="YYYY"></lu-date-picker>
    <lu-date-picker v-model="time" format="YYYY-MM"></lu-date-picker>
    <lu-date-picker v-model="time" format="YYYY-MM-DD HH:mm:ss"></lu-date-picker>
</div>

```
:::

### 禁用 | 清空
<div class="demo-block">
    <lu-date-picker v-model="time" disabled></lu-date-picker>
    <lu-date-picker v-model="time" clearable></lu-date-picker>
</div>

::: demo
```html

<div class="demo-block">
    <lu-date-picker v-model="time" disabled></lu-date-picker>
    <lu-date-picker v-model="time" clearable></lu-date-picker>
</div>

```
:::

### 范围选择
<div class="demo-block">
    <lu-date-picker v-model="emptyRange" clearable></lu-date-picker>
    <lu-date-picker v-model="range" clearable></lu-date-picker>
    <lu-date-picker v-model="range" range-separator="至" clearable></lu-date-picker>
</div>

::: demo
```html

<div class="demo-block">
    <lu-date-picker v-model="emptyRange" clearable></lu-date-picker>
    <lu-date-picker v-model="range" clearable></lu-date-picker>
    <lu-date-picker v-model="range" range-separator="至" clearable></lu-date-picker>
</div>

```
:::

### 禁止选择周末
<div class="demo-block">
    <lu-date-picker v-model="time" :local="local" clearable></lu-date-picker>
</div>

::: demo
```html

<div class="demo-block">
    <lu-date-picker v-model="time" :local="local" clearable></lu-date-picker>
</div>

```
:::

### 只显示日期面板
<div class="demo-block">
    <lu-date-picker v-model="time" :local="local" type="inline" clearable></lu-date-picker>
</div>

::: demo
```html

<div class="demo-block">
    <lu-date-picker v-model="time" :local="local" type="inline" clearable></lu-date-picker>
</div>

```
:::

### demo引入的变量

```js

export default {
    data(){
        return {
            time: new Date(),
            range: [new Date(),new Date()],
            emptyTime: '',
            emptyRange: [],
            local: {
              dow: 0, // Sunday is the first day of the week
              hourTip: 'Select Hour', // tip of select hour
              minuteTip: 'Select Minute', // tip of select minute
              secondTip: 'Select Second', // tip of select second
              yearSuffix: '', // suffix of head year
              monthsHead:'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), // months of head
              months: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), // months of panel
              weeks: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'), // weeks,
              cancelTip: 'cancel',
              submitTip: 'confirm'
            }
        }
    },
      methods: {
            disabledDate (time) {
              var day = time.getDay();
              return day === 0 || day === 6;
            },
            confirm(){
              alert('按钮')
          }
          }
}

```

### Attributes

| 参数           | 说明                                      | 类型       | 默认值            |
|:---------------|:-------------------------------------------------|:-----------|:-------------------|
| v-model        |  绑定值                         | Date/Array | --                 |
| name           |   名称                                 | String     | --                 |
| type           |   类型                 | String     | normal             |
| inputClass     |  input元素自定义class                     | String     | --                 |
| popupClass     | popup自定义class                      | String     | --                 |
| disabled       | 禁用     | Boolean    | false              |
| clearable      | 清除                                  | Boolean    | false              |
| rangeSeparator | 范围分隔符                                | String     | "~"                |
| format         | 格式化                          | String     | "YYYY-MM-DD"       |
| local          | 语言切换，默认中文                      | Object     | {<br/>dow: 1, // Monday is the first day of the week<br/>hourTip: '选择小时', // tip of select hour<br/>minuteTip: '选择分钟', // tip of select minute<br/>secondTip: '选择秒数', // tip of select second<br/>yearSuffix: '年', // format of head<br/>monthsHead: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'), // months of head<br/>months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'), // months of panel<br/>weeks: '一_二_三_四_五_六_日'.split('_'), // weeks<br/> cancelTip: '取消', // default text for cancel button <br />, submitTip: '提交' // default text for submit button <br />}                 |
| disabledDate | 设置禁止选中的日期         | Function   | (time, format)=>{return false} |
| showButtons  | 显示按钮                      | Boolean  | false              |
| placeholder	 | placeholder   | String     | --                 |

### Events

| Event Name     | Description                                      |  Parameters                          |
|:---------------|:-------------------------------------------------|:-------------------------------------|
| confirm        |确定按钮触发事件                      |  the value component's binding value |
| cancel         |取消按钮触发事件        | --                                   |
| clear          |清楚按钮触发事件         |

<script>
export default {
    data(){
        return {
            time: new Date(),
            range: [new Date(),new Date()],
            emptyTime: '',
            emptyRange: [],
            local: {
              dow: 0, // Sunday is the first day of the week
              hourTip: 'Select Hour', // tip of select hour
              minuteTip: 'Select Minute', // tip of select minute
              secondTip: 'Select Second', // tip of select second
              yearSuffix: '', // suffix of head year
              monthsHead:'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), // months of head
              months: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), // months of panel
              weeks: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'), // weeks,
              cancelTip: 'cancel',
              submitTip: 'confirm'
            }
        }
    },
      methods: {
            disabledDate (time) {
              var day = time.getDay();
              return day === 0 || day === 6;
            },
            confirm(){
              alert('按钮')
          }
          }
}
</script>
