// Explicado: El valor de `this`
//  en `Function.call` es la
//  función que será ejecutada.

// `Bind` se refiere a la
// nueva función que sera ejecutada
// con el valor de `this` cambiada a
// lo que sea que se paso como primer argumento`

// Toda función "hereda" de `Function.prototype`,
// por ende toda función, incluyendo `call`, `apply`
// y `bind` tienen los métodos `call`, `apply` y `bind.

// Function.prototype.call === Function.call
module.exports = Function.call.bind(Array.prototype.slice);
