var compareStdOut = require('workshopper-exercise/comparestdout')
var deepEqual = require('deep-eql')
var execute = require('workshopper-exercise/execute')
var exerciser = require('workshopper-exercise')
var filecheck = require('workshopper-exercise/filecheck')
var fs = require('fs')
var os = require('os')
var path = require('path')
var util = require('util')

var verbose = true, showInput = true, initFx, wrapUpFx, customFx, wrapperModule

function runner() {
  var exercise = execute(filecheck(exerciser()))
  var input = Array.prototype.slice.call(arguments)
  var submittedFx, __

  exercise.addProcessor(function(mode, callback) {
    __ = exercise.__.bind(exercise)
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

    callback(null, true)
  });

  if (wrapperModule && wrapperModule.path) {
    exercise.addSetup(function setupWrapperModule(mode, callback) {
      var modulePath = wrapperModule.path
      if (wrapperModule.options && wrapperModule.options.localized) {
        var localizedPath = modulePath.replace(/\.\w+$/, '_' + exercise.lang + '$&')
        if (fs.existsSync(path.resolve(process.cwd(), localizedPath))) {
          modulePath = localizedPath
        }
      }
      this.solutionCommand = [ modulePath, this.solution ].concat(this.solutionArgs)
      this.submissionCommand = [ modulePath, this.submission ].concat(this.submissionArgs)

      if (input.length > 0) {
        var file = path.join(os.tmpdir(), path.basename(this.solution)) + '.input.json'
        fs.writeFileSync(file, JSON.stringify(input), { encoding: 'utf-8' })
        exercise.addCleanup(function(mode, pass, callback) {
          fs.unlink(file, callback)
        })
        this.solutionCommand.splice(2, 0, file)
        this.submissionCommand.splice(2, 0, file)
      }
      process.nextTick(callback)
    })

    return compareStdOut(exercise)
  }

  exercise.addProcessor(function(mode, callback) {
    if (initFx) { initFx(); }
    var submittedResult = obtainResult(submittedFx, input)
    if (verbose) {
      if (showInput) {
        var displayInput = input.length === 1 ? input[0] :
          input.map(function(o) { return 'function' === typeof o ? o.toString() : o })
        console.log(__('input'), util.inspect(displayInput, { colors: true }).replace(/,\n\s*/g, ", "))
      }
      console.log(__('submission'), util.inspect(submittedResult, { colors: true }).replace(/,\n\s*/g, ", "))
    }

    if ('run' === mode) {
      return callback(null, true)
    }

    if (initFx) { initFx(); }
    var solutionFx = require(this.solution)
    var solutionResult = obtainResult(solutionFx, input)
    if (verbose) {
      console.log(__('solution'), util.inspect(solutionResult, { colors: true }).replace(/,\n\s*/g, ", "))
    }
    callback(null, deepEqual(submittedResult, solutionResult))
  })

  if (wrapUpFx) {
    exercise.addVerifyProcessor(wrapUpFx)
  }

  return exercise
}

function obtainResult(fx, input) {
  if (customFx) {
    input = [fx].concat(input)
    return customFx.apply(null, input)
  }
  return fx.apply(null, input)
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

runner.wrapWith = function wrapWith(modulePath, options) {
  verbose = false
  wrapperModule = { path: modulePath, options: options }
  return runner.apply(null, Array.prototype.slice.call(arguments, 1))
}

runner.wrapUp = function wrapUp(fx) {
  wrapUpFx = fx
  return runner
}

module.exports = runner
