## Défi

Écrivez une fonction récursive qui renvoie toutes les dépendances (et sous-dépendances) unique d’un module, triées alphabétiquement.  Elles doivent être affichées au format *dependance@version*, par ex. `inflection@1.2.6`.

On autorise des versions multiples d’un même module, mais les doublons (versions identiques) doivent être retirés.

## Arguments

* `tree` : Une arborescence de dépendances.  Voir ci-dessous pour sa structure.

## Exemple

```js
var loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
}

getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]

```

## Conditions

* N’utilisez pas de boucle `for`/`while`.

## Base de travail

```js
function getDependencies(tree) {
  // VOTRE SOLUTION ICI
  // Note : n’hésitez pas à ajouter des arguments dont vous auriez besoin dans
  // vos appels récursifs.  Mais ça n’a rien d’obligatoire !  Il y a bien des
  // manières de faire de la récursivité.
}

module.exports = getDependencies
```

## Ressources

* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/keys
