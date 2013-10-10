"use strict";

module.exports = function (fn, n){
    var args = [];
    return function currify(value){
        n--;
        args = [value].concat(args);
        if (n > 0){
            return currify;
        } else {
            return fn.apply(null, args);
        }
    }
};