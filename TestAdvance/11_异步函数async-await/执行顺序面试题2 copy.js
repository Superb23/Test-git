
console.log("script start")

async function async1() {
    console.log("async1 start")
    await async2()      // 立即执行async2()，等待Promise结果，但是async2()返回的是undefined，后续代码放入微任务队列
    console.log("async1 end")
}

async function async2() {
    console.log("async2")
}

setTimeout(() => {
    console.log("setTimeout")
}, 0);

async1()

new Promise(resolve => {
    console.log("promise1")
    resolve()
}).then(() => {
    console.log("promise2")
})

console.log("script end")