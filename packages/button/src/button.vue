<template>
  <button
    @click="$emit('click')"
    class="lu-button"
    :disabled="disabled"
    :class="[
    'lu-button_'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'lu-button_size-'+size
    ]"
  >

    <i v-if="(icon !== '')||loading" :class="[icon,{'loading':loading}]"></i>
    <slot></slot>
  </button>
</template>
<script>
    export default {
        name: 'luButton',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            loading: {
                type: Boolean,
                default: false
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
        data() {
            return {
                msg: 'button'
            }
        }
    }
</script>
