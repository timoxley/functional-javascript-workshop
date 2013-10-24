function repeat(operation, num) {
  if (num <= 0) return

  operation()

  // release control every 500 or so
  // iterations. In this case 500 is
  // fairly arbitrary.
  if (num % 499 === 0) {
    setTimeout(function() {
      repeat(operation, --num)
    })
  } else {
    repeat(operation, --num)
  }
}

module.exports = repeat
