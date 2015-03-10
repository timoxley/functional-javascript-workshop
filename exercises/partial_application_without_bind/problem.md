Partial application allows you to create new functions from existing functions, while fixing some number of arguments. After setting the arguments to be partially applied, you get a new function ready to take the rest of the arguments and perhaps execute the original function.

More formally: Partial application refers to the process of fixing a number of arguments to a function, producing another function of smaller arity.

As an example, say we have a function `add`, that takes 2 arguments and adds them together:

```js

function add(x, y) {
  return x + y
}

add(10, 20) // => 30

```

Now, pretend we have a function `partiallyApply`. `partiallyApply` takes a function, and some arguments to 'partially apply'.

Here we 'partially apply' the first parameter, `x`, of our `add` function:

```js

var addTen = partiallyApply(add, 10) // fix `x` to 10

```

`addTen` is a new function that takes the `y` parameter of `add`. `add` has not yet been called!

Once we pass the argument for `y`, we can execute the original `add` function:

```js

addTen(20) // => 30
addTen(100) // => 110
addTen(0) // => 10

// etc

```

All of the above examples are same as calling `add(10, y)`, where `y` was supplied in the call to the appropriately named `addTen`.

# Task

Use partial application to create a function that fixes the first argument to `console.log`.  i.e. Implement a logging function that prepends a namespace string to its output.

Your implementation should take a namespace String and return a function that prints messages to the console with the namespace prepended.

You should use `Function#apply` to implement the partial application.

Make sure *all* arguments passed to the returned logging function are printed.

** Print the output to the console directly **

## Arguments

* namespace: a String to prepend to each message passed to the returned function.

## Example

```js

var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info
```

## Conditions

* Do not use Function#bind
* Use Function#apply

## Boilerplate

```js

var slice = Array.prototype.slice

function logger(namespace) {
  // SOLUTION GOES HERE
}

module.exports = logger

```

## Resources

* https://en.wikipedia.org/wiki/Partial_application
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

## Hints

Remember `console.log` takes any number of arguments and prints them, separated by spaces:

```js

console.log('hello', 'world') // => 'hello world'
console.log(1,2,3) // => 1 2 3

```

We simply want to 'partially apply' the first argument to `console.log`.

`Function.prototype.apply` allows us to execute a function, supply a new 'value for this' (we can ignore in this case), and then *an array of arguments to apply to the function*:


```js

add(10, 20) // => 30
add.apply(null, [10, 20]) // => 30

```

Also contrast `apply` with `Function.prototype.call`:

```js

add.apply(null, [10, 20]) // => 30
add.call(null, 10, 20) // => 30

```
