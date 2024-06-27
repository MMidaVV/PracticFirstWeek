import { createMemoryHistory, createRouter } from 'vue-router'
import TheContacts from '@/pages/TheContacts.vue'
import AboutUs from '@/pages/AboutUs.vue'
import Main from '@/pages/Main.vue'

export default createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/main', component: Main, alias: '/' },
        { path: '/contacts', component: TheContacts },
        { path: '/about', component: AboutUs },
    ]
})