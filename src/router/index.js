import {createRouter, createWebHistory} from 'vue-router'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/HomeMain.vue')
        },
        {
            path: '/job-board',
            component: () => import('../components/JobBoard/JobBoardMain')
        },
        {
            path: '/profile',
            component: () => import('../components/ProfileMain')
        },
        {
            path: '/job-info',
            component: () => import('../components/JobBoard/JobCardModal.vue')
        }
    ]
})

export default router