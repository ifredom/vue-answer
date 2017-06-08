/**
 * Created by ifredom on 17/6/8.
 * 测试本地使用反向代理，再开启本地服务器监听远程服务器进行API转发。
 * 还有点问题~~
 */
var config = require('../config')
var express = require('express');
var request = require('superagent')

var app = express();
var HOST = 'https://node-douban-api.herokuapp.com/movie'
var port = config.dev.port //仅支持开发环境
/**
 * CORS support.
 */

app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.get('/in_theaters', function (req, res) {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

app.listen(port, function () {
  console.log('HTTP Server is running in http://127.0.0.1:'+port)
})
