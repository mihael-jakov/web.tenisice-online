import { createRouter, createWebHashHistory  } from "vue-router";

import home from "../components/pages/home.vue"
import NotFound from "../components/notfound.vue"
import dostupnoodmah from "../components/pages/dostupno_odmah.vue"

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path:'/dostupno_odmah',
        component: dostupnoodmah
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes 
})

export default router 