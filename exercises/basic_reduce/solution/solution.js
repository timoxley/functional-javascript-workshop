function countWords(arr) {
  return arr.reduce(function(accumulator, current_word) {
    accumulator[current_word] = ++accumulator[current_word] || 1 // increment or initialize to 1
    return accumulator
  }, {}) // second argument to reduce initialises accumulator to {}
}

module.exports = countWords
