Voici un exemple d’implémentation de `curry3()`, qui « curryfie » jusqu’à 3 arguments :

```js
function curry3(fun){
  return function(one){
    return function(two){
      return function (three){
        return fun(one, two, three)
      }
    }
  }
}
```

Si nous devions utiliser cette implémentation avec la fonction d’exemple suivante :

```js
function abc(one, two, three) {
  return one/two/three
}
```

Ça donnerait quelque chose comme ça :

```js
var curryC = curry3(abc)
var curryB = curryC(6)
var curryA = curryB(3)

console.log(curryA(2)) // => 1
```

# Défi

Dans cet exercice, nous allons implémenter la fonction `curry()` pour un nombre quelconque d’arguments.

`curryN()` acceptera deux paramètres :

* `fn` : la fonction à « curryfier ».
* `n` : un nombre optionnel d’arguments à « curryfier ».  Si cet argument est manquant, `curryN()` utilisera l’arité de `fn` à la place (c’est-à-dire son nombre de paramètres déclarés).

## Exemple

```js
function add3(one, two, three) {
  return one + two + three
}

var curryC = curryN(add3)
var curryB = curryC(1)
var curryA = curryB(2)
console.log(curryA(3))  // => 6
console.log(curryA(10)) // => 13

console.log(curryN(add3)(1)(2)(3)) // => 6
```

## Conditions

* N’utilisez ni boucle (`for`, `while`…) ni `Array.prototype.forEach`

## Conseil

On peut détecter l’arité d’une fonction avec la propriété `.length` de celle-ci.

## Base de travail

```js
function curryN(fn, n) {
  // VOTRE SOLUTION ICI
}

module.exports = curryN
```
