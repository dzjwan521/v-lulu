<template>
  <div class="lu-loadingBar">
    <div
      class="lu-loadingBar_bar"
      :class="isError ? 'lu-loadingBar_error' : ''"
      role="bar"
      :style="{transform: 'translate3d(-'+(100-totalProgress)+'%, 0, 0)'}">
      <div class="lu-loadingBar_peg"></div>
    </div>
    <div class="lu-loadingBar_spinner" role="spinner" v-if="showSpinner">
      <div class="spinner-icon" :class="isError ? 'spinner-icon--error' : ''"
           :style="{'animation': 'lu-spinner 400ms '+easing+' infinite'}"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'luLoadingbar',
        props: {
            type: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                speed: 5,
                easing: 'linear',
                percentNum: 0,
                totalProgress: 0,
                showSpinner: true,
                isError: false
            }
        }
    }
</script>
