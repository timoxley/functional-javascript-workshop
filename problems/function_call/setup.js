"use strict"

var input = require('../../input')
var lorem = require('lorem-ipsum')

function randomInt(min, max) {
  return Math.floor((Math.random() * max - min) + min)
}

function listOfWords() {
  return lorem({count: 5, units:'words'})
  .replace(/([^\w ])/g, '')// remove non-words and spaces
  .toLowerCase() // lowercase I guess
  .split(' ') // create array of words
}

var words = listOfWords()
module.exports = input(listOfWords())
.wrap(function(words, slice) {
  words.forEach(function(words) {
    console.log('words:', words)
    console.log('')
    console.log('slice(words):')
    console.log(slice(words))
    console.log('')
    console.log('slice(words, 0, 1):')
    console.log(slice(words, 0, 1))
    console.log('')
    console.log('slice(words, 2):')
    console.log(slice(words, 2))
    console.log('')
    console.log('slice(words, -1):')
    console.log(slice(words, -1))
  })
})
