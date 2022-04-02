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
class array_ext {
    static array_filter(array) {
        return array.filter(function (el) {
            return el != null;
        });
    }
    /**
     * pick random from array
     * @param {Array<any>} arrays
     * @param {boolean} unique Unique the arrays
     */
    static array_rand(arrays, unique) {
        if (unique) {
            arrays = array_ext.array_unique(arrays);
        }
        const index = Math.floor(Math.random() * arrays.length);
        return {
            index: index,
            value: arrays[index],
        };
    }
    /**
     * Array unique
     * @param {Array<any>} arrays
     */
    static array_unique(arrays) {
        return arrays.filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });
    }
    /**
     * Unset array
     * @param {Array<any>} arrayName
     * @param {String|number} key
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static array_unset(arrayName, key) {
        let x;
        const tmpArray = [];
        for (x in arrayName) {
            if (x != key) {
                tmpArray[x] = arrayName[x];
            }
        }
        return tmpArray;
    }
    /**
     * PHP shuffle array equivalent
     * @param array
     * @example
     * var arr = [2, 11, 37, 42];
     * shuffle(arr);
     * console.log(arr); //return random
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static shuffle(array) {
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
    static arrayCompare(a1, a2) {
        if (a1.length != a2.length)
            return false;
        const length = a2.length;
        for (let i = 0; i < length; i++) {
            if (a1[i] !== a2[i])
                return false;
        }
        return true;
    }
    /**
     * in_array PHP equivalent
     * @param needle string etc
     * @param haystack
     */
    static inArray(needle, haystack) {
        const length = haystack.length;
        for (let i = 0; i < length; i++) {
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
    }
    /**
     * in_array PHP equivalent
     * @param needle string etc
     * @param haystack
     */
    static in_array(needle, haystack) {
        return array_ext.inArray(needle, haystack);
    }
    /**
     * get all keys
     * @param haystack string etc
     */
    static array_keys(haystack) {
        return Object.keys(haystack);
    }
    /**
     * Shuffles array in place.
     * @param a items An array containing the items.
     */
    static array_shuffle(a) {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    /**
     * Deep merge two or more objects into the first.
     * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
     * @param objects  The objects to merge together
     * @returns Merged values of defaults and options
     */
    static deepAssign(...objects) {
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
                        objects[0][key] = array_ext.deepAssign(objects[0][key] || {}, objects[i][key]);
                    }
                    else {
                        objects[0][key] = objects[i][key];
                    }
                }
            }
        }
        return arguments[0];
    }
    /**
     * Remove item from array
     * @param arr
     * @param value
     * @returns
     */
    static removeItem(arr, value) {
        const index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
}
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
    exports = array_ext;
}

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFueS5qcyIsIkFycmF5LmpzIiwiQ2xhc3MuanMiLCJEYXRlLmpzIiwiRG9jdW1lbnQuanMiLCJFcnJvci5qcyIsIkZ1bmN0aW9uLmpzIiwiTmF2aWdhdG9yLmpzIiwiTnVtYmVyLmpzIiwiT2JqZWN0LmpzIiwiU3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM1lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmICh0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IG51bGw7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGFueTogbnVsbCxcbiAgICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC90cmlwbGUtc2xhc2gtcmVmZXJlbmNlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vZ2xvYmFscy5kLnRzXCIgLz5cbkFycmF5LnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBpID0gdGhpcy5sZW5ndGgsIGosIHRlbXA7XG4gICAgaWYgKGkgPT0gMClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgd2hpbGUgKC0taSkge1xuICAgICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgIHRlbXAgPSB0aGlzW2ldO1xuICAgICAgICB0aGlzW2ldID0gdGhpc1tqXTtcbiAgICAgICAgdGhpc1tqXSA9IHRlbXA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcbkFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAoIW4pIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMubGVuZ3RoIC0gbjtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMClcbiAgICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpY2Uoc3RhcnQsIHRoaXMubGVuZ3RoKTtcbiAgICB9XG59O1xuQXJyYXkucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKChzdHIpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHIgPT0gJ3N0cmluZycpXG4gICAgICAgICAgICByZXR1cm4gc3RyLnRyaW0oKTtcbiAgICB9KTtcbn07XG5BcnJheS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDA7XG59O1xuQXJyYXkucHJvdG90eXBlLnJhbmdlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zbGljZShzdGFydCwgZW5kICsgMSk7XG59O1xuQXJyYXkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdGhpcy5wdXNoKGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xufTtcbkFycmF5LnByb3RvdHlwZS5hZGRBbGwgPSBmdW5jdGlvbiAob3RoZXJzKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgb3RoZXJzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc2VsZi5wdXNoKGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xufTtcbkFycmF5LnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5sZW5ndGgpXTtcbn07XG5BcnJheS5wcm90b3R5cGUudW5pcXVlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGEgPSB0aGlzLmNvbmNhdCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBhLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBpZiAoYVtpXSA9PT0gYVtqXSlcbiAgICAgICAgICAgICAgICBhLnNwbGljZShqLS0sIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xufTtcbkFycmF5LnByb3RvdHlwZS51bmlxdWVTdHJpbmdBcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgTWFwKHRoaXMubWFwKChzKSA9PiBbcy50b0xvd2VyQ2FzZSgpLCBzXSkpO1xuICAgIHJldHVybiBbLi4uZmlsdGVyLnZhbHVlcygpXTtcbn07XG5BcnJheS5wcm90b3R5cGUudW5pcXVlT2JqZWN0S2V5ID0gZnVuY3Rpb24gKGtleSwgcmVtb3ZlTnVsbCA9IHRydWUpIHtcbiAgICBpZiAoIWtleSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgcmVzQXJyID0gW107XG4gICAgdGhpcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgaSA9IHJlc0Fyci5maW5kSW5kZXgoKHgpID0+IHhba2V5XSA9PSBpdGVtW2tleV0pO1xuICAgICAgICBpZiAoaSA8PSAtMSkge1xuICAgICAgICAgICAgaWYgKHJlbW92ZU51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldKVxuICAgICAgICAgICAgICAgICAgICByZXNBcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc0Fyci5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICAgIHJldHVybiByZXNBcnI7XG59O1xuQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGxldCBpID0gdGhpcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpZiAodGhpc1tpXSA9PT0gb2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuQXJyYXkucHJvdG90eXBlLmhhc0luZGV4ID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXNbbl0gIT0gJ3VuZGVmaW5lZCc7XG59O1xuQXJyYXkucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAoIW4pIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIHJldHVybiB0aGlzLnNsaWNlKDAsIG4pO1xuICAgIH1cbn07XG5BcnJheS5wcm90b3R5cGUuY29tcGFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3ZhciBjaGFuZ2VzID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIElmIGVsZW1lbnQgaXMgbm9uLWV4aXN0ZW50LCB1bmRlZmluZWQgb3IgbnVsbCwgcmVtb3ZlIGl0LlxuICAgICAgICBpZiAoIXRoaXNbaV0pIHtcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaSA9IGkgLSAxO1xuICAgICAgICAgICAgLy9jaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2lmICghY2hhbmdlcykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdGhpcztcbn07XG5BcnJheS5wcm90b3R5cGUuZGVsZXRlQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPCAwKVxuICAgICAgICBpbmRleCA9IHRoaXMubGVuZ3RoICsgaW5kZXg7XG4gICAgLy8gSWYgZWxlbWVudCBpcyBub24tZXhpc3RlbnQsIHJldHVybiB1bmRlZmluZWQ6XG4gICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KGluZGV4KSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBlbGVtID0gdGhpc1tpbmRleF07XG4gICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiBlbGVtO1xufTtcbkFycmF5LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluZGV4T2YodmFsdWUpICE9IC0xKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdmFsdWUgZXhpc3RzXG4gICAgICAgIHRoaXMuc3BsaWNlKHRoaXMuaW5kZXhPZih2YWx1ZSksIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5BcnJheS5wcm90b3R5cGUuZXhpc3RzID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXNbbl0gIT09ICd1bmRlZmluZWQnO1xufTtcbmlmICghQXJyYXkucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdldmVyeScpKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmV2ZXJ5ID0gZnVuY3Rpb24gKGZ1biAvKiwgdGhpc3AgKi8pIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KHRoaXMpO1xuICAgICAgICBjb25zdCBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGNvbnN0IHRoaXNwID0gYXJndW1lbnRzWzFdO1xuICAgICAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmdW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIGluIHQgJiYgIWZ1bi5jYWxsKHRoaXNwLCB0W2ldLCBpLCB0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuQXJyYXkucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICBjb25zdCBpdGVtUmVtb3ZlZCA9IHRoaXMuc3BsaWNlKGZyb20sIDEpOyAvLyBzcGxpY2UoKSByZXR1cm5zIHRoZSByZW1vdmUgZWxlbWVudCBhcyBhbiBhcnJheVxuICAgIHRoaXMuc3BsaWNlKHRvLCAwLCBpdGVtUmVtb3ZlZFswXSk7IC8vIEluc2VydCBpdGVtUmVtb3ZlZCBpbnRvIHRoZSB0YXJnZXQgaW5kZXhcbiAgICByZXR1cm4gdGhpcztcbn07XG5BcnJheS5wcm90b3R5cGUuaGFwdXNJdGVtRGFyaUFycmF5TGFpbiA9IGZ1bmN0aW9uICguLi5hcnJheUxhaW4pIHtcbiAgICBsZXQgdGhpc0FyciA9IHRoaXM7XG4gICAgYXJyYXlMYWluLmZvckVhY2goKG90aGVyQXJyKSA9PiB7XG4gICAgICAgIHRoaXNBcnIgPSB0aGlzQXJyLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiAhb3RoZXJBcnIuaW5jbHVkZXMoZWwpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpc0Fycjtcbn07XG5BcnJheS5wcm90b3R5cGUucmVtb3ZlRW1wdGllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgY29uc3Qgbm90bnVsbCA9IFxuICAgICAgICAvLyBtYWtlIHN1cmUgZWxlbWVudCBpcyBub3QgbnVsbFxuICAgICAgICBlbCAhPSBudWxsICYmXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgZWxlbWVudCBpcyBub3QgdW5kZWZpbmVkXG4gICAgICAgICAgICB0eXBlb2YgZWwgIT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIC8vIGlmIGVsZW1lbnQgaXMgc3RyaW5nLCBtYWtlIHN1cmUgc3RyaW5nIGxlbmd0aCBub3QgemVyb1xuICAgICAgICBpZiAodHlwZW9mIGVsID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm90bnVsbCAmJiBlbC50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm90bnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyO1xufTtcbmNsYXNzIGFycmF5X2V4dCB7XG4gICAgc3RhdGljIGFycmF5X2ZpbHRlcihhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBwaWNrIHJhbmRvbSBmcm9tIGFycmF5XG4gICAgICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnJheXNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVuaXF1ZSBVbmlxdWUgdGhlIGFycmF5c1xuICAgICAqL1xuICAgIHN0YXRpYyBhcnJheV9yYW5kKGFycmF5cywgdW5pcXVlKSB7XG4gICAgICAgIGlmICh1bmlxdWUpIHtcbiAgICAgICAgICAgIGFycmF5cyA9IGFycmF5X2V4dC5hcnJheV91bmlxdWUoYXJyYXlzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5cy5sZW5ndGgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgdmFsdWU6IGFycmF5c1tpbmRleF0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFycmF5IHVuaXF1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyYXlzXG4gICAgICovXG4gICAgc3RhdGljIGFycmF5X3VuaXF1ZShhcnJheXMpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5cy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIHBvcywgc2VsZikge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PSBwb3M7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnNldCBhcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyYXlOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVtYmVyfSBrZXlcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgc3RhdGljIGFycmF5X3Vuc2V0KGFycmF5TmFtZSwga2V5KSB7XG4gICAgICAgIGxldCB4O1xuICAgICAgICBjb25zdCB0bXBBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHggaW4gYXJyYXlOYW1lKSB7XG4gICAgICAgICAgICBpZiAoeCAhPSBrZXkpIHtcbiAgICAgICAgICAgICAgICB0bXBBcnJheVt4XSA9IGFycmF5TmFtZVt4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wQXJyYXk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBIUCBzaHVmZmxlIGFycmF5IGVxdWl2YWxlbnRcbiAgICAgKiBAcGFyYW0gYXJyYXlcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHZhciBhcnIgPSBbMiwgMTEsIDM3LCA0Ml07XG4gICAgICogc2h1ZmZsZShhcnIpO1xuICAgICAqIGNvbnNvbGUubG9nKGFycik7IC8vcmV0dXJuIHJhbmRvbVxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICBzdGF0aWMgc2h1ZmZsZShhcnJheSkge1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBzdGF0aWMgYXJyYXlDb21wYXJlKGExLCBhMikge1xuICAgICAgICBpZiAoYTEubGVuZ3RoICE9IGEyLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYTIubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYTFbaV0gIT09IGEyW2ldKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogaW5fYXJyYXkgUEhQIGVxdWl2YWxlbnRcbiAgICAgKiBAcGFyYW0gbmVlZGxlIHN0cmluZyBldGNcbiAgICAgKiBAcGFyYW0gaGF5c3RhY2tcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5BcnJheShuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGhheXN0YWNrLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYXlzdGFja1tpXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheV9leHQuYXJyYXlDb21wYXJlKGhheXN0YWNrW2ldLCBuZWVkbGUpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChoYXlzdGFja1tpXSA9PSBuZWVkbGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogaW5fYXJyYXkgUEhQIGVxdWl2YWxlbnRcbiAgICAgKiBAcGFyYW0gbmVlZGxlIHN0cmluZyBldGNcbiAgICAgKiBAcGFyYW0gaGF5c3RhY2tcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5fYXJyYXkobmVlZGxlLCBoYXlzdGFjaykge1xuICAgICAgICByZXR1cm4gYXJyYXlfZXh0LmluQXJyYXkobmVlZGxlLCBoYXlzdGFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCBhbGwga2V5c1xuICAgICAqIEBwYXJhbSBoYXlzdGFjayBzdHJpbmcgZXRjXG4gICAgICovXG4gICAgc3RhdGljIGFycmF5X2tleXMoaGF5c3RhY2spIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGhheXN0YWNrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2h1ZmZsZXMgYXJyYXkgaW4gcGxhY2UuXG4gICAgICogQHBhcmFtIGEgaXRlbXMgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgaXRlbXMuXG4gICAgICovXG4gICAgc3RhdGljIGFycmF5X3NodWZmbGUoYSkge1xuICAgICAgICBsZXQgaiwgeCwgaTtcbiAgICAgICAgZm9yIChpID0gYS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICB4ID0gYVtpXTtcbiAgICAgICAgICAgIGFbaV0gPSBhW2pdO1xuICAgICAgICAgICAgYVtqXSA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZXAgbWVyZ2UgdHdvIG9yIG1vcmUgb2JqZWN0cyBpbnRvIHRoZSBmaXJzdC5cbiAgICAgKiAoYykgMjAyMSBDaHJpcyBGZXJkaW5hbmRpLCBNSVQgTGljZW5zZSwgaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tXG4gICAgICogQHBhcmFtIG9iamVjdHMgIFRoZSBvYmplY3RzIHRvIG1lcmdlIHRvZ2V0aGVyXG4gICAgICogQHJldHVybnMgTWVyZ2VkIHZhbHVlcyBvZiBkZWZhdWx0cyBhbmQgb3B0aW9uc1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWVwQXNzaWduKC4uLm9iamVjdHMpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZXJlIGFyZSBvYmplY3RzIHRvIG1lcmdlXG4gICAgICAgIGNvbnN0IGxlbiA9IG9iamVjdHMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuIDwgMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGxlbiA8IDIpXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0c1swXTtcbiAgICAgICAgLy8gTWVyZ2UgYWxsIG9iamVjdHMgaW50byBmaXJzdFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGFuIG9iamVjdCwgcmVjdXJzaXZlbHkgbWVyZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBwdXNoIHRvIGtleVxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdHNbaV1ba2V5XSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RzWzBdW2tleV0gPSBhcnJheV9leHQuZGVlcEFzc2lnbihvYmplY3RzWzBdW2tleV0gfHwge30sIG9iamVjdHNbaV1ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RzWzBdW2tleV0gPSBvYmplY3RzW2ldW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGl0ZW0gZnJvbSBhcnJheVxuICAgICAqIEBwYXJhbSBhcnJcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmVJdGVtKGFyciwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cbn1cbmlmICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdyBpbnN0YW5jZW9mIFdpbmRvdykge1xuICAgIHdpbmRvdy5hcnJheV9zaHVmZmxlID0gYXJyYXlfZXh0LmFycmF5X3NodWZmbGU7XG4gICAgd2luZG93LmFycmF5X2ZpbHRlciA9IGFycmF5X2V4dC5hcnJheV9maWx0ZXI7XG4gICAgd2luZG93LmFycmF5X2tleXMgPSBhcnJheV9leHQuYXJyYXlfa2V5cztcbiAgICB3aW5kb3cuYXJyYXlfcmFuZCA9IGFycmF5X2V4dC5hcnJheV9yYW5kO1xuICAgIHdpbmRvdy5hcnJheV91bmlxdWUgPSBhcnJheV9leHQuYXJyYXlfdW5pcXVlO1xuICAgIHdpbmRvdy5hcnJheV91bnNldCA9IGFycmF5X2V4dC5hcnJheV91bnNldDtcbiAgICB3aW5kb3cuaW5BcnJheSA9IGFycmF5X2V4dC5pbkFycmF5O1xuICAgIHdpbmRvdy5pbl9hcnJheSA9IGFycmF5X2V4dC5pbl9hcnJheTtcbn1cbmVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcpIHtcbiAgICBnbG9iYWwuYXJyYXlfc2h1ZmZsZSA9IGFycmF5X2V4dC5hcnJheV9zaHVmZmxlO1xuICAgIGdsb2JhbC5hcnJheV9maWx0ZXIgPSBhcnJheV9leHQuYXJyYXlfZmlsdGVyO1xuICAgIGdsb2JhbC5hcnJheV9rZXlzID0gYXJyYXlfZXh0LmFycmF5X2tleXM7XG4gICAgZ2xvYmFsLmFycmF5X3JhbmQgPSBhcnJheV9leHQuYXJyYXlfcmFuZDtcbiAgICBnbG9iYWwuYXJyYXlfdW5pcXVlID0gYXJyYXlfZXh0LmFycmF5X3VuaXF1ZTtcbiAgICBnbG9iYWwuYXJyYXlfdW5zZXQgPSBhcnJheV9leHQuYXJyYXlfdW5zZXQ7XG4gICAgZ2xvYmFsLmluQXJyYXkgPSBhcnJheV9leHQuaW5BcnJheTtcbiAgICBnbG9iYWwuaW5fYXJyYXkgPSBhcnJheV9leHQuaW5fYXJyYXk7XG59XG4vLyBleHBvcnQgbm9kZSBtb2R1bGVcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gYXJyYXlfZXh0O1xuICAgIGV4cG9ydHMgPSBhcnJheV9leHQ7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbi8qKlxuICogR2V0IGFsbCBtZXRob2QgZnJvbSBjbGFzc1xuICogQHBhcmFtIHRvQ2hlY2tcbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGdldEFsbE1ldGhvZHMgPSBmdW5jdGlvbiAodG9DaGVjaykge1xuICAgIGlmICghdG9DaGVjaylcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gW107XG4gICAgICAgIGxldCBvYmogPSB0b0NoZWNrO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBwcm9wcy5wdXNoKC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikpO1xuICAgICAgICB9IHdoaWxlICgob2JqID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpKTtcbiAgICAgICAgcmV0dXJuIHByb3BzXG4gICAgICAgICAgICAuc29ydCgpXG4gICAgICAgICAgICAuZmlsdGVyKChlLCBpLCBhcnJfZm5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0b0NoZWNrW2VdO1xuICAgICAgICAgICAgY29uc3QgZm5hbWUgPSBhcnJfZm5hbWVbaSArIDFdO1xuICAgICAgICAgICAgaWYgKGUgIT0gZm5hbWUgJiYgdHlwZW9mIGMgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGZuYW1lKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIVtcbiAgICAgICAgICAgICAgICAnX19kZWZpbmVHZXR0ZXJfXycsXG4gICAgICAgICAgICAgICAgJ19fZGVmaW5lU2V0dGVyX18nLFxuICAgICAgICAgICAgICAgICdfX2xvb2t1cEdldHRlcl9fJyxcbiAgICAgICAgICAgICAgICAnX19sb29rdXBTZXR0ZXJfXycsXG4gICAgICAgICAgICAgICAgJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICAnaGFzT3duUHJvcGVydHknLFxuICAgICAgICAgICAgICAgICdpc1Byb3RvdHlwZU9mJyxcbiAgICAgICAgICAgICAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAgICAgICAgICAgICAgICd0b0xvY2FsZVN0cmluZycsXG4gICAgICAgICAgICAgICAgJ3RvU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAndmFsdWVPZicsXG4gICAgICAgICAgICBdLmluY2x1ZGVzKGZuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0b0NoZWNrKS5maWx0ZXIoKHByb3ApID0+IHR5cGVvZiB0b0NoZWNrW3Byb3BdID09PSAnZnVuY3Rpb24nKTtcbiAgICB9XG59O1xuIiwiRGF0ZS5wcm90b3R5cGUuaXNIb3VyQWdvID0gZnVuY3Rpb24gKGhvdXIpIHtcbiAgICBob3VyID0gaG91ciAqIDYwICogMTAwMDsgLyogbXMgKi9cbiAgICBjb25zdCBob3VyYWdvID0gRGF0ZS5ub3coKSAtIGhvdXI7XG4gICAgcmV0dXJuIGhvdXIgPiBob3VyYWdvO1xufTtcbmlmICghRGF0ZS5ub3cpIHtcbiAgICBEYXRlLm5vdyA9IGZ1bmN0aW9uIG5vdygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH07XG59XG5EYXRlLnByb3RvdHlwZS5hZGRIb3VycyA9IGZ1bmN0aW9uIChoKSB7XG4gICAgdGhpcy5zZXRUaW1lKHRoaXMuZ2V0VGltZSgpICsgaCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAvL3RoaXMuc2V0SG91cnModGhpcy5nZXRIb3VycygpK2gpO1xuICAgIHJldHVybiB0aGlzO1xufTtcbkRhdGUucHJvdG90eXBlLmFkZEhvdXJzMiA9IGZ1bmN0aW9uIChocnMpIHtcbiAgICB0aGlzLnNldEhvdXJzKHRoaXMuZ2V0SG91cnMoKSArIGhycyk7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuY2xhc3MgZGF0ZV9leHQge1xuICAgIHN0YXRpYyBkYXRldGltZV9sb2NhbChkYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0pTT04oKS5zbGljZSgwLCAxOSk7XG4gICAgfVxufVxuaWYgKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IGluc3RhbmNlb2YgV2luZG93KSB7XG4gICAgd2luZG93LmRhdGV0aW1lX2xvY2FsID0gZGF0ZV9leHQuZGF0ZXRpbWVfbG9jYWw7XG59XG5lbHNlIGlmICh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnKSB7XG4gICAgZ2xvYmFsLmRhdGV0aW1lX2xvY2FsID0gZGF0ZV9leHQuZGF0ZXRpbWVfbG9jYWw7XG59XG5pZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkYXRlX2V4dDtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZGF0ZXRpbWVfbG9jYWw6IGRhdGVfZXh0LmRhdGV0aW1lX2xvY2FsLFxuICAgIH07XG59XG4iLCJpZiAodHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgRG9jdW1lbnQucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIChldmVudFR5cGUsIGxpc3RlbmVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiIsImlmICghKCd0b0pTT04nIGluIEVycm9yLnByb3RvdHlwZSkpIHtcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTgzOTE0MDAvNjQwNDQzOVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFcnJvci5wcm90b3R5cGUsICd0b0pTT04nLCB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBhbHQgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGFsdFtrZXldID0gdGhpc1trZXldO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gYWx0O1xuICAgICAgICB9LFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbi8vLyA8cmVmZXJlbmNlIG5vLWRlZmF1bHQtbGliPVwidHJ1ZVwiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2dsb2JhbHMuZC50c1wiIC8+XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5GdW5jdGlvbi5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgIGlmICghdGhpcy53YXNDYWxsZWQpIHtcbiAgICAgICAgdGhpcy5hcHBseShwYXJhbSk7XG4gICAgICAgIHRoaXMud2FzQ2FsbGVkID0gdHJ1ZTtcbiAgICB9XG59O1xuLyoqXG4gKiBSdW4gdGhlIGZ1bmN0aW9uIG9ubHkgb25jZVxuICogQHBhcmFtIGZuXG4gKiBAc2VlIHtAbGluayBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDEwMDA1MzUvNjQwNDQzOX1cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIHJ1bk9uY2UoZm4pIHtcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmlmICh0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgcnVuT25jZSxcbiAgICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4vKmRlY2xhcmUgbGV0IE5hdmlnYXRvcjoge1xuICBwcm90b3R5cGU6IE5hdmlnYXRvcjtcbiAgbmV3ICgpOiBOYXZpZ2F0b3I7XG59OyovXG4iLCJOdW1iZXIucHJvdG90eXBlLmdldE1TID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gdGhpcyAqIDYwICogMTAwMDtcbn07XG5OdW1iZXIucHJvdG90eXBlLmFkZEhvdXIgPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgSG91ciA9IHRoaXMgKiA2MCAqIDEwMDA7IC8qIG1zICovXG4gICAgaWYgKCFzb3VyY2UpXG4gICAgICAgIHNvdXJjZSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHNvdXJjZS5nZXRUaW1lKCkgKyBIb3VyKS5nZXRUaW1lKCk7XG59O1xuTnVtYmVyLnByb3RvdHlwZS5BZGRaZXJvID0gZnVuY3Rpb24gKGIsIGMpIHtcbiAgICBjb25zdCBsID0gU3RyaW5nKGIgfHwgMTApLmxlbmd0aCAtIFN0cmluZyh0aGlzKS5sZW5ndGggKyAxO1xuICAgIHJldHVybiBsID4gMCA/IG5ldyBBcnJheShsKS5qb2luKGMgfHwgXCIwXCIpICsgdGhpcyA6IHRoaXM7XG59O1xuLyoqXG4gKiBPZGQgb3IgRXZlbiAoR2FuamlsIEdlbmFwKTtcbiAqIEBwYXJhbSBuXG4gKiBAcGFyYW0gdHlwZSBvZGQgb3IgZXZlblxuICovXG5mdW5jdGlvbiBvZGRvcmV2ZW4obiwgdHlwZSkge1xuICAgIGlmICghdHlwZSkge1xuICAgICAgICB0eXBlID0gXCJvZGRcIjtcbiAgICB9XG4gICAgY29uc3QgdGltZSA9ICFuID8gbmV3IERhdGUoKS5nZXREYXkoKSA6IE51bWJlcihuKTtcbiAgICBpZiAoIS9eLT9cXGQralF1ZXJ5Ly50ZXN0KHRpbWUudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgYWxlcnQoXCJhcmd1bWVudHMgaXMgbm90IG51bWJlciwgcGxlYXNlIHJlbW92ZSBxdW90ZVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGhhc2lsID0gdGltZSAlIDI7XG4gICAgY29uc3QgclR5cGUgPSAvXihvZGR8Z2FuamlsKSQvLnRlc3QodHlwZSkgPyBcIjFcIiA6IFwiMFwiO1xuICAgIC8vcmV0dXJuIGhhc2lsID09ICh0eXBlID09ICgnb2RkJyB8fCAnZ2FuamlsJykgPyAxIDogMCk7XG4gICAgcmV0dXJuIGhhc2lsLnRvU3RyaW5nKCkgPT0gclR5cGUudG9TdHJpbmcoKTtcbn1cbi8qKlxuICogc3RycGFkIC8gc3RhcnR3aXRoIHplcm8gWzBdXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gKi9cbmZ1bmN0aW9uIHN0cnBhZCh2YWwpIHtcbiAgICBpZiAodmFsID49IDEwKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gXCIwXCIgKyB2YWw7XG4gICAgfVxufVxuLyoqXG4gKiBpcyB2YXJpYWJsZSBudW1iZXI/XG4gKiBAcGFyYW0gblxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gaXNJbnQobikge1xuICAgIHJldHVybiBOdW1iZXIobikgPT09IG4gJiYgbiAlIDEgPT09IDA7XG59XG4vKipcbiAqIGlzIHZhcmlhYmxlIGZsb2F0P1xuICogQHBhcmFtIG5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGlzRmxvYXQobikge1xuICAgIHJldHVybiBOdW1iZXIobikgPT09IG4gJiYgbiAlIDEgIT09IDA7XG59XG5pZiAodHlwZW9mIG1vZHVsZS5leHBvcnRzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLmlzSW50ID0gaXNJbnQ7XG4gICAgZ2xvYmFsLmlzRmxvYXQgPSBpc0Zsb2F0O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC90cmlwbGUtc2xhc2gtcmVmZXJlbmNlICovXG5PYmplY3Quc2l6ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBsZXQgc2l6ZSA9IDAsIGtleTtcbiAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgc2l6ZSsrO1xuICAgIH1cbiAgICByZXR1cm4gc2l6ZTtcbn07XG5PYmplY3QuY2hpbGQgPSBmdW5jdGlvbiAoc3RyLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KHN0cikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soc2VsZltzdHJdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn07XG5PYmplY3QuYWx0ID0gZnVuY3Rpb24gKHN0ciwgYWx0ZXJuYXRpdmUpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5oYXNPd25Qcm9wZXJ0eShzdHIpKSB7XG4gICAgICAgIHJldHVybiBzZWxmW3N0cl07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYWx0ZXJuYXRpdmU7XG4gICAgfVxufTtcbk9iamVjdC5oYXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzT3duUHJvcGVydHkoc3RyKTtcbn07XG5PYmplY3QuZWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgLy9jYWxsYmFjay5jYWxsKHNjb3BlLCBrZXksIHRoaXNba2V5XSk7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc1trZXldKTtcbiAgICB9XG59O1xuT2JqZWN0LmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSAwO1xufTtcbk9iamVjdC5yZXBsYWNlS2V5RnJvbSA9IGZ1bmN0aW9uIChhbm90aGVyT2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMpLnJlZHVjZSgob3AsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdLZXkgPSBhbm90aGVyT2JqW2tleV07XG4gICAgICAgIG9wW25ld0tleSB8fCBrZXldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBvcDtcbiAgICB9LCB7fSk7XG4gICAgLyppZiAodHlwZW9mIGFub3RoZXJPYmogPT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGFub3RoZXJPYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhbm90aGVyT2JqLCBrZXkpKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFub3RoZXJPYmpba2V5XTtcbiAgICAgICAgICBkZWZba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9Ki9cbn07XG5jbGFzcyBvYmplY3RfZXh0IHtcbiAgICAvKipcbiAgICAgKiBKb2luIG9iamVjdCB0byBzZXBhcmF0ZWQgc3RyaW5nXG4gICAgICogKiBbXS5qb2luKCkgZXF1aXZhbGVudFxuICAgICAqIEBwYXJhbSBvYmogT2JqZWN0XG4gICAgICogQHBhcmFtIHNlcGFyYXRvciBkZWZhdWx0IGNvbW1hKCwpXG4gICAgICogQHJldHVybnMgSm9pbmVkIHN0cmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyBvYmplY3Rfam9pbihvYmosIHNlcGFyYXRvciA9ICcsJykge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtrXTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNpbXBsZSBvYmplY3QgY2hlY2suXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBpc09iamVjdChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHBhcmFtIC4uLnNvdXJjZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcykge1xuICAgICAgICBpZiAoIXNvdXJjZXMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuICAgICAgICBpZiAob2JqZWN0X2V4dC5pc09iamVjdCh0YXJnZXQpICYmIG9iamVjdF9leHQuaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdF9leHQuaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0W2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdF9leHQubWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3RfZXh0Lm1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICAgIH1cbn1cbk9iamVjdC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAoLi4ub3RoZXJzKSB7XG4gICAgcmV0dXJuIG9iamVjdF9leHQubWVyZ2VEZWVwKHRoaXMsIC4uLm90aGVycyk7XG59O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IGluc3RhbmNlb2YgV2luZG93KSB7XG4gICAgd2luZG93Lm9iamVjdF9qb2luID0gb2JqZWN0X2V4dC5vYmplY3Rfam9pbjtcbiAgICB3aW5kb3cub2JqZWN0X21lcmdlID0gb2JqZWN0X2V4dC5tZXJnZURlZXA7XG4gICAgd2luZG93LmlzT2JqZWN0ID0gb2JqZWN0X2V4dC5pc09iamVjdDtcbn1cbmVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcpIHtcbiAgICBnbG9iYWwub2JqZWN0X2pvaW4gPSBvYmplY3RfZXh0Lm9iamVjdF9qb2luO1xuICAgIGdsb2JhbC5vYmplY3RfbWVyZ2UgPSBvYmplY3RfZXh0Lm1lcmdlRGVlcDtcbiAgICBnbG9iYWwuaXNPYmplY3QgPSBvYmplY3RfZXh0LmlzT2JqZWN0O1xufVxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gb2JqZWN0X2V4dDtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgb2JqZWN0X2pvaW46IG9iamVjdF9leHQub2JqZWN0X2pvaW4sXG4gICAgICAgIG9iamVjdF9tZXJnZTogb2JqZWN0X2V4dC5tZXJnZURlZXAsXG4gICAgICAgIGlzT2JqZWN0OiBvYmplY3RfZXh0LmlzT2JqZWN0LFxuICAgIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1yZXN0LXBhcmFtcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3RyaXBsZS1zbGFzaC1yZWZlcmVuY2UgKi9cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJnbG9iYWxzLmQudHNcIiAvPlxuU3RyaW5nLnByb3RvdHlwZS5wcmludGYgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgLypjb25zdCBpc05vZGUgPSBuZXcgRnVuY3Rpb24oXG4gICAgICBcInRyeSB7cmV0dXJuIHRoaXM9PT1nbG9iYWw7fWNhdGNoKGUpe3JldHVybiBmYWxzZTt9XCJcbiAgICApO1xuICBcbiAgICBpZiAoaXNOb2RlKCkpIHtcbiAgICAgIGNvbnN0IHV0aWwgPSByZXF1aXJlKFwidXRpbFwiKTtcbiAgICAgIHJldHVybiB1dGlsLmZvcm1hdCh0aGlzLCBvYmopO1xuICAgIH0qL1xuICAgIGxldCB1c2VBcmd1bWVudHMgPSBmYWxzZTtcbiAgICBjb25zdCBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuICAgIGxldCBpID0gLTE7XG4gICAgaWYgKHR5cGVvZiBfYXJndW1lbnRzWzBdID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHVzZUFyZ3VtZW50cyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheSB8fCB1c2VBcmd1bWVudHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGlmICh1c2VBcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF9hcmd1bWVudHNbaV0gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9hcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50cyBlbGVtZW50IGlzIGFuIGludmFsaWQgdHlwZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmpbaV07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgveyhbXnt9XSopfS9nLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgY29uc3QgciA9IG9ialtiXTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHIgPT09ICdudW1iZXInID8gciA6IGE7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5TdHJpbmcucHJvdG90eXBlLnBhcnNlX3VybCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcGFyc2VyO1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIHBhcnNlciA9IG5ldyBVUkwodGhpcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaE9iamVjdCA9IFtdO1xuICAgIGxldCBzcGxpdCA9IFtdO1xuICAgIGxldCBxdWVyaWVzID0gW107XG4gICAgLy8gTGV0IHRoZSBicm93c2VyIGRvIHRoZSB3b3JrXG4gICAgcGFyc2VyLmhyZWYgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgLy8gQ29udmVydCBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0XG4gICAgcXVlcmllcyA9IHBhcnNlci5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKS5zcGxpdCgnJicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzcGxpdCA9IHF1ZXJpZXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aClcbiAgICAgICAgICAgIHNlYXJjaE9iamVjdFtzcGxpdFswXV0gPSBzcGxpdFsxXTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdG9jb2w6IHBhcnNlci5wcm90b2NvbCxcbiAgICAgICAgaG9zdDogcGFyc2VyLmhvc3QsXG4gICAgICAgIGhvc3RuYW1lOiBwYXJzZXIuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHBhcnNlci5wb3J0LFxuICAgICAgICBwYXRobmFtZTogcGFyc2VyLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2g6IHBhcnNlci5zZWFyY2gsXG4gICAgICAgIHNlYXJjaE9iamVjdDogc2VhcmNoT2JqZWN0LFxuICAgICAgICBoYXNoOiBwYXJzZXIuaGFzaCxcbiAgICAgICAgcHJvdG9ob3N0OiBwYXJzZXIucHJvdG9jb2wgKyAnLy8nICsgcGFyc2VyLmhvc3QsXG4gICAgfTtcbn07XG4vKipcbiAqIExvYWQgY3NzXG4gKi9cblN0cmluZy5wcm90b3R5cGUuQ1NTID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgZS5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgZS5ocmVmID0gdGhpcy50b1N0cmluZygpO1xuICAgIGNvbnN0IG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgICAgID8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsIG4pO1xuICAgICAgICB9LCAhMSlcbiAgICAgICAgOiB3aW5kb3cuYXR0YWNoRXZlbnRcbiAgICAgICAgICAgID8gd2luZG93LmF0dGFjaEV2ZW50KCdvbmxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLCBuKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6ICh3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSwgbik7XG4gICAgICAgICAgICB9KTtcbn07XG5TdHJpbmcucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZ20sICcnKTtcbn07XG5TdHJpbmcucHJvdG90eXBlLmhleEUgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGhleCwgaTtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGV4ID0gdGhpcy5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmVzdWx0ICs9ICgnMDAwJyArIGhleCkuc2xpY2UoLTQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblN0cmluZy5wcm90b3R5cGUuaGV4RCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgajtcbiAgICBjb25zdCBoZXhlcyA9IHRoaXMubWF0Y2goLy57MSw0fS9nKSB8fCBbXTtcbiAgICBsZXQgYmFjayA9ICcnO1xuICAgIGZvciAoaiA9IDA7IGogPCBoZXhlcy5sZW5ndGg7IGorKykge1xuICAgICAgICBiYWNrICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4ZXNbal0sIDE2KSk7XG4gICAgfVxuICAgIHJldHVybiBiYWNrO1xufTtcblN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5yb3QxMyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9bYS16QS1aXS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA8PSAnWicgPyA5MCA6IDEyMikgPj0gKGMgPSBjLmNoYXJDb2RlQXQoMCkgKyAxMykgPyBjIDogYyAtIDI2KTtcbiAgICB9KTtcbn07XG5TdHJpbmcucHJvdG90eXBlLnRydW5jYXRlID0gZnVuY3Rpb24gKG4sIHVzZVdvcmRCb3VuZGFyeSkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA8PSBuKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25zdCBzdWJTdHJpbmcgPSB0aGlzLnN1YnN0cigwLCBuIC0gMSk7IC8vIHRoZSBvcmlnaW5hbCBjaGVja1xuICAgIHJldHVybiAodXNlV29yZEJvdW5kYXJ5ID8gc3ViU3RyaW5nLnN1YnN0cigwLCBzdWJTdHJpbmcubGFzdEluZGV4T2YoJyAnKSkgOiBzdWJTdHJpbmcpICsgJyZoZWxsaXA7Jztcbn07XG5TdHJpbmcucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMgIT0gbnVsbCB8fCB0eXBlb2YgdGhpcyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDAgfHwgIXRoaXMudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQXJyID0gZnVuY3Rpb24gKGFycmF5LCByZXBsYWNlbWVudCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgIGxldCBvcmkgPSB0aGlzO1xuICAgIGFycmF5Lm1hcCgoc3RyKSA9PiB7XG4gICAgICAgIG9yaSA9IG9yaS5yZXBsYWNlKHN0ciwgcmVwbGFjZW1lbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBvcmk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS50b0h0bWxFbnRpdGllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8uL2dtLCBmdW5jdGlvbiAocykge1xuICAgICAgICAvLyByZXR1cm4gXCImI1wiICsgcy5jaGFyQ29kZUF0KDApICsgXCI7XCI7XG4gICAgICAgIHJldHVybiBzLm1hdGNoKC9bYS16MC05XFxzXSsvaSkgPyBzIDogJyYjJyArIHMuY2hhckNvZGVBdCgwKSArICc7JztcbiAgICB9KTtcbn07XG5TdHJpbmcuZnJvbUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gKHN0ciArICcnKS5yZXBsYWNlKC8mI1xcZCs7L2dtLCBmdW5jdGlvbiAocykge1xuICAgICAgICBjb25zdCBtID0gcy5tYXRjaCgvXFxkKy9nbSlbMF07XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKG0pO1xuICAgIH0pO1xufTtcblN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNBcnJheSA9IGZ1bmN0aW9uIChzdWJzdHJpbmdzKSB7XG4gICAgcmV0dXJuIHN1YnN0cmluZ3Muc29tZSgodikgPT4gdGhpcy5pbmNsdWRlcyh2KSk7XG59O1xuaWYgKHR5cGVvZiAnJy5yZXBsYWNlQWxsICE9ICdmdW5jdGlvbicpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBbGwgPSBmdW5jdGlvbiAoc2VhcmNoLCByZXBsYWNlbWVudCkge1xuICAgICAgICBjb25zdCBmaW5kID0gdHlwZW9mIHNlYXJjaCA9PSAnc3RyaW5nJyA/IG5ldyBSZWdFeHAoc2VhcmNoLCAnZycpIDogc2VhcmNoO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKGZpbmQsIHJlcGxhY2VtZW50KTtcbiAgICB9O1xufVxuIl19
