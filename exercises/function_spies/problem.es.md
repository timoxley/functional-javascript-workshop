# Tarea

Override a specified method of an object with new functionality while still maintaining all of the old behaviour.

Create a spy that keeps track of how many times a function is called.

## Ejemplo

```js
var spy = Spy(console, "error");

console.error("calling console.error");
console.error("calling console.error");
console.error("calling console.error");

console.log(spy.count); // 3
```

## Argumentos

- target: an object containing the method `method`
- method: a string with the name of the method on `target` to spy on.

## Condiciones

- Do not use any for/while loops or Array#forEach.
- No crees ninguna función innecesaria, e.j. funciones auxiliares.

## Pista

- Functions have context, input and output. Make sure you consider the context, input to _and output from_ the function you are spying on.

## Plantilla

```js
function Spy(target, method) {
  // TU SOLUCIÓN
}

module.exports = Spy;
```
