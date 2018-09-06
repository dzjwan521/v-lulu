
<!-- tips
/*
 * @Author: dzj
 * @Date: 2018-09-03 14:59:46
 * @Last Modified by: dzj
 * @Last Modified time: 2018-09-06 11:24:43
 */-->
<template>
    <div class="lu-tip" @click="clickHanlde" @mouseenter="mouseOverHandle" @mouseleave="mouseLeaveHandle">
        <transition :name="transtionClass" v-on:before-enter="beforeEnter">
            <div v-show="isShow" class="lu-tip_content"  ref="content" :style="[styles,{background:bgColor}]" @mouseenter="mouseOverHandle" >
                <div class="lu-tip_arrow lu-tip_arrow_placement" :style="borderColor" :x-placement="placement"></div>
                <div>
                    <slot name="content" ></slot>
                </div>
            </div>
        </transition>
        <div class="lu-tip_real"><slot></slot></div>

    </div>
</template>
<script>
    import setPosition from './setPosition.js'
    export default {
        name: 'luTip',
        data() {
            return {
                isShow: false,
                offsetTop: 0,//组件相对top
                offsetLeft: 0,//组件相对left
                w: 0,//组件宽度
                h: 0,//组件高度
                contentW: 0,//slot插槽宽度
                contentH: 0,//slot插槽高度,
                transtionClass: 'top-fade'
            }
        },
        props: {
            background: {
                type: String,
                default: '#4c5161'
            },
            direction: {
                type: String,
                validator: function (value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1
                },
                default: 'top'
            },
            align: {
                type: String,
                validator: function (value) {
                    return ['start', 'end', 'center'].indexOf(value) !== -1
                },
                default: 'center'
            },
            eventType: {
                type: String,
                default: 'hover' //'click'
            },
            delay: {
                type: Number,    //单位ms
                default: 100
            },
            onShow: {
                type: Function
            },
            onHide: {
                type: Function
            }
        },
        computed: {

            placement() {
                return this.direction + '-' + this.align
            },
            bgColor() {
                const colorObj = {
                    dark: '#4c5161',
                    blue: '#2486ff',
                    green: '#01cf97',
                    orange: '#f28c48',
                    red: '#f4615c',
                }
                const color = colorObj[this.background] || this.background || '#4c5161'
                return color
            },
            borderColor() {
                const color = this.bgColor
                const directionMap = {
                    'top': {
                        borderTopColor: color
                    },
                    'bottom': {
                        borderBottomColor: color
                    },
                    'left': {
                        borderLedtColor: color
                    },
                    'right': {
                        borderRightColor: color
                    }
                }
                return directionMap[this.direction]
            },
            styles() {

                let position = setPosition(this.placement, this.offsetLeft, this.offsetTop, this.contentW, this.contentH, this.w, this.h)
                return {
                    position: 'absolute',
                    left: position.left + 'px',
                    top: position.top + 'px',
                }

            },
        },
        mounted() {

        }
        ,
        created() {
            document.body.addEventListener('click', this.hide)
        },
        destroyed() {
            this.eventType == 'click' && document.body.removeEventListener('click', this.hide)
        },
        methods: {
            beforeEnter() {
                switch (this.direction) {
                    case 'bottom':
                        this.transtionClass = 'bottom-fade'
                        break;
                    case 'left':
                        this.transtionClass = 'left-fade'
                        break;
                    case 'right':
                        this.transtionClass = 'right-fade'
                        break;
                    default: this.transtionClass = 'top-fade'
                        break;
                }
            },
            getContentStyle() {
                this.$nextTick(() => {
                    const el = this.$el;
                    this.offsetTop = el.offsetTop
                    this.offsetLeft = el.offsetLeft
                    this.w = el.offsetWidth
                    this.h = el.offsetHeight
                    this.contentW = this.$refs.content.offsetWidth
                    this.contentH = this.$refs.content.offsetHeight
                })

            },
            show(event) {
                event && event.stopPropagation()
                this.isShow = true
                this.getContentStyle()
                this.onShow && this.onShow()
            },
            hide(event) {
                event && event.stopPropagation()
                this.isShow = false
                this.onShow && this.onHide()

            },
            clickHanlde() {
                if (this.eventType == 'click') {
                    setTimeout(() => {
                        this.show()
                    }, this.delay);
                }
            },
            mouseOverHandle() {
                if (this.eventType == 'hover') {
                    setTimeout(() => {
                        this.show()
                    }, this.delay);
                }
            },
            mouseLeaveHandle() {
                if (this.eventType == 'hover') {
                    setTimeout(() => {
                        this.hide()
                    }, this.delay);
                }
            }

        }
    }

</script>
