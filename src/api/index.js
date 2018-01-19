import axios from 'axios'
import Qs from 'qs'
import NProgress from 'nprogress'

// 每一个地址前都需要/api来进行反向代理的识别
let base = ''
let mockApi = {
  mockLocalServer: 'http://localhost:8869/mock',
  baiduApi: 'http://apis.baidu.com/tianyiweather/basicforecast/weatherapi',
  zhihuApi: '/zhihu',
  zhihuribaoApiHot: '/zhihuribao'
}


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
      transformRequest: [function (data) {
        // 这里提前处理请求的数据，若不加，则开发模式proxy代理情况下无法传递参数
        return Qs.stringify(data);
      }]
    }).then(response => {
      NProgress.done()
      resolve(response.data)
    }, error => {
      NProgress.done()
      reject(error)
    }).catch(thrown => {
      NProgress.done()
      console.log(thrown)
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
  return middlePromiseFun(mockApi.baiduApi, params, 'post')
}
// 自定义服务端接口mock
export const MockLogin = (params) => { // 登陆接口
  return middlePromiseFun(`${mockApi.mockLocalServer}/login`, params, 'post')
}

// 知乎
export const zhihuExplore = (params) => { // 发现
  return middlePromiseFun(`${mockApi.zhihuApi}/explore`, params, 'get')
}
export const zhihuHot = (params) => {  // 热门消息
  return middlePromiseFun(`${mockApi.zhihuribaoApiHot}/3/news/hot`, params, 'get')
}