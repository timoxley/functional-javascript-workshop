# Tarea

**Usa `Function#bind`** para implementar una función que imprima y te permita crear un `namespace` para los mensajes.

Tu implementación debería tomar un `string` como `namespace`, y devolver una función que imprima el mensaje a la consola con el `namespace` como prefijo.

Asegurate que _todos_ los argumentos pasados a la función que retornes sean impresos.

**Imprime los argumentos directamente en la consola**

## Argumentos

- `namespace`: Un `string` que será el sufijo a cada mensaje enviado a la función retornada.

## Ejemplo

```js
var info = logger("INFO:");
info("este es un mensaje informativo");
// INFO: este es un mensaje informativo

var warn = logger("AVISO:");
warn("este es un aviso", "con mas información");
// AVISO: este es un aviso con mas información
```

## Condiciones

- Usa `Function#bind`.

## Plantilla

```js
module.exports = function(namespace) {
  // TU SOLUCIÓN
};
```

## Recursos

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
