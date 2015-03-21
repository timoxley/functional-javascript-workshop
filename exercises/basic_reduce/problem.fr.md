# Défi

En partant d’un tableau de `String`s, utilisez `Array#reduce()` pour créer un objet qui contient, pour chaque `String` du tableau, le nombre de fois qu’elle y apparaît.  Renvoyez l’objet directement (inutile de faire un `console.log()`).

## Exemple

```js
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

console.log(countWords(inputWords))

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }
```

## Arguments

* `inputWords` : un tableau de `String`s aléatoires.

## Conditions

* N’utilisez ni boucle (`for`, `while`…) ni `Array.prototype.forEach`
* Ne créez aucune fonction superflue

## Ressources

* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce
* https://en.wikipedia.org/wiki/Reduce_(higher-order_function)

## Base de travail

```js
function countWords(inputWords) {
  // VOTRE SOLUTION ICI
}

module.exports = countWords
```
