/**
 * creator.js - creator utility function
 * module utils
 * @file utils/creator.js
 * @author egrano
 * @copyright Copyright ©2019, Evin Grano & Contributors. All rights reserved.
 */

module.exports = function(){
  function F() {}
  F.prototype = this;
  return new F();
};
