# Tarea

Escribe una función que te permita usar `Array.prototype.slice` sin usar `slice.call` o `slice.apply` para llamarla.
Normalmente tienes que usar `slice` con `call` o `apply`:

```js
var slice = Array.prototype.slice

function() {
  var args = slice.call(arguments) // esto funciona
}
```

Queremos que esto funcione:

```js
var slice = yourFunction

function() {
  var args = slice(arguments) // esto funciona
}
```

## Ejemplo

Una función `slice` que se comporta de la siguiente manera:

```js
var nums = [1, 2, 3, 4, 5];

// tu función slice debería comportarse
// similar a `slice`, excepto que toma el
// array como el primer argumento.

slice(nums, 0, 2); // [1, 2]
slice(nums, 1, 2); // [2]

// el `slice` normal usado para comparar
nums.slice(0, 2); // [1, 2]
nums.slice(1, 2); // [2]
```

## Condiciones

- No uses ciclos `for/while` o `Array#forEach`.
- No uses la palabra reservada `function` :D

## Pista

- Lo puedes resolver en una linea-
- Todas las funciones de heredan `call`, `apply` y `bind` del objeto `Function.prototype`.
- `Function#call` ejecuta el valor de this cuando es invocado, dentro de `algunaFuncion.call()`, el valor de `this` será `algunaFuncion`.
- `Function.call` por si misma es una función y hereda de `Function.prototype`.

```js
function myFunction() {
  console.log("se llamo mi función");
}

Function.prototype.call.call(myFunction); // => "se llamo mi función"
```

## Plantilla

```js
module.exports = // tu solución aquí;
```
