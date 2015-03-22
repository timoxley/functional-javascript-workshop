function repeat(operation, num) {
  if (num <= 0) return

  operation()

  // relâcher le contrôle tous les 10 tours
  // (10 est une taille de lot arbitraire).
  if (num % 10 === 0) {
    setTimeout(function() {
      repeat(operation, --num)
    })
  } else {
    repeat(operation, --num)
  }
}

module.exports = repeat
