Este es un ejemplo de la implementación de `curry3`, el cual hace "curry" de hasta 3 argumentos:

```js
function curry3(fun) {
  return function(one) {
    return function(two) {
      return function(three) {
        return fun(one, two, three);
      };
    };
  };
}
```

Si fuésemos a utilizar está implementación con una función de prueba:

```js
function abc(one, two, three) {
  return one / two / three;
}
```

Funcionaría así:

```js
var curryC = curry3(abc);
var curryB = curryC(6);
var curryA = curryB(3);

console.log(curryA(2)); // => 1
```

# Tarea

En este reto, vamos a implementar una función de "curry" para un número arbitrario de argumentos.

`curryN` tomará dos parámetros:

- `fn`: La función que queremos convertir en "curry".
- `n`: Un número opcional de argumentos que se van a convertir en "curry". Si no se provee `curryN` debería usar el número de argumento de `fn` como valor de `n`.

## Ejemplo

```js
function add3(one, two, three) {
  return one + two + three;
}

var curryC = curryN(add3);
var curryB = curryC(1);
var curryA = curryB(2);
console.log(curryA(3)); // => 6
console.log(curryA(10)); // => 13

console.log(curryN(add3)(1)(2)(3)); // => 6
```

## Condiciones

- No uses ciclos `for/while` o `Array#forEach`.

## Pista

- Puedes detectar el número de argumentos provistos a una función (su aridad) al revisar la propiedad `.length` de la función.

## Plantilla

```js
function curryN(fn, n) {
  // TU SOLUCIÓN
}

module.exports = curryN;
```
