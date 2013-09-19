#!/usr/bin/env node

"use strict"

var Workshopper = require('workshopper')
var path = require('path')

Workshopper({
    name   : 'functional-javascript'
  , title  : 'FUNCTIONAL JAVASCRIPT IS GOOD'
  , appDir : path.join(__dirname)
}).init()
