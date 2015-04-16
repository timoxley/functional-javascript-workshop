// Explained:
// The value of `this` in Function.call is the function
// that will be executed.
//
// Bind returns a new function with the value of `this` fixed
// to whatever was passed as its first argument.
//
// Every function 'inherits' from Function.prototype,
// thus every function, including call, apply and bind 
// have the methods call apply and bind.
//
// Function.prototype.call === Function.call
module.exports = Function.call.bind(Array.prototype.slice)
