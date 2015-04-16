// Explication :
//
// La valeur de `this` dans `Function#call()` est la fonction
// sur laquelle on appelle `call()`.
//
// `bind()` renvoie une nouvelle fonction dont la valeur de
// `this` est définie à ce qu’on lui a passé comme premier argument.
//
// Toute fonction « hérite » `Function.prototype`, et donc toute fonction,
// y compris `call()`, `apply()` et `bind()`, a les méthodes `apply()`
// et `bind()`.
//
// Function.prototype.call === Function.call
module.exports = Function.call.bind(Array.prototype.slice)
