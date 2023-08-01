import {createRouter, createWebHistory} from 'vue-router'
import Contacts from '../views/ContactsMain.vue'
import JobBoard from '../views/JobBoardMain'
import ProfileMain from '../views/ProfileMain'
import HomeMain from '../views/HomeMain.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: HomeMain
        },
        {
            path: '/job-board',
            name: 'job-board',
            component: JobBoard
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileMain
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        }
    ]
})

export default router