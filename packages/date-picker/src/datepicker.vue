<template>
<div class="lu-datepicker" :class="{'lu-datepicker-range':range,'lu-datepicker__clearable':clearable&&text&&!disabled}">
  <input readonly :value="text" :class="[show ? 'focus' : '', inputClass]" :disabled="disabled" :placeholder="placeholder" :name="name" v-if="type!=='inline'"/>
  <a class="lu-datepicker-close" @click.stop="cls"></a>
  <transition name="lu-datepicker-anim">
    <div class="lu-datepicker-popup" :class="[popupClass,{'lu-datepicker-inline':type==='inline'}]" tabindex="-1" v-if="show||type==='inline'">
      <template v-if="range">
        <vue-datepicker-local-calendar v-model="dates[0]" :left="true"></vue-datepicker-local-calendar>
        <vue-datepicker-local-calendar v-model="dates[1]" :right="true"></vue-datepicker-local-calendar>
      </template>
      <template v-else>
        <vue-datepicker-local-calendar v-model="dates[0]"></vue-datepicker-local-calendar>
      </template>
      <div v-if="showButtons" class="datepicker__buttons">
        <button @click.prevent.stop="cancel" class="lu-datepicker__button-cancel">{{this.local.cancelTip}}</button>
        <button @click.prevent.stop="submit" class="lu-datepicker__button-select">{{this.local.submitTip}}</button>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
    import VueDatepickerLocalCalendar from './VueDatepickerLocalCalendar.vue'
    export default {
        name: 'luDatePicker',
        components: { VueDatepickerLocalCalendar },
        props: {
            name: [String],
            inputClass: [String],
            popupClass: [String],
            value: [Date, Array, String],
            disabled: [Boolean],
            type: {
                type: String,
                default: 'normal'
            },
            rangeSeparator: {
                type: String,
                default: '~'
            },
            clearable: {
                type: Boolean,
                default: false
            },
            placeholder: [String],
            disabledDate: {
                type: Function,
                default: () => {
                    return false
                }
            },
            format: {
                type: String,
                default: 'YYYY-MM-DD'
            },
            local: {
                type: Object,
                default() {
                    return {
                        dow: 1, // Monday is the first day of the week
                        hourTip: '选择小时', // tip of select hour
                        minuteTip: '选择分钟', // tip of select minute
                        secondTip: '选择秒数', // tip of select second
                        yearSuffix: '年', // format of head
                        monthsHead: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'), // months of head
                        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'), // months of panel
                        weeks: '一_二_三_四_五_六_日'.split('_'), // weeks
                        cancelTip: '取消', // default text for cancel button
                        submitTip: '确定' // default text for submit button
                    }
                }
            },
            showButtons: {
                type: Boolean,
                default: false
            },
            dateRangeSelect: [Function]
        },
        data() {
            return {
                show: false,
                dates: this.vi(this.value)
            }
        },
        computed: {
            range() {
                return this.dates.length === 2
            },
            text() {
                const val = this.value
                const txt = this.dates.map(date => this.tf(date)).join(` ${this.rangeSeparator} `)
                if (Array.isArray(val)) {
                    return val.length > 1 ? txt : ''
                } else {
                    return val ? txt : ''
                }
            }
        },
        watch: {
            value(val) {
                this.dates = this.vi(this.value)
            }
        },
        methods: {
            get() {
                return Array.isArray(this.value) ? this.dates : this.dates[0]
            },
            cls() {
                this.$emit('clear')
                this.$emit('input', this.range ? [] : '')
            },
            vi(val) {
                if (Array.isArray(val)) {
                    return val.length > 1 ? val.map(item => new Date(item)) : [new Date(), new Date()]
                } else {
                    return val ? new Array(new Date(val)) : [new Date()]
                }
            },
            ok(leaveOpened) {
                const $this = this
                $this.$emit('input', $this.get())
                !leaveOpened && !$this.showButtons && setTimeout(() => {
                    $this.show = $this.range
                })
            },
            tf(time, format) {
                const year = time.getFullYear()
                const month = time.getMonth()
                const day = time.getDate()
                const hours24 = time.getHours()
                const hours = hours24 % 12 === 0 ? 12 : hours24 % 12
                const minutes = time.getMinutes()
                const seconds = time.getSeconds()
                const milliseconds = time.getMilliseconds()
                const dd = t => ('0' + t).slice(-2)
                const map = {
                    YYYY: year,
                    MM: dd(month + 1),
                    MMM: this.local.months[month],
                    MMMM: this.local.monthsHead[month],
                    M: month + 1,
                    DD: dd(day),
                    D: day,
                    HH: dd(hours24),
                    H: hours24,
                    hh: dd(hours),
                    h: hours,
                    mm: dd(minutes),
                    m: minutes,
                    ss: dd(seconds),
                    s: seconds,
                    S: milliseconds
                }
                return (format || this.format).replace(/Y+|M+|D+|H+|h+|m+|s+|S+/g, str => map[str])
            },
            dc(e) {
                this.show = this.$el.contains(e.target) && !this.disabled
            },
            submit() {
                this.$emit('confirm', this.get())
                this.show = false
            },
            cancel() {
                this.$emit('cancel')
                this.show = false
            }
        },
        mounted() {
            document.addEventListener('click', this.dc, true)
        },
        beforeDestroy() {
            document.removeEventListener('click', this.dc, true)
        }
    }
</script>
