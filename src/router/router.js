/* only page components*/
import App from '@/App'
import My from '@/page/my/my'
import Person from '@/page/person/person'
import Home from '@/page/home/home'
import Addperson from '@/page/addperson/addperson'
import PageTransition from '@/components/pagetransition'
import Searchmain from '@/components/search/searchmain'
import Login from '@/page/login'

const router = [
    {
      path: '/',
      component: App,
      children: [
        {
          // 该路由为父路由的默认路由,专场动画使用
          path: '',
          component: PageTransition,
          children:[
            {
              path: '/',
              redirect:'/login'//默认路由，直接重定向到地址 /login
            },
            {
              path: '/login',
              component: Login,
            },
            {
              path: '/home',
              component: Home,
            },
            {
              path: '/person',
              name: 'person',
              component: Person
            },
            {
              path: '/my',
              name: 'my',
              component: My
            },
            {
              path: '/addperson',
              name: 'addperson',
              component: Addperson
            },
            {
              path: '/search',
              name: 'search',
              component: Searchmain
            }

          ]
        },

      ]
    }
  ]

export default router
