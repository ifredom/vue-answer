var express = require('express');
var router = express.Router();

// 登录
router.post('/login', function(req, res, next) {
    console.log(req.param);
    console.log(req.body);

    console.log('some user ss');
    console.log(req.body.username);

    // 由于暂时无法获取到传递来的参数
    var username = req.body.username;
    var password = req.body.password;

    // if (username === 'ifredom' && password) {
    //     //响应mock数据
    //     res.json({
    //         statusCode: 200,
    //         data: {},
    //         msg: '登录成功'
    //     });
    // } else {
    //     res.json({
    //         statusCode: 50000,
    //         data: {},
    //         msg: '登录失败'
    //     });
    // }
    res.json({
        statusCode: 200,
        data: {},
        msg: '登录成功'
    });
    res.end();
});

module.exports = router;
