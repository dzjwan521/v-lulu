<!-- radio -->
<template>
  <label class="lu-radio lu-radio_label" :class="{ 'is-focus': focus }">
      <input type="radio" class="lu-radio_input" ref="radio"
        v-bind="$attrs"
        :value="value"
        :name="name"
        v-on="changeListeners"
        :checked="checked === value"
         >
      <span class="lu-radio_inner"></span>
      {{label || value}}
  </label>
</template>

<script>
    export default {
        name: 'luRadio',
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
            label: String,
            checked: String,
            value: String,
            name: String
        },
        computed: {
            changeListeners: function () {
                var vm = this
                return Object.assign({},
                    this.$listeners,
                    {
                        change: function (event) {
                            vm.$emit('change', vm.$refs.radio.value);
                        },
                        focus: function (event) {
                            vm.focus = true
                            vm.$emit('focus', vm.$refs.radio.value);
                        },
                        blur: function (event) {
                            vm.focus = false
                            vm.$emit('blur', vm.$refs.radio.value);
                        },
                    }
                )
            }
        },

    }

</script>
