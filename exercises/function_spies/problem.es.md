# Tarea

Sobrescribe la función especifica de un objeto con una nueva funcionalidad mientras mantienes el comportamiento anterior.
Crea un espía que mantiene cuenta de cuantas veces una función fue llamada;

## Ejemplo

```js
var spy = Spy(console, "error");

console.error("llamando `console.error`");
console.error("llamando `console.error`");
console.error("llamando `console.error`");

console.log(spy.count); // 3
```

## Argumentos

- `target`: Un objeto conteniendo el método `method`.
- `method`: Un `string` con el nombre del método en `target` que debería espiar.

## Condiciones

- No uses ciclos `for/while` o `Array#forEach`.
- No crees ninguna función innecesaria, e.j. funciones auxiliares.

## Pista

- Las funciones tienen contexto, entrada y retorno. Asegurate de considerar el contexto, entrada y _el retorno de_ la función que estás espiando.

## Plantilla

```js
function Spy(target, method) {
  // TU SOLUCIÓN
}

module.exports = Spy;
```
