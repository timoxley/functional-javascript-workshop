# Défi

Ajoutez des capacités à une méthode précise sur un objet, tout en préservant son comportement d’origine : créez un espion qui garde la trace du nombre de fois que la fonction a été appelée.

## Exemple

```js
var spy = Spy(console, 'error')

console.error('appel de console.error')
console.error('appel de console.error')
console.error('appel de console.error')

console.log(spy.count) // 3
```

## Arguments

* `target` : un objet contenant la méthode `method`.
* `method` : une `String` indiquant le nom de la méthode de `target` à espionner.

## Conditions

* N’utilisez ni boucle (`for`, `while`…) ni `Array.prototype.forEach`
* Ne créez aucune fonction superflue

## Conseils

Les fonctions ont un contexte (une valeur de `this`), une entrée (les arguments) et une sortie (la valeur de retour).  Assurez vous que vous préservez tous ces aspects pour la fonction que vous espionnez.

## Base de travail

```js
function Spy(target, method) {
  // VOTRE SOLUTION ICI
}

module.exports = Spy
```
