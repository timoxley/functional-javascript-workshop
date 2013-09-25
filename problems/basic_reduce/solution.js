function countWords(arr) {
  return arr.reduce(function(prev, curr) {
    prev[curr] = ++prev[curr] || 1
    return prev
  }, {})
}

module.exports = countWords
