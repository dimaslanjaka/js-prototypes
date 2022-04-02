/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/triple-slash-reference */

interface Object {
  length: number;

  /**
   * Dynamic Key
   */
  [str: string]: any;

  /**
   * Merge this object with another object
   */
  merge: (...other: Record<any, unknown>[]) => Record<any, unknown>;

  /**
   * Iterate Object
   * @param callback function each element
   * @example
   * var a = {'a','n'};
   * a.each(function(el){
   *  console.log(el); //a, n each iteration
   * })
   */
  each(callback: (arg0: any) => any): any;

  /**
   * Check is empty
   */
  isEmpty(): boolean;

  replaceKeyFrom(anotherObj: any): any;
}

interface ObjectConstructor {
  /**
   * Dynamic Key
   */
  [str: string]: any;

  /**
   * Count size length of object
   */
  size: (obj: any) => number;

  //[pair: string|number]: any;

  /**
   * Is Object Has Property of key ?
   * @param key
   */
  hasOwnProperty(key: any): boolean;

  /**
   * check if has child and go for callback
   * @param str  match child property
   * @param callback function callback
   * @author Dimas Lanjaka <dimaslanjaka@gmail.com>
   */
  child(str: string | number, callback: (arg: any) => any): any;

  /**
   * check object has child, if not exist return alternative value
   * @param str match child property
   * @param alternative default value callback
   * @author Dimas Lanjaka <dimaslanjaka@gmail.com>
   */
  alt(str: any, alternative: string | number | boolean): any;

  /**
   * Check object has child
   * @param str
   */
  has(str: string | number): any;
}

Object.size = function (obj) {
  let size = 0,
    key: any;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

Object.child = function (str, callback) {
  const self: object = this;
  if (self.hasOwnProperty(str)) {
    if (typeof callback == 'function') {
      return callback(self[str]);
    } else {
      return true;
    }
  } else {
    return undefined;
  }
};

Object.alt = function (str, alternative) {
  const self: any = this;
  if (self.hasOwnProperty(str)) {
    return self[str];
  } else {
    return alternative;
  }
};

Object.has = function (str: string | number) {
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
  static object_join(obj: Record<any, unknown>, separator = ',') {
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
  static isObject(item: any): boolean {
    return item && typeof item === 'object' && !Array.isArray(item);
  }

  /**
   * Deep merge two objects.
   * @param target
   * @param ...sources
   */
  static mergeDeep(target: Record<any, unknown>, ...sources: Record<any, unknown>[]) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (object_ext.isObject(target) && object_ext.isObject(source)) {
      for (const key in source) {
        if (object_ext.isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          object_ext.mergeDeep(<any>target[key], <any>source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }

    return object_ext.mergeDeep(target, ...sources);
  }
}

Object.prototype.merge = function (this: Record<any, unknown>, ...others) {
  return object_ext.mergeDeep(this, ...others);
};

if (typeof window != 'undefined' && window instanceof Window) {
  window.object_join = object_ext.object_join;
  window.object_merge = object_ext.mergeDeep;
  window.isObject = object_ext.isObject;
} else if (typeof global == 'object') {
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
