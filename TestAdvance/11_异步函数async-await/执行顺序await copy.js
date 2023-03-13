console.log("script start")

function requestData(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("setTimeout1")
            resolve(url)
        }, 2000);
    })
}

// 1.promise在调用then调度
function getData() {
    console.log("getData start")
    requestData("url").then(res => {
        console.log("then:", res)
    })
    console.log("getData end")
}

getData()

console.log("script end")







console.log("script start")     //1

function requestData(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("setTimeout1")     //4
            resolve(url)
        }, 2000);
    })
}

// 2.await/async
async function getData() {
    console.log("getData start")     //2
    const res = await requestData("url")        // await会等待Promise有结果，再执行后续代码

    // 放入微任务队列
    console.log("then:", res)     //5
    console.log("getData end")     //6
}

getData()

console.log("script end")     //3

// await会等待Promise有结果，再执行后续代码；异步函数后续代码会被放入微任务队列