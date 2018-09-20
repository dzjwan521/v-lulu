<!-- checkbox -->
<template>
    <label class="lu-checkbox lu-checkbox_label" :class="{ 'is-focus': focus,'is-disabled':disabled }">
        <input type="checkbox" class="lu-checkbox_input" ref="checkbox"
            @change="doChange"
            @focus="doFocus"
            @blur="doBlur"
            :checked="isCheck"
            :value="value"
            :disabled="disabled"
        >
      <span class="lu-checkbox_inner"></span>
      {{label || value}}
  </label>
</template>

<script>
    export default {
        name: 'luCheckbox',
        data() {
            return {
                focus: false
            }
        },
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            disabled: Boolean,
            checked: [Boolean, Array],
            value: [String, Object, Number],
            label: String,
        },
        computed: {

            isCheck() {
                const vm = this
                if (Array.isArray(vm.checked)) {
                    const index = vm.checked.indexOf(vm.value)
                    if (index == -1) {
                        return false
                    } else {
                        return true
                    }
                } else if (typeof vm.checked === 'boolean') {
                    return vm.checked
                }

            }
        },
        methods: {
            doChange() {
                const flag = this.$refs.checkbox.checked
                if ((Array.isArray(this.checked))) {
                    const index = this.checked.indexOf(this.value)
                    if (flag) {
                        this.checked.push(this.value)
                    } else {
                        this.checked.splice(index, 1)
                    }
                    this.$emit('change', this.checked);
                } else {
                    this.$emit('change', flag);
                }
            },
            doFocus() {
                this.focus = true
                this.$emit('focus', this.value);
            },
            doBlur() {
                this.focus = false
                this.$emit('blur', this.value);
            }

        }
    }

</script>
