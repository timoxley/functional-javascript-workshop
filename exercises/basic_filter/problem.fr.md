# Défi

Utilisez `Array#filter` pour écrire une fonction `getShortMessages()`

`getShortMessages()` reçoit un tableau d’objets équipés d’une propriété `message`, et renvoie un tableau des messages qui ont *moins de 50 caractères de long*.

Votre fonction doit renvoyer un tableau contenant les messages eux-mêmes, *sans leurs objets conteneurs*.

## Arguments

* `messages` : un tableau d’objets aléatoires ayant l’aspect suivant :

```js
{
  message: 'Esse id amet quis eu esse aute officia ipsum.' // aléatoire
}
```

## Conditions

* N’utilisez ni boucle (`for`, `while`…) ni `Array.prototype.forEach`
* Ne créez aucune fonction superflue

## Conseil

* Essayez d’enchaîner des méthodes de `Array` !

## Exemple de résultat

```
[ 'Tempor quis esse consequat sunt ea eiusmod.',
  'Id culpa ad proident ad nulla laborum incididunt.',
  'Ullamco in ea et ad anim anim ullamco est.',
  'Est ut irure irure nisi.' ]
```

## Ressources

* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map

## Base de travail

```js
function getShortMessages(messages) {
  // VOTRE SOLUTION ICI
}

module.exports = getShortMessages
```
