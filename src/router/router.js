import Vue from 'vue'
import Router from 'vue-router'
import My from '@/page/my/my'
import Person from '@/page/person/person'
import Home from '@/page/home/home'
import Addperson from '@/page/addperson/addperson'
import PageTransition from '../components/pagetransition'
import Login from '@/page/login'

import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
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
              redirect:'/login'
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
            }

          ]
        },

      ]
    }
  ]
})
