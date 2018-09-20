# Checkbox 复选框
----
### 基础用法
第一次使用element-ui的时候发现和vue官方案列不一样，多了一个group，为了让新手更容易理解，提供一个和vue官方一样使用方式
<div class="demo-block">
    <lu-checkbox  value="label1" label="label1"  v-model="obj.label1" name="a"></lu-checkbox>
    <lu-checkbox  value="label2" label="默认选中"  v-model="obj.label2" name="a"></lu-checkbox>
    <lu-checkbox  value="label3" label="禁用" disabled v-model="obj.label3" name="a"></lu-checkbox>
    <p>obj:{{obj}}</p>
</div>

::: demo
```html

<div class="demo-block">
    <lu-checkbox  value="label1" label="label1" disabled  v-model="obj.label1" name="a"></lu-checkbox>
    <lu-checkbox  value="label2" label="label2"  v-model="obj.label2" name="a"></lu-checkbox>
    <lu-checkbox  value="label3" label="默认选中"  v-model="obj.label3" name="a"></lu-checkbox>
    <p>obj:{{obj}}</p>
</div>
<script>
    export default {
        data(){
            return {
                obj:{
                    label1:false,
                    label2:true,
                    label3:true,
                }
            }
        },
    }
</script>

```
:::

### 数组用法
<div class="demo-block">
    <div  v-for="item,index in list" class="row">
        <lu-Checkbox   v-model="arr" :value="item" :label="item.label" :key="index"></lu-Checkbox>
    </div>
    <p>arr:{{arr}}</p>
</div>

::: demo
```html

<div class="demo-block">
    <div  v-for="item,index in list" class="row">
        <lu-Checkbox   v-model="arr" :value="item" :label="item.label" :key="index"></lu-Checkbox>
    </div>
    <p>arr:{{arr}}</p>
</div>
<script>
    export default {
        data(){
            return {
                arr:[],
                list:[
                    {
                        value:'1',
                        label:'西瓜',
                    },
                    {
                        value:'2',
                        label:'苹果',
                    },
                    {
                        value:'3',
                        label:'香蕉',
                    },
                    {
                        value:'4',
                        label:'梨子',
                    }
                ]
            }
        },
        mounted(){
            this.arr.push(this.list[0])
        }
    }
</script>

```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model     | 尺寸   | boolean/array  |   -       |    —     |
| value     | 值   | string/object    |   - |     —    |
| label     | 文字   |  string   | — | 如果不穿值，默认等于value   |

### Event
拥有原生的方法，绑定方式一样



<script>
    export default {
        data(){
            return {
                arr:[],
                obj:{
                    label1:false,
                    label2:true,
                    label3:true,
                },
                list:[
                    {
                        value:'1',
                        label:'西瓜',
                    },
                    {
                        value:'2',
                        label:'苹果',
                    },
                    {
                        value:'3',
                        label:'香蕉',
                    },
                    {
                        value:'4',
                        label:'梨子',
                    }
                ]
            }
        },
        mounted(){
            this.arr.push(this.list[0])
        }
    }
</script>
<style>
.row{
    padding:5px 0;
}
</style>
