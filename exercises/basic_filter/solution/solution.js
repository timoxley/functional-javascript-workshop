module.exports = function getShortMessages(messages) {
  return messages.map(function(item) {
    return item.message
  }).filter(function(item) {
    return item.length < 50
  })
}
