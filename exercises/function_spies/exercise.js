"use strict"

var deepEqual = require('deep-eql')
var random = require('../randomizer')
var runner = require('../runner')
var loremIpsum = require('lorem-ipsum')
var util = require('util')

var input = random.arrayOf(20, function() { return loremIpsum().split(' ') })

var exercise = module.exports = runner.custom(function(Spy, input) {
  var count = 0, slice = Array.prototype.slice
  var parent = {
    test: function() {
      if (!deepEqual(slice.call(arguments), input[count])) {
        exercise.emit('fail', exercise.__('not_all_args'))
      }
      if (this !== parent) {
        exercise.emit('fail', exercise.__('incorrect_this'))
      }
      return arguments
    }
  }
  var originalFn = parent.test.bind(parent)
  var spy = Spy(parent, 'test')

  var result = []
  input.forEach(function(args, i) {
    result.push(util.format.apply(util, args))
    count = i
    if (!deepEqual(originalFn.apply(parent, args), parent.test.apply(parent, args))) {
      exercise.emit('fail', exercise.__('incorrect_return'))
    }
  })

  result.push(exercise.__('call_times', spy.count))
  return result
}).quiet(input)
