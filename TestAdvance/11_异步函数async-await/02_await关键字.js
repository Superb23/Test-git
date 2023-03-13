// await关键字必须在异步函数中使用
// 通常，await后面会跟上一个表达式，

// function bar() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(123)
//         }, 2000);
//     })
// }
// async function foo() {

//     // await后续返回一个Promise，那么会等待Promise有结果后，才会执行后续代码
//     const p = await bar()
//     console.log(p)
// }

// foo()



function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(url)
            reject("error")
        }, 2000);
    })
}

async function getData() {
    const res1 = await requestData("url11111")  // 会等待Promise有结果后，才会执行后续代码
    console.log(res1)

    const res2 = await requestData("url222222")
    console.log(res2)
}

getData().catch(err => {
    console.log(err)
})