import { createRouter, createWebHashHistory  } from "vue-router";

import home from "../components/pages/home.vue"
import NotFound from "../components/notfound.vue"
import dostupnoodmah from "../components/pages/dostupno_odmah.vue"
import about_us from "../components/pages/aboutus.vue"
import contact from "../components/pages/contact.vue"
import store from "../components/pages/dostupno_odmah.vue"

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
        path:'/about',
        component: about_us
    },
    {
        path:'/contact',
        component: contact
    },
    {
        path:'/store',
        component: store
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