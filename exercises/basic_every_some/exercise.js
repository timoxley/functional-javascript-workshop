"use strict"

var random = require('../randomizer')
var runner = require('../runner')

function makeUser() {
  return {
    id: random.int(0, 1000),
    name: random.words(2, { capitalized: true })
  }
}

function makeListOfUsers() {
  return random.arrayOf(10, 100, makeUser)
}

var good = makeListOfUsers()
var bad = makeListOfUsers()
var lists = random.arrayOf(20, function() {
  return random.arrayOf(20, function() {
    if (Math.random() < 0.95) {
      return good[random.int(0, 10)]
    } else {
      return bad[random.int(0, 10)]
    }
  })
})

var exercise = module.exports = runner.custom(function(fx, good, lists) {
  var test = fx(good)

  var goodLists = 0

  lists.forEach(function(list) {
    test(list) && ++goodLists
  })

  return exercise.__('found_good_lists', goodLists)
}).hideInput(good, lists)
