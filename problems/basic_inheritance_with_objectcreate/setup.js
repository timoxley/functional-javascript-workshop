var input = require('../../input')

module.exports = input()
.wrap(function(words, extend) {

function User(title, name) {
    this.title = title
    this.name = name
    console.info('NEW USER: ' + this)
  }

  User.prototype.displayName = function() {
    return this.title + ' ' + this.name
  }

  User.prototype.toString = function() {
    return '[User: '+this.displayName()+']'
  }

  var BetterUser = extend(User)

  console.log('creating new users:')

  console.log("new User('Mrs.', 'Alice Smith')")
  var alice = new User('Mrs.', 'Alice Smith')
  console.log('')

  console.log("new BetterUser('Miss', 'Wei Lu')")
  var wei = new BetterUser('Miss', 'Wei Lu')
  console.log('')

  console.log("new BetterUser('Mr.', 'Joe Smith')")
  var joe = new BetterUser('Mr.', 'Joe Smith')
  console.log('')

  //Test inheritance
  console.log('Test inheritance')
  console.log('wei instanceof BetterUser: ', wei instanceof BetterUser)
  console.log('wei instanceof User: ', wei instanceof User)
  console.log('wei.displayName === User.prototype.displayName', wei.displayName === User.prototype.displayName)
})
