"use strict"

var input = require('../../input')

function randomInt(min, max) {
  return Math.floor((Math.random() * max - min) + min)
}

module.exports = input(new Array(randomInt(0, 19))
.join(',')
.split(',')
.map(function() {
  return randomInt(0, 9)
})).wrap(function(input, doubleAll) {
  var numbers = input[0]
  var map = Array.prototype.map
  var usedMap = false
  Array.prototype.map = function() {
    usedMap = true
    return map.apply(this, arguments)
  }

  console.log('input:', numbers)
  console.log('output:', doubleAll(numbers))

  setTimeout(function() {
    if (!usedMap) {
      console.log('You didn\'t use Array#map!!??')
    }
  })
})
