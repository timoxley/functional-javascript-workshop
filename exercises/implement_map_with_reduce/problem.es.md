# Tarea

Usa `Array#reduce` para implementar una versión simple de `Array#map`.

## Resultado esperado

Una función `map` que aplique una función a cada elemento en el `array` y recolecte el resultado en un nuevo `Array`.

```js
var nums = [1, 2, 3, 4, 5];

// `map` es la función que exportas
var output = map(nums, function double(item) {
  return item * 2;
});

console.log(output); // => [2,4,6,8,10]
```

## Argumentos

- `input`: Un `Array` aleatorio de cualquier tipo.
- `operation`: Una función arbitraria la cual puede ser aplicada a los elementos en `input`.

## Pista

- No hay necesidad de implementar el argumento opcional `thisArg` de `Array.prototype.map`, ¡puntos adicionales si lo haces!

## Recursos

- https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

## Plantilla

```js
function arrayMap(arr, fn) {
  // TU SOLUCIÓN
}

module.exports = arrayMap;
```
