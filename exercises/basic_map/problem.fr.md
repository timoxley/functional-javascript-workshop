# Défi

Convertissez le code suivant pour utiliser `Array#map` plutôt qu’une boucle :

```js
function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}

module.exports = doubleAll
```

## Arguments

* `numbers` : Un tableau d’entiers

## Conditions

* Votre solution doit utiliser `Array.prototype.map`
* N’utilisez ni boucle (`for`, `while`…) ni `Array.prototype.forEach`
* Ne créez aucune fonction superflue

## Ressources

* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map

## Base de travail

```js
function doubleAll(numbers) {
  // VOTRE SOLUTION ICI
}

module.exports = doubleAll
```
