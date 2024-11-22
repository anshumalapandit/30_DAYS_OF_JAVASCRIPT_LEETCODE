/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cacval={}
    return function(...args) {
        const val=args
        if(val in cacval){
            return cacval[val];
        }else{
            const result = fn(...args);
            cacval[val]=result;
            return result;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
