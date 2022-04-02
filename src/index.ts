/* eslint-disable @typescript-eslint/no-unused-vars */
import './Error';
import './Number';
import './Array';
import './Object';
import './String';
import './Function';
import 'collections';

//declare namespace prototype {}

if (typeof module != 'undefined' && module.exports) {
  module.exports = {
    prototype_array: require('./Array'),
  };
}
