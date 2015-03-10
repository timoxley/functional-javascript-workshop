/**
 * Created by naor on 10/10/13.
 */
"use strict";

var input = require('../../input');

module.exports = input().wrap(function(input, curryN) {

  function add3(one, two, three) {
    return one + two + three
  }
  console.log("var curryC = curryN(add3)")
  console.log("var curryB = curryC(1)")
  console.log("var curryA = curryB(2))")
  var curryC = curryN(add3)
  var curryB = curryC(1)
  var curryA = curryB(2)

  console.log("curryA(3) => ", curryA(3)) // => 6
  console.log("curryA(10) =>", curryA(10)) // => 13
  console.log("curryN(add3)(1)(2)(3) =>", curryN(add3)(1)(2)(3)) // => 6


  function strConcat(){
    var args = Array.prototype.slice.call(arguments);
    return Array.prototype.concat.apply([], args).join(" ");
  }

  console.log("curryN(strConcat, 5)('This')('problem')('has')('been')('solved')) =>")
  console.log(curryN(strConcat, 5)('This')('problem')('has')('been')('solved'));
});
