var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(Array.prototype.slice.call(arguments)))
  }
}

module.exports = logger
