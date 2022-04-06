"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference path="./globals.d.ts" />
// members
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBc0Q7QUFDdEQsdUNBQXVDO0FBQ3ZDLFVBQVU7QUFDVixtQkFBaUI7QUFDakIsb0JBQWtCO0FBQ2xCLG1CQUFpQjtBQUNqQixvQkFBa0I7QUFDbEIsb0JBQWtCO0FBQ2xCLHNCQUFvQjtBQUNwQix1QkFBcUI7QUFFckIsZ0NBQWdDO0FBRWhDLElBQUksT0FBTyxNQUFNLElBQUksV0FBVyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7SUFDbEQsTUFBTSxDQUFDLE9BQU8sR0FBRztRQUNmLGVBQWUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDO0tBQ3BDLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vZ2xvYmFscy5kLnRzXCIgLz5cbi8vIG1lbWJlcnNcbmltcG9ydCAnLi9FcnJvcic7XG5pbXBvcnQgJy4vTnVtYmVyJztcbmltcG9ydCAnLi9BcnJheSc7XG5pbXBvcnQgJy4vT2JqZWN0JztcbmltcG9ydCAnLi9TdHJpbmcnO1xuaW1wb3J0ICcuL0Z1bmN0aW9uJztcbmltcG9ydCAnY29sbGVjdGlvbnMnO1xuXG4vL2RlY2xhcmUgbmFtZXNwYWNlIHByb3RvdHlwZSB7fVxuXG5pZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBwcm90b3R5cGVfYXJyYXk6IHJlcXVpcmUoJy4vQXJyYXknKSxcbiAgfTtcbn1cbiJdfQ==