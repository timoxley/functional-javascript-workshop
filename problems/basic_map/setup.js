"use strict"

var input = require('../../input')

function randomInts(min, max) {
  return Math.floor(Math.random() * max + min - 1)
}

module.exports = input(new Array(randomInts(0, 19))
.join(',')
.split(',')
.map(function() {
  return randomInts(0, 9)
}), function() {
  var map = Array.prototype.map
  var usedMap = false
  Array.prototype.map = function() {
    usedMap = true
    return map.apply(this, arguments)
  }
  setTimeout(function() {
    if (!usedMap) {
      console.log('You didn\'t use Array#map!!??')
    }
  })
})
