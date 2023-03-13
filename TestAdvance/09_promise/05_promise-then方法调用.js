const promise = new Promise((resolve, reject) => {
    resolve("success")
    // reject("failure")
})



// 写法一       ------------------推荐
promise.then(res => {
    console.log("回调成功")
}).catch(err => {
    console.log("回调失败")
})
// 写法二
// promise.then(res => {
//     console.log("成功回调")
// }, err => {
//     console.log("失败回调")
// })

// 多个then方法全部会被resolve调用
promise.then(res => {
    console.log("success~")
})
promise.then(res => {
    console.log("success~")
})
promise.then(res => {
    console.log("success~")
})