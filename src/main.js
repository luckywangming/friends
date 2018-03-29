// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import router from './router'
import Api from './api/index.js'
import "lib-flexible/flexible.js"
import "../static/stylus/index.styl"
import 'mint-ui/lib/style.css'

Vue.prototype.$api = Api
Vue.config.productionTip = false
Vue.use(MintUI)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})