# Input 输入框
------
### 基础用法

我们为 ```<lu-input /> ```输入框定义了三种尺寸（默认、中、小），高度分别为 40px、34px 和 28px。

<div class="demo-block">
    <lu-input  size="large" type="search" v-model="val" placeholder="large"  prefix="lu-icon-search"
    suffix="lu-icon-search" @icon-click="click"></lu-input>
    <lu-input  size="default" clearable  placeholder="default"></lu-input>
    <lu-input  size="small" disabled placeholder="small"></lu-input>
</div>
<script>
export default {
    data(){
        return {
            val:'large'
        }
    },
    methods:{
        click(e){
            console.log(e)
        }
    }
}
</script>
