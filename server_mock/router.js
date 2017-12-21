module.exports = function (app) {
  app.use('/mock/login', require('./controller/user')) // 登陆
}
