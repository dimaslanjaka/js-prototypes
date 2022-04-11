/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/triple-slash-reference */
const __global = (typeof window != 'undefined' ? window : global) /* node */;
Object.size = function (obj) {
    let size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key))
            size++;
    }
    return size;
};
Object.child = function (str, callback) {
    const self = this;
    if (self.hasOwnProperty(str)) {
        if (typeof callback == 'function') {
            return callback(self[str]);
        }
        else {
            return true;
        }
    }
    else {
        return undefined;
    }
};
Object.alt = function (str, alternative) {
    const self = this;
    if (self.hasOwnProperty(str)) {
        return self[str];
    }
    else {
        return alternative;
    }
};
Object.has = function (str) {
    return this.hasOwnProperty(str);
};
Object.each = function (callback) {
    for (const key in this) {
        //callback.call(scope, key, this[key]);
        callback.call(this[key]);
    }
};
Object.isEmpty = function () {
    return this.length === 0;
};
Object.replaceKeyFrom = function (anotherObj) {
    return Object.entries(this).reduce((op, [key, value]) => {
        const newKey = anotherObj[key];
        op[newKey || key] = value;
        return op;
    }, {});
    /*if (typeof anotherObj == 'object') {
      for (const key in anotherObj) {
        if (Object.prototype.hasOwnProperty.call(anotherObj, key)) {
          const element = anotherObj[key];
          def[key] = element;
        }
      }
    }*/
};
Object.prototype.merge = function (...others) {
    return mergeDeep(this, ...others);
};
/**
 * Join object to separated string
 * * [].join() equivalent
 * @param obj Object
 * @param separator default comma(,)
 * @returns Joined string
 */
function object_join(obj, separator = ',') {
    return Object.keys(obj)
        .map(function (k) {
        return obj[k];
    })
        .join(separator);
}
__global.object_join = object_join;
/**
 * Simple object check.
 * @param item
 * @returns
 * @example
 * ```js
 * console.log(isObject({a:'a'})); // true
 * console.log(isObject(['a','b'])); // false
 * ```
 */
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
__global.isObject = isObject;
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 * @see {@link https://bit.ly/3v1vlXu}
 */
function mergeDeep(target, ...sources) {
    if (!sources.length)
        return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}
__global.mergeDeep = mergeDeep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL09iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzREFBc0Q7QUFDdEQsMENBQTBDO0FBQzFDLDhEQUE4RDtBQUM5RCxNQUFNLFFBQVEsR0FBRyxDQUFDLE9BQU8sTUFBTSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFpQixDQUFDO0FBNEVwRixNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRztJQUN6QixJQUFJLElBQUksR0FBRyxDQUFDLEVBQ1YsR0FBUSxDQUFDO0lBQ1gsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFO1FBQ2YsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUFFLElBQUksRUFBRSxDQUFDO0tBQ3JDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxFQUFFLFFBQVE7SUFDcEMsTUFBTSxJQUFJLEdBQVcsSUFBSSxDQUFDO0lBQzFCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUM1QixJQUFJLE9BQU8sUUFBUSxJQUFJLFVBQVUsRUFBRTtZQUNqQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO1NBQU07UUFDTCxPQUFPLFNBQVMsQ0FBQztLQUNsQjtBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLEVBQUUsV0FBVztJQUNyQyxNQUFNLElBQUksR0FBUSxJQUFJLENBQUM7SUFDdkIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEdB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QUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMvQztTQUNGO0tBQ0Y7SUFFRCxPQUFPLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBQ0QsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3RyaXBsZS1zbGFzaC1yZWZlcmVuY2UgKi9cbmNvbnN0IF9fZ2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpIC8qIG5vZGUgKi8gYXMgYW55O1xuXG5pbnRlcmZhY2UgT2JqZWN0IHtcbiAgbGVuZ3RoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIER5bmFtaWMgS2V5XG4gICAqL1xuICBbc3RyOiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqXG4gICAqIE1lcmdlIHRoaXMgb2JqZWN0IHdpdGggYW5vdGhlciBvYmplY3RcbiAgICovXG4gIG1lcmdlOiAoLi4ub3RoZXI6IFJlY29yZDxhbnksIHVua25vd24+W10pID0+IFJlY29yZDxhbnksIHVua25vd24+O1xuXG4gIC8qKlxuICAgKiBJdGVyYXRlIE9iamVjdFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgZnVuY3Rpb24gZWFjaCBlbGVtZW50XG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBhID0geydhJywnbid9O1xuICAgKiBhLmVhY2goZnVuY3Rpb24oZWwpe1xuICAgKiAgY29uc29sZS5sb2coZWwpOyAvL2EsIG4gZWFjaCBpdGVyYXRpb25cbiAgICogfSlcbiAgICovXG4gIGVhY2goY2FsbGJhY2s6IChhcmcwOiBhbnkpID0+IGFueSk6IGFueTtcblxuICAvKipcbiAgICogQ2hlY2sgaXMgZW1wdHlcbiAgICovXG4gIGlzRW1wdHkoKTogYm9vbGVhbjtcblxuICByZXBsYWNlS2V5RnJvbShhbm90aGVyT2JqOiBhbnkpOiBhbnk7XG59XG5cbmludGVyZmFjZSBPYmplY3RDb25zdHJ1Y3RvciB7XG4gIC8qKlxuICAgKiBEeW5hbWljIEtleVxuICAgKi9cbiAgW3N0cjogc3RyaW5nXTogYW55O1xuXG4gIC8qKlxuICAgKiBDb3VudCBzaXplIGxlbmd0aCBvZiBvYmplY3RcbiAgICovXG4gIHNpemU6IChvYmo6IGFueSkgPT4gbnVtYmVyO1xuXG4gIC8vW3BhaXI6IHN0cmluZ3xudW1iZXJdOiBhbnk7XG5cbiAgLyoqXG4gICAqIElzIE9iamVjdCBIYXMgUHJvcGVydHkgb2Yga2V5ID9cbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgaGFzT3duUHJvcGVydHkoa2V5OiBhbnkpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBjaGVjayBpZiBoYXMgY2hpbGQgYW5kIGdvIGZvciBjYWxsYmFja1xuICAgKiBAcGFyYW0gc3RyICBtYXRjaCBjaGlsZCBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGJhY2tcbiAgICogQGF1dGhvciBEaW1hcyBMYW5qYWthIDxkaW1hc2xhbmpha2FAZ21haWwuY29tPlxuICAgKi9cbiAgY2hpbGQoc3RyOiBzdHJpbmcgfCBudW1iZXIsIGNhbGxiYWNrOiAoYXJnOiBhbnkpID0+IGFueSk6IGFueTtcblxuICAvKipcbiAgICogY2hlY2sgb2JqZWN0IGhhcyBjaGlsZCwgaWYgbm90IGV4aXN0IHJldHVybiBhbHRlcm5hdGl2ZSB2YWx1ZVxuICAgKiBAcGFyYW0gc3RyIG1hdGNoIGNoaWxkIHByb3BlcnR5XG4gICAqIEBwYXJhbSBhbHRlcm5hdGl2ZSBkZWZhdWx0IHZhbHVlIGNhbGxiYWNrXG4gICAqIEBhdXRob3IgRGltYXMgTGFuamFrYSA8ZGltYXNsYW5qYWthQGdtYWlsLmNvbT5cbiAgICovXG4gIGFsdChzdHI6IGFueSwgYWx0ZXJuYXRpdmU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pOiBhbnk7XG5cbiAgLyoqXG4gICAqIENoZWNrIG9iamVjdCBoYXMgY2hpbGRcbiAgICogQHBhcmFtIHN0clxuICAgKi9cbiAgaGFzKHN0cjogc3RyaW5nIHwgbnVtYmVyKTogYW55O1xufVxuXG5PYmplY3Quc2l6ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgbGV0IHNpemUgPSAwLFxuICAgIGtleTogYW55O1xuICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHNpemUrKztcbiAgfVxuICByZXR1cm4gc2l6ZTtcbn07XG5cbk9iamVjdC5jaGlsZCA9IGZ1bmN0aW9uIChzdHIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHNlbGY6IG9iamVjdCA9IHRoaXM7XG4gIGlmIChzZWxmLmhhc093blByb3BlcnR5KHN0cikpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhzZWxmW3N0cl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufTtcblxuT2JqZWN0LmFsdCA9IGZ1bmN0aW9uIChzdHIsIGFsdGVybmF0aXZlKSB7XG4gIGNvbnN0IHNlbGY6IGFueSA9IHRoaXM7XG4gIGlmIChzZWxmLmhhc093blByb3BlcnR5KHN0cikpIHtcbiAgICByZXR1cm4gc2VsZltzdHJdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhbHRlcm5hdGl2ZTtcbiAgfVxufTtcblxuT2JqZWN0LmhhcyA9IGZ1bmN0aW9uIChzdHI6IHN0cmluZyB8IG51bWJlcikge1xuICByZXR1cm4gdGhpcy5oYXNPd25Qcm9wZXJ0eShzdHIpO1xufTtcblxuT2JqZWN0LmVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgIC8vY2FsbGJhY2suY2FsbChzY29wZSwga2V5LCB0aGlzW2tleV0pO1xuICAgIGNhbGxiYWNrLmNhbGwodGhpc1trZXldKTtcbiAgfVxufTtcblxuT2JqZWN0LmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gMDtcbn07XG5cbk9iamVjdC5yZXBsYWNlS2V5RnJvbSA9IGZ1bmN0aW9uIChhbm90aGVyT2JqKSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzKS5yZWR1Y2UoKG9wLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBjb25zdCBuZXdLZXkgPSBhbm90aGVyT2JqW2tleV07XG4gICAgb3BbbmV3S2V5IHx8IGtleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gb3A7XG4gIH0sIHt9KTtcbiAgLyppZiAodHlwZW9mIGFub3RoZXJPYmogPT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhbm90aGVyT2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFub3RoZXJPYmosIGtleSkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGFub3RoZXJPYmpba2V5XTtcbiAgICAgICAgZGVmW2tleV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgfSovXG59O1xuXG5PYmplY3QucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKHRoaXM6IFJlY29yZDxhbnksIHVua25vd24+LCAuLi5vdGhlcnMpIHtcbiAgcmV0dXJuIG1lcmdlRGVlcCh0aGlzLCAuLi5vdGhlcnMpO1xufTtcblxuLyoqXG4gKiBKb2luIG9iamVjdCB0byBzZXBhcmF0ZWQgc3RyaW5nXG4gKiAqIFtdLmpvaW4oKSBlcXVpdmFsZW50XG4gKiBAcGFyYW0gb2JqIE9iamVjdFxuICogQHBhcmFtIHNlcGFyYXRvciBkZWZhdWx0IGNvbW1hKCwpXG4gKiBAcmV0dXJucyBKb2luZWQgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIG9iamVjdF9qb2luKG9iajogUmVjb3JkPGFueSwgdW5rbm93bj4sIHNlcGFyYXRvciA9ICcsJykge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxuICAgIC5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgIHJldHVybiBvYmpba107XG4gICAgfSlcbiAgICAuam9pbihzZXBhcmF0b3IpO1xufVxuX19nbG9iYWwub2JqZWN0X2pvaW4gPSBvYmplY3Rfam9pbjtcblxuLyoqXG4gKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICogQHBhcmFtIGl0ZW1cbiAqIEByZXR1cm5zXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGNvbnNvbGUubG9nKGlzT2JqZWN0KHthOidhJ30pKTsgLy8gdHJ1ZVxuICogY29uc29sZS5sb2coaXNPYmplY3QoWydhJywnYiddKSk7IC8vIGZhbHNlXG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoaXRlbTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKTtcbn1cbl9fZ2xvYmFsLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbi8qKlxuICogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy5cbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSAuLi5zb3VyY2VzXG4gKiBAc2VlIHtAbGluayBodHRwczovL2JpdC5seS8zdjF2bFh1fVxuICovXG5mdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0OiBSZWNvcmQ8YW55LCB1bmtub3duPiwgLi4uc291cmNlczogUmVjb3JkPGFueSwgdW5rbm93bj5bXSkge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0O1xuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgIG1lcmdlRGVlcCg8YW55PnRhcmdldFtrZXldLCA8YW55PnNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG5fX2dsb2JhbC5tZXJnZURlZXAgPSBtZXJnZURlZXA7XG4iXX0=