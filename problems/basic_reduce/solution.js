function countStrings(arr) {
  return arr.reduce(function(prev, curr) {
    prev[curr] = ++prev[curr] || 1
    return prev
  }, {})
}

// do not edit below this line

console.log(countStrings($input))
