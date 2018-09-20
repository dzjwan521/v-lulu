# Radio 单选框
----
### 基础用法
为了让新手更容易理解，和vue官方一样使用方式
<div class="demo-block">
    <lu-radio name="a" v-model="pick" value="man" label="男" class="mr-5"></lu-radio>
    <lu-radio  name="a" v-model="pick" value="woman" label="女" class="mr-5"></lu-radio>
    <lu-radio name="a"  v-model="pick" value="gay" label="gay" class="mr-5"></lu-radio>
    <lu-radio name="a"  v-model="pick" value="disabled" label="禁用" disabled class="mr-5"></lu-radio>
    <br>
    <br>
    <span>Picked: {{ pick }}</span>
    </div>
</div>

::: demo
```html
<div class="demo-block">
    <lu-radio name="a" v-model="pick" value="man" label="男" class="mr-5"></lu-radio>
    <lu-radio  name="a" v-model="pick" value="woman" label="女" class="mr-5"></lu-radio>
    <lu-radio name="a"  v-model="pick" value="gay" label="gay" class="mr-5"></lu-radio>
    <lu-radio name="a"  v-model="pick" value="disabled" label="禁用" disabled class="mr-5"></lu-radio>
    <br>
    <br>
    <span>选择的值: {{ pick }}</span>
    </div>
</div>
export default {
    data() {
        return {
            pick:"man",
        }
    },
}
```
:::


### Attributes
拥有原生属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model     | 尺寸   | string  |   -       |    —     |
| value     | 值   | string   |   - |     —    |
| label     | 文字   |  string   | — | 如果不穿值，默认等于value   |

### Event
拥有原生的方法，绑定方式一样

<script>
    export default {
        data() {
            return {
                pick:"man",
                picked:''
            }
        },
    }
</script>
<style>
.mr-5{
    margin-right:20px;
}
</style>
