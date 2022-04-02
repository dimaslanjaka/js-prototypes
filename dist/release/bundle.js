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
