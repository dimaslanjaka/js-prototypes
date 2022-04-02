var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Get all method from class
 * @param toCheck
 * @returns
 */
var getAllMethods = function (toCheck) {
    if (!toCheck)
        return [];
    try {
        var props = [];
        var obj = toCheck;
        do {
            props.push.apply(props, __spreadArray([], __read(Object.getOwnPropertyNames(obj)), false));
        } while ((obj = Object.getPrototypeOf(obj)));
        return props
            .sort()
            .filter(function (e, i, arr_fname) {
            var c = toCheck[e];
            var fname = arr_fname[i + 1];
            if (e != fname && typeof c == 'function')
                return true;
        })
            .filter(function (fname) {
            return ![
                '__defineGetter__',
                '__defineSetter__',
                '__lookupGetter__',
                '__lookupSetter__',
                'constructor',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'toLocaleString',
                'toString',
                'valueOf',
            ].includes(fname);
        });
    }
    catch (e) {
        return Object.getOwnPropertyNames(toCheck).filter(function (prop) { return typeof toCheck[prop] === 'function'; });
    }
};
