"use strict"

var loremIpsum = require('lorem-ipsum')
var random = require('../randomizer')
var runner = require('../runner')

var input = random.arrayOf(10, 30, function() {
  return { message: loremIpsum() }
})

module.exports = runner.hideInput(input)
