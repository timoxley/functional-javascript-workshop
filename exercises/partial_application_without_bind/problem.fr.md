L’application partielle vous permet de créer de nouvelles fonctions à partir de fonctions existantes, en pré-remplissant tout ou partie de leurs arguments.  Une fois les arguments pré-remplis définis, vous obtenez une nouvelle fonction qui n’attend plus que les éventuels arguments restants pour exécuter la fonction d’origine.

Plus formellement : l’application partielle désigne le pré-remplissage d’arguments d’une fonction pour produire une fonction de moindre arité.

À titre d’exemple, imaginons que nous avons une fonction `add()` qui accepte deux arguments et renvoie leur somme :

```js
function add(x, y) {
  return x + y
}

add(10, 20) // => 30
```

À présent, imaginons que nous disposons d’une fonction `partiallyApply()`.  Celle-ci reçoit une fonction et quelques arguments qu’elle « applique partiellement » (qu’elle pré-remplit, en somme).

Dans le code qui suit, nous pré-remplissons le premier argument de notre fonction `add()`, à savoir `x` :

```js
var addTen = partiallyApply(add, 10) // pré-remplit `x` à 10
```

`addTen()` est une nouvelle fonction, qui n’a plus besoin que du paramètre `y` de `add()`.  `add()` n’a pas encore été appelée !

Une fois que nous passons l’argument pour `y`, la fonction `add()` originale peut être appelée :

```js
addTen(20)  // => 30
addTen(100) // => 110
addTen(0)   // => 10
// etc.
```

Tous les exemples ci-dessus reviennent à appeler `add(10, y)`, ou `y` serait fourni dans l’appel à la bien-nommée `addTen()`.

# Défi

Utilisez l’application partielle pour créer une fonction qui pré-remplit un premier argument pour `console.log()`.  En somme, implémentez une fonction de log qui préfixe son message.

Votre implémentation doit accepter une `String` de préfixe, et renvoyer une fonction qui affichera les contenus qu’on lui passe sur la console, préfixée par cette `String`.

Vous aurez besoin de `Function#apply()` pour implémenter l’application partielle.

Assurez-vous que **tous** les arguments passés à la fonction de log (celle renvoyée par la fonction que vous allez écrire) sont bien affichés.

**Affichez le résultat directement sur la console.**

## Arguments

* `namespace` : une `String` qui préfixe les messages passés à la fonction qui sera retournée.

## Exemple

```js
var info = logger('INFO :')
info('ceci est un message d’information')
// INFO : ceci est un message d’information

var warn = logger('WARN :')
warn('ceci est un avertissement', 'avec du rab')
// WARN : ceci est un avertissement avec du rab
```

## Conditions

* N’utilisez pas `Function#bind()`
* Utilisez `Function#apply()`

## Base de travail

```js
var slice = Array.prototype.slice

function logger(namespace) {
  // VOTRE SOLUTION ICI
}

module.exports = logger
```

## Ressources

* https://en.wikipedia.org/wiki/Partial_application
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/apply

## Conseils

Gardez à l’esprit que `console.log()` accepte un nombre quelconque d’arguments et les affiche, séparés par des espaces :

```js
console.log('bonjour', 'monde') // => 'bonjour monde'
console.log(1, 2, 3)            // => 1 2 3
```

Nous voulons simplement pré-remplir le premier argument de `console.log()`.

`Function#apply()` nous permet d’exécuter une fonction, en fournissant une valeur spécifique pour `this` (ce qu’on peut royalement ignorer sur ce coup), puis un **tableau d’arguments à passer à la fonction** :

```js
add(10, 20)               // => 30
add.apply(null, [10, 20]) // => 30
```

Faites bien la différence entre `apply()` et `call()` :

```js
add.apply(null, [10, 20]) // => 30
add.call(null, 10, 20)    // => 30
```
