import axios from 'axios'
import Qs from 'qs'
import NProgress from 'nprogress'

// 每一个地址前都需要/api来进行反向代理的识别
let base = ''
if (process.env.NODE_ENV === 'development') {
    base = 'http://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer' // [开发环境]
} else {
    base = 'http://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer' //  [发布环境]
}
// 数据是数组格式时，转化为字符串
function formatParams(params) {
    for (const i in params) {
        if (Object.prototype.toString.call(params[i]) === '[object Array]') {
            params[i] = JSON.stringify(params[i])
        }
    }
}

function middlePromiseFun(url, params = {}, type = 'get') {
    return new Promise((resolve, reject) => {
        formatParams(params)
        NProgress.start()
        axios({
            method: type,
            url,
            timeout: 30000,
            data: Qs.stringify(params) // 开发模式下,需要进行反向代理。若不加，则开发模式proxy代理情况下无法传递参数
        }).then(response => {
            NProgress.done()
            resolve(response.data)
        }, err => {
            NProgress.done()
            reject(err)
        })
    })
}

export {
    base
}

export const Login = (params) => { // 登陆接口
    return middlePromiseFun(`${base}/login`)
}
export const GetMovies = (params) => { // 获取电影接口
    return middlePromiseFun(`${base}/in_theaters`, params, 'get')
}
