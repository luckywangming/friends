// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import router from './router'
import "lib-flexible/flexible.js"
import "../static/stylus/index.styl"
import 'swiper/dist/css/swiper.css'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(MintUI)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})