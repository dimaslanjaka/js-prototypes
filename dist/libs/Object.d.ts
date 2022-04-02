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
declare class object_ext {
    /**
     * Join object to separated string
     * * [].join() equivalent
     * @param obj Object
     * @param separator default comma(,)
     * @returns Joined string
     */
    static object_join(obj: Record<any, unknown>, separator?: string): string;
    /**
     * Simple object check.
     * @param item
     * @returns
     */
    static isObject(item: any): boolean;
    /**
     * Deep merge two objects.
     * @param target
     * @param ...sources
     */
    static mergeDeep(target: Record<any, unknown>, ...sources: Record<any, unknown>[]): any;
}
