function Spy(target, method) {
  var originalFunction = target[method]

  // Utilisons un objet pour pouvoir le renvoyer par référence,
  // et non par copie de valeur.  Ainsi nous pouvons renvoyer
  // `result`, mais mettre à jour `count` depuis cette portée.
  var result = {
    count: 0
  }

  // remplaçons la méthode par sa version « espion »
  target[method] = function() {
    // On comptabilise l’appel
    result.count++
    // On invoque la version d’origine
    return originalFunction.apply(this, arguments)
  }

  return result
}

module.exports = Spy
