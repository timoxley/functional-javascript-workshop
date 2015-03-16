"use strict"

var runner = require('../runner')

module.exports = runner.custom(function(repeat) {
  console.log('repeating 100000 times')
  var count = 0
  repeat(function() {
    count++
  }, 100000)
  console.log('Sucessfully executed %d times.', count)
}).quiet()
