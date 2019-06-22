¡El código está roto!

¡Un desarrollador Java ha subido su terrible código a nuestro proyecto y no lo probó!

```js
function loadUsers(userIds, load, done) {
  var users = [];
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]));
  }
  return users;
}

module.exports = loadUsers;
```

# Tarea

¡Arregla este código! El callback debería ser llamado con todos los usuarios cargados. El orden de los usuarios debería concordar el order de los IDs cargados. Debido a que esta función es asíncrona, no nos importa el valor de retorno.

## Parámetros

- `userIds`: Un `Array` de IDs de usuario numéricos.
- `load`: Una función usada para cargar un objeto de tipo usuario. Recibe un ID numérico y un callback. El callback será llamado con el resultado de cargar el usuario con el ID provisto (puede ser un objeto usuario o `null`).
- `done`: Una función que recibe un Array de objetos usuario (como los devueltos en `load`).

## Condiciones

- No uses ciclos `for/while` (Array#forEach está bien).
- El orden de los resultados en `done` debe ser el mismo en el fueron especificados en `userIds`.
- Los usuarios deberían ser cargado es paralelo, e.j. todo el proceso no debería tomar más de un segundo.
- No crees ninguna función innecesaria, e.j. funciones auxiliares.

## Pista

- No necesitas organizar para mantener el orden.
- Usar `console.log` afectará la verificación. Solo usa `console.log` cuando corras `functional-javascript run`.

## Plantilla

```js
function loadUsers(userIds, load, done) {
  var users = [];
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]));
  }
  return users;
}

module.exports = loadUsers;
```
