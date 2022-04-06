if (typeof module.exports != 'undefined') {
    module.exports = null;
    module.exports = {
        any: null,
    };
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-prototype-builtins */

Array.prototype.shuffle = function () {
    let i = this.length, j, temp;
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
        let start = this.length - n;
        if (start < 0)
            start = 0;
        return this.slice(start, this.length);
    }
};
Array.prototype.trim = function () {
    return this.map((str) => {
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
    const self = this;
    others.forEach(function (e) {
        self.push(e);
    });
    return self;
};
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};
Array.prototype.unique = function () {
    const a = this.concat();
    for (let i = 0; i < a.length; ++i) {
        for (let j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};
Array.prototype.uniqueStringArray = function () {
    const filter = new Map(this.map((s) => [s.toLowerCase(), s]));
    return [...filter.values()];
};
Array.prototype.uniqueObjectKey = function (key, removeNull = true) {
    if (!key)
        return this;
    const resArr = [];
    this.filter(function (item) {
        const i = resArr.findIndex((x) => x[key] == item[key]);
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
    let i = this.length;
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
    for (let i = 0; i < this.length; i++) {
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
    const elem = this[index];
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
        const t = Object(this);
        const len = t.length >>> 0;
        let i;
        const thisp = arguments[1];
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
    const itemRemoved = this.splice(from, 1); // splice() returns the remove element as an array
    this.splice(to, 0, itemRemoved[0]); // Insert itemRemoved into the target index
    return this;
};
Array.prototype.hapusItemDariArrayLain = function (...arrayLain) {
    let thisArr = this;
    arrayLain.forEach((otherArr) => {
        thisArr = thisArr.filter(function (el) {
            return !otherArr.includes(el);
        });
    });
    return thisArr;
};
Array.prototype.removeEmpties = function () {
    const filter = this.filter(function (el) {
        const notnull = 
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
const _global = (typeof window != 'undefined' ? window : global) /* node */;
function array_filter(array) {
    return array.filter(function (el) {
        return el != null;
    });
}
_global.array_filter = array_filter;
/**
 * pick random from array
 * @param {Array<any>} arrays
 * @param {boolean} unique Unique the arrays
 */
function array_rand(arrays, unique) {
    if (unique) {
        arrays = array_unique(arrays);
    }
    const index = Math.floor(Math.random() * arrays.length);
    return {
        index: index,
        value: arrays[index],
    };
}
_global.array_rand = array_rand;
/**
 * Array unique
 * @param {Array<any>} arrays
 */
function array_unique(arrays) {
    return arrays.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    });
}
_global.array_unique = array_unique;
/**
 * Unset array
 * @param {Array<any>} arrayName
 * @param {String|number} key
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function array_unset(arrayName, key) {
    let x;
    const tmpArray = [];
    for (x in arrayName) {
        if (x != key) {
            tmpArray[x] = arrayName[x];
        }
    }
    return tmpArray;
}
_global.array_unset = array_unset;
/**
 * PHP shuffle array equivalent
 * @param array
 * @example
 * var arr = [2, 11, 37, 42];
 * shuffle(arr);
 * console.log(arr); //return random
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
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
}
_global.shuffle = shuffle;
function arrayCompare(a1, a2) {
    if (a1.length != a2.length)
        return false;
    const length = a2.length;
    for (let i = 0; i < length; i++) {
        if (a1[i] !== a2[i])
            return false;
    }
    return true;
}
_global.arrayCompare = arrayCompare;
/**
 * in_array PHP equivalent
 * @param needle string etc
 * @param haystack
 */
function inArray(needle, haystack) {
    const length = haystack.length;
    for (let i = 0; i < length; i++) {
        if (typeof haystack[i] == 'object') {
            if (arrayCompare(haystack[i], needle))
                return true;
        }
        else {
            if (haystack[i] == needle)
                return true;
        }
    }
    return false;
}
/**
 * in_array PHP equivalent
 * @param needle string etc
 * @param haystack
 */
function in_array(needle, haystack) {
    return inArray(needle, haystack);
}
_global.in_array = in_array;
/**
 * get all keys
 * @param haystack string etc
 */
function array_keys(haystack) {
    return Object.keys(haystack);
}
/**
 * Shuffles array in place.
 * @param a items An array containing the items.
 */
function array_shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
_global.array_shuffle = array_shuffle;
/**
 * Deep merge two or more objects into the first.
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param objects  The objects to merge together
 * @returns Merged values of defaults and options
 */
function deepAssign(...objects) {
    // Make sure there are objects to merge
    const len = objects.length;
    if (len < 1)
        return;
    if (len < 2)
        return objects[0];
    // Merge all objects into first
    for (let i = 1; i < len; i++) {
        for (const key in objects[i]) {
            if (objects[i].hasOwnProperty(key)) {
                // If it's an object, recursively merge
                // Otherwise, push to key
                if (Object.prototype.toString.call(objects[i][key]) === '[object Object]') {
                    objects[0][key] = deepAssign(objects[0][key] || {}, objects[i][key]);
                }
                else {
                    objects[0][key] = objects[i][key];
                }
            }
        }
    }
    return arguments[0];
}
_global.deepAssign = deepAssign;
/**
 * Remove item from array
 * @param arr
 * @param value
 * @returns
 */
function removeItem(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}
_global.removeItem = removeItem;

/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Get all method from class
 * @param toCheck
 * @returns
 */
const getAllMethods = function (toCheck) {
    if (!toCheck)
        return [];
    try {
        const props = [];
        let obj = toCheck;
        do {
            props.push(...Object.getOwnPropertyNames(obj));
        } while ((obj = Object.getPrototypeOf(obj)));
        return props
            .sort()
            .filter((e, i, arr_fname) => {
            const c = toCheck[e];
            const fname = arr_fname[i + 1];
            if (e != fname && typeof c == 'function')
                return true;
        })
            .filter((fname) => {
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
        return Object.getOwnPropertyNames(toCheck).filter((prop) => typeof toCheck[prop] === 'function');
    }
};

Date.prototype.isHourAgo = function (hour) {
    hour = hour * 60 * 1000; /* ms */
    const hourago = Date.now() - hour;
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
class date_ext {
    static datetime_local(date) {
        return new Date(date).toJSON().slice(0, 19);
    }
}
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
    Document.prototype.listen = function (eventType, listener, options = {}) {
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
            const alt = {};
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

/* eslint-disable @typescript-eslint/no-unused-vars */
/*declare let Navigator: {
  prototype: Navigator;
  new (): Navigator;
};*/

Number.prototype.getMS = function (type) {
    const self = this;
    return this * 60 * 1000;
};
Number.prototype.addHour = function (source) {
    const self = this;
    const Hour = this * 60 * 1000; /* ms */
    if (!source)
        source = new Date();
    return new Date(source.getTime() + Hour).getTime();
};
Number.prototype.AddZero = function (b, c) {
    const l = String(b || 10).length - String(this).length + 1;
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
    const time = !n ? new Date().getDay() : Number(n);
    if (!/^-?\d+jQuery/.test(time.toString())) {
        alert("arguments is not number, please remove quote");
        return null;
    }
    const hasil = time % 2;
    const rType = /^(odd|ganjil)$/.test(type) ? "1" : "0";
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
class object_ext {
    /**
     * Join object to separated string
     * * [].join() equivalent
     * @param obj Object
     * @param separator default comma(,)
     * @returns Joined string
     */
    static object_join(obj, separator = ',') {
        return Object.keys(obj)
            .map(function (k) {
            return obj[k];
        })
            .join(separator);
    }
    /**
     * Simple object check.
     * @param item
     * @returns
     */
    static isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    }
    /**
     * Deep merge two objects.
     * @param target
     * @param ...sources
     */
    static mergeDeep(target, ...sources) {
        if (!sources.length)
            return target;
        const source = sources.shift();
        if (object_ext.isObject(target) && object_ext.isObject(source)) {
            for (const key in source) {
                if (object_ext.isObject(source[key])) {
                    if (!target[key])
                        Object.assign(target, { [key]: {} });
                    object_ext.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
        return object_ext.mergeDeep(target, ...sources);
    }
}
Object.prototype.merge = function (...others) {
    return object_ext.mergeDeep(this, ...others);
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
    let useArguments = false;
    const _arguments = arguments;
    let i = -1;
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
            const r = obj[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        });
    }
};
String.prototype.parse_url = function () {
    let parser;
    if (typeof module != 'undefined' && module.exports) {
        parser = new URL(this);
    }
    else if (typeof document != 'undefined') {
        parser = document.createElement('a');
    }
    const searchObject = [];
    let split = [];
    let queries = [];
    // Let the browser do the work
    parser.href = this.toString();
    // Convert query string to object
    queries = parser.search.replace(/^\?/, '').split('&');
    for (let i = 0; i < queries.length; i++) {
        split = queries[i].split('=');
        if (split.length)
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
    const e = document.createElement('link');
    e.rel = 'stylesheet';
    e.href = this.toString();
    const n = document.getElementsByTagName('head')[0];
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
    let hex, i;
    let result = '';
    for (i = 0; i < this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ('000' + hex).slice(-4);
    }
    return result;
};
String.prototype.hexD = function () {
    let j;
    const hexes = this.match(/.{1,4}/g) || [];
    let back = '';
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
    const subString = this.substr(0, n - 1); // the original check
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
    let ori = this;
    array.map((str) => {
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
        const m = s.match(/\d+/gm)[0];
        return String.fromCharCode(m);
    });
};
String.prototype.includesArray = function (substrings) {
    return substrings.some((v) => this.includes(v));
};
if (typeof ''.replaceAll != 'function') {
    String.prototype.replaceAll = function (search, replacement) {
        const find = typeof search == 'string' ? new RegExp(search, 'g') : search;
        return this.replace(find, replacement);
    };
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFueS5qcyIsIkFycmF5LmpzIiwiQ2xhc3MuanMiLCJEYXRlLmpzIiwiRG9jdW1lbnQuanMiLCJFcnJvci5qcyIsIkZ1bmN0aW9uLmpzIiwiTmF2aWdhdG9yLmpzIiwiTnVtYmVyLmpzIiwiT2JqZWN0LmpzIiwiU3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAodHlwZW9mIG1vZHVsZS5leHBvcnRzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBudWxsO1xuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBhbnk6IG51bGwsXG4gICAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC90cmlwbGUtc2xhc2gtcmVmZXJlbmNlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vZ2xvYmFscy5kLnRzXCIgLz5cbkFycmF5LnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBpID0gdGhpcy5sZW5ndGgsIGosIHRlbXA7XG4gICAgaWYgKGkgPT0gMClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgd2hpbGUgKC0taSkge1xuICAgICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgIHRlbXAgPSB0aGlzW2ldO1xuICAgICAgICB0aGlzW2ldID0gdGhpc1tqXTtcbiAgICAgICAgdGhpc1tqXSA9IHRlbXA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcbkFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAoIW4pIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMubGVuZ3RoIC0gbjtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMClcbiAgICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpY2Uoc3RhcnQsIHRoaXMubGVuZ3RoKTtcbiAgICB9XG59O1xuQXJyYXkucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKChzdHIpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHIgPT0gJ3N0cmluZycpXG4gICAgICAgICAgICByZXR1cm4gc3RyLnRyaW0oKTtcbiAgICB9KTtcbn07XG5BcnJheS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDA7XG59O1xuQXJyYXkucHJvdG90eXBlLnJhbmdlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zbGljZShzdGFydCwgZW5kICsgMSk7XG59O1xuQXJyYXkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdGhpcy5wdXNoKGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xufTtcbkFycmF5LnByb3RvdHlwZS5hZGRBbGwgPSBmdW5jdGlvbiAob3RoZXJzKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgb3RoZXJzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc2VsZi5wdXNoKGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xufTtcbkFycmF5LnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5sZW5ndGgpXTtcbn07XG5BcnJheS5wcm90b3R5cGUudW5pcXVlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGEgPSB0aGlzLmNvbmNhdCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBhLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBpZiAoYVtpXSA9PT0gYVtqXSlcbiAgICAgICAgICAgICAgICBhLnNwbGljZShqLS0sIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xufTtcbkFycmF5LnByb3RvdHlwZS51bmlxdWVTdHJpbmdBcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgTWFwKHRoaXMubWFwKChzKSA9PiBbcy50b0xvd2VyQ2FzZSgpLCBzXSkpO1xuICAgIHJldHVybiBbLi4uZmlsdGVyLnZhbHVlcygpXTtcbn07XG5BcnJheS5wcm90b3R5cGUudW5pcXVlT2JqZWN0S2V5ID0gZnVuY3Rpb24gKGtleSwgcmVtb3ZlTnVsbCA9IHRydWUpIHtcbiAgICBpZiAoIWtleSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgcmVzQXJyID0gW107XG4gICAgdGhpcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgaSA9IHJlc0Fyci5maW5kSW5kZXgoKHgpID0+IHhba2V5XSA9PSBpdGVtW2tleV0pO1xuICAgICAgICBpZiAoaSA8PSAtMSkge1xuICAgICAgICAgICAgaWYgKHJlbW92ZU51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldKVxuICAgICAgICAgICAgICAgICAgICByZXNBcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc0Fyci5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICAgIHJldHVybiByZXNBcnI7XG59O1xuQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGxldCBpID0gdGhpcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpZiAodGhpc1tpXSA9PT0gb2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuQXJyYXkucHJvdG90eXBlLmhhc0luZGV4ID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXNbbl0gIT0gJ3VuZGVmaW5lZCc7XG59O1xuQXJyYXkucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAoIW4pIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIHJldHVybiB0aGlzLnNsaWNlKDAsIG4pO1xuICAgIH1cbn07XG5BcnJheS5wcm90b3R5cGUuY29tcGFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3ZhciBjaGFuZ2VzID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIElmIGVsZW1lbnQgaXMgbm9uLWV4aXN0ZW50LCB1bmRlZmluZWQgb3IgbnVsbCwgcmVtb3ZlIGl0LlxuICAgICAgICBpZiAoIXRoaXNbaV0pIHtcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaSA9IGkgLSAxO1xuICAgICAgICAgICAgLy9jaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2lmICghY2hhbmdlcykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdGhpcztcbn07XG5BcnJheS5wcm90b3R5cGUuZGVsZXRlQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPCAwKVxuICAgICAgICBpbmRleCA9IHRoaXMubGVuZ3RoICsgaW5kZXg7XG4gICAgLy8gSWYgZWxlbWVudCBpcyBub24tZXhpc3RlbnQsIHJldHVybiB1bmRlZmluZWQ6XG4gICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KGluZGV4KSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBlbGVtID0gdGhpc1tpbmRleF07XG4gICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiBlbGVtO1xufTtcbkFycmF5LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluZGV4T2YodmFsdWUpICE9IC0xKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdmFsdWUgZXhpc3RzXG4gICAgICAgIHRoaXMuc3BsaWNlKHRoaXMuaW5kZXhPZih2YWx1ZSksIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5BcnJheS5wcm90b3R5cGUuZXhpc3RzID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXNbbl0gIT09ICd1bmRlZmluZWQnO1xufTtcbmlmICghQXJyYXkucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdldmVyeScpKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmV2ZXJ5ID0gZnVuY3Rpb24gKGZ1biAvKiwgdGhpc3AgKi8pIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KHRoaXMpO1xuICAgICAgICBjb25zdCBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGNvbnN0IHRoaXNwID0gYXJndW1lbnRzWzFdO1xuICAgICAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmdW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIGluIHQgJiYgIWZ1bi5jYWxsKHRoaXNwLCB0W2ldLCBpLCB0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuQXJyYXkucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICBjb25zdCBpdGVtUmVtb3ZlZCA9IHRoaXMuc3BsaWNlKGZyb20sIDEpOyAvLyBzcGxpY2UoKSByZXR1cm5zIHRoZSByZW1vdmUgZWxlbWVudCBhcyBhbiBhcnJheVxuICAgIHRoaXMuc3BsaWNlKHRvLCAwLCBpdGVtUmVtb3ZlZFswXSk7IC8vIEluc2VydCBpdGVtUmVtb3ZlZCBpbnRvIHRoZSB0YXJnZXQgaW5kZXhcbiAgICByZXR1cm4gdGhpcztcbn07XG5BcnJheS5wcm90b3R5cGUuaGFwdXNJdGVtRGFyaUFycmF5TGFpbiA9IGZ1bmN0aW9uICguLi5hcnJheUxhaW4pIHtcbiAgICBsZXQgdGhpc0FyciA9IHRoaXM7XG4gICAgYXJyYXlMYWluLmZvckVhY2goKG90aGVyQXJyKSA9PiB7XG4gICAgICAgIHRoaXNBcnIgPSB0aGlzQXJyLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiAhb3RoZXJBcnIuaW5jbHVkZXMoZWwpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpc0Fycjtcbn07XG5BcnJheS5wcm90b3R5cGUucmVtb3ZlRW1wdGllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgY29uc3Qgbm90bnVsbCA9IFxuICAgICAgICAvLyBtYWtlIHN1cmUgZWxlbWVudCBpcyBub3QgbnVsbFxuICAgICAgICBlbCAhPSBudWxsICYmXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgZWxlbWVudCBpcyBub3QgdW5kZWZpbmVkXG4gICAgICAgICAgICB0eXBlb2YgZWwgIT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIC8vIGlmIGVsZW1lbnQgaXMgc3RyaW5nLCBtYWtlIHN1cmUgc3RyaW5nIGxlbmd0aCBub3QgemVyb1xuICAgICAgICBpZiAodHlwZW9mIGVsID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm90bnVsbCAmJiBlbC50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm90bnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyO1xufTtcbmNvbnN0IF9nbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCkgLyogbm9kZSAqLztcbmZ1bmN0aW9uIGFycmF5X2ZpbHRlcihhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiBlbCAhPSBudWxsO1xuICAgIH0pO1xufVxuX2dsb2JhbC5hcnJheV9maWx0ZXIgPSBhcnJheV9maWx0ZXI7XG4vKipcbiAqIHBpY2sgcmFuZG9tIGZyb20gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyYXlzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHVuaXF1ZSBVbmlxdWUgdGhlIGFycmF5c1xuICovXG5mdW5jdGlvbiBhcnJheV9yYW5kKGFycmF5cywgdW5pcXVlKSB7XG4gICAgaWYgKHVuaXF1ZSkge1xuICAgICAgICBhcnJheXMgPSBhcnJheV91bmlxdWUoYXJyYXlzKTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheXMubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIHZhbHVlOiBhcnJheXNbaW5kZXhdLFxuICAgIH07XG59XG5fZ2xvYmFsLmFycmF5X3JhbmQgPSBhcnJheV9yYW5kO1xuLyoqXG4gKiBBcnJheSB1bmlxdWVcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyYXlzXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3VuaXF1ZShhcnJheXMpIHtcbiAgICByZXR1cm4gYXJyYXlzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgcG9zLCBzZWxmKSB7XG4gICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YoaXRlbSkgPT0gcG9zO1xuICAgIH0pO1xufVxuX2dsb2JhbC5hcnJheV91bmlxdWUgPSBhcnJheV91bmlxdWU7XG4vKipcbiAqIFVuc2V0IGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGFycmF5TmFtZVxuICogQHBhcmFtIHtTdHJpbmd8bnVtYmVyfSBrZXlcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuZnVuY3Rpb24gYXJyYXlfdW5zZXQoYXJyYXlOYW1lLCBrZXkpIHtcbiAgICBsZXQgeDtcbiAgICBjb25zdCB0bXBBcnJheSA9IFtdO1xuICAgIGZvciAoeCBpbiBhcnJheU5hbWUpIHtcbiAgICAgICAgaWYgKHggIT0ga2V5KSB7XG4gICAgICAgICAgICB0bXBBcnJheVt4XSA9IGFycmF5TmFtZVt4XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG1wQXJyYXk7XG59XG5fZ2xvYmFsLmFycmF5X3Vuc2V0ID0gYXJyYXlfdW5zZXQ7XG4vKipcbiAqIFBIUCBzaHVmZmxlIGFycmF5IGVxdWl2YWxlbnRcbiAqIEBwYXJhbSBhcnJheVxuICogQGV4YW1wbGVcbiAqIHZhciBhcnIgPSBbMiwgMTEsIDM3LCA0Ml07XG4gKiBzaHVmZmxlKGFycik7XG4gKiBjb25zb2xlLmxvZyhhcnIpOyAvL3JldHVybiByYW5kb21cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcbiAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG4gICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xuICAgICAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgICAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xufVxuX2dsb2JhbC5zaHVmZmxlID0gc2h1ZmZsZTtcbmZ1bmN0aW9uIGFycmF5Q29tcGFyZShhMSwgYTIpIHtcbiAgICBpZiAoYTEubGVuZ3RoICE9IGEyLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IGEyLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhMVtpXSAhPT0gYTJbaV0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuX2dsb2JhbC5hcnJheUNvbXBhcmUgPSBhcnJheUNvbXBhcmU7XG4vKipcbiAqIGluX2FycmF5IFBIUCBlcXVpdmFsZW50XG4gKiBAcGFyYW0gbmVlZGxlIHN0cmluZyBldGNcbiAqIEBwYXJhbSBoYXlzdGFja1xuICovXG5mdW5jdGlvbiBpbkFycmF5KG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICBjb25zdCBsZW5ndGggPSBoYXlzdGFjay5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGhheXN0YWNrW2ldID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXlDb21wYXJlKGhheXN0YWNrW2ldLCBuZWVkbGUpKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhheXN0YWNrW2ldID09IG5lZWRsZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIGluX2FycmF5IFBIUCBlcXVpdmFsZW50XG4gKiBAcGFyYW0gbmVlZGxlIHN0cmluZyBldGNcbiAqIEBwYXJhbSBoYXlzdGFja1xuICovXG5mdW5jdGlvbiBpbl9hcnJheShuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgcmV0dXJuIGluQXJyYXkobmVlZGxlLCBoYXlzdGFjayk7XG59XG5fZ2xvYmFsLmluX2FycmF5ID0gaW5fYXJyYXk7XG4vKipcbiAqIGdldCBhbGwga2V5c1xuICogQHBhcmFtIGhheXN0YWNrIHN0cmluZyBldGNcbiAqL1xuZnVuY3Rpb24gYXJyYXlfa2V5cyhoYXlzdGFjaykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhoYXlzdGFjayk7XG59XG4vKipcbiAqIFNodWZmbGVzIGFycmF5IGluIHBsYWNlLlxuICogQHBhcmFtIGEgaXRlbXMgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgaXRlbXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5X3NodWZmbGUoYSkge1xuICAgIGxldCBqLCB4LCBpO1xuICAgIGZvciAoaSA9IGEubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgIHggPSBhW2ldO1xuICAgICAgICBhW2ldID0gYVtqXTtcbiAgICAgICAgYVtqXSA9IHg7XG4gICAgfVxuICAgIHJldHVybiBhO1xufVxuX2dsb2JhbC5hcnJheV9zaHVmZmxlID0gYXJyYXlfc2h1ZmZsZTtcbi8qKlxuICogRGVlcCBtZXJnZSB0d28gb3IgbW9yZSBvYmplY3RzIGludG8gdGhlIGZpcnN0LlxuICogKGMpIDIwMjEgQ2hyaXMgRmVyZGluYW5kaSwgTUlUIExpY2Vuc2UsIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbVxuICogQHBhcmFtIG9iamVjdHMgIFRoZSBvYmplY3RzIHRvIG1lcmdlIHRvZ2V0aGVyXG4gKiBAcmV0dXJucyBNZXJnZWQgdmFsdWVzIG9mIGRlZmF1bHRzIGFuZCBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGRlZXBBc3NpZ24oLi4ub2JqZWN0cykge1xuICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBhcmUgb2JqZWN0cyB0byBtZXJnZVxuICAgIGNvbnN0IGxlbiA9IG9iamVjdHMubGVuZ3RoO1xuICAgIGlmIChsZW4gPCAxKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKGxlbiA8IDIpXG4gICAgICAgIHJldHVybiBvYmplY3RzWzBdO1xuICAgIC8vIE1lcmdlIGFsbCBvYmplY3RzIGludG8gZmlyc3RcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICAgIGlmIChvYmplY3RzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGFuIG9iamVjdCwgcmVjdXJzaXZlbHkgbWVyZ2VcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHB1c2ggdG8ga2V5XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3RzW2ldW2tleV0pID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RzWzBdW2tleV0gPSBkZWVwQXNzaWduKG9iamVjdHNbMF1ba2V5XSB8fCB7fSwgb2JqZWN0c1tpXVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdHNbMF1ba2V5XSA9IG9iamVjdHNbaV1ba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbn1cbl9nbG9iYWwuZGVlcEFzc2lnbiA9IGRlZXBBc3NpZ247XG4vKipcbiAqIFJlbW92ZSBpdGVtIGZyb20gYXJyYXlcbiAqIEBwYXJhbSBhcnJcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlSXRlbShhcnIsIHZhbHVlKSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG5fZ2xvYmFsLnJlbW92ZUl0ZW0gPSByZW1vdmVJdGVtO1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4vKipcbiAqIEdldCBhbGwgbWV0aG9kIGZyb20gY2xhc3NcbiAqIEBwYXJhbSB0b0NoZWNrXG4gKiBAcmV0dXJuc1xuICovXG5jb25zdCBnZXRBbGxNZXRob2RzID0gZnVuY3Rpb24gKHRvQ2hlY2spIHtcbiAgICBpZiAoIXRvQ2hlY2spXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IFtdO1xuICAgICAgICBsZXQgb2JqID0gdG9DaGVjaztcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgcHJvcHMucHVzaCguLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopKTtcbiAgICAgICAgfSB3aGlsZSAoKG9iaiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSk7XG4gICAgICAgIHJldHVybiBwcm9wc1xuICAgICAgICAgICAgLnNvcnQoKVxuICAgICAgICAgICAgLmZpbHRlcigoZSwgaSwgYXJyX2ZuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjID0gdG9DaGVja1tlXTtcbiAgICAgICAgICAgIGNvbnN0IGZuYW1lID0gYXJyX2ZuYW1lW2kgKyAxXTtcbiAgICAgICAgICAgIGlmIChlICE9IGZuYW1lICYmIHR5cGVvZiBjID09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKChmbmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFbXG4gICAgICAgICAgICAgICAgJ19fZGVmaW5lR2V0dGVyX18nLFxuICAgICAgICAgICAgICAgICdfX2RlZmluZVNldHRlcl9fJyxcbiAgICAgICAgICAgICAgICAnX19sb29rdXBHZXR0ZXJfXycsXG4gICAgICAgICAgICAgICAgJ19fbG9va3VwU2V0dGVyX18nLFxuICAgICAgICAgICAgICAgICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgJ2hhc093blByb3BlcnR5JyxcbiAgICAgICAgICAgICAgICAnaXNQcm90b3R5cGVPZicsXG4gICAgICAgICAgICAgICAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgICAgICAgICAgICAgICAndG9Mb2NhbGVTdHJpbmcnLFxuICAgICAgICAgICAgICAgICd0b1N0cmluZycsXG4gICAgICAgICAgICAgICAgJ3ZhbHVlT2YnLFxuICAgICAgICAgICAgXS5pbmNsdWRlcyhmbmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModG9DaGVjaykuZmlsdGVyKChwcm9wKSA9PiB0eXBlb2YgdG9DaGVja1twcm9wXSA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgfVxufTtcbiIsIkRhdGUucHJvdG90eXBlLmlzSG91ckFnbyA9IGZ1bmN0aW9uIChob3VyKSB7XG4gICAgaG91ciA9IGhvdXIgKiA2MCAqIDEwMDA7IC8qIG1zICovXG4gICAgY29uc3QgaG91cmFnbyA9IERhdGUubm93KCkgLSBob3VyO1xuICAgIHJldHVybiBob3VyID4gaG91cmFnbztcbn07XG5pZiAoIURhdGUubm93KSB7XG4gICAgRGF0ZS5ub3cgPSBmdW5jdGlvbiBub3coKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9O1xufVxuRGF0ZS5wcm90b3R5cGUuYWRkSG91cnMgPSBmdW5jdGlvbiAoaCkge1xuICAgIHRoaXMuc2V0VGltZSh0aGlzLmdldFRpbWUoKSArIGggKiA2MCAqIDYwICogMTAwMCk7XG4gICAgLy90aGlzLnNldEhvdXJzKHRoaXMuZ2V0SG91cnMoKStoKTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5EYXRlLnByb3RvdHlwZS5hZGRIb3VyczIgPSBmdW5jdGlvbiAoaHJzKSB7XG4gICAgdGhpcy5zZXRIb3Vycyh0aGlzLmdldEhvdXJzKCkgKyBocnMpO1xuICAgIHJldHVybiB0aGlzO1xufTtcbmNsYXNzIGRhdGVfZXh0IHtcbiAgICBzdGF0aWMgZGF0ZXRpbWVfbG9jYWwoZGF0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9KU09OKCkuc2xpY2UoMCwgMTkpO1xuICAgIH1cbn1cbmlmICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdyBpbnN0YW5jZW9mIFdpbmRvdykge1xuICAgIHdpbmRvdy5kYXRldGltZV9sb2NhbCA9IGRhdGVfZXh0LmRhdGV0aW1lX2xvY2FsO1xufVxuZWxzZSBpZiAodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0Jykge1xuICAgIGdsb2JhbC5kYXRldGltZV9sb2NhbCA9IGRhdGVfZXh0LmRhdGV0aW1lX2xvY2FsO1xufVxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZGF0ZV9leHQ7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGRhdGV0aW1lX2xvY2FsOiBkYXRlX2V4dC5kYXRldGltZV9sb2NhbCxcbiAgICB9O1xufVxuIiwiaWYgKHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJykge1xuICAgIERvY3VtZW50LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAoZXZlbnRUeXBlLCBsaXN0ZW5lciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmICh0aGlzLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iLCJpZiAoISgndG9KU09OJyBpbiBFcnJvci5wcm90b3R5cGUpKSB7XG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4MzkxNDAwLzY0MDQ0MzlcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXJyb3IucHJvdG90eXBlLCAndG9KU09OJywge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYWx0ID0ge307XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBhbHRba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIGFsdDtcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9nbG9iYWxzLmQudHNcIiAvPlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuRnVuY3Rpb24ucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICBpZiAoIXRoaXMud2FzQ2FsbGVkKSB7XG4gICAgICAgIHRoaXMuYXBwbHkocGFyYW0pO1xuICAgICAgICB0aGlzLndhc0NhbGxlZCA9IHRydWU7XG4gICAgfVxufTtcbi8qKlxuICogUnVuIHRoZSBmdW5jdGlvbiBvbmx5IG9uY2VcbiAqIEBwYXJhbSBmblxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQxMDAwNTM1LzY0MDQ0Mzl9XG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBydW5PbmNlKGZuKSB7XG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCFkb25lKSB7XG4gICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5pZiAodHlwZW9mIG1vZHVsZS5leHBvcnRzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIHJ1bk9uY2UsXG4gICAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLypkZWNsYXJlIGxldCBOYXZpZ2F0b3I6IHtcbiAgcHJvdG90eXBlOiBOYXZpZ2F0b3I7XG4gIG5ldyAoKTogTmF2aWdhdG9yO1xufTsqL1xuIiwiTnVtYmVyLnByb3RvdHlwZS5nZXRNUyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMgKiA2MCAqIDEwMDA7XG59O1xuTnVtYmVyLnByb3RvdHlwZS5hZGRIb3VyID0gZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IEhvdXIgPSB0aGlzICogNjAgKiAxMDAwOyAvKiBtcyAqL1xuICAgIGlmICghc291cmNlKVxuICAgICAgICBzb3VyY2UgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBuZXcgRGF0ZShzb3VyY2UuZ2V0VGltZSgpICsgSG91cikuZ2V0VGltZSgpO1xufTtcbk51bWJlci5wcm90b3R5cGUuQWRkWmVybyA9IGZ1bmN0aW9uIChiLCBjKSB7XG4gICAgY29uc3QgbCA9IFN0cmluZyhiIHx8IDEwKS5sZW5ndGggLSBTdHJpbmcodGhpcykubGVuZ3RoICsgMTtcbiAgICByZXR1cm4gbCA+IDAgPyBuZXcgQXJyYXkobCkuam9pbihjIHx8IFwiMFwiKSArIHRoaXMgOiB0aGlzO1xufTtcbi8qKlxuICogT2RkIG9yIEV2ZW4gKEdhbmppbCBHZW5hcCk7XG4gKiBAcGFyYW0gblxuICogQHBhcmFtIHR5cGUgb2RkIG9yIGV2ZW5cbiAqL1xuZnVuY3Rpb24gb2Rkb3JldmVuKG4sIHR5cGUpIHtcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgdHlwZSA9IFwib2RkXCI7XG4gICAgfVxuICAgIGNvbnN0IHRpbWUgPSAhbiA/IG5ldyBEYXRlKCkuZ2V0RGF5KCkgOiBOdW1iZXIobik7XG4gICAgaWYgKCEvXi0/XFxkK2pRdWVyeS8udGVzdCh0aW1lLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgIGFsZXJ0KFwiYXJndW1lbnRzIGlzIG5vdCBudW1iZXIsIHBsZWFzZSByZW1vdmUgcXVvdGVcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBoYXNpbCA9IHRpbWUgJSAyO1xuICAgIGNvbnN0IHJUeXBlID0gL14ob2RkfGdhbmppbCkkLy50ZXN0KHR5cGUpID8gXCIxXCIgOiBcIjBcIjtcbiAgICAvL3JldHVybiBoYXNpbCA9PSAodHlwZSA9PSAoJ29kZCcgfHwgJ2dhbmppbCcpID8gMSA6IDApO1xuICAgIHJldHVybiBoYXNpbC50b1N0cmluZygpID09IHJUeXBlLnRvU3RyaW5nKCk7XG59XG4vKipcbiAqIHN0cnBhZCAvIHN0YXJ0d2l0aCB6ZXJvIFswXVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbFxuICovXG5mdW5jdGlvbiBzdHJwYWQodmFsKSB7XG4gICAgaWYgKHZhbCA+PSAxMCkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiMFwiICsgdmFsO1xuICAgIH1cbn1cbi8qKlxuICogaXMgdmFyaWFibGUgbnVtYmVyP1xuICogQHBhcmFtIG5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGlzSW50KG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4pID09PSBuICYmIG4gJSAxID09PSAwO1xufVxuLyoqXG4gKiBpcyB2YXJpYWJsZSBmbG9hdD9cbiAqIEBwYXJhbSBuXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBpc0Zsb2F0KG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4pID09PSBuICYmIG4gJSAxICE9PSAwO1xufVxuaWYgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5pc0ludCA9IGlzSW50O1xuICAgIGdsb2JhbC5pc0Zsb2F0ID0gaXNGbG9hdDtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvdHJpcGxlLXNsYXNoLXJlZmVyZW5jZSAqL1xuT2JqZWN0LnNpemUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgbGV0IHNpemUgPSAwLCBrZXk7XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgIHNpemUrKztcbiAgICB9XG4gICAgcmV0dXJuIHNpemU7XG59O1xuT2JqZWN0LmNoaWxkID0gZnVuY3Rpb24gKHN0ciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5oYXNPd25Qcm9wZXJ0eShzdHIpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHNlbGZbc3RyXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59O1xuT2JqZWN0LmFsdCA9IGZ1bmN0aW9uIChzdHIsIGFsdGVybmF0aXZlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHNlbGYuaGFzT3duUHJvcGVydHkoc3RyKSkge1xuICAgICAgICByZXR1cm4gc2VsZltzdHJdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFsdGVybmF0aXZlO1xuICAgIH1cbn07XG5PYmplY3QuaGFzID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiB0aGlzLmhhc093blByb3BlcnR5KHN0cik7XG59O1xuT2JqZWN0LmVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICAgIC8vY2FsbGJhY2suY2FsbChzY29wZSwga2V5LCB0aGlzW2tleV0pO1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNba2V5XSk7XG4gICAgfVxufTtcbk9iamVjdC5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gMDtcbn07XG5PYmplY3QucmVwbGFjZUtleUZyb20gPSBmdW5jdGlvbiAoYW5vdGhlck9iaikge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzKS5yZWR1Y2UoKG9wLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3S2V5ID0gYW5vdGhlck9ialtrZXldO1xuICAgICAgICBvcFtuZXdLZXkgfHwga2V5XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gb3A7XG4gICAgfSwge30pO1xuICAgIC8qaWYgKHR5cGVvZiBhbm90aGVyT2JqID09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBhbm90aGVyT2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYW5vdGhlck9iaiwga2V5KSkge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhbm90aGVyT2JqW2tleV07XG4gICAgICAgICAgZGVmW2tleV0gPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSovXG59O1xuY2xhc3Mgb2JqZWN0X2V4dCB7XG4gICAgLyoqXG4gICAgICogSm9pbiBvYmplY3QgdG8gc2VwYXJhdGVkIHN0cmluZ1xuICAgICAqICogW10uam9pbigpIGVxdWl2YWxlbnRcbiAgICAgKiBAcGFyYW0gb2JqIE9iamVjdFxuICAgICAqIEBwYXJhbSBzZXBhcmF0b3IgZGVmYXVsdCBjb21tYSgsKVxuICAgICAqIEByZXR1cm5zIEpvaW5lZCBzdHJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgb2JqZWN0X2pvaW4ob2JqLCBzZXBhcmF0b3IgPSAnLCcpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iailcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpba107XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbihzZXBhcmF0b3IpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNPYmplY3QoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEBwYXJhbSAuLi5zb3VyY2VzXG4gICAgICovXG4gICAgc3RhdGljIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgICAgICAgaWYgKCFzb3VyY2VzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgICAgICAgaWYgKG9iamVjdF9leHQuaXNPYmplY3QodGFyZ2V0KSAmJiBvYmplY3RfZXh0LmlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3RfZXh0LmlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKVxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHt9IH0pO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RfZXh0Lm1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqZWN0X2V4dC5tZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgICB9XG59XG5PYmplY3QucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKC4uLm90aGVycykge1xuICAgIHJldHVybiBvYmplY3RfZXh0Lm1lcmdlRGVlcCh0aGlzLCAuLi5vdGhlcnMpO1xufTtcbmlmICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdyBpbnN0YW5jZW9mIFdpbmRvdykge1xuICAgIHdpbmRvdy5vYmplY3Rfam9pbiA9IG9iamVjdF9leHQub2JqZWN0X2pvaW47XG4gICAgd2luZG93Lm9iamVjdF9tZXJnZSA9IG9iamVjdF9leHQubWVyZ2VEZWVwO1xuICAgIHdpbmRvdy5pc09iamVjdCA9IG9iamVjdF9leHQuaXNPYmplY3Q7XG59XG5lbHNlIGlmICh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnKSB7XG4gICAgZ2xvYmFsLm9iamVjdF9qb2luID0gb2JqZWN0X2V4dC5vYmplY3Rfam9pbjtcbiAgICBnbG9iYWwub2JqZWN0X21lcmdlID0gb2JqZWN0X2V4dC5tZXJnZURlZXA7XG4gICAgZ2xvYmFsLmlzT2JqZWN0ID0gb2JqZWN0X2V4dC5pc09iamVjdDtcbn1cbmlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IG9iamVjdF9leHQ7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIG9iamVjdF9qb2luOiBvYmplY3RfZXh0Lm9iamVjdF9qb2luLFxuICAgICAgICBvYmplY3RfbWVyZ2U6IG9iamVjdF9leHQubWVyZ2VEZWVwLFxuICAgICAgICBpc09iamVjdDogb2JqZWN0X2V4dC5pc09iamVjdCxcbiAgICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC90cmlwbGUtc2xhc2gtcmVmZXJlbmNlICovXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiZ2xvYmFscy5kLnRzXCIgLz5cblN0cmluZy5wcm90b3R5cGUucHJpbnRmID0gZnVuY3Rpb24gKG9iaikge1xuICAgIC8qY29uc3QgaXNOb2RlID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgXCJ0cnkge3JldHVybiB0aGlzPT09Z2xvYmFsO31jYXRjaChlKXtyZXR1cm4gZmFsc2U7fVwiXG4gICAgKTtcbiAgXG4gICAgaWYgKGlzTm9kZSgpKSB7XG4gICAgICBjb25zdCB1dGlsID0gcmVxdWlyZShcInV0aWxcIik7XG4gICAgICByZXR1cm4gdXRpbC5mb3JtYXQodGhpcywgb2JqKTtcbiAgICB9Ki9cbiAgICBsZXQgdXNlQXJndW1lbnRzID0gZmFsc2U7XG4gICAgY29uc3QgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cztcbiAgICBsZXQgaSA9IC0xO1xuICAgIGlmICh0eXBlb2YgX2FyZ3VtZW50c1swXSA9PSAnc3RyaW5nJykge1xuICAgICAgICB1c2VBcmd1bWVudHMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkgfHwgdXNlQXJndW1lbnRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBpZiAodXNlQXJndW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfYXJndW1lbnRzW2ldID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmd1bWVudHMgZWxlbWVudCBpcyBhbiBpbnZhbGlkIHR5cGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqW2ldO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL3soW157fV0qKX0vZywgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBvYmpbYl07XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHIgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiByID09PSAnbnVtYmVyJyA/IHIgOiBhO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuU3RyaW5nLnByb3RvdHlwZS5wYXJzZV91cmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHBhcnNlcjtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBwYXJzZXIgPSBuZXcgVVJMKHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIH1cbiAgICBjb25zdCBzZWFyY2hPYmplY3QgPSBbXTtcbiAgICBsZXQgc3BsaXQgPSBbXTtcbiAgICBsZXQgcXVlcmllcyA9IFtdO1xuICAgIC8vIExldCB0aGUgYnJvd3NlciBkbyB0aGUgd29ya1xuICAgIHBhcnNlci5ocmVmID0gdGhpcy50b1N0cmluZygpO1xuICAgIC8vIENvbnZlcnQgcXVlcnkgc3RyaW5nIHRvIG9iamVjdFxuICAgIHF1ZXJpZXMgPSBwYXJzZXIuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykuc3BsaXQoJyYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3BsaXQgPSBxdWVyaWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIGlmIChzcGxpdC5sZW5ndGgpXG4gICAgICAgICAgICBzZWFyY2hPYmplY3Rbc3BsaXRbMF1dID0gc3BsaXRbMV07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3RvY29sOiBwYXJzZXIucHJvdG9jb2wsXG4gICAgICAgIGhvc3Q6IHBhcnNlci5ob3N0LFxuICAgICAgICBob3N0bmFtZTogcGFyc2VyLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiBwYXJzZXIucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6IHBhcnNlci5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoOiBwYXJzZXIuc2VhcmNoLFxuICAgICAgICBzZWFyY2hPYmplY3Q6IHNlYXJjaE9iamVjdCxcbiAgICAgICAgaGFzaDogcGFyc2VyLmhhc2gsXG4gICAgICAgIHByb3RvaG9zdDogcGFyc2VyLnByb3RvY29sICsgJy8vJyArIHBhcnNlci5ob3N0LFxuICAgIH07XG59O1xuLyoqXG4gKiBMb2FkIGNzc1xuICovXG5TdHJpbmcucHJvdG90eXBlLkNTUyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGUucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGUuaHJlZiA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICBjb25zdCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgICAgICA/IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLCBuKTtcbiAgICAgICAgfSwgITEpXG4gICAgICAgIDogd2luZG93LmF0dGFjaEV2ZW50XG4gICAgICAgICAgICA/IHdpbmRvdy5hdHRhY2hFdmVudCgnb25sb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSwgbik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiAod2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsIG4pO1xuICAgICAgICAgICAgfSk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrfFxccyskL2dtLCAnJyk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5oZXhFID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBoZXgsIGk7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhleCA9IHRoaXMuY2hhckNvZGVBdChpKS50b1N0cmluZygxNik7XG4gICAgICAgIHJlc3VsdCArPSAoJzAwMCcgKyBoZXgpLnNsaWNlKC00KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5TdHJpbmcucHJvdG90eXBlLmhleEQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGo7XG4gICAgY29uc3QgaGV4ZXMgPSB0aGlzLm1hdGNoKC8uezEsNH0vZykgfHwgW107XG4gICAgbGV0IGJhY2sgPSAnJztcbiAgICBmb3IgKGogPSAwOyBqIDwgaGV4ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgYmFjayArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleGVzW2pdLCAxNikpO1xuICAgIH1cbiAgICByZXR1cm4gYmFjaztcbn07XG5TdHJpbmcucHJvdG90eXBlLmNhcGl0YWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xufTtcblN0cmluZy5wcm90b3R5cGUucm90MTMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvW2EtekEtWl0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPD0gJ1onID8gOTAgOiAxMjIpID49IChjID0gYy5jaGFyQ29kZUF0KDApICsgMTMpID8gYyA6IGMgLSAyNik7XG4gICAgfSk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS50cnVuY2F0ZSA9IGZ1bmN0aW9uIChuLCB1c2VXb3JkQm91bmRhcnkpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPD0gbikge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29uc3Qgc3ViU3RyaW5nID0gdGhpcy5zdWJzdHIoMCwgbiAtIDEpOyAvLyB0aGUgb3JpZ2luYWwgY2hlY2tcbiAgICByZXR1cm4gKHVzZVdvcmRCb3VuZGFyeSA/IHN1YlN0cmluZy5zdWJzdHIoMCwgc3ViU3RyaW5nLmxhc3RJbmRleE9mKCcgJykpIDogc3ViU3RyaW5nKSArICcmaGVsbGlwOyc7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzICE9IG51bGwgfHwgdHlwZW9mIHRoaXMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSAwIHx8ICF0aGlzLnRyaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblN0cmluZy5wcm90b3R5cGUucmVwbGFjZUFyciA9IGZ1bmN0aW9uIChhcnJheSwgcmVwbGFjZW1lbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICBsZXQgb3JpID0gdGhpcztcbiAgICBhcnJheS5tYXAoKHN0cikgPT4ge1xuICAgICAgICBvcmkgPSBvcmkucmVwbGFjZShzdHIsIHJlcGxhY2VtZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3JpO1xufTtcblN0cmluZy5wcm90b3R5cGUudG9IdG1sRW50aXRpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvLi9nbSwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgLy8gcmV0dXJuIFwiJiNcIiArIHMuY2hhckNvZGVBdCgwKSArIFwiO1wiO1xuICAgICAgICByZXR1cm4gcy5tYXRjaCgvW2EtejAtOVxcc10rL2kpID8gcyA6ICcmIycgKyBzLmNoYXJDb2RlQXQoMCkgKyAnOyc7XG4gICAgfSk7XG59O1xuU3RyaW5nLmZyb21IdG1sRW50aXRpZXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIChzdHIgKyAnJykucmVwbGFjZSgvJiNcXGQrOy9nbSwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgY29uc3QgbSA9IHMubWF0Y2goL1xcZCsvZ20pWzBdO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShtKTtcbiAgICB9KTtcbn07XG5TdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzQXJyYXkgPSBmdW5jdGlvbiAoc3Vic3RyaW5ncykge1xuICAgIHJldHVybiBzdWJzdHJpbmdzLnNvbWUoKHYpID0+IHRoaXMuaW5jbHVkZXModikpO1xufTtcbmlmICh0eXBlb2YgJycucmVwbGFjZUFsbCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQWxsID0gZnVuY3Rpb24gKHNlYXJjaCwgcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZmluZCA9IHR5cGVvZiBzZWFyY2ggPT0gJ3N0cmluZycgPyBuZXcgUmVnRXhwKHNlYXJjaCwgJ2cnKSA6IHNlYXJjaDtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZShmaW5kLCByZXBsYWNlbWVudCk7XG4gICAgfTtcbn1cbiJdfQ==
