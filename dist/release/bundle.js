if (typeof module.exports != 'undefined') {
    module.exports = null;
    module.exports = {
        any: null,
    };
}

/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-prototype-builtins */

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
Array.prototype.shuffle = function () {
    var i = this.length, j, temp;
    if (i == 0)
        return this;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};
Array.prototype.last = function (n) {
    if (!n) {
        if (this.length === 0)
            return undefined;
        return this[this.length - 1];
    }
    else {
        var start = this.length - n;
        if (start < 0)
            start = 0;
        return this.slice(start, this.length);
    }
};
Array.prototype.trim = function () {
    return this.map(function (str) {
        if (typeof str == 'string')
            return str.trim();
    });
};
Array.prototype.isEmpty = function () {
    return this.length === 0;
};
Array.prototype.range = function (start, end) {
    if (end < start) {
        return [];
    }
    return this.slice(start, end + 1);
};
Array.prototype.add = function (element) {
    this.push(element);
    return this;
};
Array.prototype.addAll = function (others) {
    var self = this;
    others.forEach(function (e) {
        self.push(e);
    });
    return self;
};
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};
Array.prototype.unique = function () {
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};
Array.prototype.uniqueStringArray = function () {
    var filter = new Map(this.map(function (s) { return [s.toLowerCase(), s]; }));
    return __spreadArray([], __read(filter.values()), false);
};
Array.prototype.uniqueObjectKey = function (key, removeNull) {
    if (removeNull === void 0) { removeNull = true; }
    if (!key)
        return this;
    var resArr = [];
    this.filter(function (item) {
        var i = resArr.findIndex(function (x) { return x[key] == item[key]; });
        if (i <= -1) {
            if (removeNull) {
                if (item[key])
                    resArr.push(item);
            }
            else {
                resArr.push(item);
            }
        }
        return null;
    });
    return resArr;
};
Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};
Array.prototype.hasIndex = function (n) {
    return typeof this[n] != 'undefined';
};
Array.prototype.first = function (n) {
    if (!n) {
        if (this.length === 0)
            return undefined;
        return this[0];
    }
    else {
        if (this.length === 0)
            return [];
        return this.slice(0, n);
    }
};
Array.prototype.compact = function () {
    //var changes = false;
    for (var i = 0; i < this.length; i++) {
        // If element is non-existent, undefined or null, remove it.
        if (!this[i]) {
            this.splice(i, 1);
            i = i - 1;
            //changes = true;
        }
    }
    //if (!changes) return undefined;
    return this;
};
Array.prototype.deleteAt = function (index) {
    if (index < 0)
        index = this.length + index;
    // If element is non-existent, return undefined:
    if (!this.hasOwnProperty(index))
        return undefined;
    var elem = this[index];
    this.splice(index, 1);
    return elem;
};
Array.prototype.unset = function (value) {
    if (this.indexOf(value) != -1) {
        // Make sure the value exists
        this.splice(this.indexOf(value), 1);
    }
    return this;
};
Array.prototype.exists = function (n) {
    return typeof this[n] !== 'undefined';
};
if (!Array.prototype.hasOwnProperty('every')) {
    Array.prototype.every = function (fun /*, thisp */) {
        'use strict';
        var t = Object(this);
        var len = t.length >>> 0;
        var i;
        var thisp = arguments[1];
        if (this == null) {
            throw new TypeError();
        }
        if (typeof fun !== 'function') {
            throw new TypeError();
        }
        for (i = 0; i < len; i++) {
            if (i in t && !fun.call(thisp, t[i], i, t)) {
                return false;
            }
        }
        return true;
    };
}
Array.prototype.move = function (from, to) {
    var itemRemoved = this.splice(from, 1); // splice() returns the remove element as an array
    this.splice(to, 0, itemRemoved[0]); // Insert itemRemoved into the target index
    return this;
};
Array.prototype.hapusItemDariArrayLain = function () {
    var arrayLain = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrayLain[_i] = arguments[_i];
    }
    var thisArr = this;
    arrayLain.forEach(function (otherArr) {
        thisArr = thisArr.filter(function (el) {
            return !otherArr.includes(el);
        });
    });
    return thisArr;
};
Array.prototype.removeEmpties = function () {
    var filter = this.filter(function (el) {
        var notnull = 
        // make sure element is not null
        el != null &&
            // make sure element is not undefined
            typeof el != 'undefined';
        // if element is string, make sure string length not zero
        if (typeof el == 'string') {
            return notnull && el.trim().length > 0;
        }
        return notnull;
    });
    return filter;
};
var array_ext = /** @class */ (function () {
    function array_ext() {
    }
    array_ext.array_filter = function (array) {
        return array.filter(function (el) {
            return el != null;
        });
    };
    /**
     * pick random from array
     * @param {Array<any>} arrays
     * @param {boolean} unique Unique the arrays
     */
    array_ext.array_rand = function (arrays, unique) {
        if (unique) {
            arrays = array_ext.array_unique(arrays);
        }
        var index = Math.floor(Math.random() * arrays.length);
        return {
            index: index,
            value: arrays[index],
        };
    };
    /**
     * Array unique
     * @param {Array<any>} arrays
     */
    array_ext.array_unique = function (arrays) {
        return arrays.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });
    };
    /**
     * Unset array
     * @param {Array<any>} arrayName
     * @param {String|number} key
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    array_ext.array_unset = function (arrayName, key) {
        var x;
        var tmpArray = [];
        for (x in arrayName) {
            if (x != key) {
                tmpArray[x] = arrayName[x];
            }
        }
        return tmpArray;
    };
    /**
     * PHP shuffle array equivalent
     * @param array
     * @example
     * var arr = [2, 11, 37, 42];
     * shuffle(arr);
     * console.log(arr); //return random
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    array_ext.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    array_ext.arrayCompare = function (a1, a2) {
        if (a1.length != a2.length)
            return false;
        var length = a2.length;
        for (var i = 0; i < length; i++) {
            if (a1[i] !== a2[i])
                return false;
        }
        return true;
    };
    /**
     * in_array PHP equivalent
     * @param needle string etc
     * @param haystack
     */
    array_ext.inArray = function (needle, haystack) {
        var length = haystack.length;
        for (var i = 0; i < length; i++) {
            if (typeof haystack[i] == 'object') {
                if (array_ext.arrayCompare(haystack[i], needle))
                    return true;
            }
            else {
                if (haystack[i] == needle)
                    return true;
            }
        }
        return false;
    };
    /**
     * in_array PHP equivalent
     * @param needle string etc
     * @param haystack
     */
    array_ext.in_array = function (needle, haystack) {
        return array_ext.inArray(needle, haystack);
    };
    /**
     * get all keys
     * @param haystack string etc
     */
    array_ext.array_keys = function (haystack) {
        return Object.keys(haystack);
    };
    /**
     * Shuffles array in place.
     * @param a items An array containing the items.
     */
    array_ext.array_shuffle = function (a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    };
    /**
     * Deep merge two or more objects into the first.
     * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
     * @param objects  The objects to merge together
     * @returns Merged values of defaults and options
     */
    array_ext.deepAssign = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        // Make sure there are objects to merge
        var len = objects.length;
        if (len < 1)
            return;
        if (len < 2)
            return objects[0];
        // Merge all objects into first
        for (var i = 1; i < len; i++) {
            for (var key in objects[i]) {
                if (objects[i].hasOwnProperty(key)) {
                    // If it's an object, recursively merge
                    // Otherwise, push to key
                    if (Object.prototype.toString.call(objects[i][key]) === '[object Object]') {
                        objects[0][key] = array_ext.deepAssign(objects[0][key] || {}, objects[i][key]);
                    }
                    else {
                        objects[0][key] = objects[i][key];
                    }
                }
            }
        }
        return arguments[0];
    };
    /**
     * Remove item from array
     * @param arr
     * @param value
     * @returns
     */
    array_ext.removeItem = function (arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    };
    return array_ext;
}());
if (typeof window != 'undefined' && window instanceof Window) {
    window.array_shuffle = array_ext.array_shuffle;
    window.array_filter = array_ext.array_filter;
    window.array_keys = array_ext.array_keys;
    window.array_rand = array_ext.array_rand;
    window.array_unique = array_ext.array_unique;
    window.array_unset = array_ext.array_unset;
    window.inArray = array_ext.inArray;
    window.in_array = array_ext.in_array;
}
else if (typeof global == 'object') {
    global.array_shuffle = array_ext.array_shuffle;
    global.array_filter = array_ext.array_filter;
    global.array_keys = array_ext.array_keys;
    global.array_rand = array_ext.array_rand;
    global.array_unique = array_ext.array_unique;
    global.array_unset = array_ext.array_unset;
    global.inArray = array_ext.inArray;
    global.in_array = array_ext.in_array;
}
// export node module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = array_ext;
}

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

Date.prototype.isHourAgo = function (hour) {
    hour = hour * 60 * 1000; /* ms */
    var hourago = Date.now() - hour;
    return hour > hourago;
};
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}
Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    //this.setHours(this.getHours()+h);
    return this;
};
Date.prototype.addHours2 = function (hrs) {
    this.setHours(this.getHours() + hrs);
    return this;
};
var date_ext = /** @class */ (function () {
    function date_ext() {
    }
    date_ext.datetime_local = function (date) {
        return new Date(date).toJSON().slice(0, 19);
    };
    return date_ext;
}());
if (typeof window != 'undefined' && window instanceof Window) {
    window.datetime_local = date_ext.datetime_local;
}
else if (typeof global == 'object') {
    global.datetime_local = date_ext.datetime_local;
}
if (typeof module != 'undefined' && typeof module == 'object') {
    module.exports = date_ext;
    module.exports = {
        datetime_local: date_ext.datetime_local,
    };
}

if (typeof document != 'undefined') {
    Document.prototype.listen = function (eventType, listener, options) {
        if (options === void 0) { options = {}; }
        if (this.addEventListener) {
            this.addEventListener(eventType, listener, options);
        }
        else if (this.attachEvent) {
            this.attachEvent('on' + eventType, listener, options);
        }
    };
}

if (!('toJSON' in Error.prototype)) {
    // https://stackoverflow.com/a/18391400/6404439
    Object.defineProperty(Error.prototype, 'toJSON', {
        value: function () {
            var alt = {};
            Object.getOwnPropertyNames(this).forEach(function (key) {
                alt[key] = this[key];
            }, this);
            return alt;
        },
        configurable: true,
        writable: true,
    });
}

"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference no-default-lib="true"/>

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

/* eslint-disable @typescript-eslint/no-unused-vars */
/*declare let Navigator: {
  prototype: Navigator;
  new (): Navigator;
};*/

Number.prototype.getMS = function (type) {
    var self = this;
    return this * 60 * 1000;
};
Number.prototype.addHour = function (source) {
    var self = this;
    var Hour = this * 60 * 1000; /* ms */
    if (!source)
        source = new Date();
    return new Date(source.getTime() + Hour).getTime();
};
Number.prototype.AddZero = function (b, c) {
    var l = String(b || 10).length - String(this).length + 1;
    return l > 0 ? new Array(l).join(c || "0") + this : this;
};
/**
 * Odd or Even (Ganjil Genap);
 * @param n
 * @param type odd or even
 */
function oddoreven(n, type) {
    if (!type) {
        type = "odd";
    }
    var time = !n ? new Date().getDay() : Number(n);
    if (!/^-?\d+jQuery/.test(time.toString())) {
        alert("arguments is not number, please remove quote");
        return null;
    }
    var hasil = time % 2;
    var rType = /^(odd|ganjil)$/.test(type) ? "1" : "0";
    //return hasil == (type == ('odd' || 'ganjil') ? 1 : 0);
    return hasil.toString() == rType.toString();
}
/**
 * strpad / startwith zero [0]
 * @param {number} val
 */
function strpad(val) {
    if (val >= 10) {
        return val;
    }
    else {
        return "0" + val;
    }
}
/**
 * is variable number?
 * @param n
 * @returns
 */
function isInt(n) {
    return Number(n) === n && n % 1 === 0;
}
/**
 * is variable float?
 * @param n
 * @returns
 */
function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}
if (typeof module.exports != 'undefined') {
    global.isInt = isInt;
    global.isFloat = isFloat;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/triple-slash-reference */
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
Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key))
            size++;
    }
    return size;
};
Object.child = function (str, callback) {
    var self = this;
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
    var self = this;
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
    for (var key in this) {
        //callback.call(scope, key, this[key]);
        callback.call(this[key]);
    }
};
Object.isEmpty = function () {
    return this.length === 0;
};
Object.replaceKeyFrom = function (anotherObj) {
    return Object.entries(this).reduce(function (op, _a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        var newKey = anotherObj[key];
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
var object_ext = /** @class */ (function () {
    function object_ext() {
    }
    /**
     * Join object to separated string
     * * [].join() equivalent
     * @param obj Object
     * @param separator default comma(,)
     * @returns Joined string
     */
    object_ext.object_join = function (obj, separator) {
        if (separator === void 0) { separator = ','; }
        return Object.keys(obj)
            .map(function (k) {
            return obj[k];
        })
            .join(separator);
    };
    /**
     * Simple object check.
     * @param item
     * @returns
     */
    object_ext.isObject = function (item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    };
    /**
     * Deep merge two objects.
     * @param target
     * @param ...sources
     */
    object_ext.mergeDeep = function (target) {
        var _a, _b;
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (!sources.length)
            return target;
        var source = sources.shift();
        if (object_ext.isObject(target) && object_ext.isObject(source)) {
            for (var key in source) {
                if (object_ext.isObject(source[key])) {
                    if (!target[key])
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    object_ext.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            }
        }
        return object_ext.mergeDeep.apply(object_ext, __spreadArray([target], __read(sources), false));
    };
    return object_ext;
}());
Object.prototype.merge = function () {
    var others = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        others[_i] = arguments[_i];
    }
    return object_ext.mergeDeep.apply(object_ext, __spreadArray([this], __read(others), false));
};
if (typeof window != 'undefined' && window instanceof Window) {
    window.object_join = object_ext.object_join;
    window.object_merge = object_ext.mergeDeep;
    window.isObject = object_ext.isObject;
}
else if (typeof global == 'object') {
    global.object_join = object_ext.object_join;
    global.object_merge = object_ext.mergeDeep;
    global.isObject = object_ext.isObject;
}
if (typeof module != 'undefined' && typeof module == 'object') {
    module.exports = object_ext;
    module.exports = {
        object_join: object_ext.object_join,
        object_merge: object_ext.mergeDeep,
        isObject: object_ext.isObject,
    };
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/triple-slash-reference */

String.prototype.printf = function (obj) {
    /*const isNode = new Function(
      "try {return this===global;}catch(e){return false;}"
    );
  
    if (isNode()) {
      const util = require("util");
      return util.format(this, obj);
    }*/
    var useArguments = false;
    var _arguments = arguments;
    var i = -1;
    if (typeof _arguments[0] == 'string') {
        useArguments = true;
    }
    if (obj instanceof Array || useArguments) {
        return this.replace(/%s/g, function (a, b) {
            i++;
            if (useArguments) {
                if (typeof _arguments[i] == 'string') {
                    return _arguments[i];
                }
                else {
                    throw new Error('Arguments element is an invalid type');
                }
            }
            return obj[i];
        });
    }
    else {
        return this.replace(/{([^{}]*)}/g, function (a, b) {
            var r = obj[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        });
    }
};
String.prototype.parse_url = function () {
    var parser = document.createElement('a');
    var searchObject;
    var split;
    var i;
    var queries = [];
    // Let the browser do the work
    parser.href = this.toString();
    // Convert query string to object
    queries = parser.search.replace(/^\?/, '').split('&');
    for (i = 0; i < queries.length; i++) {
        split = queries[i].split('=');
        searchObject[split[0]] = split[1];
    }
    return {
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash,
        protohost: parser.protocol + '//' + parser.host,
    };
};
/**
 * Load css
 */
String.prototype.CSS = function () {
    var e = document.createElement('link');
    e.rel = 'stylesheet';
    e.href = this.toString();
    var n = document.getElementsByTagName('head')[0];
    window.addEventListener
        ? window.addEventListener('load', function () {
            n.parentNode.insertBefore(e, n);
        }, !1)
        : window.attachEvent
            ? window.attachEvent('onload', function () {
                n.parentNode.insertBefore(e, n);
            })
            : (window.onload = function () {
                n.parentNode.insertBefore(e, n);
            });
};
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/gm, '');
};
String.prototype.hexE = function () {
    var hex, i;
    var result = '';
    for (i = 0; i < this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ('000' + hex).slice(-4);
    }
    return result;
};
String.prototype.hexD = function () {
    var j;
    var hexes = this.match(/.{1,4}/g) || [];
    var back = '';
    for (j = 0; j < hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }
    return back;
};
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.rot13 = function () {
    return this.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
};
String.prototype.truncate = function (n, useWordBoundary) {
    if (this.length <= n) {
        return this;
    }
    var subString = this.substr(0, n - 1); // the original check
    return (useWordBoundary ? subString.substr(0, subString.lastIndexOf(' ')) : subString) + '&hellip;';
};
String.prototype.isEmpty = function () {
    if (this != null || typeof this != 'undefined') {
        return this.length === 0 || !this.trim();
    }
    return false;
};
String.prototype.replaceArr = function (array, replacement) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var ori = this;
    array.map(function (str) {
        ori = ori.replace(str, replacement);
    });
    return ori;
};
String.prototype.toHtmlEntities = function () {
    return this.replace(/./gm, function (s) {
        // return "&#" + s.charCodeAt(0) + ";";
        return s.match(/[a-z0-9\s]+/i) ? s : '&#' + s.charCodeAt(0) + ';';
    });
};
String.fromHtmlEntities = function (str) {
    return (str + '').replace(/&#\d+;/gm, function (s) {
        var m = s.match(/\d+/gm)[0];
        return String.fromCharCode(m);
    });
};
String.prototype.includesArray = function (substrings) {
    var _this = this;
    return substrings.some(function (v) { return _this.includes(v); });
};
if (typeof ''.replaceAll != 'function') {
    String.prototype.replaceAll = function (search, replacement) {
        var find = typeof search == 'string' ? new RegExp(search, 'g') : search;
        return this.replace(find, replacement);
    };
}
