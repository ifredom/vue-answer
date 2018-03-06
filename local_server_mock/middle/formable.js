var formidable = require("formidable"); //载入 formidable

var form = new formidable.IncomingForm();
var post = {},
  file = {};
form.uploadDir = '/tmp'; //文件上传 临时文件存放路径

form.on('error', function (err) {
    console.log(err); //各种错误
  })
  //POST 普通数据 不包含文件 field 表单name value 表单value
  .on('field', function (field, value) {
    if (form.type == 'multipart') { //有文件上传时 enctype="multipart/form-data"
      if (field in post) { //同名表单 checkbox 返回array 同get处理
        if (util.isArray(post[field]) === false) {
          post[field] = [post[field]];
        }
        post[field].push(value);
        return;
      }
    }
    post[field] = value;
  })
  .on('file', function (field, file) { //上传文件
    file[field] = file;
  })
  .on('end', function () {
    fn(); //解析完毕 做其他work
  });

module.exports = form