import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

export function createRouter(){
    return new VueRouter({
        mode: 'history',
        base: '/home',
        routes: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('./views/Dashboard.vue')
            },
            {
                path: '/publications',
                name: 'publications',
                component: () => import('./views/Publications.vue')
            },
            {
                path: '/team',
                name: 'team',
                component: () => import('./views/Team.vue')
            },
            {
                path: '/notifications',
                name: 'notifications',
                component: () => import('./views/Notifications.vue')
            },
            {
                path: '/services',
                name: 'services',
                component: () => import('./views/Services.vue')
            },
            {
                path: '/offers',
                name: 'offers',
                component: () => import('./views/Offers.vue')
            },
            {
                path: '/media',
                name: 'media',
                component: () => import('./views/Media.vue')
            },
            {
                path: '/about',
                    name: 'about',
                component: () => import('./views/About.vue')
            }
        ]
    })
}
