module.exports = function map(arr, fn, thisArg) {
  return arr.reduce(function(acc, item, index, arr) {
    return acc.concat(fn.call(thisArg, item, index, arr))
  }, [])
}
