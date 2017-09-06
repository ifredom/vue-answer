1. 浏览器报错 http://localhost:8080/__webpack_hmr net::ERR_INCOMPLETE_CHUNKED_ENCODING

    热替换模块与观察页面链接终端。
    项目目录不能含有括号，方括号之类的字符，保证纯英文

2. npm run build后，打开浏览器一片空白
    config/index.js中 build.assetsPublicPath 值为: './'

3. 浏览器中图片无法加载
    1) 检查代码，图片路径是在template中引用还是通过js生成地址。
        template中引用，找不到图片，路径错误
        通过JS生成，路径都需要改为  projectRoot/static/XXX.PNG  其中projectRoot表示项目根目录,重点就是必须是static这个目录下

