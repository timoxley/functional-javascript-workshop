module.exports = function(User) {
  function BetterUser() {
    User.apply(this, arguments)
  }

  function C() {}
  C.prototype = User.prototype
  BetterUser.prototype = new C()

  BetterUser.prototype.toString = function() {
    return '[BetterUser: '+this.displayName()+']'
  }

  return BetterUser
}
