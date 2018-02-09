import axios from 'axios';
import NProgress from 'nprogress';
import Qs from 'qs';
import { Toast } from 'mint-ui';

export const formatFileParams = data => {
  var formData = new FormData(); // FormData 对象
  var params = {};

  if (!data.hasOwnProperty('values')) {
    params['values'] = Object.assign({}, data);
  } else {
    params['values'] = Object.assign({}, data.values);
  }

  for (let item in params) {
    if (item === 'values') {
      // 普通参数
      for (let name in params[item]) {
        formData.append(name, params[item][name]);
      }
    } else if (item === 'files') {
      // 文件参数
      for (let name in params[item]) {
        let fileList = params[item][name];
        for (let i = 0; i < fileList.length; i++) {
          formData.append(name, fileList[i]);
        }
      }
    }
  }
  return formData;
};

export default function formMiddlePromise(url, params, method = 'post') {
  params = formatFileParams(params);
  method = method.toUpperCase();
  return new Promise((resolve, reject) => {
    NProgress.start();
    axios({
      method: method,
      url: url,
      timeout: 10000,
      data: params,
      // transformRequest: [(data, headers) => Qs.stringify(data)],
      headers: {
        'Content-Type': 'text/html; charset=UTF-8'
      }
    })
      .then(
        response => {
          NProgress.done();
          resolve(response.data);
        },
        err => {
          NProgress.done();
          Toast(err);
          Toast('服务器异常，请稍后再试');
          reject(err);
        }
      )
      .catch(thrown => {
        NProgress.done();
        Toast(thrown);
      });
  });
}
