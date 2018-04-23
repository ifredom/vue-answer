// var express = require('express');
// var app = express();

// app.use(express.static('./'));

// app.listen(3000, function() {
//   console.log('server start: http://127.0.0.1:3000');
// });


var http = require('http'); //引入http模块
var fs = require('fs'); //引入fs模块
var url = require('url'); //引入url模块
var path = require('path'); //引入path模块

var server = http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  var realPath = path.join('', 'index.html');

  fs.readFile(realPath, function(err, data) {

    if (err) {
      //未找到文件
      res.writeHead(404, {
        'content-type': 'text/plain'
      });
      res.write('404,页面不在');
      res.end();
    } else {
      //成功读取文件
      res.writeHead(200, {
        'content-type': 'text/html;charset="utf-8'
      });
      res.write(data);
      res.end();
    }
  });
});
server.listen(3000); //监听端口
console.log('服务成功开启:localhost:3000');
