module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(acc, item, index, arr) {
    acc[index] = (fn.call(thisArg, item, index, arr))
    return acc
  }, [])
}
