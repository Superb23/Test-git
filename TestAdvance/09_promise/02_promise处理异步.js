/* 
    Promise，一个类，创建对象时需要传入一个回调函数executor
    回调函数会被立即执行，并传入另外两个回调函数resolve,reject;
    调用resolve回调函数时，会执行promise对象中的then方法传入的回调函数;
    调用reject回调函数时，会执行promise对象中的catch方法传入的回调函数;
    promise统一处理异步代码
*/

function execCode(counter) {
    const promise = new Promise((resolve, reject) => {

        // 异步任务
        setTimeout(() => {
            if (counter > 0) {
                let total = 0
                for (let i = 0; i < counter; i++) {
                    total += i
                }
                // 成功回调
                resolve(total)  // --------------------调用promise.then()
            } else {    // 失败情况
                // 失败回调
                reject(`${counter}值有问题`)    //--------------调用promise.catch()
            }
        }, 3000)
    })

    return promise
}

// 写法一
// const promise = execCode(100)
// // 成功的监听
// promise.then((value) => {
//     console.log("成功了,", value)
// })
// // 失败的监听
// promise.catch((err) => {
//     console.log("失败了,", err)
// })

// 写法二   ---------------------------推荐
execCode(100).then((value) => {
    console.log("成功", value)
}).catch((err) => {
    console.log("失败", err)
})

