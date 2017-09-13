import axios from 'axios'
import Qs from 'qs'
import NProgress from 'nprogress'

// 每一个地址前都需要/api来进行反向代理的识别
let base = ''
let baiduApi = 'http://apis.baidu.com/tianyiweather/basicforecast/weatherapi'
if (process.env.NODE_ENV === 'development') {
    base = 'http://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer' // [开发环境]
} else {
    base = 'http://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer' //  [发布环境]
}
// 数据是数组格式时，转化为字符串

function formatParams(params) {
    for (let i in params) {
        if (Object.prototype.toString.call(params[i]) === '[object Array]') {
            params[i] = JSON.stringify(params[i])
        }
    }
}

function middlePromiseFun(url, params = {}, type = 'get') {
    formatParams(params)
    type = type.toUpperCase();
    return new Promise((resolve, reject) => {
        NProgress.start()
        axios({
            method: type,
            url,
            timeout: 30000,
            data: params,
            transformRequest: [function(data) {
                // 这里提前处理请求的数据，若不加，则开发模式proxy代理情况下无法传递参数
                return Qs.stringify(data);
            }]
        }).then(response => {
            NProgress.done()
            resolve(response.data)
        }, error => {
            NProgress.done()
            reject(error)
        })
    })
}

export {
    base
}

export const Login = (params) => { // 登陆接口
    return middlePromiseFun(`${base}/login`, params)
}
export const tianqi = (params) => { // 百度识别身份证
    return middlePromiseFun(baiduApi, params, 'post')
}