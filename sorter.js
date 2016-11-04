/*
	sorter.js - order();
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