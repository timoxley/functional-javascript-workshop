'use strict'

var fs = require('fs')
var path = require('path')

var fx = require(path.resolve(process.cwd(), process.argv[2]))
var input = JSON.parse(fs.readFileSync(process.argv[3], { encoding: 'utf-8' }))[0]

console.log.bind = function() {
  throw new Error('Try implementing this without bind!')
}

var info = fx('INFO:')
var warn = fx('WARN:')
input.forEach(function(message, i) {
  if (i % 2 === 0) info.apply(null, message.split(' '))
  else warn.apply(null, message.split(' '))
})
