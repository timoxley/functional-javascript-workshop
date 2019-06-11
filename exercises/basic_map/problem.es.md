# Tarea

Convierte el siguiente código de un ciclo `for` a un `Array#map`:

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

- `numbers`: Un `Array` de 0 a 20 enteros entre 0 y 9.

## Condiciones

- Tu solución debería user `Array.prototype.map()`
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
