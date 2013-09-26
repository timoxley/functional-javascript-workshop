"use strict"

var input = require('../../input')
var lorem = require('lorem-ipsum')

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

function makeUser() {
  return {
    id: randomInt(0, 1000),
    name: lorem().split(' ').slice(0, 2).map(function(word) {word[0] = word[0].toUpperCase(); return word;}).join(' ')
  }
}

function makeListOfUsers() {
  return new Array(randomInt(10, 100))
  .join(',')
  .split(',')
  .map(makeUser)
}

var good = makeListOfUsers()
var bad = makeListOfUsers()
var lists = Array.apply(null, {length: 20}).map(function() {
  return Array.apply(null, {length: 20}).map(function() {
    if (Math.random() < 0.95) {
      return good[randomInt(0, 10)]
    } else {
      return bad[randomInt(0, 10)]
    }
  })
})

module.exports = input(good, lists).wrap(function(input, mod) {
  var good = input[0]
  var lists = input[1]
  var assert = require('assert')
  var inspect = require('util').inspect
  var test = mod.call(mod, good)

  var goodLists = 0

  lists.forEach(function(list) {
    test(list) && goodLists++
  })

  console.log('found %d good lists!', goodLists)
})
