/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-prototype-builtins */
/// <reference path="./globals.d.ts" />
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0RBQXNEO0FBQ3RELHFEQUFxRDtBQUNyRCw4REFBOEQ7QUFDOUQsdUNBQXVDO0FBQ3ZDLDBDQUEwQztBQUMxQyx1Q0FBdUM7QUFzTHZDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHO0lBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQ2pCLENBQVMsRUFDVCxJQUFTLENBQUM7SUFDWixJQUFJLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDeEIsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDaEI7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUNoQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzlCO1NBQU07UUFDTCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLEtBQUssR0FBRyxDQUFDO1lBQUUsS0FB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QUFFLEVBQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQzFGO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ25DO2lCQUNGO2FBQ0Y7U0FDRjtRQUVELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxVQUFVLENBQUksR0FBYSxFQUFFLEtBQVE7UUFDMUMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0Y7QUFJRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFFRixxQkFBcUI7QUFDckIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtJQUNuRCxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixPQUFPLEdBQUcsU0FBUyxDQUFDO0NBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3RyaXBsZS1zbGFzaC1yZWZlcmVuY2UgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1yZXN0LXBhcmFtcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9nbG9iYWxzLmQudHNcIiAvPlxuXG4vKipcbiAqIEFycmF5c1xuICovXG5pbnRlcmZhY2UgQXJyYXk8VD4ge1xuICAvKipcbiAgICogVW5pcXVlIEFycmF5XG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBkdXBsaWNhdGUgPSBbMSwyLDEsMiwzLDQsNSw2XTtcbiAgICogdmFyIHVuaXF1ZSA9IGR1cGxpY2F0ZS51bmlxdWUoKTsgLy8gWzEsMiwzLDQsNSw2XVxuICAgKi9cbiAgdW5pcXVlOiAoKSA9PiBBcnJheTxUPjtcblxuICAvKipcbiAgICogVW5pcXVlIHN0cmluZyBhcnJheSBjYXNlIGluc2Vuc2l0aXZlIGJ1dCBrZWVwIG9uZSBjYXNlIHNlbnNpdGl2ZSByZXN1bHRcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ4NzMxNDQ1LzY0MDQ0Mzl9XG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnNvbGUubG9nKFsnSmFtZXMnLCAnamFtZXMnLCAnYm9iJywgJ0phTWVTJywgJ0JvYiddLnVuaXF1ZVN0cmluZ0FycmF5KCkpOyAvLyBbXCJKYU1lU1wiLCBcIkJvYlwiXVxuICAgKi9cbiAgdW5pcXVlU3RyaW5nQXJyYXk6ICgpID0+IEFycmF5PHN0cmluZz47XG5cbiAgLyoqXG4gICAqIE1vdmUgaXRlbSB0byBhbm90aGVyIGluZGV4XG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83MDYxODc5MS82NDA0NDM5fVxuICAgKi9cbiAgbW92ZTogKGZyb206IG51bWJlciwgdG86IG51bWJlcikgPT4gQXJyYXk8VD47XG5cbiAgLyoqXG4gICAqIFVuaXF1ZSBhcnJheSBvZiBvYmplY3RzIGJ5IGtleVxuICAgKiBAc2VlIHtAbGluayBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTE1Mzc4ODd9XG4gICAqIEBwYXJhbSBrZXkgb2JqZWN0IGtleSB0byBjaGVja1xuICAgKiBAcGFyYW0gcmVtb3ZlTnVsbCByZW1vdmUgbnVsbCBhbmQgdW5kZWZpbmVkIChkZWZhdWx0PXRydWUpXG4gICAqL1xuICB1bmlxdWVPYmplY3RLZXk6IChrZXk6IHN0cmluZywgcmVtb3ZlTnVsbD86IGJvb2xlYW4pID0+IEFycmF5PFQ+O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYXJyYXkgaXRlbSBmcm9tIG90aGVyIGFycmF5c1xuICAgKi9cbiAgaGFwdXNJdGVtRGFyaUFycmF5TGFpbjogKC4uLmFycmF5TGFpbjogYW55W10pID0+IGFueVtdO1xuXG4gIC8qKlxuICAgKiBQaWNrIDEgcmFuZG9tIGFycmF5IGVsZW1lbnRcbiAgICovXG4gIHJhbmRvbTogPFQ+KCkgPT4gVDtcblxuICAvKipcbiAgICogQWRkIEVsZW1lbnRcbiAgICogQHBhcmFtIGVsZW1lbnRcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIGEgPSBbMSwyXTtcbiAgICogYS5hZGQoMyk7XG4gICAqIGNvbnNvbGUubG9nKGEpOyAvLyBbMSwyLDNdXG4gICAqXG4gICAqIHZhciBiID0gWzAsOV07XG4gICAqIGNvbnNvbGUubG9nKGIuYWRkKDIpKTsgLy8gWzAsOSwyXVxuICAgKi9cbiAgYWRkKGVsZW1lbnQ6IGFueSk6IEFycmF5PFQ+O1xuXG4gIC8qKlxuICAgKiBBZGQgb3RoZXIgYXJyYXlcbiAgICogQHBhcmFtIG90aGVyQXJyYXlcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIGEgPSBbMCwxXTtcbiAgICogdmFyIGIgPSBbJ2EnLCdiJ107XG4gICAqIGNvbnNvbGUubG9nKGIuYWRkQWxsKGEpKTsgLy9bJ2EnLCdiJywwLDFdXG4gICAqIHZhciBjID0gWyd6JywxMF07XG4gICAqIGMuYWRkKGIpO1xuICAgKiBjb25zb2xlLmxvZyhjKTsgLy8gWyd6JywxMCwnYScsJ2InLDAsMV1cbiAgICovXG4gIGFkZEFsbChvdGhlckFycmF5OiBBcnJheTxUPik6IEFycmF5PFQ+O1xuXG4gIC8qKlxuICAgKiBHZXQgZWxlbWVudCBpbiByYW5nZSBmcm9tIGFycmF5XG4gICAqIEBwYXJhbSBzdGFydCBzdGFydCBudW1iZXIgaW5kZXhcbiAgICogQHBhcmFtIGVuZCBlbmQgbnVtYmVyIGluZGV4XG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IGFyciA9IFsxLCAyLCAzLCA0LCA1XTtcbiAgICogY29uc29sZS5sb2coYXJyLnJhbmdlKDEsIDMpKTtcbiAgICovXG4gIHJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQXJyYXk8VD47XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSAgaWYgc2VsZiBjb250YWlucyBubyBlbGVtZW50cy5cbiAgICovXG4gIGlzRW1wdHkoKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCwgb3IgdGhlIGZpcnN0IG4gZWxlbWVudHMsIG9mIHRoZSBhcnJheS5cbiAgICogSWYgdGhlIGFycmF5IGlzIGVtcHR5LCByZXF1ZXN0aW5nIG9uZSBlbGVtZW50IHJldHVybnMgdW5kZWZpbmVkICxcbiAgICogYW5kIHJlcXVlc3RpbmcgbXVsdGlwbGUgZWxlbWVudHMgcmV0dXJucyBhbiBlbXB0eSBhcnJheS5cbiAgICogQGV4YW1wbGVcbiAgICogICB2YXIgYSA9IFsgXCJxXCIsIFwiclwiLCBcInNcIiwgXCJ0XCIgXVxuICAgKiAgIGEuZmlyc3QoKSAgIC8vID0+IFwicVwiXG4gICAqICAgYS5maXJzdCgyKSAgLy8gPT4gW1wicVwiLCBcInJcIl1cbiAgICovXG4gIGZpcnN0KG46IG51bWJlcik6IEFycmF5PFQ+O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQocykgb2Ygc2VsZi5cbiAgICogSWYgdGhlIGFycmF5IGlzIGVtcHR5LCByZXR1cm5zIHVuZGVmaW5lZCAgaWYgb25seSBvbmUgZWxlbWVudCByZXF1ZXN0ZWQuXG4gICAqIEBleGFtcGxlXG4gICAqICAgdmFyIGEgPSBbIFwid1wiLCBcInhcIiwgXCJ5XCIsIFwielwiIF1cbiAgICogICBhLmxhc3QoKSAgICAgLy8gPT4gXCJ6XCJcbiAgICogICBhLmxhc3QoMikgICAgLy8gPT4gW1wieVwiLCBcInpcIl1cbiAgICovXG4gIGxhc3QobjogbnVtYmVyKTogQXJyYXk8VD47XG5cbiAgLyoqXG4gICAqIFVuc2V0IGVsZW1lbnQgdmFsdWUgZnJvbSBhcnJheVxuICAgKiBAcGFyYW0gbiB2YWx1ZSBlbGVtZW50XG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBhcnIgPSBbJ2EnLCdiJywnYyddO1xuICAgKiBhcnIudW5zZXQoJ2MnKTtcbiAgICogY29uc29sZS5sb2coYXJyKTsgLy8gWydhJywnYiddXG4gICAqL1xuICB1bnNldChuOiBhbnkpOiBBcnJheTxUPjtcblxuICAvKipcbiAgICogRGVsZXRlcyB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LCByZXR1cm5pbmcgdGhhdCBlbGVtZW50LCBvciB1bmRlZmluZWQgIGlmIHRoZSBpbmRleCBpcyBvdXQgb2YgcmFuZ2UuXG4gICAqIEEgbmVnYXRpdmUgaW5kZXggaXMgY291bnRlZCBmcm9tIHRoZSBlbmQgb2YgdGhlIGFycmF5LCB3aGVyZSAtMSBjb3JyZXNwb25kcyB0byB0aGUgbGFzdCBlbGVtZW50LiBSZXR1cm5zIHNlbGZcbiAgICogZm9yIGNoYWluaW5nIHB1cnBvc2VzLlxuICAgKiBAZXhhbXBsZVxuICAgKiAgIHZhciBhID0gW1wiYW50XCIsIFwiYmF0XCIsIFwiY2F0XCIsIFwiZG9nXCJdXG4gICAqICAgYS5kZWxldGVBdCgyKSAgICAvLyA9PiBcImNhdFwiXG4gICAqICAgYSAgICAgICAgICAgICAgICAvLyA9PiBbXCJhbnRcIiwgXCJiYXRcIiwgXCJkb2dcIl1cbiAgICogICBhLmRlbGV0ZUF0KDk5KSAgIC8vID0+IHVuZGVmaW5lZCAoYmVjYXVzZSBpbmRleCA5OSBub3QgZm91bmQpXG4gICAqICAgaWYoYS5kZWxldGVBdCgxKSkgY29uc29sZS5sb2coJ2l0ZW0gd2l0aCBpbmRleCAxIHJlbW92ZWQnKSAvLyBjb25kaXRpb25hbFxuICAgKi9cbiAgZGVsZXRlQXQobjogbnVtYmVyKTogQXJyYXk8VD47XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgbnVsbCAgYW5kIHVuZGVmaW5lZCAgZWxlbWVudHMgZnJvbSB0aGUgYXJyYXksIHR1cm5pbmcgaXQgaW50byBhIGRlbnNlIGFycmF5LlxuICAgKiBSZXR1cm5zIHNlbGYgZm9yIGNoYWluaW5nIHB1cnBvc2VzXG4gICAqL1xuICBjb21wYWN0KCk6IEFycmF5PFQ+O1xuXG4gIC8qKlxuICAgKiBDaGVjayBlbGVtZW50IGluZGV4IGV4aXN0c1xuICAgKiBAZXhhbXBsZVxuICAgKiBbJ2EnLCdiJ10uZXhpc3RzKDEpOyAvL3RydWVcbiAgICogWydhJywnYiddLmV4aXN0cyg0KTsgLy9mYWxzZVxuICAgKi9cbiAgZXhpc3RzKG46IG51bWJlcik6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENoZWNrIGFycmF5IGNvbnRhaW5zIHN0cmluZy9hbnlcbiAgICogQHBhcmFtIG9ialxuICAgKiBAZXhhbXBsZVxuICAgKiBhbGVydChbMSwgMiwgM10uY29udGFpbnMoMikpOyAvLyA9PiB0cnVlXG4gICAqIGFsZXJ0KFsxLCAyLCAzXS5jb250YWlucygnMicpKTsgLy8gPT4gZmFsc2VcbiAgICovXG4gIGNvbnRhaW5zKG9iajogYW55KTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYXJyYXkgb2Zmc2V0IChpbmRleCkgZXhpc3RzXG4gICAqIEBwYXJhbSBuXG4gICAqIEBleGFtcGxlXG4gICAqIGFsZXJ0KFt7fSwnYScsJ3gnXS5oYXNJbmRleCgyKSk7IC8vID0+IHRydWUgLSBhcnJheSBoYXMgb2Zmc2V0IDIgaXMgJ3gnXG4gICAqIGFsZXJ0KFt7fSwnYScsJ3gnXS5oYXNJbmRleCgzKSk7IC8vID0+IGZhbHNlXG4gICAqL1xuICBoYXNJbmRleChuOiBudW1iZXIpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaHVmZmxlIGFycmF5cy5cbiAgICogQGRlc2NyaXB0aW9uIFJhbmRvbWl6ZSBhcnJheSBlbGVtZW50c1xuICAgKiBAZXhhbXBsZVxuICAgKiBhbGVydChbMSwyLDMsNCw1XS5zaHVmZmxlKCkpXG4gICAqL1xuICBzaHVmZmxlKCk6IEFycmF5PFQ+O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgbnVsbCwgZW1wdHkgc3RyaW5nLCBvciB1bmRlZmluZWQgdmFsdWVzXG4gICAqL1xuICByZW1vdmVFbXB0aWVzKCk6IEFycmF5PFQ+O1xuXG4gIC8qKlxuICAgKiB0cmltIGFycmF5IG9mIHN0cmluZ3NcbiAgICovXG4gIHRyaW0oKTogQXJyYXk8c3RyaW5nPjtcbn1cblxuQXJyYXkucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBpID0gdGhpcy5sZW5ndGgsXG4gICAgajogbnVtYmVyLFxuICAgIHRlbXA6IGFueTtcbiAgaWYgKGkgPT0gMCkgcmV0dXJuIHRoaXM7XG4gIHdoaWxlICgtLWkpIHtcbiAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgdGVtcCA9IHRoaXNbaV07XG4gICAgdGhpc1tpXSA9IHRoaXNbal07XG4gICAgdGhpc1tqXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5BcnJheS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uIChuKSB7XG4gIGlmICghbikge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XG4gIH0gZWxzZSB7XG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5sZW5ndGggLSBuO1xuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMDtcblxuICAgIHJldHVybiB0aGlzLnNsaWNlKHN0YXJ0LCB0aGlzLmxlbmd0aCk7XG4gIH1cbn07XG5cbkFycmF5LnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5tYXAoKHN0cikgPT4ge1xuICAgIGlmICh0eXBlb2Ygc3RyID09ICdzdHJpbmcnKSByZXR1cm4gc3RyLnRyaW0oKTtcbiAgfSk7XG59O1xuXG5BcnJheS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSAwO1xufTtcblxuQXJyYXkucHJvdG90eXBlLnJhbmdlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgaWYgKGVuZCA8IHN0YXJ0KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiB0aGlzLnNsaWNlKHN0YXJ0LCBlbmQgKyAxKTtcbn07XG5cbkFycmF5LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB0aGlzLnB1c2goZWxlbWVudCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuQXJyYXkucHJvdG90eXBlLmFkZEFsbCA9IGZ1bmN0aW9uIChvdGhlcnM6IEFycmF5PGFueT4pIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIG90aGVycy5mb3JFYWNoKGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICBzZWxmLnB1c2goZSk7XG4gIH0pO1xuICByZXR1cm4gc2VsZjtcbn07XG5cbkFycmF5LnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGVuZ3RoKV07XG59O1xuXG5BcnJheS5wcm90b3R5cGUudW5pcXVlID0gZnVuY3Rpb24gKHRoaXM6IEFycmF5PGFueT4pIHtcbiAgY29uc3QgYSA9IHRoaXMuY29uY2F0KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGEubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmIChhW2ldID09PSBhW2pdKSBhLnNwbGljZShqLS0sIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhO1xufTtcblxuQXJyYXkucHJvdG90eXBlLnVuaXF1ZVN0cmluZ0FycmF5ID0gZnVuY3Rpb24gKHRoaXM6IEFycmF5PHN0cmluZz4pIHtcbiAgY29uc3QgZmlsdGVyID0gbmV3IE1hcCh0aGlzLm1hcCgocykgPT4gW3MudG9Mb3dlckNhc2UoKSwgc10pKTtcbiAgcmV0dXJuIFsuLi5maWx0ZXIudmFsdWVzKCldO1xufTtcblxuQXJyYXkucHJvdG90eXBlLnVuaXF1ZU9iamVjdEtleSA9IGZ1bmN0aW9uICh0aGlzOiBBcnJheTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sIGtleSwgcmVtb3ZlTnVsbCA9IHRydWUpIHtcbiAgaWYgKCFrZXkpIHJldHVybiB0aGlzO1xuICBjb25zdCByZXNBcnIgPSBbXTtcbiAgdGhpcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBjb25zdCBpID0gcmVzQXJyLmZpbmRJbmRleCgoeCkgPT4geFtrZXldID09IGl0ZW1ba2V5XSk7XG4gICAgaWYgKGkgPD0gLTEpIHtcbiAgICAgIGlmIChyZW1vdmVOdWxsKSB7XG4gICAgICAgIGlmIChpdGVtW2tleV0pIHJlc0Fyci5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzQXJyLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9KTtcbiAgcmV0dXJuIHJlc0Fycjtcbn07XG5cbkFycmF5LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgbGV0IGkgPSB0aGlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIGlmICh0aGlzW2ldID09PSBvYmopIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5BcnJheS5wcm90b3R5cGUuaGFzSW5kZXggPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpc1tuXSAhPSAndW5kZWZpbmVkJztcbn07XG5cbkFycmF5LnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uIChuKSB7XG4gIGlmICghbikge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIHJldHVybiB0aGlzWzBdO1xuICB9IGVsc2Uge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuXG4gICAgcmV0dXJuIHRoaXMuc2xpY2UoMCwgbik7XG4gIH1cbn07XG5cbkFycmF5LnByb3RvdHlwZS5jb21wYWN0ID0gZnVuY3Rpb24gKCkge1xuICAvL3ZhciBjaGFuZ2VzID0gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgIC8vIElmIGVsZW1lbnQgaXMgbm9uLWV4aXN0ZW50LCB1bmRlZmluZWQgb3IgbnVsbCwgcmVtb3ZlIGl0LlxuICAgIGlmICghdGhpc1tpXSkge1xuICAgICAgdGhpcy5zcGxpY2UoaSwgMSk7XG4gICAgICBpID0gaSAtIDE7XG4gICAgICAvL2NoYW5nZXMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICAvL2lmICghY2hhbmdlcykgcmV0dXJuIHVuZGVmaW5lZDtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkFycmF5LnByb3RvdHlwZS5kZWxldGVBdCA9IGZ1bmN0aW9uIDxUPih0aGlzOiBUW10sIGluZGV4KTogVCB7XG4gIGlmIChpbmRleCA8IDApIGluZGV4ID0gdGhpcy5sZW5ndGggKyBpbmRleDtcblxuICAvLyBJZiBlbGVtZW50IGlzIG5vbi1leGlzdGVudCwgcmV0dXJuIHVuZGVmaW5lZDpcbiAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KGluZGV4KSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICBjb25zdCBlbGVtID0gdGhpc1tpbmRleF07XG4gIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgcmV0dXJuIGVsZW07XG59O1xuXG5BcnJheS5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHRoaXMuaW5kZXhPZih2YWx1ZSkgIT0gLTEpIHtcbiAgICAvLyBNYWtlIHN1cmUgdGhlIHZhbHVlIGV4aXN0c1xuICAgIHRoaXMuc3BsaWNlKHRoaXMuaW5kZXhPZih2YWx1ZSksIDEpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuQXJyYXkucHJvdG90eXBlLmV4aXN0cyA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzW25dICE9PSAndW5kZWZpbmVkJztcbn07XG5cbmlmICghQXJyYXkucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdldmVyeScpKSB7XG4gIEFycmF5LnByb3RvdHlwZS5ldmVyeSA9IGZ1bmN0aW9uIChmdW46IGFueSAvKiwgdGhpc3AgKi8pIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgY29uc3QgdDogeyBbeDogc3RyaW5nXTogYW55OyBsZW5ndGg6IG51bWJlciB9ID0gT2JqZWN0KHRoaXMpO1xuICAgIGNvbnN0IGxlbiA9IHQubGVuZ3RoID4+PiAwO1xuICAgIGxldCBpOiBzdHJpbmcgfCBudW1iZXI7XG4gICAgY29uc3QgdGhpc3A6IGFueSA9IGFyZ3VtZW50c1sxXTtcblxuICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGZ1biAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKGkgaW4gdCAmJiAhZnVuLmNhbGwodGhpc3AsIHRbaV0sIGksIHQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cblxuQXJyYXkucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgY29uc3QgaXRlbVJlbW92ZWQgPSB0aGlzLnNwbGljZShmcm9tLCAxKTsgLy8gc3BsaWNlKCkgcmV0dXJucyB0aGUgcmVtb3ZlIGVsZW1lbnQgYXMgYW4gYXJyYXlcbiAgdGhpcy5zcGxpY2UodG8sIDAsIGl0ZW1SZW1vdmVkWzBdKTsgLy8gSW5zZXJ0IGl0ZW1SZW1vdmVkIGludG8gdGhlIHRhcmdldCBpbmRleFxuICByZXR1cm4gdGhpcztcbn07XG5cbkFycmF5LnByb3RvdHlwZS5oYXB1c0l0ZW1EYXJpQXJyYXlMYWluID0gZnVuY3Rpb24gKHRoaXM6IGFueVtdLCAuLi5hcnJheUxhaW4pIHtcbiAgbGV0IHRoaXNBcnIgPSB0aGlzO1xuICBhcnJheUxhaW4uZm9yRWFjaCgob3RoZXJBcnIpID0+IHtcbiAgICB0aGlzQXJyID0gdGhpc0Fyci5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gIW90aGVyQXJyLmluY2x1ZGVzKGVsKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRoaXNBcnI7XG59O1xuXG5BcnJheS5wcm90b3R5cGUucmVtb3ZlRW1wdGllcyA9IGZ1bmN0aW9uICh0aGlzOiBhbnlbXSkge1xuICBjb25zdCBmaWx0ZXIgPSB0aGlzLmZpbHRlcihmdW5jdGlvbiAoZWw6IHN0cmluZyB8IGFueSkge1xuICAgIGNvbnN0IG5vdG51bGwgPVxuICAgICAgLy8gbWFrZSBzdXJlIGVsZW1lbnQgaXMgbm90IG51bGxcbiAgICAgIGVsICE9IG51bGwgJiZcbiAgICAgIC8vIG1ha2Ugc3VyZSBlbGVtZW50IGlzIG5vdCB1bmRlZmluZWRcbiAgICAgIHR5cGVvZiBlbCAhPSAndW5kZWZpbmVkJztcbiAgICAvLyBpZiBlbGVtZW50IGlzIHN0cmluZywgbWFrZSBzdXJlIHN0cmluZyBsZW5ndGggbm90IHplcm9cbiAgICBpZiAodHlwZW9mIGVsID09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbm90bnVsbCAmJiBlbC50cmltKCkubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgcmV0dXJuIG5vdG51bGw7XG4gIH0pO1xuICByZXR1cm4gZmlsdGVyO1xufTtcblxuY2xhc3MgYXJyYXlfZXh0IHtcbiAgc3RhdGljIGFycmF5X2ZpbHRlcihhcnJheTogW10pIHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGVsICE9IG51bGw7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcGljayByYW5kb20gZnJvbSBhcnJheVxuICAgKiBAcGFyYW0ge0FycmF5PGFueT59IGFycmF5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVuaXF1ZSBVbmlxdWUgdGhlIGFycmF5c1xuICAgKi9cbiAgc3RhdGljIGFycmF5X3JhbmQoYXJyYXlzOiBhbnlbXSwgdW5pcXVlOiBhbnkpIHtcbiAgICBpZiAodW5pcXVlKSB7XG4gICAgICBhcnJheXMgPSBhcnJheV9leHQuYXJyYXlfdW5pcXVlKGFycmF5cyk7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXlzLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIHZhbHVlOiBhcnJheXNbaW5kZXhdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQXJyYXkgdW5pcXVlXG4gICAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyYXlzXG4gICAqL1xuICBzdGF0aWMgYXJyYXlfdW5pcXVlKGFycmF5czogYW55W10pIHtcbiAgICByZXR1cm4gYXJyYXlzLmZpbHRlcihmdW5jdGlvbiAoaXRlbTogYW55LCBwb3M6IGFueSwgc2VsZjogc3RyaW5nIHwgYW55W10pIHtcbiAgICAgIHJldHVybiBzZWxmLmluZGV4T2YoaXRlbSkgPT0gcG9zO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc2V0IGFycmF5XG4gICAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyYXlOYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfG51bWJlcn0ga2V5XG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIHN0YXRpYyBhcnJheV91bnNldChhcnJheU5hbWU6IHsgW3g6IHN0cmluZ106IGFueSB9LCBrZXk6IGFueSkge1xuICAgIGxldCB4OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgY29uc3QgdG1wQXJyYXkgPSBbXTtcbiAgICBmb3IgKHggaW4gYXJyYXlOYW1lKSB7XG4gICAgICBpZiAoeCAhPSBrZXkpIHtcbiAgICAgICAgdG1wQXJyYXlbeF0gPSBhcnJheU5hbWVbeF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0bXBBcnJheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQSFAgc2h1ZmZsZSBhcnJheSBlcXVpdmFsZW50XG4gICAqIEBwYXJhbSBhcnJheVxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgYXJyID0gWzIsIDExLCAzNywgNDJdO1xuICAgKiBzaHVmZmxlKGFycik7XG4gICAqIGNvbnNvbGUubG9nKGFycik7IC8vcmV0dXJuIHJhbmRvbVxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBzdGF0aWMgc2h1ZmZsZShhcnJheTogQXJyYXk8YW55Pikge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsXG4gICAgICB0ZW1wb3JhcnlWYWx1ZTogYW55LFxuICAgICAgcmFuZG9tSW5kZXg6IG51bWJlcjtcblxuICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBhcnJheVtjdXJyZW50SW5kZXhdO1xuICAgICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcbiAgICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBhcnJheUNvbXBhcmUoYTE6IEFycmF5PGFueT4sIGEyOiBBcnJheTxhbnk+KSB7XG4gICAgaWYgKGExLmxlbmd0aCAhPSBhMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBsZW5ndGggPSBhMi5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGExW2ldICE9PSBhMltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpbl9hcnJheSBQSFAgZXF1aXZhbGVudFxuICAgKiBAcGFyYW0gbmVlZGxlIHN0cmluZyBldGNcbiAgICogQHBhcmFtIGhheXN0YWNrXG4gICAqL1xuICBzdGF0aWMgaW5BcnJheShuZWVkbGU6IGFueSwgaGF5c3RhY2s6IEFycmF5PGFueT4pIHtcbiAgICBjb25zdCBsZW5ndGggPSBoYXlzdGFjay5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHR5cGVvZiBoYXlzdGFja1tpXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoYXJyYXlfZXh0LmFycmF5Q29tcGFyZShoYXlzdGFja1tpXSwgbmVlZGxlKSkgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaGF5c3RhY2tbaV0gPT0gbmVlZGxlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGluX2FycmF5IFBIUCBlcXVpdmFsZW50XG4gICAqIEBwYXJhbSBuZWVkbGUgc3RyaW5nIGV0Y1xuICAgKiBAcGFyYW0gaGF5c3RhY2tcbiAgICovXG4gIHN0YXRpYyBpbl9hcnJheShuZWVkbGU6IGFueSwgaGF5c3RhY2s6IEFycmF5PGFueT4pIHtcbiAgICByZXR1cm4gYXJyYXlfZXh0LmluQXJyYXkobmVlZGxlLCBoYXlzdGFjayk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGFsbCBrZXlzXG4gICAqIEBwYXJhbSBoYXlzdGFjayBzdHJpbmcgZXRjXG4gICAqL1xuICBzdGF0aWMgYXJyYXlfa2V5cyhoYXlzdGFjazogYW55KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGhheXN0YWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaHVmZmxlcyBhcnJheSBpbiBwbGFjZS5cbiAgICogQHBhcmFtIGEgaXRlbXMgQW4gYXJyYXkgY29udGFpbmluZyB0aGUgaXRlbXMuXG4gICAqL1xuICBzdGF0aWMgYXJyYXlfc2h1ZmZsZShhOiBBcnJheTxhbnk+KSB7XG4gICAgbGV0IGo6IG51bWJlciwgeDogYW55LCBpOiBudW1iZXI7XG4gICAgZm9yIChpID0gYS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICB4ID0gYVtpXTtcbiAgICAgIGFbaV0gPSBhW2pdO1xuICAgICAgYVtqXSA9IHg7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZXAgbWVyZ2UgdHdvIG9yIG1vcmUgb2JqZWN0cyBpbnRvIHRoZSBmaXJzdC5cbiAgICogKGMpIDIwMjEgQ2hyaXMgRmVyZGluYW5kaSwgTUlUIExpY2Vuc2UsIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbVxuICAgKiBAcGFyYW0gb2JqZWN0cyAgVGhlIG9iamVjdHMgdG8gbWVyZ2UgdG9nZXRoZXJcbiAgICogQHJldHVybnMgTWVyZ2VkIHZhbHVlcyBvZiBkZWZhdWx0cyBhbmQgb3B0aW9uc1xuICAgKi9cbiAgc3RhdGljIGRlZXBBc3NpZ24oLi4ub2JqZWN0czogUmVjb3JkPGFueSwgdW5rbm93bj5bXSk6IFJlY29yZDxhbnksIHVua25vd24+IHtcbiAgICAvLyBNYWtlIHN1cmUgdGhlcmUgYXJlIG9iamVjdHMgdG8gbWVyZ2VcbiAgICBjb25zdCBsZW4gPSBvYmplY3RzLmxlbmd0aDtcbiAgICBpZiAobGVuIDwgMSkgcmV0dXJuO1xuICAgIGlmIChsZW4gPCAyKSByZXR1cm4gb2JqZWN0c1swXTtcblxuICAgIC8vIE1lcmdlIGFsbCBvYmplY3RzIGludG8gZmlyc3RcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgIGlmIChvYmplY3RzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAvLyBJZiBpdCdzIGFuIG9iamVjdCwgcmVjdXJzaXZlbHkgbWVyZ2VcbiAgICAgICAgICAvLyBPdGhlcndpc2UsIHB1c2ggdG8ga2V5XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3RzW2ldW2tleV0pID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICAgICAgb2JqZWN0c1swXVtrZXldID0gYXJyYXlfZXh0LmRlZXBBc3NpZ24oPGFueT5vYmplY3RzWzBdW2tleV0gfHwge30sIDxhbnk+b2JqZWN0c1tpXVtrZXldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqZWN0c1swXVtrZXldID0gb2JqZWN0c1tpXVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGl0ZW0gZnJvbSBhcnJheVxuICAgKiBAcGFyYW0gYXJyXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgc3RhdGljIHJlbW92ZUl0ZW08VD4oYXJyOiBBcnJheTxUPiwgdmFsdWU6IFQpOiBBcnJheTxUPiB7XG4gICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG59XG5kZWNsYXJlIGNvbnN0IGFycmF5X3NodWZmbGU6IHR5cGVvZiBhcnJheV9leHQuYXJyYXlfc2h1ZmZsZTtcbmRlY2xhcmUgY29uc3QgaW5BcnJheTogdHlwZW9mIGFycmF5X2V4dC5pbkFycmF5O1xuXG4vKlxuaWYgKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IGluc3RhbmNlb2YgV2luZG93KSB7XG4gIHdpbmRvdy5hcnJheV9zaHVmZmxlID0gYXJyYXlfZXh0LmFycmF5X3NodWZmbGU7XG4gIHdpbmRvdy5hcnJheV9maWx0ZXIgPSBhcnJheV9leHQuYXJyYXlfZmlsdGVyO1xuICB3aW5kb3cuYXJyYXlfa2V5cyA9IGFycmF5X2V4dC5hcnJheV9rZXlzO1xuICB3aW5kb3cuYXJyYXlfcmFuZCA9IGFycmF5X2V4dC5hcnJheV9yYW5kO1xuICB3aW5kb3cuYXJyYXlfdW5pcXVlID0gYXJyYXlfZXh0LmFycmF5X3VuaXF1ZTtcbiAgd2luZG93LmFycmF5X3Vuc2V0ID0gYXJyYXlfZXh0LmFycmF5X3Vuc2V0O1xuICB3aW5kb3cuaW5BcnJheSA9IGFycmF5X2V4dC5pbkFycmF5O1xuICB3aW5kb3cuaW5fYXJyYXkgPSBhcnJheV9leHQuaW5fYXJyYXk7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcpIHtcbiAgZ2xvYmFsLmFycmF5X3NodWZmbGUgPSBhcnJheV9leHQuYXJyYXlfc2h1ZmZsZTtcbiAgZ2xvYmFsLmFycmF5X2ZpbHRlciA9IGFycmF5X2V4dC5hcnJheV9maWx0ZXI7XG4gIGdsb2JhbC5hcnJheV9rZXlzID0gYXJyYXlfZXh0LmFycmF5X2tleXM7XG4gIGdsb2JhbC5hcnJheV9yYW5kID0gYXJyYXlfZXh0LmFycmF5X3JhbmQ7XG4gIGdsb2JhbC5hcnJheV91bmlxdWUgPSBhcnJheV9leHQuYXJyYXlfdW5pcXVlO1xuICBnbG9iYWwuYXJyYXlfdW5zZXQgPSBhcnJheV9leHQuYXJyYXlfdW5zZXQ7XG4gIGdsb2JhbC5pbkFycmF5ID0gYXJyYXlfZXh0LmluQXJyYXk7XG4gIGdsb2JhbC5pbl9hcnJheSA9IGFycmF5X2V4dC5pbl9hcnJheTtcbn1cbiovXG5cbi8vIGV4cG9ydCBub2RlIG1vZHVsZVxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gYXJyYXlfZXh0O1xuICBleHBvcnRzID0gYXJyYXlfZXh0O1xufVxuIl19