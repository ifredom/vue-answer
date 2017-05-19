import axios from 'axios';
import Qs from 'qs';
// 开发模式下，axios中的参数需要QS，若不加，则无法传递参数

export const requestLogin = (url,params, method="get") => {// 参数已传递
  return   new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: Qs.stringify(params)
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch(error => {
      reject(error)
    })
  })
};






