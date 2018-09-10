<template>
  <div id="app" >
    <mainHeader></mainHeader>
    <div v-if="isIndex" class="index">
            <router-view class="page" ></router-view>
    </div>
    <div class="container" v-else>
        <sideNav class="nav"></sideNav>
        <transition :name="type" mode="out-in"  v-on:after-leave="afterLeave">
            <router-view  class="view"></router-view>
        </transition>
    </div>
    <!-- <mainFooter v-if="!isIndex"></mainFooter> -->
  </div>
</template>

<script>
    import mainHeader from './components/header.vue'
    import mainFooter from './components/footer.vue'
    import sideNav from './components/side-nav.vue'

    export default {
        name: 'app',
        data() {
            return {
                init: false,
                isIndex: true,
                animation: ['router-fade', 'lu-zoom-in-center', 'slide-top'],
                type: 'router-fade'
            }
        },
        methods: {
            afterLeave() {
                const len = this.animation.length
                const num = Math.floor(Math.random() * len)
                this.type = this.animation[num]
            }
        }
        ,
        watch: {
            $route() {
                this.isIndex = this.$route.name === 'index'
            }
        },
        mounted() {
            //  这里模拟数据请求
            setTimeout(() => {
                this.init = true
            }, 250)
        },
        components: {
            mainHeader,
            sideNav,
            mainFooter,
        }
    }
</script>

<style lang="less" type="text/less">
@import "./assets/less/index";
#app {
  width: 100vw;
  height: 100vh;
}
.container {
  margin: 0 auto;
  width: 100%;
  background: #f7f9fa;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    float: left;
    width: calc(~"100% - 215px");
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}
svg {
  fill: #4c5161;
}

.container:after {
  content: "";
  clear: both;
  display: block;
}
</style>
