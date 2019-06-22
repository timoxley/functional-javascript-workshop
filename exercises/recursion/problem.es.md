# Tarea

Implementa una función recursiva que retorne todas las dependencias únicas, y sub-dependencias de un modulo, organizado alfabéticamente. Las dependencias deberían ser impresas en forma `dependencia@version`, por ejemplo `inflection@1.3.6`.

Se permite tener múltiples versiones de un mismo modulo, pero los módulos duplicados de la misma version deben ser removidos.

## Argumentos:

- `tree`: Una árbol de dependencias. Abajo encontrarás un ejemplo de la estructura.

## Ejemplo

```js
var loremIpsum = {
  name: "lorem-ipsum",
  version: "0.1.1",
  dependencies: {
    optimist: {
      version: "0.3.7",
      dependencies: {
        wordwrap: {
          version: "0.0.2"
        }
      }
    },
    inflection: {
      version: "1.2.6"
    }
  }
};

getDependencies(loremIpsum); // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]
```

## Condiciones:

- No uses ciclos `for/while` o `Array#forEach`.

## Plantilla

```js
function getDependencies(tree) {
  // TU SOLUCIÓN
  // Nota: Sientete libre de agregar
  // argumentos adicionales a esta funcion
  // para usar con un llamado recursivo,
  // ¡o no lo hagas!, hay varias maneras de hacer recursión.
}

module.exports = getDependencies;
```

## Recursos

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
