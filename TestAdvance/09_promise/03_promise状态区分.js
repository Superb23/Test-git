const promise = new Promise((resolve, reject) => {
    // 注意：Promise的状态一旦被确定下来，就不会再更改，也不能再执行某一个回调函数来改变状态
    // 1.待定状态pending
    console.log("111111")
    console.log("222222")
    // 2.兑现状态fulfilled
    resolve()
    // 3.拒绝状态rejected
    reject()
})

promise.then((value) => {
    console.log("成功的回调")
}).catch((err) => {
    console.log("失败的回调")
})