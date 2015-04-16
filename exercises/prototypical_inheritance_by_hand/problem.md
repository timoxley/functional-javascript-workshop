We're going to implement a rough analog of JavaScript's prototypical inheritance by hand, to ensure we fully understand exactly how prototypical inheritance fits together.

# Task

Implement the functions `New`, `Create` and `Lookup` to simulate JavaScript's `new`, `Object.create` and property lookup mechanisms respectively.

Throughout this exercise, you will avoid using any built-in JavaScript inheritance features.  Instead, you will need to use your own New, Create and Lookup functions as well as `__PROTO__` to represent an instance's prototype, and `PROTOTYPE` to represent a constructor's prototype.

i.e.

* New(Apple, 1,2,3) == new Apple(1,2,3)
* `obj.__PROTO__` == obj.__proto__ || Object.getPrototypeOf(obj)
* `Constructor.PROTOTYPE` == `Constructor.prototype`

## Part 1: Lookup

`Lookup` will simulate the behaviour of JavaScript's property lookup mechanism, or "Getters".  When you reference any object's property in JavaScript, it will 'walk up the prototype chain' to find the property, if found it will return its value, otherwise it will return `undefined`.

Your `Lookup` function will be passed a context object, and the property String that we're looking for. If the property is found on the current context, return that property, otherwise check the context's prototype, `__PROTO__`.

If a property cannot be found in the object's prototype chain, simply return `undefined`.

```js

var cat = {
  color: 'black'
}

var kitten = {
  size: 'small'
}

var otherKitten = {
  size: 'small',
  color: 'grey'
}

kitten.__PROTO__ = cat
otherKitten.__PROTO__ = cat

Lookup(kitten, 'color')  // => 'black'
Lookup(otherKitten, 'color')  // => 'grey'

Lookup(kitten, 'wings')  // => undefined

// changing properties on the prototype should
// affect any instances that inherit from it.
cat.color = 'blue'

Lookup(kitten, 'color')  // => 'blue'

// overridden properties should still work
Lookup(otherKitten, 'color')  // => 'grey'

```

Side Note: in JavaScript, when you 'get' a property (i.e. lookup), the engine walks up the prototype chain to find the value, but if you 'set' a property it ignores the prototype chain and simply sets the value on the current object.  We could have implemented a 'Setter' as an exercise, but since there's no magic, it's pretty trivial:

```js

function Setter(context, property, value) {
  return context[property] = value
}

```

## Part 2: Create

`Create` will simulate the behaviour of `Object.create`.

`Create` will be passed an object, and you must return a new object with its prototype (`__PROTO__`) set to the supplied object.

```js
fuction Cat() {

}

Cat.PROTOTYPE.speak = function() {
  return 'Meow!'
}

function Kitten() {
  Cat.apply(this, arguments)
}

Kitten.PROTOTYPE = Create(Cat.PROTOTYPE)

var kitten = New(Kitten)
Lookup(kitten, 'speak')() // => 'Meow!'

```

## Finale: New

`New` will simulate the behaviour of JavaScript's `new` keyword.

The first argument passed to `New` will be a constructor function (i.e. a type).  Subsequent parameters must be passed to the constructor function when creating the the new object.

`New` will return new objects using the supplied constructor function.

```js

function Cat(color) {
  this.color = color
}

var blackCat = New(Cat, 'black')
blackCat.color // => black

var brownCat = New(Cat, 'brown')
brownCat.color // => brown

```

The constructor function passed to `New` may have a `.PROTOTYPE` property.  All objects created with this constructor will have their `__PROTO__` set to the constructor's `.PROTOTYPE` property.

```js

function Cat(color) {
  this.color = color
}

Cat.PROTOTYPE.speak = function() {
  return 'Meow!'
}

function Kitten() {
  Cat.apply(this, arguments)
}

Kitten.PROTOTYPE = Create(Cat)

Kitten.PROTOTYPE.speak = function() {
  return 'Mew.'
}

var blackCat = New(Cat, 'black')
blackCat.color // => black

var brownCat = New(Cat, 'brown')
brownCat.color // => brown

```

Prototype properties should be available in the constructor:

```js
function Cow() {
  // lookup this.moo:
  console.log('moo', Lookup(this, 'moo'));
}

// this step is done for you automatically in 'real' javascript.
Cow.PROTOTYPE = {}

Cow.PROTOTYPE.moo = true
var cow = New(Cow) // 'moo' true

```

We also need to simulate one other behaviour of the `new` keyword: If the constructor itself returns a value, `New` will return that value.

```js

function Cat(){
  return 3
}
var cat = new Cat() // 3
var cat = New(Cat) // 3

```

## Conditions

* Do not use any built-in javascript prototypical inheritance features.
* Do not call `new`
* Do not use `__proto__`, `Object.getPrototypeOf` or `Object.setPrototypeOf`

## Hints

* Use `hasOwnProperty` to discover if an object has a property.


## Boilerplate

```js

/**
 * @param context {Object} Initial object to start searching for `property`
 * @param property {String} name of property we are trying to locate.
 * @return {Mixed} The value of `property` in `context` or somewhere in its prototype chain.
 */

function Lookup(context, property) {

}

/**
 * @param proto {Object} The prototype to use for the created object.
 * @return A new Object whose prototype is set to `proto`
 */

function Create(proto) {

}

/**
 * @param Constructor {Function} Constructor for a new type.
 * @return new instance of the type defined by `Constructor`.
 */

function New(Constructor) {

}

module.exports = {
  Lookup: Lookup,
  Create: Create,
  New: New
}

```
