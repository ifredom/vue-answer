// var config = require('../config/r.dev.con.js')
({
    appDir:'',
    baseUrl: "components",//由index.html中 data-main决定
    name: "main",// 入口
    dir: "static",//出口文件
    paths: {
        jquery: "empty:"//空
    },
    // 是否压缩
    optimize:'none'
})