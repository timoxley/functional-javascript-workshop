"use strict"

var loremIpsum = require('lorem-ipsum')
var runner = require('../../runner')

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min)) + min)
}

var input = new Array(randomInt(10, 30)).join(',').split(',')
  .map(function() { return { message: loremIpsum() } })

module.exports = runner.hideInput(input)
