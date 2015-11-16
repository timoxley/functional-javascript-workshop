La récursivité est un concept fondamental de programmation qui peut apporter des solutions élégantes et efficaces à des problèmes algorithmiques.  En fait, la récursivité est si puissante que tous les comportements itératifs peuvent être définis sous forme de fonctions récursives.  Vous la trouverez particulièrement indispensable lorsque vous parcourrez des structures de données imbriquées.

Une fonction récursive est une fonction qui s’appelle elle-même.  Par exemple, la fonction récursive ci-dessous reçoit un tableau de mots et renvoie un tableau de ces mêmes mots en majuscules.

```js
function toUpperArray(items) {
   if (!items.length) return []             // condition de fin
   var head = items[0]                      // élément sur lequel travailler
   head = head.toUpperCase()                // exécution du travail
   var tail = items.slice(1)                // passage à l’étape suivante
   return [head].concat(toUpperArray(tail)) // récursion terminale
}

toUpperArray(['bonjour', 'monde'])          // => ['BONJOUR', 'MONDE']
```

Cet exercice vise à vous faire découvrir la récursivité en implémentant une fonction familière à l’aide d’une fonction récursive.

# Défi

Implémentez `Array#reduce()` de façon récursive.

Pour vérifier que votre récursivité fonctionne correctement, nous utiliserons votre implémentation de `reduce()` avec notre solution pour l’exercice précédent, « Les bases : Reduce ».  Votre fonction recevra donc un tableau de mots et une fonction, ainsi qu’une valeur initiale, et devrait donc renvoyer à terme un objet contenant les comptages pour chaque mot.  Naturellement, votre implémentation de `reduce()` ne fait pas tout ça : c’est la fonction que nous vous passerons en argument qui s’en chargera.

Par souci de simplicité, votre implémentation de `reduce()` **n’a pas besoin de gérer le cas où l’argument de valeur initiale est manquant**.  Vous pouvez supposer qu’il sera toujours fourni.

## Arguments

* `arr` : Un tableau sur lequel appliquer la réduction
* `fn` : La fonction à utiliser comme étape de réduction.  Tout comme pour le `Array#reduce()` standard, cette fonction recevra comme arguments `previousValue`, `currentValue`, `index` et le tableau sur lequel on est en train d’itérer.
* `init` : Valeur initiale de la réduction.  Contrairement à `Array#reduce()`, cet argument est ici obligatoire (vous pouvez supposer qu’il sera toujours fourni).

## Exemple

```js
// Votre fonction `reduce()` devrait se comporter comme la méthode
// standard `Array#reduce()`, à ceci près qu’elle recevra le tableau
// à traiter en premier argument :

reduce([1,2,3], function(prev, curr, index, arr) {
  return prev + curr
}, 0)
// => 6
```

## Conditions

* N’utilisez pas de boucle (`for`, `while`…)
* N’utilisez aucune méthode de `Array`, du genre `Array#map()` ou `Array#reduce()`

## Ressources

* https://fr.wikipedia.org/wiki/R%C3%A9cursivit%C3%A9
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce

## Base de travail

```js
function reduce(arr, fn, initial) {
  // VOTRE SOLUTION ICI
}

module.exports = reduce
```
