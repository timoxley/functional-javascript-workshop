# Task

Use Array#reduce to implement a simple version of Array#map.

## Expected Output

A function `map` that applies a function to each item in an array and collects the results in a new Array.

```js

var nums = [1,2,3,4,5]

// `map` is your exported function
var output = map(nums, function double(item) {
  return item * 2
})

console.log(output) // => [2,4,6,8,10]

```

## Arguments

* input: an arbitrary Array of any type.
* operation: an arbitrary Function which can be applied to items in `input`.

## Hints

* No need to implement the optional `thisArg` argument of `Array.prototype.map`, bonus points if you do!

## Resources

* https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

## Boilerplate

```js

module.exports = function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
}

```

