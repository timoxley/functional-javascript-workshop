module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(acc, item) {
    acc.push(fn.call(thisArg, item))
    return acc
  }, [])
}
