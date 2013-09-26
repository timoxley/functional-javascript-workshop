"use strict"

var input = require('../../input')

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

module.exports = input(new Array(randomInt(0, 20))
.join(',')
.split(',')
.map(function() {
  return randomInt(0, 10)
})).wrap(function(input, mod) {
  var numbers = input[0]
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

  console.log('Matched %d of %d valid objects from %d total.', mod.apply(mod, objects), valid, objects.length)
})
