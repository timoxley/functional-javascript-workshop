function duckCount() {
  return Array.prototype.filter.call(arguments, function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

module.exports = duckCount
