// 实例方法
// const promise = new Promise((resolve, reject) => {

// })
// promise.catch()



// 类方法
// Promise.resolve("hello world").then(res => {
//     console.log(res)
// })
// // 相当于
// new Promise((resolve, reject) => {
//     resolve("hello world")
// }).then(res => {
//     console.log(res)
// })


// 1.all方法  缺陷：当其中有一个Promise变成reject状态时，新Promise就会立即变成对应的reject状态
// 创建三个Promise对象
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p1 resolve")
        reject("p1 err")
    }, 3000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p2 resolve")
        reject("p2 err")
    }, 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 resolve")
        // reject("p3 err")
    }, 4000);
})

// 等三个promise对象都有结果后，通过all返回结果
// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

// 2.allsettled   会在所有Promise都有结果，无论fulfilled/rejected，才会最终状态
// 返回对象 -----包含status状态，以及对应的value值
// Promise.allSettled([p1, p2, p3]).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })


// 3.race     会在有一个Promise有结果(无论fulfilled/rejected)，就决定Promise的状态
// Promise.race([p1, p2, p3]).then(res => {
//     console.log("race Promise:", res)
// }).catch(err => {
//     console.log("err")
// })


// 4.any    会等到一个fulfilled状态，才决定Promise的状态
// 如果所有的Promise都是rejected状态，会等到所有的Promise都变成rejected状态
Promise.any([p1, p2, p3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
