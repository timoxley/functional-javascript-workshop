# Défi

Modifiez la fonction récursive `repeat()`, fournie plus bas dans la base de travail, de façon à ce qu’elle ne bloque pas la boucle événementielle (c’est-à-dire pour qu’elle laisse passer les timers et gestionnaires E/S).  Il vous faudra nécessairement en faire une fonction asynchrone.

Un timeout sera déclenché après 100 millisecondes, qui affichera les résultats du test et terminara le processus.  `repeat()` doit relâcher son contrôle sur la boucle événementielle pour permettre au timeout de s’exécuter avant que toutes les opérations ne se terminent.

Essayez d’exécuter l’opération passée à `repeat()` autant de fois que possible avant le timeout !

## Conditions

* N’utilisez ni boucle (`for`, `while`…) ni `Array.prototype.forEach`
* Ne créez aucune fonction superflue

## Conseils

Si votre programme prend trop de temps à s’exécuter, vous avez probablement un souci.  Utilisez Ctrl+C pour arrêter le processus Node.

## Ressources

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Timers

## Base de travail

```js
function repeat(operation, num) {
  // modifiez cette fonction pour la rendre interruptible
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

module.exports = repeat
```
