import httpMiddleware from './axiosUtils';

export const base = 'https://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer';
export const localWebpackService = 'http://localhost:8869/mock';
const Api = {
  mockApi: {
    proxyService: '/proxyapi',
    zhihuApi: '/zhihu',
    zhihuribaoApiHot: '/zhihuribao',
    doubanApi: '/douban',
    baidu: '/baidu'
  },
  localApiBranch: {
    login: 'login',
    homelist: 'homelist'
  }
};
export { Api };

// 远端mock接口-登录
export const ApiMockLogin = params => {
  return httpMiddleware(`${base}/login`, params, 'post');
};

// mock接口-首页列表
export const ApiMockHomeList = params => {
  return httpMiddleware(`${base}/homelist`, params, 'post');
};
// 知乎-发现
export const ApiZhihuExplore = params => {
  return httpMiddleware(`${Api.mockApi.zhihuApi}/explore`, params, 'get');
};
// 豆瓣-用于搜索
export const ApiDoubanSeach = params => {
  return httpMiddleware(`${Api.mockApi.doubanApi}/v2/movie/top250`, params, 'get');
};
// 百度-用于搜索
export const ApiBaiduSeach = params => {
  return httpMiddleware(`${Api.mockApi.baidu}`, params, 'get');
};
// 知乎-热门消息
export const ApiZhihuHot = params => {
  return httpMiddleware(`${Api.mockApi.zhihuribaoApiHot}/3/news/hot`, params, 'get');
};
