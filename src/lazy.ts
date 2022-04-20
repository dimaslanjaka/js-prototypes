/* eslint-disable @typescript-eslint/no-unused-vars */

interface LazyObject {
  [key: string]: any;
}

interface Window {
  lazyload: lazyload;
}
const lazyglobal = (window /* browser */ || global) /* node */ as any;
class lazyload {
  lazyloads: { [key: string]: boolean } = {};
  /**
   * @typedef {Object}
   * @property {Object<string, ()=> any>}
   */
  lazycallbacks = {};
  add(src: string, callback = null) {
    this.lazyloads[src] = false;
    this.lazycallbacks[src] = callback;
    return this;
  }
  exec() {
    var self = this;
    window.addEventListener(
      'scroll',
      function () {
        var lazy = self.lazyloads;
        for (const src in lazy) {
          if (Object.hasOwnProperty.call(lazy, src)) {
            var isNotLoaded = false === lazy[src];
            var isNotTopDocument = 0 != document.documentElement.scrollTop;
            var isNotTopBody = 0 != document.body.scrollTop;
            if ((isNotTopDocument && isNotLoaded) || (isNotTopBody && isNotLoaded)) {
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.async = true;
              script.src = src;
              if (typeof self.lazycallbacks[src] == 'function') script.onload = self.lazycallbacks[src];
              var firstScript = document.getElementsByTagName('script')[0];
              // insert after first script
              firstScript.parentNode?.insertBefore(script, firstScript);
              lazy[src] = true;
            }
          }
        }
      },
      true
    );
  }
}
declare var module: any;
lazyglobal.lazyload = lazyload;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lazyload;
}
