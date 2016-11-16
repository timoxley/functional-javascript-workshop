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

Helps & Hints: 
The main idea of a reduce function is that you are reducing the values in an array down to a single value.
  
When you use the javascript array method for reduce, many of the examples have a one line return for this method, but it can be easier
to return the result after performing your work. 

```js
var sum = [0, 1, 2, 3].reduce(function(accumulator, current_value) {
  
    accumulator = accumulator + current_value 
  
    return accumulator
}, 0)
// sum is 6
```