console.log("script start")     //1

setTimeout(() => {
    console.log("setTimeout1")     //8
    new Promise(function (resolve) {
        resolve()
    }).then(function() {
        new Promise(function (resolve) {
            resolve()
        }).then(function () {
            console.log("then4")     //10
        })
        console.log("then2")     //9
    })
})

new Promise(function (resolve) {
    console.log("promise1")     //2
    resolve()
}).then(function () {
    console.log("then1")     //5
})

setTimeout(function () {
    console.log("setTimeout2")     //11
})

console.log(2)     //3

queueMicrotask(() => {
    console.log("queueMicrotask1")     //6
})

new Promise(function (resolve) {
    resolve()
}).then(function () {
    console.log("then3")     //7
})

console.log("script end")     //4

/* 
    JS单线程，宏任务/微任务加入宏任务队列/微任务队列，等待全局上下文执行完毕，微任务队列为空才执行宏任务
*/