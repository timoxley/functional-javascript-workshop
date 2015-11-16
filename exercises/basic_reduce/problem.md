# Task

Given an Array of strings, use `Array#reduce` to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

## Example

```js
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

console.log(countWords(inputWords))

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }
```

## Arguments

* inputWords: An array of random Strings.

## Conditions

* Do not use any for/while loops or Array#forEach.
* Do not create any unnecessary functions e.g. helpers.

## Resources

* https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## Boilerplate

```js
function countWords(inputWords) {
  // SOLUTION GOES HERE
}

module.exports = countWords
```
