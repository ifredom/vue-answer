var express = require('express');
var router = express.Router();

// 登录
router.post('/', function(req, res, next) {
    console.log(req.body);
    // 由于webpack-devser中暂时无法获取到前端表单post传递来的参数，所以不做if判断，直接返回成功
    var username = req.body.username;
    var password = req.body.password;

    res.json({
        statusCode: 200,
        data: {},
        msg: '登录成功'
    });
    res.end();
});

module.exports = router;
