# Tarea

Modifica la función recursiva `repeat` provista en la plantilla, de forma que no bloquea el ciclo del evento (e.j. `Timers` y manejadores de `IO` que se puedan disparar). Esto necesariamente requiere que `repeat` sea asíncrono.

Un `timeout` es puesto en cola luego de 100 milisegundo, el cual imprimirá los resultados de la prueba y saldrá del proceso. `repeat` debería liberar el control del ciclo del evento para permitir que el `timeout` interrupta antes de que todas las operaciones se completen.

Trata de realizar tantas operaciones como puedas antes de que el `timeout` se dispare.

## Condiciones

- No uses ciclos `for/while` o `Array#forEach`.
- No crees ninguna función innecesaria, e.j. funciones auxiliares.

## Pista

- Si tu programa tarda en correr, algo está probablemente mal. Usa `Ctrl+C` para matar el proceso de `node`.

## Recursos

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Timers

## Plantilla

```js
function repeat(operation, num) {
  // modifica esto para que pueda ser interrumpido
  if (num <= 0) return;
  operation();
  return repeat(operation, --num);
}

module.exports = repeat;
```
