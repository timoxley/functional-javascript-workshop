"use strict"

var input = require('../../input')

function randomInts(min, max) {
  return Math.floor(Math.random() * max + min)
}

module.exports = input(new Array(randomInts(0, 19))
.join(',')
.split(',')
.map(function() {
  return randomInts(0, 9)
}), function() {
  //if ($input.length % 2 === 0) {
    global.$operation = function(item, index, arr) {
      return item + index
    }
  //} else {
    //global.$operation = function(item, arr) {
      //return item / arr.length
    //}
  //}
})
