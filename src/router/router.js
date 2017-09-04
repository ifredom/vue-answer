/* only page components*/
import App from '@/App'

import Login from '@/page/login'
import Home from '@/page/home/home'
import Search from '@/components/search/searchmain'
import Find from '@/page/find/find'
import Sweet from '@/page/sweet/sweet'


const router = [{
    path: '/',
    component: App,
    children: [{
            path: '/',
            redirect: '/login' //默认路由，直接重定向到地址 /login
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/find',
            component: Find
        },
        {
            path: '/sweet',
            component: Sweet
        }
    ]
}]

export default router