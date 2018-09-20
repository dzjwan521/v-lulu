<!--  -->
<template>
    <div class="lu-input">
        <input v-if="type!=='textarea'" :class="classes" :type="type" :size="size" ref="input"
            v-bind="$attrs"
            @focus="$emit('focus',$event)"
            @blur="$emit('blur',$event)"
            @change="$emit('change',$event)"
            @input="handleInput"
            :style="styleObject"
            :value="currentValue"
            :disabled="disabled"
            :readonly="readonly"
            :placeholder="placeholder"
            :name="name"
            >
        <textarea ref="textarea" v-else v-bind="$attrs" class="lu-input_default"
         @focus="$emit('focus',$event)"
            @blur="$emit('blur',$event)"
            @change="$emit('change',$event)"
            @input="handleInput"
            :style="styleObject"
            :value="currentValue"
            :disabled="disabled"
            :readonly="readonly"
            :placeholder="placeholder"
            :name="name"></textarea>
        <i v-show="clearable" class="iconfont icon-roundclosefill lu-input_icon"  @click="clear"></i>
        <i v-show="suffix" class="lu-input_icon" :class="[suffix,suffix&&'is-suffix']" @click.stop="$emit('icon-click',$event)"></i>
        <i v-show="prefix" class="lu-input_icon" :class="[prefix,prefix&&'is-prefix']"></i>

  </div>
</template>

<script>
    export default {
        name: "luInput",
        components: {},
        data() {
            return {
                currentValue: this.value === undefined || this.value === null ? '' : this.value,
            };
        },
        props: {
            value: [String, Number],
            styleObject: [String, Object, Array],
            type: {
                type: String,
                default: 'text'
            },
            size: [String],
            prefix: [String],
            suffix: [String],
            name: [String],
            clearable: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: [String],
        },
        watch: {
            value(val, oldValue) {
                this.setCurrentValue(val);
            }
        },
        computed: {
            classes() {
                const list = []
                list.push('lu-input_default')
                this.size && list.push(`lu-input_default_${this.size}`)
                this.clearable && list.push('is-clearable')
                this.prefix && list.push('is-prefix')
                this.suffix && list.push('is-suffix')
                return list
            },

        },
        methods: {
            setCurrentValue(value) {
                this.currentValue = value;
            },
            focus() {
                this.$refs.input.focus();
            },
            blur() {
                this.$refs.input.blur();
            },
            handleInput(event) {
                const value = event.target.value;
                this.setCurrentValue(value);
                this.$emit('input', value);
            },
            clear(event) {
                this.$emit('input', '');
                this.$emit('change', '');
                this.$emit('clear');
                this.setCurrentValue(' ');
                this.focus();
            }
        },
        mounted() { },
        created() { },

    }

</script>
