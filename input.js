var path = require('path')

var serialize = function(input) {
  if (typeof input !== 'function') return JSON.stringify(input)
  return JSON.stringify({
    isFunction: true,
    body: input.toString()
  })
}

var deserialize = function(input) {
  var out = JSON.parse(input)
  if (!out.isFunction) return out
  eval('out = (' + out.body + ')')
  return out
}

module.exports = function() {
  var args = Array.prototype.slice.call(arguments).map(serialize)

  function input() {
    var opts = {
      args: args,
      solutionExecWrap: __filename,
      execWrap: __filename,
    }
    return opts
  }
  input.wrap = function(fn) {
    args.push(serialize(fn))
    return input
  }
  return input

}

module.exports.init = function() {
  var mod = require(path.resolve(process.cwd(), process.argv[3]))
  var args =  process.argv.slice(4).map(deserialize)
  var wrap = args.pop()
  wrap(args, mod)
}
