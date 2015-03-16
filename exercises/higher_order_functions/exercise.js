"use strict"

var random = require('../randomizer')
var runner = require('../../runner')

var counter

module.exports = runner.init(function() {
  console.log("------------------------")
  counter = 0
}).quiet(function count() {
  console.log("Called function %d times.", ++counter)
}, random.int(3, 10))
