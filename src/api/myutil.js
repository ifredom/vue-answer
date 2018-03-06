import axios from 'axios';
import NProgress from 'nprogress';
import Qs from 'qs';
import {
    Toast
} from 'mint-ui';


//添加请求拦截器
axios.interceptors.request.use(function (config) {
    //在发送请求之前做某事

    return config;
}, function (error) {
    //请求错误时做些事
    return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use(function (response) {
    //对响应数据做些事
    return response;
}, function (error) {
    //请求错误时做些事
    return Promise.reject(error);
});

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
                if (Object.prototype.toString.call(params[item][name]) === '[object Array]') {
                    params[item][name] = JSON.stringify(params[item][name])
                }
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
export default function formMiddlePromise(url, params, method = 'post') {
    var formdata = formatFileParams(params);
    method = method.toUpperCase();
    let uid = url + method + (!(!~+[]) + {});

    if (requesting[uid]) {
        console.warn('请勿重复点击');
        return;
    }
    requesting[uid] = true;
    return new Promise((resolve, reject) => {
        NProgress.start();
        axios({
                method: method,
                url: url,
                timeout: 10000,
                data: formdata,
                // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
                // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
                transformRequest: [function (data, headers) {
                    return data
                }],
                headers: {
                    'Content-Type': 'text/html; charset=UTF-8'
                }
            })
            .then(
                response => {
                    NProgress.done();
                    resolve(response.data);
                    requesting[uid] = false;
                },
                err => {
                    NProgress.done();
                    Toast(err);
                    reject(err);
                }
            )
            .catch(thrown => {
                NProgress.done();
                Toast(thrown);
            });
    });
}