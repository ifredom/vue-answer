var express = require('express')
var router = express.Router()

router.get('/login', function (req, res, next) {
  var username = req.body.username
  var password = req.body.password

  if (username === 'ifredom' && password) {
    //响应mock数据
    res.json({
      statusCode: 200,
      msg: '登录成功'
    })
  } else {
    res.json({
      statusCode: 50000,
      msg: '登录失败'
    })
  }
})

router.post('/login', function (req, res, next) {
  var username = req.body.username
  var password = req.body.password

  if (username === 'ifredom' && password){
    //响应mock数据
    res.json({
      statusCode: 200,
      msg: '登录成功'
    })
  }else{
    res.json({
      statusCode: 50000,
      msg: '登录失败'
    })
  }
  res.end()
})

module.exports = router
