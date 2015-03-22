## Défi

Écrivez une fonction qui vous permet d’utiliser `Array.prototype.slice` sans avoir à utiliser
 `.call` pour l’invoquer.

En temps normal, vous devriez appeler `slice()` à l’aide de `call()` ou `apply()` :

```js
var slice = Array.prototype.slice

function() {
  var args = slice.call(arguments) // ça marche
}
```

Nous, on veut que le code suivant marche :

```js
var slice = yourFunction

function() {
  var args = slice(arguments) // ça marche
}
```

## Exemple

Votre fonction `slice()` devrait avoir le comportement suivant :

```js
var nums = [1,2,3,4,5]

// Votre fonction slice doit correspondre au comportement
// de la fonction slice standard, à ceci près qu'elle reçoit
// le tableau comme premier argument.

slice(nums, 0, 2) // [1, 2]
slice(nums, 1, 2) // [2]

// Avec le slice standard, pour comparaison
nums.slice(0, 2) // [1, 2]
nums.slice(1, 2) // [2]
```

## Conditions

* N’utilisez ni boucle (`for`, `while`…) ni `Array.prototype.forEach`
* N’utilisez pas le mot-clé `function` :D

## Conseils

* La solution fait une seule ligne.  Même pas longue.
* Tout fonction JavaScript hérite de méthodes telles que `call()`, `apply()` et `bind()`, provenant de l’objet `Function.prototype`.
* `Function#call()` fonctionne quelle que soit la fonction sur laquelle on l’appelle (par exemple dans `someFunction.call()`, `this` à l’exécution sera `someFunction`).
* `Function#call()` est elle-même une fonction, et hérite donc de `Function.prototype` :

```js
function myFunction() {
  console.log("J’ai appelé ma fonction")
}

Function.prototype.call.call(myFunction) // => "J’ai appelé ma fonction"
```

## Base de travail

```js
module.exports = // VOTRE SOLUTION ICI !
```
