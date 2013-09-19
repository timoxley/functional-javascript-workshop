"use strict"

var input = require('../../input')
var lorem = require('lorem-ipsum')

module.exports = input(Array.apply(null, {length: Math.random() * 20}).map(function() {
    return lorem()
  }), function() {

  var assert = require('assert')

  console.log.bind = function () {
    throw new Error('Try implementing this without bind!')
  }

  global.$test = function(logger) {
    var info = logger('INFO:')
    var warn = logger('WARN:')
    $input.forEach(function(message, i) {
      if (i % 2 === 0) info.apply(null, message.split(' '))
      else warn.apply(null, message.split(' '))
    })
  }
})
