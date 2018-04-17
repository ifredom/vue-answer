import axios from 'axios';
import NProgress from 'nprogress';
import Qs from 'qs';
import { MessageBox } from 'mint-ui';
import { generateRequestParamsSign, getToken } from '../util/common/api/params';
import { base, Api } from './index';
import router from '../router';
import Constants from '../constants';

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
  config => {
    // 在发送请求之前做某事

    if (config.method === 'post' || config.method === 'get') {
      // 从参数中剔除apiId
      let apiId = '';
      for (let key in config.data) {
        if (key === 'apiId') {
          apiId = config.data[key];
          delete config.data.apiId;
        }
      }

      // token
      let token = '';
      if (apiId === 'IFR.login') {
        // 登录接口
        token = '';
      } else {
        token = localStorage.getItem('token');
      }

      config.data = generateRequestParamsSign('IFR_WEB', token, config.data, 'IFR_WEB_2017');
    }
    return config;
  },
  error => {
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
  response => {
    // 对响应数据返回前做些事
    if (response.data && response.data.statusCode + '' !== '200') {
      MessageBox({
        showClose: true,
        message: response.data.msg,
        type: 'error'
      });
      return Promise.reject(new Error(response.data.msg));
    }
    return response;
  },
  error => {
    // 请求报错时做些事
    return Promise.reject(error);
  }
);

// 防止多次ajax请求
const requesting = {};
export default function formMiddlePromise (url, params, method = 'post') {

  let requestingId = url + method.toUpperCase() + (!!~+[] + {});
  if (requesting[requestingId]) {
    console.warn('请勿重复点击');
    return;
  }
  requesting[requestingId] = true;

  return new Promise((resolve, reject) => {
    NProgress.start();
    Axios({
      method: method,
      url: url,
      data: params
    })
      .then(
        response => {
          NProgress.done();
          resolve(response.data);
          requesting[requestingId] = false;
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
