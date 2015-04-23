'use strict'

var path = require('path')

var repeat = require(path.resolve(process.cwd(), process.argv[2]))

var count = 0
var CYCLES = 10000

function operation() {
  for (var i = 0; i < 1000000; i++) {
    // burn some CPU cycles
  }
  // count how many times this function was called
  count++
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

  if (count < 10) {
    console.log('Fail! You should have completed some operations!')
    process.exit(1)
  }

  if (count >= CYCLES) {
    console.log('Fail! Should not have completed all operations!')
    process.exit(1)
  }

  console.log('Operations successfully interrupted!')
  console.error('Interrupted after %d milliseconds.', end - start)
  process.exit()
}, 100)
