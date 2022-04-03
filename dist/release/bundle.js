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
/*
if (typeof window != 'undefined' && window instanceof Window) {
  window.array_shuffle = array_ext.array_shuffle;
  window.array_filter = array_ext.array_filter;
  window.array_keys = array_ext.array_keys;
  window.array_rand = array_ext.array_rand;
  window.array_unique = array_ext.array_unique;
  window.array_unset = array_ext.array_unset;
  window.inArray = array_ext.inArray;
  window.in_array = array_ext.in_array;
} else if (typeof global == 'object') {
  global.array_shuffle = array_ext.array_shuffle;
  global.array_filter = array_ext.array_filter;
  global.array_keys = array_ext.array_keys;
  global.array_rand = array_ext.array_rand;
  global.array_unique = array_ext.array_unique;
  global.array_unset = array_ext.array_unset;
  global.inArray = array_ext.inArray;
  global.in_array = array_ext.in_array;
}
*/
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFueS5qcyIsIkFycmF5LmpzIiwiQ2xhc3MuanMiLCJEYXRlLmpzIiwiRG9jdW1lbnQuanMiLCJFcnJvci5qcyIsIkZ1bmN0aW9uLmpzIiwiTmF2aWdhdG9yLmpzIiwiTnVtYmVyLmpzIiwiT2JqZWN0LmpzIiwiU3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAodHlwZW9mIG1vZHVsZS5leHBvcnRzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBudWxsO1xuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBhbnk6IG51bGwsXG4gICAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC90cmlwbGUtc2xhc2gtcmVmZXJlbmNlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vZ2xvYmFscy5kLnRzXCIgLz5cbkFycmF5LnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBpID0gdGhpcy5sZW5ndGgsIGosIHRlbXA7XG4gICAgaWYgKGkgPT0gMClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgd2hpbGUgKC0taSkge1xuICAgICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgIHRlbXAgPSB0aGlzW2ldO1xuICAgICAgICB0aGlzW2ldID0gdGhpc1tqXTtcbiAgICAgICAgdGhpc1tqXSA9IHRlbXA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcbkFycmF5LnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAoIW4pIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMubGVuZ3RoIC0gbjtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMClcbiAgICAgICAgICAgIHN0YXJ0ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpY2Uoc3RhcnQsIHRoaXMubGVuZ3RoKTtcbiAgICB9XG59O1xuQXJyYXkucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKChzdHIpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHIgPT0gJ3N0cmluZycpXG4gICAgICAgICAgICByZXR1cm4gc3RyLnRyaW0oKTtcbiAgICB9KTtcbn07XG5BcnJheS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDA7XG59O1xuQXJyYXkucHJvdG90eXBlLnJhbmdlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zbGljZShzdGFydCwgZW5kICsgMSk7XG59O1xuQXJyYXkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdGhpcy5wdXNoKGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xufTtcbkFycmF5LnByb3RvdHlwZS5hZGRBbGwgPSBmdW5jdGlvbiAob3RoZXJzKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgb3RoZXJzLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc2VsZi5wdXNoKGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xufTtcbkFycmF5LnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5sZW5ndGgpXTtcbn07XG5BcnJheS5wcm90b3R5cGUudW5pcXVlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGEgPSB0aGlzLmNvbmNhdCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBhLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBpZiAoYVtpXSA9PT0gYVtqXSlcbiAgICAgICAgICAgICAgICBhLnNwbGljZShqLS0sIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xufTtcbkFycmF5LnByb3RvdHlwZS51bmlxdWVTdHJpbmdBcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgTWFwKHRoaXMubWFwKChzKSA9PiBbcy50b0xvd2VyQ2FzZSgpLCBzXSkpO1xuICAgIHJldHVybiBbLi4uZmlsdGVyLnZhbHVlcygpXTtcbn07XG5BcnJheS5wcm90b3R5cGUudW5pcXVlT2JqZWN0S2V5ID0gZnVuY3Rpb24gKGtleSwgcmVtb3ZlTnVsbCA9IHRydWUpIHtcbiAgICBpZiAoIWtleSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgcmVzQXJyID0gW107XG4gICAgdGhpcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgaSA9IHJlc0Fyci5maW5kSW5kZXgoKHgpID0+IHhba2V5XSA9PSBpdGVtW2tleV0pO1xuICAgICAgICBpZiAoaSA8PSAtMSkge1xuICAgICAgICAgICAgaWYgKHJlbW92ZU51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldKVxuICAgICAgICAgICAgICAgICAgICByZXNBcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc0Fyci5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICAgIHJldHVybiByZXNBcnI7XG59O1xuQXJyYXkucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGxldCBpID0gdGhpcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpZiAodGhpc1tpXSA9PT0gb2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuQXJyYXkucHJvdG90eXBlLmhhc0luZGV4ID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXNbbl0gIT0gJ3VuZGVmaW5lZCc7XG59O1xuQXJyYXkucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAoIW4pIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIHJldHVybiB0aGlzLnNsaWNlKDAsIG4pO1xuICAgIH1cbn07XG5BcnJheS5wcm90b3R5cGUuY29tcGFjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3ZhciBjaGFuZ2VzID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIElmIGVsZW1lbnQgaXMgbm9uLWV4aXN0ZW50LCB1bmRlZmluZWQgb3IgbnVsbCwgcmVtb3ZlIGl0LlxuICAgICAgICBpZiAoIXRoaXNbaV0pIHtcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaSA9IGkgLSAxO1xuICAgICAgICAgICAgLy9jaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2lmICghY2hhbmdlcykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdGhpcztcbn07XG5BcnJheS5wcm90b3R5cGUuZGVsZXRlQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPCAwKVxuICAgICAgICBpbmRleCA9IHRoaXMubGVuZ3RoICsgaW5kZXg7XG4gICAgLy8gSWYgZWxlbWVudCBpcyBub24tZXhpc3RlbnQsIHJldHVybiB1bmRlZmluZWQ6XG4gICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KGluZGV4KSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBlbGVtID0gdGhpc1tpbmRleF07XG4gICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiBlbGVtO1xufTtcbkFycmF5LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluZGV4T2YodmFsdWUpICE9IC0xKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdmFsdWUgZXhpc3RzXG4gICAgICAgIHRoaXMuc3BsaWNlKHRoaXMuaW5kZXhPZih2YWx1ZSksIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5BcnJheS5wcm90b3R5cGUuZXhpc3RzID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXNbbl0gIT09ICd1bmRlZmluZWQnO1xufTtcbmlmICghQXJyYXkucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdldmVyeScpKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmV2ZXJ5ID0gZnVuY3Rpb24gKGZ1biAvKiwgdGhpc3AgKi8pIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KHRoaXMpO1xuICAgICAgICBjb25zdCBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGNvbnN0IHRoaXNwID0gYXJndW1lbnRzWzFdO1xuICAgICAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmdW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIGluIHQgJiYgIWZ1bi5jYWxsKHRoaXNwLCB0W2ldLCBpLCB0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuQXJyYXkucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICBjb25zdCBpdGVtUmVtb3ZlZCA9IHRoaXMuc3BsaWNlKGZyb20sIDEpOyAvLyBzcGxpY2UoKSByZXR1cm5zIHRoZSByZW1vdmUgZWxlbWVudCBhcyBhbiBhcnJheVxuICAgIHRoaXMuc3BsaWNlKHRvLCAwLCBpdGVtUmVtb3ZlZFswXSk7IC8vIEluc2VydCBpdGVtUmVtb3ZlZCBpbnRvIHRoZSB0YXJnZXQgaW5kZXhcbiAgICByZXR1cm4gdGhpcztcbn07XG5BcnJheS5wcm90b3R5cGUuaGFwdXNJdGVtRGFyaUFycmF5TGFpbiA9IGZ1bmN0aW9uICguLi5hcnJheUxhaW4pIHtcbiAgICBsZXQgdGhpc0FyciA9IHRoaXM7XG4gICAgYXJyYXlMYWluLmZvckVhY2goKG90aGVyQXJyKSA9PiB7XG4gICAgICAgIHRoaXNBcnIgPSB0aGlzQXJyLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiAhb3RoZXJBcnIuaW5jbHVkZXMoZWwpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpc0Fycjtcbn07XG5BcnJheS5wcm90b3R5cGUucmVtb3ZlRW1wdGllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgY29uc3Qgbm90bnVsbCA9IFxuICAgICAgICAvLyBtYWtlIHN1cmUgZWxlbWVudCBpcyBub3QgbnVsbFxuICAgICAgICBlbCAhPSBudWxsICYmXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgZWxlbWVudCBpcyBub3QgdW5kZWZpbmVkXG4gICAgICAgICAgICB0eXBlb2YgZWwgIT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIC8vIGlmIGVsZW1lbnQgaXMgc3RyaW5nLCBtYWtlIHN1cmUgc3RyaW5nIGxlbmd0aCBub3QgemVyb1xuICAgICAgICBpZiAodHlwZW9mIGVsID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm90bnVsbCAmJiBlbC50cmltKCkubGVuZ3RoID4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm90bnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyO1xufTtcbmNsYXNzIGFycmF5X2V4dCB7XG4gICAgc3RhdGljIGFycmF5X2ZpbHRlcihhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBwaWNrIHJhbmRvbSBmcm9tIGFycmF5XG4gICAgICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnJheXNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVuaXF1ZSBVbmlxdWUgdGhlIGFycmF5c1xuICAgICAqL1xuICAgIHN0YXRpYyBhcnJheV9yYW5kKGFycmF5cywgdW5pcXVlKSB7XG4gICAgICAgIGlmICh1bmlxdWUpIHtcbiAgICAgICAgICAgIGFycmF5cyA9IGFycmF5X2V4dC5hcnJheV91bmlxdWUoYXJyYXlzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5cy5sZW5ndGgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgdmFsdWU6IGFycmF5c1tpbmRleF0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFycmF5IHVuaXF1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyYXlzXG4gICAgICovXG4gICAgc3RhdGljIGFycmF5X3VuaXF1ZShhcnJheXMpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5cy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIHBvcywgc2VsZikge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PSBwb3M7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnNldCBhcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyYXlOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVtYmVyfSBrZXlcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgc3RhdGljIGFycmF5X3Vuc2V0KGFycmF5TmFtZSwga2V5KSB7XG4gICAgICAgIGxldCB4O1xuICAgICAgICBjb25zdCB0bXBBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHggaW4gYXJyYXlOYW1lKSB7XG4gICAgICAgICAgICBpZiAoeCAhPSBrZXkpIHtcbiAgICAgICAgICAgICAgICB0bXBBcnJheVt4XSA9IGFycmF5TmFtZVt4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wQXJyYXk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBIUCBzaHVmZmxlIGFycmF5IGVxdWl2YWxlbnRcbiAgICAgKiBAcGFyYW0gYXJyYXlcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHZhciBhcnIgPSBbMiwgMTEsIDM3LCA0Ml07XG4gICAgICogc2h1ZmZsZShhcnIpO1xuICAgICAqIGNvbnNvbGUubG9nKGFycik7IC8vcmV0dXJuIHJhbmRvbVxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICBzdGF0aWMgc2h1ZmZsZShhcnJheSkge1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBzdGF0aWMgYXJyYXlDb21wYXJlKGExLCBhMikge1xuICAgICAgICBpZiAoYTEubGVuZ3RoICE9IGEyLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYTIubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYTFbaV0gIT09IGEyW2ldKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogaW5fYXJyYXkgUEhQIGVxdWl2YWxlbnRcbiAgICAgKiBAcGFyYW0gbmVlZGxlIHN0cmluZyBldGNcbiAgICAgKiBAcGFyYW0gaGF5c3RhY2tcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5BcnJheShuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGhheXN0YWNrLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYXlzdGFja1tpXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheV9leHQuYXJyYXlDb21wYXJlKGhheXN0YWNrW2ldLCBuZWVkbGUpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChoYXlzdGFja1tpXSA9PSBuZWVkbGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogaW5fYXJyYXkgUEhQIGVxdWl2YWxlbnRcbiAgICAgKiBAcGFyYW0gbmVlZGxlIHN0cmluZyBldGNcbiAgICAgKiBAcGFyYW0gaGF5c3RhY2tcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5fYXJyYXkobmVlZGxlLCBoYXlzdGFjaykge1xuICAgICAgICByZXR1cm4gYXJyYXlfZXh0LmluQXJyYXkobmVlZGxlLCBoYXlzdGFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGdldCBhbGwga2V5c1xuICAgICAqIEBwYXJhbSBoYXlzdGFjayBzdHJpbmcgZXRjXG4gICAgICovXG4gICAgc3RhdGljIGFycmF5X2tleXMoaGF5c3RhY2spIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGhheXN0YWNrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2h1ZmZsZXMgYXJyYXkgaW4gcGxhY2UuXG4gICAgICogQHBhcmFtIGEgaXRlbXMgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgaXRlbXMuXG4gICAgICovXG4gICAgc3RhdGljIGFycmF5X3NodWZmbGUoYSkge1xuICAgICAgICBsZXQgaiwgeCwgaTtcbiAgICAgICAgZm9yIChpID0gYS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICB4ID0gYVtpXTtcbiAgICAgICAgICAgIGFbaV0gPSBhW2pdO1xuICAgICAgICAgICAgYVtqXSA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZXAgbWVyZ2UgdHdvIG9yIG1vcmUgb2JqZWN0cyBpbnRvIHRoZSBmaXJzdC5cbiAgICAgKiAoYykgMjAyMSBDaHJpcyBGZXJkaW5hbmRpLCBNSVQgTGljZW5zZSwgaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tXG4gICAgICogQHBhcmFtIG9iamVjdHMgIFRoZSBvYmplY3RzIHRvIG1lcmdlIHRvZ2V0aGVyXG4gICAgICogQHJldHVybnMgTWVyZ2VkIHZhbHVlcyBvZiBkZWZhdWx0cyBhbmQgb3B0aW9uc1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWVwQXNzaWduKC4uLm9iamVjdHMpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZXJlIGFyZSBvYmplY3RzIHRvIG1lcmdlXG4gICAgICAgIGNvbnN0IGxlbiA9IG9iamVjdHMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuIDwgMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGxlbiA8IDIpXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0c1swXTtcbiAgICAgICAgLy8gTWVyZ2UgYWxsIG9iamVjdHMgaW50byBmaXJzdFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGFuIG9iamVjdCwgcmVjdXJzaXZlbHkgbWVyZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBwdXNoIHRvIGtleVxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdHNbaV1ba2V5XSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RzWzBdW2tleV0gPSBhcnJheV9leHQuZGVlcEFzc2lnbihvYmplY3RzWzBdW2tleV0gfHwge30sIG9iamVjdHNbaV1ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RzWzBdW2tleV0gPSBvYmplY3RzW2ldW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGl0ZW0gZnJvbSBhcnJheVxuICAgICAqIEBwYXJhbSBhcnJcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmVJdGVtKGFyciwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cbn1cbi8qXG5pZiAodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgd2luZG93LmFycmF5X3NodWZmbGUgPSBhcnJheV9leHQuYXJyYXlfc2h1ZmZsZTtcbiAgd2luZG93LmFycmF5X2ZpbHRlciA9IGFycmF5X2V4dC5hcnJheV9maWx0ZXI7XG4gIHdpbmRvdy5hcnJheV9rZXlzID0gYXJyYXlfZXh0LmFycmF5X2tleXM7XG4gIHdpbmRvdy5hcnJheV9yYW5kID0gYXJyYXlfZXh0LmFycmF5X3JhbmQ7XG4gIHdpbmRvdy5hcnJheV91bmlxdWUgPSBhcnJheV9leHQuYXJyYXlfdW5pcXVlO1xuICB3aW5kb3cuYXJyYXlfdW5zZXQgPSBhcnJheV9leHQuYXJyYXlfdW5zZXQ7XG4gIHdpbmRvdy5pbkFycmF5ID0gYXJyYXlfZXh0LmluQXJyYXk7XG4gIHdpbmRvdy5pbl9hcnJheSA9IGFycmF5X2V4dC5pbl9hcnJheTtcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0Jykge1xuICBnbG9iYWwuYXJyYXlfc2h1ZmZsZSA9IGFycmF5X2V4dC5hcnJheV9zaHVmZmxlO1xuICBnbG9iYWwuYXJyYXlfZmlsdGVyID0gYXJyYXlfZXh0LmFycmF5X2ZpbHRlcjtcbiAgZ2xvYmFsLmFycmF5X2tleXMgPSBhcnJheV9leHQuYXJyYXlfa2V5cztcbiAgZ2xvYmFsLmFycmF5X3JhbmQgPSBhcnJheV9leHQuYXJyYXlfcmFuZDtcbiAgZ2xvYmFsLmFycmF5X3VuaXF1ZSA9IGFycmF5X2V4dC5hcnJheV91bmlxdWU7XG4gIGdsb2JhbC5hcnJheV91bnNldCA9IGFycmF5X2V4dC5hcnJheV91bnNldDtcbiAgZ2xvYmFsLmluQXJyYXkgPSBhcnJheV9leHQuaW5BcnJheTtcbiAgZ2xvYmFsLmluX2FycmF5ID0gYXJyYXlfZXh0LmluX2FycmF5O1xufVxuKi9cbi8vIGV4cG9ydCBub2RlIG1vZHVsZVxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBhcnJheV9leHQ7XG4gICAgZXhwb3J0cyA9IGFycmF5X2V4dDtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLyoqXG4gKiBHZXQgYWxsIG1ldGhvZCBmcm9tIGNsYXNzXG4gKiBAcGFyYW0gdG9DaGVja1xuICogQHJldHVybnNcbiAqL1xuY29uc3QgZ2V0QWxsTWV0aG9kcyA9IGZ1bmN0aW9uICh0b0NoZWNrKSB7XG4gICAgaWYgKCF0b0NoZWNrKVxuICAgICAgICByZXR1cm4gW107XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBbXTtcbiAgICAgICAgbGV0IG9iaiA9IHRvQ2hlY2s7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHByb3BzLnB1c2goLi4uT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKSk7XG4gICAgICAgIH0gd2hpbGUgKChvYmogPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkpO1xuICAgICAgICByZXR1cm4gcHJvcHNcbiAgICAgICAgICAgIC5zb3J0KClcbiAgICAgICAgICAgIC5maWx0ZXIoKGUsIGksIGFycl9mbmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYyA9IHRvQ2hlY2tbZV07XG4gICAgICAgICAgICBjb25zdCBmbmFtZSA9IGFycl9mbmFtZVtpICsgMV07XG4gICAgICAgICAgICBpZiAoZSAhPSBmbmFtZSAmJiB0eXBlb2YgYyA9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcigoZm5hbWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhW1xuICAgICAgICAgICAgICAgICdfX2RlZmluZUdldHRlcl9fJyxcbiAgICAgICAgICAgICAgICAnX19kZWZpbmVTZXR0ZXJfXycsXG4gICAgICAgICAgICAgICAgJ19fbG9va3VwR2V0dGVyX18nLFxuICAgICAgICAgICAgICAgICdfX2xvb2t1cFNldHRlcl9fJyxcbiAgICAgICAgICAgICAgICAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgICdoYXNPd25Qcm9wZXJ0eScsXG4gICAgICAgICAgICAgICAgJ2lzUHJvdG90eXBlT2YnLFxuICAgICAgICAgICAgICAgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICAgICAgICAgICAgICAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAndG9TdHJpbmcnLFxuICAgICAgICAgICAgICAgICd2YWx1ZU9mJyxcbiAgICAgICAgICAgIF0uaW5jbHVkZXMoZm5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRvQ2hlY2spLmZpbHRlcigocHJvcCkgPT4gdHlwZW9mIHRvQ2hlY2tbcHJvcF0gPT09ICdmdW5jdGlvbicpO1xuICAgIH1cbn07XG4iLCJEYXRlLnByb3RvdHlwZS5pc0hvdXJBZ28gPSBmdW5jdGlvbiAoaG91cikge1xuICAgIGhvdXIgPSBob3VyICogNjAgKiAxMDAwOyAvKiBtcyAqL1xuICAgIGNvbnN0IGhvdXJhZ28gPSBEYXRlLm5vdygpIC0gaG91cjtcbiAgICByZXR1cm4gaG91ciA+IGhvdXJhZ287XG59O1xuaWYgKCFEYXRlLm5vdykge1xuICAgIERhdGUubm93ID0gZnVuY3Rpb24gbm93KCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfTtcbn1cbkRhdGUucHJvdG90eXBlLmFkZEhvdXJzID0gZnVuY3Rpb24gKGgpIHtcbiAgICB0aGlzLnNldFRpbWUodGhpcy5nZXRUaW1lKCkgKyBoICogNjAgKiA2MCAqIDEwMDApO1xuICAgIC8vdGhpcy5zZXRIb3Vycyh0aGlzLmdldEhvdXJzKCkraCk7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuRGF0ZS5wcm90b3R5cGUuYWRkSG91cnMyID0gZnVuY3Rpb24gKGhycykge1xuICAgIHRoaXMuc2V0SG91cnModGhpcy5nZXRIb3VycygpICsgaHJzKTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5jbGFzcyBkYXRlX2V4dCB7XG4gICAgc3RhdGljIGRhdGV0aW1lX2xvY2FsKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvSlNPTigpLnNsaWNlKDAsIDE5KTtcbiAgICB9XG59XG5pZiAodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICB3aW5kb3cuZGF0ZXRpbWVfbG9jYWwgPSBkYXRlX2V4dC5kYXRldGltZV9sb2NhbDtcbn1cbmVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcpIHtcbiAgICBnbG9iYWwuZGF0ZXRpbWVfbG9jYWwgPSBkYXRlX2V4dC5kYXRldGltZV9sb2NhbDtcbn1cbmlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRhdGVfZXh0O1xuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRldGltZV9sb2NhbDogZGF0ZV9leHQuZGF0ZXRpbWVfbG9jYWwsXG4gICAgfTtcbn1cbiIsImlmICh0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBEb2N1bWVudC5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKGV2ZW50VHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAodGhpcy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIiwiaWYgKCEoJ3RvSlNPTicgaW4gRXJyb3IucHJvdG90eXBlKSkge1xuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODM5MTQwMC82NDA0NDM5XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVycm9yLnByb3RvdHlwZSwgJ3RvSlNPTicsIHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsdCA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgYWx0W2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBhbHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLy8vIDxyZWZlcmVuY2Ugbm8tZGVmYXVsdC1saWI9XCJ0cnVlXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vZ2xvYmFscy5kLnRzXCIgLz5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbkZ1bmN0aW9uLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgaWYgKCF0aGlzLndhc0NhbGxlZCkge1xuICAgICAgICB0aGlzLmFwcGx5KHBhcmFtKTtcbiAgICAgICAgdGhpcy53YXNDYWxsZWQgPSB0cnVlO1xuICAgIH1cbn07XG4vKipcbiAqIFJ1biB0aGUgZnVuY3Rpb24gb25seSBvbmNlXG4gKiBAcGFyYW0gZm5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MTAwMDUzNS82NDA0NDM5fVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gcnVuT25jZShmbikge1xuICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmICghZG9uZSkge1xuICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuaWYgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBydW5PbmNlLFxuICAgIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbi8qZGVjbGFyZSBsZXQgTmF2aWdhdG9yOiB7XG4gIHByb3RvdHlwZTogTmF2aWdhdG9yO1xuICBuZXcgKCk6IE5hdmlnYXRvcjtcbn07Ki9cbiIsIk51bWJlci5wcm90b3R5cGUuZ2V0TVMgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzICogNjAgKiAxMDAwO1xufTtcbk51bWJlci5wcm90b3R5cGUuYWRkSG91ciA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBIb3VyID0gdGhpcyAqIDYwICogMTAwMDsgLyogbXMgKi9cbiAgICBpZiAoIXNvdXJjZSlcbiAgICAgICAgc291cmNlID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gbmV3IERhdGUoc291cmNlLmdldFRpbWUoKSArIEhvdXIpLmdldFRpbWUoKTtcbn07XG5OdW1iZXIucHJvdG90eXBlLkFkZFplcm8gPSBmdW5jdGlvbiAoYiwgYykge1xuICAgIGNvbnN0IGwgPSBTdHJpbmcoYiB8fCAxMCkubGVuZ3RoIC0gU3RyaW5nKHRoaXMpLmxlbmd0aCArIDE7XG4gICAgcmV0dXJuIGwgPiAwID8gbmV3IEFycmF5KGwpLmpvaW4oYyB8fCBcIjBcIikgKyB0aGlzIDogdGhpcztcbn07XG4vKipcbiAqIE9kZCBvciBFdmVuIChHYW5qaWwgR2VuYXApO1xuICogQHBhcmFtIG5cbiAqIEBwYXJhbSB0eXBlIG9kZCBvciBldmVuXG4gKi9cbmZ1bmN0aW9uIG9kZG9yZXZlbihuLCB0eXBlKSB7XG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICAgIHR5cGUgPSBcIm9kZFwiO1xuICAgIH1cbiAgICBjb25zdCB0aW1lID0gIW4gPyBuZXcgRGF0ZSgpLmdldERheSgpIDogTnVtYmVyKG4pO1xuICAgIGlmICghL14tP1xcZCtqUXVlcnkvLnRlc3QodGltZS50b1N0cmluZygpKSkge1xuICAgICAgICBhbGVydChcImFyZ3VtZW50cyBpcyBub3QgbnVtYmVyLCBwbGVhc2UgcmVtb3ZlIHF1b3RlXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgaGFzaWwgPSB0aW1lICUgMjtcbiAgICBjb25zdCByVHlwZSA9IC9eKG9kZHxnYW5qaWwpJC8udGVzdCh0eXBlKSA/IFwiMVwiIDogXCIwXCI7XG4gICAgLy9yZXR1cm4gaGFzaWwgPT0gKHR5cGUgPT0gKCdvZGQnIHx8ICdnYW5qaWwnKSA/IDEgOiAwKTtcbiAgICByZXR1cm4gaGFzaWwudG9TdHJpbmcoKSA9PSByVHlwZS50b1N0cmluZygpO1xufVxuLyoqXG4gKiBzdHJwYWQgLyBzdGFydHdpdGggemVybyBbMF1cbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWxcbiAqL1xuZnVuY3Rpb24gc3RycGFkKHZhbCkge1xuICAgIGlmICh2YWwgPj0gMTApIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBcIjBcIiArIHZhbDtcbiAgICB9XG59XG4vKipcbiAqIGlzIHZhcmlhYmxlIG51bWJlcj9cbiAqIEBwYXJhbSBuXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBpc0ludChuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuKSA9PT0gbiAmJiBuICUgMSA9PT0gMDtcbn1cbi8qKlxuICogaXMgdmFyaWFibGUgZmxvYXQ/XG4gKiBAcGFyYW0gblxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gaXNGbG9hdChuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuKSA9PT0gbiAmJiBuICUgMSAhPT0gMDtcbn1cbmlmICh0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuaXNJbnQgPSBpc0ludDtcbiAgICBnbG9iYWwuaXNGbG9hdCA9IGlzRmxvYXQ7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3RyaXBsZS1zbGFzaC1yZWZlcmVuY2UgKi9cbk9iamVjdC5zaXplID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGxldCBzaXplID0gMCwga2V5O1xuICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICBzaXplKys7XG4gICAgfVxuICAgIHJldHVybiBzaXplO1xufTtcbk9iamVjdC5jaGlsZCA9IGZ1bmN0aW9uIChzdHIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHNlbGYuaGFzT3duUHJvcGVydHkoc3RyKSkge1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhzZWxmW3N0cl0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufTtcbk9iamVjdC5hbHQgPSBmdW5jdGlvbiAoc3RyLCBhbHRlcm5hdGl2ZSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KHN0cikpIHtcbiAgICAgICAgcmV0dXJuIHNlbGZbc3RyXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhbHRlcm5hdGl2ZTtcbiAgICB9XG59O1xuT2JqZWN0LmhhcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNPd25Qcm9wZXJ0eShzdHIpO1xufTtcbk9iamVjdC5lYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcykge1xuICAgICAgICAvL2NhbGxiYWNrLmNhbGwoc2NvcGUsIGtleSwgdGhpc1trZXldKTtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzW2tleV0pO1xuICAgIH1cbn07XG5PYmplY3QuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDA7XG59O1xuT2JqZWN0LnJlcGxhY2VLZXlGcm9tID0gZnVuY3Rpb24gKGFub3RoZXJPYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcykucmVkdWNlKChvcCwgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0tleSA9IGFub3RoZXJPYmpba2V5XTtcbiAgICAgICAgb3BbbmV3S2V5IHx8IGtleV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG9wO1xuICAgIH0sIHt9KTtcbiAgICAvKmlmICh0eXBlb2YgYW5vdGhlck9iaiA9PSAnb2JqZWN0Jykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gYW5vdGhlck9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFub3RoZXJPYmosIGtleSkpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYW5vdGhlck9ialtrZXldO1xuICAgICAgICAgIGRlZltrZXldID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0qL1xufTtcbmNsYXNzIG9iamVjdF9leHQge1xuICAgIC8qKlxuICAgICAqIEpvaW4gb2JqZWN0IHRvIHNlcGFyYXRlZCBzdHJpbmdcbiAgICAgKiAqIFtdLmpvaW4oKSBlcXVpdmFsZW50XG4gICAgICogQHBhcmFtIG9iaiBPYmplY3RcbiAgICAgKiBAcGFyYW0gc2VwYXJhdG9yIGRlZmF1bHQgY29tbWEoLClcbiAgICAgKiBAcmV0dXJucyBKb2luZWQgc3RyaW5nXG4gICAgICovXG4gICAgc3RhdGljIG9iamVjdF9qb2luKG9iaiwgc2VwYXJhdG9yID0gJywnKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqW2tdO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oc2VwYXJhdG9yKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2ltcGxlIG9iamVjdCBjaGVjay5cbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgc3RhdGljIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLlxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKiBAcGFyYW0gLi4uc291cmNlc1xuICAgICAqL1xuICAgIHN0YXRpYyBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgICAgIGlmICghc291cmNlcy5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG4gICAgICAgIGlmIChvYmplY3RfZXh0LmlzT2JqZWN0KHRhcmdldCkgJiYgb2JqZWN0X2V4dC5pc09iamVjdChzb3VyY2UpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0X2V4dC5pc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KTtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0X2V4dC5tZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iamVjdF9leHQubWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG4gICAgfVxufVxuT2JqZWN0LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICguLi5vdGhlcnMpIHtcbiAgICByZXR1cm4gb2JqZWN0X2V4dC5tZXJnZURlZXAodGhpcywgLi4ub3RoZXJzKTtcbn07XG5pZiAodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICB3aW5kb3cub2JqZWN0X2pvaW4gPSBvYmplY3RfZXh0Lm9iamVjdF9qb2luO1xuICAgIHdpbmRvdy5vYmplY3RfbWVyZ2UgPSBvYmplY3RfZXh0Lm1lcmdlRGVlcDtcbiAgICB3aW5kb3cuaXNPYmplY3QgPSBvYmplY3RfZXh0LmlzT2JqZWN0O1xufVxuZWxzZSBpZiAodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0Jykge1xuICAgIGdsb2JhbC5vYmplY3Rfam9pbiA9IG9iamVjdF9leHQub2JqZWN0X2pvaW47XG4gICAgZ2xvYmFsLm9iamVjdF9tZXJnZSA9IG9iamVjdF9leHQubWVyZ2VEZWVwO1xuICAgIGdsb2JhbC5pc09iamVjdCA9IG9iamVjdF9leHQuaXNPYmplY3Q7XG59XG5pZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBvYmplY3RfZXh0O1xuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBvYmplY3Rfam9pbjogb2JqZWN0X2V4dC5vYmplY3Rfam9pbixcbiAgICAgICAgb2JqZWN0X21lcmdlOiBvYmplY3RfZXh0Lm1lcmdlRGVlcCxcbiAgICAgICAgaXNPYmplY3Q6IG9iamVjdF9leHQuaXNPYmplY3QsXG4gICAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXJlc3QtcGFyYW1zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvdHJpcGxlLXNsYXNoLXJlZmVyZW5jZSAqL1xuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImdsb2JhbHMuZC50c1wiIC8+XG5TdHJpbmcucHJvdG90eXBlLnByaW50ZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAvKmNvbnN0IGlzTm9kZSA9IG5ldyBGdW5jdGlvbihcbiAgICAgIFwidHJ5IHtyZXR1cm4gdGhpcz09PWdsb2JhbDt9Y2F0Y2goZSl7cmV0dXJuIGZhbHNlO31cIlxuICAgICk7XG4gIFxuICAgIGlmIChpc05vZGUoKSkge1xuICAgICAgY29uc3QgdXRpbCA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuICAgICAgcmV0dXJuIHV0aWwuZm9ybWF0KHRoaXMsIG9iaik7XG4gICAgfSovXG4gICAgbGV0IHVzZUFyZ3VtZW50cyA9IGZhbHNlO1xuICAgIGNvbnN0IF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XG4gICAgbGV0IGkgPSAtMTtcbiAgICBpZiAodHlwZW9mIF9hcmd1bWVudHNbMF0gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdXNlQXJndW1lbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8IHVzZUFyZ3VtZW50cykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgaWYgKHVzZUFyZ3VtZW50cykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX2FyZ3VtZW50c1tpXSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2FyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXJndW1lbnRzIGVsZW1lbnQgaXMgYW4gaW52YWxpZCB0eXBlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ialtpXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC97KFtee31dKil9L2csIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBjb25zdCByID0gb2JqW2JdO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiByID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgciA9PT0gJ251bWJlcicgPyByIDogYTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblN0cmluZy5wcm90b3R5cGUucGFyc2VfdXJsID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBwYXJzZXI7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgcGFyc2VyID0gbmV3IFVSTCh0aGlzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhcnNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoT2JqZWN0ID0gW107XG4gICAgbGV0IHNwbGl0ID0gW107XG4gICAgbGV0IHF1ZXJpZXMgPSBbXTtcbiAgICAvLyBMZXQgdGhlIGJyb3dzZXIgZG8gdGhlIHdvcmtcbiAgICBwYXJzZXIuaHJlZiA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAvLyBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICBxdWVyaWVzID0gcGFyc2VyLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpLnNwbGl0KCcmJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNwbGl0ID0gcXVlcmllc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICBpZiAoc3BsaXQubGVuZ3RoKVxuICAgICAgICAgICAgc2VhcmNoT2JqZWN0W3NwbGl0WzBdXSA9IHNwbGl0WzFdO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm90b2NvbDogcGFyc2VyLnByb3RvY29sLFxuICAgICAgICBob3N0OiBwYXJzZXIuaG9zdCxcbiAgICAgICAgaG9zdG5hbWU6IHBhcnNlci5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogcGFyc2VyLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiBwYXJzZXIucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaDogcGFyc2VyLnNlYXJjaCxcbiAgICAgICAgc2VhcmNoT2JqZWN0OiBzZWFyY2hPYmplY3QsXG4gICAgICAgIGhhc2g6IHBhcnNlci5oYXNoLFxuICAgICAgICBwcm90b2hvc3Q6IHBhcnNlci5wcm90b2NvbCArICcvLycgKyBwYXJzZXIuaG9zdCxcbiAgICB9O1xufTtcbi8qKlxuICogTG9hZCBjc3NcbiAqL1xuU3RyaW5nLnByb3RvdHlwZS5DU1MgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBlLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBlLmhyZWYgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICAgICAgPyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSwgbik7XG4gICAgICAgIH0sICExKVxuICAgICAgICA6IHdpbmRvdy5hdHRhY2hFdmVudFxuICAgICAgICAgICAgPyB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ubG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsIG4pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogKHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLCBuKTtcbiAgICAgICAgICAgIH0pO1xufTtcblN0cmluZy5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nbSwgJycpO1xufTtcblN0cmluZy5wcm90b3R5cGUuaGV4RSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgaGV4LCBpO1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBoZXggPSB0aGlzLmNoYXJDb2RlQXQoaSkudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXN1bHQgKz0gKCcwMDAnICsgaGV4KS5zbGljZSgtNCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5oZXhEID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBqO1xuICAgIGNvbnN0IGhleGVzID0gdGhpcy5tYXRjaCgvLnsxLDR9L2cpIHx8IFtdO1xuICAgIGxldCBiYWNrID0gJyc7XG4gICAgZm9yIChqID0gMDsgaiA8IGhleGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGJhY2sgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXhlc1tqXSwgMTYpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJhY2s7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5jYXBpdGFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcbn07XG5TdHJpbmcucHJvdG90eXBlLnJvdDEzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL1thLXpBLVpdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKChjIDw9ICdaJyA/IDkwIDogMTIyKSA+PSAoYyA9IGMuY2hhckNvZGVBdCgwKSArIDEzKSA/IGMgOiBjIC0gMjYpO1xuICAgIH0pO1xufTtcblN0cmluZy5wcm90b3R5cGUudHJ1bmNhdGUgPSBmdW5jdGlvbiAobiwgdXNlV29yZEJvdW5kYXJ5KSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoIDw9IG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbnN0IHN1YlN0cmluZyA9IHRoaXMuc3Vic3RyKDAsIG4gLSAxKTsgLy8gdGhlIG9yaWdpbmFsIGNoZWNrXG4gICAgcmV0dXJuICh1c2VXb3JkQm91bmRhcnkgPyBzdWJTdHJpbmcuc3Vic3RyKDAsIHN1YlN0cmluZy5sYXN0SW5kZXhPZignICcpKSA6IHN1YlN0cmluZykgKyAnJmhlbGxpcDsnO1xufTtcblN0cmluZy5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcyAhPSBudWxsIHx8IHR5cGVvZiB0aGlzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy50cmltKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5TdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBcnIgPSBmdW5jdGlvbiAoYXJyYXksIHJlcGxhY2VtZW50KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgbGV0IG9yaSA9IHRoaXM7XG4gICAgYXJyYXkubWFwKChzdHIpID0+IHtcbiAgICAgICAgb3JpID0gb3JpLnJlcGxhY2Uoc3RyLCByZXBsYWNlbWVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9yaTtcbn07XG5TdHJpbmcucHJvdG90eXBlLnRvSHRtbEVudGl0aWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoLy4vZ20sIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIC8vIHJldHVybiBcIiYjXCIgKyBzLmNoYXJDb2RlQXQoMCkgKyBcIjtcIjtcbiAgICAgICAgcmV0dXJuIHMubWF0Y2goL1thLXowLTlcXHNdKy9pKSA/IHMgOiAnJiMnICsgcy5jaGFyQ29kZUF0KDApICsgJzsnO1xuICAgIH0pO1xufTtcblN0cmluZy5mcm9tSHRtbEVudGl0aWVzID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiAoc3RyICsgJycpLnJlcGxhY2UoLyYjXFxkKzsvZ20sIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIGNvbnN0IG0gPSBzLm1hdGNoKC9cXGQrL2dtKVswXTtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUobSk7XG4gICAgfSk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc0FycmF5ID0gZnVuY3Rpb24gKHN1YnN0cmluZ3MpIHtcbiAgICByZXR1cm4gc3Vic3RyaW5ncy5zb21lKCh2KSA9PiB0aGlzLmluY2x1ZGVzKHYpKTtcbn07XG5pZiAodHlwZW9mICcnLnJlcGxhY2VBbGwgIT0gJ2Z1bmN0aW9uJykge1xuICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZUFsbCA9IGZ1bmN0aW9uIChzZWFyY2gsIHJlcGxhY2VtZW50KSB7XG4gICAgICAgIGNvbnN0IGZpbmQgPSB0eXBlb2Ygc2VhcmNoID09ICdzdHJpbmcnID8gbmV3IFJlZ0V4cChzZWFyY2gsICdnJykgOiBzZWFyY2g7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoZmluZCwgcmVwbGFjZW1lbnQpO1xuICAgIH07XG59XG4iXX0=
