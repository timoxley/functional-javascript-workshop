"use strict"

var runner = require('../runner')

var exercise = module.exports = runner.custom(function(repeat) {
  var COUNT = 100000
  console.log(exercise.__('intro', COUNT))
  var count = 0
  repeat(function() {
    count++
  }, COUNT)
  console.log(exercise.__('result', count))
}).quiet()
