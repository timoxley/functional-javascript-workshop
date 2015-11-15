"use strict"

var loremIpsum = require('lorem-ipsum')

function randomArrayOf(minCells, maxCells, callback) {
  if ('function' === typeof maxCells && 'undefined' === typeof callback) {
    callback = maxCells
    maxCells = minCells
  }
  return Array.apply(null, { length: randomInt(minCells, maxCells) }).map(callback)
}

function randomArrayOfInts(maxCells, minInt, maxInt) {
  return randomArrayOf(0, maxCells, function() {
    return randomInt(minInt, maxInt)
  })
}

function randomArrayOfLorems(minCells, maxCells) {
  var loremOptions = Array.prototype.slice(arguments, 2)
  return randomArrayOf(minCells, maxCells, function() {
    return loremIpsum.apply(loremIpsum, loremOptions)
  })
}

function randomInt(min, max) {
  if (min === max) return max
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

function randomWords(count, options) {
  options = options || {}
  var result = loremIpsum().split(' ').slice(0, count)
  if (options.capitalized) {
    result = result.map(function(word) {
      word = word[0].toUpperCase() + word.substring(1)
      return word
    })
  }
  return result.join(' ')
}

module.exports = {
  int: randomInt,
  arrayOf: randomArrayOf,
  arrayOfInts: randomArrayOfInts,
  arrayOfLorems: randomArrayOfLorems,
  words: randomWords
}
