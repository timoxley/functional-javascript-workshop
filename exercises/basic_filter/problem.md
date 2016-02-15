# Task
Use Array#filter to write a function called `getShortMessages`.

`getShortMessages` takes an array of objects with 'message' properties and returns an array of messages that are *less than < 50 characters long*.

The function should return an array containing the messages themselves, *without their containing object*.

## Arguments

* messages: an Array of 10 to 100 random objects that look something like this:

```js
{
  message: 'Esse id amet quis eu esse aute officia ipsum.' // random
}
```

## Conditions

* Do not use any for/while loops or Array#forEach.
* Do not create any unnecessary functions e.g. helpers.

## Hint

* Try chaining some Array methods!

## Example

```
[ { message: 'Exercitation irure fugiat anim incididunt sunt duis deserunt laboris.' },
  { message: 'Eiusmod ipsum esse ullamco anim labore tempor eu nostrud commodo consequat consectetur amet.' },
  { message: 'Mollit ea labore do laboris nostrud proident ullamco.' },
  { message: 'Laboris excepteur aliquip ullamco culpa.' },
  { message: 'Culpa minim proident dolor ipsum ullamco est qui non aute aliquip excepteur sunt.' },
  { message: 'Cupidatat duis sit aute pariatur amet sit excepteur cupidatat.' } ]
```

## Resources

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Boilerplate

```js
function getShortMessages(messages) {
  // SOLUTION GOES HERE
}

module.exports = getShortMessages
```
