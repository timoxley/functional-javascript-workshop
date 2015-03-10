"use strict"

var input = require('../../input')



module.exports = input().wrap(function(input, repeat) {

  var count = 0
  var CYCLES = 100000

  function operation() {
    for (var i = 0; i < 1000000; i++) {}  // burn some CPU cycles
    count++ // count how many times this function was called
  }

  console.log()
  console.log('the operation:')
  console.log(operation.toString())
  console.log()
  console.log('Trying to repeat the operation %d times...', CYCLES)
  console.log('Press control+c to kill.')
  console.log()

  var start = Date.now()
  repeat(operation, CYCLES)

  setTimeout(function() {
    var end = Date.now()
    console.error('Performed %d operations.', count)
    if (count === CYCLES) console.log('Fail! Should not have completed all operations!')
    // TODO calculate ideal ops per second?
    //if (count < 1000) console.log('Fail! Should have performed more operations!')
    if (end - start < 1500) console.log('Interrupted in approximately 1 second!')
    else console.log('Fail! Interrupted in %d milliseconds', end - start)
    process.exit()
  }, 1000)
})

