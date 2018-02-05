var path = require('path')

module.exports = {
    dev: {
        // webpack的编译环境
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        env: require('./dev.env'),
        proxyTable: {
            '/sss': {
                //匹配所有以/api开始的路径
                target:
                    ' http://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/answer',
                changeOrigin: true,
                pathRewrite: {
                    '^/sss': ''
                }
            },
            '/zhihu': {
                //匹配所有以/api开始的路径
                target: 'https://www.zhihu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/zhihu': ''
                }
            },
            '/zhihuribao': {
                //匹配所有以/api开始的路径
                target: 'https://news-at.zhihu.com/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/zhihuribao': ''
                }
            }
        },
        // 编译输入的index.html文件
        port: 8869,
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: true,
        devtool: 'cheap-module-eval-source-map', // cheap-module-eval-source-map is faster for development
        cssSourceMap: true
    },
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
        devtool: '#source-map', // 或者使用#eval-source-map
        productionGzip: false, // 打包为app时不能开启
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: false
    }
};
