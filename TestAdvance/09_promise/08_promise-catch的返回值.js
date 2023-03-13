const promise = new Promise((resolve, reject) => {
    reject("aaaaaaaa")
})

// 1.catch方法也会返回一个新的Promise
promise.catch(err => {
    console.log("catch回调:", err)
    return "bbb"
}).then(res => {
    console.log("then的回调:", res)
})

// 2.catch方法的执行时机













// 中断函数继续执行
// 方式一：return
// 方式二：throw new Error()
// 方式三：yield    暂停（暂时性中断）
