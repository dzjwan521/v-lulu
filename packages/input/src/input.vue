<!--  -->
<template>
  <Tip>
      <i v-if="!!icon" :class="icon"></i>
      <i v-if="clearable" class="lu-icon-closefill"></i>
      <input class="" type="text"
            @focus="handleFocus"
            @blur="handleBlur"
            :value="val"
            :disabled="disabled"
            :placeholder="placeholder"
            :name="name"
            >
      <div v-if="type==''">
          <ul>
              <li></li>
          </ul>
      </div>
  </Tip>
</template>

<script>
    import Tip from '../../tip/src/tip.vue'
    export default {
        name: "luInput",
        components: { Tip },
        data() {
            return {

            };
        },
        props: {
            type: {

            },
            icon: [String],
            name: [String],
            clearable: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: [String],
        },
        computed: {},
        methods: {
            handleFocus() {

            },
            handleBlur() {

            }
        },
        mounted() { },
        created() { },

    }

</script>
