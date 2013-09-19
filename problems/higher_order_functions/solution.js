function repeat(fn, num) {
  // A for loop here would also be totally acceptable!
  Array.apply(null, new Array(num)).forEach(fn)
}

// do not edit below this line
repeat($operation, 5)
