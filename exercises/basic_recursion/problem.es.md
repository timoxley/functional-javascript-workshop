La recursión es un concepto de programación fundamental el cual puede llevar a soluciones elegantes y eficientes a problemas algorítmicos. De hecho, la recursion es tan poderosa, que todo el comportamiento de iteración puede ser definido usando funciones recursivas. Encontrarás que la recursión es indispensable cuando se itera sobre estructuras de datos anidados.

Una función recursiva es una función la cual se llama a sí misma. Por ejemplo, esta función recursiva tomará un `array` de palabras, y retornara un `array` de esas palabras, en mayúscula.

```js
function toUpperArray(items) {
  if (!items.length) return []; // condición final
  var head = items[0]; // elemento con el que trabajar
  head = head.toUpperCase(); // ejecuta acción
  var tail = items.slice(1); // siguiente
  return [head].concat(toUpperArray(tail)); // paso recursivo
}

toUpperArray(["hello", "world"]); // => ['HELLO', 'WORLD']
```

El punto de este ejercicio es familiarizarte con la recursion al implementar una interfaz familiar usando funciones recursivas.

# Tarea

Implementa `Array#reduce` usando recursión.

Para probar que tu recursión funciona correctamente, usaremos tu implementación de `reduce` para ejecutar nuestra solución al previo problema de `basic_reduce`. e.j: tu función de `reduce` se le pasará un `array` de palabras, y una función, y el valor inicial el cual retornará un objeto conteniendo el contado por cada palabra encontrada en el `array`. No necesitas implementar esta función, se te proveerá a tu implementación de `reduce`.

Para simplificar, tu implementación de `reduce` **debe replicar el comportamiento de un reductor sin un valor inicial**. Puedes asumir que el valor inicial siempré será provisto.

## Argumentos

- `arr`: Un `Array` el cual reducir.
- `fn`: Function para usar en el paso de reducción. Al igual que `Array#reduce`, esta función debe ser pasada `valorPrevio`, `valorActual`, `indice` y el `array` que estamos iterando.
- `init`: Valor inicial de la reducción. A diferencia de `Array#reduce`, este valor es requerido (puedes asumir que siempre te será provisto).

## Ejemplo

```js
// Tu función de reduce se debería comportar al
// igual que `Array#reduce`, pero tomará el `array`
// para operar como el primer argumento:

reduce(
  [1, 2, 3],
  function(prev, curr, index, arr) {
    return prev + curr;
  },
  0
);
// => 6
```

## Condiciones

- No uses ciclos `for/while` o `Array#forEach`.
- No uses ningún método de `Array` como `Array#map` o `Array#reduce`

## Recursos

- https://en.wikipedia.org/wiki/Recursion
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## Plantilla

```js
function reduce(arr, fn, initial) {
  // TU SOLUCIÓN
}

module.exports = reduce;
```
