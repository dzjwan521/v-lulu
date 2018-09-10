<div class="demo-block">
    <p>123</p>
    <lu-date-picker v-model="time" size="small"/>
    <lu-date-picker v-model="time" />
    <lu-date-picker v-model="time" size="large"/>
    <p>4123</p>
</div>

::: demo
```html

<div class="demo-block">
    <lu-date-picker v-model="time" size="small"/>
    <lu-date-picker v-model="time" />
    <lu-date-picker v-model="time" size="large"/>
</div>

```
:::

<script>
export default {
    data(){
        return {
            time: new Date()
        }
    }
}
</script>
