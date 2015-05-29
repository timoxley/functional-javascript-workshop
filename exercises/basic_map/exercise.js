"use strict"

var random = require('../randomizer')
var runner = require('../runner')

var input = random.arrayOfInts(20, 0, 9)

var usedMap = false
var regularMap = Array.prototype.map

Array.prototype.map = function() {
  usedMap = true
  return regularMap.apply(this, arguments)
}

module.exports = runner.init(function() {
  usedMap = false
}).wrapUp(function(callback) {
  if (!usedMap) {
    this.emit('fail', this.__('didnt_use_map'));
  } else {
    this.emit('pass', this.__('used_map'));
  }
  callback(null, usedMap)
})(input)
