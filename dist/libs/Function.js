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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNEQUFzRDtBQUN0RCx1Q0FBdUM7O0FBMEJ2QyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUEwQixLQUFNO0lBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FDdkI7QUFDSCxDQUFDLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILFNBQVMsT0FBTyxDQUFDLEVBQVk7SUFDM0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLE9BQU8sVUFBVSxHQUFHLElBQVM7UUFDM0IsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksR0FBRyxJQUFJLENBQUM7WUFDWixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxJQUFJLFdBQVcsRUFBRTtJQUN4QyxNQUFNLENBQUMsT0FBTyxHQUFHO1FBQ2YsT0FBTztLQUNSLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vZ2xvYmFscy5kLnRzXCIgLz5cblxuaW50ZXJmYWNlIENhbGxhYmxlIHtcbiAgKHRleHQ6IHN0cmluZyk6IHZvaWQ7XG4gIC8qKlxuICAgKiBpbmRpY2F0b3IgaWYgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkXG4gICAqL1xuICB3YXNDYWxsZWQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIENsYXNzIENhbGxhYmxlIERlY29yYXRvclxuICogQGV4YW1wbGVcbiAqIC8vIGRlZmluaXRpb24gZm9yIGJlbG93IGNsYXNzZXNcbiAqIC8vIGNhbiBiZSBjYWxsZWQgd2l0aCBgbmV3YFxuICogbmV3IHlvdXJjbGFzcygpO1xuICogbmV3IHlvdXJjbGFzcyhhcmcsIGFyZzEpO1xuICogLy8gY2FuIGJlIGNhbGxlZCBkaXJlY3RseSBsaWtlIGZ1bmN0aW9uXG4gKiB5b3VyY2xhc3MoKTtcbiAqIHlvdXJjbGFzcyhhcmcsIGFyZzEpO1xuICovXG5leHBvcnQgaW50ZXJmYWNlIENsYXNzQ2FsbGFibGUgZXh0ZW5kcyBDYWxsYWJsZSB7XG4gIG5ldyAoLi4uYXJnczogYW55W10pOiBDbGFzc0RlY29yYXRvcjtcbiAgbmV3ICgpOiBDbGFzc0RlY29yYXRvcjtcbn1cblxuRnVuY3Rpb24ucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiAodGhpczogQ2FsbGFibGUsIHBhcmFtPykge1xuICBpZiAoIXRoaXMud2FzQ2FsbGVkKSB7XG4gICAgdGhpcy5hcHBseShwYXJhbSk7XG4gICAgdGhpcy53YXNDYWxsZWQgPSB0cnVlO1xuICB9XG59O1xuXG4vKipcbiAqIFJ1biB0aGUgZnVuY3Rpb24gb25seSBvbmNlXG4gKiBAcGFyYW0gZm5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MTAwMDUzNS82NDA0NDM5fVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gcnVuT25jZShmbjogQ2FsbGFibGUpIHtcbiAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzOiBhbnkpIHtcbiAgICBpZiAoIWRvbmUpIHtcbiAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cblxuaWYgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBydW5PbmNlLFxuICB9O1xufVxuIl19