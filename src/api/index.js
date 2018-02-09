import formMiddlePromise from './myutil';

// 每一个地址前都需要/api来进行反向代理的识别
let base = '';
let mockApi = {
    mockLocalServer: 'http://localhost:8869/mock',
    baiduApi: 'http://apis.baidu.com/tianyiweather/basicforecast/weatherapi',
    zhihuApi: '/zhihu',
    zhihuribaoApiHot: '/zhihuribao'
};

if (process.env.NODE_ENV === 'development') {
    base = 'http://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer'; // [开发环境]
} else {
    base = 'http://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer'; //  [发布环境]
}

export { base };
// 登陆接口
export const Login = (params, method) => {
    return formMiddlePromise(`${base}/login`, params, method);
};
// 百度识别身份证
export const tianqi = params => {
    return formMiddlePromise(mockApi.baiduApi, params, 'post');
};
// mock接口-登录
export const MockLogin = params => {
    return formMiddlePromise(
        `${mockApi.mockLocalServer}/login`,
        params,
        'post'
    );
};
// 知乎-发现
export const zhihuExplore = params => {
    return formMiddlePromise(`${mockApi.zhihuApi}/explore`, params, 'get');
};
// 知乎-热门消息
export const zhihuHot = params => {
    return formMiddlePromise(
        `${mockApi.zhihuribaoApiHot}/3/news/hot`,
        params,
        'get'
    );
};
