/*
 * This program demonstrates the solution to curry problem
 * using recursive functions and Function.prototype.bind
 */
function curryN(fn, n) {
	var repCount = n || fn.length;
	return function (arg) {
		if(repCount > 1) {
			//testing for 1 as for last agument we
			//call the function directely.
			return curryN(fn.bind(null, arg), repCount - 1);
		} else {
			return fn(arg);
		}
	};
};

module.exports = curryN;


//test
//although function name is add
//it joins the arguments ',' seperated
/*
function add() {
	return Array.prototype.join.call(arguments, ',');
};
curry1 = curryN(add, 4);
curry2 = curry1(1);
curry3 = curry2(2);
curry4 = curry3(3);
console.error(curry4(4));
//this part demonstrates we can change the inner function
//again to generate different set of outputs.
curry3 = curry2(6);
curry4 = curry3(3);
console.error(curry4(5));
*/
//uncomment the multiline comment to run the test case.
