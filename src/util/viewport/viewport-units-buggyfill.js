/*!
 * viewport-units-buggyfill v0.6.2
 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
 * @author: Rodney Rehm - http://rodneyrehm.de/en/
 */
(function() {
  (function(a, b) {
    if (typeof define === 'function' && define.amd) {
      define([], b);
    } else {
      if (typeof exports === 'object') {
        module.exports = b();
      } else {
        a.viewportUnitsBuggyfill = b();
      }
    }
  })(this, function() {
    var l = false;
    var i;
    var F = window.navigator.userAgent;
    var b = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g;
    var s = /(https?:)?\/\//;
    var z = [].forEach;
    var p;
    var v;
    var E;
    var n = /MSIE [0-9]\./i.test(F);
    var q = /MSIE [0-8]\./i.test(F);
    var m = F.indexOf('Opera Mini') > -1;
    var d =
      /(iPhone|iPod|iPad).+AppleWebKit/i.test(F) &&
      (function() {
        var e = F.match(/OS (\d+)/);
        return e && e.length > 1 && parseInt(e[1]) < 10;
      })();
    var x = (function() {
      var I = F.indexOf(' Android ') > -1;
      if (!I) {
        return false;
      }
      var H = F.indexOf('Version/') > -1;
      if (!H) {
        return false;
      }
      var e = parseFloat((F.match('Android ([0-9.]+)') || [])[1]);
      return e <= 4.4;
    })();
    if (!n) {
      n = !!navigator.userAgent.match(
        /MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./
      );
    }
    try {
      new u('test');
    } catch (C) {
      var u = function(H, I) {
        var e;
        I = I || { bubbles: false, cancelable: false, detail: undefined };
        e = document.createEvent('CustomEvent');
        e.initCustomEvent(H, I.bubbles, I.cancelable, I.detail);
        return e;
      };
      u.prototype = window.Event.prototype;
      window.CustomEvent = u;
    }
    function j(e, I) {
      var H;
      return function() {
        var K = this;
        var J = arguments;
        var L = function() {
          e.apply(K, J);
        };
        clearTimeout(H);
        H = setTimeout(L, I);
      };
    }
    function h() {
      try {
        return window.self !== window.top;
      } catch (H) {
        return true;
      }
    }
    function c(e) {
      if (l) {
        return;
      }
      if (e === true) {
        e = { force: true };
      }
      i = e || {};
      i.isMobileSafari = d;
      i.isBadStockAndroid = x;
      if (i.ignoreVmax && !i.force && !q) {
        n = false;
      }
      if (
        q ||
        (!i.force && !d && !n && !x && !m && (!i.hacks || !i.hacks.required(i)))
      ) {
        if (window.console && q) {
          console.info(
            'viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below'
          );
        }
        return { init: function() {} };
      }
      window.dispatchEvent(new u('viewport-units-buggyfill-init'));
      i.hacks && i.hacks.initialize(i);
      l = true;
      E = document.createElement('style');
      E.id = 'patched-viewport';
      document[i.appendToBody ? 'body' : 'head'].appendChild(E);
      o(function() {
        var H = j(k, i.refreshDebounceWait || 100);
        window.addEventListener('orientationchange', H, true);
        window.addEventListener('pageshow', H, true);
        if (i.force || n || h()) {
          window.addEventListener('resize', H, true);
          i._listeningToResize = true;
        }
        i.hacks && i.hacks.initializeEvents(i, k, H);
        k();
      });
    }
    function B() {
      E.textContent = A();
      E.parentNode.appendChild(E);
      window.dispatchEvent(new u('viewport-units-buggyfill-style'));
    }
    function k() {
      if (!l) {
        return;
      }
      w();
      setTimeout(function() {
        B();
      }, 1);
    }
    function g(I) {
      try {
        if (!I.cssRules) {
          return;
        }
      } catch (K) {
        if (K.name !== 'SecurityError') {
          throw K;
        }
        return;
      }
      var L = [];
      for (var H = 0; H < I.cssRules.length; H++) {
        var J = I.cssRules[H];
        L.push(J);
      }
      return L;
    }
    function w() {
      v = [];
      z.call(document.styleSheets, function(H) {
        var e = g(H);
        if (
          !e ||
          H.ownerNode.id === 'patched-viewport' ||
          H.ownerNode.getAttribute('data-viewport-units-buggyfill') === 'ignore'
        ) {
          return;
        }
        if (
          H.media &&
          H.media.mediaText &&
          window.matchMedia &&
          !window.matchMedia(H.media.mediaText).matches
        ) {
          return;
        }
        z.call(e, t);
      });
      return v;
    }
    function t(J) {
      if (J.type === 7) {
        var H;
        try {
          H = J.cssText;
        } catch (I) {
          return;
        }
        b.lastIndex = 0;
        if (b.test(H) && !s.test(H)) {
          v.push([J, null, H]);
          i.hacks && i.hacks.findDeclarations(v, J, null, H);
        }
        return;
      }
      if (!J.style) {
        if (!J.cssRules) {
          return;
        }
        z.call(J.cssRules, function(e) {
          t(e);
        });
        return;
      }
      z.call(J.style, function(e) {
        var K = J.style.getPropertyValue(e);
        if (J.style.getPropertyPriority(e)) {
          K += ' !important';
        }
        b.lastIndex = 0;
        if (b.test(K)) {
          v.push([J, e, K]);
          i.hacks && i.hacks.findDeclarations(v, J, e, K);
        }
      });
    }
    function A() {
      p = y();
      var I = [];
      var e = [];
      var H;
      var J;
      v.forEach(function(N) {
        var M = r.apply(null, N);
        var K = M.selector.length ? M.selector.join(' {\n') + ' {\n' : '';
        var L = new Array(M.selector.length + 1).join('\n}');
        if (!K || K !== H) {
          if (e.length) {
            I.push(H + e.join('\n') + J);
            e.length = 0;
          }
          if (K) {
            H = K;
            J = L;
            e.push(M.content);
          } else {
            I.push(M.content);
            H = null;
            J = null;
          }
          return;
        }
        if (K && !H) {
          H = K;
          J = L;
        }
        e.push(M.content);
      });
      if (e.length) {
        I.push(H + e.join('\n') + J);
      }
      if (m) {
        I.push('* { content: normal !important; }');
      }
      return I.join('\n\n');
    }
    function r(L, H, K) {
      var e;
      var I = [];
      e = K.replace(b, D);
      if (i.hacks) {
        e = i.hacks.overwriteDeclaration(L, H, e);
      }
      if (H) {
        I.push(L.selectorText);
        e = H + ': ' + e + ';';
      }
      var J = L.parentRule;
      while (J) {
        if (J.media) {
          I.unshift('@media ' + J.media.mediaText);
        } else {
          if (J.conditionText) {
            I.unshift('@supports ' + J.conditionText);
          }
        }
        J = J.parentRule;
      }
      return { selector: I, content: e };
    }
    function D(e, J, I) {
      var H = p[I];
      var K = parseFloat(J) / 100;
      return K * H + 'px';
    }
    function y() {
      var H = window.innerHeight;
      var e = window.innerWidth;
      return { vh: H, vw: e, vmax: Math.max(e, H), vmin: Math.min(e, H) };
    }
    function o(e) {
      var H = 0;
      var I = function() {
        H--;
        if (!H) {
          e();
        }
      };
      z.call(document.styleSheets, function(J) {
        if (
          !J.href ||
          G(J.href) === G(location.href) ||
          J.ownerNode.getAttribute('data-viewport-units-buggyfill') === 'ignore'
        ) {
          return;
        }
        H++;
        f(J.ownerNode, I);
      });
      if (!H) {
        e();
      }
    }
    function G(e) {
      return e.slice(0, e.indexOf('/', e.indexOf('://') + 3));
    }
    function f(H, e) {
      a(
        H.href,
        function() {
          var I = document.createElement('style');
          I.media = H.media;
          I.setAttribute('data-href', H.href);
          I.textContent = this.responseText;
          H.parentNode.replaceChild(I, H);
          e();
        },
        e
      );
    }
    function a(H, J, e) {
      var I = new XMLHttpRequest();
      if ('withCredentials' in I) {
        I.open('GET', H, true);
      } else {
        if (typeof XDomainRequest !== 'undefined') {
          I = new XDomainRequest();
          I.open('GET', H);
        } else {
          throw new Error('cross-domain XHR not supported');
        }
      }
      I.onload = J;
      I.onerror = e;
      I.send();
      return I;
    }
    return {
      version: '0.6.1',
      findProperties: w,
      getCss: A,
      init: c,
      refresh: k
    };
  });
})();
