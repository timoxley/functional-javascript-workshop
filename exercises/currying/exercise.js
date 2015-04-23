/**
 * Created by naor on 10/10/13.
 * Migrated by tdd on 03/16/15.
 */
"use strict";

var runner = require('../runner')

var exercise = module.exports = runner.custom(function(curryN) {
  var result = []
  result.push("Testing curryN without n:")

  function add3(one, two, three) {
    return one + two + three
  }

  var curryC = curryN(add3)
  var curryB = curryC(1)
  var curryA = curryB(2)

  result.push("curryA(3) => " + curryA(3)) // => 6
  result.push("curryA(10) => " + curryA(10)) // => 13
  result.push("curryN(add3)(1)(2)(3) => " + curryN(add3)(1)(2)(3)) // => 6

  function joinWithComma() {
    return Array.prototype.join.call(arguments, ',');
  }

  var curry1 = curryN(joinWithComma, 4)
  var curry2 = curry1(1)
  var curry3 = curry2(2)
  var curry4 = curry3(3)
  result.push(curry4(4))
  result.push("Testing we can change the inner function to generate different set of outputs:")
  var curry3 = curry2(6)
  var curry4 = curry3(3)
  result.push(curry4(5))

  result.push("Testing curryN with n:")

  function strConcat(){
    var args = Array.prototype.slice.call(arguments)
    return Array.prototype.concat.apply([], args).join(" ")
  }

  var words = exercise.__('five_words').split(',')
  var call = words.map(function(word) { return "('" + word + "')" }).join('')
  result.push(
    "curryN(strConcat, 5)" + call + ") => " +
    curryN(strConcat, 5)(words[0])(words[1])(words[2])(words[3])(words[4]))

  return result
}).hideInput()
