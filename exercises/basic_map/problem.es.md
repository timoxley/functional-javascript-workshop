# Tarea

Convert the following code from a for-loop to Array#map:

```js
function doubleAll(numbers) {
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
}

module.exports = doubleAll;
```

## Argumentos

- numbers: An Array of 0 to 20 Integers between 0 and 9

## Condiciones

- Your solution should use Array.prototype.map()
- No uses ciclos `for/while` o `Array#forEach`.
- No crees ninguna función innecesaria, e.j. funciones auxiliares.

## Recursos

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Plantilla

```js
function doubleAll(numbers) {
  // TU SOLUCIÓN
}

module.exports = doubleAll;
```
