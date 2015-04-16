The boilerplate includes a definition of `repeat`. `repeat` will take a Function operation, and a Number num, and invoke operation num times:

```js
var count = 0
repeat(function() {
  count++
}, 100)

console.log('executed %d times.', count)
// => executed 100 times.
```

BUT note that executing `repeat` with a large `num` causes a stack overflow:

```
var count = 0
repeat(function() {
  count++
}, 100000)

console.log('executed %d times', count)
// => RangeError: Maximum call stack size exceeded
```

# Task

Modify the boilerplate below such that it uses a trampoline to continuously call itself synchronously.

You can assume that the operation passed to repeat does not take arguments (or they are already bound to the function) and the return value is not important.

## Conditions

* Do not change the implementation of repeat to include any loops
(you may change it in other ways though).

## Hints

* Modify `repeat` so it returns the 'next step', if there is one.
* A trampoline continues to synchronously execute steps, getting new steps, until there are no more steps. You can use a loop here!
* If your program takes a long time to run, something is probably wrong.  Use Control - C to kill the node process.

## Boilerplate

```js
function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return repeat(operation, num)
}
```
