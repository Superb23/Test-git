/*
    发送第一次网络请求，等待这次网络请求的结果
    发送第二次网络请求，等待这次网络请求的结果
    发送第三次网络请求，等待这次网络请求的结果  
*/

function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url)
        }, 2000);
    })
}

// function getData() {
//     requestData("first").then(res => {
//         console.log(res + "111")
//         return requestData(res + "111")
//     }).then(res => {
//         console.log(res + "222")
//         return requestData(res + "222")
//     }).then(res => {
//         console.log(res + "333")
//     })
// }


// 生成器函数
// function* getData() {
//     const res1 = yield requestData("first")
//     const res2 = yield requestData(res1 + "second")
//     const res3 = yield requestData(res2 + "third")
// }

// const generator = getData()

// generator.next().value.then(res1 => {
//     generator.next(res1).value.then(res2 => {
//         generator.next(res2).value.then(res3 => {
//             console.log(res3)
//         })
//     })
// })





// async/await
async function getData() {
    const res1 = await requestData("first")
    console.log(res1)
    const res2 = await requestData(res1 + "second")
    console.log(res2)
    const res3 = await requestData(res2 + "third")
    console.log(res3)
}

const generator = getData()
