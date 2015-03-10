"use strict"

var input = require('../../input')
var lorem = require('lorem-ipsum')

module.exports = input(Array.apply(null, {length: Math.random() * 20 + 1}).map(function() {
  return lorem()
})).wrap(function(input, logger) {
  var info = logger('INFO:')
  var warn = logger('WARN:')
  input[0].forEach(function(message, i) {
    var args = message.split(' ')
    if (i % 2 === 0) info.apply(null, args)
    else warn.apply(null, args)
  })
})
