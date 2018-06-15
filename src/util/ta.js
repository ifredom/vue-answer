function getUserInfo() {
  let user = sessionStorage.getItem('userinfo');
  if (user) return user;
}

function getToken() {
  let user = sessionStorage.getItem('userinfo');
  if (user) return user.token;
}

const deepCopy = source => {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] =
      typeof source[item] === 'object' ? deepCopy(source[item]) : source[item];
  }
  return sourceCopy;
};
const systemType = source => {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    return 'ios';
  } else {
    return 'android';
  }
};
(function ($) {

  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xffff)
  }

  function bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
  }

  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
  }

  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t)
  }

  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
  }

  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t)
  }

  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t)
  }

  function binlMD5(x, len) {
    x[len >> 5] |= 0x80 << (len % 32)
    x[((len + 64) >>> 9 << 4) + 14] = len
    var i
    var olda
    var oldb
    var oldc
    var oldd
    var a = 1732584193
    var b = -271733879
    var c = -1732584194
    var d = 271733878

    for (i = 0; i < x.length; i += 16) {
      olda = a
      oldb = b
      oldc = c
      oldd = d
      a = md5ff(a, b, c, d, x[i], 7, -680876936)
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
      b = md5gg(b, c, d, a, x[i], 20, -373897302)
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
      d = md5hh(d, a, b, c, x[i], 11, -358537222)
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

      a = md5ii(a, b, c, d, x[i], 6, -198630844)
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

      a = safeAdd(a, olda)
      b = safeAdd(b, oldb)
      c = safeAdd(c, oldc)
      d = safeAdd(d, oldd)
    }
    return [a, b, c, d]
  }

  function binl2rstr(input) {
    var i
    var output = ''
    var length32 = input.length * 32
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff)
    }
    return output
  }

  function rstr2binl(input) {
    var i
    var output = []
    output[(input.length >> 2) - 1] = undefined
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0
    }
    var length8 = input.length * 8
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32)
    }
    return output
  }

  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
  }

  function rstrHMACMD5(key, data) {
    var i
    var bkey = rstr2binl(key)
    var ipad = []
    var opad = []
    var hash
    ipad[15] = opad[15] = undefined
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8)
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636
      opad[i] = bkey[i] ^ 0x5c5c5c5c
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
  }

  function rstr2hex(input) {
    var hexTab = '0123456789abcdef'
    var output = ''
    var x
    var i
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i)
      output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f)
    }
    return output
  }

  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input))
  }

  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s))
  }

  function hexMD5(s) {
    return rstr2hex(rawMD5(s))
  }

  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
  }

  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d))
  }

  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string)
      }
      return rawMD5(string)
    }
    if (!raw) {
      return hexHMACMD5(key, string)
    }
    return rawHMACMD5(key, string)
  }

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return md5
    })
  } else if (typeof module === 'object' && module.exports) {
    module.exports = md5
  } else {
    $.md5 = md5
  }
})(this);
// Base64
;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
      ? module.exports = factory(global)
      : typeof define === 'function' && define.amd
      ? define(factory) : factory(global)
}((
  typeof self !== 'undefined' ? self
      : typeof window !== 'undefined' ? window
      : typeof global !== 'undefined' ? global
: this
), function(global) {
  'use strict';

  var _Base64 = global.Base64;
  var version = "2.4.5";

  var buffer;
  if (typeof module !== 'undefined' && module.exports) {
      try {
          buffer = require('buffer').Buffer;
      } catch (err) {}
  }

  var b64chars
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var b64tab = function(bin) {
      var t = {};
      for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
      return t;
  }(b64chars);
  var fromCharCode = String.fromCharCode;

  var cb_utob = function(c) {
      if (c.length < 2) {
          var cc = c.charCodeAt(0);
          return cc < 0x80 ? c
              : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                              + fromCharCode(0x80 | (cc & 0x3f)))
              : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                 + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                 + fromCharCode(0x80 | ( cc         & 0x3f)));
      } else {
          var cc = 0x10000
              + (c.charCodeAt(0) - 0xD800) * 0x400
              + (c.charCodeAt(1) - 0xDC00);
          return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                  + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                  + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                  + fromCharCode(0x80 | ( cc         & 0x3f)));
      }
  };
  var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
  var utob = function(u) {
      return u.replace(re_utob, cb_utob);
  };
  var cb_encode = function(ccc) {
      var padlen = [0, 2, 1][ccc.length % 3],
      ord = ccc.charCodeAt(0) << 16
          | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
          | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
      chars = [
          b64chars.charAt( ord >>> 18),
          b64chars.charAt((ord >>> 12) & 63),
          padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
          padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
      ];
      return chars.join('');
  };
  var btoa = global.btoa ? function(b) {
      return global.btoa(b);
  } : function(b) {
      return b.replace(/[\s\S]{1,3}/g, cb_encode);
  };
  var _encode = buffer ?
      buffer.from && Uint8Array && buffer.from !== Uint8Array.from
      ? function (u) {
          return (u.constructor === buffer.constructor ? u : buffer.from(u))
              .toString('base64')
      }
      :  function (u) {
          return (u.constructor === buffer.constructor ? u : new  buffer(u))
              .toString('base64')
      }
      : function (u) { return btoa(utob(u)) }
  ;
  var encode = function(u, urisafe) {
      return !urisafe
          ? _encode(String(u))
          : _encode(String(u)).replace(/[+\/]/g, function(m0) {
              return m0 == '+' ? '-' : '_';
          }).replace(/=/g, '');
  };
  var encodeURI = function(u) { return encode(u, true) };

  var re_btou = new RegExp([
      '[\xC0-\xDF][\x80-\xBF]',
      '[\xE0-\xEF][\x80-\xBF]{2}',
      '[\xF0-\xF7][\x80-\xBF]{3}'
  ].join('|'), 'g');
  var cb_btou = function(cccc) {
      switch(cccc.length) {
      case 4:
          var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
              |    ((0x3f & cccc.charCodeAt(1)) << 12)
              |    ((0x3f & cccc.charCodeAt(2)) <<  6)
              |     (0x3f & cccc.charCodeAt(3)),
          offset = cp - 0x10000;
          return (fromCharCode((offset  >>> 10) + 0xD800)
                  + fromCharCode((offset & 0x3FF) + 0xDC00));
      case 3:
          return fromCharCode(
              ((0x0f & cccc.charCodeAt(0)) << 12)
                  | ((0x3f & cccc.charCodeAt(1)) << 6)
                  |  (0x3f & cccc.charCodeAt(2))
          );
      default:
          return  fromCharCode(
              ((0x1f & cccc.charCodeAt(0)) << 6)
                  |  (0x3f & cccc.charCodeAt(1))
          );
      }
  };
  var btou = function(b) {
      return b.replace(re_btou, cb_btou);
  };
  var cb_decode = function(cccc) {
      var len = cccc.length,
      padlen = len % 4,
      n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
          | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
          | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
          | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
      chars = [
          fromCharCode( n >>> 16),
          fromCharCode((n >>>  8) & 0xff),
          fromCharCode( n         & 0xff)
      ];
      chars.length -= [0, 0, 2, 1][padlen];
      return chars.join('');
  };
  var atob = global.atob ? function(a) {
      return global.atob(a);
  } : function(a){
      return a.replace(/[\s\S]{1,4}/g, cb_decode);
  };
  var _decode = buffer ?
      buffer.from && Uint8Array && buffer.from !== Uint8Array.from
      ? function(a) {
          return (a.constructor === buffer.constructor
                  ? a : buffer.from(a, 'base64')).toString();
      }
      : function(a) {
          return (a.constructor === buffer.constructor
                  ? a : new buffer(a, 'base64')).toString();
      }
      : function(a) { return btou(atob(a)) };
  var decode = function(a){
      return _decode(
          String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
              .replace(/[^A-Za-z0-9\+\/]/g, '')
      );
  };
  var noConflict = function() {
      var Base64 = global.Base64;
      global.Base64 = _Base64;
      return Base64;
  };

  global.Base64 = {
      VERSION: version,
      atob: atob,
      btoa: btoa,
      fromBase64: decode,
      toBase64: encode,
      utob: utob,
      encode: encode,
      encodeURI: encodeURI,
      btou: btou,
      decode: decode,
      noConflict: noConflict
  };

  if (typeof Object.defineProperty === 'function') {
      var noEnum = function(v){
          return {value:v,enumerable:false,writable:true,configurable:true};
      };
      global.Base64.extendString = function () {
          Object.defineProperty(
              String.prototype, 'fromBase64', noEnum(function () {
                  return decode(this)
              }));
          Object.defineProperty(
              String.prototype, 'toBase64', noEnum(function (urisafe) {
                  return encode(this, urisafe)
              }));
          Object.defineProperty(
              String.prototype, 'toBase64URI', noEnum(function () {
                  return encode(this, true)
              }));
      };
  }
  if (global['Meteor']) {
      Base64 = global.Base64;
  }
  if (typeof module !== 'undefined' && module.exports) {
      module.exports.Base64 = global.Base64;
  }
  else if (typeof define === 'function' && define.amd) {
      define([], function(){ return global.Base64 });
  }

  return {Base64: global.Base64}
}));