/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference path="./globals.d.ts" />

interface Callable {
  (text: string): void;
  /**
   * indicator if this function was called
   */
  wasCalled?: boolean;
}

export interface ClassCallable extends Callable {
  new (...args: any[]): ClassDecorator;
}

Function.prototype.once = function (this: Callable, param?) {
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
function runOnce(fn: Callable) {
  let done = false;
  return function (...args: any) {
    if (!done) {
      done = true;
      return fn.apply(this, args);
    }
  };
}

if (typeof module.exports != 'undefined') {
  module.exports = {
    runOnce,
  };
}
