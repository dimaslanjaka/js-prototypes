/// <reference path="../../src/Function.d.ts" />
/**
 * Run the function only once
 * @param fn
 * @see {@link https://stackoverflow.com/a/41000535/6404439}
 * @returns
 */
declare function runOnce(fn: Callable): (...args: any) => any;
