function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // condición final
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calcula y pasa los valores al siguiente paso
  })(0, initial) // IIFE. dispara la recursión con los valores iniciales
}

module.exports = reduce
