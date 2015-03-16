/**
 * Created by naor on 10/10/13.
 * Migrated by tdd on 03/16/15.
 */
"use strict";

var runner = require('../../runner')

module.exports = runner.custom(function(curryN) {
  function add3(one, two, three) {
    return one + two + three
  }
  // console.log("var curryC = curryN(add3)")
  // console.log("var curryB = curryC(1)")
  // console.log("var curryA = curryB(2))")
  var curryC = curryN(add3)
  var curryB = curryC(1)
  var curryA = curryB(2)

  var result = []
  result.push("curryA(3) => " + curryA(3)) // => 6
  result.push("curryA(10) => " + curryA(10)) // => 13
  result.push("curryN(add3)(1)(2)(3) => " + curryN(add3)(1)(2)(3)) // => 6

  function strConcat(){
    var args = Array.prototype.slice.call(arguments);
    return Array.prototype.concat.apply([], args).join(" ");
  }

  result.push(
    "curryN(strConcat, 5)('This')('problem')('has')('been')('solved')) => " +
    curryN(strConcat, 5)('This')('problem')('has')('been')('solved'))
  return result
}).hideInput()
