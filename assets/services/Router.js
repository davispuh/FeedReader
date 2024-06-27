import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../modules/App/NotFound'

export default createRouter({
    history: createWebHistory(),
    routes: [{ path: '*', component: NotFound, meta: { public: true } }]
})
