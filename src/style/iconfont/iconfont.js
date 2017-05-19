;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fangzi" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M1000 576.5938l-500-388.125-500 388.125v-158.25l500-388.125 500 388.125zM875 562.5v375h-250v-250h-250v250h-250v-375l375-281.25z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M699.682032 196.538235 654.097834 150.954037 338.868359 466.183512 338.859149 466.174302 293.274952 511.759523 293.283138 511.768733 293.274952 511.776919 338.859149 557.361117 338.868359 557.351907 654.097834 872.581382 699.682032 826.997184 384.452557 511.768733Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-renyuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M923.539741 799.522679l-222.085997-86.549804c0 0-42.354116-16.442238-58.80743-32.613626-10.576195-10.394958-9.810971-34.918359-0.453093-66.243187s123.209046-158.629835 123.209046-274.272229c0-178.595121-117.413485-323.398574-262.237075-323.398574-144.814529 0-262.216938 144.80446-262.216938 323.408643 0 110.761074 101.453539 242.805432 113.971992 266.805259 12.528522 23.999827 9.478703 60.578519-0.412818 71.657144-14.852385 16.643612-69.121838 33.328506-69.121838 33.328506L85.175926 800.871889c-46.772276 16.804712-83.420442 60.919849-83.420442 110.690593l0 23.607146c0 54.318789 44.115138 87.556677 98.334246 87.556677l335.796203 0 115.098683 0 357.642328 0c54.228171 0 98.344315-33.237888 98.344315-87.556677l0-23.607146C1006.971259 861.78167 970.322085 816.318329 923.539741 799.522679L923.539741 799.522679z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-renyuan1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M972.888 839.264c-0.003-139.786-80.267-259.269-193.774-307.996 54.974-39.618 91.202-107.115 91.202-183.765 0-104.65-67.5-192.23-158.103-215.007-0.84-0.22-1.629-0.103-2.396 0.218-1.032-0.104-2.03-0.343-3.078-0.343-19.357 0-35.047 16.93-35.047 37.805 0 18.856 12.837 34.352 29.577 37.204 2.98 1.31 6.887 2.308 7.04 2.367 52.47 19.206 90.23 72.708 90.23 135.79 0 70.341-46.976 128.792-108.93 141.026-0.088 0.008-0.161 0.18-0.248 0.227-20.61 1.405-36.983 19.697-36.983 42.276 0 22.919 16.85 41.482 37.902 42.387 0.148 0.076 0.274 0.324 0.424 0.334 124.602 13.688 212.926 128.16 212.926 267.485 0 20.62 15.508 37.344 34.634 37.344 18.658 0 33.76-15.956 34.488-35.888 0.024-0.194 0.139-0.35 0.139-0.542 0-0.07-0.022-0.14-0.022-0.223 0.01-0.233 0.022-0.458 0.022-0.686v-0.013h-0.003M557.914 537.466c65.646-47.436 108.888-128.095 108.888-219.718 0-145.993-109.742-264.355-245.123-264.355-135.376 0-245.125 118.362-245.125 264.355 0 91.63 43.25 172.282 108.887 219.718C149.74 595.87 53.793 738.796 53.793 905.982c0 9.416 0.496 18.681 1.163 27.901h0.062c0 20.35 15.293 36.831 34.165 36.831 18.861 0 34.158-16.48 34.158-36.83 0-1.148-0.216-2.228-0.315-3.352-0.657-8.111-1.223-16.236-1.223-24.55 0-178.61 134.253-323.388 299.873-323.388s299.877 144.779 299.877 323.388c0 8.618-0.565 17.096-1.27 25.5-0.002 0.439-0.118 0.837-0.118 1.278 0 0.138 0.04 0.264 0.04 0.393-0.022 0.24-0.014 0.494-0.04 0.73h0.113c0.565 19.804 15.549 35.716 34.048 35.716 18.508 0 33.49-15.902 34.057-35.717h0.074c0.641-9.224 1.1-18.495 1.1-27.887 0.006-167.199-95.935-310.125-231.643-368.529M421.679 507.64c-97.245 0-176.076-85.019-176.076-189.892 0-104.868 78.831-189.886 176.076-189.886 97.246 0 176.075 85.017 176.075 189.886 0 104.873-78.829 189.892-176.075 189.892m0 0z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)