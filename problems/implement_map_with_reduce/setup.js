"use strict"

var input = require('../../input')

function randomInt(min, max) {
  return Math.floor((Math.random() * max - min) + min)
}

module.exports = input(function(item, index, arr) {
  return item * 3
}, new Array(randomInt(0, 19))
.join(',')
.split(',')
.map(function() {
  return randomInt(0, 9)
})).wrap(function(input, mod) {
  var operation = input[0]
  var nums = input[1]
  console.log(mod(nums, operation))
})
