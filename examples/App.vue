<template>
  <div id="app">
    <mainHeader></mainHeader>
    <div class="container" v-if="!isIndex">
        <sideNav class="nav"></sideNav>
        <transition name="router-fade" mode="out-in">
            <router-view  class="view"></router-view>
        </transition>
    </div>
    <transition  name="slide-top" mode="out-in">
        <div v-if="isIndex" class="index">
            <router-view class="page" ></router-view>
        </div>
    </transition>


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
                isIndex: true
            }
        },
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

.container {
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
  //   box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
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
