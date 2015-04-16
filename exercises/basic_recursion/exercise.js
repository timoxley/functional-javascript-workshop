"use strict"

var loremIpsum = require('lorem-ipsum')
var runner = require('../runner')

var input = loremIpsum({count: 1, units:'paragraphs'})
 .replace(/([^\w ])/g, '')// remove non-words and spaces
 .toLowerCase() // lowercase I guess
 .split(' ') // create array of words

module.exports = runner.custom(function(fx, input) {
  return fx(input, function(prev, curr) {
    prev[curr] = ++prev[curr] || 1
    return prev
  }, {})
})(input)
