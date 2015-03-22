"use strict"

"use strict"

var path = require('path')
var runner = require('../runner')

module.exports = runner.wrapWith(path.join(__dirname, 'wrapper.js'), { localized: true })
