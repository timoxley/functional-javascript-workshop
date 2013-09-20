function getShortMessages(arr) {
  return arr.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    return item.message
  })
}

// do not edit below this line

console.log(getShortMessages($input))
