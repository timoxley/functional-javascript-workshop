"use strict"

var path = require('path')
var random = require('../randomizer')
var runner = require('../runner')

var input = random.arrayOfLorems(1, 20)

module.exports = runner.wrapWith(path.join(__dirname, 'wrapper.js'), input)
