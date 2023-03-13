function execCode(counter, successCallback, failureCallback) {
    // 异步任务
    setTimeout(() => {
        if (counter > 0) {
            let total = 0
            for (let i = 0; i < counter; i++) {
                total += i
            }
            // 在某时刻只需要回调传入的函数
            successCallback(total)
        } else {    // 失败情况
            failureCallback(`${counter}值有问题`)
        }
    }, 3000);
}

// ES5之前，处理异步的代码都这样封装
execCode(100, (value) => {
    console.log("本次执行成功", value)
}, (err) => {
    console.log("本次执行失败", err)
})