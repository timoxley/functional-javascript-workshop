# Défi

Écrivez une fonction qui reçoit une liste d’utilisateurs valides, et renvoie une fonction qui, elle, retournera `true` si tous les utilisateurs qu’on lui passe sont dans la liste originellement fournie.

Vous n’aurez qu’à examiner la correspondance des propriétés `id`.

## Exemple

```js
var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

// `checkUsersValid` est la fonction que vous allez écrire
var testAllValid = checkUsersValid(goodUsers)

testAllValid([
  { id: 2 },
  { id: 1 }
])
// => true

testAllValid([
  { id: 2 },
  { id: 4 },
  { id: 1 }
])
// => false
```

## Arguments

* `goodUsers` : une liste d’utilisateurs valides

Utilisez `Array#some()` et `Array#every()` pour vérifier que chaque utilisateur passé à la fonction que vous aurez générée existe dans le tableau initialement transmis à la fonction exportée.

## Conditions

* N’utilisez ni boucle (`for`, `while`…) ni `Array.prototype.forEach`
* Ne créez aucune fonction superflue

## Ressources

* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/every
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/some

## Base de travail

```js
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // VOTRE SOLUTION ICI
  };
}

module.exports = checkUsersValid
```
