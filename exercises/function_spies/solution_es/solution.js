function Spy(target, method) {
  var originalFunction = target[method];
  // usa un objeto de manera que podamos pasar
  //por referencia, no por valor, e.j: podemos
  // devolver el resultado, pero actualizar el contador de este `scope
  var result = {
    count: 0
  };

  // reemplaza el método con la función espiá.
  target[method] = function() {
    result.count++; // revisa que la función fue llamada
    return originalFunction.apply(this, arguments); // invoca la función original
  };

  return result;
}

module.exports = Spy;
