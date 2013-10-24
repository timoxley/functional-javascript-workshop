"use strict"

var input = require('../../input')

module.exports = input().wrap(function(input, repeat) {
  console.log('repeating 100000 times')
  var count = 0
  repeat(function() {
    count++
  }, 100000)
  console.log('Sucessfully executed %d times.', count)
})

