"use strict"

var input = require('../../input')
var lorem = require('lorem-ipsum')

module.exports = input(lorem({count: 1, units:'paragraphs'})
                       .replace(/([^\w ])/g, '')// remove non-words and spaces
                       .toLowerCase() // lowercase I guess
                       .split(' ') // create array of words
                      ).wrap(function(input, countStrings) {
                        console.log(countStrings(input[0]))
                      })
