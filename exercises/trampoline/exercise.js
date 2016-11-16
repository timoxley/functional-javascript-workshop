"use strict"

var runner = require('../runner')

var exercise = module.exports = runner.custom(function(repeat) {
  var COUNT = 100000
  console.log(exercise.__('intro', COUNT))
  var count = 0
  repeat(function() {
    count++
  }, COUNT)
  if (count !== COUNT) {
    exercise.emit('fail', exercise.__('count_mismatch', COUNT, count))
  } else {
    exercise.emit('pass', exercise.__('count_match', count))
  }
}).quiet()
