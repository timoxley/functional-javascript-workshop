module.exports = function(User) {
  function BetterUser() {
    User.apply(this, arguments)
  }

  BetterUser.prototype = Object.create(User.prototype, {constructor: BetterUser})

  BetterUser.prototype.toString = function() {
    return '[BetterUser: '+this.displayName()+']'
  }

  return BetterUser
}
