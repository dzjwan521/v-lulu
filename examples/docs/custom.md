
<style lang="less">
.color_list {
    max-width: 960px;
    font-size: 0;
}
.list_item {
    width: 237px;
    display: inline-block;
    margin: 25px 0;
    position: relative;
}
.color_list h6 {
    font-size: 20px;
    margin: 0px 0 5px;
    color: #4c5161;
}
.color_list p {
    margin: 0;
    font-size: 16px;
    color: #4c5161;
}
.list_item:before {
    content: '';
    border: 40px solid transparent;
    float: left;
    border-radius: 50%;
    margin-right: 25px;
    box-shadow: 0 4px 16px;
    opacity: .5;
}
.list_item:after {
    content: '';
    position: absolute;
    border: 40px solid;
    border-radius: 50%;
    left: 0;
    top: 0;
}
</style>
## 颜色
内置这些颜色可以直接使用，使用方法：
```css
css变量使用
.dark{
    color:var(--dark);//两者相等
    color:#4c5161;
}
```
<div class="demo-block">
 <div class="color_list">
    <div class="list_item dark">
        <h6>默认文字</h6>
        <p>--dark</p>
        <p>#4c5161</p>
    </div>
     <div class="list_item blue">
        <h6>链接高亮</h6>
        <p>--blue</p>
        <p>#2486ff</p>
    </div>
     <div class="list_item darkblue">
        <h6>hover时候</h6>
        <p>--darkblue</p>
        <p>#008cbf</p>
    </div>
     <div class="list_item silver">
        <h6>银色图标</h6>
        <p>--silver</p>
        <p>#b6bbc6</p>
    </div>
     <div class="list_item gray">
        <h6>灰色文字</h6>
        <p>--gray</p>
        <p>#a2a9b6</p>
    </div>
     <div class="list_item grayDisabled">
        <h6>灰色禁用</h6>
        <p>--grayDisabled</p>
        <p>#ccd0d7</p>
    </div>
     <div class="list_item green">
        <h6>成功绿色</h6>
        <p>--green</p>
        <p>#01cf97</p>
    </div>
     <div class="list_item orange">
        <h6>警示橘色</h6>
        <p>--orange</p>
        <p>#f28c48</p>
    </div>
    <div class="list_item red">
        <h6>警告红色</h6>
        <p>--red</p>
        <p>#f4615c</p>
    </div>
    <div class="list_item light">
        <h6>背景色</h6>
        <p>--light</p>
        <p>#f7f9fa</p>
    </div>
  </div>


</div>




## 如何自定义颜色
如果内置的颜色不能满足你项目要求，可以自由定制
