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
console.error('J’essaie de répéter l’opération %d fois, ce peut se bloquer…', CYCLES)
console.error()
console.error('Pressez Ctrl+C pour interrompre.')
console.error()

var start = Date.now()
repeat(operation, CYCLES)

setTimeout(function() {
  var end = Date.now()
  console.error('J’ai effectué %d opérations.', count)

  if (count < 10) {
    console.log('Fail ! Vous devez effectuer quelques opérations !')
    process.exit(1)
  }

  if (count >= CYCLES) {
    console.log('Raté ! Je n’aurais pas du pouvoir aller au bout !')
    process.exit(1)
  }

  console.log('Opérations interrompues succès !')
  console.error('Interrompu après %d millisecondes.', end - start)
  process.exit()
}, 100)
