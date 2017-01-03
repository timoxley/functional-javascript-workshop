function curryN(fn, n) {

    if (typeof  n !== 'number') n = fn.length;

    function curriedN(prev) {
        return function () {
            var args = prev.concat(Array.prototype.slice.apply(arguments));
            return (args.length >= n) ? fn.apply(null, args) : curriedN(args);
        };
    }

    return curriedN([]);
}

module.exports = curryN;
