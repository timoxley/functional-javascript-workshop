JavaScript supporte le « duck typing », une méthode dynamique de test des types d’objet.  Elle repose sur l’analyse des méthodes et propriétés d’un objet pour déterminer sa sémantique, plutôt que de se fier à un héritage de classe particulière ou à l’implémentation d’une interface abstraite…  Le nom de ce concept vient du « test du canard », attribué à James Whitcomb Riley, qu’on peut formuler ainsi :

  > « Quand je vois un volatile qui marche comme un canard, nage comme un canard, et cancane comme un canard, alors j’appelle ce volatile un canard. »

En JavaScript, pour écrire des programmes robustes, nous avons parfois besoin de vérifier qu’un objet est conforme au type dont nous avons besoin.

Nous pouvons utiliser `Object#hasOwnProperty()` pour détecter qu’un objet « a » une propriété définie sur lui-même, ce qu’on appelle une *propriété propre* (par opposition à une propriété hérité du prototype) :

```js
var duck = {
  quack: function() {
    console.log('quack')
  }
}

duck.hasOwnProperty('quack') // => true
```

Nous n’avons toutefois pas équipé `duck` d’une méthode `hasOwnProperty()`, alors d’où vient-elle ?

`duck` a été créé avec la syntaxe littérale `{…}`, qui définit un objet, de sorte qu’il hérite automatiquement de `Object.prototype` :

```js
var object = {quack: true}

Object.getPrototypeOf(object) === Object.prototype // => true
object.hasOwnProperty('quack')                     // => true
```

Mais qu’en serait-il pour un objet qui n’hérite pas de `Object.prototype` ?

```js
// Créons un objet avec un prototype `null`
var object = Object.create(null)
object.quack = function() {
  console.log('quack')
}

Object.getPrototypeOf(object) === Object.prototype // => false
Object.getPrototypeOf(object) === null             // => true

object.hasOwnProperty('quack')
// => TypeError: Object object has no method 'hasOwnProperty'
```

Nous pouvons toujours appeler la `hasOwnProperty()` de `Object.prototype`, ceci dit, du moment que nous l’appelons avec un `this` qui « ressemble à un objet ».  `Function#call` nous permet d’appeler n’importe quelle fonction avec un `this` que nous contrôlons.

```js
// Le premier argument de `call` sera le `this`
// Le reste des arguments est passé à la fonction

Object.prototype.hasOwnProperty.call(object, 'quack') // => true
```

# Défi

Écrivez une fonction `duckCount()` qui inspecte les arguments qu’on lui passe et renvoie le nombre de ceux qui ont une propriété propre `quack` définie.  Ignorez les propriétés hérités des prototypes.

Exemple :

```js
var notDuck = Object.create({quack: true})
var duck = {quack: true}
duckCount(duck, notDuck) // 1
```
## Arguments

Vous recevrez un nombre variable d’arguments, d’un appel à l’autre.  Chaque argument pourra être d’un type quelconque, avec des propriétés quelconques.  Certains arguments auront une propriété `quack`, parfois héritée du prototype.  Certains pourrons ne pas être équipés de `hasOwnProperty()`.

## Conditions

* N’utilisez ni boucle (`for`, `while`…) ni `Array.prototype.forEach`
* Ne maintenez pas de variable pour le compteur / l’accumulateur.
* Ne créez aucune fonction superflue

## Conseil

La variable automatique `arguments`, disponible dans toute fonction, est un *objet* qui ressemble à un tableau sans en être vraiment un :

```js
{
  0: 'argument0',
  1: 'argument1', // etc.
  length: 2
}
```

## Ressources

* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/call
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_in
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/slice#Array-like
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/arguments

## Base de travail

```js
function duckCount() {
  // VOTRE SOLUTION ICI
}

module.exports = duckCount
```
