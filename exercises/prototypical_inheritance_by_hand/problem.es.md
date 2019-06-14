Vamos a crear una vaga implementación de la herencia de prototipos en JavaScript a mano, para asegurar que entendemos completamente como la herencia de prototipos funcióna.

# Tarea

Implementa las funciónes `New`, `Create` y `Lookup` para simular `new`, `Object.create` y búsqueda de propiedades en JavaScript respectivamente.

Por medio de esta experiencia, evitaras usar cualquier capacidad de herencia de JavaScript. En vez, necesitaras usar tus propias funciónes de `New`, `Create` y `Lookup` al igual que `__PROTO__` para representar la instancia de un prototipo, y `PROTOTYPE` para representar el constructor de un prototipo.

## Ejemplo

```js
New(Apple, 1, 2, 3) == new Apple(1, 2, 3); // true

obj.__PROTO__ == obj.__proto__ || Object.getPrototypeOf(obj); // true

Constructor.PROTOTYPE == Constructor.prototype; // true
```

## Parte 1: Lookup

`Lookup` simulará el mecanismo de la búsqueda de propiedades en JavaScript, o `Getters`. Cuando tu referencias cualquier propiedad de un objeto en JavaScript, esta "recorrerá la cadena de prototipos" para encontrar una propiedad, si lo encuentra devolverá su valor, de otro modo retornara `undefined`.

Tu función de `Lookup` le sera provista un objeto de contexto, y la propiedad en `string` que estamos buscando. Si la propiedad se encuentra en el contexto actual, retorna esa propiedad, de otro modo busca en el contexto del prototipo, `__PROTO__`.

Si una propiedad no puede ser encontrada en la cadena de prototipos del objeto, simplemente retorna `undefined`.

```js
var cat = {
  color: "black"
};

var kitten = {
  size: "small"
};

var otherKitten = {
  size: "small",
  color: "grey"
};

kitten.__PROTO__ = cat;
otherKitten.__PROTO__ = cat;

Lookup(kitten, "color"); // => 'black'
Lookup(otherKitten, "color"); // => 'grey'

Lookup(kitten, "wings"); // => undefined

// cambiar propiedades en el prototipo debería
// afectar todas las instancias que hereden de el.
cat.color = "blue";

Lookup(kitten, "color"); // => 'blue'

// propiedades sobrescritas deberían funciónar
Lookup(otherKitten, "color"); // => 'grey'
```

### Notas

En JavaScript, cuando tu "obtienes" (`get`) un propiedad (e.j. `lookup`), el motor recorre la cadena de prototipos para encontrar el valor, pero si tu "das" (`set`) un valor, ignora la cadena de prototipo y simplemente da el valor al objeto actual, Nosotros pudimos haber implementado un `Setter` como ejercicio, pero no hay magia detrás de esto, es bastante trivial:

```js
function Setter(context, property, value) {
  return (context[property] = value);
}
```

## Parte 2: Create

`Create` simulara el comportamiento de `Object.create`.

`Create` se le pasara un objeto, y debes retornar un nuevo objeto con su prototipo(`__PROTO__`) que sea el valor del objeto provisto.

```js
function Cat() {}

Cat.PROTOTYPE.speak = function() {
  return "Meow!";
};

function Kitten() {
  Cat.apply(this, arguments);
}

Kitten.PROTOTYPE = Create(Cat.PROTOTYPE);

var kitten = New(Kitten);
Lookup(kitten, "speak")(); // => 'Meow!'
```

## Parte 3: New

`New` simulara el comportamiento de la palabra clave de JavaScript `new`.

El primer argumento pasado a `New` sera una función constructora (e.j. un tipo). Los parámetros subsecuentes deberán ser pasados al constructor de la función cuando se cree un nuevo objeto.

`New` retornara nuevos objetos usando la función constructora provista.

```js
function Cat(color) {
  this.color = color;
}

var blackCat = New(Cat, "black");
blackCat.color; // => black

var brownCat = New(Cat, "brown");
brownCat.color; // => brown
```

La función constructora pasada a `New` puede que tenga una propiedad `.PROTOTYPE` . Todos los objetos con este constructor tendrán su `__PROTO__` a que sea el valor de la propiedad `.PROTOTYPE` del constructor.

```js
function Cat(color) {
  this.color = color;
}

Cat.PROTOTYPE.speak = function() {
  return "Meow!";
};

function Kitten() {
  Cat.apply(this, arguments);
}

Kitten.PROTOTYPE = Create(Cat);

Kitten.PROTOTYPE.speak = function() {
  return "Mew.";
};

var blackCat = New(Cat, "black");
blackCat.color; // => black

var brownCat = New(Cat, "brown");
brownCat.color; // => brown
```

Las propiedades del prototipo deberían estar disponibles en el constructor:

```js
function Cow() {
  // busca this.moo:
  console.log("moo", Lookup(this, "moo"));
}

// este paso es hecho automaticamente en JavaScript "normal".
Cow.PROTOTYPE = {};

Cow.PROTOTYPE.moo = true;
var cow = New(Cow); // 'moo' true
```

También necesitamos simular uno comportamiento adicional de la palabra clave `new`: Si el constructor de por si retorna un valor, `New` retornara ese valor.

```js
function Cat() {
  return 3;
}
var cat = new Cat(); // 3
var cat = New(Cat); // 3
```

## Condiciones

- No uses ninguna capacidad de Javascript de herencia de prototipos.
- No uses `new`.
- No uses `__proto__`, `Object.getPrototypeOf` ni `Object.setPrototypeOf`.

## Pista

- Usa `hasOwnProperty` para descubrir si un objeto tiene una propiedad.

## Plantilla

```js
/**
 * @param context {Object} Objeto inicial para comenzar la búsqueda por "propiedad".
 * @param property {String} nombre de la propiedad que estamos tratando de encontrar.
 * @return {Mixed} El valor de `property` en `context` o en algún lugar de su cadena de prototipos.
 */

function Lookup(context, property) {}

/**
 * @param proto {Object} El prototipo a usar para el objeto creado.
 * @return Un nuevo objeto cuyo prototipo es puesto en`proto`.
 */

function Create(proto) {}

/**
 * @param Constructor {Function} Constructor para un nuevo tipo.
 * @return nueva instancia de un tipo definida por `Constructor`.
 */

function New(Constructor) {}

module.exports = {
  Lookup: Lookup,
  Create: Create,
  New: New
};
```
