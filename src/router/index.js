import { createRouter, createWebHashHistory  } from "vue-router";

import home from "../components/pages/home.vue"
import NotFound from "../components/notfound.vue"
import about_us from "../components/pages/aboutus.vue"
import contact from "../components/pages/contact.vue"
import store from "../components/pages/dostupno_odmah.vue"
import productdetails from "../components/pages/productdetail.vue"
import PrivacyPolicy from "../components/pages/Rules/pp.vue"
import RefundPolicy from "../components/pages/Rules/rp.vue"
import TermsOfService from "../components/pages/Rules/tos.vue"
import Dostupno_Jordan from "../components/pages/naruciti_jordan.vue"
import dostupnost_pick from "../components/pages/dostupnost_pick.vue"

const routes = [
    {
        path: '/',
        component: home
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
        path:'/PrivacyPolicy',
        component: PrivacyPolicy
    },
    {
        path:'/RefundPolicy',
        component: RefundPolicy
    },
    {
        path:'/TermsOfService',
        component: TermsOfService
    },
    {
        path:'/dostupno_jordan',
        component: Dostupno_Jordan
    },
    {
        path:'/dostupnost_pick',
        component:dostupnost_pick
    },
    {
        path:'/:id',
        name:'productsdetail',
        component:productdetails
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || { top:0 }
      }
})

export default router 