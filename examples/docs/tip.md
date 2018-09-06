# Tip 提示
-----

### 基本用法

<div class="demo-block">
    <div class="top">
        <lu-Tip align="start" background="red">
            <div slot="content">top-left文字提示</div>
            <lu-Button>上左</lu-Button>
        </lu-Tip>
        <lu-Tip>
            <div slot="content" >top-center文字提示</div>
            <lu-Button>上中</lu-Button>
        </lu-Tip>
        <lu-Tip align="end">
            <div slot="content">top-right文字提示</div>
            <lu-Button>上右</lu-Button>
        </lu-Tip>
    </div>
    <div class="center">
        <div class="center-left">
            <lu-Tip direction="left" align="start">
                <div slot="content">left-left文字提示</div>
            <lu-Button>左上</lu-Button>
            </lu-Tip>
            <lu-Tip direction="left">
                <div slot="content">left-center文字提示</div>
            <lu-Button>左中</lu-Button>
            </lu-Tip>
            <lu-Tip align="end" direction="left">
                <div slot="content">left-right文字提示</div>
            <lu-Button>左下</lu-Button>
            </lu-Tip>
        </div>
        <div class="center-right">
            <lu-Tip align="start" direction="right">
                <div slot="content">right-left文字提示</div>
            <lu-Button>右上</lu-Button>
            </lu-Tip>
            <lu-Tip  direction="right">
                <div slot="content">right-center文字提示</div>
            <lu-Button>右中</lu-Button>
            </lu-Tip>
            <lu-Tip align="end" direction="right">
                <div slot="content">right-right文字提示</div>
            <lu-Button>右下</lu-Button>
            </lu-Tip>
        </div>
    </div>
    <div class="bottom">
        <lu-Tip  align="start" direction="bottom">
            <div slot="content">bottom-left</div>
            <lu-Button>下左</lu-Button>
            </lu-Tip>
        <lu-Tip   direction="bottom">
            <div slot="content">bottom-center</div>
            <lu-Button>下中</lu-Button>
            </lu-Tip >
        <lu-Tip   align="end" direction="bottom">
            <div slot="content">bottom-right</div>
            <lu-Button>下右</lu-Button>
        </lu-Tip>
    </div>
</div>

::: demo
```html

<p>hover触发</p>
    <div class="top">
        <lu-Tip align="start">
            <div slot="content">top-left文字提示</div>
            <lu-Button>上左</lu-Button>
        </lu-Tip>
        <lu-Tip>
            <div slot="content" >top-center文字提示</div>
            <lu-Button>上中</lu-Button>
        </lu-Tip>
        <lu-Tip align="end">
            <div slot="content">top-right文字提示</div>
            <lu-Button>上右</lu-Button>
        </lu-Tip>
    </div>
    <div class="center">
        <div class="center-left">
            <lu-Tip direction="left" align="start">
                <div slot="content">left-left文字提示</div>
            <lu-Button>左上</lu-Button>
            </lu-Tip>
            <lu-Tip direction="left">
                <div slot="content">left-center文字提示</div>
            <lu-Button>左中</lu-Button>
            </lu-Tip>
            <lu-Tip align="end" direction="left">
                <div slot="content">left-right文字提示</div>
            <lu-Button>左下</lu-Button>
            </lu-Tip>
        </div>
        <div class="center-right">
            <lu-Tip align="start" direction="right">
                <div slot="content">right-left文字提示</div>
            <lu-Button>右上</lu-Button>
            </lu-Tip>
            <lu-Tip  direction="right">
                <div slot="content">right-center文字提示</div>
            <lu-Button>右中</lu-Button>
            </lu-Tip>
            <lu-Tip align="end" direction="right">
                <div slot="content">right-right文字提示</div>
            <lu-Button>右下</lu-Button>
            </lu-Tip>
        </div>
    </div>
    <div class="bottom">
        <lu-Tip  align="start" direction="bottom">
            <div slot="content">bottom-left</div>
            <lu-Button>下左</lu-Button>
            </lu-Tip>
        <lu-Tip   direction="bottom">
            <div slot="content">bottom-center</div>
            <lu-Button>下中</lu-Button>
            </lu-Tip >
        <lu-Tip   align="end" direction="bottom">
            <div slot="content">bottom-right</div>
            <lu-Button>下右</lu-Button>
        </lu-Tip>
    </div>

```
:::

### click触发


<div class="demo-block">
     <lu-Tip event-type="click" align="start" direction="bottom">
            <div slot="content">bottom-left</div>
            <lu-Button>下左</lu-Button>
            </lu-Tip>
        <lu-Tip  event-type="click" direction="bottom">
            <div slot="content">bottom-center</div>
            <lu-Button>下中</lu-Button>
            </lu-Tip >
        <lu-Tip  event-type="click" align="end" direction="bottom">
            <div slot="content">bottom-right</div>
            <lu-Button>下右</lu-Button>
        </lu-Tip>
</div>


::: demo
```html

<p>click触发</p>
     <lu-Tip event-type="click" align="start" direction="bottom">
        <div slot="content">bottom-left</div>
        <lu-Button>下左</lu-Button>
        </lu-Tip>
    <lu-Tip  event-type="click" direction="bottom">
        <div slot="content">bottom-center</div>
        <lu-Button>下中</lu-Button>
        </lu-Tip >
    <lu-Tip  event-type="click" align="end" direction="bottom">
        <div slot="content">bottom-right</div>
        <lu-Button>下右</lu-Button>
    </lu-Tip>

```
:::

<style>
.top,.bottom{
    padding:10px 100px;
    display:flex;
}
.lu-tip{
    text-align:center;
    margin:5px;
}
.center{
    position:relative;
    height:150px;
}
.center-left,.center-right{
    width:71px;
}
.center-left{
    position:absolute;
    left:0;
}
.center-right{
    position:absolute;
    left:350px;
}
</style>
