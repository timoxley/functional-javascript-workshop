function repeat(operation, num) {
  if (num <= 0) return;

  operation();

  // libera el control cada 10
  // iteraciones o similar
  // 10 es aleatorio.
  if (num % 10 === 0) {
    setTimeout(function() {
      repeat(operation, --num);
    });
  } else {
    repeat(operation, --num);
  }
}

module.exports = repeat;
