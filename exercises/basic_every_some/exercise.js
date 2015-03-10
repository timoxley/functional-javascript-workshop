"use strict"

var loremIpsum = require('lorem-ipsum')
var runner = require('../../runner')

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min)) + min)
}

function makeUser() {
  return {
    id: randomInt(0, 1000),
    name: loremIpsum().split(' ').slice(0, 2).map(function(word) {
      word[0] = word[0].toUpperCase();
      return word;
    }).join(' ')
  }
}

function makeListOfUsers() {
  return Array.apply(null, { length : randomInt(10, 100) }).map(makeUser)
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

module.exports = runner.custom(function(fx, good, lists) {
  var test = fx(good)

  var goodLists = 0

  lists.forEach(function(list) {
    test(list) && ++goodLists
  })

  return 'found ' + goodLists + ' good lists!'
}).hideInput(good, lists)
