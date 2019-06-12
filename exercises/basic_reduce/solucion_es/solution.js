function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1; // incrementa o lo inicia en 1
    return countMap;
  }, {}); // segundo argumento a reducir e inicia el countMap en `{}`
}

module.exports = countWords;
