var input = require('../../input')

function randomInts(min, max) {
  return Math.floor(Math.random() * max + min - 1)
}

module.exports = input(new Array(randomInts(10, 100))
.join(',').split(',')
.map(function() {
  return {
    message: require('lorem-ipsum')()
  }
}))
