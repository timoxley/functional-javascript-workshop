Une fonction d’ordre supérieur est une fonction qui fait au moins l’une des deux choses suivantes :

* Prendre une ou plusieurs fonctions comme arguments
* Renvoyer une fonction

Toutes les autres fonctions sont des fonctions de premier ordre.

Contrairement à de nombreux langages impératifs, JavaScript vous permet d’utiliser des fonctions d’ordre supérieur parce qu’il traite ses fonctions comme des valeurs, au même titre que n’importe quelle autre valeur en JavaScript, telles que les `String`s ou `Number`s.  Les valeurs de type `Function` peuvent être stockées dans des variables, dans des propriétés d’objets, ou être passées comme arguments à d’autres fonctions.

Les valeurs de type `Function` sont en réalité des objets (qui héritent de `Function.prototype`), de sorte que vous pouvez même leur ajouter des propriétés et y stocker des valeurs, comme pour n’importe quel autre objet.

La différence principale entre les `Function`s et les autres types de valeurs en JavaScript est leur syntaxe d’appel : si une référence à une fonction est suivie par des parenthèses (avec des valeurs optionnelles séparées par des virgules) : `someFunction(arg1, arg2, etc)`, alors le corps de la fonction est exécuté avec les arguments éventuellement passés.

Dans cet exercice, nous allons prouver que les fonctions peuvent être passées comme des valeurs, en passant une fonction comme argument à celle que vous allez écrire.

## Défi

Écrivez une fonction qui en prend une autre comme premier argument, ainsi qu’un nombre `num` comme second argument, et exécute la fonction passée `num` fois.

Utilisez le code de base fourni ci-dessous pour démarrer.  La majorité des exercices de cet atelier vous fourniront une base de travail.

## Arguments

* `operation` : Une `Function`, qui ne prend pas d’arguments et ne renvoie rien d’utile.
* `num` : le nombre de fois qu’il vous faudra appeler `operation`

## Ressources

* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/prototype

## Conseils

* La solution est vraiment simple.
* Vous avez le droit d’utiliser une boucle ; points bonus si vous préférez la récursivité.
* Vous verrez sans doute un affichage à l’exécution.  Il viendra de la fonction qui vous est passée.
* Vous n’avez pas besoin de faire de `console.log(…)` vous-même.

## Base de travail

```js
function repeat(operation, num) {
  // VOTRE SOLUTION ICI
}

// Ne retirez pas la ligne ci-dessous
module.exports = repeat
```
