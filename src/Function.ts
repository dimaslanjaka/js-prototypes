/// <reference path="./Function.d.ts" />
Function.prototype.once = function (this: Callable, param) {
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
function runOnce(fn: Callable) {
  let done = false;
  return function (...args: any) {
    if (!done) {
      done = true;
      return fn.apply(this, args);
    }
  };
}
