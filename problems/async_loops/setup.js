"use strict"

var input = require('../../input')
var lorem = require('lorem-ipsum')

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

module.exports = input(new Array(randomInt(10, 20))
.join(',')
.split(',')
.map(function() {
  return {
    id: randomInt(0, 1000),
    name: lorem().split(' ').slice(0, 2).map(function(word) {word[0] = word[0].toUpperCase(); return word;}).join(' ')
  }
})).wrap(function(input, mod) {

  var assert = require('assert')
  var inspect = require('util').inspect

  var users = input[0]
  var ids = users.map(function(user) {return user.id})
  var load = function(id, fn) {
    setTimeout(function() {
      var match = users.filter(function(user) {return user.id === id})
      if (match.length) fn(match[0])
      else fn(null)
    }, Math.random() * 1000)
  }
  var done = function(submittedUsers) {
    clearTimeout(tooLong)
    console.log(submittedUsers)

    assert.deepEqual(submittedUsers, users, 'expected: \n' + inspect(users) + '\n but got: \n'+ inspect(submittedUsers))

    console.log('All %d users loaded!', submittedUsers.length)
  }

  mod.call(mod, ids, load, done)
  var tooLong = setTimeout(function() {
    throw new Error('Took too long!')
  }, 1000)
})
