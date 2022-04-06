/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import 'js-prototypes';
//import '../src/Array';

console.log('is 1 function available on global scope?');
console.log(typeof global.array_filter, typeof array_filter);

console.log('is addAll work?');
const a = [0, 1];
const b = ['a', 'b'];
console.log(b.addAll(a)); // ['a','b',0,1]
