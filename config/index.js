// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8888,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': { //匹配所有以/api开始的路径
        target: 'http://example/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
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
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: true
  }
}
