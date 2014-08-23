"use strict"

var input = require('../../input')
var lorem = require('lorem-ipsum')

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

//http://stackoverflow.com/a/2450976/1011470
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function makeArrayOfInts(length, start) {
  var result = [];

  start = start || 0;

  if (length > 0) {
    while(result.push(result.length + start) < length);
  } 

  return result;
}

module.exports = input(shuffle(makeArrayOfInts(randomInt(10, 20), randomInt(1, 10000)))
.map(function(currentValue) {
  return {
    id: currentValue,
    name: lorem().split(' ').slice(0, 2).map(function(word) {word[0] = word[0].toUpperCase(); return word;}).join(' ')
  }
})).wrap(function(input, mod) {

  var assert = require('assert')
  var inspect = require('util').inspect

  var users = input[0]
  var ids = users.map(function(user) {return user.id})
  var load = function(id, fn) {
    setTimeout(function() {
      var match = users.filter(function(user) {return user.id === id})
      if (match.length) fn(match[0])
      else fn(null)
    }, Math.floor(Math.random() * 1000))
  }
  var done = function(submittedUsers) {
    clearTimeout(tooLong)
    console.log(submittedUsers)

    assert.deepEqual(submittedUsers, users, 'expected: \n' + inspect(users) + '\n but got: \n'+ inspect(submittedUsers))

    console.log('All %d users loaded!', submittedUsers.length)
  }

  mod.call(mod, ids, load, done)
  var tooLong = setTimeout(function() {
    throw new Error('Took too long!')
  }, 1000)
})
