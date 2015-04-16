"use strict"

var deepEqual = require('deep-eql')
var inspect = require('util').inspect
var loremIpsum = require('lorem-ipsum')
var random = require('../randomizer')
var runner = require('../runner')

// All deepEqual impls (assert, deep-eql…) seem to b0rk when multiple objects
// in an array share the same `id` value (wtf?!), so we make sure they're unique.
var userCount = random.int(10, 20)
var userIds = []
while (userIds.length < userCount) {
  var id = random.int(0, 1000)
  if (-1 !== userIds.indexOf(id)) continue
    userIds.push(id)
}

var users = random.arrayOf(userCount, function() {
  return {
    id: userIds.shift(),
    name: random.words(2, { capitalized: true })
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
    }, random.int(0, 1000))
  }
  var done = function(submittedUsers) {
    clearTimeout(tooLong)
    console.log(submittedUsers)

    if (!deepEqual(submittedUsers, users)) {
      self.emit('fail', self.__('bad_result', inspect(users), inspect(submittedUsers)))
      return callback(null, false)
    }

    console.log(self.__('all_loaded', submittedUsers.length))
    callback(null, true)
  }

  fx.call(fx, ids, load, done)
  var tooLong = setTimeout(function() {
    self.emit('fail', self.__('took_too_long'))
    callback(null, false)
  }, 1000)
}).quiet(users)
