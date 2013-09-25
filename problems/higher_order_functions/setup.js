"use strict"

var input = require('../../input')
var lorem = require('lorem-ipsum')
function randomInts(min, max) {
  return Math.floor(Math.random() * max + min - 1)
}

module.exports = input(lorem().split(' ')[0], function() {
  global.$operation = function() {
    console.log($input)
  }
})
