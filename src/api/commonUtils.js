import md5 from 'js-md5';
import base64 from 'js-base64';
/**
 * 将日期格式化成指定格式的字符串
 * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳
 * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
 * @returns 返回格式化后的日期字符串
 */
export function formatDate (date, fmt) {
  date = date === undefined ? new Date() : date;
  date = typeof date === 'number' ? new Date(date) : date;
  fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
  var obj = {
    y: date.getFullYear(), // 年份，注意必须用getFullYear
    M: date.getMonth() + 1, // 月份，注意是从0-11
    d: date.getDate(), // 日期
    q: Math.floor((date.getMonth() + 3) / 3), // 季度
    w: date.getDay(), // 星期，注意是0-6
    H: date.getHours(), // 24小时制
    h: date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 12小时制
    m: date.getMinutes(), // 分钟
    s: date.getSeconds(), // 秒
    S: date.getMilliseconds() // 毫秒
  };
  var week = ['天', '一', '二', '三', '四', '五', '六'];
  for (var i in obj) {
    fmt = fmt.replace(new RegExp(i + '+', 'g'), function (m) {
      var val = obj[i] + '';
      if (i === 'w') return (m.length > 2 ? '星期' : '周') + week[val];
      for (var j = 0, len = val.length; j < m.length - len; j++) val = '0' + val;
      return m.length === 1 ? val : val.substring(val.length - m.length);
    });
  }
  return fmt;
}
/**
 * 生成签名之后的请求参数
 * @param appid 应用id
 * @param apicode api名称
 * @param opid 操作员id
 * @param params json报文
 * @param appSecret 应用密钥
 * @returns 合法的带签名的请求参数
 */
export function generateRequestParamsSign (appid, apiPath, token, params, appSecret) {
  var requestParams = {
    apiPath: apiPath,
    appId: appid,
    params: JSON.stringify(params),
    sign: undefined,
    timeStamp: formatDate(new Date()),
    token: token
  };
  requestParams.sign = getSign(requestParams, appSecret);
  // var requestBody = ''
  // for (var obj in requestParams) {
  //   requestBody += obj + '=' + requestParams[obj] + '&'
  // }
  return requestParams;
}
/**
 * 获取请求参数的签名
 * @param requestParams 请求参数
 * @param appSecret 应用密钥
 * @returns 签名
 */
function getSign (requestParams, appSecret) {
  var sign = appSecret;
  console.log(sign);
  for (var obj in requestParams) {
    if (obj === 'sign') {
      continue;
    }
    sign += obj + requestParams[obj];
  }
  sign += appSecret;
  console.log(sign);
  // md5
  sign = md5.hex(sign);

  return sign;
}
/**
 * base64加密
 * @param text 待加密的字符串
 * @returnsbase64加密之后的内容
 */
export function Base64 (text) {
  return base64.Base64.encode(text);
}
/**
 * 根据cookieName获取cookie内容
 * @param cookieName cookie名称
 */
export function getToken (cookieName) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(cookieName + '=');
    if (cStart !== -1) {
      cStart = cStart + cookieName.length + 1;
      let cEnd = document.cookie.indexOf(';', cStart);
      if (cEnd === -1) cEnd = document.cookie.length;
      return unescape(document.cookie.substring(cStart, cEnd));
    }
  }
  return '';
}
export function getOpUser () {
  let user = sessionStorage.getItem('user');
  if (user) return user;
}
export function getOpId () {
  let user = sessionStorage.getItem('user');
  if (user) return user.opId;
}

export var validateNumber = (rule, value, callback) => {
  if (value === undefined || value === null || value === '') {
    callback();
    return;
  }
  if (isNaN(value)) {
    callback(new Error('请输入数字'));
    return;
  }
  if (value < 0) {
    callback(new Error('请输入正数'));
    return;
  }
  if (!/^\d*(\.\d{1,2})?$/.test(String(value))) {
    callback(new Error('精确到小数点后两位'));
    return;
  }
  callback();
};

export var validateAlphabetAndNum = (rule, value, callback) => {
  if (value === undefined || value === null || value === '') {
    callback();
    return;
  }
  if (!/^[0-9a-zA-Z]*$/g.test(String(value))) {
    callback(new Error('字母,数字或字母加数字组合'));
    return;
  }
  callback();
};
export var validateStrLength20 = (rule, value, callback) => {
  if (String(value).length > 20) {
    callback(new Error('最长为20个字'));
    return;
  }
  callback();
};

export var validateNumLength = (rule, value, callback) => {
  if (String(value).length > 10) {
    callback(new Error('最长为10个字'));
    return;
  }
  callback();
};
export const deepCopy = source => {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? deepCopy(source[item]) : source[item];
  }
  return sourceCopy;
};
