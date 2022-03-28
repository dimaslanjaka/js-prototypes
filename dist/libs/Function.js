/// <reference path="./Function.d.ts" />
Function.prototype.once = function (param) {
    if (!this.wasCalled) {
        this(param);
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
