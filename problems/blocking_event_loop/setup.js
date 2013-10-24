"use strict"

var input = require('../../input')

module.exports = input().wrap(function(input, repeat) {
  console.log()
  console.log('the operation:')
  console.log(operation.toString())
  console.log()
  console.log('Trying to repeat the operation 100000 times...')
  console.log('Press control+c to kill.')
  console.log()
  var count = 0
  function operation() {
    // burn some cpu cycles
    for (var i = 0; i < 1000000; i++) {}
    // count how many times this function was called
    count++
  }
  var start = Date.now()
  repeat(operation, 100000)

  setTimeout(function() {
    var end = Date.now()
    console.error('Performed %d operations.', count)
    if (count === 10000) console.log('Fail! Should not have completed all operations!')
    // TODO calculate ideal ops per second?
    //if (count < 1000) console.log('Fail! Should have performed more operations!')
    if (end - start < 1500) console.log('Interrupted in approximately 1 second!')
    else console.log('Fail! Interrupted in %d milliseconds', end - start)
    process.exit()
  }, 1000)
})

