# Tarea

Haz la misma tarea que en "Basic Inhertance with Object.create", pero no uses `Object.create`!

Los detalles están abajo para tu referencia.

## Condiciones

- ¡No llames el constructor de `User` innecesariamente!.
- No uses `Object.create`.
- No uses `__proto__`.

## Pista

- Los prototipos siempre son objetos.
- Tus instancias de `BetterUser` necesitan "heredar" de `User.prototype`
- No hay razon por la que no puedas crear objetos de prueba en arbol de herencia.
- Entiende que es lo que `Object.create` hace.

## Recursos

- http://www.bennadel.com/blog/2184-Object-create-Improves-Constructor-Based-Inheritance-In-Javascript-It-Doesn-t-Replace-It.htm

## Definición de tarea previa

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
