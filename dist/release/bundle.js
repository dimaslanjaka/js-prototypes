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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFueS5qcyIsIkFycmF5LmpzIiwiQ2xhc3MuanMiLCJEYXRlLmpzIiwiRG9jdW1lbnQuanMiLCJFcnJvci5qcyIsIkZ1bmN0aW9uLmpzIiwiTmF2aWdhdG9yLmpzIiwiTnVtYmVyLmpzIiwiT2JqZWN0LmpzIiwiU3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gbnVsbDtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgYW55OiBudWxsLFxuICAgIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvdHJpcGxlLXNsYXNoLXJlZmVyZW5jZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXJlc3QtcGFyYW1zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2dsb2JhbHMuZC50c1wiIC8+XG5BcnJheS5wcm90b3R5cGUuc2h1ZmZsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgaSA9IHRoaXMubGVuZ3RoLCBqLCB0ZW1wO1xuICAgIGlmIChpID09IDApXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIHdoaWxlICgtLWkpIHtcbiAgICAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICB0ZW1wID0gdGhpc1tpXTtcbiAgICAgICAgdGhpc1tpXSA9IHRoaXNbal07XG4gICAgICAgIHRoaXNbal0gPSB0ZW1wO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5BcnJheS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKCFuKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLmxlbmd0aCAtIG47XG4gICAgICAgIGlmIChzdGFydCA8IDApXG4gICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzLnNsaWNlKHN0YXJ0LCB0aGlzLmxlbmd0aCk7XG4gICAgfVxufTtcbkFycmF5LnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1hcCgoc3RyKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RyID09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcmV0dXJuIHN0ci50cmltKCk7XG4gICAgfSk7XG59O1xuQXJyYXkucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSAwO1xufTtcbkFycmF5LnByb3RvdHlwZS5yYW5nZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgaWYgKGVuZCA8IHN0YXJ0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xufTtcbkFycmF5LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHRoaXMucHVzaChlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5BcnJheS5wcm90b3R5cGUuYWRkQWxsID0gZnVuY3Rpb24gKG90aGVycykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIG90aGVycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHNlbGYucHVzaChlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbn07XG5BcnJheS5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGVuZ3RoKV07XG59O1xuQXJyYXkucHJvdG90eXBlLnVuaXF1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhID0gdGhpcy5jb25jYXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgYS5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgaWYgKGFbaV0gPT09IGFbal0pXG4gICAgICAgICAgICAgICAgYS5zcGxpY2Uoai0tLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbn07XG5BcnJheS5wcm90b3R5cGUudW5pcXVlU3RyaW5nQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZmlsdGVyID0gbmV3IE1hcCh0aGlzLm1hcCgocykgPT4gW3MudG9Mb3dlckNhc2UoKSwgc10pKTtcbiAgICByZXR1cm4gWy4uLmZpbHRlci52YWx1ZXMoKV07XG59O1xuQXJyYXkucHJvdG90eXBlLnVuaXF1ZU9iamVjdEtleSA9IGZ1bmN0aW9uIChrZXksIHJlbW92ZU51bGwgPSB0cnVlKSB7XG4gICAgaWYgKCFrZXkpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHJlc0FyciA9IFtdO1xuICAgIHRoaXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGNvbnN0IGkgPSByZXNBcnIuZmluZEluZGV4KCh4KSA9PiB4W2tleV0gPT0gaXRlbVtrZXldKTtcbiAgICAgICAgaWYgKGkgPD0gLTEpIHtcbiAgICAgICAgICAgIGlmIChyZW1vdmVOdWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1ba2V5XSlcbiAgICAgICAgICAgICAgICAgICAgcmVzQXJyLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNBcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzQXJyO1xufTtcbkFycmF5LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBsZXQgaSA9IHRoaXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWYgKHRoaXNbaV0gPT09IG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbkFycmF5LnByb3RvdHlwZS5oYXNJbmRleCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzW25dICE9ICd1bmRlZmluZWQnO1xufTtcbkFycmF5LnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKCFuKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiB0aGlzWzBdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICByZXR1cm4gdGhpcy5zbGljZSgwLCBuKTtcbiAgICB9XG59O1xuQXJyYXkucHJvdG90eXBlLmNvbXBhY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy92YXIgY2hhbmdlcyA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBJZiBlbGVtZW50IGlzIG5vbi1leGlzdGVudCwgdW5kZWZpbmVkIG9yIG51bGwsIHJlbW92ZSBpdC5cbiAgICAgICAgaWYgKCF0aGlzW2ldKSB7XG4gICAgICAgICAgICB0aGlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGkgPSBpIC0gMTtcbiAgICAgICAgICAgIC8vY2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9pZiAoIWNoYW5nZXMpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuQXJyYXkucHJvdG90eXBlLmRlbGV0ZUF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgMClcbiAgICAgICAgaW5kZXggPSB0aGlzLmxlbmd0aCArIGluZGV4O1xuICAgIC8vIElmIGVsZW1lbnQgaXMgbm9uLWV4aXN0ZW50LCByZXR1cm4gdW5kZWZpbmVkOlxuICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShpbmRleCkpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3QgZWxlbSA9IHRoaXNbaW5kZXhdO1xuICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gZWxlbTtcbn07XG5BcnJheS5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbmRleE9mKHZhbHVlKSAhPSAtMSkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHZhbHVlIGV4aXN0c1xuICAgICAgICB0aGlzLnNwbGljZSh0aGlzLmluZGV4T2YodmFsdWUpLCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuQXJyYXkucHJvdG90eXBlLmV4aXN0cyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzW25dICE9PSAndW5kZWZpbmVkJztcbn07XG5pZiAoIUFycmF5LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnZXZlcnknKSkge1xuICAgIEFycmF5LnByb3RvdHlwZS5ldmVyeSA9IGZ1bmN0aW9uIChmdW4gLyosIHRoaXNwICovKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgICAgY29uc3QgdCA9IE9iamVjdCh0aGlzKTtcbiAgICAgICAgY29uc3QgbGVuID0gdC5sZW5ndGggPj4+IDA7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBjb25zdCB0aGlzcCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZnVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiB0ICYmICFmdW4uY2FsbCh0aGlzcCwgdFtpXSwgaSwgdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cbkFycmF5LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgY29uc3QgaXRlbVJlbW92ZWQgPSB0aGlzLnNwbGljZShmcm9tLCAxKTsgLy8gc3BsaWNlKCkgcmV0dXJucyB0aGUgcmVtb3ZlIGVsZW1lbnQgYXMgYW4gYXJyYXlcbiAgICB0aGlzLnNwbGljZSh0bywgMCwgaXRlbVJlbW92ZWRbMF0pOyAvLyBJbnNlcnQgaXRlbVJlbW92ZWQgaW50byB0aGUgdGFyZ2V0IGluZGV4XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuQXJyYXkucHJvdG90eXBlLmhhcHVzSXRlbURhcmlBcnJheUxhaW4gPSBmdW5jdGlvbiAoLi4uYXJyYXlMYWluKSB7XG4gICAgbGV0IHRoaXNBcnIgPSB0aGlzO1xuICAgIGFycmF5TGFpbi5mb3JFYWNoKChvdGhlckFycikgPT4ge1xuICAgICAgICB0aGlzQXJyID0gdGhpc0Fyci5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gIW90aGVyQXJyLmluY2x1ZGVzKGVsKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXNBcnI7XG59O1xuQXJyYXkucHJvdG90eXBlLnJlbW92ZUVtcHRpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGNvbnN0IG5vdG51bGwgPSBcbiAgICAgICAgLy8gbWFrZSBzdXJlIGVsZW1lbnQgaXMgbm90IG51bGxcbiAgICAgICAgZWwgIT0gbnVsbCAmJlxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGVsZW1lbnQgaXMgbm90IHVuZGVmaW5lZFxuICAgICAgICAgICAgdHlwZW9mIGVsICE9ICd1bmRlZmluZWQnO1xuICAgICAgICAvLyBpZiBlbGVtZW50IGlzIHN0cmluZywgbWFrZSBzdXJlIHN0cmluZyBsZW5ndGggbm90IHplcm9cbiAgICAgICAgaWYgKHR5cGVvZiBlbCA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIG5vdG51bGwgJiYgZWwudHJpbSgpLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vdG51bGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcjtcbn07XG5jbGFzcyBhcnJheV9leHQge1xuICAgIHN0YXRpYyBhcnJheV9maWx0ZXIoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBlbCAhPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogcGljayByYW5kb20gZnJvbSBhcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyYXlzXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1bmlxdWUgVW5pcXVlIHRoZSBhcnJheXNcbiAgICAgKi9cbiAgICBzdGF0aWMgYXJyYXlfcmFuZChhcnJheXMsIHVuaXF1ZSkge1xuICAgICAgICBpZiAodW5pcXVlKSB7XG4gICAgICAgICAgICBhcnJheXMgPSBhcnJheV9leHQuYXJyYXlfdW5pcXVlKGFycmF5cyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheXMubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIHZhbHVlOiBhcnJheXNbaW5kZXhdLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcnJheSB1bmlxdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5PGFueT59IGFycmF5c1xuICAgICAqL1xuICAgIHN0YXRpYyBhcnJheV91bmlxdWUoYXJyYXlzKSB7XG4gICAgICAgIHJldHVybiBhcnJheXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBwb3MsIHNlbGYpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YoaXRlbSkgPT0gcG9zO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW5zZXQgYXJyYXlcbiAgICAgKiBAcGFyYW0ge0FycmF5PGFueT59IGFycmF5TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bWJlcn0ga2V5XG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgIHN0YXRpYyBhcnJheV91bnNldChhcnJheU5hbWUsIGtleSkge1xuICAgICAgICBsZXQgeDtcbiAgICAgICAgY29uc3QgdG1wQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh4IGluIGFycmF5TmFtZSkge1xuICAgICAgICAgICAgaWYgKHggIT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgdG1wQXJyYXlbeF0gPSBhcnJheU5hbWVbeF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRtcEFycmF5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQSFAgc2h1ZmZsZSBhcnJheSBlcXVpdmFsZW50XG4gICAgICogQHBhcmFtIGFycmF5XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB2YXIgYXJyID0gWzIsIDExLCAzNywgNDJdO1xuICAgICAqIHNodWZmbGUoYXJyKTtcbiAgICAgKiBjb25zb2xlLmxvZyhhcnIpOyAvL3JldHVybiByYW5kb21cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgc3RhdGljIHNodWZmbGUoYXJyYXkpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgc3RhdGljIGFycmF5Q29tcGFyZShhMSwgYTIpIHtcbiAgICAgICAgaWYgKGExLmxlbmd0aCAhPSBhMi5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGEyLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGExW2ldICE9PSBhMltpXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGluX2FycmF5IFBIUCBlcXVpdmFsZW50XG4gICAgICogQHBhcmFtIG5lZWRsZSBzdHJpbmcgZXRjXG4gICAgICogQHBhcmFtIGhheXN0YWNrXG4gICAgICovXG4gICAgc3RhdGljIGluQXJyYXkobmVlZGxlLCBoYXlzdGFjaykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBoYXlzdGFjay5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGF5c3RhY2tbaV0gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlfZXh0LmFycmF5Q29tcGFyZShoYXlzdGFja1tpXSwgbmVlZGxlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaGF5c3RhY2tbaV0gPT0gbmVlZGxlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGluX2FycmF5IFBIUCBlcXVpdmFsZW50XG4gICAgICogQHBhcmFtIG5lZWRsZSBzdHJpbmcgZXRjXG4gICAgICogQHBhcmFtIGhheXN0YWNrXG4gICAgICovXG4gICAgc3RhdGljIGluX2FycmF5KG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICAgICAgcmV0dXJuIGFycmF5X2V4dC5pbkFycmF5KG5lZWRsZSwgaGF5c3RhY2spO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBnZXQgYWxsIGtleXNcbiAgICAgKiBAcGFyYW0gaGF5c3RhY2sgc3RyaW5nIGV0Y1xuICAgICAqL1xuICAgIHN0YXRpYyBhcnJheV9rZXlzKGhheXN0YWNrKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhoYXlzdGFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNodWZmbGVzIGFycmF5IGluIHBsYWNlLlxuICAgICAqIEBwYXJhbSBhIGl0ZW1zIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIGl0ZW1zLlxuICAgICAqL1xuICAgIHN0YXRpYyBhcnJheV9zaHVmZmxlKGEpIHtcbiAgICAgICAgbGV0IGosIHgsIGk7XG4gICAgICAgIGZvciAoaSA9IGEubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgeCA9IGFbaV07XG4gICAgICAgICAgICBhW2ldID0gYVtqXTtcbiAgICAgICAgICAgIGFbal0gPSB4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWVwIG1lcmdlIHR3byBvciBtb3JlIG9iamVjdHMgaW50byB0aGUgZmlyc3QuXG4gICAgICogKGMpIDIwMjEgQ2hyaXMgRmVyZGluYW5kaSwgTUlUIExpY2Vuc2UsIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbVxuICAgICAqIEBwYXJhbSBvYmplY3RzICBUaGUgb2JqZWN0cyB0byBtZXJnZSB0b2dldGhlclxuICAgICAqIEByZXR1cm5zIE1lcmdlZCB2YWx1ZXMgb2YgZGVmYXVsdHMgYW5kIG9wdGlvbnNcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVlcEFzc2lnbiguLi5vYmplY3RzKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBhcmUgb2JqZWN0cyB0byBtZXJnZVxuICAgICAgICBjb25zdCBsZW4gPSBvYmplY3RzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA8IDEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChsZW4gPCAyKVxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdHNbMF07XG4gICAgICAgIC8vIE1lcmdlIGFsbCBvYmplY3RzIGludG8gZmlyc3RcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3RzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhbiBvYmplY3QsIHJlY3Vyc2l2ZWx5IG1lcmdlXG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgcHVzaCB0byBrZXlcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3RzW2ldW2tleV0pID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0c1swXVtrZXldID0gYXJyYXlfZXh0LmRlZXBBc3NpZ24ob2JqZWN0c1swXVtrZXldIHx8IHt9LCBvYmplY3RzW2ldW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0c1swXVtrZXldID0gb2JqZWN0c1tpXVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBpdGVtIGZyb20gYXJyYXlcbiAgICAgKiBAcGFyYW0gYXJyXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlSXRlbShhcnIsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YodmFsdWUpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG59XG4vKlxuaWYgKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IGluc3RhbmNlb2YgV2luZG93KSB7XG4gIHdpbmRvdy5hcnJheV9zaHVmZmxlID0gYXJyYXlfZXh0LmFycmF5X3NodWZmbGU7XG4gIHdpbmRvdy5hcnJheV9maWx0ZXIgPSBhcnJheV9leHQuYXJyYXlfZmlsdGVyO1xuICB3aW5kb3cuYXJyYXlfa2V5cyA9IGFycmF5X2V4dC5hcnJheV9rZXlzO1xuICB3aW5kb3cuYXJyYXlfcmFuZCA9IGFycmF5X2V4dC5hcnJheV9yYW5kO1xuICB3aW5kb3cuYXJyYXlfdW5pcXVlID0gYXJyYXlfZXh0LmFycmF5X3VuaXF1ZTtcbiAgd2luZG93LmFycmF5X3Vuc2V0ID0gYXJyYXlfZXh0LmFycmF5X3Vuc2V0O1xuICB3aW5kb3cuaW5BcnJheSA9IGFycmF5X2V4dC5pbkFycmF5O1xuICB3aW5kb3cuaW5fYXJyYXkgPSBhcnJheV9leHQuaW5fYXJyYXk7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcpIHtcbiAgZ2xvYmFsLmFycmF5X3NodWZmbGUgPSBhcnJheV9leHQuYXJyYXlfc2h1ZmZsZTtcbiAgZ2xvYmFsLmFycmF5X2ZpbHRlciA9IGFycmF5X2V4dC5hcnJheV9maWx0ZXI7XG4gIGdsb2JhbC5hcnJheV9rZXlzID0gYXJyYXlfZXh0LmFycmF5X2tleXM7XG4gIGdsb2JhbC5hcnJheV9yYW5kID0gYXJyYXlfZXh0LmFycmF5X3JhbmQ7XG4gIGdsb2JhbC5hcnJheV91bmlxdWUgPSBhcnJheV9leHQuYXJyYXlfdW5pcXVlO1xuICBnbG9iYWwuYXJyYXlfdW5zZXQgPSBhcnJheV9leHQuYXJyYXlfdW5zZXQ7XG4gIGdsb2JhbC5pbkFycmF5ID0gYXJyYXlfZXh0LmluQXJyYXk7XG4gIGdsb2JhbC5pbl9hcnJheSA9IGFycmF5X2V4dC5pbl9hcnJheTtcbn1cbiovXG4vLyBleHBvcnQgbm9kZSBtb2R1bGVcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gYXJyYXlfZXh0O1xuICAgIGV4cG9ydHMgPSBhcnJheV9leHQ7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbi8qKlxuICogR2V0IGFsbCBtZXRob2QgZnJvbSBjbGFzc1xuICogQHBhcmFtIHRvQ2hlY2tcbiAqIEByZXR1cm5zXG4gKi9cbmNvbnN0IGdldEFsbE1ldGhvZHMgPSBmdW5jdGlvbiAodG9DaGVjaykge1xuICAgIGlmICghdG9DaGVjaylcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gW107XG4gICAgICAgIGxldCBvYmogPSB0b0NoZWNrO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBwcm9wcy5wdXNoKC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikpO1xuICAgICAgICB9IHdoaWxlICgob2JqID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpKTtcbiAgICAgICAgcmV0dXJuIHByb3BzXG4gICAgICAgICAgICAuc29ydCgpXG4gICAgICAgICAgICAuZmlsdGVyKChlLCBpLCBhcnJfZm5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0b0NoZWNrW2VdO1xuICAgICAgICAgICAgY29uc3QgZm5hbWUgPSBhcnJfZm5hbWVbaSArIDFdO1xuICAgICAgICAgICAgaWYgKGUgIT0gZm5hbWUgJiYgdHlwZW9mIGMgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGZuYW1lKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIVtcbiAgICAgICAgICAgICAgICAnX19kZWZpbmVHZXR0ZXJfXycsXG4gICAgICAgICAgICAgICAgJ19fZGVmaW5lU2V0dGVyX18nLFxuICAgICAgICAgICAgICAgICdfX2xvb2t1cEdldHRlcl9fJyxcbiAgICAgICAgICAgICAgICAnX19sb29rdXBTZXR0ZXJfXycsXG4gICAgICAgICAgICAgICAgJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICAnaGFzT3duUHJvcGVydHknLFxuICAgICAgICAgICAgICAgICdpc1Byb3RvdHlwZU9mJyxcbiAgICAgICAgICAgICAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAgICAgICAgICAgICAgICd0b0xvY2FsZVN0cmluZycsXG4gICAgICAgICAgICAgICAgJ3RvU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAndmFsdWVPZicsXG4gICAgICAgICAgICBdLmluY2x1ZGVzKGZuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0b0NoZWNrKS5maWx0ZXIoKHByb3ApID0+IHR5cGVvZiB0b0NoZWNrW3Byb3BdID09PSAnZnVuY3Rpb24nKTtcbiAgICB9XG59O1xuIiwiRGF0ZS5wcm90b3R5cGUuaXNIb3VyQWdvID0gZnVuY3Rpb24gKGhvdXIpIHtcbiAgICBob3VyID0gaG91ciAqIDYwICogMTAwMDsgLyogbXMgKi9cbiAgICBjb25zdCBob3VyYWdvID0gRGF0ZS5ub3coKSAtIGhvdXI7XG4gICAgcmV0dXJuIGhvdXIgPiBob3VyYWdvO1xufTtcbmlmICghRGF0ZS5ub3cpIHtcbiAgICBEYXRlLm5vdyA9IGZ1bmN0aW9uIG5vdygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH07XG59XG5EYXRlLnByb3RvdHlwZS5hZGRIb3VycyA9IGZ1bmN0aW9uIChoKSB7XG4gICAgdGhpcy5zZXRUaW1lKHRoaXMuZ2V0VGltZSgpICsgaCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAvL3RoaXMuc2V0SG91cnModGhpcy5nZXRIb3VycygpK2gpO1xuICAgIHJldHVybiB0aGlzO1xufTtcbkRhdGUucHJvdG90eXBlLmFkZEhvdXJzMiA9IGZ1bmN0aW9uIChocnMpIHtcbiAgICB0aGlzLnNldEhvdXJzKHRoaXMuZ2V0SG91cnMoKSArIGhycyk7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuY2xhc3MgZGF0ZV9leHQge1xuICAgIHN0YXRpYyBkYXRldGltZV9sb2NhbChkYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0pTT04oKS5zbGljZSgwLCAxOSk7XG4gICAgfVxufVxuaWYgKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IGluc3RhbmNlb2YgV2luZG93KSB7XG4gICAgd2luZG93LmRhdGV0aW1lX2xvY2FsID0gZGF0ZV9leHQuZGF0ZXRpbWVfbG9jYWw7XG59XG5lbHNlIGlmICh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnKSB7XG4gICAgZ2xvYmFsLmRhdGV0aW1lX2xvY2FsID0gZGF0ZV9leHQuZGF0ZXRpbWVfbG9jYWw7XG59XG5pZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkYXRlX2V4dDtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZGF0ZXRpbWVfbG9jYWw6IGRhdGVfZXh0LmRhdGV0aW1lX2xvY2FsLFxuICAgIH07XG59XG4iLCJpZiAodHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgRG9jdW1lbnQucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIChldmVudFR5cGUsIGxpc3RlbmVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiIsImlmICghKCd0b0pTT04nIGluIEVycm9yLnByb3RvdHlwZSkpIHtcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTgzOTE0MDAvNjQwNDQzOVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFcnJvci5wcm90b3R5cGUsICd0b0pTT04nLCB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBhbHQgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGFsdFtrZXldID0gdGhpc1trZXldO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gYWx0O1xuICAgICAgICB9LFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2dsb2JhbHMuZC50c1wiIC8+XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5GdW5jdGlvbi5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgIGlmICghdGhpcy53YXNDYWxsZWQpIHtcbiAgICAgICAgdGhpcy5hcHBseShwYXJhbSk7XG4gICAgICAgIHRoaXMud2FzQ2FsbGVkID0gdHJ1ZTtcbiAgICB9XG59O1xuLyoqXG4gKiBSdW4gdGhlIGZ1bmN0aW9uIG9ubHkgb25jZVxuICogQHBhcmFtIGZuXG4gKiBAc2VlIHtAbGluayBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDEwMDA1MzUvNjQwNDQzOX1cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIHJ1bk9uY2UoZm4pIHtcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmlmICh0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgcnVuT25jZSxcbiAgICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4vKmRlY2xhcmUgbGV0IE5hdmlnYXRvcjoge1xuICBwcm90b3R5cGU6IE5hdmlnYXRvcjtcbiAgbmV3ICgpOiBOYXZpZ2F0b3I7XG59OyovXG4iLCJOdW1iZXIucHJvdG90eXBlLmdldE1TID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gdGhpcyAqIDYwICogMTAwMDtcbn07XG5OdW1iZXIucHJvdG90eXBlLmFkZEhvdXIgPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgSG91ciA9IHRoaXMgKiA2MCAqIDEwMDA7IC8qIG1zICovXG4gICAgaWYgKCFzb3VyY2UpXG4gICAgICAgIHNvdXJjZSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHNvdXJjZS5nZXRUaW1lKCkgKyBIb3VyKS5nZXRUaW1lKCk7XG59O1xuTnVtYmVyLnByb3RvdHlwZS5BZGRaZXJvID0gZnVuY3Rpb24gKGIsIGMpIHtcbiAgICBjb25zdCBsID0gU3RyaW5nKGIgfHwgMTApLmxlbmd0aCAtIFN0cmluZyh0aGlzKS5sZW5ndGggKyAxO1xuICAgIHJldHVybiBsID4gMCA/IG5ldyBBcnJheShsKS5qb2luKGMgfHwgXCIwXCIpICsgdGhpcyA6IHRoaXM7XG59O1xuLyoqXG4gKiBPZGQgb3IgRXZlbiAoR2FuamlsIEdlbmFwKTtcbiAqIEBwYXJhbSBuXG4gKiBAcGFyYW0gdHlwZSBvZGQgb3IgZXZlblxuICovXG5mdW5jdGlvbiBvZGRvcmV2ZW4obiwgdHlwZSkge1xuICAgIGlmICghdHlwZSkge1xuICAgICAgICB0eXBlID0gXCJvZGRcIjtcbiAgICB9XG4gICAgY29uc3QgdGltZSA9ICFuID8gbmV3IERhdGUoKS5nZXREYXkoKSA6IE51bWJlcihuKTtcbiAgICBpZiAoIS9eLT9cXGQralF1ZXJ5Ly50ZXN0KHRpbWUudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgYWxlcnQoXCJhcmd1bWVudHMgaXMgbm90IG51bWJlciwgcGxlYXNlIHJlbW92ZSBxdW90ZVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGhhc2lsID0gdGltZSAlIDI7XG4gICAgY29uc3QgclR5cGUgPSAvXihvZGR8Z2FuamlsKSQvLnRlc3QodHlwZSkgPyBcIjFcIiA6IFwiMFwiO1xuICAgIC8vcmV0dXJuIGhhc2lsID09ICh0eXBlID09ICgnb2RkJyB8fCAnZ2FuamlsJykgPyAxIDogMCk7XG4gICAgcmV0dXJuIGhhc2lsLnRvU3RyaW5nKCkgPT0gclR5cGUudG9TdHJpbmcoKTtcbn1cbi8qKlxuICogc3RycGFkIC8gc3RhcnR3aXRoIHplcm8gWzBdXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsXG4gKi9cbmZ1bmN0aW9uIHN0cnBhZCh2YWwpIHtcbiAgICBpZiAodmFsID49IDEwKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gXCIwXCIgKyB2YWw7XG4gICAgfVxufVxuLyoqXG4gKiBpcyB2YXJpYWJsZSBudW1iZXI/XG4gKiBAcGFyYW0gblxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gaXNJbnQobikge1xuICAgIHJldHVybiBOdW1iZXIobikgPT09IG4gJiYgbiAlIDEgPT09IDA7XG59XG4vKipcbiAqIGlzIHZhcmlhYmxlIGZsb2F0P1xuICogQHBhcmFtIG5cbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIGlzRmxvYXQobikge1xuICAgIHJldHVybiBOdW1iZXIobikgPT09IG4gJiYgbiAlIDEgIT09IDA7XG59XG5pZiAodHlwZW9mIG1vZHVsZS5leHBvcnRzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLmlzSW50ID0gaXNJbnQ7XG4gICAgZ2xvYmFsLmlzRmxvYXQgPSBpc0Zsb2F0O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC90cmlwbGUtc2xhc2gtcmVmZXJlbmNlICovXG5PYmplY3Quc2l6ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBsZXQgc2l6ZSA9IDAsIGtleTtcbiAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgc2l6ZSsrO1xuICAgIH1cbiAgICByZXR1cm4gc2l6ZTtcbn07XG5PYmplY3QuY2hpbGQgPSBmdW5jdGlvbiAoc3RyLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KHN0cikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soc2VsZltzdHJdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn07XG5PYmplY3QuYWx0ID0gZnVuY3Rpb24gKHN0ciwgYWx0ZXJuYXRpdmUpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoc2VsZi5oYXNPd25Qcm9wZXJ0eShzdHIpKSB7XG4gICAgICAgIHJldHVybiBzZWxmW3N0cl07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYWx0ZXJuYXRpdmU7XG4gICAgfVxufTtcbk9iamVjdC5oYXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzT3duUHJvcGVydHkoc3RyKTtcbn07XG5PYmplY3QuZWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMpIHtcbiAgICAgICAgLy9jYWxsYmFjay5jYWxsKHNjb3BlLCBrZXksIHRoaXNba2V5XSk7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc1trZXldKTtcbiAgICB9XG59O1xuT2JqZWN0LmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSAwO1xufTtcbk9iamVjdC5yZXBsYWNlS2V5RnJvbSA9IGZ1bmN0aW9uIChhbm90aGVyT2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMpLnJlZHVjZSgob3AsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdLZXkgPSBhbm90aGVyT2JqW2tleV07XG4gICAgICAgIG9wW25ld0tleSB8fCBrZXldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBvcDtcbiAgICB9LCB7fSk7XG4gICAgLyppZiAodHlwZW9mIGFub3RoZXJPYmogPT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGFub3RoZXJPYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhbm90aGVyT2JqLCBrZXkpKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFub3RoZXJPYmpba2V5XTtcbiAgICAgICAgICBkZWZba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9Ki9cbn07XG5jbGFzcyBvYmplY3RfZXh0IHtcbiAgICAvKipcbiAgICAgKiBKb2luIG9iamVjdCB0byBzZXBhcmF0ZWQgc3RyaW5nXG4gICAgICogKiBbXS5qb2luKCkgZXF1aXZhbGVudFxuICAgICAqIEBwYXJhbSBvYmogT2JqZWN0XG4gICAgICogQHBhcmFtIHNlcGFyYXRvciBkZWZhdWx0IGNvbW1hKCwpXG4gICAgICogQHJldHVybnMgSm9pbmVkIHN0cmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyBvYmplY3Rfam9pbihvYmosIHNlcGFyYXRvciA9ICcsJykge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtrXTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKHNlcGFyYXRvcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNpbXBsZSBvYmplY3QgY2hlY2suXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBpc09iamVjdChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0XG4gICAgICogQHBhcmFtIC4uLnNvdXJjZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcykge1xuICAgICAgICBpZiAoIXNvdXJjZXMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuICAgICAgICBpZiAob2JqZWN0X2V4dC5pc09iamVjdCh0YXJnZXQpICYmIG9iamVjdF9leHQuaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdF9leHQuaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0W2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdF9leHQubWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3RfZXh0Lm1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICAgIH1cbn1cbk9iamVjdC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAoLi4ub3RoZXJzKSB7XG4gICAgcmV0dXJuIG9iamVjdF9leHQubWVyZ2VEZWVwKHRoaXMsIC4uLm90aGVycyk7XG59O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IGluc3RhbmNlb2YgV2luZG93KSB7XG4gICAgd2luZG93Lm9iamVjdF9qb2luID0gb2JqZWN0X2V4dC5vYmplY3Rfam9pbjtcbiAgICB3aW5kb3cub2JqZWN0X21lcmdlID0gb2JqZWN0X2V4dC5tZXJnZURlZXA7XG4gICAgd2luZG93LmlzT2JqZWN0ID0gb2JqZWN0X2V4dC5pc09iamVjdDtcbn1cbmVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcpIHtcbiAgICBnbG9iYWwub2JqZWN0X2pvaW4gPSBvYmplY3RfZXh0Lm9iamVjdF9qb2luO1xuICAgIGdsb2JhbC5vYmplY3RfbWVyZ2UgPSBvYmplY3RfZXh0Lm1lcmdlRGVlcDtcbiAgICBnbG9iYWwuaXNPYmplY3QgPSBvYmplY3RfZXh0LmlzT2JqZWN0O1xufVxuaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gb2JqZWN0X2V4dDtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgb2JqZWN0X2pvaW46IG9iamVjdF9leHQub2JqZWN0X2pvaW4sXG4gICAgICAgIG9iamVjdF9tZXJnZTogb2JqZWN0X2V4dC5tZXJnZURlZXAsXG4gICAgICAgIGlzT2JqZWN0OiBvYmplY3RfZXh0LmlzT2JqZWN0LFxuICAgIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1yZXN0LXBhcmFtcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3RyaXBsZS1zbGFzaC1yZWZlcmVuY2UgKi9cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJnbG9iYWxzLmQudHNcIiAvPlxuU3RyaW5nLnByb3RvdHlwZS5wcmludGYgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgLypjb25zdCBpc05vZGUgPSBuZXcgRnVuY3Rpb24oXG4gICAgICBcInRyeSB7cmV0dXJuIHRoaXM9PT1nbG9iYWw7fWNhdGNoKGUpe3JldHVybiBmYWxzZTt9XCJcbiAgICApO1xuICBcbiAgICBpZiAoaXNOb2RlKCkpIHtcbiAgICAgIGNvbnN0IHV0aWwgPSByZXF1aXJlKFwidXRpbFwiKTtcbiAgICAgIHJldHVybiB1dGlsLmZvcm1hdCh0aGlzLCBvYmopO1xuICAgIH0qL1xuICAgIGxldCB1c2VBcmd1bWVudHMgPSBmYWxzZTtcbiAgICBjb25zdCBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuICAgIGxldCBpID0gLTE7XG4gICAgaWYgKHR5cGVvZiBfYXJndW1lbnRzWzBdID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHVzZUFyZ3VtZW50cyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheSB8fCB1c2VBcmd1bWVudHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGlmICh1c2VBcmd1bWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF9hcmd1bWVudHNbaV0gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9hcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZ3VtZW50cyBlbGVtZW50IGlzIGFuIGludmFsaWQgdHlwZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmpbaV07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgveyhbXnt9XSopfS9nLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgY29uc3QgciA9IG9ialtiXTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHIgPT09ICdudW1iZXInID8gciA6IGE7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5TdHJpbmcucHJvdG90eXBlLnBhcnNlX3VybCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcGFyc2VyO1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIHBhcnNlciA9IG5ldyBVUkwodGhpcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaE9iamVjdCA9IFtdO1xuICAgIGxldCBzcGxpdCA9IFtdO1xuICAgIGxldCBxdWVyaWVzID0gW107XG4gICAgLy8gTGV0IHRoZSBicm93c2VyIGRvIHRoZSB3b3JrXG4gICAgcGFyc2VyLmhyZWYgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgLy8gQ29udmVydCBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0XG4gICAgcXVlcmllcyA9IHBhcnNlci5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKS5zcGxpdCgnJicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzcGxpdCA9IHF1ZXJpZXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aClcbiAgICAgICAgICAgIHNlYXJjaE9iamVjdFtzcGxpdFswXV0gPSBzcGxpdFsxXTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdG9jb2w6IHBhcnNlci5wcm90b2NvbCxcbiAgICAgICAgaG9zdDogcGFyc2VyLmhvc3QsXG4gICAgICAgIGhvc3RuYW1lOiBwYXJzZXIuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHBhcnNlci5wb3J0LFxuICAgICAgICBwYXRobmFtZTogcGFyc2VyLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2g6IHBhcnNlci5zZWFyY2gsXG4gICAgICAgIHNlYXJjaE9iamVjdDogc2VhcmNoT2JqZWN0LFxuICAgICAgICBoYXNoOiBwYXJzZXIuaGFzaCxcbiAgICAgICAgcHJvdG9ob3N0OiBwYXJzZXIucHJvdG9jb2wgKyAnLy8nICsgcGFyc2VyLmhvc3QsXG4gICAgfTtcbn07XG4vKipcbiAqIExvYWQgY3NzXG4gKi9cblN0cmluZy5wcm90b3R5cGUuQ1NTID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgZS5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgZS5ocmVmID0gdGhpcy50b1N0cmluZygpO1xuICAgIGNvbnN0IG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgICAgID8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsIG4pO1xuICAgICAgICB9LCAhMSlcbiAgICAgICAgOiB3aW5kb3cuYXR0YWNoRXZlbnRcbiAgICAgICAgICAgID8gd2luZG93LmF0dGFjaEV2ZW50KCdvbmxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLCBuKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6ICh3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSwgbik7XG4gICAgICAgICAgICB9KTtcbn07XG5TdHJpbmcucHJvdG90eXBlLnRyaW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZ20sICcnKTtcbn07XG5TdHJpbmcucHJvdG90eXBlLmhleEUgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGhleCwgaTtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGV4ID0gdGhpcy5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmVzdWx0ICs9ICgnMDAwJyArIGhleCkuc2xpY2UoLTQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblN0cmluZy5wcm90b3R5cGUuaGV4RCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgajtcbiAgICBjb25zdCBoZXhlcyA9IHRoaXMubWF0Y2goLy57MSw0fS9nKSB8fCBbXTtcbiAgICBsZXQgYmFjayA9ICcnO1xuICAgIGZvciAoaiA9IDA7IGogPCBoZXhlcy5sZW5ndGg7IGorKykge1xuICAgICAgICBiYWNrICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4ZXNbal0sIDE2KSk7XG4gICAgfVxuICAgIHJldHVybiBiYWNrO1xufTtcblN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5yb3QxMyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9bYS16QS1aXS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA8PSAnWicgPyA5MCA6IDEyMikgPj0gKGMgPSBjLmNoYXJDb2RlQXQoMCkgKyAxMykgPyBjIDogYyAtIDI2KTtcbiAgICB9KTtcbn07XG5TdHJpbmcucHJvdG90eXBlLnRydW5jYXRlID0gZnVuY3Rpb24gKG4sIHVzZVdvcmRCb3VuZGFyeSkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA8PSBuKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25zdCBzdWJTdHJpbmcgPSB0aGlzLnN1YnN0cigwLCBuIC0gMSk7IC8vIHRoZSBvcmlnaW5hbCBjaGVja1xuICAgIHJldHVybiAodXNlV29yZEJvdW5kYXJ5ID8gc3ViU3RyaW5nLnN1YnN0cigwLCBzdWJTdHJpbmcubGFzdEluZGV4T2YoJyAnKSkgOiBzdWJTdHJpbmcpICsgJyZoZWxsaXA7Jztcbn07XG5TdHJpbmcucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMgIT0gbnVsbCB8fCB0eXBlb2YgdGhpcyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDAgfHwgIXRoaXMudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQXJyID0gZnVuY3Rpb24gKGFycmF5LCByZXBsYWNlbWVudCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgIGxldCBvcmkgPSB0aGlzO1xuICAgIGFycmF5Lm1hcCgoc3RyKSA9PiB7XG4gICAgICAgIG9yaSA9IG9yaS5yZXBsYWNlKHN0ciwgcmVwbGFjZW1lbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBvcmk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS50b0h0bWxFbnRpdGllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8uL2dtLCBmdW5jdGlvbiAocykge1xuICAgICAgICAvLyByZXR1cm4gXCImI1wiICsgcy5jaGFyQ29kZUF0KDApICsgXCI7XCI7XG4gICAgICAgIHJldHVybiBzLm1hdGNoKC9bYS16MC05XFxzXSsvaSkgPyBzIDogJyYjJyArIHMuY2hhckNvZGVBdCgwKSArICc7JztcbiAgICB9KTtcbn07XG5TdHJpbmcuZnJvbUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gKHN0ciArICcnKS5yZXBsYWNlKC8mI1xcZCs7L2dtLCBmdW5jdGlvbiAocykge1xuICAgICAgICBjb25zdCBtID0gcy5tYXRjaCgvXFxkKy9nbSlbMF07XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKG0pO1xuICAgIH0pO1xufTtcblN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNBcnJheSA9IGZ1bmN0aW9uIChzdWJzdHJpbmdzKSB7XG4gICAgcmV0dXJuIHN1YnN0cmluZ3Muc29tZSgodikgPT4gdGhpcy5pbmNsdWRlcyh2KSk7XG59O1xuaWYgKHR5cGVvZiAnJy5yZXBsYWNlQWxsICE9ICdmdW5jdGlvbicpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBbGwgPSBmdW5jdGlvbiAoc2VhcmNoLCByZXBsYWNlbWVudCkge1xuICAgICAgICBjb25zdCBmaW5kID0gdHlwZW9mIHNlYXJjaCA9PSAnc3RyaW5nJyA/IG5ldyBSZWdFeHAoc2VhcmNoLCAnZycpIDogc2VhcmNoO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKGZpbmQsIHJlcGxhY2VtZW50KTtcbiAgICB9O1xufVxuIl19
