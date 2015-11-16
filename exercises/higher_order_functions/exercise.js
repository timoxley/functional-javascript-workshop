"use strict"

var random = require('../randomizer')
var runner = require('../runner')

var counter

var exercise = module.exports = runner.init(function() {
  console.log("------------------------")
  counter = 0
}).quiet(function count() {
  console.log(exercise.__('call_log', ++counter))
}, random.int(3, 10))

exercise.ignoreReturnValue = true
