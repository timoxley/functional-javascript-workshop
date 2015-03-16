var compareStdOut = require('workshopper-exercise/comparestdout')
var deepEqual = require('deep-eql')
var execute = require('workshopper-exercise/execute')
var exerciser = require('workshopper-exercise')
var filecheck = require('workshopper-exercise/filecheck')
var path = require('path')

var verbose = true, showInput = true, compareDisplays = false, initFx, wrapUpFx, customFx

function runner() {
  var exercise = filecheck(exerciser())
  var input = Array.prototype.slice.call(arguments)
  if (compareDisplays) {
    exercise = compareStdOut(exercise)
  }

  exercise.addProcessor(function(mode, callback) {
    var submittedFx, __ = exercise.__.bind(exercise)
    try {
        submittedFx = require(path.resolve(process.cwd(), this.args[0]));
    } catch (e) {
        var message = (e.code === 'MODULE_NOT_FOUND'
                        ? __('fail.module_not_found')
                        : __('fail.missing_deps'))

        this.emit('fail', message)
        return callback(null, false)
    }

    if (typeof submittedFx !== 'function') {
        this.emit('fail', __('fail.must_export_function'))
        return callback(null, false)
    }
    if (initFx) { initFx(); }
    var submittedResult = obtainResult(submittedFx, input)
    if (verbose) {
      if (showInput) {
        var displayInput = input.length === 1 ? input[0] :
          input.map(function(o) { return 'function' === typeof o ? o.toString() : o })
        console.log(__('input'), displayInput)
      }
      console.log(__('submission'), submittedResult)
    }

    if ('run' === mode) {
      return callback(null, true)
    }

    if (initFx) { initFx(); }
    var solutionFx = require(this.solution)
    var solutionResult = obtainResult(solutionFx, input)
    if (verbose) {
      console.log(__('solution'), solutionResult)
    }
    callback(null, deepEqual(submittedResult, solutionResult))
  })

  if (wrapUpFx) {
    exercise.addVerifyProcessor(wrapUpFx)
  }

  return execute(exercise)
}

function obtainResult(fx, input) {
  if (customFx) {
    input = [fx].concat(input)
    return customFx.apply(null, input)
  }
  return fx.apply(null, input)
}

runner.compareDisplay = function compareDisplay() {
  compareDisplays = true
  return this.quiet.apply(this, arguments)
}

runner.custom = function custom(fx) {
  customFx = fx
  return runner
}

runner.hideInput = function quiet() {
  showInput = false
  return runner.apply(null, arguments)
}

runner.init = function init(fx) {
  initFx = fx
  return runner
}

runner.quiet = function quiet() {
  verbose = false
  return runner.apply(null, arguments)
}

runner.wrapUp = function wrapUp(fx) {
  wrapUpFx = fx
  return runner
}

module.exports = runner
