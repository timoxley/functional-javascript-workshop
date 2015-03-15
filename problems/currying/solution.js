function curryN(fn, n) {
  var args = n || fn.length;
  return 1 == n ? fn : function(arg){
    return curryN(fn.bind(null, arg), args - 1);
  }
}

module.exports = curryN
