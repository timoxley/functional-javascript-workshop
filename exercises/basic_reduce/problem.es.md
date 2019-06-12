# Tarea

Dado un `Array` de `strings`, usa `Array#reduce` para crear un objeto que contenga el numero de veces que cada `string` se encuentra en el `array`. Devuelve el objeto directamente (no hay necesidad de usar `console.log`).

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

- `inputWords`: Un `array` de `strings` aleatorios.

## Condiciones

- No uses ciclos `for/while` o `Array#forEach`.
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
