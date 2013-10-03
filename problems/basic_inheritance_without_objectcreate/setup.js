var input = require('../../input')

module.exports = input()
.wrap(function(words, extend) {

  function User(name, age) {
    this.name = name
    this.age = age
    console.info('NEW USER: ' + this)
  }

  var BetterUser = extend(User)

  console.log('creating new BetterUsers:')

  Object.create = function() {
    throw new Error('Do not use Object.create!')
  }

  console.log("new BetterUser('alice', 21)")
  var alice = new BetterUser('alice', 21)
  console.log('')

  console.log("new BetterUser('joe', 20)")
  var joe = new BetterUser('joe', 20)
  console.log('')

  Object.create = Object.prototype.create
})
