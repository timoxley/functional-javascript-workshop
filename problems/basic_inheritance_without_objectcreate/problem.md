# Task

Do the exact same task as "Basic Inhertance with Object.create", except don't use Object.create!

Details copied below for your reference.

## Conditions

* Don't call the User constructor unnecessarily!
* Don't use `Object.create`.
* Don't use `__proto__`

## Hints

* Prototypes are always Objects
* Your `BetterUser` instances need to 'inherit' from `User.prototype`
* No reason you can't create dummy objects in the inheritance tree
* Understand what `Object.create` does.

## Resources

* http://www.bennadel.com/blog/2184-Object-create-Improves-Constructor-Based-Inheritance-In-Javascript-It-Doesn-t-Replace-It.htm

## Previous Task Definition

Create a "BetterUser" that extends "User" by overriding the User's `.toString` method.

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
  return '[User: '+this.displayName()+']'
}
```

Note: you do not need to copy this into your solution.

## Example

From your exported function, return a `BetterUser` constructor function that extends `User` with a custom `toString` method that works like so:

```js
var joe = new BetterUser('Mr.', 'Joe Smith') // pass in title and name
console.log('Hello ' + joe) // 'Hello [BetterUser: Mr. Joe Smith]'
```

## Boilerplate

```js
// User is a constructor
function upgradeUser(User) {

  // EDIT THESE AS NECESSARY
  function BetterUser() {

  }

  return BetterUser
}

module.exports = upgradeuser
```
