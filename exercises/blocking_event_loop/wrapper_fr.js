'use strict'

var path = require('path')

var repeat = require(path.resolve(process.cwd(), process.argv[2]))

var count = 0
var CYCLES = 100000

function operation() {
  for (var i = 0; i < 1000000; i++) {}  // burn some CPU cycles
  count++ // count how many times this function was called
}

console.log()
console.log('l’opération :')
console.log(operation.toString())
console.log()
console.log('J’essaie de répéter l’opération %d fois…', CYCLES)
console.log('Pressez Ctrl+C pour interrompre.')
console.log()

var start = Date.now()
repeat(operation, CYCLES)

setTimeout(function() {
  var end = Date.now()
  console.error('J’ai effectué %d opérations.', count)
  if (count === CYCLES) console.log('Raté ! Je n’aurais pas du pouvoir aller au bout !')
  if (end - start < 1500) console.log('Interruption au bout d’environ 1 seconde !')
  else console.log('Raté ! Interruption au bout de %d millisecondes', end - start)
  process.exit()
}, 1000)
