# Tarea

Retorna una función que tome una lista de usuarios validos, y retorna una función que retorne verdadero si todos los usuarios existen en la lista original de usuarios.

Solo necesitas revisar que los IDs concuerden.

## Ejemplo

```js
var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

// `checkUsersValid` es la función que definirás
var testAllValid = checkUsersValid(goodUsers);

testAllValid([{ id: 2 }, { id: 1 }]);
// => true

testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]);
// => false
```

## Argumentos

- `goodUsers`: Una lista de usuarios validos.

Usa `array#some` y `Array#every` para verificar que cada usuario pasado a tu función retornada existe en en el array pasado a la función exportada.

## Condiciones

- No uses ciclos `for/while` o `Array#forEach`.
- No crees ninguna función innecesaria, e.j. funciones auxiliares.

## Recursos

- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some

## Plantilla

```js
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // TU SOLUCIÓN
  };
}

module.exports = checkUsersValid;
```
