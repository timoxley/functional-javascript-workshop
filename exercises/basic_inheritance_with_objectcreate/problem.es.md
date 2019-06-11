# Tarea

Crea un nuevo tipo "BetterUser" que extienda "User" y sobreescribe el método `.toString` de "User".

La función que exportes será pasada a la función del constructor de "User" que se verá así:

```js
/**
 * Constructor de User.
 *
 * @param title {String} Prefijo para el Usuario. e.j: "Sr", "Sra", "Srta", etc.
 * @param name {String} Nombre del Usuario. e.g: 'Pepito Peréz'.
 */

function User(title, name) {
  this.title = title;
  this.name = name;
  console.info("NEW USER: " + this);
}

/**
 * Crea un nombre completo para un usuario.
 * @return {String} Nombre a mostrar
 */

User.prototype.displayName = function() {
  return this.title + " " + this.name;
};

/**
 * @return {String} Prefijo y nombre formateado.
 */

User.prototype.toString = function() {
  return "[User:" + this.displayName() + "]";
};
```

Notas: No necesitas copiar esto en tu solución.

## Ejemplo

De tu función exportada, retorna un función constructora `BetterUser` que extienda `User` con un método personalizado `toString` que funcione de esta manera:

```js
var joe = new BetterUser("Sr.", "Elver Mires"); // pasa prefijo y nombre
console.log("Hola " + joe); // 'Hola [BetterUser: Sr. Elver Mires]'
```

## Condiciones

- ¡No llames el constructor de `User` innecesariamente!
- No uses `__proto__`
- No crees ninguna función innecesaria, e.j. funciones auxiliares.

## Recursos

- http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/
- http://tobyho.com/2011/11/11/js-object-inheritance/
- http://hughfdjackson.com/javascript/2012/01/05/prototypes:-the-short%28est-possible%29-story/

## Plantilla

```js
// User es un constructor
function upgradeUser(User) {
  // EDITA ESTO CUANTO NECESITES
  function BetterUser() {}

  return BetterUser;
}

module.exports = upgradeUser;
```
