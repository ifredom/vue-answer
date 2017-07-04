### http-server
* 主页地址：https://github.com/indexzero/http-server
* API： http-server [path] [options]
* http-server是一个现成的0配置本地服务器。只需2步即可完成：安装-启动
---
如果你不想使用这个现成的服务器，也可以将这里
[
https://developer.mozilla.org/en-US/docs/Node_server_without_framework
]
的代码装入 test-server.js
然后切换到该文件目录下执行：  node test-server.js

###  安装
npm install http-server -g
### 启动
    // 不带参数，启动的服务器默认伺服当前目录中的index.html
    http-server
    // 带参数,启动的服务器默认伺服地址参数D:\Folder下的index.html
    http-server D:\Folder
### options
-p Port to use (defaults to 8080)

-a Address to use (defaults to 0.0.0.0)

-d Show directory listings (defaults to 'True')

-i Display autoIndex (defaults to 'True')

-g or --gzip When enabled (defaults to 'False') it will serve ./public/some-file.js.gz in place of ./public/some-file.js when a gzipped version of the file exists and the request accepts gzip encoding.

-e or --ext Default file extension if none supplied (defaults to 'html')

-s or --silent Suppress log messages from output

--cors Enable CORS via the Access-Control-Allow-Origin header

-o Open browser window after starting the server

-c Set cache time (in seconds) for cache-control max-age header, e.g. -c10 for 10 seconds (defaults to '3600'). To disable caching, use -c-1.

-U or --utc Use UTC time format in log messages.

-P or --proxy Proxies all requests which can't be resolved locally to the given url. e.g.: -P http://someurl.com

-S or --ssl Enable https.

-C or --cert Path to ssl cert file (default: cert.pem).

-K or --key Path to ssl key file (default: key.pem).

-r or --robots Provide a /robots.txt (whose content defaults to 'User-agent: *\nDisallow: /')

-h or --help Print this list and exit.
