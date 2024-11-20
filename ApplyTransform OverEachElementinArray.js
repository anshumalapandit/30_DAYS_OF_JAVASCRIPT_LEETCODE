/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newarr=[]
    // we will use for each method for iterating
    arr.forEach((value,index)=>{
        newarr.push(fn(value,index))
    })
    return newarr;
};
