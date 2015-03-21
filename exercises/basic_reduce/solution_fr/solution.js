function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 // incrémenter ou initialiser à 1
    return countMap
  }, {}) // le 2e argument de reduce initialise `countMap` à `{}`
}

module.exports = countWords
