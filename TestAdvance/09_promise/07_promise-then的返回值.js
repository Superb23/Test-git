const promise = new Promise((resolve, reject) => {
    resolve("aaaaaaaa")
    // reject()
})


// then方法返回一个新的promise，链式中的then是在等待这个新的promise有决议之后执行的
// promise.then(res => {
//     console.log("第一个then方法:", res)
//     return "qqqqqqqqqqq"
// }).then(res => {
//     console.log("第二个then方法:", res) // undefined
// }).catch(err => {

// })

// promise.then(res => {
//     console.log("first")
// })


// then方法传入回调函数的返回值类型
const newPromise = new  Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("superb")
    }, 3000);
})

promise.then(res => {
    console.log("第一个promise的then方法", res)
    // return "aaaa"        // 返回普通值，作为下一个then的传入参数
    // return newPromise       // then方法返回一个新的promise，链式中的then是在等待这个新的promise有决议之后执行的
    return {                    // 返回thenable对象，其重写了then方法，下一个then方法将执行该对象的then方法
        then: function(resolve) {
            resolve("thenable")
        }
    }
}).then(res => {
    console.log("第二个promise的then方法", res)
})
