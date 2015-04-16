function curryN(fn, n) {
  // Si l’argument `n` est absent, on utilise la propriété `.length` de la fonction.
  if (typeof n !== 'number') n = fn.length

  function getCurriedFn(prev) {
    return function(arg) {
      // Concatène l’argument qui vient d’être passé avec le tableau des arguments
      // déjà spécifiés.
      var args = prev.concat(arg)
      // Si tous les arguments ne sont pas encore pré-remplis, renvoie
      // la version currifiée de la fonction originale.
      if (args.length < n) return getCurriedFn(args)
      // Sinon, invoque la fonction d’origine avec les arguments, et
      // renvoie sa valeur de retour.
      else return fn.apply(this, args)
    };
  }

  // Renvoie une version currifiée de la fonction d’origine.
  return getCurriedFn([])
}

module.exports = curryN

// Source de cette solution :
// http://benalman.com/news/2012/09/partial-application-in-javascript/#manually-specifying-function-arity
