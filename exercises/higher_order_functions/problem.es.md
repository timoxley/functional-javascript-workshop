Una función `higher-order` (de alto orden) es una función que hace al menos una de las siguientes cosas:

- Toma una o más funciones como argumentos.
- Retorna una función.

Todas las demás funciones son de primer orden. [1]

A diferencia de muchos otros lenguajes con capacidades imperativas, JavaScript te permite utilizar funciones `higher-order` porque tiene funciones de "primera clase". Esto significa que las funciones pueden ser tratadas como cualquier otro valor en JavaScript: justo como con números o `strings`, el valor de una función puede ser almacenada como variable, propiedades en objetos o pasadas a otras funciones como argumentos. El valor de una función es de hecho un objeto (que hereda de `Function.prototype`) así que inclusive puedes agregar propiedades y guardar valores en ellas, como con cualquier objeto.

La diferencia clave entre las funciones y cualquier otro tipo de valor en JavaScript es la sintaxis de llamado: Si una referencia a una función le sigue unos paréntesis y valores opciones separado por coma: `algunaFuncion(a, b, ...etc)`, entonces el cuerpo de la función sera ejecutado con los argumentos provistos (si hay).

En este ejercicio vamos a demostrar que las funciones pueden ser pasadas como valores al pasar una función como argumento.

# Tarea

Implementa una función que toma una función como su primer argumento, un numero `num` como su segundo argumento, entonces ejecuta la función pasada `num` veces.

Usa la plantilla de código dada a ti en la parte inferior, La mayoría o todos los ejercicios proveerán una plantilla.

## Argumentos

- `operation`: Una function, no toma argumentos y no retorna ningún valor de uso.
- `num`: El numero de veces que se debe llamar la función `operation`.

## Recursos

- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype

## Pista

- No lo pienses de mas, el código debería ser simple.
- Está bien usar un ciclo en tu implementación, puntos extra si usas recursion en vez.
- Quizás notes algún valor de retorno. Viene de la función que te otorgamos.
- No necesitas usar `console.log` para nada.

## Plantilla

```js
function repeat(operation, num) {
  // TU SOLUCIÓN
}

// No remuevas o edites esta linea
module.exports = repeat;
```
