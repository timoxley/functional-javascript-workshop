function map(arr, fn, context) {
  // don't forget the other arguments to both Array#map
  // and the function you pass to it!
  // I didn't check for them in the test but give yourself a
  // pat on the back if you thought about them!
  //
  // See:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  //
  return arr.reduce(function(acc, item, index, arr) {
    return acc.concat(fn.call(context, item, index, arr))
  }, [])
}

// do not edit below this line

console.log(map($input, $operation))
