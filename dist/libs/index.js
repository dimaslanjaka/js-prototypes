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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBc0Q7QUFDdEQsdUNBQXVDO0FBQ3ZDLG1CQUFpQjtBQUNqQixvQkFBa0I7QUFDbEIsbUJBQWlCO0FBQ2pCLG9CQUFrQjtBQUNsQixvQkFBa0I7QUFDbEIsc0JBQW9CO0FBQ3BCLHVCQUFxQjtBQUVyQixnQ0FBZ0M7QUFFaEMsSUFBSSxPQUFPLE1BQU0sSUFBSSxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtJQUNsRCxNQUFNLENBQUMsT0FBTyxHQUFHO1FBQ2YsZUFBZSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUM7S0FDcEMsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9nbG9iYWxzLmQudHNcIiAvPlxuaW1wb3J0ICcuL0Vycm9yJztcbmltcG9ydCAnLi9OdW1iZXInO1xuaW1wb3J0ICcuL0FycmF5JztcbmltcG9ydCAnLi9PYmplY3QnO1xuaW1wb3J0ICcuL1N0cmluZyc7XG5pbXBvcnQgJy4vRnVuY3Rpb24nO1xuaW1wb3J0ICdjb2xsZWN0aW9ucyc7XG5cbi8vZGVjbGFyZSBuYW1lc3BhY2UgcHJvdG90eXBlIHt9XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIHByb3RvdHlwZV9hcnJheTogcmVxdWlyZSgnLi9BcnJheScpLFxuICB9O1xufVxuIl19