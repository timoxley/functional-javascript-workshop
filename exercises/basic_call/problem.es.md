JavaScript permite "duck typing", el cual es una forma de tipeado dinámico en el cual las propiedades y métodos de un objeto determinan la validez semántica, en vez de su herencia de una clase en particular o implementación de un interfaz en particular. El nombre del concepto se refiere al "duck test" (prueba de pato), atribuida a James Whitcomb Riley, el cual puede ser formulado así:

> Cuando veo un ave que camina como un pato, nada como un pato y grazna como un pato, digo que esa ave es un pato.

En JavaScript, para escribir programas robustos necesitamos revisar que un objeto es del tipo que necesitamos.

Podemos usar `Object#hasOwnProperty` para saber si un objeto "tiene" una propiedad definida en si mismo (e.j. no heredada desde su prototipo):

```js
var duck = {
  quack: function() {
    console.log("quack");
  }
};

duck.hasOwnProperty("quack"); // => true
```

Nosotros no le dimos a `duck` el método #hasOwnProperty, ¿de donde vino?.

`duck` fue creado con la sintaxis de `{}`, y esta hereda de `Object.prototype`:

```js
var object = { quack: true };

Object.getPrototypeOf(object) === Object.prototype; // => true
object.hasOwnProperty("quack"); // => true
```

¿Pero qué pasa si un objeto no hereda de `Object.prototype`?.

```js
// crea un objeto con el prototipo de `null`
var object = Object.create(null);
object.quack = function() {
  console.log("quack");
};

Object.getPrototypeOf(object) === Object.prototype; // => false
Object.getPrototypeOf(object) === null; // => true

object.hasOwnProperty("quack");
// => TypeError: Object object has no method 'hasOwnProperty'
```

Aún podemos usar `hasOwnProperty` de `Object.prototype`, si lo llamamos con el valor de `this` con "algo similar a un objeto". `Function#call` nos permite llamar cualquiera función con valor de `this` alterado.

```js
// el primer argumento se convierte en el valor de `this`
// el resto de los argumentos son pasados a la función

Object.prototype.hasOwnProperty.call(object, "quack"); // => true
```

# Tarea:

Escribe una función `duckCount` que retorne el numero de argumentos provistos que contienen una propiedad "quack" definida en ellos. No cuentes valores heredados de los prototipos.

Ejemplo:

```js
var notDuck = Object.create({ quack: true });
var duck = { quack: true };
duckCount(duck, notDuck); // 1
```

## Argumentos

- Se te proveerán de 0 a 20 argumentos. Cada argumento podría ser de cualquier tipo con cualquier propiedad. Algunos de estos tendrán una propiedad "quack".

## Condiciones

- No uses ciclos `for/while` o `Array#forEach`.
- No crees ninguna variable como contador/acumulador.
- No crees ninguna función innecesaria, e.j. funciones auxiliares.

## Pista

- La variable `arguments`, disponible en todas las funciones, es un _Object_ similar a un _Array_ de esta manera:

```js
{
  0: 'argument0',
  1: 'argument1', // etc
  length: 2
}
```

## Recursos

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments

## Plantilla

```js
function duckCount() {
  // TU SOLUCIÓN
}

module.exports = duckCount;
```
