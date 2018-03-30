import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import girlList from '@/components/girl-list/girl-list'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/girlList',
        name: 'girlList',
        component: girlList
    }]
})