/**
 * @return {Function}
 */
var createHelloWorld = function() {
    const ans="Hello World";
    return function(...args) {
    return ans;
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
