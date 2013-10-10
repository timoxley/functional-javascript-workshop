"use strict"

var input = require('../../input')

module.exports = input().wrap(function(input, submission) {
  var New = submission.New
  var Lookup = submission.Lookup
  var Create = submission.Create

  var animal = {
    hungry: true
  }

  var cat = {
    color: 'black'
  }

  var kitten = {
    size: 'small'
  }

  var otherKitten = {
    size: 'small',
    color: 'grey'
  }

  cat.__PROTO__ = animal
  kitten.__PROTO__ = cat
  otherKitten.__PROTO__ = cat

  console.log()
  console.log('Testing Lookup:')
  console.log()
  console.log("Lookup(kitten, 'color')", Lookup(kitten, 'color'))
  console.log("Lookup(otherKitten, 'color')", Lookup(otherKitten, 'color'))
  console.log("Lookup(kitten, 'wings')", Lookup(kitten, 'wings'))
  console.log("Lookup(cat, 'hungry')", Lookup(cat, 'hungry'))
  console.log("Lookup(kitten, 'hungry')", Lookup(kitten, 'hungry'))
  console.log()
  console.log('Changing prototype property...')

  console.log("cat.color = 'blue'")
  cat.color = 'blue'

  console.log("Lookup(kitten, 'color')", Lookup(kitten, 'color'))
  console.log("Lookup(otherKitten, 'color')", Lookup(otherKitten, 'color'))

  console.log()
  console.log('Testing Create:')
  console.log()

  console.log("var cat = Create({color: 'black'})")
  console.log("var otherCat = Create(cat)")
  var cat = Create({color: 'black'})
  var otherCat = Create(cat)

  console.log("Lookup(cat, 'color')", Lookup(cat, 'color'))
  console.log("Lookup(otherCat, 'color')", Lookup(otherCat, 'color'))
  console.log("otherCat.__PROTO__ === cat", otherCat.__PROTO__ === cat)
  
  console.log()
  console.log('Testing New:')
  console.log()

  var rootProto = Object.create(null)

  var Cat = function Cat(color) {
    this.color = color
  }

  Cat.PROTOTYPE = rootProto

  Cat.PROTOTYPE.speak = function() {
    return 'Meow!'
  }
  var Kitten = function Kitten() {
    Cat.apply(this, arguments)
  }

  Kitten.PROTOTYPE = Create(Cat.PROTOTYPE)

  Kitten.PROTOTYPE.speak = function() {
    return 'Mew.'
  }

  console.log("var cat = New(Cat, 'red')")
  var cat = New(Cat, 'red')

  console.log("var kitten = New(Kitten, 'blue')")
  var kitten = New(Kitten, 'blue')

  console.log("Lookup(cat, 'color')", Lookup(cat, 'color'))
  console.log("Lookup(cat, 'speak')()", Lookup(cat, 'speak')())
  console.log("Lookup(kitten, 'color')", Lookup(kitten, 'color'))
  console.log("Lookup(kitten, 'speak')()", Lookup(kitten, 'speak')())
  console.log()
  console.log("Changing Cat prototype to return MEOW from speak()...")

  Cat.PROTOTYPE.speak = function() {
    return 'MEOW.'
  }

  console.log("Lookup(cat, 'speak')()", Lookup(cat, 'speak')())
  console.log("Lookup(kitten, 'speak')()", Lookup(kitten, 'speak')())
  console.log()
  console.log('Testing constructor can return any object...')
  console.log('var Dog = function Dog() { return 3 }')
  var Dog = function Dog() {
    return 3
  }

  console.log("New(Dog)", New(Dog))

  console.log('var Dog = function Dog() { return false }')
  var Dog = function() {
    return false
  }

  console.log("New(Dog)", New(Dog))
  console.log()
  console.log('Ensuring we can access prototype properties in the constructor...')
  console.log("function Cow() { console.log('moo', Lookup(this, 'moo')) } ")

  function Cow() {
    console.log('moo', Lookup(this, 'moo'));
  }

  console.log('Cow.PROTOTYPE.moo = true ')
  Cow.PROTOTYPE = {}
  Cow.PROTOTYPE.moo = true

  console.log('New(Cow)')
  var cow = New(Cow)
})
