function reduce(arr, fn, initial) {
  if (arr.length === 0) return initial // end condition
  var subset = arr.slice(0, arr.length - 1) // setup recursive call with left subset
  return fn(reduce(subset, fn, initial), arr[arr.length - 1]) // pass last element to traverse ltr
}

module.exports = reduce
