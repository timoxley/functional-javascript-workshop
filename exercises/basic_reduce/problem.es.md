# Tarea

Given an Array of strings, use `Array#reduce` to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

## Ejemplo

```js
var inputWords = ["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"];

console.log(countWords(inputWords));

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }
```

## Argumentos

- inputWords: An array of random Strings.

## Condiciones

- Do not use any for/while loops or Array#forEach.
- No crees ninguna función innecesaria, e.j. funciones auxiliares.

## Recursos

- https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## Plantilla

```js
function countWords(inputWords) {
  // TU SOLUCIÓN
}

module.exports = countWords;
```
