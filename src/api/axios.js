/**
 * Created by denept on 17/2/16.
 * http配置
 * axios拦截是为了进行token检测。有的页面要求是token，所以通过路由控制，
 * 有的地方仅仅是在数据请求时需要验证token，所以有了拦截器
 */

import axios from 'axios'
import store from '@/vuex/store'
import * as types from '@/vuex/getters'
import router from '@/router/router'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://example/public/api'
axios.defaults.headers.common['Accept'] = '*/*'

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`
        }
        // config.headers.Accept = `*/*`
        return config
    },
    err => {
        return Promise.reject(err)
    })

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
            case 401:
                // 401 清除token信息并跳转到登录页面
                store.commit(types.LOGOUT)
                router.replace({
                    path: 'login',
                    query: {redirect: router.currentRoute.fullPath}
                })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    })

export default axios

