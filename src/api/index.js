import formMiddlePromise from './myutil';

// 需要代理的地址前，需要前缀 /proxyapi ，代理参数配置于/config/index.js
let base = 'http://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer';

let mockApi = {
    localWebpackService: 'http://localhost:8869/mock',
    baiduApi: 'http://apis.baidu.com/tianyiweather/basicforecast/weatherapi',
    zhihuApi: '/zhihu',
    zhihuribaoApiHot: '/zhihuribao'
};

export { base };

// 百度识别身份证
export const tianqi = params => {
    return formMiddlePromise(mockApi.baiduApi, params, 'post');
};

// mock接口-登录
export const MockLogin = params => {
    return formMiddlePromise(
        `${mockApi.localWebpackService}/login`,
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
