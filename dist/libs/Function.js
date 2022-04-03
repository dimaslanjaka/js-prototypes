"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
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
    let done = false;
    return function (...args) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNEQUFzRDtBQUN0RCx1Q0FBdUM7O0FBY3ZDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQTBCLEtBQU07SUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztLQUN2QjtBQUNILENBQUMsQ0FBQztBQUVGOzs7OztHQUtHO0FBQ0gsU0FBUyxPQUFPLENBQUMsRUFBWTtJQUMzQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7SUFDakIsT0FBTyxVQUFVLEdBQUcsSUFBUztRQUMzQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNaLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLElBQUksV0FBVyxFQUFFO0lBQ3hDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7UUFDZixPQUFPO0tBQ1IsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9nbG9iYWxzLmQudHNcIiAvPlxuXG5pbnRlcmZhY2UgQ2FsbGFibGUge1xuICAodGV4dDogc3RyaW5nKTogdm9pZDtcbiAgLyoqXG4gICAqIGluZGljYXRvciBpZiB0aGlzIGZ1bmN0aW9uIHdhcyBjYWxsZWRcbiAgICovXG4gIHdhc0NhbGxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NDYWxsYWJsZSBleHRlbmRzIENhbGxhYmxlIHtcbiAgbmV3ICguLi5hcmdzOiBhbnlbXSk6IENsYXNzRGVjb3JhdG9yO1xufVxuXG5GdW5jdGlvbi5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uICh0aGlzOiBDYWxsYWJsZSwgcGFyYW0/KSB7XG4gIGlmICghdGhpcy53YXNDYWxsZWQpIHtcbiAgICB0aGlzLmFwcGx5KHBhcmFtKTtcbiAgICB0aGlzLndhc0NhbGxlZCA9IHRydWU7XG4gIH1cbn07XG5cbi8qKlxuICogUnVuIHRoZSBmdW5jdGlvbiBvbmx5IG9uY2VcbiAqIEBwYXJhbSBmblxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQxMDAwNTM1LzY0MDQ0Mzl9XG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBydW5PbmNlKGZuOiBDYWxsYWJsZSkge1xuICBsZXQgZG9uZSA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueSkge1xuICAgIGlmICghZG9uZSkge1xuICAgICAgZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9O1xufVxuXG5pZiAodHlwZW9mIG1vZHVsZS5leHBvcnRzICE9ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIHJ1bk9uY2UsXG4gIH07XG59XG4iXX0=