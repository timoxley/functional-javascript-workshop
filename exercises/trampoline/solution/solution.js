function repeat(operation, num) {
  return function() {
    if (num <= 0) { return; }
    operation();
    return repeat(operation, --num);
  };
}

function trampoline(fn) {
  while(fn && typeof fn === 'function') {
    return fn();
  }
}

module.exports = function(operation, num) {
  return trampoline(function() {
    return repeat(operation, num);
  });
};

