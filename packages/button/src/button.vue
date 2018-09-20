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

    <i v-if="(icon !== '')&& !loading" class="fs-14" :class="[icon]"></i>
    <i v-if="loading" class="fs-14 iconfont" :class="[{'icon-loading-out lu-rotate':loading}]"></i>
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
