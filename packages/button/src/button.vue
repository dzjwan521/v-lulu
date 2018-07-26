<template>
  <button
    @click="$emit('click')"
    class="lu_button"
    :disabled="disabled"
    :class="[
    'lu_button_'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'lu_button_size-'+size
    ]"
  >
    <i v-if="icon !== ''" :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'luButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
