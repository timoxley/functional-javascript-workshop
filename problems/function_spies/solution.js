function Spy(target, method) {
  var originalFunction = target[method]
  var result = {
    count: 0
  }

  target[method] = function() {
    result.count++
    return originalFunction.apply(target, arguments)
  }

  return result
}

module.exports = Spy
