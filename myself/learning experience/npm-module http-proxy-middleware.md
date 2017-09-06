- 翻译自地址app.use文档express： http://expressjs.com/en/4x/api.html#app.use


## 模块参数详解：
1. option.pathRewrite：对象/函数，重写目标的url路径。对象键将被用作RegExp来匹配路径。
```
    // rewrite path 
    pathRewrite: {'^/old/api' : '/new/api'}
    
    // remove path 
    pathRewrite: {'^/remove/api' : ''}
   
    // add base path 
    pathRewrite: {'^/' : '/basepath/'}
    
    // custom rewriting 
    pathRewrite: function (path, req) { return path.replace('/api', '/base/api') }
```

2.option.router：对象/函数，重新定位特定请求的option.target。
```$xslt
// Use `host` and/or `path` to match requests. First match will be used. 
// The order of the configuration matters. 
router: {
    'integration.localhost:3000' : 'http://localhost:8001',  // host only 
    'staging.localhost:3000'     : 'http://localhost:8002',  // host only 
    'localhost:3000/api'         : 'http://localhost:8003',  // host + path 
    '/rest'                      : 'http://localhost:8004'   // path only 
}

// Custom router function 
router: function(req) {
    return 'http://localhost:8004';
}
```

3.option.logLevel：字符串， [‘debug’, ‘info’, ‘warn’, ‘error’, ‘silent’]. 默认：'info'。

4.option.logProvider：函数，修改或者替换日志服务。默认：'console'。
```
  // simple replace 
  function logProvider(provider) {
      // replace the default console log provider. 
      return require('winston');
  }

  // verbose replacement 
  function logProvider(provider) {
      var logger = new (require('winston').Logger)();
  
      var myCustomProvider = {
          log: logger.log,
          debug: logger.debug,
          info: logger.info,
          warn: logger.warn,
          error: logger.error
      }
      return myCustomProvider;
  }
```
5.（已弃用）option.proxyHost：用option.changeOrigin = true代替。

6.（已弃用）option.proxyTable：用option.router代替。

------

#### *事件相关

------
1. option.onError：函数，订阅http-proxy的error事件以进行自定义错误处理。
 ```        
         function onError(err, req, res) {
             res.writeHead(500, {
                 'Content-Type': 'text/plain'
             });
             res.end('Something went wrong. And we are reporting a custom error message.');
         }
```

2. option.onProxyRes：函数，订阅http-proxy的proxyRes事件。
 ```  
function onProxyRes(proxyRes, req, res) {
    proxyRes.headers['x-added'] = 'foobar';     // add new header to response 
    delete proxyRes.headers['x-removed'];       // remove header from response 
}
 ```  
3. option.onProxyReq：函数，订阅http-proxy的proxyReq事件。
 ```  
function onProxyReq(proxyReq, req, res) {
    // add custom header to request 
    proxyReq.setHeader('x-added', 'foobar');
    // or log the req 
}
 ```  
4. option.onProxyReqWs：函数，订阅http-proxy的proxyReqWs事件。
 ```  
function onProxyReqWs(proxyReq, req, socket, options, head) {
    // add custom header 
    proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
}
 ```  
5. option.onOpen：函数，订阅http-proxy的 open事件。
 ```  
function onOpen(proxySocket) {
    // listen for messages coming FROM the target here 
    proxySocket.on('data', hybiParseAndLogMessage);
}
 ```  
6. option.onClose：函数，订阅http-proxy 的close事件。
 ```  
function onClose(res, socket, head) {
    // view disconnected websocket connections 
    console.log('Client disconnected');
}
