var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json()); // 加载解析json的中间件。
    app.use(bodyParser.urlencoded({ extended: false })); // 加载解析urlencoded（form表单）请求体的中间件。

    app.use('/mock/login', require('./controller/login')) // 登陆
    app.use('/mock/homelist', require('./controller/homelist'))

};
