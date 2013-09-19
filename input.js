module.exports = function(input, hydrate) {
  hydrate = hydrate || function() {}
  return function() {
    return {
      args: [JSON.stringify(input), hydrate.toString()],
      solutionExecWrap: __filename,
      execWrap: __filename
    }
  }
}

module.exports.init = function() {
  global.$input = JSON.parse(process.argv[4])
  eval('(' +process.argv[5] + ')()') // whatever.
}
