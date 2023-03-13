const promise = new Promise((resolve, reject) => {
    resolve("aaaa")
    // reject()
})

promise.then(res => {
    console.log("then:", res)
}).catch(err => {
    console.log("err:", err)
}).finally(() => {
    // 无论最终决议是resolve/reject都会执行finally方法中传入的回调函数
    console.log("一定执行")
})