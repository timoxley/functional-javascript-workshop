/**
 * Created by naor on 10/10/13.
 */
"use strict";

var input = require('../../input');

module.exports = input().wrap(function(input, submission) {

    console.log("Testing Math.max:");
    var max5 = submission(Math.max, 5);
    console.log ("curryN(Math.max, 5)(2)(3)(5)(4)(1) =>", max5(2)(3)(5)(4)(1));
    console.log();

    function trueBool(){
        return true;
    }

    console.log("Testing a function with 0 args:");
    console.log("curryN(trueBool)() =>", submission(trueBool, 0)());
    console.log();

    function strConcat(){
        var args = Array.prototype.slice.call(arguments);
        return Array.prototype.concat.apply([], args).join(" ");
    }

    console.log("Testing strConcat:");
    console.log("curryN(strConcat, 5)('solved')('been')('has')('problem')('This') =>",
        submission(strConcat, 5)('solved')('been')('has')('problem')('This'));
});