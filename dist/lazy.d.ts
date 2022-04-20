interface LazyObject {
    [key: string]: any;
}
interface Window {
    lazyload: lazyload;
}
declare const lazyglobal: any;
declare class lazyload {
    lazyloads: {
        [key: string]: boolean;
    };
    /**
     * @typedef {Object}
     * @property {Object<string, ()=> any>}
     */
    lazycallbacks: {};
    add(src: string, callback?: null): this;
    exec(): void;
}
declare var module: any;
