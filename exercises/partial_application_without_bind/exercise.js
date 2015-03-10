"use strict"

var loremIpsum = require('lorem-ipsum')
var runner = require('../../runner')

var input = Array.apply(null, {length: Math.random() * 20 + 1}).map(function() {
  return loremIpsum()
})

// FIXME: THIS DOES NOT CAPTURE console.log OUTPUT PROPERLY (as it happens
// inside the runner, not in child processes).  WE NEED TO CHANGE THIS INTO
// NON-runner, RAW EXERCISE CODE WITH A WRAPPER MODULE FOR SUBMISSION/SOLUTION CMDS

module.exports = runner.custom(function(fx, input) {
  console.log.bind = function() {
    throw new Error('Try implementing this without bind!')
  }

  var info = fx('INFO:')
  var warn = fx('WARN:')
  input.forEach(function(message, i) {
    if (i % 2 === 0) info.apply(null, message.split(' '))
    else warn.apply(null, message.split(' '))
  })
})(input)
