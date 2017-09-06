/**
 * Created by ifredom on 2017/6/8 0008.
 * 我使用webstorm进行编辑
 * ctrl+shift+F10，运行Node脚本
 * 点击需要打断点的所在行，即标记上断点，shift+F9，开始debug
 */
var http = require('http');
const port = 7777
server = http.createServer(function (req, res) {
  res.writeHeader(200, {"Content-Type": "text/plain"});
  res.end("Hello World！");
});
server.listen(port);
console.log("httpd start @"+port);
