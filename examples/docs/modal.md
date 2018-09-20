# Modal 对话框
----
### 基础用法
全局引入lulu后，直接调用这些方法```this.$modal```,```this.$alert```,```this.$prompt```,```this.$confirm```.

传入的参数是一个对象
```js
    {
        title: '提示',
        cancleBtn: '取消',
        confirmBtn: '确定',
        message: '',
        level:''，//重要级别info,success,warning,question,danger
        type: '',//类型为alert,prompt,confirm，调用modal才需要输入type
    }
```
<div class="demo-block">
    <lu-button @click="modal">自定义弹窗</lu-button>
    <lu-button type="success" @click="alert">alert</lu-button>
    <lu-button type="primary" @click="prompt">prompt</lu-button>
    <lu-button type="danger" @click="confirm">confirm</lu-button>
</div>

::: demo
```html

<div class="demo-block">
    <lu-button @click="modal">自定义弹窗</lu-button>
    <lu-button type="success" @click="alert">alert</lu-button>
    <lu-button type="primary" @click="prompt">prompt</lu-button>
    <lu-button type="danger" @click="confirm">confirm</lu-button>
</div>
<script>
    export default{
        data(){
            return {
                show:false
            }
        },
        methods:{
            modal(){
                const h = this.$createElement;
                this.$modal({
                    title:'自定义标题',
                    cancleBtn:'取消按钮',
                    confirmBtn:'确定按钮',
                    message:h('p', null, [
                        h('span', null, '内容可以是 '),
                        h('i', { style: 'color: teal' }, 'VNode')
                    ])
                }).then(action=>{
                    console.log(action)
                }).catch(action=>{
                    console.log(action)
                })
            },
            alert(){
                this.$alert({
                    message:'这是一个alert窗口'
                }).then(action=>{
                    console.log(action)
                }).catch(action=>{
                    console.log(action)
                })
            },
            prompt(){
                this.$prompt({
                    message:'prompt请输入'
                }).then(action=>{
                    console.log(action)
                }).catch(action=>{
                    console.log(action)
                })
            },
            confirm(){
                this.$confirm({
                    message:'这是一个confirm窗口'
                }).then(action=>{
                    console.log(action)
                }).catch(action=>{
                    console.log(action)
                })
            }
        }
    }
</script>


```
:::

### 弹窗的级别
让用户知道这个弹窗重要程度的标志
<div class="demo-block">
    <lu-button @click="info" type="primary" plain >info</lu-button>
    <lu-button type="success" @click="success" >success</lu-button>
    <lu-button type="warning" @click="warning">warning</lu-button>
    <lu-button type="primary" @click="question">question</lu-button>
    <lu-button type="danger" @click="danger">danger</lu-button>
</div>

::: demo
```html

    <lu-button type="success" @click="success" >success</lu-button>
    <script>
        success(){
                this.$modal({
                    level:'success',
                    message:'success类型的窗口'
            })
        },
    </script>

```
:::
<script>
    export default{
        data(){
            return {
                show:false
            }
        },
        methods:{
             modal(){
                const h = this.$createElement;
                this.$modal({
                    title:'自定义标题',
                    cancleBtn:'取消按钮',
                    confirmBtn:'确定按钮',
                    message:h('p', null, [
                        h('span', null, '内容可以是 '),
                        h('i', { style: 'color: teal' }, 'VNode')
                    ])
                }).then(action=>{
                    console.log(action)
                }).catch(action=>{
                    console.log(action)
                })
            },
            alert(){
                this.$alert({
                    message:'这是一个alert窗口'
                }).then(action=>{
                    console.log(action)
                }).catch(action=>{
                    console.log(action)
                })
            },
            prompt(){
                this.$prompt({
                    message:'prompt请输入'
                }).then(action=>{
                    console.log(action)
                }).catch(action=>{
                    console.log(action)
                })
            },
            confirm(){
                this.$confirm({
                    message:'这是一个confirm窗口'
                }).then(action=>{
                    console.log(action)
                }).catch(action=>{
                    console.log(action)
                })
            },
            info(){
                this.$modal({
                    level:'info',
                    message:'info类型的窗口'
                })
            },
            success(){
                this.$modal({
                    level:'success',
                    message:'success类型的窗口'
                })
            },
            warning(){
                this.$modal({
                    level:'warning',
                    message:'warning类型的窗口'
                })
            },
            question(){
                this.$modal({
                    level:'question',
                    message:'question类型的窗口'
                })
            },
            danger(){
                this.$modal({
                    level:'danger',
                    message:'danger类型的窗口'
                })
            }
        }
    }
</script>
