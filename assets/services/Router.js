import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../modules/App/NotFound'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{ path: '*', component: NotFound, meta: { public: true } }]
})
