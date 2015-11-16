# Task

Create a new "BetterUser" type that extends "User" by overriding the User's `.toString` method.

Your exported function will be passed the constructor function for a "User" type that looks like this:

```js
/**
 * User Constructor.
 *
 * @param title {String} Title for User, e.g. 'Mr.', 'Mrs.', 'Dr.', etc.
 * @param name {String} Name of User e.g. 'John Smith'
 */

function User(title, name) {
  this.title = title
  this.name = name
  console.info('NEW USER: ' + this)
}

/**
 * Creates full display name for a user.
 * @return {String} Display name
 */

User.prototype.displayName = function() {
  return this.title + ' ' + this.name
}

/**
 * @return {String} Formatted name & title
 */

User.prototype.toString = function() {
  return '[User:'+this.displayName()+']'
}
```

Note: you do not need to copy this into your solution.

## Example

From your exported function, return a `BetterUser` constructor function that extends `User` with a custom `toString` method that works like so:

```js
var joe = new BetterUser('Mr.', 'Joe Smith') // pass in title and name
console.log('Hello ' + joe) // 'Hello [BetterUser: Mr. Joe Smith]'
```

## Conditions

* Don't call the User constructor unnecessarily!
* Don't use `__proto__`
* Do not create any unnecessary functions e.g. helpers.

## Resources

* http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/
* http://tobyho.com/2011/11/11/js-object-inheritance/
* http://hughfdjackson.com/javascript/2012/01/05/prototypes:-the-short%28est-possible%29-story/

## Boilerplate

```js
// User is a constructor
function upgradeUser(User) {

  // EDIT THESE AS NECESSARY
  function BetterUser() {

  }

  return BetterUser
}

module.exports = upgradeUser
```
