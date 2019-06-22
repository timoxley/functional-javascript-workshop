# Tarea

Usa `Array#filter` para escribir una función llamada `getShortMessages`.

`getShortMessages` recibe un `array` de objetos con la propiedad `message` y retorna un `array` de mensajes que _tienen menos de 50 caracteres_.

La función debería retornar un `array` conteniendo los mensajes _sin su objeto contenedor_.

## Argumentos

- mensajes: un `Array` de 10 a 100 objetos aleatorios que se ven algo así:

```js
{
  message: "Esse id amet quis eu esse aute officia ipsum."; // aleatorio
}
```

## Condiciones

- No uses ciclos `for/while` o `Array#forEach`.
- No crees ninguna función innecesaria, e.j. funciones auxiliares.

## Pista

- ¡Trata de encadenar algunos métodos de `Array`!

## Ejemplo

```
[ 'Tempor quis esse consequat sunt ea eiusmod.',
  'Id culpa ad proident ad nulla laborum incididunt.',
  'Ullamco in ea et ad anim anim ullamco est.',
  'Est ut irure irure nisi.' ]
```

## Recursos

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Plantilla

```js
function getShortMessages(messages) {
  // TU SOLUCIÓN
}

module.exports = getShortMessages;
```
