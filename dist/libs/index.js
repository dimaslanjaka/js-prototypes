"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference path="./globals.d.ts" />
require("./Error");
require("./Number");
require("./Array");
require("./Object");
require("./String");
require("./Function");
require("collections");
//declare namespace prototype {}
if (typeof module != 'undefined' && module.exports) {
    module.exports = {
        prototype_array: require('./Array'),
    };
}
