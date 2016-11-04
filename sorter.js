/*
	tools.js - order();

	====================
	Multi-purpose sorter
	====================

	- Returns a sorted number array

		let n = [ 3, 2, 1, 1.23, -1823, -2, 23, 4 ];
		a.sort(tools.order()); // [ -1823, -2, 1, 1.23, 2, 3, 4, 23 ]

	- Returns an alphabetically sorted array with (if available in the payload) the supplied argument being at zero index.
	Any element starting with a special character provided in the constant below is also considered less important
	and put at the end of the array. The algorithm also ignores any whitespace present within an element in the array.

		let a = [ 'zenit', '*star', '-Artichoke', 'Arsenal', 'Chelsea', ' Alo ha' ];
		a.sort(tools.order('zenit')); // [ 'zenit', ' Alo ha', 'Arsenal', 'Chelsea', '-Artichoke', '*star' ]

	- Returns a sorted array that comprise a mixture of numbers and strings. It puts numbers first. 
	Rules above about the supplied argument and the special characters apply here too.

		let a = [ 3, 'zenit', '*star', 2, '-Artichoke', 45, -127388, 12303, 'Arsenal', 'Chelsea', 1, ' Alo ha', -1 ]
		a.sort(tools.order('zenit')) // [ -127388, -1, 1, 2, 3, 45, 12303, 'zenit', ' Alo ha', 'Arsenal', 'Chelsea', '*star', '-Artichoke' ]
*/

const sC = ['.', ',', '.', '_', '*', '+', '&', '^', '/']; /* add || remove as necessary */

module.exports = {
	order: function (o){
		o = o || [];
		return function(x, y) {
			if(typeof x === "number" && typeof y === "number") {
				if (x < y) return -1; 
				if (y < x) return 1;
			}
			else if(typeof x === "number") return 1;
			else if(typeof y === "number") return 1;

			if (!x && !y) return 0;
			if (!x) return 1; 
			if (!y) return -1;

			var i = o.indexOf(x),  j = o.indexOf(y);

			var ix = -(i+1), jx = -(j+1);
			if (ix && jx) { 
				if (i < j) return -1; 
				if (j < i) return 1;  
				return 0; 
			}
			if (ix) return -1; 
			if (jx) return 1;

			x = x.toLowerCase(); /* normalise case */
			y = y.toLowerCase();

			var fx = x[0], fy = y[0]; /* if first char is special */
			fx = fx.replace(/\s+/g, ''); /* ignore any whitespace */
			fy = fy.replace(/\s+/g, ''); 

			if (sC.contains(fx)) return 1; 
			if (sC.contains(fy)) return -1;
			if (x < y) return -1; 
			if (y < x) return 1;
			return 0;
		};
	}
};

Array.prototype.contains = function(element){ /* contains() Polyfill */
    return this.indexOf(element) > -1;
};