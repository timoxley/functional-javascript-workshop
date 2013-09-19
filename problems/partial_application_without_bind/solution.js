var slice = Array.prototype.slice
function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

// do not edit below this line

$test(logger)
