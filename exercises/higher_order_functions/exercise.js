"use strict"

var runner = require('../../runner')

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min)) + min)
}

var counter

module.exports = runner.init(function() {
  console.log("------------------------")
  counter = 0
}).quiet(function count() {
  console.log("Called function %d times.", ++counter)
}, randomInt(3, 10))
