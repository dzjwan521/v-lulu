<!--  -->
<template>
    <div class="lu-popup">
        <div v-show="isShow" class="lu-popup_mask" key="mask" @click="hide"></div>
        <section class="lu-popup_section" v-show="isShow" key="popup" :style="styleObject">
            <div class="lu-popup_header">
                <i class="iconfont  lu-popup_header_icon" :class="[icon]" v-show="level"></i>
                <div class="lu-popup_header_title">{{title}}</div>
                <i class="iconfont icon-close" @click="hide('close')"></i>
            </div>
            <div class="lu-popup_body">
                <p>{{message}}</p>
                <lu-input v-show="type=='prompt'" autofocus v-model="inputValue" class="lu-popup_input" ></lu-input>
               <slot></slot>
            </div>
            <div class="lu-popup_footer">
                <span class="lu-popup_btn">
                    <lu-button @click="hide('cancle')" v-show="type!='alert'">{{cancleBtn}}</lu-button>
                    <lu-button type="primary" @click="hide('confirm')">{{confirmBtn}}</lu-button>
                </span>

            </div>
        </section>
    </div>
</template>

<script>
    import mixins from './mixins';
    import luButton from '../../button'
    import luInput from '../../input'
    export default {
        name: 'luPopup',
        mixins: [mixins],
        components: { luButton, luInput },
        data() {
            return {
                isShow: false,
                inputValue: ''
            };
        },
        props: {
            styleObject: {
                type: [Array, Object],
                default: function () {
                    return { minWidth: '520px' }
                }
            },
            title: String,
            type: String,
            level: String,
            message: [String, Object],
            cancleBtn: String,
            confirmBtn: String,
            callback: Function
        },
        components: {},
        computed: {
            icon() {
                const classes = this.level ? 'lu-popup_header_icon_' + this.level : ''
                return classes
            }
        },
        methods: {
            show() {
                this.isShow = true
            },
            hide(action) {
                this.isShow = false
                this.remove()
                if (action) this.callback(action)
            },

        },


    }

</script>
