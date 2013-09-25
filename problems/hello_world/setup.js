var input = require('../../input')

module.exports = input(require('lorem-ipsum')()).wrap(function(input, mod) {
  console.log('input:', input[0])
  console.log('output:', mod(input[0]))
})
