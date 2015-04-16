Le code ci-dessous est cassé !

Un développeur Java a ajouté le code atroce ci-dessous à notre projet et ne l’a pas testé !

```js
function loadUsers(userIds, load, done) {
  var users = []
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]))
  }
  return users
}

module.exports = loadUsers
```

## Défi

Corrigez ce code !  La fonction de rappel `done()` devrait être appelée une fois que tous les utilisateurs ont été chargés.  L’ordre des utilisateurs doit correspondre à celui des IDs reçus.  Vu que cette fonction est asynchrone, on se fiche de sa valeur de retour.

## Arguments

* `userIds` : un tableau d’IDs numériques d’utilisateurs.
* `load` : une fonction asynchrone de chargement d’un objet utilisateur.  Reçoit un ID et une fonction de rappel.  Celle-ci sera appelée avec le résultat du chargement pour l’utilisateur avec l’ID indiqué (soit un objet utilisateur, soit `null`).
* `done` : une fonction de rappel finale, qui attend comme argument un tableau des objets utilisateurs chargés.

## Conditions

* N’utilisez pas de boucles `for`/`while` (mais `Array#forEach()` reste autorisé).
* L’ordre des utilisateurs dans le tableau passé à `done()` doit correspondre à celui des IDs dans le tableau `userIds` que vous aurez reçu.
* Les utilisateurs doivent être chargés en parallèle, donc la séquence entière ne devrait pas dépasser une seconde.
* Ne créez aucune fonction superflue

## Conseils

* Vous n’avez pas besoin d’un tri pour maintenir l’ordre du résultat.
* Si vous utilisez `console.log()`, ça va impacter notre vérification.  Ne vous en servez que pendant votre phase de mise au point avec `{appname} run`.

## Base de travail

```js
function loadUsers(userIds, load, done) {
  var users = []
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]))
  }
  return users
}

module.exports = loadUsers
```
