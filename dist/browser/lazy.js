"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
var lazyglobal = (window /* browser */ || global) /* node */;
var lazyload = /** @class */ (function () {
    function lazyload() {
        this.lazyloads = {};
        /**
         * @typedef {Object}
         * @property {Object<string, ()=> any>}
         */
        this.lazycallbacks = {};
    }
    lazyload.prototype.add = function (src, callback) {
        if (callback === void 0) { callback = null; }
        this.lazyloads[src] = false;
        this.lazycallbacks[src] = callback;
        return this;
    };
    lazyload.prototype.exec = function () {
        var self = this;
        window.addEventListener('scroll', function () {
            var _a;
            var lazy = self.lazyloads;
            for (var src in lazy) {
                if (Object.hasOwnProperty.call(lazy, src)) {
                    var isNotLoaded = false === lazy[src];
                    var isNotTopDocument = 0 != document.documentElement.scrollTop;
                    var isNotTopBody = 0 != document.body.scrollTop;
                    if ((isNotTopDocument && isNotLoaded) || (isNotTopBody && isNotLoaded)) {
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.async = true;
                        script.src = src;
                        if (typeof self.lazycallbacks[src] == 'function')
                            script.onload = self.lazycallbacks[src];
                        var firstScript = document.getElementsByTagName('script')[0];
                        // insert after first script
                        (_a = firstScript.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(script, firstScript);
                        lazy[src] = true;
                    }
                }
            }
        }, true);
    };
    return lazyload;
}());
lazyglobal.lazyload = lazyload;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lazyload;
}
//# sourceMappingURL=lazy.js.map