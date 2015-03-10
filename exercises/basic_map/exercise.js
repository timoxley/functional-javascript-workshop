"use strict"

var runner = require('../../runner')

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min)) + min)
}

var input = new Array(randomInt(0, 19)).join(',').split(',')
  .map(function() { return randomInt(0, 9) })

var regularMap = Array.prototype.map, usedMap
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
