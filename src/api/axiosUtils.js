import axios from 'axios';
import NProgress from 'nprogress';
import Qs from 'qs';
import { MessageBox } from 'mint-ui';
import { generateRequestParamsSign, getToken } from './commonUtils';
import { base, Api } from './index';
import router from '../router';

const Axios = axios.create({
  baseURL: Api ? Api.mockApi.proxyService : '',
  timeout: 10000,
  responseType: 'json',
  // withCredentials: true, // 是否带cookie发起请求
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
});

// 添加请求拦截器
Axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做某事
    if (config.method === 'post' || config.method === 'get') {
      let token = '';
      config.data = generateRequestParamsSign('WEB_CLIENT', token, config.data, 'WEB_CLIENT_2017');
    }
    return config;
  },
  function (error) {
    // 请求报错误时做些事
    MessageBox({
      showClose: true,
      message: error,
      type: 'error'
    });
    return Promise.reject(error);
  }
);

// 添加响应拦截器
Axios.interceptors.response.use(
  function (response) {
    // 对响应数据返回前做些事
    return response;
  },
  function (error) {
    // 请求报错时做些事
    MessageBox({
      showClose: true,
      message: error,
      type: 'error'
    });

    return Promise.reject(error);
  }
);

// 防止多次ajax请求
const requesting = {};
export default function formMiddlePromise (url, params, method = 'post') {
  // var formdata = formatFileParams(params);
  var formdata = params;
  method = method.toUpperCase();
  let uid = url + method + (!!~+[] + {});

  if (requesting[uid]) {
    console.warn('请勿重复点击');
    return;
  }
  requesting[uid] = true;
  return new Promise((resolve, reject) => {
    NProgress.start();
    Axios({
      method: method,
      url: url,
      data: formdata
    })
      .then(
        response => {
          NProgress.done();
          resolve(response.data);
          requesting[uid] = false;
        },
        err => {
          NProgress.done();
          reject(err);
        }
      )
      .catch(thrown => {
        NProgress.done();
      });
  });
}
