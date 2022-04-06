/// <reference types="node" />
import jsdom from 'jsdom';
import { BufferFile } from 'vinyl';
/**
 * JSDOM via gulp
 * @param mutator
 * @param options
 * @param serialize dom.serialize()
 * @returns
 */
export default function gulpJSDOM(mutator: {
    call: (arg0: {
        file: BufferFile;
        filename: string;
    }, arg1: Document, arg2: jsdom.DOMWindow) => any;
} & any, options?: jsdom.ConstructorOptions, serialize?: boolean): import("stream").Transform;
