import Vue from 'vue'
import Router from 'vue-router'
import one from '@/pages/one.vue'

Vue.use(Router)

const routers =[
    {path : '/',component : one}
]
const router = new Router({
    routes: routers
})