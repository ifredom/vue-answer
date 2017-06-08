import axios from 'axios';
import Qs from 'qs';
import NProgress from 'nprogress';
// 开发模式下，axios中的参数需要QS，若不加，则无法传递参数
function middlePromiseFun(url, params, type="post"){
  return   new Promise((resolve, reject) => {
      NProgress.start()
      axios({
          method: type,
          url: url,
          timeout: 30000,
          data: Qs.stringify(params)//若不加，则开发模式proxy代理情况下无法传递参数
      }).then(response => {
          NProgress.done()
          resolve(response.data)
      }, err => {
          NProgress.done()
          console.log(err)
          reject(err)
      }).catch(error => {
          console.log(error)
          reject(error)
      })
  })
}

export const requestLogin = (params, type) => {
  return middlePromiseFun('self ajax address',params,type)
}
export const getMovies = (params, type) => {
  return middlePromiseFun('/api/in_theaters',params,type)
}





