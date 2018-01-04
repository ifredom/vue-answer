var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    // webpack输出的目标文件夹路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // webpack编译输出的二级文件夹
    assetsSubDirectory: 'static',
    // webpack编译输出的发布路径
    // => 将 build 的路径前缀修改为 ' ./ '（原本为 ' / '），
    // '/' 在服务器环境中使用
    // './' 在本地开发时使用，而build之后的文件是为了app使用，如同本地使用
    assetsPublicPath: './',
    productionSourceMap: true,
    productionGzip: false,  // 打包为app时不能开启
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: false
  },
  dev: {
    // webpack的编译环境
    env: require('./dev.env'),
    // 编译输入的index.html文件
    port: 8869,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/sss': { //匹配所有以/api开始的路径
        target: ' http://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer',
        changeOrigin: true,
        pathRewrite: {
          '^/sss': ''
        }
        // filter: function (pathname, req) {//精确定义，哪些页面需要被代理
        //   return pathname.match('^/api') && req.method === 'POST'
        // }
        // router: {//重新定位特定请求的target
        //   'integration.localhost:3000' : 'http://localhost:8001',  // host only
        //   'staging.localhost:3000'     : 'http://localhost:8002',  // host only
        //   'localhost:3000/api'         : 'http://localhost:8003',  // host + path
        //   '/rest'                      : 'http://localhost:8004'   // path only
        // }
      }
    },
    cssSourceMap: true
  }
}
