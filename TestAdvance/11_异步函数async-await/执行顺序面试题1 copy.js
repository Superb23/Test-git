console.log("script start")

setTimeout(() => {
    console.log("setTimeout1")
    new Promise(function (resolve) {
        resolve()
    }).then(function() {
        new Promise(function (resolve) {
            resolve()
        }).then(function () {
            console.log("then4")
        })
        console.log("then2")
    })
})

new Promise(function (resolve) {
    console.log("promise1")
    resolve()
}).then(function () {
    console.log("then1")
})

setTimeout(function () {
    console.log("setTimeout2")
})

console.log(2)

queueMicrotask(() => {
    console.log("queueMicrotask1")
})

new Promise(function (resolve) {
    resolve()
}).then(function () {
    console.log("then3")
})

console.log("script end")

/* 
    JS单线程，宏任务/微任务加入宏任务队列/微任务队列，等待全局上下文执行完毕，微任务队列为空才执行宏任务
*/