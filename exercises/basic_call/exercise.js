"use strict"

var random = require('../randomizer')
var runner = require('../../runner')
var util = require('util')

var input = random.arrayOfInts(20, 0, 10)

module.exports = runner.custom(function(fx, numbers) {
  var valid = 1
  var objects = [{quack: true}].concat(numbers.map(function(num) {
    switch(num) {
      case 0:
        valid++
        return {quack: true}
        break;
      case 1:
        valid++
        return {quack: false}
      case 2:
        valid++
        var obj = Object.create(null)
        obj.quack = true
        return obj
      case 3:
        valid++
        var obj = Object.create(null)
        obj.quack = undefined
        return obj
      case 3:
        var proto = { quack: true }
        return Object.create(proto)
      case 4:
        var proto = Object.create(null)
        proto.quack = true
        return Object.create(proto)
      case 5:
        valid++
        var proto = Object.create(null)
        proto.quack = true
        var obj = Object.create(proto)
        obj.quack = undefined
        return obj
      case 6:
        valid++
        return {
          quack: true,
          hasOwnProperty: function() {
            return false
          }
        }
      default:
        return {}
    }
  }))

  return util.format('Matched %d of %d valid objects from %d total.', fx.apply(null, objects), valid, objects.length)
})(input)
