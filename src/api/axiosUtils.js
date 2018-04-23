import axios from 'axios';
import NProgress from 'nprogress';
import Qs from 'qs';
import { MessageBox } from 'mint-ui';
import { generateRequestParamsSign, getToken } from '../util/common/api/params';

import Constants from '../constants';

const Axios = axios.create({
  baseURL: '',
  timeout: 10000,
  responseType: 'json',
  // withCredentials: true, // 是否带cookie发起请求
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
});

function isTestUrl (config) {
  var isTest = true;
  if (config.url.indexOf('/douban') > -1) {
  } else if (config.url.indexOf('/baidu') > -1) {
  } else if (config.url.indexOf('/zhihu') > -1) {
  } else if (config.url.indexOf('/zhihuribao') > -1) {
  } else {
    isTest = false;
  }

  return isTest;
}

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某事

    if (!isTestUrl(config)) {
      // 兼容测试地址 百度 豆瓣 之类的代理
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
axios.interceptors.response.use(
  response => {
    // 对响应数据返回前做些事
    const errorMsg = '请求失败';
    if (response.data && response.status + '' != 200) {
      MessageBox({
        showClose: true,
        message: errorMsg,
        type: 'error'
      });
      return Promise.reject(new Error(errorMsg));
    }
    return response;
  },
  error => {
    // 请求报错时做些事
    return Promise.reject(error);
  }
);

export const formatFileParams = data => {
  var formData = new FormData(); // FormData 对象
  var params = {};

  if (data && !data.hasOwnProperty('values')) {
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

// 防止多次ajax请求
const requesting = {};
export default function formMiddlePromise (url, params = {}, method = 'post') {
  let requestingId = url + method.toUpperCase() + (!!~+[] + {});
  if (requesting[requestingId]) {
    console.warn('请勿重复点击');
    return;
  }
  requesting[requestingId] = true;

  params = formatFileParams(params);
  method = method.toUpperCase();

  return new Promise((resolve, reject) => {
    NProgress.start();
    axios({
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
