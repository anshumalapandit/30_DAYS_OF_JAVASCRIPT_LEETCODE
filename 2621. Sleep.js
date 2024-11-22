/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    // resolve fxn will call after millis second
   await new Promise((res)=>{
       setTimeout(()=>{
           res()
       },millis)
   })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
