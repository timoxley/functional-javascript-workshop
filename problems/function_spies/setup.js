"use strict"

var input = require('../../input')
var lorem = require('lorem-ipsum')

module.exports = input(Array.apply(null, {length: Math.random() * 20}).map(function() {
  return lorem().split(' ')
})).wrap(function(input, Spy) {
  input = input[0]
  var assert = require('assert')

  console.log.bind = function () {
    throw new Error('Try implementing this without bind!')
  }

  var count = 0
  var parent = {
    test: function() {
      assert.deepEqual([].slice.call(arguments), input[count], "Check you are passing ALL the arguments! Hint: Function#apply")
      assert.strictEqual(this, parent, "Check the function's this! Hint: Function#apply")
      return arguments
    }
  }
  var originalFn = parent.test.bind(parent)
  var spy = Spy(parent, 'test')

  input.forEach(function(args, i) {
    console.log.apply(console, args)
    count = i
    assert.deepEqual(originalFn.apply(parent, args), parent.test.apply(parent, args), "Check your function's return value!")
  })

  console.log('Method called %d times. ', spy.count)
})
