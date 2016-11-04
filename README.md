# Multi-purpose sorter module

## Usage 
```js
var sorter = require('./sorter');
myArray.sort(sorter.order());
```

## Examples 

- Returns a sorted number array
    ```js 
        let myArray = [ 3, 2, 1, 1.23, -1823, -2, 23, 4 ];  
        myArray.sort(tools.order()); // [ -1823, -2, 1, 1.23, 2, 3, 4, 23 ]
    ```

- Returns an alphabetically sorted array with (if available in the payload) **the supplied argument being at zero index.**
    * Any element starting with a special character provided in the constant below is also considered less important
    and put at the end of the array. The algorithm also ignores any whitespace present within an element in the array.

    ```js
    let myArray = [ 'zenit', '*star', '-Artichoke', 'Arsenal', 'Chelsea', ' Alo ha' ];
    myArray.sort(tools.order('zenit')); // [ 'zenit', ' Alo ha', 'Arsenal', 'Chelsea', '-Artichoke', '*star' ]
    ```

- Returns a sorted array that comprise a mixture of numbers and strings. It puts numbers first. Rules above about the supplied argument and the special characters apply here too.

    ```js
    let myArray = [ 3, 'zenit', '*star', 2, '-Artichoke', 45, -127388, 12303, 'Arsenal', 'Chelsea', 1, ' Alo ha', -1 ]
    myArray.sort(tools.order('zenit')) // [ -127388, -1, 1, 2, 3, 45, 12303, 'zenit', ' Alo ha', 'Arsenal', 'Chelsea', '*star', '-Artichoke' ]
    ```