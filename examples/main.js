// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import LULU from '../packages/index'
import '../theme/lib/index.css'

Vue.component('demo-block', demoBlock)
Vue.use(LULU)

router.beforeEach((to, from, next) => {
    LULU.loadingBar.start()
    next()
})
router.afterEach((to, from) => {
    LULU.loadingBar.end()
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
