"use strict"

var input = require('../../input')
var lorem = require('lorem-ipsum')

module.exports = input(Array.apply(null, {length: Math.random() * 20 + 1}).map(function() {
    return lorem()
  })).wrap(function(input, logger) {

    var assert = require('assert')

    console.log.bind = function () {
      throw new Error('Try implementing this without bind!')
    }

    var info = logger('INFO:')
    var warn = logger('WARN:')
    input[0].forEach(function(message, i) {
      if (i % 2 === 0) info.apply(null, message.split(' '))
      else warn.apply(null, message.split(' '))
    })
})
