'use strict'

var path = require('path')

var repeat = require(path.resolve(process.cwd(), process.argv[2]))

var count = 0
var CYCLES = 10000

function operation() {
  for (var i = 0; i < 1000000; i++) {}  // burn some CPU cycles
  count++ // count how many times this function was called
}


console.error()
console.error(operation.toString())
console.error()
console.error('Trying to execute the above operation %d times, this may crash…', CYCLES)
console.error()
console.error('Press Ctrl+C to kill.')
console.error()

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
