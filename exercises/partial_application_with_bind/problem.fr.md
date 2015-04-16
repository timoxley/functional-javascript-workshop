# Défi

**Utilisez `Function#bind()`** pour implémenter une fonction de log qui vous permet de préfixer vos messages.

Votre implémentation doit accepter une `String` de préfixe, et renvoyer une fonction qui affichera les contenus qu’on lui passe sur la console, préfixée par cette `String`.

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

* Utilisez `Function#bind()`

## Base de travail

```js
module.exports = function logger(namespace) {
  // VOTRE SOLUTION ICI
}
```

## Resources

* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/bind
