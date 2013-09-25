var input = require('../../input')

function randomInt(min, max) {
  return Math.floor((Math.random() * max - min) + min)
}

module.exports = input(new Array(randomInt(10, 100))
.join(',').split(',')
.map(function() {
  return { message: require('lorem-ipsum')() }
})).wrap(function(input, getShortMessages) {
  var messages = input[0]
  console.log(getShortMessages(messages))
})
