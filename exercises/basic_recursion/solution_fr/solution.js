function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    // condition de fin
    if (index > arr.length - 1) return value

    // calculer les valeurs et les passer à l’étape suivante
    return reduceOne(index + 1, fn(value, arr[index], index, arr))
  })(0, initial) // IIFE.  Démarrer la récursion avec les valeurs de départ
}

module.exports = reduce
