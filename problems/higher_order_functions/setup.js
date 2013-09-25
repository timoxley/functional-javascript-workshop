"use strict"

var input = require('../../input')
var lorem = require('lorem-ipsum')

function randomInt(min, max) {
  return Math.floor((Math.random() * max - min) + min)
}

module.exports = input(function count() {
  count.counter = count.counter || 0
  console.log("Called function %d times.", (count.counter++) + 1)
}, randomInt(3, 10)).wrap(function(input, repeat) {
  repeat(input[0], input[1])
})
