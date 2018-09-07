<template>
  <transition name="lu-zoom-in-center">
    <div class="lu-tag" :class="'lu-tag_'+color">
      <span class="lu-tag_desc"><slot></slot></span>
      <i class="lu-icon-close2 lu-tag_close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
    export default {
        name: 'luTag',
        props: {
            closable: Boolean,
            color: {
                type: String,
                default: 'primary'
            }
        },
        data() {
            return {
                isclosed: false
            }
        },
        methods: {
            hiddenTag() {
                this.isclosed = true
                this.$emit('close')
            }
        }
    }
</script>
