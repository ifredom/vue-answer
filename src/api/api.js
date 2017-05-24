import axios from 'axios';
import Qs from 'qs';
import NProgress from 'nprogress';
// 开发模式下，axios中的参数需要QS，若不加，则无法传递参数
function middlePromiseFun(url, params, method="get"){
  return   new Promise((resolve, reject) => {
      NProgress.start()
      axios({
          method: method,
          url: url,
          data: Qs.stringify(params)//若不加，则开发模式proxy代理情况下无法传递参数
      }).then(response => {
          NProgress.done()
          resolve(response.data)
      }, err => {
          reject(err)
      }).catch(error => {
          reject(error)
      })
  })
}

export const requestLogin = (url,params, method="get") => {
  return middlePromiseFun(url,params,method)
}





