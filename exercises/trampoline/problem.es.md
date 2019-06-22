La plantilla incluye una definición de `repeat`. `repeat` tomará como argumentos una función y un número `num`, e invocará la función `num` veces:

```js
var count = 0;
repeat(function() {
  count++;
}, 100);

console.log("se ejecutó %d veces.", count);
// => se ejecuto 100 veces.
```

PERO nota que ejecutar `repeat` con un número grande en `num` genera un `stack overflow`:

```
var count = 0
repeat(function() {
  count++
}, 100000)

console.log('se ejecutó %d veces', count)
// => RangeError: Maximum call stack size exceeded
```

# Tarea

Modifica la plantilla abajo de forma que use un trampolín para llamarse continuamente a si mismo de forma sincronizada.

Puedes asumir que la operación pasada a `repeat` no recibe argumentos (o que han sido conectados previamente a la función) y el valor de retorno de la función no es importante.

## Condiciones

- No cambies la implementación de `repeat` para que incluya ciclos (aunque la puedes cambiar de otras maneras).

## Pista

- Modifica `repeat` para que retorne el "siguiente paso, si lo hay.
- Un trampolín continua ejecutando los pasos de forma sincronizada, obteniendo nuevos pasos hasta que no haya mas pasos. !Puedes usar un ciclo aquí!.
- Si tu programa toma mucho tiempo en correr, probablemente algo se encuentre mal. Usa `Ctrl+C` para matar el proceso de `Node`.

## Plantilla

```js
function repeat(operation, num) {
  // Modifica esto de manera que no cause un `stack overflow`!
  if (num <= 0) return;
  operation();
  return repeat(operation, --num);
}

function trampolíne(fn) {
  // ¡Probablemente quieras implementar un trampolín!
}

module.exports = function(operation, num) {
  // ¡Probablemente quieras llamar tu trampolín aquí!
  return repeat(operation, num);
};
```
