"use strict"

var deepEqual = require('deep-eql')
var inspect = require('util').inspect
var loremIpsum = require('lorem-ipsum')
var runner = require('../../runner')

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min)) + min)
}

// All deepEqual impls (assert, deep-eql…) seem to b0rk when multiple objects
// in an array share the same `id` value (wtf?!), so we make sure they're unique.
var userCount = randomInt(10, 20)
var userIds = []
while (userIds.length < userCount) {
  var id = randomInt(0, 1000)
  if (-1 !== userIds.indexOf(id)) continue
    userIds.push(id)
}

var users = Array.apply(null, { length: userCount }).map(function() {
  return {
    id: userIds.shift(),
    name: loremIpsum().split(' ').slice(0, 2).map(function(word) {
      word[0] = word[0].toUpperCase();
      return word;
    }).join(' ')
  }
})

var fx

module.exports = runner.custom(function(f) {
  fx = f
}).wrapUp(function(callback) {
  var self = this
  var ids = users.map(function(user) {return user.id })
  var load = function(id, fn) {
    setTimeout(function() {
      var match = users.filter(function(user) {return user.id === id})
      if (match.length) fn(match[0])
      else fn(null)
    }, Math.floor(Math.random() * 1000))
  }
  var done = function(submittedUsers) {
    clearTimeout(tooLong)
    console.log(submittedUsers)

    if (!deepEqual(submittedUsers, users)) {
      self.emit('fail', 'expected: \n' + inspect(users) + '\n but got: \n'+ inspect(submittedUsers))
      return callback(null, false)
    }

    console.log('All %d users loaded!', submittedUsers.length)
    callback(null, true)
  }

  fx.call(fx, ids, load, done)
  var tooLong = setTimeout(function() {
    self.emit('fail', 'Took too long!')
    callback(null, false)
  }, 1000)
}).quiet(users)
