import formMiddlePromise from './myutil';

// 需要代理的地址前，需要前缀 /proxyapi ，代理参数配置于/config/index.js
let base = 'http://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer';

let mockApi = {
    localWebpackService: 'http://localhost:8869/mock',
    zhihuApi: '/zhihu',
    zhihuribaoApiHot: '/zhihuribao',
    doubanApi: '/douban'
};
let localApiBranch = {
    login: 'login',
    homelist: 'homelist'
}
export {
    base
};
export {
    localApiBranch
};

// mock接口-登录
export const MockLogin = params => {
    return formMiddlePromise(
        `${mockApi.localWebpackService}/${localApiBranch.login}`,
        params,
        'post'
    );
};
// mock接口-登录
export const MockHomeList = params => {
    return formMiddlePromise(
        `${mockApi.localWebpackService}/${localApiBranch.homelist}`,
        params,
        'post'
    );
};

// 知乎-发现
export const zhihuExplore = params => {
    return formMiddlePromise(`${mockApi.zhihuApi}/explore`, params, 'get');
};
// 豆瓣-用于搜索
export const doubanSeach = params => {
    return formMiddlePromise(`${mockApi.doubanApi}/v2/movie/top250`, params, 'get');
};

// 知乎-热门消息
export const zhihuHot = params => {
    return formMiddlePromise(
        `${mockApi.zhihuribaoApiHot}/3/news/hot`,
        params,
        'get'
    );
};