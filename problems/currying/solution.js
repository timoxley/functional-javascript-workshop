function curryN(fn, n) {
  // If `n` argument was omitted, use the function .length property.
  if (typeof n !== 'number') n = fn.length

  function getCurriedFn(prev) {
    return function(arg) {
      // Concat the just-specified argument with the array of
      // previously-specified arguments.
      var args = prev.concat(arg)
      // Not all arguments have been satisfied yet, so return a curried
      // version of the original function.
      if (args.length < n) return getCurriedFn(args)
      // Otherwise, invoke the original function with the arguments and
      // return its value.
      else return fn.apply(this, args)
    };
  }

  // Return a curried version of the original function.
  return getCurriedFn([])
}

module.exports = curryN

// Solution Source:
// http://benalman.com/news/2012/09/partial-application-in-javascript/#manually-specifying-function-arity
