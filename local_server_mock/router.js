module.exports = function(app) {
    app.use('/mock', require('./controller/user')) // 登陆
};
