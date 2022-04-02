"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference no-default-lib="true"/>
/// <reference path="./globals.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
Function.prototype.once = function (param) {
    if (!this.wasCalled) {
        this.apply(param);
        this.wasCalled = true;
    }
};
/**
 * Run the function only once
 * @param fn
 * @see {@link https://stackoverflow.com/a/41000535/6404439}
 * @returns
 */
function runOnce(fn) {
    var done = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!done) {
            done = true;
            return fn.apply(this, args);
        }
    };
}
if (typeof module.exports != 'undefined') {
    module.exports = {
        runOnce: runOnce,
    };
}
