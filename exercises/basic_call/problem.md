JavaScript implements 'duck' typing. Duck typing is a style of dynamic typing in which an object's methods and properties determine the valid semantics, rather than its inheritance from a particular class or implementation of a specific interface. The name of the concept refers to the duck test, attributed to James Whitcomb Riley, which may be phrased as follows:

  "When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck"

In JavaScript, in order to write robust programs we sometimes need to check an object conforms to the type that we need.

We can use Object#hasOwnProperty to detect if an object 'has' a property defined on itself (i.e. not inherited from its prototype):

```js
var duck = {
  quack: function() {
    console.log('quack')
  }
}

duck.hasOwnProperty('quack') // => true
```

We didn't give the duck a .hasOwnProperty method, where did it come from?

Duck was created with the `{}` syntax, and as such it inherits from Object.prototype:

```js
var object = {quack: true}

Object.getPrototypeOf(object) === Object.prototype // => true
object.hasOwnProperty('quack')                     // => true
```

But what if an object doesn't inherit from Object.prototype?

```js
// create an object with 'null' prototype.
var object = Object.create(null)
object.quack = function() {
  console.log('quack')
}

Object.getPrototypeOf(object) === Object.prototype // => false
Object.getPrototypeOf(object) === null             // => true

object.hasOwnProperty('quack')
// => TypeError: Object object has no method 'hasOwnProperty'
```

We can still use `hasOwnProperty` from the `Object.prototype` though, if we call it with the `this` value set to something that 'looks like an object'. Function#call allows us to invoke any function with an altered `this` value.

```js
// the first argument to call becomes the value of `this`
// the rest of the arguments are passed to the function as per

Object.prototype.hasOwnProperty.call(object, 'quack') // => true
```

# Task:

Write a function `duckCount` that returns the number of arguments passed to it which have a property 'quack' defined directly on them. Do not match values inherited from prototypes.

Example:

```js
var notDuck = Object.create({quack: true})
var duck = {quack: true}
duckCount(duck, notDuck) // 1
```
## Arguments

* You will be passed 0-20 arguments. Each argument could be of any type with any properties. Some of these items will have a 'quack' property.

## Conditions

* Do not use any for/while loops or Array#forEach.
* Do not create any counter/accumulator variables.
* Do not create any unnecessary functions e.g. helpers.

## Hint

* The `arguments` variable, available in every function, is an *Object* that quacks like an *Array*:

```js
{
  0: 'argument0',
  1: 'argument1', // etc
  length: 2
}
```

## Resources

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments


## Boilerplate

```js
function duckCount() {
  // SOLUTION GOES HERE
}

module.exports = duckCount
```
