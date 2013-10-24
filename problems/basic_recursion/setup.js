var input = require('../../input')
var lorem = require('lorem-ipsum')

module.exports = input(lorem({count: 1, units:'paragraphs'})
                       .replace(/([^\w ])/g, '')// remove non-words and spaces
                       .toLowerCase() // lowercase I guess
                       .split(' ') // create array of words
                      ).wrap(function(input, reduce) {
                          var result = reduce(input[0], function(prev, curr) {
                            prev[curr] = ++prev[curr] || 1
                            return prev
                          }, {})
                          console.log(result)
                      })
