"use strict"

var runner = require('../runner')

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min)) + min)
}

var numbers = Array.apply(null, {length: Math.random() * 20 + 1}).map(function() {
  return randomInt(0, 9)
})

module.exports = runner(numbers, function(item) { return item * 3 })
