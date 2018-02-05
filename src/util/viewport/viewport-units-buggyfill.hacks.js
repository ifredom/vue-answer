/*!
 * viewport-units-buggyfill.hacks v0.6.2
 * @web: https://github.com/rodneyrehm/viewport-units-buggyfill/
 * @author: Zoltan Hawryluk - http://www.useragentman.com/
 */
(function() {
  (function(a, b) {
    if (typeof define === 'function' && define.amd) {
      define([], b);
    } else {
      if (typeof exports === 'object') {
        module.exports = b();
      } else {
        a.viewportUnitsBuggyfillHacks = b();
      }
    }
  })(this, function() {
    var e = /calc\(/g;
    var c = /["']/g;
    var d = window.navigator.userAgent;
    var b = /MSIE [0-9]\./i.test(d);
    if (!b) {
      b = !!navigator.userAgent.match(
        /MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./
      );
    }
    function a(i, k, g, h) {
      var j = g === 'content' && h.indexOf('viewport-units-buggyfill') > -1;
      if (!j) {
        return;
      }
      var f = h.replace(c, '');
      f.split(';').forEach(function(l) {
        var n = l.split(':');
        if (n.length !== 2) {
          return;
        }
        var m = n[0].trim();
        if (m === 'viewport-units-buggyfill') {
          return;
        }
        var p = n[1].trim();
        i.push([k, m, p]);
        if (e.test(p)) {
          var o = p.replace(e, '-webkit-calc(');
          i.push([k, m, o]);
        }
      });
    }
    return {
      required: function(f) {
        return f.isMobileSafari || b;
      },
      initialize: function() {},
      initializeEvents: function(g, h, f) {
        if (g.force) {
          return;
        }
        if (b && !g._listeningToResize) {
          window.addEventListener('resize', f, true);
          g._listeningToResize = true;
        }
      },
      findDeclarations: function(h, i, f, g) {
        if (f === null) {
          return;
        }
        a(h, i, f, g);
      },
      overwriteDeclaration: function(h, g, f) {
        if (b && g === 'filter') {
          f = f.replace(/px/g, '');
        }
        return f;
      }
    };
  });
})();
