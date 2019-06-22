La aplicación parcial te permite crear nuevas funciónes de funciónes existentes, mientras permite ajustar algún número de argumentos. Luego de ajustar algunos argumentos para ser aplicados parcialmente, obtienes una nueva función para obtener el resto de los argumentos y quizás ejecutar la función original.

Formalmente: La aplicación parcial se refiere al proceso de ajustar un número de argumentos para una función, produciendo una función con una aridad (cantidad de argumentos) menor.

Como ejemplo, digamos que tenemos una función `add`, que toma dos argumentos y los suma:

```js
function add(x, y) {
  return x + y;
}

add(10, 20); // => 30
```

Ahora, pretendamos que tenemos una función `partiallyApply` que toma una función y algunos argumentos para "aplicar parcialmente".

Aquí "aplicamos parcialmente" el primer parámetro, `x`, a nuestra función `add`:

```js
var addTen = partiallyApply(add, 10); // ajusta `x` a ser 10
```

`addTen` es una función nueva que toma como parámetro `y` de `add`. ¡`add` no ha sido llamada aún!

Una vez pasamos el argumento para `y`, podemos ejecutar la función original de`add`:

```js
addTen(20); // => 30
addTen(100); // => 110
addTen(0); // => 10

// etc
```

Todos los ejemplos de arriba son el mismo llamando `add(10, y)`, donde `y` fue provisto en la llamada a la función `addTen`.

# Tarea

Usa aplicación parcial para crear una función que ajuste el primer argumento de `console.log`. e.j. Implementa una función de impresión que agregue un `namespace` como sufijo al `string` que vaya a imprimir.

Tu implementación debería tomar un `string` como `namespace` y retornar una función que imprima el mensaje en consola con el `namespace` com prefijo.

Deberías utilizar `Function#apply` para implementar la aplicación parcial.

Asegurate que _todos_ los argumentos pasados a la función que retornes sean impresos.

**Imprime los argumentos directamente en la consola**

## Argumentos

- `namespace`: Un `string` que será el sufijo a cada mensaje enviado a la función retornada.

## Ejemplo

```js
var info = logger("INFO:");
info("este es un mensaje informativo");
// INFO: este es un mensaje informativo

var warn = logger("AVISO:");
warn("este es un aviso", "con mas información");
// AVISO: este es un aviso con mas información
```

## Condiciones

- No uses `Function#bind`.
- Usa `Function#apply`.

## Plantilla

```js
function logger(namespace) {
  // TU SOLUCIÓN
}

module.exports = logger;
```

## Recursos

- https://en.wikipedia.org/wiki/Partial_application
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

## Pista

Recuerda que `console.log` toma cualquier número de argumentos y los imprime, separados por espacios:

```js
console.log("hello", "world"); // => 'hello world'
console.log(1, 2, 3); // => 1 2 3
```

Queremos simplemente "aplicar parcialmente" el primer argumento de `console.log`.

`Function.prototype.apply` nos permite ejecutar una función, proveer un nuevo valor para `this` (que podemos ignorar en este caso), y entonces proveer _un array de argumentos para pasar a la función_:

```js
add(10, 20); // => 30
add.apply(null, [10, 20]); // => 30
```

También ten en cuenta `apply` con `Function.prototype.call`:

```js
add.apply(null, [10, 20]); // => 30
add.call(null, 10, 20); // => 30
```
